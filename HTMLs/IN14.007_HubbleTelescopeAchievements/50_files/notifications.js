define(['module.base','web/modules/my_account_lr/user','session','localization/copy','jquery'],function(Module,user,session,copy,$){Module.Notifications=function(){var self=this;self.tpl_main='notifications_module';self.tpl=window.templates;var module_viewed=false;self.init=function(elm){if(user.is_logged_in()==false){return;}
self.element(elm);self.getnotifications(elm);if(typeof window.elementInViewport=='undefined'||typeof window.elementInViewport!='function'){window.elementInViewport=function(el){if(typeof el!='undefined'&&el!=null){var top=el.offsetTop;var left=el.offsetLeft;var width=el.offsetWidth;var height=el.offsetHeight;while(el.offsetParent){el=el.offsetParent;top+=el.offsetTop;left+=el.offsetLeft;}
return(top<(window.pageYOffset+window.innerHeight)&&left<(window.pageXOffset+window.innerWidth)&&(top+height)>window.pageYOffset&&(left+width)>window.pageXOffset);}};}
window.track_module_gap=function(force){if(typeof force=='undefined'||force==null){force=false;}
if((typeof self.el_module!='undefined'&&elementInViewport(self.el_module)!=false&&elementInViewport(self.el_module)!='false')||force){module_viewed=true;dataLayer.push({'event':'eventTracker','eventCategory':_config.ga_product,'eventAction':"views",'eventLabel':'cnp_notificationModule'});}};if(platform=='web'){var notifications_check=function(){track_module_gap();if(!module_viewed){setTimeout(notifications_check,500);}};notifications_check();}};self.update=function(data){self.render(data);};self.getnotifications=function(elm){if(typeof window.placecode=='undefined'){return;}
var u=0;var user_place_alerts=self._get_user_alerts(window.placecode);if(user_place_alerts!=false){__.a("/api/notification/get_cnp/"+window.placecode,function(data){if(data){data=JSON.parse(data);if(typeof data.warnings!='undefined'&&data.warnings!=false){var finaldata=self.parse_warnings(data,user_place_alerts);if(Object.keys(finaldata.warnings.alerts).length>0){elm.className=elm.className.replace('hidden','');finaldata.lbl_notifications_overlay_ok=_config.cnp.lbl_notifications_overlay_ok;if(typeof finaldata.warnings.alerts.rain!='undefined'){finaldata.warnings.alerts.r=finaldata.warnings.alerts.rain;delete finaldata.warnings.alerts.rain;}
if(typeof finaldata.warnings.alerts.snow!='undefined'){finaldata.warnings.alerts.s=finaldata.warnings.alerts.snow;delete finaldata.warnings.alerts.snow;}
self.render(finaldata);self.el_module=$('.notifications-content')[0];$(elm).find('a').each(function(){$(this).attr('href',$(this).attr('href').replace('#PC#',window.placecode));});$('div.notifications-content a').not('.blue-btn').click(function(){dataLayer.push({'event':'eventTracker','eventCategory':_config.ga_product,'eventAction':"clicks",'eventLabel':'cnp_notificationModule'});});if(platform=='mobile'){var $div=$('<div>').append($('<span>').addClass('icon-alerts'));var $a=$('<a>').attr('id','cnp-notifications').addClass('cnp-notifications-open-window').attr('href','#cnp-notifications-box').append($div,_config.cnp.lbl_myalerts).click(function(){track_module_gap(true);});$('.current-weather-hero').append($a);$('#ok-cnp-notifications-btn').click(function(){$('#cancel-cnp-notifications-btn').click();});require(['modals','defaults'],function(modals,defaults){modals.bind(defaults.overlays.cnpNotifications);});}}}}},function(){});}};self.parse_warnings=function(data,user_place_alerts){var finaldata={};if(user_place_alerts!=false){if(typeof data.warnings.alerts!='undefined'&&data.warnings.alerts!=false){if(typeof copy.notifications!='undefined'){finaldata=copy.notifications;}
finaldata.warnings={};finaldata.warnings.name=(typeof data.warnings.name!='undefined')?data.warnings.name:'';finaldata.warnings.alerts={};for(var atype in data.warnings.alerts){if(data.warnings.alerts.hasOwnProperty(atype)){var type_alerts=data.warnings.alerts[atype];for(var i=0;i<type_alerts.length;i++){if(user_place_alerts.indexOf(type_alerts[i].id)!=-1){if(typeof finaldata.warnings.alerts[atype]=='undefined'){finaldata.warnings.alerts[atype]=[];}
finaldata.warnings.alerts[atype].push(type_alerts[i]);}}}}}}
return finaldata;};self.get_warning_labels=function(data,placecode){var labels=[];var user_place_alerts=self._get_user_alerts(placecode);if(user_place_alerts!=false&&typeof data.warnings!='undefined'&&data.warnings!=false){var finaldata=self.parse_warnings(data,user_place_alerts);if(typeof finaldata.warnings.alerts!='undefined'){if(Object.keys(finaldata.warnings.alerts).length>0){for(var atype in finaldata.warnings.alerts){var lbl=atype+"_label";if(typeof copy.notifications!='undefined'&&typeof copy.notifications[lbl]!='undefined'){labels.push(copy.notifications.my_alerts+' - '+copy.notifications[lbl]);}}}}}
return labels;}
self._get_user_cookie=function(){var user_alerts=session.fld('pelm_uup_user_alerts');if(user_alerts!=false&&user_alerts!=''&&user_alerts!=null){return user_alerts;}
return false;}
self._get_user_alerts=function(placecode){if(typeof placecode=='undefined'){return false;}
placecode=placecode.toUpperCase();var user_alerts=self._get_user_cookie(),user_place_alerts=false;if(user_alerts!=false){user_alerts=JSON.parse(user_alerts);if(typeof user_alerts[placecode]!='undefined'){user_place_alerts=user_alerts[placecode];}}
return user_place_alerts;};};return Module.factory('Notifications');});;