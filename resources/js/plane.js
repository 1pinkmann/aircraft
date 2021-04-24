import '../sass/components/swiper-vars.scss';
import '../sass/components/swiper.scss';

import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

window.Swiper =  Swiper;