console.log('pages/index.js');



import { createApp } from 'vue';
import VuePUGComponent from '@/vue/PUG.vue';

const AppSelector = document.querySelector('#vue-init');

if (AppSelector) createApp(VuePUGComponent).mount(AppSelector);
