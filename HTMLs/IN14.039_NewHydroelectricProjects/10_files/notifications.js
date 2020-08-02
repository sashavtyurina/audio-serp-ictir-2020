// [PT] - It is recommended to use feature detection instead of Browser Detection using libraries like http://featurejs.com/ or https://modernizr.com/
// Following code uses UserAgent string to detect old browser and this would be deprecated soon - https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent

// Browser Detection Utilities
function inspectBrowser(val) {
    var N=navigator.appName, ua=navigator.userAgent, tem;
    var M=ua.match(/(opera|chrome|safari|firefox|msie|trident|samsungbrowser|camino|seamonkey|ucbrowser|dolphin|konqueror)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
    M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];

    if (val == "browser") {return M[0]};
    if (val == "version") {return M[1]};
}
function get_browser(){
	var browser = inspectBrowser("browser");
    return browser;
} 
function get_browser_version(){
    var version = inspectBrowser("version");
    return version;
}
// Broswer Cookie Utilities
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}
 
function readCookie(name) {
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
    createCookie(name,"",-1);
}

function isBrowserOld() {
    /* Following browsers are old
    	IE 10 or less
		Chrome 29 or less
		Firefox 26 or less
		Safari OSX 6 or less
		Safari iOS
		Opera 16 or less
		Samsung android browser 3 or less
    */
    var browser         = get_browser();
    var browser_version = get_browser_version();
    browser_version = browser_version.substr(0, browser_version.indexOf('.'));

    console.dir("BROWSER IS " + browser + " VERSION IS " + browser_version);

	if ((browser == "MSIE") && (browser_version <= 10)) {
    	return true;
    }
    else if ((browser == "Trident") && (browser_version >= 7)) {
    	return false;
    }
    else if ((browser == "Chrome") && (browser_version > 29)) {
    	return false;
    }
    else if ((browser == "Firefox") && (browser_version > 26)) {
    	return false;
    }
    else if ((browser == "Safari") && (browser_version >= 8)) {
    	return false;
    }
    else if ((browser == "SamsungBrowser") && (browser_version >= 4)) {
    	return false;
    }
    /*else if ((browser == "UCBrowser") && (browser_version >= 4)) {
    	return false;
    }
    else if ((browser == "Dolphin") && (browser_version >= 4)) {
    	return false;
    }
    else if ((browser == "Konqueror") && (browser_version >= 4)) {
    	return false;
    }*/
    else if ((browser == "Camino") && (browser_version > 2)) {
    	return false;
    }
    else if ((browser == "SeaMonkey") && (browser_version > 2)) {
    	return false;
    }
    else{
    	return true;
    }
}

var MIN_LENGTH = 20;



function getOverrideBG(response){
    var overrideBackground = "";

    if(response.indexOf('override-sea') != -1)
        overrideBackground = "override-sea";
    if(response.indexOf('override-quartz') != -1)
        overrideBackground = "override-quartz";
    if(response.indexOf('override-arbutus') != -1)
        overrideBackground = "override-arbutus";

    return overrideBackground;
}

function displayBrowserNotification() {    
    if (readCookie("browserMessageDismiss") != 1) {
        $.ajax("/content/include/cached/notifications/browser.clean.html", {
            type: "GET",
            statusCode: {
                200: function (response) {
					if (response.length >= MIN_LENGTH) {
                        $('#browser-notification').show();
                        if (response) {
                            $('.browserSupport').append('<div id="browser-message"><i class="fa fa-exclamation-circle"></i>' + response + 
                                '</div><a href="#" id="browser-message-close">Dismiss</a>').show();

                            var overrideBackground = getOverrideBG(response);
                            if (overrideBackground != "")
                                 $('.browserSupport').addClass(overrideBackground);

                            $('#browser-message-close').on('click', function(e) {
                                //e.preventDefault();
                                // Hide the alert message
                                $('.browserSupport').slideUp();
                                // Create cookie - emergencyMessageDismiss
                                createCookie('browserMessageDismiss', 1, 0);
                            });
                        }
                    }
                }
            }, success: function () {

            }
        });
    }
}

function displayGeneralNotification() {
    var generalMsgTimeStampVal = $(".generalMsgTimeStamp").text();
	if (readCookie("generalMessageDismiss") == 1 && readCookie("generalMsgTimeStamp") == generalMsgTimeStampVal) {
 		//This Condition says that user has dismissed the notification and notification is not updated recently by Authors.
        //So, Do Nothing and Don't show any notification.
    } 
    else {
		//This Condition says that eithermessage is updated recently by Authors or User has never opted to dismiss the notification.
        //So, Get the notification using AJAX and Show it.
        //Later, check if its a case where user has opted to Dismiss the notification. But, Author has updated the notification. In that case, disable Dismiss Cookie.

        $.ajax("/content/include/cached/notifications/general.clean.html", {
            type: "GET",
            statusCode: {
                200: function(response) {
                    if (response.length >= MIN_LENGTH) {
    
                        $('#browser-notification').show();

                        $('.generalMessage').append('<div id="browser-message"><i class="fa fa-exclamation-circle"></i>' + response +
                                                    '</div><a href="#" id="general-message-close">Dismiss</a>').show();

                        var overrideBackground = getOverrideBG(response);

                        if (overrideBackground != "") { $('.generalMessage').addClass(overrideBackground); }
                        
                        if (readCookie("generalMessageDismiss") == 1 && readCookie("generalMsgTimeStamp") != generalMsgTimeStampVal) {
                            eraseCookie("generalMessageDismiss");
                        }
                        
                        createCookie('generalMsgTimeStamp', generalMsgTimeStampVal);
                        

                        $('#general-message-close').on('click', function(e) {
                            $('.generalMessage').slideUp();
                            // Create cookie - generalMessageDismiss
                            createCookie('generalMessageDismiss', 1, 0);
                        });
                    }
                }
            },
            success: function() {    
            }
        });
	}
}

function displayEmergencyNotification() {
    $.ajax("/content/include/cached/notifications/emergency.clean.html", {
        type: "GET",
        statusCode: {
            200: function (response) {
                if (response.length >= MIN_LENGTH) {
                    $('#notification-emergency').show();
                        if (response) {
                        $('.emergencyMessage').append('<div id="emergency-message"><i class="fa fa-exclamation-circle"></i>' + response + 
                            '</div>').show();

                            var overrideBackground = getOverrideBG(response);
                            if (overrideBackground != "")
                                 $('.emergencyMessage').addClass(overrideBackground);
                        }
                }
            }
        }, success: function () {
          
        }
    });
}
