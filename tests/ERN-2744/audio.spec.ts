import {test, expect, describe} from "vitest";
import {xml2json} from "../../src/lib/xml2json.ts";
import {fileContent} from "../../src/lib/fs.ts";
import type {NewReleaseMessage} from "../../src/models/ERN-2744/4.3.1/NewReleaseMessage.model.ts";

const audioXml = fileContent("./samples/ERN-2744 - ERN 4.3.1/1 Audio.xml");
const json = xml2json(audioXml) as { NewReleaseMessage: NewReleaseMessage };

describe("ERN-2744 - Audio", () => {
    test("Converts XML to JSON", () => {
        expect(json).toMatchSnapshot();
    });
})
