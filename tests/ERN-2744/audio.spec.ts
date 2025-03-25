import {xml2json} from "../../src/lib/xml2json.ts";
import {fileContent} from "../../src/lib/fs.ts";
import {describe, expect, it} from "vitest";
import type {NewReleaseMessageType} from "../../src/models/ddex.net/xml/ern/431";

const audioXml = fileContent("./samples/ERN-2744 - ERN 4.3.1/1 Audio.xml");
const json = await xml2json<NewReleaseMessageType>(audioXml, "src/models/ddex.net/xml/ern/431.d.ts");

describe("ERN-2744", () => {
    it("Correctly converts to format", () => {
        expect(json).toMatchSnapshot();
        expect(json.ReleaseList.TrackRelease?.every(t => t.DisplayTitle?.every(d => typeof d.TitleText === "string"))).toBe(true);
    })
})