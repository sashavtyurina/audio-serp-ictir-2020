function scrollToPosition(t,e){var n;return t.preventDefault(),n=e?jQuery(e).position().top:0,jQuery("html, body").animate({scrollTop:n},800),!1}jQuery(document).ready(function(n){n('li.menu-social-links [href="#socialicons"]').remove(),n("#postImgCarousel").on("slide.bs.carousel",function(t){var e=t.to;n("#postInfoCarousel").carousel(e)}),n(".p5-archive-year .collapse").on("hidden.bs.collapse",function(t){n(this).next("a").html('| See more posts <span class="fal fa-angle-right">')}),n(".p5-archive-year .collapse").on("shown.bs.collapse",function(t){n(this).next("a").html('| See fewer posts <span class="fal fa-angle-left">')}),n(".border-bottom-primary[data-border]").addClass("view")}),jQuery(document).ready(function(a){jQuery("#signup").click(function(){jQuery("html, body").animate({scrollTop:jQuery("#form").offset().top},1250),a(this).focus()}),a(document).on("submit","#pick5_form",function(t){t.preventDefault();var e=a("#pword"),n=e.val().toLowerCase();if("undefined"!=typeof pick5Url)if(""!=n){var o=new URLSearchParams(window.location.search);if(o.has("returnTo"))var r=o.get("returnTo");else r=!1;a.ajax({type:"POST",url:pick5Url,data:{password:n,refer:window.location.href,returnTo:r},dataType:"json",success:function(t){"success"==t.status?(setCookie("p5LoggedIn",!0,14),window.location.href=t.url):(e.val("").focus(),e.after('<div class="invalid-feedback d-block">Incorrect password, please try again</div>'))}})}else e.focus(),e.addClass("redBorder");else alert("Login form target not set!")})}),jQuery(document).ready(function(u){var e=u("[data-animation]"),n=u("[data-border]"),o=u(window);o.on("scroll",function(){var t=o.height(),s=o.scrollTop(),c=s+t;u.each(e,function(){var t=u(this),e=t.outerHeight(),n=t.offset().top,o=n+e,r=t.data("animation"),a=t.data("delay");if(a)var i="b29--delay"+a;else i="";s<=o&&n<=c&&t.addClass("animated "+r+" "+i)}),u.each(n,function(){var t=u(this),e=t.outerHeight(),n=t.offset().top;s<=n+e&&n<=c&&t.removeClass("view")})}),o.trigger("scroll")}),function(n){"use strict";var t=n.URLSearchParams?n.URLSearchParams:null,e=t&&"a=1"===new t({a:1}).toString(),o=t&&"+"===new t("s=%2B").get("s"),i="__URLSearchParams__",r=u.prototype,a=!(!n.Symbol||!n.Symbol.iterator);if(!(t&&e&&o)){r.append=function(t,e){p(this[i],t,e)},r.delete=function(t){delete this[i][t]},r.get=function(t){var e=this[i];return t in e?e[t][0]:null},r.getAll=function(t){var e=this[i];return t in e?e[t].slice(0):[]},r.has=function(t){return t in this[i]},r.set=function(t,e){this[i][t]=[""+e]},r.toString=function(){var t,e,n,o,r=this[i],a=[];for(e in r)for(n=l(e),t=0,o=r[e];t<o.length;t++)a.push(n+"="+l(o[t]));return a.join("&")};var s=!!o&&t&&!e&&n.Proxy;n.URLSearchParams=s?new Proxy(t,{construct:function(t,e){return new t(new u(e[0]).toString())}}):u;var c=n.URLSearchParams.prototype;c.polyfill=!0,c.forEach=c.forEach||function(n,o){var t=d(this.toString());Object.getOwnPropertyNames(t).forEach(function(e){t[e].forEach(function(t){n.call(o,t,e,this)},this)},this)},c.sort=c.sort||function(){var t,e,n,o=d(this.toString()),r=[];for(t in o)r.push(t);for(r.sort(),e=0;e<r.length;e++)this.delete(r[e]);for(e=0;e<r.length;e++){var a=r[e],i=o[a];for(n=0;n<i.length;n++)this.append(a,i[n])}},c.keys=c.keys||function(){var n=[];return this.forEach(function(t,e){n.push(e)}),h(n)},c.values=c.values||function(){var e=[];return this.forEach(function(t){e.push(t)}),h(e)},c.entries=c.entries||function(){var n=[];return this.forEach(function(t,e){n.push([e,t])}),h(n)},a&&(c[n.Symbol.iterator]=c[n.Symbol.iterator]||c.entries)}function u(t){((t=t||"")instanceof URLSearchParams||t instanceof u)&&(t=t.toString()),this[i]=d(t)}function l(t){var e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'\(\)~]|%20|%00/g,function(t){return e[t]})}function f(t){return decodeURIComponent(t.replace(/\+/g," "))}function h(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return a&&(t[n.Symbol.iterator]=function(){return t}),t}function d(t){var e={};if("object"==typeof t)for(var n in t)t.hasOwnProperty(n)&&p(e,n,t[n]);else{0===t.indexOf("?")&&(t=t.slice(1));for(var o=t.split("&"),r=0;r<o.length;r++){var a=o[r],i=a.indexOf("=");-1<i?p(e,f(a.slice(0,i)),f(a.slice(i+1))):a&&p(e,f(a),"")}}return e}function p(t,e,n){var o="string"==typeof n?n:null!=n&&"function"==typeof n.toString?n.toString():JSON.stringify(n);e in t?t[e].push(o):t[e]=[o]}}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this);
