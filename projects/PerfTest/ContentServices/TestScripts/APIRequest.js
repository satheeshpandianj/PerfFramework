/*
Import all the necessary modules and libraries
*/
import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';
import { group } from 'k6';
import { Trend } from 'k6/metrics';
import { Rate } from 'k6/metrics';
import { SharedArray } from 'k6/data';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import * as Dictionary from '../APIs/ContentManagement_Endpoints/CMDictionaries.js';
import * as ContentType from '../APIs/ContentManagement_Endpoints/CMContentType.js';
import * as ListLocales from '../APIs/ContentManagement_Endpoints/CMListLocales.js';
import * as EditorialComponent from '../APIs/ContentManagement_Endpoints/CMEditorialComponent.js';
import * as Navigation from '../APIs/ContentDelivery_Endpoints/Navigation.js';
import * as CAASContent from '../APIs/ContentDelivery_Endpoints/CAASContent.js';
import * as NCDDictionary from '../APIs/NewContentDelivery_Endpoints/GetDictionary.js';
import * as Constants from '../../../../Utils/perfAPIConstants.js';
import Utils from '../../../../Utils/perfAPIUtils.js';

////////////////////////////////////////////////////////////////////////////////////////////////
const csvMarketData = new SharedArray("marketTestData", function () {
    // Load CSV file and parse it using Papa Parse
    return papaparse.parse(open('../APIs/ContentDelivery_Endpoints/market.csv'), { header: true }).data;
})

let randomMarketData = csvMarketData[Math.floor(Math.random() * csvMarketData.length)]['Market'];

// console.log(`randomMarketData is ${JSON.stringify(randomMarketData)}`);

////////////////////////////  Variables for the functions/APIs used  ////////////////////////////

/*
Create a response time trend for each API.
NOTE: You have to add a trend if you add new API here.
For example,
    let <trendName> = new Trend('<trendName>');
*/

// Content Management API Endpoints
let createOrUpdateContentTypeTrend = new Trend('createOrUpdateContentTypeTrend');
let getContentTypeTrend = new Trend('getContentTypeTrend');
let deleteContentTypeTrend = new Trend('deleteContentTypeTrend');
let getLanguageVersionTrend = new Trend('getLanguageVersionTrend');
let updateLanguageVersionTrend = new Trend('updateLanguageVersionTrend');
let publishLanguageVersionTrend = new Trend('publishLanguageVersionTrend');
let getOperationTrend = new Trend('getOperationTrend');
let listDictionaryTrend = new Trend('listDictionaryTrend');
let postDictionaryTrend = new Trend('postDictionaryTrend');
let getDictionaryTrend = new Trend('getDictionaryTrend');
let deleteDictionaryTrend = new Trend('deleteDictionaryTrend');
let listLocalesTrend = new Trend('listLocalesTrend');
let createOrUpdateEditorialComponentTrend = new Trend('createOrUpdateEditorialComponentTrend');
let deleteEditorialComponentTrend = new Trend('deleteEditorialComponentTrend');
let getEditorialComponentTrend = new Trend('getEditorialComponentTrend');
let listEditorialComponentTrend = new Trend('listEditorialComponentTrend');

// Content Delivery API Endpoints
let navigationTrend = new Trend('navigationTrend');
let caasContentTrend = new Trend('caasContentTrend');

// New Content Delivery API Endpoints
let ncdGetDictionaryTrend = new Trend('ncdGetDictionaryTrend');

///////////////////////////////  Selecting API for Perf Test  //////////////////////////////////

/**
 * Choosing the API from the shell command for performance teesting 
 * in the given environment in shell command
 *
 * @param {string} apiName is APINAME in shell command
 * 
 * Description:
 *            This function is used to select the flow of API execution
 * based on the APINAME given in shell command. For example, In the below shell command 
 * "sh .\scripts\perfAPICmdString.sh QA ContentServices CMDictionaries ContentTest 1 1 ContentServicesDB"
 * 'CMDictionaries' is an API name and it will execute the dictionary APIs in the order (POST, GET, DELETE) 
 * 
 **/

export const frameAPIRequest = (apiName) => {
    let sysId = '';
    let contentID = '';
    let locale = '';
    let versionToken = '';
    let operationID = '';
    let editorialComponentID = '';
    switch (apiName) {
        case ('PostDictionary'):
            sysId = postDictionary();
            break;
        case ('GetDictionary'):
            sysId = postDictionary();
            getDictionary(sysId);
            break;
        case ('DeleteDictionary'):
            sysId = postDictionary();
            deleteDictionary(sysId);
            break;
        case ('GetLanguageVersion'):
            sysId = postDictionary();
            versionToken = getLanguageVersion(sysId, locale);
            break;
        case ('UpdateLanguageVersion'):
            sysId = postDictionary();
            versionToken = getLanguageVersion(sysId, locale);
            updateLanguageVersion(sysId, locale, versionToken);
            break;
        case ('PublishLanguageVersion'):
            sysId = postDictionary();
            versionToken = getLanguageVersion(sysId, locale);
            updateLanguageVersion(sysId, locale, versionToken);
            operationID = publishLanguageVersion(sysId, locale);
            break;
        case ('GetOperation'):
            sysId = postDictionary();
            versionToken = getLanguageVersion(sysId, locale);
            updateLanguageVersion(sysId, locale, versionToken);
            operationID = publishLanguageVersion(sysId, locale);
            getOperation(operationID);
            break;
        case ('ListDictionary'):
            listDictionary();
            break;
        case ('ListLocales'):
            listLocales();
            break;
        case ('CreateContentType'):
            contentID = putContentType('Integer', true, true);
            break;
        case ('GetContentType'):
            contentID = putContentType('Integer', true, true);
            getContentType(contentID);
            break;
        case ('DeleteContentType'):
            contentID = putContentType('Integer', true, true);
            deleteContentType(contentID);
            break;
        case ('CreateEditorialComponent'):
            editorialComponentID = createOrUpdateEditorialComponent();
            break;
        case ('GetEditorialComponent'):
            editorialComponentID = createOrUpdateEditorialComponent();
            getEditorialComponent(editorialComponentID);
            break;
        case ('DeleteEditorialComponent'):
            editorialComponentID = createOrUpdateEditorialComponent();
            deleteEditorialComponent(editorialComponentID);
            break;
        case ('ListEditorialComponent'):
            listEditorialComponent();
            break;
        case ('Navigation'):
            navigation(randomMarketData);
            break;
        case ('CAASContent'):
            caasContent();
            break;
        case ('NCDGetDictionary'):
            ncdGetDictionary();
            break;
        default:
            console.log('Invalid API name');
            break;

    }
}

///////////////////////////////  Ending API Selection for Perf Test  ////////////////////////////


/**
 * Check the response code for each API after it is executed
 *
 * @param {string} '<API NAME> HTTP status 200'
 * 
 * Description:
 *            This function is used to check the response code of an API executed 
 * with expected status and return the message in the console. For example, when 
 * postDictionary API is executed, it will return the below message in the console
 *                  ✓ postDictionary HTTP status <response code>
 * 
 **/

function checkStatus(apiName, response, expectedStatus, failOnError, printOnError) {
    const obj = {};
    obj[`${apiName} HTTP status ${expectedStatus}`] = (r) => r.status === expectedStatus;

    const checkResult = check(response, obj);
    if (!checkResult) {
        if (printOnError) {
            console.log("Response: " + response.body);
        }
        if (failOnError) {
            console.log(`Received unexpected status code ${response.status} for URL: ${response.url}, expected ${expectedStatus}`)
        }
    }
}

///////////////////////////////  Dictionary Starts  /////////////////////////////////////////////


const postDictionary = () => {
    let res = Dictionary.postDictionaryAPI();
    let url = res.URL;
    let headers = res.HEADERS;
    let body = `${JSON.stringify(res.BODY)}`;

    let responsePost = http.post(url, body, headers);
    checkStatus(postDictionary.name, responsePost, 200, true, true);
    postDictionaryTrend.add(responsePost.timings.duration)
    let data = JSON.parse(responsePost['body']);

    let sysId = data.data.sys.id;
    return sysId;
}

const getDictionary = (id) => {
    let resGet = Dictionary.GetDictionaryAPI(id);
    let urlGet = resGet.URL;
    let headersGet = resGet.HEADERS;

    let responseGet = http.get(urlGet, headersGet);
    checkStatus(getDictionary.name, responseGet, 200, true, true);
    getDictionaryTrend.add(responseGet.timings.duration);
}

const deleteDictionary = (id) => {
    let resDelete = Dictionary.DeleteDictionaryAPI(id);
    let urlDelete = resDelete.URL;
    let headersDelete = resDelete.HEADERS;

    let responseDelete = http.del(urlDelete, null, headersDelete);
    checkStatus(deleteDictionary.name, responseDelete, 200, true, true);
    deleteDictionaryTrend.add(responseDelete.timings.duration);
}

const getLanguageVersion = (id, locale) => {
    let resGet = Dictionary.GetLanguageVersionAPI(id, 'en');
    let urlGet = resGet.URL;
    let headersGet = resGet.HEADERS;

    let responseGet = http.get(urlGet, headersGet);
    checkStatus(getLanguageVersion.name, responseGet, 200, true, true);
    getLanguageVersionTrend.add(responseGet.timings.duration);
    // console.log(`Response for GET LANGUAGE ${JSON.stringify(responseGet.body)}`);
    let data = JSON.parse(responseGet['body']);
    let versionToken = data.data.versionToken;
    console.log(`versionToken is ${versionToken}`);

    return versionToken;
}

const updateLanguageVersion = (id, locale, versionToken) => {
    let res = Dictionary.UpdateLanguageVersionAPI(id, 'en', versionToken);
    let url = res.URL;
    let headers = res.HEADERS;
    let body = `${JSON.stringify(res.BODY)}`;

    let responsePut = http.put(url, body, headers);
    checkStatus(updateLanguageVersion.name, responsePut, 202, true, true);
    updateLanguageVersionTrend.add(responsePut.timings.duration);
    // let data = JSON.parse(responsePut['body']);
    // let contentID = data.data.id;
    // console.log(`data is ${data}`);

    // return contentID;

}

const publishLanguageVersion = (id, locale) => {
    let res = Dictionary.PublishLanguageVersionAPI(id, 'en');
    let url = res.URL;
    let headers = res.HEADERS;
    let body = `${JSON.stringify(res.BODY)}`;

    let responsePut = http.put(url, body, headers);
    checkStatus(publishLanguageVersion.name, responsePut, 202, true, true);
    publishLanguageVersionTrend.add(responsePut.timings.duration);
    let data = JSON.parse(responsePut['body']);
    let operationID = data.async.id;
    console.log(`data is ${JSON.stringify(data)}`);
    console.log(`operationID is ${operationID}`);

    return operationID;

}

const getOperation = (id) => {
    let resGet = Dictionary.GetOperationAPI(id);
    let urlGet = resGet.URL;
    let headersGet = resGet.HEADERS;
    let status = '';
    let responseGet = '';
    let count = 0;
    let startTime = Date.now();    
    while (status !== 200) {
        responseGet = http.get(urlGet, headersGet);
        let data = JSON.parse(responseGet['body']);
        status = data.status;
        console.log(`data is ${JSON.stringify(data)}`);
        console.log(`Status is ${status}`);
        // sleep(0.5);
        count = count + 1;
        if (count > 100) {
            console.log(`getOperationAPI is taking too long to respond and took ${Date.now() - startTime} seconds so far`);
            break;
        }
    }
    let endTime = Date.now();
    getOperationTrend.add(endTime - startTime);
    checkStatus(getOperation.name, responseGet, 200, true, true);
}

const listDictionary = () => {
    let resGet = Dictionary.ListDictionaryAPI();
    let urlGet = resGet.URL;
    let headersGet = resGet.HEADERS;

    let responseGet = http.get(urlGet, headersGet);
    checkStatus(listDictionary.name, responseGet, 200, true, true);
    listDictionaryTrend.add(responseGet.timings.duration);
}


///////////////////////////////  Dictionary Ends  /////////////////////////////////////////////

///////////////////////////////  Content Type Starts  /////////////////////////////////////////

const putContentType = (Content,
    RequiredStatus,
    LocalizedStatus
) => {
    let res = ContentType.CreateOrUpdateContentTypeAPI(Content,
        RequiredStatus,
        LocalizedStatus);
    let url = res.URL;
    let headers = res.HEADERS;
    let body = `${JSON.stringify(res.BODY)}`;

    let responsePut = http.put(url, body, headers);
    checkStatus(putContentType.name, responsePut, 200, true, true);
    createOrUpdateContentTypeTrend.add(responsePut.timings.duration);
    let data = JSON.parse(responsePut['body']);
    let contentID = data.data.id;
    console.log(`contentID is ${contentID}`);

    return contentID;
}

const getContentType = (id) => {
    let resGet = ContentType.GetContentTypeAPI(id);
    let urlGet = resGet.URL;
    let headersGet = resGet.HEADERS;

    let responseGet = http.get(urlGet, headersGet);
    checkStatus(getContentType.name, responseGet, 200, true, true);
    getContentTypeTrend.add(responseGet.timings.duration);
}


const deleteContentType = (id) => {
    let resDelete = ContentType.DeleteContentTypeAPI(id);
    let urlDelete = resDelete.URL;
    let headersDelete = resDelete.HEADERS;

    let responseDelete = http.del(urlDelete, null, headersDelete);
    checkStatus(deleteContentType.name, responseDelete, 200, true, true);
    deleteContentTypeTrend.add(responseDelete.timings.duration);
}

///////////////////////////////  Content Type Ends  /////////////////////////////////////////

/////////////////////////////// List Locales Starts  /////////////////////////////////////////

const listLocales = () => {
    let resGet = ListLocales.ListLocalesAPI();
    let urlGet = resGet.URL;
    let headersGet = resGet.HEADERS;

    let responseGet = http.get(urlGet, headersGet);
    checkStatus(listLocales.name, responseGet, 200, true, true);
    listLocalesTrend.add(responseGet.timings.duration);
}

///////////////////////////////  List Locales Ends  /////////////////////////////////////////

///////////////////////////////  Editorial Component Starts  ////////////////////////////////

const createOrUpdateEditorialComponent = () => {
    let res = EditorialComponent.CreateOrUpdateEditorialComponentAPI();
    let url = res.URL;
    let headers = res.HEADERS;
    let body = `${JSON.stringify(res.BODY)}`;

    let responsePut = http.put(url, body, headers);
    checkStatus(createOrUpdateEditorialComponent.name, responsePut, 200, true, true);
    createOrUpdateEditorialComponentTrend.add(responsePut.timings.duration);
    let data = JSON.parse(responsePut['body']);
    let editorialComponentID = data.data.id;
    console.log(`editorialComponentID is ${editorialComponentID}`);

    return editorialComponentID;
}

const getEditorialComponent = (id) => {
    let resGet = EditorialComponent.GetEditorialComponentAPI(id);
    let urlGet = resGet.URL;
    let headersGet = resGet.HEADERS;

    let responseGet = http.get(urlGet, headersGet);
    checkStatus(getEditorialComponent.name, responseGet, 200, true, true);
    getEditorialComponentTrend.add(responseGet.timings.duration);
}

const deleteEditorialComponent = (id) => {
    let resDelete = EditorialComponent.DeleteEditorialComponentAPI(id);
    let urlDelete = resDelete.URL;
    let headersDelete = resDelete.HEADERS;

    let responseDelete = http.del(urlDelete, null, headersDelete);
    checkStatus(deleteEditorialComponent.name, responseDelete, 200, true, true);
    deleteEditorialComponentTrend.add(responseDelete.timings.duration);
}

const listEditorialComponent = () => {
    let resGet = EditorialComponent.ListEditorialComponentAPI();
    let urlGet = resGet.URL;
    let headersGet = resGet.HEADERS;

    let responseGet = http.get(urlGet, headersGet);
    checkStatus(listEditorialComponent.name, responseGet, 200, true, true);
    listEditorialComponentTrend.add(responseGet.timings.duration);
}

///////////////////////////////  Editorial Component End  ///////////////////////////////////

///////////////////////////////  Navigation Starts  ////////////////////////////////////////

const navigation = (market) => {
    console.log("Market in NAVIGATION in APIREquest: " + market);
    let resGet = Navigation.NavigationAPI(market);
    let urlGet = resGet.URL;
    let headersGet = resGet.HEADERS;

    let responseGet = http.get(urlGet, headersGet);
    checkStatus(navigation.name, responseGet, 200, true, true);
    navigationTrend.add(responseGet.timings.duration);
}

///////////////////////////////  Navigation ends  ////////////////////////////////////////

///////////////////////////////  CAAS Content Starts  ////////////////////////////////////////

const caasContent = () => {
    let resGet = CAASContent.CAASEndpointAPI();
    let urlGet = resGet.URL;
    let headersGet = resGet.HEADERS;

    let responseGet = http.get(urlGet, headersGet);
    checkStatus(caasContent.name, responseGet, 200, true, true);
    caasContentTrend.add(responseGet.timings.duration);
}

///////////////////////////////  CAAS Content ends  ////////////////////////////////////////

///////////////////////////////  New CD Get Dictionary Starts  /////////////////////////////

const ncdGetDictionary = () => {
    let resGet = NCDDictionary.NCDGetDictionaryAPI();
    let urlGet = resGet.URL;
    let headersGet = resGet.HEADERS;

    let responseGet = http.get(urlGet, headersGet);
    checkStatus(ncdGetDictionary.name, responseGet, 200, true, true);
    ncdGetDictionaryTrend.add(responseGet.timings.duration);
}

///////////////////////////////  New CD Get Dictionary ends  ////////////////////////////////