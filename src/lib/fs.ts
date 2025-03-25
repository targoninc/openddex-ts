import * as fs from "node:fs";

export function fileContent(path: string): string {
    return fs.readFileSync(path).toString();
}