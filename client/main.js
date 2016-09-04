import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

FlowRouter.route('/', {
	action() {
		FlowRouter.go('/index')
	}
})

FlowRouter.route('/:template', {
	action() {
		Template.body.helpers({
			main: function() {
				return FlowRouter.getParam('template')
			}
		})
	}
})