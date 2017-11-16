import { configure, addDecorator } from '@storybook/vue';
import Vue from 'vue';


// Import all your vue custom components here ...
import Test from '../src/Test.vue';

// Install Vue plugins.
// Vue.use(Vuex);

// Register all your vue custom components here ...
Vue.component('test', Test);


// ini storybook
function configureStories() {
	// 1. identify sotires
	const req = require.context(
		'./../src/',
		true,
		/\/stories\/[A-Z,a-z,0-9,\.]*\.js$/
	);

	// 2. load and configure them
	function loadStories() {
		req.keys().forEach(req);
	}

	configure(loadStories, module);
}

configureStories();
