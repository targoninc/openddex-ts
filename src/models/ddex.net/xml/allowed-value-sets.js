var cxml = require("cxml");
var Primitive = require('../../xml-primitives');

cxml.register('http://ddex.net/xml/allowed-value-sets', exports, [
	[Primitive, ['string'], []]
], [
	'Activity',
	'AdditionalContributorRole',
	'AdditionalRightsClaimStatus',
	'AdditionalTitleType',
	'AdditionalVideoType',
	'AdministratingRecordCompanyRole',
	'AffiliationType',
	'AllIsoTerritoryCode',
	'AllTerritoryCode',
	'AllTerritoryCodeNoWorldwide',
	'ArAcknowledgementStatus',
	'ArActionType',
	'ArMessageType',
	'ArtistRole',
	'ArtistType',
	'AspectRatioType',
	'AsserterType',
	'AssertionStatus',
	'AudioCodecType',
	'AudioVisualType',
	'BasisForRevenueAllocation',
	'BinaryDataType',
	'Blockchain',
	'BusinessMusicalWorkContributorRole',
	'CarrierType',
	'CatalogTransferAcknowledgementStatus',
	'CatalogTransferStatus',
	'CatalogTransferType',
	'CdProtectionType',
	'CharacterType',
	'ClaimBasis',
	'ClaimStatus',
	'ClassifiedGenre',
	'ClipType',
	'CodingType',
	'CollectionMandateType',
	'CommentaryNoteType',
	'CommercialModelType',
	'CommercialModelType_ERN',
	'CommercialModelType_MWNL',
	'CompilationType',
	'CompositeMusicalWorkType',
	'Confidentiality',
	'ConsumerEngagementAnomalyType',
	'ContainerFormat',
	'ContainsAI',
	'ContributorClaimStatus',
	'ContributorRole',
	'ContributorRole_RDR',
	'CreationType',
	'CreativeMusicalWorkContributorRole',
	'CtProposedActionType',
	'CueOrigin',
	'CueSheetType',
	'CueUseType',
	'CueUseType_MWDR',
	'CurrencyCode',
	'CurrentTerritoryCode',
	'DanceStyle',
	'DataCarrierFormat',
	'DataCarrierType',
	'DdexTerritoryCode',
	'DdexTerritoryCodeNoWorldwide',
	'DeliveryFileType',
	'DeprecatedCurrencyCode',
	'DeprecatedIsoTerritoryCode',
	'DeprecatedReleaseType',
	'DigitizationMode',
	'DiscrepancyType',
	'DisplayArtistRole',
	'DisplayArtistRole_RDR',
	'DistributionChannelType',
	'DistributionClass',
	'DocumentType_LoD',
	'DocumentType_MWL',
	'DpidStatus',
	'DrmEnforcementType',
	'EditionType',
	'ElectroOpticalTransferFunctionType',
	'ElementConfiguration',
	'ElementDesignation',
	'EncodingType',
	'EquipmentManufacturer',
	'EquipmentModel',
	'EquipmentType',
	'ErncFileStatus',
	'ErncProposedActionType',
	'ErnMessageType',
	'ErnTestMessageType',
	'ErrorSeverity',
	'ErrorType',
	'EventType',
	'ExceptionReason',
	'ExpressionType',
	'ExternallyLinkedResourceType',
	'FileType',
	'FingerprintAlgorithmType',
	'Form',
	'FrameRate',
	'Gender',
	'Gender_PIE',
	'GoverningAgreementType',
	'HashSumAlgorithmType',
	'HdrVideoDynamicMetadataType',
	'HdrVideoStaticMetadataType',
	'ImageCodecType',
	'ImageType',
	'InstrumentManufacturer',
	'InstrumentModel',
	'InstrumentType',
	'Intensity',
	'Iso31661TerritoryCode',
	'Iso639Part12LanguageCode',
	'Iso639Part3LanguageCode',
	'IsoCurrencyCode',
	'IsoLanguageCode',
	'IsoTerritoryCode',
	'IswcStatus',
	'LabelNameType',
	'LabelType',
	'LanguageLocalizationType',
	'LicenseRecord',
	'LicenseRefusalReason',
	'LicenseRejectionReason',
	'LinkAcknowledgementStatus',
	'LinkDescription',
	'LyricsType',
	'MeasurementType',
	'MembershipType',
	'MessageActionType',
	'MessageControlType',
	'MessagePurpose',
	'MessageType',
	'MetadataSourceType',
	'MissingLinkReason',
	'Mode',
	'Mood',
	'MoodOrThemeType',
	'MusicalWorkContributorRole',
	'MusicalWorkType',
	'MwnlFileStatus',
	'MwnlProposedActionType',
	'NewStudioRole',
	'NftConfirmationStatus',
	'OperatingSystemType',
	'OriginalPurpose',
	'ParentalWarningStandard',
	'ParentalWarningType',
	'PartyNameFormat',
	'PartyNamePurpose',
	'PartyNameType',
	'PartyRelationshipType',
	'PartyRelationshipType_PIE',
	'PartyRole',
	'PartyType',
	'PendingReason',
	'PercentageType',
	'Period',
	'PhysicalCarrierType',
	'PLineType',
	'PriceInformationType',
	'PrimaryColorType',
	'ProductType',
	'ProfileId',
	'ProfileId_MWDR',
	'ProfileType',
	'Purpose',
	'RatingAgency',
	'RatingReason',
	'RdrcBatchStatus',
	'RdrcFileStatus',
	'RdrMessageType',
	'ReasonForNameChange',
	'RecipientRevenueType',
	'RecipientRevenueType_RDR',
	'RecordingFormat',
	'RecordingMode',
	'ReferenceCreation',
	'ReferenceUnit',
	'RegistrationStatus',
	'RejectionReason',
	'RelatedResourceType',
	'RelationalRelator',
	'ReleaseProfileVariantVersionId',
	'ReleaseProfileVersionId',
	'ReleaseRelationshipType',
	'ReleaseResourceType',
	'ReleaseType',
	'ReleaseType_DSR',
	'ReleaseType_ERN4',
	'ReleaseType_MCNOTIF',
	'ReportMessageType',
	'RequestMessagePurpose',
	'RequestReason',
	'ResourceContributorRole',
	'ResourceGroupType',
	'ResourceRelationshipType',
	'ResourceType',
	'ResourceType_CustomSet',
	'ResourceType_MCNOTIF',
	'ResourceType_RDR',
	'ResourceWorkRelationshipType',
	'ResponseType',
	'RevenueAllocationType',
	'RevenueSourceType',
	'RevocationReason',
	'RhythmStyle',
	'RightsClaimPolicyReason',
	'RightsClaimPolicyType',
	'RightsClaimStatus',
	'RightsControllerRole',
	'RightsControllerType',
	'RightsControlType',
	'RightsCoverage',
	'RightsCoverage_MWDR',
	'RightShareType',
	'RightShareType_MWDR',
	'RightsStatementProfile',
	'RinFileStatus',
	'RinMessageType',
	'RinProposedActionType',
	'RootChordNote',
	'RootChordQuality',
	'RoyaltyRateCalculationType',
	'RoyaltyRateType',
	'SessionType',
	'SheetMusicCodecType',
	'SheetMusicType',
	'SoftwareType',
	'SoundRecordingType',
	'SpecialContributorType',
	'Status',
	'SubGenre',
	'SubTitleType',
	'SummaryType',
	'SupplyChainStatus',
	'Tempo',
	'TerritoryCode',
	'TerritoryCodeType',
	'TerritoryCodeTypeIncludingDeprecatedCodes',
	'TextCodecType',
	'TextMusicRelationshipType',
	'TextType',
	'TextType_ATOM',
	'Theme',
	'ThemeType',
	'TimecodeType',
	'TisTerritoryCode',
	'TitleType',
	'TransferCategory',
	'TransferType',
	'UnitOfBitRate',
	'UnitOfConditionValue',
	'UnitOfCuePoints',
	'UnitOfDuration',
	'UnitOfExtent',
	'UnitOfFrameRate',
	'UnitOfFrequency',
	'UnitTypeForRevenueAllocation',
	'UserInterfaceType',
	'UserInterfaceType_ERN',
	'UseType',
	'UseType_AR',
	'UseType_BWARM',
	'UseType_DSR',
	'UseType_ERN',
	'UseType_MWNL',
	'UseType_RDR',
	'VersionType',
	'VersionType_MWDR',
	'VideoCodecType',
	'VideoDefinitionType',
	'VideoDefinitionType_DSR',
	'VideoType',
	'VideoType_DSR',
	'VideoType_ERN43',
	'VisualPerceptionType',
	'VocalRegister',
	'VocalType',
	'WorkPart',
	'WorkRelationshipType',
	'WorkRelationshipType_MWDR',
	'WorkType'
], [
	[0, 0, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []],
	[3, 1, [], []]
], [
]);