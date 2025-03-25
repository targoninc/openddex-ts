import type {ReleaseDeal} from "./ReleaseDeal.model.ts";

export interface NewReleaseMessage {
    DealList: {
        ReleaseDeal: ReleaseDeal[];
    }
}