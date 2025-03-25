import * as Primitive from '../../xml-primitives';

// Source files:
// http://ddex.net/xml/allowed-value-sets/allowed-value-sets.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
/** An activity. */
export type Activity = ("Afraid" | "Angst" | "BBQ" | "BibleStudy" | "BirthdayParty" | "Breakdown" | "Breakup" | "Breathe" | "Celebration" | "Cry" | "Dance" | "Dating" | "Daydream" | "Defeat" | "Dinner" | "Drink" | "Drive" | "Eat" | "Fight" | "Flirt" | "Focus" | "Funeral" | "HangOut" | "Honeymoon" | "Jump" | "Karaoke" | "Lazy" | "Leave" | "MakingLove" | "Meditation" | "Mourning" | "Party" | "Prayer" | "Regret" | "Relax" | "RoadTrip" | "Run" | "Travel" | "UserDefined" | "Victory" | "Wait" | "Waking" | "Walk" | "Wedding" | "Wish" | "Work" | "Workout" | "Worship" | "Yoga");
interface _Activity extends Primitive._string { content: Activity; }

/** A Role played by a Contributor. */
export type AdditionalContributorRole = "Mime";
interface _AdditionalContributorRole extends Primitive._string { content: AdditionalContributorRole; }

/** A Status of a RightsClaim. */
export type AdditionalRightsClaimStatus = "Accepted";
interface _AdditionalRightsClaimStatus extends Primitive._string { content: AdditionalRightsClaimStatus; }

/** A Type of AdditionalTitle. */
export type AdditionalTitleType = ("AlternativeTitle" | "FormalTitle" | "GroupingTitle" | "MusicalWorkTitle" | "OriginalTitle" | "TranslatedTitle" | "TransliteratedTitle" | "UserDefined");
interface _AdditionalTitleType extends Primitive._string { content: AdditionalTitleType; }

/** A Type of Video. */
export type AdditionalVideoType = ("Drama" | "DramaticoMusicalVideo" | "InteractiveResource" | "ShortFormMusicalWorkVideo" | "ShortFormNonMusicalWorkVideo" | "UserDefined" | "WebResource");
interface _AdditionalVideoType extends Primitive._string { content: AdditionalVideoType; }

/** A Role played by a Party responsible for administering Rights in a Resource or a Release. */
export type AdministratingRecordCompanyRole = ("DesignatedDsrMessageRecipient" | "RightsAdministrator" | "RoyaltyAdministrator" | "Unknown" | "UserDefined");
interface _AdministratingRecordCompanyRole extends Primitive._string { content: AdministratingRecordCompanyRole; }

/** A Type of an affiliated Party. */
export type AffiliationType = ("MusicLicensingCompany" | "MusicPublisher" | "MusicRightsSociety" | "RecordCompany" | "UserDefined");
interface _AffiliationType extends Primitive._string { content: AffiliationType; }

/** A code representing a Territory. This includes ISO 3166-1 two-letter codes and selected ISO 3166-2 codes, plus a code for Worldwide. It also includes deprecated ISO codes defined in ISO 3166-3. */
export type AllIsoTerritoryCode = ("AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CS" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ES-CE" | "ES-CN" | "ES-ML" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW" | "XK" | "Worldwide" | "AIDJ" | "ANHH" | "BQAQ" | "BUMM" | "BYAA" | "CSHH" | "CSXX" | "CTKI" | "DDDE" | "DYBJ" | "FQHH" | "FXFR" | "GEHH" | "HVBF" | "JTUM" | "MIUM" | "NHVU" | "NQAQ" | "NTHH" | "PCHH" | "PUUM" | "PZPA" | "RHZW" | "SKIN" | "SUHH" | "TPTL" | "VDVN" | "WKUM" | "YDYE" | "YUCS" | "ZRCD");
interface _AllIsoTerritoryCode extends Primitive._string { content: AllIsoTerritoryCode; }

/** A code representing a Territory. This includes ISO 3166-1 two-letter codes and selected ISO 3166-2 codes, CISAC TIS codes, plus a code for Worldwide. It also includes deprecated ISO codes defined in ISO 3166-3. */
export type AllTerritoryCode = ("AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CS" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ES-CE" | "ES-CN" | "ES-ML" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW" | "4" | "8" | "12" | "20" | "24" | "28" | "31" | "32" | "36" | "40" | "44" | "48" | "50" | "51" | "52" | "56" | "64" | "68" | "70" | "72" | "76" | "84" | "90" | "96" | "100" | "104" | "108" | "112" | "116" | "120" | "124" | "132" | "140" | "144" | "148" | "152" | "156" | "158" | "170" | "174" | "178" | "180" | "188" | "191" | "192" | "196" | "200" | "203" | "204" | "208" | "212" | "214" | "218" | "222" | "226" | "230" | "231" | "232" | "233" | "242" | "246" | "250" | "258" | "262" | "266" | "268" | "270" | "276" | "278" | "280" | "288" | "296" | "300" | "308" | "320" | "324" | "328" | "332" | "336" | "340" | "344" | "348" | "352" | "356" | "360" | "364" | "368" | "372" | "376" | "380" | "384" | "388" | "392" | "398" | "400" | "404" | "408" | "410" | "414" | "417" | "418" | "422" | "426" | "428" | "430" | "434" | "438" | "440" | "442" | "446" | "450" | "454" | "458" | "462" | "466" | "470" | "478" | "480" | "484" | "492" | "496" | "498" | "499" | "504" | "508" | "512" | "516" | "520" | "524" | "528" | "540" | "548" | "554" | "558" | "562" | "566" | "578" | "583" | "584" | "585" | "586" | "591" | "598" | "600" | "604" | "608" | "616" | "620" | "624" | "626" | "630" | "634" | "642" | "643" | "646" | "659" | "662" | "670" | "674" | "678" | "682" | "686" | "688" | "690" | "694" | "702" | "703" | "704" | "705" | "706" | "710" | "716" | "720" | "724" | "728" | "729" | "732" | "736" | "740" | "748" | "752" | "756" | "760" | "762" | "764" | "768" | "776" | "780" | "784" | "788" | "792" | "795" | "798" | "800" | "804" | "807" | "810" | "818" | "826" | "834" | "840" | "854" | "858" | "860" | "862" | "882" | "886" | "887" | "890" | "891" | "894" | "2100" | "2101" | "2102" | "2103" | "2104" | "2105" | "2106" | "2107" | "2108" | "2109" | "2110" | "2111" | "2112" | "2113" | "2114" | "2115" | "2116" | "2117" | "2118" | "2119" | "2120" | "2121" | "2122" | "2123" | "2124" | "2125" | "2126" | "2127" | "2128" | "2129" | "2130" | "2131" | "2132" | "2133" | "2134" | "2136" | "XK" | "Worldwide" | "AIDJ" | "ANHH" | "BQAQ" | "BUMM" | "BYAA" | "CSHH" | "CSXX" | "CTKI" | "DDDE" | "DYBJ" | "FQHH" | "FXFR" | "GEHH" | "HVBF" | "JTUM" | "MIUM" | "NHVU" | "NQAQ" | "NTHH" | "PCHH" | "PUUM" | "PZPA" | "RHZW" | "SKIN" | "SUHH" | "TPTL" | "VDVN" | "WKUM" | "YDYE" | "YUCS" | "ZRCD");
interface _AllTerritoryCode extends Primitive._string { content: AllTerritoryCode; }

/** A code representing a Territory. This includes ISO 3166-1 two-letter codes and selected ISO 3166-2 codes, CISAC TIS codes. It also includes deprecated ISO codes defined in ISO 3166-3. */
export type AllTerritoryCodeNoWorldwide = ("AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CS" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ES-CE" | "ES-CN" | "ES-ML" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW" | "4" | "8" | "12" | "20" | "24" | "28" | "31" | "32" | "36" | "40" | "44" | "48" | "50" | "51" | "52" | "56" | "64" | "68" | "70" | "72" | "76" | "84" | "90" | "96" | "100" | "104" | "108" | "112" | "116" | "120" | "124" | "132" | "140" | "144" | "148" | "152" | "156" | "158" | "170" | "174" | "178" | "180" | "188" | "191" | "192" | "196" | "200" | "203" | "204" | "208" | "212" | "214" | "218" | "222" | "226" | "230" | "231" | "232" | "233" | "242" | "246" | "250" | "258" | "262" | "266" | "268" | "270" | "276" | "278" | "280" | "288" | "296" | "300" | "308" | "320" | "324" | "328" | "332" | "336" | "340" | "344" | "348" | "352" | "356" | "360" | "364" | "368" | "372" | "376" | "380" | "384" | "388" | "392" | "398" | "400" | "404" | "408" | "410" | "414" | "417" | "418" | "422" | "426" | "428" | "430" | "434" | "438" | "440" | "442" | "446" | "450" | "454" | "458" | "462" | "466" | "470" | "478" | "480" | "484" | "492" | "496" | "498" | "499" | "504" | "508" | "512" | "516" | "520" | "524" | "528" | "540" | "548" | "554" | "558" | "562" | "566" | "578" | "583" | "584" | "585" | "586" | "591" | "598" | "600" | "604" | "608" | "616" | "620" | "624" | "626" | "630" | "634" | "642" | "643" | "646" | "659" | "662" | "670" | "674" | "678" | "682" | "686" | "688" | "690" | "694" | "702" | "703" | "704" | "705" | "706" | "710" | "716" | "720" | "724" | "728" | "729" | "732" | "736" | "740" | "748" | "752" | "756" | "760" | "762" | "764" | "768" | "776" | "780" | "784" | "788" | "792" | "795" | "798" | "800" | "804" | "807" | "810" | "818" | "826" | "834" | "840" | "854" | "858" | "860" | "862" | "882" | "886" | "887" | "890" | "891" | "894" | "2100" | "2101" | "2102" | "2103" | "2104" | "2105" | "2106" | "2107" | "2108" | "2109" | "2110" | "2111" | "2112" | "2113" | "2114" | "2115" | "2116" | "2117" | "2118" | "2119" | "2120" | "2121" | "2122" | "2123" | "2124" | "2125" | "2126" | "2127" | "2128" | "2129" | "2130" | "2131" | "2132" | "2133" | "2134" | "2136" | "XK" | "AIDJ" | "ANHH" | "BQAQ" | "BUMM" | "BYAA" | "CSHH" | "CSXX" | "CTKI" | "DDDE" | "DYBJ" | "FQHH" | "FXFR" | "GEHH" | "HVBF" | "JTUM" | "MIUM" | "NHVU" | "NQAQ" | "NTHH" | "PCHH" | "PUUM" | "PZPA" | "RHZW" | "SKIN" | "SUHH" | "TPTL" | "VDVN" | "WKUM" | "YDYE" | "YUCS" | "ZRCD");
interface _AllTerritoryCodeNoWorldwide extends Primitive._string { content: AllTerritoryCodeNoWorldwide; }

/** A Status for a response to an anomaly report. */
export type ArAcknowledgementStatus = ("Acknowledged" | "Confirmed" | "NotSuspicious" | "Suspicious" | "UserDefined");
interface _ArAcknowledgementStatus extends Primitive._string { content: ArAcknowledgementStatus; }

/** A Type of action that is planned. */
export type ArActionType = ("AccountDisabled" | "AccountRemoved" | "AccountToBeRemoved" | "AnomalyAdjusted" | "AnomalyNotReported" | "AnomalyReported" | "Monitor" | "PaymentMade" | "PaymentWithheld" | "UserDefined");
interface _ArActionType extends Primitive._string { content: ArActionType; }

/** A Type of Message in the Release Notification Message Suite Standard. */
export type ArMessageType = "ConsumerEngagementAnomalyReport";
interface _ArMessageType extends Primitive._string { content: ArMessageType; }

/** A Role of a principal Contributor in relation to a Performance or a Fixation. */
export type ArtistRole = ("ArtCopyist" | "Calligrapher" | "Cartographer" | "Cartoonist" | "ComputerGraphicCreator" | "ComputerProgrammer" | "Delineator" | "Designer" | "Draughtsman" | "Facsimilist" | "GraphicArtist" | "Illustrator" | "MusicCopyist" | "NotSpecified" | "Painter" | "Photographer" | "TypeDesigner" | "Unknown" | "UserDefined");
interface _ArtistRole extends Primitive._string { content: ArtistRole; }

/** A Type of Artist. */
export type ArtistType = ("ACappellaEnsemble" | "BarbershopEnsemble" | "BigBand" | "BrassBand" | "ChamberOrchestra" | "CountryGroup" | "Duet" | "ElectronicGroup" | "FifeAndDrumCorps" | "FolkGroup" | "InstrumentAndAccompaniment" | "JazzCombo" | "LatinGroup" | "MarchingBand" | "MariachiBand" | "Orchestra" | "PianoEnsemble" | "PianoTrio" | "PianoQuartet" | "PianoQuintet" | "PipeAndDrumGroup" | "PopBand" | "ReggaeBand" | "RockBand" | "SoloInstrument" | "SoloVoice" | "StringEnsemble" | "StringQuartet" | "StringQuintet" | "Trio" | "UserDefined" | "VoiceAndAccompaniment" | "WindEnsemble");
interface _ArtistType extends Primitive._string { content: ArtistType; }

/** A Type of AspectRatio. */
export type AspectRatioType = ("DAR" | "PAR" | "SAR");
interface _AspectRatioType extends Primitive._string { content: AspectRatioType; }

/** A Type of an Asserter. */
export type AsserterType = ("CollectionSociety" | "InterestedPublisher" | "MusicLicensingCompany" | "Publisher" | "RecordCompanyWithInterestInResource" | "ThirdParty");
interface _AsserterType extends Primitive._string { content: AsserterType; }

/** An Assertion Status of a Resource. */
export type AssertionStatus = "Verified";
interface _AssertionStatus extends Primitive._string { content: AssertionStatus; }

/** A Type of AudioCodec. */
export type AudioCodecType = ("AAC" | "AC-4" | "DolbyAtmosMasterADM" | "ADPCM" | "ALaw" | "AMR" | "AMR-NB" | "AMR-WB" | "DolbyDigitalPlus" | "FLAC" | "MP" | "MP2" | "MP3" | "MPEG-H_3D" | "MQA" | "MuLaw" | "PCM" | "PDM" | "QCELP" | "RealAudio" | "Shockwave" | "Unknown" | "UserDefined" | "Vorbis" | "WMA");
interface _AudioCodecType extends Primitive._string { content: AudioCodecType; }

/** A Type of an AudioVisualResource with respect to its content. */
export type AudioVisualType = ("AdultContent" | "AdvertisementVideo" | "AdviceMagazine" | "Animation" | "BalletVideo" | "BehindTheScenes" | "BlackAndWhiteVideo" | "ChildrensFilm" | "ColorizedVideo" | "ColumnVideo" | "ConcertClip" | "ConcertVideo" | "CorporateFilm" | "Credits" | "DramaticoMusicalVideo" | "Documentary" | "EducationalVideo" | "FeatureFilm" | "Fiction" | "InfomercialVideo" | "InteractiveResource" | "Interview" | "Karaoke" | "LiveEventVideo" | "LongFormMusicalWorkVideo" | "LongFormNonMusicalWorkVideo" | "LyricVideo" | "Magazine" | "Menu" | "MiniSeries" | "MultimediaVideo" | "MusicalWorkClip" | "MusicalWorkReadalongVideo" | "MusicalWorkTrailer" | "MusicalWorkVideoChapter" | "News" | "NonMusicalWorkClip" | "NonMusicalWorkReadalongVideo" | "NonMusicalWorkTrailer" | "NonMusicalWorkVideoChapter" | "OperaVideo" | "Performance" | "ReadalongVideo" | "RealityTvShowVideo" | "Series" | "ShortFilm" | "ShortFormMusicalWorkVideo" | "ShortFormNonMusicalWorkVideo" | "SilentVideo" | "SketchVideo" | "SoapSitcom" | "SpecialEvent" | "SpecialTopic" | "Sport" | "TheatricalWorkVideo" | "TrailerVideo" | "TvFilm" | "TvProgram" | "TvShowVideo" | "Unknown" | "UserDefined" | "VideoChapter" | "VideoClip" | "VideoReport" | "VideoStem" | "WebResource");
interface _AudioVisualType extends Primitive._string { content: AudioVisualType; }

/** A basis used for calculating a Revenue Allocation. */
export type BasisForRevenueAllocation = ("FullCensus" | "FullUsageLog" | "MarketShare" | "Proxy" | "SalesFigures" | "SampleCensus" | "SampleUsageLog" | "UnitMultipliedByDuration" | "UserDefined");
interface _BasisForRevenueAllocation extends Primitive._string { content: BasisForRevenueAllocation; }

/** A Format of a fingerprint. */
export type BinaryDataType = ("Binary64" | "HexBinary");
interface _BinaryDataType extends Primitive._string { content: BinaryDataType; }

/** A Type of blockchain. */
export type Blockchain = ("Ethereum" | "UserDefined");
interface _Blockchain extends Primitive._string { content: Blockchain; }

/** A business-related Role played by a Contributor in relation to a MusicalWork. */
export type BusinessMusicalWorkContributorRole = ("BookPublisher" | "CopyrightClaimant" | "CopyrightHolder" | "MusicPublisher" | "NewspaperPublisher" | "OriginalPublisher" | "PeriodicalPublisher" | "SubPublisher" | "SubstitutedPublisher" | "Unknown" | "UserDefined");
interface _BusinessMusicalWorkContributorRole extends Primitive._string { content: BusinessMusicalWorkContributorRole; }

/** A Type of Carrier used for a Fixation. */
export type CarrierType = ("12InchDiscoSingleRemix" | "33rpm10InchLP" | "33rpm10InchSingle" | "33rpm12InchLP" | "33rpm12InchLp20Tracks" | "33rpm12InchMaxiSingle" | "33rpm12InchSingle" | "33rpm7InchLP" | "33rpm7InchSingle" | "45rpm10InchLP" | "45rpm10InchMaxiSingle" | "45rpm10InchSingle" | "45rpm12InchLP" | "45rpm12InchMaxiSingle" | "45rpm12InchSingle" | "45rpm7InchEP" | "45rpm7InchSingle" | "7InchMaxiSingleRemix" | "BluRay" | "CD" | "CdCompilation" | "CdEp" | "CdEpEnhanced" | "CdExtraCompilation" | "CdExtraEP" | "CdExtraLP" | "CdExtraMaxiRemix" | "CdExtraMaxiSingle" | "CdExtraSingle" | "CdExtraSingle2Tracks" | "CdLp" | "CdLp5Inch" | "CdLpEnhanced" | "CdLpPlusCdVideo" | "CdLpPlusDvdAudio" | "CdLpPlusDvdVideo" | "CdLpPlusWeb" | "CdMaxiSingle" | "CdMaxiSingle3Inch" | "CdMaxiSingleEnhanced" | "CdMaxiSingleRemix" | "CdPlusCdBonus" | "CdPlusDvdBonus" | "CdRom" | "CdSingle" | "CdSingle3Inch" | "CdSingle5Inch" | "CdVideo5LpNTSC" | "CdVideo5LpPAL" | "CdVideoAudioCompatible" | "CombiPack" | "DCC" | "DccCompilation" | "DualDisc" | "DVD" | "DvdAudio" | "DvdAudio5MaxiSingle" | "DvdAudioLP" | "DvdAudioSingle" | "DvdRom" | "DvdSingle" | "DvdVideo" | "DvdVideo5MaxiSingleNTSC" | "DvdVideo5MaxiSinglePAL" | "DvdVideo5SingleNTSC" | "DvdVideo5SinglePAL" | "DvdVideoLpNTSC" | "DvdVideoLpPAL" | "DvdVideoLpPlusCdLpOrCdSingle" | "FanPack" | "FileSystem" | "HdDvdVideoLp" | "LaserDiscLp12InchNTSC" | "LpCompIdenticalToCdComp" | "LpCompilation" | "LpIdenticalToCD" | "MC" | "McCompIdenticalToCdComp" | "McCompilation" | "McDoubleLP" | "McEP" | "McIdenticalToCD" | "McLP" | "McMaxiSingle" | "McRemix" | "McSingle" | "McSingleIdenticalToCDS" | "MemoryDevice" | "MemoryDeviceAudioLP" | "MemoryDeviceMixLP" | "MemoryDeviceVideoLP" | "Merchandise" | "MiniDisc" | "MiniDiscCompilation" | "MiniDiscEP" | "MiniDiscMaxiRemix" | "MiniDiscSingleMaxiSingle" | "OnlineSystem" | "PrePaidCard" | "SACD" | "SacdCompilation" | "SacdLpStereo" | "SacdLpStereoCdAudio" | "SacdLpStereoSurround" | "SacdLpStereoSurroundCdAudio" | "SacdLpSurroundCdAudio" | "SacdPlusDvdVideo" | "UserDefined" | "VhsNTSC" | "VhsPAL" | "VhsPlusCdLp" | "VhsSECAM");
interface _CarrierType extends Primitive._string { content: CarrierType; }

/** A Status for an Acknowledgement of a CatalogTransfer. */
export type CatalogTransferAcknowledgementStatus = ("Error" | "FileReceived");
interface _CatalogTransferAcknowledgementStatus extends Primitive._string { content: CatalogTransferAcknowledgementStatus; }

/** A Status of a CatalogTransfer. */
export type CatalogTransferStatus = ("Confirmed" | "Pending" | "Rejected");
interface _CatalogTransferStatus extends Primitive._string { content: CatalogTransferStatus; }

/** A Type of CatalogTransfer. */
export type CatalogTransferType = ("StandardCatalogTransfer" | "UsStatutoryReversion");
interface _CatalogTransferType extends Primitive._string { content: CatalogTransferType; }

/** A Type of CD protection. */
export type CdProtectionType = ("CDS100" | "CDS200" | "CDS300" | "Key2Audio" | "MediaMaxCD3" | "NotProtected" | "Unknown" | "UserDefined");
interface _CdProtectionType extends Primitive._string { content: CdProtectionType; }

/** A Type of a Character. */
export type CharacterType = ("MainCharacter" | "OtherCharacter" | "SupportingCharacter");
interface _CharacterType extends Primitive._string { content: CharacterType; }

/** A Source used for a Claim. */
export type ClaimBasis = ("CopCon" | "Direct" | "Unmatched");
interface _ClaimBasis extends Primitive._string { content: ClaimBasis; }

/** A Status of a RightsClaim for a MusicalWork. */
export type ClaimStatus = ("CompleteClaim" | "CompleteUnderClaim" | "IncompleteClaim" | "IncompleteUnderClaim" | "MajorOverClaim" | "MinorOverClaim" | "OverClaim" | "UnderClaim");
interface _ClaimStatus extends Primitive._string { content: ClaimStatus; }

/** A Type of Genre. */
export type ClassifiedGenre = ("Blues" | "ClassicalMusic" | "CountryMusic" | "ElectronicMusic" | "Folk" | "Gospel" | "HipHop" | "Jazz" | "Latin" | "Pop" | "R'n'B" | "Reggae" | "Rock" | "Spoken" | "Traditional" | "UserDefined" | "WorldMusic");
interface _ClassifiedGenre extends Primitive._string { content: ClassifiedGenre; }

/** A Type of clip. */
export type ClipType = ("Preview" | "StandaloneClip" | "UserDefined");
interface _ClipType extends Primitive._string { content: ClipType; }

/** A Type of coding used to encode a Resource. */
export type CodingType = ("Lossless" | "Lossy");
interface _CodingType extends Primitive._string { content: CodingType; }

/** A Type of collection Mandate. */
export type CollectionMandateType = ("Performer" | "RightsOrganization");
interface _CollectionMandateType extends Primitive._string { content: CollectionMandateType; }

/** The Type of the commentary note. */
export type CommentaryNoteType = "UserDefined";
interface _CommentaryNoteType extends Primitive._string { content: CommentaryNoteType; }

/** A Type of CommercialModel (e.g. SubscriptionModel and PayAsYouGoModel). The CommercialModelType indicates how a Consumer pays for a Service or Release. */
export type CommercialModelType = ("AdvertisementSupportedModel" | "AsPerContract" | "DeviceFeeModel" | "FreeOfChargeModel" | "PayAsYouGoModel" | "PerformanceRoyaltiesModel" | "RightsClaimModel" | "SubscriptionModel" | "Unknown" | "UserDefined");
interface _CommercialModelType extends Primitive._string { content: CommercialModelType; }

/** A Type of CommercialModel (e.g. SubscriptionModel and PayAsYouGoModel). The CommercialModelType indicates how a Consumer pays for a Service or Release. */
export type CommercialModelType_ERN = ("AdvertisementSupportedModel" | "DeviceFeeModel" | "FreeOfChargeModel" | "PayAsYouGoModel" | "PerformanceRoyaltiesModel" | "RightsClaimModel" | "SubscriptionModel" | "UserDefined");
interface _CommercialModelType_ERN extends Primitive._string { content: CommercialModelType_ERN; }

/** A Type of CommercialModel (e.g. SubscriptionModel and PayAsYouGoModel), as used in the MWNL messages. The CommercialModelType indicates how a Consumer pays for a Service or Release. */
export type CommercialModelType_MWNL = ("AdvertisementSupportedModel" | "PayAsYouGoModel" | "SubscriptionModel");
interface _CommercialModelType_MWNL extends Primitive._string { content: CommercialModelType_MWNL; }

/** A Type of Compilation. */
export type CompilationType = ("InternalCompilation" | "NonInternalCompilation" | "NotCompiled");
interface _CompilationType extends Primitive._string { content: CompilationType; }

/** A Type of CompositeMusicalWork. */
export type CompositeMusicalWorkType = ("Medley" | "Neither" | "Potpourri");
interface _CompositeMusicalWorkType extends Primitive._string { content: CompositeMusicalWorkType; }

/** A Type of confidentiality. */
export type Confidentiality = ("DoNotShare" | "MayBeShared");
interface _Confidentiality extends Primitive._string { content: Confidentiality; }

/** A Type of anomaly reported in a ar2:ConsumerEngagementAnomalyReport. */
export type ConsumerEngagementAnomalyType = ("ConsumerEngagementAnomaly" | "UserAccountAnomaly" | "UserDefined");
interface _ConsumerEngagementAnomalyType extends Primitive._string { content: ConsumerEngagementAnomalyType; }

/** A Type of Container according to its FileFormat. */
export type ContainerFormat = ("AIFF" | "AVI" | "MP4" | "Ogg" | "QuickTime" | "RealMedia" | "RMF" | "UserDefined" | "WAV");
interface _ContainerFormat extends Primitive._string { content: ContainerFormat; }

/** A Type of contribution made by ArtificialIntelligence. */
export type ContainsAI = ("All" | "None" | "Partly");
interface _ContainsAI extends Primitive._string { content: ContainsAI; }

/** A Status of a RightsClaim at a Contributor level. */
export type ContributorClaimStatus = ("Accepted" | "Conflict" | "DataInconsistent" | "NoConflict" | "PendingReview" | "Rejected" | "Revoked");
interface _ContributorClaimStatus extends Primitive._string { content: ContributorClaimStatus; }

/** A Role played by a Contributor. */
export type ContributorRole = ("Adapter" | "Architect" | "Arranger" | "Author" | "AuthorInQuotations" | "AuthorOfAfterword" | "Compiler" | "Composer" | "ComposerLyricist" | "Conceptor" | "Creator" | "DialogueAuthor" | "Dissertant" | "Engraver" | "Etcher" | "Journalist" | "LandscapeArchitect" | "Librettist" | "Lithographer" | "Lyricist" | "MetalEngraver" | "NonLyricAuthor" | "PlateMaker" | "Playwright" | "Reporter" | "Reviewer" | "Rubricator" | "ScreenplayAuthor" | "Sculptor" | "SubArranger" | "SubLyricist" | "Translator" | "Woodcutter" | "WoodEngraver" | "WriterOfAccompanyingMaterial" | "BookPublisher" | "CopyrightClaimant" | "CopyrightHolder" | "MusicPublisher" | "NewspaperPublisher" | "OriginalPublisher" | "PeriodicalPublisher" | "SubPublisher" | "SubstitutedPublisher" | "Unknown" | "UserDefined" | "Accompanyist" | "Actor" | "AdditionalEngineer" | "AdditionalMixingEngineer" | "AdditionalPerformer" | "AdditionalProgrammingEngineer" | "AdditionalStudioProducer" | "AnchorPerson" | "AnimalTrainer" | "Animator" | "Annotator" | "Announcer" | "AAndRAdministrator" | "AAndRCoordinator" | "Armourer" | "ArtCopyist" | "ArtDirector" | "Artist" | "ArtistBackgroundVocalEngineer" | "ArtistVocalEngineer" | "ArtistVocalSecondEngineer" | "AssistantCameraOperator" | "AssistantChiefLightingTechnician" | "AssistantConductor" | "AssistantDirector" | "AssistantEditor" | "AssistantEngineer" | "AssistantProducer" | "AssistantVisualEditor" | "AssociatedPerformer" | "AssociateProducer" | "AuralTrainer" | "BackgroundVocalist" | "BalanceEngineer" | "BandLeader" | "Binder" | "BindingDesigner" | "BookDesigner" | "BookjackDesigner" | "BookplateDesigner" | "BookProducer" | "BroadcastAssistant" | "BroadcastJournalist" | "Calligrapher" | "CameraOperator" | "Carpenter" | "Cartographer" | "Cartoonist" | "CastingDirector" | "Causeur" | "Censor" | "ChiefLightingTechnician" | "Choir" | "ChoirMember" | "Choreographer" | "ChorusMaster" | "CircusArtist" | "ClapperLoader" | "ClubDJ" | "CoDirector" | "CoExecutiveProducer" | "ColorSeparator" | "Comedian" | "CoMixer" | "CoMixingEngineer" | "Commentator" | "CommissioningBroadcaster" | "CompilationProducer" | "ComputerGraphicCreator" | "ComputerProgrammer" | "ConcertMaster" | "Conductor" | "Consultant" | "ContinuityChecker" | "Contractor" | "CoProducer" | "Correspondent" | "CostumeDesigner" | "CoverDesigner" | "Dancer" | "Delineator" | "Designer" | "DialogueCoach" | "DialogueDirector" | "DigitalAudioWorkstationEngineer" | "DigitalEditingEngineer" | "DigitalEditingSecondEngineer" | "Director" | "DirectStreamDigitalEngineer" | "DistributionCompany" | "DJ" | "Draughtsman" | "Dresser" | "Dubber" | "Editor" | "EditorInChief" | "EditorOfTheDay" | "Encoder" | "Engineer" | "Ensemble" | "ExecutiveProducer" | "Expert" | "Facsimilist" | "FightDirector" | "FilmDirector" | "FilmDistributor" | "FilmEditor" | "FilmProducer" | "FilmSoundEngineer" | "FloorManager" | "FocusPuller" | "FoleyArtist" | "FoleyEditor" | "FoleyMixer" | "GraphicArtist" | "GraphicAssistant" | "GraphicDesigner" | "Greensman" | "Grip" | "GuestConductor" | "GroupMember" | "Hairdresser" | "Illustrator" | "ImmersiveMasteringEngineer" | "ImmersiveMixingEngineer" | "InitialProducer" | "InterviewedGuest" | "Interviewer" | "KeyCharacter" | "KeyGrip" | "KeyTalent" | "Leadman" | "LeadPerformer" | "LeadVocalist" | "LightingDirector" | "LightingTechnician" | "LocationManager" | "MakeUpArtist" | "Manufacturer" | "MasteringEngineer" | "MasteringSecondEngineer" | "MatteArtist" | "Mixer" | "MixingEngineer" | "MixingSecondEngineer" | "MusicArranger" | "MusicCopyist" | "MusicDirector" | "MusicGroup" | "Musician" | "Narrator" | "NewsProducer" | "NewsReader" | "NotSpecified" | "Orchestra" | "OrchestraMember" | "OriginalArtist" | "OverdubEngineer" | "OverdubSecondEngineer" | "Painter" | "Performer" | "Photographer" | "PhotographyDirector" | "PlaybackSinger" | "PostProducer" | "PreProduction" | "PreProductionEngineer" | "PreProductionSecondEngineer" | "Presenter" | "PrimaryMusician" | "ProductionAssistant" | "ProductionCompany" | "ProductionCoordinator" | "ProductionDepartment" | "ProductionManager" | "ProductionSecretary" | "ProjectEngineer" | "Programmer" | "ProgrammingEngineer" | "ProgramProducer" | "PropertyManager" | "PublishingDirector" | "Puppeteer" | "Pyrotechnician" | "RecordingEngineer" | "RecordingSecondEngineer" | "Redactor" | "ReissueProducer" | "RemixedArtist" | "Remixer" | "RemixingEngineer" | "RemixingSecondEngineer" | "Repetiteur" | "Researcher" | "ResearchTeamHead" | "ResearchTeamMember" | "Restager" | "Rigger" | "RightsControllerOnProduct" | "Runner" | "ScenicOperative" | "ScientificAdvisor" | "ScriptSupervisor" | "SecondAssistantCameraOperator" | "SecondAssistantDirector" | "SecondConductor" | "SecondEngineer" | "SecondUnitDirector" | "SeriesProducer" | "SetDesigner" | "SetDresser" | "SignLanguageInterpreter" | "Soloist" | "SoundDesigner" | "SoundMixer" | "SoundRecordist" | "SoundSupervisor" | "Speaker" | "SpecialEffectsTechnician" | "Sponsor" | "StageAssistantEngineer" | "StageDirector" | "StageEngineer" | "StoryTeller" | "StringEngineer" | "StringProducer" | "StringsDirector" | "StudioConductor" | "StudioMusician" | "StudioPersonnel" | "StudioProducer" | "Stunts" | "SubtitlesEditor" | "SubtitlesTranslator" | "SupportingActor" | "SurroundMixingEngineer" | "SurroundMixingSecondEngineer" | "TapeOperator" | "TechnicalDirector" | "Tonmeister" | "TrackingEngineer" | "TrackingSecondEngineer" | "TransfersAndSafetiesEngineer" | "TransfersAndSafetiesSecondEngineer" | "TransportationManager" | "Treatment/ProgramProposal" | "TypeDesigner" | "VideoDirector" | "Videographer" | "VideoMusicalDirector" | "VideoProducer" | "VisionMixer" | "VisualEditor" | "VisualEffectsTechnician" | "VocalArranger" | "VocalEditingEngineer" | "VocalEditingSecondEngineer" | "VocalEngineer" | "Vocalist" | "VocalSecondEngineer" | "VocalProducer" | "VoiceActor" | "Wardrobe");
interface _ContributorRole extends Primitive._string { content: ContributorRole; }

/** A Role played by a Contributor. */
export type ContributorRole_RDR = ("Accompanyist" | "Actor" | "AdditionalEngineer" | "AdditionalMixingEngineer" | "AdditionalPerformer" | "AdditionalProgrammingEngineer" | "AdditionalStudioProducer" | "AnchorPerson" | "AnimalTrainer" | "Animator" | "Annotator" | "Announcer" | "AAndRAdministrator" | "AAndRCoordinator" | "Armourer" | "ArtCopyist" | "ArtDirector" | "Artist" | "ArtistBackgroundVocalEngineer" | "ArtistVocalEngineer" | "ArtistVocalSecondEngineer" | "AssistantCameraOperator" | "AssistantChiefLightingTechnician" | "AssistantConductor" | "AssistantDirector" | "AssistantEditor" | "AssistantEngineer" | "AssistantProducer" | "AssistantVisualEditor" | "AssociatedPerformer" | "AssociateProducer" | "AuralTrainer" | "BackgroundVocalist" | "BalanceEngineer" | "BandLeader" | "Binder" | "BindingDesigner" | "BookDesigner" | "BookjackDesigner" | "BookplateDesigner" | "BookProducer" | "BroadcastAssistant" | "BroadcastJournalist" | "Calligrapher" | "CameraOperator" | "Carpenter" | "Cartographer" | "Cartoonist" | "CastingDirector" | "Causeur" | "Censor" | "ChiefLightingTechnician" | "Choir" | "ChoirMember" | "Choreographer" | "ChorusMaster" | "CircusArtist" | "ClapperLoader" | "ClubDJ" | "CoDirector" | "CoExecutiveProducer" | "ColorSeparator" | "Comedian" | "CoMixer" | "CoMixingEngineer" | "Commentator" | "CommissioningBroadcaster" | "CompilationProducer" | "ComputerGraphicCreator" | "ComputerProgrammer" | "ConcertMaster" | "Conductor" | "Consultant" | "ContinuityChecker" | "Contractor" | "CoProducer" | "Correspondent" | "CostumeDesigner" | "CoverDesigner" | "Dancer" | "Delineator" | "Designer" | "DialogueCoach" | "DialogueDirector" | "DigitalAudioWorkstationEngineer" | "DigitalEditingEngineer" | "DigitalEditingSecondEngineer" | "Director" | "DirectStreamDigitalEngineer" | "DistributionCompany" | "DJ" | "Draughtsman" | "Dresser" | "Dubber" | "Editor" | "EditorInChief" | "EditorOfTheDay" | "Encoder" | "Engineer" | "Ensemble" | "ExecutiveProducer" | "Expert" | "Facsimilist" | "FightDirector" | "FilmDirector" | "FilmDistributor" | "FilmEditor" | "FilmProducer" | "FilmSoundEngineer" | "FloorManager" | "FocusPuller" | "FoleyArtist" | "FoleyEditor" | "FoleyMixer" | "GraphicArtist" | "GraphicAssistant" | "GraphicDesigner" | "Greensman" | "Grip" | "GuestConductor" | "GroupMember" | "Hairdresser" | "Illustrator" | "ImmersiveMasteringEngineer" | "ImmersiveMixingEngineer" | "InitialProducer" | "InterviewedGuest" | "Interviewer" | "KeyCharacter" | "KeyGrip" | "KeyTalent" | "Leadman" | "LeadPerformer" | "LeadVocalist" | "LightingDirector" | "LightingTechnician" | "LocationManager" | "MakeUpArtist" | "Manufacturer" | "MasteringEngineer" | "MasteringSecondEngineer" | "MatteArtist" | "Mixer" | "MixingEngineer" | "MixingSecondEngineer" | "MusicArranger" | "MusicCopyist" | "MusicDirector" | "MusicGroup" | "Musician" | "Narrator" | "NewsProducer" | "NewsReader" | "NotSpecified" | "Orchestra" | "OrchestraMember" | "OriginalArtist" | "OverdubEngineer" | "OverdubSecondEngineer" | "Painter" | "Performer" | "Photographer" | "PhotographyDirector" | "PlaybackSinger" | "PostProducer" | "PreProduction" | "PreProductionEngineer" | "PreProductionSecondEngineer" | "Presenter" | "PrimaryMusician" | "ProductionAssistant" | "ProductionCompany" | "ProductionCoordinator" | "ProductionDepartment" | "ProductionManager" | "ProductionSecretary" | "ProjectEngineer" | "Programmer" | "ProgrammingEngineer" | "ProgramProducer" | "PropertyManager" | "PublishingDirector" | "Puppeteer" | "Pyrotechnician" | "RecordingEngineer" | "RecordingSecondEngineer" | "Redactor" | "ReissueProducer" | "RemixedArtist" | "Remixer" | "RemixingEngineer" | "RemixingSecondEngineer" | "Repetiteur" | "Researcher" | "ResearchTeamHead" | "ResearchTeamMember" | "Restager" | "Rigger" | "RightsControllerOnProduct" | "Runner" | "ScenicOperative" | "ScientificAdvisor" | "ScriptSupervisor" | "SecondAssistantCameraOperator" | "SecondAssistantDirector" | "SecondConductor" | "SecondEngineer" | "SecondUnitDirector" | "SeriesProducer" | "SetDesigner" | "SetDresser" | "SignLanguageInterpreter" | "Soloist" | "SoundDesigner" | "SoundMixer" | "SoundRecordist" | "SoundSupervisor" | "Speaker" | "SpecialEffectsTechnician" | "Sponsor" | "StageAssistantEngineer" | "StageDirector" | "StageEngineer" | "StoryTeller" | "StringEngineer" | "StringProducer" | "StringsDirector" | "StudioConductor" | "StudioMusician" | "StudioPersonnel" | "StudioProducer" | "Stunts" | "SubtitlesEditor" | "SubtitlesTranslator" | "SupportingActor" | "SurroundMixingEngineer" | "SurroundMixingSecondEngineer" | "TapeOperator" | "TechnicalDirector" | "Tonmeister" | "TrackingEngineer" | "TrackingSecondEngineer" | "TransfersAndSafetiesEngineer" | "TransfersAndSafetiesSecondEngineer" | "TransportationManager" | "Treatment/ProgramProposal" | "TypeDesigner" | "Unknown" | "UserDefined" | "VideoDirector" | "Videographer" | "VideoMusicalDirector" | "VideoProducer" | "VisionMixer" | "VisualEditor" | "VisualEffectsTechnician" | "VocalArranger" | "VocalEditingEngineer" | "VocalEditingSecondEngineer" | "VocalEngineer" | "Vocalist" | "VocalSecondEngineer" | "VocalProducer" | "VoiceActor" | "Wardrobe" | "Mime");
interface _ContributorRole_RDR extends Primitive._string { content: ContributorRole_RDR; }

/** A Type of Creation. */
export type CreationType = ("MusicalWork" | "Release" | "Resource");
interface _CreationType extends Primitive._string { content: CreationType; }

/** A creative Role played by a Contributor in relation to a MusicalWork. */
export type CreativeMusicalWorkContributorRole = ("Adapter" | "Architect" | "Arranger" | "Author" | "AuthorInQuotations" | "AuthorOfAfterword" | "Compiler" | "Composer" | "ComposerLyricist" | "Conceptor" | "Creator" | "DialogueAuthor" | "Dissertant" | "Engraver" | "Etcher" | "Journalist" | "LandscapeArchitect" | "Librettist" | "Lithographer" | "Lyricist" | "MetalEngraver" | "NonLyricAuthor" | "PlateMaker" | "Playwright" | "Reporter" | "Reviewer" | "Rubricator" | "ScreenplayAuthor" | "Sculptor" | "SubArranger" | "SubLyricist" | "Translator" | "Woodcutter" | "WoodEngraver" | "WriterOfAccompanyingMaterial");
interface _CreativeMusicalWorkContributorRole extends Primitive._string { content: CreativeMusicalWorkContributorRole; }

/** A Type of action that is proposed. */
export type CtProposedActionType = ("HandleOutsideOfThread" | "SendUpdate");
interface _CtProposedActionType extends Primitive._string { content: CtProposedActionType; }

/** A Type of Cue according to its origin. */
export type CueOrigin = ("LibraryMusic" | "PreexistingMusic" | "SpeciallyCommissionedMusic" | "Unknown" | "UserDefined");
interface _CueOrigin extends Primitive._string { content: CueOrigin; }

/** A Type of CueSheet. */
export type CueSheetType = ("AverageCueSheet" | "CompositeCueSheet" | "StandardCueSheet" | "SummarisedCueSheet" | "SurrogateCueSheet");
interface _CueSheetType extends Primitive._string { content: CueSheetType; }

/** A Type of use of a Cue. */
export type CueUseType = ("AudioLogo" | "Background" | "Bumper" | "EssentialPart" | "FilmTheme" | "IndistinguishableBackground" | "OnScreenMusic" | "RolledUpCue" | "Theme" | "UserDefined");
interface _CueUseType extends Primitive._string { content: CueUseType; }

/** A Type of primary usage of a MusicalWork in an Exploitation. */
export type CueUseType_MWDR = ("AudioLogo" | "Background" | "RolledUpCue" | "Theme" | "OnScreenMusic");
interface _CueUseType_MWDR extends Primitive._string { content: CueUseType_MWDR; }

/** A code representing a Currency. */
export type CurrencyCode = ("AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYR" | "BZD" | "CAD" | "CDF" | "CHF" | "CLF" | "CLP" | "CNY" | "COP" | "COU" | "CRC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLE" | "SLL" | "SOS" | "SRD" | "SSP" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "UYI" | "UYU" | "UZS" | "VED" | "VES" | "VND" | "VUV" | "WST" | "XAF" | "XCD" | "XOF" | "XPF" | "YER" | "ZAR" | "ZMW" | "ZWG" | "CUC" | "CYP" | "EEK" | "HRK" | "LTL" | "LVL" | "MTL" | "MRO" | "ROL" | "SIT" | "SKK" | "STD" | "VEF" | "ZWL");
interface _CurrencyCode extends Primitive._string { content: CurrencyCode; }

/** A code representing a Territory. This includes ISO 3166-1 two-letter codes and selected ISO 3166-2 codes, CISAC TIS codes, plus a code for Worldwide. */
export type CurrentTerritoryCode = ("AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CS" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ES-CE" | "ES-CN" | "ES-ML" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW" | "4" | "8" | "12" | "20" | "24" | "28" | "31" | "32" | "36" | "40" | "44" | "48" | "50" | "51" | "52" | "56" | "64" | "68" | "70" | "72" | "76" | "84" | "90" | "96" | "100" | "104" | "108" | "112" | "116" | "120" | "124" | "132" | "140" | "144" | "148" | "152" | "156" | "158" | "170" | "174" | "178" | "180" | "188" | "191" | "192" | "196" | "200" | "203" | "204" | "208" | "212" | "214" | "218" | "222" | "226" | "230" | "231" | "232" | "233" | "242" | "246" | "250" | "258" | "262" | "266" | "268" | "270" | "276" | "278" | "280" | "288" | "296" | "300" | "308" | "320" | "324" | "328" | "332" | "336" | "340" | "344" | "348" | "352" | "356" | "360" | "364" | "368" | "372" | "376" | "380" | "384" | "388" | "392" | "398" | "400" | "404" | "408" | "410" | "414" | "417" | "418" | "422" | "426" | "428" | "430" | "434" | "438" | "440" | "442" | "446" | "450" | "454" | "458" | "462" | "466" | "470" | "478" | "480" | "484" | "492" | "496" | "498" | "499" | "504" | "508" | "512" | "516" | "520" | "524" | "528" | "540" | "548" | "554" | "558" | "562" | "566" | "578" | "583" | "584" | "585" | "586" | "591" | "598" | "600" | "604" | "608" | "616" | "620" | "624" | "626" | "630" | "634" | "642" | "643" | "646" | "659" | "662" | "670" | "674" | "678" | "682" | "686" | "688" | "690" | "694" | "702" | "703" | "704" | "705" | "706" | "710" | "716" | "720" | "724" | "728" | "729" | "732" | "736" | "740" | "748" | "752" | "756" | "760" | "762" | "764" | "768" | "776" | "780" | "784" | "788" | "792" | "795" | "798" | "800" | "804" | "807" | "810" | "818" | "826" | "834" | "840" | "854" | "858" | "860" | "862" | "882" | "886" | "887" | "890" | "891" | "894" | "2100" | "2101" | "2102" | "2103" | "2104" | "2105" | "2106" | "2107" | "2108" | "2109" | "2110" | "2111" | "2112" | "2113" | "2114" | "2115" | "2116" | "2117" | "2118" | "2119" | "2120" | "2121" | "2122" | "2123" | "2124" | "2125" | "2126" | "2127" | "2128" | "2129" | "2130" | "2131" | "2132" | "2133" | "2134" | "2136" | "XK" | "Worldwide");
interface _CurrentTerritoryCode extends Primitive._string { content: CurrentTerritoryCode; }

/** A dance style. */
export type DanceStyle = ("AcroDance" | "Ballet" | "Ballroom" | "Barcarolle" | "Bolero" | "Breakdance" | "Breakdown" | "Bump" | "Cakewalk" | "CanCan" | "CarolinaShag" | "ChaCha" | "Charleston" | "CongaLine" | "ContemporaryDance" | "Contradance" | "CountryTwoStep" | "CountryWesternDance" | "CowboyChaCha" | "Dansband" | "DiscoDance" | "Dougie" | "EastCoastSwing" | "Forro" | "Foxtrot" | "HandJive" | "HipHopDance" | "Hustle" | "Interpretive" | "JazzDance" | "Jig" | "Jitterbug" | "Jive" | "LindyHop" | "LineDance" | "LiquidDance" | "Locking" | "LyricalHipHopDance" | "Mambo" | "Mazurka" | "ModernDance" | "Pasodoble" | "Polonaise" | "Popping" | "Quickstep" | "Robot" | "RodeoSwing" | "Rumba" | "Salsa" | "Samba" | "SlowWaltz" | "SquareDance" | "Stepping" | "Swing" | "Tango" | "TapDancing" | "TheTwist" | "TraditionalDance" | "TripleStep" | "Turfing" | "UpRocking" | "UserDefined" | "VienneseWaltz" | "Waltz" | "Watusi" | "WestCoastSwing" | "WesternSwing");
interface _DanceStyle extends Primitive._string { content: DanceStyle; }

/** A Type of DataCarrier according to its Format. */
export type DataCarrierFormat = ("AFormatVideo" | "ADAT" | "AnalogAudio" | "BFormatVideo" | "Betacam" | "BetacamSP" | "BetacamSX" | "Betamax" | "CFormatVideo" | "CompactDiskDigitalAudio" | "D1DigitalVideo" | "D2DigitalVideo" | "D3DigitalVideo" | "D4DigitalVideo" | "D5DigitalVideo" | "D6DigitalVideo" | "DTRS" | "DVCAM" | "DVCPRO" | "DvcproProgressive" | "DVCPRO50" | "DVCPROHD" | "DigitalAudioStationaryHead" | "DigitalAudioTape" | "DigitalComponentVideocassette" | "DigitalDataStorageTape" | "DirectStreamDigital" | "FileAllocationTable" | "FileAllocationTable_32Bit" | "HierarchicalFileSystem" | "HierarchicalFileSystemPlus" | "ISO9660" | "JvcPcmDigital" | "LinearTapeFileSystem" | "Masterlink" | "NewTechnologyFileSystem" | "NotApplicable" | "PcmDigital" | "ProDigi" | "Proprietary" | "RADAR" | "RADARII" | "SonyPCM1630" | "StreamingData" | "TransverseTrackQuadraplexVideo");
interface _DataCarrierFormat extends Primitive._string { content: DataCarrierFormat; }

/** A Type of DataCarrier (adopted from EBU Technical Specification 3279). */
export type DataCarrierType = ("1InchAnalogAudioTape_10.5InchReel" | "1InchAnalogAudioTape_7InchReel" | "1InchAnalogAudioTape_UnspecifiedReelSize" | "1InchAnalogVideoTape_LargeReel" | "1InchAnalogVideoTape_MediumReel" | "1InchAnalogVideoTape_SmallReel" | "1InchAnalogVideoTape_UnspecifiedReelSize" | "1InchDigitalAudioTape_10.5InchReel" | "1InchDigitalAudioTape_7InchReel" | "1InchDigitalAudioTape_UnspecifiedReelSize" | "1/2InchAnalogAudioTape_10.5InchReel" | "1/2InchAnalogAudioTape_7InchReel" | "1/2InchAnalogAudioTape_UnspecifiedReelSize" | "1/2InchDigitalAudioTape_10.5InchReel" | "1/2InchDigitalAudioTape_7InchReel" | "1/2InchDigitalAudioTape_UnspecifiedReelSize" | "1/2InchDigitalVideoTape_LargeCassette" | "1/2InchDigitalVideoTape_MediumCassette" | "1/2InchDigitalVideoTape_SmallCassette" | "1/4InchAnalogAudioTape_10.5InchReel" | "1/4InchAnalogAudioTape_7InchReel" | "1/4InchAnalogAudioTape_UnspecifiedReelSize" | "1/4InchDigitalAudioTape_10.5InchReel" | "1/4InchDigitalAudioTape_7InchReel" | "1/4InchDigitalAudioTape_UnspecifiedReelSize" | "1/4InchDigitalVideoTape_ExtraLargeCassette" | "1/4InchDigitalVideoTape_LargeCassette" | "1/4InchDigitalVideoTape_MediumCassette" | "1/4InchDigitalVideoTape_SmallCassette" | "16mmSepmagAnalogAudioFilmReel" | "16mmPictureAnalogVideoFilmReel" | "2InchAnalogAudioTape_10.5InchReel" | "2InchAnalogAudioTape_12InchReel" | "2InchAnalogAudioTape_14InchReel" | "2InchAnalogAudioTape_UnspecifiedReelSize" | "2InchAnalogVideoTape_LargeReel" | "2InchAnalogVideoTape_MediumReel" | "2InchAnalogVideoTape_SmallReel" | "2InchAnalogVideoTape_UnspecifiedReelSize" | "3/4InchDigitalVideoTape_LargeCassette" | "3/4InchDigitalVideoTape_MediumCassette" | "3/4InchDigitalVideoTape_SmallCassette" | "35mmSepmagAnalogAudioFilmReel" | "35mmPictureAnalogVideoFilmReel" | "8mmPictureAnalogVideoFilmReel" | "AIT-1DigitalDataTape" | "AIT-2DigitalDataTape" | "AIT-3DigitalDataTape" | "AIT-3EXDigitalDataTape" | "AIT-4DigitalDataTape" | "AIT-5DigitalDataTape" | "BernoulliDisk_20MB" | "BetacamSpAnalogVideoTape_LargeCassette" | "BetacamSpAnalogVideoTape_SmallCassette" | "BetacamSxDigitalVideoTape_LargeCassette" | "BetacamSxDigitalVideoTape_SmallCassette" | "BetacamAnalogVideoTape_LargeCassette" | "BetacamAnalogVideoTape_SmallCassette" | "Binder_1InchRing" | "Binder_1.5InchRing" | "Binder_0.5InchRing" | "Binder_2InchRing" | "BluRayRecordableOpticalDiskSingleSided_DoubleLayer_12cm" | "BluRayRecordableOpticalDiskSingleSided_SingleLayer_12cm" | "CdRRecordableOpticalDiskSingleSided_SingleLayer_12cm" | "CdRomDigitalDataDisk" | "CdIInteractiveMultimediaDigitalDataDisk" | "CompactCassetteAnalogAudioTape" | "DAT160DigitalStorageTape" | "DAT320DigitalStorageTape" | "DAT72DigitalStorageTape" | "DDS-1DigitalDataTape" | "DDS-2DigitalDataTape" | "DDS-3DigitalDataTape" | "DDS-4DigitalDataTape" | "DLT-IIIDigitalDataTape" | "DLT-IVDigitalDataTape" | "DvDigitalVideoTape_MiniCassette" | "DvDigitalVideoTape_NormalCassette" | "DvcamDigitalVideoTape" | "Dvcpro50DigitalVideoTape_LargeCassette" | "Dvcpro50DigitalVideoTape_MediumCassette" | "Dvcpro50DigitalVideoTape_SmallCassette" | "DvcproHdDigitalVideoTape_ExtraLargeCassette" | "DvcproHdDigitalVideoTape_LargeCassette" | "Dvd+RRecordableOpticalDiskSingleSided_DoubleLayer_12cm" | "Dvd+RRecordableOpticalDiskSingleSided_SingleLayer_12cm" | "Dvd+RwRewritableOpticalDiskSingleSided_SingleLayer_12cm" | "DvdRRecordableOpticalDiskSingleSided_DoubleLayer_12cm" | "DvdRRecordableOpticalDiskSingleSided_SingleLayer_12cm" | "DvdRamRecordableOpticalDiskDoubleSided" | "DvdRamRecordableOpticalDiskSingleSided" | "DigitalBetacamDigitalVideoTape_LargeCassette" | "DigitalBetacamDigitalVideoTape_SmallCassette" | "DigitalAudioTape" | "DigitalCompactCassette" | "DigitalSDigitalVideoTape_CompactCassette" | "DigitalSDigitalVideoTape_StandardCassette" | "DoubleSidedDoubleDensityFloppyDigitalDataDisk_3.5Inch" | "DoubleSidedDoubleDensityFloppyDigitalDataDisk_5.25Inch" | "Envelope" | "Exabyte8500SeriesDigitalDataTape" | "Exabyte8700SeriesDigitalDataTape" | "Exabyte8900SeriesDigitalDataTape" | "ExabyteMammothDigitalDataTape" | "FileSystem" | "GlassBasedAcetatePhonographAnalogAudioDisk_10Inch" | "GlassBasedAcetatePhonographAnalogAudioDisk_12Inch" | "GlassBasedAcetatePhonographAnalogAudioDisk_14Inch" | "GlassBasedAcetatePhonographAnalogAudioDisk_16Inch" | "GlassBasedAcetatePhonographAnalogAudioDisk_7Inch" | "GlassBasedAcetatePhonographAnalogAudioDisk_UnspecifiedSize" | "HdDvdRecordableOpticalDiskDoubleSided_DoubleLayer_12cm" | "HdDvdRecordableOpticalDiskDoubleSided_DoubleLayer_8cm" | "HdDvdRecordableOpticalDiskDoubleSided_SingleLayer_12cm" | "HdDvdRecordableOpticalDiskDoubleSided_SingleLayer_8cm" | "HdDvdRecordableOpticalDiskSingleSided_DoubleLayer_12cm" | "HdDvdRecordableOpticalDiskSingleSided_DoubleLayer_8cm" | "HdDvdRecordableOpticalDiskSingleSided_SingleLayer_12cm" | "HdDvdRecordableOpticalDiskSingleSided_SingleLayer_8cm" | "HdcamSrDigitalVideoTape_LargeCassette" | "HdcamSrDigitalVideoTape_SmallCassette" | "HdcamDigitalVideoTape" | "HdvHdtvDigitalVideoTape" | "HardDiskDrive_ExternalUsb2.0Interface" | "HardDiskDrive_ExternalUsb3.0Interface" | "HardDiskDrive_ExternalUsbInterface" | "HardDiskDrive_ExternalFirewireInterface" | "HardDiskDrive_ExternalFirewire/UsbInterface" | "HardDiskDrive_InternalRibbonCableInterface" | "HardDiskDrive_UnspecifiedInterface" | "Hi-8AnalogVideoTape" | "IdeAtaHardDiskDrive_ExternalUsb2.0Interface" | "IdeAtaHardDiskDrive_ExternalUsb3.0Interface" | "IdeAtaHardDiskDrive_ExternalUsbInterface" | "IdeAtaHardDiskDrive_ExternalFirewireInterface" | "IdeAtaHardDiskDrive_ExternalFirewire/UsbInterface" | "IdeAtaHardDiskDrive_ExternalFirewire/Usb/SataInterface" | "IdeAtaHardDiskDrive_InternalRibbonCableInterface" | "IdeAtaHardDiskDrive_UnspecifiedExternalInterface" | "JazDigitalDataDisk" | "LTO-1UltriumDigitalDataTape" | "LTO-2UltriumDigitalDataTape" | "LTO-3UltriumDigitalDataTape" | "LTO-4UltriumDigitalDataTape" | "LTO-5UltriumDigitalDataTape" | "LTO-6UltriumDigitalDataTape" | "LTO-7UltriumDigitalDataTape" | "LacquerPhonographAnalogAudioDisk_10Inch" | "LacquerPhonographAnalogAudioDisk_12Inch" | "LacquerPhonographAnalogAudioDisk_14Inch" | "LacquerPhonographAnalogAudioDisk_16Inch" | "LacquerPhonographAnalogAudioDisk_7Inch" | "LacquerPhonographAnalogAudioDisk_UnspecifiedSize" | "LaserdiscOpticalDiskSingleSided" | "MiniDisk" | "MoDisk_1.3GB" | "MoDisk_1200MB" | "MoDisk_2.6GB" | "MoDisk_540MB" | "MoDisk_650MB" | "MetalBasedAcetatePhonographAnalogAudioDisk_10Inch" | "MetalBasedAcetatePhonographAnalogAudioDisk_12Inch" | "MetalBasedAcetatePhonographAnalogAudioDisk_14Inch" | "MetalBasedAcetatePhonographAnalogAudioDisk_16Inch" | "MetalBasedAcetatePhonographAnalogAudioDisk_7Inch" | "MetalBasedAcetatePhonographAnalogAudioDisk_UnspecifiedSize" | "PreMasterCD" | "S-AtaHardDiskDrive_ExternalUsb2.0Interface" | "S-AtaHardDiskDrive_ExternalUsb3.0Interface" | "S-AtaHardDiskDrive_ExternalFirewireInterface" | "S-AtaHardDiskDrive_InternalRibbonCableInterface" | "S-AtaHardDiskDrive_UnspecifiedExternalInterface" | "S-VhsAnalogVideoTape_CompactCassette" | "S-VhsAnalogVideoTape_StandardCassette" | "ScsiIHardDiskDrive_ExternalDSubInterface" | "ScsiIHardDiskDrive_InternalRibbonCableInterface" | "ScsiIHardDiskDrive_UnspecifiedExternalInterface" | "ScsiIIHardDiskDrive_External50PinInterface" | "ScsiIIHardDiskDrive_External68PinInterface" | "ScsiIIHardDiskDrive_ExternalCentronixInterface" | "ScsiIIHardDiskDrive_ExternalDSubInterface" | "ScsiIIHardDiskDrive_InternalRibbonCableInterface" | "ScsiIIILvdHardDiskDrive_External50PinInterface" | "ScsiIIILvdHardDiskDrive_External68PinInterface" | "ScsiIIILvdHardDiskDrive_External80PinInterface" | "ScsiIIILvdHardDiskDrive_InternalRibbonCableInterface" | "ShellacPhonographAnalogAudioDisk_10Inch" | "ShellacPhonographAnalogAudioDisk_12Inch" | "ShellacPhonographAnalogAudioDisk_14Inch" | "ShellacPhonographAnalogAudioDisk_16Inch" | "ShellacPhonographAnalogAudioDisk_7Inch" | "ShellacPhonographAnalogAudioDisk_UnspecifiedSize" | "SingleSidedDoubleDensityFloppyDigitalDataDisk_3.5Inch" | "SingleSidedSingleDensityFloppyDigitalDataDisk_3.5Inch" | "SingleSidedSingleDensityFloppyDigitalDataDisk_5.25Inch" | "SingleSidedSingleDensityFloppyDigitalDataDisk_8Inch" | "SolidStateMemoryStorageCards" | "StorageBox_1.2CubicFeet" | "StorageBox_2.0CubicFeet" | "StorageBox" | "StorageContainer_1.2CubicFeet" | "StorageContainer_2.0CubicFeet" | "StorageContainer" | "Super16mmPictureAnalogVideoFilmReel" | "Super8mmPictureAnalogVideoFilmReel" | "UMaticSpAnalogVideoTape_SmallCassette" | "UMaticAnalogVideoTape_LargeCassette" | "UMaticAnalogVideoTape_SmallCassette" | "VhsAnalogVideoTape_CompactCassette" | "VhsAnalogVideoTape_StandardCassette" | "VinylPhonographAnalogAudioDisk_10Inch" | "VinylPhonographAnalogAudioDisk_12Inch" | "VinylPhonographAnalogAudioDisk_14Inch" | "VinylPhonographAnalogAudioDisk_16Inch" | "VinylPhonographAnalogAudioDisk_7Inch" | "VinylPhonographAnalogAudioDisk_UnspecifiedSize" | "VXA-1DigitalDataTape" | "VXA-2DigitalDataTape" | "VXA-3DigitalDataTape" | "WaxCylinderPhonogramAnalogAudioDisk" | "XdcamRewritableOpticalDisk" | "ZipDigitalDataDisk");
interface _DataCarrierType extends Primitive._string { content: DataCarrierType; }

/** A TerritoryId which is not a TerritoryId according to an ISO 3166 standard or the TIS standard. */
export type DdexTerritoryCode = ("XK" | "Worldwide");
interface _DdexTerritoryCode extends Primitive._string { content: DdexTerritoryCode; }

/** A TerritoryId which is not a TerritoryId according to an ISO 3166 standard or the TIS standard, but not the value Worldwide. */
export type DdexTerritoryCodeNoWorldwide = "XK";
interface _DdexTerritoryCodeNoWorldwide extends Primitive._string { content: DdexTerritoryCodeNoWorldwide; }

/** A Type of delivery File. */
export type DeliveryFileType = ("AudioFile" | "AudioVisualFile" | "ColorInformationFile" | "VisualFile");
interface _DeliveryFileType extends Primitive._string { content: DeliveryFileType; }

/** A CurrencyCode which is not valid anymore. */
export type DeprecatedCurrencyCode = ("CUC" | "CYP" | "EEK" | "HRK" | "LTL" | "LVL" | "MTL" | "MRO" | "ROL" | "SIT" | "SKK" | "STD" | "VEF" | "ZWL");
interface _DeprecatedCurrencyCode extends Primitive._string { content: DeprecatedCurrencyCode; }

/** An ISO 3166-3 four-letter code representing a Territory, which is a replacement for a deprecated ISO 3166-1 code. */
export type DeprecatedIsoTerritoryCode = ("AIDJ" | "ANHH" | "BQAQ" | "BUMM" | "BYAA" | "CSHH" | "CSXX" | "CTKI" | "DDDE" | "DYBJ" | "FQHH" | "FXFR" | "GEHH" | "HVBF" | "JTUM" | "MIUM" | "NHVU" | "NQAQ" | "NTHH" | "PCHH" | "PUUM" | "PZPA" | "RHZW" | "SKIN" | "SUHH" | "TPTL" | "VDVN" | "WKUM" | "YDYE" | "YUCS" | "ZRCD");
interface _DeprecatedIsoTerritoryCode extends Primitive._string { content: DeprecatedIsoTerritoryCode; }

/** A Type of Release according to its content, Duration and/or number of components. Note: a ReleaseType is the form in which a ReleaseCreator anticipates offering a Release to Consumers. */
export type DeprecatedReleaseType = "TrackRelease";
interface _DeprecatedReleaseType extends Primitive._string { content: DeprecatedReleaseType; }

/** A Digitization mode of a Resource. */
export type DigitizationMode = ("AAD" | "ADD" | "DDD" | "Unknown");
interface _DigitizationMode extends Primitive._string { content: DigitizationMode; }

/** A Type of Discrepancy. */
export type DiscrepancyType = ("CalculationError" | "DuplicatedClaimInMessage" | "ClaimBasis" | "OriginallyStatedClaimDoesNotMatch" | "Overclaim" | "OverclaimBySameLicensor" | "PreviouslyInvoiced" | "SalesDataIncorrect" | "UserDefined");
interface _DiscrepancyType extends Primitive._string { content: DiscrepancyType; }

/** A Role of a principal Contributor in relation to a Performance or a Fixation. */
export type DisplayArtistRole = ("Artist" | "Brand" | "Composer" | "FeaturedArtist" | "MainArtist" | "UserDefined");
interface _DisplayArtistRole extends Primitive._string { content: DisplayArtistRole; }

/** A Role of a principal Contributor in relation to a Performance or a Fixation. */
export type DisplayArtistRole_RDR = ("Artist" | "Brand" | "Composer" | "Conductor" | "FeaturedArtist" | "MainArtist" | "UserDefined");
interface _DisplayArtistRole_RDR extends Primitive._string { content: DisplayArtistRole_RDR; }

/** A Type of DistributionChannel used to disseminate a Service or Release to a Consumer. */
export type DistributionChannelType = ("AsPerContract" | "Broadcast" | "Cable" | "Internet" | "InternetAndMobile" | "IPTV" | "MobileTelephone" | "Narrowcast" | "OnDemandStream" | "PeerToPeer" | "Physical" | "Satellite" | "Simulcast" | "Unknown" | "UserDefined" | "Webcast");
interface _DistributionChannelType extends Primitive._string { content: DistributionChannelType; }

/** A classification of the MusicalWork for distribution purposes. */
export type DistributionClass = ("ClassicalMusic" | "LibraryMusic" | "Jazz" | "Pop" | "Unknown");
interface _DistributionClass extends Primitive._string { content: DistributionClass; }

/** A Type of document. */
export type DocumentType_LoD = ("LetterOfDirection" | "UserDefined");
interface _DocumentType_LoD extends Primitive._string { content: DocumentType_LoD; }

/** A Type of document. */
export type DocumentType_MWL = ("Contract" | "RateCalculation" | "UserDefined");
interface _DocumentType_MWL extends Primitive._string { content: DocumentType_MWL; }

/** A Status of a DdexPartyId. */
export type DpidStatus = ("Active" | "Deleted" | "Replaced");
interface _DpidStatus extends Primitive._string { content: DpidStatus; }

/** A Type of DRM enforcement. */
export type DrmEnforcementType = ("DrmEnforced" | "NotDrmEnforced");
interface _DrmEnforcementType extends Primitive._string { content: DrmEnforcementType; }

/** A Type of SoundRecordingEdition. */
export type EditionType = ("ImmersiveEdition" | "NonImmersiveEdition");
interface _EditionType extends Primitive._string { content: EditionType; }

/** A Type of ElectroOpticalTransferFunction. */
export type ElectroOpticalTransferFunctionType = ("BT.1886" | "ST2084");
interface _ElectroOpticalTransferFunctionType extends Primitive._string { content: ElectroOpticalTransferFunctionType; }

/** A Type of Element based on its configuration. */
export type ElementConfiguration = ("12Track" | "16Track" | "24Track" | "3Track" | "32Track" | "4Track" | "48Track" | "6Track" | "8Track" | "AbletonLive" | "BruArchive" | "BandedDisc_InsideOut" | "BandedDisc_OutsideIn" | "Cubase" | "DataFiles" | "DigitalPerformer" | "FinalCutExpress" | "FinalCutPro" | "FruityLoops" | "FullTrackMono" | "GarageBand" | "HalfTrackMono" | "HalfTrackStereo" | "HardCopy" | "Interleaved5.1Files" | "InterleavedStereoFiles" | "Logic" | "LtfsArchive" | "LtfsBackup" | "MezzoArchive" | "MicrosoftBackup" | "MonoFiles" | "Nuendo" | "OrangeBook" | "Paris" | "ProTools" | "QuarterTrackMono" | "QuarterTrackStereo" | "QuickTime" | "Redbook" | "RetrospectArchive" | "RetrospectCatalog" | "SplitStereo" | "StudioOne" | "TarArchive" | "TarBackup" | "ToastArchive" | "TrackedDisc_InsideOut" | "TrackedDisc_OutsideIn" | "TwinTrack");
interface _ElementConfiguration extends Primitive._string { content: ElementConfiguration; }

/** A Type of Element based on its designation. */
export type ElementDesignation = ("Backup" | "Convenience" | "Copy" | "Documentation" | "LongTerm" | "Master" | "Safety" | "StorageContainer" | "Transfer" | "WorkElement");
interface _ElementDesignation extends Primitive._string { content: ElementDesignation; }

/** A Type of encoding system used for a pronunciation respelling. */
export type EncodingType = ("IPA" | "UserDefined");
interface _EncodingType extends Primitive._string { content: EncodingType; }

/** A Manufacturer that builds Equipment. */
export type EquipmentManufacturer = "UserDefined";
interface _EquipmentManufacturer extends Primitive._string { content: EquipmentManufacturer; }

/** The Name of the model of a piece of Equipment. */
export type EquipmentModel = "UserDefined";
interface _EquipmentModel extends Primitive._string { content: EquipmentModel; }

/** A Type of Equipment. */
export type EquipmentType = ("Computer" | "Loudspeaker" | "Microphone" | "MusicalInstrument" | "Recorder" | "SignalProcessor" | "Software");
interface _EquipmentType extends Primitive._string { content: EquipmentType; }

/** A Status of a File in terms of its validity in the Release Delivery Choreography Standard. */
export type ErncFileStatus = ("ArtistRoleUnknown" | "CommercialReleaseDateInvalid" | "ConflictingAvailabilityPeriods" | "DuplicatedPublisherNames" | "ErnMissing" | "FileOK" | "IdentifierInvalid" | "IdentifierSyntaxInvalid" | "InternalError" | "MetadataMissing" | "NewReleaseMessageInvalid" | "NoDealForTrackRelease" | "NoDealInNewReleaseMessage" | "OriginalReleaseDateLaterThanReleaseDate" | "PrimaryArtistNameMissing" | "ResourceCorrupt" | "ResourceMissing" | "ResourceNotMeetingSpecifications" | "SignatureOrHashSumWrongOrMissing" | "UnsupportedUsage" | "UserDefined");
interface _ErncFileStatus extends Primitive._string { content: ErncFileStatus; }

/** A Type of action that is proposed. */
export type ErncProposedActionType = ("DoNotResendAffectedResource" | "DoNotResendRelease" | "ResendXmlOnly" | "ResendXmlAndResources" | "UserDefined");
interface _ErncProposedActionType extends Primitive._string { content: ErncProposedActionType; }

/** A Type of Message in the Release Notification Message Suite Standard. */
export type ErnMessageType = "NewReleaseMessage";
interface _ErnMessageType extends Primitive._string { content: ErnMessageType; }

/** A Type of Message in the Release Notification Message Suite Standard. */
export type ErnTestMessageType = ("NewReleaseMessage" | "PurgeReleaseMessage");
interface _ErnTestMessageType extends Primitive._string { content: ErnTestMessageType; }

/** A severity of the Error. */
export type ErrorSeverity = ("Critical" | "Information" | "Warning");
interface _ErrorSeverity extends Primitive._string { content: ErrorSeverity; }

/** A Type of Error. */
export type ErrorType = ("ConformanceError" | "LogicalError" | "UserDefined");
interface _ErrorType extends Primitive._string { content: ErrorType; }

/** A Type of Event. */
export type EventType = ("ActivityPeriod" | "Birth" | "Conceptualize" | "Death" | "Dissolution" | "FirstPerformance" | "Incorporation" | "LastPerformance" | "UserDefined");
interface _EventType extends Primitive._string { content: EventType; }

/** A Type of Reason for an exception. */
export type ExceptionReason = ("DisputedByLicensee" | "DisputedByRelinquishingPublisher" | "NotFound" | "UserDefined");
interface _ExceptionReason extends Primitive._string { content: ExceptionReason; }

/** A Type of expression indicating how it should be perceived. */
export type ExpressionType = ("Informative" | "Instructive");
interface _ExpressionType extends Primitive._string { content: ExpressionType; }

/** A Type of Resource pointed to by an ExternalLink. */
export type ExternallyLinkedResourceType = ("AdditionalMetadata" | "Logo" | "PromotionalImage" | "PromotionalInformation" | "PromotionalItem" | "Unknown" | "UserDefined");
interface _ExternallyLinkedResourceType extends Primitive._string { content: ExternallyLinkedResourceType; }

/** A Type of File. */
export type FileType = ("3DmFile" | "3G2File" | "3GpFile" | "7ZFile" | "8BiFile" | "AacFile" | "AccdbFile" | "AifFile" | "AiFile" | "AnaFile" | "AppFile" | "AsfFile" | "AspFile" | "AsxFile" | "AudFile" | "AviFile" | "BakFile" | "BatFile" | "BinFile" | "BmpFile" | "BtFile" | "BwfFile" | "CabFile" | "CerFile" | "CfgFile" | "CFile" | "CgiFile" | "ClassFile" | "ComFile" | "CplFile" | "CppFile" | "CsFile" | "CsrFile" | "CssFile" | "CsvFile" | "CurFile" | "DatFile" | "DbFile" | "DbxFile" | "DebFile" | "DllFile" | "DmgFile" | "DmpFile" | "DocFile" | "DocxFile" | "DrvFile" | "DrwFile" | "DsdFile" | "DtdFile" | "DvFile" | "DwgFile" | "DxfFile" | "EfxFile" | "EpsFile" | "ExeFile" | "FlaFile" | "FlvFile" | "FntFile" | "FonFile" | "GadgetFile" | "GamFile" | "GhoFile" | "GifFile" | "GpxFile" | "GzFile" | "HqxFile" | "HtmFile" | "HtmlFile" | "IffFile" | "InddFile" | "IniFile" | "IsoFile" | "JarFile" | "JavaFile" | "JpgFile" | "JsFile" | "JspFile" | "KeychainFile" | "KeyFile" | "KmlFile" | "LnkFile" | "LogFile" | "M3UFile" | "MaxFile" | "MdbFile" | "MFile" | "MidFile" | "MimFile" | "MovFile" | "Mp3File" | "Mp4File" | "MpaFile" | "MpgFile" | "MsgFile" | "NesFile" | "NeuFile" | "OriFile" | "OtfFile" | "PagesFile" | "PcmFile" | "PctFile" | "PdbFile" | "PdfFile" | "PhpFile" | "PifFile" | "PkgFile" | "PlFile" | "PlnFile" | "PluginFile" | "PngFile" | "PpsFile" | "PptFile" | "PptxFile" | "PrfFile" | "PsdFile" | "PsFile" | "PspimageFile" | "PtsFile" | "QxdFile" | "QxpFile" | "RaFile" | "RarFile" | "RelsFile" | "RmFile" | "RomFile" | "RssFile" | "RtfFile" | "SavFile" | "Sd2File" | "SdfFile" | "SitFile" | "SitxFile" | "SqlFile" | "SvgFile" | "SwfFile" | "SysFile" | "TarFile" | "TarGzFile" | "ThmFile" | "TifFile" | "TmpFile" | "ToastFile" | "TtfFile" | "TxtFile" | "UueFile" | "VbFile" | "VcdFile" | "VcfFile" | "VobFile" | "WavFile" | "WksFile" | "WmaFile" | "WmvFile" | "WpdFile" | "WpsFile" | "WsfFile" | "XhtmlFile" | "XllFile" | "XlsFile" | "XlsxFile" | "XmlFile" | "YuvFile" | "ZipFile" | "ZipxFile");
interface _FileType extends Primitive._string { content: FileType; }

/** A Type of Fingerprint Algorithm. */
export type FingerprintAlgorithmType = "UserDefined";
interface _FingerprintAlgorithmType extends Primitive._string { content: FingerprintAlgorithmType; }

/** The form of music. */
export type Form = ("Adagio" | "Allemande" | "Aria" | "ArtSong" | "Bagatelle" | "Ballad" | "Ballade" | "Ballata" | "Barcarolle" | "Bolero" | "CanCan" | "Canon" | "Cantata" | "Canzona" | "Caprice" | "Carol" | "Cavatina" | "Chaconne" | "Chanson" | "Concerto" | "Courante" | "Dance" | "Divertimento" | "Dumka" | "EightBarBlues" | "Estampie" | "Etude" | "Fanfare" | "Fantasy" | "Fugue" | "Furiant" | "Galliard" | "Gigue" | "Hymn" | "Improvisation" | "Interlude" | "Intermezzo" | "Laude" | "Lied" | "Madrigal" | "March" | "Mass" | "Mazurka" | "Minimal" | "Melodie" | "Minuet" | "MomentForm" | "Motet" | "Nocturne" | "Overture" | "Partita" | "Passacaglia" | "Pavane" | "PerpetuumMobile" | "Polonaise" | "PowerBallad" | "Prelude" | "Rag" | "Raga" | "Rhapsody" | "RhythmChanges" | "Ricercar" | "Rondo" | "Saltarello" | "Sarabande" | "Scherzo" | "Sequence" | "Serenade" | "SinfoniaConcertante" | "Sonata" | "Sonatina" | "Suite" | "SymphonicPoem" | "Symphony" | "Tarantella" | "Tiento" | "Toccata" | "TwelveBarBlues" | "UserDefined" | "Variation" | "VerseOnly" | "Vocalise" | "Waltz");
interface _Form extends Primitive._string { content: Form; }

/** A Type of FrameRate in frames per second. */
export type FrameRate = ("24" | "25" | "29.97" | "30");
interface _FrameRate extends Primitive._string { content: FrameRate; }

/** The gender of a Person. */
export type Gender = ("Androgynous" | "Feminine" | "Masculine" | "Unknown");
interface _Gender extends Primitive._string { content: Gender; }

/** The Gender of a Party. */
export type Gender_PIE = ("Female" | "Male" | "NotApplicable" | "NonBinary" | "NotStated" | "PreferNotToSay" | "Unknown" | "UserDefined");
interface _Gender_PIE extends Primitive._string { content: Gender_PIE; }

/** A Type of governing Agreement. */
export type GoverningAgreementType = ("SessionMusicUnionAgreement" | "UserDefined");
interface _GoverningAgreementType extends Primitive._string { content: GoverningAgreementType; }

/** A Type of HashSumAlgorithm. */
export type HashSumAlgorithmType = ("CRC32" | "MD2" | "MD4" | "MD4(MLNET)" | "MD5" | "MDC2" | "RMD160" | "SHA" | "SHA1" | "SHA2" | "SHA-224" | "SHA-256" | "SHA3" | "SHA-384" | "SHA-512" | "UserDefined");
interface _HashSumAlgorithmType extends Primitive._string { content: HashSumAlgorithmType; }

/** A Type of HDR video dynamic metadata. */
export type HdrVideoDynamicMetadataType = ("DolbyVisionEmbedded" | "DolbyVisionStandAlone");
interface _HdrVideoDynamicMetadataType extends Primitive._string { content: HdrVideoDynamicMetadataType; }

/** A Type of HDR video static metadata. */
export type HdrVideoStaticMetadataType = ("MaxCLL" | "MaxFALL");
interface _HdrVideoStaticMetadataType extends Primitive._string { content: HdrVideoStaticMetadataType; }

/** A Type of ImageCodec. */
export type ImageCodecType = ("GIF" | "JPEG" | "JPEG2000" | "PNG" | "TIFF" | "Unknown" | "UserDefined");
interface _ImageCodecType extends Primitive._string { content: ImageCodecType; }

/** A Type of Image. */
export type ImageType = ("BackCoverImage" | "BookletBackImage" | "BookletFrontImage" | "DocumentImage" | "FrontCoverImage" | "Icon" | "Logo" | "Photograph" | "Portrait" | "Poster" | "ProfilePicture" | "SocialBannerImage" | "TrayImage" | "Unknown" | "UserDefined" | "VideoScreenCapture" | "Wallpaper");
interface _ImageType extends Primitive._string { content: ImageType; }

/** A Manufacturer that builds Instruments. */
export type InstrumentManufacturer = "UserDefined";
interface _InstrumentManufacturer extends Primitive._string { content: InstrumentManufacturer; }

/** The Name of the Instrument model. */
export type InstrumentModel = "UserDefined";
interface _InstrumentModel extends Primitive._string { content: InstrumentModel; }

/** A Type of musical Instrument. */
export type InstrumentType = ("Accordion" | "Bandoneon" | "ChromaticButtonAccordion" | "Concertina" | "Cordovox" | "Melodeon" | "Musette" | "PianoAccordion" | "ToyAccordion" | "AcousticBassGuitar" | "BabyBass" | "Bass" | "ElectricBassGuitar" | "FretlessBassGuitar" | "PiccoloBass" | "UprightBass" | "WashtubBass" | "DrumMachine" | "Breakbeat" | "DrumKit" | "DrumSample" | "12-StringElectricGuitar" | "12-StringGuitar" | "AcousticGuitar" | "BahianGuitar" | "BajoSexto" | "BaritoneGuitar" | "BaroqueGuitar" | "ChapmanStick" | "NylonStringGuitar" | "DobroGuitar" | "ElectricGuitar" | "ElectricSitar" | "FryingPanGuitar" | "Guitar" | "Guitarron" | "LapSteelGuitar" | "Pedabro" | "PedalSteelGuitar" | "PortugueseGuitar" | "RenaissanceGuitar" | "RomanticGuitar" | "TenorGuitar" | "Tiple" | "TouchGuitar" | "Tres" | "ViolaCaipira" | "AcousticKeyboard" | "Celesta" | "Chamberlin" | "Clavichord" | "Clavinet" | "Dulcitone" | "ElectricPiano" | "Harpsichord" | "Keyboard" | "Mellotron" | "Optigan" | "Pianet" | "Rhodes" | "SampledKeyboard" | "Spinet" | "VakoOrchestron" | "Virginals" | "ElectricOrgan" | "HammondOrgan" | "LowreyOrgan" | "Organ" | "PipeOrgan" | "PositiveOrgan" | "PumpOrgan" | "BarrelOrgan" | "BicyclePump" | "ChurchBells" | "Comb" | "Dictophone" | "HohnerGuitaret" | "JewsHarp" | "Kazoo" | "MusicBox" | "Omnichord" | "OtherInstrument" | "SpectrasonicsOmnisphere" | "ToyPiano" | "Turntable" | "AfricanPercussion" | "AgogoBells" | "Angklung" | "Anvil" | "Atumpan" | "Balafon" | "BassDrum(Concert)" | "BassDrum(Kick)" | "Bata" | "BellTree" | "Bendir" | "Berimbau" | "BinghiDrum" | "Bodhran" | "BodyPercussion" | "Bombo" | "BomboLeguero" | "Bones" | "Bongos" | "Bottles" | "BrazilianPercussion" | "Cabasa" | "Caixa" | "Caja" | "Cajon" | "Calabash" | "Carillon" | "Castanet" | "Caxixi" | "Chimes" | "Chocalho" | "Clapstick" | "Claves" | "Claypot" | "Congas" | "Cowbell" | "Crotales" | "Cuica" | "Cymbal(Crash)" | "Cymbal(Ride)" | "Cymbal(Suspended)" | "Cymbals" | "Daf" | "Damaru" | "Davul" | "Dayereh" | "Defi" | "Dhol" | "Dholak" | "Djembe" | "Dohol" | "Doumbek" | "DrumSticks" | "Duggi" | "Dunun" | "ElephantBell" | "FingerClicks" | "FingerCymbals" | "FingerSnaps" | "Flexatone" | "FolkloricPercussion" | "FootStomp" | "Frog" | "Gambang" | "Gamelan" | "Ganga" | "GlassHarmonica" | "GlassHarp" | "Glockenspiel" | "Gong" | "Guacharaca" | "Guache" | "Guira" | "Guiro" | "HandBells" | "HandChimes" | "HandClaps" | "HiHatCymbal" | "JamBlock" | "Jawbone" | "Jawharp" | "Jug" | "Kanjira" | "Katsa" | "Kendang" | "Khamak" | "Khartal" | "Khol" | "KhongWongLek" | "KhongWongYai" | "Knuckles" | "LatinPercussion" | "Lithophone" | "Lokole" | "Madal" | "Maracas" | "Marimba" | "Marimbaphone" | "Marimbula" | "Mazhar" | "Kalimba" | "MetalCans" | "MouthPercussion" | "Mridangam" | "Muharsing" | "Naal" | "Nagara" | "OboromDrum" | "Octoban" | "OrchestralPercussion" | "PaddleDrums" | "Pandeiro" | "PercussionInstrument" | "PitchedPercussionInstrument" | "PongLang" | "PotsAndPans" | "Qarkabeb" | "Rainstick" | "Ranat" | "Ratchet" | "Rattle" | "RecoReco" | "Repinique" | "RhythmStick" | "Riq" | "Rnga" | "Rolmo" | "Rototoms" | "Sabar" | "SandBlocks" | "Saw" | "Scratcher" | "Shaker" | "Shekere" | "SingingBowls" | "Sistrum" | "Slapstick" | "SleighBells" | "SnareDrum" | "SnareDrum(Marching)" | "Spoons" | "SpringDrum" | "SteelDrums" | "Sticks" | "Surdo" | "Taal" | "Taarija" | "Tabla" | "Tabor" | "Taiko" | "TalkingDrum" | "Tambora" | "Tamborim" | "Tambourine" | "TaongaPuoro" | "Tar(Percussion)" | "Tarol" | "TempleBell" | "TempleBlocks" | "TenorDrum" | "Thavil" | "ThunderSheet" | "TibetanBells" | "Timbales" | "Timbau" | "Timpani" | "Tingsha" | "Tompak" | "Toms" | "TongueDrum" | "Triangle" | "Txalaparta" | "Udu" | "UliUli" | "UnpitchedPercussionInstrument" | "Urumee" | "Vibraphone" | "Vibraslap" | "Washboard" | "Waterphone" | "WindChimes" | "WindMachine" | "WobbleBoard" | "WoodBlock" | "Xylophone" | "Xylorimba" | "Zerbaghali" | "ZydecoRubboard" | "Fortepiano" | "GrandPiano" | "Lutheal" | "Piano" | "PianoHarp" | "Pianola" | "PreparedPiano" | "SquarePiano" | "TackPiano" | "UprightPiano" | "AnimalSounds" | "Applause" | "BirdSong" | "CarSounds" | "Chatter" | "ChewingSounds" | "Gizmo" | "Gunshots" | "MagneticTapeTreatments" | "OrchestralHit" | "RecordNoise" | "Siren" | "SoundDesign" | "SoundEffects" | "TrainSounds" | "Treatments" | "UnintendedArtifacts" | "5-StringBanjo" | "AfricanHarp" | "AltoViol" | "AndeanHarp" | "ArchLute" | "Autoharp" | "Baglama" | "Balalaika" | "Bandura" | "Bandurria" | "Banhu" | "Banjo" | "BanjoGuitar" | "Banjolin" | "BaroqueCello" | "BaroqueViola" | "BaroqueViolin" | "Baryton" | "BassBanjo" | "BassCittern" | "BassRebec" | "BassViol" | "BassoDaBraccio" | "Biwa" | "Bouzouki" | "BowedStrings" | "Bozoq" | "BufoBass" | "Cavaquinho" | "Cello" | "CelloBanjo" | "CelticHarp" | "Charango" | "Cimbalom" | "Citole" | "Cittern" | "ConcertHarp" | "Craviola" | "Crwth" | "Cuatro" | "Cumbus" | "DanBau" | "DanTranh" | "Dilruba" | "Dombra" | "Domra" | "DoubleBass" | "DoubleHarp" | "DoubleViolin" | "DoublebassViol" | "Dranyen" | "Dutar" | "Dzuddahord" | "Ektara" | "Electric6StringViolin" | "ElectricCello" | "ElectricHarp" | "ElectricMandolin" | "ElectricViola" | "ElectricViolin" | "ElectroAcousticHurdyGurdy" | "Ennanga" | "EpinetteDesVosges" | "Erhu" | "Esraj" | "Fiddle" | "FolkHarp" | "Gadulka" | "Gardon" | "Gayageum" | "Ghaychak" | "Gittern" | "Guqin" | "Gusli" | "Guzheng" | "Haegeum" | "HammeredDulcimer" | "HammeredStrings" | "HardangerFiddle" | "Harp" | "Huapanguera" | "HurdyGurdy" | "IrishBouzouki" | "Jakhay" | "JaranaJarocha" | "Jinghu" | "Kacapi" | "Kantele" | "Kanun" | "Kemenche" | "Khim" | "Kora" | "Koto" | "Kugo" | "Langeleik" | "Laouto" | "Leona" | "Lirone" | "Lute" | "LyraViol" | "Lyre" | "Mandocello" | "Mandola" | "Mandolele" | "Mandolin" | "Mandolino" | "Mandore" | "Marxophone" | "MedievalFiddle" | "MedievalHarp" | "MohanVeena" | "MusicalBow" | "Ngoni" | "Njarka" | "Nyatiti" | "Nyckelharpa" | "Organistrum" | "Orpharion" | "Oud" | "Pandura" | "ParaguayanHarp" | "Phin" | "Phonofiddle" | "Pipa" | "PluckedDulcimer" | "PluckedStrings" | "Psaltery" | "Rabel" | "Rebab" | "Rebec" | "Santoor" | "Sarangi" | "Sarod" | "Saung" | "SawDuang" | "Shamisen" | "Simsimiyya" | "Sintir" | "Sitar" | "SopranoDomra" | "StringInstrument" | "StrohlViolin" | "Surbahar" | "Swarmandal" | "Tambura" | "Tanbour" | "Tanpura" | "Tar(String)" | "TenorBanjo" | "TenorRebec" | "TenorViol" | "Theorbo" | "Timple" | "TogamanGuitarViol" | "TrebleRebec" | "TrebleViol" | "TrombaMarina" | "Tumbi" | "Tzouras" | "Ukulele" | "Valiha" | "Veena" | "VenezuelanHarp" | "VeracruzHarp" | "ViTar" | "VichitraVeena" | "Vielle" | "Vihuela" | "Viol" | "Viola" | "ViolaDAmore" | "ViolaPomposa" | "Violin" | "ViolinoPiccolo" | "WelshTripleHarp" | "WireStrungHarp" | "Xalam" | "Yangqin" | "YayliTambur" | "Yokin" | "Yueqin" | "Zeze" | "Zhonghu" | "Zither" | "ArpeggiatingSynth" | "SynthBass" | "SynthBrass" | "SynthChoir" | "SynthFX" | "SynthLead" | "SynthPad" | "SynthSteelDrums" | "SynthStrings" | "Synthesizer" | "GroupBackgroundVocalists" | "BoyVoice" | "ChildVoice" | "ChildrensBackgroundVocalist" | "FemaleVoice" | "FemaleBackgroundVocalist" | "GirlVoice" | "LeadVocalist" | "MaleVoice" | "MaleBackgroundVocalist" | "MixedVoice" | "MixedBackgroundVocalist" | "NeutralVoice" | "Voice" | "Alboka" | "Alpenhorn" | "AltoClarinet" | "AltoCrumhorn" | "AltoFlute" | "AltoHorn" | "AltoRecorder" | "AltoSackbut" | "AltoSaxophone" | "AltoShawm" | "AltoTrombone" | "Apito" | "Arghul" | "Aulochrome" | "Bagpipes" | "Bansuri" | "BaritoneHorn" | "BaritoneOboe" | "BaritoneSaxophone" | "BaroqueBassoon" | "BaroqueClarinet" | "BaroqueFlute" | "BaroqueOboe" | "BaroqueRecorder" | "BassClarinet" | "BassDulcian" | "BassFlute" | "BassHarmonica" | "BassRecorder" | "BassSackbut" | "BassSaxophone" | "BassShawm" | "BassTrombone" | "BassTrumpet" | "BassTuba" | "BassetClarinet" | "BassetHorn" | "Bassoon" | "Bawu" | "BirdWhistle" | "Bombard" | "BosunsWhistle" | "BrassInstrument" | "Bugle" | "Calliope" | "Chalumeau" | "ChromaticHarmonica" | "Cimbasso" | "Clarinet" | "ClarinoTrumpet" | "ConchShell" | "ContraAltoClarinet" | "ContrabassClarinet" | "ContrabassRecorder" | "ContrabassSarrusophone" | "ContrabassSaxophone" | "ContrabassTrombone" | "Contrabassoon" | "Cornet" | "Cornetto" | "Crumhorn" | "Daegeum" | "Didgeridoo" | "Diple" | "Dizi" | "Duduk" | "Dulcian" | "Dungchen" | "EnglishHorn" | "Euphonium" | "Fife" | "Fiscorn" | "Flabiol" | "Flageolet" | "Floyera" | "Flugelhorn" | "Flute" | "FrenchHorn" | "Fujara" | "Gasba" | "Gemshorn" | "GermanFlute" | "Ghaita" | "GreatBassRecorder" | "Guanzi" | "Gyaling" | "Harmonica" | "Heckelphone" | "Helicon" | "HeraldTrumpet" | "HighlandPipes" | "HotFountainPen" | "IrishLowWhistle" | "Jagdhorn" | "Kaval" | "KeyedTrumpet" | "Khene" | "Khlui" | "Launeddas" | "Lur" | "Mellophone" | "Melodica" | "Mijwiz" | "MiniatureKhene" | "Mizmar" | "MouthOrgan" | "Nadaswaram" | "Nai" | "NativeAmericanFlute" | "NaturalHorn" | "NaturalTrumpet" | "NeyFlute" | "Oboe" | "OboeDAmore" | "OboeDaCaccia" | "Ocarina" | "Ophicleide" | "Paixiao" | "PanFlute" | "Pi" | "PiccoloClarinet" | "PiccoloFlute" | "PiccoloTrumpet" | "Pinkillu" | "PocketTrumpet" | "PoliceWhistle" | "PostHorn" | "Pungi" | "Quena" | "Quenacho" | "Rackett" | "Rauschpfeife" | "Recorder" | "ReedInstrument" | "Regal" | "Rondador" | "Sackbut" | "Sarrusophone" | "Saxophone" | "Serpent" | "Shakuhachi" | "Shawm" | "Shenai" | "Shelltone" | "Sheng" | "Sho" | "Shofar" | "ShrutiBox" | "ShviWhistle" | "Siku" | "SlideSaxophone" | "SlideTrumpet" | "SlideWhistle" | "SopraninoRecorder" | "SopraninoSaxophone" | "SopranoClarinet" | "SopranoCornet" | "SopranoCrumhorn" | "SopranoDulcian" | "SopranoRecorder" | "SopranoSaxophone" | "SopranoShawm" | "SopranoTrumpet" | "Sordun" | "Sousaphone" | "Suling" | "Suona" | "Tarka" | "Tarogato" | "TenorCrumhorn" | "TenorDulcian" | "TenorFlute" | "TenorRecorder" | "TenorSackbut" | "TenorSaxophone" | "TenorShawm" | "TenorTrombone" | "TinWhistle" | "Trombone" | "Trumpet" | "Tuba" | "Tusselfloyte" | "UilleanPipes" | "ValveTrombone" | "Vuvuzela" | "WagnerTuba" | "WillowFlute" | "WindInstrument" | "WoodFlute" | "WoodTrumpet" | "Wot" | "Xaphoon" | "Xiao" | "Xun" | "Zummara" | "Zurna" | "Choir" | "PercussionSection" | "StringSection" | "WindSection" | "UserDefined");
interface _InstrumentType extends Primitive._string { content: InstrumentType; }

/** The Type of intensity. */
export type Intensity = ("High" | "Low" | "Medium" | "UserDefined");
interface _Intensity extends Primitive._string { content: Intensity; }

/** An ISO 3166-1 two-letter code representing a country. */
export type Iso31661TerritoryCode = ("AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CS" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW");
interface _Iso31661TerritoryCode extends Primitive._string { content: Iso31661TerritoryCode; }

/** An ISO639-1 or 639-2 code representing a Language. */
export type Iso639Part12LanguageCode = ("aa" | "aar" | "ab" | "abk" | "ae" | "ave" | "af" | "afr" | "ak" | "aka" | "am" | "amh" | "an" | "arg" | "ar" | "ara" | "as" | "asm" | "av" | "ava" | "ay" | "aym" | "az" | "aze" | "ba" | "bak" | "be" | "bel" | "bg" | "bul" | "bh" | "bih" | "bi" | "bis" | "bm" | "bam" | "bn" | "ben" | "bo" | "bod" | "br" | "bre" | "bs" | "bos" | "ca" | "cat" | "ce" | "che" | "ch" | "cha" | "co" | "cos" | "cr" | "cre" | "cs" | "ces" | "cu" | "chu" | "cv" | "chv" | "cy" | "cym" | "da" | "dan" | "de" | "deu" | "dv" | "div" | "dz" | "dzo" | "ee" | "ewe" | "el" | "ell" | "en" | "eng" | "eo" | "epo" | "es" | "spa" | "et" | "est" | "eu" | "eus" | "fa" | "fas" | "ff" | "ful" | "fi" | "fin" | "fj" | "fij" | "fo" | "fao" | "fr" | "fra" | "fy" | "fry" | "ga" | "gle" | "gd" | "gla" | "gl" | "glg" | "gn" | "grn" | "gu" | "guj" | "gv" | "glv" | "ha" | "hau" | "he" | "heb" | "hi" | "hin" | "ho" | "hmo" | "hr" | "hrv" | "ht" | "hat" | "hu" | "hun" | "hy" | "hye" | "hz" | "her" | "ia" | "ina" | "id" | "ind" | "ie" | "ile" | "ig" | "ibo" | "ii" | "iii" | "ik" | "ipk" | "io" | "ido" | "is" | "isl" | "it" | "ita" | "iu" | "iku" | "ja" | "jpn" | "jv" | "jav" | "ka" | "kat" | "kg" | "kon" | "ki" | "kik" | "kj" | "kua" | "kk" | "kaz" | "kl" | "kal" | "km" | "khm" | "kn" | "kan" | "ko" | "kor" | "kr" | "kau" | "ks" | "kas" | "ku" | "kur" | "kv" | "kom" | "kw" | "cor" | "ky" | "kir" | "la" | "lat" | "lb" | "ltz" | "lg" | "lug" | "li" | "lim" | "ln" | "lin" | "lo" | "lao" | "lt" | "lit" | "lu" | "lub" | "lv" | "lav" | "mg" | "mlg" | "mh" | "mah" | "mi" | "mri" | "mk" | "mkd" | "ml" | "mal" | "mn" | "mon" | "mo" | "mr" | "mar" | "ms" | "msa" | "mt" | "mlt" | "my" | "mya" | "na" | "nau" | "nb" | "nob" | "nd" | "nde" | "ne" | "nep" | "ng" | "ndo" | "nl" | "nld" | "nn" | "nno" | "no" | "nor" | "nr" | "nbl" | "nv" | "nav" | "ny" | "nya" | "oc" | "oci" | "oj" | "oji" | "om" | "orm" | "or" | "ori" | "os" | "oss" | "pa" | "pan" | "pi" | "pli" | "pl" | "pol" | "ps" | "pus" | "pt" | "por" | "qu" | "que" | "rm" | "roh" | "rn" | "run" | "ro" | "ron" | "ru" | "rus" | "rw" | "kin" | "sa" | "san" | "sc" | "srd" | "sd" | "snd" | "se" | "sme" | "sg" | "sag" | "si" | "sin" | "sk" | "slk" | "sl" | "slv" | "sm" | "smo" | "sn" | "sna" | "so" | "som" | "sq" | "sqi" | "sr" | "srp" | "ss" | "ssw" | "st" | "sot" | "su" | "sun" | "sv" | "swe" | "sw" | "swa" | "ta" | "tam" | "te" | "tel" | "tg" | "tgk" | "th" | "tha" | "ti" | "tir" | "tk" | "tuk" | "tl" | "tgl" | "tn" | "tsn" | "to" | "ton" | "tr" | "tur" | "ts" | "tso" | "tt" | "tat" | "tw" | "twi" | "ty" | "tah" | "ug" | "uig" | "uk" | "ukr" | "ur" | "urd" | "uz" | "uzb" | "ve" | "ven" | "vi" | "vie" | "vo" | "vol" | "wa" | "wln" | "wo" | "wol" | "xh" | "xho" | "yi" | "yid" | "yo" | "yor" | "za" | "zha" | "zh" | "zho" | "zu" | "zul" | "ace" | "ach" | "ada" | "ady" | "afa" | "afh" | "ain" | "akk" | "ale" | "alg" | "alt" | "ang" | "anp" | "apa" | "arc" | "arn" | "arp" | "art" | "arw" | "ast" | "ath" | "aus" | "awa" | "bad" | "bai" | "bal" | "ban" | "bas" | "bat" | "bej" | "bem" | "ber" | "bgc" | "bho" | "bik" | "bin" | "bla" | "bnt" | "bra" | "btk" | "bua" | "bug" | "byn" | "cad" | "cai" | "car" | "cau" | "ceb" | "cel" | "chb" | "chg" | "chk" | "chm" | "chn" | "cho" | "chp" | "chr" | "chy" | "cmc" | "cnr" | "cop" | "cpe" | "cpf" | "cpp" | "crh" | "crp" | "csb" | "cus" | "dak" | "dar" | "day" | "del" | "den" | "dgr" | "din" | "doi" | "dra" | "dsb" | "dua" | "dum" | "dyu" | "efi" | "egy" | "eka" | "elx" | "enm" | "ewo" | "fan" | "fat" | "fil" | "fiu" | "fon" | "frm" | "fro" | "frr" | "frs" | "fur" | "gaa" | "gay" | "gba" | "gem" | "gez" | "gil" | "gmh" | "goh" | "gon" | "gor" | "got" | "grb" | "grc" | "gsw" | "gwi" | "hai" | "haw" | "hil" | "him" | "hit" | "hmn" | "hsb" | "hup" | "iba" | "ijo" | "ilo" | "inc" | "ine" | "inh" | "ira" | "iro" | "jbo" | "jpr" | "jrb" | "kaa" | "kab" | "kac" | "kam" | "kar" | "kaw" | "kbd" | "kha" | "khi" | "kho" | "kmb" | "kok" | "kos" | "kpe" | "krc" | "krl" | "kro" | "kru" | "kum" | "kut" | "lad" | "lah" | "lam" | "lez" | "lol" | "loz" | "lua" | "lui" | "lun" | "luo" | "lus" | "mad" | "mag" | "mai" | "mak" | "man" | "map" | "mas" | "mdf" | "mdr" | "men" | "mga" | "mic" | "min" | "mis" | "mkh" | "mnc" | "mni" | "mno" | "moh" | "mos" | "mul" | "mun" | "mus" | "mwl" | "mwr" | "myn" | "myv" | "nah" | "nai" | "nap" | "nds" | "new" | "nia" | "nic" | "niu" | "nog" | "non" | "nqo" | "nso" | "nub" | "nwc" | "nym" | "nyn" | "nyo" | "nzi" | "osa" | "ota" | "oto" | "paa" | "pag" | "pal" | "pam" | "pap" | "pau" | "peo" | "phi" | "phn" | "pon" | "pra" | "pro" | "qqa" | "qqb" | "qqc" | "qqd" | "qqe" | "qqf" | "qqg" | "qqh" | "qqi" | "qqj" | "raj" | "rap" | "rar" | "roa" | "rom" | "rup" | "sad" | "sah" | "sai" | "sal" | "sam" | "sas" | "sat" | "scn" | "sco" | "sel" | "sem" | "sga" | "sgn" | "shn" | "sid" | "sio" | "sit" | "sla" | "sma" | "smi" | "smj" | "smn" | "sms" | "snk" | "sog" | "son" | "srn" | "srr" | "ssa" | "suk" | "sus" | "sux" | "syc" | "syr" | "tai" | "tem" | "ter" | "tet" | "tig" | "tiv" | "tkl" | "tlh" | "tli" | "tmh" | "tog" | "tpi" | "tsi" | "tum" | "tup" | "tut" | "tvl" | "tyv" | "udm" | "uga" | "umb" | "und" | "vai" | "vot" | "wak" | "wal" | "war" | "was" | "wen" | "xal" | "yao" | "yap" | "ypk" | "zap" | "zbl" | "zen" | "zgh" | "znd" | "zun" | "zxx" | "zza");
interface _Iso639Part12LanguageCode extends Primitive._string { content: Iso639Part12LanguageCode; }

/** An ISO639-3 code representing a Language (Source: www.sil.org/iso639-3/). */
export type Iso639Part3LanguageCode = ("aaa" | "cmn" | "gbm" | "gcf" | "hne" | "jam" | "kfy" | "khw" | "mcm" | "mup" | "sck" | "scl" | "spv" | "tcy" | "yue");
interface _Iso639Part3LanguageCode extends Primitive._string { content: Iso639Part3LanguageCode; }

/** An ISO4217 three-letter code representing a Currency. */
export type IsoCurrencyCode = ("AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYR" | "BZD" | "CAD" | "CDF" | "CHF" | "CLF" | "CLP" | "CNY" | "COP" | "COU" | "CRC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLE" | "SLL" | "SOS" | "SRD" | "SSP" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "UYI" | "UYU" | "UZS" | "VED" | "VES" | "VND" | "VUV" | "WST" | "XAF" | "XCD" | "XOF" | "XPF" | "YER" | "ZAR" | "ZMW" | "ZWG");
interface _IsoCurrencyCode extends Primitive._string { content: IsoCurrencyCode; }

/** An ISO639 code representing a Language (Source of 639-3 codes: www.sil.org/iso639-3/). */
export type IsoLanguageCode = ("aa" | "aar" | "ab" | "abk" | "ae" | "ave" | "af" | "afr" | "ak" | "aka" | "am" | "amh" | "an" | "arg" | "ar" | "ara" | "as" | "asm" | "av" | "ava" | "ay" | "aym" | "az" | "aze" | "ba" | "bak" | "be" | "bel" | "bg" | "bul" | "bh" | "bih" | "bi" | "bis" | "bm" | "bam" | "bn" | "ben" | "bo" | "bod" | "br" | "bre" | "bs" | "bos" | "ca" | "cat" | "ce" | "che" | "ch" | "cha" | "co" | "cos" | "cr" | "cre" | "cs" | "ces" | "cu" | "chu" | "cv" | "chv" | "cy" | "cym" | "da" | "dan" | "de" | "deu" | "dv" | "div" | "dz" | "dzo" | "ee" | "ewe" | "el" | "ell" | "en" | "eng" | "eo" | "epo" | "es" | "spa" | "et" | "est" | "eu" | "eus" | "fa" | "fas" | "ff" | "ful" | "fi" | "fin" | "fj" | "fij" | "fo" | "fao" | "fr" | "fra" | "fy" | "fry" | "ga" | "gle" | "gd" | "gla" | "gl" | "glg" | "gn" | "grn" | "gu" | "guj" | "gv" | "glv" | "ha" | "hau" | "he" | "heb" | "hi" | "hin" | "ho" | "hmo" | "hr" | "hrv" | "ht" | "hat" | "hu" | "hun" | "hy" | "hye" | "hz" | "her" | "ia" | "ina" | "id" | "ind" | "ie" | "ile" | "ig" | "ibo" | "ii" | "iii" | "ik" | "ipk" | "io" | "ido" | "is" | "isl" | "it" | "ita" | "iu" | "iku" | "ja" | "jpn" | "jv" | "jav" | "ka" | "kat" | "kg" | "kon" | "ki" | "kik" | "kj" | "kua" | "kk" | "kaz" | "kl" | "kal" | "km" | "khm" | "kn" | "kan" | "ko" | "kor" | "kr" | "kau" | "ks" | "kas" | "ku" | "kur" | "kv" | "kom" | "kw" | "cor" | "ky" | "kir" | "la" | "lat" | "lb" | "ltz" | "lg" | "lug" | "li" | "lim" | "ln" | "lin" | "lo" | "lao" | "lt" | "lit" | "lu" | "lub" | "lv" | "lav" | "mg" | "mlg" | "mh" | "mah" | "mi" | "mri" | "mk" | "mkd" | "ml" | "mal" | "mn" | "mon" | "mo" | "mr" | "mar" | "ms" | "msa" | "mt" | "mlt" | "my" | "mya" | "na" | "nau" | "nb" | "nob" | "nd" | "nde" | "ne" | "nep" | "ng" | "ndo" | "nl" | "nld" | "nn" | "nno" | "no" | "nor" | "nr" | "nbl" | "nv" | "nav" | "ny" | "nya" | "oc" | "oci" | "oj" | "oji" | "om" | "orm" | "or" | "ori" | "os" | "oss" | "pa" | "pan" | "pi" | "pli" | "pl" | "pol" | "ps" | "pus" | "pt" | "por" | "qu" | "que" | "rm" | "roh" | "rn" | "run" | "ro" | "ron" | "ru" | "rus" | "rw" | "kin" | "sa" | "san" | "sc" | "srd" | "sd" | "snd" | "se" | "sme" | "sg" | "sag" | "si" | "sin" | "sk" | "slk" | "sl" | "slv" | "sm" | "smo" | "sn" | "sna" | "so" | "som" | "sq" | "sqi" | "sr" | "srp" | "ss" | "ssw" | "st" | "sot" | "su" | "sun" | "sv" | "swe" | "sw" | "swa" | "ta" | "tam" | "te" | "tel" | "tg" | "tgk" | "th" | "tha" | "ti" | "tir" | "tk" | "tuk" | "tl" | "tgl" | "tn" | "tsn" | "to" | "ton" | "tr" | "tur" | "ts" | "tso" | "tt" | "tat" | "tw" | "twi" | "ty" | "tah" | "ug" | "uig" | "uk" | "ukr" | "ur" | "urd" | "uz" | "uzb" | "ve" | "ven" | "vi" | "vie" | "vo" | "vol" | "wa" | "wln" | "wo" | "wol" | "xh" | "xho" | "yi" | "yid" | "yo" | "yor" | "za" | "zha" | "zh" | "zho" | "zu" | "zul" | "ace" | "ach" | "ada" | "ady" | "afa" | "afh" | "ain" | "akk" | "ale" | "alg" | "alt" | "ang" | "anp" | "apa" | "arc" | "arn" | "arp" | "art" | "arw" | "ast" | "ath" | "aus" | "awa" | "bad" | "bai" | "bal" | "ban" | "bas" | "bat" | "bej" | "bem" | "ber" | "bgc" | "bho" | "bik" | "bin" | "bla" | "bnt" | "bra" | "btk" | "bua" | "bug" | "byn" | "cad" | "cai" | "car" | "cau" | "ceb" | "cel" | "chb" | "chg" | "chk" | "chm" | "chn" | "cho" | "chp" | "chr" | "chy" | "cmc" | "cnr" | "cop" | "cpe" | "cpf" | "cpp" | "crh" | "crp" | "csb" | "cus" | "dak" | "dar" | "day" | "del" | "den" | "dgr" | "din" | "doi" | "dra" | "dsb" | "dua" | "dum" | "dyu" | "efi" | "egy" | "eka" | "elx" | "enm" | "ewo" | "fan" | "fat" | "fil" | "fiu" | "fon" | "frm" | "fro" | "frr" | "frs" | "fur" | "gaa" | "gay" | "gba" | "gem" | "gez" | "gil" | "gmh" | "goh" | "gon" | "gor" | "got" | "grb" | "grc" | "gsw" | "gwi" | "hai" | "haw" | "hil" | "him" | "hit" | "hmn" | "hsb" | "hup" | "iba" | "ijo" | "ilo" | "inc" | "ine" | "inh" | "ira" | "iro" | "jbo" | "jpr" | "jrb" | "kaa" | "kab" | "kac" | "kam" | "kar" | "kaw" | "kbd" | "kha" | "khi" | "kho" | "kmb" | "kok" | "kos" | "kpe" | "krc" | "krl" | "kro" | "kru" | "kum" | "kut" | "lad" | "lah" | "lam" | "lez" | "lol" | "loz" | "lua" | "lui" | "lun" | "luo" | "lus" | "mad" | "mag" | "mai" | "mak" | "man" | "map" | "mas" | "mdf" | "mdr" | "men" | "mga" | "mic" | "min" | "mis" | "mkh" | "mnc" | "mni" | "mno" | "moh" | "mos" | "mul" | "mun" | "mus" | "mwl" | "mwr" | "myn" | "myv" | "nah" | "nai" | "nap" | "nds" | "new" | "nia" | "nic" | "niu" | "nog" | "non" | "nqo" | "nso" | "nub" | "nwc" | "nym" | "nyn" | "nyo" | "nzi" | "osa" | "ota" | "oto" | "paa" | "pag" | "pal" | "pam" | "pap" | "pau" | "peo" | "phi" | "phn" | "pon" | "pra" | "pro" | "qqa" | "qqb" | "qqc" | "qqd" | "qqe" | "qqf" | "qqg" | "qqh" | "qqi" | "qqj" | "raj" | "rap" | "rar" | "roa" | "rom" | "rup" | "sad" | "sah" | "sai" | "sal" | "sam" | "sas" | "sat" | "scn" | "sco" | "sel" | "sem" | "sga" | "sgn" | "shn" | "sid" | "sio" | "sit" | "sla" | "sma" | "smi" | "smj" | "smn" | "sms" | "snk" | "sog" | "son" | "srn" | "srr" | "ssa" | "suk" | "sus" | "sux" | "syc" | "syr" | "tai" | "tem" | "ter" | "tet" | "tig" | "tiv" | "tkl" | "tlh" | "tli" | "tmh" | "tog" | "tpi" | "tsi" | "tum" | "tup" | "tut" | "tvl" | "tyv" | "udm" | "uga" | "umb" | "und" | "vai" | "vot" | "wak" | "wal" | "war" | "was" | "wen" | "xal" | "yao" | "yap" | "ypk" | "zap" | "zbl" | "zen" | "zgh" | "znd" | "zun" | "zxx" | "zza" | "aaa" | "cmn" | "gbm" | "gcf" | "hne" | "jam" | "kfy" | "khw" | "mcm" | "mup" | "sck" | "scl" | "spv" | "tcy" | "yue");
interface _IsoLanguageCode extends Primitive._string { content: IsoLanguageCode; }

/** An ISO 3166-1 two-letter code representing a country or an ISO 3166-2 code representing a principal subdivision of a country. ISO 3166-2 codes consist of two parts separated by a hyphen: an ISO 3166-1 code and a string of up to three characters. Note: only selected ISO 3166-2 codes are included. */
export type IsoTerritoryCode = ("AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CS" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ES-CE" | "ES-CN" | "ES-ML" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW");
interface _IsoTerritoryCode extends Primitive._string { content: IsoTerritoryCode; }

/** A Status of an ISWC. */
export type IswcStatus = ("Archived" | "Preferred" | "Provisional");
interface _IswcStatus extends Primitive._string { content: IswcStatus; }

/** A Type of LabelName. */
export type LabelNameType = ("DisplayLabelName" | "UserDefined");
interface _LabelNameType extends Primitive._string { content: LabelNameType; }

/** A Type of Label. */
export type LabelType = ("DisplayLabel" | "UserDefined");
interface _LabelType extends Primitive._string { content: LabelType; }

/** The Type of Adaptation of an audio-visual Resource for a specific audience and/or language. */
export type LanguageLocalizationType = ("Dubbed" | "SubTitled" | "Multilingual" | "Original");
interface _LanguageLocalizationType extends Primitive._string { content: LanguageLocalizationType; }

/** A Type of license resord. */
export type LicenseRecord = ("HasLicense" | "HasNoLicense" | "Unknown");
interface _LicenseRecord extends Primitive._string { content: LicenseRecord; }

/** A Type of Reason for a refusing a License or Claim. */
export type LicenseRefusalReason = ("UserDefined" | "WorkInPublicDomain");
interface _LicenseRefusalReason extends Primitive._string { content: LicenseRefusalReason; }

/** A Type of Reason for a rejecting a License. */
export type LicenseRejectionReason = ("DisagreementOverRoyalties" | "DisagreementOverScopeOfLicense" | "DuplicateLicenseRequestNumber" | "LicenseBlocked" | "LicenseExists" | "LicenseNotNeeded" | "ReferencedDocumentMissing" | "ShareSplitsDiffer" | "WorkInPublicDomain" | "WorkUsedMultipleTimes" | "WrongAddressee" | "UserDefined");
interface _LicenseRejectionReason extends Primitive._string { content: LicenseRejectionReason; }

/** A Status for an Acknowledgement of a link. */
export type LinkAcknowledgementStatus = ("Accepted" | "Acknowledged" | "Conflict" | "UserDefined");
interface _LinkAcknowledgementStatus extends Primitive._string { content: LinkAcknowledgementStatus; }

/** A description of a link. */
export type LinkDescription = ("Booklet" | "Caption" | "ChapterImage" | "CoverArt" | "Lyrics" | "SubTitle" | "VideoScreenCapture" | "UserDefined");
interface _LinkDescription extends Primitive._string { content: LinkDescription; }

/** The Type of Lyrics. */
export type LyricsType = ("Chorus" | "ChorusAndVerse" | "Complete" | "FirstLineOfText" | "Hook" | "JazzScats" | "Stanza" | "Unknown" | "UserDefined" | "Verse");
interface _LyricsType extends Primitive._string { content: LyricsType; }

/** A Type of Measurement according to the entity to which it applies. */
export type MeasurementType = ("BothAudioAndVideo" | "EitherAudioOrVideo" | "Audio" | "Video");
interface _MeasurementType extends Primitive._string { content: MeasurementType; }

/** A Type of membership. */
export type MembershipType = ("NationalMember" | "RegionalMember" | "WorldwideMember");
interface _MembershipType extends Primitive._string { content: MembershipType; }

/** A Type of action requested in a Message. */
export type MessageActionType = ("BackCatalogDelivery" | "HighPriorityDelivery" | "NewReleaseDelivery" | "ReDelivery" | "TakeDown" | "UserDefined");
interface _MessageActionType extends Primitive._string { content: MessageActionType; }

/** A Type of Message according to its operational status. */
export type MessageControlType = ("LiveMessage" | "TestMessage");
interface _MessageControlType extends Primitive._string { content: MessageControlType; }

/** A Purpose of Message. */
export type MessagePurpose = ("License" | "NdmaLicense" | "Acknowledgement");
interface _MessagePurpose extends Primitive._string { content: MessagePurpose; }

/** A Type of Message in a DDEX namespace. */
export type MessageType = ("LicenseMessage" | "LicenseRequestMessage" | "LicenseRevocationMessage" | "LoDConfirmationMessage" | "LoDMessage" | "MusicalWorkClaimNotificationMessage" | "MusicalWorkClaimRequestMessage" | "MusicalWorkClaimNotificationRecallMessage" | "MusicalWorkClaimRequestRecallMessage");
interface _MessageType extends Primitive._string { content: MessageType; }

/** A Type of metadata source. */
export type MetadataSourceType = ("Journalist" | "MetadataProvider" | "RightsController" | "UserDefined");
interface _MetadataSourceType extends Primitive._string { content: MetadataSourceType; }

/** A Reason for a missing link. */
export type MissingLinkReason = ("NoLinkFound" | "NoMatchFound" | "UserDefined");
interface _MissingLinkReason extends Primitive._string { content: MissingLinkReason; }

/** The Type of mode. */
export type Mode = "UserDefined";
interface _Mode extends Primitive._string { content: Mode; }

/** A mood. */
export type Mood = ("Angry" | "Anticipation" | "Chill" | "Confident" | "Dark" | "Disgust" | "Dramatic" | "Empowered" | "Energized" | "Evil" | "FeelingDown" | "FeelingGood" | "Free" | "Happy" | "Hungover" | "Inspiring" | "LowKey" | "Mellow" | "Motivated" | "Peaceful" | "Quiet" | "RainyDay" | "Romantic" | "Sad" | "Soulful" | "Surprise" | "Swagger" | "UserDefined");
interface _Mood extends Primitive._string { content: Mood; }

/** A Type of source for a Mood or a Theme. */
export type MoodOrThemeType = ("Lyrics" | "LyricsAndMelody" | "Melody");
interface _MoodOrThemeType extends Primitive._string { content: MoodOrThemeType; }

/** A Role played by a Contributor in relation to a MusicalWork. */
export type MusicalWorkContributorRole = ("Adapter" | "Architect" | "Arranger" | "Author" | "AuthorInQuotations" | "AuthorOfAfterword" | "Compiler" | "Composer" | "ComposerLyricist" | "Conceptor" | "Creator" | "DialogueAuthor" | "Dissertant" | "Engraver" | "Etcher" | "Journalist" | "LandscapeArchitect" | "Librettist" | "Lithographer" | "Lyricist" | "MetalEngraver" | "NonLyricAuthor" | "PlateMaker" | "Playwright" | "Reporter" | "Reviewer" | "Rubricator" | "ScreenplayAuthor" | "Sculptor" | "SubArranger" | "SubLyricist" | "Translator" | "Woodcutter" | "WoodEngraver" | "WriterOfAccompanyingMaterial" | "BookPublisher" | "CopyrightClaimant" | "CopyrightHolder" | "MusicPublisher" | "NewspaperPublisher" | "OriginalPublisher" | "PeriodicalPublisher" | "SubPublisher" | "SubstitutedPublisher" | "Unknown" | "UserDefined");
interface _MusicalWorkContributorRole extends Primitive._string { content: MusicalWorkContributorRole; }

/** A Type of MusicalWork. */
export type MusicalWorkType = ("AdaptedInOriginalLanguage" | "AdaptedInstrumentalWork" | "AdaptedWithNewLyrics" | "ArrangedWithNewMusic" | "CompositeMusicalWork" | "DramaticoMusicalWork" | "LyricRemoval" | "LyricReplacement" | "LyricTranslation" | "Mashup" | "Medley" | "MultimediaProductionWork" | "MusicalWorkMovement" | "MusicalWorkWithSamples" | "MusicArrangement" | "MusicArrangementOfText" | "OriginalLyricsArrangement" | "OriginalMusicAdaptation" | "OriginalMusicalWork" | "Potpourri" | "ProductionMusicLibraryWork" | "RadioProductionWork" | "TheaterProductionWork" | "TvProductionWork" | "Unknown" | "UnspecifiedArrangement" | "UnspecifiedMusicalWorkExcerpt" | "UserDefined" | "VideoProductionWork");
interface _MusicalWorkType extends Primitive._string { content: MusicalWorkType; }

/** A Status of a File in terms of its validity. */
export type MwnlFileStatus = ("FileOK" | "UserDefined");
interface _MwnlFileStatus extends Primitive._string { content: MwnlFileStatus; }

/** A Type of action that is proposed. */
export type MwnlProposedActionType = ("Resubmit" | "UserDefined");
interface _MwnlProposedActionType extends Primitive._string { content: MwnlProposedActionType; }

/** A studio Role played by a Contributor. */
export type NewStudioRole = ("AdditionalEngineer" | "AnimalTrainer" | "Animator" | "Annotator" | "AAndRCoordinator" | "Armourer" | "ArtDirector" | "ArtistBackgroundVocalEngineer" | "ArtistVocalEngineer" | "ArtistVocalSecondEngineer" | "AssistantCameraOperator" | "AssistantChiefLightingTechnician" | "AssistantDirector" | "AssistantProducer" | "AssistantVisualEditor" | "AuralTrainer" | "Binder" | "BindingDesigner" | "BookDesigner" | "BookjackDesigner" | "BookplateDesigner" | "BookProducer" | "BroadcastAssistant" | "BroadcastJournalist" | "CameraOperator" | "Carpenter" | "CastingDirector" | "Censor" | "ChiefLightingTechnician" | "Choreographer" | "ClapperLoader" | "CoExecutiveProducer" | "CommissioningBroadcaster" | "CompilationProducer" | "Consultant" | "ContinuityChecker" | "Contractor" | "CoProducer" | "Correspondent" | "CostumeDesigner" | "CoverDesigner" | "Designer" | "DialogueCoach" | "DigitalAudioWorkstationEngineer" | "DigitalEditingEngineer" | "DigitalEditingSecondEngineer" | "Director" | "DirectStreamDigitalEngineer" | "DistributionCompany" | "Dresser" | "Dubber" | "Editor" | "EditorInChief" | "EditorOfTheDay" | "Encoder" | "Engineer" | "ExecutiveProducer" | "Expert" | "FightDirector" | "FilmDirector" | "FilmDistributor" | "FilmEditor" | "FilmProducer" | "FilmSoundEngineer" | "FloorManager" | "FocusPuller" | "FoleyArtist" | "FoleyEditor" | "FoleyMixer" | "GraphicAssistant" | "GraphicDesigner" | "Greensman" | "Grip" | "Hairdresser" | "InitialProducer" | "KeyGrip" | "Leadman" | "LightingDirector" | "LightingTechnician" | "LocationManager" | "MakeUpArtist" | "Manufacturer" | "MasteringEngineer" | "MasteringSecondEngineer" | "MatteArtist" | "MixingEngineer" | "MixingSecondEngineer" | "MusicDirector" | "Musician" | "NewsProducer" | "OverdubEngineer" | "OverdubSecondEngineer" | "PhotographyDirector" | "PostProducer" | "ProgrammingEngineer" | "PreProduction" | "PreProductionEngineer" | "ProductionCompany" | "ProductionDepartment" | "ProductionManager" | "ProductionSecretary" | "ProgramProducer" | "ProgramProposalWriter" | "PropertyManager" | "PublishingDirector" | "Pyrotechnician" | "RecordingEngineer" | "RecordingSecondEngineer" | "Redactor" | "ReissueProducer" | "RemixingEngineer" | "RemixingSecondEngineer" | "Repetiteur" | "Researcher" | "ResearchTeamHead" | "ResearchTeamMember" | "Restager" | "Rigger" | "RightsControllerOnProduct" | "Runner" | "ScenicOperative" | "ScientificAdvisor" | "ScriptSupervisor" | "SecondAssistantCameraOperator" | "SecondAssistantDirector" | "SecondEngineer" | "SecondUnitDirector" | "SeriesProducer" | "SetDesigner" | "SetDresser" | "SoundDesigner" | "SoundMixer" | "SoundRecordist" | "SpecialEffectsTechnician" | "Sponsor" | "StageDirector" | "StringEngineer" | "StringProducer" | "StudioConductor" | "StudioPersonnel" | "StudioProducer" | "SubtitlesEditor" | "SubtitlesTranslator" | "TapeOperator" | "TechnicalDirector" | "Tonmeister" | "TrackingEngineer" | "TrackingSecondEngineer" | "TransfersAndSafetiesEngineer" | "TransfersAndSafetiesSecondEngineer" | "TransportationManager" | "Videographer" | "UserDefined" | "VideoProducer" | "VisionMixer" | "VisualEditor" | "VisualEffectsTechnician" | "VocalProducer" | "Wardrobe");
interface _NewStudioRole extends Primitive._string { content: NewStudioRole; }

/** A Status reported in a music NFT confirmation. */
export type NftConfirmationStatus = ("Verified" | "Rejected");
interface _NftConfirmationStatus extends Primitive._string { content: NftConfirmationStatus; }

/** A Type of OperatingSystem. */
export type OperatingSystemType = ("MacOS" | "MsWindows" | "Symbian" | "Unknown");
interface _OperatingSystemType extends Primitive._string { content: OperatingSystemType; }

/** A Type of use that is the original Purpose of a recording. */
export type OriginalPurpose = ("CommercialRelease" | "Karaoke" | "LibraryMusic" | "SpeciallyCommissionedMusic" | "Unknown" | "UserDefined");
interface _OriginalPurpose extends Primitive._string { content: OriginalPurpose; }

/** A ParentalWarningStandard. */
export type ParentalWarningStandard = ("RiaaPal" | "UserDefined");
interface _ParentalWarningStandard extends Primitive._string { content: ParentalWarningStandard; }

/** A Type of Creation according to advice which it carries about the level of explicitness or offensiveness of its content. */
export type ParentalWarningType = ("Explicit" | "ExplicitContentEdited" | "NoAdviceAvailable" | "NotExplicit" | "Unknown" | "UserDefined");
interface _ParentalWarningType extends Primitive._string { content: ParentalWarningType; }

/** A Type of PartyName according to its representation. */
export type PartyNameFormat = ("Abbreviation" | "AsciiTranscribed" | "MisspelledName" | "NameIndexed" | "TranslatedName" | "UserDefined");
interface _PartyNameFormat extends Primitive._string { content: PartyNameFormat; }

/** A Purpose for which a PartyName is used. */
export type PartyNamePurpose = ("Correspondence" | "Contract" | "LyricistCredits" | "Payment" | "PublicCommunication" | "RecordingCredits" | "UserDefined" | "WriterCredits");
interface _PartyNamePurpose extends Primitive._string { content: PartyNamePurpose; }

/** A Type of PartyName according to its semantics. */
export type PartyNameType = ("IncorrectName" | "LegalName" | "Nickname" | "Pseudonym" | "StageName" | "TradingName" | "UserDefined");
interface _PartyNameType extends Primitive._string { content: PartyNameType; }

/** A Type of relationship between two Parties. */
export type PartyRelationshipType = ("HasMember" | "HasPart" | "IsChildOf" | "IsMemberOf" | "IsParentOf" | "IsPartOf" | "UserDefined");
interface _PartyRelationshipType extends Primitive._string { content: PartyRelationshipType; }

/** A Type of relationship between two Parties. */
export type PartyRelationshipType_PIE = ("HasAffiliateMember" | "HasFullMember" | "HasMember" | "HasPart" | "IsAffiliateMemberOf" | "IsCharacterPlayedBy" | "IsChildOf" | "IsChildOrganizationOf" | "IsCoAuthorOf" | "IsCoContributorOf" | "IsConsideredTheSameAs" | "IsCoPerformerOf" | "IsDuplicateOf" | "IsFullMemberOf" | "IsHomonymOf" | "IsInfluencedBy" | "IsInfluencerOf" | "IsMarriedTo" | "IsMemberOf" | "IsNaturalPersonOf" | "IsParentOf" | "IsParentOrganizationOf" | "IsPartOf" | "IsPlayingCharacter" | "IsPseudonymOf" | "IsRelatedTo" | "IsRelatedStagePersonaOf" | "IsStagePersonaOf" | "UserDefined");
interface _PartyRelationshipType_PIE extends Primitive._string { content: PartyRelationshipType_PIE; }

/** A Role played by a Party in relation to a MusicalWork. */
export type PartyRole = ("Adapter" | "Arranger" | "Composer" | "ComposerLyricist" | "Creator" | "Lyricist" | "MusicPublisher" | "OriginalPublisher" | "RightsAdministrator" | "SubArranger" | "SubLyricist" | "SubPublisher" | "SubstitutedPublisher" | "Translator");
interface _PartyRole extends Primitive._string { content: PartyRole; }

/** A Type of Party. */
export type PartyType = ("Anthropomorph" | "AuthorPersona" | "Brand" | "Character" | "ComposingPersona" | "Department" | "Group" | "LegalOrganization" | "NaturalPerson" | "Persona" | "StagePersona" | "UserDefined");
interface _PartyType extends Primitive._string { content: PartyType; }

/** A Type of Reason for assigning a pending status to a Release. */
export type PendingReason = ("NotYetProcessedByDSP" | "NotYetProcessedByRelinquishingRecordCompany" | "UserDefined");
interface _PendingReason extends Primitive._string { content: PendingReason; }

/** A Type of PercentageRate. */
export type PercentageType = ("PercentageOfFreeGoodsPermitted" | "PercentageOfGrossRevenue" | "PercentageOfNetRevenue" | "PercentageOfNetSales" | "PercentageOfPriceConsumerPaid" | "PercentageOfStatutoryRoyaltyRate");
interface _PercentageType extends Primitive._string { content: PercentageType; }

/** The Type of musical Period. */
export type Period = ("AncientMusic" | "ArsAntiqua" | "ArsNova" | "ArsSubtilior" | "Baroque" | "Classical" | "Contemporary" | "EarlyRomantic" | "Experimental" | "GalantMusic" | "HighModern" | "Impressionism" | "LateRomantic" | "Medieval" | "Modern" | "Neoclassicism" | "PostModern" | "Renaissance" | "UserDefined");
interface _Period extends Primitive._string { content: Period; }

/** A Type of physical Carrier used for a Fixation. */
export type PhysicalCarrierType = ("BluRay" | "CD" | "CombiPack" | "CompactCassette" | "DualDisc" | "DVD" | "MemoryDevice" | "SACD" | "UserDefined" | "VideoCassette" | "VinylDisk");
interface _PhysicalCarrierType extends Primitive._string { content: PhysicalCarrierType; }

/** A Type of PLine. */
export type PLineType = ("OriginalPLine" | "RemasteringPLine");
interface _PLineType extends Primitive._string { content: PLineType; }

/** A Type of Price for which information is provided. */
export type PriceInformationType = ("StandardRetailPrice" | "PreOrderPrice" | "UserDefined");
interface _PriceInformationType extends Primitive._string { content: PriceInformationType; }

/** A Type of specification for primary colors in a Video. */
export type PrimaryColorType = ("BT.601" | "BT.709" | "BT.2020");
interface _PrimaryColorType extends Primitive._string { content: PrimaryColorType; }

/** A Type of Product. */
export type ProductType = ("AudioProduct" | "GraphicsProduct" | "MixedMediaBundleProduct" | "MobileProduct" | "UserDefined" | "VideoProduct");
interface _ProductType extends Primitive._string { content: ProductType; }

/** A Type of MessageProfile. */
export type ProfileId = ("BasicAudioProfile" | "BasicAudioProfileMLC" | "BasicAudioProfileSRB" | "UGCProfile" | "UGCProfileSRB" | "AudioVisualProfile" | "AudioVisualProfileSRB" | "RoyaltyReportingProfile" | "RadioBroadcastProfile" | "FinancialReportingToRecordCompaniesProfileSRB" | "MasterListProfile" | "MasterListProfileSRB");
interface _ProfileId extends Primitive._string { content: ProfileId; }

/** A MessageProfile of the mc-notif:MusicalWorkClaimNotificationMessage and the mc-notif:MusicalWorkClaimRequestMessage. */
export type ProfileId_MWDR = ("ConflictNotification" | "LinkNotification" | "Revocation" | "ShareNotification");
interface _ProfileId_MWDR extends Primitive._string { content: ProfileId_MWDR; }

/** A type of profile for a message. */
export type ProfileType = ("ImmutableProfile" | "UpdatableProfile");
interface _ProfileType extends Primitive._string { content: ProfileType; }

/** A Type of use that is the Purpose of an action. */
export type Purpose = ("BackgroundMusic" | "ChannelTrailerMusic" | "Extract" | "FilmTrailerMusic" | "ForegroundMusic" | "TrailerMusic" | "UserDefined");
interface _Purpose extends Primitive._string { content: Purpose; }

/** An Organization that issues parental warnings. */
export type RatingAgency = ("ACMA" | "AFR" | "AGCOM" | "ANATEL" | "BBFC" | "BFCO" | "BFSC" | "BFVC" | "BMUKK" | "CBFC" | "CBSC" | "CBSC-F" | "CCC" | "CCE" | "CHVRS" | "CICF" | "CNA" | "CNC" | "CPBC" | "CSA" | "CSCF" | "DJCTQ" | "Eirin" | "ESRB" | "FAB" | "FCB" | "FCO" | "FILM-CH" | "FILM-CZ" | "FILM-EG" | "FILM-EE" | "FILM-GR" | "FILM-PE" | "FILM-SK" | "Filmtilsynet" | "FPB" | "FRB" | "FSK" | "ICAA" | "IFCO" | "IFCOF" | "INCAA" | "KFCB" | "Kijkwijzer" | "KMRB" | "KR" | "KRRIT" | "LSF" | "MBACT" | "MBU" | "MCCAA" | "MDA" | "MDCB" | "Medietilsynet" | "MEKU" | "MFCB" | "MIC" | "MKRF" | "MOC" | "MOC-TW" | "MPAA" | "MPAAT" | "MTRCB" | "NBC" | "NCS" | "NFRC" | "NFVCB" | "NICAM" | "NKC" | "OFLC" | "OFLC-NZ" | "OFRB" | "PEGI" | "RCNOF" | "RDCQ" | "RIAA" | "RTC" | "RTE" | "SBB" | "SiBCI" | "Smais" | "SM-SA" | "SPIO-JK" | "USFA" | "TELA" | "TVPG" | "UserDefined" | "VET");
interface _RatingAgency extends Primitive._string { content: RatingAgency; }

/** A Reason for a rating. */
export type RatingReason = ("Behaviour" | "Blasphemy" | "Crime" | "DiscriminationOrPrejudice" | "Drugs" | "ExplicitSex" | "ExtremeViolence" | "FearOrHorror" | "Gambling" | "IllegalDrugs" | "Language" | "LegalDrugs" | "Nudity" | "OnlineGameplay" | "Sex" | "SexualViolence" | "Theme" | "UserDefined" | "Violence");
interface _RatingReason extends Primitive._string { content: RatingReason; }

/** A Status of a Batch in terms of its validity in the Recording Data and Rights Choreography Standard. */
export type RdrcBatchStatus = ("BatchOK" | "UserDefined");
interface _RdrcBatchStatus extends Primitive._string { content: RdrcBatchStatus; }

/** A Status of a File in terms of its validity in the Recording Data and Rights Choreography Standard. */
export type RdrcFileStatus = ("Error" | "FileReceived" | "FileValid" | "UserDefined");
interface _RdrcFileStatus extends Primitive._string { content: RdrcFileStatus; }

/** A Type of Message in the Recording Data and Rights Notification Standard. */
export type RdrMessageType = ("DeclarationOfSoundRecordingRightsClaimMessage" | "RequestSoundRecordingRightsClaimMessage" | "RevokeSoundRecordingRightsClaimMessage" | "SalesReportMessage" | "DeclarationOfRevenueMessage" | "RightsClaimStatusUpdateMessage" | "AssertionOfCollectionMandateMessage" | "AssertionOfCollectionMandateStatusUpdateMessage" | "RevokeCollectionMandateMessage" | "RevenueDeclarationMessage");
interface _RdrMessageType extends Primitive._string { content: RdrMessageType; }

/** A Reason for a PartyName change. */
export type ReasonForNameChange = ("Deed" | "Marriage" | "Religion" | "SexChange" | "UserDefined");
interface _ReasonForNameChange extends Primitive._string { content: ReasonForNameChange; }

/** A Type of Revenue according to the recipient of the Payment. */
export type RecipientRevenueType = ("PerformerAndProducerRevenue" | "PerformerRevenue" | "ProducerRevenue");
interface _RecipientRevenueType extends Primitive._string { content: RecipientRevenueType; }

/** A Type of Revenue according to the recipient of the Payment. */
export type RecipientRevenueType_RDR = ("PerformerOnlyRevenue" | "ProducerOnlyRevenue" | "Revenue");
interface _RecipientRevenueType_RDR extends Primitive._string { content: RecipientRevenueType_RDR; }

/** A Type of Resource based on its content, intended audience, format or technical characteristics. */
export type RecordingFormat = ("360Video" | "Acoustic" | "AdultContent" | "AdvertisementVideo" | "AdviceMagazine" | "Animation" | "AwardShow" | "BalletVideo" | "BehindTheMusic" | "BehindTheScenes" | "BlackAndWhiteVideo" | "CauseRelatedRecording" | "ChildrensFilm" | "ColorizedVideo" | "ColumnVideo" | "ConcertClip" | "ConcertVideo" | "ContentProviderOriginals" | "CorporateFilm" | "Credits" | "DanceVideo" | "Documentary" | "Drama" | "DramaticoMusicalVideo" | "EducationalVideo" | "Episode" | "FeatureFilm" | "Fiction" | "InfomercialVideo" | "InteractiveResource" | "Interview" | "Karaoke" | "LiveEventRecording" | "LiveEventRecordingInStudio" | "LiveEventVideo" | "LiveStream" | "LowComplexityVideo" | "LyricVideo" | "Magazine" | "Menu" | "MultimediaVideo" | "MusicalWorkClip" | "MusicalWorkReadalongVideo" | "MusicalWorkTrailer" | "MusicalWorkVideoChapter" | "News" | "NonMusicalWorkClip" | "NonMusicalWorkReadalongVideo" | "NonMusicalWorkTrailer" | "NonMusicalWorkVideoChapter" | "NonSerialAudioVisualRecording" | "OperaVideo" | "Performance" | "RawFootage" | "ReadalongVideo" | "RealityTvShowVideo" | "Excerpt" | "Season" | "SerialAudioVisualRecording" | "Series" | "Session" | "ShortFilm" | "SilentVideo" | "SketchVideo" | "SoapSitcom" | "SpecialEvent" | "Sport" | "StaticVideo" | "StudioRecording" | "TheatricalWorkVideo" | "TourDiary" | "TrailerVideo" | "Tutorial" | "TvFilm" | "TvFilmPerformance" | "TvProgram" | "TvShowVideo" | "Unknown" | "UserDefined" | "VerticalVideo" | "VideoChapter" | "VideoClip" | "VideoReport" | "VideoStem" | "VirtualRealityExperience" | "Visualizer" | "Vlog" | "Webisode" | "WebResource");
interface _RecordingFormat extends Primitive._string { content: RecordingFormat; }

/** A mode of a Recording. */
export type RecordingMode = ("BinauralAudio" | "ImmersiveAudio" | "LCR" | "Mono" | "MultichannelAudio" | "MultiTrack" | "Quad" | "Stems" | "Stereo" | "SurroundSound" | "Unknown");
interface _RecordingMode extends Primitive._string { content: RecordingMode; }

/** A Creation that is used as a reference. */
export type ReferenceCreation = ("ReferenceResource" | "ConsumerResource");
interface _ReferenceCreation extends Primitive._string { content: ReferenceCreation; }

/** A unit to which a Quantity refers. */
export type ReferenceUnit = ("PerLicense" | "PerUse");
interface _ReferenceUnit extends Primitive._string { content: ReferenceUnit; }

/** A registration Status of a Resource. */
export type RegistrationStatus = ("ClaimMeetsCoreDataProfile" | "ClaimMeetsRecommendedProfile" | "PendingReview" | "ResourceRegisteredInvalid" | "ResourceRegisteredValid" | "RegistrationRejected");
interface _RegistrationStatus extends Primitive._string { content: RegistrationStatus; }

/** A Type of Reason for rejecting a Release. */
export type RejectionReason = ("NotFoundByDSP" | "NotFoundByRelinquishingRecordCompany" | "RejectedByRelinquishingRecordCompany" | "UserDefined");
interface _RejectionReason extends Primitive._string { content: RejectionReason; }

/** A Type of a related Resource. */
export type RelatedResourceType = ("ACappellaVersion" | "AcousticVersion" | "AlbumVersion" | "AlternativeVersion" | "CleanVersion" | "Cover" | "DemoVersion" | "InstrumentalVersion" | "LiveVersion" | "Medley" | "OriginalRecording" | "RadioVersion" | "SingleVersion" | "StudioVersion" | "TvTrack" | "UserDefined");
interface _RelatedResourceType extends Primitive._string { content: RelatedResourceType; }

/** A Relator between two Entities expressing a measurable relationship. */
export type RelationalRelator = ("EqualTo" | "LessThan" | "LessThanOrEqualTo" | "MoreThan" | "MoreThanOrEqualTo" | "NotEqualTo");
interface _RelationalRelator extends Primitive._string { content: RelationalRelator; }

/** A Type of ReleaseProfile variant version. */
export type ReleaseProfileVariantVersionId = ("BoxedSet" | "BoxedSet Classical" | "Classical");
interface _ReleaseProfileVariantVersionId extends Primitive._string { content: ReleaseProfileVariantVersionId; }

/** A Type of ReleaseProfile version. */
export type ReleaseProfileVersionId = ("Audio" | "DjMix" | "LongFormMusicalWorkVideo" | "MixedMedia" | "Ringtone" | "SimpleAudioSingle" | "SimpleVideoSingle" | "Video");
interface _ReleaseProfileVersionId extends Primitive._string { content: ReleaseProfileVersionId; }

/** A Type of relationship between two Releases. */
export type ReleaseRelationshipType = ("HasArtistFromEnsemble" | "HasArtistFromSameEnsemble" | "HasContentFrom" | "HasEnsembleWithArtist" | "HasSameArtist" | "HasSameRecordingProject" | "HasSimilarContent" | "IsAudioUsedFor" | "IsDifferentEncoding" | "IsDigitalEquivalentToPhysical" | "IsEditedVersionOf" | "IsEquivalentToAudio" | "IsEquivalentToVideo" | "IsExtendedFromAlbum" | "IsFromAudio" | "IsFromVideo" | "IsImmersiveEditionOf" | "IsNonImmersiveEditionOf" | "IsParentRelease" | "IsPhysicalEquivalentToDigital" | "IsReleaseFromRelease" | "IsShortenedFromAlbum" | "IsSlowedDownOf" | "IsSourceOfEditedVersion" | "IsSpedUpOf" | "IsVideoUsedFor" | "Unknown" | "UserDefined");
interface _ReleaseRelationshipType extends Primitive._string { content: ReleaseRelationshipType; }

/** A Type of Resource in the context of a Release. */
export type ReleaseResourceType = ("PrimaryResource" | "SecondaryResource");
interface _ReleaseResourceType extends Primitive._string { content: ReleaseResourceType; }

/** A Type of Release according to its content, Duration and/or number of components. Note: a ReleaseType is the form in which a ReleaseCreator anticipates offering a Release to Consumers. */
export type ReleaseType = ("Album" | "AlertToneRelease" | "AsPerContract" | "AudioBookRelease" | "AudioDramaRelease" | "BackCoverImageRelease" | "BookletBackImageRelease" | "BookletFrontImageRelease" | "BookletRelease" | "Bundle" | "ClassicalAlbum" | "ClassicalDigitalBoxedSet" | "ClassicalMultimediaAlbum" | "ConcertVideo" | "DigitalBoxSetRelease" | "DjMix" | "Documentary" | "Drama" | "DramaticoMusicalVideoRelease" | "EBookRelease" | "EP" | "Episode" | "FeatureFilm" | "KaraokeRelease" | "LiveEventVideo" | "LogoRelease" | "LongFormMusicalWorkVideoRelease" | "LongFormNonMusicalWorkVideoRelease" | "LyricSheetRelease" | "MultimediaAlbum" | "MultimediaDigitalBoxedSet" | "MultimediaSingle" | "MusicalWorkBasedGameRelease" | "NonMusicalWorkBasedGameRelease" | "PlayList" | "RingbackToneRelease" | "RingtoneRelease" | "Season" | "Series" | "SheetMusicRelease" | "ShortFilm" | "Single" | "SingleResourceRelease" | "StemBundle" | "UserDefined" | "VideoAlbum" | "VideoMastertoneRelease" | "VideoSingle" | "WallpaperRelease" | "TrackRelease");
interface _ReleaseType extends Primitive._string { content: ReleaseType; }

/** A Type of Release according to its content, Duration and/or number of components. Note: a ReleaseType is the form in which a ReleaseCreator anticipates offering a Release to Consumers. */
export type ReleaseType_DSR = ("AdvertisementVideo" | "Album" | "AlertToneRelease" | "Animation" | "AsPerContract" | "AudioBookRelease" | "AudioClipRelease" | "BackCoverImageRelease" | "BookletBackImageRelease" | "BookletFrontImageRelease" | "BookletRelease" | "Bundle" | "ClassicalAlbum" | "ConcertVideo" | "CorporateFilm" | "DigitalBoxSetRelease" | "Documentary" | "DocumentImageRelease" | "EBookRelease" | "Episode" | "FeatureFilm" | "FilmBundle" | "FrontCoverImageRelease" | "IconRelease" | "InfomercialVideo" | "InteractiveBookletRelease" | "KaraokeRelease" | "LiveEventVideo" | "LogoRelease" | "LongFormMusicalWorkVideoRelease" | "LongFormNonMusicalWorkVideoRelease" | "LyricSheetRelease" | "MultimediaAlbum" | "MultimediaSingle" | "MusicalWorkBasedGameRelease" | "MusicalWorkClipRelease" | "MusicalWorkReadalongVideoRelease" | "MusicalWorkTrailerRelease" | "MusicalWorkVideoChapterRelease" | "News" | "NonMusicalWorkBasedGameRelease" | "NonMusicalWorkClipRelease" | "NonMusicalWorkReadalongVideoRelease" | "NonMusicalWorkTrailerRelease" | "NonMusicalWorkVideoChapterRelease" | "NonSerialAudioVisualRecording" | "PhotographRelease" | "RingbackToneRelease" | "RingtoneRelease" | "ScreensaverRelease" | "Season" | "Series" | "SheetMusicRelease" | "ShortFormMusicalWorkVideoRelease" | "ShortFormNonMusicalWorkVideoRelease" | "Single" | "SingleResourceRelease" | "SingleResourceReleaseWithCoverArt" | "TrackRelease" | "TrailerVideo" | "TrayImageRelease" | "Unknown" | "UserDefined" | "VideoAlbum" | "VideoChapterRelease" | "VideoClipRelease" | "VideoScreenCaptureRelease" | "VideoSingle" | "VideoTrackRelease" | "WallpaperRelease");
interface _ReleaseType_DSR extends Primitive._string { content: ReleaseType_DSR; }

/** A Type of Release according to its content, Duration and/or number of components. Note: a ReleaseType is the form in which a ReleaseCreator anticipates offering a Release to Consumers. */
export type ReleaseType_ERN4 = ("Album" | "AlertToneRelease" | "AsPerContract" | "AudioBookRelease" | "AudioDramaRelease" | "BackCoverImageRelease" | "BookletBackImageRelease" | "BookletFrontImageRelease" | "BookletRelease" | "Bundle" | "ClassicalAlbum" | "ClassicalDigitalBoxedSet" | "ClassicalMultimediaAlbum" | "ConcertVideo" | "DigitalBoxSetRelease" | "DjMix" | "Documentary" | "Drama" | "DramaticoMusicalVideoRelease" | "EBookRelease" | "EP" | "Episode" | "FeatureFilm" | "KaraokeRelease" | "LiveEventVideo" | "LogoRelease" | "LongFormMusicalWorkVideoRelease" | "LongFormNonMusicalWorkVideoRelease" | "LyricSheetRelease" | "MultimediaAlbum" | "MultimediaDigitalBoxedSet" | "MultimediaSingle" | "MusicalWorkBasedGameRelease" | "NonMusicalWorkBasedGameRelease" | "PlayList" | "RingbackToneRelease" | "RingtoneRelease" | "Season" | "Series" | "SheetMusicRelease" | "ShortFilm" | "Single" | "SingleResourceRelease" | "StemBundle" | "UserDefined" | "VideoAlbum" | "VideoMastertoneRelease" | "VideoSingle" | "WallpaperRelease");
interface _ReleaseType_ERN4 extends Primitive._string { content: ReleaseType_ERN4; }

/** A Type of Release according to its content, Duration and/or number of components. Note: a ReleaseType is the form in which a ReleaseCreator anticipates offering a Release to Consumers. */
export type ReleaseType_MCNOTIF = ("Album" | "EP" | "RingbackToneRelease" | "RingtoneRelease" | "Single" | "VideoAlbum" | "VideoSingle");
interface _ReleaseType_MCNOTIF extends Primitive._string { content: ReleaseType_MCNOTIF; }

/** A Type of declaration Message in a DDEX namespace. */
export type ReportMessageType = ("DsrSalesReportMessage" | "RdrNSalesReportMessage" | "RevenueDeclarationMessage" | "UserDefined");
interface _ReportMessageType extends Primitive._string { content: ReportMessageType; }

/** A Purpose of Message. */
export type RequestMessagePurpose = ("LicenseRequest" | "NdmaLicenseRequest" | "Notification");
interface _RequestMessagePurpose extends Primitive._string { content: RequestMessagePurpose; }

/** A Type of Reason for requesting something. */
export type RequestReason = ("DisputeResolutionRequest" | "GeneralRequest" | "PublisherAddition" | "PublisherChange" | "PublisherRemoval" | "Recall" | "ReleaseListUpdate" | "SpecificRequest" | "UserDefined" | "WriterAddition" | "WriterChange" | "WriterRemoval");
interface _RequestReason extends Primitive._string { content: RequestReason; }

/** A Role played by a Contributor in relation to a Fixation of an abstract Creation. */
export type ResourceContributorRole = ("Accompanyist" | "Actor" | "AdditionalEngineer" | "AdditionalMixingEngineer" | "AdditionalPerformer" | "AdditionalProgrammingEngineer" | "AdditionalStudioProducer" | "AnchorPerson" | "AnimalTrainer" | "Animator" | "Annotator" | "Announcer" | "AAndRAdministrator" | "AAndRCoordinator" | "Armourer" | "ArtCopyist" | "ArtDirector" | "Artist" | "ArtistBackgroundVocalEngineer" | "ArtistVocalEngineer" | "ArtistVocalSecondEngineer" | "AssistantCameraOperator" | "AssistantChiefLightingTechnician" | "AssistantConductor" | "AssistantDirector" | "AssistantEditor" | "AssistantEngineer" | "AssistantProducer" | "AssistantVisualEditor" | "AssociatedPerformer" | "AssociateProducer" | "AuralTrainer" | "BackgroundVocalist" | "BalanceEngineer" | "BandLeader" | "Binder" | "BindingDesigner" | "BookDesigner" | "BookjackDesigner" | "BookplateDesigner" | "BookProducer" | "BroadcastAssistant" | "BroadcastJournalist" | "Calligrapher" | "CameraOperator" | "Carpenter" | "Cartographer" | "Cartoonist" | "CastingDirector" | "Causeur" | "Censor" | "ChiefLightingTechnician" | "Choir" | "ChoirMember" | "Choreographer" | "ChorusMaster" | "CircusArtist" | "ClapperLoader" | "ClubDJ" | "CoDirector" | "CoExecutiveProducer" | "ColorSeparator" | "Comedian" | "CoMixer" | "CoMixingEngineer" | "Commentator" | "CommissioningBroadcaster" | "CompilationProducer" | "ComputerGraphicCreator" | "ComputerProgrammer" | "ConcertMaster" | "Conductor" | "Consultant" | "ContinuityChecker" | "Contractor" | "CoProducer" | "Correspondent" | "CostumeDesigner" | "CoverDesigner" | "Dancer" | "Delineator" | "Designer" | "DialogueCoach" | "DialogueDirector" | "DigitalAudioWorkstationEngineer" | "DigitalEditingEngineer" | "DigitalEditingSecondEngineer" | "Director" | "DirectStreamDigitalEngineer" | "DistributionCompany" | "DJ" | "Draughtsman" | "Dresser" | "Dubber" | "Editor" | "EditorInChief" | "EditorOfTheDay" | "Encoder" | "Engineer" | "Ensemble" | "ExecutiveProducer" | "Expert" | "Facsimilist" | "FightDirector" | "FilmDirector" | "FilmDistributor" | "FilmEditor" | "FilmProducer" | "FilmSoundEngineer" | "FloorManager" | "FocusPuller" | "FoleyArtist" | "FoleyEditor" | "FoleyMixer" | "GraphicArtist" | "GraphicAssistant" | "GraphicDesigner" | "Greensman" | "Grip" | "GuestConductor" | "GroupMember" | "Hairdresser" | "Illustrator" | "ImmersiveMasteringEngineer" | "ImmersiveMixingEngineer" | "InitialProducer" | "InterviewedGuest" | "Interviewer" | "KeyCharacter" | "KeyGrip" | "KeyTalent" | "Leadman" | "LeadPerformer" | "LeadVocalist" | "LightingDirector" | "LightingTechnician" | "LocationManager" | "MakeUpArtist" | "Manufacturer" | "MasteringEngineer" | "MasteringSecondEngineer" | "MatteArtist" | "Mixer" | "MixingEngineer" | "MixingSecondEngineer" | "MusicArranger" | "MusicCopyist" | "MusicDirector" | "MusicGroup" | "Musician" | "Narrator" | "NewsProducer" | "NewsReader" | "NotSpecified" | "Orchestra" | "OrchestraMember" | "OriginalArtist" | "OverdubEngineer" | "OverdubSecondEngineer" | "Painter" | "Performer" | "Photographer" | "PhotographyDirector" | "PlaybackSinger" | "PostProducer" | "PreProduction" | "PreProductionEngineer" | "PreProductionSecondEngineer" | "Presenter" | "PrimaryMusician" | "ProductionAssistant" | "ProductionCompany" | "ProductionCoordinator" | "ProductionDepartment" | "ProductionManager" | "ProductionSecretary" | "ProjectEngineer" | "Programmer" | "ProgrammingEngineer" | "ProgramProducer" | "PropertyManager" | "PublishingDirector" | "Puppeteer" | "Pyrotechnician" | "RecordingEngineer" | "RecordingSecondEngineer" | "Redactor" | "ReissueProducer" | "RemixedArtist" | "Remixer" | "RemixingEngineer" | "RemixingSecondEngineer" | "Repetiteur" | "Researcher" | "ResearchTeamHead" | "ResearchTeamMember" | "Restager" | "Rigger" | "RightsControllerOnProduct" | "Runner" | "ScenicOperative" | "ScientificAdvisor" | "ScriptSupervisor" | "SecondAssistantCameraOperator" | "SecondAssistantDirector" | "SecondConductor" | "SecondEngineer" | "SecondUnitDirector" | "SeriesProducer" | "SetDesigner" | "SetDresser" | "SignLanguageInterpreter" | "Soloist" | "SoundDesigner" | "SoundMixer" | "SoundRecordist" | "SoundSupervisor" | "Speaker" | "SpecialEffectsTechnician" | "Sponsor" | "StageAssistantEngineer" | "StageDirector" | "StageEngineer" | "StoryTeller" | "StringEngineer" | "StringProducer" | "StringsDirector" | "StudioConductor" | "StudioMusician" | "StudioPersonnel" | "StudioProducer" | "Stunts" | "SubtitlesEditor" | "SubtitlesTranslator" | "SupportingActor" | "SurroundMixingEngineer" | "SurroundMixingSecondEngineer" | "TapeOperator" | "TechnicalDirector" | "Tonmeister" | "TrackingEngineer" | "TrackingSecondEngineer" | "TransfersAndSafetiesEngineer" | "TransfersAndSafetiesSecondEngineer" | "TransportationManager" | "Treatment/ProgramProposal" | "TypeDesigner" | "Unknown" | "UserDefined" | "VideoDirector" | "Videographer" | "VideoMusicalDirector" | "VideoProducer" | "VisionMixer" | "VisualEditor" | "VisualEffectsTechnician" | "VocalArranger" | "VocalEditingEngineer" | "VocalEditingSecondEngineer" | "VocalEngineer" | "Vocalist" | "VocalSecondEngineer" | "VocalProducer" | "VoiceActor" | "Wardrobe");
interface _ResourceContributorRole extends Primitive._string { content: ResourceContributorRole; }

/** A Type of ResourceGroup. */
export type ResourceGroupType = ("Component" | "ComponentRelease" | "MultiWorkPart" | "ReleaseComponent" | "Side");
interface _ResourceGroupType extends Primitive._string { content: ResourceGroupType; }

/** A Type of relationship between two Resources. */
export type ResourceRelationshipType = ("ContainsSamplesFrom" | "HasClip" | "HasContentFrom" | "HasPart" | "IsClipFrom" | "IsCoveredBy" | "IsCoverOf" | "IsDifferentEncoding" | "IsEditedVersionOf" | "IsImmersiveEditionOf" | "IsNonImmersiveEditionOf" | "IsPartOf" | "IsSampledBy" | "IsSlowedDownOf" | "IsSourceOfEditedVersion" | "IsSpedUpOf" | "UserDefined");
interface _ResourceRelationshipType extends Primitive._string { content: ResourceRelationshipType; }

/** A Type of Resource. */
export type ResourceType = ("Image" | "MIDI" | "SheetMusic" | "Software" | "SoundRecording" | "Text" | "UserDefinedResource" | "Video");
interface _ResourceType extends Primitive._string { content: ResourceType; }

/** A Type of Resource. */
export type ResourceType_CustomSet = ("MusicVideo" | "SoundRecording");
interface _ResourceType_CustomSet extends Primitive._string { content: ResourceType_CustomSet; }

/** A Type of Resource. */
export type ResourceType_MCNOTIF = ("SheetMusic" | "SoundRecording" | "Video");
interface _ResourceType_MCNOTIF extends Primitive._string { content: ResourceType_MCNOTIF; }

/** A Type of Resource. */
export type ResourceType_RDR = ("MusicVideo" | "None" | "SoundRecording" | "Video");
interface _ResourceType_RDR extends Primitive._string { content: ResourceType_RDR; }

/** A Type of relationship between a Resource and a Work. */
export type ResourceWorkRelationshipType = ("Interpellation" | "Medley" | "MultipleWorkResource" | "MusicalWorkWithSamples" | "SingleWorkResource");
interface _ResourceWorkRelationshipType extends Primitive._string { content: ResourceWorkRelationshipType; }

/** A Type of response in a RightsClaimConflictResponse message. */
export type ResponseType = ("Maintain" | "Pending" | "Revoke" | "Update");
interface _ResponseType extends Primitive._string { content: ResponseType; }

/** A Type of Entity for which Revenue has been allocated. */
export type RevenueAllocationType = ("Episode" | "NonSerial" | "Season" | "Series");
interface _RevenueAllocationType extends Primitive._string { content: RevenueAllocationType; }

/** A Type of Revenue earned by the SoundRecording, according to the way the Revenue is generated. */
export type RevenueSourceType = ("FinancialRevenue" | "IndemnityRevenue" | "PaymentFromUnclaimedRevenue" | "RoyaltyRevenue" | "UserDefined");
interface _RevenueSourceType extends Primitive._string { content: RevenueSourceType; }

/** A Reason for a revocation. */
export type RevocationReason = ("AiGeneratedWork" | "ExistingWork" | "NonExistingWork" | "NonMusicalWork" | "WorkInPublicDomain");
interface _RevocationReason extends Primitive._string { content: RevocationReason; }

/** A rhythm style. */
export type RhythmStyle = ("4OnTheFloor" | "Blues" | "BoogieWoogie" | "Calypso" | "Cumbia" | "Dembow" | "Disco" | "Flamenco" | "Merengue" | "Nyabinghi" | "OneDrop" | "Polyrhythm" | "RockAndRoll" | "Rumba" | "Shuffle" | "Skank" | "Tala" | "Tejano" | "UserDefined");
interface _RhythmStyle extends Primitive._string { content: RhythmStyle; }

/** A Reason for a rights claim Policy. */
export type RightsClaimPolicyReason = ("PreReleaseTime" | "ThirdPartyRequest" | "UserDefined");
interface _RightsClaimPolicyReason extends Primitive._string { content: RightsClaimPolicyReason; }

/** A Type of rights claim Policy. */
export type RightsClaimPolicyType = ("BlockAccess" | "Monetize" | "ReportUsage");
interface _RightsClaimPolicyType extends Primitive._string { content: RightsClaimPolicyType; }

/** A Status of a RightsClaim. */
export type RightsClaimStatus = ("Conflict" | "DataInconsistent" | "NoConflict" | "PendingReview" | "Rejected" | "Revoked");
interface _RightsClaimStatus extends Primitive._string { content: RightsClaimStatus; }

/** A Role of a RightsController. */
export type RightsControllerRole = ("AdministratingRecordCompany" | "LocalPayee" | "RightsAdministrator" | "RightsController" | "RightsHolder" | "RoyaltyAdministrator" | "Unknown");
interface _RightsControllerRole extends Primitive._string { content: RightsControllerRole; }

/** A Type of a RightsController. */
export type RightsControllerType = ("OriginalOwner" | "SuccessorInTitle" | "ExclusiveLicensee");
interface _RightsControllerType extends Primitive._string { content: RightsControllerType; }

/** A Type of Rights control. */
export type RightsControlType = ("ExclusiveLicensee" | "LocalPayee" | "OriginalOwner" | "RightsAdministrator" | "SuccessorInTitle");
interface _RightsControlType extends Primitive._string { content: RightsControlType; }

/** A Type of Right which is covered. */
export type RightsCoverage = ("MakeAvailableRight" | "MechanicalRight" | "PerformingRight" | "PrintRight" | "ReproductionRight" | "SynchronizationRight" | "UserDefined");
interface _RightsCoverage extends Primitive._string { content: RightsCoverage; }

/** A Type of Right which is covered. */
export type RightsCoverage_MWDR = ("All" | "LyricsRight" | "MechanicalRight" | "PerformingRight" | "PrintRight" | "SynchronizationRight");
interface _RightsCoverage_MWDR extends Primitive._string { content: RightsCoverage_MWDR; }

/** A Type of RightShare. */
export type RightShareType = ("CopyrightControlShare" | "LicensingShare" | "MusicalWorkCollectionShare" | "MusicalWorkManuscriptShare" | "OriginalPublisherShare");
interface _RightShareType extends Primitive._string { content: RightShareType; }

/** A Type of RightShare. */
export type RightShareType_MWDR = ("LicensingShare" | "MusicalWorkCollectionShare" | "MusicalWorkManuscriptShare" | "OriginalPublisherShare");
interface _RightShareType_MWDR extends Primitive._string { content: RightShareType_MWDR; }

/** A Type of RightsStatementProfile. */
export type RightsStatementProfile = ("MandatedUsageRights" | "RightsStatement");
interface _RightsStatementProfile extends Primitive._string { content: RightsStatementProfile; }

/** A Status of a File in terms of its validity in the Recording Information Notification Standard. */
export type RinFileStatus = ("FileOK" | "UserDefined");
interface _RinFileStatus extends Primitive._string { content: RinFileStatus; }

/** A Type of RIN Message in a DDEX namespace. */
export type RinMessageType = "RecordingInformationNotification";
interface _RinMessageType extends Primitive._string { content: RinMessageType; }

/** A Type of action that is proposed. */
export type RinProposedActionType = ("Resubmit" | "UserDefined");
interface _RinProposedActionType extends Primitive._string { content: RinProposedActionType; }

/** The Type of root chord note. */
export type RootChordNote = ("A" | "Ab/G#" | "B" | "Bb/A#" | "C" | "C#/Db" | "D" | "E" | "Eb/D#" | "F" | "G" | "Gb/F#" | "UserDefined");
interface _RootChordNote extends Primitive._string { content: RootChordNote; }

/** The Type of root chord. */
export type RootChordQuality = ("AugmentedSeventh" | "AugmentedTriad" | "DiminishedSeventh" | "DiminishedTriad" | "DominantSeventh" | "Fifth" | "HalfDiminishedSeventh" | "MajorSeventh" | "MajorSixth" | "MajorTriad" | "MajorMinorSeventh" | "MinorSeventh" | "MinorSixth" | "MinorTriad" | "Suspended" | "UserDefined");
interface _RootChordQuality extends Primitive._string { content: RootChordQuality; }

/** A Type of RoyaltyRate according to the calculation method, as used in the MWNL messages. */
export type RoyaltyRateCalculationType = ("ControlledCompositionRoyaltyRate" | "MinimumStatutoryRoyaltyRate" | "NegotiatedRoyaltyRate" | "ReducedStatutoryRoyaltyRate" | "StatutoryRoyaltyRate" | "PPD" | "RetailPrice");
interface _RoyaltyRateCalculationType extends Primitive._string { content: RoyaltyRateCalculationType; }

/** A Type of RoyaltyRate. */
export type RoyaltyRateType = ("PennyRate" | "PercentageRoyaltyRate");
interface _RoyaltyRateType extends Primitive._string { content: RoyaltyRateType; }

/** A Type of Session. */
export type SessionType = ("ArtistVocals" | "Demo" | "DigitalEditing" | "Editing" | "LivePerformance" | "Mastering" | "Mixing" | "Overdub" | "PreProduction" | "Preservation" | "Production" | "Project" | "Recording" | "Remixing" | "Tracking" | "Transfer" | "TransfersAndSafeties" | "UserDefined" | "Vocal");
interface _SessionType extends Primitive._string { content: SessionType; }

/** A Type of SheetMusic Codec. */
export type SheetMusicCodecType = "UserDefined";
interface _SheetMusicCodecType extends Primitive._string { content: SheetMusicCodecType; }

/** A Type of SheetMusic. */
export type SheetMusicType = "UserDefined";
interface _SheetMusicType extends Primitive._string { content: SheetMusicType; }

/** A Type of Software. */
export type SoftwareType = ("InteractiveBooklet" | "MusicalWorkBasedGame" | "NonMusicalWorkBasedGame" | "Screensaver" | "Unknown" | "UserDefined");
interface _SoftwareType extends Primitive._string { content: SoftwareType; }

/** A Type of SoundRecording. */
export type SoundRecordingType = ("AudioStem" | "Clip" | "MusicalWorkReadalongSoundRecording" | "MusicalWorkSoundRecording" | "NonMusicalWorkReadalongSoundRecording" | "NonMusicalWorkSoundRecording" | "SpokenWordSoundRecording" | "Unknown" | "UserDefined");
interface _SoundRecordingType extends Primitive._string { content: SoundRecordingType; }

/** A special Type of Contributor. */
export type SpecialContributorType = ("GenerativeAI" | "Traditional" | "UserDefined" | "VariousArtists");
interface _SpecialContributorType extends Primitive._string { content: SpecialContributorType; }

/** A Status. */
export type Status = ("AssetsNeeded" | "AwaitingMaterials" | "BackedUp" | "Canceled" | "Closed" | "Completed" | "InWork" | "NotStarted" | "UserDefined" | "Verified");
interface _Status extends Primitive._string { content: Status; }

/** A Type of SubGenre. */
export type SubGenre = ("AcousticChicagoBlues" | "BoogieWoogie" | "BritishBlues" | "ChicagoBlues" | "ClassicFemaleBlues" | "CountryBlues" | "DeltaBlues" | "ElectricTexasBlues" | "HillCountryBlues" | "JumpBlues" | "ModernBlues" | "NewOrleansBlues" | "PianoBlues" | "PiedmontBlues" | "Roots" | "SwampBlues" | "TexasBlues" | "TraditionalAcoustic" | "TraditionalElectric" | "WestCoastBlues" | "20thCentury" | "21stCentury" | "Acousmatic" | "AmbrosianChant" | "ArsAntiqua" | "ArsNova" | "Baroque" | "ByzantineChant" | "Classical" | "ClassicalCrossover" | "Contemporary" | "Early20thCentury" | "EarlyBaroque" | "EarlyElectronic" | "EarlyRenaissance" | "EarlyRomantic" | "ExperimentalClassical" | "Expressionism" | "FirstVienneseSchool" | "Futurism" | "GregorianChant" | "Impressionism" | "Late20thCentury" | "LateBaroque" | "LateRenaissance" | "LateRomantic" | "LightMusic" | "Medieval" | "Middle20thCentury" | "MiddleBaroque" | "MiddleRenaissance" | "MiddleRomantic" | "Minimalism" | "Modernism" | "MusiqueConcrete" | "Nationalist" | "NeoClassical" | "NeoRomantic" | "OrchestralFusion" | "Organum" | "Plainsong" | "PostClassical" | "PostMinimalism" | "PreClassical" | "Renaissance" | "Romantic" | "Serialism" | "Spectralism" | "AlternativeCountry" | "Americana" | "BakersfieldSound" | "Bluegrass" | "CountryPop" | "CountryRap" | "CountryRock" | "HonkyTonk" | "ModernCountry" | "NashvilleSound" | "NeoTraditionalCountry" | "OutlawCountry" | "TexasCountry" | "TraditionalCountry" | "WesternSwing" | "2StepGarage" | "AcidHouse" | "AcidTechno" | "Ambient" | "AmbientHouse" | "Bassline" | "BigBeat" | "Breakbeat" | "BrokenBeat" | "ChicagoHouse" | "DeepHouse" | "DetroitHouse" | "DetroitTechno" | "DigitalHardcore" | "Downtempo" | "DrillNBass" | "DrumNBass" | "Drumstep" | "DubstepUK" | "DubstepUS" | "Dubtronica" | "DutchHouse" | "EBM" | "Electro" | "ElectroHouse" | "Electronica/Eclectic" | "Eurodance" | "ExperimentalElectronic" | "FrenchHouse" | "FutureGarage" | "Gabba" | "GarageHouse" | "Glitch" | "HappyHardcore" | "HardTrance" | "Hardcore" | "HardcoreBreakbeat" | "Hardstyle" | "HipHouse" | "House" | "IDM" | "JazzHouse" | "Jungle" | "Kwaito" | "LatinHouse" | "MinimalHouse" | "MinimalTechno" | "NoiseMusic" | "NuDisco" | "ProgressiveHouse" | "ProgressiveTrance" | "PsychedelicTrance" | "Schranz" | "SpeedGarage" | "Synthwave" | "TechHouse" | "Techno" | "Trance" | "TribalHouse" | "TripHop" | "UKFunky" | "UKGarage" | "VocalHouse" | "AmericanFolk" | "AmericanPrimitiveGuitar" | "BarbershopMusic" | "BritishFolk" | "CanadianFiddling" | "CanadianFolk" | "Celtic" | "ElectricFolk" | "EnglishFolk" | "FolkBaroque" | "FolkRevival" | "IndieFolk" | "IrishFolk" | "NorthAmericanFolk" | "OldTime" | "ScottishFolk" | "SeaShanties" | "WelshFolk" | "Zydeco" | "ClassicGospel" | "SouthernGospel" | "AlternativeRap" | "ChristianRap" | "ClassicHipHop" | "ConsciousRap" | "Crunk" | "DirtyRap" | "EastCoastHipHop" | "ExperimentalHipHop" | "FunkCarioca" | "GFunk" | "GangstaRap" | "GoldenAge" | "Grime" | "HardcoreRap" | "InstrumentalHipHop" | "MiamiBass" | "PopRap" | "SouthernRap" | "Trap" | "WestCoastHipHop" | "AcidJazz" | "AfricanJazz" | "AvantGardeJazz" | "Bebop" | "BossaNova" | "BritishDanceBand" | "CapeJazz" | "CoolJazz" | "Dixieland" | "EthiopianJazz" | "FreeJazz" | "GypsyJazz" | "HardBop" | "JazzBlues" | "JazzFunk" | "JazzFusion" | "JazzRock" | "JazzPop" | "LatinJazz" | "ModalJazz" | "ModernCreative" | "ModernJazz" | "PostBop" | "SmoothJazz" | "SoulJazz" | "Swing" | "SwingRevival" | "TraditionalJazz" | "TraditionalPop" | "Bachata" | "Banda" | "Boogaloo" | "Brazilian" | "Conjunto" | "Corridos" | "Duranguense" | "Grupera" | "Hupango" | "Mariachi" | "NewMexicoMusic" | "Norteno" | "Ranchera" | "Reggaeton" | "RegionalMexican" | "Salsa" | "Sertanejo" | "Tejano" | "AfricanPop" | "Afrobeat" | "AlternativeDance" | "AlternativePop" | "Axe" | "Bikutsi" | "Bollywood" | "BrazilianPop" | "Brega" | "CantoPop" | "CaribbeanPop" | "ChamberPop" | "Chimurenga" | "ChinesePop" | "DreamPop" | "Electroclash" | "ElectronicPop" | "Enka" | "FilipinoPop" | "Folktronica" | "FrenchPop" | "GermanPop" | "GreekPop" | "Highlife" | "Hiplife" | "HokkienPop" | "IndianPop" | "IndiePop" | "Indietronica" | "IndonesianPop" | "JapanesePop" | "Kayokyoku" | "Kizomba" | "KoreanPop" | "Kuduro" | "LatinFreestyle" | "Madchester" | "Makossa" | "MandoPop" | "Mbalax" | "Mbaqanga" | "ModernLaiko" | "ModernPop" | "MPB" | "MusicOfThePhilippines" | "NDW" | "NeoPsychedelia" | "NewRomantic" | "NewWave" | "NoisePop" | "NouvelleChanson" | "PopRock" | "PsychedelicPop" | "Schlager" | "Soca" | "Soukous" | "SynthPop" | "Telugu" | "TweePop" | "AfroFunk" | "AlternativeR'n'B" | "BlueEyedSoul" | "Boogie" | "ChicagoSoul" | "ClassicR'n'B" | "ContemporaryR'n'B" | "DeepSoul" | "Disco" | "DooWop" | "Funk" | "GoGo" | "HiNRG" | "ItaloDisco" | "MemphisSoul" | "MinneapolisFunk" | "ModernR'n'B" | "MotownSound" | "NeoSoul" | "NewJackSwing" | "NewOrleansR'n'B" | "OGFunk" | "PFunk" | "Phillysound" | "PopFunk" | "PsychedelicSoul" | "QuietStorm" | "RetroSoul" | "Soul" | "SouthernSoul" | "TraditionalR'n'B" | "UrbanContemporaryGospel" | "WestCoastSoul" | "Dancehall" | "Dub" | "Rocksteady" | "RootsReggae" | "Ska" | "AfroRock" | "AltMetal" | "AlternativeRock" | "ArtRock" | "BlackMetal" | "BoogieRock" | "BritRock" | "BritishInvasion" | "BritPop" | "ClassicRock" | "DarkWave" | "DeathMetal" | "DoomMetal" | "EarlyRock" | "ElectroGoth" | "EmoRock" | "ExperimentalRock" | "FunkMetal" | "GarageRock" | "GlamRock" | "GothicMetal" | "GothicRock" | "Grindcore" | "Grunge" | "HairMetal" | "HardRock" | "HardcorePunk" | "HeartlandRock" | "IndieRock" | "Industrial" | "IndustrialMetal" | "JovemGuarda" | "Krautrock" | "MathRock" | "Merseybeat" | "Metal" | "Metalcore" | "NoWave" | "NoiseRock" | "NuMetal" | "Oi!" | "PopPunk" | "PostGrunge" | "PostRock" | "PostHardcore" | "PostPunk" | "PowerPop" | "ProgressiveMetal" | "ProgressiveRock" | "ProtoPunk" | "PsychedelicRock" | "Psychobilly" | "Punk" | "RiotGrrrl" | "RockNRoll" | "Rockabilly" | "SambaRock" | "Screamo" | "Shoegaze" | "SoftRock" | "SouthAmericanRock" | "SouthernRock" | "SpaceRock" | "SpeedMetal" | "StonerRock" | "Surf" | "SwampRock" | "ThirdWaveSka" | "ThrashMetal" | "Tropicalia" | "TwoTone" | "Underground" | "Commentary" | "Conversation" | "Interview" | "Monologue" | "Poetry" | "Skit" | "StandUpComedy" | "Afoxe" | "AfricanMusic" | "ArgentinianMusic" | "BalineseMusic" | "BrazilianMusic" | "Calypso" | "CapoeiraMusic" | "CaribbeanMusic" | "CarnaticMusic" | "ChaChaCha" | "ChileanMusic" | "Choro" | "ColombianMusic" | "Contradanza" | "CubanMusic" | "Cueca" | "Cumbia" | "CzechMusic" | "Danzon" | "Dimotiko" | "DominicanMusic" | "Fado" | "Flamenco" | "FrenchMusic" | "GauchoMusic" | "GermanMusic" | "GreekMusic" | "Guaracha" | "HindustaniClassicalMusic" | "IndianMusic" | "IndonesianMusic" | "IrishMusic" | "ItalianMusic" | "JamaicanMusic" | "JavaneseMusic" | "JewishMusic" | "JugEnsemble" | "Klezmer" | "Mambo" | "Maracatu" | "Merengue" | "MexicanMusic" | "MiddleEasternMusic" | "NeapolitanSong" | "NorthAmericanMusic" | "PakistaniMusic" | "Palo" | "Pilon" | "Polka" | "PortugueseMusic" | "PuertoRicanMusic" | "PunjabiMusic" | "Ragtime" | "Repente" | "RomanianMusic" | "Salves" | "Samba" | "Son" | "SouthAmericanMusic" | "SpanishMusic" | "Spiritual" | "Tango" | "TibetanMusic" | "Tonada" | "TurkishMusic" | "TurkishClassicalMusic" | "WorkSongs" | "Exotica" | "NewAge" | "NewFlamenco" | "WorldFusionJazz" | "Worldbeat" | "UserDefined");
interface _SubGenre extends Primitive._string { content: SubGenre; }

/** A Type of SubTitle which defines its origin, form or the function. */
export type SubTitleType = ("Location" | "Version");
interface _SubTitleType extends Primitive._string { content: SubTitleType; }

/** A Type of summary. */
export type SummaryType = ("Contributor" | "RightsController");
interface _SummaryType extends Primitive._string { content: SummaryType; }

/** A Status of a Release in a supply chain. */
export type SupplyChainStatus = ("DeliveredToReleaseDistributor" | "InDeliveryToReleaseDistributor" | "InPreparationForDeliveryToReleaseDistributor" | "OrderPlacedForReleaseDistributor" | "ProcessingErrorAtReleaseCreator" | "ProcessingErrorAtReleaseDistributor" | "ReleaseMadeAvailableToConsumers" | "ReleaseNotAvailable" | "ReleaseReceivedByReleaseDistributor" | "ReleaseStagedForPublication" | "ReleaseViolatesTermsOfService" | "RightsConflict" | "SuccessfullyIngestedByReleaseDistributor" | "UserDefined");
interface _SupplyChainStatus extends Primitive._string { content: SupplyChainStatus; }

/** The Type of Tempo. */
export type Tempo = ("Adagietto" | "Adagio" | "Adagissimo" | "Allegretto" | "Allegrissimo" | "Allegro" | "AllegroModerato" | "Andante" | "AndanteModerato" | "Andantino" | "Grave" | "Larghetto" | "Larghissimo" | "Largo" | "Lento" | "MarciaModerato" | "Moderato" | "Prestissimo" | "Presto" | "UserDefined" | "Vivace" | "Vivacissimo");
interface _Tempo extends Primitive._string { content: Tempo; }

/** A code representing a Territory. This includes ISO 3166-1 two-letter codes, plus a code for Worldwide. */
export type TerritoryCode = ("AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AN" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CS" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ES-CE" | "ES-CN" | "ES-ML" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW");
interface _TerritoryCode extends Primitive._string { content: TerritoryCode; }

/** A Type of code. */
export type TerritoryCodeType = ("ISO" | "TIS");
interface _TerritoryCodeType extends Primitive._string { content: TerritoryCodeType; }

/** A Type of TerritoryCode which also includes deprecated codes. */
export type TerritoryCodeTypeIncludingDeprecatedCodes = ("DeprecatedISO" | "ISO" | "TIS");
interface _TerritoryCodeTypeIncludingDeprecatedCodes extends Primitive._string { content: TerritoryCodeTypeIncludingDeprecatedCodes; }

/** A Type of TextCodec. */
export type TextCodecType = ("ASCII" | "AsciiOrIso8859nText" | "DdexLyricsFile" | "EBU-TT" | "EnhancedLRC" | "EPUB" | "HTML" | "LRC" | "MicrosoftWord" | "OpenDocumentText" | "OOXML" | "PDF" | "PostScript" | "RTF" | "SimpleLRC" | "SRT" | "TTML" | "Unknown" | "UserDefined" | "UTF8Text" | "VTT" | "WindowsText" | "XHTML" | "XML");
interface _TextCodecType extends Primitive._string { content: TextCodecType; }

/** A Type of relationship between the lyrics and the music in a MusicalWork. */
export type TextMusicRelationshipType = ("TextOnly" | "SameCreation" | "SeparateCreation" | "MusicOnly");
interface _TextMusicRelationshipType extends Primitive._string { content: TextMusicRelationshipType; }

/** A Type of Text. */
export type TextType = ("Caption" | "ClosedCaption" | "EBook" | "LinerNotes" | "LyricText" | "NonInteractiveBooklet" | "SubTitle" | "TextDocument" | "Unknown" | "UserDefined");
interface _TextType extends Primitive._string { content: TextType; }

/** A Type of Text. */
export type TextType_ATOM = ("text" | "html" | "xhtml");
interface _TextType_ATOM extends Primitive._string { content: TextType_ATOM; }

/** A Theme. */
export type Theme = ("Abortion" | "Above" | "Accuse" | "Action" | "Activities" | "Actor" | "AddictedTo" | "Addiction" | "Adolescence" | "Adoption" | "Adoration" | "Advice" | "Affection" | "Afghanistan" | "Afraid" | "Africa" | "Afternoon" | "Air" | "Airplanes" | "Alabama" | "Alaska" | "Albania" | "Alcohol" | "Algeria" | "Alien" | "All" | "Alligator" | "Alone" | "Always" | "Ambition" | "Ambivalent" | "Ammunition" | "Amsterdam" | "AmusementParksAndRides" | "Andorra" | "Angel" | "Anger" | "Angola" | "Angst" | "Animals" | "Anniversary" | "AntiDrug" | "AntiguaAndBarbuda" | "Anxious" | "Anything" | "Apologize" | "April" | "Argentina" | "Arizona" | "Arkansas" | "Armageddon" | "Armenia" | "Arms" | "Art" | "Ashes" | "Asia" | "Assurance" | "Astrology" | "Astronaut" | "AtFirstSight" | "Atlanta" | "Attitude" | "Attractive" | "August" | "Aunt" | "Australia" | "Austria" | "Autumn" | "Awareness" | "Azerbaijan" | "Baby" | "Back" | "BackTogether" | "Bad" | "Bahamas" | "Bahrain" | "Bali" | "Balkans" | "Ballerina" | "BalticStates" | "Baltimore" | "Bangladesh" | "Barbados" | "Bars" | "Baseball" | "Basketball" | "Bass" | "Bathroom" | "BattleOfTheSexes" | "Bay" | "Beach" | "Bear" | "Beats" | "Beautiful" | "Beauty" | "Bedroom" | "Beg" | "Beginning" | "Behind" | "BeingIn" | "Belarus" | "Belgium" | "Belief" | "Believe" | "Belize" | "Bells" | "Belly" | "Below" | "Benelux" | "Benin" | "Berlin" | "Bermuda" | "Best" | "Betray" | "Beverage" | "Bhutan" | "Bicycles" | "Big" | "Bird" | "Birmingham" | "Birth" | "BirthControl" | "BirthdayParty" | "Black" | "Blame" | "Bless" | "Blonde" | "Blood" | "Blue" | "Boardwalk" | "Body" | "BodyLanguage" | "BodyParts" | "Bolivia" | "Book" | "Bored" | "BosniaAndHerzegovina" | "Boss" | "Boston" | "Botswana" | "Bounce" | "Boxing" | "Boys" | "Brag" | "Brain" | "Brass" | "Brazil" | "Breakdown" | "Breakup" | "Breathe" | "Bridge" | "Britain" | "BritishIsles" | "BrokenHome" | "Brother" | "Brown" | "Brunei" | "Brunette" | "Buddha" | "Bug" | "Build" | "Building" | "Bulgaria" | "Burden" | "BurkinaFaso" | "Burning" | "Burundi" | "Bus" | "Busy" | "Butterfly" | "California" | "CallOut" | "Calmness" | "Cambodia" | "Camera" | "Cameroon" | "Canada" | "Candle" | "Candy" | "CantGetOver" | "CantResist" | "CapeVerde" | "CapitalPunishment" | "CardGame" | "Carefree" | "Carnival" | "Carolinas" | "CarRacing" | "Cars" | "Casino" | "Cat" | "Celebration" | "Celebrity" | "CellPhone" | "Cemetary" | "CentralAfricanRepublic" | "CentralAmerica" | "Chad" | "Challenge" | "Change" | "Charity" | "Chase" | "Cheerleader" | "Chicago" | "Children" | "Chile" | "China" | "Choices" | "Choose" | "Christmas" | "Church" | "Cincinnati" | "Circus" | "City" | "CityLife" | "CivilRights" | "Clean" | "Cliff" | "Climb" | "Close" | "Clothing" | "Clown" | "Club" | "Coast" | "Cold" | "Colombia" | "Color" | "Colorado" | "Comfort" | "Comic" | "ComingHome" | "Commitment" | "Communication" | "Comoros" | "Compassion" | "Competitive" | "Complain" | "Compliments" | "Computer" | "Confidence" | "Conflict" | "Confused" | "Connecticut" | "Connection" | "Consciousness" | "Consistent" | "Container" | "Contempt" | "Continent" | "Conversation" | "CookIslands" | "Cool" | "Cosmetic" | "CostaRica" | "Country" | "CountryLife" | "Couple" | "Courage" | "Cousin" | "Cow" | "CowboyAndCowgirl" | "Crash" | "Crave" | "Crazy" | "Create" | "Crime" | "Criticize" | "Croatia" | "Crocodile" | "Crucifixion" | "Cruel" | "Crush" | "Cry" | "Cuba" | "Cyprus" | "Czechoslovakia" | "CzechRepublic" | "Dallas" | "Dance" | "DanceParty" | "Danger" | "Darkness" | "Date" | "Dating" | "Daughter" | "Dawn" | "Day" | "Daydream" | "Daytime" | "Death" | "December" | "Deep" | "Defeat" | "Defeated" | "Delaware" | "DemocraticRepublicOfTheCongo" | "Denmark" | "Denver" | "Desert" | "Desire" | "Despair" | "Desperate" | "Determination" | "Detroit" | "Devil" | "Difficult" | "Dinner" | "Dinosaur" | "Direction" | "Disappointment" | "Discovery" | "Disease" | "Dissatisfaction" | "Distance" | "Divorce" | "Dizzy" | "Djibouti" | "Doctor" | "Dog" | "Dolphin" | "DomesticViolence" | "Dominica" | "DominicanRepublic" | "DontGo" | "DontLeaveMe" | "Door" | "Down" | "DraftResistance" | "Dream" | "Drift" | "Drink" | "Drive" | "Drug" | "Drums" | "Dublin" | "Eagle" | "Ears" | "Earth" | "Earthquake" | "East" | "EasternEurope" | "Ecstatic" | "Ecuador" | "Education" | "Ego" | "Egypt" | "Elements" | "Elephant" | "ElSalvador" | "Elvis" | "Embarrassed" | "Emergency" | "Empowered" | "Empty" | "End" | "Enemy" | "Engagement" | "England" | "Enlightenment" | "Enlistment" | "Environment" | "Equality" | "EquatorialGuinea" | "Eritrea" | "Escape" | "Espionage" | "Estonia" | "Eswatini" | "Eternity" | "Ethiopia" | "Europe" | "EuropeanContinent" | "EuropeanEconomicArea" | "EuropeanEconomicCommunity" | "EuropeanUnion" | "Event" | "Everyday" | "Everything" | "Evil" | "Excellence" | "Excited" | "Excuse" | "Exercise" | "Explore" | "Eyes" | "Fabric" | "Face" | "Failure" | "Fair" | "Faith" | "FaithInDoubt" | "Fake" | "Fall" | "FallingIn" | "Fame" | "Family" | "FamilyLife" | "FamilyMember" | "Fantasy" | "Far" | "Farewell" | "Farm" | "Fascism" | "Fashion" | "Fast" | "Fat" | "Fate" | "Father" | "Favorite" | "February" | "Feel" | "Feelings" | "Feet" | "Feminism" | "Fever" | "Fight" | "Fiji" | "Find" | "Fingers" | "Finland" | "Fire" | "Fish" | "Fishing" | "Fix" | "Flirt" | "Flood" | "FloorAndCeiling" | "Florida" | "Flower" | "Fly" | "Focus" | "Follow" | "Food" | "Fool" | "Football" | "Forbidden" | "Forest" | "Forget" | "Forgive" | "FortuneTeller" | "Found" | "Fowl" | "Fox" | "Fragile" | "France" | "Free" | "Freedom" | "FrenchCaribbean" | "FrenchGuiana" | "FrenchPolynesia" | "Friday" | "Friendship" | "Frog" | "Fruits" | "Fun" | "Funeral" | "Fur" | "Furniture" | "Future" | "Gabon" | "Gambia" | "Gambling" | "Game" | "GangstaLife" | "Garbage" | "Garden" | "Gasoline" | "GasStation" | "Geek" | "Gender" | "General" | "Genocide" | "Gentle" | "GeographicLocation" | "Geography" | "Georgia" | "Germany" | "Gestures" | "GetLost" | "GettingOver" | "Ghana" | "Ghost" | "Girls" | "Give" | "Go" | "God" | "Gold" | "Golf" | "Good" | "GoodLife" | "Goodnight" | "Gossip" | "Government" | "Grandparent" | "Gratitude" | "GreatBritain" | "Greece" | "Greed" | "Green" | "Grenada" | "Grey" | "GrowOlder" | "GrowUp" | "Guatemala" | "Guilt" | "Guinea" | "Guinea-Bissau" | "Guitar" | "Gun" | "Guyana" | "Gypsy" | "Hair" | "Haiti" | "Halloween" | "Hands" | "Handsome" | "HangOut" | "Happiness" | "Harbor" | "Hat" | "Hate" | "Havana" | "Hawaii" | "Head" | "Healing" | "HealthAndWellness" | "Heart" | "Heartache" | "Heaven" | "Hell" | "Hello" | "Help" | "Hero" | "Heroism" | "Hide" | "High" | "Highest" | "Highland" | "Highway" | "Hillbilly" | "Hills" | "Hippie" | "Hips" | "History" | "HoldingOn" | "Hole" | "Holiday" | "Holland" | "Hollywood" | "Home" | "Honduras" | "Honesty" | "Honeymoon" | "HongKong" | "Hope" | "Horn" | "Horror" | "Horse" | "HorseRacing" | "Hospital" | "Hot" | "Hotel" | "House" | "Houston" | "Human" | "Hundred" | "Hungary" | "Husband" | "Iceland" | "Idaho" | "Idea" | "Ideal" | "Ideas" | "Identity" | "IdentityCrisis" | "Ignorance" | "Illinois" | "Immortality" | "Inch" | "Independence" | "India" | "Indiana" | "Individuality" | "Indonesia" | "Infatuated" | "Information" | "InFront" | "Innocence" | "Insect" | "Insecure" | "Insight" | "Insomnia" | "Inspiration" | "Insult" | "Integrity" | "Intention" | "Intoxicated" | "InTrouble" | "Invisible" | "Iowa" | "Iran" | "Iraq" | "Ireland" | "Island" | "IsleOfMan" | "Israel" | "Italy" | "IvoryCoast" | "Jamaica" | "January" | "Japan" | "Java" | "Jealous" | "JesusChrist" | "Jewelry" | "Jordan" | "Jukebox" | "July" | "Jump" | "June" | "Justice" | "Kangaroo" | "Kansas" | "KansasCity" | "Karaoke" | "Karma" | "Kazakhstan" | "Kentucky" | "Kenya" | "Keys" | "Kiribati" | "Kiss" | "Knees" | "Knowledge" | "Kuwait" | "Kyrgyzstan" | "Lake" | "Laos" | "Lasting" | "LastNight" | "LasVegas" | "Late" | "Latvia" | "Laughter" | "LawAndOrder" | "LawEnforcement" | "Lazy" | "Leader" | "Learn" | "Leave" | "Lebanon" | "Lecturing" | "Left" | "Legs" | "Lesotho" | "Liberia" | "Libya" | "Liechtenstein" | "Lies" | "Light" | "Lighthouse" | "Lightning" | "Lion" | "Lips" | "Listening" | "Lithuania" | "Living" | "Location" | "Lock" | "London" | "Lonely" | "Longing" | "Look" | "LosAngeles" | "LosingYou" | "Loss" | "Lost" | "LostThatLovingFeeling" | "Louisiana" | "Love" | "Lovely" | "Low" | "Loyalty" | "Lucky" | "Luxembourg" | "Macao" | "Madagascar" | "Magic" | "Magician" | "Mail" | "Maine" | "MakingLove" | "Malawi" | "Malaysia" | "Maldives" | "Mali" | "Malta" | "Mammal" | "Manipulate" | "March" | "MardiGras" | "MarriedLife" | "MarshallIslands" | "Maryland" | "Massachusetts" | "Mauritania" | "Mauritius" | "May" | "Me" | "Mean" | "Measurement" | "Medellín" | "Medical" | "Meditation" | "Memory" | "Memphis" | "Men" | "MensNames" | "MentalIllness" | "Mentality" | "MenTalkingToMen" | "MenTalkingToWomen" | "Mercy" | "Method" | "Mexico" | "Miami" | "Michigan" | "Micronesia" | "MiddleEast" | "Midnight" | "Mile" | "Military" | "Million" | "Mind" | "Mine" | "Minnesota" | "Miracle" | "Misbehavior" | "Misplace" | "MissingYou" | "Mississippi" | "Missouri" | "Mistakes" | "Mobile" | "Moldova" | "Monaco" | "Monday" | "Money" | "Mongolia" | "Monkey" | "Monster" | "Montana" | "Montenegro" | "Month" | "Moon" | "Morality" | "Morning" | "Morocco" | "Moscow" | "Mother" | "Motion" | "Motivation" | "Motorcycles" | "Mountain" | "Mourning" | "Mouse" | "Mouth" | "Move" | "Movie" | "MovingOn" | "Mozambique" | "Mule" | "MultipleBodyParts" | "Murder" | "Music" | "MusicalInstrument" | "MusicBusiness" | "Myanmar" | "Mystery" | "Namibia" | "Nashville" | "Nature" | "Nauru" | "Near" | "Nebraska" | "Neck" | "Need" | "Nepal" | "Nervous" | "Netherlands" | "Nevada" | "New" | "NewDay" | "NewHampshire" | "NewJersey" | "NewMexico" | "NewOrleans" | "News" | "NewYear" | "NewYork" | "NewYorkCity" | "NewZealand" | "Nicaragua" | "Niger" | "Nigeria" | "Night" | "Nightingale" | "Nightmare" | "None" | "NonRomantic" | "Noon" | "North" | "NorthAmerica" | "NorthDakota" | "NorthKorea" | "NorthMacedonia" | "Norway" | "Nostalgia" | "NotCommitted" | "NotMyType" | "November" | "Now" | "NuclearEnergy" | "NuclearWar" | "Number" | "Objects" | "Obsession" | "Ocean" | "Oceania" | "October" | "Ohio" | "Oklahoma" | "Old" | "Olympics" | "Oman" | "OneNightStand" | "Opinions" | "Opportunity" | "Oppression" | "Optimism" | "Orange" | "Oregon" | "Orphan" | "Outdoor" | "Outlaw" | "PacificIslands" | "Pad" | "Pain" | "Pakistan" | "Palau" | "Panama" | "Panic" | "Paper" | "PapuaNewGuinea" | "Parade" | "Paraguay" | "Parent" | "Paris" | "Park" | "Party" | "Past" | "Patience" | "Patriotism" | "Paw" | "Peace" | "Pennsylvania" | "People" | "Percussion" | "Perfection" | "Persevere" | "Peru" | "Pharmaceutical" | "Philadelphia" | "Philippines" | "Philosophy" | "Phone" | "Photograph" | "PhysicalPain" | "Piano" | "Pig" | "Pink" | "Pirate" | "Place" | "Planet" | "Platonic" | "Player" | "PlayMusic" | "Please" | "Poison" | "Poland" | "Political" | "PoliticalState" | "Politics" | "Polynesia" | "Pony" | "Porpoise" | "Portugal" | "Possessed" | "Possibility" | "Poverty" | "PowerAndControl" | "Prairie" | "Prayer" | "Pregnancy" | "Prejudice" | "Present" | "President" | "Pretty" | "Pride" | "Prison" | "Privacy" | "Problems" | "ProductAndBrand" | "Promise" | "Prophecy" | "Protect" | "Protest" | "PuertoRico" | "Purple" | "Qatar" | "Quality" | "Question" | "Questioning" | "Rabbit" | "Racism" | "Radio" | "Rain" | "Rainbow" | "Ranch" | "RapGame" | "Rat" | "Ready" | "Real" | "Rear" | "Rebellion" | "Recovery" | "Red" | "Redemption" | "Redhead" | "Reflect" | "Regret" | "Rehab" | "Rejection" | "Relax" | "Religion" | "Remember" | "Repeat" | "Reptile" | "RepublicOfTheCongo" | "Rescue" | "Resilient" | "Respect" | "Restaurant" | "Return" | "Reunite" | "Revenge" | "Revolution" | "Revolve" | "RhodeIsland" | "Rhythm" | "Ride" | "Right" | "RioDeJaneiro" | "Risk" | "River" | "Road" | "RoadAccident" | "RoadTrip" | "Robot" | "Rock" | "Rodeo" | "Romance" | "Romania" | "Romantic" | "Rome" | "Royalty" | "Run" | "Russia" | "Rwanda" | "Sad" | "Safety" | "Sail" | "SaintKittsAndNevis" | "SaintLucia" | "SaintVincentAndTheGrenadines" | "SaltLakeCity" | "Same" | "Samoa" | "SanAntonio" | "SanFrancisco" | "SanMarino" | "SantaClaus" | "SantaFe" | "SaoTomeAndPrincipe" | "Satisfaction" | "Saturday" | "SaudiArabia" | "Savannah" | "Save" | "Scandinavia" | "School" | "Scotland" | "Scream" | "Sea" | "Search" | "SearchingFor" | "Season" | "Secrets" | "Seduced" | "Segregation" | "Senegal" | "Sensuality" | "September" | "Serbia" | "Seychelles" | "Shake" | "Shame" | "Shark" | "Sheep" | "Shelter" | "Shine" | "Ship" | "Shoe" | "Shoot" | "Shopping" | "Shoulder" | "ShouldHaveSaid" | "Shouting" | "ShowBiz" | "Shy" | "SierraLeone" | "Signs" | "Silence" | "Silver" | "Simple" | "Sin" | "Sing" | "Singapore" | "SingleParent" | "SinglePerson" | "Sister" | "Sit" | "Situation" | "Size" | "Skate" | "Skateboard" | "Ski" | "Skin" | "Sky" | "Slavery" | "Sleazy" | "Sleep" | "Slovakia" | "Slovenia" | "Slow" | "Small" | "SmallTownLife" | "Smart" | "Smile" | "Smoke" | "Snake" | "Snow" | "Snowman" | "Sober" | "SocialOutcast" | "Solitude" | "SolomonIslands" | "Somalia" | "Son" | "Sounds" | "South" | "SouthAfrica" | "SouthAmerica" | "SouthDakota" | "SouthEastAsia" | "SouthKorea" | "SouthSudan" | "SpacedOut" | "Spain" | "Special" | "SpecificAge" | "SpecificTime" | "Speed" | "Spider" | "Spirit" | "Sport" | "Spring" | "SriLanka" | "St.Louis" | "Stalker" | "Stand" | "Star" | "Start" | "Steal" | "StepParent" | "Stick" | "Stop" | "Storm" | "StorybookCharacter" | "Strange" | "Street" | "Stress" | "String" | "StringAndRope" | "Strong" | "Stubborn" | "Stupid" | "Style" | "Substances" | "Success" | "Sudan" | "Suffrage" | "Suicide" | "Summer" | "Sun" | "Sunday" | "Sunrise" | "Sunshine" | "Superhero" | "Superiority" | "Supernatural" | "Support" | "Surf" | "Suriname" | "SurpriseParty" | "Survive" | "Swagger" | "Swamp" | "Sweden" | "Sweet" | "Swim" | "Switzerland" | "Sympathy" | "Synthesizer" | "Syria" | "Taiwan" | "Tajikistan" | "TakeMeBack" | "Talking" | "Tall" | "Tanzania" | "Tarot" | "Tattoo" | "Taxi" | "Teach" | "Technology" | "Teeth" | "Television" | "Tell" | "Temperature" | "Temptation" | "Tennessee" | "Terrible" | "Texas" | "TextMessage" | "Thailand" | "Theatre" | "Them" | "Thin" | "Thousand" | "Threaten" | "ThreeKings" | "Thursday" | "Tibet" | "Tiger" | "Time" | "TimeOfDay" | "Timor-Leste" | "Tobacco" | "Today" | "Togetherness" | "Togo" | "Tokyo" | "Tomorrow" | "Tonga" | "Tongue" | "Tonight" | "Tools" | "Torn" | "Toy" | "Tradition" | "Tragedy" | "Trail" | "Trains" | "Transportation" | "Trapped" | "Travel" | "Tree" | "TrinidadAndTobago" | "Trouble" | "Trucks" | "Trumpet" | "Trust" | "Truth" | "Try" | "Tuesday" | "Tulsa" | "Tunisia" | "Turkey" | "Turkmenistan" | "Turn" | "Tuvalu" | "UFO" | "Uganda" | "Ugly" | "Ukraine" | "Unbelievable" | "Uncle" | "Understanding" | "Unfair" | "Unfaithful" | "Union" | "Unique" | "UnitedArabEmirates" | "UnitedKingdom" | "UnitedStates" | "Unity" | "Universe" | "Unrequited" | "Up" | "Uruguay" | "Us" | "UsAgainstTheWorld" | "UserDefined" | "Utah" | "Utopia" | "Uzbekistan" | "Vacation" | "Valentine" | "Valley" | "Vanuatu" | "Vatican" | "Vegetable" | "Venezuela" | "Vermont" | "Victory" | "VideoGame" | "Vienna" | "Vietnam" | "Villain" | "Violence" | "Virginia" | "Voice" | "Volcano" | "Voodoo" | "Wait" | "Waiter" | "Waking" | "Wales" | "Walk" | "Wall" | "War" | "Washington" | "Wasteful" | "Water" | "Waterfall" | "Weapon" | "Wedding" | "Wednesday" | "Week" | "Weekend" | "Welcome" | "WeShouldBeTogether" | "West" | "WesternSahara" | "WestIndies" | "WestVirginia" | "Whale" | "Whisper" | "Whistle" | "White" | "Wife" | "Wild" | "Wind" | "WindChimes" | "Window" | "Winning" | "Winter" | "Wisconsin" | "Wisdom" | "Wish" | "Witch" | "Wizardry" | "Wolf" | "Women" | "WomensNames" | "WomenTalkingToMen" | "WomenTalkingToWomen" | "Wonderful" | "Woodwind" | "Words" | "Work" | "WorkingClass" | "Workout" | "World" | "Worry" | "Worship" | "Write" | "Wrong" | "Wyoming" | "Yellow" | "Yemen" | "Yesterday" | "Yoga" | "You" | "Young" | "Youth" | "Yugoslavia" | "Zambia" | "Zimbabwe" | "Zodiac" | "Zoo");
interface _Theme extends Primitive._string { content: Theme; }

/** A Type of Theme. */
export type ThemeType = ("ClosingTheme" | "MainTheme" | "OpeningTheme" | "SegmentTheme" | "TitleTheme" | "UserDefined");
interface _ThemeType extends Primitive._string { content: ThemeType; }

/** A Type of time code. */
export type TimecodeType = ("FSK" | "MIDI" | "SMPTE" | "VITC");
interface _TimecodeType extends Primitive._string { content: TimecodeType; }

/** A CISAC four-digit TIS code representing a Territory. */
export type TisTerritoryCode = ("4" | "8" | "12" | "20" | "24" | "28" | "31" | "32" | "36" | "40" | "44" | "48" | "50" | "51" | "52" | "56" | "64" | "68" | "70" | "72" | "76" | "84" | "90" | "96" | "100" | "104" | "108" | "112" | "116" | "120" | "124" | "132" | "140" | "144" | "148" | "152" | "156" | "158" | "170" | "174" | "178" | "180" | "188" | "191" | "192" | "196" | "200" | "203" | "204" | "208" | "212" | "214" | "218" | "222" | "226" | "230" | "231" | "232" | "233" | "242" | "246" | "250" | "258" | "262" | "266" | "268" | "270" | "276" | "278" | "280" | "288" | "296" | "300" | "308" | "320" | "324" | "328" | "332" | "336" | "340" | "344" | "348" | "352" | "356" | "360" | "364" | "368" | "372" | "376" | "380" | "384" | "388" | "392" | "398" | "400" | "404" | "408" | "410" | "414" | "417" | "418" | "422" | "426" | "428" | "430" | "434" | "438" | "440" | "442" | "446" | "450" | "454" | "458" | "462" | "466" | "470" | "478" | "480" | "484" | "492" | "496" | "498" | "499" | "504" | "508" | "512" | "516" | "520" | "524" | "528" | "540" | "548" | "554" | "558" | "562" | "566" | "578" | "583" | "584" | "585" | "586" | "591" | "598" | "600" | "604" | "608" | "616" | "620" | "624" | "626" | "630" | "634" | "642" | "643" | "646" | "659" | "662" | "670" | "674" | "678" | "682" | "686" | "688" | "690" | "694" | "702" | "703" | "704" | "705" | "706" | "710" | "716" | "720" | "724" | "728" | "729" | "732" | "736" | "740" | "748" | "752" | "756" | "760" | "762" | "764" | "768" | "776" | "780" | "784" | "788" | "792" | "795" | "798" | "800" | "804" | "807" | "810" | "818" | "826" | "834" | "840" | "854" | "858" | "860" | "862" | "882" | "886" | "887" | "890" | "891" | "894" | "2100" | "2101" | "2102" | "2103" | "2104" | "2105" | "2106" | "2107" | "2108" | "2109" | "2110" | "2111" | "2112" | "2113" | "2114" | "2115" | "2116" | "2117" | "2118" | "2119" | "2120" | "2121" | "2122" | "2123" | "2124" | "2125" | "2126" | "2127" | "2128" | "2129" | "2130" | "2131" | "2132" | "2133" | "2134" | "2136");
interface _TisTerritoryCode extends Primitive._string { content: TisTerritoryCode; }

/** A Type of Title which defines its origin, form or the function it fulfils in relation to a Creation. Note: A Title may fulfil more than one role. Example: 'Help' may be both the OriginalTitle and the DisplayTitle for the well-known Beatles song. */
export type TitleType = ("AbbreviatedDisplayTitle" | "AlternativeTitle" | "DisplayTitle" | "FirstLineOfText" | "FormalTitle" | "GroupingTitle" | "IncorrectTitle" | "MisspelledTitle" | "MusicalWorkTitle" | "OriginalTitle" | "SearchTitle" | "SortingTitle" | "TitleAsPart" | "TitleWithoutPunctuation" | "TranslatedTitle" | "TransliteratedTitle" | "Unknown" | "UserDefined");
interface _TitleType extends Primitive._string { content: TitleType; }

/** A category of a Transfer. */
export type TransferCategory = ("AlignmentTones" | "AnalogToDigitalConverter" | "BitDepth" | "Cartridge" | "ClockSource" | "ConversionReferenceLevel" | "Emphasis" | "MaterialCondition" | "MicPreamp" | "NoiseReduction" | "NumberOfChannels" | "NumberOfSides" | "NumberOfTracks" | "PhonoPreamp" | "ReferenceClock" | "ReferenceTones" | "SamplingRate" | "Side1Condition" | "Side2Condition" | "SmpteFrameRate" | "SourceMachine" | "Speed" | "Storage" | "Stylus" | "StylusSize" | "TapeBakedDate" | "TapeBakedEquipment" | "TapeBakedHours" | "TapeBakedTemperature" | "TapeCoolHours" | "Tonearm" | "TrackConfiguration" | "TransferSoftware");
interface _TransferCategory extends Primitive._string { content: TransferCategory; }

/** A Type of Transfer. */
export type TransferType = ("AnalogToAnalog" | "AnalogToDigital" | "DigitalCopy" | "DigitalToAnalog" | "DigitalToDigital");
interface _TransferType extends Primitive._string { content: TransferType; }

/** A UnitOfMeasure for a BitRate. */
export type UnitOfBitRate = ("bps" | "Gbps" | "kbps" | "Mbps");
interface _UnitOfBitRate extends Primitive._string { content: UnitOfBitRate; }

/** A UnitOfMeasure for a condition value. */
export type UnitOfConditionValue = ("Millisecond" | "Minute" | "Percent" | "Pixel" | "Second");
interface _UnitOfConditionValue extends Primitive._string { content: UnitOfConditionValue; }

/** A UnitOfMeasure used for the specification of cue points. */
export type UnitOfCuePoints = ("Millisecond" | "Second");
interface _UnitOfCuePoints extends Primitive._string { content: UnitOfCuePoints; }

/** A UnitOfMeasure for a Duration. */
export type UnitOfDuration = ("Day" | "Month" | "UserDefined" | "Week");
interface _UnitOfDuration extends Primitive._string { content: UnitOfDuration; }

/** A UnitOfMeasure for an Extent. */
export type UnitOfExtent = ("cm" | "Inch" | "mm" | "PercentOfScreen" | "Pixel");
interface _UnitOfExtent extends Primitive._string { content: UnitOfExtent; }

/** A UnitOfMeasure for a FrameRate. */
export type UnitOfFrameRate = ("Hz(interlaced)" | "Hz(non-interlaced)");
interface _UnitOfFrameRate extends Primitive._string { content: UnitOfFrameRate; }

/** A UnitOfMeasure for a frequency. */
export type UnitOfFrequency = ("GHz" | "Hz" | "kHz" | "MHz");
interface _UnitOfFrequency extends Primitive._string { content: UnitOfFrequency; }

/** A base unit used for calculating a Revenue Allocation. */
export type UnitTypeForRevenueAllocation = ("IndividualUsages" | "Seconds" | "UnitOfAccounting" | "Usages" | "UserDefined");
interface _UnitTypeForRevenueAllocation extends Primitive._string { content: UnitTypeForRevenueAllocation; }

/** A Type of physical interface by which a Consumer uses a Service or Release. */
export type UserInterfaceType = ("AsPerContract" | "ConnectedDevice" | "GameConsole" | "Jukebox" | "KaraokeMachine" | "Kiosk" | "LocalStorageJukebox" | "PersonalComputer" | "PhysicalMediaWriter" | "PortableDevice" | "RemoteStorageJukebox" | "SmartSpeakers" | "Unknown" | "UserDefined");
interface _UserInterfaceType extends Primitive._string { content: UserInterfaceType; }

/** A Type of physical interface by which a Consumer uses a Service or Release. */
export type UserInterfaceType_ERN = ("ConnectedDevice" | "GameConsole" | "Jukebox" | "KaraokeMachine" | "Kiosk" | "LocalStorageJukebox" | "PersonalComputer" | "PhysicalMediaWriter" | "PortableDevice" | "RemoteStorageJukebox" | "SmartSpeakers" | "UserDefined");
interface _UserInterfaceType_ERN extends Primitive._string { content: UserInterfaceType_ERN; }

/** A Type of a nature of a Service, or a Release, as used by a Consumer. */
export type UseType = ("AsPerContract" | "Broadcast" | "Cable" | "ConditionalDownload" | "ContentInfluencedStream" | "Display" | "Download" | "Dub" | "DubForOnDemandStreaming" | "DubForLivePerformance" | "DubForMovies" | "DubForMusicOnHold" | "DubForPublicPerformance" | "DubForRadio" | "DubForTV" | "ExtractForInternet" | "KioskDownload" | "Narrowcast" | "NonInteractiveStream" | "OnDemandStream" | "Perform" | "PerformAsMusicOnHold" | "PerformInLivePerformance" | "PerformInPublic" | "PermanentDownload" | "Playback" | "PlayInPublic" | "Podcast" | "Print" | "PrivateCopy" | "PurchaseAsPhysicalProduct" | "Rent" | "Simulcast" | "Stream" | "TetheredDownload" | "TimeInfluencedStream" | "Unknown" | "Use" | "UseAsAlertTone" | "UseAsDevice" | "UseAsKaraoke" | "UseAsRingbackTone" | "UseAsRingbackTune" | "UseAsRingtone" | "UseAsRingtune" | "UseAsScreensaver" | "UseAsVoiceMail" | "UseAsWallpaper" | "UseForDataMining" | "UseForGenerativeAI" | "UseForIdentification" | "UseForNonGenerativeAI" | "UseInMobilePhoneMessaging" | "UseInPhoneListening" | "UserDefined" | "UserMakeAvailableLabelProvided" | "UserMakeAvailableUserProvided" | "Webcast");
interface _UseType extends Primitive._string { content: UseType; }

/** A Type of a usage communicated in a message in the Anomaly Reporting Standard. */
export type UseType_AR = ("Download" | "Stream" | "UseInPlayList" | "UserDefined");
interface _UseType_AR extends Primitive._string { content: UseType_AR; }

/** A Type of a nature of a Service, or a Release, as used by a Consumer. */
export type UseType_BWARM = ("All" | "AsPerContract" | "Broadcast" | "ConditionalDownload" | "ContentInfluencedStream" | "Display" | "Download" | "DubForAdvertisement" | "DubForLivePerformance" | "DubForMovies" | "DubForMusicOnHold" | "DubForPublicPerformance" | "DubForRadio" | "DubForTV" | "ExtractForInternet" | "KioskDownload" | "LiveStream" | "Narrowcast" | "NonInteractiveStream" | "OnDemandStream" | "PerformAsMusicOnHold" | "PerformInLivePerformance" | "PerformInPublic" | "PermanentDownload" | "Playback" | "PlayInPublic" | "Podcast" | "Print" | "PrivateCopy" | "ProgrammedContentStream" | "PurchaseAsPhysicalProduct" | "Rent" | "Simulcast" | "Stream" | "TetheredDownload" | "TimeInfluencedStream" | "Unknown" | "UseAsAlertTone" | "UseAsDevice" | "UseAsKaraoke" | "UseAsRingbackTone" | "UseAsRingbackTune" | "UseAsRingtone" | "UseAsRingtune" | "UseAsScreensaver" | "UseAsVoiceMail" | "UseAsWallpaper" | "UseForIdentification" | "UseForUgcCreation" | "UseInMobilePhoneMessaging" | "UseInPhoneListening" | "UserDefined" | "UserMakeAvailableLabelProvided" | "UserMakeAvailableUserProvided" | "Webcast");
interface _UseType_BWARM extends Primitive._string { content: UseType_BWARM; }

/** A Type of a nature of a Service, or a Release, as used by a Consumer. */
export type UseType_DSR = ("AsPerContract" | "Broadcast" | "ConditionalDownload" | "ContentInfluencedStream" | "Display" | "Download" | "DubForAdvertisement" | "DubForLivePerformance" | "DubForMovies" | "DubForMusicOnHold" | "DubForPublicPerformance" | "DubForRadio" | "DubForTV" | "ExtractForInternet" | "KioskDownload" | "LiveStream" | "Narrowcast" | "NonInteractiveStream" | "OnDemandStream" | "PerformAsMusicOnHold" | "PerformInLivePerformance" | "PerformInPublic" | "PermanentDownload" | "Playback" | "PlayInPublic" | "Podcast" | "Print" | "PrivateCopy" | "ProgrammedContentStream" | "PurchaseAsPhysicalProduct" | "Rent" | "Simulcast" | "Stream" | "TetheredDownload" | "TimeInfluencedStream" | "Unknown" | "UseAsAlertTone" | "UseAsDevice" | "UseAsKaraoke" | "UseAsRingbackTone" | "UseAsRingbackTune" | "UseAsRingtone" | "UseAsRingtune" | "UseAsScreensaver" | "UseAsVoiceMail" | "UseAsWallpaper" | "UseForIdentification" | "UseForUgcCreation" | "UseInMobilePhoneMessaging" | "UseInPhoneListening" | "UserDefined" | "UserMakeAvailableLabelProvided" | "UserMakeAvailableUserProvided" | "Webcast");
interface _UseType_DSR extends Primitive._string { content: UseType_DSR; }

/** A Type of a nature of a Service, or a Release, as used by a Consumer. */
export type UseType_ERN = ("Broadcast" | "Cable" | "ConditionalDownload" | "ContentInfluencedStream" | "Display" | "Download" | "Dub" | "DubForOnDemandStreaming" | "DubForLivePerformance" | "DubForMovies" | "DubForMusicOnHold" | "DubForPublicPerformance" | "DubForRadio" | "DubForTV" | "ExtractForInternet" | "KioskDownload" | "Narrowcast" | "NonInteractiveStream" | "OnDemandStream" | "Perform" | "PerformAsMusicOnHold" | "PerformInLivePerformance" | "PerformInPublic" | "PermanentDownload" | "Playback" | "PlayInPublic" | "Podcast" | "Print" | "PrivateCopy" | "PurchaseAsPhysicalProduct" | "Rent" | "Simulcast" | "Stream" | "TetheredDownload" | "TimeInfluencedStream" | "Use" | "UseAsAlertTone" | "UseAsDevice" | "UseAsKaraoke" | "UseAsRingbackTone" | "UseAsRingbackTune" | "UseAsRingtone" | "UseAsRingtune" | "UseAsScreensaver" | "UseAsVoiceMail" | "UseAsWallpaper" | "UseForDataMining" | "UseForGenerativeAI" | "UseForIdentification" | "UseForNonGenerativeAI" | "UseInMobilePhoneMessaging" | "UseInPhoneListening" | "UserDefined" | "UserMakeAvailableLabelProvided" | "UserMakeAvailableUserProvided" | "Webcast");
interface _UseType_ERN extends Primitive._string { content: UseType_ERN; }

/** A Type of a nature of a Service, or a Release, as used by a Consumer, as used in the MWNL messages. */
export type UseType_MWNL = ("OnDemandStream" | "PermanentDownload" | "PurchaseAsPhysicalProduct" | "UseAsRingtone");
interface _UseType_MWNL extends Primitive._string { content: UseType_MWNL; }

/** A Type of a nature of a Service, or a Release, as used by a Consumer. */
export type UseType_RDR = ("All" | "Broadcast" | "BroadcastRadio" | "BroadcastTV" | "CableRetransmission" | "CableRetransmissionRadio" | "CableRetransmissionTV" | "CatchUp" | "CatchUpRadio" | "CatchUpTV" | "CommercialRent" | "ConditionalDownload" | "Download" | "Dub" | "DubForDistribution" | "DubForOnDemandStreaming" | "DubForPublicPerformance" | "DubForRadio" | "DubForTV" | "Lend" | "NonInteractiveStream" | "OnDemandStream" | "PerformInPublic" | "PermanentDownload" | "Podcast" | "PrivateCopy" | "Retransmission" | "RingbackTone" | "Simulcast" | "SimulcastRadio" | "SimulcastTV" | "Stream" | "UseForDataMining" | "UseForEducationAndOrSocialPurposes" | "UseForGenerativeAI" | "UseForIdentification" | "UseForNonGenerativeAI" | "UserDefined" | "Webcast");
interface _UseType_RDR extends Primitive._string { content: UseType_RDR; }

/** A Type of Version. */
export type VersionType = ("ACappellaVersion" | "AlbumVersion" | "AlternativeVersion" | "CleanVersion" | "DemoVersion" | "EditedVersion" | "InstrumentalVersion" | "KaraokeVersion" | "LiveVersion" | "MixVersion" | "MonoVersion" | "RadioVersion" | "RemixVersion" | "SessionVersion" | "SingleVersion" | "StereoVersion" | "UserDefined");
interface _VersionType extends Primitive._string { content: VersionType; }

/** A Type of Version of an audio-viusal production. */
export type VersionType_MWDR = ("3D" | "Airline" | "App" | "BlackAndWhite" | "Cable" | "Colorized" | "DirectorsCut" | "DSP" | "Domestic" | "Extended" | "HomeVideo" | "Internet" | "International" | "MusicVideo" | "Network" | "NewDubbing" | "NewMusic" | "Original" | "Restored" | "Shortened" | "SilentMovie" | "Syndicated" | "Theatrical" | "ThemePark");
interface _VersionType_MWDR extends Primitive._string { content: VersionType_MWDR; }

/** A Type of VideoCodec. */
export type VideoCodecType = ("AVC" | "H.261" | "H.263" | "HEVC" | "MPEG-1" | "MPEG-2" | "MPEG-4" | "ProRes-422" | "ProRes-422_HQ" | "ProRes-422_LT" | "ProRes-422_Proxy" | "ProRes-4444" | "ProRes-4444_XQ" | "RealVideo" | "Shockwave" | "Unknown" | "UserDefined" | "WMV");
interface _VideoCodecType extends Primitive._string { content: VideoCodecType; }

/** A Type of resolution (or definition) in which a Video is provided. */
export type VideoDefinitionType = ("HighDefinition" | "StandardDefinition" | "UserDefined");
interface _VideoDefinitionType extends Primitive._string { content: VideoDefinitionType; }

/** A Type of resolution (or definition) in which a Video is provided. */
export type VideoDefinitionType_DSR = ("HighDefinition" | "StandardDefinition");
interface _VideoDefinitionType_DSR extends Primitive._string { content: VideoDefinitionType_DSR; }

/** A Type of Video. */
export type VideoType = ("AdultContent" | "AdvertisementVideo" | "AdviceMagazine" | "Animation" | "BalletVideo" | "BehindTheScenes" | "BlackAndWhiteVideo" | "ChildrensFilm" | "ColorizedVideo" | "ColumnVideo" | "ConcertClip" | "ConcertVideo" | "CorporateFilm" | "Credits" | "Documentary" | "EducationalVideo" | "Episode" | "FeatureFilm" | "Fiction" | "InfomercialVideo" | "Interview" | "Karaoke" | "LiveEventVideo" | "LongFormMusicalWorkVideo" | "LongFormNonMusicalWorkVideo" | "LyricVideo" | "Magazine" | "Menu" | "MultimediaVideo" | "MusicalWorkClip" | "MusicalWorkReadalongVideo" | "MusicalWorkTrailer" | "MusicalWorkVideoChapter" | "News" | "NonMusicalWorkClip" | "NonMusicalWorkReadalongVideo" | "NonMusicalWorkTrailer" | "NonMusicalWorkVideoChapter" | "NonSerialAudioVisualRecording" | "OperaVideo" | "Performance" | "ReadalongVideo" | "RealityTvShowVideo" | "Season" | "SerialAudioVisualRecording" | "Series" | "ShortFilm" | "SilentVideo" | "SketchVideo" | "SoapSitcom" | "SpecialEvent" | "Sport" | "TheatricalWorkVideo" | "TrailerVideo" | "TvFilm" | "TvProgram" | "TvShowVideo" | "Unknown" | "VideoChapter" | "VideoClip" | "VideoReport" | "VideoStem" | "Drama" | "DramaticoMusicalVideo" | "InteractiveResource" | "ShortFormMusicalWorkVideo" | "ShortFormNonMusicalWorkVideo" | "UserDefined" | "WebResource");
interface _VideoType extends Primitive._string { content: VideoType; }

/** A Type of Video, as used in the DSRF Messages. */
export type VideoType_DSR = ("AdultContent" | "AdvertisementVideo" | "AdviceMagazine" | "Animation" | "BalletVideo" | "BehindTheScenes" | "BlackAndWhiteVideo" | "ChildrensFilm" | "ColorizedVideo" | "ColumnVideo" | "ConcertClip" | "ConcertVideo" | "CorporateFilm" | "Credits" | "Documentary" | "EducationalVideo" | "Episode" | "FeatureFilm" | "Fiction" | "InfomercialVideo" | "Interview" | "Karaoke" | "LiveEventVideo" | "LongFormMusicalWorkVideo" | "LongFormNonMusicalWorkVideo" | "LyricVideo" | "Magazine" | "Menu" | "MultimediaVideo" | "MusicalWorkClip" | "MusicalWorkReadalongVideo" | "MusicalWorkTrailer" | "MusicalWorkVideoChapter" | "News" | "NonMusicalWorkClip" | "NonMusicalWorkReadalongVideo" | "NonMusicalWorkTrailer" | "NonMusicalWorkVideoChapter" | "NonSerialAudioVisualRecording" | "OperaVideo" | "Performance" | "ReadalongVideo" | "RealityTvShowVideo" | "Season" | "SerialAudioVisualRecording" | "Series" | "ShortFilm" | "SilentVideo" | "SketchVideo" | "SoapSitcom" | "SpecialEvent" | "Sport" | "TheatricalWorkVideo" | "TrailerVideo" | "TvFilm" | "TvProgram" | "TvShowVideo" | "Unknown" | "VideoChapter" | "VideoClip" | "VideoReport" | "VideoStem");
interface _VideoType_DSR extends Primitive._string { content: VideoType_DSR; }

/** A Type of Video. */
export type VideoType_ERN43 = ("Clip" | "FrontCoverVideo" | "LongFormMusicalWorkVideo" | "LongFormNonMusicalWorkVideo" | "ShortFormMusicalWorkVideo" | "ShortFormNonMusicalWorkVideo" | "UserDefined");
interface _VideoType_ERN43 extends Primitive._string { content: VideoType_ERN43; }

/** A Type of MusicalCreation according to how it is experienced in an audio-visual Creation. */
export type VisualPerceptionType = ("Background" | "UserDefined" | "Visual");
interface _VisualPerceptionType extends Primitive._string { content: VisualPerceptionType; }

/** The Type of vocal register. */
export type VocalRegister = ("Alto" | "Baritone" | "BassBaritone" | "Bass" | "Castrati" | "Contrabass" | "Contralto" | "Countertenor" | "Falsetto" | "MezzoSoprano" | "Paradon" | "Piccolo" | "Sopranino" | "Soprano" | "Tenor" | "Treble" | "ViolaParadon" | "UserDefined");
interface _VocalRegister extends Primitive._string { content: VocalRegister; }

/** A Type of a MusicalCreation according to the occurrence of vocals. */
export type VocalType = ("Instrumental" | "UserDefined" | "Vocal");
interface _VocalType extends Primitive._string { content: VocalType; }

/** A Type of content of a MusicalWork to which a right applies. */
export type WorkPart = ("Lyrics" | "LyricsAndMelody" | "Melody");
interface _WorkPart extends Primitive._string { content: WorkPart; }

/** A Type of relationship between two Works. */
export type WorkRelationshipType = ("ArrangementOf" | "BasisForArrangement" | "MelodyBorrowedFrom" | "ReimaginingOf" | "TakenFrom" | "UserDefined");
interface _WorkRelationshipType extends Primitive._string { content: WorkRelationshipType; }

/** A Type of relationship between two Works. */
export type WorkRelationshipType_MWDR = ("Contains" | "IsContainedIn" | "Unknown" | "UserDefined");
interface _WorkRelationshipType_MWDR extends Primitive._string { content: WorkRelationshipType_MWDR; }

/** A Type of Work. */
export type WorkType = ("GraphicalWork" | "LiteraryWork");
interface _WorkType extends Primitive._string { content: WorkType; }

export interface document extends BaseType {
}
export var document: document;
