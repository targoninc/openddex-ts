import type {DealTerms} from "./DealTerms.model.ts";

export interface ReleaseDeal {
    Deal: DealTerms[] | DealTerms;
    DealReleaseReference: string[] | string;
}