import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-anima.js';

const scrollSuave = new ScrollSuave('.header a[href^="#"]');
scrollSuave.init();

const scrollAnima = new ScrollAnima('section');
scrollAnima.init();