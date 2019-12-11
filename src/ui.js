import config from './config';
import templates from './ui-template';
import helpers from './helpers';

var ui = {};

var $ = jQuery;

ui.initUI = function(anchordiv) {
  anchordiv = typeof anchordiv !== 'undefined' ? anchordiv : 'app';
  document.title = config.documentTitle;
  this.createTopNavigation(anchordiv);
  this._addModuleMenu();
  this.createModalBoxes(anchordiv);
  this._activateTopNav();
};

ui.createTopNavigation = function(anchordiv) {
  anchordiv = typeof anchordiv !== 'undefined' ? anchordiv : 'app';
  let anchorSelector = document.getElementById('app');
  let activeModule = sessionStorage.getItem('module');
  if(activeModule){
    anchorSelector.insertAdjacentHTML('beforebegin', templates.topAppMainNavigation());
  } else {
    anchorSelector.insertAdjacentHTML('beforebegin', templates.topLandingPageNavigation());
  }
};

ui._addModuleMenu = function() {
  let activeModule = sessionStorage.getItem('module');
  if(activeModule){
    switch(activeModule){
      case 'development':
        let leftMenu = document.getElementById('topnavleftmenu').firstElementChild;
        let rightMenu = document.getElementById('topnavrightmenu').firstElementChild;
        let domleft = `<li class='nav-item'>
            <a id='data' class='nav-link' href='#'><i class='fa fa-shield'></i>&nbsp;Data</a>
          </li>
          <li class='nav-item'>
            <a id='report' class='nav-link' href='#'><i class='fa fa-book'></i>&nbsp;Laporan</a>
          </li>`;
        let domright = `<li class='nav-item'>
          <a id='setting' class='nav-link' href='#'><i class='fa fa-cog'></i>&nbsp;Pengaturan</a>
        </li>`;
        leftMenu.insertAdjacentHTML('afterend', domleft);
        rightMenu.insertAdjacentHTML('beforebegin', domright);
        break;
      default:
        
        break;
    }
  } else {
    return false;
  }
};

ui._activateTopNav = function() {
  $('#navbarSupportedContent > ul.navbar-nav > li.nav-item > a.nav-link').on('click', function(evt){
    evt.stopImmediatePropagation();
    $('#navbarSupportedContent.navbar-collapse.collapse.show').removeClass().addClass('navbar-collapse collapse');
    let itemid = $(this).attr('id');
    switch(itemid) {
      case 'dashboard':
          document.getElementById('app').innerHTML = "";
          
        break;
      case 'data':
          document.getElementById('app').innerHTML = "";
          
        break;
      case 'report':
          document.getElementById('app').innerHTML = "";
          
        break;
      case 'setting':
          document.getElementById('app').innerHTML = "";
          
        break;
      case 'login':
          helpers._doLoginBox();
        break;
      case 'exit':
          helpers._signout();
        break;
      default:
          console.log('undefined');
        break;
    }
    return false;
  });
};

ui.createModalBoxes = function(anchordiv) {
  anchordiv = typeof anchordiv !== 'undefined' ? anchordiv : 'app';
  let anchorSelector = document.getElementById('app');
  anchorSelector.insertAdjacentHTML('afterend', templates.modalBoxes());
};

ui.createLandingPage = function() {

};

ui._createDashboard = function() {
  let module = sessionStorage.getItem('module'), 
    userid = sessionStorage.getItem('userid');
  document.getElementById('app').innerHTML = "";
};

export default ui;