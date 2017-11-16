import $ from 'jquery';
import 'bootstrap-webpack';
import './styles/index.less';
import { Rootpage } from './rootpage/view.js';

const rootpage = new Rootpage();

rootpage.render();

$('body').append(rootpage.$el);
