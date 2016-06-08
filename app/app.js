/**
 * 
 * @authors Jialin (you@example.org)
 * @date    2016-06-08 15:24:03
 * @version $1.0$
 */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
	$scope.phones = [
		{
	      name: 'Nexus S',
	      snippet: 'Fast just got faster with Nexus S.'
	    }, {
	      name: 'Motorola XOOM™ with Wi-Fi',
	      snippet: 'The Next, Next Generation tablet.'
	    }, {
	      name: 'MOTOROLA XOOM™',
	      snippet: 'The Next, Next Generation tablet.'
	    }
	];
});