define(['jquery'],function($){function tabs(tabs){$(tabs).each(function(){if($(this).attr('id')=='index-list-tabs'){return;}
var $active,$content,$links=$(this).find('a');var $tabValue=$($links[0]).attr('href');var $customtab=0;var $location_hash=location.hash,$attr='href';if($(this).hasClass('external-links')){$("li.index-inactive a").css({'cursor':'default','background':'none','color':'#91969d'}).click(function(evt){return false;});$links.each(function(){if(location.href.indexOf($(this).attr('rel'))>=0){$(this).parent().addClass('active');}});return true;}
var mytabs=jQuery(this).find('li');for(var i=0;i<=mytabs.length;i++){if(jQuery(mytabs[i]).hasClass("active")){$customtab=i;break;}}
$forecast_cookie=getCookie('forecast_tab_data');if(typeof $forecast_cookie!='undefined'){$forecast_cookie=decodeURIComponent($forecast_cookie);$forecast_cookie=$forecast_cookie.split("|");}
if($tabValue=='#chart-container-hourly'||$tabValue=='#table-container-hourly'){if(typeof $forecast_cookie!='undefined'){$cookieValue=$forecast_cookie[1];}else{$cookieValue='';}
if($cookieValue=='chart-container-hourly'){$location_hash='#chart-container-hourly';}else{$location_hash='#table-container-hourly';}}else if($tabValue=='#chart-container-lasttwentyfour'||$tabValue=='#table-container-lasttwentyfour'){if(typeof $forecast_cookie!='undefined'){$cookieValue=$forecast_cookie[0];}else{$cookieValue='';}
if($cookieValue=='chart-container-lasttwentyfour'){$location_hash='#chart-container-lasttwentyfour';}else{$location_hash='#table-container-lasttwentyfour';}}else if($tabValue=='#chart-container-fourteen-day'||$tabValue=='#table-container-fourteen-day'){if(typeof $forecast_cookie!='undefined'){$cookieValue=$forecast_cookie[2];}else{$cookieValue='';}
if($cookieValue=='table-container-fourteen-day'){$location_hash='#table-container-fourteen-day';}else{$location_hash='#chart-container-fourteen-day';}}
else if($tabValue=='#table-container-monthly')
{if(window.location.href.indexOf('chart-container-monthly')!=-1)
{$tabValue='#chart-container-monthly';$customtab=1;}}else if($tabValue=='#this-weekend-container'||$tabValue=='#next-weekend-container'){$location_hash='#this-weekend-container';}else{if(typeof activeTab!='undefined'&&activeTab=="hourly"){$location_hash="#hourly";$attr='data-h*';}else if(typeof activeTab!='undefined'&&activeTab=="lasttwentyfour"){$location_hash="#lasttwentyfour";$attr='data-h*';}else if(typeof activeTab!='undefined'&&activeTab=="14day"){$location_hash="#fourteen-day-trend";$attr='data-h*';}else if(typeof activeTab!='undefined'&&activeTab=="seven-days"){$location_hash="#seven-days";$attr='data-h*';}else if(typeof activeTab!='undefined'&&activeTab=="historical"){$location_hash="#historical";$attr='data-h*';}else if(typeof activeTab!='undefined'&&activeTab=="thirty-six-hours"){$location_hash="#thirty-six-hours";$attr='data-h*';}else if(typeof activeTab!='undefined'&&activeTab=="school-to-wear"){$location_hash="#school-to-wear-wrapper";$attr='data-h*';}else if(typeof activeTab!='undefined'&&activeTab=="weekend"){$location_hash="#weekend";$attr='data-h*';}else{}}
$test=$links;if(typeof $customtab!='undefined')
{$active=$($links.filter('['+$attr+'="'+$location_hash+'"]')[$customtab]||$links[$customtab]);}
else
{$active=$($links.filter('['+$attr+'="'+$location_hash+'"]')[0]||$links[0]);}
if($(this)[0]!=$('#trends > .trend-tabs > .tabs')[0]||$test.filter('['+$attr+'="'+$location_hash+'"]').length!=0)
$active.parent().addClass('active');$content=$($active.attr($attr));$content.show();var tabId='';if(typeof $(this).attr("id")!=="undefined"){tabId=$(this).attr("id");}
$links.not($active).each(function(){try{$($(this).attr('href')).hide();}catch(ex){}
var relatedObj=$(this).attr('href');if(tabId=='index-list-tabs'){var relatedObj=$(this).attr('href');if($.trim($(relatedObj).html())==""){$("a").filter("[href='"+relatedObj+"']").css({'cursor':'default','background':'none','color':'#91969d'}).click(function(evt){return false;});}}});if($("#table-container-fourteen-day").is(":visible")){$(".historic-temp").show();}
$(this).on('click','li:not(.active) a',function(event){window.pelm.track.click(this);if($(this).hasClass('redirect')){window.location=$(this).attr('rel');return false;}
if($(this).hasClass('mapSliderAnchor')){return;}
if($("#fourteen-day-trend").is(":visible")){if($(this).html()=='GRAPH'){$(".historic-temp").hide();}else{$(".historic-temp").show();}}
if($(this).attr('href')=='#this-weekend-container'){window.fixWeekendSlider();$(".this-weekend").show();}
if($(this).attr('href')=='#next-weekend-container'){$(".this-weekend").hide();}
if(!$content.length){try{var _href=$active.attr('href');_href=_href.split('#').pop();var _el=document.getElementById(_href);if(_el){_el.style.display='none';}}catch(ex){return false;}}
$active.parent().removeClass('active');try{$content.hide();}catch(ex){}
$active=$(this);try{$content=$($active.attr('href'));}catch(ex){window.location.href=$active.attr('href');return false;}
$active.parent().addClass('active');try{$content.show();}catch(ex){}
$tabNameForCookie=$(this).attr('href');setTabCookie($tabNameForCookie.replace('#','').replace(' ','_'));return false;});});}
function getCookie(c_name){var i,x,y,ARRcookies=document.cookie.split(";");for(i=0;i<ARRcookies.length;i++){x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));x=x.replace(' ','');if(x==c_name){y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);}}
return y;}
function setTabCookie(tabName){if(tabName=='chart-container-hourly'||tabName=='table-container-hourly'){hourly_tab_name=tabName;}else if(tabName=='chart-container-lasttwentyfour'||tabName=='table-container-lasttwentyfour'){lasttwentyfour_tab_name=tabName;}else if(tabName=='chart-container-fourteen-day'||tabName=='table-container-fourteen-day'){fourteen_day_tab_name=tabName;}else if(tabName=='chart-container-seven-day'||tabName=='chart-container-seven-day-night'){seven_day_tab_name=tabName;}
else if(tabName=='this-weekend-container'||tabName=='next-weekend-container'){weekend_tab_name=tabName;}
if(typeof fourteen_day_tab_name=='undefined'){fourteen_day_tab_name='chart-container-fourteen-day';}
if(typeof hourly_tab_name=='undefined'){hourly_tab_name='chart-container-hourly';}
if(typeof lasttwentyfour_tab_name=='undefined'){lasttwentyfour_tab_name='chart-container-lasttwentyfour';}
if(typeof seven_day_tab_name=='undefined'){seven_day_tab_name='chart-container-seven-day';}
if(typeof weekend_tab_name=='undefined'){weekend_tab_name='this-weekend-container';}
newCookie=lasttwentyfour_tab_name+"|"+hourly_tab_name+"|"+fourteen_day_tab_name+"|"+seven_day_tab_name+"|"+weekend_tab_name;setCookie('forecast_tab_data',newCookie,7);}
function setCookie(c_name,value,exdays){var exdate=new Date();exdate.setDate(exdate.getDate()+exdays);var c_value=escape(value)+((exdays==null)?"":"; expires="+exdate.toUTCString());document.cookie=c_name+"="+c_value;}
return{bind:tabs};});;