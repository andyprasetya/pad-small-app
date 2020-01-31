import config from './config';
import templates from './ui-template';
import helpers from './helpers';
import { COMMON_AXIS_PROPERTIES_INDEX } from 'vega-lite/build/src/axis';
import numeral from 'numeral';

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
    ui.createLRATable();
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
    ui._activateFormRestoran();
    ui._loadDataRestoran();
  } else if(appsubmodule == 'data_hotel'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Hotel', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._formModuleHotel();
    ui._activateFormHotel();
    ui._loadDataHotel();
  } else if(appsubmodule == 'data_parkir'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Parkir', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._formModuleParkir();
    ui._activateFormParkir();
    ui._loadDataParkir();
  } else if(appsubmodule == 'data_reklame'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Reklame', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._formModuleReklame();
    ui._activateFormReklame();
    ui._loadDataReklame();
  } else if(appsubmodule == 'data_airtanah'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Air Tanah', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._formModuleAirTanah();
    ui._activateFormAirTanah();
    ui._loadDataAirTanah();
  } else if(appsubmodule == 'data_hiburan'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Hiburan', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._formModuleHiburan();
    ui._activateFormHiburan();
    ui._loadDataHiburan();
  } else if(appsubmodule == 'data_bphtb'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('BPHTB', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._formModuleBPHTB();
    ui._activateFormBPHTB();
    ui._loadDataBPHTB();
  } else if(appsubmodule == 'data_ppju'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('PPJU', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._formModulePPJU();
    ui._activateFormPPJU();
    ui._loadDataPPJU();
  } else if(appsubmodule == 'data_pbbp2'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('PBB-P2', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._formModulePBBP2();
    ui._activateFormPBBP2();
    ui._loadDataPBBP2();
  } else if(appsubmodule == 'viewer_restoran'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Restoran', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModuleRestoran();
    ui._loadDataRestoran();
  } else if(appsubmodule == 'viewer_hotel'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Hotel', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModuleHotel();
    ui._loadDataHotel();
  } else if(appsubmodule == 'viewer_parkir'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Parkir', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModuleParkir();
    ui._loadDataParkir();
  } else if(appsubmodule == 'viewer_reklame'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Reklame', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModuleReklame();
    ui._loadDataReklame();
  } else if(appsubmodule == 'viewer_airtanah'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Air Tanah', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModuleAirTanah();
    ui._loadDataAirTanah();
  } else if(appsubmodule == 'viewer_hiburan'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Hiburan', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModuleHiburan();
    ui._loadDataHiburan();
  } else if(appsubmodule == 'viewer_bphtb'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('BPHTB', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModuleBPHTB();
    ui._loadDataBPHTB();
  } else if(appsubmodule == 'viewer_ppju'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('PPJU', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModulePPJU();
    ui._loadDataPPJU();
  } else if(appsubmodule == 'viewer_pbbp2'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('PBB-P2', 'fa fa-file');
    document.getElementById('app_body').innerHTML = templates._viewModulePBBP2();
    ui._loadDataPBBP2();
  } else if(appsubmodule == 'grafik_pad'){
    document.getElementById('app_header').innerHTML = templates.breadcrumb('Realisasi PAD', 'fa fa-line-chart');
    document.getElementById('app_body').innerHTML = templates._viewGraphicPAD();
  } else {
    console.log('__undefined__');
  }
};

ui.createLRATable = function(){
  document.getElementById('app_body').innerHTML = templates._viewLRATable();
  fetch(''+config.endPointBaseURL+'/dataservices/getLRAPenetapan.php')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    if (data.status == 201) {
      var datarows = data.dataarray;
      var tablerow = "";
      $.each(datarows, function(key, value){
        if(value.text_c == '0' && value.text_d == '0' && value.text_e == '00' && value.text_f == '00'){
          var pct = (parseInt(value.integer_d)/parseInt(value.integer_c))*100;
          tablerow += `<tr>
            <td class='valigned-middle'><strong>`+value.text_b+`</strong></td>
            <td class='valigned-middle'><strong>`+value.long_text_c+`</strong></td>
            <td class='valigned-middle text-right'><strong>`+numeral(value.integer_c).format('0,0')+`</strong></td>
            <td class='valigned-middle text-right'><strong>`+numeral(value.integer_d).format('0,0')+`</strong></td>
            <td class='valigned-middle text-center'><strong>`+numeral(pct).format('0,0')+` %</strong></td>
          </tr>`;
        } else if(value.text_c != '0' && value.text_d == '0' && value.text_e == '00' && value.text_f == '00'){
          var pct = (parseInt(value.integer_d)/parseInt(value.integer_c))*100;
          tablerow += `<tr>
            <td class='valigned-middle'><strong>`+value.text_b+`.`+value.text_c+`</strong></td>
            <td class='valigned-middle'><strong>`+value.long_text_c+`</strong></td>
            <td class='valigned-middle text-right'><strong>`+numeral(value.integer_c).format('0,0')+`</strong></td>
            <td class='valigned-middle text-right'><strong>`+numeral(value.integer_d).format('0,0')+`</strong></td>
            <td class='valigned-middle text-center'><strong>`+numeral(pct).format('0,0')+` %</strong></td>
          </tr>`;
        } else if(value.text_c != '0' && value.text_d != '0' && value.text_e == '00' && value.text_f == '00'){
          var pct = (parseInt(value.integer_d)/parseInt(value.integer_c))*100;
          tablerow += `<tr>
            <td class='valigned-middle'><strong>`+value.text_b+`.`+value.text_c+`.`+value.text_d+`</strong></td>
            <td class='valigned-middle'><strong>`+value.long_text_c+`</strong></td>
            <td class='valigned-middle text-right'><strong>`+numeral(value.integer_c).format('0,0')+`</strong></td>
            <td class='valigned-middle text-right'><strong>`+numeral(value.integer_d).format('0,0')+`</strong></td>
            <td class='valigned-middle text-center'><strong>`+numeral(pct).format('0,0')+` %</strong></td>
          </tr>`;
        } else if(value.text_c != '0' && value.text_d != '0' && value.text_e != '00' && value.text_f == '00'){
          var pct = (parseInt(value.integer_d)/parseInt(value.integer_c))*100;
          tablerow += `<tr>
            <td class='valigned-middle'><strong>`+value.text_b+`.`+value.text_c+`.`+value.text_d+`.`+value.text_e+`</strong></td>
            <td class='valigned-middle'><strong>`+value.long_text_c+`</strong></td>
            <td class='valigned-middle text-right'><strong>`+numeral(value.integer_c).format('0,0')+`</strong></td>
            <td class='valigned-middle text-right'><strong>`+numeral(value.integer_d).format('0,0')+`</strong></td>
            <td class='valigned-middle text-center'><strong>`+numeral(pct).format('0,0')+` %</strong></td>
          </tr>`;
        } else {
          var pct = (parseInt(value.integer_d)/parseInt(value.integer_c))*100;
          tablerow += `<tr>
            <td class='valigned-middle'>`+value.text_b+`.`+value.text_c+`.`+value.text_d+`.`+value.text_e+`.`+value.text_f+`</td>
            <td class='valigned-middle'>- `+value.long_text_c+`</td>
            <td class='valigned-middle text-right'>`+numeral(value.integer_c).format('0,0')+`</td>
            <td class='valigned-middle text-right'>`+numeral(value.integer_d).format('0,0')+`</td>
            <td class='valigned-middle text-center'>`+numeral(pct).format('0,0')+` %</td>
          </tr>`;
        }
      });
      $('#tabledata tbody').append(tablerow);
    } else {
      $('#tabledata tbody').html("<tr><td colspan='4' class='valigned-middle text-center text-danger'>Data tidak ditemukan.</td></tr>");
    }
  })
  .catch(function(err){
    console.log(err);
  });
};

ui._activateFormRestoran = function(){
  var formIPData = document.getElementById('finputData');
  formIPData.onsubmit = function(e){
    e.preventDefault();
    var form = document.querySelector('#finputData'),
    formData = helpers.serialize(form), 
    jsonData = helpers.QueryStringToJSON(decodeURIComponent(formData));
    fetch(''+config.endPointBaseURL+'/dataservices/saveDataForm.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      if (data.status == 201) {
        $('#finputData')[0].reset();
      } else {
        alert('Data transaksi gagal disimpan.');
      }
    })
    .catch(function(err){
      console.log(err);
    });
  };
};

ui._activateFormHotel = function(){
  var formIPData = document.getElementById('finputData');
  formIPData.onsubmit = function(e){
    e.preventDefault();
    var form = document.querySelector('#finputData'),
    formData = helpers.serialize(form), 
    jsonData = helpers.QueryStringToJSON(decodeURIComponent(formData));
    fetch(''+config.endPointBaseURL+'/dataservices/saveDataForm.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      if (data.status == 201) {
        $('#finputData')[0].reset();
      } else {
        alert('Data transaksi gagal disimpan.');
      }
    })
    .catch(function(err){
      console.log(err);
    });
  };
};

ui._activateFormReklame = function(){
  var formIPData = document.getElementById('finputData');
  formIPData.onsubmit = function(e){
    e.preventDefault();
    var form = document.querySelector('#finputData'),
    formData = helpers.serialize(form), 
    jsonData = helpers.QueryStringToJSON(decodeURIComponent(formData));
    fetch(''+config.endPointBaseURL+'/dataservices/saveDataForm.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      if (data.status == 201) {
        $('#finputData')[0].reset();
      } else {
        alert('Data transaksi gagal disimpan.');
      }
    })
    .catch(function(err){
      console.log(err);
    });
  };
};

ui._activateFormParkir = function(){
  var formIPData = document.getElementById('finputData');
  formIPData.onsubmit = function(e){
    e.preventDefault();
    var form = document.querySelector('#finputData'),
    formData = helpers.serialize(form), 
    jsonData = helpers.QueryStringToJSON(decodeURIComponent(formData));
    fetch(''+config.endPointBaseURL+'/dataservices/saveDataForm.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      if (data.status == 201) {
        $('#finputData')[0].reset();
      } else {
        alert('Data transaksi gagal disimpan.');
      }
    })
    .catch(function(err){
      console.log(err);
    });
  };
};

ui._activateFormAirTanah = function(){
  var formIPData = document.getElementById('finputData');
  formIPData.onsubmit = function(e){
    e.preventDefault();
    var form = document.querySelector('#finputData'),
    formData = helpers.serialize(form), 
    jsonData = helpers.QueryStringToJSON(decodeURIComponent(formData));
    fetch(''+config.endPointBaseURL+'/dataservices/saveDataForm.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      if (data.status == 201) {
        $('#finputData')[0].reset();
      } else {
        alert('Data transaksi gagal disimpan.');
      }
    })
    .catch(function(err){
      console.log(err);
    });
  };
};

ui._activateFormHiburan = function(){
  var formIPData = document.getElementById('finputData');
  formIPData.onsubmit = function(e){
    e.preventDefault();
    var form = document.querySelector('#finputData'),
    formData = helpers.serialize(form), 
    jsonData = helpers.QueryStringToJSON(decodeURIComponent(formData));
    fetch(''+config.endPointBaseURL+'/dataservices/saveDataForm.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      if (data.status == 201) {
        $('#finputData')[0].reset();
      } else {
        alert('Data transaksi gagal disimpan.');
      }
    })
    .catch(function(err){
      console.log(err);
    });
  };
};

ui._activateFormPPJU = function(){
  var formIPData = document.getElementById('finputData');
  formIPData.onsubmit = function(e){
    e.preventDefault();
    var form = document.querySelector('#finputData'),
    formData = helpers.serialize(form), 
    jsonData = helpers.QueryStringToJSON(decodeURIComponent(formData));
    fetch(''+config.endPointBaseURL+'/dataservices/saveDataForm.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      if (data.status == 201) {
        $('#finputData')[0].reset();
      } else {
        alert('Data transaksi gagal disimpan.');
      }
    })
    .catch(function(err){
      console.log(err);
    });
  };
};

ui._activateFormBPHTB = function(){
  var formIPData = document.getElementById('finputData');
  formIPData.onsubmit = function(e){
    e.preventDefault();
    var form = document.querySelector('#finputData'),
    formData = helpers.serialize(form), 
    jsonData = helpers.QueryStringToJSON(decodeURIComponent(formData));
    fetch(''+config.endPointBaseURL+'/dataservices/saveDataForm.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      if (data.status == 201) {
        $('#finputData')[0].reset();
      } else {
        alert('Data transaksi gagal disimpan.');
      }
    })
    .catch(function(err){
      console.log(err);
    });
  };
};

ui._activateFormPBBP2 = function(){
  var formIPData = document.getElementById('finputData');
  formIPData.onsubmit = function(e){
    e.preventDefault();
    var form = document.querySelector('#finputData'),
    formData = helpers.serialize(form), 
    jsonData = helpers.QueryStringToJSON(decodeURIComponent(formData));
    fetch(''+config.endPointBaseURL+'/dataservices/saveDataForm.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      if (data.status == 201) {
        $('#finputData')[0].reset();
      } else {
        alert('Data transaksi gagal disimpan.');
      }
    })
    .catch(function(err){
      console.log(err);
    });
  };
};

ui._loadDataRestoran = function(){
  $('#tabledata tbody').empty();
  fetch(''+config.endPointBaseURL+'/dataservices/getTrxRestoran.php')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    if (data.status == 201) {
      var datarows = data.dataarray;
      var tablerows = "";
      var numrows = 1;
      $.each(datarows, function(key, value){
        tablerows += `<tr>
            <td class='valigned-middle'>`+numrows+`.</td>
            <td class='valigned-middle text-center'>`+helpers._otf_format_date('tohtml',value.date_a)+`</td>
            <td class='valigned-middle'>`+value.long_text_c+`</td>
            <td class='valigned-middle'>`+value.long_text_c+`</td>
            <td class='valigned-middle text-right'>`+numeral(value.integer_b).format('0,0')+`</td>
          </tr>`;
        numrows++;
      });
      $('#tabledata tbody').append(tablerows);
    } else {
      var tablerows = "<tr><td colspan='5' class='valigned-middle text-danger text-center'>Data tidak ditemukan.</td></tr>";
    }
  })
  .catch(function(err){
    console.log(err);
  });
};

ui._loadDataHotel = function(){
  $('#tabledata tbody').empty();
  fetch(''+config.endPointBaseURL+'/dataservices/getTrxHotel.php')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    if (data.status == 201) {
      var datarows = data.dataarray;
      var tablerows = "";
      var numrows = 1;
      $.each(datarows, function(key, value){
        tablerows += `<tr>
            <td class='valigned-middle'>`+numrows+`.</td>
            <td class='valigned-middle text-center'>`+helpers._otf_format_date('tohtml',value.date_a)+`</td>
            <td class='valigned-middle'>`+value.long_text_c+`</td>
            <td class='valigned-middle'>`+value.long_text_c+`</td>
            <td class='valigned-middle text-right'>`+numeral(value.integer_b).format('0,0')+`</td>
          </tr>`;
        numrows++;
      });
      $('#tabledata tbody').append(tablerows);
    } else {
      var tablerows = "<tr><td colspan='5' class='valigned-middle text-danger text-center'>Data tidak ditemukan.</td></tr>";
    }
  })
  .catch(function(err){
    console.log(err);
  });
};

ui._loadDataReklame = function(){
  $('#tabledata tbody').empty();
  fetch(''+config.endPointBaseURL+'/dataservices/getTrxReklame.php')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    if (data.status == 201) {
      var datarows = data.dataarray;
      var tablerows = "";
      var numrows = 1;
      $.each(datarows, function(key, value){
        tablerows += `<tr>
            <td class='valigned-middle'>`+numrows+`.</td>
            <td class='valigned-middle text-center'>`+helpers._otf_format_date('tohtml',value.date_a)+`</td>
            <td class='valigned-middle'>`+value.long_text_c+`</td>
            <td class='valigned-middle'>`+value.long_text_c+`</td>
            <td class='valigned-middle text-right'>`+numeral(value.integer_b).format('0,0')+`</td>
          </tr>`;
        numrows++;
      });
      $('#tabledata tbody').append(tablerows);
    } else {
      var tablerows = "<tr><td colspan='5' class='valigned-middle text-danger text-center'>Data tidak ditemukan.</td></tr>";
    }
  })
  .catch(function(err){
    console.log(err);
  });
};

ui._loadDataAirTanah = function(){
  $('#tabledata tbody').empty();
  fetch(''+config.endPointBaseURL+'/dataservices/getTrxAirTanah.php')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    if (data.status == 201) {
      var datarows = data.dataarray;
      var tablerows = "";
      var numrows = 1;
      $.each(datarows, function(key, value){
        tablerows += `<tr>
            <td class='valigned-middle'>`+numrows+`.</td>
            <td class='valigned-middle text-center'>`+helpers._otf_format_date('tohtml',value.date_a)+`</td>
            <td class='valigned-middle'>`+value.long_text_c+`</td>
            <td class='valigned-middle'>`+value.long_text_c+`</td>
            <td class='valigned-middle text-right'>`+numeral(value.integer_b).format('0,0')+`</td>
          </tr>`;
        numrows++;
      });
      $('#tabledata tbody').append(tablerows);
    } else {
      var tablerows = "<tr><td colspan='5' class='valigned-middle text-danger text-center'>Data tidak ditemukan.</td></tr>";
    }
  })
  .catch(function(err){
    console.log(err);
  });
};

ui._loadDataParkir = function(){
  $('#tabledata tbody').empty();
  fetch(''+config.endPointBaseURL+'/dataservices/getTrxParkir.php')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    if (data.status == 201) {
      var datarows = data.dataarray;
      var tablerows = "";
      var numrows = 1;
      $.each(datarows, function(key, value){
        tablerows += `<tr>
            <td class='valigned-middle'>`+numrows+`.</td>
            <td class='valigned-middle text-center'>`+helpers._otf_format_date('tohtml',value.date_a)+`</td>
            <td class='valigned-middle'>`+value.long_text_c+`</td>
            <td class='valigned-middle'>`+value.long_text_c+`</td>
            <td class='valigned-middle text-right'>`+numeral(value.integer_b).format('0,0')+`</td>
          </tr>`;
        numrows++;
      });
      $('#tabledata tbody').append(tablerows);
    } else {
      var tablerows = "<tr><td colspan='5' class='valigned-middle text-danger text-center'>Data tidak ditemukan.</td></tr>";
    }
  })
  .catch(function(err){
    console.log(err);
  });
};

ui._loadDataHiburan = function(){
  $('#tabledata tbody').empty();
  fetch(''+config.endPointBaseURL+'/dataservices/getTrxHiburan.php')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    if (data.status == 201) {
      var datarows = data.dataarray;
      var tablerows = "";
      var numrows = 1;
      $.each(datarows, function(key, value){
        tablerows += `<tr>
            <td class='valigned-middle'>`+numrows+`.</td>
            <td class='valigned-middle text-center'>`+helpers._otf_format_date('tohtml',value.date_a)+`</td>
            <td class='valigned-middle'>`+value.long_text_c+`</td>
            <td class='valigned-middle'>`+value.long_text_c+`</td>
            <td class='valigned-middle text-right'>`+numeral(value.integer_b).format('0,0')+`</td>
          </tr>`;
        numrows++;
      });
      $('#tabledata tbody').append(tablerows);
    } else {
      var tablerows = "<tr><td colspan='5' class='valigned-middle text-danger text-center'>Data tidak ditemukan.</td></tr>";
    }
  })
  .catch(function(err){
    console.log(err);
  });
};

ui._loadDataPPJU = function(){
  $('#tabledata tbody').empty();
  fetch(''+config.endPointBaseURL+'/dataservices/getTrxPPJU.php')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    if (data.status == 201) {
      var datarows = data.dataarray;
      var tablerows = "";
      var numrows = 1;
      $.each(datarows, function(key, value){
        tablerows += `<tr>
            <td class='valigned-middle'>`+numrows+`.</td>
            <td class='valigned-middle text-center'>`+helpers._otf_format_date('tohtml',value.date_a)+`</td>
            <td class='valigned-middle text-right'>`+numeral(value.integer_b).format('0,0')+`</td>
          </tr>`;
        numrows++;
      });
      $('#tabledata tbody').append(tablerows);
    } else {
      var tablerows = "<tr><td colspan='3' class='valigned-middle text-danger text-center'>Data tidak ditemukan.</td></tr>";
    }
  })
  .catch(function(err){
    console.log(err);
  });
};

ui._loadDataBPHTB = function(){
  $('#tabledata tbody').empty();
  fetch(''+config.endPointBaseURL+'/dataservices/getTrxBPHTB.php')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    if (data.status == 201) {
      var datarows = data.dataarray;
      var tablerows = "";
      var numrows = 1;
      $.each(datarows, function(key, value){
        tablerows += `<tr>
            <td class='valigned-middle'>`+numrows+`.</td>
            <td class='valigned-middle text-center'>`+helpers._otf_format_date('tohtml',value.date_a)+`</td>
            <td class='valigned-middle text-right'>`+numeral(value.integer_b).format('0,0')+`</td>
          </tr>`;
        numrows++;
      });
      $('#tabledata tbody').append(tablerows);
    } else {
      var tablerows = "<tr><td colspan='3' class='valigned-middle text-danger text-center'>Data tidak ditemukan.</td></tr>";
    }
  })
  .catch(function(err){
    console.log(err);
  });
};

ui._loadDataPBBP2 = function(){
  $('#tabledata tbody').empty();
  fetch(''+config.endPointBaseURL+'/dataservices/getTrxPBBP2.php')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    if (data.status == 201) {
      var datarows = data.dataarray;
      var tablerows = "";
      var numrows = 1;
      $.each(datarows, function(key, value){
        tablerows += `<tr>
            <td class='valigned-middle'>`+numrows+`.</td>
            <td class='valigned-middle text-center'>`+helpers._otf_format_date('tohtml',value.date_a)+`</td>
            <td class='valigned-middle text-right'>`+numeral(value.integer_b).format('0,0')+`</td>
          </tr>`;
        numrows++;
      });
      $('#tabledata tbody').append(tablerows);
    } else {
      var tablerows = "<tr><td colspan='3' class='valigned-middle text-danger text-center'>Data tidak ditemukan.</td></tr>";
    }
  })
  .catch(function(err){
    console.log(err);
  });
};

export default ui;