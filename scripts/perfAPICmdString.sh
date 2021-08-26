#!/bin/bash
ENV=$1
PROJECT=$2
APINAME=$3
DATA=$4
USERS=$5
DURATION=$6
#####################################################################################
##                                 API FILE SELECTION                              ##
#####################################################################################
IFS=',' read -ra API_FILES <<<"$APINAME"
    echo ${API_FILES[*]}
#####################################################################################
##                                 EXECUTE TESTS                                   ##
#####################################################################################
# k6_test='k6 run -e ENV='$ENV' -e Project='$PROJECT' -e APINAME='$APINAME' -e DATA='$DATA' --vus '$USERS' --iterations '$DURATION' ./PerfTest/Projects/'$PROJECT'/perfTestScripts.js'
# k6_test='k6 run -e ENV='$ENV' -e Project='$PROJECT' -e APINAME='$APINAME' -e DATA='$DATA' --vus '$USERS' --iterations '$DURATION' --out influxdb=http://104.40.213.24:8086/'$DBNAME' ./scripts/perfAPITestScript.js'
# $k6_test
#for apiName in "${API_FILES[@]}"; do
k6_test='k6 run -e ENV='$ENV' -e Project='$PROJECT' -e APINAME='$APINAME' -e DATA='$DATA'  -e USERS='$USERS' -e TESTINGTIME='$DURATION' ./perfAPITestScript'
echo "$k6_test"
$k6_test
#sleep 5
#done
