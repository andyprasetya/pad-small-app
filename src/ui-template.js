import config from './config';
var templates = {};

templates.topLandingPageNavigation = function() {
  let dom = `<nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
    <a class='navbar-brand' href='./'>`+ config.appTitle +`</a>
    <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
      <span class='navbar-toggler-icon'></span>
    </button>

    <div class='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul class='navbar-nav left-topnav-section mr-auto'>

      </ul>
      <ul class='navbar-nav right-topnav-section'>
        <li class='nav-item'>
          <a id='login' class='nav-link' href='#'><i class='fa fa-lock'></i>&nbsp;Login</a>
        </li>
      </ul>
    </div>
  </nav>`;
  return dom;
}

templates.topAppMainNavigation = function() {
  let dom = `<nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
    <a class='navbar-brand' href='./'>`+ config.appTitle +`</a>
    <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
      <span class='navbar-toggler-icon'></span>
    </button>

    <div class='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul id='topnavleftmenu' class='navbar-nav left-topnav-section mr-auto'>
        <li class='nav-item'>
          <a id='dashboard' class='nav-link' href='#'><i class='fa fa-home'></i>&nbsp;Dashboard <span class='sr-only'>(current)</span></a>
        </li>
      </ul>
      <ul id='topnavrightmenu' class='navbar-nav right-topnav-section'>
        <li class='nav-item'>
          <a id='exit' class='nav-link' href='#'><i class='fa fa-power-off'></i>&nbsp;Keluar</a>
        </li>
      </ul>
    </div>
  </nav>`;
  return dom;
}

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
}

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
}

templates.loginButtons = function() {
  let dom = `<button type='button' class='btn btn-secondary btn-sm' data-dismiss='modal'><i class='fa fa-power-off'></i>&nbsp;Batal</button>
    <button type='submit' class='btn btn-primary btn-sm'><i class='fa fa-lock'></i>&nbsp;Login</button>`;
  return dom;
}

export default templates;
