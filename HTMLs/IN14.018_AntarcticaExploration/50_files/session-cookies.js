// Set cookies based on user sessions
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

function randomValue() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 25; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

var sessionCookie = getCookie('session_cookie');
var sessionDate = getCookie('session_cookie_expiration');
var startTime = getCookie('session_start_time');
var currentTime = new Date();

if (sessionCookie == null) {
    var startDate = new Date();
    var expDate = new Date();
    expDate.setDate(expDate.getDate() + 30);
    var sessionDuration = new Date(expDate.getTime() + 43170 * 60000);

    setCookie('session_cookie','1',30);
    setCookie('session_cookie_expiration',expDate,30);
    setTimeout(function() { setCookie('session_start_time',currentTime,0.02053) }, 1000) ;
} else if (startTime == null) {
    sessionCookie++;

    document.cookie = 'session_cookie=' + sessionCookie +';expires=' + sessionDate + '; path=/'; 

    if (sessionCookie >= 5) {
        document.cookie = 'se_user_loyalty=' + sessionCookie + ';expires=' + sessionDate + '; path=/';
    } 

    setTimeout(function() { setCookie('session_start_time',currentTime,0.02053) }, 1000);

}
