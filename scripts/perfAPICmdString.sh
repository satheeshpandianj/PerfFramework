#!/bin/bash
ENV=$1
PROJECT=$2
APINAME=$3
DATA=$4
USERS=$5
DURATION=$6
#DBNAME=$7
#####################################################################################
##                                 API FILE SELECTION                              ##
#####################################################################################
IFS=',' read -ra API_FILES <<<"$APINAME"
    echo ${API_FILES[*]}
# #####################################################################################
# ##                                K6 installation                                  ##
# #####################################################################################
# sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
# echo "deb https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
# echo "Updating ubuntu to get upto date.."
# sudo apt-get update -y      
# echo "Installation of K6 starts in Ubuntu.."
# sudo apt-get install k6 -y
# echo "Installation of K6 done in Ubuntu.."      
# echo "Validating of K6 version installed in Ubuntu.."
# k6 version
#####################################################################################
##                                 EXECUTE TESTS                                   ##
#####################################################################################
# k6_test='k6 run -e ENV='$ENV' -e Project='$PROJECT' -e APINAME='$APINAME' -e DATA='$DATA' --vus '$USERS' --iterations '$DURATION' ./PerfTest/Projects/'$PROJECT'/perfTestScripts.js'
# k6_test='k6 run -e ENV='$ENV' -e Project='$PROJECT' -e APINAME='$APINAME' -e DATA='$DATA' --vus '$USERS' --iterations '$DURATION' --out influxdb=http://104.40.213.24:8086/'$DBNAME' ./scripts/perfAPITestScript.js'
# $k6_test
#echo "Performance testing is started.."
#for apiName in "${API_FILES[@]}";do
k6_test='k6 run -e ENV='$ENV' -e Project='$PROJECT' -e APINAME='$APINAME' -e DATA='$DATA' -e USERS='$USERS' -e TESTINGTIME='$DURATION' ./scripts/perfAPITestScript.js'
$k6_test
#sleep 5
#done
#echo "Performance testing is completed.."
