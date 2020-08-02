define(['jquery','localization/copy','personalize','session'],function($,copy,ps,_session){var showHide=function(selector,eventType,content){if(_session.fld('fullmap_back_flag')==true){$("#map-view span.showhide.hidetext.showtoggler.expand").trigger("click");_session.save_cookie_shrt('fullmap_back_flag',false,(1/24/60/60)*10);}
$(selector).each(function(){var $trigger=$(this);var $moduleID=$trigger.closest(".module").attr("id");var $content=$('#'+$moduleID).find(content);var $shadowDiv=$('<div />',{'class':'shadow'});var contentHeight=$content.css('height');$content.attr('full-height',contentHeight);if(parseInt($content.css('height'),10)>67){$content.addClass('sneak-peak');}
if($trigger.hasClass('collapse')){$trigger.attr('title',copy.collapseTooltip);}else if($trigger.hasClass('expand')){$trigger.attr('title',copy.expandTooltip);}
$(this).on(eventType,function(event){if($content.hasClass('sneak-peak')){if($content.css('height')===$content.attr('full-height')){if($content.attr('force-min-height')){customMinHeight=$content.attr('force-min-height');}else{customMinHeight="67px"}
$content.animate({height:customMinHeight},function(){$content.addClass('collapsed');$content.append($shadowDiv);$trigger.removeClass('collapse').addClass('expand').attr('title',copy.expandTooltip).attr('data-omni_action','module interaction: expand');});}else{$shadowDiv.remove();$content.animate({height:$content.attr('full-height')},function(){$content.removeClass('collapsed');$trigger.removeClass('expand').addClass('collapse').attr('title',copy.collapseTooltip).attr('data-omni_action','module interaction: collpase');});}}else{$content.slideToggle();}
setTimeout(function(){ps.Update();},500);});});};var map_page_track=function(){var mv=document.getElementById('map-view'),slct=document.getElementById('map-selector'),dt='';if(mv){dt=mv.getAttribute('data-param');if(dt){dt=Function('return '+dt)();if(typeof dt.type!=='undefined'&&typeof s_pelm!='undefined'){for(var i=0,l=slct.options.length;i<l;i++){if(slct.options[i].value==dt.type){dt=slct.options[i].getAttribute('data-param');dt=Function('return '+dt)();var sub=typeof dt.omnis?dt.omnis:dt.omni;var actn='expand';var prod='';if(!s){var s=s_pelm;}
switch(s.prop1){case'Forecasts':prod=': city page';break;case'14 Days':prod=': 14 day trend page';break;case'Hourly':prod=': hourly page';break;case'36 Hours':prod=': 36 hours page';break;case'cottage report':prod=': cottage report';break;case'attractions':prod=': attractions';break;case'golf report':prod=': golf';break;case'School Day Forecast':prod=': school day';sprod=true;break;case'lightning alert':prod=': lightning';sprod=true;break;case'Flight Tracker':prod=': flight tracker';sprod=true;break;case'Ski':prod=': ski';sprod=true;break;}
var val='';window.pelm.track.page('Maps','maps'+(sub?': '+sub:''),window._config.site_prefix+prod+': maps: '+actn+(val?': '+val:''));break;}}}}}};var mapAdvertisementShow=function(elements,text,autoplay)
{if($("#mapad")){$("#mapad").removeClass('modules').addClass('module');$("#mapad").attr('data-module',$("#mapad").attr('data-modules')).removeAttr('data-modules').removeAttr('id');}
$(elements.component).find('.map-content').animate({height:632},{complete:function(){$(elements.component).find('.map-content').css('height',632);$(elements.component).find('.map-content').removeAttr('style');}});$(elements.component).find('.current-map').animate({height:400},{complete:function(){$(elements.component).removeClass('collapsed').addClass('expanded');$(elements.component).find(elements.toggler).text(text.hide);$(elements.component+" .tools").find('.expand').removeClass('expand').addClass('collapse').attr('title',copy.collapseTooltip).attr('data-omni_action','module interaction: collapse');window.maps_autoplay=autoplay;if(typeof google!=='undefined'&&typeof google.maps!=='undefined'&&typeof __m!=='undefined'&&typeof __m.map!=='undefined'){google.maps.event.trigger(__m.map,'bounds_changed');}}});}
var isTablet=function()
{var agent=navigator.userAgent.toLowerCase();if(((agent.indexOf('iphone')!=-1)||(agent.indexOf('ipod')!=-1)||(agent.indexOf('ipad')!=-1))){return true;}
else
{return false;}}
var bindWeatherInfoToggler=function(elements){var text=copy.weatherToggler;if($(elements.component).length==0){return false;}
if($('html.fullscreen-map').length){if(elements.component=='#map-view'){$(elements.component).removeClass('collapsed').addClass('expanded');}
return false;}
if(elements.component=='#map-view'){window._config.maps.fson=true;text=copy.mapToggler;if(window._config.location_type=='city'&&isTablet())
{mapAdvertisementShow(elements,text,false);}
else if(window._config.location_type!='sailing'){$(elements.component).find('.map-content').css({height:135});$(elements.component).find('.current-map').css({height:128});}
$(elements.component).find(elements.toggler).removeClass('collapse').addClass('expand').attr('title',copy.expandTooltip);}
$(elements.component).addClass(elements.state);$(elements.component).find(elements.toggler).addClass('disable-click-track');$(elements.component).find(elements.toggler).off('click');$(elements.component).find(elements.toggler).on('click',function(event){if($(elements.component).hasClass('expanded')){if(elements.component!='#map-view'){$(elements.component).removeClass('expanded').addClass('collapsed');$(elements.component).find(elements.toggler).text(text.show);}else{window._config.maps.fson=true;$(elements.component).find('.map-content').animate({height:185},{complete:function(){$(elements.component).find('.map-content').css('height',185);}});$(elements.component).find('.current-map').animate({height:128},function(){$(elements.component).removeClass('expanded').addClass('collapsed');$(elements.component).find(elements.toggler).text(text.show);$(elements.component+" .tools").find('.collapse').removeClass('collapse').addClass('expand').attr('title',copy.expandTooltip).attr('data-omni_action','module interaction: expand');});window.maps_autostop=true;if(typeof window.pelm!='undefined'){window.pelm.track.click(this);}}}else{if(elements.component!='#map-view'){$(elements.component).removeClass('collapsed').addClass('expanded');$(elements.component).find(elements.toggler).text(text.hide);}else{mapAdvertisementShow(elements,text,true);map_page_track();if(typeof google!=='undefined'&&typeof google.maps!=='undefined'&&typeof __m!=='undefined'&&typeof __m.map!=='undefined'){setTimeout(function(){google.maps.event.trigger(__m.map,'resize');},250);}}}});};return{bind:showHide,bindWeatherInfoToggler:bindWeatherInfoToggler,bindMapToggler:bindWeatherInfoToggler};});;