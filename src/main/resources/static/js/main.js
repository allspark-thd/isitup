var app = angular.module('myApp', []);

app.controller('BatchCtrl',function($scope, $http, $interval) {
    $scope.serviceResponse = 'ng-hide';
    var envURL = '/app';
    $scope.appName = 'eSVS';
    // serviceData('/getEnvData',"GET")
    $scope.getMessage = function() {
       serviceData(envURL,"GET");
    };

     $scope.submitMessage = function() {
        var sendData = {};
        console.log($scope.appName + ' ' + $scope.messageText );
        sendData.appName =  $scope.appName;
        console.log(sendData.appName);
        sendData.downMessage = $scope.messageText;
       serviceData(envURL,"POST",sendData);
    };

    $scope.clearMessage = function() {
        var sendData = {};
        console.log($scope.appName + ' ' + $scope.messageText );
        sendData.appName = 'eSVS';
        sendData.downMessage = '';
       serviceData(envURL,"POST",sendData);
    };

    function serviceData(URL,type,sendData){
         $scope.batchData = [];
         var d =  new Date();

         var httpRequest = $http({
                method: type,
                url: URL+ "?cacheTime=" + d.getTime(),
                data: sendData
         }).success(function(data, status) {
             $scope.serviceResponse = '';
            if(type=='GET' ){
                if(URL =='/getEnvData'){
                    console.log( data.APPNAME + ' '  + data.URL)
                    $scope.appName = data.APPNAME;
                    envURL = data.URL;
                    $scope.serviceResponse = 'ng-hide';
                }else{
                     $scope.serviceHeader = "ESVS Current Message"
                     if(data._embedded.app[0].downMessage == ''){
                        $scope.serviceData ="No Message Available";
                     }else{
                        $scope.serviceData = data._embedded.app[0].downMessage;
                     }
                }
            }else if(type=='POST' && data.downMessage == '') {
                $scope.serviceHeader = "ESVS Message"
                $scope.serviceData = 'Message Cleared Successfully.';
            }else if(type=='POST') {
                $scope.serviceHeader = "ESVS Posted Message"
                 if(data.downMessage == ''){
                    $scope.serviceData ="No Message Available";
                 }else{
                    $scope.serviceData = data.downMessage + ' -  Updated Successfully.';
                 }

            }
         }).error(function(data, status) {
            console.log(data);
         });
    };

});
