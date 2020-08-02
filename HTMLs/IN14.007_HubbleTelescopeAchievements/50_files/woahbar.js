define(['jquery','module.base','localization/copy'],function($,Module,copy){Module.woahbar=function(){var self=this;self.init=function(){var theState;var orig_taskbar_pos=null;var is_eu_user=window._user_tracking.is_eu_user();function getCookie(key){var keyValue=document.cookie.match('(^|;) ?'+key+'=([^;]*)(;|$)');return keyValue?keyValue[2]:null;}
theState=getCookie('pelm_cstate');var stub_showing=false;window.woahbar_show=function(){if(!document.documentElement.classList.contains("unstick-taskbar")&&!document.documentElement.classList.contains("alert-details-page")){orig_taskbar_pos=$('.taskbar').css("position");$('.taskbar').css({position:"fixed",top:"40px"});}
if(stub_showing){$('.woahbar-stub').slideUp('fast',function(){$('.woahbar-stub').slideDown('fast','linear');$('body').addClass('has_woahbar','fast','linear');$('body').animate({"marginTop":"0"},300);});self.setCookie('pelm_cstate','open');}else{$('.woahbar').slideDown(200,'linear');$('body').addClass('has_woahbar',200,'linear');$('body').animate({"marginTop":"0"},250);$(window).scroll(function(){$('.woahbar').css({borderTop:"4px solid #FFEC53",position:"fixed",top:"0px",zIndex:99999,width:"100%"});theState=getCookie('pelm_cstate');if(theState==null){$('#main-header').each(function(){this.style.setProperty('margin-top','67px','important');});}});if(is_eu_user){$(".woahbar-link").attr("href",copy.page_url.url_eu_privacy_policy);}}};window.woahbar_temp_hide=function(){$('.woahbar').slideUp('fast',function(){$('.woahbar-stub').slideDown(100,'linear');stub_showing=true;});$('body').removeClass('has_woahbar',100,'linear');if($(window).width()>1024){$('body').animate({"marginTop":"0"},250);stub_showing=false;}};window.setConsentAccepted=function(key,value){self.setCookie(key,value);window.trackingConsent=true;};window.woahbar_accepted=function(){var consentDateTime=new Date().getTime();setConsentAccepted('pelm_consent',consentDateTime);require(['web/modules/my_account_lr/user'],function(user){user.save_consent(true);});woahbar_hide();};self.setCookie=function(key,value){var expires=new Date();expires.setTime(expires.getTime()+5000*24*60*60*1000);document.cookie=key+'='+value+';path=/;expires='+expires.toUTCString();};window.woahbar_hide=function(){$('body').removeClass('has_woahbar',100,'linear');$('.woahbar').slideUp('fast',function(){$('.woahbar-stub').slideDown(100,'linear');stub_showing=true;if(typeof window.positionStickyHeader=='function'){window.positionStickyHeader();}});self.setCookie('pelm_cstate','closed');if($(window).width()>1024){$('body').animate({"marginTop":"0"},250);}
if(!document.documentElement.classList.contains("unstick-taskbar")&&!document.documentElement.classList.contains("alert-details-page")){$('.taskbar').css({position:orig_taskbar_pos,top:"4px"});}
$('#main-header').each(function(){this.style.setProperty('margin-top','0px','important');});};window.showWoahBar=function(obj,effect,options,duration){if($.ui){$(obj).show(effect,options,duration);}else{require(['jquery-ui'],function(jui){if(typeof $.ui==='object'){$(obj).show(effect,options,duration);}});}};$(document).ready(function(){if($('.woahbar').length){window.setTimeout(function(){if(theState=="closed"&&window._user_tracking.can_be_tracked()===true)
{woahbar_hide();}
if(theState==null||theState=="open"||window._user_tracking.can_be_tracked()===false)
{woahbar_show();}},0);}});}}
return Module.factory("woahbar");});;