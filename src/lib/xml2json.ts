import {parseStringPromise} from "xml2js";
import type {BaseType} from "../models/ddex.net/xml/ern/431";
import {fileContent} from "./fs.ts";

const primitiveTypes = ['string', 'number', 'boolean', 'Date'];

export async function xml2json<T extends BaseType>(xml: string, tsDefinitionPath?: string): Promise<T> {
    const obj = await parseStringPromise(xml, {
        explicitArray: true
    });
    const firstKey = Object.keys(obj)[0] as any;
    return matchToTsDefinition(obj[firstKey], tsDefinitionPath);
}

export async function matchToTsDefinition(obj: any, tsDefinitionPath?: string): Promise<any> {
    if (!tsDefinitionPath) {
        return obj;
    }

    const tsDefinition = fileContent(tsDefinitionPath);
    const lines = tsDefinition.split('\n');
    const removeLinesWith = ["interface", "export", "/**"];
    const removeRegex = new RegExp(/[\t\s;]+/gm);
    const typeDefinitions = lines.filter(l => l.includes(':') && !removeLinesWith.some(l2 => l.includes(l2)))
        .map(l => l.replace(removeRegex, ''))
        .reduce((prev, curr) => {
            if (!prev.find(e => e.includes(curr))) {
                prev.push(curr);
            }
            return prev;
        }, [] as string[]);
    return processPropertyWithTypeDefinition("_______", obj, typeDefinitions);
}

export function processPropertyWithTypeDefinition(key: string, value: any, typeDefinitions: string[]): any {
    const line = typeDefinitions.find(l => l.startsWith(key));
    if (line) {
        const [name, type] = line.split(':');
        if (name && type) {
            // Process type

            if (primitiveTypes.includes(type) && Array.isArray(value)) {
                return value[0];
            }
        }
    }

    switch (typeof value) {
        case "object":
            if (Array.isArray(value)) {
                return value.map((item: any) => processPropertyWithTypeDefinition(key, item, typeDefinitions)) as any;
            } else {
                const newObj: any = {};
                for (const key in value) {
                    newObj[key] = processPropertyWithTypeDefinition(key, value[key], typeDefinitions);
                }
                return newObj;
            }
        default:
            return value;
    }
}