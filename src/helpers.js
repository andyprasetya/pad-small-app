import config from './config';
import templates from './ui-template';

var helpers = {};

var $ = jQuery;

/* 
 * Parse a JSON string to an object in all cases, without throwing
 * */
helpers.parseJsonToObject = function(str){
  try{
    var obj = JSON.parse(str);
    return obj;
  } catch(e){
    return {};
  }
};

/* 
 * Create a random alphanumeric string
 * */
helpers.createRandomString = function(strLength){
  strLength = typeof(strLength) == 'number' && strLength > 0 ? strLength : false;
  if(strLength){
    let possibleCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let str = '';
    for(i = 1; i <= strLength; i++) {
        let randomCharacter = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        str+=randomCharacter;
    }
    return str;
  } else {
    return false;
  }
};

/*
 * form serialize
 * */
helpers.serialize = function (form) {
	var serialized = [];
	for (var i = 0; i < form.elements.length; i++) {
		var field = form.elements[i];
		if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;
		if (field.type === 'select-multiple') {
			for (var n = 0; n < field.options.length; n++) {
				if (!field.options[n].selected) continue;
				serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
			}
		}
		else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
			serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
		}
	}
	return serialized.join('&');
};

/*
 * QueryStringToJSON
 * */
helpers.QueryStringToJSON = function(str) {            
	var pairs = str.split('&');
	var result = {};
	pairs.forEach(function(pair) {
		pair = pair.split('=');
		var name = pair[0]
		var value = pair[1]
		if( name.length )
		if (result[name] !== undefined) {
			if (!result[name].push) {
				result[name] = [result[name]];
			}
			result[name].push(value || '');
		} else {
			result[name] = value || '';
		}
	});
	return( result );
};

helpers._doLoginBox = function() {
  let loginBoxDOM = templates.loginBox();
  let cmdButtonsDOM = templates.loginButtons();
  document.getElementById('form_modal_label').innerHTML = "<i class='fa fa-lock'></i>&nbsp;Login";
  document.getElementById('form_modal_body').innerHTML = loginBoxDOM;
  document.getElementById('form_modal_footer').innerHTML = cmdButtonsDOM;
  $('#modalform').modal({'show':true, 'backdrop':'static'});
  $('#modalform').on('shown.bs.modal', function() {
    var formLogin = document.getElementById('dynamicform');
    formLogin.onsubmit = function(e){
      var iun = document.getElementById('username').value,
        ipw = document.getElementById('password').value;
      if (iun.length < 3 || ipw.length < 3) {
        document.getElementById('notice').innerHTML = "<div class='alert alert-danger pl-0 pr-0 text-center' role='alert'>Username/password Anda salah.</div>";
        setTimeout(function(){
          document.getElementById('username').value = '';
          document.getElementById('password').value = '';
          document.getElementById('notice').innerHTML = "<div class='alert alert-secondary pl-0 pr-0 text-center' role='alert'>Masukkan username dan password Anda.</div>";
          document.getElementById('username').focus();
        },1500);
      } else {
        var form = document.querySelector('#dynamicform'),
          formData = helpers.serialize(form), 
          jsonData = helpers.QueryStringToJSON(decodeURIComponent(formData));
        fetch(''+config.endPointBaseURL+'/dataservices/doLogin.php', {
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
            document.getElementById('notice').innerHTML = "<div class='alert alert-success pl-0 pr-0 text-center' role='alert'>Login berhasil. Memuat aplikasi...</div>";
            sessionStorage.setItem('module', data.module);
            sessionStorage.setItem('id', data.id);
            sessionStorage.setItem('realname', data.realname);
            sessionStorage.setItem('username', data.username);
            sessionStorage.setItem('hashedpassword', data.hashedpassword);
            setTimeout(function(){
              document.getElementById('username').value = '';
              document.getElementById('password').value = '';
              $('#modalform').modal('hide');
              document.location = './';
            },2000);
          } else {
            document.getElementById('notice').innerHTML = "<div class='alert alert-danger pl-0 pr-0 text-center' role='alert'>Login gagal. Ulangi login Anda.</div>";
            setTimeout(function(){
              document.getElementById('username').value = '';
              document.getElementById('password').value = '';
              document.getElementById('notice').innerHTML = "<div class='alert alert-secondary pl-0 pr-0 text-center' role='alert'>Masukkan username dan password Anda.</div>";
              document.getElementById('username').focus();
            },1500);
          }
        })
        .catch(function(err){
          console.log(err);
        });
      }
      return false;
    }
  });
  $('#modalform').on('hidden.bs.modal', function() {
    document.getElementById('form_modal_label').innerHTML = "";
    document.getElementById('form_modal_body').innerHTML = "";
    document.getElementById('form_modal_footer').innerHTML = "";
  });
};

/**
 * Auto logout/signout after no mouse/keyboard 
 * activities for some seconds
 * */
helpers._appsTimeOut = function () {
  let _timeout;
  window.onload = helpers._resetTimer(_timeout);
  document.onmousemove = helpers._resetTimer(_timeout);
  document.onkeypress = helpers._resetTimer(_timeout);
};

/**
 * _resetTimer function
 * */
helpers._resetTimer = function(timeout) {
  let activeSession = sessionStorage.getItem('sessionid');
  if(activeSession){
    clearTimeout(timeout);
    timeout = setTimeout(helpers._signout, parseInt(config.dashboardRefreshTimeout));
  } else {
    setTimeout(function(){
      document.location = './';
    }, parseInt(config.frontpageRefreshTimeout));
  }
};

/**
 * logout/signout function
 * */
helpers._signout = function() {
  let sessionId = sessionStorage.getItem('sessionid');
  fetch(''+config.endPointBaseURL+'/dataservices/doLogoff.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"sessionid":sessionId})
  })
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    if (data.status == 201) {
      sessionStorage.clear();
      setTimeout(function(){
        document.location = './';
      },1500);
    } else {
      sessionStorage.clear();
      setTimeout(function(){
        document.location = './';
      },1500);
    }
  })
  .catch(function(err){
    console.log(err);
  });
};

export default helpers;