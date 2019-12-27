import config from './config';
import templates from './ui-template';
import helpers from './helpers';

var ui = {};

var $ = jQuery;

ui.initUI = function(anchordiv) {
  anchordiv = typeof anchordiv !== 'undefined' ? anchordiv : 'app';
  document.title = config.documentTitle;
  this.createTopNavigation(anchordiv);
  this.createModalBoxes(anchordiv);
  this._activateTopNav();
  this.createLandingPage();
};

ui.createTopNavigation = function(anchordiv) {
  anchordiv = typeof anchordiv !== 'undefined' ? anchordiv : 'app';
  let anchorSelector = document.getElementById('app');
  let activeModule = sessionStorage.getItem('module');
  if(activeModule){
    anchorSelector.insertAdjacentHTML('beforebegin', templates.topAppMainNavigation());
    if(activeModule == 'administrator'){
      anchorSelector.innerHTML = templates.adminSidebar();
    } else {
      anchorSelector.innerHTML = templates.viewerSidebar();
    }
  } else {
    anchorSelector.insertAdjacentHTML('beforebegin', templates.topLandingPageNavigation());
  }
};

ui._activateTopNav = function() {
  let elements = document.querySelectorAll('.nav-link');
  for (let i = 0; i < elements.length; i++){
    let self = elements[i];
    self.addEventListener('click', function(event){
      event.preventDefault();
      if (document.querySelector('.nav-link.active') !== null) {
        document.querySelector('.nav-link.active').classList.remove('active');
      }
      if(this.id == 'login'){
        helpers._doLoginBox();
      } else if(this.id == 'exit'){
        helpers._signout();
      } else {
        ui._createAppModule(this.id);
      }
      this.classList.toggle('active');
    });
  }
};

ui.createModalBoxes = function(anchordiv) {
  anchordiv = typeof anchordiv !== 'undefined' ? anchordiv : 'app';
  let anchorSelector = document.getElementById('app');
  anchorSelector.insertAdjacentHTML('afterend', templates.modalBoxes());
};

ui.createLandingPage = function() {
  this._createDashboard();
};

ui._createDashboard = function() {
  let anchorSelector = document.getElementById('app');
  let activeModule = sessionStorage.getItem('module');
  if(activeModule){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Dashboard', 'fa fa-home');
  } else {
    anchorSelector.innerHTML = "";
    console.log('Landing page - public');
  }
};

ui._createAppModule = function(appsubmodule) {
  appsubmodule = typeof appsubmodule !== 'undefined' ? appsubmodule : 'dashboard';
  let activeModule = sessionStorage.getItem('module');
  document.getElementById('app_header').innerHTML = "";
  document.getElementById('app_body').innerHTML = "";
  if(appsubmodule == 'dashboard'){
    this.createLandingPage();
  } else if(appsubmodule == 'data_restoran'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Restoran', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._formModuleRestoran();
  } else if(appsubmodule == 'data_hotel'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Hotel', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._formModuleHotel();
  } else if(appsubmodule == 'data_parkir'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Parkir', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._formModuleParkir();
  } else if(appsubmodule == 'data_reklame'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Reklame', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._formModuleReklame();
  } else if(appsubmodule == 'data_airtanah'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Air Tanah', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._formModuleAirTanah();
  } else if(appsubmodule == 'data_hiburan'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Hiburan', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._formModuleHiburan();
  } else if(appsubmodule == 'data_bphtb'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('BPHTB', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._formModuleBPHTB();
  } else if(appsubmodule == 'data_ppju'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('PPJU', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._formModulePPJU();
  } else if(appsubmodule == 'data_pbbp2'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('PBB-P2', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._formModulePBBP2();
  } else if(appsubmodule == 'view_restoran'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Restoran', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModuleRestoran();
  } else if(appsubmodule == 'view_hotel'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Hotel', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModuleHotel();
  } else if(appsubmodule == 'view_parkir'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Parkir', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModuleParkir();
  } else if(appsubmodule == 'view_reklame'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Reklame', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModuleReklame();
  } else if(appsubmodule == 'view_airtanah'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Air Tanah', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModuleAirTanah();
  } else if(appsubmodule == 'view_hiburan'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Hiburan', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModuleHiburan();
  } else if(appsubmodule == 'view_bphtb'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('BPHTB', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModuleBPHTB();
  } else if(appsubmodule == 'view_ppju'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('PPJU', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModulePPJU();
  } else if(appsubmodule == 'view_pbbp2'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('PBB-P2', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModulePBBP2();
  } else if(appsubmodule == 'grafik_pad'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Realisasi PAD', 'fa fa-line-chart');
    document.getElementById('app_body').innerHTML = templates._viewGraphicPAD();
  } else {
    console.log('__undefined__');
  }
};

export default ui;