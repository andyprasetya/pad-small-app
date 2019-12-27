import config from './config';
var templates = {};

templates.topLandingPageNavigation = function() {
  let dom = `<nav class='navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow'>
      <a class='navbar-brand col-sm-3 col-md-2 mr-0' href='./'>`+ config.appTitle +`</a>
      <ul class='navbar-nav px-3'>
        <li class='nav-item text-nowrap'>
          <a id='login' class='nav-link' href='#'><i class='fa fa-lock'></i>&nbsp;Login</a>
        </li>
      </ul>
    </nav>`;
  return dom;
};

templates.topAppMainNavigation = function() {
  let dom = `<nav class='navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow'>
      <a class='navbar-brand col-sm-3 col-md-2 mr-0' href='./'>`+ config.appTitle +`</a>
      <ul class='navbar-nav px-3'>
        <li class='nav-item text-nowrap'>
          <a id='exit' class='nav-link' href='#'><i class='fa fa-power-off'></i>&nbsp;Keluar</a>
        </li>
      </ul>
    </nav>`;
  return dom;
};

templates.adminSidebar = function(){
  let dom = `<div class='container-fluid'>
      <div class='row'>
        <nav class='col-md-2 d-none d-md-block bg-light sidebar'>
          <div class='sidebar-sticky'>
            <ul class='nav flex-column'>
              <li class='nav-item'>
                <a id='dashboard' class='nav-link active' href='#'><i class='fa fa-home'></i>&nbsp;Dashboard <span class='sr-only'>(current)</span></a>
              </li>
              <li class='nav-item'>
                <a id='data_restoran' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;Restoran</a>
              </li>
              <li class='nav-item'>
                <a id='data_hotel' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;Hotel</a>
              </li>
              <li class='nav-item'>
                <a id='data_parkir' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;Parkir</a>
              </li>
              <li class='nav-item'>
                <a id='data_reklame' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;Reklame</a>
              </li>
              <li class='nav-item'>
                <a id='data_airtanah' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;Air Tanah</a>
              </li>
              <li class='nav-item'>
                <a id='data_hiburan' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;Hiburan</a>
              </li>
              <li class='nav-item'>
                <a id='data_bphtb' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;BPHTB</a>
              </li>
              <li class='nav-item'>
                <a id='data_ppju' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;PPJU</a>
              </li>
              <li class='nav-item'>
                <a id='data_pbbp2' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;PBB-P2</a>
              </li>
            </ul>

            <h6 class='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted'>
              <span><i class='fa fa-eye'></i>&nbsp;Visualisasi Data</span>
            </h6>
            <ul class='nav flex-column mb-2'>
              <li class='nav-item'>
                <a id='grafik_pad' class='nav-link' href='#'><span><i class='fa fa-line-chart'></i></span>&nbsp;Realisasi PAD</a>
              </li>
            </ul>
          </div>
        </nav>

        <main role='main' class='col-md-9 ml-sm-auto col-lg-10 px-4'>
          <div id='app_header' class='mt-2 border-bottom'></div>
          <div id='app_body'></div>
        </main>
      </div>
    </div>`;
  return dom;
};

templates.viewerSidebar = function(){
  let dom = ``;
  return dom;
};

templates.modalBoxes = function() {
  let dom = `<div class='modal fade' id='modalbox' tabindex='-1' role='dialog' aria-labelledby='app_modal_label' aria-hidden='true'>
    <div id='app_modal_size' class='modal-dialog' role='document'>
      <div class='modal-content'>
        <div class='modal-header'>
          <h5 class='modal-title' id='app_modal_label'></h5>
        </div>
        <div id='app_modal_body' class='modal-body'></div>
        <div id='app_modal_footer' class='modal-footer'>
          <button type='button' class='btn btn-secondary btn-sm' data-dismiss='modal'><i class='fa fa-power-off'></i>&nbsp;Close</button>
        </div>
      </div>
    </div>
  </div>

  <div class='modal fade' id='modalform' tabindex='-1' role='dialog' aria-labelledby='form_modal_label' aria-hidden='true'>
    <div id='form_modal_size' class='modal-dialog' role='document'>
      <div class='modal-content'>
        <form id='dynamicform' name='dynamicform'>
          <div class='modal-header'>
            <h5 class='modal-title' id='form_modal_label'></h5>
          </div>
          <div id='form_modal_body' class='modal-body'></div>
          <div id='form_modal_footer' class='modal-footer'></div>
        </form>
      </div>
    </div>
  </div>

  <div class='modal fade' id='featureModal' tabindex='-1' role='dialog'>
    <div id='feature_modal_size' class='modal-dialog' role='document'>
      <div class='modal-content'>
        <div class='modal-header'>
          <h4 class='modal-title' id='feature-title'></h4>
        </div>
        <div id='feature-info' class='modal-body'></div>
        <div id='feature_modal_footer' class='modal-footer'>
          <button type='button' class='btn btn-secondary btn-sm' data-dismiss='modal'><i class='fa fa-power-off'></i>&nbsp;Tutup</button>
        </div>
      </div>
    </div>
  </div>

  <div id='dataPropModal' class='dataPropertyModal'>
    <span class='dataPropertyClose'>&times;</span>
    <img class='dataPropertyModal-content' id='imgtoshow'/>
    <div id='dataPropertyCaption'></div>
  </div>`;
  return dom;
};

templates.loginBox = function() {
  let dom = `<div class='form-group'>
      <label for='username'>Username</label>
      <input type='text' class='form-control' id='username' name='username' value='' placeholder='Username'>
    </div>
    <div class='form-group'>
      <label for='password'>Password</label>
      <input type='password' class='form-control' id='password' name='password' value='' placeholder='Password'>
    </div>
    <span id='notice'><div class='alert alert-secondary pl-0 pr-0 text-center' role='alert'>Masukkan username dan password Anda.</div></span>`;
  return dom;
};

templates.loginButtons = function() {
  let dom = `<button type='button' class='btn btn-secondary btn-sm' data-dismiss='modal'><i class='fa fa-power-off'></i>&nbsp;Batal</button>
    <button type='submit' class='btn btn-primary btn-sm'><i class='fa fa-lock'></i>&nbsp;Login</button>`;
  return dom;
};

templates.breadcrumb = function(title, icon){
  title = typeof title !== 'undefined' ? title : 'Breadcrumb';
  icon = typeof icon !== 'undefined' ? icon : 'dashboard';
  let dom = `<ol class='breadcrumb bg-dark'><li class='breadcrumb-item text-light active' aria-current='page'><i class='`+ icon +`'></i>&nbsp;`+ title +`</li></ol>`;
  return dom;
}

templates._formModuleRestoran = function(){
  let dom = ``;
  return dom;
};

templates._formModuleHotel = function(){
  let dom = ``;
  return dom;
};

templates._formModuleParkir = function(){
  let dom = ``;
  return dom;
};

templates._formModuleReklame = function(){
  let dom = ``;
  return dom;
};

templates._formModuleAirTanah = function(){
  let dom = ``;
  return dom;
};

templates._formModuleHiburan = function(){
  let dom = ``;
  return dom;
};

templates._formModuleBPHTB = function(){
  let dom = ``;
  return dom;
};

templates._formModulePPJU = function(){
  let dom = ``;
  return dom;
};

templates._formModulePBBP2 = function(){
  let dom = ``;
  return dom;
};

templates._viewModuleRestoran = function(){
  let dom = ``;
  return dom;
};

templates._viewModuleHotel = function(){
  let dom = ``;
  return dom;
};

templates._viewModuleParkir = function(){
  let dom = ``;
  return dom;
};

templates._viewModuleReklame = function(){
  let dom = ``;
  return dom;
};

templates._viewModuleAirTanah = function(){
  let dom = ``;
  return dom;
};

templates._viewModuleHiburan = function(){
  let dom = ``;
  return dom;
};

templates._viewModuleBPHTB = function(){
  let dom = ``;
  return dom;
};

templates._viewModulePPJU = function(){
  let dom = ``;
  return dom;
};

templates._viewModulePBBP2 = function(){
  let dom = ``;
  return dom;
};

export default templates;