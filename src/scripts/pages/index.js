console.log('pages/index.js');

//
// Vue Init:
//
import { createApp } from 'vue';
import SwiperSlider from '@/vue/swiper-slider.vue';

const AppSelector = document.querySelector('#swiper-slider');

if (AppSelector) createApp(SwiperSlider).mount(AppSelector);
