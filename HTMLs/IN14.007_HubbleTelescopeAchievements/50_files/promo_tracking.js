require(['jquery'],function($){$(function(){if(typeof _config.promo_tracking==='undefined'||_config.promo_tracking.checked){return;}
_config.promo_tracking.checked=true;if(typeof _config.promo_tracking.slotIds!='undefined'){if(!Array.isArray(_config.promo_tracking.slotIds)){_config.promo_tracking.slotIds=[_config.promo_tracking.slotIds];}
_config.promo_tracking.slotIds.forEach(function(id){var elem=$('#'+id)[0];var elementInViewport=function(el){if(!el||typeof el.offsetTop=='undefined'){return false;}
var top=el.offsetTop;var left=el.offsetLeft;var width=el.offsetWidth;var height=el.offsetHeight;while(el.offsetParent){el=el.offsetParent;top+=el.offsetTop;left+=el.offsetLeft;}
return(top<(window.pageYOffset+window.innerHeight)&&left<(window.pageXOffset+window.innerWidth)&&(top+height)>window.pageYOffset&&(left+width)>window.pageXOffset);};var check=function(el){if(typeof window.pelm=='undefined'||typeof window.pelm.track=='undefined'||typeof window.pelm.track.promo_view_gap=='undefined'||typeof el=='undefined'||elementInViewport(el)==false||elementInViewport(el)=="false"){setTimeout(function(){check(el);},1000);}else{window.pelm.track.promo_view_gap(el);}};check(elem);});}});});;