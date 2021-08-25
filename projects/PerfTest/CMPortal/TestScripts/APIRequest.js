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
import * as CMVCDictionary from '../APIs/CMVolvoConnector_Endpoints/CMVCDictionaries.js';
import * as CMTLocales from '../APIs/Translation_Endpoints/CMListLocales.js';
import * as Constants from '../../../../Utils/perfAPIConstants.js';
import Utils from '../../../../Utils/perfAPIUtils.js';

////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////  Variables for the functions/APIs used  ////////////////////////////

/*
Create a response time trend for each API.
NOTE: You have to add a trend if you add new API here.
For example,
    let <trendName> = new Trend('<trendName>');
*/

// CMVolvo Connector API Endpoints
let cmvcPostDictionaryTrend = new Trend('cmvcPostDictionaryTrend');
let cmvcGetDictionaryTrend = new Trend('cmvcGetDictionaryTrend');
let cmvcUpdateDictionaryTrend = new Trend('cmvcUpdateDictionaryTrend');
let cmvcDeleteDictionaryTrend = new Trend('cmvcDeleteDictionaryTrend');
let cmvcGetLanguageVersionTrend = new Trend('cmvcGetLanguageVersionTrend');
let cmvcUpdateLanguageVersionTrend = new Trend('cmvcUpdateLanguageVersionTrend');
let cmvcPublishLanguageVersionTrend = new Trend('cmvcPublishLanguageVersionTrend');
let cmvcGetOperationTrend = new Trend('cmvcGetOperationTrend');

// CM Transaction API Endpoints
let cmvcListLocalesTrend = new Trend('cmvcListLocalesTrend');

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
    let versionToken = '';
    let locale = '';
    let operationID = '';
    switch (apiName) {
        case ('CMVCPostDictionary'):
            sysId = postDictionaryWithVolvoConnector();
            break;
        case ('CMVCGetDictionary'):
            sysId = postDictionaryWithVolvoConnector();
            getDictionaryWithVolvoConnector(sysId);
            break;
        case ('CMVCUpdateDictionary'):
            sysId = postDictionaryWithVolvoConnector();
            updateDictionaryWithVolvoConnector(sysId);
            break;
        case ('CMVCDeleteDictionary'):
            sysId = postDictionaryWithVolvoConnector();
            deleteDictionaryWithVolvoConnector(sysId);
            break;
        case ('CMVCListDictionary'):
            listDictionaryWithVolvoConnector();
            break;
        case ('CMVCGetLanguageVersion'):
            sysId = postDictionaryWithVolvoConnector();
            versionToken = getLanguageVersionWithVolvoConnector(sysId, locale);
            break;
        case ('CMVCUpdateLanguageVersion'):
            sysId = postDictionaryWithVolvoConnector();
            versionToken = getLanguageVersionWithVolvoConnector(sysId, locale);
            updateLanguageVersionWithVolvoConnector(sysId, locale, versionToken);
            break;
        case ('CMVCPublishLanguageVersion'):
            sysId = postDictionaryWithVolvoConnector();
            versionToken = getLanguageVersionWithVolvoConnector(sysId, locale);
            updateLanguageVersionWithVolvoConnector(sysId, locale, versionToken);
            operationID = publishLanguageVersionWithVolvoConnector(sysId);
            break;
        case ('CMVCGetOperation'): // Not working at the moment
            sysId = postDictionaryWithVolvoConnector();
            versionToken = getLanguageVersionWithVolvoConnector(sysId, locale);
            updateLanguageVersionWithVolvoConnector(sysId, locale, versionToken);
            operationID = publishLanguageVersionWithVolvoConnector(sysId);
            getOperationWithVolvoConnector(operationID);
            break;
        case ('CMVCListLocales'):
            listLocalesWithVolvoConnector();
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


const postDictionaryWithVolvoConnector = () => {
    let resPost = CMVCDictionary.PostDictionaryWithVolvoConnectorAPI();
    let url = resPost.URL;
    let headers = resPost.HEADERS;
    let body = `${JSON.stringify(resPost.BODY)}`;

    let responsePost = http.post(url, body, headers);
    checkStatus(postDictionaryWithVolvoConnector.name, responsePost, 200, true, true);
    cmvcPostDictionaryTrend.add(responsePost.timings.duration)
    let data = JSON.parse(responsePost['body']);
    let sysId = data.data.sys.id;
    return sysId;
}

const getDictionaryWithVolvoConnector = (id) => {
    let resGet = CMVCDictionary.GetDictionaryWithVolvoConnectorAPI(id);
    let url = resGet.URL;
    let headers = resGet.HEADERS;

    let responseGet = http.get(url, headers);
    checkStatus(getDictionaryWithVolvoConnector.name, responseGet, 200, true, true);
    cmvcGetDictionaryTrend.add(responseGet.timings.duration)
}

const updateDictionaryWithVolvoConnector = (id) => {
    let resPut = CMVCDictionary.UpdateDictionaryWithVolvoConnectorAPI(id);
    let url = resPut.URL;
    let headers = resPut.HEADERS;
    let body = `${JSON.stringify(resPut.BODY)}`;

    let responsePut = http.put(url, body, headers);
    checkStatus(updateDictionaryWithVolvoConnector.name, responsePut, 200, true, true);
    cmvcUpdateDictionaryTrend.add(responsePut.timings.duration)
}

const deleteDictionaryWithVolvoConnector = (id) => {
    let resDelete = CMVCDictionary.DeleteDictionaryWithVolvoConnectorAPI(id);
    let url = resDelete.URL;
    let headers = resDelete.HEADERS;

    let responseDelete = http.del(url, null, headers);
    checkStatus(deleteDictionaryWithVolvoConnector.name, responseDelete, 200, true, true);
    cmvcDeleteDictionaryTrend.add(responseDelete.timings.duration)
}


const listDictionaryWithVolvoConnector = () => {
    let resGet = CMVCDictionary.ListDictionaryWithVolvoConnectorAPI();
    let url = resGet.URL;
    let headers = resGet.HEADERS;

    let responseGet = http.get(url, headers);
    checkStatus(listDictionaryWithVolvoConnector.name, responseGet, 200, true, true);
    cmvcListDictionaryTrend.add(responseGet.timings.duration)
}

const getLanguageVersionWithVolvoConnector = (id, locale) => {
    let resGet = CMVCDictionary.GetLanguageVersionWithVolvoConnectorAPI(id, 'en');
    let url = resGet.URL;
    let headers = resGet.HEADERS;

    let responseGet = http.get(url, headers);
    // console.log(JSON.stringify(responseGet));
    checkStatus(getLanguageVersionWithVolvoConnector.name, responseGet, 200, true, true);
    cmvcGetLanguageVersionTrend.add(responseGet.timings.duration)
    let data = JSON.parse(responseGet['body']);
    let versionToken = data.data.versionToken;
    // console.log(`versionToken : ${versionToken}`);

    return versionToken;
}

const updateLanguageVersionWithVolvoConnector = (id, locale, versionToken) => {
    let resPut = CMVCDictionary.UpdateLanguageVersionWithVolvoConnectorAPI(id, 'en', versionToken);
    // console.log(`${JSON.stringify(resPut)}`);
    let url = resPut.URL;
    let headers = resPut.HEADERS;
    let body = `${JSON.stringify(resPut.BODY)}`;

    let responsePut = http.put(url, body, headers);
    checkStatus(updateLanguageVersionWithVolvoConnector.name, responsePut, 202, true, true);
    cmvcUpdateLanguageVersionTrend.add(responsePut.timings.duration)
}

const publishLanguageVersionWithVolvoConnector = (id,locale) => {
    let resPut = CMVCDictionary.PublishLanguageVersionWithVolvoConnectorAPI(id,'en');
    
    let url = resPut.URL;
    let headers = resPut.HEADERS;
    let body = `${JSON.stringify(resPut.BODY)}`;

    let responsePut = http.put(url, body, headers);
    checkStatus(publishLanguageVersionWithVolvoConnector.name, responsePut, 202, true, true);
    cmvcPublishLanguageVersionTrend.add(responsePut.timings.duration)
    // console.log(`${JSON.stringify(responsePut)}`);
    let data = JSON.parse(responsePut['body']);
    let operationID = data.async.id;
    console.log(`${operationID}`);

    return operationID;
}

const getOperationWithVolvoConnector = (id) => {
    let resGet = CMVCDictionary.getOperationWithVolvoConnectorAPI(id);    
    let url = resGet.URL;
    let headers = resGet.HEADERS;
    let status = '';
    let responseGet = '';
    let count = 0;
    let startTime = Date.now();
    while (status !== 200) {
        responseGet = http.get(url, headers);
        let data = JSON.parse(responseGet['body']);
        status = data.status;
        console.log(`data is ${JSON.stringify(data)}`);
        console.log(`Status is ${status}`);
        
        count = count + 1;
        if (count > 100) {
            console.log(`getOperationAPI is taking too long to respond and took ${Date.now() - startTime} seconds so far`);
            break;
        }
        sleep(1);
    }
        let endTime = Date.now();
        getOperationTrend.add(endTime - startTime);
        checkStatus(getOperationWithVolvoConnector.name, responseGet, 202, true, true);
        // cmvcGetOperationTrend.add(responseGet.timings.duration)
        // console.log(`${JSON.stringify(responsePut)}`);
        
    
}

///////////////////////////////  Dictionary ends  ////////////////////////////////

const listLocalesWithVolvoConnector = () => {
    let resGet = CMTLocales.ListLocalesWithVolvoConnectorAPI();
    let url = resGet.URL;
    let headers = resGet.HEADERS;

    let responseGet = http.get(url, headers);
    // console.log(JSON.stringify(responseGet));
    checkStatus(listLocalesWithVolvoConnector.name, responseGet, 200, true, true);
    cmvcListLocalesTrend.add(responseGet.timings.duration)
}

///////////////////////////////  List Locales ends  ////////////////////////////////
