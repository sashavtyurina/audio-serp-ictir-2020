/* v2.1.3 4-02-2019 */(function(E){window.PUBX&&"undefined"!==typeof window.PUBX.pub&&window.PUBX.pub&&function(a,q,z,x,y,A,B,C,D,F){a.viewportProximity="undefined"!==typeof B?B:500;a.maxModulesPerPage="undefined"!==typeof C?C:5;a.slideOutPoint="undefined"!==typeof D?D:40;a.pageviewSamplingRate=5;a.recJson="//cdn2.pubexchange.com/from";a.moduleJson="//cdn2.pubexchange.com/module";a.partnersJson="//cdn2.pubexchange.com/partners";a.cssUrl="//cdn2.pubexchange.com/css/";a.thumbnailImage="//asset.pubexchange.com/nothumb.png";
a.linksUrl="//traffic.pubexchange.com/a/";a.pvUrl="//pv.pubexchange.com/mid/";a.recUrl="//by.pubexchange.com";a.moduleOffset=0;a.infiniteScrollTimeout=!1;a.publicationUuid="";a.publicationPartners={};a.slide={};a.slide.currentPosition=0;a.slide.close=!1;a.slide.timeout=!1;a.recommendationsDisplayed=!1;Number.isInteger=Number.isInteger||function(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a};a.nonblockingLoad=function(a){var b=document.createElement("iframe");(b.frameElement||b).style.cssText=
"width:0;height:0;border:0;display:none";b.src="javascript:false";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c);b=b.contentWindow.document;b.open().write("<body onload=\"var js = document.createElement('script');js.src = '"+a+"';document.body.appendChild(js);\">");b.close();return!0};a.imgErr=function(b){b.onerror=null;b.style.margin="0";b.src=a.thumbnailImage};a.removePopup=function(b){b=document.getElementById("pe-"+b+"-container");null!==b&&b.parentNode.removeChild(b);
document.removeEventListener("keydown",a.peListener,!1)};a.checkEscKeyDown=function(b,d){b=b||window.event;27==b.keyCode&&a.removePopup(d)};a.isMobile=function(){var a=navigator.userAgent||navigator.vendor||window.opera;return 480>=(window.innerWidth||document.body.clientWidth||1E3)||/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||
/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,
4))};a.loadCss=function(a){var b=document.getElementsByTagName("script")[0];var c=document.createElement("link");c.rel="stylesheet";c.type="text/css";c.media="all";c.href=a;b.parentNode.insertBefore(c,b);c.close()};a.getWidth=function(){return window.innerWidth||document.documentElement.clientWidth};a.getHeight=function(){return window.innerHeight||document.documentElement.clientHeight};a.displayPopup=function(b,d,c,k,f,p,w){var n=document.getElementById("pe-"+c),v=.38,m=1280<k?4:768<k?3:480<k?2:
1;if(null===n){n=document.createElement("div");n.id="pe-"+c;var r=document.createElement("style"),u="#pe-"+c+"-container{position:fixed;z-index:999999999} #pe-"+c+"-blur{height:100%;width:100%;position:fixed;top:0;left:0;opacity:0.9;filter=alpha(opacity=90);background:#999;cursor:pointer}#pe-"+c+"{box-sizing:content-box;-moz-box-sizing:content-box;font-size:16px;border:1px solid #999;width:"+k+"px;height:"+f+"px;position:fixed;left:50%;top:0;margin:0 0 0 -"+Math.floor(k/2).toString()+"px;overflow:hidden;background:#fff} #pe-"+
c+"-close{color:#FFF;font:17px/17px Arial,sans-serif;position:absolute;right:0;top:0;padding:2px 8px 4px;box-shadow:-2px 2px 5px #CCC;background:#666}#pe-"+c+"-close:hover{background:#333;cursor:pointer}#pe-"+c+"-ttl{text-align:center;padding:22px 0;font:bold 11px/1.4 Roboto;}#pe-"+c+"-logo{display:inline-block;float:left;margin:-10px -20px 0 20px}#pe-"+c+"-logo img{height:28px;padding-top:6px;}#pe-"+c+"-ttl span{font:20px/1.4 Roboto,Arial,sans-serif}#pe-"+c+"-ttl > a{margin:6px 33px 0 -33px;text-decoration:none;color:#999;font-size:12px;font-weight:normal;float:right}";
if(p){var h=document.createElement("div");h.id="pe-"+c+"-nav";n.appendChild(h);var l=document.createElement("div");l.id="pe-"+c+"-ttl";h.appendChild(l);h=document.createElement("div");h.id="pe-"+c+"-logo";h.innerHTML="&nbsp;";l.appendChild(h);h=document.createElement("span");h.innerHTML="CHECK OUT THESE NEXT";l.appendChild(h);2<m&&(h=document.createElement("a"),h.href=a.recUrl+"/from/"+p,h.setAttribute("target","_blank"),h.setAttribute("rel","nofollow"),h.innerHTML="by PubExchange",l.appendChild(h));
u="@import url('https://fonts.googleapis.com/css?family=Roboto');"+u}else u+="#pe-"+c+"{padding:20px 20px 0;}";r.styleSheet?r.styleSheet.cssText=u:r.appendChild(document.createTextNode(u));l=document.createElement("div");l.id="pe-"+c+"-container";h=document.createElement("div");h.id="pe-"+c+"-blur";var q=document.createElement("div");q.innerHTML="x";q.id="pe-"+c+"-close";l.onclick=function(k){b.target!=document.getElementById("pe-"+c)&&a.removePopup(c)};h.onclick=function(b){a.removePopup(c);document.stopPropagation&&
document.stopPropagation();null!==document.cancelBubble&&(document.cancelBubble=!0)};document.getElementsByTagName("head")[0].appendChild(r);document.getElementsByTagName("body")[0].appendChild(l);l.appendChild(h);l.appendChild(n);n.appendChild(q)}var t=document.createElement("iframe");t.frameBorder=0;t.width=k+"px";t.height=f+"px";n.appendChild(t);t.setAttribute("src",d);"about:blank"==d&&a.JSONP.get(a.recJson,p,"pubRecs",function(b){if(b&&b.a){r=document.createElement("style");u="@import url(https://fonts.googleapis.com/css?family=Montserrat);body,ul{margin:0}.thw,li.lg{position:relative}.prt,li.lg .edt{white-space:nowrap}body{overflow-x:hidden;overflow-y:hidden;padding:0 20px 5px;font:700 10px/1.3 Montserrat,serif}body.s4{font-size:12px}ul{list-style:none;padding:0}li.lg,li.md,li.sm{margin:0 2% 15px 0;padding:0;overflow:hidden;width:23.5%;display:inline-block;vertical-align:top;text-align:left}li.md{margin-bottom:25px}body.s4 li.lg{width:49%}body.s3 li.md,body.s3 li.sm{width:32%}body.s3 li.lg{width:66%}body.s2 li.lg,body.s2 li.md,body.s2 li.sm{width:49%}body.s1 li.lg,body.s1 li.md,body.s1 li.sm{width:100%}li.last{margin-right:0}li.lg a,li.md a,li.sm a{text-decoration:none;color:#333}.thw{overflow:hidden;background:#DDD}li.sm .thw{width:30%;padding-bottom:30%;margin:0 15px 0 0;float:left}li.md .thw{width:100%;padding-bottom:56.25%;margin:0 0 10px;float:left}li.lg .thw{width:100%;padding-bottom:38%}.th{display:inline}.th img{position:absolute;width:100%;height:auto;min-width:100%;min-height:100%;max-width:none!important}li.md .edt{clear:both}li.lg .edt{position:absolute;bottom:0;left:0;right:0;padding:25px 0 10px;overflow:hidden;background-color:rgba(34,34,34,0);background-image:-webkit-linear-gradient(rgba(34,34,34,0),rgba(34,34,34,.9));background-image:linear-gradient(rgba(34,34,34,0),rgba(34,34,34,.9))}.hed{font-size:1.2em;font-weight:700;margin-bottom:8px}.prt{text-transform:uppercase;font-size:.8em}li.lg .hed,li.lg .prt{color:#FFF;margin:0 10px 3px 15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}li.lg .hed{font-size:1.5em}body.s1 li.sm .hed{font-size:1.4em}li.md .hed{font-size:1.3em}body.s2 li.sm .hed{font-size:1.1em}li.lg .prt{color:#CCC}";
r.styleSheet?r.styleSheet.cssText=u:r.appendChild(document.createTextNode(u));t.contentWindow.document.getElementsByTagName("head")[0].appendChild(r);var f=document.createElement("script");f.innerHTML='var err=function(o){o.onerror=null;o.style.margin="0";o.src="'+a.thumbnailImage+'";};';t.contentWindow.document.getElementsByTagName("head")[0].appendChild(f);t.contentWindow.document.getElementsByTagName("body")[0].className="s"+m.toString();f=document.createElement("ul");t.contentWindow.document.body.appendChild(f);
if(b.p&&2<m){var e=document.createElement("a");e.setAttribute("target","_blank");e.setAttribute("rel","nofollow");e.setAttribute("href",b.p.u);var h=document.createElement("img");h.src=b.p.l;e.appendChild(h);document.getElementById("pe-"+c+"-logo").appendChild(e)}for(e=0;e<b.a.length;e++)b.a[e].i=b.a[e].s==w?-.8-.1*b.a[e].t-.1*b.a[e].r:.5-Math.random()-.3*b.a[e].t-.2*b.a[e].r,k/Math.min(m,2)>1.1*b.a[e].th.d.w&&(b.a[e].i=1);b=b.a.sort(function(a,b){return a.i>b.i?1:b.i>a.i?-1:0});for(e=0;e<Math.min(b.length,
5*m,4*Math.max(m,3)-1);){var g=b[e].th.d;h=document.createElement("li");0==e&&2!=m?(h.className="lg","s"in b[e].th&&(1==m&&1.25*b[e].th.s.w>=k||1<m&&1.25*b[e].th.s.w>=2*k/m)&&(g=b[e].th.s)):1>=e&&2==m||e<m-1?(v=.5625,h.className="md","s"in b[e].th&&1.25*b[e].th.s.w>=k/m&&(g=b[e].th.s)):(v=1,h.className="sm","s"in b[e].th&&1.25*b[e].th.s.w>=k/m*.3&&(g=b[e].th.s));if(3>m&&0==(e+1)%m||3<=m&&e+1>=m&&0==(e+2)%m||3<=m&&e+1<m&&0==(e+1)%(m-1))h.className+=" last";var d=document.createElement("a");d.className=
"lnk";d.href=b[e].u;d.setAttribute("target","_blank");d.setAttribute("rel","nofollow");"pu"in b[e]&&d.setAttribute("onmousedown","this.href='"+b[e].pu+"';");h.appendChild(d);var n=document.createElement("div");n.className="thw";d.appendChild(n);var l=document.createElement("div");l.className="th";n.appendChild(l);n=document.createElement("img");n.setAttribute("onerror","err(this);");n.src=g.u;n.width=g.w;n.height=g.h;l.appendChild(n);g.x&&g.y||(g.x=g.w/2,g.y=g.h/2);l="";if(g.h/g.w<v){l+="width:auto;height:100%;";
var p=g.h/v,q=g.w-p;g.x>q+p/2?l+="margin-left:-"+(Math.floor(1E3*q/g.w)/10).toString()+"%":g.x>(g.w-q)/2&&(l+="margin-left:-"+(Math.floor(1E3*(g.x-p/2)/g.w)/10).toString()+"%")}else g.h/g.w>v&&(p=g.w*v,q=g.h-p,g.y>q+p/2?l+="margin-top:-"+(Math.floor(1E3*q/g.w)/10).toString()+"%":g.y>(g.h-q)/2&&(l+="margin-top:-"+(Math.floor(1E3*(g.y-p/2)/g.w)/10).toString()+"%"));l&&n.setAttribute("style",l);g=document.createElement("div");g.className="edt";d.appendChild(g);d=document.createElement("div");d.className=
"hed";d.innerHTML=b[e].h;g.appendChild(d);d=document.createElement("div");d.className="prt";d.innerHTML=b[e].n;g.appendChild(d);f.appendChild(h);e++}}});document.addEventListener("keydown",a.peListener=function(){a.checkEscKeyDown(window.event,c)},!1)};a.recommendations=function(b,d,c){var k=a.getWidth(),f=a.getHeight();if(320>k||320>f||a.recommendationsDisplayed)return!0;a.recommendationsDisplayed=!0;b=b||window.event;setTimeout(function(){a.displayPopup(b,"about:blank","recommendations",Math.min(Math.floor(k-
30),1600),Math.min(f,770),d,c)},1);return!0};a.whatIsPubExchange=function(b){if(650>a.getWidth()||320>a.getHeight()||"undefined"!==typeof A&&!A)return!0;b=b||window.event;a.displayPopup(b,b.href,"what-is-this",620,300,!1,!1);return!1};a.closeSlide=function(){a.slide.close=!0;document.getElementById("pe-slide-wrapper").className="pe-close pe-wrapper"};a.checkSlidePoint=function(){(slide=document.getElementById("pubexchange_slide"))&&!a.slide.close&&null!==document.getElementById("pe-slide-wrapper")&&
(a.slide.timeout&&window.clearTimeout(a.slide.timeout),a.slide.timeout=window.setTimeout(function(){var b=parseInt(a.slideOutPoint,10);0===a.slide.currentPosition&&(a.slide.currentPosition=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),a.slide.pixel=b*a.slide.currentPosition/100);b=0;"number"==typeof window.pageYOffset?b=window.pageYOffset:document.body&&document.body.scrollTop?
b=document.body.scrollTop:document.documentElement&&document.documentElement.scrollTop&&(b=document.documentElement.scrollTop);var d=document.getElementById("pe-slide-wrapper").className;"pe-open pe-wrapper"==d&&b<a.slide.pixel?document.getElementById("pe-slide-wrapper").className="pe-close pe-wrapper":"pe-close pe-wrapper"==d&&b>=a.slide.pixel&&(document.getElementById("pe-slide-wrapper").className="pe-open pe-wrapper")},100))};a.isElementNearViewport=function(b){b=b.getBoundingClientRect();return 0<=
b.top&&0<=b.left&&b.top<=(window.innerHeight||document.documentElement.clientHeight)+a.viewportProximity};a.JSONP=function(){var b={},d=!1;b.element=E;b.loadUrl=function(a){var b=document.createElement("script"),c=!1;b.src=a;b.async=!0;b.onload=b.onreadystatechange=function(){c||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(c=!0,b.onload=b.onreadystatechange=null,b&&b.parentNode&&b.parentNode.removeChild(b))};d||(d=document.getElementsByTagName("head")[0]);d.appendChild(b)};
return{get:function(c,d,f,p){c=c+"/"+d;if("partnerList"==f)var k=f;else"pubRecs"==f?k=f:(k=(F||"pubx")+"_"+f,c+="-"+f+"-"+(-1!=window.location.href.search(/[?&]pe_test=/)?"dev":"prod")+(a.isMobile()?"m":""),0<a.moduleOffset&&(c+="-"+a.moduleOffset.toString(),k+="_"+a.moduleOffset.toString()),a.moduleOffset+=1),c+="?callback="+k;b.element[k]=function(a){p(a);try{delete b.element[k]}catch(v){}b.element[k]=null};b.loadUrl(c);return k}}}();a.checkForPartnerLinks=function(){for(var b,d=!1,c=document.getElementsByTagName("a"),
k=function(){var b=!1;if("traffic.pubexchange.com"!=this.hostname)for(var c in a.publicationPartners)if(!b){var d=RegExp("^"+this.protocol+"//([^/]+\\.)?"+c,"i");null!==d.exec(this.href)&&(b=!0,this.setAttribute("data-url",this.href),this.href=a.linksUrl+a.publicationUuid+"/"+a.publicationPartners[c]+"/"+escape(this.href))}return!0},f=0;f<c.length;f++){d=!1;for(var p in a.publicationPartners)d||(b=RegExp("^"+c[f].protocol+"//([^/]+\\.)?"+p,"i"),null!==b.exec(c[f].href)&&(d=!0,-1==(" "+c[f].className+
" ").indexOf("peskip")&&(c[f].addEventListener?c[f].hasAttribute("onmousedown")||c[f].addEventListener("mousedown",k,!1):null==c[f].getAttribute("onmousedown")&&c[f].attachEvent("onmousedown",function(a,b){return function(){a.call(b,event)}}(k,c[f])))))}};a.linkDiscovery=function(){a.publicationUuid?"x"!==a.publicationUuid&&"undefined"!==typeof y&&y&&(a.publicationUuid||(a.publicationUuid="x"),a.checkForPartnerLinks()):a.JSONP.get(a.partnersJson,q,"partnerList",function(b){"undefined"!==typeof b.uuid&&
"undefined"!==typeof b.partners&&b.partners&&(a.publicationUuid=b.uuid,a.publicationPartners=b.partners,a.checkForPartnerLinks())})};a.loader=function(b){var d="";var c=[];if("function"==typeof document.getElementsByClassName)c=document.getElementsByClassName("pubexchange_module");else{if("function"!=typeof document.querySelectorAll){var k=document,f=k.createStyleSheet();k.querySelectorAll=function(a,b,c,d,h){h=k.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(c=a.length;c--;){f.addRule(a[c],
"k:v");for(d=h.length;d--;)h[d].currentStyle.k&&b.push(h[d]);f.removeRule(0)}return b}}c=document.querySelectorAll(".pubexchange_module")}var p=Math.floor(1E6*Math.random());for(var w=0;w<c.length;w++){var n=c[w];n.load=function(){var b=this,c=parseInt(b.getAttribute("data-pubexchange-module-id"),10),f=parseInt(b.getAttribute("data-pubexchange-module-offset"),10),k=b.id.substring(12,b.id.length);"-1"==b.className.indexOf("pe_loaded")&&0<c&&a.moduleOffset<a.maxModulesPerPage&&("pubexchange_slide"==
b.id||"undefined"===typeof x||!x||a.isElementNearViewport(b))&&(d+="/"+c.toString(),Number.isInteger(f)&&f<10*a.maxModulesPerPage&&(a.moduleOffset=f),"pubexchange_slide"==b.id?(a.JSONP.get(a.moduleJson,q,k,function(a){b.innerHTML=a}),window.addEventListener?window.addEventListener("scroll",a.checkSlidePoint,!1):window.attachEvent&&window.attachEvent("onscroll",a.checkSlidePoint)):a.JSONP.get(a.moduleJson,q,k,function(a){b.innerHTML=a}),b.className+=" pe_loaded")};n.load()}"undefined"!==typeof z&&
z&&a.linkDiscovery();d&&0==p%a.pageviewSamplingRate&&(a.nonblockingLoad(a.pvUrl+p+d),window.attachEvent&&!window.addEventListener&&a.loadCss(a.cssUrl+q+d));a.infiniteScrollTimeout=!1;!0===b&&(a.infiniteScrollTimeout=setTimeout(a.loader,1E3))};a.init=function(){var b=!1;if("undefined"!==typeof y&&y||"undefined"!==typeof x&&x)a.infiniteScroll=function(){a.infiniteScrollTimeout||(a.infiniteScrollTimeout=setTimeout(a.loader,500))},window.addEventListener?window.addEventListener("scroll",a.infiniteScroll,
!1):window.attachEvent?window.attachEvent("onscroll",a.infiniteScroll):b=!0;a.loader(b)};a.init()}(window.PUBX,window.PUBX.pub,window.PUBX.discover,window.PUBX.lazy,window.PUBX.inf,window.PUBX.popup,window.PUBX.proximity,window.PUBX.limit,window.PUBX.slideout,window.PUBX.callback)})(this);