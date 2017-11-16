/* eslint-disable prefer-arrow-callback */

// storybook imports
import Vue from 'vue';
import { storiesOf } from '@storybook/vue'; // eslint-disable-line no-unused-vars


import Test from './../Test.vue';


storiesOf('AButtonMenu', module).add(
	'default',
	() => ({
		components: { Test },
		template: '<test></test>',
	})
);
