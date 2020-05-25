/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global libphonenumber */

var myapp =
        angular.module('app', []).controller('appCtr', function ($scope) {
    $scope.asYouType = new libphonenumber.AsYouType('US').input('213-373-4253');
    $scope.asYouType1 =  new libphonenumber.AsYouType().input('+12133734');
    $scope.format = libphonenumber.format('2133734253', 'US', 'International');
    $scope.format1 = libphonenumber.format('2133734253', 'US', 'RFC3966');
    $scope.format2 = libphonenumber.format('2133734253', 'US', 'E.164');
    $scope.parse = libphonenumber.parsePhoneNumberFromString('Phone: 8 (800) 555 35 35.', 'RU');
    $scope.phoneNumber = libphonenumber.findPhoneNumbersInText(`For tech support call +7 (800) 555-35-35
        internationally or reach a local US branch at (213) 373-4253 ext. 1234.`, 'US');
        
});

