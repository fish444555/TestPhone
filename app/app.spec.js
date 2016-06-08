/**
 * 
 * @authors Jialin (you@example.org)
 * @date    2016-06-08 16:08:30
 * @version $Id$
 */

describe('PhoneListController', function () {
	
	beforeEach(module('phonecatApp'));

	it('create phone model with 3 phones', inject(function($controller) {
		var scope = {};
		var ctrl = $controller('PhoneListController', {$scope: scope});

		expect(scope.phones.length).toBe(3);
		expect(scope.name).toBe('world');
	}));


})