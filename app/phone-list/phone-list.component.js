/**
 * 
 * @authors Jialin (you@example.org)
 * @date    2016-06-10 11:10:43
 * @version $Id$
 */

'use strict';

angular.
	module('phoneList').
	component('phoneList', {
		templateUrl: 'phone-list/phone-list.template.html',
		

		controller: function PhoneListController() {
			this.phones = [
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
		}
	});
