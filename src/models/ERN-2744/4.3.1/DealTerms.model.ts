import type {CommercialModelType} from "./CommercialModelType.enum.ts";
import {UseType} from "./UseType.enum.ts";
import type {ValidityPeriod} from "./ValidityPeriod.model.ts";
import type {PriceInformation} from "./PriceInformation.model.ts";

export interface DealTerms {
    DealTerms: {
        CommercialModelType: CommercialModelType[] | CommercialModelType;
        TerritoryCode: string;
        UseType: UseType[];
        ValidityPeriod: ValidityPeriod;
        PriceInformation?: PriceInformation;
    }
}