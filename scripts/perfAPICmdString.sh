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
##                                K6 installation                                  ##
#####################################################################################
a='sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61'
$a
echo "deb https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
echo "Updating ubuntu to get upto date.."
b='sudo apt-get update'
$b
echo "Installation of K6 starts in Ubuntu.."
c='sudo apt-get install k6'
$c
echo "Installation of K6 done in Ubuntu.."      
echo "Validating of K6 version installed in Ubuntu.."
d='k6 version'
$d
#####################################################################################
##                                 EXECUTE TESTS                                   ##
#####################################################################################
# k6_test='k6 run -e ENV='$ENV' -e Project='$PROJECT' -e APINAME='$APINAME' -e DATA='$DATA' --vus '$USERS' --iterations '$DURATION' ./PerfTest/Projects/'$PROJECT'/perfTestScripts.js'
# k6_test='k6 run -e ENV='$ENV' -e Project='$PROJECT' -e APINAME='$APINAME' -e DATA='$DATA' --vus '$USERS' --iterations '$DURATION' --out influxdb=http://104.40.213.24:8086/'$DBNAME' ./scripts/perfAPITestScript.js'
# $k6_test
echo "Performance testing is started.."
for apiName in "${API_FILES[@]}"; do
    k6_test='k6 run -e ENV='$ENV' -e Project='$PROJECT' -e APINAME='$apiName' -e DATA='$DATA' --vus '$USERS' --iterations '$DURATION' ./scripts/perfAPITestScript.js'
    $k6_test
    sleep 5
done
echo "Performance testing is completed.."
