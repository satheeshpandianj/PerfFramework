// /////////////////////BASE URLs///////////////////////

export const BaseUrlQA = 'https://gw.qa.consumer.api.volvocars.com/';
export const BaseUrlTest = 'https://test2-emea-apim.azure-api.net/';
export const BaseUrlProd = 'https://gw.consumer.api.volvocars.com/';
export const BaseUrlScng = 'http://qaesd.volvocars.com/';

// ////////////////////HOME URLS//////////////////////////

export const HomeUrl = 'https://www.volvocars.com/';
export const HomeUrlQA = 'https://qaoxp.volvocars.com/';

// ////////////////////ENDPOINTS PATHS//////////////////////////

export const CDNavigationEndpoint = 'oxpcontent/v2/navigations?Market=';
export const CDFootersEndpoint = 'oxpcontent/v2/footers?Market=';
export const CDCAASContentEndpoint =
  'oxpcontent/item?path=/Generic Content/Content&includechildren=true';
export const CPTagsEndpoint = 'cache/purge/tags';
export const CPUrlsEndpoint = 'cache/purge/urls';
export const CMPostDictionaryEndpoint = 'content-management/v1/applications/';
export const CMDeleteDictionaryEndpoint = 'content-management/v1/applications/';
export const CMGetLanguageVersionEndpoint =
  'content-management/v1/applications/';
export const CMUpdateLanguageVersionEndpoint =
  'content-management/v1/applications/';
export const CMPublishLanguageVersionEndpoint =
  'content-management/v1/applications/';
export const CMUpdateDictionaryEndpoint = 'content-management/v1/applications/';
export const CMListDictionariesEndpoint = 'content-management/v1/applications/';
export const CMGetDictionaryEndpoint = 'content-management/v1/applications/';
export const CMGetOperationEndpoint = 'content-management/v1';
export const CMListLocalesEndpoint = 'content-management/v1/locales';
export const SSGCreateSiteFromBuildArtifactEndpoint = 'static/build-requests';
export const SSGCheckStatusofBuildRequestEndpoint = 'static/build-requests/';
export const SSGCheckStatusofDeployCommitEndpoint = 'static/deploy-requests/';
export const SSGCheckDeployCommitEndpoint = 'static/deploy-requests';
export const SSGAdminGetBuildDetailsEndpoint = 'static-admin/buildinfo/';
export const SSGAdminGetBuildsEndpoint = 'static-admin/buildinfo/';
export const SSGAdminRequestBuildDeploymentEndpoint =
  'static-admin/deploy-requests';
export const SSGAdminGetDeployRequestStatusEndpoint =
  'static-admin/deploy-requests/';
export const SSGAdminGetProjectsEndpoint = 'static-admin/projects';
export const NewCDGetDictionaryEndpoint = 'content-delivery/v1/applications/';
export const CMCreateOrUpdateContentTypeEndpoint =
  'content-management/v1/applications/';
export const CMDeleteContentTypeEndpoint =
  'content-management/v1/applications/';
export const CMGetContentTypeEndpoint = 'content-management/v1/applications/';
export const OffersEndpoint = 'dcom/offers/';
export const CommunicationServiceEndpoint = 'communication/';
export const FinancialCalculatorEndpoint = 'dcom/calculator/';
export const FinancialOptionsEndpoint = 'dcom/financialoptions/';
export const ProductCatalogEndpoint = 'productcatalog/';
export const ScngEndpoint = 'scngapi/v1/';
export const StockKeepingUnitCatalogEndpoint = 'stock-catalog/';
export const NewCDGetEntryEndpoint = 'content-delivery/v1/applications/';
export const CreateOrUpdateEditorialComponentEndpoint =
  'content-management/v1/applications/';
export const DeleteEditorialComponentEndpoint =
  'content-management/v1/applications/';
export const GetEditorialComponentEndpoint =
  'content-management/v1/applications/';
export const ListEditorialComponentEndpoint =
  'content-management/v1/applications/';
export const PricingCatalogEndpoint = 'pricing-catalog/';

// ////////////////////VCC API KEYS//////////////////////////

// //////////////////// HEADERS //////////////////////////

export const CMListEditorialComponentAcceptheader =
  'application/vnd.volvocars.api.contentmanagement.editorialcomponentlistresponsesuccessresponse+json';
export const CMGetEditorialComponentAcceptheader =
  'application/vnd.volvocars.api.contentmanagement.editorialcomponentsuccessresponse+json';
export const CMDeleteEditorialComponentAcceptheader =
  'application/vnd.volvocars.api.contentmanagement.stringsuccessresponse+json';
export const CMCreateOrUpdateEditorialComponentAcceptheader =
  'application/vnd.volvocars.api.contentmanagement.editorialcomponentsuccessresponse+json';
export const CMCreateOrUpdateEditorialComponentContentTypeHeader =
  'application/vnd.volvocars.api.contentmanagement.createorupdatecontenttyperequest+json';
export const CDNavigationAcceptheader =
  'application/vnd.volvocars.api.oxpcontent.navigationlistresponse.v2+json';
export const CDFootersAcceptheader =
  'application/vnd.volvocars.api.oxpcontent.footerlistresponse.v2+json';
export const CDCAASAcceptheader =
  'application/vnd.volvocars.api.oxpcontent.genericresponse.v1+json';
export const CPBearerTokenContentType = 'application/x-www-form-urlencoded';
export const CPTagsAcceptheader =
  'application/vnd.volvocars.api.cache.purger.purgingresponse.v1+json';
export const CPTagsContentTypeheader =
  'application/vnd.volvocars.api.cache.purger.purgecachetagsrequest.v1+json';
export const CPUrlsAcceptheader =
  'application/vnd.volvocars.api.cache.purger.purgingresponse.v1+json';
export const CPUrlsContentTypetheader =
  'application/vnd.volvocars.api.cache.purger.purgecacheurlsrequest.v1+json';
export const CMPostDictionaryAcceptHeader =
  'application/vnd.volvocars.api.contentmanagement.dictionarysuccessresponse+json';
export const CMPostDictionaryContentTypeHeader =
  'application/vnd.volvocars.api.contentmanagement.createdictionaryrequest+json';
export const CMDeleteDictionaryAcceptHeader =
  'application/vnd.volvocars.api.contentmanagement.stringsuccessresponse+json';
export const CMGetOperationAcceptHeader =
  'application/vnd.volvocars.api.contentmanagement.operationstatussuccessresponse+json';
export const CMGetLanguageVersionAcceptheader =
  'application/vnd.volvocars.api.contentmanagement.languageversionsuccessresponse+json';
export const CMUpdateLanguageVersionAcceptHeader =
  'application/vnd.volvocars.api.contentmanagement.languageversionasyncresponse+json';
export const CMUpdateLanguageVersionContentTypeHeader =
  'application/vnd.volvocars.api.contentmanagement.updatelanguageversionrequest+json';
export const CMPublishLanguageVersionAcceptHeader =
  'application/vnd.volvocars.api.contentmanagement.stringasyncresponse+json';
export const CMPublishLanguageVersionContentTypeHeader =
  'application/vnd.volvocars.api.contentmanagement.publishlanguageversionrequest+json';
export const CMUpdateDictionaryAcceptHeader =
  'application/vnd.volvocars.api.contentmanagement.dictionarysuccessresponse+json';
export const CMUpdateDictionaryContentTypeHeader =
  'application/vnd.volvocars.api.contentmanagement.updatedictionaryrequest+json';
export const CMListDictionariesAcceptHeader =
  'application/vnd.volvocars.api.contentmanagement.dictionarylistresponse+json';
export const CMGetDictionaryAcceptHeader =
  'application/vnd.volvocars.api.contentmanagement.dictionarysuccessresponse+json';
export const SSGCreateSiteFromBuildArtifactAcceptHeader =
  'application/vnd.volvocars.api.static.site.generator.stringasyncresponse+json';
export const SSGCreateSiteFromBuildArtifactContentTypeHeader =
  'application/vnd.volvocars.api.static.site.generator.buildrequest.v1+json';
export const SSGCheckStatusofBuildRequestAcceptHeader =
  'application/vnd.volvocars.api.static.site.generator.stringasyncresponse+json';
export const SSGCheckStatusofDeployCommitAcceptHeader =
  'application/vnd.volvocars.api.static.site.generator.stringasyncresponse+json';
export const SSGDeployCommitAcceptHeader =
  'application/vnd.volvocars.api.static.site.generator.stringasyncresponse+json';
export const SSGDeployCommitContentTypeHeader =
  'application/vnd.volvocars.api.static.site.generator.deployrequest.v1+json';
export const SSGAdminBearerTokenContentTypeHeader =
  'application/x-www-form-urlencoded';
export const SSGAdminGetBuildDetailsAcceptHeader =
  'application/vnd.volvocars.api.static.site.generator.preview.builddetails.v1+json';
export const SSGAdminGetBuildsAcceptHeader =
  'application/vnd.volvocars.api.static.site.generator.preview.buildinfo.v1+json';
export const SSGAdminRequestBuildDeploymentAcceptHeader =
  'application/vnd.volvocars.api.static.site.generator.preview.asyncresponse`1+json';
export const SSGAdminRequestBuildDeploymentContentTypeHeader =
  'application/vnd.volvocars.api.static.site.generator.preview.deployrequest.v1+json';
export const SSGAdminGetDeployRequestStatusAcceptHeader =
  'application/vnd.volvocars.api.static.site.generator.preview.asyncresponse`1+json';
export const SSGAdminGetProjectsAcceptHeader =
  'application/vnd.volvocars.api.static.site.generator.preview.projectresponse.v1+json';
export const NewCDGetDictionaryAcceptheader =
  'application/vnd.volvocars.api.contentdelivery.dictionarysuccessresponse+json';
export const NewCDGetEntryAcceptHeader =
  'application/vnd.volvocars.api.contentdelivery.entrysuccessresponse+json';
export const CMCreateOrUpdateContentTypeAcceptHeader =
  'application/vnd.volvocars.api.contentmanagement.contenttypesuccessresponse+json';
export const CMCreateOrUpdateContentTypeContentTypetHeader =
  'application/vnd.volvocars.api.contentmanagement.createorupdatecontenttyperequest+json';
export const CMGetContentTypeAcceptHeader =
  'application/vnd.volvocars.api.contentmanagement.contenttypesuccessresponse+json';
export const CMGetListLocalesAcceptHeader =
  'application/vnd.volvocars.api.contentmanagement.localelistresponse+json';
export const CMDeleteContentTypeAcceptHeader =
  'application/vnd.volvocars.api.contentmanagement.stringsuccessresponse+json';
export const OffersGetOffersAcceptHeader =
  'application/vnd.volvocars.api.dcom.offers.offersresponse.v1+json';
export const CSBearerTokenContentTypeHeader =
  'application/x-www-form-urlencoded';
export const CSGetAccountAcceptHeader =
  'application/vnd.volvocars.api.communicationservice.accountsresponse.v1+json';
export const CSGetTemplatesAcceptHeader =
  'application/vnd.volvocars.api.communicationservice.templatesresponse.v1+json';
export const CSRegisterEventAcceptHeader = 'application/json';
export const CSGetRegisteredEventAcceptHeader =
  'application/vnd.volvocars.api.communicationservice.eventsresponse.v1+json';
export const CSRegisterEventContentType =
  'application/vnd.volvocars.api.communicationservice.eventregistrationinfo.v1+json';
export const CSGetReferenceForAttachmentUploadAcceptHeader =
  'application/vnd.volvocars.api.communicationservice.referenceforattachmentuploadresponse.v1+json';
export const CSSendMessageAcceptHeader = 'application/json';
export const CSSendMessageContentTypeHeader =
  'application/vnd.volvocars.api.communicationservice.messagedata.v1+json';
export const CSUnregisterEventAcceptHeader = 'application/json';
export const FCGenericCalculateAcceptheader =
  'application/vnd.volvocars.api.financial.calculator.calculationresultmodelresponse.v1+json';
export const FCGenericCalculateContentTypeHeader =
  'application/vnd.volvocars.api.financial.calculator.calculationinputmodel.v1+json';
export const FCHirePurchaseAcceptHeader =
  'application/vnd.volvocars.api.financial.calculator.calculationresultmodelresponse.v1+json';
export const FCHirePurchaseContentTypeHeader =
  'application/vnd.volvocars.api.financial.calculator.hirepurchasecalculationinputmodel.v1+json';
export const FCLeaseAcceptHeader =
  'application/vnd.volvocars.api.financial.calculator.calculationresultmodelresponse.v1+json';
export const FCLeaseContentTypeHeader =
  'application/vnd.volvocars.api.financial.calculator.leasecalculationinputmodel.v1+json';
export const FCLeaseUsingMoneyFactorAcceptHeader =
  'application/vnd.volvocars.api.financial.calculator.calculationresultmodelresponse.v1+json';
export const FCLeaseUsingMoneyFactorContentTypeHeader =
  'application/vnd.volvocars.api.financial.calculator.leasewithmoneyfactorcalculationinputmodel.v1+json';
export const FCLeaseWithVatWriteOffAcceptHeader =
  'application/vnd.volvocars.api.financial.calculator.calculationresultmodelresponse.v1+json';
export const FCLeaseWithVatWriteOffContentTypeHeader =
  'application/vnd.volvocars.api.financial.calculator.leasewithvatwriteoffcalculationinputmodel.v1+json';
export const FCLoanAcceptHeader =
  'application/vnd.volvocars.api.financial.calculator.calculationresultmodelresponse.v1+json';
export const FCLoanContentTypeHeader =
  'application/vnd.volvocars.api.financial.calculator.loancalculationinputmodel.v1+json';
export const FCPersonalContractPurchaseAcceptHeader =
  'application/vnd.volvocars.api.financial.calculator.calculationresultmodelresponse.v1+json';
export const FCPersonalContractPurchaseContentTypeHeader =
  'application/vnd.volvocars.api.financial.calculator.pcpcalculationinputmodel.v1+json';
export const FOGetConfigurationAcceptHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.configurationresponse.v1+json';
export const FOGetPriceTagAcceptHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.pricetagsresponse.v1+json';
export const FOLeaseCalculationAcceptHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.leasecalculationresponse.v1+json';
export const FOLeaseCalculationContentTypeHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.leasecalculationrequest.v1+json';
export const FOCalculateVehicleCostAcceptHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.vehiclecostcalculationresponse.v1+json';
export const FOCalculateVehicleCostContentTypeHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.vehiclecostcalculationrequest.v1+json';
export const FOCashCalculationAcceptHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.cashcalculationresponse.v1+json';
export const FOCashCalculationContentTypeHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.cashcalculationrequest.v1+json';
export const FOLoanCalculationAcceptHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.loancalculationresponse.v1+json';
export const FOLoanCalculationContentTypeHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.loancalculationrequest.v1+json';
export const FOSubCalculationAcceptHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.subcalculationresponse.v1+json';
export const FOSubCalculationContentTypeHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.subcalculationrequest.v1+json';
export const FOMonthlyCalculationAcceptHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.monthlycalculationresponse.v2+json';
export const FOMonthlyCalculationContentTypeHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.monthlycalculationrequest.v2+json';
export const FOCalculateWithTemplateAcceptHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.withtemplatecalculationresponse.v1+json';
export const FOCalculateWithTemplateContentTypeHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.withtemplatecalculationrequest.v1+json';
export const FOGetDealerIdAcceptHeader = 'application/json;v=1.0';
export const FOGetBrandAcceptHeader = 'application/json;v=1.0';
export const FOGetCostValueTemplatesAcceptHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.costvaluetemplatesresponse.v1+json';
export const FOSubFixedCalculationAcceptHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.subfixedcalculationresponse.v1+json';
export const FOSubFixedCalculationContentTypeHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.subfixedcalculationrequest.v1+json';
export const FOListMarketsAcceptHeader =
  'application/vnd.volvocars.api.dcom.financialoptions.marketsresponse.v1+json';
export const PCCarModelAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.carmodelresponse.v1+json';
export const PCCarModelsAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.carmodellistresponse.v1+json';
export const PCCarModelVariantAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.carmodelvariantresponse.v1+json';
export const PCCarModelVarianstAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.carmodelvariantlistresponse.v1+json';
export const PCSCNGAccessoriesAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.nodesresponse.v1+json';
export const PCSCNGFeaturesAndOptionsAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.nodesresponse.v1+json';
export const PCSCNGItemsAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.itemsresponse.v1+json';
export const PCSCNGModelAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.modelsresponse.v1+json';
export const PCSCNGModelsAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.modelsresponse.v1+json';
export const PCSCNGModelYearsAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.modelyearsresponse.v1+json';
export const SKUGetSkusAcceptHeader =
  'application/vnd.volvocars.api.stockcatalog.skudefinitionresponse.v1+json';
export const SKUPostSkuContentTypeHeader =
  'application/vnd.volvocars.api.stockcatalog.createorgetskufromcarconfigurationrequest.v1+json';
export const SKUPostSkuAcceptHeader =
  'application/vnd.volvocars.api.stockcatalog.createorgetskufromcarconfigurationresponse.v1+json';
export const SKUSimpleSkuContentTypeHeader =
  'application/vnd.volvocars.api.stockcatalog.createorgetsimpleskurequest.v1+json';
export const SKUSimpleSkuAcceptHeader =
  'application/vnd.volvocars.api.stockcatalog.createorgetsimpleskuresponse.v1+json';
export const PCGetOffersAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.offerlistresponse.v1+json';
export const PCGetOfferAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.offerresponse.v1+json';
export const PCGetProductAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.productresponse.v1+json';
export const PCListProductsAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.productlistresponse.v1+json';
export const PCGetMarketAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.marketresponse.v1+json';
export const PCListMarketsAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.marketlistresponse.v1+json';
export const PCItemFromCarConfigurationAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.productidresponse.v1+json';
export const PCListLocalizationsAcceptHeader =
  'application/vnd.volvocars.api.productcatalog.localizationlistresponse.v1+json';
export const PCItemFromCarConfigurationContentTypeHeader =
  'application/vnd.volvocars.api.productcatalog.itemfromcarrequest.v1+json';
export const PricingCatalogPriceCalculationsAcceptHeader =
  'application/vnd.volvocars.api.pricingcatalog.pricecalculationresponse.v1+json';
export const PricingCatalogPriceCalculationsContentTypeHeader =
  'application/vnd.volvocars.api.pricingcatalog.pricecalculationrequest.v1+json';
export const PricingCatalogSalesModelsAcceptHeader =
  'application/vnd.volvocars.api.pricingcatalog.salesmodellistresponse.v1+json';
export const PricingCatalogSalesModelAcceptHeader =
  'application/vnd.volvocars.api.pricingcatalog.salesmodelresponse.v1+json';
export const PricingCatalogListMarketsAcceptHeader =
  'application/vnd.volvocars.api.pricingcatalog.marketlistresponse.v1+json';

// ////////////////////BEARER TOKEN URLS//////////////////////////

export const CPBearerTokenUrl =
  'https://login.microsoftonline.com/81fa766e-a349-4867-8bf4-ab35e250a08f/oauth2/token';
export const SSGAdminBearerTokenUrl =
  'https://login.microsoftonline.com/81fa766e-a349-4867-8bf4-ab35e250a08f/oauth2/token';
export const CSBearerTokenUrl =
  'https://login.microsoftonline.com/volvocars.onmicrosoft.com/oauth2/token';

// ////////////////////TEST DATA//////////////////////////////////

export const dictionaryNameMarket = 'DoNotDelete.This.Testmarket';
export const dictionaryMarket = 'se';
export const applicationIDTest = 'sampleApplication';
export const applicationIDQA = 'sampleApplication';
export const applicationIDProd = 'sampleApplication';
export const dictionaryName = 'TestName';
export const namespace = 'DeletetThis.test.Dictionary';
export const item1 = 'MyFirstKey';
export const item2 = 'MySecondKey';
export const item3 = 'MyThirdKey';
export const item1Value = 'FirstValue';
export const item2Value = 'SecondValue';
export const item3Value = 'ThirdValue';
export const Newname = 'NewTestName';
export const UpdatedNameSpace = 'UpdatedDelete.this';
export const SSGProjects = 'static-site-generator-sample';
export const SSGCommit = 'd5e1c7c';
export const SSGAdminBuildID = 'd5e1c7c-2019-10-31t13-00-26z';
export const SSGWrongGUID = 'd126a464-c25a-49b7-b287-9b76c99c86a4';
export const NewCDCanonicalDictionaryName = 'donotdelete.this.previewtest';
export const NewCDCanonicalEntryName = 'DoNotDeleteEntryTest.NewEntryTest';
export const DataSource = 'sitecore9';
export const CMContentTypeNameSpace = 'Delete.This';
export const CMUpdatedContentTypeNameSpace = 'UpdatedDelete.This';
export const CMUpdatedContentTypeName = 'SampleApplication_UpdatedContnetType';
export const CMContentTypeReferenceTypeLocationLocal =
  'sampleApplication:donotdelete.reference';
export const CMContentTypeReferenceArrayTypeLocationLocal =
  'sampleApplication:doNotDelete.referenceArray';
export const CMContentTypeReferenceContentTypesAllowed =
  'sampleApplication_TextType';
export const CMContentTypeReferenceTypeLocationGlobal =
  'global:donotdelete.reference';
export const CMContentTypeReferenceArrayTypeLocationGlobal =
  'global:doNotDelete.referenceArray';
export const SSGPerformanceTestDocumentID = '5dbbfc4311a52a1cd134eb08';
export const SSGTestPerformanceSiteUrl =
  'http://static-site-generator-performance-test.ccdp-origin.io/test/';


// ///////////////////////////////////  Retailer API  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// endpoints
export const GetRetailerByIdURL = 'retailers/';
export const GetRetailersURL = 'retailers/';
export const GetRetaliersByLatLongURL = 'retailers/locations?';
export const GetRetailerZipCodeURL = 'retailers/territories?zipCode=';

// accept
export const GetRetailerByIdAccept =
  'application/vnd.volvocars.api.retailers.retailer.v1+json';
export const GetRetailersAccept =
  'application/vnd.volvocars.api.retailers.retailerlist.v1+json';
export const GetRetailerByLatLongAccept =
  'application/vnd.volvocars.api.retailers.locationlist.v1+json';
export const GetRetailerZipCodeAccept =
  'application/vnd.volvocars.api.retailers.territorylocationlist.v1+json';

// ////////////////  URL Shortening  and URL Shortening Lookup Services APIs \\\\\\\\\\\\\\\\\\\\

// endpoints
export const UrlShorteningURL = 'uss/urls/';
export const GetFullUrlURL = 'uss-lookup/urls/';

// accept
export const UrlShorteningAccept =
  'application/vnd.volvocars.api.urlshortening.urlresponse.v1+json';
export const GetFullUrlAccept =
  'application/vnd.volvocars.api.urlshortening.urlresponse.v1+json';

// Content-Type
export const UrlShorteningContentType =
  'application/vnd.volvocars.api.urlshortening.urlrequest.v1+json';

// ///////////////////////////////////  CFS Accounts API  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// endpoints
export const CfsAccountsURL = 'cfs/accounts/self';

// accept
export const CfsAccountsAcceptV2 =
  'application/vnd.volvocars.api.accounts.account.v2+json';

// ///////////////////////////////////  CFS Order Tracking API  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// endpoints
export const CfsOrderTrackingURL = 'cfs/ordertracking/orders/';
export const CfsOrderTrackingFieldsURL = 'cfs/ordertracking/settings/fields';
export const CfsOrderTrackingMarketURL = 'cfs/ordertracking/settings/market';

// accept
export const CfsOrderTrackingAcceptV2 =
  'application/vnd.volvocars.api.ordertracking.orderlist.v2+json';
export const CfsOrderTrackingAcceptV3 =
  'application/vnd.volvocars.api.ordertracking.orderlist.v3+json';

export const CfsGetOrderTrackingFieldsAccept =
  'application/vnd.volvocars.api.ordertracking.fields.v1+json';
export const CfsGetOrderTrackingMarketAccept =
  'application/vnd.volvocars.api.ordertracking.settings.v1+json';

// ///////////////////////////////////  CFS Profiles API  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// endpoints
export const CfsProfilesURL = 'cfs/profiles/self/';
export const CfsProfilesFieldsURL = 'cfs/profiles/settings/fields';
export const CfsProfilesMarketURL = 'cfs/profiles/settings/market';

// accept
export const CfsProfilesAcceptV2 =
  'application/vnd.volvocars.api.profiles.profile.v2+json';
export const CfsGetProfilesFieldsAccept =
  'application/vnd.volvocars.api.profiles.fields.v2+json';
export const CfsGetProfilesMarketAccept =
  'application/vnd.volvocars.api.profiles.settings.v1+json';

// content-type
export const CfsProfilesContentTypeV2 =
  'application/vnd.volvocars.api.profiles.updateprofile.v2+json';

// ///////////////////////////////////  CFS Vehicles API  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// endpoints
export const CfsVehiclesURL = 'cfs/vehicles/';
export const CfsVehiclesMarketURL = 'cfs/vehicles/settings/market';

// accept
export const CfsVehiclesAcceptV2 =
  'application/vnd.volvocars.api.vehicles.vehiclelist.v2+json';
export const CfsGetVehiclesAcceptV2 =
  'application/vnd.volvocars.api.vehicles.vehicle.v2+json';
export const CfsGetVehiclesFieldsAccept =
  'application/vnd.volvocars.api.vehicles.fields.v1+json';
export const CfsGetVehiclesMarketAccept =
  'application/vnd.volvocars.api.vehicles.settings.v1+json';

// content-type
export const CfsVehiclesContentTypeV2 =
  'application/vnd.volvocars.api.vehicles.vehiclerequest.v2+json';
export const CfsVehiclesContentTypeLicensePlate =
  'application/vnd.volvocars.api.vehicles.vehicleupdate.v1+json';

// /////////////////////////////////// Account Administration API \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// endpoints
export const AccountAdminURL = 'account-administrate/invites';
export const AccountAdminInviteV3URL = 'account-administrate/v3/invites';
export const AccountAdminInviteV4URL = 'account-administrate/v4/invites';
export const AccountAdminAssemblyURL =
  'account-administrate/about/assembly_version';
export const AccountAdminGetAccountProfileURL =
  'account-administrate/v1/accounts/';
export const AccountAdminSearchURL = 'account-administrate/v1/accounts/search';

// accept
export const AccountAdminAccept = 'application/json';
export const AccountAdminAcceptV2 =
  'application/vnd.volvocars.api.account-administration.asyncinviteresponse.v2+json';
export const AccountAdminAcceptV4 =
  'application/vnd.volvocars.api.account-administration.inviteresponse.v1+json';
export const AccountAdminGetInvitesAccept =
  'application/vnd.volvocars.api.account-administration.consumerinvitationlist.v2+json';
export const AccountAdminGetInviteDetailsAccept =
  'application/vnd.volvocars.api.account-administration.consumerinvitation.v2+json';
export const AccountAdminGetAccountProfileAccept =
  'application/vnd.volvocars.api.account-administration.accountprofile.v1+json';
export const AccountAdminGetAccountProfileUpdateAccept =
  'application/vnd.volvocars.api.account-administration.asyncaccountprofileupdateresponse.v1+json';
export const AccountAdminGetAccountProfileUpdateStatusAccept =
  'application/vnd.volvocars.api.account-administration.asyncstatusresponse.v1+json';
export const AccountAdminSearchAccept =
  'application/vnd.volvocars.api.account-administration.searchprofileresponse.v1+json';

// content-type
export const AccountAdminContentType =
  'application/vnd.volvocars.api.account-administration.inviterequest.v1+json';
export const AccountAdminContentTypeV2 =
  'application/vnd.volvocars.api.account-administration.inviterequest.v2+json';
export const AccountAdminUpdateProfileContentType =
  'application/vnd.volvocars.api.account-administration.accountprofileupdate.v1+json';
export const AccountAdminSearchContentType =
  'application/vnd.volvocars.api.account-administration.searchrequest.v1+json';

// /////////////////////////////////// Account Profile API \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// endpoints
export const AccountProfileURL = 'account-profiles/v1/accounts/self';
export const AccountProfileGetFieldsURL =
  'account-profiles/v1/accounts/settings/fields';

// accept
export const AccountProfileAccept =
  'application/vnd.volvocars.api.accountprofile.account.v1+json';
export const AccountProfielGetFieldsAccept =
  'application/vnd.volvocars.api.accountprofile.settingslist.v1+json';
export const AccountProfilePutAccept = 'application/json';

// content-type
export const AccountProfileContentType =
  'application/vnd.volvocars.api.accountprofile.updateaccount.v1+json';

// ///////////////////////////////////  CBV Subscriptions API  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// endpoints
export const CbvSubscriptionsURL = 'cbvs/subscriptions/';
export const CbvSubscriptionGetMilageURL = 'cbvs/subscriptions/contracts/';
export const CbvSubscriptionsSearchURL = 'cbvs/subscriptions/search';

// accept
export const CbvSubscriptionsAcceptV2 =
  'application/vnd.volvocars.api.cbvservices.pagedsubscriptionlist.v2+json';
export const CbvSubscriptionsAcceptV3 =
  'application/vnd.volvocars.api.cbvservices.pagedsubscriptionlist.v3+json';
export const CbvSubscriptionsAcceptGetMilageV2 =
  'application/vnd.volvocars.api.cbvservices.contract.v2+json';
export const CbvSubscriptionsAcceptGetBankAccount =
  'application/vnd.volvocars.api.cbvservices.bankaccount.v1+json';
export const CbvSubscriptionsAcceptSearch =
  'application/vnd.volvocars.api.cbvservices.pagedsubscriptionlist.v3+json';

// content-type
export const CbvSubscriptionsContentType =
  'application/vnd.volvocars.api.cbvservices.subscriptionsearch.v3+json';

// ///////////////////////////////////  CBV Profiles API  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// endpoints
export const CbvProfilesGetUserURL = 'cbvs/profiles/self';

// accept
export const CbvProfilesGetUserAccept =
  'application/vnd.volvocars.api.cbvservices.user.v1+json';

// ///////////////////////////////////  CBV Invoice API  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// endpoints
export const CbvGetInvoicesURL = 'cbvs/invoices/';
export const CbvInvoiceGetUrlURL = 'cbvs/invoices/urls/';

// accept
export const CbvGetInvoicesAcceptv1 =
  'application/vnd.volvocars.api.cbvservices.pagedinvoicelist.v1+json';
export const CbvGetInvoicesAcceptv2 =
  'application/vnd.volvocars.api.cbvservices.pagedinvoicelist.v2+json';
export const CbvInvoiceGetUrlAccept =
  'application/vnd.volvocars.api.cbvservices.downloadlink.v1+json';

// /////////////////////////////////// CBV Subscription Status API  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// endpoints
export const SubscriptionStatusGetCbvMarketsURL =
  'cbv-subscription-status/v1/settings/markets';
export const SubscriptionStatusSubscriptionsUsageURL =
  'cbv-subscription-status/v1/usage/subscriptions';
export const SubscriptionStatusGetURL =
  'cbv-subscription-status/v1/subscriptions';
export const SubscriptionStatusStatisticsURL =
  'cbv-subscription-status/v1/usage/overview?percentage=';
export const SubscriptionStatusInvoicesURL =
  'cbv-subscription-status/v1/invoices?market=';
export const SubscriptionStatusSearchURL =
  'cbv-subscription-status/v1/subscriptions/search';

// accept
export const SubscriptionStatusGetCbvMarketAccept =
  'application/vnd.volvocars.api.cbvservices.subscription.status.cbvmarkets.v1+json';
export const SubscriptionStatusSubscriptionsUsageAccept =
  'application/vnd.volvocars.api.cbvservices.subscription.status.subscriptionusagelist.v1+json';
export const SubscriptionStatusUsageAccept =
  'application/vnd.volvocars.api.cbvservices.subscription.status.subscriptionusagelist.v1+json';
export const SubscriptionStatusGetByIdAccept =
  'application/vnd.volvocars.api.cbvservices.subscription.status.subscription.v1+json';
export const SubscriptionStatusStatisticsAccept =
  'application/vnd.volvocars.api.cbvservices.subscription.status.usageoverview.v1+json';
export const SubscriptionStatusInvoicesAccept =
  'application/vnd.volvocars.api.cbvservices.subscription.status.invoicelist.v1+json';
export const SubscriptionStatusMilageAccept =
  'application/vnd.volvocars.api.cbvservices.subscription.status.contract.v1+json';
export const SubscriptionStatusAccept =
  'application/vnd.volvocars.api.cbvservices.subscription.status.subscriptionlist.v1+json';

// content-type
export const SubscriptionStatusContentType =
  'application/vnd.volvocars.api.cbvservices.subscription.status.cmsubscriptionsearch.v1+json';

// ///////////////////////////////////  CBV Fleet Status API  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// endpoints
export const CbvFleetStatusAssemblyVerURL =
  'care-by-volvo-fleet-status/about/assembly_version';
export const CbvFleetVehicleStatusListURL =
  'care-by-volvo-fleet-status/v1/status/vehicles';

// accept
export const CbvFleetVehicleStatusListAccept =
  'application/vnd.volvocars.api.care-by-volvo-fleet-status.vehiclestatuslist.v1+json';
export const CbvFleetVehicleStatusAccept =
  'application/vnd.volvocars.api.care-by-volvo-fleet-status.vehiclestatusresponse.v1+json';

// content-type
export const CbvSearchContentType =
  'application/vnd.volvocars.api.care-by-volvo-fleet-status.vehiclestatusrequest.v1+json';

// /////////////////////////////////////// Extended Vehicle Status API  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export const ExtendedVehicleStatusApiUrlPrefixQA =
  'https://qaapi.volvocars.com/extended-vehicle';

export const ExtendedVehicleStatusApiUrlPrefixTest =
  'https://test-global-open-innovation-portal-apim.azure-api.net/extended-vehicle';

export const ExtendedVehicleStatusApiUrlPrefixProd =
  'https://api.volvocars.com/extended-vehicle';

// endpoints
export const GetVehicleListURL = '/v1/vehicles';
export const GetVehicleStatusListURL = '/containers/vehiclestatus';
export const GetVehicleResourceURL = '/resources';

// accept
export const ExtendedVehicleAccept = 'application/json';

// /////////////////////////////////////// Connected Vehicle API  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

export const ConnectedVehicleApiUrlPrefixQA =
  'https://qaapi.volvocars.com/connected-vehicle';

export const ConnectedVehicleApiUrlPrefixTest =
  'https://test-global-open-innovation-portal-apim.azure-api.net/connected-vehicle';

export const ConnectedVehicleApiUrlPrefixProd =
  'https://api.volvocars.com/connected-vehicle';

export const ConnectedVehicleSearchUrl = '/requests/search';
export const ConnectedVehicleRequestUrl = '/requests';

// endpoints
export const GetConnectedVehicleListURL = '/v1/vehicles';
// export const GetVehicleStatusListURL = '/containers/vehiclestatus';
// export const GetVehicleResourceURL = '/resources';

// accept
export const ConnectedVehicleCommandListAccept =
  'application/vnd.volvocars.api.connected-vehicle.requestlist.v1+json';
export const ConnectedVehicleSearchCommandListAccept =
  'application/vnd.volvocars.api.connected-vehicle.searchrequestlist.v1+json';
export const ConnectedVehicleDataAccept =
  'application/vnd.volvocars.api.connected-vehicle.vehicledata.v1+json';

export const ConnectedVehicleListAccept =
  'application/vnd.volvocars.api.connected-vehicle.vehiclelist.v1+json';
export const ConnectedVehicleDetailsAccept =
  'application/vnd.volvocars.api.connected-vehicle.vehicle.v1+json';
export const ConnectedVehicleCommandsAccessibilityAccept =
  'application/vnd.volvocars.api.connected-vehicle.commands.accessibility.v1+json';

// content-type
export const ConnectedVehicleSearchContentType =
  'application/vnd.volvocars.api.connected-vehicle.searchrequestlist.v1+json';
export const ConnectedVehicleFlashContentType =
  'application/vnd.volvocars.api.connected-vehicle.flash.v1+json';
export const ConnectedVehicleLockContentType =
  'application/vnd.volvocars.api.connected-vehicle.lock.v1+json';
export const ConnectedVehicleUnlockContentType =
  'application/vnd.volvocars.api.connected-vehicle.unlock.v1+json';
export const ConnectedVehicleClimatizationStopContentType =
  'application/vnd.volvocars.api.connected-vehicle.climatizationstop.v1+json';
export const ConnectedVehicleClimatizationStartContentType =
  'application/vnd.volvocars.api.connected-vehicle.climatizationstart.v1+json';
export const ConnectedVehicleEngineStopContentType =
  'application/vnd.volvocars.api.connected-vehicle.enginestop.v1+json';
export const ConnectedVehicleEngineStartContentType =
  'application/vnd.volvocars.api.connected-vehicle.enginestart.v1+json';
export const ConnectedVehicleHonkContentType =
  'application/vnd.volvocars.api.connected-vehicle.honk.v1+json';
export const ConnectedVehicleHonkAndFlashContentType =
  'application/vnd.volvocars.api.connected-vehicle.honkandflash.v1+json';
export const ConnectedVehiclePointOfInterestContentType =
  'application/vnd.volvocars.api.connected-vehicle.navipointofinterest.v1+json';

// ///////////////////////////////////////    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// operation id
export const VccOperationId = 'vcc-api-operationid';

// /////////////////////////////////// Error Messages \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
export const InvalidEndpointErrorMessage = 'INVALID ENDPOINT';

// /////////////////////CCE BASE URLs///////////////////////
export const CCEBaseURLDev =
  'https://cce-internal.euwest1.development.volvo.care';
export const CCEBaseURLStage =
  'https://cce-internal.euwest1.staging.volvo.care';

export const TyreLabelBaseURLDev =
  'https://apigw-pub-test.euwest1.development.volvo.care/cce/tyre-label-api';
export const TyreLabelBaseURLStage =
  'https://apigw-pub-qa.euwest1.staging.volvo.care/cce/tyre-label-api';
export const TyreLabelBaseURLProd =
  'https://apigw-pub.euwest1.production.volvo.care/cce/tyre-label-api';
export const TyreLabelImageBaseURLDev =
  'https://vcc-tyre-label.s3.eu-west-1.amazonaws.com/';
export const TyreLabelImageBaseURLStage =
  'https://vcc-tyre-label-stg.s3.eu-west-1.amazonaws.com/';
export const TyreLabelImageBaseURLProd =
  'https://vcc-tyre-label.s3.eu-west-1.amazonaws.com/';
export const TyreLabelEprelBaseUrl = 'https://eprel.ec.europa.eu/qr/';

export const GraphQLDev = 'https://cce.euwest1.development.volvo.care/graphql';
export const GraphQLStage = 'https://cce.euwest1.staging.volvo.care/graphql';
export const GraphQLProd = 'https://cce.euwest1.production.volvo.care/graphql';

export const OptimizationAPIDev =
  'https://cce-internal.euwest1.development.volvo.care/api/optimization/graphql';
export const OptimizationAPIStage =
  'https://cce-internal.euwest1.staging.volvo.care/api/optimization/graphql';
export const OptimizationAPIProd =
  'https://cce-internal.euwest1.production.volvo.care/api/optimization/graphql';

export const GarageServiceDev =
  'https://cce-internal.euwest1.development.volvo.care/api/garage/saveconfiguration';
export const GarageServiceStage =
  'https://cce.euwest1.staging.volvo.care/api/garage/saveconfiguration';
export const GarageServiceProd = '';

// ////////////////////CCE ENDPOINTS PATHS//////////////////////////

// Filter-Admin
export const GetFilterNewEndpoint = '/api/filter-admin/v2/filters/new';
export const GetFilterEndpoint = '/api/filter-admin/v2/filters';
export const GetRequiredComponentsEndpoint =
  '/api/filter-admin/v2/filters/requiredComponents';
export const GetPoliciesEndpoint = '/api/filter-admin/v2/policies/';
export const GetPoliciesTreeParentsReversed =
  '/api/filter-admin/v2/tree/policies';

export const CreateFilterPoliciesEndpoint = '/api/filter-admin/v2/policies';
export const DeleteFilterPoliciesEndpoint = '/api/filter-admin/v2/policies/';
export const ForceDeleteFilterPoliciesEndpoint =
  '/api/filter-admin/v2/policies/force/';
export const GetPutFilterPolicies = '/api/filter-admin/v2/policies/';
export const GetRequestStatus = '/api/filter-admin/v2/policies/status/';
export const GetPoliciesTreeEndpoint = '/api/filter-admin/v2/tree/policies';
export const PostPoliciesStatusEndpoint =
  '/api/filter-admin/v2/policies/status';
export const GetPartnerRulesEndpoint =
  '/api/filter-admin/partner/rulesForPolicy';
export const GetPoliciesForPartnerEndPoint =
  '/api/filter-admin/partner/validPolicies';
export const GetPartnersEndPoint = '/api/filter-admin/partner/partners';

// EU Tyre Label
export const SearchByFeatureGroupsEndPoint = '/search/by-feature-groups';
export const SearchByPartNumbersEndPoint = '/search/by-part-numbers';


// .env constants

export const AZURE_COSMOSDB_USER = 'reports';
export const AZURE_COSMOSDB_PASSWORD = 'OnWxYKGtW25PWY0NdTidKGymUjSOhG59TfatvyNFju1Cc5StNAI8J1ZdOlI6klHOgiJl1s6cOqJZyStcKmIE7A % 3D% 3D';
export const VCC_API_TEST = '6455005fb02040f084cc1495771f412e';
export const VCC_API_QA = '51b86ecdbe9e400784eb413af939596e';
export const VCC_API_PROD = '';