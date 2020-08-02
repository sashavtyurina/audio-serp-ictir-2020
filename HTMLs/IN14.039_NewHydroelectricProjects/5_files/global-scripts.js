!function(r){"use strict";String.format=function(){for(var e=arguments[0],t,n=1;n<arguments.length;n++)t=new RegExp("\\{"+(n-1)+"\\}","gm"),e=e.replace(t,arguments[n]);return e};var s=function(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===this.readyState&&(200===this.status?r.location=e:r.location=t)},n.open("HEAD",e,!0),n.send(),n=null};r.isFrenchSite=function(){var e=r.location.pathname.toString(),t=document.documentElement.lang;return!(0!==e.indexOf("/francais/")&&"fr"!==t)},r.switchLanguage=function(){var e=r.location.host.toString(),t=r.location.protocol.toString(),n=r.location.toString(),i,a;a=r.isFrenchSite()?(i=n.replace(e+"/francais/",e+"/"),t+"//"+e+"/"):(i=n.replace(e+"/",e+"/francais/"),t+"//"+e+"/francais/"),s(i,a)}}(window),function(d,h){"use strict";if("querySelector"in h&&"addEventListener"in d){var o=function(e){return"matchMedia"in d?d.matchMedia("(min-width: "+e+"px)").matches:h.body.clientWidth>=e},l=(t=h.createElement("div"),function(e){return t.innerHTML=e,t.firstChild.cloneNode(!0)}),t;d.loadScript=function(e,t){var n=!1,i=h.createElement("script");return i.src=e,i.async=1,i.onload=i.onreadystatechange=function(){n||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(i.onreadystatechange=null,n=!0,"function"==typeof t&&t())},h.body.appendChild(i),i},a(function(){var e=h.querySelectorAll(".page-gallery .item");e.length&&(d.addEventListener("load",function(){r(e)}),d.addEventListener("resize",function(){r(e)}))}),a(function(){s(h.querySelectorAll("#main-nav, #sidebar, .tertiary-nav"))}),a(function(){var e,t=h.getElementById("menu-button"),n=h.getElementById("main-nav");t&&n&&(e=new c(t,n)).init()}),a(function(){u()}),d.addEventListener("resize",function(){u()});var e=h.querySelectorAll("script[src]"),n=e[e.length-1].src.match(/^https?:\/\/([a-z0-9-]+\.)+[a-z]{2,}/i),i=n?n[0]:"";a(function(){var e,t;h.querySelectorAll(".swipebox, abbr a").length&&(null===h.querySelector('link[href$="/assets/css/mh-photoswipe.css"]')&&((t=h.createElement("link")).rel="stylesheet",t.href=i+"/assets/css/mh-photoswipe.css",h.head.appendChild(t)),void 0===d.mhPhotoSwipe?d.loadScript(i+"/assets/js/mh-photoswipe.min.js",function(){p(d.mhPhotoSwipe)}):p(d.mhPhotoSwipe))}),d.getParameterByName=function(e){var t,n=new RegExp("[\\?&]"+e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]")+"=([^&#]*)").exec(location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))}}function a(e){"loading"!==h.readyState?e():h.addEventListener("DOMContentLoaded",e)}function r(e){var t=60,n,i;for(i=0;i<e.length;i++)e[i].style.minHeight="0",t<(n=parseFloat(getComputedStyle(e[i]).getPropertyValue("height")))&&(t=n);for(i=0;i<e.length;i++)e[i].style.minHeight=t+"px"}function m(e,t){for(var n in e)"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function s(e,t){var n=d.location.pathname,i=d.location.href,a,r,s,o;-1!==i.indexOf("#")&&(i=i.substring(0,i.indexOf("#"))),r=m({activeClass:"active",currentPageClass:"current-page",breadcrumbsSelector:"#breadcrumbs"},t),s=h.querySelectorAll(r.breadcrumbsSelector+" a");for(var l=0;l<e.length;l++){a=e[l].querySelectorAll('a[href]:not([href^="#"]):not([href^="javascript:"])');for(var c=0;c<a.length;c++)if((o=a[c].href).match("^("+n+"|"+i+")$"))a[c].classList?a[c].classList.add(r.activeClass,r.currentPageClass):a[c].className+=" "+r.activeClass+" "+r.currentPageClass,a[c].setAttribute("aria-current","page"),a[c].setAttribute("tabindex","-1");else for(var u=0;u<s.length;u++)s[u].href!==o||(a[c].classList?a[c].classList.add(r.activeClass):a[c].className+=" "+r.activeClass)}}function c(e,t){var n=this;this.menuButtonElement=e,this.menuTargetElement=t,this.menuMaxHeight=0,this.transitionSpeed=250,this.getHeight=function(e){var t=0,n=d.getComputedStyle(e),i={display:e.style.display,maxHeight:e.style.maxHeight,position:e.style.position,visibility:e.style.visibility};if("none"!==n.display&&"0"!==n.maxHeight.replace(/(px|%)/,""))t=Math.max(e.offsetHeight,parseFloat(e.style.maxHeight)||0);else for(var a in e.style.position="absolute",e.style.visibility="hidden",e.style.display="block",e.style.maxHeight="none",t=Math.max(e.offsetHeight,parseFloat(e.style.maxHeight)||0),i)Object.prototype.hasOwnProperty.call(i,a)&&(e.style[a]=i[a]);return t},this.slideToggle=function(e,t){"0"===e.style.maxHeight.replace(/(px|%)/,"")?e.style.maxHeight=n.menuMaxHeight:e.style.maxHeight="0","function"==typeof t&&setTimeout(t,this.transitionSpeed)},this.setupMenu=function(e){o(980)?e.removeAttribute("style"):(e.style.transition="max-height "+n.transitionSpeed+"ms ease-in-out",e.style.overflowY="hidden",e.style.display="block",e.style.maxHeight||(e.style.maxHeight="0"),n.menuMaxHeight=Math.max(n.getHeight(e),1)+"px")},this.setupButton=function(t){t.addEventListener("click",function(e){e.preventDefault(),n.slideToggle(n.menuTargetElement,function(){var e="true"===t.getAttribute("aria-expanded")?"false":"true";t.setAttribute("aria-expanded",e)})}),t.setAttribute("aria-controls",n.menuTargetElement.id),t.setAttribute("aria-expanded","false")},this.init=function(){n.setupMenu(n.menuTargetElement),n.setupButton(n.menuButtonElement),d.addEventListener("resize",function(){n.setupMenu(n.menuTargetElement)})}}function u(){var e,t,n,i,a,r;if(n=h.querySelectorAll(".subnav-toggle"),o(768))for(var s=0;s<n.length;s++)n[s].parentNode.parentNode.removeChild(n[s].parentNode);else i=h.getElementById("sidebar"),!n.length&&i&&(a=h.getElementById("content-area"),r=isFrenchSite()?{more:"Plus de renseignements dans cette section",back:"Haut de la page"}:{more:"More in this section",back:"Back to top"},e=l(String.format('<p class="text-right"><a class="subnav-toggle down" href="#sidebar">{0}</a></p>',r.more)),t=l(String.format('<p class="text-right"><a class="subnav-toggle up" href="#content-area">{0}</a></p>',r.back)),a.insertBefore(e,a.firstChild),i.appendChild(t))}function p(e){e(".swipebox"),e("abbr a",{fullscreenEl:!1,iframe:!0,iframeHeight:350,iframeWidth:400})}}(window,document),function(e,t){"use strict";var n=e.createElement("img");"srcset"in n&&"sizes"in n&&window.HTMLPictureElement||t("/assets/js/picturefill.min.js")}(document,window.loadScript),function(){"use strict";var e=isFrenchSite()?"fr":"en",t=document.querySelectorAll('a[href$=".pdf"]');function n(e){var t=e.currentTarget,n;"function"==typeof ga&&t.host.match(/hydro\.mb\.ca$/)&&(n=t.innerHTML.replace(/<img .*?alt="(.*?)"[^>]?>/gim,"$1").replace(/(<([^>]+)>)/gim,"").replace(/&amp;/gim,"&").trim(),ga("send",{hitType:"pageview",page:t.pathname,title:n}))}for(var i=0;i<t.length;i++)t[i].addEventListener("click",n);var a=document.querySelector("#main-nav a.mybill-login");a&&a.addEventListener("click",function(){"function"==typeof ga&&ga("send","event","MYBILL","Visit",String.format("Header MyBill link click ({0})",e.toUpperCase()))})}();
//# sourceMappingURL=global-scripts.min.js.map