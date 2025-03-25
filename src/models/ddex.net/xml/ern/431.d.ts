import * as Primitive from '../../../xml-primitives';
import * as avs from '../allowed-value-sets';

// Source files:
// https://service.ddex.net/xml/ern/431/release-notification.xsd


interface BaseType {
	_exists: boolean;
	_namespace: string;
}
/** A Composite containing details of an AdministratingRecordCompany. */
interface _AdministratingRecordCompany extends BaseType {
	/** A Reference for a Party (specific to this Message). This is a LocalPartyAnchorReference starting with the letter P. */
	RecordCompanyPartyReference: string;
	/** The role played by the Party responsible for administering Rights in a Resource or a Release. */
	Role: AdministratingRecordCompanyRole;
}
export interface AdministratingRecordCompany extends _AdministratingRecordCompany { constructor: { new(): AdministratingRecordCompany }; }
export var AdministratingRecordCompany: { new(): AdministratingRecordCompany };

type AdministratingRecordCompanyRecordCompanyPartyReferenceType = string;
type _AdministratingRecordCompanyRecordCompanyPartyReferenceType = Primitive._string;

/** A Composite containing details of an AdministratingRecordCompanyRole. */
interface _AdministratingRecordCompanyRole extends avs._AdministratingRecordCompanyRole {
	/** The Namespace of the AdministratingRecordCompanyRole. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the AdministratingRecordCompanyRole. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface AdministratingRecordCompanyRole extends _AdministratingRecordCompanyRole { constructor: { new(): AdministratingRecordCompanyRole }; }
export var AdministratingRecordCompanyRole: { new(): AdministratingRecordCompanyRole };

/** A Composite containing details of a business deal with another Party. */
interface _Affiliation extends BaseType {
	/** The Name of the company. */
	CompanyName: string;
	/** A Territory to which the affiliation details do not apply. Either this Element or Territory shall be present, but not both. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. */
	ExcludedTerritoryCode: CurrentTerritoryCode[];
	/** A Reference for an affiliated Party (specific to this Message). This is a LocalPartyAnchorReference starting with the letter P. */
	PartyAffiliateReference: string;
	/** Percentage of the specific Right that is represented by the society. A quarter share is represented by '25' (and not 0.25). */
	PercentageOfRightsAssignment?: number;
	/** A Composite containing details of a rights type. */
	RightsType?: RightsType[];
	/** A Territory to which the affiliation details apply. Either this Element or ExcludedTerritory shall be present, but not both. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. */
	TerritoryCode: CurrentTerritoryCode[];
	/** The Type of affiliated Party. */
	Type: avs.AffiliationType;
	/** A Composite containing details about the Period of Time for which the society affiliation is valid. */
	ValidityPeriod?: ValidityPeriod;
}
export interface Affiliation extends _Affiliation { constructor: { new(): Affiliation }; }
export var Affiliation: { new(): Affiliation };

type AffiliationPartyAffiliateReferenceType = string;
type _AffiliationPartyAffiliateReferenceType = Primitive._string;

/** A Composite containing details of a TerritoryCode. */
interface _AllTerritoryCode extends avs._AllTerritoryCode {
	/** A standard used for the TerritoryCode. This is represented in an XML schema as an XML Attribute. If this Attribute is not provided, it is assumed that the code is a TerritoryCode in accordance with ISO 3166-1 or 3166-2 standard (or Worldwide). */
	IdentifierType: avs.TerritoryCodeTypeIncludingDeprecatedCodes;
}
export interface AllTerritoryCode extends _AllTerritoryCode { constructor: { new(): AllTerritoryCode }; }
export var AllTerritoryCode: { new(): AllTerritoryCode };

/** A Composite containing an AspectRatio and an AspectRatioType. */
interface _AspectRatio extends Primitive._number {
	/** The Flag indicating whether the AspectRatio value applies to a cropped resource (=true) or not (=false). If the Flag is not set, it is assumed that this is the ratio of the un-cropped resource. This is represented in an XML schema as an XML Attribute. */
	AppliesToCroppedResource: boolean;
	/** The Type of the AspectRatio. This is represented in an XML schema as an XML Attribute. If this Attribute is not provided, it is assumed that the AspectRatio is a PixelAspectRatio. */
	AspectRatioType: avs.AspectRatioType;
}
export interface AspectRatio extends _AspectRatio { constructor: { new(): AspectRatio }; }
export var AspectRatio: { new(): AspectRatio };

/** A Composite containing details of an AudioCodecType. */
interface _AudioCodecType extends avs._AudioCodecType {
	/** The Namespace of the AudioCodecType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the AudioCodecType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
	/** The Identifier of the Version of the AudioCodecType. This is represented in an XML schema as an XML Attribute. */
	Version: string;
}
export interface AudioCodecType extends _AudioCodecType { constructor: { new(): AudioCodecType }; }
export var AudioCodecType: { new(): AudioCodecType };

/** A Composite containing details of one or more audio delivery Files. */
interface _AudioDeliveryFile extends BaseType {
	/** A Composite containing details of a Type of AudioCodec. */
	AudioCodecType?: AudioCodecType;
	/** The BitDepth of the File. */
	BitDepth?: number;
	/** A Composite containing the BitRate for the audio data and a UnitOfMeasure (the default is kbps). */
	BitRate?: BitRate;
	/** An amount of audio data in a sample. */
	BitsPerSample?: number;
	/** A Composite containing details of a ContainerFormat. */
	ContainerFormat?: ContainerFormat;
	/** The Duration of the instantiation of the SoundRecording if this differs from the Duration provided for the SoundRecording itself (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). This element must only be used if and when there are no royalty reporting implications on this change in duration and when the specific technical instantiation is a clip taken from a technical instantiation representing the whole SoundRecording. */
	Duration?: string;
	/** A Composite containing details of a File containing the SoundRecording that a DSP can obtain. */
	File?: File;
	/** A Composite containing details of a Fingerprint and its governing algorithm. */
	Fingerprint?: Fingerprint[];
	/** A Flag indicating whether the File containing the SoundRecording is a provided in a delivery (=true) or not (=false). */
	IsProvidedInDelivery?: boolean;
	/** A number of audio objects used to create the auditory experience. */
	NumberOfAudioObjects?: number;
	/** A number of audio channels. The value may be a string, e.g. '5.1' for surround with six channels one of which is a subwoofer. */
	NumberOfChannels?: string;
	/** A Composite containing the BitRate for the audio data recording and a UnitOfMeasure (the default is kbps). */
	OriginalBitRate?: BitRate;
	/** A Composite containing the sampling rate of the SoundRecording during the recording, and a UnitOfMeasure (the default is Hz). */
	OriginalSamplingRate?: SamplingRate;
	/** A Composite containing the sampling rate of the SoundRecording and a UnitOfMeasure (the default is Hz). */
	SamplingRate?: SamplingRate;
	/** A Type of delivery File. */
	Type: string;
}
export interface AudioDeliveryFile extends _AudioDeliveryFile { constructor: { new(): AudioDeliveryFile }; }
export var AudioDeliveryFile: { new(): AudioDeliveryFile };

type AudioDeliveryFileTypeType = string;
type _AudioDeliveryFileTypeType = Primitive._string;

/** A Composite containing details of a rating for an audio-visual Creation. */
interface _AvRating extends BaseType {
	/** A Territory to which the AvRating applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** A Composite containing details of an Organization that issues the AvRating. */
	Agency: RatingAgency;
	/** The text of the AvRating. */
	Rating: string;
	/** A Composite containing details of a Reason for a rating being applied. */
	Reason?: RatingReason;
}
export interface AvRating extends _AvRating { constructor: { new(): AvRating }; }
export var AvRating: { new(): AvRating };

/** A Composite containing a BitRate and a UnitOfMeasure. */
interface _BitRate extends Primitive._number {
	/** The UnitOfMeasure of the BitRate. This is represented in an XML schema as an XML Attribute. */
	UnitOfMeasure: avs.UnitOfBitRate;
}
export interface BitRate extends _BitRate { constructor: { new(): BitRate }; }
export var BitRate: { new(): BitRate };

/** A Composite containing details of a Brand. */
interface _Brand extends BaseType {
	/** A Composite containing details of a ProprietaryId for the Brand. */
	BrandId: ProprietaryIdentifier[];
	/** A Composite containing details of the BrandName(s). */
	BrandName: PartyNameWithTerritory[];
	/** The Identifier (specific to the Message) of the Brand. This is a LocalPartyAnchor starting with the letter P. */
	BrandReference: string;
}
export interface Brand extends _Brand { constructor: { new(): Brand }; }
export var Brand: { new(): Brand };

type BrandBrandReferenceType = string;
type _BrandBrandReferenceType = Primitive._string;

/** A Composite containing details of a CarrierType. */
interface _CarrierType extends avs._CarrierType {
	/** The Namespace of the CarrierType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the CarrierType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface CarrierType extends _CarrierType { constructor: { new(): CarrierType }; }
export var CarrierType: { new(): CarrierType };

/** A Composite containing details of a CatalogNumber. */
interface _CatalogNumber extends Primitive._string {
	/** The Namespace of the CatalogNumber. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
}
export interface CatalogNumber extends _CatalogNumber { constructor: { new(): CatalogNumber }; }
export var CatalogNumber: { new(): CatalogNumber };

/** A Composite containing details of a channel provided by a Service. */
interface _Channel extends BaseType {
	/** A Composite containing details of a ProprietaryIdentifier of the channel. */
	ProprietaryId?: ProprietaryId[];
	/** A URL for the channel. */
	URL?: string[];
}
export interface Channel extends _Channel { constructor: { new(): Channel }; }
export var Channel: { new(): Channel };

/** A Composite containing details of a Chapter. Chapters referenced from Video Resources are of ChapterType VideoChapter. Chapters referenced from a Release composite are of ChapterType Series, Season or Episode. */
interface _Chapter extends BaseType {
	/** The Language and script for the Elements of the Collection as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Composite containing details of an Identifier of the Chapter or of the content of the Chapter. */
	ChapterId?: ChapterId[];
	/** The Identifier (specific to the Message) of the Chapter within the Release which contains it. This is a LocalCollectionAnchor starting with the letter X. */
	ChapterReference: string;
	/** A Composite containing details of a Character in the Chapter. A Character may be described through Name, Identifier and Roles. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	Character?: Character[];
	/** A Composite containing details of a Contributor to the Chapter. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	Contributor?: Contributor[];
	/** A Composite containing details of a Title of the Chapter as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. */
	DisplayTitle?: DisplayTitle[];
	/** A Composite containing details of a Title of the Chapter as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. One such element is required for each DisplayTitle element and its content typically provides the same information as the concatenation of the DisplayTitle's sub-elements. */
	DisplayTitleText?: DisplayTitleText[];
	/** The Duration of the use of the Chapter (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). */
	Duration?: string;
	/** The end time of the Chapter, measured from the start of the Resource that contains it (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). */
	EndTime?: string;
	/** A Composite containing details of a FormalTitle of the Chapter. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	FormalTitle?: DisplayTitle[];
	/** A Composite containing details of a GroupingTitle of the Chapter. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	GroupingTitle?: DisplayTitle[];
	/** A Reference for an Image (specific to this Message). This is a LocalResourceAnchorReference starting with the letter A. */
	RepresentativeImageReference?: string;
	/** The number indicating the order of the Chapter within all Chapters at this level. The default value is 1, and the value must be incremented by 1 for each Chapter occurring at a particular level. */
	SequenceNumber?: number;
	/** The start time of the Chapter, measured from the start of the Resource that contains it (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). */
	StartTime?: string;
}
export interface Chapter extends _Chapter { constructor: { new(): Chapter }; }
export var Chapter: { new(): Chapter };

type ChapterChapterReferenceType = string;
type _ChapterChapterReferenceType = Primitive._string;

/** A Composite containing details of ChapterIds. */
interface _ChapterId extends BaseType {
	/** A Composite containing details of the CatalogNumber of the Chapter. */
	CatalogNumber?: CatalogNumber;
	/** An Identifier of the Chapter assigned by the Entertainment Identifier Registry Association (EIDR). */
	EIDR?: string[];
	/** The ISAN (International Standard Audiovisual Number as defined in ISO 15706) for the Chapter. An ISAN comprises four blocks of four hexadecimal charaters followed by a check character. DDEX will enforce the syntax [A-F0-9]{12} in the future. */
	ISAN?: string;
	/** The ISRC (International Standard Recording Code as defined in ISO 3901) for the Chapter. An ISRC comprises four parts: two characters, followed by three alphanumeric characters, then two digits and five digits. DDEX will enforce the syntax [a-zA-Z]{2}[a-zA-Z0-9]{3}[0-9]{7} in the future. */
	ISRC?: string;
	/** The ISWC (International Standard Musical Work Code defined in ISO 15707) identifying the Chapter. An ISWC comprises three parts: the letter 'T', followed by nine digits and then one check digit. DDEX will enforce the syntax [a-zA-Z][0-9]{10} in the future. */
	ISWC?: string;
	/** A Composite containing details of a ProprietaryIdentifier of the Chapter. */
	ProprietaryId?: ProprietaryId[];
	/** The V-ISAN (Version Identifier of an International Standard Audiovisual Number as defined in ISO 15706-2) for the Chapter. A V-ISAN comprises four blocks of four hexadecimal charaters followed by a check character, followed by two further blocks of four hexadecimal characters, followed by a further check character. DDEX will enforce the syntax [A-F0-9]{24} in the future. */
	VISAN?: string;
}
export interface ChapterId extends _ChapterId { constructor: { new(): ChapterId }; }
export var ChapterId: { new(): ChapterId };

type ChapterLanguageAndScriptCodeType = string;
type _ChapterLanguageAndScriptCodeType = Primitive._string;

/** A Composite containing details of one or more Chapters. */
interface _ChapterList extends BaseType {
	/** The Language and script for the Elements of the ChapterList as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Composite containing details of a Chapter contained in a Resource. */
	Chapter: Chapter[];
}
export interface ChapterList extends _ChapterList { constructor: { new(): ChapterList }; }
export var ChapterList: { new(): ChapterList };

type ChapterListLanguageAndScriptCodeType = string;
type _ChapterListLanguageAndScriptCodeType = Primitive._string;

type ChapterRepresentativeImageReferenceType = string;
type _ChapterRepresentativeImageReferenceType = Primitive._string;

/** A Composite containing details of a Character. A Character may be described through Name, Identifier and Roles. */
interface _Character extends BaseType {
	/** The number indicating the order of the Character in a group of Characters. This is represented in an XML schema as an XML Attribute. */
	SequenceNumber: number;
	/** A Reference for a Party (specific to this Message). This is a LocalPartyAnchorReference starting with the letter P. */
	CharacterPartyReference: string;
	/** A Composite containing details of the Name, Identifier and Role(s) of a Performer. */
	Performer?: Contributor;
}
export interface Character extends _Character { constructor: { new(): Character }; }
export var Character: { new(): Character };

type CharacterCharacterPartyReferenceType = string;
type _CharacterCharacterPartyReferenceType = Primitive._string;

/** A Composite containing details of a CLine. */
interface _CLine extends BaseType {
	/** A Territory to which the CLine applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Language and script of the CLineText as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** The Name of the company releasing the Creation. This may be an owner or a Licensee of the Creation. */
	CLineCompany?: string;
	/** The text of the CLine. */
	CLineText: string;
	/** The Year of the CLine. */
	Year?: string;
}
export interface CLine extends _CLine { constructor: { new(): CLine }; }
export var CLine: { new(): CLine };

/** A Composite containing details of a clip. */
interface _ClipDetails extends BaseType {
	/** The position of the bottom right corner of the clip measured in Pixels from the top left corner of the Resource. The position is given as two coordinate values separated by a comma, the top left pixel being 0,0. */
	BottomRightCorner?: string;
	/** A Type of clip. */
	ClipType: ClipType;
	/** A Type of expression indicating how this should be perceived, e.g. as instruction (meaning that this has to be done to create the clip) or as information (meaning that this has been done to craete the clip). */
	ExpressionType: avs.ExpressionType;
	/** The position of the top left corner of the clip measured in Pixels from the top left corner of the Resource. The position is given as two coordinate values separated by a comma, the top left pixel being 0,0. */
	TopLeftCorner?: string;
}
export interface ClipDetails extends _ClipDetails { constructor: { new(): ClipDetails }; }
export var ClipDetails: { new(): ClipDetails };

type ClipDetailsBottomRightCornerType = string;
type _ClipDetailsBottomRightCornerType = Primitive._string;

type ClipDetailsTopLeftCornerType = string;
type _ClipDetailsTopLeftCornerType = Primitive._string;

/** A Composite containing details of a DDEX clip Release. */
interface _ClipRelease extends BaseType {
	/** A Composite containing details of a Genre considered appropriate for marketing the Release by the publishing record company often in conjunction with the display artist(s). */
	DisplayGenre: GenreWithTerritory[];
	/** A Composite containing details of a Title of the Release as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. */
	DisplayTitle?: DisplayTitle[];
	/** A Composite containing details of a Title of the Release as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. One such element is required for each DisplayTitle element and its content typically provides the same information as the concatenation of the DisplayTitle's sub-elements. */
	DisplayTitleText?: DisplayTitleText[];
	/** A Composite containing details of a FormalTitle of the Release. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	FormalTitle?: DisplayTitle[];
	/** A Composite containing details of a GroupingTitle of the Release. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	GroupingTitle?: DisplayTitle[];
	/** A Composite containing details of a Release (or a PhysicalProduct or a DigitalProduct derived from such a Release) which is related to this Release. */
	RelatedRelease?: RelatedRelease[];
	/** A Composite containing details of ReleaseIds. If available, a GRid has to be used. If the Release is an abstraction of a complete PhysicalProduct (such as a CD Album), the ICPN of the PhysicalProduct may be used instead. */
	ReleaseId: ReleaseId;
	/** A Reference for a label of the Release (specific to this Message). This is a LocalPartyAnchorReference starting with the letter P. */
	ReleaseLabelReference: ReleaseLabelReferenceWithParty[];
	/** The Identifier (specific to the Message) of the Release. Used to link the Release to one or more Deal(s). This is a LocalReleaseAnchor starting with the letter R. */
	ReleaseReference: string;
	/** A ReleaseResourceReference for the Release (specific to this Message). The LocalAnchorReference in this Composite is a xs:string starting with the letter A. */
	ReleaseResourceReference: string;
}
export interface ClipRelease extends _ClipRelease { constructor: { new(): ClipRelease }; }
export var ClipRelease: { new(): ClipRelease };

type ClipReleaseReleaseReferenceType = string;
type _ClipReleaseReleaseReferenceType = Primitive._string;

type ClipReleaseReleaseResourceReferenceType = string;
type _ClipReleaseReleaseResourceReferenceType = Primitive._string;

/** A Composite containing details of a ClipType. */
interface _ClipType extends avs._ClipType {
	/** The Namespace of the ClipType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the ClipType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface ClipType extends _ClipType { constructor: { new(): ClipType }; }
export var ClipType: { new(): ClipType };

/** A Composite containing details of a CommercialModelType. */
interface _CommercialModelType extends avs._CommercialModelType_ERN {
	/** The Namespace of the CommercialModelType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the CommercialModelType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface CommercialModelType extends _CommercialModelType { constructor: { new(): CommercialModelType }; }
export var CommercialModelType: { new(): CommercialModelType };

/** A Composite containing details of a Condition.Explanatory Note: This Composite is named ConditionForRightsClaimPolicy to disambiguate it from the basic mwnl:Condition Composite. */
interface _ConditionForRightsClaimPolicy extends BaseType {
	/** A Type to signal whether the Measurement should be made on the audio, the video, either or both. The absence of this element means that the terms of the contract between MessageSender and MessageRecipient rule. */
	MeasurementType?: avs.MeasurementType;
	/** A Creation that is used as a reference when the unit is Percent, so it can be expressed whether the value is a percentage of the reference Resource for which rights are claimed or of a consumer's UserGeneratedContent. */
	ReferenceCreation?: avs.ReferenceCreation;
	/** A Relator expressing the accuracy of the condition value. */
	RelationalRelator: avs.RelationalRelator;
	/** A Composite containing details of a segment of the Resource to which the Condition is applicable. If no segment is specified, the whole Resource is subject the RightsClaim Policy. */
	Segment?: Segment[];
	/** A Composite containing details of a Service that is an exception to the Condition. For these exceptions, usage does not need to be reported for fingerprinting and web monitoring services. */
	ServiceException?: ServiceException[];
	/** A UnitOfMeasure for the condition value. */
	Unit: avs.UnitOfConditionValue;
	/** The numeric value of the Condition. */
	Value: number;
}
export interface ConditionForRightsClaimPolicy extends _ConditionForRightsClaimPolicy { constructor: { new(): ConditionForRightsClaimPolicy }; }
export var ConditionForRightsClaimPolicy: { new(): ConditionForRightsClaimPolicy };

/** A Composite containing details of a ContainerFormat. */
interface _ContainerFormat extends avs._ContainerFormat {
	/** The Namespace of the ContainerFormat. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the ContainerFormat. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface ContainerFormat extends _ContainerFormat { constructor: { new(): ContainerFormat }; }
export var ContainerFormat: { new(): ContainerFormat };

/** A Composite containing details of the Name, Identifier and Role(s) of a Contributor to a Resource. */
interface _Contributor extends BaseType {
	/** The number indicating the order of the ResourceContributor in a group of ResourceContributors that have contributed to a Resource. This is represented in an XML schema as an XML Attribute. */
	SequenceNumber: number;
	/** A Type indicating the contribution of GenerativeAI. This element defaults to All if SpecialContributor is GenerativeAI. In all other cases, the contribution of GenerativeAI can be None or Partly. */
	AiContribution?: avs.ContainsAI;
	/** A Reference for a Party (specific to this Message). This is a LocalPartyAnchorReference starting with the letter P. */
	ContributorPartyReference: string;
	/** A Role for which the Party is credited. */
	DisplayCredits?: DisplayCredits[];
	/** A Flag indicating whether the Party is an Artist that has a contract for its part in creating the Resource (=true) or not (=false). */
	HasMadeContractedContribution?: boolean;
	/** A Flag indicating whether the Party is a featured Artist (=true) or not (=false). */
	HasMadeFeaturedContribution?: boolean;
	/** A Type of musical Instrument played by the Contributor whose Role is a Performer role such as Musician or Soloist. This element is deprecated and the Role element should be used instead to specify an Instrument. DDEX advises that this element may be removed at a future date and therefore recommends against using it. */
	InstrumentType?: InstrumentType[];
	/** A Flag indicating whether the Contributor is credited as having played a role in creating the Recording (=true) or not (=false). */
	IsCredited?: IsCredited;
	/** A Composite containing details of a Role played by the Contributor. */
	Role?: ContributorRole[];
	/** A special Type of Contributor. */
	SpecialContributor: SpecialContributorType;
}
export interface Contributor extends _Contributor { constructor: { new(): Contributor }; }
export var Contributor: { new(): Contributor };

type ContributorContributorPartyReferenceType = string;
type _ContributorContributorPartyReferenceType = Primitive._string;

/** A Composite containing details of a ContributorRole. Note: this can be used in a DdexMessage in relation to any Work, Performance or Fixation any of which may form the whole or part of the Resource itself. */
interface _ContributorRole extends BaseType {
	/** A Type of musical Instrument played by the Contributor. */
	InstrumentType?: InstrumentType[];
	/** The value of the ContributorRole. */
	Value: ContributorRoleValue;
}
export interface ContributorRole extends _ContributorRole { constructor: { new(): ContributorRole }; }
export var ContributorRole: { new(): ContributorRole };

/** A Composite containing details of a ContributorRole value. */
interface _ContributorRoleValue extends avs._ContributorRole {
	/** The Namespace of the ContributorRole. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the ContributorRole. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface ContributorRoleValue extends _ContributorRoleValue { constructor: { new(): ContributorRoleValue }; }
export var ContributorRoleValue: { new(): ContributorRoleValue };

/** A Composite containing details of the core part of a Video. */
interface _CoreArea extends BaseType {
	/** The position of the bottom right corner of the core area measured in Pixels. The position is given as two coordinate values separated by a comma, the top left pixel being 0,0. */
	BottomRightCorner: string;
	/** The position of the top left corner of the core area measured in Pixels. The position is given as two coordinate values separated by a comma, the top left pixel being 0,0. */
	TopLeftCorner: string;
}
export interface CoreArea extends _CoreArea { constructor: { new(): CoreArea }; }
export var CoreArea: { new(): CoreArea };

type CoreAreaBottomRightCornerType = string;
type _CoreAreaBottomRightCornerType = Primitive._string;

type CoreAreaTopLeftCornerType = string;
type _CoreAreaTopLeftCornerType = Primitive._string;

/** A Composite containing details of a CourtesyLine. */
interface _CourtesyLine extends Primitive._string {
	/** A Territory to which the CourtesyLine applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Language and script of the CourtesyLine as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
}
export interface CourtesyLine extends _CourtesyLine { constructor: { new(): CourtesyLine }; }
export var CourtesyLine: { new(): CourtesyLine };

/** A Composite containing details of a Cue. */
interface _Cue extends BaseType {
	/** A Composite containing details of the CLine for the Cue. */
	CLine?: CLine[];
	/** A Composite containing details of a Contributor of the Work referenced in the Cue. */
	Contributor?: Contributor[];
	/** A Composite containing details of a CueOrigin for the Cue. It can be expected that this element will be contractually mandatory in many communications of cue sheets to music rights societies. */
	CueOrigin?: CueOrigin;
	/** A Composite containing details of a ThemeType for the Creation referenced in the Cue. */
	CueThemeType?: CueThemeType;
	/** A Composite containing details of a UseType of the Cue. It can be expected that this element will be contractually mandatory in many communications of cue sheets to music rights societies. */
	CueUseType?: CueUseType;
	/** A Composite containing details of a VisualPerceptionType for the Creation referenced in the Cue. */
	CueVisualPerceptionType?: CueVisualPerceptionType;
	/** A Composite containing details of a VocalType for the Creation referenced in the Cue. */
	CueVocalType?: CueVocalType;
	/** A Composite containing details of a Title of the Work referenced in the Cue, as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. */
	DisplayTitle?: DisplayTitle[];
	/** A Composite containing details of a Title of the Work referenced in the Cue, as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. One such element is required for each DisplayTitle element and its content typically provides the same information as the concatenation of the DisplayTitle's sub-elements. */
	DisplayTitleText?: DisplayTitleText[];
	/** The Duration of the use of the Creation that is referenced in the CueCreationReference (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). */
	Duration?: string;
	/** The end time of the Creation, measured from the start of the Resource from which the CueSheet is referenced (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). */
	EndTime?: string;
	/** A Composite containing details of a FormalTitle of the Cue. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	FormalTitle?: DisplayTitle[];
	/** A Composite containing details of a GroupingTitle of the Cue. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	GroupingTitle?: DisplayTitle[];
	/** A Flag indicating whether whether the Creation referenced in the Cue contains musical content such as a SoundRecording or a MusicalWork (=true) or not (=false). */
	HasMusicalContent?: boolean;
	/** A Flag indicating whether a Creation contains dancing (=true) or not (=false). */
	IsDance?: boolean;
	/** A Composite containing details of the PLine for the Cue. */
	PLine?: PLine[];
	/** A Composite containing details of a ResourceId. */
	ResourceId?: ResourceId;
	/** The start time of the Creation, measured from the start of the Resource from which the CueSheet is referenced (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). */
	StartTime?: string;
	/** A Composite containing details of a WorkId. */
	WorkId?: MusicalWorkId;
}
export interface Cue extends _Cue { constructor: { new(): Cue }; }
export var Cue: { new(): Cue };

/** A Composite containing details of a CueOrigin. */
interface _CueOrigin extends avs._CueOrigin {
	/** The Namespace of the CueOrigin. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the CueOrigin. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface CueOrigin extends _CueOrigin { constructor: { new(): CueOrigin }; }
export var CueOrigin: { new(): CueOrigin };

/** A Composite containing details of a CueSheet. */
interface _CueSheet extends BaseType {
	/** A Composite containing details of a Cue. */
	Cue: Cue[];
	/** A Composite containing details of a CueSheetId of the CueSheet. */
	CueSheetId?: ProprietaryId[];
	/** The Identifier (specific to the Message) of the CueSheet within the Release which contains it. This is a LocalCueSheetAnchor starting with the letter Q. */
	CueSheetReference: string;
	/** A Composite containing details of a Type of the CueSheet. */
	CueSheetType: CueSheetType;
}
export interface CueSheet extends _CueSheet { constructor: { new(): CueSheet }; }
export var CueSheet: { new(): CueSheet };

type CueSheetCueSheetReferenceType = string;
type _CueSheetCueSheetReferenceType = Primitive._string;

/** A Composite containing details of one or more CueSheets. */
interface _CueSheetList extends BaseType {
	/** A Composite containing details of a CueSheet contained in a Resource. */
	CueSheet: CueSheet[];
}
export interface CueSheetList extends _CueSheetList { constructor: { new(): CueSheetList }; }
export var CueSheetList: { new(): CueSheetList };

/** A Composite containing details of a CueSheetType. */
interface _CueSheetType extends avs._CueSheetType {
	/** The Namespace of the CueSheetType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the CueSheetType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface CueSheetType extends _CueSheetType { constructor: { new(): CueSheetType }; }
export var CueSheetType: { new(): CueSheetType };

/** A Composite containing details of a ThemeType for a Creation referenced in a Cue. */
interface _CueThemeType extends avs._ThemeType {
	/** The Namespace of the ThemeType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the ThemeType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface CueThemeType extends _CueThemeType { constructor: { new(): CueThemeType }; }
export var CueThemeType: { new(): CueThemeType };

/** A Composite containing details of a CueUseType. */
interface _CueUseType extends avs._CueUseType {
	/** The Namespace of the CueUseType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the CueUseType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface CueUseType extends _CueUseType { constructor: { new(): CueUseType }; }
export var CueUseType: { new(): CueUseType };

/** A Composite containing details of a VisualPerceptionType for a Creation referenced in a Cue. */
interface _CueVisualPerceptionType extends avs._VisualPerceptionType {
	/** The Namespace of the VisualPerceptionType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the VisualPerceptionType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface CueVisualPerceptionType extends _CueVisualPerceptionType { constructor: { new(): CueVisualPerceptionType }; }
export var CueVisualPerceptionType: { new(): CueVisualPerceptionType };

/** A Composite containing details of a VocalType for a Creation referenced in a Cue. */
interface _CueVocalType extends avs._VocalType {
	/** The Namespace of the VocalType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the VocalType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface CueVocalType extends _CueVocalType { constructor: { new(): CueVocalType }; }
export var CueVocalType: { new(): CueVocalType };

/** A Composite containing details of a TerritoryCode. */
interface _CurrentTerritoryCode extends avs._CurrentTerritoryCode {
	/** A standard used for the TerritoryCode. This is represented in an XML schema as an XML Attribute. If this Attribute is not provided, it is assumed that the code is a TerritoryCode in accordance with ISO 3166-1 or 3166-2 standard (or Worldwide). */
	IdentifierType: avs.TerritoryCodeType;
}
export interface CurrentTerritoryCode extends _CurrentTerritoryCode { constructor: { new(): CurrentTerritoryCode }; }
export var CurrentTerritoryCode: { new(): CurrentTerritoryCode };

/** A Date represented in ISO 8601 format: YYYY[-MM[-DD]].Format: A Date represented as a calendar Year, Month or Day (in ISO 8601 format: YYYY, YYYY-MM or YYYY-MM-DD). */
export type ddex_IsoDate = string;
type _ddex_IsoDate = Primitive._string;

/** An Identifier identifying a Language and a Script, enforced by a restriction. */
export type ddex_LanguageAndScriptCodeWithRestriction = string;
type _ddex_LanguageAndScriptCodeWithRestriction = Primitive._string;

/** A LocalAnchorReference which acts as a reference to a local Identifier of a Party. This LocalAnchorReference is a xs:string starting with the letter P. */
export type ddex_LocalPartyAnchorReference = string;
type _ddex_LocalPartyAnchorReference = Primitive._string;

/** A LocalAnchorReference which acts as a reference to a local Identifier of a Resource. This LocalAnchorReference is a xs:string starting with the letter A. */
export type ddex_LocalResourceAnchorReference = string;
type _ddex_LocalResourceAnchorReference = Primitive._string;

/** A Composite containing details (in full or in summary) of a Deal made between a DSP (as Licensee) and a Licensor of Works or Releases. When any new DealTerms are added or removed from an existing Deal (different UseTypes, Prices, Territories, DistributionChannels) then a new Deal is created, and (if appropriate) the ValidityPeriod of the existing Deal should be terminated. The only changes which should be made to the DealTerms of an existing Deal are corrections required because of an earlier error or omission, or the addition of an EndDate to the Deal's ValidityPeriod. */
interface _Deal extends BaseType {
	/** A Reference to a TextDocument containing details of the Deal (in the form of an Identifier, Name or Description). */
	DealReference?: string[];
	/** A Composite containing a list of DealTechnicalResourceDetailsReferences for the Deal. */
	DealTechnicalResourceDetailsReferenceList?: DealTechnicalResourceDetailsReferenceList;
	/** A Composite containing details of the terms of the Deal.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/deals-and-commercial-aspects/cancelling-a-deal-before-street-date */
	DealTerms?: DealTerms;
	/** A Composite containing details of a WebPage for the DistributionChannel. */
	DistributionChannelPage?: DistributionChannelPage[];
	/** A Flag indicating whether the Deal is communicated outside the usual ERN delivery and identified by an Identifier in the DealReference element (=true) or not (=false). It would be up to the MessageSender and MessageRecipient to ensure that this Deal Identifier is unique. */
	IsCommunicatedOutOfBand?: boolean;
}
export interface Deal extends _Deal { constructor: { new(): Deal }; }
export var Deal: { new(): Deal };

/** A Composite containing details of one or more Deals. */
interface _DealList extends BaseType {
	/** A Composite containing details of one or more Deals pertaining to one or more Releases.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/deals-and-commercial-aspects/multiple-deals-for-one-releaseFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/deals-and-commercial-aspects/newreleasemessage-with-no-dealFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/deals-and-commercial-aspects/complex-deals-can-be-dangerous */
	ReleaseDeal: ReleaseDeal[];
	/** A Composite containing details of a set of Dates specifying when a Release can be shown to Consumers. */
	ReleaseVisibility?: ReleaseVisibility[];
	/** A Composite containing details of a set of Dates specifying when a TrackRelease can be shown to Consumers. */
	TrackReleaseVisibility?: TrackReleaseVisibility[];
}
export interface DealList extends _DealList { constructor: { new(): DealList }; }
export var DealList: { new(): DealList };

/** A Composite containing details of one or more Resources relating to a Deal. */
interface _DealResourceReferenceList extends BaseType {
	/** A Reference for a Resource (specific to this Message). This is a LocalResourceAnchorReference starting with the letter A. */
	DealResourceReference: string[];
}
export interface DealResourceReferenceList extends _DealResourceReferenceList { constructor: { new(): DealResourceReferenceList }; }
export var DealResourceReferenceList: { new(): DealResourceReferenceList };

type DealResourceReferenceListDealResourceReferenceType = string;
type _DealResourceReferenceListDealResourceReferenceType = Primitive._string;

/** A Composite containing a list of DealTechnicalResourceDetailsReferences. */
interface _DealTechnicalResourceDetailsReferenceList extends BaseType {
	/** A Reference for a Composite specifying technical details of a Resource (specific to this Message). This is a LocalTechnicalResourceDetailsAnchorReference starting with the letter T. */
	DealTechnicalResourceDetailsReference: string[];
}
export interface DealTechnicalResourceDetailsReferenceList extends _DealTechnicalResourceDetailsReferenceList { constructor: { new(): DealTechnicalResourceDetailsReferenceList }; }
export var DealTechnicalResourceDetailsReferenceList: { new(): DealTechnicalResourceDetailsReferenceList };

type DealTechnicalResourceDetailsReferenceListDealTechnicalResourceDetailsReferenceType = string;
type _DealTechnicalResourceDetailsReferenceListDealTechnicalResourceDetailsReferenceType = Primitive._string;

/** A Composite containing details of the terms of a Deal. */
interface _DealTerms extends BaseType {
	/** A Composite containing details of a Carrier. */
	CarrierType?: CarrierType[];
	/** A Composite containing details of the fundamental business model which applies to the Deal (e.g. SubscriptionModel and PayAsYouGoModel). The CommercialModelType indicates how the Consumer pays for the Service or Release. */
	CommercialModelType?: CommercialModelType[];
	/** A Composite containing details of the DSP through whose DistributionChannel the sales are permitted. If none are provided no limitations on the DistributionChannels are given. */
	DistributionChannel?: DSP[];
	/** A Composite containing details of excluded DSP. This is used in an aggregator model where all agreed partners of the aggregators may use a ReleaseDeal, except those that are listed herein. */
	ExcludedDistributionChannel?: DSP[];
	/** A Territory in which the Deal does not apply. Either this Element or Territory must be present, but not both. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. */
	ExcludedTerritoryCode?: CurrentTerritoryCode[];
	/** A Composite containing details of one or more Resources that are only available for download as soon as the Release is purchased (i.e. before the ReleaseDate). */
	InstantGratificationResourceList?: DealResourceReferenceList;
	/** A Flag indicating whether the Deal is covering only the period where the Release can be purchased by a Consumer but not yet fulfilled (=true) or not (=false). */
	IsPreOrderDeal?: boolean;
	/** The Flag indicating whether a special Deal is made between the Licensor and the Licensee (=true) or not (=false) regarding the royalties or payments due to be paid for Releases distributed under this Deal. */
	IsPromotional?: boolean;
	/** A number of Products per carton. This is the smallest number of Products that can be ordered. */
	NumberOfProductsPerCarton?: number;
	/** The number of times a Release can be used under the terms of the Deal. */
	NumberOfUsages?: number;
	/** A Composite containing details of physical returns. */
	PhysicalReturns?: PhysicalReturns;
	/** A Composite containing details of a Price. Note that this Price applies to all UseTypes referenced in this Composite.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/deals-and-commercial-aspects/price-information */
	PriceInformation?: PriceInformation[];
	/** A Composite containing details of a PromotionalCode. */
	PromotionalCode?: PromotionalCode;
	/** A Composite containing details of a rights claim policy. */
	RightsClaimPolicy?: RightsClaimPolicy[];
	/** A Composite containing technical details of the Release. */
	TechnicalInstantiation?: DealTermsTechnicalInstantiation;
	/** A Territory in which the Deal applies. Either this Element or ExcludedTerritory must be present, but not both. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. */
	TerritoryCode?: CurrentTerritoryCode[];
	/** A Composite containing details of a physical interface by which a Consumer uses a Service or Release. */
	UserInterfaceType?: UserInterfaceType[];
	/** A Composite containing details of a nature of a Service, or a Release, as used by a Consumer. The UseType is mandatory unless the terms of the Deal were communicated beforehand (possibly out of band) and then referenced using a DealReference. */
	UseType?: DiscoverableUseType[];
	/** A Composite containing details about a Period of Time during which the Deal is valid. To indicate a Deal that is valid at the time of sending of a NewReleaseMessage, the MessageSender should use a StartDate or StartDateTime set in the past. No EndDate in this Composite means that the Deal is valid until further notice. StartDate and EndDate are deprecated and StartDateTime/EndDateTime should be used instead. DDEX advises that StartDate and EndDate may be removed at a future date and therefore recommends against using them.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/deals-and-commercial-aspects/start-dates%2C-end-dates%2C-start-datetimes-and-end-datetimes */
	ValidityPeriod: PeriodWithStartDate[];
}
export interface DealTerms extends _DealTerms { constructor: { new(): DealTerms }; }
export var DealTerms: { new(): DealTerms };

/** A Composite containing technical details of a Release. */
interface _DealTermsTechnicalInstantiation extends BaseType {
	/** A Composite containing the BitRate for the audio data and a UnitOfMeasure (the default is kbps). */
	BitRate?: BitRate;
	/** A Type of coding used to encode a Resource. */
	CodingType?: avs.CodingType;
	/** A Type of resolution (or definition) in which a Video is provided. */
	VideoDefinitionType?: VideoDefinitionType;
}
export interface DealTermsTechnicalInstantiation extends _DealTermsTechnicalInstantiation { constructor: { new(): DealTermsTechnicalInstantiation }; }
export var DealTermsTechnicalInstantiation: { new(): DealTermsTechnicalInstantiation };

/** A Composite containing details of a Deity. */
interface _Deity extends Primitive._string {
	/** A Territory to which the Deity applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
}
export interface Deity extends _Deity { constructor: { new(): Deity }; }
export var Deity: { new(): Deity };

/** A Composite containing details of the kinds of usage for which Rights have been delegated. */
interface _DelegatedUsageRights extends BaseType {
	/** A Composite containing details about a Period of Time for which the delegation of usage Rights applies. Periods are typically described by at least a StartDate or EndDate. */
	PeriodOfRightsDelegation?: Period;
	/** A Territory for which the delegation of usage rights applies. */
	TerritoryOfRightsDelegation?: AllTerritoryCode[];
	/** A Composite containing details of the use for which Rights are delegated. */
	UseType: UseType[];
}
export interface DelegatedUsageRights extends _DelegatedUsageRights { constructor: { new(): DelegatedUsageRights }; }
export var DelegatedUsageRights: { new(): DelegatedUsageRights };

/** A Composite containing details of a Description.Explanatory Note: This Composite is named DescriptionWithTerritory to disambiguate it from the basic Description Composite. */
interface _DescriptionWithTerritory extends Primitive._string {
	/** A Territory to which the Description applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Language and script of the Description as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
}
export interface DescriptionWithTerritory extends _DescriptionWithTerritory { constructor: { new(): DescriptionWithTerritory }; }
export var DescriptionWithTerritory: { new(): DescriptionWithTerritory };

/** A Composite containing details of a hash sum and its governing Algorithm.Explanatory Note: This Composite is named DetailedHashSum to disambiguate it from the basic HashSum Composite. */
interface _DetailedHashSum extends BaseType {
	/** A Composite containing details of the Type of HashSumAlgorithm governing the hash sum. */
	Algorithm: HashSumAlgorithmType;
	/** The datatype of the hash sum. */
	DataType?: avs.BinaryDataType;
	/** The value of the hash sum. */
	HashSumValue: string;
	/** A Parameter of the HashSumAlgorithm. */
	Parameter?: string;
	/** The Identifier of the Version of the HashSumAlgorithm. */
	Version?: string;
}
export interface DetailedHashSum extends _DetailedHashSum { constructor: { new(): DetailedHashSum }; }
export var DetailedHashSum: { new(): DetailedHashSum };

/** A Composite containing details of a PartyId.Explanatory Note: This Composite is named DetailedPartyId to disambiguate it from the basic PartyId Composite. */
interface _DetailedPartyId extends BaseType {
	/** A CISAC Society Identifier, a CISAC standard Identifier for music rights societies. */
	CisacSocietyId?: string;
	/** An Identifier of a Party according to the DdexPartyId standard DDEX-DPID. */
	DPID?: string;
	/** An Interested Party Identifier, a CISAC standard Identifier. An IpiNameNumber comprises 11 digits. */
	IpiNameNumber?: string;
	/** An International Performer Number, an IPDA Identifier. */
	IPN?: string;
	/** An International Standard Name Identifier, the ISO 27729 Standard Identifier for names. DDEX will enforce the syntax [0-9]{15}[X0-9] in the future. */
	ISNI?: string;
	/** A Composite containing details of a ProprietaryIdentifier of the Party. */
	ProprietaryId?: ProprietaryId[];
}
export interface DetailedPartyId extends _DetailedPartyId { constructor: { new(): DetailedPartyId }; }
export var DetailedPartyId: { new(): DetailedPartyId };

type DetailedPartyIdDPIDType = string;
type _DetailedPartyIdDPIDType = Primitive._string;

type DetailedPartyIdIpiNameNumberType = string;
type _DetailedPartyIdIpiNameNumberType = Primitive._string;

/** A Composite containing details of the Name, Identifier and Role(s) of a Contributor to a Resource. */
interface _DetailedResourceContributor extends BaseType {
	/** The number indicating the order of the ResourceContributor in a group of ResourceContributors that have contributed to a Resource. This is represented in an XML schema as an XML Attribute. Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/sequencing-recording-artists-and-writers */
	SequenceNumber: number;
	/** A Role for which the Party is credited. */
	DisplayCredits?: DisplayCredits[];
	/** A Flag indicating whether the Contributor is an Artist that has a contract for its part in creating the Resource (=true) or not (=false). */
	HasMadeContractedContribution?: boolean;
	/** A Flag indicating whether the Contributor is a featured Artist (=true) or not (=false). */
	HasMadeFeaturedContribution?: boolean;
	/** A Type of musical Instrument played by the Artist. */
	InstrumentType?: InstrumentType[];
	/** A Composite containing details of the PartyId for the Party. If no Namespace is given, the Identifier is a DdexPartyId (DPID). Note that DPIDs are not normally used to identify Artists, producers or other Creators. */
	PartyId: DetailedPartyId[];
	/** A Composite containing details of the PartyName(s).Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/lengths-of-artist-namesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/general-guidance-on-messages/field-length-and-precision */
	PartyName: PartyName[];
	/** A Composite containing details of a Role played by the Contributor. */
	Role?: ContributorRole[];
}
export interface DetailedResourceContributor extends _DetailedResourceContributor { constructor: { new(): DetailedResourceContributor }; }
export var DetailedResourceContributor: { new(): DetailedResourceContributor };

/** A Composite containing details of a UseType. */
interface _DiscoverableUseType extends avs._UseType_ERN {
	/** A Flag indicating whether the Deal allows the ReleaseDistributor to include the release(s) referenced in the Deal to be indexed and searchable by Consumers on the ReleaseDistributor’s platform (=true) or not (=false). If this Attribute is not provided, it is assumed that this is True. This is represented in an XML schema as an XML Attribute. */
	IsDiscoverable: boolean;
	/** The Namespace of the UseType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the UseType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface DiscoverableUseType extends _DiscoverableUseType { constructor: { new(): DiscoverableUseType }; }
export var DiscoverableUseType: { new(): DiscoverableUseType };

/** A Composite containing details of the Name, Identifier and Role(s) of a DisplayArtist of a Resource. */
interface _DisplayArtist extends BaseType {
	/** The number indicating the order of the Resource DisplayArtist in a group of Artists that have contributed to a Resource. This is represented in an XML schema as an XML Attribute. Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/sequencing-recording-artists-and-writers */
	SequenceNumber: number;
	/** A Composite containing details of a ContributorRole played by the DisplayArtist. */
	ArtisticRole?: ContributorRole[];
	/** A Reference for a Party (specific to this Message). This is a LocalPartyAnchorReference starting with the letter P. */
	ArtistPartyReference: string;
	/** A Composite containing details of a Role played by the DisplayArtist. */
	DisplayArtistRole: DisplayArtistRole;
	/** A Role for which the Party is credited. */
	DisplayCredits?: DisplayCredits[];
	/** A special Type of DisplayArtist. */
	SpecialDisplayArtist: SpecialContributorType;
	/** A Composite containing information on how a RecordCompany wishes Artist information to be presented to Consumers as part of the Title (and in addition to displaying the DisplayArtist information). */
	TitleDisplayInformation?: TitleDisplayInformation[];
}
export interface DisplayArtist extends _DisplayArtist { constructor: { new(): DisplayArtist }; }
export var DisplayArtist: { new(): DisplayArtist };

type DisplayArtistArtistPartyReferenceType = string;
type _DisplayArtistArtistPartyReferenceType = Primitive._string;

/** A Composite containing details of a DisplayArtistName.Explanatory Note: This Composite is named DisplayArtistNameWithOriginalLanguage to disambiguate it from the basic DisplayArtistName Composite. */
interface _DisplayArtistNameWithOriginalLanguage extends Primitive._string {
	/** A Territory to which the Name applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Flag indicating whether the Name is in its original Language (=true) or not (=false). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsInOriginalLanguage: boolean;
	/** The Language and script of the Name as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
}
export interface DisplayArtistNameWithOriginalLanguage extends _DisplayArtistNameWithOriginalLanguage { constructor: { new(): DisplayArtistNameWithOriginalLanguage }; }
export var DisplayArtistNameWithOriginalLanguage: { new(): DisplayArtistNameWithOriginalLanguage };

/** A Composite containing details of a DisplayArtistRole. */
interface _DisplayArtistRole extends avs._DisplayArtistRole {
	/** The Namespace of the DisplayArtistRole. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the DisplayArtistRole. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface DisplayArtistRole extends _DisplayArtistRole { constructor: { new(): DisplayArtistRole }; }
export var DisplayArtistRole: { new(): DisplayArtistRole };

/** A Composite containing details of a Role and instrumentation for which a Party is credited. */
interface _DisplayCredits extends BaseType {
	/** A Territory to which this Element applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Element provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Language and script of this Element as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Reference for a Party credited with the display credit. */
	DisplayCreditParty?: string[];
	/** The textual portion of the display credit. */
	DisplayCreditText: string;
	/** The Name for the Party as used in the DisplayCreditText. If no such element is present, the DisplayCreditText contains the Name of the credited Party as specified in the PartyName of the Party composite. */
	NameUsedInDisplayCredit?: string[];
}
export interface DisplayCredits extends _DisplayCredits { constructor: { new(): DisplayCredits }; }
export var DisplayCredits: { new(): DisplayCredits };

type DisplayCreditsDisplayCreditPartyType = string;
type _DisplayCreditsDisplayCreditPartyType = Primitive._string;

/** A Composite containing details of a SubTitle.Explanatory Note: This Composite is named DisplaySubTitle to disambiguate it from the basic SubTitle Composite. */
interface _DisplaySubTitle extends Primitive._string {
	/** A Flag indicating whether the SubTitle is displayed in the Title (=true) or not (=false). This is represented in an XML schema as an XML Attribute. */
	IsDisplayedInTitle: boolean;
	/** The number indicating the order of the SubTitle in a group of SubTitles. This is represented in an XML schema as an XML Attribute. */
	SequenceNumber: number;
	/** A Type of the SubTitle which defines its origin or the function it fulfils. This is represented in an XML schema as an XML Attribute. */
	SubTitleType: avs.SubTitleType;
}
export interface DisplaySubTitle extends _DisplaySubTitle { constructor: { new(): DisplaySubTitle }; }
export var DisplaySubTitle: { new(): DisplaySubTitle };

/** A Composite containing details of a Title as the MessageSender suggests it should be shown to the Consumer. */
interface _DisplayTitle extends BaseType {
	/** A Territory to which the Title applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Flag indicating whether the Title is in its original Language (=true) or not (=false). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsInOriginalLanguage: boolean;
	/** The Language and script for the Elements of the Title as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Composite containing details of a SubTitle of the Title, including Titles of Versions used to differentiate different versions of the same Title, as required by the GRid and ISRC ReferenceDescriptiveMetadataSets. */
	SubTitle?: DisplaySubTitle[];
	/** The text of the Title. */
	TitleText: string;
}
export interface DisplayTitle extends _DisplayTitle { constructor: { new(): DisplayTitle }; }
export var DisplayTitle: { new(): DisplayTitle };

type DisplayTitleLanguageAndScriptCodeType = string;
type _DisplayTitleLanguageAndScriptCodeType = Primitive._string;

/** A Composite containing details of a Title as the MessageSender suggests it should be shown to the Consumer. */
interface _DisplayTitleText extends Primitive._string {
	/** A Territory to which the Title applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Flag indicating whether the Title is in its original Language (=true) or not (=false). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsInOriginalLanguage: boolean;
	/** The Language and script for the Elements of the Title as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
}
export interface DisplayTitleText extends _DisplayTitleText { constructor: { new(): DisplayTitleText }; }
export var DisplayTitleText: { new(): DisplayTitleText };

type DisplayTitleTextLanguageAndScriptCodeType = string;
type _DisplayTitleTextLanguageAndScriptCodeType = Primitive._string;

/** A Composite containing details of a WebPage for a DistributionChannel. */
interface _DistributionChannelPage extends BaseType {
	/** A Composite containing the Name of the WebPage. */
	PageName?: Name;
	/** A Composite containing details of the PartyId for a Party owning the WebPage. If no Namespace is given, the Identifier is a DdexPartyId (DPID). Note that DPIDs are not normally used to identify Artists, producers or other Creators. */
	PartyId?: DetailedPartyId[];
	/** A URL of the WebPage. */
	URL?: string;
	/** An Identifier of a computer user who is granted maintenance access to the WebPage. */
	UserName?: string;
}
export interface DistributionChannelPage extends _DistributionChannelPage { constructor: { new(): DistributionChannelPage }; }
export var DistributionChannelPage: { new(): DistributionChannelPage };

/** A Composite containing details of a DSP acting as a Licensee in a commercial relationship. */
interface _DSP extends BaseType {
	/** A Composite containing details of the PartyId for the Party. If no Namespace is given, the Identifier is a DdexPartyId (DPID). Note that DPIDs are not normally used to identify Artists, producers or other Creators. */
	PartyId: DetailedPartyId[];
	/** A Composite containing details of the PartyName(s).Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/lengths-of-artist-namesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/general-guidance-on-messages/field-length-and-precision */
	PartyName: PartyName[];
	/** A Composite containing a TradingName of the DSP.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/lengths-of-artist-namesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/general-guidance-on-messages/field-length-and-precision */
	TradingName?: Name;
	/** A URL for the DSP's web site. */
	URL?: string[];
}
export interface DSP extends _DSP { constructor: { new(): DSP }; }
export var DSP: { new(): DSP };

/** A Composite containing details of the Name, Identifier and Role(s) of a Contributor to a SoundRecordingEdition. */
interface _EditionContributor extends BaseType {
	/** The number indicating the order of the ResourceContributor in a group of ResourceContributors that have contributed to a Resource. This is represented in an XML schema as an XML Attribute. */
	SequenceNumber: number;
	/** A Type indicating the contribution of GenerativeAI. This element defaults to All if SpecialContributor is GenerativeAI. In all other cases, the contribution of GenerativeAI can be None or Partly. */
	AiContribution?: avs.ContainsAI;
	/** A Reference for a Party (specific to this Message). This is a LocalPartyAnchorReference starting with the letter P. */
	ContributorPartyReference: string;
	/** A Role for which the Party is credited. */
	DisplayCredits?: DisplayCredits[];
	/** A Flag indicating whether the Party is an Artist that has a contract for its part in creating the Resource (=true) or not (=false). */
	HasMadeContractedContribution?: boolean;
	/** A Flag indicating whether the Party is a featured Artist (=true) or not (=false). */
	HasMadeFeaturedContribution?: boolean;
	/** A Flag indicating whether the Contributor is credited as having played a role in creating the Recording (=true) or not (=false). */
	IsCredited?: IsCredited;
	/** A Composite containing details of a Role played by the Contributor. */
	Role?: ContributorRole[];
	/** A special Type of Contributor. */
	SpecialContributor: SpecialContributorType;
}
export interface EditionContributor extends _EditionContributor { constructor: { new(): EditionContributor }; }
export var EditionContributor: { new(): EditionContributor };

type EditionContributorContributorPartyReferenceType = string;
type _EditionContributorContributorPartyReferenceType = Primitive._string;

/** A Composite containing details of the Date and Place of an Event. */
interface _EventDate extends _ddex_IsoDate {
	/** The Territory in which the Event occurred. This is represented in an XML schema as an XML Attribute. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. */
	ApplicableTerritoryCode: avs.AllTerritoryCode;
	/** The Flag indicating whether the Event being described occurred sometime after the reported Date (=true) or not (=false). This is represented in an XML schema as an XML Attribute. */
	IsAfter: boolean;
	/** The Flag indicating whether the reported Date is approximate (=true) or exact (=false). This is represented in an XML schema as an XML Attribute. */
	IsApproximate: boolean;
	/** The Flag indicating whether the Event being described occurred sometime before the reported Date (=true) or not (=false). This is represented in an XML schema as an XML Attribute. */
	IsBefore: boolean;
	/** The Language and script for the LocationDescription as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Description of the location in which the Event occurred. It offers the opportunity to describe a place more precisely than using the TerritoryCode, e.g. by indicating the name of a region or a city. This is represented in an XML schema as an XML Attribute. */
	LocationDescription: string;
}
export interface EventDate extends _EventDate { constructor: { new(): EventDate }; }
export var EventDate: { new(): EventDate };

/** A Composite containing details of the DateTime and Place of an Event. */
interface _EventDateTime extends Primitive._Date {
	/** The Flag indicating whether the Event being described occurred sometime after the reported DateTime (=true) or not (=false). This is represented in an XML schema as an XML Attribute. */
	IsAfter: boolean;
	/** The Flag indicating whether the reported DateTime is approximate (=true) or exact (=false). This is represented in an XML schema as an XML Attribute. */
	IsApproximate: boolean;
	/** The Flag indicating whether the Event being described occurred sometime before the reported DateTime (=true) or not (=false). This is represented in an XML schema as an XML Attribute. */
	IsBefore: boolean;
	/** The Language and script for the LocationDescription as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Description of the location in which the Event occurred. It offers the opportunity to describe a place more precisely than using the TerritoryCode, e.g. by indicating the name of a region or a city. This is represented in an XML schema as an XML Attribute. */
	LocationDescription: string;
	/** The Territory in which the Event occurred. This is represented in an XML schema as an XML Attribute. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. */
	TerritoryCode: avs.AllTerritoryCode;
}
export interface EventDateTime extends _EventDateTime { constructor: { new(): EventDateTime }; }
export var EventDateTime: { new(): EventDateTime };

/** A Composite containing details of the DateTime and Place of an Event.Explanatory Note: This Composite is named EventDateTimeWithoutFlags to disambiguate it from the basic EventDateTime Composite. */
interface _EventDateTimeWithoutFlags extends Primitive._Date {
	/** The Territory in which the Event occurred. This is represented in an XML schema as an XML Attribute. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether the reported DateTime is approximate (=true) or exact (=false). This is represented in an XML schema as an XML Attribute. */
	IsApproximate: boolean;
	/** The Language and script for the LocationDescription as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Description of the location in which the Event occurred. It offers the opportunity to describe a place more precisely than using the TerritoryCode, e.g. by indicating the name of a region or a city. This is represented in an XML schema as an XML Attribute. */
	LocationDescription: string;
}
export interface EventDateTimeWithoutFlags extends _EventDateTimeWithoutFlags { constructor: { new(): EventDateTimeWithoutFlags }; }
export var EventDateTimeWithoutFlags: { new(): EventDateTimeWithoutFlags };

type EventDateTimeWithoutFlagsLanguageAndScriptCodeType = string;
type _EventDateTimeWithoutFlagsLanguageAndScriptCodeType = Primitive._string;

/** A Composite containing details of the Date and Place of an Event.Explanatory Note: This Composite is named EventDateWithCurrentTerritory to disambiguate it from the basic EventDate Composite. */
interface _EventDateWithCurrentTerritory extends _ddex_IsoDate {
	/** The main Territory in which the Event occurred. This is represented in an XML schema as an XML Attribute. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether the reported Date is approximate (=true) or exact (=false). This is represented in an XML schema as an XML Attribute. */
	IsApproximate: boolean;
	/** The Language and script for the LocationDescription as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Description of the location in which the Event occurred. It offers the opportunity to describe a place more precisely than using the TerritoryCode, e.g. by indicating the name of a region or a city. This is represented in an XML schema as an XML Attribute. */
	LocationDescription: string;
}
export interface EventDateWithCurrentTerritory extends _EventDateWithCurrentTerritory { constructor: { new(): EventDateWithCurrentTerritory }; }
export var EventDateWithCurrentTerritory: { new(): EventDateWithCurrentTerritory };

type EventDateWithCurrentTerritoryLanguageAndScriptCodeType = string;
type _EventDateWithCurrentTerritoryLanguageAndScriptCodeType = Primitive._string;

/** A Composite containing details of the Date and Place of an Event.Explanatory Note: This Composite is named EventDateWithDefault to disambiguate it from the basic EventDate Composite. */
interface _EventDateWithDefault extends _ddex_IsoDate {
	/** The Territory in which the Event occurred. This is represented in an XML schema as an XML Attribute. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. */
	ApplicableTerritoryCode: avs.AllTerritoryCode;
	/** The Flag indicating whether the reported Date is approximate (=true) or exact (=false). This is represented in an XML schema as an XML Attribute. */
	IsApproximate: boolean;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
}
export interface EventDateWithDefault extends _EventDateWithDefault { constructor: { new(): EventDateWithDefault }; }
export var EventDateWithDefault: { new(): EventDateWithDefault };

/** A Composite containing details of the Date and Place of an Event.Explanatory Note: This Composite is named EventDateWithoutFlags to disambiguate it from the basic EventDate Composite. */
interface _EventDateWithoutFlags extends _ddex_IsoDate {
	/** The main Territory in which the Event occurred. This is represented in an XML schema as an XML Attribute. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. */
	ApplicableTerritoryCode: avs.AllTerritoryCode;
	/** The Flag indicating whether the reported Date is approximate (=true) or exact (=false). This is represented in an XML schema as an XML Attribute. */
	IsApproximate: boolean;
	/** The Language and script for the LocationDescription as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Description of the location in which the Event occurred. It offers the opportunity to describe a place more precisely than using the TerritoryCode, e.g. by indicating the name of a region or a city. This is represented in an XML schema as an XML Attribute. */
	LocationDescription: string;
}
export interface EventDateWithoutFlags extends _EventDateWithoutFlags { constructor: { new(): EventDateWithoutFlags }; }
export var EventDateWithoutFlags: { new(): EventDateWithoutFlags };

type EventDateWithoutFlagsLanguageAndScriptCodeType = string;
type _EventDateWithoutFlagsLanguageAndScriptCodeType = Primitive._string;

/** A Composite containing an Extent and a UnitOfMeasure. */
interface _Extent extends Primitive._number {
	/** The UnitOfMeasure of the Extent. This is represented in an XML schema as an XML Attribute. */
	UnitOfMeasure: avs.UnitOfExtent;
}
export interface Extent extends _Extent { constructor: { new(): Extent }; }
export var Extent: { new(): Extent };

/** A Composite containing details of an ExternallyLinkedResourceType. */
interface _ExternallyLinkedResourceType extends avs._ExternallyLinkedResourceType {
	/** The Namespace of the ExternallyLinkedResourceType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the ExternallyLinkedResourceType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface ExternallyLinkedResourceType extends _ExternallyLinkedResourceType { constructor: { new(): ExternallyLinkedResourceType }; }
export var ExternallyLinkedResourceType: { new(): ExternallyLinkedResourceType };

/** A Composite containing details of promotional or other material in digital form related to a Release. */
interface _ExternalResourceLink extends BaseType {
	/** The Identifier which provides a communication link to the related external Resource. */
	ExternalLink?: string;
	/** A Composite containing details of the Type of a Resource pointed to by the ExternalResourceLink. */
	ExternallyLinkedResourceType?: ExternallyLinkedResourceType[];
	/** The FileFormat of the external Resource. */
	FileFormat?: string;
	/** A URL of the linked external Resource. */
	URL: string[];
	/** A Composite containing details about the Period of Time during which the ExternalResourceLink is active. StartDate and EndDate are deprecated and StartDateTime/EndDateTime should be used instead. DDEX advises that StartDate and EndDate may be removed at a future date and therefore recommends against using them. */
	ValidityPeriod?: PeriodWithoutFlags;
}
export interface ExternalResourceLink extends _ExternalResourceLink { constructor: { new(): ExternalResourceLink }; }
export var ExternalResourceLink: { new(): ExternalResourceLink };

/** A Composite containing details of a File. */
interface _File extends BaseType {
	/** The size of the File in kilobytes. */
	FileSize?: number;
	/** A Composite containing a hash sum of the File and information about the Algorithm with which it has been generated. */
	HashSum?: DetailedHashSum;
	/** A URI of the File (this can be a URL or another type of Identifier using a scheme identifier, e.g. http or ftp, as defined in RFC 3986). */
	URI: string;
}
export interface File extends _File { constructor: { new(): File }; }
export var File: { new(): File };

/** A Composite containing details of a Fingerprint and its governing algorithm. */
interface _Fingerprint extends BaseType {
	/** A Composite containing details of the Type of Algorithm governing the Fingerprint. */
	Algorithm: FingerprintAlgorithmType;
	/** The datatype of the Fingerprint. */
	DataType?: avs.BinaryDataType;
	/** A Composite containing details of a File containing the Fingerprint. */
	File?: File;
	/** The value of the Fingerprint. */
	FingerprintValue?: string;
	/** A parameter of the FingerprintAlgorithm. */
	Parameter?: string;
	/** The Identifier of the Version of the FingerprintAlgorithm. */
	Version?: string;
}
export interface Fingerprint extends _Fingerprint { constructor: { new(): Fingerprint }; }
export var Fingerprint: { new(): Fingerprint };

/** A Composite containing details of a FingerprintAlgorithmType. */
interface _FingerprintAlgorithmType extends avs._FingerprintAlgorithmType {
	/** The Namespace of the FingerprintAlgorithmType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the FingerprintAlgorithmType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface FingerprintAlgorithmType extends _FingerprintAlgorithmType { constructor: { new(): FingerprintAlgorithmType }; }
export var FingerprintAlgorithmType: { new(): FingerprintAlgorithmType };

/** A Composite containing details of a FirstPublicationDate. */
interface _FirstPublicationDate extends _ddex_IsoDate {
	/** A Territory to which the FirstPublicationDate applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
}
export interface FirstPublicationDate extends _FirstPublicationDate { constructor: { new(): FirstPublicationDate }; }
export var FirstPublicationDate: { new(): FirstPublicationDate };

/** A Composite containing a FrameRate and a UnitOfMeasure. */
interface _FrameRate extends Primitive._number {
	/** The UnitOfMeasure of the FrameRate. This is represented in an XML schema as an XML Attribute. */
	UnitOfMeasure: avs.UnitOfFrameRate;
}
export interface FrameRate extends _FrameRate { constructor: { new(): FrameRate }; }
export var FrameRate: { new(): FrameRate };

/** A Composite containing details of a FulfillmentDate. */
interface _FulfillmentDate extends BaseType {
	/** A Territory to which the FulfillmentDate applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** A Date after which an end user can receive the Resource (in ISO 8601 format: YYYY-MM-DD). If no FulfillmentDate is provided the FulfillmentDate is the StartDate of the respective Deal. */
	FulfillmentDate: string;
	/** The Identifier (specific to the Message) of a Release for a Resource. This is a LocalReleaseAnchorReference starting with the letter R. */
	ResourceReleaseReference?: string[];
}
export interface FulfillmentDate extends _FulfillmentDate { constructor: { new(): FulfillmentDate }; }
export var FulfillmentDate: { new(): FulfillmentDate };

type FulfillmentDateResourceReleaseReferenceType = string;
type _FulfillmentDateResourceReleaseReferenceType = Primitive._string;

/** A Composite containing details of a Genre Category. */
interface _GenreCategory extends BaseType {
	/** A Territory to which the Genre Category applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** A Composite containing a Description of the Genre Category. */
	Description?: TextWithoutTerritory[];
	/** A Composite containing details of a Genre Category value. */
	Value: GenreCategoryValue;
}
export interface GenreCategory extends _GenreCategory { constructor: { new(): GenreCategory }; }
export var GenreCategory: { new(): GenreCategory };

/** A Composite containing details of a Genre Category value. */
interface _GenreCategoryValue extends avs._ClassifiedGenre {
	/** The Language and script of this Element as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** The Namespace of the element. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the element. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface GenreCategoryValue extends _GenreCategoryValue { constructor: { new(): GenreCategoryValue }; }
export var GenreCategoryValue: { new(): GenreCategoryValue };

type GenreCategoryValueLanguageAndScriptCodeType = string;
type _GenreCategoryValueLanguageAndScriptCodeType = Primitive._string;

/** A Composite containing details of a Genre.Explanatory Note: This Composite is named GenreWithTerritory to disambiguate it from the basic Genre Composite. */
interface _GenreWithTerritory extends BaseType {
	/** A Territory to which the Genre applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Language and script for the Elements of the Genre as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Composite containing details of a Genre Category to which the Release belongs. */
	GenreCategory?: GenreCategory[];
	/** A Description of a genre or style (such as Musical, literary or audio-visual) with which a Creation is associated. */
	GenreText: string;
	/** A Description of a secondary genre or style with which a Creation is associated. The SubGenre is a specialization of the genre provided in GenreText. */
	SubGenre?: string;
	/** A Composite containing details of a sub-genre of the Release. The sub-genre is a specialization of the genre and therefore the GenreCategory needs to be provided if this element is provided. */
	SubGenreCategory?: SubGenreCategory[];
}
export interface GenreWithTerritory extends _GenreWithTerritory { constructor: { new(): GenreWithTerritory }; }
export var GenreWithTerritory: { new(): GenreWithTerritory };

/** A Composite containing details of a HashSumAlgorithmType. */
interface _HashSumAlgorithmType extends avs._HashSumAlgorithmType {
	/** The Namespace of the HashSumAlgorithmType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the HashSumAlgorithmType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface HashSumAlgorithmType extends _HashSumAlgorithmType { constructor: { new(): HashSumAlgorithmType }; }
export var HashSumAlgorithmType: { new(): HashSumAlgorithmType };

/** A Composite containing details of HDR video dynamic metadata. */
interface _HdrVideoDynamicMetadataType extends avs._HdrVideoDynamicMetadataType {
	/** The Flag indicating whether SDR Derivation is permitted by the content owner (=true) or not (=false). If this Flag is not set or set to false, Dolby Vision metadata can be used by a DSP to derive SDR video from the HDR source video using Dolby tools. If this Flag is set to true, this is not permitted and the content provider will provide a separate SDR video track. This is represented in an XML schema as an XML Attribute. */
	SdrDerivationPermitted: boolean;
	/** The Identifier of the Version of the HdrVideoDynamicMetadataType. This is represented in an XML schema as an XML Attribute. */
	Version: string;
}
export interface HdrVideoDynamicMetadataType extends _HdrVideoDynamicMetadataType { constructor: { new(): HdrVideoDynamicMetadataType }; }
export var HdrVideoDynamicMetadataType: { new(): HdrVideoDynamicMetadataType };

/** A Composite containing details of an Image. */
interface _Image extends BaseType {
	/** The Flag indicating whether the Image is provided in addition to the Resources that form part of the Release (=true) or not (=false). If the flag is set to false (or absent) the Image is part of at least one Release in the message. This is represented in an XML schema as an XML Attribute. */
	IsSupplemental: boolean;
	/** The Language and script for the Elements of the Image as defined in IETF RfC 5646. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Composite containing details of the CLine for the Image. */
	CLine?: CLine[];
	/** A Type of the Image indicating the contribution of GenerativeAI. If the value of this element is All, only Contributors of type GenerativeAI shall be specified. If the value of this element is None, no Contributors with AiContribution set to Partly or All shall be specified. */
	ContainsAI?: avs.ContainsAI;
	/** The Flag indicating whether the Image contains content that is hidden in some way from the Consumer (=true) or not (=false). */
	ContainsHiddenContent?: boolean;
	/** A Composite containing details of a Contributor to the Image. */
	Contributor?: Contributor[];
	/** A Composite containing an Annotation which acknowledges record companies and/or other Parties giving permission for Artists or others featured on the Image. */
	CourtesyLine?: CourtesyLine[];
	/** A Composite containing details of the Date and Place of the Event in which the Image was created. This is a string with the syntax YYYY[-MM[-DD]]. */
	CreationDate?: EventDateWithoutFlags;
	/** A Composite containing a Description of the subject of the Image. */
	Description?: DescriptionWithTerritory[];
	/** A Composite containing details of the DisplayArtist for the Image. The DisplayArtist may be described through Name, Identifier and Roles.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/communicating-displayartists-and-displayartistnameFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/displayartistnames-for-releases-and-resourcesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	DisplayArtist?: DisplayArtist[];
	/** A Composite containing the Name to be used by a DSP when presenting Artist details of the Resource to a Consumer.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/communicating-displayartists-and-displayartistnameFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/displayartistnames-for-releases-and-resourcesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	DisplayArtistName?: DisplayArtistNameWithOriginalLanguage[];
	/** A Composite containing details of a Title of the Image as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. */
	DisplayTitle?: DisplayTitle[];
	/** A Composite containing details of a Title of the Image as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. One such element is required for each DisplayTitle element and its content typically provides the same information as the concatenation of the DisplayTitle's sub-elements. */
	DisplayTitleText?: DisplayTitleText[];
	/** A Composite containing details of the Date and Place of the Event in which the Image was first published, whether for physical or electronic/online distribution. This is a string with the syntax YYYY[-MM[-DD]]. */
	FirstPublicationDate?: FulfillmentDate[];
	/** A Composite containing details of a FormalTitle of the Image. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	FormalTitle?: DisplayTitle[];
	/** A Composite containing details of a GroupingTitle of the Image. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	GroupingTitle?: DisplayTitle[];
	/** A Composite containing details of the classification of the Image according to advice which it carries about the level of explicitness or offensiveness of its content. */
	ParentalWarningType?: ParentalWarningTypeWithStandard[];
	/** A Composite containing details of a Release (or a PhysicalProduct or a DigitalProduct derived from such a Release) which is related to current Image. */
	RelatedRelease?: RelatedRelease[];
	/** A Composite containing details of a ResourceRelatedResourceReference referring to a Resource that is related to the current Image. */
	RelatedResource?: RelatedResource[];
	/** A Composite containing details of Identifiers of the Image. */
	ResourceId: ResourceProprietaryId[];
	/** The Identifier (specific to the Message) of the Image within the Release which contains it. This is a LocalResourceAnchor starting with the letter A. */
	ResourceReference: string;
	/** A Composite containing details of RightsController of Rights in the Image. */
	ResourceRightsController?: ResourceRightsController[];
	/** A Composite containing technical details of the Image.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-binaries/communicating-binaries */
	TechnicalDetails?: TechnicalImageDetails[];
	/** A Composite containing details of the Type of the Image. */
	Type: ImageType;
	/** A Composite containing details of a Type of Version given by the releasing party to characterise and differentiate one Image from another with identical or similar Title metadata. VersionTypes may be used for disambiguating an Image that has been derived from another Image by using the value EditedVersion. EditedVersion value is often combined with another VersionType such as RadioVersion. */
	VersionType?: VersionType[];
	/** A Composite containing details of RightsController of Rights in the Work. */
	WorkRightsController?: WorkRightsController[];
}
export interface Image extends _Image { constructor: { new(): Image }; }
export var Image: { new(): Image };

/** A Composite containing details of an ImageCodecType. */
interface _ImageCodecType extends avs._ImageCodecType {
	/** The Namespace of the ImageCodecType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the ImageCodecType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
	/** The Identifier of the Version of the ImageCodecType. This is represented in an XML schema as an XML Attribute. */
	Version: string;
}
export interface ImageCodecType extends _ImageCodecType { constructor: { new(): ImageCodecType }; }
export var ImageCodecType: { new(): ImageCodecType };

type ImageLanguageAndScriptCodeType = string;
type _ImageLanguageAndScriptCodeType = Primitive._string;

type ImageResourceReferenceType = string;
type _ImageResourceReferenceType = Primitive._string;

/** A Composite containing details of an ImageType. */
interface _ImageType extends avs._ImageType {
	/** The Namespace of the ImageType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the ImageType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface ImageType extends _ImageType { constructor: { new(): ImageType }; }
export var ImageType: { new(): ImageType };

/** A Composite containing details of an InstrumentType. */
interface _InstrumentType extends avs._InstrumentType {
	/** The Namespace of the InstrumentType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the InstrumentType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface InstrumentType extends _InstrumentType { constructor: { new(): InstrumentType }; }
export var InstrumentType: { new(): InstrumentType };

/** A Composite containing details of a Flag indicating whether the Contributor is credited as having played a role in creating the Recording. */
interface _IsCredited extends Primitive._boolean {
	/** A Flag indicating whether this information may be shared (=true) or not (=false). If the Flag is not present, the Contributor may be credited. This is represented in an XML schema as an XML Attribute. */
	MayBeShared: boolean;
}
export interface IsCredited extends _IsCredited { constructor: { new(): IsCredited }; }
export var IsCredited: { new(): IsCredited };

/** A Composite containing details of a Description containing Keywords.Explanatory Note: This Composite is named KeywordsWithTerritory to disambiguate it from the basic Keywords Composite. */
interface _KeywordsWithTerritory extends Primitive._string {
	/** A Territory to which the Keywords applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Language and script of the Keywords as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
}
export interface KeywordsWithTerritory extends _KeywordsWithTerritory { constructor: { new(): KeywordsWithTerritory }; }
export var KeywordsWithTerritory: { new(): KeywordsWithTerritory };

/** A Composite containing details of a Language value. */
interface _Language extends _ddex_LanguageAndScriptCodeWithRestriction {
	/** A Flag indicating whether the Language is the main one (=true) or not (=false). This is represented in an XML schema as an XML Attribute. */
	IsMainLanguage: boolean;
}
export interface Language extends _Language { constructor: { new(): Language }; }
export var Language: { new(): Language };

/** A Composite containing details of a LinkedReleaseResourceReference for a Resource which is linked to a ContentItem. */
interface _LinkedReleaseResourceReference extends _ddex_LocalResourceAnchorReference {
	/** The Flag indicating whether the reference is part of a set of references to multiple files (=true) or not (=false). If the Flag is not set, the reference is assumed not to be a multi-file reference. This is represented in an XML schema as an XML Attribute. */
	IsMultiFile: boolean;
	/** The Language and script for the LinkDescription as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A description of the link for the ReleaseResourceReference. This is represented in an XML schema as an XML Attribute. */
	LinkDescription: avs.LinkDescription;
	/** The Namespace of the LinkDescription. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** The number indicating the order of the Resource in a group of Resources within the Release. This is represented in an XML schema as an XML Attribute. */
	SequenceNumber: number;
	/** A UserDefined value of the LinkDescription. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface LinkedReleaseResourceReference extends _LinkedReleaseResourceReference { constructor: { new(): LinkedReleaseResourceReference }; }
export var LinkedReleaseResourceReference: { new(): LinkedReleaseResourceReference };

type LinkedReleaseResourceReferenceLanguageAndScriptCodeType = string;
type _LinkedReleaseResourceReferenceLanguageAndScriptCodeType = Primitive._string;

/** A Composite containing details of a Session. */
interface _LocationAndDateOfSession extends BaseType {
	/** A Composite containing a human-readable Comment about the Session. */
	Comment?: TextWithFormat;
	/** A Composite containing details of a Contributor. */
	Contributor?: PartyWithRole[];
	/** A Composite containing details about a Period of the Session. Periods are typically described by at least a StartDate or EndDate. */
	Period?: Period;
	/** The Type of Session. */
	SessionType?: SessionType[];
	/** A Composite containing details of the venue where the Session took place. */
	Venue?: Venue[];
}
export interface LocationAndDateOfSession extends _LocationAndDateOfSession { constructor: { new(): LocationAndDateOfSession }; }
export var LocationAndDateOfSession: { new(): LocationAndDateOfSession };

/** A Composite containing details of a MarketingComment. */
interface _MarketingComment extends Primitive._string {
	/** A Territory to which the Comment applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Language and script of the Comment as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
}
export interface MarketingComment extends _MarketingComment { constructor: { new(): MarketingComment }; }
export var MarketingComment: { new(): MarketingComment };

/** A Composite containing information about Parties in between the original MessageSender and ultimate MessageRecipient. */
interface _MessageAuditTrail extends BaseType {
	/** A Composite containing details of a Party handling the Message and the Time at which the handling took place. */
	MessageAuditTrailEvent: MessageAuditTrailEvent[];
}
export interface MessageAuditTrail extends _MessageAuditTrail { constructor: { new(): MessageAuditTrail }; }
export var MessageAuditTrail: { new(): MessageAuditTrail };

/** A Composite containing details of a Party handling a Message and the Time at which the handling took place. */
interface _MessageAuditTrailEvent extends BaseType {
	/** The DateTime at which the Message was handled by the MessagingParty (the only allowed format is ISO 8601: YYYY-MM-DDThh:mm:ssTZD). */
	DateTime: Date;
	/** A Composite containing details of a MessagingParty. */
	MessagingPartyDescriptor: MessagingPartyWithoutCode;
}
export interface MessageAuditTrailEvent extends _MessageAuditTrailEvent { constructor: { new(): MessageAuditTrailEvent }; }
export var MessageAuditTrailEvent: { new(): MessageAuditTrailEvent };

/** A Composite placed at the beginning of each DdexMessage providing information about the Message, such as MessageSender, MessageRecipient and a Message creation time stamp. */
interface _MessageHeader extends BaseType {
	/** A Composite containing information about Parties in between the original MessageSender and ultimate MessageRecipient. */
	MessageAuditTrail?: MessageAuditTrail;
	/** The indicator used to distinguish a live Message from a test Message. */
	MessageControlType?: avs.MessageControlType;
	/** The DateTime on which the Message was created (the only allowed format is RFC 3339: YYYY-MM-DDThh:mm:ssTZD, where TZD stands for time zone designator, which can be the letter Z or an offset from UTC in the format +hh:mm or -hh:mm). */
	MessageCreatedDateTime: Date;
	/** The FileName, possibly including the FilePath, of the File containing the current Message. */
	MessageFileName?: string;
	/** A xs:string used to uniquely identify the current Message. The MessageId shall be, in combination with the DdexPartyId (DPID) of the MessageSender, globally unique. Thus, a MessageSender shall never re-use a MessageId. */
	MessageId: string;
	/** A Composite containing details of the MessageRecipient. Note that if multiple MessageRecipients are provided, all of them will be able to read this information. */
	MessageRecipient: MessagingPartyWithoutCode[];
	/** A Composite containing details of the MessageSender. */
	MessageSender: MessagingPartyWithoutCode;
	/** A xs:string used to uniquely identify the thread of Messages of which the current Message is a part. The MessageThreadId shall be, in combination with the DdexPartyId (DPID) of the MessageSender, globally unique. Thus, a MessageSender shall never re-use a MessageThreadId. One example of such a 'thread' is the chain of NewReleaseMessages being sent from ReleaseCreator to wholesale ReleaseDistributor 1 to retail DSP when communicating information about the same Release(s). A common MessageThreadId will allow all these messages to be tied together. */
	MessageThreadId?: string;
	/** A Composite containing details of the Party on whose request the Message is sent. */
	SentAsRequestedBy?: MessagingPartyWithoutCode;
	/** A Composite containing details of the Party on whose behalf the Message is sent. */
	SentOnBehalfOf?: MessagingPartyWithoutCode;
}
export interface MessageHeader extends _MessageHeader { constructor: { new(): MessageHeader }; }
export var MessageHeader: { new(): MessageHeader };

/** A Composite containing details of a MessagingParty.Explanatory Note: This Composite is named MessagingPartyWithoutCode to disambiguate it from the basic MessagingParty Composite. */
interface _MessagingPartyWithoutCode extends BaseType {
	/** An Identifier of a Party according to the DdexPartyId standard DDEX-DPID. */
	PartyId: string;
	/** A Composite containing details of the PartyNames for the Party handling the Message.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/lengths-of-artist-namesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/general-guidance-on-messages/field-length-and-precision */
	PartyName?: PartyNameWithoutCode;
	/** A Composite containing a TradingName for the Party handling the Message.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/lengths-of-artist-namesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/general-guidance-on-messages/field-length-and-precision */
	TradingName?: string;
}
export interface MessagingPartyWithoutCode extends _MessagingPartyWithoutCode { constructor: { new(): MessagingPartyWithoutCode }; }
export var MessagingPartyWithoutCode: { new(): MessagingPartyWithoutCode };

type MessagingPartyWithoutCodePartyIdType = string;
type _MessagingPartyWithoutCodePartyIdType = Primitive._string;

/** A Composite containing details of a MusicalWorkId. */
interface _MusicalWorkId extends BaseType {
	/** The Flag indicating whether this Identifier is old and has been replaced by a new one (=true) or not (=false). The Flag may only be set to True when the new Identifier is also provided. If the Flag is not set, this Identifier is deemed to be the current one. This is represented in an XML schema as an XML Attribute. */
	IsReplaced: boolean;
	/** A MusicalWorkId identifying a MusicalWork within the catalog of its Composer (typically of classical music) according to a standardized numbering (e.g. 'K' numbers for Koechel's catalog of Mozart). */
	ComposerCatalogNumber?: string[];
	/** The ISWC (International Standard Musical Work Code defined in ISO 15707) identifying the MusicalWork. An ISWC comprises three parts: the letter 'T', followed by nine digits and then one check digit. DDEX will enforce the syntax [a-zA-Z][0-9]{10} in the future. */
	ISWC?: string;
	/** The MusicalWorkId identifying the MusicalWork within the catalog of its Composer (typically of classical music) as an opus number. */
	OpusNumber?: string;
	/** A Composite containing details of a ProprietaryIdentifier of the MusicalWork. */
	ProprietaryId?: ProprietaryId[];
}
export interface MusicalWorkId extends _MusicalWorkId { constructor: { new(): MusicalWorkId }; }
export var MusicalWorkId: { new(): MusicalWorkId };

/** A Composite containing details of a Name. */
interface _Name extends Primitive._string {
	/** The Language and script of the Name as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
}
export interface Name extends _Name { constructor: { new(): Name }; }
export var Name: { new(): Name };

interface _NewReleaseMessageType extends BaseType {
	/** The Identifier of the Version of the AllowedValueSets used for the Message. This is represented in an XML schema as an XML Attribute. */
	AvsVersionId: string;
	/** The Language and script for the Elements of this Message as defined in IETF RfC 5646. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** The Identifier of the Version of the release profile variant used for the Message. This is represented in an XML schema as an XML Attribute. */
	ReleaseProfileVariantVersionId: avs.ReleaseProfileVariantVersionId;
	/** The Identifier of the Version of the release profile used for the Message. This is represented in an XML schema as an XML Attribute. */
	ReleaseProfileVersionId: avs.ReleaseProfileVersionId;
	/** A Composite containing details of one or more Chapters contained in Releases for which data is provided in the NewReleaseMessage. */
	ChapterList?: ChapterList;
	/** A Composite containing details of one or more CueSheets contained in Releases for which data is provided in the NewReleaseMessage. */
	CueSheetList?: CueSheetList;
	/** A Composite containing details of one or more Deals governing the Usage of the Releases in the Message. */
	DealList?: DealList;
	/** The MessageHeader for the NewReleaseMessage. */
	MessageHeader: MessageHeader;
	/** A Composite containing details of one or more Parties relating to the reported Creations. */
	PartyList: PartyList;
	/** A Composite containing details of Release administration. */
	ReleaseAdmin?: ReleaseAdmin[];
	/** A Composite containing details of one or more DDEX Releases contained in the NewReleaseMessage. */
	ReleaseList: ReleaseList;
	/** A Composite containing details of one or more Resources.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-releaseresourcework-metadata/sequencing-resources */
	ResourceList: ResourceList;
	/** A Composite containing details of one or more XML documents communicated with the Message. */
	SupplementalDocumentList?: SupplementalDocumentList;
}
interface NewReleaseMessageType extends _NewReleaseMessageType { constructor: { new(): NewReleaseMessageType }; }

type NewReleaseMessageTypeLanguageAndScriptCodeType = string;
type _NewReleaseMessageTypeLanguageAndScriptCodeType = Primitive._string;

/** A Composite containing details of an OperatingSystemType. */
interface _OperatingSystemType extends avs._OperatingSystemType {
	/** The Namespace of the OperatingSystemType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the OperatingSystemType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
	/** The Identifier of the Version of the OperatingSystemType. This is represented in an XML schema as an XML Attribute. */
	Version: string;
}
export interface OperatingSystemType extends _OperatingSystemType { constructor: { new(): OperatingSystemType }; }
export var OperatingSystemType: { new(): OperatingSystemType };

/** A Composite containing details of a ParentalWarningType.Explanatory Note: This Composite is named ParentalWarningTypeWithStandard to disambiguate it from the basic ParentalWarningType Composite. */
interface _ParentalWarningTypeWithStandard extends avs._ParentalWarningType {
	/** A Territory to which the ParentalWarningType applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The ParentalWarningStandard that applies to the ParentalWarningType. This is represented in an XML schema as an XML Attribute. */
	ParentalWarningStandard: avs.ParentalWarningStandard;
	/** The Namespace of the ParentalWarningStandard. This is represented in an XML schema as an XML Attribute. */
	StandardNamespace: string;
	/** A UserDefined value of the ParentalWarningStandard. This is represented in an XML schema as an XML Attribute. */
	StandardUserDefinedValue: string;
	/** The Namespace of the ParentalWarningType. This is represented in an XML schema as an XML Attribute. */
	TypeNamespace: string;
	/** A UserDefined value of the ParentalWarningType. This is represented in an XML schema as an XML Attribute. */
	TypeUserDefinedValue: string;
}
export interface ParentalWarningTypeWithStandard extends _ParentalWarningTypeWithStandard { constructor: { new(): ParentalWarningTypeWithStandard }; }
export var ParentalWarningTypeWithStandard: { new(): ParentalWarningTypeWithStandard };

/** A Composite containing details of a Party. */
interface _Party extends BaseType {
	/** A Composite containing details of an affiliation for the Party. */
	Affiliation?: Affiliation[];
	/** A URL of a WebPage for the Artist. */
	ArtistProfilePage?: string[];
	/** A Composite containing details of the PartyId for the Party. If no Namespace is given, the Identifier is a DdexPartyId (DPID). Note that DPIDs are not normally used to identify Artists, producers or other Creators. */
	PartyId: DetailedPartyId[];
	/** A Composite containing details of the PartyName(s). */
	PartyName: PartyNameWithTerritory[];
	/** The Identifier (specific to the Message) of the Party. This is a LocalPartyAnchor starting with the letter P. */
	PartyReference: string;
	/** A Composite containing details of a PartyRelatedPartyReference referring to a Party that is related to the current Party. This can be used to express, for instance, relationships between a band and its members or between a label and its parent company. */
	RelatedParty?: RelatedParty[];
}
export interface Party extends _Party { constructor: { new(): Party }; }
export var Party: { new(): Party };

/** A Composite containing details of one or more Parties. */
interface _PartyList extends BaseType {
	/** A Composite containing details of a Brand. */
	Brand?: Brand[];
	/** A Composite containing details of a Party. */
	Party: Party[];
}
export interface PartyList extends _PartyList { constructor: { new(): PartyList }; }
export var PartyList: { new(): PartyList };

/** A Composite containing details of a PartyName. Name details for a Party typically either contain a FullName or a KeyName.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/lengths-of-artist-namesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/general-guidance-on-messages/field-length-and-precision */
interface _PartyName extends BaseType {
	/** The Language and script for the Elements of the PartyName as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Composite containing a short version of the PartyName (e.g. for use on devices with a small display). */
	AbbreviatedName?: Name;
	/** A Composite containing the complete Name of the Party, in its normal form of presentation (e.g. John H. Smith, Acme Music Inc, the Beatles). */
	FullName: Name;
	/** The FullName transcribed using 7-bit ASCII code. */
	FullNameAsciiTranscribed?: string;
	/** A Composite containing the complete Name of the Party in the form in which it normally appears in an alphabetic index, with the KeyName first (e.g. Smith, John H.; Beatles, The). */
	FullNameIndexed?: Name;
	/** A Composite containing the Part of a Name of the Party normally used to index an entry in an alphabetical list, such as 'Smith' (in John Smith) or 'Garcia Marquez' or 'Madonna' or 'Francis de Sales' (in Saint Francis de Sales). For persons, this normally corresponds to the 'family name' or names, which in Western name forms usually comes as a surname at the end of a FullName, and in Asian name forms often at the beginning of a FullName. */
	KeyName?: Name;
	/** A Composite containing the Name(s) following the KeyName. Example:'Ibrahim' (in Anwar Ibrahim). This is common, e.g., in many Asian personal name forms where a FullName begins with the KeyName, which is followed by other names. */
	NamesAfterKeyName?: Name;
	/** A Composite containing the Name(s) preceding the KeyName in the FullName (and that is placed after it in a FullNameIndexed). Examples: 'George' in 'George Michael'; 'John Fitzgerald' in 'John Fitzgerald Kennedy'. Not all PartyNames have a NamesBeforeKeyName (e.g. Madonna, EMI Music Inc). */
	NamesBeforeKeyName?: Name;
}
export interface PartyName extends _PartyName { constructor: { new(): PartyName }; }
export var PartyName: { new(): PartyName };

/** A Composite containing details of a PartyName. Name details for a Party typically either contain a FullName or a KeyName.Explanatory Note: This Composite is named PartyNameWithoutCode to disambiguate it from the basic PartyName Composite.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/lengths-of-artist-namesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/general-guidance-on-messages/field-length-and-precision */
interface _PartyNameWithoutCode extends BaseType {
	/** A short version of the PartyName (e.g. for use on devices with a small display). */
	AbbreviatedName?: string;
	/** The complete Name of the Party, in its normal form of presentation (e.g. John H. Smith, Acme Music Inc, the Beatles). */
	FullName: string;
	/** The FullName transcribed using 7-bit ASCII code. */
	FullNameAsciiTranscribed?: string;
	/** The complete Name of the Party in the form in which it normally appears in an alphabetic index, with the KeyName first (e.g. Smith, John H.; Beatles, The). */
	FullNameIndexed?: string;
	/** The Part of a Name of the Party normally used to index an entry in an alphabetical list, such as 'Smith' (in John Smith) or 'Garcia Marquez' or 'Madonna' or 'Francis de Sales' (in Saint Francis de Sales). For persons, this normally corresponds to the 'family name' or names, which in Western name forms usually comes as a surname at the end of a FullName, and in Asian name forms often at the beginning of a FullName. */
	KeyName?: string;
	/** The Name(s) following the KeyName. Example: 'Ibrahim' (in Anwar Ibrahim). This is common, e.g., in many Asian personal name forms where a FullName begins with the KeyName, which is followed by other names. */
	NamesAfterKeyName?: string;
	/** The Name(s) preceding the KeyName in the FullName (and that is placed after it in a FullNameIndexed). Examples: 'George' in 'George Michael'; 'John Fitzgerald' in 'John Fitzgerald Kennedy'. Not all PartyNames have a NamesBeforeKeyName (e.g. Madonna, EMI Music Inc). */
	NamesBeforeKeyName?: string;
}
export interface PartyNameWithoutCode extends _PartyNameWithoutCode { constructor: { new(): PartyNameWithoutCode }; }
export var PartyNameWithoutCode: { new(): PartyNameWithoutCode };

/** A Composite containing details of a PartyName. Name details for a Party typically either contain a FullName or a KeyName.Explanatory Note: This Composite is named PartyNameWithTerritory to disambiguate it from the basic PartyName Composite. */
interface _PartyNameWithTerritory extends BaseType {
	/** A Territory to which the PartyName applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Flag indicating whether the Name is in its original Language (=true) or not (=false). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsInOriginalLanguage: boolean;
	/** The Flag indicating whether this Name is a legal name (=true) or not (=false). This is represented in an XML schema as an XML Attribute. */
	IsLegalName: boolean;
	/** The Flag indicating whether this Name is a nickname (=true) or not (=false). A nickname is a substitute for the proper name (e.g. an affective or diminutive name) and not to be confused with a pseudonym or a stage name. This is represented in an XML schema as an XML Attribute. */
	IsNickname: boolean;
	/** The Flag indicating whether this Name is a stage name (=true) or not (=false). This is represented in an XML schema as an XML Attribute. */
	IsStageName: boolean;
	/** The Language and script for the Elements of the PartyName as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Composite containing a short version of the PartyName (e.g. for use on devices with a small display). */
	AbbreviatedName?: Name;
	/** A Composite containing the complete Name of the Party, in its normal form of presentation (e.g. John H. Smith, Acme Music Inc, the Beatles). */
	FullName: Name;
	/** The FullName transcribed using 7-bit ASCII code. */
	FullNameAsciiTranscribed?: string;
	/** A Composite containing the complete Name of the Party in the form in which it normally appears in an alphabetic index, with the KeyName first (e.g. Smith, John H.; Beatles, The). */
	FullNameIndexed?: Name;
	/** A Composite containing the Part of a Name of the Party normally used to index an entry in an alphabetical list, such as 'Smith' (in John Smith) or 'Garcia Marquez' or 'Madonna' or 'Francis de Sales' (in Saint Francis de Sales). For persons, this normally corresponds to the 'family name' or names, which in Western name forms usually comes as a surname at the end of a FullName, and in Asian name forms often at the beginning of a FullName. */
	KeyName?: Name;
	/** A Composite containing the Name(s) following the KeyName. Example:'Ibrahim' (in Anwar Ibrahim). This is common, e.g., in many Asian personal name forms where a FullName begins with the KeyName, which is followed by other names. */
	NamesAfterKeyName?: Name;
	/** A Composite containing the Name(s) preceding the KeyName in the FullName (and that is placed after it in a FullNameIndexed). Examples: 'George' in 'George Michael'; 'John Fitzgerald' in 'John Fitzgerald Kennedy'. Not all PartyNames have a NamesBeforeKeyName (e.g. Madonna, EMI Music Inc). */
	NamesBeforeKeyName?: Name;
}
export interface PartyNameWithTerritory extends _PartyNameWithTerritory { constructor: { new(): PartyNameWithTerritory }; }
export var PartyNameWithTerritory: { new(): PartyNameWithTerritory };

type PartyPartyReferenceType = string;
type _PartyPartyReferenceType = Primitive._string;

/** A Composite containing details of a PartyRelationshipType. */
interface _PartyRelationshipType extends avs._PartyRelationshipType {
	/** A Flag indicating whether this information may be shared (=true) or not (=false). If the Flag is not present, the information may be shared. This is represented in an XML schema as an XML Attribute. */
	MayBeShared: boolean;
	/** The Namespace of the PartyRelationshipType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the PartyRelationshipType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface PartyRelationshipType extends _PartyRelationshipType { constructor: { new(): PartyRelationshipType }; }
export var PartyRelationshipType: { new(): PartyRelationshipType };

/** A Composite containing details of a Party.Explanatory Note: This Composite is named PartyWithRole to disambiguate it from the basic Party Composite. */
interface _PartyWithRole extends BaseType {
	/** An Identifier of the Party for which information is provided according to the DdexPartyId standard DDEX-DPID. */
	DPID?: string;
	/** An Interested Party Identifier, a CISAC standard Identifier, of the Party for which information is provided. An IpiNameNumber comprises 11 digits. */
	IpiNameNumber?: string;
	/** An International Performer Number, an IPDA Identifier, of the Party for which information is provided. */
	IPN?: string;
	/** An International Standard Name Identifier, the ISO 27729 Standard Identifier for names, of the Party for which information is provided. DDEX will enforce the syntax [0-9]{15}[X0-9] in the future. */
	ISNI?: string;
	/** A Composite containing details of a Name of the Contributor. */
	PartyName?: PartyNameWithTerritory;
	/** A Composite containing details of a ProprietaryIdentifier of the Party for which information is provided. */
	ProprietaryId?: ProprietaryId[];
	/** A Role played by the Contributor. */
	Role?: ResourceContributorRole;
}
export interface PartyWithRole extends _PartyWithRole { constructor: { new(): PartyWithRole }; }
export var PartyWithRole: { new(): PartyWithRole };

type PartyWithRoleDPIDType = string;
type _PartyWithRoleDPIDType = Primitive._string;

type PartyWithRoleIpiNameNumberType = string;
type _PartyWithRoleIpiNameNumberType = Primitive._string;

/** A Composite containing details of a PercentageRate. */
interface _Percentage extends Primitive._number {
	/** A Flag indicating whether a PercentageRate is given as a value in the range [0,1] (=true) instead of a value in the range [0,100] (=false). This is represented in an XML schema as an XML Attribute. Absence of this attribute is synonymous with false. */
	HasMaxValueOfOne: boolean;
}
export interface Percentage extends _Percentage { constructor: { new(): Percentage }; }
export var Percentage: { new(): Percentage };

/** A Composite containing details about a Period of Time. Periods are typically describedby at least a StartDate or EndDate (or StartDateTime or EndDateTime) where the StartDate(Time) and EndDate(Time) are included in the Period. Thus a one-day period can be described by using the same date in the StartDate and EndDate. If two subsequent Periods form a continuum (i.e. with no break in-between) there are two ways to express this: (a) if using dates, the EndDate of the first Period must be one day before the StartDate of the second Period; (b) if using date times, the EndDateTime of the first Period must be the same as the StartDateTime of the second Period. */
interface _Period extends BaseType {
	/** A Composite containing details of the Date and Place of an Event that marks the end of the Period (in ISO 8601 format: YYYY-MM-DD). The EndDate must not be earlier than the StartDate if both are provided. */
	EndDate?: EventDate;
	/** A Composite containing details of the DateTime and Place of an Event that marks the end of the Period (in ISO 8601 format: YYYY-MM-DDThh:mm:ss). The EndDateTime must not be earlier than the StartDateTime if both are provided. */
	EndDateTime?: EventDateTime;
	/** A Composite containing details of the Date and Place of an Event that marks the beginning of the Period (in ISO 8601 format: YYYY-MM-DD). The StartDate must be no later than the EndDate if both are provided. */
	StartDate?: EventDate;
	/** A Composite containing details of the DateTime and Place of an Event that marks the beginning of the Period (in ISO 8601 format: YYYY-MM-DDThh:mm:ss). The StartDateTime must be no later than the EndDateTime if both are provided. */
	StartDateTime?: EventDateTime;
}
export interface Period extends _Period { constructor: { new(): Period }; }
export var Period: { new(): Period };

/** A Composite containing details about a Period of Time. Periods are typically describedby at least a StartDate or EndDate (or StartDateTime or EndDateTime) where the StartDate(Time) and EndDate(Time) are included in the Period. Thus a one-day period can be described by using the same date in the StartDate and EndDate. If two subsequent Periods form a continuum (i.e. with no break in-between) there are two ways to express this: (a) if using dates, the EndDate of the first Period must be one day before the StartDate of the second Period; (b) if using date times, the EndDateTime of the first Period must be the same as the StartDateTime of the second Period.Explanatory Note: This Composite is named PeriodWithoutFlags to disambiguate it from the basic Period Composite. */
interface _PeriodWithoutFlags extends BaseType {
	/** A Composite containing details of the Date and Place of an Event that marks the end of the Period (in ISO 8601 format: YYYY-MM-DD). The EndDate must not be earlier than the StartDate if both are provided. StartDate and EndDate are deprecated and StartDateTime/EndDateTime should be used instead. DDEX advises that StartDate and EndDate may be removed at a future date and therefore recommends against using them. */
	EndDate?: EventDateWithCurrentTerritory;
	/** A Composite containing details of the DateTime and Place of an Event that marks the end of the Period (in ISO 8601 format: YYYY-MM-DDThh:mm:ss). The EndDateTime must not be earlier than the StartDateTime if both are provided. */
	EndDateTime?: EventDateTimeWithoutFlags;
	/** A Composite containing details of the Date and Place of an Event that marks the beginning of the Period (in ISO 8601 format: YYYY-MM-DD). The StartDate must be no later than the EndDate if both are provided. StartDate and EndDate are deprecated and StartDateTime/EndDateTime should be used instead. DDEX advises that StartDate and EndDate may be removed at a future date and therefore recommends against using them. */
	StartDate?: EventDateWithCurrentTerritory;
	/** A Composite containing details of the DateTime and Place of an Event that marks the beginning of the Period (in ISO 8601 format: YYYY-MM-DDThh:mm:ss). The StartDateTime must be no later than the EndDateTime if both are provided. */
	StartDateTime?: EventDateTimeWithoutFlags;
}
export interface PeriodWithoutFlags extends _PeriodWithoutFlags { constructor: { new(): PeriodWithoutFlags }; }
export var PeriodWithoutFlags: { new(): PeriodWithoutFlags };

/** A Composite containing details about a Period of Time with a mandatory StartDate or StartDateTime.Explanatory Note: This Composite is named PeriodWithStartDate to disambiguate it from the basic Period Composite. */
interface _PeriodWithStartDate extends BaseType {
	/** A Composite containing details of the Date and Place of an Event that marks the end of the Period (in ISO 8601 format: YYYY-MM-DD). The EndDate must not be earlier than the StartDate if both are provided. StartDate and EndDate are deprecated and StartDateTime/EndDateTime should be used instead. DDEX advises that StartDate and EndDate may be removed at a future date and therefore recommends against using them. */
	EndDate?: EventDateWithCurrentTerritory;
	/** A Composite containing details of the DateTime and Place of an Event that marks the end of the Period (in ISO 8601 format: YYYY-MM-DDThh:mm:ss). The EndDateTime must not be earlier than the StartDateTime if both are provided. */
	EndDateTime?: EventDateTimeWithoutFlags;
	/** A Composite containing details of the Date and Place of an Event that marks the beginning of the Period (in ISO 8601 format: YYYY-MM-DD). The StartDate must be no later than the EndDate if both are provided. StartDate and EndDate are deprecated and StartDateTime/EndDateTime should be used instead. DDEX advises that StartDate and EndDate may be removed at a future date and therefore recommends against using them. */
	StartDate: EventDateWithCurrentTerritory;
	/** A Composite containing details of the DateTime and Place of an Event that marks the beginning of the Period (in ISO 8601 format: YYYY-MM-DDThh:mm:ss). The StartDateTime must be no later than the EndDateTime if both are provided. */
	StartDateTime: EventDateTimeWithoutFlags;
}
export interface PeriodWithStartDate extends _PeriodWithStartDate { constructor: { new(): PeriodWithStartDate }; }
export var PeriodWithStartDate: { new(): PeriodWithStartDate };

/** A Composite containing details of physical returns. */
interface _PhysicalReturns extends BaseType {
	/** A Date which is the latest one for physical returns (in ISO 8601 format: YYYY-MM-DD). */
	LatestDateForPhysicalReturns?: string;
	/** The Flag indicating whether physical returns are allowed (=true) or not (=false). */
	PhysicalReturnsAllowed: boolean;
}
export interface PhysicalReturns extends _PhysicalReturns { constructor: { new(): PhysicalReturns }; }
export var PhysicalReturns: { new(): PhysicalReturns };

/** A Composite containing details of a PLine. */
interface _PLine extends BaseType {
	/** A Territory to which the PLine applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Language and script of the PLineText as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** The Name of the company releasing the Creation. This may be an owner or a Licensee of the Creation. */
	PLineCompany?: string;
	/** The text of the PLine. */
	PLineText: string;
	/** The Year of the PLine. */
	Year?: string;
}
export interface PLine extends _PLine { constructor: { new(): PLine }; }
export var PLine: { new(): PLine };

/** A Composite containing details of a Descriptor that precedes the display artist name when multiple display artist names are given. */
interface _Prefix extends Primitive._string {
	/** The Language and script of the Prefix as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
}
export interface Prefix extends _Prefix { constructor: { new(): Prefix }; }
export var Prefix: { new(): Prefix };

/** A Composite containing details of a Price. */
interface _Price extends Primitive._number {
	/** The Currency of the Price (represented by an ISO 4217 CurrencyCode). This is represented in an XML schema as an XML Attribute. */
	CurrencyCode: avs.CurrencyCode;
}
export interface Price extends _Price { constructor: { new(): Price }; }
export var Price: { new(): Price };

/** A Composite containing details of a Price. */
interface _PriceInformation extends BaseType {
	/** The Namespace of the PriceInformationType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A Type of the Price. This is represented in an XML schema as an XML Attribute. If no value is provided, a StandardRetailPrice is assumed. */
	PriceType: avs.PriceInformationType;
	/** A UserDefined value of the PriceInformationType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
	/** A Composite containing details of a wholesale Price for a single unit, which informs the informs the DSP of the Price the Release should be offered at. Note that the size of a bulk order is defined in the contract between MessageSender and the MessageRecipient. This element should not be combined with PriceType. */
	BulkOrderWholesalePricePerUnit?: Price;
	/** A Composite containing further details of the Price, including a Price code that informs the DSP of the Price the Release should be offered at, often in combination with a rate card. This element should not be combined with WholesalePricePerUnit or BulkOrderWholesalePricePerUnit.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/deals-and-commercial-aspects/price-information */
	PriceCode?: PriceType;
	/** A Composite containing details of a suggested retail Price. */
	SuggestedRetailPrice?: Price;
	/** A Composite containing details of a wholesale Price for a single unit of Usage, which informs the informs the DSP of the Price the Release should be offered at. Note that this Price applies to all UseTypes referenced in a DealTerm Composite. This element should not be combined with PriceType. */
	WholesalePricePerUnit?: Price;
}
export interface PriceInformation extends _PriceInformation { constructor: { new(): PriceInformation }; }
export var PriceInformation: { new(): PriceInformation };

/** A Composite containing details of a PriceType. */
interface _PriceType extends Primitive._string {
	/** The Namespace of the PriceType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
}
export interface PriceType extends _PriceType { constructor: { new(): PriceType }; }
export var PriceType: { new(): PriceType };

/** A Composite containing details of a PromotionalCode. */
interface _PromotionalCode extends Primitive._string {
	/** The Namespace of the PromotionalCode. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
}
export interface PromotionalCode extends _PromotionalCode { constructor: { new(): PromotionalCode }; }
export var PromotionalCode: { new(): PromotionalCode };

/** A Composite containing details of a ProprietaryIdentifier. */
interface _ProprietaryId extends Primitive._string {
	/** The Namespace of the ProprietaryIdentifier. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
}
export interface ProprietaryId extends _ProprietaryId { constructor: { new(): ProprietaryId }; }
export var ProprietaryId: { new(): ProprietaryId };

/** An Identifier from a scheme which is proprietary to a particular Organization.Example: A CatalogNumber issued by a record company.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-identifiers-and-iso-codes-lists/communication-of-identifiers-in-ddex-messagesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-identifiers-and-iso-codes-lists/avoiding-the-use-of-proprietary-identifiersFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-identifiers-and-iso-codes-lists/limitations-of-proprietary-identifiers */
interface _ProprietaryIdentifier extends BaseType {}
export interface ProprietaryIdentifier extends _ProprietaryIdentifier { constructor: { new(): ProprietaryIdentifier }; }
export var ProprietaryIdentifier: { new(): ProprietaryIdentifier };

/** A Composite containing details of a DDEX Release to be purged. */
interface _PurgedRelease extends BaseType {
	/** A Composite containing details of a Contributor to the Release.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	Contributor?: DetailedResourceContributor[];
	/** A Composite containing details of ReleaseIds. If available, a GRid has to be used. If the Release is an abstraction of a complete PhysicalProduct (such as a CD Album), the ICPN of the PhysicalProduct may be used instead. */
	ReleaseId?: ReleaseId;
	/** A Composite containing details of a Title of the Release. */
	Title?: Title[];
}
export interface PurgedRelease extends _PurgedRelease { constructor: { new(): PurgedRelease }; }
export var PurgedRelease: { new(): PurgedRelease };

interface _PurgeReleaseMessageType extends BaseType {
	/** The Identifier of the Version of the AllowedValueSets used for the Message. This is represented in an XML schema as an XML Attribute. */
	AvsVersionId: string;
	/** The Language and script for the Elements of this Message as defined in IETF RfC 5646. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** The MessageHeader for the PurgeReleaseMessage. */
	MessageHeader: MessageHeader;
	/** A Composite containing details of a DDEX Release to be purged. */
	PurgedRelease: PurgedRelease;
}
interface PurgeReleaseMessageType extends _PurgeReleaseMessageType { constructor: { new(): PurgeReleaseMessageType }; }

type PurgeReleaseMessageTypeLanguageAndScriptCodeType = string;
type _PurgeReleaseMessageTypeLanguageAndScriptCodeType = Primitive._string;

/** A Composite containing details of a Purpose. */
interface _Purpose extends avs._Purpose {
	/** The Namespace of the Purpose. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the Purpose. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface Purpose extends _Purpose { constructor: { new(): Purpose }; }
export var Purpose: { new(): Purpose };

/** A Composite containing details of a Raga. */
interface _Raga extends Primitive._string {
	/** A Territory to which the Raga applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
}
export interface Raga extends _Raga { constructor: { new(): Raga }; }
export var Raga: { new(): Raga };

/** A Composite containing details of a RatingAgency. */
interface _RatingAgency extends avs._RatingAgency {
	/** The Namespace of the RatingAgency. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the RatingAgency. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface RatingAgency extends _RatingAgency { constructor: { new(): RatingAgency }; }
export var RatingAgency: { new(): RatingAgency };

/** A Composite containing details of a RatingReason. */
interface _RatingReason extends avs._RatingReason {
	/** The Namespace of the RatingReason. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the RatingReason. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface RatingReason extends _RatingReason { constructor: { new(): RatingReason }; }
export var RatingReason: { new(): RatingReason };

/** A Composite containing details of a Reason. */
interface _Reason extends Primitive._string {
	/** The Language and script of the Reason as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
}
export interface Reason extends _Reason { constructor: { new(): Reason }; }
export var Reason: { new(): Reason };

/** A Composite containing details of a Type of Resource based on its content, intended audience, format or technical characteristics. */
interface _RecordingFormat extends avs._RecordingFormat {
	/** The Namespace of the recording format. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the recording format. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface RecordingFormat extends _RecordingFormat { constructor: { new(): RecordingFormat }; }
export var RecordingFormat: { new(): RecordingFormat };

/** A Composite containing details of a PartyRelatedPartyReference for the case where one Party is related to another one. */
interface _RelatedParty extends BaseType {
	/** A Reference for a related Party (specific to this Message). This is a LocalPartyAnchorReference starting with the letter P. */
	PartyRelatedPartyReference: string;
	/** A Type of relationship between two Parties. */
	PartyRelationshipType: PartyRelationshipType;
}
export interface RelatedParty extends _RelatedParty { constructor: { new(): RelatedParty }; }
export var RelatedParty: { new(): RelatedParty };

type RelatedPartyPartyRelatedPartyReferenceType = string;
type _RelatedPartyPartyRelatedPartyReferenceType = Primitive._string;

/** A Composite containing details of a Release (or a PhysicalProduct or a DigitalProduct derived from such a Release) which is related to a Resource, Release or Product. */
interface _RelatedRelease extends BaseType {
	/** A Composite containing the Name to be used by a DSP when presenting Artist details of the Release to a Consumer.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/communicating-displayartists-and-displayartistnameFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/displayartistnames-for-releases-and-resourcesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	DisplayArtistName?: DisplayArtistNameWithOriginalLanguage[];
	/** A Composite containing details of a Title of the Release as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. */
	DisplayTitle?: DisplayTitle[];
	/** A Composite containing details of a Title of the Release as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. One such element is required for each DisplayTitle element and its content typically provides the same information as the concatenation of the DisplayTitle's sub-elements. */
	DisplayTitleText?: DisplayTitleText[];
	/** A Composite containing details of a FormalTitle of the Release. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	FormalTitle?: DisplayTitle[];
	/** A Composite containing details of a GroupingTitle of the Release. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	GroupingTitle?: DisplayTitle[];
	/** A Composite containing details of the Date and Place of the Event in which the collection of tracks for the Release (e.g. the equivalent physical album on vinyl) was or will be first made available for Usage, whether for physical or electronic/online distribution (in ISO 8601 format: YYYY-MM-DD). */
	OriginalReleaseDate?: EventDateWithoutFlags;
	/** A Composite containing details of the Date and Place of the Event in which the related Release was or will be first made available for Usage in its current form, whether for physical or electronic/online distribution (in ISO 8601 format: YYYY-MM-DD). */
	ReleaseDate?: EventDateWithoutFlags;
	/** A Composite containing details of ReleaseIds. If available, a GRid shall always to be used. If the Release is an abstraction of a complete PhysicalProduct (such as a CD Album), the ICPN of the PhysicalProduct may be used instead. */
	ReleaseId: ReleaseId;
	/** A Reference for a label of the Release (specific to this Message). This is a LocalPartyAnchorReference starting with the letter P. */
	ReleaseLabelReference?: ReleaseLabelReference[];
	/** A Composite containing details of the Type of the relationship between the two Releases. */
	ReleaseRelationshipType: ReleaseRelationshipType;
}
export interface RelatedRelease extends _RelatedRelease { constructor: { new(): RelatedRelease }; }
export var RelatedRelease: { new(): RelatedRelease };

/** A Composite containing details of a ResourceRelatedResourceReference for the case where one Resource is related to another one. */
interface _RelatedResource extends BaseType {
	/** A Composite containing details of ResourceIds, which allows referencing a related Resource that is not in this message. If neither a Reference nor a ResourceId is provided, the RelatedResource composite indicates the existence of such a related Resource without identifying it. */
	ResourceId?: ResourceId;
	/** A Reference for a related Resource (specific to this Message). This is a LocalResourceAnchorReference starting with the letter A. If neither a Reference nor a ResourceId is provided, the RelatedResource composite indicates the existence of such a related Resource without identifying it. */
	ResourceRelatedResourceReference?: string;
	/** A Type of relationship between two Resources. */
	ResourceRelationshipType: avs.ResourceRelationshipType;
	/** A Composite containing details of a StartTime and/or a Duration of the related Resource. */
	Timing?: Timing[];
}
export interface RelatedResource extends _RelatedResource { constructor: { new(): RelatedResource }; }
export var RelatedResource: { new(): RelatedResource };

type RelatedResourceResourceRelatedResourceReferenceType = string;
type _RelatedResourceResourceRelatedResourceReferenceType = Primitive._string;

/** A Composite containing details of a DDEX Release. */
interface _Release extends BaseType {
	/** The Language and script for the Elements of the Release as defined in IETF RfC 5646. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Composite containing details of the AdministratingRecordCompany for the Release. */
	AdministratingRecordCompany?: AdministratingRecordCompany[];
	/** A Composite containing details of a rating for the Release. */
	AvRating?: AvRating[];
	/** A Composite containing details of the CLine for the Release. */
	CLine?: CLine[];
	/** A Type of the Release indicating the contribution of GenerativeAI. */
	ContainsAI?: avs.ContainsAI;
	/** A Composite containing an Annotation which acknowledges record companies and/or other Parties giving permission for guests Artists or others featured on the Release. */
	CourtesyLine?: CourtesyLine[];
	/** A deity name relating to the Release. */
	Deity?: Deity[];
	/** A Composite containing details of the DisplayArtist for the Release. The DisplayArtist may be described through Name, Identifier and Roles.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/communicating-displayartists-and-displayartistnameFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/displayartistnames-for-releases-and-resourcesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	DisplayArtist: DisplayArtist[];
	/** A Composite containing the Name to be used by a DSP when presenting Artist details of the Release to a Consumer.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/communicating-displayartists-and-displayartistnameFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/displayartistnames-for-releases-and-resourcesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	DisplayArtistName: DisplayArtistNameWithOriginalLanguage[];
	/** A Composite containing details of a Genre considered appropriate for marketing the Release by the publishing record company often in conjunction with the display artist(s). */
	DisplayGenre: GenreWithTerritory[];
	/** A Composite containing details of a Title of the Release as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. */
	DisplayTitle: DisplayTitle[];
	/** A Composite containing details of a Title of the Release as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. One such element is required for each DisplayTitle element and its content typically provides the same information as the concatenation of the DisplayTitle's sub-elements. */
	DisplayTitleText: DisplayTitleText[];
	/** The sum of the Durations of all Resources contained in the Release (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). */
	Duration?: string;
	/** A Composite containing details of promotional or other material related to the Release. */
	ExternalResourceLink?: ExternalResourceLink[];
	/** A Composite containing details of a FormalTitle of the Release. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	FormalTitle?: DisplayTitle[];
	/** A Composite containing details of a GroupingTitle of the Release. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	GroupingTitle?: DisplayTitle[];
	/** A Description containing an explanation that is required if not all the Tracks are eligible for HiResMusic (e.g. if some tracks were up-sampled to 96 kHz/24 bit from a 44.1 kHz/24 bit source during mastering). */
	HiResMusicDescription?: string;
	/** The Flag indicating whether the Release meets the criteria to carry the HiResMusic logo, provided the MessageRecipient meets all the other requirements to use it (note that an album with a majority of tracks being eligible but the remainder not being eligible can still carry the logo) (=true) or not (=false). */
	IsHiResMusic?: boolean;
	/** The Flag indicating whether the Release is a multiartist Compilation (=true) or not (=false). */
	IsMultiArtistCompilation?: boolean;
	/** A Flag indicating whether the Release is a single-artist Compilation (=true) or not (=false). If this flag is set, the Release would typically be expected to be part of the discography of the main artist of the Release. */
	IsSingleArtistCompilation?: boolean;
	/** The Flag indicating whether the Release is a Soundtrack (=true) or not (=false). */
	IsSoundtrack?: boolean;
	/** A Composite containing details of a Description of the Release containing Keywords. */
	Keywords?: KeywordsWithTerritory[];
	/** A Composite containing a Comment about the promotion and marketing of the Release. */
	MarketingComment?: MarketingComment[];
	/** A Composite containing details of the Date and Place of the Event in which the collection of tracks for the Release (e.g. the equivalent physical album on vinyl) was or will be first made available for Usage, whether for physical or electronic/online distribution (in ISO 8601 format: YYYY[-MM[-DD]]). This Element is for display and cataloguing purposes only. */
	OriginalReleaseDate?: EventDateWithDefault[];
	/** A Composite containing details of the classification of the Release according to advice which it carries about the level of explicitness or offensiveness of its content. */
	ParentalWarningType?: ParentalWarningTypeWithStandard[];
	/** A Composite containing details of the PLine for the Release. */
	PLine?: PLine[];
	/** A Description of the melodic mode of a MusicalWork in the Release. */
	Raga?: Raga[];
	/** A Composite containing details of a Release (or a PhysicalProduct or a DigitalProduct derived from such a Release) which is related to this Release. */
	RelatedRelease?: RelatedRelease[];
	/** A Composite containing details of a Resource which is related to this Release. */
	RelatedResource?: RelatedResource[];
	/** A Composite containing details of the Date and Place of the Event in which the Release was or will be first made available for Usage in its current form, whether for physical or electronic/online distribution (in ISO 8601 format: YYYY[-MM[-DD]]). This Element is for display and cataloguing purposes only. */
	ReleaseDate?: EventDateWithDefault[];
	/** A Composite containing details of ReleaseIds. If available, a GRid has to be used. If the Release is an abstraction of a complete PhysicalProduct (such as a CD Album), the ICPN of the PhysicalProduct may be used instead. */
	ReleaseId: ReleaseId;
	/** A Reference for a label of the Release (specific to this Message). This is a LocalPartyAnchorReference starting with the letter P. */
	ReleaseLabelReference: ReleaseLabelReferenceWithParty[];
	/** The Identifier (specific to the Message) of the Release. Used to link the Release to one or more Deal(s). This is a LocalReleaseAnchor starting with the letter R. */
	ReleaseReference: string;
	/** A Composite containing details of the form in which a ReleaseCreator anticipates offering the Release to Consumers. The RelaseType is a marketing term and more than one value may be provided.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-releaseresourcework-metadata/release-types-for-trackreleases */
	ReleaseType: ReleaseTypeForReleaseNotification[];
	/** A Reference for a set of visibility dates (specific to this Message) that applies to this Release. This defines when the Release can be shown to Consumers, not when a Consumer can get access to the Release. This is a LocalVisibilityAnchorReference starting with the letter V. */
	ReleaseVisibilityReference?: string[];
	/** A Composite containing details of a group of some or all of the Resources in the Release. ResourceGroups are used to signal groupings or sequences of Resources within a Release. Examples include individual carriers in a multi-carrier Release or classical Work groupings as well as the default order of Resources within a Release. ResourceGroups are typically not used with Releases that contain only one primary Resource such as TrackReleases.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-releaseresourcework-metadata/sequencing-resources */
	ResourceGroup: ResourceGroup;
	/** A Composite containing details of a Synopsis of the Release. */
	Synopsis?: SynopsisWithTerritory[];
	/** A Description of the rhythmic pattern of a MusicalWork in the Release. */
	Tala?: Tala[];
	/** A URL of a sub-site or channel in the DSP’s system, where the Release should be made available to Consumers. */
	TargetURL?: string;
	/** A Composite containing details of a Type of Version given by the releasing party to characterise and differentiate one Release from another with identical or similar Title metadata. VersionTypes may be used for disambiguating a Release that has been derived from another Release by using the value EditedVersion. EditedVersion value is often combined with another VersionType such as RadioVersion. */
	VersionType?: VersionType[];
}
export interface Release extends _Release { constructor: { new(): Release }; }
export var Release: { new(): Release };

/** A Composite containing details of Release administration. */
interface _ReleaseAdmin extends BaseType {
	/** A textual Description of the group of people that are to be given access to the DSP’s system. This information is auxiliary to the ReleaseAdminId element, which is the authoritative source of information for the DSP. */
	PersonnelDescription?: string;
	/** An Identifier specified by the MessageSender that identifies a group of record company personnel to be granted access to the MessageRecipient’s systems to administer the Release. Note that the communication of user access credentials is out of scope for the NewReleaseMessage. */
	ReleaseAdminId: string;
	/** A textual Description indicating which system a person in the group identified by the Release is allowed to access. */
	SystemDescription?: string[];
}
export interface ReleaseAdmin extends _ReleaseAdmin { constructor: { new(): ReleaseAdmin }; }
export var ReleaseAdmin: { new(): ReleaseAdmin };

/** A Composite containing details of one or more Deals pertaining to one or more Releases. */
interface _ReleaseDeal extends BaseType {
	/** A Composite containing details of a Deal governing the Usage of all Releases identified in the ReleaseDeal Composite.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/deals-and-commercial-aspects/no-takedown-in-initial-deal */
	Deal: Deal[];
	/** The Identifier (specific to the Message) of a Release in the Deal. This is a LocalReleaseAnchorReference starting with the letter R. */
	DealReleaseReference: string[];
}
export interface ReleaseDeal extends _ReleaseDeal { constructor: { new(): ReleaseDeal }; }
export var ReleaseDeal: { new(): ReleaseDeal };

type ReleaseDealDealReleaseReferenceType = string;
type _ReleaseDealDealReleaseReferenceType = Primitive._string;

/** A Composite containing details of a ReleaseId. If available, a GRid should always to be used. If the Release is an abstraction of a complete PhysicalProduct (such as a CD Album), the ICPN of the PhysicalProduct may be used instead. */
interface _ReleaseId extends BaseType {
	/** A Composite containing details of the CatalogNumber of the Release. */
	CatalogNumber?: CatalogNumber;
	/** The GRid identifying the Release. This is the preferred Element and is mandatory if a GRid is available. A GRid comprises four parts: the xs:string 'A1', followed by five alphanumeric characters, ten alphanumeric characters and and one alphanumeric character. DDEX will enforce the syntax [a-zA-Z0-9]{18} in the future. */
	GRid?: string;
	/** An ICPN used as proxy for identification of the Release. If the Release is an abstraction of a PhysicalProduct, this may be the ICPN identifying the complete PhysicalProduct. An ICPN can be a UPC, EAN, JAN or any other bar code identifying, for example, the abstracted PhysicalProduct. */
	ICPN?: string;
	/** A Composite containing details of a ProprietaryIdentifier of the Release. */
	ProprietaryId?: ProprietaryId[];
}
export interface ReleaseId extends _ReleaseId { constructor: { new(): ReleaseId }; }
export var ReleaseId: { new(): ReleaseId };

/** A Composite containing details of a Reference to a label of a specific Release. */
interface _ReleaseLabelReference extends _ddex_LocalPartyAnchorReference {
	/** A Territory to which the LabelName applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** A Type of Label. This is represented in an XML schema as an XML Attribute. */
	LabelType: avs.LabelType;
	/** The Language and script of the LabelName as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** The Namespace of the LabelType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the LabelType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface ReleaseLabelReference extends _ReleaseLabelReference { constructor: { new(): ReleaseLabelReference }; }
export var ReleaseLabelReference: { new(): ReleaseLabelReference };

type ReleaseLabelReferenceLanguageAndScriptCodeType = string;
type _ReleaseLabelReferenceLanguageAndScriptCodeType = Primitive._string;

/** A Composite containing details of a Reference to a label of a specific Release.Explanatory Note: This Composite is named ReleaseLabelReferenceWithParty to disambiguate it from the basic ReleaseLabelReference Composite. */
interface _ReleaseLabelReferenceWithParty extends _ddex_LocalPartyAnchorReference {
	/** A Party who is allowed to administer a Release on a ReleaseDistributor’s system. ReleaseCreator and ReleaseDistributor shall agree what the access rules for those people are and the exchange of username and password (or other means of authentication) is left to ReleaseCreator and ReleaseDistributor. This is represented in an XML schema as an XML Attribute. */
	AccessControlParty: string;
	/** A Territory to which the LabelName applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** A Type of Label. This is represented in an XML schema as an XML Attribute. */
	LabelType: avs.LabelType;
	/** The Language and script of the LabelName as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** The Namespace of the LabelType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the LabelType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface ReleaseLabelReferenceWithParty extends _ReleaseLabelReferenceWithParty { constructor: { new(): ReleaseLabelReferenceWithParty }; }
export var ReleaseLabelReferenceWithParty: { new(): ReleaseLabelReferenceWithParty };

type ReleaseLabelReferenceWithPartyLanguageAndScriptCodeType = string;
type _ReleaseLabelReferenceWithPartyLanguageAndScriptCodeType = Primitive._string;

type ReleaseLanguageAndScriptCodeType = string;
type _ReleaseLanguageAndScriptCodeType = Primitive._string;

/** A Composite containing details of one or more Releases. */
interface _ReleaseList extends BaseType {
	/** A Composite containing details of a DDEX clip Release. */
	ClipRelease?: ClipRelease[];
	/** A Composite containing details of a DDEX Release. */
	Release?: Release;
	/** A Composite containing details of a DDEX TrackRelease. */
	TrackRelease?: TrackRelease[];
}
export interface ReleaseList extends _ReleaseList { constructor: { new(): ReleaseList }; }
export var ReleaseList: { new(): ReleaseList };

/** A Composite containing details of a ReleaseRelationshipType, e.g. between an AudioClipRelease and a VideoClipRelease. */
interface _ReleaseRelationshipType extends avs._ReleaseRelationshipType {
	/** The Namespace of the ReleaseRelationshipType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the ReleaseRelationshipType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface ReleaseRelationshipType extends _ReleaseRelationshipType { constructor: { new(): ReleaseRelationshipType }; }
export var ReleaseRelationshipType: { new(): ReleaseRelationshipType };

type ReleaseReleaseReferenceType = string;
type _ReleaseReleaseReferenceType = Primitive._string;

type ReleaseReleaseVisibilityReferenceType = string;
type _ReleaseReleaseVisibilityReferenceType = Primitive._string;

/** A Composite containing details of a ReleaseType.Explanatory Note: This Composite is named ReleaseTypeForReleaseNotification to disambiguate it from the basic ReleaseType Composite. The name indicates that it is ERN specific. */
interface _ReleaseTypeForReleaseNotification extends avs._ReleaseType_ERN4 {
	/** The Namespace of the ReleaseType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the ReleaseType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface ReleaseTypeForReleaseNotification extends _ReleaseTypeForReleaseNotification { constructor: { new(): ReleaseTypeForReleaseNotification }; }
export var ReleaseTypeForReleaseNotification: { new(): ReleaseTypeForReleaseNotification };

/** A Composite containing details of Dates specifying when a Release can be shown to Consumers. */
interface _ReleaseVisibility extends BaseType {
	/** A Flag indicating whether a DSP shall show the availability dates to Consumers (=false) or not (=true). Absence of a this Flag means that no restriction is communicated. This is represented in an XML schema as an XML Attribute. */
	DoNotDisplayDates: boolean;
	/** A DateTime on which an audio or video clip (of type preview only) is made first available for display (it overrides the generic ReleaseDisplayStartDate if supplied). This may only be used if there is no TrackRelease composite in the NewReleaseMessage. If no ClipPreviewStartDateTime is provided, the StartDate for the Deal is used instead. The ClipPreviewStartDateTime shall not be later than the StartDate of the Deal allowing the general availability of the referenced Release. This is a string in ISO 8601 format: YYYY-MM-DDThh:mm:ss. */
	ClipPreviewStartDateTime?: Date;
	/** A DateTime on which the cover art is made first available for display (it overrides the generic ReleaseDisplayStartDate if supplied). If no CoverArtPreviewStartDateTime is provided, the StartDate for the Deal is used instead. The CoverArtPreviewStartDateTime shall not be later than the StartDate of the Deal allowing the general availability of the referenced Release. This is a string in ISO 8601 format: YYYY-MM-DDThh:mm:ss. */
	CoverArtPreviewStartDateTime?: Date;
	/** A Territory in which the visibility dates do not apply. Either this Element or Territory must be present, but not both. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. */
	ExcludedTerritoryCode?: CurrentTerritoryCode[];
	/** A DateTime on which the full Track list is made first available for display (it overrides the generic ReleaseDisplayStartDate if supplied). If no TrackListingPreviewStartDateTime is provided, the StartDate for the Deal is used instead. The TrackListingPreviewStartDateTime shall not be later than the StartDate of the Deal allowing the general availability of the referenced Release. This element is not applicable on Track Releases. This is a string in ISO 8601 format: YYYY-MM-DDThh:mm:ss. */
	FullTrackListingPreviewStartDateTime?: Date;
	/** A DateTime on which the Release is made first available for display. If no ReleaseDisplayStartDateTime is provided, the StartDate for the Deal is used instead. The ReleaseDisplayStartDateTime may not be later than the StartDate for the Deal. If the MessageRecipient is not able to cater for such granular display policies, the MessageRecipient may be forced to not display any Release information until a much later date. This is a string in ISO 8601 format: YYYY-MM-DDThh:mm:ss. */
	ReleaseDisplayStartDateTime?: Date;
	/** A Territory in which the visibility dates apply. Either this Element or ExcludedTerritory must be present, but not both. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. */
	TerritoryCode?: CurrentTerritoryCode[];
	/** The Identifier (specific to the Message) of the visibility date. This is a LocalVisibilityAnchor starting with the letter V. */
	VisibilityReference: string;
}
export interface ReleaseVisibility extends _ReleaseVisibility { constructor: { new(): ReleaseVisibility }; }
export var ReleaseVisibility: { new(): ReleaseVisibility };

type ReleaseVisibilityVisibilityReferenceType = string;
type _ReleaseVisibilityVisibilityReferenceType = Primitive._string;

/** A Composite containing details of a ResourceContainedResourceReference for the case where one Resource contains another one. */
interface _ResourceContainedResourceReference extends BaseType {
	/** The total Duration of the Resource that has been used in a specified context (this may be less than the total Duration of the Resource) (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). */
	DurationUsed?: string;
	/** A Composite containing details of the Purpose of the usage. */
	Purpose?: Purpose;
	/** A Reference for a Resource (specific to this Message). This is a LocalResourceAnchorReference starting with the letter A. */
	ResourceContainedResourceReference: string;
	/** The start point of the preview given in seconds from the start of the referenced Resource. */
	StartPoint?: number;
}
export interface ResourceContainedResourceReference extends _ResourceContainedResourceReference { constructor: { new(): ResourceContainedResourceReference }; }
export var ResourceContainedResourceReference: { new(): ResourceContainedResourceReference };

/** A Composite containing details of one or more ResourceContainedResourceReferences. */
interface _ResourceContainedResourceReferenceList extends BaseType {
	/** A Composite containing details of a ResourceContainedResourceReference. */
	ResourceContainedResourceReference: ResourceContainedResourceReference[];
}
export interface ResourceContainedResourceReferenceList extends _ResourceContainedResourceReferenceList { constructor: { new(): ResourceContainedResourceReferenceList }; }
export var ResourceContainedResourceReferenceList: { new(): ResourceContainedResourceReferenceList };

type ResourceContainedResourceReferenceResourceContainedResourceReferenceType = string;
type _ResourceContainedResourceReferenceResourceContainedResourceReferenceType = Primitive._string;

/** A Composite containing details of a StudioRole. */
interface _ResourceContributorRole extends avs._ResourceContributorRole {
	/** The Namespace of the StudioRole. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the StudioRole. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface ResourceContributorRole extends _ResourceContributorRole { constructor: { new(): ResourceContributorRole }; }
export var ResourceContributorRole: { new(): ResourceContributorRole };

/** A Composite containing details of a ResourceGroup. ResourceGroups are used to signal groupings or sequences of Resources within a Release. Examples include individual Carriers in a multi-carrier Release or classical Work groupings as well as the default order of Resources within a Release. */
interface _ResourceGroup extends BaseType {
	/** A Composite containing details of a Carrier. */
	CarrierType?: CarrierType[];
	/** A Composite containing details of the DisplayArtist for the ResourceGroup. The DisplayArtist may be described through Name, Identifier and Roles.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/communicating-displayartists-and-displayartistnameFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/displayartistnames-for-releases-and-resourcesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	DisplayArtist?: DisplayArtist[];
	/** A sequence Identifier used for display purposes, consisting of a string that corresponds to the SequenceNumber, e.g. 'Side B' corresponding to '2'. */
	DisplaySequence?: string;
	/** A Composite containing details of a Title of the ResourceGroup as the MessageSender suggests it should be shown to the Consumer. Typically this will apply to 'sub' ResourceGroups within a hierarchy, e.g., different Albums in a Set. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. */
	DisplayTitle?: DisplayTitle[];
	/** A Composite containing details of a Title of the ResourceGroup as the MessageSender suggests it should be shown to the Consumer. Typically this will apply to 'sub' ResourceGroups within a hierarchy, e.g., different Albums in a Set. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. One such element is required for each DisplayTitle element and its content typically provides the same information as the concatenation of the DisplayTitle's sub-elements. */
	DisplayTitleText?: DisplayTitleText[];
	/** The Duration of the ResourceGroup, if it is a SoundRecording or Video (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). */
	Duration?: string;
	/** A Composite containing details of a FormalTitle of the ResourceGroup. Typically this will apply to 'sub' ResourceGroups within a hierarchy, e.g., different Albums in a Set. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	FormalTitle?: DisplayTitle[];
	/** A Composite containing details of a GroupingTitle of the ResourceGroup. Typically this will apply to 'sub' ResourceGroups within a hierarchy, e.g., different Albums in a Set. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	GroupingTitle?: DisplayTitle[];
	/** A Composite containing details of a ReleaseResourceReference (specific to this Message) for a Resource which is linked to this Release. Example:cover art images associated with the ResourceGroup. This LocalAnchorReference is a xs:string starting with the letter A. */
	LinkedReleaseResourceReference?: LinkedReleaseResourceReference[];
	/** A Flag indicating whether a display sequence exists (=true) or not (=false). */
	NoDisplaySequence?: boolean;
	/** A Composite containing details of ReleaseIds of a Release which has the same content as the ResourceGroup. If available, a GRid has to be used. If the Release is an abstraction of a complete PhysicalProduct (such as a CD Album), the ICPN of the PhysicalProduct may be used instead. */
	ReleaseId?: ReleaseId;
	/** A ResourceGroup contained within this ResourceGroup. ResourceGroups are used to signal groupings or sequences of Resources within a Release. Examples include individual Carriers in a multi-carrier Release or classical Work groupings as well as the default order of Resources within a Release.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-releaseresourcework-metadata/sequencing-resources */
	ResourceGroup?: ResourceSubGroup[];
	/** A Composite containing details of a Resource contained in the ResourceGroup. */
	ResourceGroupContentItem?: ResourceGroupContentItem[];
	/** The Identifier (specific to the Message) of a Release which has the same content as the ResourceGroup. This is a LocalReleaseAnchorReference starting with the letter R. */
	ResourceGroupReleaseReference?: string;
	/** The number indicating the logical order of the ResourceGroup within all ResourceGroups at this level. The default value is 1, and the value must be incremented by 1 for each ResourceGroup occurring at a particular level. */
	SequenceNumber?: number;
}
export interface ResourceGroup extends _ResourceGroup { constructor: { new(): ResourceGroup }; }
export var ResourceGroup: { new(): ResourceGroup };

/** A Composite containing details of a Resource which is a ContentItem of a ResourceGroup. */
interface _ResourceGroupContentItem extends BaseType {
	/** A sequence Identifier used for display purposes, consisting of a string that corresponds to the SequenceNumber, e.g. 'Side B' corresponding to '2'. */
	DisplaySequence?: string;
	/** The Flag indicating whether a Resource in a Release is additional to those on the original Release of which this is a Version (=true) or not (=false). If this Element is not provided, it is assumed that this is False. */
	IsBonusResource?: boolean;
	/** The Flag indicating whether a Resource in a Release may be made available to Consumers despite the distribution of the containing Release not having been permitted (=true) or not (=false). If this Element is not provided, it is assumed that this is False. The actual status of a Resource as an InstantGratificationResource is determined in the relevant Deal. */
	IsInstantGratificationResource?: boolean;
	/** A Flag indicating whether a Resource that is only available when the Release is purchased during a pre-order period (delivery is typically at ReleaseDate) (=true) or not (=false). If this Element is not provided, it is assumed that this is False. The actual status of a Resource as an PreOrderIncentiveResource is determined in the relevant Deal. */
	IsPreOrderIncentiveResource?: boolean;
	/** A Composite containing details of a ReleaseResourceReference (specific to this Message) for a Resource which is linked to this ContentItem. Example: an Image or Text associated with a SoundRecording. This LocalAnchorReference is a xs:string starting with the letter A. */
	LinkedReleaseResourceReference?: LinkedReleaseResourceReference[];
	/** A Flag indicating whether a display sequence exists (=true) or not (=false). */
	NoDisplaySequence?: boolean;
	/** A ReleaseResourceReference for the ContentItem (specific to this Message). The LocalAnchorReference in this Composite is a xs:string starting with the letter A. */
	ReleaseResourceReference: string;
	/** The number indicating the logical order of the ContentItem in its ResourceGroup. */
	SequenceNumber?: number;
}
export interface ResourceGroupContentItem extends _ResourceGroupContentItem { constructor: { new(): ResourceGroupContentItem }; }
export var ResourceGroupContentItem: { new(): ResourceGroupContentItem };

type ResourceGroupContentItemReleaseResourceReferenceType = string;
type _ResourceGroupContentItemReleaseResourceReferenceType = Primitive._string;

type ResourceGroupResourceGroupReleaseReferenceType = string;
type _ResourceGroupResourceGroupReleaseReferenceType = Primitive._string;

/** A Composite containing details of ResourceIds. */
interface _ResourceId extends BaseType {
	/** The Flag indicating whether this Identifier is old and has been replaced by a new one (=true) or not (=false). The Flag may only be set to True when the new Identifier is also provided. If the Flag is not set, this Identifier is deemed to be the current one. This is represented in an XML schema as an XML Attribute. */
	IsReplaced: boolean;
	/** A Composite containing details of the CatalogNumber of the Resource. */
	CatalogNumber?: CatalogNumber;
	/** The ISAN (International Standard Audiovisual Number as defined in ISO 15706) for the Resource. An ISAN comprises four blocks of four hexadecimal charaters followed by a check character. DDEX will enforce the syntax [A-F0-9]{12} in the future. */
	ISAN?: string;
	/** The ISBN (International Standard Book Number defined in ISO 2108) for the Resource. An ISBN is a 13-digit number. Pre-2007, ISBNs, which had 10-digits and are now deprecated, are converted by adding the prefix '978' and re-calculating the check character. DDEX will enforce the syntax 97[8-9][0-9]{9}[X0-9] in the future. */
	ISBN?: string;
	/** The ISMN (International Standard Music Number defined in ISO 10957) for the Resource. An ISMN is a thirteen-digit number. Pre-2008 ISMNs, which had 10 characters and are now deprecated, are converted by replacing the initial letter ('M') with '979-0'. DDEX will enforce the syntax 979[0-9]{9}[X0-9] in the future. */
	ISMN?: string;
	/** The ISRC (International Standard Recording Code as defined in ISO 3901) for the Resource. An ISRC comprises four parts: two characters, followed by three alphanumeric characters, then two digits and five digits. DDEX will enforce the syntax [a-zA-Z]{2}[a-zA-Z0-9]{3}[0-9]{7} in the future. */
	ISRC?: string;
	/** The ISSN (International Standard Serial Number defined in ISO 3297) for the Resource. An ISSN comprises two groups of four digits, separated by a hyphen and a control digit. DDEX will enforce the syntax [0-9]{4}-[0-9]{3}[X0-9] in the future. */
	ISSN?: string;
	/** A Composite containing details of a ProprietaryIdentifier of the Resource. */
	ProprietaryId?: ProprietaryId[];
	/** The SICI (Serial Item and Contribution Identifier defined in ANSI/NISO Z39.56-199) for the Resource. DDEX will enforce the syntax [0-9]{4}-[0-9]{3}[X0-9].+ in the future. */
	SICI?: string;
	/** The V-ISAN (Version Identifier of an International Standard Audiovisual Number as defined in ISO 15706-2) for the Resource. A V-ISAN comprises four blocks of four hexadecimal charaters followed by a check character, followed by two further blocks of four hexadecimal characters, followed by a further check character. DDEX will enforce the syntax [A-F0-9]{24} in the future. */
	VISAN?: string;
}
export interface ResourceId extends _ResourceId { constructor: { new(): ResourceId }; }
export var ResourceId: { new(): ResourceId };

/** A Composite containing details of one or more Resources. ResourceList provides a simple means of aggregating Resources without any explicit sequencing or grouping: if that is needed it is provided by the ResourceGroup Composite. */
interface _ResourceList extends BaseType {
	/** A Composite containing details of an Image. */
	Image?: Image[];
	/** A Composite containing details of a SheetMusic. */
	SheetMusic?: SheetMusic[];
	/** A Composite containing details of an item of Software. */
	Software?: Software[];
	/** A Composite containing details of a SoundRecording. */
	SoundRecording?: SoundRecording[];
	/** A Composite containing details of a Text. */
	Text?: Text[];
	/** A Composite containing details of a Video. */
	Video?: Video[];
}
export interface ResourceList extends _ResourceList { constructor: { new(): ResourceList }; }
export var ResourceList: { new(): ResourceList };

/** A Composite containing details of ProprietaryIdentifiers of a Resource. */
interface _ResourceProprietaryId extends BaseType {
	/** The Flag indicating whether this Identifier is old and has been replaced by a new one (=true) or not (=false). The Flag may only be set to True when the new Identifier is also provided. If the Flag is not set, this Identifier is deemed to be the current one. This is represented in an XML schema as an XML Attribute. */
	IsReplaced: boolean;
	/** A Composite containing details of a ProprietaryIdentifier of the Resource. */
	ProprietaryId: ProprietaryId[];
}
export interface ResourceProprietaryId extends _ResourceProprietaryId { constructor: { new(): ResourceProprietaryId }; }
export var ResourceProprietaryId: { new(): ResourceProprietaryId };

/** A Composite containing details of a RightsController for a Resource. RightsControllers are typically described by Name, Identifier and Role(s). */
interface _ResourceRightsController extends BaseType {
	/** The number indicating the order of the RightsController in a group of RightsControllers. This is represented in an XML schema as an XML Attribute. */
	SequenceNumber: number;
	/** A Composite containing details of the kinds of usage for which rights have been delegated. */
	DelegatedUsageRights?: DelegatedUsageRights[];
	/** A Reference for a Party (specific to this Message). This is a LocalPartyAnchorReference starting with the letter P. */
	RightsControllerPartyReference: string;
	/** A role that describes the Party involved in the administration of Rights. */
	RightsControlType?: avs.RightsControllerRole[];
	/** The share of the licensed Rights owned by the RightsController. RightShare information is given as a xs:decimal value with up to 6 digits after the decimal point (e.g. '12.5' represents 12.5%). If no information is given, 100% is assumed.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/general-guidance-on-messages/communication-of-percentages */
	RightSharePercentage?: Percentage;
	/** The Flag indicating whether the RightSharePercentage is unknown (=true) or not (=false). */
	RightShareUnknown?: boolean;
}
export interface ResourceRightsController extends _ResourceRightsController { constructor: { new(): ResourceRightsController }; }
export var ResourceRightsController: { new(): ResourceRightsController };

type ResourceRightsControllerRightsControllerPartyReferenceType = string;
type _ResourceRightsControllerRightsControllerPartyReferenceType = Primitive._string;

/** A Composite containing details of a ResourceGroup that is contained in another ResourceGroup. */
interface _ResourceSubGroup extends BaseType {
	/** A Type of ResourceGroup. This is represented in an XML schema as an XML Attribute. */
	ResourceGroupType: avs.ResourceGroupType;
	/** A Composite containing details of a Carrier. */
	CarrierType?: CarrierType[];
	/** A Composite containing details of the DisplayArtist for the ResourceGroup. The DisplayArtist may be described through Name, Identifier and Roles.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/communicating-displayartists-and-displayartistnameFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/displayartistnames-for-releases-and-resourcesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	DisplayArtist?: DisplayArtist[];
	/** A sequence Identifier used for display purposes, consisting of a string that corresponds to the SequenceNumber, e.g. 'Side B' corresponding to '2'. */
	DisplaySequence?: string;
	/** A Composite containing details of a Title of the ResourceGroup as the MessageSender suggests it should be shown to the Consumer. Typically this will apply to 'sub' ResourceGroups within a hierarchy, e.g., different Albums in a Set. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. */
	DisplayTitle?: DisplayTitle[];
	/** A Composite containing details of a Title of the ResourceGroup as the MessageSender suggests it should be shown to the Consumer. Typically this will apply to 'sub' ResourceGroups within a hierarchy, e.g., different Albums in a Set. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. One such element is required for each DisplayTitle element and its content typically provides the same information as the concatenation of the DisplayTitle's sub-elements. */
	DisplayTitleText?: DisplayTitleText[];
	/** The Duration of the ResourceGroup, if it is a SoundRecording or Video (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). */
	Duration?: string;
	/** A Composite containing details of a FormalTitle of the ResourceGroup. Typically this will apply to 'sub' ResourceGroups within a hierarchy, e.g., different Albums in a Set. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	FormalTitle?: DisplayTitle[];
	/** A Composite containing details of a GroupingTitle of the ResourceGroup. Typically this will apply to 'sub' ResourceGroups within a hierarchy, e.g., different Albums in a Set. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	GroupingTitle?: DisplayTitle[];
	/** A Composite containing details of a ReleaseResourceReference (specific to this Message) for a Resource which is linked to this Release. Example:cover art images associated with the ResourceGroup. This LocalAnchorReference is a xs:string starting with the letter A. */
	LinkedReleaseResourceReference?: LinkedReleaseResourceReference[];
	/** A Flag indicating whether a display sequence exists (=true) or not (=false). */
	NoDisplaySequence?: boolean;
	/** A Composite containing details of ReleaseIds of a Release which has the same content as the ResourceGroup. If available, a GRid has to be used. If the Release is an abstraction of a complete PhysicalProduct (such as a CD Album), the ICPN of the PhysicalProduct may be used instead. */
	ReleaseId?: ReleaseId;
	/** A ResourceGroup contained within this ResourceGroup. ResourceGroups are used to signal groupings or sequences of Resources within a Release. Examples include individual Carriers in a multi-carrier Release or classical Work groupings as well as the default order of Resources within a Release.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-releaseresourcework-metadata/sequencing-resources */
	ResourceGroup?: ResourceSubGroup[];
	/** A Composite containing details of a Resource contained in the ResourceGroup. */
	ResourceGroupContentItem?: ResourceGroupContentItem[];
	/** The Identifier (specific to the Message) of a Release which has the same content as the ResourceGroup. This is a LocalReleaseAnchorReference starting with the letter R. */
	ResourceGroupReleaseReference?: string;
	/** The number indicating the logical order of the ResourceGroup within all ResourceGroups at this level. The default value is 1, and the value must be incremented by 1 for each ResourceGroup occurring at a particular level. */
	SequenceNumber?: number;
}
export interface ResourceSubGroup extends _ResourceSubGroup { constructor: { new(): ResourceSubGroup }; }
export var ResourceSubGroup: { new(): ResourceSubGroup };

type ResourceSubGroupResourceGroupReleaseReferenceType = string;
type _ResourceSubGroupResourceGroupReleaseReferenceType = Primitive._string;

/** A Composite containing details of a rights claim policy. */
interface _RightsClaimPolicy extends BaseType {
	/** A Composite containing details of Conditions. If more than one Condition is specified, then all of them have to be fulfilled (i.e. they are combined using the logical operator AND). */
	Condition?: ConditionForRightsClaimPolicy[];
	/** A Reason why a rights claim policy has been set. */
	RightsClaimPolicyReason?: RightsClaimPolicyReason;
	/** A Type of rights claim policy. */
	RightsClaimPolicyType: avs.RightsClaimPolicyType;
}
export interface RightsClaimPolicy extends _RightsClaimPolicy { constructor: { new(): RightsClaimPolicy }; }
export var RightsClaimPolicy: { new(): RightsClaimPolicy };

/** A Composite containing details of a Reason for a rights claim Policy. */
interface _RightsClaimPolicyReason extends avs._RightsClaimPolicyReason {
	/** The Namespace of the RightsClaimPolicyReason. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the RightsClaimPolicyReason. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface RightsClaimPolicyReason extends _RightsClaimPolicyReason { constructor: { new(): RightsClaimPolicyReason }; }
export var RightsClaimPolicyReason: { new(): RightsClaimPolicyReason };

/** A Composite containing details of a RightsType. */
interface _RightsType extends avs._RightsCoverage {
	/** The Namespace of the RightsType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the RightsType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface RightsType extends _RightsType { constructor: { new(): RightsType }; }
export var RightsType: { new(): RightsType };

/** A Composite containing a SamplingRate and a UnitOfMeasure. */
interface _SamplingRate extends Primitive._number {
	/** The UnitOfMeasure of the SamplingRate. This is represented in an XML schema as an XML Attribute. */
	UnitOfMeasure: avs.UnitOfFrequency;
}
export interface SamplingRate extends _SamplingRate { constructor: { new(): SamplingRate }; }
export var SamplingRate: { new(): SamplingRate };

/** A Composite containing details of a segment of a Resource. */
interface _Segment extends BaseType {
	/** The Duration of the segment (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). */
	Duration: string;
	/** The end time of the segment, measured from the start of the Resource (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). */
	EndTime: string;
	/** The start time of the segment, measured from the start of the Resource (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). */
	StartTime: string;
}
export interface Segment extends _Segment { constructor: { new(): Segment }; }
export var Segment: { new(): Segment };

/** A Composite containing details of a Service run by a Party that is an exception to a Condition. */
interface _ServiceException extends BaseType {
	/** A Composite containing details of an excluded channel provided by the Service. This channel may be specific to an Artist. */
	Channel?: Channel[];
	/** A Composite containing details of the PartyId for the Party. If no Namespace is given, the Identifier is a DdexPartyId (DPID). Note that DPIDs are not normally used to identify Artists, producers or other Creators. */
	PartyId?: DetailedPartyId[];
	/** A Composite containing details of the PartyName(s).Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/lengths-of-artist-namesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/general-guidance-on-messages/field-length-and-precision */
	PartyName?: PartyName[];
	/** A Composite containing a TradingName of the Party.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/lengths-of-artist-namesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/general-guidance-on-messages/field-length-and-precision */
	TradingName?: Name;
	/** A URL for the Service's web site. */
	URL?: string[];
}
export interface ServiceException extends _ServiceException { constructor: { new(): ServiceException }; }
export var ServiceException: { new(): ServiceException };

/** A Composite containing details of a SessionType. */
interface _SessionType extends avs._SessionType {
	/** The Namespace of the SessionType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the SessionType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface SessionType extends _SessionType { constructor: { new(): SessionType }; }
export var SessionType: { new(): SessionType };

/** A Composite containing details of a SheetMusic. */
interface _SheetMusic extends BaseType {
	/** The Flag indicating whether the SheetMusic is provided in addition to the Resources that form part of the Release (=true) or not (=false). If the flag is set to false (or absent) the SheetMusic is part of at least one Release in the message. This is represented in an XML schema as an XML Attribute. */
	IsSupplemental: boolean;
	/** The Language and script for the Elements of the SheetMusic as defined in IETF RfC 5646. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Composite containing details of the CLine for the SheetMusic. */
	CLine?: CLine[];
	/** The Flag indicating whether the SheetMusic contains content that is hidden in some way from the Consumer (=true) or not (=false). */
	ContainsHiddenContent?: boolean;
	/** A Composite containing details of a Contributor to the SheetMusic. */
	Contributor?: Contributor[];
	/** A Composite containing an Annotation which acknowledges record companies and/or other Parties giving permission for Artists or others featured in the SheetMusic. */
	CourtesyLine?: CourtesyLine[];
	/** A Composite containing details of the Date and Place of the Event in which the SheetMusic was created. This is a string with the syntax YYYY[-MM[-DD]]. */
	CreationDate?: EventDateWithoutFlags;
	/** A Composite containing details of the DisplayArtist for the SheetMusic. The DisplayArtist may be described through Name, Identifier and Roles.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/communicating-displayartists-and-displayartistnameFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/displayartistnames-for-releases-and-resourcesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	DisplayArtist?: DisplayArtist[];
	/** A Composite containing the Name to be used by a DSP when presenting Artist details of the Resource to a Consumer.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/communicating-displayartists-and-displayartistnameFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/displayartistnames-for-releases-and-resourcesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	DisplayArtistName: DisplayArtistNameWithOriginalLanguage[];
	/** A Composite containing details of a Title of the SheetMusic as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. */
	DisplayTitle?: DisplayTitle[];
	/** A Composite containing details of a Title of the SheetMusic as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. One such element is required for each DisplayTitle element and its content typically provides the same information as the concatenation of the DisplayTitle's sub-elements. */
	DisplayTitleText?: DisplayTitleText[];
	/** A Composite containing details of the Date and Place of the Event in which the SheetMusic was first published, whether for physical or electronic/online distribution. This is a string with the syntax YYYY[-MM[-DD]]. */
	FirstPublicationDate?: FulfillmentDate[];
	/** A Composite containing details of a FormalTitle of the SheetMusic. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	FormalTitle?: DisplayTitle[];
	/** A Composite containing details of a GroupingTitle of the SheetMusic. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	GroupingTitle?: DisplayTitle[];
	/** The Language of the Lyrics of the SheetMusic as defined in IETF RfC 5646. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. */
	LanguageOfLyrics?: string;
	/** A Composite containing details of the classification of the SheetMusic according to advice which it carries about the level of explicitness or offensiveness of its content. */
	ParentalWarningType?: ParentalWarningTypeWithStandard[];
	/** A Composite containing details of a Release (or a PhysicalProduct or a DigitalProduct derived from such a Release) which is related to current SheetMusic. */
	RelatedRelease?: RelatedRelease[];
	/** A Composite containing details of a ResourceRelatedResourceReference referring to a Resource that is related to the current SheetMusic. */
	RelatedResource?: RelatedResource[];
	/** A Composite containing details of ResourceContainedResourceReferences referring to a Resource that is contained in the current SheetMusic. */
	ResourceContainedResourceReferenceList?: ResourceContainedResourceReferenceList;
	/** A Composite containing details of Identifiers of the SheetMusic. */
	ResourceId: SheetMusicId[];
	/** The Identifier (specific to the Message) of the SheetMusic within the Release which contains it. This is a LocalResourceAnchor starting with the letter A. */
	ResourceReference: string;
	/** A Composite containing details of RightsController of Rights in the SheetMusic. */
	ResourceRightsController?: ResourceRightsController[];
	/** A Composite containing technical details of the SheetMusic.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-binaries/communicating-binaries */
	TechnicalDetails?: TechnicalSheetMusicDetails[];
	/** A Composite containing details of the Type of the SheetMusic. */
	Type: SheetMusicType;
	/** A Composite containing details of a Type of Version given by the releasing party to characterise and differentiate one SheetMusic from another with identical or similar Title metadata. VersionTypes may be used for disambiguating a SheetMusic that has been derived from another SheetMusic by using the value EditedVersion. EditedVersion value is often combined with another VersionType such as RadioVersion. */
	VersionType?: VersionType[];
	/** A Composite containing details of a MusicalWorkId of a MusicalWork used in the SheetMusic. */
	WorkId?: MusicalWorkId[];
	/** A Composite containing details of RightsController of Rights in the Work. */
	WorkRightsController?: WorkRightsController[];
}
export interface SheetMusic extends _SheetMusic { constructor: { new(): SheetMusic }; }
export var SheetMusic: { new(): SheetMusic };

/** A Composite containing details of a SheetMusicCodecType. */
interface _SheetMusicCodecType extends avs._SheetMusicCodecType {
	/** The Namespace of the SheetMusicCodecType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the SheetMusicCodecType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
	/** The Identifier of the Version of the SheetMusicCodecType. This is represented in an XML schema as an XML Attribute. */
	Version: string;
}
export interface SheetMusicCodecType extends _SheetMusicCodecType { constructor: { new(): SheetMusicCodecType }; }
export var SheetMusicCodecType: { new(): SheetMusicCodecType };

/** A Composite containing details of Identifiers of a SheetMusic. */
interface _SheetMusicId extends BaseType {
	/** The Flag indicating whether this Identifier is old and has been replaced by a new one (=true) or not (=false). The Flag may only be set to True when the new Identifier is also provided. If the Flag is not set, this Identifier is deemed to be the current one. This is represented in an XML schema as an XML Attribute. */
	IsReplaced: boolean;
	/** The ISMN (International Standard Music Number defined in ISO 10957) for the SheetMusic. An ISMN is a thirteen-digit number. Pre-2008 ISMNs, which had 10 characters and are now deprecated, are converted by replacing the initial letter ('M') with '979-0'. DDEX will enforce the syntax 979[0-9]{9}[X0-9] in the future. */
	ISMN?: string;
	/** A Composite containing details of a ProprietaryIdentifier of the SheetMusic. */
	ProprietaryId?: ProprietaryId[];
}
export interface SheetMusicId extends _SheetMusicId { constructor: { new(): SheetMusicId }; }
export var SheetMusicId: { new(): SheetMusicId };

type SheetMusicLanguageAndScriptCodeType = string;
type _SheetMusicLanguageAndScriptCodeType = Primitive._string;

type SheetMusicLanguageOfLyricsType = string;
type _SheetMusicLanguageOfLyricsType = Primitive._string;

type SheetMusicResourceReferenceType = string;
type _SheetMusicResourceReferenceType = Primitive._string;

/** A Composite containing details of a SheetMusicType. */
interface _SheetMusicType extends avs._SheetMusicType {
	/** The Namespace of the SheetMusicType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the SheetMusicType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface SheetMusicType extends _SheetMusicType { constructor: { new(): SheetMusicType }; }
export var SheetMusicType: { new(): SheetMusicType };

/** A Composite containing details of an item of Software. */
interface _Software extends BaseType {
	/** The Flag indicating whether the Software is provided in addition to the Resources that form part of the Release (=true) or not (=false). If the flag is set to false (or absent) the Software is part of at least one Release in the message. This is represented in an XML schema as an XML Attribute. */
	IsSupplemental: boolean;
	/** The Language and script for the Elements of the Software as defined in IETF RfC 5646. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Composite containing details of the CLine for the Software. */
	CLine?: CLine[];
	/** The Flag indicating whether the Software contains content that is hidden in some way from the Consumer (=true) or not (=false). */
	ContainsHiddenContent?: boolean;
	/** A Composite containing details of a Contributor to the Software. */
	Contributor?: Contributor[];
	/** A Composite containing an Annotation which acknowledges record companies and/or other Parties giving permission for Artists or others featured in the Software. */
	CourtesyLine?: CourtesyLine[];
	/** A Composite containing details of the Date and Place of the Event in which the Software was created. This is a string with the syntax YYYY[-MM[-DD]]. */
	CreationDate?: EventDateWithoutFlags;
	/** A Composite containing details of the DisplayArtist for the Software. The DisplayArtist may be described through Name, Identifier and Roles.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/communicating-displayartists-and-displayartistnameFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/displayartistnames-for-releases-and-resourcesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	DisplayArtist?: DisplayArtist[];
	/** A Composite containing the Name to be used by a DSP when presenting Artist details of the Resource to a Consumer.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/communicating-displayartists-and-displayartistnameFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/displayartistnames-for-releases-and-resourcesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	DisplayArtistName?: DisplayArtistNameWithOriginalLanguage[];
	/** A Composite containing details of a Title of the Software as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. */
	DisplayTitle?: DisplayTitle[];
	/** A Composite containing details of a Title of the Software as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. One such element is required for each DisplayTitle element and its content typically provides the same information as the concatenation of the DisplayTitle's sub-elements. */
	DisplayTitleText?: DisplayTitleText[];
	/** A Composite containing details of the Date and Place of the Event in which the Software was first published, whether for physical or electronic/online distribution. This is a string with the syntax YYYY[-MM[-DD]]. */
	FirstPublicationDate?: FulfillmentDate[];
	/** A Composite containing details of a FormalTitle of the Software. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	FormalTitle?: DisplayTitle[];
	/** A Composite containing details of a GroupingTitle of the Software. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	GroupingTitle?: DisplayTitle[];
	/** A Composite containing details of the classification of the Software according to advice which it carries about the level of explicitness or offensiveness of its content. */
	ParentalWarningType?: ParentalWarningTypeWithStandard[];
	/** A Composite containing details of the PLine for the Software. */
	PLine?: PLine[];
	/** A Composite containing details of a Release (or a PhysicalProduct or a DigitalProduct derived from such a Release) which is related to current Software. */
	RelatedRelease?: RelatedRelease[];
	/** A Composite containing details of a ResourceRelatedResourceReference referring to a Resource that is related to the current Software. */
	RelatedResource?: RelatedResource[];
	/** A Composite containing details of ResourceContainedResourceReferences referring to a Resource that is contained in the current Software. */
	ResourceContainedResourceReferenceList?: ResourceContainedResourceReferenceList;
	/** A Composite containing details of Identifiers of the Software. */
	ResourceId: ResourceProprietaryId[];
	/** The Identifier (specific to the Message) of the Software within the Release which contains it. This is a LocalResourceAnchor starting with the letter A. */
	ResourceReference: string;
	/** A Composite containing details of RightsController of Rights in the Software. */
	ResourceRightsController?: ResourceRightsController[];
	/** A Composite containing technical details of the Software.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-binaries/communicating-binaries */
	TechnicalDetails?: TechnicalSoftwareDetails[];
	/** A Composite containing details of the Type of the Software. */
	Type: SoftwareType;
	/** A Composite containing details of a Type of Version given by the releasing party to characterise and differentiate one Software from another with identical or similar Title metadata. VersionTypes may be used for disambiguating a Software that has been derived from another Software by using the value EditedVersion. EditedVersion value is often combined with another VersionType such as RadioVersion. */
	VersionType?: VersionType[];
	/** A Composite containing details of a MusicalWorkId of a MusicalWork used in the Software. */
	WorkId?: MusicalWorkId[];
	/** A Composite containing details of RightsController of Rights in the Work. */
	WorkRightsController?: WorkRightsController[];
}
export interface Software extends _Software { constructor: { new(): Software }; }
export var Software: { new(): Software };

type SoftwareLanguageAndScriptCodeType = string;
type _SoftwareLanguageAndScriptCodeType = Primitive._string;

type SoftwareResourceReferenceType = string;
type _SoftwareResourceReferenceType = Primitive._string;

/** A Composite containing details of a SoftwareType. */
interface _SoftwareType extends avs._SoftwareType {
	/** The Namespace of the SoftwareType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the SoftwareType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface SoftwareType extends _SoftwareType { constructor: { new(): SoftwareType }; }
export var SoftwareType: { new(): SoftwareType };

/** A Composite containing details of a SoundRecording. */
interface _SoundRecording extends BaseType {
	/** The Flag indicating whether the SoundRecording is part of the hierarchical structure indicated by the classical release profile variant used for the Message. If the flag is set to false (or absent) the rules for the classical release profile variant do not apply. This is represented in an XML schema as an XML Attribute. */
	ApplyClassicalProfileVariant: boolean;
	/** The Flag indicating whether the SoundRecording is provided in addition to the Resources that form part of the Release (=true) or not (=false). If the flag is set to false (or absent) the SoundRecording is part of at least one Release in the message. This is represented in an XML schema as an XML Attribute. */
	IsSupplemental: boolean;
	/** The Language and script for the Elements of the SoundRecording as defined in IETF RfC 5646. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Reference for a Chapter (specific to this Message). This is a LocalCollectionAnchorReference starting with the letter X. */
	AudioChapterReference?: string[];
	/** A Composite containing details of a Character in the SoundRecording. A Character may be described through Name, Identifier and Roles. */
	Character?: Character[];
	/** A Type of the SoundRecording indicating whether it is a Medley or a Potpourri. */
	CompositeMusicalWorkType?: avs.CompositeMusicalWorkType;
	/** A Type of the SoundRecording indicating the contribution of GenerativeAI. If the value of this element is All, only Contributors of type GenerativeAI shall be specified. If the value of this element is None, no Contributors with AiContribution set to Partly or All shall be specified. */
	ContainsAI?: avs.ContainsAI;
	/** The Flag indicating whether the SoundRecording contains content that is hidden in some way from the Consumer (=true) or not (=false). */
	ContainsHiddenContent?: boolean;
	/** A Composite containing details of a Contributor to the SoundRecording. */
	Contributor?: Contributor[];
	/** A Composite containing an Annotation which acknowledges record companies and/or other Parties giving permission for guests Artists or others featured on the SoundRecording. */
	CourtesyLine?: CourtesyLine[];
	/** A Composite containing details of the Date and Place of the Event in which the SoundRecording was created. This is a string with the syntax YYYY[-MM[-DD]]. */
	CreationDate?: EventDateWithoutFlags;
	/** A deity name relating to the SoundRecording. */
	Deity?: Deity[];
	/** A Flag indicating to a DSP whether the SoundRecording should not be crossfaded from/into another SoundRecording (=true) or not (=false). */
	DisableCrossfade?: boolean;
	/** A Flag indicating to a DSP whether the SoundRecording should not be included in any search results (=true) or not (=false). Note that exclusion from search results implies that the SoundRecording should not appear in any recommendations. */
	DisableSearch?: boolean;
	/** A Composite containing details of the DisplayArtist for the SoundRecording. The DisplayArtist may be described through Name, Identifier and Roles.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/communicating-displayartists-and-displayartistnameFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/displayartistnames-for-releases-and-resourcesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	DisplayArtist: DisplayArtist[];
	/** A Composite containing the Name to be used by a DSP when presenting Artist details of the Resource to a Consumer.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/communicating-displayartists-and-displayartistnameFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/displayartistnames-for-releases-and-resourcesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	DisplayArtistName: DisplayArtistNameWithOriginalLanguage[];
	/** A Role and instrumentation for which a Party is credited. */
	DisplayCredits?: DisplayCredits[];
	/** A Composite containing details of a Title of the SoundRecording as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. */
	DisplayTitle: DisplayTitle[];
	/** A Composite containing details of a Title of the SoundRecording as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. One such element is required for each DisplayTitle element and its content typically provides the same information as the concatenation of the DisplayTitle's sub-elements. */
	DisplayTitleText: DisplayTitleText[];
	/** The Duration of the SoundRecording (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). */
	Duration: string;
	/** A Composite containing details of the Date and Place of the Event in which the SoundRecording was first published, whether for physical or electronic/online distribution. This is a string with the syntax YYYY[-MM[-DD]]. */
	FirstPublicationDate?: FirstPublicationDate[];
	/** A Composite containing details of a FormalTitle of the SoundRecording. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	FormalTitle?: DisplayTitle[];
	/** A Composite containing details of a GroupingTitle of the SoundRecording. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	GroupingTitle?: DisplayTitle[];
	/** A Flag indicating whether the SoundRecording relates to a (human) Vocal Performance that is not merely background vocals (=true) or not (=false). */
	HasForegroundVocalPerformance?: boolean;
	/** A Flag indicating whether the SoundRecording relates to a (human) Vocal Performance (=true) or not (=false). */
	HasVocalPerformance?: boolean;
	/** A Flag indicating whether the SoundRecording is a Cover (=true) or not (=false). This is not legal information, but meant to help Consumers to differentiate originals from covers. */
	IsCover?: boolean;
	/** The Flag indicating whether the SoundRecording meets the criteria to carry the HiResMusic logo, provided the MessageRecipient meets all the other requirements to use it (=true) or not (=false). */
	IsHiResMusic?: boolean;
	/** The Flag indicating whether the SoundRecording is Instrumental (=true) or not (=false). This element is deprecated. DDEX advises that it may be removed at a future date and therefore recommends against using it. */
	IsInstrumental?: boolean;
	/** The Flag indicating whether the SoundRecording is remastered (=true) or not (=false). */
	IsRemastered?: boolean;
	/** The Language of the Performance recorded in the SoundRecording as defined in IETF RfC 5646. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. */
	LanguageOfPerformance?: Language[];
	/** A Composite containing details of a RecordingSession. */
	LocationAndDateOfSession?: LocationAndDateOfSession[];
	/** A Composite containing details of the Date and Place of the Event in which the SoundRecording was originally mastered (in either analogue or digital form). This is a string with the syntax YYYY[-MM[-DD]]. */
	MasteredDate?: EventDateWithoutFlags;
	/** A Composite containing details of the classification of the SoundRecording according to advice which it carries about the level of explicitness or offensiveness of its content. */
	ParentalWarningType?: ParentalWarningTypeWithStandard[];
	/** A Description of the melodic mode of a MusicalWork in the SoundRecording. */
	Raga?: Raga[];
	/** A Composite containing details of a Type of the SoundRecording based on its content, intended audience, format or technical characteristics. */
	RecordingFormat?: RecordingFormat[];
	/** A Composite containing details of a Release (or a PhysicalProduct or a DigitalProduct derived from such a Release) which is related to current SoundRecording. */
	RelatedRelease?: RelatedRelease[];
	/** A Composite containing details of a ResourceRelatedResourceReference referring to a Resource that is related to the current SoundRecording. */
	RelatedResource?: RelatedResource[];
	/** A Composite containing details of the Date and Place of the Event in which the SoundRecording was re-mastered (usually digitally). This is a string with the syntax YYYY[-MM[-DD]]. */
	RemasteredDate?: EventDateWithoutFlags;
	/** The Identifier (specific to the Message) of the SoundRecording within the Release which contains it. This is a LocalResourceAnchor starting with the letter A. */
	ResourceReference: string;
	/** A Composite containing details of RightsController of Rights in the SoundRecording. */
	ResourceRightsController?: ResourceRightsController[];
	/** A Composite containing details of a SoundRecording that has been created based on the same content as the 'main' SoundRecording but specifically for a different encoding such as immersive audio. It can be the same SoundRecording (in accordance with the ISRC standard) but more likely than not will be a different SoundRecording because the sound engineer/producer will be different. If an element in this Composite is not provided, the data is assumed to be the same as for the 'main' SoundRecording. */
	SoundRecordingEdition: SoundRecordingEdition[];
	/** A Description of the rhythmic pattern of a MusicalWork in the SoundRecording. */
	Tala?: Tala[];
	/** A Composite containing details of the Type of the SoundRecording. */
	Type: SoundRecordingType;
	/** A Composite containing details of a Type of Version given by the releasing party to characterise and differentiate one SoundRecording from another with identical or similar Title metadata. VersionTypes may be used for disambiguating a SoundRecording that has been derived from another SoundRecording by using the value EditedVersion. EditedVersion value is often combined with another VersionType such as RadioVersion. */
	VersionType?: VersionType[];
	/** A Composite containing details of a MusicalWorkId of a MusicalWork used in the SoundRecording. */
	WorkId?: MusicalWorkId[];
	/** A Composite containing details of RightsController of Rights in the Work. */
	WorkRightsController?: WorkRightsController[];
}
export interface SoundRecording extends _SoundRecording { constructor: { new(): SoundRecording }; }
export var SoundRecording: { new(): SoundRecording };

type SoundRecordingAudioChapterReferenceType = string;
type _SoundRecordingAudioChapterReferenceType = Primitive._string;

/** A Composite containing details of a clip. */
interface _SoundRecordingClipDetails extends BaseType {
	/** A Type of clip. */
	ClipType: ClipType;
	/** A Composite containing details of a delivery File. */
	DeliveryFile?: AudioDeliveryFile[];
	/** A Type of expression indicating how this should be perceived, e.g. as instruction (meaning that this has to be done to create the clip) or as information (meaning that this has been done to craete the clip). */
	ExpressionType: avs.ExpressionType;
	/** The Identifier (specific to the Message) of the TechnicalSoundRecordingDetails within the Release which contains it. This is a LocalTechnicalResourceDetailsAnchor starting with the letter T. */
	TechnicalResourceDetailsReference: string;
	/** A Composite containing details of a StartTime, EndTime and a Duration of the clip. */
	Timing?: Timing[];
}
export interface SoundRecordingClipDetails extends _SoundRecordingClipDetails { constructor: { new(): SoundRecordingClipDetails }; }
export var SoundRecordingClipDetails: { new(): SoundRecordingClipDetails };

type SoundRecordingClipDetailsTechnicalResourceDetailsReferenceType = string;
type _SoundRecordingClipDetailsTechnicalResourceDetailsReferenceType = Primitive._string;

/** A Composite containing details of a SoundRecordingEdition that has been created based on the same content as the 'main' SoundRecording but specifically for a different encoding such as immersive audio. */
interface _SoundRecordingEdition extends BaseType {
	/** A Composite containing details of a Contributor to the SoundRecordingEdition (but not all other editions). */
	EditionContributor?: EditionContributor[];
	/** A Composite containing details of the PLine for the SoundRecordingEdition. */
	PLine?: PLine[];
	/** A mode in which the SoundRecordingEdition is made, which includes audio channel configurations (mainly for stereo and surround sound) and audio object configurations (mainly for immersive audio). */
	RecordingMode?: avs.RecordingMode;
	/** A Composite containing details of a SoundRecordingId. */
	ResourceId: SoundRecordingId[];
	/** A Composite containing technical details of the SoundRecordingEdition.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-binaries/communicating-binaries */
	TechnicalDetails?: TechnicalSoundRecordingDetails[];
	/** A Type of edition. The Type has to be provided if two SoundRecordingEditions are provided for the same SoundRecording. */
	Type?: avs.EditionType;
}
export interface SoundRecordingEdition extends _SoundRecordingEdition { constructor: { new(): SoundRecordingEdition }; }
export var SoundRecordingEdition: { new(): SoundRecordingEdition };

/** A Composite containing details of SoundRecordingIds. */
interface _SoundRecordingId extends BaseType {
	/** The Flag indicating whether this Identifier is old and has been replaced by a new one (=true) or not (=false). The Flag may only be set to True when the new Identifier is also provided. If the Flag is not set, this Identifier is deemed to be the current one. This is represented in an XML schema as an XML Attribute. */
	IsReplaced: boolean;
	/** A Composite containing details of the CatalogNumber of the SoundRecording. */
	CatalogNumber?: CatalogNumber;
	/** The ISRC (International Standard Recording Code as defined in ISO 3901) for the SoundRecording. An ISRC comprises four parts: two characters, followed by three alphanumeric characters, then two digits and five digits. DDEX will enforce the syntax [a-zA-Z]{2}[a-zA-Z0-9]{3}[0-9]{7} in the future. */
	ISRC?: string;
	/** A Composite containing details of a ProprietaryIdentifier of the SoundRecording (usually one per society involved in the messaging). */
	ProprietaryId?: ProprietaryId[];
}
export interface SoundRecordingId extends _SoundRecordingId { constructor: { new(): SoundRecordingId }; }
export var SoundRecordingId: { new(): SoundRecordingId };

type SoundRecordingLanguageAndScriptCodeType = string;
type _SoundRecordingLanguageAndScriptCodeType = Primitive._string;

type SoundRecordingResourceReferenceType = string;
type _SoundRecordingResourceReferenceType = Primitive._string;

/** A Composite containing details of a SoundRecordingType. */
interface _SoundRecordingType extends avs._SoundRecordingType {
	/** The Namespace of the SoundRecordingType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the SoundRecordingType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface SoundRecordingType extends _SoundRecordingType { constructor: { new(): SoundRecordingType }; }
export var SoundRecordingType: { new(): SoundRecordingType };

/** A Composite containing details of a special Contributor or Artist type. */
interface _SpecialContributorType extends avs._SpecialContributorType {
	/** The Namespace of the special contributor type. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the special contributor type. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface SpecialContributorType extends _SpecialContributorType { constructor: { new(): SpecialContributorType }; }
export var SpecialContributorType: { new(): SpecialContributorType };

/** A Composite containing details of a SubGenre within the classical genre. */
interface _SubGenreCategory extends BaseType {
	/** A Composite containing a Description of the SubGenre Category. */
	Description?: TextWithoutTerritory[];
	/** The text of the SubGenre. */
	Value: SubGenreCategoryValue[];
}
export interface SubGenreCategory extends _SubGenreCategory { constructor: { new(): SubGenreCategory }; }
export var SubGenreCategory: { new(): SubGenreCategory };

/** A Composite containing details of a SubGenre within the classical genre. */
interface _SubGenreCategoryValue extends avs._SubGenre {
	/** The Namespace of the classical sub-genre. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the vocal register. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface SubGenreCategoryValue extends _SubGenreCategoryValue { constructor: { new(): SubGenreCategoryValue }; }
export var SubGenreCategoryValue: { new(): SubGenreCategoryValue };

/** A Composite containing details of one or more supplemental documents. */
interface _SupplementalDocumentList extends BaseType {
	/** A Composite containing details of a supplemental document. */
	SupplementalDocument: File[];
}
export interface SupplementalDocumentList extends _SupplementalDocumentList { constructor: { new(): SupplementalDocumentList }; }
export var SupplementalDocumentList: { new(): SupplementalDocumentList };

/** A Composite containing details of a Synopsis.Explanatory Note: This Composite is named SynopsisWithTerritory to disambiguate it from the basic Synopsis Composite. */
interface _SynopsisWithTerritory extends Primitive._string {
	/** A Territory to which the Synopsis applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Flag indicating whether the Synopsis is short (=true) or not (=false). This is represented in an XML schema as an XML Attribute. */
	IsShortSynopsis: boolean;
	/** The Language and script of the Synopsis as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
}
export interface SynopsisWithTerritory extends _SynopsisWithTerritory { constructor: { new(): SynopsisWithTerritory }; }
export var SynopsisWithTerritory: { new(): SynopsisWithTerritory };

/** A Composite containing details of a Tala. */
interface _Tala extends Primitive._string {
	/** A Territory to which the Tala applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
}
export interface Tala extends _Tala { constructor: { new(): Tala }; }
export var Tala: { new(): Tala };

/** A Composite containing technical details of an Image. */
interface _TechnicalImageDetails extends BaseType {
	/** A Territory to which the TechnicalImageDetails apply. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Language and script for the Elements of the TechnicalImageDetails as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Composite containing the ratio formed by dividing the ImageHeight by the ImageWidth. */
	AspectRatio?: AspectRatio[];
	/** The BitDepth of the File. */
	BitDepth?: number;
	/** A Composite containing details of a preview.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-previews/preview-resources */
	ClipDetails?: ClipDetails[];
	/** An amount of data determining the color of a Pixel of the Image (given in bits per pixel). */
	ColorDepth?: number;
	/** A Composite containing details of a File containing the Image that a DSP can obtain. */
	File?: File;
	/** A Composite containing details of a Fingerprint and its governing algorithm. */
	Fingerprint?: Fingerprint[];
	/** A Composite containing details of a Type of ImageCodec. */
	ImageCodecType?: ImageCodecType;
	/** A Composite containing the vertical Extent of an Image of the Image and a UnitOfMeasure (the default is Pixels). */
	ImageHeight?: Extent;
	/** A number of Pixels of the Image displayed in a specific spatial range (given in dpi). */
	ImageResolution?: number;
	/** A Composite containing the horizontal Extent of an Image of the Image and a UnitOfMeasure (the default is Pixels). */
	ImageWidth?: Extent;
	/** The Flag indicating whether the Image is technically a clip of the parent Resource (=true) or not (=false). If the Flag is set to true, the Image described is a clip and the ClipDetails describe how the clip is generated from the full recording described in another TechnicalImageDetails composite. If the Flag is set to false (or left out), the Image described is a 'full' recording and any ClipDetails describe how a clip is generated from said full recording. Note that nothing can be implied from this element as to the conditions under which the clip can be made available. */
	IsClip?: boolean;
	/** A Flag indicating whether a File containing the Image is a provided in a delivery (=true) or not (=false). */
	IsProvidedInDelivery?: boolean;
	/** The Identifier (specific to the Message) of the TechnicalImageDetails within the Release which contains it. This is a LocalTechnicalResourceDetailsAnchor starting with the letter T. */
	TechnicalResourceDetailsReference: string;
}
export interface TechnicalImageDetails extends _TechnicalImageDetails { constructor: { new(): TechnicalImageDetails }; }
export var TechnicalImageDetails: { new(): TechnicalImageDetails };

type TechnicalImageDetailsLanguageAndScriptCodeType = string;
type _TechnicalImageDetailsLanguageAndScriptCodeType = Primitive._string;

type TechnicalImageDetailsTechnicalResourceDetailsReferenceType = string;
type _TechnicalImageDetailsTechnicalResourceDetailsReferenceType = Primitive._string;

/** A Composite containing technical details of a SheetMusic. */
interface _TechnicalSheetMusicDetails extends BaseType {
	/** A Territory to which the TechnicalSheetMusicDetails apply. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Language and script for the Elements of the TechnicalSheetMusicDetails as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** The BitDepth of the File. */
	BitDepth?: number;
	/** A Composite containing details of a preview.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-previews/preview-resources */
	ClipDetails?: ClipDetails[];
	/** A Composite containing details of a File containing the SheetMusic that a DSP can obtain. */
	File?: File;
	/** A Composite containing details of a Fingerprint and its governing algorithm. */
	Fingerprint?: Fingerprint[];
	/** The Flag indicating whether the SheetMusic is technically a clip of the parent Resource (=true) or not (=false). If the Flag is set to true, the SheetMusic described is a clip and the ClipDetails describe how the clip is generated from the full recording described in another TechnicalSheetMusicDetails composite. If the Flag is set to false (or left out), the SheetMusic described is a 'full' recording and any ClipDetails describe how a clip is generated from said full recording. Note that nothing can be implied from this element as to the conditions under which the clip can be made available. */
	IsClip?: boolean;
	/** A Flag indicating whether a File containing the SheetMusic is a provided in a delivery (=true) or not (=false). */
	IsProvidedInDelivery?: boolean;
	/** A Composite containing details of a Type of SheetMusic Codec. */
	SheetMusicCodecType?: SheetMusicCodecType;
	/** The Identifier (specific to the Message) of the TechnicalSheetMusicDetails within the Release which contains it. This is a LocalTechnicalResourceDetailsAnchor starting with the letter T. */
	TechnicalResourceDetailsReference: string;
}
export interface TechnicalSheetMusicDetails extends _TechnicalSheetMusicDetails { constructor: { new(): TechnicalSheetMusicDetails }; }
export var TechnicalSheetMusicDetails: { new(): TechnicalSheetMusicDetails };

type TechnicalSheetMusicDetailsLanguageAndScriptCodeType = string;
type _TechnicalSheetMusicDetailsLanguageAndScriptCodeType = Primitive._string;

type TechnicalSheetMusicDetailsTechnicalResourceDetailsReferenceType = string;
type _TechnicalSheetMusicDetailsTechnicalResourceDetailsReferenceType = Primitive._string;

/** A Composite containing technical details of a Software. */
interface _TechnicalSoftwareDetails extends BaseType {
	/** A Territory to which the TechnicalSoftwareDetails apply. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Language and script for the Elements of the TechnicalSoftwareDetails as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** The BitDepth of the File. */
	BitDepth?: number;
	/** A Composite containing details of a preview.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-previews/preview-resources */
	ClipDetails?: ClipDetails[];
	/** A Composite containing details of a File containing the Software that a DSP can obtain. */
	File?: File;
	/** A Composite containing details of a Fingerprint and its governing algorithm. */
	Fingerprint?: Fingerprint[];
	/** The Flag indicating whether the Software is technically a clip of the parent Resource (=true) or not (=false). If the Flag is set to true, the Software described is a clip and the ClipDetails describe how the clip is generated from the full recording described in another TechnicalSoftwareDetails composite. If the Flag is set to false (or left out), the Software described is a 'full' recording and any ClipDetails describe how a clip is generated from said full recording. Note that nothing can be implied from this element as to the conditions under which the clip can be made available. */
	IsClip?: boolean;
	/** A Flag indicating whether a File containing the Software is a provided in a delivery (=true) or not (=false). */
	IsProvidedInDelivery?: boolean;
	/** A Composite containing details of a Type of OperatingSystem. */
	OperatingSystemType?: OperatingSystemType;
	/** The Identifier (specific to the Message) of the TechnicalSoftwareDetails within the Release which contains it. This is a LocalTechnicalResourceDetailsAnchor starting with the letter T. */
	TechnicalResourceDetailsReference: string;
}
export interface TechnicalSoftwareDetails extends _TechnicalSoftwareDetails { constructor: { new(): TechnicalSoftwareDetails }; }
export var TechnicalSoftwareDetails: { new(): TechnicalSoftwareDetails };

type TechnicalSoftwareDetailsLanguageAndScriptCodeType = string;
type _TechnicalSoftwareDetailsLanguageAndScriptCodeType = Primitive._string;

type TechnicalSoftwareDetailsTechnicalResourceDetailsReferenceType = string;
type _TechnicalSoftwareDetailsTechnicalResourceDetailsReferenceType = Primitive._string;

/** A Composite containing technical details of a SoundRecording. */
interface _TechnicalSoundRecordingDetails extends BaseType {
	/** A Territory to which the TechnicalSoundRecordingDetails apply. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Language and script for the Elements of the TechnicalSoundRecordingDetails as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Composite containing details of a preview. */
	ClipDetails?: SoundRecordingClipDetails[];
	/** A Composite containing details of a delivery File. */
	DeliveryFile?: AudioDeliveryFile[];
	/** A Flag indicating whether immersive audio metadata is present in the File (=true) or not (=false). */
	HasImmersiveAudioMetadata?: boolean;
	/** The Flag indicating whether the SoundRecording is technically a clip of the parent Resource (=true) or not (=false). If the Flag is set to true, the SoundRecording described is a clip and the ClipDetails describe how the clip is generated from the full recording described in another TechnicalSoundRecordingDetails composite. If the Flag is set to false (or left out), the SoundRecording described is a 'full' recording and any ClipDetails describe how a clip is generated from said full recording. Note that nothing can be implied from this element as to the conditions under which the clip can be made available. */
	IsClip?: boolean;
	/** The Identifier (specific to the Message) of the TechnicalSoundRecordingDetails within the Release which contains it. This is a LocalTechnicalResourceDetailsAnchor starting with the letter T. */
	TechnicalResourceDetailsReference: string;
}
export interface TechnicalSoundRecordingDetails extends _TechnicalSoundRecordingDetails { constructor: { new(): TechnicalSoundRecordingDetails }; }
export var TechnicalSoundRecordingDetails: { new(): TechnicalSoundRecordingDetails };

type TechnicalSoundRecordingDetailsLanguageAndScriptCodeType = string;
type _TechnicalSoundRecordingDetailsLanguageAndScriptCodeType = Primitive._string;

type TechnicalSoundRecordingDetailsTechnicalResourceDetailsReferenceType = string;
type _TechnicalSoundRecordingDetailsTechnicalResourceDetailsReferenceType = Primitive._string;

/** A Composite containing technical details of a Text. */
interface _TechnicalTextDetails extends BaseType {
	/** A Territory to which the TechnicalTextDetails apply. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Language and script for the Elements of the TechnicalTextDetails as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** The BitDepth of the File. */
	BitDepth?: number;
	/** A Composite containing details of a preview.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-previews/preview-resources */
	ClipDetails?: ClipDetails[];
	/** A Composite containing details of a File containing the Text that a DSP can obtain. */
	File?: File;
	/** A Composite containing details of a Fingerprint and its governing algorithm. */
	Fingerprint?: Fingerprint[];
	/** The Flag indicating whether the Text is technically a clip of the parent Resource (=true) or not (=false). If the Flag is set to true, the Text described is a clip and the ClipDetails describe how the clip is generated from the full recording described in another TechnicalTextDetails composite. If the Flag is set to false (or left out), the Text described is a 'full' recording and any ClipDetails describe how a clip is generated from said full recording. Note that nothing can be implied from this element as to the conditions under which the clip can be made available. */
	IsClip?: boolean;
	/** A Flag indicating whether a File containing the Text is a provided in a delivery (=true) or not (=false). */
	IsProvidedInDelivery?: boolean;
	/** The Identifier (specific to the Message) of the TechnicalTextDetails within the Release which contains it. This is a LocalTechnicalResourceDetailsAnchor starting with the letter T. */
	TechnicalResourceDetailsReference: string;
	/** A Composite containing details of a Type of TextCodec. */
	TextCodecType?: TextCodecType;
}
export interface TechnicalTextDetails extends _TechnicalTextDetails { constructor: { new(): TechnicalTextDetails }; }
export var TechnicalTextDetails: { new(): TechnicalTextDetails };

type TechnicalTextDetailsLanguageAndScriptCodeType = string;
type _TechnicalTextDetailsLanguageAndScriptCodeType = Primitive._string;

type TechnicalTextDetailsTechnicalResourceDetailsReferenceType = string;
type _TechnicalTextDetailsTechnicalResourceDetailsReferenceType = Primitive._string;

/** A Composite containing technical details of a Video. */
interface _TechnicalVideoDetails extends BaseType {
	/** A Territory to which the TechnicalVideoDetails apply. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Language and script for the Elements of the TechnicalSoundRecordingDetails as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Composite containing details of a preview. */
	ClipDetails?: VideoClipDetails[];
	/** A Composite containing details of a delivery File. */
	DeliveryFile?: VideoDeliveryFile[];
	/** The Flag indicating whether the Video is technically a clip of the parent Resource (=true) or not (=false). If the Flag is set to true, the Video described is a clip and the ClipDetails describe how the clip is generated from the full recording described in another TechnicalVideoDetails composite. If the Flag is set to false (or left out), the Video described is a 'full' recording and any ClipDetails describe how a clip is generated from said full recording. Note that nothing can be implied from this element as to the conditions under which the clip can be made available. */
	IsClip?: boolean;
	/** A Composite containing the overall BitRate and a UnitOfMeasure (the default is kbps). */
	OverallBitRate?: BitRate;
	/** The Identifier (specific to the Message) of the TechnicalVideoDetails within the Release which contains it. This is a LocalTechnicalResourceDetailsAnchor starting with the letter T. */
	TechnicalResourceDetailsReference: string;
}
export interface TechnicalVideoDetails extends _TechnicalVideoDetails { constructor: { new(): TechnicalVideoDetails }; }
export var TechnicalVideoDetails: { new(): TechnicalVideoDetails };

type TechnicalVideoDetailsLanguageAndScriptCodeType = string;
type _TechnicalVideoDetailsLanguageAndScriptCodeType = Primitive._string;

type TechnicalVideoDetailsTechnicalResourceDetailsReferenceType = string;
type _TechnicalVideoDetailsTechnicalResourceDetailsReferenceType = Primitive._string;

/** A Composite containing details of a Text. */
interface _Text extends BaseType {
	/** The Flag indicating whether the Text is provided in addition to the Resources that form part of the Release (=true) or not (=false). If the flag is set to false (or absent) the Text is part of at least one Release in the message. This is represented in an XML schema as an XML Attribute. */
	IsSupplemental: boolean;
	/** The Language and script for the Elements of the Text as defined in IETF RfC 5646. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Composite containing details of the CLine for the Text. */
	CLine?: CLine[];
	/** A Type of the Text indicating the contribution of GenerativeAI. If the value of this element is All, only Contributors of type GenerativeAI shall be specified. If the value of this element is None, no Contributors with AiContribution set to Partly or All shall be specified. */
	ContainsAI?: avs.ContainsAI;
	/** The Flag indicating whether the Text contains content that is hidden in some way from the Consumer (=true) or not (=false). */
	ContainsHiddenContent?: boolean;
	/** A Composite containing details of a Contributor to the Text. */
	Contributor?: Contributor[];
	/** A Composite containing an Annotation which acknowledges record companies and/or other Parties giving permission for Artists or others featured in the Text. */
	CourtesyLine?: CourtesyLine[];
	/** A Composite containing details of the Date and Place of the Event in which the Text was created. This is a string with the syntax YYYY[-MM[-DD]]. */
	CreationDate?: EventDateWithoutFlags;
	/** A Composite containing details of the DisplayArtist for the Text. The DisplayArtist may be described through Name, Identifier and Roles.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/communicating-displayartists-and-displayartistnameFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/displayartistnames-for-releases-and-resourcesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	DisplayArtist?: DisplayArtist[];
	/** A Composite containing the Name to be used by a DSP when presenting Artist details of the Resource to a Consumer.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/communicating-displayartists-and-displayartistnameFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/displayartistnames-for-releases-and-resourcesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	DisplayArtistName?: DisplayArtistNameWithOriginalLanguage[];
	/** A Composite containing details of a Title of the Text as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. */
	DisplayTitle?: DisplayTitle[];
	/** A Composite containing details of a Title of the Text as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. One such element is required for each DisplayTitle element and its content typically provides the same information as the concatenation of the DisplayTitle's sub-elements. */
	DisplayTitleText?: DisplayTitleText[];
	/** A Composite containing details of the Date and Place of the Event in which the Text was first published, whether for physical or electronic/online distribution. This is a string with the syntax YYYY[-MM[-DD]]. */
	FirstPublicationDate?: FulfillmentDate[];
	/** A Composite containing details of a FormalTitle of the Text. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	FormalTitle?: DisplayTitle[];
	/** A Composite containing details of a GroupingTitle of the Text. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	GroupingTitle?: DisplayTitle[];
	/** The Language of the Text as defined in IETF RfC 5646. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. */
	LanguageOfText?: Language[];
	/** A Composite containing details of the classification of the Text according to advice which it carries about the level of explicitness or offensiveness of its content. */
	ParentalWarningType?: ParentalWarningTypeWithStandard[];
	/** A Composite containing details of a Release (or a PhysicalProduct or a DigitalProduct derived from such a Release) which is related to current Text. */
	RelatedRelease?: RelatedRelease[];
	/** A Composite containing details of a ResourceRelatedResourceReference referring to a Resource that is related to the current Text. */
	RelatedResource?: RelatedResource[];
	/** A Composite containing details of ResourceContainedResourceReferences referring to a Resource that is contained in the current Text. */
	ResourceContainedResourceReferenceList?: ResourceContainedResourceReferenceList;
	/** A Composite containing details of an Identifier of the Text. */
	ResourceId?: TextId[];
	/** The Identifier (specific to the Message) of the Text within the Release which contains it. This is a LocalResourceAnchor starting with the letter A. */
	ResourceReference: string;
	/** A Composite containing details of RightsController of Rights in the Text. */
	ResourceRightsController?: ResourceRightsController[];
	/** A Composite containing technical details of the Text.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-binaries/communicating-binaries */
	TechnicalDetails?: TechnicalTextDetails[];
	/** A Composite containing details of the Type of the Text. */
	Type: TextType;
	/** A Composite containing details of a Type of Version given by the releasing party to characterise and differentiate one Text from another with identical or similar Title metadata. VersionTypes may be used for disambiguating a Text that has been derived from another Text by using the value EditedVersion. EditedVersion value is often combined with another VersionType such as RadioVersion. */
	VersionType?: VersionType[];
	/** A Composite containing details of a MusicalWorkId of a MusicalWork used in the Text. */
	WorkId?: MusicalWorkId[];
	/** A Composite containing details of RightsController of Rights in the Work. */
	WorkRightsController?: WorkRightsController[];
}
export interface Text extends _Text { constructor: { new(): Text }; }
export var Text: { new(): Text };

/** A Composite containing details of a TextCodecType. */
interface _TextCodecType extends avs._TextCodecType {
	/** The Namespace of the TextCodecType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the TextCodecType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
	/** The Identifier of the Version of the TextCodecType. This is represented in an XML schema as an XML Attribute. */
	Version: string;
}
export interface TextCodecType extends _TextCodecType { constructor: { new(): TextCodecType }; }
export var TextCodecType: { new(): TextCodecType };

/** A Composite containing details of Identifiers of a Text. */
interface _TextId extends BaseType {
	/** The Flag indicating whether this Identifier is old and has been replaced by a new one (=true) or not (=false). The Flag may only be set to True when the new Identifier is also provided. If the Flag is not set, this Identifier is deemed to be the current one. This is represented in an XML schema as an XML Attribute. */
	IsReplaced: boolean;
	/** The ISBN (International Standard Book Number defined in ISO 2108) for the Text. An ISBN is a 13-digit number. Pre-2007, ISBNs, which had 10-digits and are now deprecated, are converted by adding the prefix '978' and re-calculating the check character. DDEX will enforce the syntax 97[8-9][0-9]{9}[X0-9] in the future. */
	ISBN?: string;
	/** The ISSN (International Standard Serial Number defined in ISO 3297) identifying the Text. An ISSN comprises two groups of four digits, separated by a hyphen and a control digit. DDEX will enforce the syntax [0-9]{4}-[0-9]{3}[X0-9] in the future. */
	ISSN?: string;
	/** A Composite containing details of a ProprietaryIdentifier of the Text (usually one per society involved in the messaging). */
	ProprietaryId?: ProprietaryId[];
	/** The SICI (Serial Item and Contribution Identifier defined in ANSI/NISO Z39.56-199) for the Text. DDEX will enforce the syntax [0-9]{4}-[0-9]{3}[X0-9].+ in the future. */
	SICI?: string;
}
export interface TextId extends _TextId { constructor: { new(): TextId }; }
export var TextId: { new(): TextId };

type TextLanguageAndScriptCodeType = string;
type _TextLanguageAndScriptCodeType = Primitive._string;

type TextResourceReferenceType = string;
type _TextResourceReferenceType = Primitive._string;

/** A Composite containing details of a TextType. */
interface _TextType extends avs._TextType {
	/** The Namespace of the TextType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the TextType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface TextType extends _TextType { constructor: { new(): TextType }; }
export var TextType: { new(): TextType };

/** A Composite containing details of an Annotation, e.g. a Description or a Comment. */
interface _TextWithFormat extends Primitive._string {
	/** A Territory to which the Annotation applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The format of the Annotation. This is represented in an XML schema as an XML Attribute. */
	Format: avs.TextCodecType;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Language and script of the Annotation as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** The Namespace of the Format. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the Format. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface TextWithFormat extends _TextWithFormat { constructor: { new(): TextWithFormat }; }
export var TextWithFormat: { new(): TextWithFormat };

type TextWithFormatLanguageAndScriptCodeType = string;
type _TextWithFormatLanguageAndScriptCodeType = Primitive._string;

/** A Composite containing details of an Annotation, e.g. a Description or a Comment.Explanatory Note: This Composite is named TextWithoutTerritory to disambiguate it from the basic TextWithFormat Composite. */
interface _TextWithoutTerritory extends Primitive._string {
	/** A Territory to which the Annotation applies. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. This is represented in an XML schema as an XML Attribute. */
	ApplicableTerritoryCode: avs.CurrentTerritoryCode;
	/** The format of the Annotation. This is represented in an XML schema as an XML Attribute. */
	Format: avs.TextCodecType;
	/** The Flag indicating whether this Composite provides default values (=true). This Flag should not be set if this is not the case. This is represented in an XML schema as an XML Attribute. */
	IsDefault: boolean;
	/** The Language and script of the Annotation as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** The Namespace of the Format. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the Format. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface TextWithoutTerritory extends _TextWithoutTerritory { constructor: { new(): TextWithoutTerritory }; }
export var TextWithoutTerritory: { new(): TextWithoutTerritory };

type TextWithoutTerritoryLanguageAndScriptCodeType = string;
type _TextWithoutTerritoryLanguageAndScriptCodeType = Primitive._string;

/** A Composite containing details of a StartTime, EndTime and a Duration of a Resource. */
interface _Timing extends BaseType {
	/** The Duration of the related Resource (or of an interval of that Resource) that has been used (this may be less than the total Duration of the Resource) (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). If the Resource consists of several intervals of the referencing Resource, the Duration of each interval used shall be given. The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). */
	DurationUsed?: string[];
	/** The end point of the related Resource given in seconds from the start of the referencing Resource. If the Resource consists of several intervals of the referencing Resource, the end point is the end point of the last interval used. The value may include fractions of a second (e.g. one minute and 30.5 seconds would be 90.5). */
	EndPoint?: number;
	/** The start point of the related Resource given in seconds from the start of the referencing Resource. If the Resource consists of several intervals of the referencing Resource, the start point is the start point of the first interval used. The value may include fractions of a second (e.g. one minute and 30.5 seconds would be 90.5). */
	StartPoint: number;
}
export interface Timing extends _Timing { constructor: { new(): Timing }; }
export var Timing: { new(): Timing };

/** A Composite containing details of a Title. */
interface _Title extends BaseType {
	/** The Language and script for the Elements of the Title as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Type of the Title which defines its origin or the function it fulfils in relation to a Creation. Note: A Title may fulfil more than one role. Example: 'Help' may be both the OriginalTitle and the DisplayTitle for the well-known Beatles song. This is represented in an XML schema as an XML Attribute. */
	TitleType: avs.AdditionalTitleType;
	/** A SubTitle of the Title, including Titles of Versions used to differentiate different versions of the same Title, as required by the GRid and ISRC ReferenceDescriptiveMetadataSets. */
	SubTitle?: string;
	/** The text of the Title. */
	TitleText: string;
}
export interface Title extends _Title { constructor: { new(): Title }; }
export var Title: { new(): Title };

/** A Composite containing information on how a RecordCompany wishes Artist information to be presented to Consumers as part of the Title (and in addition to displaying the DisplayArtist information). */
interface _TitleDisplayInformation extends BaseType {
	/** The Language and script of the Information as defined in IETF RfC 5646. The default is the same as indicated for the containing composite. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A number indicating the order of the display artist name in a group of display artist names, to allow sequencing different display artists. This is represented in an XML schema as an XML Attribute. */
	SequenceNumber: number;
	/** A Flag indicating whether the information is displayed in the Title of a Resource (=true) or not (=false). */
	IsDisplayedInTitle: boolean;
	/** A Descriptor that precedes the display artist name when multiple display artist names are given. */
	Prefix?: Prefix[];
}
export interface TitleDisplayInformation extends _TitleDisplayInformation { constructor: { new(): TitleDisplayInformation }; }
export var TitleDisplayInformation: { new(): TitleDisplayInformation };

/** A Composite containing details of a DDEX TrackRelease. */
interface _TrackRelease extends BaseType {
	/** The Flag indicating whether the Release is a main one as defined in the relevant Profile Standard (=true) or not (=false). This is represented in an XML schema as an XML Attribute. */
	IsMainRelease: boolean;
	/** A Composite containing details of a Genre considered appropriate for marketing the Release by the publishing record company often in conjunction with the display artist(s). */
	DisplayGenre: GenreWithTerritory[];
	/** A Composite containing details of a Title of the Release as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. */
	DisplayTitle?: DisplayTitle[];
	/** A Composite containing details of a Title of the Release as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. One such element is required for each DisplayTitle element and its content typically provides the same information as the concatenation of the DisplayTitle's sub-elements. */
	DisplayTitleText?: DisplayTitleText[];
	/** A Composite containing details of a FormalTitle of the Release. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	FormalTitle?: DisplayTitle[];
	/** A Composite containing details of a GroupingTitle of the Release. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	GroupingTitle?: DisplayTitle[];
	/** A Composite containing details of a Description of the Release containing Keywords. */
	Keywords?: KeywordsWithTerritory[];
	/** A Composite containing details of a ReleaseResourceReference (specific to this Message) for a Resource which is linked to this Release. Example: an Image or Text associated with a SoundRecording. This LocalAnchorReference is a xs:string starting with the letter A. */
	LinkedReleaseResourceReference?: LinkedReleaseResourceReference[];
	/** A Composite containing a Comment about the promotion and marketing of the Release. */
	MarketingComment?: MarketingComment[];
	/** A Composite containing details of a Release (or a PhysicalProduct or a DigitalProduct derived from such a Release) which is related to this Release. */
	RelatedRelease?: RelatedRelease[];
	/** A Composite containing details of a Resource which is related to this Release. */
	RelatedResource?: RelatedResource[];
	/** A Composite containing details of ReleaseIds. If available, a GRid has to be used. If the Release is an abstraction of a complete PhysicalProduct (such as a CD Album), the ICPN of the PhysicalProduct may be used instead. */
	ReleaseId: ReleaseId;
	/** A Reference for a label of the Release (specific to this Message). This is a LocalPartyAnchorReference starting with the letter P. */
	ReleaseLabelReference: ReleaseLabelReferenceWithParty[];
	/** The Identifier (specific to the Message) of the Release. Used to link the Release to one or more Deal(s). This is a LocalReleaseAnchor starting with the letter R. */
	ReleaseReference: string;
	/** A ReleaseResourceReference for the Release (specific to this Message). The LocalAnchorReference in this Composite is a xs:string starting with the letter A. */
	ReleaseResourceReference: string;
	/** A Reference for a set of visibility dates (specific to this Message) that applies to this Release. This defines when the Release can be shown to Consumers, not when a Consumer can get access to the Release. This is a LocalVisibilityAnchorReference starting with the letter V. */
	ReleaseVisibilityReference?: string[];
	/** A Composite containing details of a Synopsis of the Release. */
	Synopsis?: SynopsisWithTerritory[];
	/** A URL of a sub-site or channel in the DSP’s system, where the Release should be made available to Consumers. */
	TargetURL?: string;
}
export interface TrackRelease extends _TrackRelease { constructor: { new(): TrackRelease }; }
export var TrackRelease: { new(): TrackRelease };

type TrackReleaseReleaseReferenceType = string;
type _TrackReleaseReleaseReferenceType = Primitive._string;

type TrackReleaseReleaseResourceReferenceType = string;
type _TrackReleaseReleaseResourceReferenceType = Primitive._string;

type TrackReleaseReleaseVisibilityReferenceType = string;
type _TrackReleaseReleaseVisibilityReferenceType = Primitive._string;

/** A Composite containing details of a Date specifying when a TrackRelease can be shown to Consumers. */
interface _TrackReleaseVisibility extends BaseType {
	/** A Flag indicating whether a DSP shall show the availability dates to Consumers (=false) or not (=true). Absence of a this Flag means that no restriction is communicated. This is represented in an XML schema as an XML Attribute. */
	DoNotDisplayDates: boolean;
	/** A DateTime on which an audio or video clip (of type preview only) is made first available for display (it overrides the generic ReleaseDisplayStartDate if supplied). If no ClipPreviewStartDateTime is provided, the StartDate for the Deal is used instead. The ClipPreviewStartDateTime shall not be later than the StartDate of the Deal allowing the general availability of the referenced Release. This is a string in ISO 8601 format: YYYY-MM-DDThh:mm:ss. */
	ClipPreviewStartDateTime?: Date;
	/** A Territory in which the visibility dates do not apply. Either this Element or Territory must be present, but not both. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. */
	ExcludedTerritoryCode?: CurrentTerritoryCode[];
	/** A Territory in which the visibility dates apply. Either this Element or ExcludedTerritory must be present, but not both. The use of ISO TerritoryCodes (or the term 'Worldwide') is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. */
	TerritoryCode?: CurrentTerritoryCode[];
	/** A DateTime on which the Track list is made first available for display (it overrides the generic ReleaseDisplayStartDate if supplied). If no TrackListingPreviewStartDateTime is provided, the StartDate for the Deal is used instead. The TrackListingPreviewStartDateTime shall not be later than the StartDate of the Deal allowing the general availability of the referenced Release. This element is not applicable on Track Releases. This is a string in ISO 8601 format: YYYY-MM-DDThh:mm:ss. */
	TrackListingPreviewStartDateTime: Date;
	/** The Identifier (specific to the Message) of the visibility date. This is a LocalVisibilityAnchor starting with the letter V. */
	VisibilityReference: string;
}
export interface TrackReleaseVisibility extends _TrackReleaseVisibility { constructor: { new(): TrackReleaseVisibility }; }
export var TrackReleaseVisibility: { new(): TrackReleaseVisibility };

type TrackReleaseVisibilityVisibilityReferenceType = string;
type _TrackReleaseVisibilityVisibilityReferenceType = Primitive._string;

/** A Composite containing details of a UserInterfaceType. */
interface _UserInterfaceType extends avs._UserInterfaceType_ERN {
	/** The Namespace of the UserInterfaceType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the UserInterfaceType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface UserInterfaceType extends _UserInterfaceType { constructor: { new(): UserInterfaceType }; }
export var UserInterfaceType: { new(): UserInterfaceType };

/** A Composite containing details of a UseType. */
interface _UseType extends avs._UseType_ERN {
	/** The Namespace of the UseType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the UseType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface UseType extends _UseType { constructor: { new(): UseType }; }
export var UseType: { new(): UseType };

/** A Composite containing details about a ValidityPeriod of Time. Periods are typically describedby at least a StartDate or EndDate where the StartDate and EndDate are included in the Period. Thus a one-day period can be described by using the same date in the StartDate and EndDate. */
interface _ValidityPeriod extends BaseType {
	/** A Composite containing details of the Date and Place of an Event that marks the end of the Period (in ISO 8601 format: YYYY-MM-DD). The EndDate must not be earlier than the StartDate if both are provided. */
	EndDate?: EventDate;
	/** A Composite containing details of the Date and Place of an Event that marks the beginning of the Period (in ISO 8601 format: YYYY-MM-DD). The StartDate must be no later than the EndDate if both are provided. */
	StartDate?: EventDate;
}
export interface ValidityPeriod extends _ValidityPeriod { constructor: { new(): ValidityPeriod }; }
export var ValidityPeriod: { new(): ValidityPeriod };

/** A Composite containing details of a venue. */
interface _Venue extends BaseType {
	/** An UN/Locode of the venue. */
	LocationCode?: string;
	/** A Territory of the VenueAddress. The use of ISO TerritoryCodes is strongly encouraged; TIS TerritoryCodes should only be used if both MessageSender and MessageRecipient are familiar with this standard. */
	TerritoryCode?: AllTerritoryCode;
	/** The Address of the venue. The level of description may be more or less granular, possibly including only the name of the city. */
	VenueAddress?: string;
	/** The Name of the venue. */
	VenueName?: string;
	/** A specific studio of the venue where a Session took place. */
	VenueRoom?: string;
}
export interface Venue extends _Venue { constructor: { new(): Venue }; }
export var Venue: { new(): Venue };

/** A Composite containing details of a VersionType. */
interface _VersionType extends avs._VersionType {
	/** The Namespace of the VersionType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the VersionType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface VersionType extends _VersionType { constructor: { new(): VersionType }; }
export var VersionType: { new(): VersionType };

/** A Composite containing details of a Video. */
interface _Video extends BaseType {
	/** The Flag indicating whether the Video is part of the hierarchical structure indicated by the classical release profile variant used for the Message. If the flag is set to false (or absent) the rules for the classical release profile variant do not apply. This is represented in an XML schema as an XML Attribute. */
	ApplyClassicalProfileVariant: boolean;
	/** The Flag indicating whether the Video is provided in addition to the Resources that form part of the Release (=true) or not (=false). If the flag is set to false (or absent) the Video is part of at least one Release in the message. This is represented in an XML schema as an XML Attribute. */
	IsSupplemental: boolean;
	/** The Language and script for the Elements of the Video as defined in IETF RfC 5646. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. This is represented in an XML schema as an XML Attribute. */
	LanguageAndScriptCode: string;
	/** A Composite containing details of a rating for the Video. */
	AvRating?: AvRating[];
	/** A Composite containing details of a Character in the Video. A Character may be described through Name, Identifier and Roles. */
	Character?: Character[];
	/** A Type of the Video indicating whether it is a Medley or a Potpourri. */
	CompositeMusicalWorkType?: avs.CompositeMusicalWorkType;
	/** A Type of the Video indicating the contribution of GenerativeAI. If the value of this element is All, only Contributors of type GenerativeAI shall be specified. If the value of this element is None, no Contributors with AiContribution set to Partly or All shall be specified. */
	ContainsAI?: avs.ContainsAI;
	/** The Flag indicating whether the Video contains content that is hidden in some way from the Consumer (=true) or not (=false). */
	ContainsHiddenContent?: boolean;
	/** A Composite containing details of a Contributor to the Video. */
	Contributor?: Contributor[];
	/** A Composite containing an Annotation Annotation which acknowledges record companies and/or other Parties giving permission for guests Artists or others featured on the Video. */
	CourtesyLine?: CourtesyLine[];
	/** A Composite containing details of the Date and Place of the Event in which the Video was created. This is a string with the syntax YYYY[-MM[-DD]]. */
	CreationDate?: EventDateWithoutFlags;
	/** A deity name relating to the Video. */
	Deity?: string[];
	/** A Composite containing details of the DisplayArtist for the Video. The DisplayArtist may be described through Name, Identifier and Roles.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/communicating-displayartists-and-displayartistnameFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/displayartistnames-for-releases-and-resourcesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	DisplayArtist: DisplayArtist[];
	/** A Composite containing the Name to be used by a DSP when presenting Artist details of the Resource to a Consumer.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/communicating-displayartists-and-displayartistnameFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/displayartistnames-for-releases-and-resourcesFurther Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-contributors%2C-artists-and-writers/information-on-displayartists%2C-displayartistnames%2C-contributors-and-indirectcontributors */
	DisplayArtistName: DisplayArtistNameWithOriginalLanguage[];
	/** A Role and instrumentation for which a Party is credited. */
	DisplayCredits?: DisplayCredits[];
	/** A Composite containing details of a Title of the Video as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. */
	DisplayTitle: DisplayTitle[];
	/** A Composite containing details of a Title of the Video as the MessageSender suggests it should be shown to the Consumer. In many instances this is the only Title to be communicated for any given Creation. Multiple instances can be supplied with an ApplicableTerritoryCode and/or LanguageAndScriptCode. One such element is required for each DisplayTitle element and its content typically provides the same information as the concatenation of the DisplayTitle's sub-elements. */
	DisplayTitleText: DisplayTitleText[];
	/** The Duration of the Video (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). */
	Duration: string;
	/** A Composite containing details of the Date and Place of the Event in which the Video was first published, whether for physical or electronic/online distribution. This is a string with the syntax YYYY[-MM[-DD]]. */
	FirstPublicationDate?: FulfillmentDate[];
	/** A Composite containing details of a FormalTitle of the Video. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	FormalTitle?: DisplayTitle[];
	/** A Composite containing details of a GroupingTitle of the Video. If multiple instances with an ApplicableTerritoryCode are provided, then the first one provides the default that is then superseded by subsequent instances. */
	GroupingTitle?: DisplayTitle[];
	/** A Flag indicating whether the Video relates to a (human) Vocal Performance that is not merely background vocals (=true) or not (=false). */
	HasForegroundVocalPerformance?: boolean;
	/** A Flag indicating whether the Video relates to a (human) Vocal Performance (=true) or not (=false). */
	HasVocalPerformance?: boolean;
	/** A Flag indicating whether the Video is a Cover (=true) or not (=false). This is not legal information, but meant to help Consumers to differentiate originals from covers. */
	IsCover?: boolean;
	/** The Flag indicating whether the Video is Instrumental (=true) or not (=false). This element is deprecated. DDEX advises that it may be removed at a future date and therefore recommends against using it. */
	IsInstrumental?: boolean;
	/** The Flag indicating whether the Video is remastered (=true) or not (=false). */
	IsRemastered?: boolean;
	/** The Language of dubbing used in the Video as defined in IETF RfC 5646. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. */
	LanguageOfDubbing?: string[];
	/** The original Language of the Performance as defined in IETF RfC 5646. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. */
	LanguageOfPerformance?: Language[];
	/** A Composite containing details of the Date and Place of the Event in which the Video was originally mastered (in either analogue or digital form). This is a string with the syntax YYYY[-MM[-DD]]. */
	MasteredDate?: EventDateWithoutFlags;
	/** A Composite containing details of the classification of the Video according to advice which it carries about the level of explicitness or offensiveness of its content. */
	ParentalWarningType?: ParentalWarningTypeWithStandard[];
	/** A Description of the melodic mode of a MusicalWork in the Video. */
	Raga?: string[];
	/** A Composite containing the textual Description of the reason for the Identifier being used as a proxy. */
	ReasonForCueSheetAbsence?: Reason;
	/** A Composite containing details of a Type of the Video based on its content, intended audience, format or technical characteristics. */
	RecordingFormat?: RecordingFormat[];
	/** A Composite containing details of a Release (or a PhysicalProduct or a DigitalProduct derived from such a Release) which is related to current Video. */
	RelatedRelease?: RelatedRelease[];
	/** A Composite containing details of a ResourceRelatedResourceReference referring to a Resource that is related to the current Video. */
	RelatedResource?: RelatedResource[];
	/** A Composite containing details of the Date and Place of the Event in which the Video was re-mastered (usually digitally). This is a string with the syntax YYYY[-MM[-DD]]. */
	RemasteredDate?: EventDateWithoutFlags[];
	/** A Composite containing details of ResourceContainedResourceReferences referring to a Resource that is contained in the current Video. */
	ResourceContainedResourceReferenceList?: ResourceContainedResourceReferenceList;
	/** The Identifier (specific to the Message) of the Video within the Release which contains it. This is a LocalResourceAnchor starting with the letter A. */
	ResourceReference: string;
	/** A Composite containing details of RightsController of Rights in the Video. */
	ResourceRightsController?: ResourceRightsController[];
	/** The Language of SubTitles in the Video as defined in IETF RfC 5646. Language and Script are provided as lang[-script][-region][-variant]. A list of common language/script combinations has been published in the Language Metadata Table (LMT) at https://www.mesaonline.org/lmt by the Media & Entertainment Services Alliance. Other language/script combinations allowed by IETF RfC 5646 are also valid. */
	SubTitleLanguage?: string[];
	/** A Description of the rhythmic pattern of a MusicalWork in the Video. */
	Tala?: string[];
	/** A Composite containing details of the Type of the Video. */
	Type: VideoType;
	/** A Composite containing details of a Type of Version given by the releasing party to characterise and differentiate one Video from another with identical or similar Title metadata. VersionTypes may be used for disambiguating a Video that has been derived from another Video by using the value EditedVersion. EditedVersion value is often combined with another VersionType such as RadioVersion. */
	VersionType?: VersionType[];
	/** A Reference for a Chapter (specific to this Message). This is a LocalCollectionAnchorReference starting with the letter X. */
	VideoChapterReference?: string[];
	/** A Reference for a CueSheet (specific to this Message). This is a LocalCueSheetAnchorReference starting with the letter Q. */
	VideoCueSheetReference?: string[];
	/** A Composite containing details of a Video that has been created based on the same content as the 'main' Video but specifically for a different encoding for the audio such as immersive audio. It can be the same Video (in accordance with the ISRC standard) but more likely than not will be a different Video because the sound engineer/producer will be different. If an element in this Composite is not provided, the data is assumed to be the same as for the 'main' Video. */
	VideoEdition: VideoEdition[];
	/** A Composite containing details of a MusicalWorkId of a MusicalWork used in the Video. */
	WorkId?: MusicalWorkId[];
	/** A Composite containing details of RightsController of Rights in the Work. */
	WorkRightsController?: WorkRightsController[];
}
export interface Video extends _Video { constructor: { new(): Video }; }
export var Video: { new(): Video };

/** A Composite containing details of a clip. */
interface _VideoClipDetails extends BaseType {
	/** The position of the bottom right corner of the clip measured in Pixels from the top left corner of the Resource. The position is given as two coordinate values separated by a comma, the top left pixel being 0,0. */
	BottomRightCorner?: string;
	/** A Type of clip. */
	ClipType: ClipType;
	/** A Composite containing details of a delivery File. */
	DeliveryFile?: VideoDeliveryFile[];
	/** A Type of expression indicating how this should be perceived, e.g. as instruction (meaning that this has to be done to create the clip) or as information (meaning that this has been done to craete the clip). */
	ExpressionType: avs.ExpressionType;
	/** The Identifier (specific to the Message) of the TechnicalSoundRecordingDetails within the Release which contains it. This is a LocalTechnicalResourceDetailsAnchor starting with the letter T. */
	TechnicalResourceDetailsReference: string;
	/** A Composite containing details of a StartTime, EndTime and a Duration of the clip. */
	Timing?: Timing[];
	/** The position of the top left corner of the clip measured in Pixels from the top left corner of the Resource. The position is given as two coordinate values separated by a comma, the top left pixel being 0,0. */
	TopLeftCorner?: string;
}
export interface VideoClipDetails extends _VideoClipDetails { constructor: { new(): VideoClipDetails }; }
export var VideoClipDetails: { new(): VideoClipDetails };

type VideoClipDetailsBottomRightCornerType = string;
type _VideoClipDetailsBottomRightCornerType = Primitive._string;

type VideoClipDetailsTechnicalResourceDetailsReferenceType = string;
type _VideoClipDetailsTechnicalResourceDetailsReferenceType = Primitive._string;

type VideoClipDetailsTopLeftCornerType = string;
type _VideoClipDetailsTopLeftCornerType = Primitive._string;

/** A Composite containing details of a VideoCodecType. */
interface _VideoCodecType extends avs._VideoCodecType {
	/** The Namespace of the VideoCodecType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the VideoCodecType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
	/** The Identifier of the Version of the VideoCodecType. This is represented in an XML schema as an XML Attribute. */
	Version: string;
}
export interface VideoCodecType extends _VideoCodecType { constructor: { new(): VideoCodecType }; }
export var VideoCodecType: { new(): VideoCodecType };

/** A Composite containing details of a VideoDefinitionType. */
interface _VideoDefinitionType extends avs._VideoDefinitionType {
	/** The Namespace of the VideoDefinitionType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the VideoDefinitionType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface VideoDefinitionType extends _VideoDefinitionType { constructor: { new(): VideoDefinitionType }; }
export var VideoDefinitionType: { new(): VideoDefinitionType };

/** A Composite containing details of one or more video delivery Files. */
interface _VideoDeliveryFile extends BaseType {
	/** A Composite containing the ratio formed by dividing the ImageHeight by the ImageWidth. */
	AspectRatio?: AspectRatio[];
	/** A Composite containing the BitRate for the audio data and a UnitOfMeasure (the default is kbps). */
	AudioBitRate?: BitRate;
	/** An amount of audio data in a sample. */
	AudioBitsPerSample?: number;
	/** A Composite containing details of a Type of AudioCodec. */
	AudioCodecType?: AudioCodecType;
	/** A Composite containing the SamplingRate for the audio data and a UnitOfMeasure (the default is Hz). */
	AudioSamplingRate?: SamplingRate;
	/** The BitDepth of the File. */
	BitDepth?: number;
	/** An amount of data determining the color of a pixel of an Image of the Video (given in bits per pixel). */
	ColorDepth?: number;
	/** A Composite containing details of a ContainerFormat. */
	ContainerFormat?: ContainerFormat;
	/** A Composite containing details of the core part of the Video. */
	CoreArea?: CoreArea;
	/** The Duration of the instantiation of the Video if this differs from the Duration provided for the Video itself (using the ISO 8601 PT[[hhH]mmM]ssS format, where lower case characters indicate variables, upper case characters are part of the xs:string, e.g. one hour, two minutes and three seconds would be PT1H2M3S). The seconds section ss may include fractions (e.g. one minute and 30.5 seconds would be PT1M30.5S). This element must only be used if and when there are no royalty reporting implications on this change in duration and when the specific technical instantiation is a clip taken from a technical instantiation representing the whole Video. */
	Duration?: string;
	/** An electro-optical transfer function (EOTF) used for the video signal. */
	ElectroOpticalTransferFunctionType?: avs.ElectroOpticalTransferFunctionType;
	/** A Composite containing details of a File containing the Video that a DSP can obtain. */
	File?: File;
	/** A Composite containing details of a Fingerprint and its governing algorithm. */
	Fingerprint?: Fingerprint[];
	/** A Composite containing the Rate for a number of frames shown in the Video in a specific Period of Time and a UnitOfMeasure (the default is Hz, interlaced). */
	FrameRate?: FrameRate;
	/** A Flag indicating whether immersive audio metadata is present in the File (=true) or not (=false). */
	HasImmersiveAudioMetadata?: boolean;
	/** A Composite containing details of Dolby vision metadata. This element may only be used for a VisualFile or AudioVisualFile, and if it is used, an ElectroOpticalTransferFunctionType element must also be present with a value of ST2084. Also, if this Flag is set to StandAlone, there needs to be a further delivery file of type ColorInformationFile. */
	HdrVideoDynamicMetadataType?: HdrVideoDynamicMetadataType;
	/** A Type of HDR video static metadata. */
	HdrVideoStaticMetadataType?: avs.HdrVideoStaticMetadataType;
	/** A Composite containing the vertical Extent of an Image of the Video and a UnitOfMeasure (the default is Pixels). */
	ImageHeight?: Extent;
	/** A Composite containing the horizontal Extent of an Image of the Video and a UnitOfMeasure (the default is Pixels). */
	ImageWidth?: Extent;
	/** A Flag indicating whether the File containing the Video is a provided in a delivery (=true) or not (=false). */
	IsProvidedInDelivery?: boolean;
	/** A number of audio channels. */
	NumberOfAudioChannels?: number;
	/** A number of audio objects used to create the auditory experience. */
	NumberOfAudioObjects?: number;
	/** A specification for the primary colors. */
	PrimaryColorType?: avs.PrimaryColorType;
	/** A Type of delivery File. */
	Type: avs.DeliveryFileType;
	/** A Composite containing the BitRate for the video data and a UnitOfMeasure (the default is kbps). */
	VideoBitRate?: BitRate;
	/** A Composite containing details of a Type of VideoCodec. */
	VideoCodecType?: VideoCodecType;
	/** A Type of resolution (or definition) in which the Video is provided. */
	VideoDefinitionType?: VideoDefinitionType;
}
export interface VideoDeliveryFile extends _VideoDeliveryFile { constructor: { new(): VideoDeliveryFile }; }
export var VideoDeliveryFile: { new(): VideoDeliveryFile };

/** A Composite containing details of a VideoEdition that has been created based on the same content as the 'main' Video but specifically for a different encoding for the audio such as immersive audio. */
interface _VideoEdition extends BaseType {
	/** A Composite containing details of the CLine for the VideoEdition. */
	CLine?: CLine[];
	/** A Composite containing details of a Contributor to the VideoEdition (but not all other editions). */
	EditionContributor?: EditionContributor[];
	/** A Composite containing details of the PLine for the VideoEdition. */
	PLine?: PLine[];
	/** A mode in which the VideoEdition is made, which includes audio channel configurations (mainly for stereo and surround sound) and audio object configurations (mainly for immersive audio). */
	RecordingMode?: avs.RecordingMode;
	/** A Composite containing details of a VideoId. */
	ResourceId: VideoId[];
	/** A Composite containing technical details of the VideoEdition.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-binaries/communicating-binaries */
	TechnicalDetails?: TechnicalVideoDetails[];
	/** A Type of edition with regards to the audio part. The Type has to be provided if two VideoEditions are provided for the same Video. */
	Type?: avs.EditionType;
}
export interface VideoEdition extends _VideoEdition { constructor: { new(): VideoEdition }; }
export var VideoEdition: { new(): VideoEdition };

/** A Composite containing details of Identifiers of a Video. */
interface _VideoId extends BaseType {
	/** The Flag indicating whether this Identifier is old and has been replaced by a new one (=true) or not (=false). The Flag may only be set to True when the new Identifier is also provided. If the Flag is not set, this Identifier is deemed to be the current one. This is represented in an XML schema as an XML Attribute. */
	IsReplaced: boolean;
	/** A Composite containing details of the CatalogNumber of the Video. */
	CatalogNumber?: CatalogNumber;
	/** An Identifier of the Video assigned by the Entertainment Identifier Registry Association (EIDR). */
	EIDR?: string[];
	/** The ISAN (International Standard Audiovisual Number as defined in ISO 15706) for the Video. An ISAN comprises four blocks of four hexadecimal charaters followed by a check character. DDEX will enforce the syntax [A-F0-9]{12} in the future. */
	ISAN?: string;
	/** The ISRC (International Standard Recording Code as defined in ISO 3901) for the Video. An ISRC comprises four parts: two characters, followed by three alphanumeric characters, then two digits and five digits. DDEX will enforce the syntax [a-zA-Z]{2}[a-zA-Z0-9]{3}[0-9]{7} in the future. */
	ISRC?: string;
	/** A Composite containing details of a ProprietaryIdentifier of the Video (usually one per society involved in the messaging). */
	ProprietaryId?: ProprietaryId[];
	/** The V-ISAN (Version Identifier of an International Standard Audiovisual Number as defined in ISO 15706-2) for the Video. A V-ISAN comprises four blocks of four hexadecimal charaters followed by a check character, followed by two further blocks of four hexadecimal characters, followed by a further check character. DDEX will enforce the syntax [A-F0-9]{24} in the future. */
	VISAN?: string;
}
export interface VideoId extends _VideoId { constructor: { new(): VideoId }; }
export var VideoId: { new(): VideoId };

type VideoLanguageAndScriptCodeType = string;
type _VideoLanguageAndScriptCodeType = Primitive._string;

type VideoLanguageOfDubbingType = string;
type _VideoLanguageOfDubbingType = Primitive._string;

type VideoResourceReferenceType = string;
type _VideoResourceReferenceType = Primitive._string;

type VideoSubTitleLanguageType = string;
type _VideoSubTitleLanguageType = Primitive._string;

/** A Composite containing details of a VideoType. */
interface _VideoType extends avs._VideoType_ERN43 {
	/** The Namespace of the VideoType. This is represented in an XML schema as an XML Attribute. */
	Namespace: string;
	/** A UserDefined value of the VideoType. This is represented in an XML schema as an XML Attribute. */
	UserDefinedValue: string;
}
export interface VideoType extends _VideoType { constructor: { new(): VideoType }; }
export var VideoType: { new(): VideoType };

type VideoVideoChapterReferenceType = string;
type _VideoVideoChapterReferenceType = Primitive._string;

type VideoVideoCueSheetReferenceType = string;
type _VideoVideoCueSheetReferenceType = Primitive._string;

/** A Composite containing details of a RightsController for a Work. RightsControllers are typically described by Name, Identifier and Role(s). */
interface _WorkRightsController extends BaseType {
	/** The Date that marks the end of the title (in ISO 8601 format: YYYY-MM-DD). */
	EndDate?: string;
	/** A Reference for a Party (specific to this Message). This is a LocalPartyAnchorReference starting with the letter P. */
	RightsControllerPartyReference: string;
	/** A type of the RightsController. */
	RightsControllerType?: avs.RightsControllerType;
	/** A role that describes the Party involved in the administration of Rights. */
	RightsControlType?: avs.RightsControllerRole[];
	/** The share of the licensed Rights owned by the RightsController. RightShare information is given as a xs:decimal value with up to 6 digits after the decimal point (e.g. '12.5' represents 12.5%). If no information is given, 100% is assumed.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/general-guidance-on-messages/communication-of-percentages */
	RightSharePercentage?: number;
	/** The Flag indicating whether the RightSharePercentage is unknown (=true) or not (=false). */
	RightShareUnknown?: boolean;
	/** The Date that marks the beginning of the title (in ISO 8601 format: YYYY-MM-DD). */
	StartDate?: string;
	/** The country of registration. */
	Territory?: AllTerritoryCode[];
}
export interface WorkRightsController extends _WorkRightsController { constructor: { new(): WorkRightsController }; }
export var WorkRightsController: { new(): WorkRightsController };

type WorkRightsControllerRightsControllerPartyReferenceType = string;
type _WorkRightsControllerRightsControllerPartyReferenceType = Primitive._string;

export interface document extends BaseType {
	/** A Message in the Release Notification Message Suite Standard, containing details of a new Release.Further Reading: https://kb.ddex.net/implementing-each-standard/best-practices-for-all-ddex-standards/guidance-on-message-exchange-protocols-and-choreographies */
	NewReleaseMessage: NewReleaseMessageType;
	/** A Message in the Release Notification Message Suite Standard, allowing a ReleaseCreator to 'purge' a Release that a DSP has on its books but that cannot be retracted or be taken down in the normal way (e.g. because its metadata is corrupt). */
	PurgeReleaseMessage: PurgeReleaseMessageType;
}
export var document: document;
