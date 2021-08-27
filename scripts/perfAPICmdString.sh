#!/bin/bash
ENV=$1
PROJECT=$2
APINAME=$3
DATA=$4
USERS=$5
DURATION=$6
IFS=',' read -ra API_FILES <<<"$APINAME"
    echo ${API_FILES[*]}
for apiName in "${API_FILES[@]}";do
	k6_test='k6 run -e ENV='$ENV' -e Project='$PROJECT' -e APINAME='$apiName' -e DATA='$DATA' -e USERS='$USERS' -e TESTINGTIME='$DURATION' ./scripts/perfAPITestScript.js'
	$k6_test
	sleep 5
done