import * as Constants from './perfAPIConstants.js';

// require('dotenv').config();

/**
 * TO-DO Add docs for the remaining functions
 */

/**
 * @public
 */
class Utils {
  /**
   * Get base url for given env.
   *
   * @param {string} env Environment
   * @returns {string | undefined}
   */
  GetBaseUrl(env) {
    if (__ENV.Project) {
      if (__ENV.Project == 'CCE') {
        switch (env) {
          case 'Test':
            return Constants.CCEBaseURLDev;
          case 'QA':
            return Constants.CCEBaseURLStage;
          case 'Prod':
            return Constants.CCEBaseURLProd;

          default:
            Error('Wrong Environment!');
        }
      } else {
        switch (env) {
          case 'Test':
            return Constants.BaseUrlTest;
          case 'QA':
            return Constants.BaseUrlQA;
          case 'Prod':
            return Constants.BaseUrlProd;

          default:
            Error('Wrong Environment!');
        }
      }
    }
  }

  /**
   * Get API key for given environment.
   *
   * @param {string} env Environment
   * @returns {string | undefined}
   */
  GetAPIKey(env) {
    switch (env) {
      case 'Test':
        return Constants.VCC_API_TEST;
      case 'QA':
        return Constants.VCC_API_QA;
      case 'Prod':
        return Constants.VCC_API_PROD;

      default:
        Error('Wrong Environment!');
    }
  }

  /**
   * Get GRIP client id for given env.
   *
   * @param {string} env Environment
   * @returns {string | undefined}
   */
  GetGrantType(env) {
    switch (env) {
      case 'Test':
        return process.env.USS_grant_type_Test;
      case 'QA':
        return process.env.USS_grant_type_QA;
      case 'Prod':
        return process.env.USS_grant_type_Prod;

      default:
        Error('Wrong Environment!');
    }
  }

  /**
   * Get consumer uss client id for given env.
   *
   * @param {string} env Environment
   * @returns {string | undefined}
   */
  UssGetGrantType(env) {
    switch (env) {
      case 'Test':
        return process.env.Consumer_USS_grant_type_Test;
      case 'QA':
        return process.env.Consumer_USS_grant_type_QA;
      case 'Prod':
        return process.env.Consumer_USS_grant_type_Prod;

      default:
        Error('Wrong Environment!');
    }
  }

  AAGetGrantType(env) {
    switch (env) {
      case 'Test':
        return process.env.AA_grant_type_Roles_Test;
      case 'QA':
        return process.env.AA_grant_type_Roles;
      case 'Prod':
        return process.env.AA_grant_type_Roles_Prod;

      default:
        Error('Wrong Environment!');
    }
  }

  CbvFleetStatusGrantType(env) {
    switch (env) {
      case 'Test':
        return process.env.CBVFleet_grant_type_QA;
      case 'QA':
        return process.env.CBVFleet_grant_type_QA;
      case 'Prod':
        return process.env.CBVFleet_grant_type_Prod;

      default:
        Error('Wrong Environment!');
    }
  }

  SubscriptionStatusGrantType(env) {
    switch (env) {
      case 'Test':
        return process.env.CBVSubscriptionStatus_grant_type_QA;
      case 'QA':
        return process.env.CBVSubscriptionStatus_grant_type_QA;
      case 'Prod':
        return process.env.CBVFleet_grant_type_Prod;

      default:
        Error('Wrong Environment!');
    }
  }

  /**
   * Get expired uss token for given env.
   *
   * @param {string} env Environment
   * @returns {string | undefined}
   */
  GetExpiredUSStoken(env) {
    switch (env) {
      case 'Test':
        return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImFQY3R3X29kdlJPb0VOZzNWb09sSWgydGlFcyIsImtpZCI6ImFQY3R3X29kdlJPb0VOZzNWb09sSWgydGlFcyJ9.eyJhdWQiOiJhN2FmOGYwNi0xYmZmLTQyNzMtYmVjNi05Yjk2OTIwZTc2ZmYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84MWZhNzY2ZS1hMzQ5LTQ4NjctOGJmNC1hYjM1ZTI1MGEwOGYvIiwiaWF0IjoxNTcwMTc1ODc2LCJuYmYiOjE1NzAxNzU4NzYsImV4cCI6MTU3MDE3OTc3NiwiYWlvIjoiNDJWZ1lIQ05tU3VaOWR3cjVQaVVRS1ZIbDVndkF3QT0iLCJhcHBpZCI6IjgxYzg0OGVjLWI1MGEtNDZhNS1hMDlmLTU0ODhlMzYyOTlmYSIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzgxZmE3NjZlLWEzNDktNDg2Ny04YmY0LWFiMzVlMjUwYTA4Zi8iLCJvaWQiOiJiNThiN2NkZS0zYzIyLTQ0OTktYTg5OS0xMzdlZDA3NThlMzUiLCJzdWIiOiJiNThiN2NkZS0zYzIyLTQ0OTktYTg5OS0xMzdlZDA3NThlMzUiLCJ0aWQiOiI4MWZhNzY2ZS1hMzQ5LTQ4NjctOGJmNC1hYjM1ZTI1MGEwOGYiLCJ1dGkiOiJicGxnMkt1Vm1FMm1UTGxidDVaeEFBIiwidmVyIjoiMS4wIn0.JhbdAKMcG4_8_JT2rYjrgansevcnB8_YbDyrALyL9zd_y_0n8XyNGJl2_AoqdtSkMydu52u0Z5lw9yd1Ia50H85GH4Rny7uxUq0nedmSkfZQ8Hvp2Z09oxEP_UuOFb5TxkxuxJHo0gVnH60ennTWk6HtPgnVy2h0DtvoxPKAcefV_a-EewEVqS8_YMIZECCL9Wgk44Av6aaQA2WQ9cHdHZ7iLO8pN7FVBOu8ZrCA6rUSy8hqIBB3nh22IdxBhI74OWEWtx8SOQ2GgUrz2wRB5rYxU6vF3ZEMD2aNyeXNBkuNzO8nWQDWha_WfEy8dhLqubqUc5HYNpLO70DdfCdFVA';
      case 'QA':
        return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImFQY3R3X29kdlJPb0VOZzNWb09sSWgydGlFcyIsImtpZCI6ImFQY3R3X29kdlJPb0VOZzNWb09sSWgydGlFcyJ9.eyJhdWQiOiIxNjJkMDkzMy1lNjA0LTQ1ZTgtOTQ1Yi02NTc5YWIyYTg2OGIiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84MWZhNzY2ZS1hMzQ5LTQ4NjctOGJmNC1hYjM1ZTI1MGEwOGYvIiwiaWF0IjoxNTcwMTc1OTE5LCJuYmYiOjE1NzAxNzU5MTksImV4cCI6MTU3MDE3OTgxOSwiYWlvIjoiNDJWZ1lKaVFYUFhmYnQzRy9ONDV1V0orMnRjM0FnQT0iLCJhcHBpZCI6IjgxYzg0OGVjLWI1MGEtNDZhNS1hMDlmLTU0ODhlMzYyOTlmYSIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzgxZmE3NjZlLWEzNDktNDg2Ny04YmY0LWFiMzVlMjUwYTA4Zi8iLCJvaWQiOiJiNThiN2NkZS0zYzIyLTQ0OTktYTg5OS0xMzdlZDA3NThlMzUiLCJzdWIiOiJiNThiN2NkZS0zYzIyLTQ0OTktYTg5OS0xMzdlZDA3NThlMzUiLCJ0aWQiOiI4MWZhNzY2ZS1hMzQ5LTQ4NjctOGJmNC1hYjM1ZTI1MGEwOGYiLCJ1dGkiOiJDQjVLRFIxMnFrS1VxdGxOU3hFdEFBIiwidmVyIjoiMS4wIn0.Sx-gPZ-TiuW89H1RY-giKEyv0jadLxgk6z1ptVX7IQBtEMTwDBwmR50-S5WkmvwDN47QdZ-IO3Z82JiRtxl74W9tOWYeSmM6ot3gA3MNxUh4ia1AY-avjw2-kjKBGMbO2yENsGX0KEDFigO4cjaEEfQdFGgZsgH5hbZzBM2kemv-fv5saxRohM-zV5cii_M9RomkzoFMhMt0k38Hp8XFDvWewcJCmHbGcDGFQFHLycKqzSvygYNc6HzJgCgnOB225pIjKACtcrE4yGXdLakQJhhuSrpB9EM7861xpSnh5qosyctddobulbgNp7VyxrokH0p6AWgRZ9b5nlA4uO6jLg';
      case 'Prod':

      default:
        Error('Wrong Environment!');
    }
  }

  /**
   * Get extended vehicle url for given env.
   *
   * @param {string} env Environment
   * @returns {string | undefined}
   */
  GetExtendedVehicleUrl(env) {
    switch (env) {
      case 'Test':
        return Constants.ExtendedVehicleStatusApiUrlPrefixTest;
      case 'QA':
        return Constants.ExtendedVehicleStatusApiUrlPrefixQA;
      case 'Prod':
        return Constants.ExtendedVehicleStatusApiUrlPrefixProd;

      default:
        Error('Wrong Environment!');
    }
  }

  /**
   * Get connected vehicle url for given env.
   *
   * @param {string} env Environment
   * @returns {string | undefined}
   */
  GetConnectedVehicleUrl(env) {
    switch (env) {
      case 'Test':
        return Constants.ConnectedVehicleApiUrlPrefixTest;
      case 'QA':
        return Constants.ConnectedVehicleApiUrlPrefixQA;
      case 'Prod':
        return Constants.ConnectedVehicleApiUrlPrefixProd;

      default:
        Error('Wrong Environment!');
    }
  }

  /**
   * Get extended vehicle API key for given env.
   *
   * @param {string} env Environment
   * @returns {string | undefined}
   */
  GetExtendedVehicleAPIKey(env) {
    switch (env) {
      case 'Test':
        return process.env.ExtVeh_VCC_API_TEST;
      case 'QA':
        return process.env.ExtVeh_VCC_API_QA;
      case 'Prod':
        return process.env.ExtVeh_VCC_API_PROD;

      default:
        Error('Wrong Environment!');
    }
  }

  /**
   * Get connected vehicle API key for given env.
   *
   * @param {string} env Environment
   * @returns {string | undefined}
   */
  GetConnectedVehicleAPIKey(env) {
    switch (env) {
      case 'Test':
        return process.env.ExtVeh_VCC_API_TEST;
      case 'QA':
        return process.env.ExtVeh_VCC_API_QA;
      case 'Prod':
        return process.env.ConVeh_VCC_API_PROD;

      default:
        Error('Wrong Environment!');
    }
  }

  /**
   * Get app id for given env.
   *
   * @param {string} env Environment
   * @returns {string | undefined}
   */
  GetAppID(env) {
    switch (env) {
      case 'Test':
        return Constants.applicationIDTest;
      case 'QA':
        return Constants.applicationIDQA;
      case 'Prod':
        return Constants.applicationIDProd;

      default:
        Error('Wrong Environment!');
    }
  }

  /**
   * Get headers for given env.
   *
   * @param {string} env Environment
   * @returns {string | undefined}
   */
  GetHeaders(env) {
    switch (env) {
      case 'Test':
        return Constants.FootersTestHeaders;
      case 'QA':
        return Constants.FootersQAHeaders;
      case 'Prod':
        return Constants.FootersProdHeaders;

      default:
        Error('Wrong Environment!');
    }
  }

  Sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if (new Date().getTime() - start > milliseconds) {
        break;
      }
    }
  }

  Wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  /**
   * Get string generated using [A-Z a-z 0-9] of given length.
   *  {number}
   *
   * @param  length Length of random string
   * @returns {string}
   */
  GetRandomString(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /**
   * Get environment value from list of arguments
   *
   * @param {Array<string>} args arguments
   * @returns {string | undefined}
   */
  GetEnv(args) {
    var Env;
    for (var i = 0; i < args.length; i++) {
      if (args[i].includes('Env')) {
        Env = args[i].split('=').pop();
      }
    }
    return Env;
  }


  /**
   * Get reference location for given content type and location.
   *
   * @param {string} ContentType content type
   * @param {string} Location location
   * @returns {string | undefined | Error}
   */
  GetReferenceLocation(ContentType, Location) {
    if (Location == 'Local' || Location == 'Global') {
      switch (ContentType) {
        case 'Reference':
          if (Location == 'Local') {
            return Constants.CMContentTypeReferenceTypeLocationLocal;
          }
          return Constants.CMContentTypeReferenceTypeLocationGlobal;

        case 'ReferenceArray':
          if (Location == 'Local') {
            return Constants.CMContentTypeReferenceArrayTypeLocationLocal;
          }
          return Constants.CMContentTypeReferenceArrayTypeLocationGlobal;

        default:
          Error('Wrong Content Type!');
      }
    } else {
      return Error('Wrong Reference location Scope');
    }
  }

  GetNDataSource(DataSource) {
    switch (DataSource) {
      case 'Blank':
        return '';
      case 'Invalid':
        return 'InvalidDataSource';
      case 'Valid':
        return this.GetCMContentTypeDataSource(Environment);

      default:
        Error('Wrong Parameter!');
    }
  }

  GetNAcceptHeader(AcceptHeader) {
    switch (AcceptHeader) {
      case 'Blank':
        return '';
      case 'Invalid':
        return 'InvalidAcceptHeader';
      case 'Valid':
        return Constants.CMCreateOrUpdateContentTypeAcceptHeader;

      default:
        Error('Wrong Parameter!');
    }
  }

  GetNContentTypeHeader(ContentTypeHeader) {
    switch (ContentTypeHeader) {
      case 'Blank':
        return '';
      case 'Invalid':
        return 'InvalidContentTypeHeader';
      case 'Valid':
        return Constants.CMCreateOrUpdateContentTypeContentTypetHeader;

      default:
        Error('Wrong Parameter!');
    }
  }

  GetNAPIKey(APIKey) {
    switch (APIKey) {
      case 'Blank':
        return '';
      case 'Invalid':
        return 'InvalidAPIKey';
      case 'Valid':
        return 'Valid';

      default:
        Error('Wrong Parameter!');
    }
  }

  GetNContentID(ContentIDPara) {
    switch (ContentIDPara) {
      case 'Blank':
        return '';
      case 'Invalid':
        return 'InvalidContentID';
      case 'Valid':
        return 'Valid';

      default:
        Error('Wrong Parameter!');
    }
  }

  GetNContentName(ContentName) {
    switch (ContentName) {
      case 'Blank':
        return '';
      case 'Invalid':
        return 'InvalidContentName';
      case 'Valid':
        return 'sampleApplication_ValidContentName';

      default:
        Error('Wrong Parameter!');
    }
  }

  GetNContentNameSpace(ContentNameSpace) {
    switch (ContentNameSpace) {
      case 'Blank':
        return '';
      case 'Invalid':
        return '.InvalidContentName';
      case 'Valid':
        return Constants.CMContentTypeNameSpace;

      default:
        Error('Wrong Parameter!');
    }
  }

  GetNItemID(ItemID) {
    switch (ItemID) {
      case 'Blank':
        return '';
      case 'Invalid':
        return '++InvalidItemID';
      case 'Valid':
        return 'ValidItemID';

      default:
        Error('Wrong Parameter!');
    }
  }

  GetNItemContentType(ItemContentType) {
    switch (ItemContentType) {
      case 'Blank':
        return '';
      case 'Invalid':
        return '++InvalidContentType';

      default:
        return ItemContentType;
    }
  }

  GetNItemContentName(ItemContentName) {
    switch (ItemContentName) {
      case 'Blank':
        return '';
      case 'Invalid':
        return '++InvalidContentName';
      case 'Valid':
        return 'ValidIContentName';

      default:
        Error('Wrong Parameter!');
    }
  }

  GetNItemReferenceType(ItemReferenceType) {
    switch (ItemReferenceType) {
      case 'Blank':
        return '';
      case 'Invalid':
        return '++InvalidReferenceType';

      default:
        return ItemReferenceType;
    }
  }

  GetNItemReferenceLocation(ItemReferenceLocation) {
    switch (ItemReferenceLocation) {
      case 'Blank':
        return '';
      case 'Invalid':
        return '++InvalidReferenceLocation';
      case 'Valid':
        return Constants.CMContentTypeReferenceTypeLocationLocal;

      default:
        Error('Wrong Parameter!');
    }
  }

  GetNItemReferenceContentTypes(ItemReferenceContentTypes) {
    switch (ItemReferenceContentTypes) {
      case 'Blank':
        return '';
      case 'Invalid':
        return '++InvalidReferenceContentTypes';
      case 'Valid':
        return Constants.CMContentTypeReferenceContentTypesAllowed;

      default:
        Error('Wrong Parameter!');
    }
  }

  GetNItemRequiredStatus(ItemRequiredStatus) {
    switch (ItemRequiredStatus) {
      case 'Blank':
        return '';
      case 'Invalid':
        return '++InvalidStatus';
      case 'Valid':
        return true;

      default:
        Error('Wrong Parameter!');
    }
  }

  /**
   * Get N item localized status for given item localized status.
   *
   * @param {string} Env Environment
   * @param ItemLocalizedStatus
   * @returns {string | undefined}
   */
  GetNItemLocalizedStatus(ItemLocalizedStatus) {
    switch (ItemLocalizedStatus) {
      case 'Blank':
        return '';
      case 'Invalid':
        return '++InvalidStatus';
      case 'Valid':
        return true;

      default:
        Error('Wrong Parameter!');
    }
  }

  /**
   * Get N app id for given app id.
   *
   * @param {string} Env Environment
   * @param AppID
   * @returns {string | undefined}
   */
  GetNAppID(AppID) {
    switch (AppID) {
      case 'Blank':
        return '';
      case 'Invalid':
        return '++InvalidReferenceType';
      case 'Valid':
        return 'Valid';

      default:
        Error('Wrong Parameter!');
    }
  }

  /**
   * Get content type for the given http accept header.
   *
   * @param {string} AcceptHeader Http Accept Header
   * @returns {string | undefined}
   */
  GetNAcceptHeaderGetContent(AcceptHeader) {
    switch (AcceptHeader) {
      case 'Blank':
        return '';
      case 'Invalid':
        return '++InvalidAcceptHeader';
      case 'Valid':
        return Constants.CMGetContentTypeAcceptHeader;

      default:
        Error('Wrong Parameter!');
    }
  }

  /**
   * Get CD content type data source for given env.
   *
   * @param {string} Env Environment
   * @returns {string | undefined}
   */
  GetCMContentTypeDataSource(Env) {
    switch (Env) {
      case 'Test':
        return contentData.dataSourceCMTestContent;
      case 'QA':
        return contentData.dataSourceCMQaContent;
      case 'Prod':
        return contentData.dataSourceCMProdContent;

      default:
        Error('Wrong Environment!');
    }
  }

  /**
   * Get CM dictionary data source for given env.
   *
   * @param {string} Env Environment
   * @returns {string | undefined}
   */
  GetCMDictionaryDataSource(Env) {
    switch (Env) {
      case 'Test':
        return contentData.dataSourceCMTestDictionary;
      case 'QA':
        return contentData.dataSourceCMQaDictionary;
      case 'Prod':
        return contentData.dataSourceCMProdDictionary;

      default:
        Error('Wrong Environment!');
    }
  }

  /**
   * Get CM dictionary Volvo data source for given env.
   *
   * @param {string} Env Environment
   * @returns {string | undefined}
   */
  GetCMDictionaryVolvoDataSource(Env) {
    switch (Env) {
      case 'Test':
        return contentData.volvodataSourceCMTestDictionary;
      case 'QA':
        return contentData.volvodataSourceCMQaDictionary;
      case 'Prod':
        return contentData.volvodataSourceCMProdDictionary;

      default:
        Error('Wrong Environment!');
    }
  }

  /**
   * Get CM dictionary market data source for given env.
   *
   * @param {string} Env Environment
   * @returns {string | undefined}
   */
  GetCMDictionaryMarketDataSource(Env) {
    switch (Env) {
      case 'Test':
        return contentData.dataSourceCMTestDictionaryMarket;
      case 'QA':
        return contentData.dataSourceCMQaDictionaryMarket;
      case 'Prod':
        return contentData.dataSourceCMProdDictionaryMarket;

      default:
        Error('Wrong Environment!');
    }
  }

  /**
   * Get CD content type data source for given env.
   *
   * @param {string} Env Environment
   * @returns {string | undefined}
   */
  GetCDContentTypeDataSource(Env) {
    switch (Env) {
      case 'Test':
        return contentData.dataSourceCDTestContent;
      case 'QA':
        return contentData.dataSourceCDQaContent;
      case 'Prod':
        return contentData.dataSourceCDProdContent;

      default:
        Error('Wrong Environment!');
    }
  }

  /**
   * Get CD dictionary data source for given env.
   *
   * @param {string} Env Environment
   * @returns {string | undefined}
   */
  // GetCDDictionaryDataSource(Env) {
  //   switch (Env) {
  //     case 'Test':
  //       return contentData.dataSourceCDTestDictionary;
  //     case 'QA':
  //       return contentData.dataSourceCDQaDictionary;
  //     case 'Prod':
  //       return contentData.dataSourceCDProdDictionary;

  //     default:
  //       Error('Wrong Environment!');
  //   }
  // }

  /**
   * Get CD dictionary market data source for given env.
   *
   * @param {string} Env Environment
   * @returns {string | undefined}
   */
  GetCDDictionaryMarketDataSource(Env) {
    switch (Env) {
      case 'Test':
        return contentData.dataSourceCDTestDictionaryMarket;
      case 'QA':
        return contentData.dataSourceCDQaDictionaryMarket;
      case 'Prod':
        return contentData.dataSourceCDProdDictionaryMarket;

      default:
        Error('Wrong Environment!');
    }
  }

  /**
   * Get the delete content type for given accept http header.
   *
   * @param {string} AcceptHeader Accept http header
   * @returns {string | undefined}
   */
  GetNAcceptHeaderDeleteContentType(AcceptHeader) {
    switch (AcceptHeader) {
      case 'Blank':
        return '';
      case 'Invalid':
        return '++InvalidAcceptHeader';
      case 'Valid':
        return Constants.CMDeleteContentTypeAcceptHeader;

      default:
        Error('Wrong Parameter!');
    }
  }



  /**
   * Function returns header value string based on provided header value and version.
   *
   * @param {string} string the header value that will be modified based on provided version.
   * @param {string} version the wanted version. Use v0 for header value without version.
   * @example getHeaderByVersion('application/vnd.volvocars.api.static.site.generator.preview.projectresponse.v1+json', 'v1');
   * @returns {string}
   */
  getHeaderByVersion(string, version) {
    // case: version is undefined
    if (version === undefined) {
      return string;
    }
    // case: string does not contains version number
    if (!string.match(/[.](v[0-9])[+]json/)) {
      version = version === 'v0' ? '+json' : `.${version}+json`;
      return string.replace('+json', version);
    }
    // case: string contains version number

    const result = string.includes(version)
      ? string
      : string.replace(/[.](?!.*[.]).*[+]json/, `.${version}+json`);
    return version === 'v0'
      ? string.replace(/[.](?!.*[.]).*[+]json/, `+json`)
      : result;
  }

  //////////////  Added for Data sources     /////////////////
  GetDataSource(data) {
    switch (data) {
      case ('ContentTest'):
        return 'content-services-sitecore9-custom';
        break;
      default:
        console.log(`Wrong data source`);
    }
  }
  GetCDDictionaryDataSource(Env) {
    switch (Env) {
      case ('QA'):
        return 'oxp';
      default:
        Error('Wrong Environment!');
    }
  }

  GetCMVolvoDataSource(data) {
    switch (data) {
      case ('ContentTest'):
        return 'custom-qa';
        break;
      default:
        console.log(`Wrong data source`);
    }
  }
}
export default new Utils();
