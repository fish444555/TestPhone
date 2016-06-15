/**
 * 
 * @authors Jialin (you@example.org)
 * @date    2016-06-11 11:16:47
 * @version $Id$
 */

'use strict';

describe('phoneList', function () {
	beforeEach(module('phonecatApp'));

	describe('PhoneListController', function() {

		it('should get a phone model with 3 phones', inject(function($componentController) {
			var ctrl = $componentController('phoneList');

			expect(ctrl.phones.length).toBe(3);
		}))
		
	});
	
});
