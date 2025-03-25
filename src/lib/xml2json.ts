import X2JS from "x2js";

const x2js = new X2JS();

export function xml2json(xml: string) {
    return x2js.xml2js(xml);
}