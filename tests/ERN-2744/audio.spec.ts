import {test, expect, describe} from "vitest";
import {xml2json} from "../../src/lib/xml2json.ts";
import {fileContent} from "../../src/lib/fs.ts";

const audioXml = fileContent("./samples/ERN-2744 - ERN 4.3.1/1 Audio.xml");

describe("ERN-2744 - Audio", () => {
    test('Converts XML to JSON', () => {
        const json = xml2json(audioXml);

        expect(json).toMatchSnapshot();
    });
})
