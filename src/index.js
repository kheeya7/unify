import 'bootstrap-webpack';
import jQuery from 'jquery';
import './styles/index.less';
import './styles/minimal-lightbox.css';
import { Rootpage } from './rootpage/view.js';

window.$ = window.jQuery = jQuery;

const rootpage = new Rootpage({
    el: $('.unify-app')
});

rootpage.render();

$(document).ready(() => {
    rootpage.initializeScripts();
});
