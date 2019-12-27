import './jquery-global.js';
import 'bootstrap';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './stylesheets/custom.css';
import './stylesheets/font-awesome.min.css';
import '../node_modules/simple-datatables/src/style.css';
// UI entry point
import commonui from './ui';
import helpers from './helpers';
// jQuery
var $ = jQuery;
// App's UI initialization
commonui.initUI('app');
helpers._appsTimeOut();