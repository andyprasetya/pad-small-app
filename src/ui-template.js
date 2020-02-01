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
              <span><i class='fa fa-book'></i>&nbsp;Data Dasar</span>
            </h6>
            <ul class='nav flex-column mb-2'>
              <li class='nav-item'>
                <a id='taxyear' class='nav-link' href='#'><span><i class='fa fa-calendar'></i></span>&nbsp;Tahun Anggaran</a>
              </li>
              <li class='nav-item'>
                <a id='target_management' class='nav-link' href='#'><span><i class='fa fa-shopping-basket'></i></span>&nbsp;Perencanaan</a>
              </li>
              <li class='nav-item'>
                <a id='wp_management' class='nav-link' href='#'><span><i class='fa fa-book'></i></span>&nbsp;Daftar Wajib Pajak</a>
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
            <h6 class='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted'>
              <span><i class='fa fa-cog'></i>&nbsp;Pengaturan</span>
            </h6>
            <ul class='nav flex-column mb-2'>
              <li class='nav-item'>
                <a id='change_password' class='nav-link' href='#'><span><i class='fa fa-lock'></i></span>&nbsp;Password</a>
              </li>
              <li class='nav-item'>
                <a id='users_management' class='nav-link' href='#'><span><i class='fa fa-user'></i></span>&nbsp;Manajemen Pengguna</a>
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
  let dom = `<div class='container-fluid'>
  <div class='row'>
    <nav class='col-md-2 d-none d-md-block bg-light sidebar'>
      <div class='sidebar-sticky'>
        <ul class='nav flex-column'>
          <li class='nav-item'>
            <a id='dashboard' class='nav-link active' href='#'><i class='fa fa-home'></i>&nbsp;Dashboard <span class='sr-only'>(current)</span></a>
          </li>
          <li class='nav-item'>
            <a id='viewer_restoran' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;Restoran</a>
          </li>
          <li class='nav-item'>
            <a id='viewer_hotel' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;Hotel</a>
          </li>
          <li class='nav-item'>
            <a id='viewer_parkir' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;Parkir</a>
          </li>
          <li class='nav-item'>
            <a id='viewer_reklame' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;Reklame</a>
          </li>
          <li class='nav-item'>
            <a id='viewer_airtanah' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;Air Tanah</a>
          </li>
          <li class='nav-item'>
            <a id='viewer_hiburan' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;Hiburan</a>
          </li>
          <li class='nav-item'>
            <a id='viewer_bphtb' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;BPHTB</a>
          </li>
          <li class='nav-item'>
            <a id='viewer_ppju' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;PPJU</a>
          </li>
          <li class='nav-item'>
            <a id='viewer_pbbp2' class='nav-link' href='#'><span><i class='fa fa-file'></i></span>&nbsp;PBB-P2</a>
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
        <h6 class='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted'>
          <span><i class='fa fa-cog'></i>&nbsp;Pengaturan</span>
        </h6>
        <ul class='nav flex-column mb-2'>
          <li class='nav-item'>
            <a id='change_password' class='nav-link' href='#'><span><i class='fa fa-lock'></i></span>&nbsp;Password</a>
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
  let dom = `<form id='finputData' name='finputData'>
  <input type='hidden' id='context' name='context' value='TRANSAKSI'>
  <input type='hidden' id='text_b' name='text_b' value='4'>
  <input type='hidden' id='text_c' name='text_c' value='1'>
  <input type='hidden' id='text_d' name='text_d' value='1'>
  <input type='hidden' id='text_e' name='text_e' value='02'>
  <table class='table table-bordered table-striped'>
      <tfoot>
        <tr>
          <td colspan='2' class='valigned-middle text-right'><button type='submit' id='savedata' class='btn btn-primary btn-sm'>Simpan Data</button></td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td class='valigned-middle'>Wajib Pajak</td>
          <td class='valigned-middle'><select id='text_f' name='text_f' class='form-control'>
            <option value=''>PILIH WAJIB PAJAK</option>
            <option value='02'>RUMAH MAKAN</option>
            <option value='04'>KANTIN</option>
            <option value='05'>KATERING</option>
          </select></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Objek Pajak</td>
          <td class='valigned-middle'><select id='op' name='op' class='form-control'>
            <option value=''>PILIH OBJEK PAJAK</option>
            <option value='NIKI PARAKAN'>NIKI PARAKAN</option>
            <option value='SAMBAL TOBAT MANDING'>SAMBAL TOBAT MANDING</option>
            <option value='POPEYE TEMANGGUNG'>POPEYE TEMANGGUNG</option>
            <option value='ROCKET CHICKEN TEMANGGUNG'>ROCKET CHICKEN TEMANGGUNG</option>
            <option value='LAMONGAN GI'>LAMONGAN GI</option>
          </select></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Tanggal</td>
          <td class='valigned-middle'><input type='date' id='tanggal' name='tanggal' class='form-control datepicker'></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Jumlah</td>
          <td class='valigned-middle'><input type='number' id='jumlah' name='jumlah' class='form-control text-right'></td>
        </tr>
      </tbody>
    </table></form>
    <hr/>
    <table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Nama Wajib Pajak</th>
          <th class='valigned-middle text-center'>Objek Pajak</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._formModuleHotel = function(){
  let dom = `<form id='finputData' name='finputData'>
  <input type='hidden' id='context' name='context' value='TRANSAKSI'>
  <input type='hidden' id='text_b' name='text_b' value='4'>
  <input type='hidden' id='text_c' name='text_c' value='1'>
  <input type='hidden' id='text_d' name='text_d' value='1'>
  <input type='hidden' id='text_e' name='text_e' value='01'>
  <table class='table table-bordered table-striped'>
  <tfoot>
  <tr>
    <td colspan='2' class='valigned-middle text-right'><button type='submit' id='savedata' class='btn btn-primary btn-sm'>Simpan Data</button></td>
  </tr>
</tfoot>
      <tbody>
        <tr>
          <td class='valigned-middle'>Wajib Pajak</td>
          <td class='valigned-middle'><select id='text_f' name='text_f' class='form-control'>
            <option value=''>PILIH WAJIB PAJAK</option>
            <option value='04'>BINTANG 1</option>
            <option value='07'>MELATI 3</option>
            <option value='08'>MELATI 2</option>
          </select></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Objek Pajak</td>
          <td class='valigned-middle'><select id='op' name='op' class='form-control'>
            <option value=''>PILIH OBJEK PAJAK</option>
            <option value='HOTEL INDRALOKA'>HOTEL INDRALOKA</option>
            <option value='HOTEL DIRGANTARA'>HOTEL DIRGANTARA</option>
            <option value='HOTEL KINTAMANI'>HOTEL KINTAMANI</option>
            <option value='HOTEL AYU'>HOTEL AYU</option>
          </select></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Tanggal</td>
          <td class='valigned-middle'><input type='date' id='tanggal' name='tanggal' class='form-control datepicker'></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Jumlah</td>
          <td class='valigned-middle'><input type='number' id='jumlah' name='jumlah' class='form-control text-right'></td>
        </tr>
      </tbody>
    </table></form>
    <hr/>
    <table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Nama Wajib Pajak</th>
          <th class='valigned-middle text-center'>Objek Pajak</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._formModuleParkir = function(){
  let dom = `<form id='finputData' name='finputData'>
  <input type='hidden' id='context' name='context' value='TRANSAKSI'>
  <input type='hidden' id='text_b' name='text_b' value='4'>
  <input type='hidden' id='text_c' name='text_c' value='1'>
  <input type='hidden' id='text_d' name='text_d' value='1'>
  <input type='hidden' id='text_e' name='text_e' value='09'>
  <table class='table table-bordered table-striped'>
  <tfoot>
  <tr>
    <td colspan='2' class='valigned-middle text-right'><button type='submit' id='savedata' class='btn btn-primary btn-sm'>Simpan Data</button></td>
  </tr>
</tfoot>
      <tbody>
        <tr>
          <td class='valigned-middle'>Wajib Pajak</td>
          <td class='valigned-middle'><select id='text_f' name='text_f' class='form-control'>
            <option value=''>PILIH WAJIB PAJAK</option>
            <option value='01'>PARKIR</option>
          </select></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Objek Pajak</td>
          <td class='valigned-middle'><select id='op' name='op' class='form-control'>
            <option value=''>PILIH OBJEK PAJAK</option>
            <option value='MAHKOTA KRANGGAN'>MAHKOTA KRANGGAN</option>
            <option value='NIKI NGADIREJO'>NIKI NGADIREJO</option>
            <option value='INDOMARET'>INDOMARET</option>
            <option value='ALFAMART'>ALFAMART</option>
          </select></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Tanggal</td>
          <td class='valigned-middle'><input type='date' id='tanggal' name='tanggal' class='form-control datepicker'></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Jumlah</td>
          <td class='valigned-middle'><input type='number' id='jumlah' name='jumlah' class='form-control text-right'></td>
        </tr>
      </tbody>
    </table></form>
    <hr/>
    <table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Nama Wajib Pajak</th>
          <th class='valigned-middle text-center'>Objek Pajak</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._formModuleReklame = function(){
  let dom = `<form id='finputData' name='finputData'>
  <input type='hidden' id='context' name='context' value='TRANSAKSI'>
  <input type='hidden' id='text_b' name='text_b' value='4'>
  <input type='hidden' id='text_c' name='text_c' value='1'>
  <input type='hidden' id='text_d' name='text_d' value='1'>
  <input type='hidden' id='text_e' name='text_e' value='04'>
  <table class='table table-bordered table-striped'>
  <tfoot>
  <tr>
    <td colspan='2' class='valigned-middle text-right'><button type='submit' id='savedata' class='btn btn-primary btn-sm'>Simpan Data</button></td>
  </tr>
</tfoot>
      <tbody>
        <tr>
          <td class='valigned-middle'>Wajib Pajak</td>
          <td class='valigned-middle'><select id='text_f' name='text_f' class='form-control'>
            <option value=''>PILIH WAJIB PAJAK</option>
            <option value='01'>PAPAN NAMA</option>
            <option value='02'>KAIN</option>
            <option value='04'>SELEBARAN</option>
          </select></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Objek Pajak</td>
          <td class='valigned-middle'><select id='op' name='op' class='form-control'>
            <option value=''>PILIH OBJEK PAJAK</option>
            <option value='PT. DJARUM'>PT. DJARUM</option>
            <option value='PT. GUDANG GARAM'>PT. GUDANG GARAM</option>
            <option value='CV. KARYA SATRYA'>CV. KARYA SATRYA</option>
          </select></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Tanggal</td>
          <td class='valigned-middle'><input type='date' id='tanggal' name='tanggal' class='form-control datepicker'></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Jumlah</td>
          <td class='valigned-middle'><input type='number' id='jumlah' name='jumlah' class='form-control text-right'></td>
        </tr>
      </tbody>
    </table></form>
    <hr/>
    <table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Nama Wajib Pajak</th>
          <th class='valigned-middle text-center'>Objek Pajak</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._formModuleAirTanah = function(){
  let dom = `<form id='finputData' name='finputData'>
  <input type='hidden' id='context' name='context' value='TRANSAKSI'>
  <input type='hidden' id='text_b' name='text_b' value='4'>
  <input type='hidden' id='text_c' name='text_c' value='1'>
  <input type='hidden' id='text_d' name='text_d' value='1'>
  <input type='hidden' id='text_e' name='text_e' value='08'>
  <table class='table table-bordered table-striped'>
  <tfoot>
  <tr>
    <td colspan='2' class='valigned-middle text-right'><button type='submit' id='savedata' class='btn btn-primary btn-sm'>Simpan Data</button></td>
  </tr>
</tfoot>
      <tbody>
        <tr>
          <td class='valigned-middle'>Wajib Pajak</td>
          <td class='valigned-middle'><select id='text_f' name='text_f' class='form-control'>
            <option value=''>PILIH WAJIB PAJAK</option>
            <option value='01'>AIR TANAH</option>
          </select></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Objek Pajak</td>
          <td class='valigned-middle'><select id='op' name='op' class='form-control'>
            <option value=''>PILIH OBJEK PAJAK</option>
            <option value='CUCIAN MOBIL KAMISO'>CUCIAN MOBIL KAMISO</option>
            <option value='SAFARI DHARMA RAYA'>SAFARI DHARMA RAYA</option>
            <option value='HARYANTO - GUDANG'>HARYANTO - GUDANG</option>
          </select></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Tanggal</td>
          <td class='valigned-middle'><input type='date' id='tanggal' name='tanggal' class='form-control datepicker'></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Jumlah</td>
          <td class='valigned-middle'><input type='number' id='jumlah' name='jumlah' class='form-control text-right'></td>
        </tr>
      </tbody>
    </table></form>
    <hr/>
    <table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Nama Wajib Pajak</th>
          <th class='valigned-middle text-center'>Objek Pajak</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._formModuleHiburan = function(){
  let dom = `<form id='finputData' name='finputData'>
  <input type='hidden' id='context' name='context' value='TRANSAKSI'>
  <input type='hidden' id='text_b' name='text_b' value='4'>
  <input type='hidden' id='text_c' name='text_c' value='1'>
  <input type='hidden' id='text_d' name='text_d' value='1'>
  <input type='hidden' id='text_e' name='text_e' value='03'>
  <table class='table table-bordered table-striped'>
  <tfoot>
  <tr>
    <td colspan='2' class='valigned-middle text-right'><button type='submit' id='savedata' class='btn btn-primary btn-sm'>Simpan Data</button></td>
  </tr>
</tfoot>
      <tbody>
        <tr>
          <td class='valigned-middle'>Wajib Pajak</td>
          <td class='valigned-middle'><select id='text_f' name='text_f' class='form-control'>
            <option value=''>PILIH WAJIB PAJAK</option>
            <option value='10'>PERMAINAN</option>
            <option value='02'>PAGELARAN</option>
            <option value='16'>PANTI PIJAT</option>
          </select></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Objek Pajak</td>
          <td class='valigned-middle'><select id='op' name='op' class='form-control'>
            <option value=''>PILIH OBJEK PAJAK</option>
            <option value='FUTSAL FANTASI'>FUTSAL FANTASI</option>
            <option value='BASKET GOR'>BASKET GOR</option>
            <option value='PABSI GAME CENTER'>PABSI GAME CENTER</option>
            <option value='NSC BIOSKOP'>NSC BIOSKOP</option>
          </select></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Tanggal</td>
          <td class='valigned-middle'><input type='date' id='tanggal' name='tanggal' class='form-control datepicker'></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Jumlah</td>
          <td class='valigned-middle'><input type='number' id='jumlah' name='jumlah' class='form-control text-right'></td>
        </tr>
      </tbody>
    </table></form>
    <hr/>
    <table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Nama Wajib Pajak</th>
          <th class='valigned-middle text-center'>Objek Pajak</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._formModuleBPHTB = function(){
  let dom = `<form id='finputData' name='finputData'>
  <input type='hidden' id='context' name='context' value='TRANSAKSI'>
  <input type='hidden' id='text_b' name='text_b' value='4'>
  <input type='hidden' id='text_c' name='text_c' value='1'>
  <input type='hidden' id='text_d' name='text_d' value='1'>
  <input type='hidden' id='text_e' name='text_e' value='07'>
  <input type='hidden' id='text_f' name='text_f' value='01'>
  <input type='hidden' id='op' name='op' value='KOLEKTIF'>
  <table class='table table-bordered table-striped'>
  <tfoot>
  <tr>
    <td colspan='2' class='valigned-middle text-right'><button type='submit' id='savedata' class='btn btn-primary btn-sm'>Simpan Data</button></td>
  </tr>
</tfoot>
      <tbody>
        <tr>
          <td class='valigned-middle'>Tanggal</td>
          <td class='valigned-middle'><input type='date' id='tanggal' name='tanggal' class='form-control datepicker'></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Jumlah</td>
          <td class='valigned-middle'><input type='number' id='jumlah' name='jumlah' class='form-control text-right'></td>
        </tr>
      </tbody>
    </table></form>
    <hr/>
    <table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._formModulePPJU = function(){
  let dom = `<form id='finputData' name='finputData'>
  <input type='hidden' id='context' name='context' value='TRANSAKSI'>
  <input type='hidden' id='text_b' name='text_b' value='4'>
  <input type='hidden' id='text_c' name='text_c' value='1'>
  <input type='hidden' id='text_d' name='text_d' value='1'>
  <input type='hidden' id='text_e' name='text_e' value='05'>
  <input type='hidden' id='text_f' name='text_f' value='01'>
  <input type='hidden' id='op' name='op' value='KOLEKTIF'>
  <table class='table table-bordered table-striped'>
  <tfoot>
  <tr>
    <td colspan='2' class='valigned-middle text-right'><button type='submit' id='savedata' class='btn btn-primary btn-sm'>Simpan Data</button></td>
  </tr>
</tfoot>
      <tbody>
        <tr>
          <td class='valigned-middle'>Tanggal</td>
          <td class='valigned-middle'><input type='date' id='tanggal' name='tanggal' class='form-control datepicker'></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Jumlah</td>
          <td class='valigned-middle'><input type='number' id='jumlah' name='jumlah' class='form-control text-right'></td>
        </tr>
      </tbody>
    </table></form>
    <hr/>
    <table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._formModulePBBP2 = function(){
  let dom = `<form id='finputData' name='finputData'>
    <input type='hidden' id='context' name='context' value='TRANSAKSI'>
    <input type='hidden' id='text_b' name='text_b' value='4'>
    <input type='hidden' id='text_c' name='text_c' value='1'>
    <input type='hidden' id='text_d' name='text_d' value='1'>
    <input type='hidden' id='text_e' name='text_e' value='10'>
    <input type='hidden' id='text_f' name='text_f' value='01'>
    <input type='hidden' id='op' name='op' value='KOLEKTIF'>
    <table class='table table-bordered table-striped'>
      <tfoot>
        <tr>
          <td colspan='2' class='valigned-middle text-right'><button type='submit' id='savedata' class='btn btn-primary btn-sm'>Simpan Data</button></td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td class='valigned-middle'>Tanggal</td>
          <td class='valigned-middle'><input type='date' id='tanggal' name='tanggal' class='form-control datepicker'></td>
        </tr>
        <tr>
          <td class='valigned-middle'>Jumlah</td>
          <td class='valigned-middle'><input type='number' id='jumlah' name='jumlah' class='form-control text-right'></td>
        </tr>
      </tbody>
    </table></form>
    <hr/>
    <table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._viewModuleRestoran = function(){
  let dom = `<table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Nama Wajib Pajak</th>
          <th class='valigned-middle text-center'>Objek Pajak</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._viewModuleHotel = function(){
  let dom = `<table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Nama Wajib Pajak</th>
          <th class='valigned-middle text-center'>Objek Pajak</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._viewModuleParkir = function(){
  let dom = `<table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Nama Wajib Pajak</th>
          <th class='valigned-middle text-center'>Objek Pajak</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._viewModuleReklame = function(){
  let dom = `<table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Nama Wajib Pajak</th>
          <th class='valigned-middle text-center'>Objek Pajak</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._viewModuleAirTanah = function(){
  let dom = `<table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Nama Wajib Pajak</th>
          <th class='valigned-middle text-center'>Objek Pajak</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._viewModuleHiburan = function(){
  let dom = `<table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Nama Wajib Pajak</th>
          <th class='valigned-middle text-center'>Objek Pajak</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._viewModuleBPHTB = function(){
  let dom = `<table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._viewModulePPJU = function(){
  let dom = `<table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._viewModulePBBP2 = function(){
  let dom = `<table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center fit-content'>No.</th>
          <th class='valigned-middle text-center'>Tanggal</th>
          <th class='valigned-middle text-center'>Jumlah</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._viewLRATable = function(){
  let dom = `<table id='tabledata' class='table table-bordered table-striped'>
      <thead>
        <tr>
          <th class='valigned-middle text-center'>Kode Rekening</th>
          <th class='valigned-middle text-center'>Rekening</th>
          <th class='valigned-middle text-center'>Target</th>
          <th class='valigned-middle text-center'>Realisasi</th>
          <th class='valigned-middle text-center'>Pct.</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>`;
  return dom;
};

templates._viewGraphicPAD = function(){
  let dom = ``;
  return dom;
};

export default templates;