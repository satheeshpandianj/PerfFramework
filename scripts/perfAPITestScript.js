/* eslint-disable prettier/prettier */
/*
Import all the necessary modules and libraries
*/
import http from 'k6/http';
import { sleep } from 'k6';
import { SharedArray } from 'k6/data';
const Request = require('../projects/PerfTest/' + __ENV.Project + '/TestScripts/APIRequest.js');

// console.log(`API Names are ${__ENV.APINAME}`);

export default function () {
    Request.frameAPIRequest(__ENV.APINAME);
}
