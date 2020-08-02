/*!
 * jQuery JavaScript Library v1.8.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Thu Sep 20 2012 21:13:05 GMT-0400 (Eastern Daylight Time)
 */
(function(a3,aC){var x,ag,p=a3.document,aJ=a3.location,d=a3.navigator,bh=a3.jQuery,J=a3.$,an=Array.prototype.push,a5=Array.prototype.slice,aL=Array.prototype.indexOf,A=Object.prototype.toString,W=Object.prototype.hasOwnProperty,aP=String.prototype.trim,bH=function(e,b0){return new bH.fn.init(e,b0,x)
},by=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,ab=/\S/,aW=/\s+/,D=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bp=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,a=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,bg=/^[\],:{}\s]*$/,bj=/(?:^|:|,)(?:\s*\[)+/g,bE=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,a1=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,bQ=/^-ms-/,aV=/-([\da-z])/gi,O=function(e,b0){return(b0+"").toUpperCase()
},aG=function(){if(p.addEventListener){p.removeEventListener("DOMContentLoaded",aG,false);
bH.ready()
}else{if(p.readyState==="complete"){p.detachEvent("onreadystatechange",aG);
bH.ready()
}}},aa={};
bH.fn=bH.prototype={constructor:bH,init:function(e,b3,b2){var b1,b4,b0,b5;
if(!e){return this
}if(e.nodeType){this.context=this[0]=e;
this.length=1;
return this
}if(typeof e==="string"){if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){b1=[null,e,null]
}else{b1=bp.exec(e)
}if(b1&&(b1[1]||!b3)){if(b1[1]){b3=b3 instanceof bH?b3[0]:b3;
b5=(b3&&b3.nodeType?b3.ownerDocument||b3:p);
e=bH.parseHTML(b1[1],b5,true);
if(a.test(b1[1])&&bH.isPlainObject(b3)){this.attr.call(e,b3,true)
}return bH.merge(this,e)
}else{b4=p.getElementById(b1[2]);
if(b4&&b4.parentNode){if(b4.id!==b1[2]){return b2.find(e)
}this.length=1;
this[0]=b4
}this.context=p;
this.selector=e;
return this
}}else{if(!b3||b3.jquery){return(b3||b2).find(e)
}else{return this.constructor(b3).find(e)
}}}else{if(bH.isFunction(e)){return b2.ready(e)
}}if(e.selector!==aC){this.selector=e.selector;
this.context=e.context
}return bH.makeArray(e,this)
},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length
},toArray:function(){return a5.call(this)
},get:function(e){return e==null?this.toArray():(e<0?this[this.length+e]:this[e])
},pushStack:function(b0,b2,e){var b1=bH.merge(this.constructor(),b0);
b1.prevObject=this;
b1.context=this.context;
if(b2==="find"){b1.selector=this.selector+(this.selector?" ":"")+e
}else{if(b2){b1.selector=this.selector+"."+b2+"("+e+")"
}}return b1
},each:function(b0,e){return bH.each(this,b0,e)
},ready:function(e){bH.ready.promise().done(e);
return this
},eq:function(e){e=+e;
return e===-1?this.slice(e):this.slice(e,e+1)
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(a5.apply(this,arguments),"slice",a5.call(arguments).join(","))
},map:function(e){return this.pushStack(bH.map(this,function(b1,b0){return e.call(b1,b0,b1)
}))
},end:function(){return this.prevObject||this.constructor(null)
},push:an,sort:[].sort,splice:[].splice};
bH.fn.init.prototype=bH.fn;
bH.extend=bH.fn.extend=function(){var b8,b1,e,b0,b5,b6,b4=arguments[0]||{},b3=1,b2=arguments.length,b7=false;
if(typeof b4==="boolean"){b7=b4;
b4=arguments[1]||{};
b3=2
}if(typeof b4!=="object"&&!bH.isFunction(b4)){b4={}
}if(b2===b3){b4=this;
--b3
}for(;
b3<b2;
b3++){if((b8=arguments[b3])!=null){for(b1 in b8){e=b4[b1];
b0=b8[b1];
if(b4===b0){continue
}if(b7&&b0&&(bH.isPlainObject(b0)||(b5=bH.isArray(b0)))){if(b5){b5=false;
b6=e&&bH.isArray(e)?e:[]
}else{b6=e&&bH.isPlainObject(e)?e:{}
}b4[b1]=bH.extend(b7,b6,b0)
}else{if(b0!==aC){b4[b1]=b0
}}}}}return b4
};
bH.extend({noConflict:function(e){if(a3.$===bH){a3.$=J
}if(e&&a3.jQuery===bH){a3.jQuery=bh
}return bH
},isReady:false,readyWait:1,holdReady:function(e){if(e){bH.readyWait++
}else{bH.ready(true)
}},ready:function(e){if(e===true?--bH.readyWait:bH.isReady){return
}if(!p.body){return setTimeout(bH.ready,1)
}bH.isReady=true;
if(e!==true&&--bH.readyWait>0){return
}ag.resolveWith(p,[bH]);
if(bH.fn.trigger){bH(p).trigger("ready").off("ready")
}},isFunction:function(e){return bH.type(e)==="function"
},isArray:Array.isArray||function(e){return bH.type(e)==="array"
},isWindow:function(e){return e!=null&&e==e.window
},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)
},type:function(e){return e==null?String(e):aa[A.call(e)]||"object"
},isPlainObject:function(b2){if(!b2||bH.type(b2)!=="object"||b2.nodeType||bH.isWindow(b2)){return false
}try{if(b2.constructor&&!W.call(b2,"constructor")&&!W.call(b2.constructor.prototype,"isPrototypeOf")){return false
}}catch(b1){return false
}var b0;
for(b0 in b2){}return b0===aC||W.call(b2,b0)
},isEmptyObject:function(b0){var e;
for(e in b0){return false
}return true
},error:function(e){throw new Error(e)
},parseHTML:function(b2,b1,e){var b0;
if(!b2||typeof b2!=="string"){return null
}if(typeof b1==="boolean"){e=b1;
b1=0
}b1=b1||p;
if((b0=a.exec(b2))){return[b1.createElement(b0[1])]
}b0=bH.buildFragment([b2],b1,e?null:[]);
return bH.merge([],(b0.cacheable?bH.clone(b0.fragment):b0.fragment).childNodes)
},parseJSON:function(e){if(!e||typeof e!=="string"){return null
}e=bH.trim(e);
if(a3.JSON&&a3.JSON.parse){return a3.JSON.parse(e)
}if(bg.test(e.replace(bE,"@").replace(a1,"]").replace(bj,""))){return(new Function("return "+e))()
}bH.error("Invalid JSON: "+e)
},parseXML:function(b2){var b0,b1;
if(!b2||typeof b2!=="string"){return null
}try{if(a3.DOMParser){b1=new DOMParser();
b0=b1.parseFromString(b2,"text/xml")
}else{b0=new ActiveXObject("Microsoft.XMLDOM");
b0.async="false";
b0.loadXML(b2)
}}catch(b3){b0=aC
}if(!b0||!b0.documentElement||b0.getElementsByTagName("parsererror").length){bH.error("Invalid XML: "+b2)
}return b0
},noop:function(){},globalEval:function(e){if(e&&ab.test(e)){(a3.execScript||function(b0){a3["eval"].call(a3,b0)
})(e)
}},camelCase:function(e){return e.replace(bQ,"ms-").replace(aV,O)
},nodeName:function(b0,e){return b0.nodeName&&b0.nodeName.toLowerCase()===e.toLowerCase()
},each:function(b4,b5,b1){var b0,b2=0,b3=b4.length,e=b3===aC||bH.isFunction(b4);
if(b1){if(e){for(b0 in b4){if(b5.apply(b4[b0],b1)===false){break
}}}else{for(;
b2<b3;
){if(b5.apply(b4[b2++],b1)===false){break
}}}}else{if(e){for(b0 in b4){if(b5.call(b4[b0],b0,b4[b0])===false){break
}}}else{for(;
b2<b3;
){if(b5.call(b4[b2],b2,b4[b2++])===false){break
}}}}return b4
},trim:aP&&!aP.call("\uFEFF\xA0")?function(e){return e==null?"":aP.call(e)
}:function(e){return e==null?"":(e+"").replace(D,"")
},makeArray:function(e,b1){var b2,b0=b1||[];
if(e!=null){b2=bH.type(e);
if(e.length==null||b2==="string"||b2==="function"||b2==="regexp"||bH.isWindow(e)){an.call(b0,e)
}else{bH.merge(b0,e)
}}return b0
},inArray:function(b2,b0,b1){var e;
if(b0){if(aL){return aL.call(b0,b2,b1)
}e=b0.length;
b1=b1?b1<0?Math.max(0,e+b1):b1:0;
for(;
b1<e;
b1++){if(b1 in b0&&b0[b1]===b2){return b1
}}}return -1
},merge:function(b3,b1){var e=b1.length,b2=b3.length,b0=0;
if(typeof e==="number"){for(;
b0<e;
b0++){b3[b2++]=b1[b0]
}}else{while(b1[b0]!==aC){b3[b2++]=b1[b0++]
}}b3.length=b2;
return b3
},grep:function(b0,b5,e){var b4,b1=[],b2=0,b3=b0.length;
e=!!e;
for(;
b2<b3;
b2++){b4=!!b5(b0[b2],b2);
if(e!==b4){b1.push(b0[b2])
}}return b1
},map:function(e,b6,b7){var b4,b5,b3=[],b1=0,b0=e.length,b2=e instanceof bH||b0!==aC&&typeof b0==="number"&&((b0>0&&e[0]&&e[b0-1])||b0===0||bH.isArray(e));
if(b2){for(;
b1<b0;
b1++){b4=b6(e[b1],b1,b7);
if(b4!=null){b3[b3.length]=b4
}}}else{for(b5 in e){b4=b6(e[b5],b5,b7);
if(b4!=null){b3[b3.length]=b4
}}}return b3.concat.apply([],b3)
},guid:1,proxy:function(b3,b2){var b1,e,b0;
if(typeof b2==="string"){b1=b3[b2];
b2=b3;
b3=b1
}if(!bH.isFunction(b3)){return aC
}e=a5.call(arguments,2);
b0=function(){return b3.apply(b2,e.concat(a5.call(arguments)))
};
b0.guid=b3.guid=b3.guid||bH.guid++;
return b0
},access:function(e,b5,b8,b6,b3,b9,b7){var b1,b4=b8==null,b2=0,b0=e.length;
if(b8&&typeof b8==="object"){for(b2 in b8){bH.access(e,b5,b2,b8[b2],1,b9,b6)
}b3=1
}else{if(b6!==aC){b1=b7===aC&&bH.isFunction(b6);
if(b4){if(b1){b1=b5;
b5=function(cb,ca,cc){return b1.call(bH(cb),cc)
}
}else{b5.call(e,b6);
b5=null
}}if(b5){for(;
b2<b0;
b2++){b5(e[b2],b8,b1?b6.call(e[b2],b2,b5(e[b2],b8)):b6,b7)
}}b3=1
}}return b3?e:b4?b5.call(e):b0?b5(e[0],b8):b9
},now:function(){return(new Date()).getTime()
}});
bH.ready.promise=function(b3){if(!ag){ag=bH.Deferred();
if(p.readyState==="complete"){setTimeout(bH.ready,1)
}else{if(p.addEventListener){p.addEventListener("DOMContentLoaded",aG,false);
a3.addEventListener("load",bH.ready,false)
}else{p.attachEvent("onreadystatechange",aG);
a3.attachEvent("onload",bH.ready);
var b2=false;
try{b2=a3.frameElement==null&&p.documentElement
}catch(b1){}if(b2&&b2.doScroll){(function b0(){if(!bH.isReady){try{b2.doScroll("left")
}catch(b4){return setTimeout(b0,50)
}bH.ready()
}})()
}}}}return ag.promise(b3)
};
bH.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(b0,e){aa["[object "+e+"]"]=e.toLowerCase()
});
x=bH(p);
var bV={};
function ad(b0){var e=bV[b0]={};
bH.each(b0.split(aW),function(b2,b1){e[b1]=true
});
return e
}bH.Callbacks=function(b9){b9=typeof b9==="string"?(bV[b9]||ad(b9)):bH.extend({},b9);
var b2,e,b3,b1,b4,b5,b6=[],b7=!b9.once&&[],b0=function(ca){b2=b9.memory&&ca;
e=true;
b5=b1||0;
b1=0;
b4=b6.length;
b3=true;
for(;
b6&&b5<b4;
b5++){if(b6[b5].apply(ca[0],ca[1])===false&&b9.stopOnFalse){b2=false;
break
}}b3=false;
if(b6){if(b7){if(b7.length){b0(b7.shift())
}}else{if(b2){b6=[]
}else{b8.disable()
}}}},b8={add:function(){if(b6){var cb=b6.length;
(function ca(cc){bH.each(cc,function(ce,cd){var cf=bH.type(cd);
if(cf==="function"&&(!b9.unique||!b8.has(cd))){b6.push(cd)
}else{if(cd&&cd.length&&cf!=="string"){ca(cd)
}}})
})(arguments);
if(b3){b4=b6.length
}else{if(b2){b1=cb;
b0(b2)
}}}return this
},remove:function(){if(b6){bH.each(arguments,function(cc,ca){var cb;
while((cb=bH.inArray(ca,b6,cb))>-1){b6.splice(cb,1);
if(b3){if(cb<=b4){b4--
}if(cb<=b5){b5--
}}}})
}return this
},has:function(ca){return bH.inArray(ca,b6)>-1
},empty:function(){b6=[];
return this
},disable:function(){b6=b7=b2=aC;
return this
},disabled:function(){return !b6
},lock:function(){b7=aC;
if(!b2){b8.disable()
}return this
},locked:function(){return !b7
},fireWith:function(cb,ca){ca=ca||[];
ca=[cb,ca.slice?ca.slice():ca];
if(b6&&(!e||b7)){if(b3){b7.push(ca)
}else{b0(ca)
}}return this
},fire:function(){b8.fireWith(this,arguments);
return this
},fired:function(){return !!e
}};
return b8
};
bH.extend({Deferred:function(b1){var b0=[["resolve","done",bH.Callbacks("once memory"),"resolved"],["reject","fail",bH.Callbacks("once memory"),"rejected"],["notify","progress",bH.Callbacks("memory")]],b2="pending",b3={state:function(){return b2
},always:function(){e.done(arguments).fail(arguments);
return this
},then:function(){var b4=arguments;
return bH.Deferred(function(b5){bH.each(b0,function(b7,b6){var b9=b6[0],b8=b4[b7];
e[b6[1]](bH.isFunction(b8)?function(){var ca=b8.apply(this,arguments);
if(ca&&bH.isFunction(ca.promise)){ca.promise().done(b5.resolve).fail(b5.reject).progress(b5.notify)
}else{b5[b9+"With"](this===e?b5:this,[ca])
}}:b5[b9])
});
b4=null
}).promise()
},promise:function(b4){return b4!=null?bH.extend(b4,b3):b3
}},e={};
b3.pipe=b3.then;
bH.each(b0,function(b5,b4){var b7=b4[2],b6=b4[3];
b3[b4[1]]=b7.add;
if(b6){b7.add(function(){b2=b6
},b0[b5^1][2].disable,b0[2][2].lock)
}e[b4[0]]=b7.fire;
e[b4[0]+"With"]=b7.fireWith
});
b3.promise(e);
if(b1){b1.call(e,e)
}return e
},when:function(b3){var b1=0,b5=a5.call(arguments),e=b5.length,b0=e!==1||(b3&&bH.isFunction(b3.promise))?e:0,b8=b0===1?b3:bH.Deferred(),b2=function(ca,cb,b9){return function(cc){cb[ca]=this;
b9[ca]=arguments.length>1?a5.call(arguments):cc;
if(b9===b7){b8.notifyWith(cb,b9)
}else{if(!(--b0)){b8.resolveWith(cb,b9)
}}}
},b7,b4,b6;
if(e>1){b7=new Array(e);
b4=new Array(e);
b6=new Array(e);
for(;
b1<e;
b1++){if(b5[b1]&&bH.isFunction(b5[b1].promise)){b5[b1].promise().done(b2(b1,b6,b5)).fail(b8.reject).progress(b2(b1,b4,b7))
}else{--b0
}}}if(!b0){b8.resolveWith(b6,b5)
}return b8.promise()
}});
bH.support=(function(){var cc,cb,b9,ca,b3,b8,b7,b5,b4,b2,b0,b1=p.createElement("div");
b1.setAttribute("className","t");
b1.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
cb=b1.getElementsByTagName("*");
b9=b1.getElementsByTagName("a")[0];
b9.style.cssText="top:1px;float:left;opacity:.5";
if(!cb||!cb.length){return{}
}ca=p.createElement("select");
b3=ca.appendChild(p.createElement("option"));
b8=b1.getElementsByTagName("input")[0];
cc={leadingWhitespace:(b1.firstChild.nodeType===3),tbody:!b1.getElementsByTagName("tbody").length,htmlSerialize:!!b1.getElementsByTagName("link").length,style:/top/.test(b9.getAttribute("style")),hrefNormalized:(b9.getAttribute("href")==="/a"),opacity:/^0.5/.test(b9.style.opacity),cssFloat:!!b9.style.cssFloat,checkOn:(b8.value==="on"),optSelected:b3.selected,getSetAttribute:b1.className!=="t",enctype:!!p.createElement("form").enctype,html5Clone:p.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:(p.compatMode==="CSS1Compat"),submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};
b8.checked=true;
cc.noCloneChecked=b8.cloneNode(true).checked;
ca.disabled=true;
cc.optDisabled=!b3.disabled;
try{delete b1.test
}catch(b6){cc.deleteExpando=false
}if(!b1.addEventListener&&b1.attachEvent&&b1.fireEvent){b1.attachEvent("onclick",b0=function(){cc.noCloneEvent=false
});
b1.cloneNode(true).fireEvent("onclick");
b1.detachEvent("onclick",b0)
}b8=p.createElement("input");
b8.value="t";
b8.setAttribute("type","radio");
cc.radioValue=b8.value==="t";
b8.setAttribute("checked","checked");
b8.setAttribute("name","t");
b1.appendChild(b8);
b7=p.createDocumentFragment();
b7.appendChild(b1.lastChild);
cc.checkClone=b7.cloneNode(true).cloneNode(true).lastChild.checked;
cc.appendChecked=b8.checked;
b7.removeChild(b8);
b7.appendChild(b1);
if(b1.attachEvent){for(b4 in {submit:true,change:true,focusin:true}){b5="on"+b4;
b2=(b5 in b1);
if(!b2){b1.setAttribute(b5,"return;");
b2=(typeof b1[b5]==="function")
}cc[b4+"Bubbles"]=b2
}}bH(function(){var cd,ch,cf,cg,ce="padding:0;margin:0;border:0;display:block;overflow:hidden;",e=p.getElementsByTagName("body")[0];
if(!e){return
}cd=p.createElement("div");
cd.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
e.insertBefore(cd,e.firstChild);
ch=p.createElement("div");
cd.appendChild(ch);
ch.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
cf=ch.getElementsByTagName("td");
cf[0].style.cssText="padding:0;margin:0;border:0;display:none";
b2=(cf[0].offsetHeight===0);
cf[0].style.display="";
cf[1].style.display="none";
cc.reliableHiddenOffsets=b2&&(cf[0].offsetHeight===0);
ch.innerHTML="";
ch.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
cc.boxSizing=(ch.offsetWidth===4);
cc.doesNotIncludeMarginInBodyOffset=(e.offsetTop!==1);
if(a3.getComputedStyle){cc.pixelPosition=(a3.getComputedStyle(ch,null)||{}).top!=="1%";
cc.boxSizingReliable=(a3.getComputedStyle(ch,null)||{width:"4px"}).width==="4px";
cg=p.createElement("div");
cg.style.cssText=ch.style.cssText=ce;
cg.style.marginRight=cg.style.width="0";
ch.style.width="1px";
ch.appendChild(cg);
cc.reliableMarginRight=!parseFloat((a3.getComputedStyle(cg,null)||{}).marginRight)
}if(typeof ch.style.zoom!=="undefined"){ch.innerHTML="";
ch.style.cssText=ce+"width:1px;padding:1px;display:inline;zoom:1";
cc.inlineBlockNeedsLayout=(ch.offsetWidth===3);
ch.style.display="block";
ch.style.overflow="visible";
ch.innerHTML="<div></div>";
ch.firstChild.style.width="5px";
cc.shrinkWrapBlocks=(ch.offsetWidth!==3);
cd.style.zoom=1
}e.removeChild(cd);
cd=ch=cf=cg=null
});
b7.removeChild(b1);
cb=b9=ca=b3=b8=b7=b1=null;
return cc
})();
var bu=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,aM=/([A-Z])/g;
bH.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(bH.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?bH.cache[e[bH.expando]]:e[bH.expando];
return !!e&&!P(e)
},data:function(b2,b0,b4,b3){if(!bH.acceptData(b2)){return
}var b5,b7,b8=bH.expando,b6=typeof b0==="string",b9=b2.nodeType,e=b9?bH.cache:b2,b1=b9?b2[b8]:b2[b8]&&b8;
if((!b1||!e[b1]||(!b3&&!e[b1].data))&&b6&&b4===aC){return
}if(!b1){if(b9){b2[b8]=b1=bH.deletedIds.pop()||bH.guid++
}else{b1=b8
}}if(!e[b1]){e[b1]={};
if(!b9){e[b1].toJSON=bH.noop
}}if(typeof b0==="object"||typeof b0==="function"){if(b3){e[b1]=bH.extend(e[b1],b0)
}else{e[b1].data=bH.extend(e[b1].data,b0)
}}b5=e[b1];
if(!b3){if(!b5.data){b5.data={}
}b5=b5.data
}if(b4!==aC){b5[bH.camelCase(b0)]=b4
}if(b6){b7=b5[b0];
if(b7==null){b7=b5[bH.camelCase(b0)]
}}else{b7=b5
}return b7
},removeData:function(b2,b0,b3){if(!bH.acceptData(b2)){return
}var b6,b5,b4,b7=b2.nodeType,e=b7?bH.cache:b2,b1=b7?b2[bH.expando]:bH.expando;
if(!e[b1]){return
}if(b0){b6=b3?e[b1]:e[b1].data;
if(b6){if(!bH.isArray(b0)){if(b0 in b6){b0=[b0]
}else{b0=bH.camelCase(b0);
if(b0 in b6){b0=[b0]
}else{b0=b0.split(" ")
}}}for(b5=0,b4=b0.length;
b5<b4;
b5++){delete b6[b0[b5]]
}if(!(b3?P:bH.isEmptyObject)(b6)){return
}}}if(!b3){delete e[b1].data;
if(!P(e[b1])){return
}}if(b7){bH.cleanData([b2],true)
}else{if(bH.support.deleteExpando||e!=e.window){delete e[b1]
}else{e[b1]=null
}}},_data:function(b0,e,b1){return bH.data(b0,e,b1,true)
},acceptData:function(b0){var e=b0.nodeName&&bH.noData[b0.nodeName.toLowerCase()];
return !e||e!==true&&b0.getAttribute("classid")===e
}});
bH.fn.extend({data:function(b8,b7){var b3,b0,b6,e,b2,b1=this[0],b5=0,b4=null;
if(b8===aC){if(this.length){b4=bH.data(b1);
if(b1.nodeType===1&&!bH._data(b1,"parsedAttrs")){b6=b1.attributes;
for(b2=b6.length;
b5<b2;
b5++){e=b6[b5].name;
if(!e.indexOf("data-")){e=bH.camelCase(e.substring(5));
bw(b1,e,b4[e])
}}bH._data(b1,"parsedAttrs",true)
}}return b4
}if(typeof b8==="object"){return this.each(function(){bH.data(this,b8)
})
}b3=b8.split(".",2);
b3[1]=b3[1]?"."+b3[1]:"";
b0=b3[1]+"!";
return bH.access(this,function(b9){if(b9===aC){b4=this.triggerHandler("getData"+b0,[b3[0]]);
if(b4===aC&&b1){b4=bH.data(b1,b8);
b4=bw(b1,b8,b4)
}return b4===aC&&b3[1]?this.data(b3[0]):b4
}b3[1]=b9;
this.each(function(){var ca=bH(this);
ca.triggerHandler("setData"+b0,b3);
bH.data(this,b8,b9);
ca.triggerHandler("changeData"+b0,b3)
})
},null,b7,arguments.length>1,null,false)
},removeData:function(e){return this.each(function(){bH.removeData(this,e)
})
}});
function bw(b2,b1,b3){if(b3===aC&&b2.nodeType===1){var b0="data-"+b1.replace(aM,"-$1").toLowerCase();
b3=b2.getAttribute(b0);
if(typeof b3==="string"){try{b3=b3==="true"?true:b3==="false"?false:b3==="null"?null:+b3+""===b3?+b3:bu.test(b3)?bH.parseJSON(b3):b3
}catch(b4){}bH.data(b2,b1,b3)
}else{b3=aC
}}return b3
}function P(b0){var e;
for(e in b0){if(e==="data"&&bH.isEmptyObject(b0[e])){continue
}if(e!=="toJSON"){return false
}}return true
}bH.extend({queue:function(b1,b0,b2){var e;
if(b1){b0=(b0||"fx")+"queue";
e=bH._data(b1,b0);
if(b2){if(!e||bH.isArray(b2)){e=bH._data(b1,b0,bH.makeArray(b2))
}else{e.push(b2)
}}return e||[]
}},dequeue:function(b4,b3){b3=b3||"fx";
var b0=bH.queue(b4,b3),b5=b0.length,b2=b0.shift(),e=bH._queueHooks(b4,b3),b1=function(){bH.dequeue(b4,b3)
};
if(b2==="inprogress"){b2=b0.shift();
b5--
}if(b2){if(b3==="fx"){b0.unshift("inprogress")
}delete e.stop;
b2.call(b4,b1,e)
}if(!b5&&e){e.empty.fire()
}},_queueHooks:function(b1,b0){var e=b0+"queueHooks";
return bH._data(b1,e)||bH._data(b1,e,{empty:bH.Callbacks("once memory").add(function(){bH.removeData(b1,b0+"queue",true);
bH.removeData(b1,e,true)
})})
}});
bH.fn.extend({queue:function(e,b0){var b1=2;
if(typeof e!=="string"){b0=e;
e="fx";
b1--
}if(arguments.length<b1){return bH.queue(this[0],e)
}return b0===aC?this:this.each(function(){var b2=bH.queue(this,e,b0);
bH._queueHooks(this,e);
if(e==="fx"&&b2[0]!=="inprogress"){bH.dequeue(this,e)
}})
},dequeue:function(e){return this.each(function(){bH.dequeue(this,e)
})
},delay:function(b0,e){b0=bH.fx?bH.fx.speeds[b0]||b0:b0;
e=e||"fx";
return this.queue(e,function(b2,b1){var b3=setTimeout(b2,b0);
b1.stop=function(){clearTimeout(b3)
}
})
},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(b1,b5){var b0,b2=1,b6=bH.Deferred(),b4=this,e=this.length,b3=function(){if(!(--b2)){b6.resolveWith(b4,[b4])
}};
if(typeof b1!=="string"){b5=b1;
b1=aC
}b1=b1||"fx";
while(e--){b0=bH._data(b4[e],b1+"queueHooks");
if(b0&&b0.empty){b2++;
b0.empty.add(b3)
}}b3();
return b6.promise(b5)
}});
var a8,bW,o,bK=/[\t\r\n]/g,aj=/\r/g,k=/^(?:button|input)$/i,aB=/^(?:button|input|object|select|textarea)$/i,E=/^a(?:rea|)$/i,N=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,bM=bH.support.getSetAttribute;
bH.fn.extend({attr:function(e,b0){return bH.access(this,bH.attr,e,b0,arguments.length>1)
},removeAttr:function(e){return this.each(function(){bH.removeAttr(this,e)
})
},prop:function(e,b0){return bH.access(this,bH.prop,e,b0,arguments.length>1)
},removeProp:function(e){e=bH.propFix[e]||e;
return this.each(function(){try{this[e]=aC;
delete this[e]
}catch(b0){}})
},addClass:function(b3){var b5,b1,b0,b2,b4,b6,e;
if(bH.isFunction(b3)){return this.each(function(b7){bH(this).addClass(b3.call(this,b7,this.className))
})
}if(b3&&typeof b3==="string"){b5=b3.split(aW);
for(b1=0,b0=this.length;
b1<b0;
b1++){b2=this[b1];
if(b2.nodeType===1){if(!b2.className&&b5.length===1){b2.className=b3
}else{b4=" "+b2.className+" ";
for(b6=0,e=b5.length;
b6<e;
b6++){if(b4.indexOf(" "+b5[b6]+" ")<0){b4+=b5[b6]+" "
}}b2.className=bH.trim(b4)
}}}}return this
},removeClass:function(b5){var b2,b3,b4,b6,b0,b1,e;
if(bH.isFunction(b5)){return this.each(function(b7){bH(this).removeClass(b5.call(this,b7,this.className))
})
}if((b5&&typeof b5==="string")||b5===aC){b2=(b5||"").split(aW);
for(b1=0,e=this.length;
b1<e;
b1++){b4=this[b1];
if(b4.nodeType===1&&b4.className){b3=(" "+b4.className+" ").replace(bK," ");
for(b6=0,b0=b2.length;
b6<b0;
b6++){while(b3.indexOf(" "+b2[b6]+" ")>=0){b3=b3.replace(" "+b2[b6]+" "," ")
}}b4.className=b5?bH.trim(b3):""
}}}return this
},toggleClass:function(b2,b0){var b1=typeof b2,e=typeof b0==="boolean";
if(bH.isFunction(b2)){return this.each(function(b3){bH(this).toggleClass(b2.call(this,b3,this.className,b0),b0)
})
}return this.each(function(){if(b1==="string"){var b5,b4=0,b3=bH(this),b6=b0,b7=b2.split(aW);
while((b5=b7[b4++])){b6=e?b6:!b3.hasClass(b5);
b3[b6?"addClass":"removeClass"](b5)
}}else{if(b1==="undefined"||b1==="boolean"){if(this.className){bH._data(this,"__className__",this.className)
}this.className=this.className||b2===false?"":bH._data(this,"__className__")||""
}}})
},hasClass:function(e){var b2=" "+e+" ",b1=0,b0=this.length;
for(;
b1<b0;
b1++){if(this[b1].nodeType===1&&(" "+this[b1].className+" ").replace(bK," ").indexOf(b2)>=0){return true
}}return false
},val:function(b2){var e,b0,b3,b1=this[0];
if(!arguments.length){if(b1){e=bH.valHooks[b1.type]||bH.valHooks[b1.nodeName.toLowerCase()];
if(e&&"get" in e&&(b0=e.get(b1,"value"))!==aC){return b0
}b0=b1.value;
return typeof b0==="string"?b0.replace(aj,""):b0==null?"":b0
}return
}b3=bH.isFunction(b2);
return this.each(function(b5){var b6,b4=bH(this);
if(this.nodeType!==1){return
}if(b3){b6=b2.call(this,b5,b4.val())
}else{b6=b2
}if(b6==null){b6=""
}else{if(typeof b6==="number"){b6+=""
}else{if(bH.isArray(b6)){b6=bH.map(b6,function(b7){return b7==null?"":b7+""
})
}}}e=bH.valHooks[this.type]||bH.valHooks[this.nodeName.toLowerCase()];
if(!e||!("set" in e)||e.set(this,b6,"value")===aC){this.value=b6
}})
}});
bH.extend({valHooks:{option:{get:function(e){var b0=e.attributes.value;
return !b0||b0.specified?e.value:e.text
}},select:{get:function(e){var b5,b0,b4,b2,b3=e.selectedIndex,b6=[],b7=e.options,b1=e.type==="select-one";
if(b3<0){return null
}b0=b1?b3:0;
b4=b1?b3+1:b7.length;
for(;
b0<b4;
b0++){b2=b7[b0];
if(b2.selected&&(bH.support.optDisabled?!b2.disabled:b2.getAttribute("disabled")===null)&&(!b2.parentNode.disabled||!bH.nodeName(b2.parentNode,"optgroup"))){b5=bH(b2).val();
if(b1){return b5
}b6.push(b5)
}}if(b1&&!b6.length&&b7.length){return bH(b7[b3]).val()
}return b6
},set:function(b0,b1){var e=bH.makeArray(b1);
bH(b0).find("option").each(function(){this.selected=bH.inArray(bH(this).val(),e)>=0
});
if(!e.length){b0.selectedIndex=-1
}return e
}}},attrFn:{},attr:function(b5,b2,b6,b4){var b1,e,b3,b0=b5.nodeType;
if(!b5||b0===3||b0===8||b0===2){return
}if(b4&&bH.isFunction(bH.fn[b2])){return bH(b5)[b2](b6)
}if(typeof b5.getAttribute==="undefined"){return bH.prop(b5,b2,b6)
}b3=b0!==1||!bH.isXMLDoc(b5);
if(b3){b2=b2.toLowerCase();
e=bH.attrHooks[b2]||(N.test(b2)?bW:a8)
}if(b6!==aC){if(b6===null){bH.removeAttr(b5,b2);
return
}else{if(e&&"set" in e&&b3&&(b1=e.set(b5,b6,b2))!==aC){return b1
}else{b5.setAttribute(b2,b6+"");
return b6
}}}else{if(e&&"get" in e&&b3&&(b1=e.get(b5,b2))!==null){return b1
}else{b1=b5.getAttribute(b2);
return b1===null?aC:b1
}}},removeAttr:function(b2,b4){var b3,b5,b0,e,b1=0;
if(b4&&b2.nodeType===1){b5=b4.split(aW);
for(;
b1<b5.length;
b1++){b0=b5[b1];
if(b0){b3=bH.propFix[b0]||b0;
e=N.test(b0);
if(!e){bH.attr(b2,b0,"")
}b2.removeAttribute(bM?b0:b3);
if(e&&b3 in b2){b2[b3]=false
}}}}},attrHooks:{type:{set:function(e,b0){if(k.test(e.nodeName)&&e.parentNode){bH.error("type property can't be changed")
}else{if(!bH.support.radioValue&&b0==="radio"&&bH.nodeName(e,"input")){var b1=e.value;
e.setAttribute("type",b0);
if(b1){e.value=b1
}return b0
}}}},value:{get:function(b0,e){if(a8&&bH.nodeName(b0,"button")){return a8.get(b0,e)
}return e in b0?b0.value:null
},set:function(b0,b1,e){if(a8&&bH.nodeName(b0,"button")){return a8.set(b0,b1,e)
}b0.value=b1
}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(b4,b2,b5){var b1,e,b3,b0=b4.nodeType;
if(!b4||b0===3||b0===8||b0===2){return
}b3=b0!==1||!bH.isXMLDoc(b4);
if(b3){b2=bH.propFix[b2]||b2;
e=bH.propHooks[b2]
}if(b5!==aC){if(e&&"set" in e&&(b1=e.set(b4,b5,b2))!==aC){return b1
}else{return(b4[b2]=b5)
}}else{if(e&&"get" in e&&(b1=e.get(b4,b2))!==null){return b1
}else{return b4[b2]
}}},propHooks:{tabIndex:{get:function(b0){var e=b0.getAttributeNode("tabindex");
return e&&e.specified?parseInt(e.value,10):aB.test(b0.nodeName)||E.test(b0.nodeName)&&b0.href?0:aC
}}}});
bW={get:function(b0,e){var b2,b1=bH.prop(b0,e);
return b1===true||typeof b1!=="boolean"&&(b2=b0.getAttributeNode(e))&&b2.nodeValue!==false?e.toLowerCase():aC
},set:function(b0,b2,e){var b1;
if(b2===false){bH.removeAttr(b0,e)
}else{b1=bH.propFix[e]||e;
if(b1 in b0){b0[b1]=true
}b0.setAttribute(e,e.toLowerCase())
}return e
}};
if(!bM){o={name:true,id:true,coords:true};
a8=bH.valHooks.button={get:function(b1,b0){var e;
e=b1.getAttributeNode(b0);
return e&&(o[b0]?e.value!=="":e.specified)?e.value:aC
},set:function(b1,b2,b0){var e=b1.getAttributeNode(b0);
if(!e){e=p.createAttribute(b0);
b1.setAttributeNode(e)
}return(e.value=b2+"")
}};
bH.each(["width","height"],function(b0,e){bH.attrHooks[e]=bH.extend(bH.attrHooks[e],{set:function(b1,b2){if(b2===""){b1.setAttribute(e,"auto");
return b2
}}})
});
bH.attrHooks.contenteditable={get:a8.get,set:function(b0,b1,e){if(b1===""){b1="false"
}a8.set(b0,b1,e)
}}
}if(!bH.support.hrefNormalized){bH.each(["href","src","width","height"],function(b0,e){bH.attrHooks[e]=bH.extend(bH.attrHooks[e],{get:function(b2){var b1=b2.getAttribute(e,2);
return b1===null?aC:b1
}})
})
}if(!bH.support.style){bH.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||aC
},set:function(e,b0){return(e.style.cssText=b0+"")
}}
}if(!bH.support.optSelected){bH.propHooks.selected=bH.extend(bH.propHooks.selected,{get:function(b0){var e=b0.parentNode;
if(e){e.selectedIndex;
if(e.parentNode){e.parentNode.selectedIndex
}}return null
}})
}if(!bH.support.enctype){bH.propFix.enctype="encoding"
}if(!bH.support.checkOn){bH.each(["radio","checkbox"],function(){bH.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value
}}
})
}bH.each(["radio","checkbox"],function(){bH.valHooks[this]=bH.extend(bH.valHooks[this],{set:function(e,b0){if(bH.isArray(b0)){return(e.checked=bH.inArray(bH(e).val(),b0)>=0)
}}})
});
var bF=/^(?:textarea|input|select)$/i,bs=/^([^\.]*|)(?:\.(.+)|)$/,bb=/(?:^|\s)hover(\.\S+|)\b/,a4=/^key/,bL=/^(?:mouse|contextmenu)|click/,bz=/^(?:focusinfocus|focusoutblur)$/,ar=function(e){return bH.event.special.hover?e:e.replace(bb,"mouseenter$1 mouseleave$1")
};
bH.event={add:function(b2,b6,cd,b4,b3){var b7,b5,ce,cc,cb,b9,e,ca,b0,b1,b8;
if(b2.nodeType===3||b2.nodeType===8||!b6||!cd||!(b7=bH._data(b2))){return
}if(cd.handler){b0=cd;
cd=b0.handler;
b3=b0.selector
}if(!cd.guid){cd.guid=bH.guid++
}ce=b7.events;
if(!ce){b7.events=ce={}
}b5=b7.handle;
if(!b5){b7.handle=b5=function(cf){return typeof bH!=="undefined"&&(!cf||bH.event.triggered!==cf.type)?bH.event.dispatch.apply(b5.elem,arguments):aC
};
b5.elem=b2
}b6=bH.trim(ar(b6)).split(" ");
for(cc=0;
cc<b6.length;
cc++){cb=bs.exec(b6[cc])||[];
b9=cb[1];
e=(cb[2]||"").split(".").sort();
b8=bH.event.special[b9]||{};
b9=(b3?b8.delegateType:b8.bindType)||b9;
b8=bH.event.special[b9]||{};
ca=bH.extend({type:b9,origType:cb[1],data:b4,handler:cd,guid:cd.guid,selector:b3,needsContext:b3&&bH.expr.match.needsContext.test(b3),namespace:e.join(".")},b0);
b1=ce[b9];
if(!b1){b1=ce[b9]=[];
b1.delegateCount=0;
if(!b8.setup||b8.setup.call(b2,b4,e,b5)===false){if(b2.addEventListener){b2.addEventListener(b9,b5,false)
}else{if(b2.attachEvent){b2.attachEvent("on"+b9,b5)
}}}}if(b8.add){b8.add.call(b2,ca);
if(!ca.handler.guid){ca.handler.guid=cd.guid
}}if(b3){b1.splice(b1.delegateCount++,0,ca)
}else{b1.push(ca)
}bH.event.global[b9]=true
}b2=null
},global:{},remove:function(b2,b7,cd,b3,b6){var ce,cf,ca,b1,b0,b4,b5,cc,b9,e,cb,b8=bH.hasData(b2)&&bH._data(b2);
if(!b8||!(cc=b8.events)){return
}b7=bH.trim(ar(b7||"")).split(" ");
for(ce=0;
ce<b7.length;
ce++){cf=bs.exec(b7[ce])||[];
ca=b1=cf[1];
b0=cf[2];
if(!ca){for(ca in cc){bH.event.remove(b2,ca+b7[ce],cd,b3,true)
}continue
}b9=bH.event.special[ca]||{};
ca=(b3?b9.delegateType:b9.bindType)||ca;
e=cc[ca]||[];
b4=e.length;
b0=b0?new RegExp("(^|\\.)"+b0.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
for(b5=0;
b5<e.length;
b5++){cb=e[b5];
if((b6||b1===cb.origType)&&(!cd||cd.guid===cb.guid)&&(!b0||b0.test(cb.namespace))&&(!b3||b3===cb.selector||b3==="**"&&cb.selector)){e.splice(b5--,1);
if(cb.selector){e.delegateCount--
}if(b9.remove){b9.remove.call(b2,cb)
}}}if(e.length===0&&b4!==e.length){if(!b9.teardown||b9.teardown.call(b2,b0,b8.handle)===false){bH.removeEvent(b2,ca,b8.handle)
}delete cc[ca]
}}if(bH.isEmptyObject(cc)){delete b8.handle;
bH.removeData(b2,"events",true)
}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(b0,b7,b5,ce){if(b5&&(b5.nodeType===3||b5.nodeType===8)){return
}var e,b2,b8,cc,b4,b3,ca,b9,b6,cd,cb=b0.type||b0,b1=[];
if(bz.test(cb+bH.event.triggered)){return
}if(cb.indexOf("!")>=0){cb=cb.slice(0,-1);
b2=true
}if(cb.indexOf(".")>=0){b1=cb.split(".");
cb=b1.shift();
b1.sort()
}if((!b5||bH.event.customEvent[cb])&&!bH.event.global[cb]){return
}b0=typeof b0==="object"?b0[bH.expando]?b0:new bH.Event(cb,b0):new bH.Event(cb);
b0.type=cb;
b0.isTrigger=true;
b0.exclusive=b2;
b0.namespace=b1.join(".");
b0.namespace_re=b0.namespace?new RegExp("(^|\\.)"+b1.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
b3=cb.indexOf(":")<0?"on"+cb:"";
if(!b5){e=bH.cache;
for(b8 in e){if(e[b8].events&&e[b8].events[cb]){bH.event.trigger(b0,b7,e[b8].handle.elem,true)
}}return
}b0.result=aC;
if(!b0.target){b0.target=b5
}b7=b7!=null?bH.makeArray(b7):[];
b7.unshift(b0);
ca=bH.event.special[cb]||{};
if(ca.trigger&&ca.trigger.apply(b5,b7)===false){return
}b6=[[b5,ca.bindType||cb]];
if(!ce&&!ca.noBubble&&!bH.isWindow(b5)){cd=ca.delegateType||cb;
cc=bz.test(cd+cb)?b5:b5.parentNode;
for(b4=b5;
cc;
cc=cc.parentNode){b6.push([cc,cd]);
b4=cc
}if(b4===(b5.ownerDocument||p)){b6.push([b4.defaultView||b4.parentWindow||a3,cd])
}}for(b8=0;
b8<b6.length&&!b0.isPropagationStopped();
b8++){cc=b6[b8][0];
b0.type=b6[b8][1];
b9=(bH._data(cc,"events")||{})[b0.type]&&bH._data(cc,"handle");
if(b9){b9.apply(cc,b7)
}b9=b3&&cc[b3];
if(b9&&bH.acceptData(cc)&&b9.apply&&b9.apply(cc,b7)===false){b0.preventDefault()
}}b0.type=cb;
if(!ce&&!b0.isDefaultPrevented()){if((!ca._default||ca._default.apply(b5.ownerDocument,b7)===false)&&!(cb==="click"&&bH.nodeName(b5,"a"))&&bH.acceptData(b5)){if(b3&&b5[cb]&&((cb!=="focus"&&cb!=="blur")||b0.target.offsetWidth!==0)&&!bH.isWindow(b5)){b4=b5[b3];
if(b4){b5[b3]=null
}bH.event.triggered=cb;
b5[cb]();
bH.event.triggered=aC;
if(b4){b5[b3]=b4
}}}}return b0.result
},dispatch:function(e){e=bH.event.fix(e||a3.event);
var b6,b5,cf,b9,b8,b0,b7,cd,b2,ce,b3=((bH._data(this,"events")||{})[e.type]||[]),b4=b3.delegateCount,cb=a5.call(arguments),b1=!e.exclusive&&!e.namespace,ca=bH.event.special[e.type]||{},cc=[];
cb[0]=e;
e.delegateTarget=this;
if(ca.preDispatch&&ca.preDispatch.call(this,e)===false){return
}if(b4&&!(e.button&&e.type==="click")){for(cf=e.target;
cf!=this;
cf=cf.parentNode||this){if(cf.disabled!==true||e.type!=="click"){b8={};
b7=[];
for(b6=0;
b6<b4;
b6++){cd=b3[b6];
b2=cd.selector;
if(b8[b2]===aC){b8[b2]=cd.needsContext?bH(b2,this).index(cf)>=0:bH.find(b2,this,null,[cf]).length
}if(b8[b2]){b7.push(cd)
}}if(b7.length){cc.push({elem:cf,matches:b7})
}}}}if(b3.length>b4){cc.push({elem:this,matches:b3.slice(b4)})
}for(b6=0;
b6<cc.length&&!e.isPropagationStopped();
b6++){b0=cc[b6];
e.currentTarget=b0.elem;
for(b5=0;
b5<b0.matches.length&&!e.isImmediatePropagationStopped();
b5++){cd=b0.matches[b5];
if(b1||(!e.namespace&&!cd.namespace)||e.namespace_re&&e.namespace_re.test(cd.namespace)){e.data=cd.data;
e.handleObj=cd;
b9=((bH.event.special[cd.origType]||{}).handle||cd.handler).apply(b0.elem,cb);
if(b9!==aC){e.result=b9;
if(b9===false){e.preventDefault();
e.stopPropagation()
}}}}}if(ca.postDispatch){ca.postDispatch.call(this,e)
}return e.result
},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(b0,e){if(b0.which==null){b0.which=e.charCode!=null?e.charCode:e.keyCode
}return b0
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(b2,b1){var b3,b4,e,b0=b1.button,b5=b1.fromElement;
if(b2.pageX==null&&b1.clientX!=null){b3=b2.target.ownerDocument||p;
b4=b3.documentElement;
e=b3.body;
b2.pageX=b1.clientX+(b4&&b4.scrollLeft||e&&e.scrollLeft||0)-(b4&&b4.clientLeft||e&&e.clientLeft||0);
b2.pageY=b1.clientY+(b4&&b4.scrollTop||e&&e.scrollTop||0)-(b4&&b4.clientTop||e&&e.clientTop||0)
}if(!b2.relatedTarget&&b5){b2.relatedTarget=b5===b2.target?b1.toElement:b5
}if(!b2.which&&b0!==aC){b2.which=(b0&1?1:(b0&2?3:(b0&4?2:0)))
}return b2
}},fix:function(b1){if(b1[bH.expando]){return b1
}var b0,b4,e=b1,b2=bH.event.fixHooks[b1.type]||{},b3=b2.props?this.props.concat(b2.props):this.props;
b1=bH.Event(e);
for(b0=b3.length;
b0;
){b4=b3[--b0];
b1[b4]=e[b4]
}if(!b1.target){b1.target=e.srcElement||p
}if(b1.target.nodeType===3){b1.target=b1.target.parentNode
}b1.metaKey=!!b1.metaKey;
return b2.filter?b2.filter(b1,e):b1
},special:{load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(b1,b0,e){if(bH.isWindow(this)){this.onbeforeunload=e
}},teardown:function(b0,e){if(this.onbeforeunload===e){this.onbeforeunload=null
}}}},simulate:function(b1,b3,b2,b0){var b4=bH.extend(new bH.Event(),b2,{type:b1,isSimulated:true,originalEvent:{}});
if(b0){bH.event.trigger(b4,null,b3)
}else{bH.event.dispatch.call(b3,b4)
}if(b4.isDefaultPrevented()){b2.preventDefault()
}}};
bH.event.handle=bH.event.dispatch;
bH.removeEvent=p.removeEventListener?function(b0,e,b1){if(b0.removeEventListener){b0.removeEventListener(e,b1,false)
}}:function(b1,b0,b2){var e="on"+b0;
if(b1.detachEvent){if(typeof b1[e]==="undefined"){b1[e]=null
}b1.detachEvent(e,b2)
}};
bH.Event=function(b0,e){if(!(this instanceof bH.Event)){return new bH.Event(b0,e)
}if(b0&&b0.type){this.originalEvent=b0;
this.type=b0.type;
this.isDefaultPrevented=(b0.defaultPrevented||b0.returnValue===false||b0.getPreventDefault&&b0.getPreventDefault())?S:Y
}else{this.type=b0
}if(e){bH.extend(this,e)
}this.timeStamp=b0&&b0.timeStamp||bH.now();
this[bH.expando]=true
};
function Y(){return false
}function S(){return true
}bH.Event.prototype={preventDefault:function(){this.isDefaultPrevented=S;
var b0=this.originalEvent;
if(!b0){return
}if(b0.preventDefault){b0.preventDefault()
}else{b0.returnValue=false
}},stopPropagation:function(){this.isPropagationStopped=S;
var b0=this.originalEvent;
if(!b0){return
}if(b0.stopPropagation){b0.stopPropagation()
}b0.cancelBubble=true
},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=S;
this.stopPropagation()
},isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y};
bH.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(b0,e){bH.event.special[b0]={delegateType:e,bindType:e,handle:function(b4){var b2,b6=this,b5=b4.relatedTarget,b3=b4.handleObj,b1=b3.selector;
if(!b5||(b5!==b6&&!bH.contains(b6,b5))){b4.type=b3.origType;
b2=b3.handler.apply(this,arguments);
b4.type=e
}return b2
}}
});
if(!bH.support.submitBubbles){bH.event.special.submit={setup:function(){if(bH.nodeName(this,"form")){return false
}bH.event.add(this,"click._submit keypress._submit",function(b2){var b1=b2.target,b0=bH.nodeName(b1,"input")||bH.nodeName(b1,"button")?b1.form:aC;
if(b0&&!bH._data(b0,"_submit_attached")){bH.event.add(b0,"submit._submit",function(e){e._submit_bubble=true
});
bH._data(b0,"_submit_attached",true)
}})
},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;
if(this.parentNode&&!e.isTrigger){bH.event.simulate("submit",this.parentNode,e,true)
}}},teardown:function(){if(bH.nodeName(this,"form")){return false
}bH.event.remove(this,"._submit")
}}
}if(!bH.support.changeBubbles){bH.event.special.change={setup:function(){if(bF.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){bH.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true
}});
bH.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false
}bH.event.simulate("change",this,e,true)
})
}return false
}bH.event.add(this,"beforeactivate._change",function(b1){var b0=b1.target;
if(bF.test(b0.nodeName)&&!bH._data(b0,"_change_attached")){bH.event.add(b0,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){bH.event.simulate("change",this.parentNode,e,true)
}});
bH._data(b0,"_change_attached",true)
}})
},handle:function(b0){var e=b0.target;
if(this!==e||b0.isSimulated||b0.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){return b0.handleObj.handler.apply(this,arguments)
}},teardown:function(){bH.event.remove(this,"._change");
return !bF.test(this.nodeName)
}}
}if(!bH.support.focusinBubbles){bH.each({focus:"focusin",blur:"focusout"},function(b2,e){var b0=0,b1=function(b3){bH.event.simulate(e,b3.target,bH.event.fix(b3),true)
};
bH.event.special[e]={setup:function(){if(b0++===0){p.addEventListener(b2,b1,true)
}},teardown:function(){if(--b0===0){p.removeEventListener(b2,b1,true)
}}}
})
}bH.fn.extend({on:function(b1,e,b4,b3,b0){var b5,b2;
if(typeof b1==="object"){if(typeof e!=="string"){b4=b4||e;
e=aC
}for(b2 in b1){this.on(b2,e,b4,b1[b2],b0)
}return this
}if(b4==null&&b3==null){b3=e;
b4=e=aC
}else{if(b3==null){if(typeof e==="string"){b3=b4;
b4=aC
}else{b3=b4;
b4=e;
e=aC
}}}if(b3===false){b3=Y
}else{if(!b3){return this
}}if(b0===1){b5=b3;
b3=function(b6){bH().off(b6);
return b5.apply(this,arguments)
};
b3.guid=b5.guid||(b5.guid=bH.guid++)
}return this.each(function(){bH.event.add(this,b1,b3,b4,e)
})
},one:function(b0,e,b2,b1){return this.on(b0,e,b2,b1,1)
},off:function(b1,e,b3){var b0,b2;
if(b1&&b1.preventDefault&&b1.handleObj){b0=b1.handleObj;
bH(b1.delegateTarget).off(b0.namespace?b0.origType+"."+b0.namespace:b0.origType,b0.selector,b0.handler);
return this
}if(typeof b1==="object"){for(b2 in b1){this.off(b2,e,b1[b2])
}return this
}if(e===false||typeof e==="function"){b3=e;
e=aC
}if(b3===false){b3=Y
}return this.each(function(){bH.event.remove(this,b1,b3,e)
})
},bind:function(e,b1,b0){return this.on(e,null,b1,b0)
},unbind:function(e,b0){return this.off(e,null,b0)
},live:function(e,b1,b0){bH(this.context).on(e,this.selector,b1,b0);
return this
},die:function(e,b0){bH(this.context).off(e,this.selector||"**",b0);
return this
},delegate:function(e,b0,b2,b1){return this.on(b0,e,b2,b1)
},undelegate:function(e,b0,b1){return arguments.length===1?this.off(e,"**"):this.off(b0,e||"**",b1)
},trigger:function(e,b0){return this.each(function(){bH.event.trigger(e,b0,this)
})
},triggerHandler:function(e,b0){if(this[0]){return bH.event.trigger(e,b0,this[0],true)
}},toggle:function(b2){var b0=arguments,e=b2.guid||bH.guid++,b1=0,b3=function(b4){var b5=(bH._data(this,"lastToggle"+b2.guid)||0)%b1;
bH._data(this,"lastToggle"+b2.guid,b5+1);
b4.preventDefault();
return b0[b5].apply(this,arguments)||false
};
b3.guid=e;
while(b1<b0.length){b0[b1++].guid=e
}return this.click(b3)
},hover:function(e,b0){return this.mouseenter(e).mouseleave(b0||e)
}});
bH.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(b0,e){bH.fn[e]=function(b2,b1){if(b1==null){b1=b2;
b2=null
}return arguments.length>0?this.on(e,null,b2,b1):this.trigger(e)
};
if(a4.test(e)){bH.event.fixHooks[e]=bH.event.keyHooks
}if(bL.test(e)){bH.event.fixHooks[e]=bH.event.mouseHooks
}});
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function(cT,ci){var cY,cb,cM,b1,cn,cB,ce,ch,cd,cK,ca=true,cv="undefined",c0=("sizcache"+Math.random()).replace(".",""),b5=String,b9=cT.document,cc=b9.documentElement,cs=0,cg=0,cF=[].pop,cX=[].push,cm=[].slice,cp=[].indexOf||function(c9){var c8=0,e=this.length;
for(;
c8<e;
c8++){if(this[c8]===c9){return c8
}}return -1
},c2=function(e,c8){e[c0]=c8==null||c8;
return e
},c6=function(){var e={},c8=[];
return c2(function(c9,da){if(c8.push(c9)>cM.cacheLength){delete e[c8.shift()]
}return(e[c9]=da)
},e)
},cV=c6(),cW=c6(),co=c6(),cz="[\\x20\\t\\r\\n\\f]",cl="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",cj=cl.replace("w","w#"),c5="([*^$|!~]?=)",cQ="\\["+cz+"*("+cl+")"+cz+"*(?:"+c5+cz+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+cj+")|)|)"+cz+"*\\]",c7=":("+cl+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+cQ+")|[^:]|\\\\.)*|.*))\\)|)",cA=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+cz+"*((?:-\\d)?\\d*)"+cz+"*\\)|)(?=[^-]|$)",cU=new RegExp("^"+cz+"+|((?:^|[^\\\\])(?:\\\\.)*)"+cz+"+$","g"),b6=new RegExp("^"+cz+"*,"+cz+"*"),cI=new RegExp("^"+cz+"*([\\x20\\t\\r\\n\\f>+~])"+cz+"*"),cN=new RegExp(c7),cP=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,cE=/^:not/,cS=/[\x20\t\r\n\f]*[+~]/,c1=/:not\($/,ct=/h\d/i,cO=/input|select|textarea|button/i,cu=/\\(?!\\)/g,cH={ID:new RegExp("^#("+cl+")"),CLASS:new RegExp("^\\.("+cl+")"),NAME:new RegExp("^\\[name=['\"]?("+cl+")['\"]?\\]"),TAG:new RegExp("^("+cl.replace("w","w*")+")"),ATTR:new RegExp("^"+cQ),PSEUDO:new RegExp("^"+c7),POS:new RegExp(cA,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+cz+"*(even|odd|(([+-]|)(\\d*)n|)"+cz+"*(?:([+-]|)"+cz+"*(\\d+)|))"+cz+"*\\)|)","i"),needsContext:new RegExp("^"+cz+"*[>+~]|"+cA,"i")},cL=function(c8){var da=b9.createElement("div");
try{return c8(da)
}catch(c9){return false
}finally{da=null
}},b8=cL(function(e){e.appendChild(b9.createComment(""));
return !e.getElementsByTagName("*").length
}),cD=cL(function(e){e.innerHTML="<a href='#'></a>";
return e.firstChild&&typeof e.firstChild.getAttribute!==cv&&e.firstChild.getAttribute("href")==="#"
}),cr=cL(function(c8){c8.innerHTML="<select></select>";
var e=typeof c8.lastChild.getAttribute("multiple");
return e!=="boolean"&&e!=="string"
}),cC=cL(function(e){e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";
if(!e.getElementsByClassName||!e.getElementsByClassName("e").length){return false
}e.lastChild.className="e";
return e.getElementsByClassName("e").length===2
}),b0=cL(function(c8){c8.id=c0+0;
c8.innerHTML="<a name='"+c0+"'></a><div name='"+c0+"'></div>";
cc.insertBefore(c8,cc.firstChild);
var e=b9.getElementsByName&&b9.getElementsByName(c0).length===2+b9.getElementsByName(c0+0).length;
cb=!b9.getElementById(c0);
cc.removeChild(c8);
return e
});
try{cm.call(cc.childNodes,0)[0].nodeType
}catch(c4){cm=function(c8){var c9,e=[];
for(;
(c9=this[c8]);
c8++){e.push(c9)
}return e
}
}function cR(da,e,dc,df){dc=dc||[];
e=e||b9;
var dd,c8,de,c9,db=e.nodeType;
if(!da||typeof da!=="string"){return dc
}if(db!==1&&db!==9){return[]
}de=cn(e);
if(!de&&!df){if((dd=cP.exec(da))){if((c9=dd[1])){if(db===9){c8=e.getElementById(c9);
if(c8&&c8.parentNode){if(c8.id===c9){dc.push(c8);
return dc
}}else{return dc
}}else{if(e.ownerDocument&&(c8=e.ownerDocument.getElementById(c9))&&cB(e,c8)&&c8.id===c9){dc.push(c8);
return dc
}}}else{if(dd[2]){cX.apply(dc,cm.call(e.getElementsByTagName(da),0));
return dc
}else{if((c9=dd[3])&&cC&&e.getElementsByClassName){cX.apply(dc,cm.call(e.getElementsByClassName(c9),0));
return dc
}}}}}return cZ(da.replace(cU,"$1"),e,dc,df,de)
}cR.matches=function(c8,e){return cR(c8,null,null,e)
};
cR.matchesSelector=function(e,c8){return cR(c8,null,null,[e]).length>0
};
function cJ(e){return function(c9){var c8=c9.nodeName.toLowerCase();
return c8==="input"&&c9.type===e
}
}function b4(e){return function(c9){var c8=c9.nodeName.toLowerCase();
return(c8==="input"||c8==="button")&&c9.type===e
}
}function cG(e){return c2(function(c8){c8=+c8;
return c2(function(c9,dd){var db,da=e([],c9.length,c8),dc=da.length;
while(dc--){if(c9[(db=da[dc])]){c9[db]=!(dd[db]=c9[db])
}}})
})
}b1=cR.getText=function(db){var da,c8="",c9=0,e=db.nodeType;
if(e){if(e===1||e===9||e===11){if(typeof db.textContent==="string"){return db.textContent
}else{for(db=db.firstChild;
db;
db=db.nextSibling){c8+=b1(db)
}}}else{if(e===3||e===4){return db.nodeValue
}}}else{for(;
(da=db[c9]);
c9++){c8+=b1(da)
}}return c8
};
cn=cR.isXML=function(e){var c8=e&&(e.ownerDocument||e).documentElement;
return c8?c8.nodeName!=="HTML":false
};
cB=cR.contains=cc.contains?function(c8,e){var da=c8.nodeType===9?c8.documentElement:c8,c9=e&&e.parentNode;
return c8===c9||!!(c9&&c9.nodeType===1&&da.contains&&da.contains(c9))
}:cc.compareDocumentPosition?function(c8,e){return e&&!!(c8.compareDocumentPosition(e)&16)
}:function(c8,e){while((e=e.parentNode)){if(e===c8){return true
}}return false
};
cR.attr=function(c9,c8){var da,e=cn(c9);
if(!e){c8=c8.toLowerCase()
}if((da=cM.attrHandle[c8])){return da(c9)
}if(e||cr){return c9.getAttribute(c8)
}da=c9.getAttributeNode(c8);
return da?typeof c9[c8]==="boolean"?c9[c8]?c8:null:da.specified?da.value:null:null
};
cM=cR.selectors={cacheLength:50,createPseudo:c2,match:cH,attrHandle:cD?{}:{href:function(e){return e.getAttribute("href",2)
},type:function(e){return e.getAttribute("type")
}},find:{ID:cb?function(da,c9,c8){if(typeof c9.getElementById!==cv&&!c8){var e=c9.getElementById(da);
return e&&e.parentNode?[e]:[]
}}:function(da,c9,c8){if(typeof c9.getElementById!==cv&&!c8){var e=c9.getElementById(da);
return e?e.id===da||typeof e.getAttributeNode!==cv&&e.getAttributeNode("id").value===da?[e]:ci:[]
}},TAG:b8?function(e,c8){if(typeof c8.getElementsByTagName!==cv){return c8.getElementsByTagName(e)
}}:function(e,db){var da=db.getElementsByTagName(e);
if(e==="*"){var dc,c9=[],c8=0;
for(;
(dc=da[c8]);
c8++){if(dc.nodeType===1){c9.push(dc)
}}return c9
}return da
},NAME:b0&&function(e,c8){if(typeof c8.getElementsByName!==cv){return c8.getElementsByName(name)
}},CLASS:cC&&function(c9,c8,e){if(typeof c8.getElementsByClassName!==cv&&!e){return c8.getElementsByClassName(c9)
}}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(cu,"");
e[3]=(e[4]||e[5]||"").replace(cu,"");
if(e[2]==="~="){e[3]=" "+e[3]+" "
}return e.slice(0,4)
},CHILD:function(e){e[1]=e[1].toLowerCase();
if(e[1]==="nth"){if(!e[2]){cR.error(e[0])
}e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd"));
e[4]=+((e[6]+e[7])||e[2]==="odd")
}else{if(e[2]){cR.error(e[0])
}}return e
},PSEUDO:function(c8){var c9,e;
if(cH.CHILD.test(c8[0])){return null
}if(c8[3]){c8[2]=c8[3]
}else{if((c9=c8[4])){if(cN.test(c9)&&(e=b2(c9,true))&&(e=c9.indexOf(")",c9.length-e)-c9.length)){c9=c9.slice(0,e);
c8[0]=c8[0].slice(0,e)
}c8[2]=c9
}}return c8.slice(0,3)
}},filter:{ID:cb?function(e){e=e.replace(cu,"");
return function(c8){return c8.getAttribute("id")===e
}
}:function(e){e=e.replace(cu,"");
return function(c9){var c8=typeof c9.getAttributeNode!==cv&&c9.getAttributeNode("id");
return c8&&c8.value===e
}
},TAG:function(e){if(e==="*"){return function(){return true
}
}e=e.replace(cu,"").toLowerCase();
return function(c8){return c8.nodeName&&c8.nodeName.toLowerCase()===e
}
},CLASS:function(e){var c8=cV[c0][e];
if(!c8){c8=cV(e,new RegExp("(^|"+cz+")"+e+"("+cz+"|$)"))
}return function(c9){return c8.test(c9.className||(typeof c9.getAttribute!==cv&&c9.getAttribute("class"))||"")
}
},ATTR:function(c9,c8,e){return function(dc,db){var da=cR.attr(dc,c9);
if(da==null){return c8==="!="
}if(!c8){return true
}da+="";
return c8==="="?da===e:c8==="!="?da!==e:c8==="^="?e&&da.indexOf(e)===0:c8==="*="?e&&da.indexOf(e)>-1:c8==="$="?e&&da.substr(da.length-e.length)===e:c8==="~="?(" "+da+" ").indexOf(e)>-1:c8==="|="?da===e||da.substr(0,e.length+1)===e+"-":false
}
},CHILD:function(e,c9,da,c8){if(e==="nth"){return function(dd){var dc,de,db=dd.parentNode;
if(da===1&&c8===0){return true
}if(db){de=0;
for(dc=db.firstChild;
dc;
dc=dc.nextSibling){if(dc.nodeType===1){de++;
if(dd===dc){break
}}}}de-=c8;
return de===da||(de%da===0&&de/da>=0)
}
}return function(dc){var db=dc;
switch(e){case"only":case"first":while((db=db.previousSibling)){if(db.nodeType===1){return false
}}if(e==="first"){return true
}db=dc;
case"last":while((db=db.nextSibling)){if(db.nodeType===1){return false
}}return true
}}
},PSEUDO:function(da,c9){var e,c8=cM.pseudos[da]||cM.setFilters[da.toLowerCase()]||cR.error("unsupported pseudo: "+da);
if(c8[c0]){return c8(c9)
}if(c8.length>1){e=[da,da,"",c9];
return cM.setFilters.hasOwnProperty(da.toLowerCase())?c2(function(dd,df){var dc,db=c8(dd,c9),de=db.length;
while(de--){dc=cp.call(dd,db[de]);
dd[dc]=!(df[dc]=db[de])
}}):function(db){return c8(db,0,e)
}
}return c8
}},pseudos:{not:c2(function(e){var c8=[],c9=[],da=ce(e.replace(cU,"$1"));
return da[c0]?c2(function(dc,dh,df,dd){var dg,db=da(dc,null,dd,[]),de=dc.length;
while(de--){if((dg=db[de])){dc[de]=!(dh[de]=dg)
}}}):function(dd,dc,db){c8[0]=dd;
da(c8,null,db,c9);
return !c9.pop()
}
}),has:c2(function(e){return function(c8){return cR(e,c8).length>0
}
}),contains:c2(function(e){return function(c8){return(c8.textContent||c8.innerText||b1(c8)).indexOf(e)>-1
}
}),enabled:function(e){return e.disabled===false
},disabled:function(e){return e.disabled===true
},checked:function(e){var c8=e.nodeName.toLowerCase();
return(c8==="input"&&!!e.checked)||(c8==="option"&&!!e.selected)
},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex
}return e.selected===true
},parent:function(e){return !cM.pseudos.empty(e)
},empty:function(c8){var e;
c8=c8.firstChild;
while(c8){if(c8.nodeName>"@"||(e=c8.nodeType)===3||e===4){return false
}c8=c8.nextSibling
}return true
},header:function(e){return ct.test(e.nodeName)
},text:function(c9){var c8,e;
return c9.nodeName.toLowerCase()==="input"&&(c8=c9.type)==="text"&&((e=c9.getAttribute("type"))==null||e.toLowerCase()===c8)
},radio:cJ("radio"),checkbox:cJ("checkbox"),file:cJ("file"),password:cJ("password"),image:cJ("image"),submit:b4("submit"),reset:b4("reset"),button:function(c8){var e=c8.nodeName.toLowerCase();
return e==="input"&&c8.type==="button"||e==="button"
},input:function(e){return cO.test(e.nodeName)
},focus:function(e){var c8=e.ownerDocument;
return e===c8.activeElement&&(!c8.hasFocus||c8.hasFocus())&&!!(e.type||e.href)
},active:function(e){return e===e.ownerDocument.activeElement
},first:cG(function(e,c9,c8){return[0]
}),last:cG(function(e,c9,c8){return[c9-1]
}),eq:cG(function(e,c9,c8){return[c8<0?c8+c9:c8]
}),even:cG(function(e,da,c9){for(var c8=0;
c8<da;
c8+=2){e.push(c8)
}return e
}),odd:cG(function(e,da,c9){for(var c8=1;
c8<da;
c8+=2){e.push(c8)
}return e
}),lt:cG(function(e,da,c9){for(var c8=c9<0?c9+da:c9;
--c8>=0;
){e.push(c8)
}return e
}),gt:cG(function(e,da,c9){for(var c8=c9<0?c9+da:c9;
++c8<da;
){e.push(c8)
}return e
})}};
function b3(c8,e,c9){if(c8===e){return c9
}var da=c8.nextSibling;
while(da){if(da===e){return -1
}da=da.nextSibling
}return 1
}ch=cc.compareDocumentPosition?function(c8,e){if(c8===e){cd=true;
return 0
}return(!c8.compareDocumentPosition||!e.compareDocumentPosition?c8.compareDocumentPosition:c8.compareDocumentPosition(e)&4)?-1:1
}:function(df,de){if(df===de){cd=true;
return 0
}else{if(df.sourceIndex&&de.sourceIndex){return df.sourceIndex-de.sourceIndex
}}var dc,c8,c9=[],e=[],db=df.parentNode,dd=de.parentNode,dg=db;
if(db===dd){return b3(df,de)
}else{if(!db){return -1
}else{if(!dd){return 1
}}}while(dg){c9.unshift(dg);
dg=dg.parentNode
}dg=dd;
while(dg){e.unshift(dg);
dg=dg.parentNode
}dc=c9.length;
c8=e.length;
for(var da=0;
da<dc&&da<c8;
da++){if(c9[da]!==e[da]){return b3(c9[da],e[da])
}}return da===dc?b3(df,e[da],-1):b3(c9[da],de,1)
};
[0,0].sort(ch);
ca=!cd;
cR.uniqueSort=function(c8){var c9,e=1;
cd=ca;
c8.sort(ch);
if(cd){for(;
(c9=c8[e]);
e++){if(c9===c8[e-1]){c8.splice(e--,1)
}}}return c8
};
cR.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)
};
function b2(db,dg){var c8,dc,de,df,dd,c9,e,da=cW[c0][db];
if(da){return dg?0:da.slice(0)
}dd=db;
c9=[];
e=cM.preFilter;
while(dd){if(!c8||(dc=b6.exec(dd))){if(dc){dd=dd.slice(dc[0].length)
}c9.push(de=[])
}c8=false;
if((dc=cI.exec(dd))){de.push(c8=new b5(dc.shift()));
dd=dd.slice(c8.length);
c8.type=dc[0].replace(cU," ")
}for(df in cM.filter){if((dc=cH[df].exec(dd))&&(!e[df]||(dc=e[df](dc,b9,true)))){de.push(c8=new b5(dc.shift()));
dd=dd.slice(c8.length);
c8.type=df;
c8.matches=dc
}}if(!c8){break
}}return dg?dd.length:dd?cR.error(db):cW(db,c9).slice(0)
}function cx(db,c9,da){var e=c9.dir,dc=da&&c9.dir==="parentNode",c8=cg++;
return c9.first?function(df,de,dd){while((df=df[e])){if(dc||df.nodeType===1){return db(df,de,dd)
}}}:function(dg,df,de){if(!de){var dd,dh=cs+" "+c8+" ",di=dh+cY;
while((dg=dg[e])){if(dc||dg.nodeType===1){if((dd=dg[c0])===di){return dg.sizset
}else{if(typeof dd==="string"&&dd.indexOf(dh)===0){if(dg.sizset){return dg
}}else{dg[c0]=di;
if(db(dg,df,de)){dg.sizset=true;
return dg
}dg.sizset=false
}}}}}else{while((dg=dg[e])){if(dc||dg.nodeType===1){if(db(dg,df,de)){return dg
}}}}}
}function cf(e){return e.length>1?function(db,da,c8){var c9=e.length;
while(c9--){if(!e[c9](db,da,c8)){return false
}}return true
}:e[0]
}function cw(e,c8,c9,da,dd){var db,dg=[],dc=0,de=e.length,df=c8!=null;
for(;
dc<de;
dc++){if((db=e[dc])){if(!c9||c9(db,da,dd)){dg.push(db);
if(df){c8.push(dc)
}}}}return dg
}function c3(c9,c8,db,da,dc,e){if(da&&!da[c0]){da=c3(da)
}if(dc&&!dc[c0]){dc=c3(dc,e)
}return c2(function(dp,dl,df,dn){if(dp&&dc){return
}var dm,dh,di,dg=[],dq=[],de=dl.length,dd=dp||cq(c8||"*",df.nodeType?[df]:df,[],dp),dj=c9&&(dp||!c8)?cw(dd,dg,c9,df,dn):dd,dk=db?dc||(dp?c9:de||da)?[]:dl:dj;
if(db){db(dj,dk,df,dn)
}if(da){di=cw(dk,dq);
da(di,[],df,dn);
dm=di.length;
while(dm--){if((dh=di[dm])){dk[dq[dm]]=!(dj[dq[dm]]=dh)
}}}if(dp){dm=c9&&dk.length;
while(dm--){if((dh=dk[dm])){dp[dg[dm]]=!(dl[dg[dm]]=dh)
}}}else{dk=cw(dk===dl?dk.splice(de,dk.length):dk);
if(dc){dc(null,dl,dk,dn)
}else{cX.apply(dl,dk)
}}})
}function cy(dd){var c8,db,c9,dc=dd.length,dg=cM.relative[dd[0].type],dh=dg||cM.relative[" "],da=dg?1:0,de=cx(function(di){return di===c8
},dh,true),df=cx(function(di){return cp.call(c8,di)>-1
},dh,true),e=[function(dk,dj,di){return(!dg&&(di||dj!==cK))||((c8=dj).nodeType?de(dk,dj,di):df(dk,dj,di))
}];
for(;
da<dc;
da++){if((db=cM.relative[dd[da].type])){e=[cx(cf(e),db)]
}else{db=cM.filter[dd[da].type].apply(null,dd[da].matches);
if(db[c0]){c9=++da;
for(;
c9<dc;
c9++){if(cM.relative[dd[c9].type]){break
}}return c3(da>1&&cf(e),da>1&&dd.slice(0,da-1).join("").replace(cU,"$1"),db,da<c9&&cy(dd.slice(da,c9)),c9<dc&&cy((dd=dd.slice(c9))),c9<dc&&dd.join(""))
}e.push(db)
}}return cf(e)
}function b7(da,c9){var e=c9.length>0,db=da.length>0,c8=function(dl,df,dk,dj,ds){var dg,dh,dm,dr=[],dq=0,di="0",dc=dl&&[],dn=ds!=null,dp=cK,de=dl||db&&cM.find.TAG("*",ds&&df.parentNode||df),dd=(cs+=dp==null?1:Math.E);
if(dn){cK=df!==b9&&df;
cY=c8.el
}for(;
(dg=de[di])!=null;
di++){if(db&&dg){for(dh=0;
(dm=da[dh]);
dh++){if(dm(dg,df,dk)){dj.push(dg);
break
}}if(dn){cs=dd;
cY=++c8.el
}}if(e){if((dg=!dm&&dg)){dq--
}if(dl){dc.push(dg)
}}}dq+=di;
if(e&&di!==dq){for(dh=0;
(dm=c9[dh]);
dh++){dm(dc,dr,df,dk)
}if(dl){if(dq>0){while(di--){if(!(dc[di]||dr[di])){dr[di]=cF.call(dj)
}}}dr=cw(dr)
}cX.apply(dj,dr);
if(dn&&!dl&&dr.length>0&&(dq+c9.length)>1){cR.uniqueSort(dj)
}}if(dn){cs=dd;
cK=dp
}return dc
};
c8.el=0;
return e?c2(c8):c8
}ce=cR.compile=function(e,dc){var c9,c8=[],db=[],da=co[c0][e];
if(!da){if(!dc){dc=b2(e)
}c9=dc.length;
while(c9--){da=cy(dc[c9]);
if(da[c0]){c8.push(da)
}else{db.push(da)
}}da=co(e,b7(db,c8))
}return da
};
function cq(c8,dc,db,c9){var da=0,e=dc.length;
for(;
da<e;
da++){cR(c8,dc[da],db,c9)
}return db
}function cZ(c9,e,db,df,de){var dc,di,c8,dh,dg,dd=b2(c9),da=dd.length;
if(!df){if(dd.length===1){di=dd[0]=dd[0].slice(0);
if(di.length>2&&(c8=di[0]).type==="ID"&&e.nodeType===9&&!de&&cM.relative[di[1].type]){e=cM.find.ID(c8.matches[0].replace(cu,""),e,de)[0];
if(!e){return db
}c9=c9.slice(di.shift().length)
}for(dc=cH.POS.test(c9)?-1:di.length-1;
dc>=0;
dc--){c8=di[dc];
if(cM.relative[(dh=c8.type)]){break
}if((dg=cM.find[dh])){if((df=dg(c8.matches[0].replace(cu,""),cS.test(di[0].type)&&e.parentNode||e,de))){di.splice(dc,1);
c9=df.length&&di.join("");
if(!c9){cX.apply(db,cm.call(df,0));
return db
}break
}}}}}ce(c9,dd)(df,e,de,db,cS.test(c9));
return db
}if(b9.querySelectorAll){(function(){var dc,dd=cZ,db=/'|\\/g,c9=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,c8=[":focus"],e=[":active",":focus"],da=cc.matchesSelector||cc.mozMatchesSelector||cc.webkitMatchesSelector||cc.oMatchesSelector||cc.msMatchesSelector;
cL(function(de){de.innerHTML="<select><option selected=''></option></select>";
if(!de.querySelectorAll("[selected]").length){c8.push("\\["+cz+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
}if(!de.querySelectorAll(":checked").length){c8.push(":checked")
}});
cL(function(de){de.innerHTML="<p test=''></p>";
if(de.querySelectorAll("[test^='']").length){c8.push("[*^$]="+cz+"*(?:\"\"|'')")
}de.innerHTML="<input type='hidden'/>";
if(!de.querySelectorAll(":enabled").length){c8.push(":enabled",":disabled")
}});
c8=new RegExp(c8.join("|"));
cZ=function(dk,df,dm,dq,dp){if(!dq&&!dp&&(!c8||!c8.test(dk))){var di,dn,dh=true,de=c0,dg=df,dl=df.nodeType===9&&dk;
if(df.nodeType===1&&df.nodeName.toLowerCase()!=="object"){di=b2(dk);
if((dh=df.getAttribute("id"))){de=dh.replace(db,"\\$&")
}else{df.setAttribute("id",de)
}de="[id='"+de+"'] ";
dn=di.length;
while(dn--){di[dn]=de+di[dn].join("")
}dg=cS.test(dk)&&df.parentNode||df;
dl=di.join(",")
}if(dl){try{cX.apply(dm,cm.call(dg.querySelectorAll(dl),0));
return dm
}catch(dj){}finally{if(!dh){df.removeAttribute("id")
}}}}return dd(dk,df,dm,dq,dp)
};
if(da){cL(function(df){dc=da.call(df,"div");
try{da.call(df,"[test!='']:sizzle");
e.push("!=",c7)
}catch(de){}});
e=new RegExp(e.join("|"));
cR.matchesSelector=function(df,dh){dh=dh.replace(c9,"='$1']");
if(!cn(df)&&!e.test(dh)&&(!c8||!c8.test(dh))){try{var de=da.call(df,dh);
if(de||dc||df.document&&df.document.nodeType!==11){return de
}}catch(dg){}}return cR(dh,null,null,[df]).length>0
}
}})()
}cM.pseudos.nth=cM.pseudos.eq;
function ck(){}cM.filters=ck.prototype=cM.pseudos;
cM.setFilters=new ck();
cR.attr=bH.attr;
bH.find=cR;
bH.expr=cR.selectors;
bH.expr[":"]=bH.expr.pseudos;
bH.unique=cR.uniqueSort;
bH.text=cR.getText;
bH.isXMLDoc=cR.isXML;
bH.contains=cR.contains
})(a3);
var ah=/Until$/,br=/^(?:parents|prev(?:Until|All))/,am=/^.[^:#\[\.,]*$/,z=bH.expr.match.needsContext,bv={children:true,contents:true,next:true,prev:true};
bH.fn.extend({find:function(e){var b3,b0,b5,b6,b4,b2,b1=this;
if(typeof e!=="string"){return bH(e).filter(function(){for(b3=0,b0=b1.length;
b3<b0;
b3++){if(bH.contains(b1[b3],this)){return true
}}})
}b2=this.pushStack("","find",e);
for(b3=0,b0=this.length;
b3<b0;
b3++){b5=b2.length;
bH.find(e,this[b3],b2);
if(b3>0){for(b6=b5;
b6<b2.length;
b6++){for(b4=0;
b4<b5;
b4++){if(b2[b4]===b2[b6]){b2.splice(b6--,1);
break
}}}}}return b2
},has:function(b2){var b1,b0=bH(b2,this),e=b0.length;
return this.filter(function(){for(b1=0;
b1<e;
b1++){if(bH.contains(this,b0[b1])){return true
}}})
},not:function(e){return this.pushStack(aN(this,e,false),"not",e)
},filter:function(e){return this.pushStack(aN(this,e,true),"filter",e)
},is:function(e){return !!e&&(typeof e==="string"?z.test(e)?bH(e,this.context).index(this[0])>=0:bH.filter(e,this).length>0:this.filter(e).length>0)
},closest:function(b3,b2){var b4,b1=0,e=this.length,b0=[],b5=z.test(b3)||typeof b3!=="string"?bH(b3,b2||this.context):0;
for(;
b1<e;
b1++){b4=this[b1];
while(b4&&b4.ownerDocument&&b4!==b2&&b4.nodeType!==11){if(b5?b5.index(b4)>-1:bH.find.matchesSelector(b4,b3)){b0.push(b4);
break
}b4=b4.parentNode
}}b0=b0.length>1?bH.unique(b0):b0;
return this.pushStack(b0,"closest",b3)
},index:function(e){if(!e){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1
}if(typeof e==="string"){return bH.inArray(this[0],bH(e))
}return bH.inArray(e.jquery?e[0]:e,this)
},add:function(e,b0){var b2=typeof e==="string"?bH(e,b0):bH.makeArray(e&&e.nodeType?[e]:e),b1=bH.merge(this.get(),b2);
return this.pushStack(aS(b2[0])||aS(b1[0])?b1:bH.unique(b1))
},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))
}});
bH.fn.andSelf=bH.fn.addBack;
function aS(e){return !e||!e.parentNode||e.parentNode.nodeType===11
}function aZ(b0,e){do{b0=b0[e]
}while(b0&&b0.nodeType!==1);
return b0
}bH.each({parent:function(b0){var e=b0.parentNode;
return e&&e.nodeType!==11?e:null
},parents:function(e){return bH.dir(e,"parentNode")
},parentsUntil:function(b0,e,b1){return bH.dir(b0,"parentNode",b1)
},next:function(e){return aZ(e,"nextSibling")
},prev:function(e){return aZ(e,"previousSibling")
},nextAll:function(e){return bH.dir(e,"nextSibling")
},prevAll:function(e){return bH.dir(e,"previousSibling")
},nextUntil:function(b0,e,b1){return bH.dir(b0,"nextSibling",b1)
},prevUntil:function(b0,e,b1){return bH.dir(b0,"previousSibling",b1)
},siblings:function(e){return bH.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return bH.sibling(e.firstChild)
},contents:function(e){return bH.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:bH.merge([],e.childNodes)
}},function(e,b0){bH.fn[e]=function(b3,b1){var b2=bH.map(this,b0,b3);
if(!ah.test(e)){b1=b3
}if(b1&&typeof b1==="string"){b2=bH.filter(b1,b2)
}b2=this.length>1&&!bv[e]?bH.unique(b2):b2;
if(this.length>1&&br.test(e)){b2=b2.reverse()
}return this.pushStack(b2,e,a5.call(arguments).join(","))
}
});
bH.extend({filter:function(b1,e,b0){if(b0){b1=":not("+b1+")"
}return e.length===1?bH.find.matchesSelector(e[0],b1)?[e[0]]:[]:bH.find.matches(b1,e)
},dir:function(b1,b0,b3){var e=[],b2=b1[b0];
while(b2&&b2.nodeType!==9&&(b3===aC||b2.nodeType!==1||!bH(b2).is(b3))){if(b2.nodeType===1){e.push(b2)
}b2=b2[b0]
}return e
},sibling:function(b1,b0){var e=[];
for(;
b1;
b1=b1.nextSibling){if(b1.nodeType===1&&b1!==b0){e.push(b1)
}}return e
}});
function aN(b2,b1,e){b1=b1||0;
if(bH.isFunction(b1)){return bH.grep(b2,function(b4,b3){var b5=!!b1.call(b4,b3,b4);
return b5===e
})
}else{if(b1.nodeType){return bH.grep(b2,function(b4,b3){return(b4===b1)===e
})
}else{if(typeof b1==="string"){var b0=bH.grep(b2,function(b3){return b3.nodeType===1
});
if(am.test(b1)){return bH.filter(b1,b0,!e)
}else{b1=bH.filter(b1,b0)
}}}}return bH.grep(b2,function(b4,b3){return(bH.inArray(b4,b1)>=0)===e
})
}function B(e){var b1=c.split("|"),b0=e.createDocumentFragment();
if(b0.createElement){while(b1.length){b0.createElement(b1.pop())
}}return b0
}var c="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",aw=/ jQuery\d+="(?:null|\d+)"/g,bZ=/^\s+/,az=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,q=/<([\w:]+)/,bU=/<tbody/i,K=/<|&#?\w+;/,ak=/<(?:script|style|link)/i,aq=/<(?:script|object|embed|option|style)/i,L=new RegExp("<(?:"+c+")[\\s/>]","i"),aF=/^(?:checkbox|radio)$/,bS=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,aI=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,U={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},aR=B(p),m=aR.appendChild(p.createElement("div"));
U.optgroup=U.option;
U.tbody=U.tfoot=U.colgroup=U.caption=U.thead;
U.th=U.td;
if(!bH.support.htmlSerialize){U._default=[1,"X<div>","</div>"]
}bH.fn.extend({text:function(e){return bH.access(this,function(b0){return b0===aC?bH.text(this):this.empty().append((this[0]&&this[0].ownerDocument||p).createTextNode(b0))
},null,e,arguments.length)
},wrapAll:function(e){if(bH.isFunction(e)){return this.each(function(b1){bH(this).wrapAll(e.call(this,b1))
})
}if(this[0]){var b0=bH(e,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){b0.insertBefore(this[0])
}b0.map(function(){var b1=this;
while(b1.firstChild&&b1.firstChild.nodeType===1){b1=b1.firstChild
}return b1
}).append(this)
}return this
},wrapInner:function(e){if(bH.isFunction(e)){return this.each(function(b0){bH(this).wrapInner(e.call(this,b0))
})
}return this.each(function(){var b0=bH(this),b1=b0.contents();
if(b1.length){b1.wrapAll(e)
}else{b0.append(e)
}})
},wrap:function(e){var b0=bH.isFunction(e);
return this.each(function(b1){bH(this).wrapAll(b0?e.call(this,b1):e)
})
},unwrap:function(){return this.parent().each(function(){if(!bH.nodeName(this,"body")){bH(this).replaceWith(this.childNodes)
}}).end()
},append:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11){this.appendChild(e)
}})
},prepend:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11){this.insertBefore(e,this.firstChild)
}})
},before:function(){if(!aS(this[0])){return this.domManip(arguments,false,function(b0){this.parentNode.insertBefore(b0,this)
})
}if(arguments.length){var e=bH.clean(arguments);
return this.pushStack(bH.merge(e,this),"before",this.selector)
}},after:function(){if(!aS(this[0])){return this.domManip(arguments,false,function(b0){this.parentNode.insertBefore(b0,this.nextSibling)
})
}if(arguments.length){var e=bH.clean(arguments);
return this.pushStack(bH.merge(this,e),"after",this.selector)
}},remove:function(e,b2){var b1,b0=0;
for(;
(b1=this[b0])!=null;
b0++){if(!e||bH.filter(e,[b1]).length){if(!b2&&b1.nodeType===1){bH.cleanData(b1.getElementsByTagName("*"));
bH.cleanData([b1])
}if(b1.parentNode){b1.parentNode.removeChild(b1)
}}}return this
},empty:function(){var b0,e=0;
for(;
(b0=this[e])!=null;
e++){if(b0.nodeType===1){bH.cleanData(b0.getElementsByTagName("*"))
}while(b0.firstChild){b0.removeChild(b0.firstChild)
}}return this
},clone:function(b0,e){b0=b0==null?false:b0;
e=e==null?b0:e;
return this.map(function(){return bH.clone(this,b0,e)
})
},html:function(e){return bH.access(this,function(b3){var b2=this[0]||{},b1=0,b0=this.length;
if(b3===aC){return b2.nodeType===1?b2.innerHTML.replace(aw,""):aC
}if(typeof b3==="string"&&!ak.test(b3)&&(bH.support.htmlSerialize||!L.test(b3))&&(bH.support.leadingWhitespace||!bZ.test(b3))&&!U[(q.exec(b3)||["",""])[1].toLowerCase()]){b3=b3.replace(az,"<$1></$2>");
try{for(;
b1<b0;
b1++){b2=this[b1]||{};
if(b2.nodeType===1){bH.cleanData(b2.getElementsByTagName("*"));
b2.innerHTML=b3
}}b2=0
}catch(b4){}}if(b2){this.empty().append(b3)
}},null,e,arguments.length)
},replaceWith:function(e){if(!aS(this[0])){if(bH.isFunction(e)){return this.each(function(b2){var b1=bH(this),b0=b1.html();
b1.replaceWith(e.call(this,b2,b0))
})
}if(typeof e!=="string"){e=bH(e).detach()
}return this.each(function(){var b1=this.nextSibling,b0=this.parentNode;
bH(this).remove();
if(b1){bH(b1).before(e)
}else{bH(b0).append(e)
}})
}return this.length?this.pushStack(bH(bH.isFunction(e)?e():e),"replaceWith",e):this
},detach:function(e){return this.remove(e,true)
},domManip:function(b5,b9,b8){b5=[].concat.apply([],b5);
var b1,b3,b4,b7,b2=0,b6=b5[0],b0=[],e=this.length;
if(!bH.support.checkClone&&e>1&&typeof b6==="string"&&bS.test(b6)){return this.each(function(){bH(this).domManip(b5,b9,b8)
})
}if(bH.isFunction(b6)){return this.each(function(cb){var ca=bH(this);
b5[0]=b6.call(this,cb,b9?ca.html():aC);
ca.domManip(b5,b9,b8)
})
}if(this[0]){b1=bH.buildFragment(b5,this,b0);
b4=b1.fragment;
b3=b4.firstChild;
if(b4.childNodes.length===1){b4=b3
}if(b3){b9=b9&&bH.nodeName(b3,"tr");
for(b7=b1.cacheable||e-1;
b2<e;
b2++){b8.call(b9&&bH.nodeName(this[b2],"table")?y(this[b2],"tbody"):this[b2],b2===b7?b4:bH.clone(b4,true,true))
}}b4=b3=null;
if(b0.length){bH.each(b0,function(ca,cb){if(cb.src){if(bH.ajax){bH.ajax({url:cb.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})
}else{bH.error("no ajax")
}}else{bH.globalEval((cb.text||cb.textContent||cb.innerHTML||"").replace(aI,""))
}if(cb.parentNode){cb.parentNode.removeChild(cb)
}})
}}return this
}});
function y(b0,e){return b0.getElementsByTagName(e)[0]||b0.appendChild(b0.ownerDocument.createElement(e))
}function ap(b6,b0){if(b0.nodeType!==1||!bH.hasData(b6)){return
}var b3,b2,e,b5=bH._data(b6),b4=bH._data(b0,b5),b1=b5.events;
if(b1){delete b4.handle;
b4.events={};
for(b3 in b1){for(b2=0,e=b1[b3].length;
b2<e;
b2++){bH.event.add(b0,b3,b1[b3][b2])
}}}if(b4.data){b4.data=bH.extend({},b4.data)
}}function G(b0,e){var b1;
if(e.nodeType!==1){return
}if(e.clearAttributes){e.clearAttributes()
}if(e.mergeAttributes){e.mergeAttributes(b0)
}b1=e.nodeName.toLowerCase();
if(b1==="object"){if(e.parentNode){e.outerHTML=b0.outerHTML
}if(bH.support.html5Clone&&(b0.innerHTML&&!bH.trim(e.innerHTML))){e.innerHTML=b0.innerHTML
}}else{if(b1==="input"&&aF.test(b0.type)){e.defaultChecked=e.checked=b0.checked;
if(e.value!==b0.value){e.value=b0.value
}}else{if(b1==="option"){e.selected=b0.defaultSelected
}else{if(b1==="input"||b1==="textarea"){e.defaultValue=b0.defaultValue
}else{if(b1==="script"&&e.text!==b0.text){e.text=b0.text
}}}}}e.removeAttribute(bH.expando)
}bH.buildFragment=function(b2,b3,b0){var b1,e,b4,b5=b2[0];
b3=b3||p;
b3=!b3.nodeType&&b3[0]||b3;
b3=b3.ownerDocument||b3;
if(b2.length===1&&typeof b5==="string"&&b5.length<512&&b3===p&&b5.charAt(0)==="<"&&!aq.test(b5)&&(bH.support.checkClone||!bS.test(b5))&&(bH.support.html5Clone||!L.test(b5))){e=true;
b1=bH.fragments[b5];
b4=b1!==aC
}if(!b1){b1=b3.createDocumentFragment();
bH.clean(b2,b3,b1,b0);
if(e){bH.fragments[b5]=b4&&b1
}}return{fragment:b1,cacheable:e}
};
bH.fragments={};
bH.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,b0){bH.fn[e]=function(b1){var b3,b5=0,b4=[],b7=bH(b1),b2=b7.length,b6=this.length===1&&this[0].parentNode;
if((b6==null||b6&&b6.nodeType===11&&b6.childNodes.length===1)&&b2===1){b7[b0](this[0]);
return this
}else{for(;
b5<b2;
b5++){b3=(b5>0?this.clone(true):this).get();
bH(b7[b5])[b0](b3);
b4=b4.concat(b3)
}return this.pushStack(b4,e,b7.selector)
}}
});
function n(e){if(typeof e.getElementsByTagName!=="undefined"){return e.getElementsByTagName("*")
}else{if(typeof e.querySelectorAll!=="undefined"){return e.querySelectorAll("*")
}else{return[]
}}}function bT(e){if(aF.test(e.type)){e.defaultChecked=e.checked
}}bH.extend({clone:function(b3,b5,b1){var e,b0,b2,b4;
if(bH.support.html5Clone||bH.isXMLDoc(b3)||!L.test("<"+b3.nodeName+">")){b4=b3.cloneNode(true)
}else{m.innerHTML=b3.outerHTML;
m.removeChild(b4=m.firstChild)
}if((!bH.support.noCloneEvent||!bH.support.noCloneChecked)&&(b3.nodeType===1||b3.nodeType===11)&&!bH.isXMLDoc(b3)){G(b3,b4);
e=n(b3);
b0=n(b4);
for(b2=0;
e[b2];
++b2){if(b0[b2]){G(e[b2],b0[b2])
}}}if(b5){ap(b3,b4);
if(b1){e=n(b3);
b0=n(b4);
for(b2=0;
e[b2];
++b2){ap(e[b2],b0[b2])
}}}e=b0=null;
return b4
},clean:function(cc,b1,e,b2){var b9,b8,cb,cg,b5,cf,b6,b3,b0,ca,ce,b7,b4=b1===p&&aR,cd=[];
if(!b1||typeof b1.createDocumentFragment==="undefined"){b1=p
}for(b9=0;
(cb=cc[b9])!=null;
b9++){if(typeof cb==="number"){cb+=""
}if(!cb){continue
}if(typeof cb==="string"){if(!K.test(cb)){cb=b1.createTextNode(cb)
}else{b4=b4||B(b1);
b6=b1.createElement("div");
b4.appendChild(b6);
cb=cb.replace(az,"<$1></$2>");
cg=(q.exec(cb)||["",""])[1].toLowerCase();
b5=U[cg]||U._default;
cf=b5[0];
b6.innerHTML=b5[1]+cb+b5[2];
while(cf--){b6=b6.lastChild
}if(!bH.support.tbody){b3=bU.test(cb);
b0=cg==="table"&&!b3?b6.firstChild&&b6.firstChild.childNodes:b5[1]==="<table>"&&!b3?b6.childNodes:[];
for(b8=b0.length-1;
b8>=0;
--b8){if(bH.nodeName(b0[b8],"tbody")&&!b0[b8].childNodes.length){b0[b8].parentNode.removeChild(b0[b8])
}}}if(!bH.support.leadingWhitespace&&bZ.test(cb)){b6.insertBefore(b1.createTextNode(bZ.exec(cb)[0]),b6.firstChild)
}cb=b6.childNodes;
b6.parentNode.removeChild(b6)
}}if(cb.nodeType){cd.push(cb)
}else{bH.merge(cd,cb)
}}if(b6){cb=b6=b4=null
}if(!bH.support.appendChecked){for(b9=0;
(cb=cd[b9])!=null;
b9++){if(bH.nodeName(cb,"input")){bT(cb)
}else{if(typeof cb.getElementsByTagName!=="undefined"){bH.grep(cb.getElementsByTagName("input"),bT)
}}}}if(e){ce=function(ch){if(!ch.type||bx.test(ch.type)){return b2?b2.push(ch.parentNode?ch.parentNode.removeChild(ch):ch):e.appendChild(ch)
}};
for(b9=0;
(cb=cd[b9])!=null;
b9++){if(!(bH.nodeName(cb,"script")&&ce(cb))){e.appendChild(cb);
if(typeof cb.getElementsByTagName!=="undefined"){b7=bH.grep(bH.merge([],cb.getElementsByTagName("script")),ce);
cd.splice.apply(cd,[b9+1,0].concat(b7));
b9+=b7.length
}}}}return cd
},cleanData:function(b0,b8){var b3,b1,b2,b7,b4=0,b9=bH.expando,e=bH.cache,b5=bH.support.deleteExpando,b6=bH.event.special;
for(;
(b2=b0[b4])!=null;
b4++){if(b8||bH.acceptData(b2)){b1=b2[b9];
b3=b1&&e[b1];
if(b3){if(b3.events){for(b7 in b3.events){if(b6[b7]){bH.event.remove(b2,b7)
}else{bH.removeEvent(b2,b7,b3.handle)
}}}if(e[b1]){delete e[b1];
if(b5){delete b2[b9]
}else{if(b2.removeAttribute){b2.removeAttribute(b9)
}else{b2[b9]=null
}}bH.deletedIds.push(b1)
}}}}}});
(function(){var e,b0;
bH.uaMatch=function(b2){b2=b2.toLowerCase();
var b1=/(chrome)[ \/]([\w.]+)/.exec(b2)||/(webkit)[ \/]([\w.]+)/.exec(b2)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b2)||/(msie) ([\w.]+)/.exec(b2)||b2.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b2)||[];
return{browser:b1[1]||"",version:b1[2]||"0"}
};
e=bH.uaMatch(d.userAgent);
b0={};
if(e.browser){b0[e.browser]=true;
b0.version=e.version
}if(b0.chrome){b0.webkit=true
}else{if(b0.webkit){b0.safari=true
}}bH.browser=b0;
bH.sub=function(){function b1(b4,b5){return new b1.fn.init(b4,b5)
}bH.extend(true,b1,this);
b1.superclass=this;
b1.fn=b1.prototype=this();
b1.fn.constructor=b1;
b1.sub=this.sub;
b1.fn.init=function b3(b4,b5){if(b5&&b5 instanceof bH&&!(b5 instanceof b1)){b5=b1(b5)
}return bH.fn.init.call(this,b4,b5,b2)
};
b1.fn.init.prototype=b1.fn;
var b2=b1(p);
return b1
}
})();
var F,aA,aX,bf=/alpha\([^)]*\)/i,aT=/opacity=([^)]*)/,bl=/^(top|right|bottom|left)$/,H=/^(none|table(?!-c[ea]).+)/,a0=/^margin/,a9=new RegExp("^("+by+")(.*)$","i"),X=new RegExp("^("+by+")(?!px)[a-z%]+$","i"),T=new RegExp("^([-+])=("+by+")","i"),bi={},ba={position:"absolute",visibility:"hidden",display:"block"},bB={letterSpacing:0,fontWeight:400},bR=["Top","Right","Bottom","Left"],at=["Webkit","O","Moz","ms"],aK=bH.fn.toggle;
function b(b2,b0){if(b0 in b2){return b0
}var b3=b0.charAt(0).toUpperCase()+b0.slice(1),e=b0,b1=at.length;
while(b1--){b0=at[b1]+b3;
if(b0 in b2){return b0
}}return e
}function R(b0,e){b0=e||b0;
return bH.css(b0,"display")==="none"||!bH.contains(b0.ownerDocument,b0)
}function t(b4,e){var b3,b5,b0=[],b1=0,b2=b4.length;
for(;
b1<b2;
b1++){b3=b4[b1];
if(!b3.style){continue
}b0[b1]=bH._data(b3,"olddisplay");
if(e){if(!b0[b1]&&b3.style.display==="none"){b3.style.display=""
}if(b3.style.display===""&&R(b3)){b0[b1]=bH._data(b3,"olddisplay",bD(b3.nodeName))
}}else{b5=F(b3,"display");
if(!b0[b1]&&b5!=="none"){bH._data(b3,"olddisplay",b5)
}}}for(b1=0;
b1<b2;
b1++){b3=b4[b1];
if(!b3.style){continue
}if(!e||b3.style.display==="none"||b3.style.display===""){b3.style.display=e?b0[b1]||"":"none"
}}return b4
}bH.fn.extend({css:function(e,b0){return bH.access(this,function(b2,b1,b3){return b3!==aC?bH.style(b2,b1,b3):bH.css(b2,b1)
},e,b0,arguments.length>1)
},show:function(){return t(this,true)
},hide:function(){return t(this)
},toggle:function(b1,b0){var e=typeof b1==="boolean";
if(bH.isFunction(b1)&&bH.isFunction(b0)){return aK.apply(this,arguments)
}return this.each(function(){if(e?b1:R(this)){bH(this).show()
}else{bH(this).hide()
}})
}});
bH.extend({cssHooks:{opacity:{get:function(b1,b0){if(b0){var e=F(b1,"opacity");
return e===""?"1":e
}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":bH.support.cssFloat?"cssFloat":"styleFloat"},style:function(b2,b1,b8,b3){if(!b2||b2.nodeType===3||b2.nodeType===8||!b2.style){return
}var b6,b7,b9,b4=bH.camelCase(b1),b0=b2.style;
b1=bH.cssProps[b4]||(bH.cssProps[b4]=b(b0,b4));
b9=bH.cssHooks[b1]||bH.cssHooks[b4];
if(b8!==aC){b7=typeof b8;
if(b7==="string"&&(b6=T.exec(b8))){b8=(b6[1]+1)*b6[2]+parseFloat(bH.css(b2,b1));
b7="number"
}if(b8==null||b7==="number"&&isNaN(b8)){return
}if(b7==="number"&&!bH.cssNumber[b4]){b8+="px"
}if(!b9||!("set" in b9)||(b8=b9.set(b2,b8,b3))!==aC){try{b0[b1]=b8
}catch(b5){}}}else{if(b9&&"get" in b9&&(b6=b9.get(b2,false,b3))!==aC){return b6
}return b0[b1]
}},css:function(b5,b3,b4,b0){var b6,b2,e,b1=bH.camelCase(b3);
b3=bH.cssProps[b1]||(bH.cssProps[b1]=b(b5.style,b1));
e=bH.cssHooks[b3]||bH.cssHooks[b1];
if(e&&"get" in e){b6=e.get(b5,true,b0)
}if(b6===aC){b6=F(b5,b3)
}if(b6==="normal"&&b3 in bB){b6=bB[b3]
}if(b4||b0!==aC){b2=parseFloat(b6);
return b4||bH.isNumeric(b2)?b2||0:b6
}return b6
},swap:function(b3,b2,b4){var b1,b0,e={};
for(b0 in b2){e[b0]=b3.style[b0];
b3.style[b0]=b2[b0]
}b1=b4.call(b3);
for(b0 in b2){b3.style[b0]=e[b0]
}return b1
}});
if(a3.getComputedStyle){F=function(b6,b0){var e,b3,b2,b5,b4=a3.getComputedStyle(b6,null),b1=b6.style;
if(b4){e=b4[b0];
if(e===""&&!bH.contains(b6.ownerDocument,b6)){e=bH.style(b6,b0)
}if(X.test(e)&&a0.test(b0)){b3=b1.width;
b2=b1.minWidth;
b5=b1.maxWidth;
b1.minWidth=b1.maxWidth=b1.width=e;
e=b4.width;
b1.width=b3;
b1.minWidth=b2;
b1.maxWidth=b5
}}return e
}
}else{if(p.documentElement.currentStyle){F=function(b3,b1){var b4,e,b0=b3.currentStyle&&b3.currentStyle[b1],b2=b3.style;
if(b0==null&&b2&&b2[b1]){b0=b2[b1]
}if(X.test(b0)&&!bl.test(b1)){b4=b2.left;
e=b3.runtimeStyle&&b3.runtimeStyle.left;
if(e){b3.runtimeStyle.left=b3.currentStyle.left
}b2.left=b1==="fontSize"?"1em":b0;
b0=b2.pixelLeft+"px";
b2.left=b4;
if(e){b3.runtimeStyle.left=e
}}return b0===""?"auto":b0
}
}}function aH(e,b1,b2){var b0=a9.exec(b1);
return b0?Math.max(0,b0[1]-(b2||0))+(b0[2]||"px"):b1
}function au(b2,b0,e,b4){var b1=e===(b4?"border":"content")?4:b0==="width"?1:0,b3=0;
for(;
b1<4;
b1+=2){if(e==="margin"){b3+=bH.css(b2,e+bR[b1],true)
}if(b4){if(e==="content"){b3-=parseFloat(F(b2,"padding"+bR[b1]))||0
}if(e!=="margin"){b3-=parseFloat(F(b2,"border"+bR[b1]+"Width"))||0
}}else{b3+=parseFloat(F(b2,"padding"+bR[b1]))||0;
if(e!=="padding"){b3+=parseFloat(F(b2,"border"+bR[b1]+"Width"))||0
}}}return b3
}function v(b2,b0,e){var b3=b0==="width"?b2.offsetWidth:b2.offsetHeight,b1=true,b4=bH.support.boxSizing&&bH.css(b2,"boxSizing")==="border-box";
if(b3<=0||b3==null){b3=F(b2,b0);
if(b3<0||b3==null){b3=b2.style[b0]
}if(X.test(b3)){return b3
}b1=b4&&(bH.support.boxSizingReliable||b3===b2.style[b0]);
b3=parseFloat(b3)||0
}return(b3+au(b2,b0,e||(b4?"border":"content"),b1))+"px"
}function bD(b1){if(bi[b1]){return bi[b1]
}var e=bH("<"+b1+">").appendTo(p.body),b0=e.css("display");
e.remove();
if(b0==="none"||b0===""){aA=p.body.appendChild(aA||bH.extend(p.createElement("iframe"),{frameBorder:0,width:0,height:0}));
if(!aX||!aA.createElement){aX=(aA.contentWindow||aA.contentDocument).document;
aX.write("<!doctype html><html><body>");
aX.close()
}e=aX.body.appendChild(aX.createElement(b1));
b0=F(e,"display");
p.body.removeChild(aA)
}bi[b1]=b0;
return b0
}bH.each(["height","width"],function(b0,e){bH.cssHooks[e]={get:function(b3,b2,b1){if(b2){if(b3.offsetWidth===0&&H.test(F(b3,"display"))){return bH.swap(b3,ba,function(){return v(b3,e,b1)
})
}else{return v(b3,e,b1)
}}},set:function(b2,b3,b1){return aH(b2,b3,b1?au(b2,e,b1,bH.support.boxSizing&&bH.css(b2,"boxSizing")==="border-box"):0)
}}
});
if(!bH.support.opacity){bH.cssHooks.opacity={get:function(b0,e){return aT.test((e&&b0.currentStyle?b0.currentStyle.filter:b0.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":e?"1":""
},set:function(b3,b4){var b2=b3.style,b0=b3.currentStyle,e=bH.isNumeric(b4)?"alpha(opacity="+b4*100+")":"",b1=b0&&b0.filter||b2.filter||"";
b2.zoom=1;
if(b4>=1&&bH.trim(b1.replace(bf,""))===""&&b2.removeAttribute){b2.removeAttribute("filter");
if(b0&&!b0.filter){return
}}b2.filter=bf.test(b1)?b1.replace(bf,e):b1+" "+e
}}
}bH(function(){if(!bH.support.reliableMarginRight){bH.cssHooks.marginRight={get:function(b0,e){return bH.swap(b0,{display:"inline-block"},function(){if(e){return F(b0,"marginRight")
}})
}}
}if(!bH.support.pixelPosition&&bH.fn.position){bH.each(["top","left"],function(e,b0){bH.cssHooks[b0]={get:function(b3,b2){if(b2){var b1=F(b3,b0);
return X.test(b1)?bH(b3).position()[b0]+"px":b1
}}}
})
}});
if(bH.expr&&bH.expr.filters){bH.expr.filters.hidden=function(e){return(e.offsetWidth===0&&e.offsetHeight===0)||(!bH.support.reliableHiddenOffsets&&((e.style&&e.style.display)||F(e,"display"))==="none")
};
bH.expr.filters.visible=function(e){return !bH.expr.filters.hidden(e)
}
}bH.each({margin:"",padding:"",border:"Width"},function(e,b0){bH.cssHooks[e+b0]={expand:function(b3){var b2,b4=typeof b3==="string"?b3.split(" "):[b3],b1={};
for(b2=0;
b2<4;
b2++){b1[e+bR[b2]+b0]=b4[b2]||b4[b2-2]||b4[0]
}return b1
}};
if(!a0.test(e)){bH.cssHooks[e+b0].set=aH
}});
var bt=/%20/g,aQ=/\[\]$/,V=/\r?\n/g,bA=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,aE=/^(?:select|textarea)/i;
bH.fn.extend({serialize:function(){return bH.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?bH.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||aE.test(this.nodeName)||bA.test(this.type))
}).map(function(e,b0){var b1=bH(this).val();
return b1==null?null:bH.isArray(b1)?bH.map(b1,function(b3,b2){return{name:b0.name,value:b3.replace(V,"\r\n")}
}):{name:b0.name,value:b1.replace(V,"\r\n")}
}).get()
}});
bH.param=function(e,b1){var b2,b0=[],b3=function(b4,b5){b5=bH.isFunction(b5)?b5():(b5==null?"":b5);
b0[b0.length]=encodeURIComponent(b4)+"="+encodeURIComponent(b5)
};
if(b1===aC){b1=bH.ajaxSettings&&bH.ajaxSettings.traditional
}if(bH.isArray(e)||(e.jquery&&!bH.isPlainObject(e))){bH.each(e,function(){b3(this.name,this.value)
})
}else{for(b2 in e){l(b2,e[b2],b1,b3)
}}return b0.join("&").replace(bt,"+")
};
function l(b1,b3,b0,b2){var e;
if(bH.isArray(b3)){bH.each(b3,function(b5,b4){if(b0||aQ.test(b1)){b2(b1,b4)
}else{l(b1+"["+(typeof b4==="object"?b5:"")+"]",b4,b0,b2)
}})
}else{if(!b0&&bH.type(b3)==="object"){for(e in b3){l(b1+"["+e+"]",b3[e],b0,b2)
}}else{b2(b1,b3)
}}}var bY,Z,ao=/#.*$/,ae=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,C=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,s=/^(?:GET|HEAD)$/,aD=/^\/\//,bO=/\?/,h=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Q=/([?&])_=[^&]*/,aU=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,bX=bH.fn.load,w={},a7={},aY=["*/"]+["*"];
try{Z=aJ.href
}catch(be){Z=p.createElement("a");
Z.href="";
Z=Z.href
}bY=aU.exec(Z.toLowerCase())||[];
function bJ(e){return function(b3,b5){if(typeof b3!=="string"){b5=b3;
b3="*"
}var b0,b6,b7,b2=b3.toLowerCase().split(aW),b1=0,b4=b2.length;
if(bH.isFunction(b5)){for(;
b1<b4;
b1++){b0=b2[b1];
b7=/^\+/.test(b0);
if(b7){b0=b0.substr(1)||"*"
}b6=e[b0]=e[b0]||[];
b6[b7?"unshift":"push"](b5)
}}}
}function r(b0,b9,b4,b7,b6,b2){b6=b6||b9.dataTypes[0];
b2=b2||{};
b2[b6]=true;
var b8,b5=b0[b6],b1=0,e=b5?b5.length:0,b3=(b0===w);
for(;
b1<e&&(b3||!b8);
b1++){b8=b5[b1](b9,b4,b7);
if(typeof b8==="string"){if(!b3||b2[b8]){b8=aC
}else{b9.dataTypes.unshift(b8);
b8=r(b0,b9,b4,b7,b8,b2)
}}}if((b3||!b8)&&!b2["*"]){b8=r(b0,b9,b4,b7,"*",b2)
}return b8
}function u(b1,b2){var b0,e,b3=bH.ajaxSettings.flatOptions||{};
for(b0 in b2){if(b2[b0]!==aC){(b3[b0]?b1:(e||(e={})))[b0]=b2[b0]
}}if(e){bH.extend(true,b1,e)
}}bH.fn.load=function(b2,b5,b6){if(typeof b2!=="string"&&bX){return bX.apply(this,arguments)
}if(!this.length){return this
}var e,b3,b1,b0=this,b4=b2.indexOf(" ");
if(b4>=0){e=b2.slice(b4,b2.length);
b2=b2.slice(0,b4)
}if(bH.isFunction(b5)){b6=b5;
b5=aC
}else{if(b5&&typeof b5==="object"){b3="POST"
}}bH.ajax({url:b2,type:b3,dataType:"html",data:b5,complete:function(b8,b7){if(b6){b0.each(b6,b1||[b8.responseText,b7,b8])
}}}).done(function(b7){b1=arguments;
b0.html(e?bH("<div>").append(b7.replace(h,"")).find(e):b7)
});
return this
};
bH.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,b0){bH.fn[b0]=function(b1){return this.on(b0,b1)
}
});
bH.each(["get","post"],function(e,b0){bH[b0]=function(b1,b3,b4,b2){if(bH.isFunction(b3)){b2=b2||b4;
b4=b3;
b3=aC
}return bH.ajax({type:b0,url:b1,data:b3,success:b4,dataType:b2})
}
});
bH.extend({getScript:function(e,b0){return bH.get(e,aC,b0,"script")
},getJSON:function(e,b0,b1){return bH.get(e,b0,b1,"json")
},ajaxSetup:function(b0,e){if(e){u(b0,bH.ajaxSettings)
}else{e=b0;
b0=bH.ajaxSettings
}u(b0,e);
return b0
},ajaxSettings:{url:Z,isLocal:C.test(bY[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":aY},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a3.String,"text html":true,"text json":bH.parseJSON,"text xml":bH.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:bJ(w),ajaxTransport:bJ(a7),ajax:function(b5,b2){if(typeof b5==="object"){b2=b5;
b5=aC
}b2=b2||{};
var b8,cm,b3,ch,ca,ce,b1,cg,b9=bH.ajaxSetup({},b2),co=b9.context||b9,cc=co!==b9&&(co.nodeType||co instanceof bH)?bH(co):bH.event,cn=bH.Deferred(),cj=bH.Callbacks("once memory"),b6=b9.statusCode||{},cd={},ck={},b4=0,b7="canceled",cf={readyState:0,setRequestHeader:function(cp,cq){if(!b4){var e=cp.toLowerCase();
cp=ck[e]=ck[e]||cp;
cd[cp]=cq
}return this
},getAllResponseHeaders:function(){return b4===2?cm:null
},getResponseHeader:function(cp){var e;
if(b4===2){if(!b3){b3={};
while((e=ae.exec(cm))){b3[e[1].toLowerCase()]=e[2]
}}e=b3[cp.toLowerCase()]
}return e===aC?null:e
},overrideMimeType:function(e){if(!b4){b9.mimeType=e
}return this
},abort:function(e){e=e||b7;
if(ch){ch.abort(e)
}cb(0,e);
return this
}};
function cb(ct,cp,cu,cr){var e,cx,cv,cs,cw,cq=cp;
if(b4===2){return
}b4=2;
if(ca){clearTimeout(ca)
}ch=aC;
cm=cr||"";
cf.readyState=ct>0?4:0;
if(cu){cs=i(b9,cf,cu)
}if(ct>=200&&ct<300||ct===304){if(b9.ifModified){cw=cf.getResponseHeader("Last-Modified");
if(cw){bH.lastModified[b8]=cw
}cw=cf.getResponseHeader("Etag");
if(cw){bH.etag[b8]=cw
}}if(ct===304){cq="notmodified";
e=true
}else{e=af(b9,cs);
cq=e.state;
cx=e.data;
cv=e.error;
e=!cv
}}else{cv=cq;
if(!cq||ct){cq="error";
if(ct<0){ct=0
}}}cf.status=ct;
cf.statusText=(cp||cq)+"";
if(e){cn.resolveWith(co,[cx,cq,cf])
}else{cn.rejectWith(co,[cf,cq,cv])
}cf.statusCode(b6);
b6=aC;
if(b1){cc.trigger("ajax"+(e?"Success":"Error"),[cf,b9,e?cx:cv])
}cj.fireWith(co,[cf,cq]);
if(b1){cc.trigger("ajaxComplete",[cf,b9]);
if(!(--bH.active)){bH.event.trigger("ajaxStop")
}}}cn.promise(cf);
cf.success=cf.done;
cf.error=cf.fail;
cf.complete=cj.add;
cf.statusCode=function(cp){if(cp){var e;
if(b4<2){for(e in cp){b6[e]=[b6[e],cp[e]]
}}else{e=cp[cf.status];
cf.always(e)
}}return this
};
b9.url=((b5||b9.url)+"").replace(ao,"").replace(aD,bY[1]+"//");
b9.dataTypes=bH.trim(b9.dataType||"*").toLowerCase().split(aW);
if(b9.crossDomain==null){ce=aU.exec(b9.url.toLowerCase())||false;
b9.crossDomain=ce&&(ce.join(":")+(ce[3]?"":ce[1]==="http:"?80:443))!==(bY.join(":")+(bY[3]?"":bY[1]==="http:"?80:443))
}if(b9.data&&b9.processData&&typeof b9.data!=="string"){b9.data=bH.param(b9.data,b9.traditional)
}r(w,b9,b2,cf);
if(b4===2){return cf
}b1=b9.global;
b9.type=b9.type.toUpperCase();
b9.hasContent=!s.test(b9.type);
if(b1&&bH.active++===0){bH.event.trigger("ajaxStart")
}if(!b9.hasContent){if(b9.data){b9.url+=(bO.test(b9.url)?"&":"?")+b9.data;
delete b9.data
}b8=b9.url;
if(b9.cache===false){var b0=bH.now(),cl=b9.url.replace(Q,"$1_="+b0);
b9.url=cl+((cl===b9.url)?(bO.test(b9.url)?"&":"?")+"_="+b0:"")
}}if(b9.data&&b9.hasContent&&b9.contentType!==false||b2.contentType){cf.setRequestHeader("Content-Type",b9.contentType)
}if(b9.ifModified){b8=b8||b9.url;
if(bH.lastModified[b8]){cf.setRequestHeader("If-Modified-Since",bH.lastModified[b8])
}if(bH.etag[b8]){cf.setRequestHeader("If-None-Match",bH.etag[b8])
}}cf.setRequestHeader("Accept",b9.dataTypes[0]&&b9.accepts[b9.dataTypes[0]]?b9.accepts[b9.dataTypes[0]]+(b9.dataTypes[0]!=="*"?", "+aY+"; q=0.01":""):b9.accepts["*"]);
for(cg in b9.headers){cf.setRequestHeader(cg,b9.headers[cg])
}if(b9.beforeSend&&(b9.beforeSend.call(co,cf,b9)===false||b4===2)){return cf.abort()
}b7="abort";
for(cg in {success:1,error:1,complete:1}){cf[cg](b9[cg])
}ch=r(a7,b9,b2,cf);
if(!ch){cb(-1,"No Transport")
}else{cf.readyState=1;
if(b1){cc.trigger("ajaxSend",[cf,b9])
}if(b9.async&&b9.timeout>0){ca=setTimeout(function(){cf.abort("timeout")
},b9.timeout)
}try{b4=1;
ch.send(cd,cb)
}catch(ci){if(b4<2){cb(-1,ci)
}else{throw ci
}}}return cf
},active:0,lastModified:{},etag:{}});
function i(b8,b7,b4){var b3,b5,b2,e,b0=b8.contents,b6=b8.dataTypes,b1=b8.responseFields;
for(b5 in b1){if(b5 in b4){b7[b1[b5]]=b4[b5]
}}while(b6[0]==="*"){b6.shift();
if(b3===aC){b3=b8.mimeType||b7.getResponseHeader("content-type")
}}if(b3){for(b5 in b0){if(b0[b5]&&b0[b5].test(b3)){b6.unshift(b5);
break
}}}if(b6[0] in b4){b2=b6[0]
}else{for(b5 in b4){if(!b6[0]||b8.converters[b5+" "+b6[0]]){b2=b5;
break
}if(!e){e=b5
}}b2=b2||e
}if(b2){if(b2!==b6[0]){b6.unshift(b2)
}return b4[b2]
}}function af(ca,b2){var b8,b0,b6,b4,b7=ca.dataTypes.slice(),b1=b7[0],b9={},b3=0;
if(ca.dataFilter){b2=ca.dataFilter(b2,ca.dataType)
}if(b7[1]){for(b8 in ca.converters){b9[b8.toLowerCase()]=ca.converters[b8]
}}for(;
(b6=b7[++b3]);
){if(b6!=="*"){if(b1!=="*"&&b1!==b6){b8=b9[b1+" "+b6]||b9["* "+b6];
if(!b8){for(b0 in b9){b4=b0.split(" ");
if(b4[1]===b6){b8=b9[b1+" "+b4[0]]||b9["* "+b4[0]];
if(b8){if(b8===true){b8=b9[b0]
}else{if(b9[b0]!==true){b6=b4[0];
b7.splice(b3--,0,b6)
}}break
}}}}if(b8!==true){if(b8&&ca["throws"]){b2=b8(b2)
}else{try{b2=b8(b2)
}catch(b5){return{state:"parsererror",error:b8?b5:"No conversion from "+b1+" to "+b6}
}}}}b1=b6
}}return{state:"success",data:b2}
}var bq=[],ax=/\?/,a6=/(=)\?(?=&|$)|\?\?/,bm=bH.now();
bH.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=bq.pop()||(bH.expando+"_"+(bm++));
this[e]=true;
return e
}});
bH.ajaxPrefilter("json jsonp",function(b9,b4,b8){var b7,e,b6,b2=b9.data,b0=b9.url,b1=b9.jsonp!==false,b5=b1&&a6.test(b0),b3=b1&&!b5&&typeof b2==="string"&&!(b9.contentType||"").indexOf("application/x-www-form-urlencoded")&&a6.test(b2);
if(b9.dataTypes[0]==="jsonp"||b5||b3){b7=b9.jsonpCallback=bH.isFunction(b9.jsonpCallback)?b9.jsonpCallback():b9.jsonpCallback;
e=a3[b7];
if(b5){b9.url=b0.replace(a6,"$1"+b7)
}else{if(b3){b9.data=b2.replace(a6,"$1"+b7)
}else{if(b1){b9.url+=(ax.test(b0)?"&":"?")+b9.jsonp+"="+b7
}}}b9.converters["script json"]=function(){if(!b6){bH.error(b7+" was not called")
}return b6[0]
};
b9.dataTypes[0]="json";
a3[b7]=function(){b6=arguments
};
b8.always(function(){a3[b7]=e;
if(b9[b7]){b9.jsonpCallback=b4.jsonpCallback;
bq.push(b7)
}if(b6&&bH.isFunction(e)){e(b6[0])
}b6=e=aC
});
return"script"
}});
bH.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){bH.globalEval(e);
return e
}}});
bH.ajaxPrefilter("script",function(e){if(e.cache===aC){e.cache=false
}if(e.crossDomain){e.type="GET";
e.global=false
}});
bH.ajaxTransport("script",function(b1){if(b1.crossDomain){var e,b0=p.head||p.getElementsByTagName("head")[0]||p.documentElement;
return{send:function(b2,b3){e=p.createElement("script");
e.async="async";
if(b1.scriptCharset){e.charset=b1.scriptCharset
}e.src=b1.url;
e.onload=e.onreadystatechange=function(b5,b4){if(b4||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;
if(b0&&e.parentNode){b0.removeChild(e)
}e=aC;
if(!b4){b3(200,"success")
}}};
b0.insertBefore(e,b0.firstChild)
},abort:function(){if(e){e.onload(0,1)
}}}
}});
var ai,aO=a3.ActiveXObject?function(){for(var e in ai){ai[e](0,1)
}}:false,av=0;
function bC(){try{return new a3.XMLHttpRequest()
}catch(b0){}}function bc(){try{return new a3.ActiveXObject("Microsoft.XMLHTTP")
}catch(b0){}}bH.ajaxSettings.xhr=a3.ActiveXObject?function(){return !this.isLocal&&bC()||bc()
}:bC;
(function(e){bH.extend(bH.support,{ajax:!!e,cors:!!e&&("withCredentials" in e)})
})(bH.ajaxSettings.xhr());
if(bH.support.ajax){bH.ajaxTransport(function(e){if(!e.crossDomain||bH.support.cors){var b0;
return{send:function(b6,b1){var b4,b3,b5=e.xhr();
if(e.username){b5.open(e.type,e.url,e.async,e.username,e.password)
}else{b5.open(e.type,e.url,e.async)
}if(e.xhrFields){for(b3 in e.xhrFields){b5[b3]=e.xhrFields[b3]
}}if(e.mimeType&&b5.overrideMimeType){b5.overrideMimeType(e.mimeType)
}if(!e.crossDomain&&!b6["X-Requested-With"]){b6["X-Requested-With"]="XMLHttpRequest"
}try{for(b3 in b6){b5.setRequestHeader(b3,b6[b3])
}}catch(b2){}b5.send((e.hasContent&&e.data)||null);
b0=function(cf,b9){var ca,b8,b7,cd,cc;
try{if(b0&&(b9||b5.readyState===4)){b0=aC;
if(b4){b5.onreadystatechange=bH.noop;
if(aO){delete ai[b4]
}}if(b9){if(b5.readyState!==4){b5.abort()
}}else{ca=b5.status;
b7=b5.getAllResponseHeaders();
cd={};
cc=b5.responseXML;
if(cc&&cc.documentElement){cd.xml=cc
}try{cd.text=b5.responseText
}catch(cf){}try{b8=b5.statusText
}catch(ce){b8=""
}if(!ca&&e.isLocal&&!e.crossDomain){ca=cd.text?200:404
}else{if(ca===1223){ca=204
}}}}}catch(cb){if(!b9){b1(-1,cb)
}}if(cd){b1(ca,b8,cd,b7)
}};
if(!e.async){b0()
}else{if(b5.readyState===4){setTimeout(b0,0)
}else{b4=++av;
if(aO){if(!ai){ai={};
bH(a3).unload(aO)
}ai[b4]=b0
}b5.onreadystatechange=b0
}}},abort:function(){if(b0){b0(0,1)
}}}
}})
}var M,ac,bP=/^(?:toggle|show|hide)$/,bI=new RegExp("^(?:([-+])=|)("+by+")([a-z%]*)$","i"),bN=/queueHooks$/,ay=[j],a2={"*":[function(e,b6){var b2,b7,b8=this.createTween(e,b6),b3=bI.exec(b6),b4=b8.cur(),b0=+b4||0,b1=1,b5=20;
if(b3){b2=+b3[2];
b7=b3[3]||(bH.cssNumber[e]?"":"px");
if(b7!=="px"&&b0){b0=bH.css(b8.elem,e,true)||b2||1;
do{b1=b1||".5";
b0=b0/b1;
bH.style(b8.elem,e,b0+b7)
}while(b1!==(b1=b8.cur()/b4)&&b1!==1&&--b5)
}b8.unit=b7;
b8.start=b0;
b8.end=b3[1]?b0+(b3[1]+1)*b2:b2
}return b8
}]};
function bk(){setTimeout(function(){M=aC
},0);
return(M=bH.now())
}function bd(b0,e){bH.each(e,function(b5,b3){var b4=(a2[b5]||[]).concat(a2["*"]),b1=0,b2=b4.length;
for(;
b1<b2;
b1++){if(b4[b1].call(b0,b5,b3)){return
}}})
}function f(b1,b5,b8){var b9,b4=0,e=0,b0=ay.length,b7=bH.Deferred().always(function(){delete b3.elem
}),b3=function(){var ce=M||bk(),cb=Math.max(0,b2.startTime+b2.duration-ce),cd=1-(cb/b2.duration||0),ca=0,cc=b2.tweens.length;
for(;
ca<cc;
ca++){b2.tweens[ca].run(cd)
}b7.notifyWith(b1,[b2,cd,cb]);
if(cd<1&&cc){return cb
}else{b7.resolveWith(b1,[b2]);
return false
}},b2=b7.promise({elem:b1,props:bH.extend({},b5),opts:bH.extend(true,{specialEasing:{}},b8),originalProperties:b5,originalOptions:b8,startTime:M||bk(),duration:b8.duration,tweens:[],createTween:function(cd,ca,cc){var cb=bH.Tween(b1,b2.opts,cd,ca,b2.opts.specialEasing[cd]||b2.opts.easing);
b2.tweens.push(cb);
return cb
},stop:function(cb){var ca=0,cc=cb?b2.tweens.length:0;
for(;
ca<cc;
ca++){b2.tweens[ca].run(1)
}if(cb){b7.resolveWith(b1,[b2,cb])
}else{b7.rejectWith(b1,[b2,cb])
}return this
}}),b6=b2.props;
al(b6,b2.opts.specialEasing);
for(;
b4<b0;
b4++){b9=ay[b4].call(b2,b1,b6,b2.opts);
if(b9){return b9
}}bd(b2,b6);
if(bH.isFunction(b2.opts.start)){b2.opts.start.call(b1,b2)
}bH.fx.timer(bH.extend(b3,{anim:b2,queue:b2.opts.queue,elem:b1}));
return b2.progress(b2.opts.progress).done(b2.opts.done,b2.opts.complete).fail(b2.opts.fail).always(b2.opts.always)
}function al(b2,b4){var b1,b0,b5,b3,e;
for(b1 in b2){b0=bH.camelCase(b1);
b5=b4[b0];
b3=b2[b1];
if(bH.isArray(b3)){b5=b3[1];
b3=b2[b1]=b3[0]
}if(b1!==b0){b2[b0]=b3;
delete b2[b1]
}e=bH.cssHooks[b0];
if(e&&"expand" in e){b3=e.expand(b3);
delete b2[b0];
for(b1 in b3){if(!(b1 in b2)){b2[b1]=b3[b1];
b4[b1]=b5
}}}else{b4[b0]=b5
}}}bH.Animation=bH.extend(f,{tweener:function(b0,b3){if(bH.isFunction(b0)){b3=b0;
b0=["*"]
}else{b0=b0.split(" ")
}var b2,e=0,b1=b0.length;
for(;
e<b1;
e++){b2=b0[e];
a2[b2]=a2[b2]||[];
a2[b2].unshift(b3)
}},prefilter:function(b0,e){if(e){ay.unshift(b0)
}else{ay.push(b0)
}}});
function j(b3,b8,e){var b7,b1,ca,b2,ce,cd,cc,cb,b4=this,b0=b3.style,b9={},b6=[],b5=b3.nodeType&&R(b3);
if(!e.queue){cc=bH._queueHooks(b3,"fx");
if(cc.unqueued==null){cc.unqueued=0;
cb=cc.empty.fire;
cc.empty.fire=function(){if(!cc.unqueued){cb()
}}
}cc.unqueued++;
b4.always(function(){b4.always(function(){cc.unqueued--;
if(!bH.queue(b3,"fx").length){cc.empty.fire()
}})
})
}if(b3.nodeType===1&&("height" in b8||"width" in b8)){e.overflow=[b0.overflow,b0.overflowX,b0.overflowY];
if(bH.css(b3,"display")==="inline"&&bH.css(b3,"float")==="none"){if(!bH.support.inlineBlockNeedsLayout||bD(b3.nodeName)==="inline"){b0.display="inline-block"
}else{b0.zoom=1
}}}if(e.overflow){b0.overflow="hidden";
if(!bH.support.shrinkWrapBlocks){b4.done(function(){b0.overflow=e.overflow[0];
b0.overflowX=e.overflow[1];
b0.overflowY=e.overflow[2]
})
}}for(b7 in b8){ca=b8[b7];
if(bP.exec(ca)){delete b8[b7];
if(ca===(b5?"hide":"show")){continue
}b6.push(b7)
}}b2=b6.length;
if(b2){ce=bH._data(b3,"fxshow")||bH._data(b3,"fxshow",{});
if(b5){bH(b3).show()
}else{b4.done(function(){bH(b3).hide()
})
}b4.done(function(){var cf;
bH.removeData(b3,"fxshow",true);
for(cf in b9){bH.style(b3,cf,b9[cf])
}});
for(b7=0;
b7<b2;
b7++){b1=b6[b7];
cd=b4.createTween(b1,b5?ce[b1]:0);
b9[b1]=ce[b1]||bH.style(b3,b1);
if(!(b1 in ce)){ce[b1]=cd.start;
if(b5){cd.end=cd.start;
cd.start=b1==="width"||b1==="height"?1:0
}}}}}function I(b1,b0,b3,e,b2){return new I.prototype.init(b1,b0,b3,e,b2)
}bH.Tween=I;
I.prototype={constructor:I,init:function(b2,b0,b4,e,b3,b1){this.elem=b2;
this.prop=b4;
this.easing=b3||"swing";
this.options=b0;
this.start=this.now=this.cur();
this.end=e;
this.unit=b1||(bH.cssNumber[b4]?"":"px")
},cur:function(){var e=I.propHooks[this.prop];
return e&&e.get?e.get(this):I.propHooks._default.get(this)
},run:function(b1){var b0,e=I.propHooks[this.prop];
if(this.options.duration){this.pos=b0=bH.easing[this.easing](b1,this.options.duration*b1,0,1,this.options.duration)
}else{this.pos=b0=b1
}this.now=(this.end-this.start)*b0+this.start;
if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(e&&e.set){e.set(this)
}else{I.propHooks._default.set(this)
}return this
}};
I.prototype.init.prototype=I.prototype;
I.propHooks={_default:{get:function(b0){var e;
if(b0.elem[b0.prop]!=null&&(!b0.elem.style||b0.elem.style[b0.prop]==null)){return b0.elem[b0.prop]
}e=bH.css(b0.elem,b0.prop,false,"");
return !e||e==="auto"?0:e
},set:function(e){if(bH.fx.step[e.prop]){bH.fx.step[e.prop](e)
}else{if(e.elem.style&&(e.elem.style[bH.cssProps[e.prop]]!=null||bH.cssHooks[e.prop])){bH.style(e.elem,e.prop,e.now+e.unit)
}else{e.elem[e.prop]=e.now
}}}}};
I.propHooks.scrollTop=I.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now
}}};
bH.each(["toggle","show","hide"],function(b0,e){var b1=bH.fn[e];
bH.fn[e]=function(b2,b4,b3){return b2==null||typeof b2==="boolean"||(!b0&&bH.isFunction(b2)&&bH.isFunction(b4))?b1.apply(this,arguments):this.animate(bG(e,true),b2,b4,b3)
}
});
bH.fn.extend({fadeTo:function(e,b2,b1,b0){return this.filter(R).css("opacity",0).show().end().animate({opacity:b2},e,b1,b0)
},animate:function(b5,b2,b4,b3){var b1=bH.isEmptyObject(b5),e=bH.speed(b2,b4,b3),b0=function(){var b6=f(this,bH.extend({},b5),e);
if(b1){b6.stop(true)
}};
return b1||e.queue===false?this.each(b0):this.queue(e.queue,b0)
},stop:function(b1,b0,e){var b2=function(b3){var b4=b3.stop;
delete b3.stop;
b4(e)
};
if(typeof b1!=="string"){e=b0;
b0=b1;
b1=aC
}if(b0&&b1!==false){this.queue(b1||"fx",[])
}return this.each(function(){var b6=true,b3=b1!=null&&b1+"queueHooks",b5=bH.timers,b4=bH._data(this);
if(b3){if(b4[b3]&&b4[b3].stop){b2(b4[b3])
}}else{for(b3 in b4){if(b4[b3]&&b4[b3].stop&&bN.test(b3)){b2(b4[b3])
}}}for(b3=b5.length;
b3--;
){if(b5[b3].elem===this&&(b1==null||b5[b3].queue===b1)){b5[b3].anim.stop(e);
b6=false;
b5.splice(b3,1)
}}if(b6||!e){bH.dequeue(this,b1)
}})
}});
function bG(b1,b3){var b2,e={height:b1},b0=0;
b3=b3?1:0;
for(;
b0<4;
b0+=2-b3){b2=bR[b0];
e["margin"+b2]=e["padding"+b2]=b1
}if(b3){e.opacity=e.width=b1
}return e
}bH.each({slideDown:bG("show"),slideUp:bG("hide"),slideToggle:bG("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,b0){bH.fn[e]=function(b1,b3,b2){return this.animate(b0,b1,b3,b2)
}
});
bH.speed=function(b1,b2,b0){var e=b1&&typeof b1==="object"?bH.extend({},b1):{complete:b0||!b0&&b2||bH.isFunction(b1)&&b1,duration:b1,easing:b0&&b2||b2&&!bH.isFunction(b2)&&b2};
e.duration=bH.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in bH.fx.speeds?bH.fx.speeds[e.duration]:bH.fx.speeds._default;
if(e.queue==null||e.queue===true){e.queue="fx"
}e.old=e.complete;
e.complete=function(){if(bH.isFunction(e.old)){e.old.call(this)
}if(e.queue){bH.dequeue(this,e.queue)
}};
return e
};
bH.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}};
bH.timers=[];
bH.fx=I.prototype.init;
bH.fx.tick=function(){var b1,b0=bH.timers,e=0;
for(;
e<b0.length;
e++){b1=b0[e];
if(!b1()&&b0[e]===b1){b0.splice(e--,1)
}}if(!b0.length){bH.fx.stop()
}};
bH.fx.timer=function(e){if(e()&&bH.timers.push(e)&&!ac){ac=setInterval(bH.fx.tick,bH.fx.interval)
}};
bH.fx.interval=13;
bH.fx.stop=function(){clearInterval(ac);
ac=null
};
bH.fx.speeds={slow:600,fast:200,_default:400};
bH.fx.step={};
if(bH.expr&&bH.expr.filters){bH.expr.filters.animated=function(e){return bH.grep(bH.timers,function(b0){return e===b0.elem
}).length
}
}var bn=/^(?:body|html)$/i;
bH.fn.offset=function(b9){if(arguments.length){return b9===aC?this:this.each(function(ca){bH.offset.setOffset(this,b9,ca)
})
}var b0,b5,b6,b3,b7,e,b2,b4={top:0,left:0},b1=this[0],b8=b1&&b1.ownerDocument;
if(!b8){return
}if((b5=b8.body)===b1){return bH.offset.bodyOffset(b1)
}b0=b8.documentElement;
if(!bH.contains(b0,b1)){return b4
}if(typeof b1.getBoundingClientRect!=="undefined"){b4=b1.getBoundingClientRect()
}b6=bo(b8);
b3=b0.clientTop||b5.clientTop||0;
b7=b0.clientLeft||b5.clientLeft||0;
e=b6.pageYOffset||b0.scrollTop;
b2=b6.pageXOffset||b0.scrollLeft;
return{top:b4.top+e-b3,left:b4.left+b2-b7}
};
bH.offset={bodyOffset:function(e){var b1=e.offsetTop,b0=e.offsetLeft;
if(bH.support.doesNotIncludeMarginInBodyOffset){b1+=parseFloat(bH.css(e,"marginTop"))||0;
b0+=parseFloat(bH.css(e,"marginLeft"))||0
}return{top:b1,left:b0}
},setOffset:function(b2,cb,b5){var b6=bH.css(b2,"position");
if(b6==="static"){b2.style.position="relative"
}var b4=bH(b2),b0=b4.offset(),e=bH.css(b2,"top"),b9=bH.css(b2,"left"),ca=(b6==="absolute"||b6==="fixed")&&bH.inArray("auto",[e,b9])>-1,b8={},b7={},b1,b3;
if(ca){b7=b4.position();
b1=b7.top;
b3=b7.left
}else{b1=parseFloat(e)||0;
b3=parseFloat(b9)||0
}if(bH.isFunction(cb)){cb=cb.call(b2,b5,b0)
}if(cb.top!=null){b8.top=(cb.top-b0.top)+b1
}if(cb.left!=null){b8.left=(cb.left-b0.left)+b3
}if("using" in cb){cb.using.call(b2,b8)
}else{b4.css(b8)
}}};
bH.fn.extend({position:function(){if(!this[0]){return
}var b1=this[0],b0=this.offsetParent(),b2=this.offset(),e=bn.test(b0[0].nodeName)?{top:0,left:0}:b0.offset();
b2.top-=parseFloat(bH.css(b1,"marginTop"))||0;
b2.left-=parseFloat(bH.css(b1,"marginLeft"))||0;
e.top+=parseFloat(bH.css(b0[0],"borderTopWidth"))||0;
e.left+=parseFloat(bH.css(b0[0],"borderLeftWidth"))||0;
return{top:b2.top-e.top,left:b2.left-e.left}
},offsetParent:function(){return this.map(function(){var e=this.offsetParent||p.body;
while(e&&(!bn.test(e.nodeName)&&bH.css(e,"position")==="static")){e=e.offsetParent
}return e||p.body
})
}});
bH.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b1,b0){var e=/Y/.test(b0);
bH.fn[b1]=function(b2){return bH.access(this,function(b3,b6,b5){var b4=bo(b3);
if(b5===aC){return b4?(b0 in b4)?b4[b0]:b4.document.documentElement[b6]:b3[b6]
}if(b4){b4.scrollTo(!e?b5:bH(b4).scrollLeft(),e?b5:bH(b4).scrollTop())
}else{b3[b6]=b5
}},b1,b2,arguments.length,null)
}
});
function bo(e){return bH.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false
}bH.each({Height:"height",Width:"width"},function(e,b0){bH.each({padding:"inner"+e,content:b0,"":"outer"+e},function(b1,b2){bH.fn[b2]=function(b6,b5){var b4=arguments.length&&(b1||typeof b6!=="boolean"),b3=b1||(b6===true||b5===true?"margin":"border");
return bH.access(this,function(b8,b7,b9){var ca;
if(bH.isWindow(b8)){return b8.document.documentElement["client"+e]
}if(b8.nodeType===9){ca=b8.documentElement;
return Math.max(b8.body["scroll"+e],ca["scroll"+e],b8.body["offset"+e],ca["offset"+e],ca["client"+e])
}return b9===aC?bH.css(b8,b7,b9,b3):bH.style(b8,b7,b9,b3)
},b0,b4?b6:aC,b4,null)
}
})
});
a3.jQuery=a3.$=bH;
if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return bH
})
}})(window);
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{a(jQuery)
}}(function(e){var j=[],f=e(document),c=e.browser.msie&&parseInt(e.browser.version)===6&&typeof window.XMLHttpRequest!=="object",b=e.browser.msie&&parseInt(e.browser.version)===7,i=null,h=e(window),a=[];
e.modal=function(k,d){return e.modal.impl.init(k,d)
};
e.modal.close=function(){e.modal.impl.close()
};
e.modal.focus=function(d){e.modal.impl.focus(d)
};
e.modal.setContainerDimensions=function(){e.modal.impl.setContainerDimensions()
};
e.modal.setPosition=function(){e.modal.impl.setPosition()
};
e.modal.update=function(d,k){e.modal.impl.update(d,k)
};
e.fn.modal=function(d){return e.modal.impl.init(this,d)
};
e.modal.defaults={appendTo:"body",focus:true,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:false,autoPosition:true,zIndex:1000,close:true,closeHTML:'<a class="modalCloseImg" title="Close"></a>',closeClass:"simplemodal-close",escClose:true,overlayClose:true,fixed:true,position:null,persist:false,modal:true,onOpen:null,onShow:null,onClose:null};
e.modal.impl={d:{},init:function(l,d){var k=this;
if(k.d.data){return false
}i=e.browser.msie&&!e.support.boxModel;
k.o=e.extend({},e.modal.defaults,d);
k.zIndex=k.o.zIndex;
k.occb=false;
if(typeof l==="object"){l=l instanceof e?l:e(l);
k.d.placeholder=false;
if(l.parent().parent().size()>0){l.before(e("<span></span>").attr("id","simplemodal-placeholder").css({display:"none"}));
k.d.placeholder=true;
k.display=l.css("display");
if(!k.o.persist){k.d.orig=l.clone(true)
}}}else{if(typeof l==="string"||typeof l==="number"){l=e("<div></div>").html(l)
}else{alert("SimpleModal Error: Unsupported data type: "+typeof l);
return k
}}k.create(l);
l=null;
k.open();
if(e.isFunction(k.o.onShow)){k.o.onShow.apply(k,[k.d])
}return k
},create:function(k){var d=this;
d.getDimensions();
if(d.o.modal&&c){d.d.iframe=e('<iframe src="javascript:false;"></iframe>').css(e.extend(d.o.iframeCss,{display:"none",opacity:0,position:"fixed",height:a[0],width:a[1],zIndex:d.o.zIndex,top:0,left:0})).appendTo(d.o.appendTo)
}d.d.overlay=e("<div></div>").attr("id",d.o.overlayId).addClass("simplemodal-overlay").css(e.extend(d.o.overlayCss,{display:"none",opacity:d.o.opacity/100,height:d.o.modal?j[0]:0,width:d.o.modal?j[1]:0,position:"fixed",left:0,top:0,zIndex:d.o.zIndex+1})).appendTo(d.o.appendTo);
d.d.container=e("<div></div>").attr("id",d.o.containerId).addClass("simplemodal-container").css(e.extend({position:d.o.fixed?"fixed":"absolute"},d.o.containerCss,{display:"none",zIndex:d.o.zIndex+2})).append(d.o.close&&d.o.closeHTML?e(d.o.closeHTML).addClass(d.o.closeClass):"").appendTo(d.o.appendTo);
d.d.wrap=e("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(d.d.container);
d.d.data=k.attr("id",k.attr("id")||d.o.dataId).addClass("simplemodal-data").css(e.extend(d.o.dataCss,{display:"none"})).appendTo("body");
k=null;
d.setContainerDimensions();
d.d.data.appendTo(d.d.wrap);
if(c||i){d.fixIE()
}},bindEvents:function(){var d=this;
e("."+d.o.closeClass).bind("click.simplemodal",function(k){k.preventDefault();
d.close()
});
if(d.o.modal&&d.o.close&&d.o.overlayClose){d.d.overlay.bind("click.simplemodal",function(k){k.preventDefault();
d.close()
})
}f.bind("keydown.simplemodal",function(k){if(d.o.modal&&k.keyCode===9){d.watchTab(k)
}else{if((d.o.close&&d.o.escClose)&&k.keyCode===27){k.preventDefault();
d.close()
}}});
h.bind("resize.simplemodal orientationchange.simplemodal",function(){d.getDimensions();
d.o.autoResize?d.setContainerDimensions():d.o.autoPosition&&d.setPosition();
if(c||i){d.fixIE()
}else{if(d.o.modal){d.d.iframe&&d.d.iframe.css({height:a[0],width:a[1]});
d.d.overlay.css({height:j[0],width:j[1]})
}}})
},unbindEvents:function(){e("."+this.o.closeClass).unbind("click.simplemodal");
f.unbind("keydown.simplemodal");
h.unbind(".simplemodal");
this.d.overlay.unbind("click.simplemodal")
},fixIE:function(){var d=this,k=d.o.position;
e.each([d.d.iframe||null,!d.o.modal?null:d.d.overlay,d.d.container.css("position")==="fixed"?d.d.container:null],function(w,o){if(o){var u="document.body.clientHeight",y="document.body.clientWidth",A="document.body.scrollHeight",x="document.body.scrollLeft",r="document.body.scrollTop",n="document.body.scrollWidth",m="document.documentElement.clientHeight",v="document.documentElement.clientWidth",t="document.documentElement.scrollLeft",B="document.documentElement.scrollTop",C=o[0].style;
C.position="absolute";
if(w<2){C.removeExpression("height");
C.removeExpression("width");
C.setExpression("height",""+A+" > "+u+" ? "+A+" : "+u+' + "px"');
C.setExpression("width",""+n+" > "+y+" ? "+n+" : "+y+' + "px"')
}else{var q,l;
if(k&&k.constructor===Array){var z=k[0]?typeof k[0]==="number"?k[0].toString():k[0].replace(/px/,""):o.css("top").replace(/px/,"");
q=z.indexOf("%")===-1?z+" + (t = "+B+" ? "+B+" : "+r+') + "px"':parseInt(z.replace(/%/,""))+" * (("+m+" || "+u+") / 100) + (t = "+B+" ? "+B+" : "+r+') + "px"';
if(k[1]){var p=typeof k[1]==="number"?k[1].toString():k[1].replace(/px/,"");
l=p.indexOf("%")===-1?p+" + (t = "+t+" ? "+t+" : "+x+') + "px"':parseInt(p.replace(/%/,""))+" * (("+v+" || "+y+") / 100) + (t = "+t+" ? "+t+" : "+x+') + "px"'
}}else{q="("+m+" || "+u+") / 2 - (this.offsetHeight / 2) + (t = "+B+" ? "+B+" : "+r+') + "px"';
l="("+v+" || "+y+") / 2 - (this.offsetWidth / 2) + (t = "+t+" ? "+t+" : "+x+') + "px"'
}C.removeExpression("top");
C.removeExpression("left");
C.setExpression("top",q);
C.setExpression("left",l)
}}})
},focus:function(m){var k=this,l=m&&e.inArray(m,["first","last"])!==-1?m:"first";
var d=e(":input:enabled:visible:"+l,k.d.wrap);
setTimeout(function(){d.length>0?d.focus():k.d.wrap.focus()
},10)
},getDimensions:function(){var k=this,d=typeof window.innerHeight==="undefined"?h.height():window.innerHeight;
j=[f.height(),f.width()];
a=[d,h.width()]
},getVal:function(k,l){return k?(typeof k==="number"?k:k==="auto"?0:k.indexOf("%")>0?((parseInt(k.replace(/%/,""))/100)*(l==="h"?a[0]:a[1])):parseInt(k.replace(/px/,""))):null
},update:function(d,l){var k=this;
if(!k.d.data){return false
}k.d.origHeight=k.getVal(d,"h");
k.d.origWidth=k.getVal(l,"w");
k.d.data.hide();
d&&k.d.container.css("height",d);
l&&k.d.container.css("width",l);
k.setContainerDimensions();
k.d.data.show();
k.o.focus&&k.focus();
k.unbindEvents();
k.bindEvents()
},setContainerDimensions:function(){var v=this,m=c||b;
var d=v.d.origHeight?v.d.origHeight:e.browser.opera?v.d.container.height():v.getVal(m?v.d.container[0].currentStyle.height:v.d.container.css("height"),"h"),l=v.d.origWidth?v.d.origWidth:e.browser.opera?v.d.container.width():v.getVal(m?v.d.container[0].currentStyle.width:v.d.container.css("width"),"w"),q=v.d.data.outerHeight(true),k=v.d.data.outerWidth(true);
v.d.origHeight=v.d.origHeight||d;
v.d.origWidth=v.d.origWidth||l;
var n=v.o.maxHeight?v.getVal(v.o.maxHeight,"h"):null,r=v.o.maxWidth?v.getVal(v.o.maxWidth,"w"):null,p=n&&n<a[0]?n:a[0],u=r&&r<a[1]?r:a[1];
var o=v.o.minHeight?v.getVal(v.o.minHeight,"h"):"auto";
if(!d){if(!q){d=o
}else{if(q>p){d=p
}else{if(v.o.minHeight&&o!=="auto"&&q<o){d=o
}else{d=q
}}}}else{d=v.o.autoResize&&d>p?p:d<o?o:d
}var t=v.o.minWidth?v.getVal(v.o.minWidth,"w"):"auto";
if(!l){if(!k){l=t
}else{if(k>u){l=u
}else{if(v.o.minWidth&&t!=="auto"&&k<t){l=t
}else{l=k
}}}}else{l=v.o.autoResize&&l>u?u:l<t?t:l
}v.d.container.css({height:d,width:l});
v.d.wrap.css({overflow:(q>d||k>l)?"auto":"visible"});
v.o.autoPosition&&v.setPosition()
},setPosition:function(){var l=this,n,m,o=(a[0]/2)-(l.d.container.outerHeight(true)/2),k=(a[1]/2)-(l.d.container.outerWidth(true)/2),d=l.d.container.css("position")!=="fixed"?h.scrollTop():0;
if(l.o.position&&Object.prototype.toString.call(l.o.position)==="[object Array]"){n=d+(l.o.position[0]||o);
m=l.o.position[1]||k
}else{n=d+o;
m=k
}l.d.container.css({left:m,top:n})
},watchTab:function(k){var d=this;
if(e(k.target).parents(".simplemodal-container").length>0){d.inputs=e(":input:enabled:visible:first, :input:enabled:visible:last",d.d.data[0]);
if((!k.shiftKey&&k.target===d.inputs[d.inputs.length-1])||(k.shiftKey&&k.target===d.inputs[0])||d.inputs.length===0){k.preventDefault();
var l=k.shiftKey?"last":"first";
d.focus(l)
}}else{k.preventDefault();
d.focus()
}},open:function(){var d=this;
d.d.iframe&&d.d.iframe.show();
if(e.isFunction(d.o.onOpen)){d.o.onOpen.apply(d,[d.d])
}else{d.d.overlay.show();
d.d.container.show();
d.d.data.show()
}d.o.focus&&d.focus();
d.bindEvents()
},close:function(){var d=this;
if(!d.d.data){return false
}d.unbindEvents();
if(e.isFunction(d.o.onClose)&&!d.occb){d.occb=true;
d.o.onClose.apply(d,[d.d])
}else{if(d.d.placeholder){var k=e("#simplemodal-placeholder");
if(d.o.persist){k.replaceWith(d.d.data.removeClass("simplemodal-data").css("display",d.display))
}else{d.d.data.hide().remove();
k.replaceWith(d.d.orig)
}}else{d.d.data.hide().remove()
}d.d.container.hide().remove();
d.d.overlay.hide();
d.d.iframe&&d.d.iframe.hide().remove();
d.d.overlay.remove();
d.d={}
}}}
}));
/*!
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright 2011, Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function(j,f){var u=j.fn.domManip,i="_tmplitem",v=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,q={},e={},z,y={key:0,data:{}},x=0,r=0,h=[];
function l(C,B,E,F){var D={data:F||(F===0||F===false)?F:(B?B.data:{}),_wrap:B?B._wrap:null,tmpl:null,parent:B||null,nodes:[],calls:c,nest:b,wrap:o,html:s,update:A};
if(C){j.extend(D,C,{nodes:[],parent:B})
}if(E){D.tmpl=E;
D._ctnt=D._ctnt||D.tmpl(j,D);
D.key=++x;
(h.length?e:q)[x]=D
}return D
}j.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(B,C){j.fn[B]=function(D){var G=[],J=j(D),F,H,E,K,I=this.length===1&&this[0].parentNode;
z=q||{};
if(I&&I.nodeType===11&&I.childNodes.length===1&&J.length===1){J[C](this[0]);
G=this
}else{for(H=0,E=J.length;
H<E;
H++){r=H;
F=(H>0?this.clone(true):this).get();
j(J[H])[C](F);
G=G.concat(F)
}r=0;
G=this.pushStack(G,B,J.selector)
}K=z;
z=null;
j.tmpl.complete(K);
return G
}
});
j.fn.extend({tmpl:function(D,C,B){return j.tmpl(this[0],D,C,B)
},tmplItem:function(){return j.tmplItem(this[0])
},template:function(B){return j.template(B,this[0])
},domManip:function(F,I,H,J){if(F[0]&&j.isArray(F[0])){var C=j.makeArray(arguments),B=F[0],G=B.length,D=0,E;
while(D<G&&!(E=j.data(B[D++],"tmplItem"))){}if(E&&r){C[2]=function(K){j.tmpl.afterManip(this,K,H)
}
}u.apply(this,C)
}else{u.apply(this,arguments)
}r=0;
if(!z){j.tmpl.complete(q)
}return this
}});
j.extend({tmpl:function(D,G,F,C){var E,B=!C;
if(B){C=y;
D=j.template[D]||j.template(null,D);
e={}
}else{if(!D){D=C.tmpl;
q[C.key]=C;
C.nodes=[];
if(C.wrapped){t(C,C.wrapped)
}return j(n(C,null,C.tmpl(j,C)))
}}if(!D){return[]
}if(typeof G==="function"){G=G.call(C||{})
}if(F&&F.wrapped){t(F,F.wrapped)
}E=j.isArray(G)?j.map(G,function(H){return H?l(F,C,D,H):null
}):[l(F,C,D,G)];
return B?j(n(C,null,E)):E
},tmplItem:function(C){var B;
if(C instanceof j){C=C[0]
}while(C&&C.nodeType===1&&!(B=j.data(C,"tmplItem"))&&(C=C.parentNode)){}return B||y
},template:function(C,B){if(B){if(typeof B==="string"){B=m(B)
}else{if(B instanceof j){B=B[0]||{}
}}if(B.nodeType){B=j.data(B,"tmpl")||j.data(B,"tmpl",m(B.innerHTML))
}return typeof C==="string"?(j.template[C]=B):B
}return C?(typeof C!=="string"?j.template(null,C):(j.template[C]||j.template(null,v.test(C)?C:j(C)))):null
},encode:function(B){return(""+B).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
}});
j.extend(j.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(B){q={}
},afterManip:function w(D,B,E){var C=B.nodeType===11?j.makeArray(B.childNodes):B.nodeType===1?[B]:[];
E.call(D,B);
p(C);
r++
}});
function n(B,F,D){var E,C=D?j.map(D,function(G){return(typeof G==="string")?(B.key?G.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+i+'="'+B.key+'" $2'):G):n(G,B,G._ctnt)
}):B;
if(F){return C
}C=C.join("");
C.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(H,I,G,J){E=j(G).get();
p(E);
if(I){E=a(I).concat(E)
}if(J){E=E.concat(a(J))
}});
return E?E:a(C)
}function a(C){var B=document.createElement("div");
B.innerHTML=C;
return j.makeArray(B.childNodes)
}function m(B){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+j.trim(B).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(J,D,H,E,F,K,G){var M=j.tmpl.tag[H],C,I,L;
if(!M){throw"Unknown template tag: "+H
}C=M._default||[];
if(K&&!/\w$/.test(F)){F+=K;
K=""
}if(F){F=k(F);
G=G?(","+k(G)+")"):(K?")":"");
I=K?(F.indexOf(".")>-1?F+k(K):("("+F+").call($item"+G)):F;
L=K?I:"(typeof("+F+")==='function'?("+F+").call($item):("+F+"))"
}else{L=I=C.$1||"null"
}E=k(E);
return"');"+M[D?"close":"open"].split("$notnull_1").join(F?"typeof("+F+")!=='undefined' && ("+F+")!=null":"true").split("$1a").join(L).split("$1").join(I).split("$2").join(E||C.$2||"")+"__.push('"
})+"');}return __;")
}function t(C,B){C._wrap=n(C,true,j.isArray(B)?B:[v.test(B)?B:j(B).html()]).join("")
}function k(B){return B?B.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null
}function d(B){var C=document.createElement("div");
C.appendChild(B.cloneNode(true));
return C.innerHTML
}function p(H){var J="_"+r,C,B,F={},G,E,D;
for(G=0,E=H.length;
G<E;
G++){if((C=H[G]).nodeType!==1){continue
}B=C.getElementsByTagName("*");
for(D=B.length-1;
D>=0;
D--){I(B[D])
}I(C)
}function I(P){var M,O=P,N,K,L;
if((L=P.getAttribute(i))){while(O.parentNode&&(O=O.parentNode).nodeType===1&&!(M=O.getAttribute(i))){}if(M!==L){O=O.parentNode?(O.nodeType===11?0:(O.getAttribute(i)||0)):0;
if(!(K=q[L])){K=e[L];
K=l(K,q[O]||e[O]);
K.key=++x;
q[x]=K
}if(r){Q(L)
}}P.removeAttribute(i)
}else{if(r&&(K=j.data(P,"tmplItem"))){Q(K.key);
q[K.key]=K;
O=j.data(P.parentNode,"tmplItem");
O=O?O.key:0
}}if(K){N=K;
while(N&&N.key!=O){N.nodes.push(P);
N=N.parent
}delete K._ctnt;
delete K._wrap;
j.data(P,"tmplItem",K)
}function Q(R){R=R+J;
K=F[R]=(F[R]||l(K,q[K.parent.key+J]||K.parent))
}}}function c(D,B,E,C){if(!D){return h.pop()
}h.push({_:D,tmpl:B,item:this,data:E,options:C})
}function b(B,D,C){return j.tmpl(j.template(B),D,C,this)
}function o(D,B){var C=D.options||{};
C.wrapped=B;
return j.tmpl(j.template(D.tmpl),D.data,C,D.item)
}function s(C,D){var B=this._wrap;
return j.map(j(j.isArray(B)?B.join(""):B).filter(C||"*"),function(E){return D?E.innerText||E.textContent:E.outerHTML||d(E)
})
}function A(){var B=this.nodes;
j.tmpl(null,null,null,this).insertBefore(B[0]);
j(B).remove()
}})(jQuery);
/*!
 * tmplPlus.js: for jQuery Templates Plugin 1.0.0pre
 * Additional templating features or support for more advanced/less common scenarios.
 * Requires jquery.tmpl.js
 * http://github.com/jquery/jquery-tmpl
 *
 * Copyright 2011, Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function(c){var b=c.tmpl.complete,a=c.fn.domManip;
c.tmpl.complete=function(e){var d;
b(e);
for(d in e){d=e[d];
if(d.addedTmplItems&&c.inArray(d,d.addedTmplItems)===-1){d.addedTmplItems.push(d)
}}for(d in e){d=e[d];
if(d.rendered){d.rendered(d)
}}};
c.extend({tmplCmd:function(i,e,j){var h=[],d;
function f(m,q){var s=[],o,l,r=q.length,k,p=0,n=m.length;
for(;
p<n;
){k=m[p++];
for(l=0;
l<r;
){o=q[l++];
if(o.data===k){s.push(o)
}}}return s
}e=c.isArray(e)?e:[e];
switch(i){case"find":return f(e,j);
case"replace":e.reverse()
}c.each(j?f(e,j):e,function(l,k){coll=k.nodes;
switch(i){case"update":k.update();
break;
case"remove":c(coll).remove();
if(j){j.splice(c.inArray(k,j),1)
}break;
case"replace":d=d?c(coll).insertBefore(d)[0]:c(coll).appendTo(coll[0].parentNode)[0];
h.unshift(k)
}});
return h
}});
c.fn.extend({domManip:function(f,i,k,e){var j=f[1],d=f[0],h;
if(f.length>=2&&typeof j==="object"&&!j.nodeType&&!(j instanceof c)){h=c.makeArray(arguments);
h[0]=[c.tmpl(c.template(d),j,f[2],f[3])];
h[2]=function(l){c.tmpl.afterManip(this,l,k)
};
return a.apply(this,h)
}return a.apply(this,arguments)
}})
})(jQuery);
$.extend($.fn,{validate:function(a){if(!this.length){if(a&&a.debug&&window.console){console.warn("Nothing selected, can't validate, returning nothing.")
}return
}var b=$.data(this[0],"validator");
if(b){return b
}this.attr("novalidate","novalidate");
b=new $.validator(a,this[0]);
$.data(this[0],"validator",b);
if(b.settings.onsubmit){this.on("click.validate",":submit",function(c){b.submitButton=c.currentTarget;
if($(this).hasClass("cancel")){b.cancelSubmit=true
}if($(this).attr("formnovalidate")!==undefined){b.cancelSubmit=true
}});
this.on("submit.validate",function(c){if(b.settings.debug){c.preventDefault()
}function d(){var f,e;
if(b.submitButton&&(b.settings.submitHandler||b.formSubmitted)){f=$("<input type='hidden'/>").attr("name",b.submitButton.name).val($(b.submitButton).val()).appendTo(b.currentForm)
}if(b.settings.submitHandler&&!b.settings.debug){e=b.settings.submitHandler.call(b,b.currentForm,c);
if(f){f.remove()
}if(e!==undefined){return e
}return false
}return true
}if(b.cancelSubmit){b.cancelSubmit=false;
return d()
}if(b.form()){if(b.pendingRequest){b.formSubmitted=true;
return false
}return d()
}else{b.focusInvalid();
return false
}})
}return b
},valid:function(){var b,a,c;
if($(this[0]).is("form")){b=this.validate().form()
}else{c=[];
b=true;
a=$(this[0].form).validate();
this.each(function(){b=a.element(this)&&b;
if(!b){c=c.concat(a.errorList)
}});
a.errorList=c
}return b
},rules:function(d,a){var f=this[0],j=typeof this.attr("contenteditable")!=="undefined"&&this.attr("contenteditable")!=="false",c,i,k,e,b,h;
if(f==null){return
}if(!f.form&&j){f.form=this.closest("form")[0];
f.name=this.attr("name")
}if(f.form==null){return
}if(d){c=$.data(f.form,"validator").settings;
i=c.rules;
k=$.validator.staticRules(f);
switch(d){case"add":$.extend(k,$.validator.normalizeRule(a));
delete k.messages;
i[f.name]=k;
if(a.messages){c.messages[f.name]=$.extend(c.messages[f.name],a.messages)
}break;
case"remove":if(!a){delete i[f.name];
return k
}h={};
$.each(a.split(/\s/),function(l,m){h[m]=k[m];
delete k[m]
});
return h
}}e=$.validator.normalizeRules($.extend({},$.validator.classRules(f),$.validator.attributeRules(f),$.validator.dataRules(f),$.validator.staticRules(f)),f);
if(e.required){b=e.required;
delete e.required;
e=$.extend({required:b},e)
}if(e.remote){b=e.remote;
delete e.remote;
e=$.extend(e,{remote:b})
}return e
}});
$.extend($.expr.pseudos||$.expr[":"],{blank:function(b){return !$.trim(""+$(b).val())
},filled:function(b){var c=$(b).val();
return c!==null&&!!$.trim(""+c)
},unchecked:function(b){return !$(b).prop("checked")
}});
$.validator=function(a,b){this.settings=$.extend(true,{},$.validator.defaults,a);
this.currentForm=b;
this.init()
};
$.validator.format=function(a,b){if(arguments.length===1){return function(){var c=$.makeArray(arguments);
c.unshift(a);
return $.validator.format.apply(this,c)
}
}if(b===undefined){return a
}if(arguments.length>2&&b.constructor!==Array){b=$.makeArray(arguments).slice(1)
}if(b.constructor!==Array){b=[b]
}$.each(b,function(c,d){a=a.replace(new RegExp("\\{"+c+"\\}","g"),function(){return d
})
});
return a
};
$.extend($.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:false,focusInvalid:true,errorContainer:$([]),errorLabelContainer:$([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(a){this.lastActive=a;
if(this.settings.focusCleanup){if(this.settings.unhighlight){this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass)
}this.hideThese(this.errorsFor(a))
}},onfocusout:function(a){if(!this.checkable(a)&&(a.name in this.submitted||!this.optional(a))){this.element(a)
}},onkeyup:function(b,c){var a=[16,17,18,20,35,36,37,38,39,40,45,144,225];
if(c.which===9&&this.elementValue(b)===""||$.inArray(c.keyCode,a)!==-1){return
}else{if(b.name in this.submitted||b.name in this.invalid){this.element(b)
}}},onclick:function(a){if(a.name in this.submitted){this.element(a)
}else{if(a.parentNode.name in this.submitted){this.element(a.parentNode)
}}},highlight:function(c,a,b){if(c.type==="radio"){this.findByName(c.name).addClass(a).removeClass(b)
}else{$(c).addClass(a).removeClass(b)
}},unhighlight:function(c,a,b){if(c.type==="radio"){this.findByName(c.name).removeClass(a).addClass(b)
}else{$(c).removeClass(a).addClass(b)
}}},setDefaults:function(a){$.extend($.validator.defaults,a)
},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:$.validator.format("Please enter no more than {0} characters."),minlength:$.validator.format("Please enter at least {0} characters."),rangelength:$.validator.format("Please enter a value between {0} and {1} characters long."),range:$.validator.format("Please enter a value between {0} and {1}."),max:$.validator.format("Please enter a value less than or equal to {0}."),min:$.validator.format("Please enter a value greater than or equal to {0}."),step:$.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=$(this.settings.errorLabelContainer);
this.errorContext=this.labelContainer.length&&this.labelContainer||$(this.currentForm);
this.containers=$(this.settings.errorContainer).add(this.settings.errorLabelContainer);
this.submitted={};
this.valueCache={};
this.pendingRequest=0;
this.pending={};
this.invalid={};
this.reset();
var b=this.currentForm,a=(this.groups={}),d;
$.each(this.settings.groups,function(e,f){if(typeof f==="string"){f=f.split(/\s/)
}$.each(f,function(i,h){a[h]=e
})
});
d=this.settings.rules;
$.each(d,function(e,f){d[e]=$.validator.normalizeRule(f)
});
function c(j){var e=typeof $(this).attr("contenteditable")!=="undefined"&&$(this).attr("contenteditable")!=="false";
if(!this.form&&e){this.form=$(this).closest("form")[0];
this.name=$(this).attr("name")
}if(b!==this.form){return
}var h=$.data(this.form,"validator"),f="on"+j.type.replace(/^validate/,""),i=h.settings;
if(i[f]&&!$(this).is(i.ignore)){i[f].call(h,this,j)
}}$(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",c).on("click.validate","select, option, [type='radio'], [type='checkbox']",c);
if(this.settings.invalidHandler){$(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)
}},form:function(){this.checkForm();
$.extend(this.submitted,this.errorMap);
this.invalid=$.extend({},this.errorMap);
if(!this.valid()){$(this.currentForm).triggerHandler("invalid-form",[this])
}this.showErrors();
return this.valid()
},checkForm:function(){this.prepareForm();
for(var a=0,b=(this.currentElements=this.elements());
b[a];
a++){this.check(b[a])
}return this.valid()
},element:function(e){var f=this.clean(e),d=this.validationTargetFor(f),c=this,a=true,b,h;
if(d===undefined){delete this.invalid[f.name]
}else{this.prepareElement(d);
this.currentElements=$(d);
h=this.groups[d.name];
if(h){$.each(this.groups,function(j,i){if(i===h&&j!==d.name){f=c.validationTargetFor(c.clean(c.findByName(j)));
if(f&&f.name in c.invalid){c.currentElements.push(f);
a=c.check(f)&&a
}}})
}b=this.check(d)!==false;
a=a&&b;
if(b){this.invalid[d.name]=false
}else{this.invalid[d.name]=true
}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)
}this.showErrors();
$(e).attr("aria-invalid",!b)
}return a
},showErrors:function(b){if(b){var a=this;
$.extend(this.errorMap,b);
this.errorList=$.map(this.errorMap,function(d,c){return{message:d,element:a.findByName(c)[0]}
});
this.successList=$.grep(this.successList,function(c){return !(c.name in b)
})
}if(this.settings.showErrors){this.settings.showErrors.call(this,this.errorMap,this.errorList)
}else{this.defaultShowErrors()
}},resetForm:function(){if($.fn.resetForm){$(this.currentForm).resetForm()
}this.invalid={};
this.submitted={};
this.prepareForm();
this.hideErrors();
var a=this.elements().removeData("previousValue").removeAttr("aria-invalid");
this.resetElements(a)
},resetElements:function(b){var a;
if(this.settings.unhighlight){for(a=0;
b[a];
a++){this.settings.unhighlight.call(this,b[a],this.settings.errorClass,"");
this.findByName(b[a].name).removeClass(this.settings.validClass)
}}else{b.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
}},numberOfInvalids:function(){return this.objectLength(this.invalid)
},objectLength:function(c){var b=0,a;
for(a in c){if(c[a]!==undefined&&c[a]!==null&&c[a]!==false){b++
}}return b
},hideErrors:function(){this.hideThese(this.toHide)
},hideThese:function(a){a.not(this.containers).text("");
this.addWrapper(a).hide()
},valid:function(){return this.size()===0
},size:function(){return this.errorList.length
},focusInvalid:function(){if(this.settings.focusInvalid){try{$(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")
}catch(a){}}},findLastActive:function(){var a=this.lastActive;
return a&&$.grep(this.errorList,function(b){return b.element.name===a.name
}).length===1&&a
},elements:function(){var b=this,a={};
return $(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||$(this).attr("name");
var c=typeof $(this).attr("contenteditable")!=="undefined"&&$(this).attr("contenteditable")!=="false";
if(!d&&b.settings.debug&&window.console){console.error("%o has no name assigned",this)
}if(c){this.form=$(this).closest("form")[0];
this.name=d
}if(this.form!==b.currentForm){return false
}if(d in a||!b.objectLength($(this).rules())){return false
}a[d]=true;
return true
})
},clean:function(a){return $(a)[0]
},errors:function(){var a=this.settings.errorClass.split(" ").join(".");
return $(this.settings.errorElement+"."+a,this.errorContext)
},resetInternals:function(){this.successList=[];
this.errorList=[];
this.errorMap={};
this.toShow=$([]);
this.toHide=$([])
},reset:function(){this.resetInternals();
this.currentElements=$([])
},prepareForm:function(){this.reset();
this.toHide=this.errors().add(this.containers)
},prepareElement:function(a){this.reset();
this.toHide=this.errorsFor(a)
},elementValue:function(d){var c=$(d),e=d.type,b=typeof c.attr("contenteditable")!=="undefined"&&c.attr("contenteditable")!=="false",f,a;
if(e==="radio"||e==="checkbox"){return this.findByName(d.name).filter(":checked").val()
}else{if(e==="number"&&typeof d.validity!=="undefined"){return d.validity.badInput?"NaN":c.val()
}}if(b){f=c.text()
}else{f=c.val()
}if(e==="file"){if(f.substr(0,12)==="C:\\fakepath\\"){return f.substr(12)
}a=f.lastIndexOf("/");
if(a>=0){return f.substr(a+1)
}a=f.lastIndexOf("\\");
if(a>=0){return f.substr(a+1)
}return f
}if(typeof f==="string"){return f.replace(/\r/g,"")
}return f
},check:function(d){d=this.validationTargetFor(this.clean(d));
var j=$(d).rules(),h=$.map(j,function(m,e){return e
}).length,k=false,b=this.elementValue(d),l,a,i,c;
if(typeof j.normalizer==="function"){c=j.normalizer
}else{if(typeof this.settings.normalizer==="function"){c=this.settings.normalizer
}}if(c){b=c.call(d,b);
delete j.normalizer
}for(a in j){i={method:a,parameters:j[a]};
try{l=$.validator.methods[a].call(this,b,d,i.parameters);
if(l==="dependency-mismatch"&&h===1){k=true;
continue
}k=false;
if(l==="pending"){this.toHide=this.toHide.not(this.errorsFor(d));
return
}if(!l){this.formatAndAdd(d,i);
return false
}}catch(f){if(this.settings.debug&&window.console){console.log("Exception occurred when checking element "+d.id+", check the '"+i.method+"' method.",f)
}if(f instanceof TypeError){f.message+=".  Exception occurred when checking element "+d.id+", check the '"+i.method+"' method."
}throw f
}}if(k){return
}if(this.objectLength(j)){this.successList.push(d)
}return true
},customDataMessage:function(a,b){return $(a).data("msg"+b.charAt(0).toUpperCase()+b.substring(1).toLowerCase())||$(a).data("msg")
},customMessage:function(b,c){var a=this.settings.messages[b];
return a&&(a.constructor===String?a:a[c])
},findDefined:function(){for(var a=0;
a<arguments.length;
a++){if(arguments[a]!==undefined){return arguments[a]
}}return undefined
},defaultMessage:function(b,d){if(typeof d==="string"){d={method:d}
}var c=this.findDefined(this.customMessage(b.name,d.method),this.customDataMessage(b,d.method),!this.settings.ignoreTitle&&b.title||undefined,$.validator.messages[d.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),a=/\$?\{(\d+)\}/g;
if(typeof c==="function"){c=c.call(this,d.parameters,b)
}else{if(a.test(c)){c=$.validator.format(c.replace(a,"{$1}"),d.parameters)
}}return c
},formatAndAdd:function(a,c){var b=this.defaultMessage(a,c);
this.errorList.push({message:b,element:a,method:c.method});
this.errorMap[a.name]=b;
this.submitted[a.name]=b
},addWrapper:function(a){if(this.settings.wrapper){a=a.add(a.parent(this.settings.wrapper))
}return a
},defaultShowErrors:function(){var b,c,a;
for(b=0;
this.errorList[b];
b++){a=this.errorList[b];
if(this.settings.highlight){this.settings.highlight.call(this,a.element,this.settings.errorClass,this.settings.validClass)
}this.showLabel(a.element,a.message)
}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)
}if(this.settings.success){for(b=0;
this.successList[b];
b++){this.showLabel(this.successList[b])
}}if(this.settings.unhighlight){for(b=0,c=this.validElements();
c[b];
b++){this.settings.unhighlight.call(this,c[b],this.settings.errorClass,this.settings.validClass)
}}this.toHide=this.toHide.not(this.toShow);
this.hideErrors();
this.addWrapper(this.toShow).show()
},validElements:function(){return this.currentElements.not(this.invalidElements())
},invalidElements:function(){return $(this.errorList).map(function(){return this.element
})
},showLabel:function(d,j){var b,h,c,i,e=this.errorsFor(d),f=this.idOrName(d),a=$(d).attr("aria-describedby");
if(e.length){e.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
e.html(j)
}else{e=$("<"+this.settings.errorElement+">").attr("id",f+"-error").addClass(this.settings.errorClass).html(j||"");
b=e;
if(this.settings.wrapper){b=e.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()
}if(this.labelContainer.length){this.labelContainer.append(b)
}else{if(this.settings.errorPlacement){this.settings.errorPlacement.call(this,b,$(d))
}else{b.insertAfter(d)
}}if(e.is("label")){e.attr("for",f)
}else{if(e.parents("label[for='"+this.escapeCssMeta(f)+"']").length===0){c=e.attr("id");
if(!a){a=c
}else{if(!a.match(new RegExp("\\b"+this.escapeCssMeta(c)+"\\b"))){a+=" "+c
}}$(d).attr("aria-describedby",a);
h=this.groups[d.name];
if(h){i=this;
$.each(i.groups,function(l,k){if(k===h){$("[name='"+i.escapeCssMeta(l)+"']",i.currentForm).attr("aria-describedby",e.attr("id"))
}})
}}}}if(!j&&this.settings.success){e.text("");
if(typeof this.settings.success==="string"){e.addClass(this.settings.success)
}else{this.settings.success(e,d)
}}this.toShow=this.toShow.add(e)
},errorsFor:function(c){var b=this.escapeCssMeta(this.idOrName(c)),d=$(c).attr("aria-describedby"),a="label[for='"+b+"'], label[for='"+b+"'] *";
if(d){a=a+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")
}return this.errors().filter(a)
},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")
},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)
},validationTargetFor:function(a){if(this.checkable(a)){a=this.findByName(a.name)
}return $(a).not(this.settings.ignore)[0]
},checkable:function(a){return(/radio|checkbox/i).test(a.type)
},findByName:function(a){return $(this.currentForm).find("[name='"+this.escapeCssMeta(a)+"']")
},getLength:function(b,a){switch(a.nodeName.toLowerCase()){case"select":return $("option:selected",a).length;
case"input":if(this.checkable(a)){return this.findByName(a.name).filter(":checked").length
}}return b.length
},depend:function(b,a){return this.dependTypes[typeof b]?this.dependTypes[typeof b](b,a):true
},dependTypes:{"boolean":function(a){return a
},string:function(b,a){return !!$(b,a.form).length
},"function":function(b,a){return b(a)
}},optional:function(a){var b=this.elementValue(a);
return !$.validator.methods.required.call(this,b,a)&&"dependency-mismatch"
},startRequest:function(a){if(!this.pending[a.name]){this.pendingRequest++;
$(a).addClass(this.settings.pendingClass);
this.pending[a.name]=true
}},stopRequest:function(a,b){this.pendingRequest--;
if(this.pendingRequest<0){this.pendingRequest=0
}delete this.pending[a.name];
$(a).removeClass(this.settings.pendingClass);
if(b&&this.pendingRequest===0&&this.formSubmitted&&this.form()){$(this.currentForm).submit();
if(this.submitButton){$("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove()
}this.formSubmitted=false
}else{if(!b&&this.pendingRequest===0&&this.formSubmitted){$(this.currentForm).triggerHandler("invalid-form",[this]);
this.formSubmitted=false
}}},previousValue:function(a,b){b=typeof b==="string"&&b||"remote";
return $.data(a,"previousValue")||$.data(a,"previousValue",{old:null,valid:true,message:this.defaultMessage(a,{method:b})})
},destroy:function(){this.resetForm();
$(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},number:{number:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(a,b){if(a.constructor===String){this.classRuleSettings[a]=b
}else{$.extend(this.classRuleSettings,a)
}},classRules:function(b){var c={},a=$(b).attr("class");
if(a){$.each(a.split(" "),function(){if(this in $.validator.classRuleSettings){$.extend(c,$.validator.classRuleSettings[this])
}})
}return c
},normalizeAttributeRule:function(c,a,d,b){if(/min|max|step/.test(d)&&(a===null||/number|range|text/.test(a))){b=Number(b);
if(isNaN(b)){b=undefined
}}if(b||b===0){c[d]=b
}else{if(a===d&&a!=="range"){c[d]=true
}}},attributeRules:function(b){var e={},a=$(b),c=b.getAttribute("type"),f,d;
for(f in $.validator.methods){if(f==="required"){d=b.getAttribute(f);
if(d===""){d=true
}d=!!d
}else{d=a.attr(f)
}this.normalizeAttributeRule(e,c,f,d)
}if(e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)){delete e.maxlength
}return e
},dataRules:function(b){var e={},a=$(b),c=b.getAttribute("type"),f,d;
for(f in $.validator.methods){d=a.data("rule"+f.charAt(0).toUpperCase()+f.substring(1).toLowerCase());
if(d===""){d=true
}this.normalizeAttributeRule(e,c,f,d)
}return e
},staticRules:function(b){var c={},a=$.data(b.form,"validator");
if(a.settings.rules){c=$.validator.normalizeRule(a.settings.rules[b.name])||{}
}return c
},normalizeRules:function(b,a){$.each(b,function(e,d){if(d===false){delete b[e];
return
}if(d.param||d.depends){var c=true;
switch(typeof d.depends){case"string":c=!!$(d.depends,a.form).length;
break;
case"function":c=d.depends.call(a,a);
break
}if(c){b[e]=d.param!==undefined?d.param:true
}else{$.data(a.form,"validator").resetElements($(a));
delete b[e]
}}});
$.each(b,function(c,d){b[c]=$.isFunction(d)&&c!=="normalizer"?d(a):d
});
$.each(["minlength","maxlength"],function(){if(b[this]){b[this]=Number(b[this])
}});
$.each(["rangelength","range"],function(){var c;
if(b[this]){if($.isArray(b[this])){b[this]=[Number(b[this][0]),Number(b[this][1])]
}else{if(typeof b[this]==="string"){c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/);
b[this]=[Number(c[0]),Number(c[1])]
}}}});
if($.validator.autoCreateRanges){if(b.min!=null&&b.max!=null){b.range=[b.min,b.max];
delete b.min;
delete b.max
}if(b.minlength!=null&&b.maxlength!=null){b.rangelength=[b.minlength,b.maxlength];
delete b.minlength;
delete b.maxlength
}}return b
},normalizeRule:function(b){if(typeof b==="string"){var a={};
$.each(b.split(/\s/),function(){a[this]=true
});
b=a
}return b
},addMethod:function(a,c,b){$.validator.methods[a]=c;
$.validator.messages[a]=b!==undefined?b:$.validator.messages[a];
if(c.length<3){$.validator.addClassRules(a,$.validator.normalizeRule(a))
}},methods:{required:function(b,a,d){if(!this.depend(d,a)){return"dependency-mismatch"
}if(a.nodeName.toLowerCase()==="select"){var c=$(a).val();
return c&&c.length>0
}if(this.checkable(a)){return this.getLength(b,a)>0
}return b!==undefined&&b!==null&&b.length>0
},email:function(b,a){return this.optional(a)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(b)
},url:function(b,a){return this.optional(a)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(b)
},date:(function(){var a=false;
return function(c,b){if(!a){a=true;
if(this.settings.debug&&window.console){console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")
}}return this.optional(b)||!/Invalid|NaN/.test(new Date(c).toString())
}
}()),dateISO:function(b,a){return this.optional(a)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(b)
},number:function(b,a){return this.optional(a)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(b)
},digits:function(b,a){return this.optional(a)||/^\d+$/.test(b)
},minlength:function(c,a,d){var b=$.isArray(c)?c.length:this.getLength(c,a);
return this.optional(a)||b>=d
},maxlength:function(c,a,d){var b=$.isArray(c)?c.length:this.getLength(c,a);
return this.optional(a)||b<=d
},rangelength:function(c,a,d){var b=$.isArray(c)?c.length:this.getLength(c,a);
return this.optional(a)||(b>=d[0]&&b<=d[1])
},min:function(b,a,c){return this.optional(a)||b>=c
},max:function(b,a,c){return this.optional(a)||b<=c
},range:function(b,a,c){return this.optional(a)||(b>=c[0]&&b<=c[1])
},step:function(l,e,c){var k=$(e).attr("type"),j="Step attribute on input type "+k+" is not supported.",i=["text","number","range"],m=new RegExp("\\b"+k+"\\b"),f=k&&!m.test(i.join()),d=function(o){var n=(""+o).match(/(?:\.(\d+))?$/);
if(!n){return 0
}return n[1]?n[1].length:0
},h=function(n){return Math.round(n*Math.pow(10,b))
},a=true,b;
if(f){throw new Error(j)
}b=d(c);
if(d(l)>b||h(l)%h(c)!==0){a=false
}return this.optional(e)||a
},equalTo:function(b,a,d){var c=$(d);
if(this.settings.onfocusout&&c.not(".validate-equalTo-blur").length){c.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){$(a).valid()
})
}return b===c.val()
},remote:function(f,b,h,i){if(this.optional(b)){return"dependency-mismatch"
}i=typeof i==="string"&&i||"remote";
var c=this.previousValue(b,i),a,e,d;
if(!this.settings.messages[b.name]){this.settings.messages[b.name]={}
}c.originalMessage=c.originalMessage||this.settings.messages[b.name][i];
this.settings.messages[b.name][i]=c.message;
h=typeof h==="string"&&{url:h}||h;
d=$.param($.extend({data:f},h.data));
if(c.old===d){return c.valid
}c.old=d;
a=this;
this.startRequest(b);
e={};
e[b.name]=f;
$.ajax($.extend(true,{mode:"abort",port:"validate"+b.name,dataType:"json",data:e,context:a.currentForm,success:function(k){var m=k===true||k==="true",n,l,j;
a.settings.messages[b.name][i]=c.originalMessage;
if(m){j=a.formSubmitted;
a.resetInternals();
a.toHide=a.errorsFor(b);
a.formSubmitted=j;
a.successList.push(b);
a.invalid[b.name]=false;
a.showErrors()
}else{n={};
l=k||a.defaultMessage(b,{method:i,parameters:f});
n[b.name]=c.message=l;
a.invalid[b.name]=true;
a.showErrors(n)
}c.valid=m;
a.stopRequest(b,m)
}},h));
return"pending"
}}});
/*!
 * jQuery Validation Plugin v1.19.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2018 Jörn Zaefferer
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery","./jquery.validate"],a)
}else{if(typeof module==="object"&&module.exports){module.exports=a(require("jquery"))
}else{a(jQuery)
}}}(function(a){(function(){function b(c){return c.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ").replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g,"")
}a.validator.addMethod("maxWords",function(d,c,e){return this.optional(c)||b(d).match(/\b\w+\b/g).length<=e
},a.validator.format("Please enter {0} words or less."));
a.validator.addMethod("minWords",function(d,c,e){return this.optional(c)||b(d).match(/\b\w+\b/g).length>=e
},a.validator.format("Please enter at least {0} words."));
a.validator.addMethod("rangeWords",function(f,c,h){var e=b(f),d=/\b\w+\b/g;
return this.optional(c)||e.match(d).length>=h[0]&&e.match(d).length<=h[1]
},a.validator.format("Please enter between {0} and {1} words."))
}());
a.validator.addMethod("abaRoutingNumber",function(e){var d=0;
var f=e.split("");
var c=f.length;
if(c!==9){return false
}for(var b=0;
b<c;
b+=3){d+=parseInt(f[b],10)*3+parseInt(f[b+1],10)*7+parseInt(f[b+2],10)
}if(d!==0&&d%10===0){return true
}return false
},"Please enter a valid routing number.");
a.validator.addMethod("accept",function(h,d,k){var j=typeof k==="string"?k.replace(/\s/g,""):"image/*",f=this.optional(d),c,b,e;
if(f){return f
}if(a(d).attr("type")==="file"){j=j.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g,"\\$&").replace(/,/g,"|").replace(/\/\*/g,"/.*");
if(d.files&&d.files.length){e=new RegExp(".?("+j+")$","i");
for(c=0;
c<d.files.length;
c++){b=d.files[c];
if(!b.type.match(e)){return false
}}}}return true
},a.validator.format("Please enter a value with a valid mimetype."));
a.validator.addMethod("alphanumeric",function(c,b){return this.optional(b)||/^\w+$/i.test(c)
},"Letters, numbers, and underscores only please");
a.validator.addMethod("bankaccountNL",function(h,d){if(this.optional(d)){return true
}if(!(/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(h))){return false
}var f=h.replace(/ /g,""),e=0,b=f.length,j,c,i;
for(j=0;
j<b;
j++){c=b-j;
i=f.substring(j,j+1);
e=e+c*i
}return e%11===0
},"Please specify a valid bank account number");
a.validator.addMethod("bankorgiroaccountNL",function(c,b){return this.optional(b)||(a.validator.methods.bankaccountNL.call(this,c,b))||(a.validator.methods.giroaccountNL.call(this,c,b))
},"Please specify a valid bank or giro account number");
a.validator.addMethod("bic",function(c,b){return this.optional(b)||/^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(c.toUpperCase())
},"Please specify a valid BIC code");
a.validator.addMethod("cifES",function(q,m){if(this.optional(m)){return true
}var h=new RegExp(/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi);
var f=q.substring(0,1),j=q.substring(1,8),l=q.substring(8,9),c=0,d=0,b=0,k,e,p,o;
function r(i){return i%2===0
}if(q.length!==9||!h.test(q)){return false
}for(k=0;
k<j.length;
k++){e=parseInt(j[k],10);
if(r(k)){e*=2;
b+=e<10?e:e-9
}else{d+=e
}}c=d+b;
p=(10-(c).toString().substr(-1)).toString();
p=parseInt(p,10)>9?"0":p;
o="JABCDEFGHI".substr(p,1).toString();
if(f.match(/[ABEH]/)){return l===p
}else{if(f.match(/[KPQS]/)){return l===o
}}return l===p||l===o
},"Please specify a valid CIF number.");
a.validator.addMethod("cnhBR",function(k){k=k.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g,"");
if(k.length!==11){return false
}var h=0,e=0,m,b,c,f,d,l;
m=k.charAt(0);
if(new Array(12).join(m)===k){return false
}for(f=0,d=9,l=0;
f<9;
++f,--d){h+=+(k.charAt(f)*d)
}b=h%11;
if(b>=10){b=0;
e=2
}h=0;
for(f=0,d=1,l=0;
f<9;
++f,++d){h+=+(k.charAt(f)*d)
}c=h%11;
if(c>=10){c=0
}else{c=c-e
}return(String(b).concat(c)===k.substr(-2))
},"Please specify a valid CNH number");
a.validator.addMethod("cnpjBR",function(k,d){if(this.optional(d)){return true
}k=k.replace(/[^\d]+/g,"");
if(k.length!==14){return false
}if(k==="00000000000000"||k==="11111111111111"||k==="22222222222222"||k==="33333333333333"||k==="44444444444444"||k==="55555555555555"||k==="66666666666666"||k==="77777777777777"||k==="88888888888888"||k==="99999999999999"){return false
}var l=(k.length-2);
var b=k.substring(0,l);
var f=k.substring(l);
var m=0;
var h=l-7;
for(var e=l;
e>=1;
e--){m+=b.charAt(l-e)*h--;
if(h<2){h=9
}}var c=m%11<2?0:11-m%11;
if(c!==parseInt(f.charAt(0),10)){return false
}l=l+1;
b=k.substring(0,l);
m=0;
h=l-7;
for(var j=l;
j>=1;
j--){m+=b.charAt(l-j)*h--;
if(h<2){h=9
}}c=m%11<2?0:11-m%11;
if(c!==parseInt(f.charAt(1),10)){return false
}return true
},"Please specify a CNPJ value number");
a.validator.addMethod("cpfBR",function(j,e){if(this.optional(e)){return true
}j=j.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g,"");
if(j.length!==11){return false
}var h=0,f,d,c,b;
f=parseInt(j.substring(9,10),10);
d=parseInt(j.substring(10,11),10);
c=function(k,l){var i=(k*10)%11;
if((i===10)||(i===11)){i=0
}return(i===l)
};
if(j===""||j==="00000000000"||j==="11111111111"||j==="22222222222"||j==="33333333333"||j==="44444444444"||j==="55555555555"||j==="66666666666"||j==="77777777777"||j==="88888888888"||j==="99999999999"){return false
}for(b=1;
b<=9;
b++){h=h+parseInt(j.substring(b-1,b),10)*(11-b)
}if(c(h,f)){h=0;
for(b=1;
b<=10;
b++){h=h+parseInt(j.substring(b-1,b),10)*(12-b)
}return c(h,d)
}return false
},"Please specify a valid CPF number");
a.validator.addMethod("creditcard",function(f,c){if(this.optional(c)){return"dependency-mismatch"
}if(/[^0-9 \-]+/.test(f)){return false
}var h=0,e=0,b=false,i,d;
f=f.replace(/\D/g,"");
if(f.length<13||f.length>19){return false
}for(i=f.length-1;
i>=0;
i--){d=f.charAt(i);
e=parseInt(d,10);
if(b){if((e*=2)>9){e-=9
}}h+=e;
b=!b
}return(h%10)===0
},"Please enter a valid credit card number.");
a.validator.addMethod("creditcardtypes",function(c,b,d){if(/[^0-9\-]+/.test(c)){return false
}c=c.replace(/\D/g,"");
var e=0;
if(d.mastercard){e|=1
}if(d.visa){e|=2
}if(d.amex){e|=4
}if(d.dinersclub){e|=8
}if(d.enroute){e|=16
}if(d.discover){e|=32
}if(d.jcb){e|=64
}if(d.unknown){e|=128
}if(d.all){e=1|2|4|8|16|32|64|128
}if(e&1&&(/^(5[12345])/.test(c)||/^(2[234567])/.test(c))){return c.length===16
}if(e&2&&/^(4)/.test(c)){return c.length===16
}if(e&4&&/^(3[47])/.test(c)){return c.length===15
}if(e&8&&/^(3(0[012345]|[68]))/.test(c)){return c.length===14
}if(e&16&&/^(2(014|149))/.test(c)){return c.length===15
}if(e&32&&/^(6011)/.test(c)){return c.length===16
}if(e&64&&/^(3)/.test(c)){return c.length===16
}if(e&64&&/^(2131|1800)/.test(c)){return c.length===15
}if(e&128){return true
}return false
},"Please enter a valid credit card number.");
a.validator.addMethod("currency",function(h,d,i){var c=typeof i==="string",f=c?i:i[0],b=c?true:i[1],e;
f=f.replace(/,/g,"");
f=b?f+"]":f+"]?";
e="^["+f+"([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$";
e=new RegExp(e);
return this.optional(d)||e.test(h)
},"Please specify a valid currency");
a.validator.addMethod("dateFA",function(c,b){return this.optional(b)||/^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(c)
},a.validator.messages.date);
a.validator.addMethod("dateITA",function(f,d){var b=false,i=/^\d{1,2}\/\d{1,2}\/\d{4}$/,k,e,c,h,j;
if(i.test(f)){k=f.split("/");
e=parseInt(k[0],10);
c=parseInt(k[1],10);
h=parseInt(k[2],10);
j=new Date(Date.UTC(h,c-1,e,12,0,0,0));
if((j.getUTCFullYear()===h)&&(j.getUTCMonth()===c-1)&&(j.getUTCDate()===e)){b=true
}else{b=false
}}else{b=false
}return this.optional(d)||b
},a.validator.messages.date);
a.validator.addMethod("dateNL",function(c,b){return this.optional(b)||/^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(c)
},a.validator.messages.date);
a.validator.addMethod("extension",function(c,b,d){d=typeof d==="string"?d.replace(/,/g,"|"):"png|jpe?g|gif";
return this.optional(b)||c.match(new RegExp("\\.("+d+")$","i"))
},a.validator.format("Please enter a value with a valid extension."));
a.validator.addMethod("giroaccountNL",function(c,b){return this.optional(b)||/^[0-9]{1,7}$/.test(c)
},"Please specify a valid giro account number");
a.validator.addMethod("greaterThan",function(c,b,e){var d=a(e);
if(this.settings.onfocusout&&d.not(".validate-greaterThan-blur").length){d.addClass("validate-greaterThan-blur").on("blur.validate-greaterThan",function(){a(b).valid()
})
}return c>d.val()
},"Please enter a greater value.");
a.validator.addMethod("greaterThanEqual",function(c,b,e){var d=a(e);
if(this.settings.onfocusout&&d.not(".validate-greaterThanEqual-blur").length){d.addClass("validate-greaterThanEqual-blur").on("blur.validate-greaterThanEqual",function(){a(b).valid()
})
}return c>=d.val()
},"Please enter a greater value.");
a.validator.addMethod("iban",function(s,m){if(this.optional(m)){return true
}var h=s.replace(/ /g,"").toUpperCase(),j="",n=true,u="",t="",d,f,e,r,o,b,l,k,c;
var q=5;
if(h.length<q){return false
}d=h.substring(0,2);
b={AL:"\\d{8}[\\dA-Z]{16}",AD:"\\d{8}[\\dA-Z]{12}",AT:"\\d{16}",AZ:"[\\dA-Z]{4}\\d{20}",BE:"\\d{12}",BH:"[A-Z]{4}[\\dA-Z]{14}",BA:"\\d{16}",BR:"\\d{23}[A-Z][\\dA-Z]",BG:"[A-Z]{4}\\d{6}[\\dA-Z]{8}",CR:"\\d{17}",HR:"\\d{17}",CY:"\\d{8}[\\dA-Z]{16}",CZ:"\\d{20}",DK:"\\d{14}",DO:"[A-Z]{4}\\d{20}",EE:"\\d{16}",FO:"\\d{14}",FI:"\\d{14}",FR:"\\d{10}[\\dA-Z]{11}\\d{2}",GE:"[\\dA-Z]{2}\\d{16}",DE:"\\d{18}",GI:"[A-Z]{4}[\\dA-Z]{15}",GR:"\\d{7}[\\dA-Z]{16}",GL:"\\d{14}",GT:"[\\dA-Z]{4}[\\dA-Z]{20}",HU:"\\d{24}",IS:"\\d{22}",IE:"[\\dA-Z]{4}\\d{14}",IL:"\\d{19}",IT:"[A-Z]\\d{10}[\\dA-Z]{12}",KZ:"\\d{3}[\\dA-Z]{13}",KW:"[A-Z]{4}[\\dA-Z]{22}",LV:"[A-Z]{4}[\\dA-Z]{13}",LB:"\\d{4}[\\dA-Z]{20}",LI:"\\d{5}[\\dA-Z]{12}",LT:"\\d{16}",LU:"\\d{3}[\\dA-Z]{13}",MK:"\\d{3}[\\dA-Z]{10}\\d{2}",MT:"[A-Z]{4}\\d{5}[\\dA-Z]{18}",MR:"\\d{23}",MU:"[A-Z]{4}\\d{19}[A-Z]{3}",MC:"\\d{10}[\\dA-Z]{11}\\d{2}",MD:"[\\dA-Z]{2}\\d{18}",ME:"\\d{18}",NL:"[A-Z]{4}\\d{10}",NO:"\\d{11}",PK:"[\\dA-Z]{4}\\d{16}",PS:"[\\dA-Z]{4}\\d{21}",PL:"\\d{24}",PT:"\\d{21}",RO:"[A-Z]{4}[\\dA-Z]{16}",SM:"[A-Z]\\d{10}[\\dA-Z]{12}",SA:"\\d{2}[\\dA-Z]{18}",RS:"\\d{18}",SK:"\\d{20}",SI:"\\d{15}",ES:"\\d{20}",SE:"\\d{20}",CH:"\\d{5}[\\dA-Z]{12}",TN:"\\d{20}",TR:"\\d{5}[\\dA-Z]{17}",AE:"\\d{3}\\d{16}",GB:"[A-Z]{4}\\d{14}",VG:"[\\dA-Z]{4}\\d{16}"};
o=b[d];
if(typeof o!=="undefined"){l=new RegExp("^[A-Z]{2}\\d{2}"+o+"$","");
if(!(l.test(h))){return false
}}f=h.substring(4,h.length)+h.substring(0,4);
for(k=0;
k<f.length;
k++){e=f.charAt(k);
if(e!=="0"){n=false
}if(!n){j+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e)
}}for(c=0;
c<j.length;
c++){r=j.charAt(c);
t=""+u+""+r;
u=t%97
}return u===1
},"Please specify a valid IBAN");
a.validator.addMethod("integer",function(c,b){return this.optional(b)||/^-?\d+$/.test(c)
},"A positive or negative non-decimal number please");
a.validator.addMethod("ipv4",function(c,b){return this.optional(b)||/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(c)
},"Please enter a valid IP v4 address.");
a.validator.addMethod("ipv6",function(c,b){return this.optional(b)||/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(c)
},"Please enter a valid IP v6 address.");
a.validator.addMethod("lessThan",function(c,b,e){var d=a(e);
if(this.settings.onfocusout&&d.not(".validate-lessThan-blur").length){d.addClass("validate-lessThan-blur").on("blur.validate-lessThan",function(){a(b).valid()
})
}return c<d.val()
},"Please enter a lesser value.");
a.validator.addMethod("lessThanEqual",function(c,b,e){var d=a(e);
if(this.settings.onfocusout&&d.not(".validate-lessThanEqual-blur").length){d.addClass("validate-lessThanEqual-blur").on("blur.validate-lessThanEqual",function(){a(b).valid()
})
}return c<=d.val()
},"Please enter a lesser value.");
a.validator.addMethod("lettersonly",function(c,b){return this.optional(b)||/^[a-z]+$/i.test(c)
},"Letters only please");
a.validator.addMethod("letterswithbasicpunc",function(c,b){return this.optional(b)||/^[a-z\-.,()'"\s]+$/i.test(c)
},"Letters or punctuation only please");
a.validator.addMethod("maxfiles",function(c,b,d){if(this.optional(b)){return true
}if(a(b).attr("type")==="file"){if(b.files&&b.files.length>d){return false
}}return true
},a.validator.format("Please select no more than {0} files."));
a.validator.addMethod("maxsize",function(d,c,e){if(this.optional(c)){return true
}if(a(c).attr("type")==="file"){if(c.files&&c.files.length){for(var b=0;
b<c.files.length;
b++){if(c.files[b].size>e){return false
}}}}return true
},a.validator.format("File size must not exceed {0} bytes each."));
a.validator.addMethod("maxsizetotal",function(e,d,f){if(this.optional(d)){return true
}if(a(d).attr("type")==="file"){if(d.files&&d.files.length){var b=0;
for(var c=0;
c<d.files.length;
c++){b+=d.files[c].size;
if(b>f){return false
}}}}return true
},a.validator.format("Total size of all files must not exceed {0} bytes."));
a.validator.addMethod("mobileNL",function(c,b){return this.optional(b)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(c)
},"Please specify a valid mobile number");
a.validator.addMethod("mobileRU",function(b,c){var d=b.replace(/\(|\)|\s+|-/g,"");
return this.optional(c)||d.length>9&&/^((\+7|7|8)+([0-9]){10})$/.test(d)
},"Please specify a valid mobile number");
a.validator.addMethod("mobileUK",function(b,c){b=b.replace(/\(|\)|\s+|-/g,"");
return this.optional(c)||b.length>9&&b.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
},"Please specify a valid mobile number");
a.validator.addMethod("netmask",function(c,b){return this.optional(b)||/^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)/i.test(c)
},"Please enter a valid netmask.");
a.validator.addMethod("nieES",function(h,c){if(this.optional(c)){return true
}var f=new RegExp(/^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi);
var b="TRWAGMYFPDXBNJZSQVHLCKET",e=h.substr(h.length-1).toUpperCase(),d;
h=h.toString().toUpperCase();
if(h.length>10||h.length<9||!f.test(h)){return false
}h=h.replace(/^[X]/,"0").replace(/^[Y]/,"1").replace(/^[Z]/,"2");
d=h.length===9?h.substr(0,8):h.substr(0,9);
return b.charAt(parseInt(d,10)%23)===e
},"Please specify a valid NIE number.");
a.validator.addMethod("nifES",function(c,b){if(this.optional(b)){return true
}c=c.toUpperCase();
if(!c.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")){return false
}if(/^[0-9]{8}[A-Z]{1}$/.test(c)){return("TRWAGMYFPDXBNJZSQVHLCKE".charAt(c.substring(8,0)%23)===c.charAt(8))
}if(/^[KLM]{1}/.test(c)){return(c[8]==="TRWAGMYFPDXBNJZSQVHLCKE".charAt(c.substring(8,1)%23))
}return false
},"Please specify a valid NIF number.");
a.validator.addMethod("nipPL",function(f){f=f.replace(/[^0-9]/g,"");
if(f.length!==10){return false
}var e=[6,5,7,2,3,4,5,6,7];
var b=0;
for(var c=0;
c<9;
c++){b+=e[c]*f[c]
}var h=b%11;
var d=(h===10)?0:h;
return(d===parseInt(f[9],10))
},"Please specify a valid NIP number.");
a.validator.addMethod("nisBR",function(f){var e;
var i;
var c=0;
var b;
var d;
var h;
f=f.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g,"");
if(f.length!==11){return false
}i=parseInt(f.substring(10,11),10);
e=parseInt(f.substring(0,10),10);
for(d=2;
d<12;
d++){h=d;
if(d===10){h=2
}if(d===11){h=3
}c+=((e%10)*h);
e=parseInt(e/10,10)
}b=(c%11);
if(b>1){b=(11-b)
}else{b=0
}if(i===b){return true
}else{return false
}},"Please specify a valid NIS/PIS number");
a.validator.addMethod("notEqualTo",function(c,b,d){return this.optional(b)||!a.validator.methods.equalTo.call(this,c,b,d)
},"Please enter a different value, values must not be the same.");
a.validator.addMethod("nowhitespace",function(c,b){return this.optional(b)||/^\S+$/i.test(c)
},"No white space please");
a.validator.addMethod("pattern",function(c,b,d){if(this.optional(b)){return true
}if(typeof d==="string"){d=new RegExp("^(?:"+d+")$")
}return d.test(c)
},"Invalid format.");
a.validator.addMethod("phoneNL",function(c,b){return this.optional(b)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(c)
},"Please specify a valid phone number.");
a.validator.addMethod("phonePL",function(b,c){b=b.replace(/\s+/g,"");
var d=/^(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}$/;
return this.optional(c)||d.test(b)
},"Please specify a valid phone number");
a.validator.addMethod("phonesUK",function(b,c){b=b.replace(/\(|\)|\s+|-/g,"");
return this.optional(c)||b.length>9&&b.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)
},"Please specify a valid uk phone number");
a.validator.addMethod("phoneUK",function(b,c){b=b.replace(/\(|\)|\s+|-/g,"");
return this.optional(c)||b.length>9&&b.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)
},"Please specify a valid phone number");
a.validator.addMethod("phoneUS",function(b,c){b=b.replace(/\s+/g,"");
return this.optional(c)||b.length>9&&b.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]\d{2}-?\d{4}$/)
},"Please specify a valid phone number");
a.validator.addMethod("postalcodeBR",function(c,b){return this.optional(b)||/^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(c)
},"Informe um CEP válido.");
a.validator.addMethod("postalCodeCA",function(c,b){return this.optional(b)||/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(c)
},"Please specify a valid postal code");
a.validator.addMethod("postalcodeIT",function(c,b){return this.optional(b)||/^\d{5}$/.test(c)
},"Please specify a valid postal code");
a.validator.addMethod("postalcodeNL",function(c,b){return this.optional(b)||/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(c)
},"Please specify a valid postal code");
a.validator.addMethod("postcodeUK",function(c,b){return this.optional(b)||/^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(c)
},"Please specify a valid UK postcode");
a.validator.addMethod("require_from_group",function(f,e,c){var b=a(c[1],e.form),i=b.eq(0),d=i.data("valid_req_grp")?i.data("valid_req_grp"):a.extend({},this),h=b.filter(function(){return d.elementValue(this)
}).length>=c[0];
i.data("valid_req_grp",d);
if(!a(e).data("being_validated")){b.data("being_validated",true);
b.each(function(){d.element(this)
});
b.data("being_validated",false)
}return h
},a.validator.format("Please fill at least {0} of these fields."));
a.validator.addMethod("skip_or_fill_minimum",function(f,e,c){var b=a(c[1],e.form),j=b.eq(0),d=j.data("valid_skip")?j.data("valid_skip"):a.extend({},this),i=b.filter(function(){return d.elementValue(this)
}).length,h=i===0||i>=c[0];
j.data("valid_skip",d);
if(!a(e).data("being_validated")){b.data("being_validated",true);
b.each(function(){d.element(this)
});
b.data("being_validated",false)
}return h
},a.validator.format("Please either skip these fields or fill at least {0} of them."));
a.validator.addMethod("stateUS",function(i,e,d){var h=typeof d==="undefined",b=(h||typeof d.caseSensitive==="undefined")?false:d.caseSensitive,j=(h||typeof d.includeTerritories==="undefined")?false:d.includeTerritories,c=(h||typeof d.includeMilitary==="undefined")?false:d.includeMilitary,f;
if(!j&&!c){f="^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$"
}else{if(j&&c){f="^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$"
}else{if(j){f="^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$"
}else{f="^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$"
}}}f=b?new RegExp(f):new RegExp(f,"i");
return this.optional(e)||f.test(i)
},"Please specify a valid state");
a.validator.addMethod("strippedminlength",function(c,b,d){return a(c).text().length>=d
},a.validator.format("Please enter at least {0} characters"));
a.validator.addMethod("time",function(c,b){return this.optional(b)||/^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(c)
},"Please enter a valid time, between 00:00 and 23:59");
a.validator.addMethod("time12h",function(c,b){return this.optional(b)||/^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(c)
},"Please enter a valid time in 12-hour am/pm format");
a.validator.addMethod("url2",function(c,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(c)
},a.validator.messages.url);
a.validator.addMethod("vinUS",function(q){if(q.length!==17){return false
}var e=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"],p=[1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9],h=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],j=0,k,c,o,l,b,m;
for(k=0;
k<17;
k++){l=h[k];
o=q.slice(k,k+1);
if(k===8){m=o
}if(!isNaN(o)){o*=l
}else{for(c=0;
c<e.length;
c++){if(o.toUpperCase()===e[c]){o=p[c];
o*=l;
if(isNaN(m)&&c===8){m=e[c]
}break
}}}j+=o
}b=j%11;
if(b===10){b="X"
}if(b===m){return true
}return false
},"The specified vehicle identification number (VIN) is invalid.");
a.validator.addMethod("zipcodeUS",function(c,b){return this.optional(b)||/^\d{5}(-\d{4})?$/.test(c)
},"The specified US ZIP Code is invalid");
a.validator.addMethod("ziprange",function(c,b){return this.optional(b)||/^90[2-5]\d\{2\}-\d{4}$/.test(c)
},"Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx");
return a
}));
$.validator.setDefaults({ignore:".ignore"});
$(document).ready(function(){$.fn.scrollView=function(){return this.each(function(){var e=$(this);
var d=e.offset().top;
var c=$(window).scrollTop();
if(d<=c||d>=(c+window.innerHeight)){$("html, body").animate({scrollTop:d-160},1000)
}})
};
if($(".g-recaptcha").length>0){var b=document.createElement("script");
b.type="text/javascript";
b.async=true;
b.src="//www.google.com/recaptcha/api.js?onload=googleReCaptchaCallback&render=explicit&hl=en";
var a=document.getElementsByTagName("script")[0];
a.parentNode.insertBefore(b,a)
}$(document).on("click",".js-form-button-prev",function(f){f.preventDefault();
var d=$(this);
var c=d;
while(!c.parent().is("form")){c=c.parent()
}if(c.prevAll(".js-form-break:first").length){c=c.prevAll(".js-form-break:first")
}if(c.prevUntil(".js-form-break").length){c.prevUntil(".js-form-break").show().attr("aria-hidden",false)
}else{c.prevAll().show().attr("aria-hidden",false)
}if(c.nextUntil(".js-form-break").length){c.nextUntil(".js-form-break").addBack().hide().attr("aria-hidden",true)
}else{c.nextAll().addBack().hide().attr("aria-hidden",true)
}});
$(document).on("click",".js-form-button-next",function(i){i.preventDefault();
var h=$(this);
var d=h.closest("form");
var f=d.find("textarea:visible,input:visible,select:visible,.g-recaptcha:visible + input");
if(f.length&&f.valid()===false){f.filter("[aria-invalid='true']:first").scrollView();
return
}var c=h;
while(!c.parent().is("form")){c=c.parent()
}if(c.nextAll(".js-form-break:first").length){c=c.nextAll(".js-form-break:first")
}if(c.nextUntil(".js-form-break").length){c.nextUntil(".js-form-break").show().attr("aria-hidden",false)
}else{c.nextAll().show().attr("aria-hidden",false)
}if(c.prevUntil(".js-form-break").length){c.prevUntil(".js-form-break").addBack().hide().attr("aria-hidden",true)
}else{c.prevAll().addBack().hide().attr("aria-hidden",true)
}})
});
window.googleReCaptchaCallback=function(){$(".g-recaptcha").each(function(a,b){$this=$(this);
var c=grecaptcha.render(b,{sitekey:$this.data("sitekey"),callback:window[$this.data("callback")],"expired-callback":window[$this.data("expiredCallback")]});
$(b).parents("form").data("captcha",c)
})
};
window.googleReCaptchaCallbackUser=function(a){$("form").each(function(d,f){var c=$(f).data("captcha");
if(typeof c!=="undefined"){var e=grecaptcha.getResponse(c);
var b=$(this).find(".g-recaptcha").next();
if(typeof e!=="undefined"){b.val("success")
}b.valid()
}})
};
$(document).ready(function(){$(".accordion-item > div:not(.border) .headingText").on("click",function(b){b.preventDefault();
$(this).siblings(".accordion-item-components").slideToggle(200);
$(this).parent().toggleClass("closed open")
});
$(".accordion-item > div.border .headingText").on("click",function(b){b.preventDefault();
$(this).parent().toggleClass("closed open")
});
if(window.location.hash){var a=window.location.hash;
openCloseAccordion(a)
}$("a[href^=#]").not("[href=#]").not(".accordion-items a").click(function(){var b=$(this).attr("href");
openCloseAccordion(b)
})
});
function openCloseAccordion(b){try{$(".accordion-item > "+b+".closed").removeClass("closed").addClass("open").find(".accordion-item-components").slideDown(200);
$(".accordion-item > :not("+b+")").removeClass("open").addClass("closed").find(".accordion-item-components").slideUp(200)
}catch(a){}}$(function(){var e=$("#promo .filterable-content-item").length;
var b=$("#promo .filterable-content-item:visible").length;
$(".promo.author-tools input").change(function(){var h=$(".author-tools input[name='item-status']:checked").val();
var i=$(".author-tools input[name='item-expiry']:checked").val();
$(".filterable-content-item").hide();
if(h=="all"&&i=="all"){$(".filterable-content-item[item-status][item-expiry]").fadeIn()
}else{if(h=="all"){$(".filterable-content-item[item-status][item-expiry="+i+"]").fadeIn()
}else{if(i=="all"){$(".filterable-content-item[item-status="+h+"][item-expiry]").fadeIn()
}else{$(".filterable-content-item[item-status="+h+"][item-expiry="+i+"]").fadeIn()
}}}b=$(".filterable-content-item:visible").length
});
$("#promo .filterable-content-filters select").change(function(){var i="";
var j=null;
var h=null;
$(".filterable-content-filters select").each(function(m,l){j=$("option:selected",this).val();
h=$(this).attr("filter");
if(j!="all"){i+="["+h+'="'+j+'"]'
}});
$(".filterable-content-item").hide();
$(".filterable-content-item"+i).fadeIn();
b=$("#promo .filterable-content-item:visible").length;
a();
f()
});
var c="Collapse view";
$(".expand-items").on("click",function(i){i.preventDefault();
var h=$(this).text();
if(h=="Collapse view"){$(".filterable-content-item[view='regular']").removeClass("featured").addClass("regular").on("click",d)
}else{$(".filterable-content-item[view='regular']").removeClass("regular").addClass("featured").off("click")
}$(this).text(c);
c=h
});
var d=function(){if($("body").hasClass("mobile")){if($(this).hasClass("featured")){$(this).removeClass("featured").addClass("regular")
}else{$(".filterable-content-item[view='regular']").removeClass("featured").addClass("regular");
$(this).removeClass("regular").addClass("featured")
}}else{var h=$(this).clone();
$(h).removeClass("regular").addClass("featured");
$.modal(h,{maxWidth:640,minHeight:200,maxHeight:600,autoResize:true,onShow:function(i){i.container.css("height","auto")
}})
}};
$("#promo .filterable-content-item.regular").attr("view","regular").on("click",d);
var a=function(){if(b>0){$(".filterable-content-items .no-results").hide()
}else{$(".filterable-content-items .no-results").fadeIn()
}};
var f=function(){var h="Showing "+b+" of "+e;
$("#promo .item-count").text(h)
};
f()
});
$(function(){var b=$("#card .filterable-content-filters select");
var e=$("#card .filterable-content-filters div.filters button.multiselect");
var k=$("#card .filterable-content-item").length;
var j=$("#card .filterable-content-item:visible").length;
$(e).on("click",function(){$(this).parents(".section").siblings().find(".filter-options").removeClass("active");
$(this).next(".filter-options").toggleClass("active")
});
$("#card button.parent").on("click",function(){$(".filters-wrapper div.section.filter").toggleClass("active")
});
$(".card.author-tools input").change(function(){var m=$(".author-tools input[name='item-status']:checked").val();
var n=$(".author-tools input[name='item-expiry']:checked").val();
$(".filterable-content-item").parent().hide();
if(m=="all"&&n=="all"){$(".filterable-content-item[data-item-status][data-item-expiry]").parent().fadeIn()
}else{if(m=="all"){$(".filterable-content-item[data-item-status][data-item-expiry="+n+"]").parent().fadeIn()
}else{if(n=="all"){$(".filterable-content-item[data-item-status="+m+"][data-item-expiry]").parent().fadeIn()
}else{$(".filterable-content-item[data-item-status="+m+"][data-item-expiry="+n+"]").parent().fadeIn()
}}}a()
});
$(e).next(".filter-options").find(".close").on("click",function(){$(this).parents(".filter-options").removeClass("active")
});
$(document).on("click",function(m){if(!$(m.target).is("div.filter")&&!$(m.target).parents("div.filter").is("div.filter")){$(".filter-options").removeClass("active")
}});
$("#card .filter-options .filter-option").on("click",function(){var m=$(this).parents(".filter").attr("multiple")?true:false;
var o=$(this).data("filter");
var q=$(this).data("value");
var r=$(".filterable-content-filters select[filter="+o+"]");
var p=$(this).attr("data-selected");
if(m){$(this).attr("data-selected",p=="true"?"false":"true");
if(p=="true"){$("option[value="+q+"]",r).removeAttr("selected")
}else{$('option[value="all"]',r).removeAttr("selected");
$("option[value="+q+"]",r).prop("selected",true)
}var n=$(this).parent(".filter-options").find('.filter-option[data-selected="true"]');
if(n.length==0){$('option[value="all"]',r).prop("selected",true)
}}else{$(this).parent(".filter-options").find(".filter-option").attr("data-selected","false");
$(this).attr("data-selected",p=="true"?"false":"true");
$("option",r).removeAttr("selected");
if(p=="true"){$('option[value="all"]',r).prop("selected",true)
}else{$("option[value="+q+"]",r).prop("selected",true)
}}$(r).change()
});
$(b).change(function(){h();
j=$(".filterable-content-item:visible").length;
d();
a()
});
$("#card.filterable-content-container .tags").on("click","i",function(){var o=$(this).parent().data("value");
var n=$(this).parent().data("filter");
var m="";
if(n=="clear-all"){$(b).each(function(){m=$(this).attr("filter");
l(m,false)
});
$(".tags .tag").remove();
$(".filterable-content-filters select[filter="+m+"]").change()
}else{l(n,o);
$(this).parent().remove();
$(".filterable-content-filters select[filter="+n+"]").change()
}});
var l=function(m,o){var p=$(".filterable-content-filters select[filter="+m+"]");
if(o){$("option[value="+o+"]",p).attr("selected",false);
$(".filter-option[data-filter="+m+"][data-value="+o+"]").attr("data-selected",false)
}else{$("option",p).attr("selected",false);
$(".filter-option").attr("data-selected",false)
}var n=c();
if(n[m].values==null){$('option[value="all"]',p).attr("selected",true)
}};
var c=function(){var m={};
$("#card .filterable-content-filters select").each(function(r,q){var p=$(this).val();
var t=[];
var n=$(this).attr("multiple")?true:false;
var s=$(this).attr("filter");
var o="OR";
if(p&&n){o="AND"
}$("option:selected",this).each(function(){var u=$(this).val();
if(u!="all"){t.push($(this).text())
}});
m[s]={};
m[s]["multiple"]=n;
m[s]["operator"]=o;
m[s]["values"]=p;
m[s]["labels"]=t
});
return m
};
var d=function(){if(j>0){$(".filterable-content-items .no-results").hide()
}else{$(".filterable-content-items .no-results").fadeIn()
}};
var a=function(){var m="Showing "+j+" of "+k+" results";
$("#card .item-count").text(m)
};
var i=function(){return $('.filter-options .filter-option[data-selected="true"]').length
};
var h=function(){var n=c();
var q=$(".filterable-content-item");
var p=[];
var s="";
var r=[];
var o=0;
var m=[];
$(".filterable-content-item").parent().hide();
$.each(n,function(u,t){if(t.multiple){$.each(t.values,function(v,w){if(t.values!="all"){r[o]="[data-"+u+"-"+w+"]";
m.push('<span class="tag" data-filter="'+u+'" data-value="'+t.values[v]+'">'+t.labels[v]+'<i class="fa fa-times"></i></span');
o++
}})
}else{if(t.values!="all"){s+="[data-"+u+"-"+t.values+"]";
m.push('<span class="tag" data-filter="'+u+'" data-value="'+t.values+'">'+t.labels+'<i class="fa fa-times"></i></span')
}}});
if(i()){m.push('<span class="tag" data-filter="clear-all" data-value="clear-all">Clear all<i class="fa fa-times"></i></span')
}if(r.length>0){$.each(r,function(t,u){p[t]=u+s
});
if(p){q=document.body.querySelectorAll(p)
}$(q).parent().fadeIn()
}else{p=s;
if(p){q=document.body.querySelectorAll(p)
}$(q).parent().fadeIn()
}$(".tags").html(m)
};
var f=function(){var m=[];
var n=[];
m=$(".filter-option");
n=$(".filter-options");
$.each(m,function(o,p){if($("div[data-"+p.dataset.filter+"-"+p.dataset.value+"]").length==0){$("div.filter-option[data-value="+p.dataset.value+"]").hide()
}else{$("div.filter-option[data-value="+p.dataset.value+"]").show()
}});
$.each(n,function(q,s){var p=$(this);
var r=$(s).children("div.filter-option[style*='display: none']").length;
var o=$(s).children("div.filter-option").length;
if(o==r){p.html("<span class='message'>No Filters available</span>")
}})
};
a();
f()
});
/*! Copyright © 2009-2016 Postcode Anywhere (Holdings) Ltd. (http://www.postcodeanywhere.co.uk)
 *
 * AddressComplete v2.30
 * Capture Plus for the web.
 *
 * WEB-2-3 01/03/2016 00:09:37
 */
(function(n,t){function e(){r.addEventListener?(i.ignore(r,"DOMContentLoaded",e),f=!0,i.ready()):r.readyState==="complete"&&(i.ignore(r,"onreadystatechange",e),f=!0,i.ready())
}function v(){r.readyState==="complete"?(f=!0,i.ready()):(r.addEventListener?i.listen(r,"DOMContentLoaded",e):i.listen(r,"onreadystatechange",e),i.listen(n,"load",e))
}function s(t){if(i.blockRequests&&i.waitingRequest){i.requestQueue=[t];
return
}if(t.block&&(i.blockRequests=!0),t.queue&&i.waitingRequest){i.requestQueue.push(t);
return
}if(i.waitingRequest=!0,t.cache&&i.requestCache[t.url]){function r(){t.callback(i.requestCache[t.url].response)
}n.setImmediate?n.setImmediate(r):n.setTimeout(r,1);
return
}t.post?h(t):a(t)
}function y(n){i.waitingRequest=!1,n.block&&(i.blockRequests=!1),n.response.Items.length===1&&n.response.Items[0].Error!==t?n.error(n.response.Items[0].Description):n.success(n.response.Items,n.response),n.cache&&(i.requestCache[n.url]=n),n.position&&(i.scriptRequests[n.position-1]=null),i.requestQueue.length&&s(i.requestQueue.shift())
}function a(n){navigator.appName=="Microsoft Internet Explorer"?w(n):p(n)
}function p(n){var t=new i.XMLHttpRequest;
n.url.length>i.limit?(n.post=!0,h(n)):(t.onreadystatechange=function(){t.readyState==4&&t.status==200&&n.callback(i.parseJSON(t.responseText))
},n.credentials&&(t.withCredentials=n.credentials),t.onerror=n.serviceError,t.ontimeout=n.timeoutError,t.open("GET",n.url,!0),t.send())
}function w(n){var t=i.create("script",{type:"text/javascript",async:"async"}),u=r.getElementsByTagName("head")[0];
n.position=i.scriptRequests.push(n),t.src=n.url+"&callback=pca.scriptRequests["+(n.position-1)+"].callback",t.onload=t.onreadystatechange=function(){this.readyState&&this.readyState!=="loaded"&&this.readyState!=="complete"||(t.onload=t.onreadystatechange=null,u&&t.parentNode&&u.removeChild(t))
},t.src.length>i.limit?(n.post=!0,h(n)):u.insertBefore(t,u.firstChild)
}function h(n){navigator.appName=="Microsoft Internet Explorer"?l(n):c(n)
}function c(n){var t=new i.XMLHttpRequest;
t.onreadystatechange=function(){t.readyState==4&&t.status==200&&n.callback(i.parseJSON(t.responseText))
},n.credentials&&(t.withCredentials=n.credentials),t.onerror=n.serviceError,t.ontimeout=n.timeoutError,t.open("POST",n.destination,!0),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),t.send(n.query)
}function l(n){function o(n,t){var i=r.createElement("input");
i.name=n,i.value=t,u.appendChild(i)
}var u=r.createElement("form"),t=r.createElement("iframe"),s=!1,e,f;
u.method="POST",u.action=i.protocol+"//"+i.host+"/"+n.service+"/json.ws";
for(e in n.data){o(e,n.data[e])
}o("CallbackVariable","window.name"),o("CallbackWithScriptTags","true"),t.onload=function(){s?(n.callback({Items:i.parseJSON(t.contentWindow.name)}),r.body.removeChild(t)):(s=!0,t.contentWindow.location="about:blank")
},t.style.display="none",r.body.appendChild(t),f=t.contentDocument||t.contentWindow.document,f.body?f.body.appendChild(u):f.appendChild(u),u.submit()
}function u(t){return t==n||t==r||t==r.body
}var i=n.pca=n.pca||{},r=n.document,f,o;
i.protocol=(n.location||r.location).protocol=="https:"?"https:":"http:",i.host="ws1.postescanada-canadapost.ca",i.endpoint="json3ex.ws",i.limit=2000,i.synonyms=[{r:/\bN(?=\s)/,w:"NORTH"},{r:/\b(?:NE|NORTHEAST)(?=\s)/,w:"NORTH EAST"},{r:/\b(?:NW|NORTHWEST)(?=\s)/,w:"NORTH WEST"},{r:/\bS(?=\s)/,w:"SOUTH"},{r:/\b(?:SE|SOUTHEAST)(?=\s)/,w:"SOUTH EAST"},{r:/\b(?:SW|SOUTHWEST)(?=\s)/,w:"SOUTH WEST"},{r:/\bE(?=\s)/,w:"EAST"},{r:/\bW(?=\s)/,w:"WEST"},{r:/\bST(?=\s)/,w:"SAINT"}],i.diacritics=[{r:/[ÀÁÂÃ]/gi,w:"A"},{r:/Å/gi,w:"AA"},{r:/[ÆæÄ]/gi,w:"AE"},{r:/Ç/gi,w:"C"},{r:/Ð/gi,w:"DJ"},{r:/[ÈÉÊË]/gi,w:"E"},{r:/[ÌÍÏ]/gi,w:"I"},{r:/Ñ/gi,w:"N"},{r:/[ÒÓÔÕ]/gi,w:"O"},{r:/[ŒØÖ]/gi,w:"OE"},{r:/Š/gi,w:"SH"},{r:/ß/gi,w:"SS"},{r:/[ÙÚÛ]/gi,w:"U"},{r:/Ü/gi,w:"UE"},{r:/[ŸÝ]/gi,w:"ZH"},{r:/-/gi,w:" "},{r:/[.,]/gi,w:""}],i.hypertext=[{r:/&/g,w:"&amp;"},{r:/"/g,w:"&quot;"},{r:/'/g,w:"&#39;"},{r:/</g,w:"&lt;"},{r:/>/g,w:"&gt;"}],i.requestQueue=[],i.requestCache={},i.scriptRequests=[],i.waitingRequest=!1,i.blockRequests=!1,i.styleFixes=[],i.agent=navigator&&navigator.userAgent||"",i.galaxyFix=/Safari\/534.30/.test(i.agent)&&/GT-I8190|GT-I9100|GT-I9305|GT-P3110/.test(i.agent),i.container=null,i.XMLHttpRequest=n.XMLHttpRequest,f=!1,o=[],i.fuzzyMatch=!0,i.fuzzyTags=["*"],i.ready=function(n){var i,t;
if(f){if(o.length){for(i=o,o=[],t=0;
t<i.length;
t++){i[t]()
}}n&&n()
}else{typeof n=="function"&&o.push(n)
}},i.Eventable=function(n){var t=n||this;
return t.listeners={},t.listen=function(n,i){t.listeners[n]=t.listeners[n]||[],t.listeners[n].push(i)
},t.ignore=function(n,i){if(t.listeners[n]){for(var r=0;
r<t.listeners[n].length;
r++){if(t.listeners[n][r]===i){t.listeners[n].splice(r,1);
break
}}}},t.fire=function(n,i){var u,f,r;
if(t.listeners[n]){for(u=0;
u<t.listeners[n].length;
u++){for(f=[i],r=2;
r<arguments.length;
r++){f.push(arguments[r])
}t.listeners[n][u].apply(t,f)
}}},t
},i.Request=function(n,t,r,u){var f=new i.Eventable(this),e;
f.service=n||"",f.data=t||{},f.success=r||function(){},f.error=u||function(){},f.response=null,f.cache=!!f.data.$cache,f.queue=!!f.data.$queue,f.block=!!f.data.$block,f.post=!!f.data.$post,f.credentials=!!f.data.$credentials,f.destination=~f.service.indexOf("//")?f.service:i.protocol+"//"+i.host+"/"+f.service+"/"+i.endpoint,f.query="";
for(e in f.data){f.query+=(f.query?"&":"")+e+"="+encodeURIComponent(f.data[e])
}f.url=f.destination+"?"+f.query,f.callback=function(n){f.response=n,y(f)
},f.serviceError=function(n){f.error(n&&n.currentTarget&&n.currentTarget.statusText?"Webservice request error: "+n.currentTarget.statusText:"Webservice request failed.")
},f.timeoutError=function(){f.error("Webservice request timed out.")
},f.process=function(){i.process(f)
}
},i.process=function(n){s(n)
},i.fetch=function(n,t,r,u){s(new i.Request(n,t,r,u))
},i.clearBlockingRequests=function(){i.waitingRequest=!1,i.blockRequests=!1
},i.loadScript=function(n,t,u){var f=i.create("script",{type:"text/javascript"}),e=(u||r).getElementsByTagName("head")[0];
f.onload=f.onreadystatechange=function(){this.readyState&&this.readyState!=="loaded"&&this.readyState!=="complete"||(f.onload=f.onreadystatechange=null,(t||function(){})())
},f.src=(~n.indexOf("/")?"":i.protocol+"//"+i.host+"/js/")+n,e.insertBefore(f,e.firstChild)
},i.loadStyle=function(n,t,u){var f=i.create("link",{type:"text/css",rel:"stylesheet"}),e=(u||r).getElementsByTagName("head")[0];
f.onload=f.onreadystatechange=function(){this.readyState&&this.readyState!=="loaded"&&this.readyState!=="complete"||(f.onload=f.onreadystatechange=null,(t||function(){})())
},f.href=(~n.indexOf("/")?"":i.protocol+"//"+i.host+"/css/")+n,e.insertBefore(f,e.firstChild)
},i.Item=function(n,t){var r=new i.Eventable(this),u="pcaselected";
return r.data=n,r.format=t,r.html=i.formatLine(n,t),r.title=n.title||i.removeHtml(r.html),r.tag=i.formatTag(n.tag||r.html),r.element=i.create("div",{className:"pcaitem",innerHTML:r.html,title:r.title}),r.visible=!0,r.highlight=function(){return i.addClass(r.element,u),r.fire("highlight"),r
},r.lowlight=function(){return i.removeClass(r.element,u),r.fire("lowlight"),r
},r.mouseover=function(){r.fire("mouseover")
},r.mouseout=function(){r.fire("mouseout")
},r.mousedown=function(){r.fire("mousedown")
},r.mouseup=function(){r.fire("mouseup"),i.galaxyFix&&r.select()
},r.click=function(){(r.fire("click"),i.galaxyFix)||r.select()
},r.select=function(){return r.fire("select",r.data),r
},r.hide=function(){return r.visible=!1,r.element.style.display="none",r.fire("hide"),r
},r.show=function(){return r.visible=!0,r.element.style.display="",r.fire("show"),r
},i.listen(r.element,"mouseover",r.mouseover),i.listen(r.element,"mouseout",r.mouseout),i.listen(r.element,"mousedown",r.mousedown),i.listen(r.element,"mouseup",r.mouseup),i.listen(r.element,"click",r.click),r
},i.Collection=function(){var n=new i.Eventable(this);
return n.items=[],n.highlighted=-1,n.count=0,n.firstItem=null,n.lastItem=null,n.firstVisibleItem=null,n.lastVisibleItem=null,n.add=function(t,r,u){function o(t){var f=new i.Item(t,r);
return f.listen("mouseover",function(){n.highlight(f)
}),f.listen("select",function(t){n.fire("select",t),u(t)
}),n.items.push(f),e.push(f),f
}var e=[],f;
if(u=u||function(){},t.length){for(f=0;
f<t.length;
f++){o(t[f])
}}else{o(t)
}return n.count+=t.length,n.firstVisibleItem=n.firstItem=n.items[0],n.lastVisibleItem=n.lastItem=n.items[n.items.length-1],n.fire("add",e),n
},n.sort=function(t){return n.items.sort(function(n,i){return t?n.data[t]>i.data[t]?1:-1:n.tag>i.tag?1:-1
}),n.fire("sort"),n
},n.reverse=function(){return n.items.reverse(),n.fire("reverse"),n
},n.filter=function(t){var u=i.formatTag(t),r=n.count;
return n.count=0,n.firstVisibleItem=null,n.lastVisibleItem=null,n.all(function(t){~t.tag.indexOf(u)?(t.show(),n.count++,n.firstVisibleItem=n.firstVisibleItem||t,n.lastVisibleItem=t):t.hide()
}),r!=n.count&&n.fire("filter"),n
},n.match=function(t){var u=i.formatTag(t),r=[];
return n.all(function(n){~n.tag.indexOf(u)&&r.push(n)
}),r
},n.clear=function(){return n.items=[],n.count=0,n.highlighted=-1,n.firstItem=null,n.lastItem=null,n.firstVisibleItem=null,n.lastVisibleItem=null,n.fire("clear"),n
},n.all=function(t){for(var i=0;
i<n.items.length;
i++){if(t(n.items[i],i)===!1){break
}}return n
},n.highlight=function(t){return ~n.highlighted&&n.items[n.highlighted].lowlight(),n.highlighted=n.index(t),~n.highlighted&&n.items[n.highlighted].highlight(),n.fire("highlight",t),n
},n.index=function(t){for(var i=0;
i<n.items.length;
i++){if(n.items[i]==t){return i
}}return -1
},n.first=function(t){for(var i=0;
i<n.items.length;
i++){if(t?t(n.items[i]):n.items[i].visible){return n.items[i]
}}return null
},n.last=function(t){for(var i=n.items.length-1;
i>=0;
i--){if(t?t(n.items[i]):n.items[i].visible){return n.items[i]
}}return null
},n.next=function(t){for(var i=n.highlighted+1;
i<n.items.length;
i++){if(t?t(n.items[i]):n.items[i].visible){return n.items[i]
}}return n.first()
},n.previous=function(t){for(var i=n.highlighted-1;
i>=0;
i--){if(t?t(n.items[i]):n.items[i].visible){return n.items[i]
}}return n.last()
},n.visibleItems=function(){var t=[];
return n.all(function(n){n.visible&&t.push(n)
}),t
},n
},i.List=function(t){function u(n,t,u){var f=new i.Item(n,t);
return f.listen("mouseover",function(){r.collection.highlight(f),f.highlight()
}),r.collection.listen("highlight",f.lowlight),f.listen("select",function(n){r.collection.fire("select",n),u(n)
}),f
}var r=new i.Eventable(this);
return r.options=t||{},r.element=i.create("div",{className:"pca pcalist"}),r.collection=new i.Collection,r.visible=!0,r.scroll={held:!1,moved:!1,origin:0,position:0,x:0,y:0,dx:0,dy:0},r.highlightedItem=null,r.headerItem=null,r.footerItem=null,r.firstItem=null,r.lastItem=null,r.firstItemClass="pcafirstitem",r.lastItemClass="pcalastitem",r.options.minItems=r.options.minItems||0,r.options.maxItems=r.options.maxItems||10,r.options.allowTab=r.options.allowTab||!1,r.show=function(){return r.visible=!0,r.element.style.display="",r.fire("show"),r.resize(),r
},r.hide=function(){return r.visible=!1,r.element.style.display="none",r.fire("hide"),r
},r.draw=function(){return r.destroy(),r.headerItem&&r.element.appendChild(r.headerItem.element),r.collection.all(function(n){r.element.appendChild(n.element)
}),r.footerItem&&r.element.appendChild(r.footerItem.element),r.resize(),r.fire("draw"),r
},r.markItems=function(){r.firstItem&&i.removeClass(r.firstItem.element,r.firstItemClass),r.lastItem&&i.removeClass(r.lastItem.element,r.lastItemClass),r.collection.count&&(r.firstItem=r.headerItem||r.collection.firstVisibleItem,r.lastItem=r.footerItem||r.collection.lastVisibleItem,i.addClass(r.firstItem.element,r.firstItemClass),i.addClass(r.lastItem.element,r.lastItemClass))
},r.add=function(n,t,i){return r.collection.add(n,t,i),r.draw(),r
},r.destroy=function(){while(r.element.childNodes&&r.element.childNodes.length){r.element.removeChild(r.element.childNodes[0])
}return r
},r.clear=function(){return r.collection.clear(),r.destroy(),r.fire("clear"),r
},r.setScroll=function(n){return r.element.scrollTop=n,r.fire("scroll"),r
},r.enableTouch=function(){function f(t){t=t||n.event,r.scroll.held=!0,r.scroll.moved=!1,r.scroll.origin=parseInt(r.scrollTop),r.scroll.y=parseInt(t.touches[0].pageY)
}function e(){r.scroll.held=!1
}function t(){r.scroll.held=!1
}function u(t){r.scroll.held&&(t=t||n.event,i.smash(t),r.scroll.dy=r.scroll.y-parseInt(t.touches[0].pageY),r.scroll.position=r.scroll.origin+r.scroll.dy,r.setScroll(r.scroll.position),r.scroll.moved=!0)
}return i.listen(r.element,"touchstart",f),i.listen(r.element,"touchmove",u),i.listen(r.element,"touchend",e),i.listen(r.element,"touchcancel",t),r
},r.move=function(n){return n&&(r.collection.highlight(n),(n==r.headerItem||n==r.footerItem)&&n.highlight(),r.scrollToItem(n)),r
},r.next=function(){return r.move(r.nextItem())
},r.previous=function(){return r.move(r.previousItem())
},r.first=function(){return r.move(r.firstItem)
},r.last=function(){return r.move(r.lastItem)
},r.nextItem=function(){return r.highlightedItem?r.highlightedItem==r.collection.lastVisibleItem&&(r.footerItem||r.headerItem)?r.footerItem||r.headerItem:r.footerItem&&r.headerItem&&r.highlightedItem==r.footerItem?r.headerItem:r.collection.next():r.firstItem
},r.previousItem=function(){return r.highlightedItem?r.highlightedItem==r.collection.firstVisibleItem&&(r.footerItem||r.headerItem)?r.headerItem||r.footerItem:r.footerItem&&r.headerItem&&r.highlightedItem==r.headerItem?r.footerItem:r.collection.previous():r.lastItem
},r.currentItem=function(){return r.highlightedItem
},r.selectable=function(){return r.visible&&!!r.currentItem()
},r.select=function(){return r.selectable()&&r.currentItem().select(),r
},r.navigate=function(n){switch(n){case 40:return r.next(),!0;
case 38:return r.previous(),!0;
case 13:if(r.selectable()){return r.select(),!0
}case 9:if(r.options.allowTab){return r.next(),!0
}}return !1
},r.scrollToItem=function(n){return r.scroll.position=r.element.scrollTop,n.element.offsetTop<r.scroll.position?(r.scroll.position=n.element.offsetTop,r.setScroll(r.scroll.position)):n.element.offsetTop+n.element.offsetHeight>r.scroll.position+r.element.offsetHeight&&(r.scroll.position=n.element.offsetTop+n.element.offsetHeight-r.element.offsetHeight,r.setScroll(r.scroll.position)),r
},r.filter=function(n){var t=r.collection.count;
return r.collection.filter(n),r.markItems(),t!=r.collection.count&&r.fire("filter",n),r
},r.getHeight=function(){for(var t=r.collection.visibleItems(),o=r.headerItem?i.getSize(r.headerItem.element).height:0,e=r.footerItem?i.getSize(r.footerItem.element).height:0,f=0,u=0,n=0;
n<t.length&&n<r.options.maxItems;
n++){f=i.getSize(t[n].element).height,u+=f
}return t.length<r.options.minItems&&(u+=(f+1)*(r.options.minItems-t.length)),u+o+e
},r.resize=function(){var n=r.getHeight();
n>0&&(r.element.style.height=n+"px")
},r.setHeaderItem=function(n,t,f){return r.headerItem=u(n,t,f),i.addClass(r.footerItem.element,"pcaheaderitem"),r.markItems(),r
},r.setFooterItem=function(n,t,f){return r.footerItem=u(n,t,f),i.addClass(r.footerItem.element,"pcafooteritem"),r.markItems(),r
},r.collection.listen("highlight",function(n){r.highlightedItem=n
}),r.collection.listen("add",function(n){r.markItems(),r.fire("add",n)
}),r.options.name&&(i.setAttributes(r.element,{id:r.options.name,role:"listbox","aria-activedescendant":""}),r.collection.listen("add",function(n){function u(n){n.listen("highlight",function(){i.setAttributes(r.element,{"aria-activedescendant":n.id})
})
}for(var t=0;
t<n.length;
t++){u(n[t])
}r.collection.all(function(n,t){n.element.id=n.id=r.options.name+"_item"+t,i.setAttributes(n.element,{role:"option"})
})
})),r
},i.AutoComplete=function(t,f){function s(){e.checkHide()
}function o(){e.resize()
}var e=new i.Eventable(this);
return e.options=f||{},e.options.force=e.options.force||!1,e.options.allowTab=e.options.allowTab||!1,e.options.onlyDown=e.options.onlyDown||!1,e.element=i.create("div",{className:"pcaautocomplete pcatext"}),e.anchors=[],e.list=new i.List(e.options),e.fieldListeners=[],e.field=null,e.positionField=null,e.visible=!0,e.hover=!1,e.focused=!1,e.upwards=!1,e.controlDown=!1,e.disabled=!1,e.fixedWidth=!1,e.emptyMessage=e.options.emptyMessage||"",e.skipFilter=!1,e.stealth=!1,e.header={element:i.create("div",{className:"pcaheader"}),headerText:i.create("div",{className:"pcamessage"}),init:function(){this.hide()
},setContent:function(n){return n=n||"",typeof n=="string"?this.element.innerHTML=n:this.element.appendChild(n),e.fire("header"),this
},setText:function(n){return n=n||"",this.element.appendChild(this.headerText),typeof n=="string"?(i.clear(this.headerText),this.headerText.appendChild(i.create("span",{className:"pcamessageicon"})),this.headerText.appendChild(i.create("span",{innerHTML:n}))):this.headerText.appendChild(n),e.fire("header"),this
},clear:function(){return this.setContent(),e.fire("header"),this
},show:function(){return this.element.style.display="",e.fire("header"),this
},hide:function(){return this.element.style.display="none",e.fire("header"),this
}},e.footer={element:i.create("div",{className:"pcafooter"}),init:function(){this.hide()
},setContent:function(n){return n=n||"",typeof n=="string"?this.element.innerHTML=n:this.element.appendChild(n),e.fire("footer"),this
},show:function(){return this.element.style.display="",e.fire("footer"),this
},hide:function(){return this.element.style.display="none",e.fire("footer"),this
}},e.load=function(){if(t.length&&t.constructor==Array){for(var u=0;
u<t.length;
u++){e.attach(i.getElement(t[u]))
}}else{e.attach(i.getElement(t))
}return i.listen(e.element,"mouseover",function(){e.hover=!0
}),i.listen(e.element,"mouseout",function(){e.hover=!1
}),i.listen(r,"click",s),i.listen(n,"resize",o),(r.documentMode&&r.documentMode<=7||/\bMSIE (7|6)/.test(i.agent))&&e.setWidth(280),r.documentMode&&r.documentMode<=5&&(i.applyStyleFixes(".pca .pcafooter",{fontSize:"0pt"}),i.applyStyleFixes(".pca .pcaflag",{fontSize:"0pt"})),e
},e.attach=function(n){function t(n,t,r){i.listen(n,t,r),e.fieldListeners.push({field:n,event:t,action:r})
}function f(n){function f(){o.appendChild(e.element),e.focus(n)
}var u=i.create("table",{className:"pca pcaanchor",cellPadding:0,cellSpacing:0}),s=[u.insertRow(0).insertCell(0),u.insertRow(1).insertCell(0)],o=i.create("div",{className:"pcachain"});
if(!n||!n.tagName){i.append(e.element);
return
}n.parentNode.insertBefore(u,n),s[0].appendChild(n),s[1].appendChild(o),e.anchors.push(u),i.inputField(n)&&(t(n,"keyup",e.keyup),t(n,"keydown",e.keydown),t(n,"focus",f),t(n,"blur",e.blur),t(n,"keypress",e.keypress),t(n,"paste",e.paste),typeof r.activeElement!="unknown"&&n==r.activeElement&&f()),t(n,"click",function(){e.click(n)
}),t(n,"dblclick",function(){e.dblclick(n)
}),t(n,"change",function(){e.change(n)
})
}function u(n){function u(){e.focus(n)
}(i.append(e.element),n&&n.tagName)&&(i.inputField(n)&&(t(n,"keyup",e.keyup),t(n,"keydown",e.keydown),t(n,"focus",u),t(n,"blur",e.blur),t(n,"keypress",e.keypress),t(n,"paste",e.paste),typeof r.activeElement!="unknown"&&n==r.activeElement&&u()),t(n,"click",function(){e.click(n)
}),t(n,"dblclick",function(){e.dblclick(n)
}),t(n,"change",function(){e.change(n)
}))
}e.options.force?f(n):u(n)
},e.position=function(t){var s=i.getPosition(t),v=i.getSize(t),w=i.getTopOffsetParent(t),c=i.getParentScroll(t),h=i.getSize(e.element),y=i.getSize(n),f=i.getScroll(n),o=!u(w),b=s.top+h.height-(o?0:f.top)<y.height,p=s.top-(o?0:f.top)>h.height,a,l;
return e.upwards=!b&&p&&!e.options.onlyDown,e.upwards?e.options.force?e.element.style.top=-(h.height+v.height+2)+"px":(e.element.style.top=s.top-c.top-h.height+(o?f.top:0)+"px",e.element.style.left=s.left-c.left+(o?f.left:0)+"px"):e.options.force?e.element.style.top="auto":(e.element.style.top=s.top-c.top+v.height+1+(o?f.top:0)+"px",e.element.style.left=s.left-c.left+(o?f.left:0)+"px"),e.options.left&&(e.element.style.left=parseInt(e.element.style.left)+parseInt(e.options.left)+"px"),e.options.top&&(e.element.style.top=parseInt(e.element.style.top)+parseInt(e.options.top)+"px"),a=parseInt(i.getStyle(e.element,"borderLeftWidth"))+parseInt(i.getStyle(e.element,"borderRightWidth"))||0,l=Math.max(i.getSize(t).width-a,0),e.fixedWidth||(e.element.style.minWidth=l+"px"),(r.documentMode&&r.documentMode<=7||/\bMSIE (7|6)/.test(i.agent))&&(e.setWidth(Math.max(l,280)),e.element.style.left=(parseInt(e.element.style.left)||0)-2+"px",e.element.style.top=(parseInt(e.element.style.top)||0)-2+"px"),e.positionField=t,e.fire("move"),e
},e.reposition=function(){return e.positionField&&e.position(e.positionField),e
},e.prompt=function(n,t){if(typeof t=="number"){if(t==0?n=" "+n:t>=n.length?(n=n+" ",t++):(n=n.substring(0,t)+"  "+n.substring(t,n.length),t++),i.setValue(e.field,n),e.field.setSelectionRange){e.field.focus(),e.field.setSelectionRange(t,t)
}else{if(e.field.createTextRange){var r=e.field.createTextRange();
r.move("character",t),r.select()
}}}else{i.setValue(e.field,n)
}return e
},e.show=function(){return e.disabled||e.stealth||(e.visible=!0,e.element.style.display="",e.list.collection.count?(e.options.emptyMessage&&e.header.clear().hide(),e.list.show()):(e.options.emptyMessage&&e.header.setText(e.options.emptyMessage).show(),e.list.hide()),e.setScroll(0),e.reposition(),e.fire("show")),e
},e.showAll=function(){e.list.filter(""),e.show()
},e.hide=function(){return e.visible=!1,e.element.style.display="none",e.fire("hide"),e
},e.focus=function(n){e.field=n,e.focused=!0,e.show(),e.position(n),e.fire("focus")
},e.blur=function(){e.focused=!1,e.checkHide(),e.fire("blur")
},e.checkHide=function(){return !e.visible||e.focused||e.hover||e.hide(),e
},e.handleKey=function(n,t){n==27?(e.hide(),e.fire("escape")):n==17?e.controlDown=!1:n==8||n==46?(e.filter(),e.fire("delete")):n!=0&&n<=46&&n!=32?e.visible&&e.list.navigate(n)?t&&i.smash(t):(n==38||n==40)&&e.filter():e.visible&&e.filter(),e.fire("keyup",n)
},e.keydown=function(t){t=t||n.event;
var r=t.which||t.keyCode;
r==17&&(e.controlDown=!0),r==9&&e.options.allowTab&&i.smash(t)
},e.keyup=function(t){t=t||n.event;
var i=t.which||t.keyCode;
e.handleKey(i,t)
},e.keypress=function(t){var r=n.event?n.event.keyCode:t.which;
e.visible&&r==13&&e.list.selectable()&&i.smash(t)
},e.paste=function(){n.setTimeout(function(){e.filter(),e.fire("paste")
},0)
},e.click=function(n){e.fire("click",n)
},e.dblclick=function(n){e.fire("dblclick",n)
},e.change=function(n){e.fire("change",n)
},e.resize=function(){e.visible&&e.reposition()
},e.add=function(n,t,i){return e.list.add(n,t,i),e
},e.clear=function(){return e.list.clear(),e
},e.setScroll=function(n){return e.list.setScroll(n),e
},e.setWidth=function(n){return typeof n=="number"?(n=Math.max(n,220),e.element.style.width=n+"px",r.documentMode&&r.documentMode<=5&&(n-=2),e.list.element.style.width=n+"px"):(e.element.style.width=n,e.list.element.style.width=n),e.fixedWidth=n!="auto",e.element.style.minWidth=0,e
},e.setHeight=function(n){return e.list.element.style.height=typeof n=="number"?n+"px":n,e
},e.filter=function(n){return n=n||i.getValue(e.field),e.skipFilter?e.list.collection.match(n).length<e.list.collection.count&&e.list.fire("filter"):(e.list.filter(n,e.skipFilter),n&&!e.list.collection.count&&!e.skipFilter&&!e.options.emptyMessage?e.hide():e.show()),e.fire("filter",n),e
},e.disable=function(){return e.disabled=!0,e
},e.enable=function(){return e.disabled=!1,e
},e.destroy=function(){i.remove(e.element),i.ignore(r,"click",s),i.ignore(n,"resize",o);
for(var t=0;
t<e.fieldListeners.length;
t++){i.ignore(e.fieldListeners[t].field,e.fieldListeners[t].event,e.fieldListeners[t].action)
}},e.element.appendChild(e.header.element),e.element.appendChild(e.list.element),e.element.appendChild(e.footer.element),e.header.init(),e.footer.init(),t&&e.load(t),e.options.width&&e.setWidth(e.options.width),e.options.height&&e.setHeight(e.options.height),e.options.className&&i.addClass(e.element,e.options.className),e.field||e.hide(),e
},i.Modal=function(n){function u(n){return n=n||{},n.type=n.type||"text",n
}var t=new i.Eventable(this);
return t.options=n||{},t.element=i.create("div",{className:"pcamodal"}),t.border=i.create("div",{className:"pcaborder"}),t.frame=i.create("div",{className:"pcaframe"}),t.content=i.create("div",{className:"pcacontent pcatext"}),t.mask=i.create("div",{className:"pcafullscreen pcamask"}),t.form=[],t.header={element:i.create("div",{className:"pcaheader"}),headerText:i.create("div",{className:"pcatitle"},t.options.titleStyle||""),init:function(){this.setText(t.options.title||"")
},setContent:function(n){return n=n||"",typeof n=="string"?this.element.innerHTML=n:this.element.appendChild(n),t.fire("header"),this
},setText:function(n){return n=n||"",this.element.appendChild(this.headerText),typeof n=="string"?this.headerText.innerHTML=n:this.headerText.appendChild(n),t.fire("header"),this
},show:function(){return this.element.style.display="",t.fire("header"),this
},hide:function(){return this.element.style.display="none",t.fire("header"),this
}},t.footer={element:i.create("div",{className:"pcafooter"}),setContent:function(n){return n=n||"",typeof n=="string"?this.element.innerHTML=n:this.element.appendChild(n),t.fire("footer"),this
},show:function(){return this.element.style.display="",t.fire("header"),this
},hide:function(){return this.element.style.display="none",t.fire("header"),this
}},t.setTitle=function(n){t.header.setText(n).show()
},t.setContent=function(n){return typeof n=="string"?t.content.innerHTML=n:t.content.appendChild(n),t.fire("change"),t
},t.addField=function(n,r){r=u(r);
var e=i.create("div",{className:"pcainputrow"}),f=i.create(r.tag||"input",r),o=i.create("label",{htmlFor:f.id||"",innerHTML:n||""});
return e.appendChild(o),e.appendChild(f),t.setContent(e),t.form.push({label:n,element:f}),f
},t.addHalfFields=function(n,r,f){r=u(r),f=u(f);
var s=i.create("div",{className:"pcainputrow"}),e=i.create(r.tag||"input",r),o=i.create(f.tag||"input",f),h=i.create("label",{htmlFor:e.id||"",innerHTML:n||""});
return i.addClass(e,"pcahalf"),i.addClass(o,"pcahalf"),s.appendChild(h),s.appendChild(e),s.appendChild(o),t.setContent(s),t.form.push({label:"First "+n,element:e}),t.form.push({label:"Second "+n,element:o}),[e,o]
},t.addButton=function(n,u,f){function o(){for(var r={},n=0;
n<t.form.length;
n++){r[t.form[n].label]=i.getValue(t.form[n].element)
}u(r)
}var e=i.create("input",{type:"button",value:n,className:"pcabutton"});
return u=u||function(){},!f||r.documentMode&&r.documentMode<=7||(e.style.cssFloat="right"),i.listen(e,"click",o),t.footer.setContent(e),e
},t.centre=function(){var n=i.getSize(t.element);
return t.element.style.marginTop=-(n.height/2)+"px",t.element.style.marginLeft=-(n.width/2)+"px",t
},t.show=function(){return r.documentMode&&r.documentMode<=5||/\bMSIE 6/.test(i.agent)||(t.element.style.display="",t.mask.style.display="",t.centre(),t.fire("show")),t
},t.hide=function(){return t.element.style.display="none",t.mask.style.display="none",t.fire("hide"),t
},t.clear=function(){while(t.content.childNodes.length){t.content.removeChild(t.content.childNodes[0])
}while(t.footer.element.childNodes.length){t.footer.element.removeChild(t.footer.element.childNodes[0])
}return t.form=[],t.fire("clear"),t
},i.listen(t.mask,"click",t.hide),t.element.appendChild(t.border),t.element.appendChild(t.frame),t.frame.appendChild(t.header.element),t.frame.appendChild(t.content),t.frame.appendChild(t.footer.element),t.header.init(),i.append(t.mask),i.append(t.element),t.hide(),t
},i.Tooltip=function(t,r){var f=new i.Eventable(this);
return f.element=i.create("div",{className:"pcatooltip"}),f.background=i.create("div",{className:"pcabackground"}),f.message=i.create("div",{className:"pcamessage",innerText:r}),f.show=function(){return f.element.style.display="",f.position(),f.fire("show"),f
},f.hide=function(){return f.element.style.display="none",f.fire("hide"),f
},f.setMessage=function(n){i.setValue(f.message,n)
},f.position=function(){var h=i.getPosition(t),a=i.getSize(t),v=i.getTopOffsetParent(t),s=i.getSize(f.message),l=i.getSize(n),o=i.getScroll(n),c=!u(v),r=h.top-s.height-5+(c?o.top:0),e=h.left+a.width/2-s.width/2+(c?o.left:0);
r=Math.min(r,l.height+o.top-s.height),r=Math.max(r,0),e=Math.min(e,l.width+o.left-s.width),e=Math.max(e,0),f.element.style.top=r+"px",f.element.style.left=e+"px"
},(t=i.getElement(t))&&(i.listen(t,"mouseover",f.show),i.listen(t,"mouseout",f.hide)),f.element.appendChild(f.background),f.element.appendChild(f.message),f.setMessage(r),i.append(f.element),f.hide(),f
},i.formatLine=function(n,t){function i(t,i){var r=(typeof n[t]=="function"?n[t]():n[t])||"";
return i==="!"?r.toUpperCase():r
}return t=t.replace(/\{([^\}]*\{(\w+)([^\}\w])?\}[^\}]*)\}/g,function(n,t,r,u){var f=i(r,u);
return f?t.replace(/\{(\w+)([^\}\w])?\}/g,f):""
}),t.replace(/\{(\w+)([^\}\w])?\}/g,function(n,t,r){return i(t,r)
})
},i.formatTag=function(n){return n?i.replaceList(i.replaceList(i.removeHtml(n.toUpperCase()),i.diacritics),i.synonyms):""
},i.formatTagWords=function(n){return i.formatTag(n).split(" ")
},i.formatCamel=function(n,t){function i(n,i,r){return i+t+r
}return t=t||" ",n=n.replace(/([a-z])([A-Z0-9])/g,i),n=n.replace(/([0-9])([A-Z])/g,i),n=n.replace(/([A-Z])([A-Z][a-z])/g,i)
},i.replaceList=function(n,t){for(var i=0;
i<t.length;
i++){n=n.toString().replace(t[i].r,t[i].w)
}return n
},i.removeHtml=function(n){return n.replace(/<(?:.|\s)*?>+/g,"")
},i.escapeHtml=function(n){return i.replaceList(n,i.hypertext)
},i.validId=function(n){return/[a-z0-9-_:\.\[\]]+/gi.exec(n)
},i.trimSpaces=function(n){return n.replace(/^\s+|\s(?=\s)|\s$/g,"")
},i.tidy=function(n,t){t=t.replace("\\","\\\\");
var i=new RegExp("^"+t+"+|"+t+"(?="+t+")|"+t+"$","gi");
return n.replace(i,"")
},i.getText=function(n){return/[a-zA-Z][a-zA-Z\s]+[a-zA-Z]/.exec(n)
},i.getNumber=function(n){return/\d+/.exec(n)
},i.parseJSON=function(n){return n&&/^[\],:{}\s]*$/.test(n.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))?typeof JSON!="undefined"?JSON.parse(n):eval(n):{}
},i.parseJSONDate=function(n){return new Date(parseInt(i.getNumber(n)))
},i.containsWord=function(n,t){var i=new RegExp("\\b"+t+"\\b","gi");
return i.test(n)
},i.removeWord=function(n,t){var i=new RegExp("\\s?\\b"+t+"\\b","gi");
return n.replace(i,"")
},i.merge=function(n,t){for(var i in n){t[i]||(t[i]=n[i])
}return t
},i.getElement=function(n,t){var f,u;
if(!n){return null
}if(typeof n.nodeType=="number"){return n
}if(typeof n=="string"){if(t=i.getElement(t)||r,f=t.getElementById?t.getElementById(n):null,f){return f
}if(u=t.getElementsByName?t.getElementsByName(n):null,u.length){return u[0]
}}return i.fuzzyMatch?i.getElementByRegex(n,t):null
},i.getElementByRegex=function(n,t){var e,o,u,f;
if(typeof n=="string"){try{n=new RegExp(n)
}catch(s){return null
}}if(n&&typeof n=="object"&&n.constructor==RegExp){for(t=i.getElement(t)||r,e=0;
e<i.fuzzyTags.length;
e++){for(o=t.getElementsByTagName(i.fuzzyTags[e]),u=0;
u<o.length;
u++){if(f=o[u],f.id&&n.test(f.id)){return f
}}}}return null
},i.getValue=function(n){var u,t,f;
if(n=i.getElement(n)){if(n.tagName=="INPUT"||n.tagName=="TEXTAREA"){if(n.type=="checkbox"){return n.checked
}if(n.type=="radio"){for(u=r.getElementsByName(n.name),t=0;
t<u.length;
t++){if(u[t].checked){return u[t].value
}}}else{return n.value
}}if(n.tagName=="SELECT"){return n.selectedIndex<0?"":(f=n.options[n.selectedIndex],f.value||f.text||"")
}if(n.tagName=="DIV"||n.tagName=="SPAN"||n.tagName=="TD"||n.tagName=="LABEL"){return n.innerHTML
}}return""
},i.setValue=function(n,t){var o,e,s,f,u;
if((t||t=="")&&(n=i.getElement(n))){if(o=t.toString(),e=i.formatTag(o),n.tagName=="INPUT"){if(n.type=="checkbox"){n.checked=typeof t=="boolean"&&t||e=="TRUE"
}else{if(n.type=="radio"){for(s=r.getElementsByName(n.name),f=0;
f<s.length;
f++){if(i.formatTag(s[f].value)==e){s[f].checked=!0;
return
}}}else{n.value=i.tidy(o.replace(/\\n|\n/gi,", "),", ")
}}}else{if(n.tagName=="TEXTAREA"){n.value=o.replace(/\\n|\n/gi,"\n")
}else{if(n.tagName=="SELECT"){for(u=0;
u<n.options.length;
u++){if(i.formatTag(n.options[u].value)==e||i.formatTag(n.options[u].text)==e){n.selectedIndex=u;
return
}}}else{(n.tagName=="DIV"||n.tagName=="SPAN"||n.tagName=="TD"||n.tagName=="LABEL")&&(n.innerHTML=o.replace(/\\n|\n/gi,"<br/>"))
}}}}},i.inputField=function(n){return(n=i.getElement(n))?n.tagName&&(n.tagName=="INPUT"||n.tagName=="TEXTAREA")&&n.type&&(n.type=="text"||n.type=="search"||n.type=="email"||n.type=="textarea"):!1
},i.selectList=function(n){return(n=i.getElement(n))?n.tagName&&n.tagName=="SELECT":!1
},i.getSelectedItem=function(n){return(n=i.getElement(n))&&n.tagName=="SELECT"&&n.selectedIndex>=0?n.options[n.selectedIndex]:null
},i.checkBox=function(n){return(n=i.getElement(n))?n.tagName&&n.tagName=="INPUT"&&n.type&&n.type=="checkbox":!1
},i.clear=function(n){i.setValue(n,"")
},i.getPosition=function(t){var e={left:0,top:0},f,r;
if(t=i.getElement(t)){if(!t.tagName){return e
}if(typeof t.getBoundingClientRect!="undefined"){var h=t.getBoundingClientRect(),o=!u(i.getTopOffsetParent(t)),c=i.getScroll(n),s=i.getParentScroll(t);
return{left:h.left+s.left+(o?0:c.left),top:h.top+s.top+(o?0:c.top)}
}f=0,r=0;
do{f+=t.offsetLeft,r+=t.offsetTop
}while(t=t.offsetParent);
return{left:f,top:r}
}return e
},i.getScroll=function(n){return{left:parseInt(n.scrollX||n.scrollLeft,10)||(u(n)?parseInt(r.documentElement.scrollLeft)||0:0),top:parseInt(n.scrollY||n.scrollTop,10)||(u(n)?parseInt(r.documentElement.scrollTop)||0:0)}
},i.getSize=function(n){return{height:n.offsetHeight||n.innerHeight||(u(n)?r.documentElement.clientHeight||r.body.clientHeight:0),width:n.offsetWidth||n.innerWidth||(u(n)?r.documentElement.clientWidth||r.body.clientWidth:0)}
},i.getParentScroll=function(n){var f={left:0,top:0},r,t;
if(n=i.getElement(n)){if(!n.tagName||!(n=n.parentNode)){return f
}r=0,t=0;
do{if(u(n)){break
}r+=parseInt(n.scrollLeft)||0,t+=parseInt(n.scrollTop)||0
}while(n=n.parentNode);
return{left:r,top:t}
}return f
},i.getTopOffsetParent=function(n){while(n.offsetParent){if(n=n.offsetParent,i.getStyle(n,"position")=="fixed"){break
}}return n
},i.getStyle=function(t,i){return((n.getComputedStyle?n.getComputedStyle(t):t.currentStyle)||{})[i]||""
},i.addClass=function(n,t){(n=i.getElement(n))&&(i.containsWord(n.className||"",t)||(n.className+=(n.className?" ":"")+t))
},i.removeClass=function(n,t){(n=i.getElement(n))&&(n.className=i.removeWord(n.className,t))
},i.setAttribute=function(n,t,r){(n=i.getElement(n))&&n.setAttribute(t,r)
},i.setAttributes=function(n,t){if(n=i.getElement(n)){for(var r in t){n.setAttribute(r,t[r])
}}},i.applyStyleFixes=function(n,t){for(var h,u,f,s,o,e=0;
e<r.styleSheets.length;
e++){h=r.styleSheets[e],u=[];
try{u=h.rules||h.cssRules||[]
}catch(c){}for(f=0;
f<u.length;
f++){if(s=u[f],s.selectorText.toLowerCase()==n){for(o in t){s.style[o]=t[o]
}}}}i.styleFixes.push({selectorText:n,fixes:t})
},i.reapplyStyleFixes=function(){var t=i.styleFixes,n;
for(i.styleFixes=[],n=0;
n<t.length;
n++){i.applyStyleFixes(t[n].selectorText,t[n].fixes)
}},i.createStyleSheet=function(n){r.createStyleSheet?r.createStyleSheet().cssText=n:r.head.appendChild(i.create("style",{type:"text/css",innerHTML:n}))
},i.create=function(n,t,i){var f=r.createElement(n),u;
for(u in t||{}){f[u]=t[u]
}return i&&(f.style.cssText=i),f
},i.append=function(n){i.container||(i.container=i.create("div",{className:"pca"}),r.body.appendChild(i.container)),i.container.appendChild(n)
},i.remove=function(n){n&&n.parentNode&&n.parentNode==i.container&&i.container.removeChild(n)
},i.listen=function(t,i,r,u){n.addEventListener?t.addEventListener(i,r,u):t.attachEvent("on"+i,r)
},i.fire=function(n,t){if(r.createEvent){var i=r.createEvent("HTMLEvents");
return i.initEvent(t,!0,!0),!n.dispatchEvent(i)
}return n.fireEvent("on"+t,r.createEventObject())
},i.ignore=function(t,i,r){n.removeEventListener?t.removeEventListener(i,r):t.detachEvent("on"+i,r)
},i.smash=function(t){var i=t||n.event;
i.stopPropagation?i.stopPropagation():i.cancelBubble=!0,i.preventDefault?i.preventDefault():i.returnValue=!1
},i.debug=function(n){typeof console!="undefined"&&console.debug&&console.debug(n)
},v()
})(window);
(function(){var a=window.pca=window.pca||{};
a.countries=[{iso2:"AF",iso3:"AFG",name:"Afghanistan",name_fr:"Afghanistan",flag:1},{iso2:"AX",iso3:"ALA",name:"Åland Islands",name_fr:"Åland(les Îles)",flag:220},{iso2:"AL",iso3:"ALB",name:"Albania",name_fr:"Albanie",alternates:["Shqipëria"],flag:2},{iso2:"DZ",iso3:"DZA",name:"Algeria",name_fr:"Algérie",flag:3},{iso2:"AS",iso3:"ASM",name:"American Samoa",name_fr:"Samoa américaines",flag:4},{iso2:"AD",iso3:"AND",name:"Andorra",name_fr:"Andorre",flag:5},{iso2:"AO",iso3:"AGO",name:"Angola",name_fr:"Angola",flag:6},{iso2:"AI",iso3:"AIA",name:"Anguilla",name_fr:"Anguilla",flag:7},{iso2:"AQ",iso3:"ATA",name:"Antarctica",name_fr:"Antarctique",flag:0},{iso2:"AG",iso3:"ATG",name:"Antigua and Barbuda",name_fr:"Antigua-et-Barbuda",flag:8},{iso2:"AR",iso3:"ARG",name:"Argentina",name_fr:"Argentine",flag:9},{iso2:"AM",iso3:"ARM",name:"Armenia",name_fr:"Arménie",flag:10},{iso2:"AW",iso3:"ABW",name:"Aruba",name_fr:"Aruba",flag:11},{iso2:"AU",iso3:"AUS",name:"Australia",name_fr:"Australie",flag:12},{iso2:"AT",iso3:"AUT",name:"Austria",name_fr:"Autriche",alternates:["Österreich"],flag:13},{iso2:"AZ",iso3:"AZE",name:"Azerbaijan",name_fr:"Azerbaïdjan",flag:14},{iso2:"BS",iso3:"BHS",name:"Bahamas",name_fr:"Bahamas",flag:15},{iso2:"BH",iso3:"BHR",name:"Bahrain",name_fr:"Bahreïn",flag:16},{iso2:"BD",iso3:"BGD",name:"Bangladesh",name_fr:"Bangladesh",flag:17},{iso2:"BB",iso3:"BRB",name:"Barbados",name_fr:"Barbade",flag:18},{iso2:"BY",iso3:"BLR",name:"Belarus",name_fr:"Bélarus",flag:19},{iso2:"BE",iso3:"BEL",name:"Belgium",name_fr:"Belgique",alternates:["België"],flag:20},{iso2:"BZ",iso3:"BLZ",name:"Belize",name_fr:"Belize",flag:21},{iso2:"BJ",iso3:"BEN",name:"Benin",name_fr:"Bénin",flag:22},{iso2:"BM",iso3:"BMU",name:"Bermuda",name_fr:"Bermudes",flag:23},{iso2:"BT",iso3:"BTN",name:"Bhutan",name_fr:"Bhoutan",flag:24},{iso2:"BO",iso3:"BOL",name:"Bolivia, Plurinational State of",name_fr:"Bolivie, l'État plurinational de la",flag:25},{iso2:"BQ",iso3:"BES",name:"Bonaire, Sint Eustatius and Saba",name_fr:"Bonaire, Saint-Eustache et Saba",flag:0},{iso2:"BA",iso3:"BIH",name:"Bosnia and Herzegovina",name_fr:"Bosnie-Herzégovine",alternates:["Bosna i Hercegovina"],flag:26},{iso2:"BW",iso3:"BWA",name:"Botswana",name_fr:"Botswana",flag:27},{iso2:"BV",iso3:"BVT",name:"Bouvet Island",name_fr:"Bouvet (l'Île)",flag:0},{iso2:"BR",iso3:"BRA",name:"Brazil",name_fr:"Brésil",alternates:["Brasil"],flag:28},{iso2:"IO",iso3:"IOT",name:"British Indian Ocean Territory",name_fr:"Indien (le Territoire britannique de l'océan)",flag:29},{iso2:"BN",iso3:"BRN",name:"Brunei Darussalam",name_fr:"Brunei",flag:0},{iso2:"BG",iso3:"BGR",name:"Bulgaria",name_fr:"Bulgarie",flag:31},{iso2:"BF",iso3:"BFA",name:"Burkina Faso",name_fr:"Burkina Faso",flag:32},{iso2:"BI",iso3:"BDI",name:"Burundi",name_fr:"Burundi",flag:34},{iso2:"CV",iso3:"CPV",name:"Cabo Verde",name_fr:"Cabo Verde",flag:38},{iso2:"KH",iso3:"KHM",name:"Cambodia",name_fr:"Cambodge",flag:35},{iso2:"CM",iso3:"CMR",name:"Cameroon",name_fr:"Cameroun",flag:36},{iso2:"CA",iso3:"CAN",name:"Canada",name_fr:"Canada",flag:37},{iso2:"KY",iso3:"CYM",name:"Cayman Islands",name_fr:"Caïmans (les Îles)",flag:39},{iso2:"CF",iso3:"CAF",name:"Central African Republic",name_fr:"République centrafricaine",flag:40},{iso2:"TD",iso3:"TCD",name:"Chad",name_fr:"Tchad",flag:41},{iso2:"CL",iso3:"CHL",name:"Chile",name_fr:"Chili",flag:42},{iso2:"CN",iso3:"CHN",name:"China",name_fr:"Chine",flag:43},{iso2:"CX",iso3:"CXR",name:"Christmas Island",name_fr:"Christmas (l'Île)",flag:0},{iso2:"CC",iso3:"CCK",name:"Cocos (Keeling) Islands",name_fr:"Cocos (les Îles)/ Keeling (les Îles)",flag:0},{iso2:"CO",iso3:"COL",name:"Colombia",name_fr:"Colombie",flag:44},{iso2:"KM",iso3:"COM",name:"Comoros",name_fr:"Comores",flag:45},{iso2:"CG",iso3:"COG",name:"Congo",name_fr:"Congo",flag:0},{iso2:"CD",iso3:"COD",name:"Congo (the Democratic Republic of the)",name_fr:"Congo (la République démocratique du)",flag:46},{iso2:"CK",iso3:"COK",name:"Cook Islands",name_fr:"Cook (les Îles)",flag:47},{iso2:"CR",iso3:"CRI",name:"Costa Rica",name_fr:"Costa Rica",flag:48},{iso2:"CI",iso3:"CIV",name:"Côte d'Ivoire",name_fr:"Côte d'Ivoire",flag:49},{iso2:"HR",iso3:"HRV",name:"Croatia",name_fr:"Croatie",alternates:["Hrvatska"],flag:50},{iso2:"CU",iso3:"CUB",name:"Cuba",name_fr:"Cuba",flag:51},{iso2:"CW",iso3:"CUW",name:"Curaçao",name_fr:"Curaçao",flag:0},{iso2:"CY",iso3:"CYP",name:"Cyprus",name_fr:"Chypre",flag:52},{iso2:"CZ",iso3:"CZE",name:"Czech Republic",name_fr:"tchèque (la République)",alternates:["Ceská republika"],flag:53},{iso2:"DK",iso3:"DNK",name:"Denmark",name_fr:"Danemark",flag:54},{iso2:"DJ",iso3:"DJI",name:"Djibouti",name_fr:"Djibouti",flag:55},{iso2:"DM",iso3:"DMA",name:"Dominica",name_fr:"Dominique",flag:56},{iso2:"DO",iso3:"DOM",name:"Dominican Republic",name_fr:"dominicaine (la République)",flag:57},{iso2:"EC",iso3:"ECU",name:"Ecuador",name_fr:"Équateur",flag:61},{iso2:"EG",iso3:"EGY",name:"Egypt",name_fr:"Égypte",flag:58},{iso2:"SV",iso3:"SLV",name:"El Salvador",name_fr:"Salvador",flag:59},{iso2:"GQ",iso3:"GNQ",name:"Equatorial Guinea",name_fr:"Guinée équatoriale",flag:62},{iso2:"ER",iso3:"ERI",name:"Eritrea",name_fr:"Érythrée",flag:63},{iso2:"EE",iso3:"EST",name:"Estonia",name_fr:"Estonie",alternates:["Eesti"],flag:64},{iso2:"ET",iso3:"ETH",name:"Ethiopia",name_fr:"Éthiopie",flag:65},{iso2:"FK",iso3:"FLK",name:"Falkland Islands [Malvinas]",name_fr:"Falkland (les Îles)/Malouines (les Îles)",flag:66},{iso2:"FO",iso3:"FRO",name:"Faroe Islands",name_fr:"Féroé (les Îles)",flag:67},{iso2:"FJ",iso3:"FJI",name:"Fiji",name_fr:"Fidji",flag:68},{iso2:"FI",iso3:"FIN",name:"Finland",name_fr:"Finlande",alternates:["Suomi"],flag:69},{iso2:"FR",iso3:"FRA",name:"France",name_fr:"France",flag:70},{iso2:"GF",iso3:"GUF",name:"French Guiana",name_fr:"Guyane française ",flag:0},{iso2:"PF",iso3:"PYF",name:"French Polynesia",name_fr:"Polynésie française",flag:71},{iso2:"TF",iso3:"ATF",name:"French Southern Territories",name_fr:"Terres australes françaises",flag:0},{iso2:"GA",iso3:"GAB",name:"Gabon",name_fr:"Gabon",flag:72},{iso2:"GM",iso3:"GMB",name:"Gambia",name_fr:"Gambie",flag:73},{iso2:"GE",iso3:"GEO",name:"Georgia",name_fr:"Géorgie",flag:74},{iso2:"DE",iso3:"DEU",name:"Germany",name_fr:"Allemagne",alternates:["Deutschland"],flag:75},{iso2:"GH",iso3:"GHA",name:"Ghana",name_fr:"Ghana",flag:76},{iso2:"GI",iso3:"GIB",name:"Gibraltar",name_fr:"Gibraltar",flag:77},{iso2:"GR",iso3:"GRC",name:"Greece",name_fr:"Grèce",alternates:["Hellas"],flag:79},{iso2:"GL",iso3:"GRL",name:"Greenland",name_fr:"Groenland",flag:80},{iso2:"GD",iso3:"GRD",name:"Grenada",name_fr:"Grenade",flag:81},{iso2:"GP",iso3:"GLP",name:"Guadeloupe",name_fr:"Guadeloupe",flag:0},{iso2:"GU",iso3:"GUM",name:"Guam",name_fr:"Guam",flag:82},{iso2:"GT",iso3:"GTM",name:"Guatemala",name_fr:"Guatemala",flag:83},{iso2:"GG",iso3:"GGY",name:"Guernsey",name_fr:"Guernesey",flag:84},{iso2:"GN",iso3:"GIN",name:"Guinea",name_fr:"Guinée",flag:85},{iso2:"GW",iso3:"GNB",name:"Guinea-Bissau",name_fr:"Guinée-Bissau",flag:86},{iso2:"GY",iso3:"GUY",name:"Guyana",name_fr:"Guyana",flag:87},{iso2:"HT",iso3:"HTI",name:"Haiti",name_fr:"Haïti",flag:88},{iso2:"HM",iso3:"HMD",name:"Heard Island and McDonald Islands",name_fr:"Heard-et-Îles MacDonald (l'Île)",flag:0},{iso2:"VA",iso3:"VAT",name:"Holy See [Vatican City State]",name_fr:"Saint-Siège [État de la Cité du Vatican]",flag:0},{iso2:"HN",iso3:"HND",name:"Honduras",name_fr:"Honduras",flag:89},{iso2:"HK",iso3:"HKG",name:"Hong Kong",name_fr:"Hong Kong",flag:90},{iso2:"HU",iso3:"HUN",name:"Hungary",name_fr:"Hongrie",alternates:["Magyarország"],flag:91},{iso2:"IS",iso3:"ISL",name:"Iceland",name_fr:"Islande",alternates:["Ísland"],flag:92},{iso2:"IN",iso3:"IND",name:"India",name_fr:"Inde",flag:93},{iso2:"ID",iso3:"IDN",name:"Indonesia",name_fr:"Indonésie",flag:94},{iso2:"IR",iso3:"IRN",name:"Iran (the Islamic Republic of)",name_fr:"Iran (République Islamique d')",flag:95},{iso2:"IQ",iso3:"IRQ",name:"Iraq",name_fr:"Iraq",flag:96},{iso2:"IE",iso3:"IRL",name:"Ireland",name_fr:"Irlande",flag:97},{iso2:"IM",iso3:"IMN",name:"Isle of Man",name_fr:"Île de Man",flag:98},{iso2:"IL",iso3:"ISR",name:"Israel",name_fr:"Israël",flag:99},{iso2:"IT",iso3:"ITA",name:"Italy",name_fr:"Italie",alternates:["Italia"],flag:100},{iso2:"JM",iso3:"JAM",name:"Jamaica",name_fr:"Jamaïque",flag:101},{iso2:"JP",iso3:"JPN",name:"Japan",name_fr:"Japon",flag:102},{iso2:"JE",iso3:"JEY",name:"Jersey",name_fr:"Jersey",flag:103},{iso2:"JO",iso3:"JOR",name:"Jordan",name_fr:"Jordanie",flag:104},{iso2:"KZ",iso3:"KAZ",name:"Kazakhstan",name_fr:"Kazakhstan",flag:105},{iso2:"KE",iso3:"KEN",name:"Kenya",name_fr:"Kenya",flag:106},{iso2:"KI",iso3:"KIR",name:"Kiribati",name_fr:"Kiribati",flag:107},{iso2:"KP",iso3:"PRK",name:"Korea (the Democratic People's Republic of)",name_fr:"Corée (la République populaire démocratique de )",flag:149},{iso2:"KR",iso3:"KOR",name:"Korea (the Republic of)",name_fr:"Corée (la République de)",flag:185},{iso2:"KW",iso3:"KWT",name:"Kuwait",name_fr:"Koweït",flag:108},{iso2:"KG",iso3:"KGZ",name:"Kyrgyzstan",name_fr:"Kirghizistan",flag:109},{iso2:"LA",iso3:"LAO",name:"Lao People's Democratic Republic",name_fr:"Lao, République démocratique populaire",flag:0},{iso2:"LV",iso3:"LVA",name:"Latvia",name_fr:"Lettonie",flag:110},{iso2:"LB",iso3:"LBN",name:"Lebanon",name_fr:"Liban",flag:111},{iso2:"LS",iso3:"LSO",name:"Lesotho",name_fr:"Lesotho",flag:112},{iso2:"LR",iso3:"LBR",name:"Liberia",name_fr:"Libéria",flag:113},{iso2:"LY",iso3:"LBY",name:"Libya",name_fr:"Libye",flag:114},{iso2:"LI",iso3:"LIE",name:"Liechtenstein",name_fr:"Liechtenstein",flag:115},{iso2:"LT",iso3:"LTU",name:"Lithuania",name_fr:"Lituanie",alternates:["Lietuva"],flag:116},{iso2:"LU",iso3:"LUX",name:"Luxembourg",name_fr:"Luxembourg",flag:117},{iso2:"MO",iso3:"MAC",name:"Macao",name_fr:"Macao",flag:118},{iso2:"MK",iso3:"MKD",name:"Macedonia (the former Yugoslav Republic of)",name_fr:"Macédoine (l'ex-République yougoslave de)",alternates:["Poraneshna Jugoslovenska Republika Makedonija"],flag:119},{iso2:"MG",iso3:"MDG",name:"Madagascar",name_fr:"Madagascar",flag:120},{iso2:"MW",iso3:"MWI",name:"Malawi",name_fr:"Malawi",flag:121},{iso2:"MY",iso3:"MYS",name:"Malaysia",name_fr:"Malaisie",flag:122},{iso2:"MV",iso3:"MDV",name:"Maldives",name_fr:"Maldives",flag:123},{iso2:"ML",iso3:"MLI",name:"Mali",name_fr:"Mali",flag:124},{iso2:"MT",iso3:"MLT",name:"Malta",name_fr:"Malte",flag:125},{iso2:"MH",iso3:"MHL",name:"Marshall Islands",name_fr:"Marshall (Îles)",flag:126},{iso2:"MQ",iso3:"MTQ",name:"Martinique",name_fr:"Martinique",flag:127},{iso2:"MR",iso3:"MRT",name:"Mauritania",name_fr:"Mauritanie",flag:128},{iso2:"MU",iso3:"MUS",name:"Mauritius",name_fr:"Maurice",flag:129},{iso2:"YT",iso3:"MYT",name:"Mayotte",name_fr:"Mayotte",flag:0},{iso2:"MX",iso3:"MEX",name:"Mexico",name_fr:"Mexique",flag:130},{iso2:"FM",iso3:"FSM",name:"Micronesia (the Federated States of)",name_fr:"Micronésie, États fédérés de",flag:131},{iso2:"MD",iso3:"MDA",name:"Moldova (the Republic of)",name_fr:"Moldova , République de",flag:132},{iso2:"MC",iso3:"MCO",name:"Monaco",name_fr:"Monaco",flag:133},{iso2:"MN",iso3:"MNG",name:"Mongolia",name_fr:"Mongolie",flag:134},{iso2:"ME",iso3:"MNE",name:"Montenegro",name_fr:"Monténégro",alternates:["Crna Gora"],flag:0},{iso2:"MS",iso3:"MSR",name:"Montserrat",name_fr:"Montserrat",flag:135},{iso2:"MA",iso3:"MAR",name:"Morocco",name_fr:"Maroc",flag:136},{iso2:"MZ",iso3:"MOZ",name:"Mozambique",name_fr:"Mozambique",flag:137},{iso2:"MM",iso3:"MMR",name:"Myanmar",name_fr:"Myanmar",flag:33},{iso2:"NA",iso3:"NAM",name:"Namibia",name_fr:"Namibie",flag:138},{iso2:"NR",iso3:"NRU",name:"Nauru",name_fr:"Nauru",flag:139},{iso2:"NP",iso3:"NPL",name:"Nepal",name_fr:"Népal",flag:140},{iso2:"NL",iso3:"NLD",name:"Netherlands",name_fr:"Pays-Bas",alternates:["Holland"],flag:141},{iso2:"NC",iso3:"NCL",name:"New Caledonia",name_fr:"Nouvelle-Calédonie",flag:0},{iso2:"NZ",iso3:"NZL",name:"New Zealand",name_fr:"Nouvelle-Zélande",flag:142},{iso2:"NI",iso3:"NIC",name:"Nicaragua",name_fr:"Nicaragua",flag:143},{iso2:"NE",iso3:"NER",name:"Niger",name_fr:"Niger",flag:144},{iso2:"NG",iso3:"NGA",name:"Nigeria",name_fr:"Nigéria",flag:145},{iso2:"NU",iso3:"NIU",name:"Niue",name_fr:"Niue",flag:146},{iso2:"NF",iso3:"NFK",name:"Norfolk Island",name_fr:"Norfolk (l'Île)",flag:147},{iso2:"MP",iso3:"MNP",name:"Northern Mariana Islands",name_fr:"Mariannes du Nord (les Îles)",flag:148},{iso2:"NO",iso3:"NOR",name:"Norway",name_fr:"Norvège",flag:150},{iso2:"OM",iso3:"OMN",name:"Oman",name_fr:"Oman",flag:151},{iso2:"PK",iso3:"PAK",name:"Pakistan",name_fr:"Pakistan",flag:152},{iso2:"PW",iso3:"PLW",name:"Palau",name_fr:"Palaos",flag:153},{iso2:"PS",iso3:"PSE",name:"Palestine, State of",name_fr:"Palestine, État de",flag:0},{iso2:"PA",iso3:"PAN",name:"Panama",name_fr:"Panama",flag:154},{iso2:"PG",iso3:"PNG",name:"Papua New Guinea",name_fr:"Papouasie-Nouvelle-Guinée",flag:155},{iso2:"PY",iso3:"PRY",name:"Paraguay",name_fr:"Paraguay",flag:156},{iso2:"PE",iso3:"PER",name:"Peru",name_fr:"Pérou",flag:157},{iso2:"PH",iso3:"PHL",name:"Philippines",name_fr:"Philippines",flag:158},{iso2:"PN",iso3:"PCN",name:"Pitcairn",name_fr:"Pitcairn",flag:0},{iso2:"PL",iso3:"POL",name:"Poland",name_fr:"Pologne",alternates:["Polska"],flag:159},{iso2:"PT",iso3:"PRT",name:"Portugal",name_fr:"Portugal",flag:160},{iso2:"PR",iso3:"PRI",name:"Puerto Rico",name_fr:"Porto Rico",flag:161},{iso2:"QA",iso3:"QAT",name:"Qatar",name_fr:"Qatar",flag:162},{iso2:"RE",iso3:"REU",name:"Réunion",name_fr:"Réunion",flag:0},{iso2:"RO",iso3:"ROU",name:"Romania",name_fr:"Roumanie",alternates:["România"],flag:163},{iso2:"RU",iso3:"RUS",name:"Russian Federation",name_fr:"Russie (la Fédération de)",alternates:["Rossiya"],flag:164},{iso2:"RW",iso3:"RWA",name:"Rwanda",name_fr:"Rwanda",flag:165},{iso2:"BL",iso3:"BLM",name:"Saint Barthélemy",name_fr:"Saint-Barthélemy",flag:0},{iso2:"SH",iso3:"SHN",name:"Saint Helena, Ascension and Tristan da Cunha",name_fr:"Sainte-Hélène, Ascension et Tristan da Cunha",flag:166},{iso2:"KN",iso3:"KNA",name:"Saint Kitts and Nevis",name_fr:"Saint-Kitts-et-Nevis",flag:167},{iso2:"LC",iso3:"LCA",name:"Saint Lucia",name_fr:"Sainte-Lucie",flag:168},{iso2:"MF",iso3:"MAF",name:"Saint Martin (French part)",name_fr:"Saint-Martin (partie française)",flag:0},{iso2:"PM",iso3:"SPM",name:"Saint Pierre and Miquelon",name_fr:"Saint-Pierre-et-Miquelon",flag:169},{iso2:"VC",iso3:"VCT",name:"Saint Vincent and the Grenadines",name_fr:"Saint-Vincent-et-les-Grenadines",flag:170},{iso2:"WS",iso3:"WSM",name:"Samoa",name_fr:"Samoa",flag:171},{iso2:"SM",iso3:"SMR",name:"San Marino",name_fr:"Saint-Marin",flag:172},{iso2:"ST",iso3:"STP",name:"Sao Tome and Principe",name_fr:"Sao Tomé-et-Principe",flag:173},{iso2:"SA",iso3:"SAU",name:"Saudi Arabia",name_fr:"Arabie saoudite",flag:174},{iso2:"SN",iso3:"SEN",name:"Senegal",name_fr:"Sénégal",flag:175},{iso2:"RS",iso3:"SRB",name:"Serbia",name_fr:"Serbie",alternates:["Srbija"],flag:0},{iso2:"SC",iso3:"SYC",name:"Seychelles",name_fr:"Seychelles",flag:176},{iso2:"SL",iso3:"SLE",name:"Sierra Leone",name_fr:"Sierra Leone",flag:177},{iso2:"SG",iso3:"SGP",name:"Singapore",name_fr:"Singapour",flag:178},{iso2:"SX",iso3:"SXM",name:"Sint Maarten (Dutch part)",name_fr:"Saint-Martin (partie néerlandaise)",flag:0},{iso2:"SK",iso3:"SVK",name:"Slovakia",name_fr:"Slovaquie",alternates:["Slovenská republika"],flag:179},{iso2:"SI",iso3:"SVN",name:"Slovenia",name_fr:"Slovénie",alternates:["Slovenija"],flag:180},{iso2:"SB",iso3:"SLB",name:"Solomon Islands",name_fr:"Salomon (Îles)",flag:181},{iso2:"SO",iso3:"SOM",name:"Somalia",name_fr:"Somalie",flag:182},{iso2:"ZA",iso3:"ZAF",name:"South Africa",name_fr:"Afrique du Sud",flag:183},{iso2:"GS",iso3:"SGS",name:"South Georgia and the South Sandwich Islands",name_fr:"Géorgie du Sud-et-les Îles Sandwich du Sud",flag:184},{iso2:"SS",iso3:"SSD",name:"South Sudan ",name_fr:"Soudan du Sud",flag:0},{iso2:"ES",iso3:"ESP",name:"Spain",name_fr:"Espagne",alternates:["España"],flag:186},{iso2:"LK",iso3:"LKA",name:"Sri Lanka",name_fr:"Sri Lanka",flag:187},{iso2:"SD",iso3:"SDN",name:"Sudan",name_fr:"Soudan",flag:188},{iso2:"SR",iso3:"SUR",name:"Suriname",name_fr:"Suriname",flag:189},{iso2:"SJ",iso3:"SJM",name:"Svalbard and Jan Mayen",name_fr:"Svalbard et l'Île Jan Mayen",flag:190},{iso2:"SZ",iso3:"SWZ",name:"Swaziland",name_fr:"Swaziland",flag:191},{iso2:"SE",iso3:"SWE",name:"Sweden",name_fr:"Suède",alternates:["Sverige"],flag:192},{iso2:"CH",iso3:"CHE",name:"Switzerland",name_fr:"Suisse",alternates:["Schweiz"],flag:193},{iso2:"SY",iso3:"SYR",name:"Syrian Arab Republic",name_fr:"République arabe syrienne",flag:0},{iso2:"TW",iso3:"TWN",name:"Taiwan (Province of China)",name_fr:"Taïwan (Province de Chine)",flag:194},{iso2:"TJ",iso3:"TJK",name:"Tajikistan",name_fr:"Tadjikistan",flag:195},{iso2:"TZ",iso3:"TZA",name:"Tanzania, United Republic of",name_fr:"Tanzanie, République-Unie de",flag:196},{iso2:"TH",iso3:"THA",name:"Thailand",name_fr:"Thaïlande",flag:197},{iso2:"TL",iso3:"TLS",name:"Timor-Leste",name_fr:"Timor-Leste",flag:0},{iso2:"TG",iso3:"TGO",name:"Togo",name_fr:"Togo",flag:198},{iso2:"TK",iso3:"TKL",name:"Tokelau",name_fr:"Tokelau",flag:0},{iso2:"TO",iso3:"TON",name:"Tonga",name_fr:"Tonga",flag:199},{iso2:"TT",iso3:"TTO",name:"Trinidad and Tobago",name_fr:"Trinité-et-Tobago",flag:200},{iso2:"TN",iso3:"TUN",name:"Tunisia",name_fr:"Tunisie",flag:201},{iso2:"TR",iso3:"TUR",name:"Turkey",name_fr:"Turquie",alternates:["Türkiye"],flag:202},{iso2:"TM",iso3:"TKM",name:"Turkmenistan",name_fr:"Turkménistan",flag:203},{iso2:"TC",iso3:"TCA",name:"Turks and Caicos Islands",name_fr:"Turks-et-Caïcos (les Îles)",flag:204},{iso2:"TV",iso3:"TUV",name:"Tuvalu",name_fr:"Tuvalu",flag:205},{iso2:"UG",iso3:"UGA",name:"Uganda",name_fr:"Ouganda",flag:206},{iso2:"UA",iso3:"UKR",name:"Ukraine",name_fr:"Ukraine",alternates:["Ukraina"],flag:207},{iso2:"AE",iso3:"ARE",name:"United Arab Emirates",name_fr:"Émirats arabes unis",alternates:["UAE"],flag:208},{iso2:"GB",iso3:"GBR",name:"United Kingdom",name_fr:"Royaume-Uni",alternates:["Britain","England","Great Britain","Northern Ireland","Scotland","UK","Wales"],flag:78},{iso2:"US",iso3:"USA",name:"United States",name_fr:"États-Unis",alternates:["America","United States of America"],flag:210},{iso2:"UM",iso3:"UMI",name:"United States Minor Outlying Islands",name_fr:"Îles mineures éloignées des États-Unis",flag:0},{iso2:"UY",iso3:"URY",name:"Uruguay",name_fr:"Uruguay",flag:209},{iso2:"UZ",iso3:"UZB",name:"Uzbekistan",name_fr:"Ouzbékistan",flag:211},{iso2:"VU",iso3:"VUT",name:"Vanuatu",name_fr:"Vanuatu",flag:212},{iso2:"VE",iso3:"VEN",name:"Venezuela, Bolivarian Republic of ",name_fr:"Venezuela, République bolivarienne du ",flag:213},{iso2:"VN",iso3:"VNM",name:"Viet Nam",name_fr:"Viet Nam",flag:214},{iso2:"VG",iso3:"VGB",name:"Virgin Islands (British)",name_fr:"Vierges britanniques (les Îles)",flag:30},{iso2:"VI",iso3:"VIR",name:"Virgin Islands (U.S.)",name_fr:"Vierges des États-Unis (les Îles)",flag:215},{iso2:"WF",iso3:"WLF",name:"Wallis and Futuna",name_fr:"Wallis-et-Futuna ",flag:216},{iso2:"EH",iso3:"ESH",name:"Western Sahara",name_fr:"Sahara occidental*",flag:0},{iso2:"YE",iso3:"YEM",name:"Yemen",name_fr:"Yémen",flag:217},{iso2:"ZM",iso3:"ZMB",name:"Zambia",name_fr:"Zambie",flag:218},{iso2:"ZW",iso3:"ZWE",name:"Zimbabwe",name_fr:"Zimbabwe",flag:219}],a.countryNameType={NAME:0,ISO2:1,ISO3:2},a.CountryList=function(c,b){var d=new a.Eventable(this);
d.fields=c||[],d.options=b||{},d.options.defaultCode=d.options.defaultCode||"",d.options.value=d.options.value||"",d.options.codesList=d.options.codesList||"",d.options.fillOthers=d.options.fillOthers||!1,d.options.list=d.options.list||{},d.options.populate=typeof d.options.populate=="boolean"?d.options.populate:!0,d.options.prepopulate=typeof d.options.prepopulate=="boolean"?d.options.prepopulate:!0,d.options.language=d.options.language||"en",d.options.nameType=d.options.nameType||a.countryNameType.NAME,d.options.valueType=d.options.valueType||a.countryNameType.NAME,d.options.fallbackCode=d.options.fallbackCode||"CAN",d.autocomplete=new a.AutoComplete(d.fields,d.options.list),d.country=null,d.textChanged=!1,d.nameProperty=d.options.language=="fr"?"name_fr":"name",d.template="<div class='pcaflag'></div><div class='pcaflaglabel'>{"+d.nameProperty+"}</div>",d.load=function(){function k(e){d.change(e),d.fire("select",e)
}function r(f){if(a.selectList(f)){var e=a.getSelectedItem(f);
d.change(d.find(e.value)||d.find(e.text))
}else{d.setCountry(a.getValue(f))
}d.textChanged=!1
}var x,m,q,n,w,v,j,p;
if(a.addClass(d.autocomplete.element,"pcacountrylist"),d.options.codesList){for(x=d.options.codesList.replace(/\s/g,"").split(","),m=[],d.autocomplete.clear(),q=0;
q<x.length;
q++){for(n=x[q].toString().toUpperCase(),w=0;
w<a.countries.length;
w++){if(a.countries[w].iso2==n||a.countries[w].iso3==n){m.push(a.countries[w]);
break
}}}if(d.options.fillOthers){for(v=0;
v<a.countries.length;
v++){for(j=!1,p=0;
p<m.length;
p++){a.countries[v].iso3==m[p].iso3&&(j=!0)
}j||m.push(a.countries[v])
}}d.autocomplete.clear().add(m,d.template,k)
}else{d.autocomplete.clear().add(a.countries,d.template,k)
}d.autocomplete.list.collection.all(function(e){d.setFlagPosition(e.element.firstChild,e.data.flag),e.tag+=" "+a.formatTag(e.data.iso3+(e.data.alternates?" "+e.data.alternates.join(" "):""))
}),d.autocomplete.listen("focus",function(){d.autocomplete.showAll()
}),d.autocomplete.listen("change",function(e){d.autocomplete.visible?d.textChanged=!0:r(e)
}),d.autocomplete.listen("hide",function(){d.textChanged&&r(d.autocomplete.field)
}),d.options.value&&(d.country=d.find(d.options.value)),!d.country&&d.options.defaultCode&&(d.country=d.find(d.options.defaultCode)),d.country=d.country||(d.options.codesList?d.first():d.find(d.options.fallbackCode))||d.first()||d.find(d.options.fallbackCode),d.fire("load")
},d.getName=function(e){switch(d.options.nameType){case a.countryNameType.NAME:return(e||d.country)[d.nameProperty];
case a.countryNameType.ISO2:return(e||d.country).iso2;
case a.countryNameType.ISO3:return(e||d.country).iso3
}return(e||d.country)[d.nameProperty]
},d.getValue=function(e){switch(d.options.valueType){case a.countryNameType.NAME:return(e||d.country)[d.nameProperty];
case a.countryNameType.ISO2:return(e||d.country).iso2;
case a.countryNameType.ISO3:return(e||d.country).iso3
}return(e||d.country).iso3
},d.populate=function(){var m,l,k,j,h;
if(d.options.populate){for(m=d.getName(),l=d.getValue(),k=0;
k<d.fields.length;
k++){j=a.getElement(d.fields[k]),h=a.getValue(j),a.setValue(j,a.selectList(j)?l:m),d.options.prepopulate&&h!=a.getValue(j)&&a.fire(j,"change")
}d.fire("populate")
}},d.find=function(f){function e(j){if(j.data.alternates){for(var h=0;
h<j.data.alternates.length;
h++){if(j.data.alternates[h].toUpperCase()==f){return !0
}}}return !1
}return f=f.toString().toUpperCase(),(d.autocomplete.list.collection.first(function(h){return h.data.iso2.toUpperCase()==f||h.data.iso3.toUpperCase()==f||h.data.name.toUpperCase()==f||h.data.name_fr.toUpperCase()==f||e(h)
})||{}).data
},d.first=function(){return d.autocomplete.list.collection.first().data
},d.change=function(e){e&&(d.country=e,d.populate(),d.textChanged=!1,d.fire("change",d.country))
},d.setFlagPosition=function(f,e){f.style.backgroundPosition="-1px -"+(e*16+2)+"px"
},d.flag=function(){function f(h){d.setFlagPosition(e,h.flag)
}var e=a.create("div",{className:"pcaflag"});
return f(d.country),d.listen("change",f),e
},d.setCountry=function(e){return d.change(d.find(e)),d
},d.setCountryByIP=function(f){function e(h){h.length&&h[0].Iso3&&d.setCountry(h[0].Iso3)
}f&&a.fetch("Extras/Web/Ip2Country/v1.10",{Key:f},e)
},d.load()
}
})();
(function(){var a=window.pca=window.pca||{};
a.fieldMode={DEFAULT:3,NONE:0,SEARCH:1,POPULATE:2,PRESERVE:4,COUNTRY:8},a.filteringMode={EVERYTHING:"Everything",POSTCODES:"PostalCodes",PLACES:"Places",COMPANIES:"Companies",RESIDENTIAL:"Residential"},a.orderingMode={DEFAULT:"UserLocation",LOCATION:"UserLocation",NONE:""},a.messages={en:{DIDYOUMEAN:"Did you mean:",NORESULTS:"No results found",KEEPTYPING:"Keep typing your address to display more results",RETRIEVEERROR:"Sorry, we could not retrieve this address",SERVICEERROR:"Service Error:",COUNTRYSELECT:"Change Country",NOLOCATION:"Sorry, we could not get your location",NOCOUNTRY:"Sorry, we could not find this country",MANUALENTRY:"I cannot find my address. Let me type it in",RESULTCOUNT:"<b>{count}</b> matching results"},cy:{DIDYOUMEAN:"A oeddech yn meddwl:",NORESULTS:"Dim canlyniadau ar ganlyniadau",KEEPTYPING:"Cadwch teipio eich cyfeiriad i arddangos mwy o ganlyniadau",RETRIEVEERROR:"Mae'n ddrwg gennym, ni allem adfer y cyfeiriad hwn",SERVICEERROR:"Gwall gwasanaeth:",COUNTRYSELECT:"Dewiswch gwlad",NOLOCATION:"Mae'n ddrwg gennym, nid oeddem yn gallu cael eich lleoliad",NOCOUNTRY:"Mae'n ddrwg gennym, ni allem ddod o hyd y wlad hon",MANUALENTRY:"Ni allaf ddod o hyd i fy nghyfeiriad. Gadewch i mi deipio mewn",RESULTCOUNT:"<b>{count}</b> Canlyniadau paru"},fr:{DIDYOUMEAN:"Vouliez-vous dire:",NORESULTS:"Aucun résultat n'a été trouvé",KEEPTYPING:"Continuer à taper votre adresse pour afficher plus de résultats",RETRIEVEERROR:"Désolé , nous ne pouvions pas récupérer cette adresse",SERVICEERROR:"Erreur de service:",COUNTRYSELECT:"Changer de pays",NOLOCATION:"Désolé, nous n'avons pas pu obtenir votre emplacement",NOCOUNTRY:"Désolé, nous n'avons pas trouvé ce pays",MANUALENTRY:"Je ne peux pas trouver mon adresse. Permettez-moi de taper dans",RESULTCOUNT:"<b>{count}</b> résultats correspondants"},de:{DIDYOUMEAN:"Meinten Sie:",NORESULTS:"Keine Adressen gefunden",KEEPTYPING:"Halten Sie Ihre Adresse eingeben, um weitere Ergebnisse anzuzeigen",RETRIEVEERROR:"Leider haben wir diese Adresse nicht abrufen",SERVICEERROR:"Service-Fehler:",COUNTRYSELECT:"Land wechseln",NOLOCATION:"Leider konnten wir nicht bekommen, Ihren Standort",NOCOUNTRY:"Leider konnten wir nicht finden, dieses Land",MANUALENTRY:"Ich kann meine Adresse nicht finden. Lassen Sie mich geben Sie es in",RESULTCOUNT:"<b>{count}</b> passenden Ergebnisse"}},a.exampleAddress={Id:"GBR|PR|52509479|0|0|0",DomesticId:"52509479",Language:"ENG",LanguageAlternatives:"ENG",Department:"",Company:"Postcode Anywhere (Europe) Ltd",SubBuilding:"",BuildingNumber:"",BuildingName:"Waterside",SecondaryStreet:"",Street:"Basin Road",Block:"",Neighbourhood:"",District:"",City:"Worcester",Line1:"Waterside",Line2:"Basin Road",Line3:"",Line4:"",Line5:"",AdminAreaName:"Worcester",AdminAreaCode:"47UE",Province:"Worcestershire",ProvinceName:"Worcestershire",ProvinceCode:"",PostalCode:"WR5 3DA",CountryName:"United Kingdom",CountryIso2:"GB",CountryIso3:"GBR",CountryIsoNumber:826,SortingNumber1:"94142",SortingNumber2:"",Barcode:"(WR53DA1PX)",Label:"Postcode Anywhere (Europe) Ltd\nWaterside\nBasin Road\n\nWorcester\nWR5 3DA\nUnited Kingdom",Type:"Commercial",DataLevel:"Premise",Field1:"",Field2:"",Field3:"",Field4:"",Field5:"",Field6:"",Field7:"",Field8:"",Field9:"",Field10:"",Field11:"",Field12:"",Field13:"",Field14:"",Field15:"",Field16:"",Field17:"",Field18:"",Field19:"",Field20:""},a.templates={AUTOCOMPLETE:"{HighlightedText}{<span class='pcadescription'>{Description}</span>}"},a.Address=function(d,c){function b(){h.lastActionTimer!=null&&(window.clearTimeout(h.lastActionTimer),h.lastActionTimer=null)
}function j(){h.reset(),h.message(a.messages[h.language].NORESULTS,{clickToDisable:h.options.manualEntry,error:!0,clearList:!0}),h.fire("noresults")
}function k(e){h.message(a.formatLine({count:e},a.messages[h.language].RESULTCOUNT))
}var h=new a.Eventable(this);
h.fields=d||[],h.options=c||{},h.key=h.options.key||"",h.options.name=h.options.name||"",h.options.source=h.options.source||"",h.options.populate=typeof h.options.populate=="boolean"?h.options.populate:!0,h.options.onlyInputs=typeof h.options.onlyInputs=="boolean"?h.options.onlyInputs:!1,h.options.autoSearch=typeof h.options.autoSearch=="boolean"?h.options.autoSearch:!1,h.options.preselect=typeof h.options.preselect=="boolean"?h.options.preselect:!0,h.options.minSearch=h.options.minSearch||1,h.options.minItems=h.options.minItems||1,h.options.maxItems=h.options.maxItems||7,h.options.advancedFields=h.options.advancedFields||[],h.options.manualEntry=typeof h.options.manualEntry=="boolean"?h.options.manualEntry:!1,h.options.manualEntryItem=typeof h.options.manualEntryItem=="boolean"?h.options.manualEntryItem:!1,h.options.disableTime=h.options.disableTime||60000,h.options.suppressAutocomplete=typeof h.options.suppressAutocomplete=="boolean"?h.options.suppressAutocomplete:!0,h.options.setCountryByIP=typeof h.options.setCountryByIP=="boolean"?h.options.setCountryByIP:!1,h.options.brand=h.options.brand||"CanadaPost"||"PostcodeAnywhere",h.options.product=h.options.product||"AddressComplete",h.options.provider=h.options.provider||"AddressComplete"||"CapturePlus",h.options.culture=h.options.culture||"en-GB",h.options.prompt=typeof h.options.prompt=="boolean"?h.options.prompt:!1,h.options.promptDelay=h.options.promptDelay||0,h.options.inlineMessages=typeof h.options.inlineMessages=="boolean"?h.options.inlineMessages:!1,h.options.setCursor=typeof h.options.setCursor=="boolean"?h.options.setCursor:!1,h.options.matchCount=typeof h.options.matchCount=="boolean"?h.options.matchCount:!1,h.options.languagePreference=h.options.languagePreference||"",h.options.filteringMode=h.options.filteringMode||a.filteringMode.EVERYTHING,h.options.orderingMode=h.options.orderingMode||a.orderingMode.DEFAULT,h.options.countries=h.options.countries||{},h.options.countries.defaultCode=h.options.countries.defaultCode||"",h.options.countries.value=h.options.countries.value||"",h.options.countries.prepopulate=typeof h.options.countries.prepopulate=="boolean"?h.options.countries.prepopulate:!0,h.options.list=h.options.list||{},h.options.list.name=h.options.name?h.options.name+"_results":"",h.options.list.maxItems=h.options.list.maxItems||h.options.maxItems,h.options.list.minItems=h.options.list.minItems||h.options.minItems,h.options.countries.list=h.options.countries.list||a.merge(h.options.list,{}),h.options.countries.list.name=h.options.name?h.options.name+"_countries":"",h.options.bar=h.options.bar||{},h.options.bar.visible=typeof h.options.bar.visible=="boolean"?h.options.bar.visible:!0,h.options.bar.showCountry=typeof h.options.bar.showCountry=="boolean"?h.options.bar.showCountry:!0,h.options.bar.showLogo=typeof h.options.bar.showLogo=="boolean"?h.options.bar.showLogo:!0,h.options.bar.logoLink=typeof h.options.bar.logoLink=="boolean"?h.options.bar.logoLink:!1,h.options.bar.logoClass=h.options.bar.logoClass||"aclogo"||"pcalogo",h.options.bar.logoTitle=h.options.bar.logoTitle||"www.canadapost.ca",h.options.bar.logoUrl=h.options.bar.logoUrl||"http://www.canadapost.ca/pca",h.options.search=h.options.search||{},h.country=h.options.countries.defaultCode,h.advancedFields=h.options.advancedFields,h.initialSearch=!1,h.searchContext=null,h.lastActionTimer=null,h.notifcationTimer=null,h.storedSearch=null,h.geolocation=null,h.loaded=!1,h.language="en",h.filteringMode=h.options.filteringMode,h.orderingMode=h.options.orderingMode,h.autocomplete=null,h.countrylist=null,h.messageBox=null,h.load=function(){for(var i=[],q=[],G,E,r,B,x,D,A,F,C,n,m,H,z=0;
z<h.fields.length;
z++){G=h.fields[z],G.mode=typeof G.mode=="number"?G.mode:a.fieldMode.DEFAULT,G.mode&a.fieldMode.COUNTRY?(q.push(G.element),/CountryIso2/.test(G.field)&&(h.options.countries.nameType=h.options.countries.nameType||a.countryNameType.ISO2,h.options.countries.valueType=h.options.countries.valueType||a.countryNameType.ISO2),/CountryIso3/.test(G.field)&&(h.options.countries.nameType=h.options.countries.nameType||a.countryNameType.ISO3,h.options.countries.valueType=h.options.countries.valueType||a.countryNameType.ISO3)):G.mode&a.fieldMode.SEARCH&&(i.push(G.element),h.options.suppressAutocomplete&&(E=a.getElement(G.element),E&&(E.autocomplete="pca"))),G.field=h.checkFormat(G.field)
}h.detectLanguage(),h.autocomplete=new a.AutoComplete(i,h.options.list),h.autocomplete.skipFilter=!0,h.autocomplete.listen("keyup",function(e){h.countrylist.autocomplete.visible?h.countrylist.autocomplete.handleKey(e):h.autocomplete.controlDown&&e==40?h.switchToCountrySelect():(e==0||e==8||e==32||e>36)&&h.searchFromField()
}),h.autocomplete.listen("paste",function(){h.newSearch(),h.searchFromField()
}),h.autocomplete.listen("focus",h.focus),h.autocomplete.listen("blur",h.blur),h.autocomplete.listen("show",function(){h.fire("show")
}),h.autocomplete.listen("hide",function(){h.fire("hide")
}),h.autocomplete.listen("dblclick",h.searchFromField),h.autocomplete.list.listen("filter",function(){h.search(a.getValue(h.autocomplete.field))
}),h.autocomplete.listen("delete",h.newSearch),!h.options.countries.value&&q.length&&(h.options.countries.value=a.getValue(q[0])),h.options.countries.language=h.language,h.countrylist=new a.CountryList(q,h.options.countries),h.countrylist.autocomplete.options.emptyMessage=a.messages[h.language].NOCOUNTRY,h.country=h.countrylist.country.iso3,h.countrylist.listen("change",function(e){h.country=e&&e.iso3?e.iso3:h.options.countries.defaultCode,h.fire("country",e)
}),h.countrylist.listen("select",h.switchToSearchMode),h.countrylist.autocomplete.listen("filter",function(){h.options.preselect&&h.countrylist.autocomplete.list.first()
}),h.countrylist.autocomplete.listen("show",function(){h.fire("show")
}),h.countrylist.autocomplete.listen("hide",function(){h.autocomplete.enable(),h.storedSearch!=null&&a.setValue(h.autocomplete.field,h.storedSearch),h.storedSearch=null,h.fire("hide")
}),h.countrylist.autocomplete.list.collection.count==1&&(h.options.bar.showCountry=!1),r=a.create("div",{className:"pcaflagbutton"}),B=h.countrylist.flag(),r.appendChild(B),h.autocomplete.footer.setContent(h.options.bar.showCountry?r:""),a.listen(r,"click",h.switchToCountrySelect),x=a.create("div",{className:"pcaflagbutton"}),D=h.countrylist.flag(),x.appendChild(D),h.countrylist.autocomplete.footer.setContent(h.options.bar.showCountry?x:""),a.listen(x,"click",h.switchToSearchMode),A=a.create("div",{className:"pcamessage pcadisableselect",innerHTML:a.messages[h.language].COUNTRYSELECT}),h.autocomplete.footer.setContent(h.options.bar.showCountry?A:""),F=a.create("a",{href:h.options.bar.logoUrl,target:"_blank"}),C=a.create("div",{className:h.options.bar.logoClass+" pcalogo"+h.language,title:h.options.bar.logoTitle}),h.options.bar.logoLink?F.appendChild(C):F=C,h.autocomplete.footer.setContent(F),h.showFooterLogo=function(){F.style.display=h.options.bar.showLogo?"":"none"
},h.showFooterMessage=function(){F.style.display=h.options.bar.showCountry?"none":h.options.bar.showLogo?"":"none"
},h.options.bar.visible?(h.autocomplete.footer.show(),h.showFooterMessage()):h.autocomplete.hide(),n=a.create("div",{className:"pcamessage pcadisableselect",innerHTML:a.messages[h.language].COUNTRYSELECT}),h.countrylist.autocomplete.footer.setContent(h.options.bar.showCountry?n:""),h.options.bar.visible&&h.countrylist.autocomplete.footer.show(),h.options.manualEntryItem&&h.addManualEntryItem(),h.options.setCountryByIP&&h.setCountryByIP(),c.name&&(m=c.list.name,H=c.countries.list.name,a.setAttributes(A,{id:m+"_label"}),a.setAttributes(r,{id:m+"_button",role:"button","aria-labelledby":m+"_label"}),a.setAttributes(n,{id:H+"_label"}),a.setAttributes(x,{id:H+"_button",role:"button","aria-labelledby":H+"_label"})),h.messageBox=a.create("div",{className:"pcatext pcanotification"}),a.append(h.messageBox,a.container),h.loaded=!0,h.fire("load")
},h.searchFromField=function(){var e=a.getValue(h.autocomplete.field);
e&&!h.autocomplete.disabled&&!h.initialSearch&&e.length>=h.options.minSearch&&(h.initialSearch=!0,h.search(e))
},h.search=function(m){function p(o,e){o.length?h.display(o,a.templates.AUTOCOMPLETE,e):j()
}var n,l,f;
return h.searchContext&&(~m.indexOf(h.searchContext.search)?m=m.replace(h.searchContext.search,h.searchContext.text):h.searchContext=null),n=h.searchContext?h.searchContext.id||"":"",l={searchTerm:m,lastId:n,options:h.options.search},h.fire("search",l),l.searchTerm&&(f={Key:h.key,Country:h.country,SearchTerm:l.searchTerm,LanguagePreference:h.language,LastId:l.lastId,SearchFor:h.filteringMode,OrderBy:h.orderingMode,$block:!0,$cache:!0},l.options.maxSuggestions&&(f.MaxSuggestions=l.options.maxSuggestions),l.options.maxResults&&(f.MaxResults=l.options.maxResults),a.fetch(h.options.provider+"/Interactive/Find/v2.10",f,p,h.error)),h
},h.searchByLocation=function(m,l){function n(e){e&&e.coords?(m=e.coords.latitude,l=e.coords.longitude,q=e.coords.accuracy,h.geolocation=e.coords,h.fire("location",h.geolocation),p()):f()
}function f(){h.message(a.messages[h.language].NOLOCATION,!0),h.fire("location")
}function p(){function e(r,o){r.length?h.display(r,a.templates.AUTOCOMPLETE,o):j()
}a.fetch(h.options.provider+"/Interactive/FindByPosition/v2.00",{Key:h.key,Latitude:m,Longitude:l,LocationAccuracy:q,LanguagePreference:h.language,$block:!0,$cache:!0},e,h.error)
}var q=0;
return(m||m==0)&&(l||l==0)?p():navigator.geolocation?navigator.geolocation.getCurrentPosition(n,f,{enableHighAccuracy:!0}):f(),h
},h.retrieve=function(n){function p(e){e.length?h.populate(e):l(e)
}function l(e){h.message(a.messages[h.language].RETRIEVEERROR,{clickToDisable:h.options.manualEntry,error:!0,clearList:!0}),h.error(e)
}for(var o={Key:h.key,Id:n,Source:h.options.source,$cache:!0},m=0;
m<h.advancedFields.length;
m++){o["field"+(m+1)+"format"]=h.advancedFields[m]
}a.fetch(h.options.provider+"/Interactive/RetrieveFormatted/v2.10",o,p,l)
},h.error=function(e){if(h.fire("error",e),a.clearBlockingRequests(),!h.listeners.error){if(typeof console!="undefined"&&typeof console.error!="undefined"){console.error(a.messages[h.language].SERVICEERROR+" "+e)
}else{throw a.messages[h.language].SERVICEERROR+" "+e
}}},h.display=function(l,e,m){if(h.autocomplete.header.hide(),h.highlight(l),h.fire("results",l,m),h.autocomplete.clear().add(l,e,h.select).show(),h.showFooterLogo(),h.autocomplete.list.collection.all(function(f){f.data&&f.data.Next&&f.data.Next=="Find"&&a.addClass(f.element,"pcaexpandable")
}),h.options.preselect&&h.autocomplete.list.first(),h.options.prompt){function n(){h.message(a.messages[h.language].KEEPTYPING)
}b(),h.options.promptDelay?h.lastActionTimer=window.setTimeout(n,h.options.promptDelay):n()
}return h.options.matchCount&&m&&m.ContainerCount&&k(m.ContainerCount),h.fire("display",l,m),h
},h.message=function(m,l){if(l=l||{},l.notificationTimeout=l.notificationTimeout||3000,l.inline=l.inline||h.options.inlineMessages,b(),l.inline){h.autocomplete.show(),l.clickToDisable?h.autocomplete.header.clear().setContent(a.create("div",{className:"pcamessage",innerHTML:m,onclick:h.manualEntry},"cursor:pointer;")).show():h.autocomplete.header.clear().setText(m).show(),h.reposition()
}else{h.messageBox.innerHTML=m,a.addClass(h.messageBox,"pcavisible"),a.removeClass(h.messageBox,"pcaerror"),l.error&&a.addClass(h.messageBox,"pcaerror"),h.notifcationTimer&&window.clearTimeout(h.notifcationTimer),a.removeClass(h.messageBox,"pcafade"),h.notifcationTimer=window.setTimeout(function(){a.addClass(h.messageBox,"pcafade"),window.setTimeout(function(){a.removeClass(h.messageBox,"pcavisible")
},500)
},l.notificationTimeout);
var n=a.getPosition(h.autocomplete.field),q=a.getSize(h.autocomplete.field),p=a.getSize(h.messageBox);
h.messageBox.style.top=(h.autocomplete.upwards?n.top+q.height+8:n.top-p.height-8)+"px",h.messageBox.style.left=n.left+"px"
}return l.clearList&&h.autocomplete.clear().list.hide(),h
},h.setCursorText=function(f,e){return h.autocomplete.prompt(f,e),h
},h.select=function(f){function e(){var l=a.getValue(h.autocomplete.field);
h.options.setCursor?(l=a.removeHtml(f.Text).replace("...",""),h.setCursorText(l,f.Cursor>=0?f.Cursor:null)):(a.setValue(h.autocomplete.field,l+" "),h.autocomplete.field.focus()),h.searchContext={id:f.Id,text:f.Text,search:l},h.search(l)
}return h.fire("select",f),f.Next=="Retrieve"?h.retrieve(f.Id):e(),h
},h.highlight=function(x,p,m){var v,q,w,s,l;
for(p=p||"<b>",m=m||"</b>",v=0;
v<x.length;
v++){if(q=x[v],q.HighlightedText=q.title=q.tag=q.Text,q.Highlight){for(w=q.Highlight.split(","),s=w.length-1;
s>=0;
s--){l=w[s].split("-"),q.HighlightedText=q.HighlightedText.substring(0,parseInt(l[0]))+p+q.HighlightedText.substring(parseInt(l[0]),parseInt(l[1]))+m+q.HighlightedText.substring(parseInt(l[1]),q.HighlightedText.length)
}}}},h.populate=function(D){var C=D[0],q,r,A,m,B,n,w,E,p,x,z;
if(h.options.languagePreference){for(q=0;
q<D.length;
q++){if(D[q].Language==h.options.languagePreference.toUpperCase()){C=D[q];
break
}}}for(h.options.countries.prepopulate&&h.countrylist.populate(),r={Line1:null,Line2:null,Line3:null,Line4:null,Line5:null,Street:null,Building:null,Company:null},A=0,m=0;
m<h.fields.length;
m++){for(B in r){~h.fields[m].field.indexOf(B)&&(r[B]=h.fields[m])
}}for(n=1;
n<=5;
n++){r["Line"+n]&&A++
}for(r.Building&&r.Street&&A++,w=1;
w<=5;
w++){C["FormattedLine"+w]=h.getAddressLine(C,w,A,!r.Company)
}for(h.fire("prepopulate",C,D),E=0;
E<h.fields.length&&h.options.populate;
E++){(p=h.fields[E],p.mode&a.fieldMode.POPULATE)&&(!h.options.onlyInputs||a.inputField(p.element)||a.selectList(p.element)||a.checkBox(p.element))&&(p.mode&a.fieldMode.PRESERVE&&a.getValue(p.element)&&h.autocomplete.field!=a.getElement(p.element)||(x=h.fields[E].field.replace(/(Formatted)?Line/g,"FormattedLine"),z=/[\{\}]/.test(x)||x==""?a.formatLine(C,x):C[x],a.setValue(p.element,z)))
}return h.hide(),h.newSearch(),h.fire("populate",C,D),h
},h.getAddressLine=function(p,y,q,l){var x,w="",m,z,v;
if(l=l&&!!p.Company,l){if(y==1&&q>1){return p.Company
}y==1&&q==1?w=p.Company:(y--,q--)
}for(x=p.Line1?p.Line2?p.Line3?p.Line4?p.Line5?5:4:3:2:1:0,m=q>=x?y:Math.floor(1+(x/q+(q-(y-1))/q)*(y-1)),z=Math.floor(x/q+(q-y)/q),v=0;
v<z;
v++){w+=(w?", ":"")+(p["Line"+(v+m)]||"")
}return w
},h.switchToCountrySelect=function(){h.countrylist.autocomplete.position(h.autocomplete.field),h.countrylist.autocomplete.field=h.autocomplete.field,h.countrylist.autocomplete.focused=!0,h.countrylist.autocomplete.enable().showAll(),h.countrylist.autocomplete.list.first(),h.autocomplete.disable().hide(),h.storedSearch=a.getValue(h.autocomplete.field),a.clear(h.autocomplete.field),h.autocomplete.field.focus()
},h.switchToSearchMode=function(){var e=h.storedSearch!=null;
h.countrylist.autocomplete.hide(),h.autocomplete.enable(),e&&(h.newSearch(),h.autocomplete.field.focus(),h.searchFromField())
},h.setCountry=function(e){return h.countrylist.setCountry(e),h
},h.setCountryByIP=function(){return h.countrylist.setCountryByIP(h.key),h
},h.detectLanguage=function(){var e=h.options.culture||(window&&window.navigator?window.navigator.language||window.navigator.browserLanguage:"")||"";
h.language=e&&e.length>1?e.substring(0,2).toLowerCase():"en",a.messages[h.language]||(h.language="en")
},h.setCulture=function(e){h.options.culture=e,h.reload()
},h.setWidth=function(e){h.autocomplete.setWidth(e),h.countrylist.autocomplete.setWidth(e)
},h.setHeight=function(e){h.autocomplete.setHeight(e),h.countrylist.autocomplete.setHeight(e)
},h.clear=function(){for(var e=0;
e<h.fields.length;
e++){a.setValue(h.fields[e].element,"")
}return h.fire("clear"),h
},h.reset=function(){return h.options.bar.visible?(h.autocomplete.list.clear().hide(),h.autocomplete.header.hide(),h.showFooterMessage(),h.autocomplete.reposition()):(h.autocomplete.hide(),h.autocomplete.footer.hide()),b(),h.newSearch(),h
},h.newSearch=function(){h.initialSearch=!1,h.searchContext=null
},h.focus=function(){h.reset(),h.options.autoSearch&&h.searchFromField(),h.fire("focus")
},h.blur=function(){b(),h.countrylist.autocomplete.field=null,h.countrylist.autocomplete.focused=!1,h.countrylist.autocomplete.checkHide(),h.fire("blur")
},h.hide=function(){b(),h.autocomplete.hide(),h.countrylist.autocomplete.hide(),h.fire("hide")
},h.visible=function(){return h.autocomplete.visible||h.countrylist.autocomplete.visible
},h.reposition=function(){h.autocomplete.reposition(),h.countrylist.autocomplete.reposition()
},h.disable=function(){return h.autocomplete.disabled=!0,h.countrylist.autocomplete.disabled=!0,h
},h.enable=function(){return h.autocomplete.disabled=!1,h.countrylist.autocomplete.disabled=!1,h
},h.destroy=function(){return h.autocomplete&&h.autocomplete.destroy(),h.countrylist&&h.countrylist.autocomplete.destroy(),h
},h.reload=function(){h.destroy(),h.load()
},h.manualEntry=function(){return window&&window.setTimeout&&h.options.disableTime&&(h.autocomplete.field.focus(),h.destroy(),window.setTimeout(h.load,h.options.disableTime),h.fire("manual")),h
},h.addManualEntryItem=function(e){e=e||a.messages[h.language].MANUALENTRY,h.autocomplete.list.setFooterItem({text:e},"<u>{text}</u>",h.manualEntry)
},h.bound=function(f){if(f=a.getElement(f)){for(var e=0;
e<h.fields.length;
e++){if(f==a.getElement(d[e].element)){return !0
}}}return !1
},h.checkFormat=function(f){function e(m){for(var l in a.exampleAddress){if(l==m){return !0
}}return !1
}return f.replace(/\{(\w+)([^\}\w])?\}/g,function(l,i){return e(i)?l:(h.advancedFields.push(l),"{Field"+h.advancedFields.length+"}")
})
},a.ready(h.load)
}
})();
(function(){pca.AddressComplete=function(){function b(d){return d=d||{},d.countries=d.countries||{},d.AddressCompleteCountryByIP&&(d.setCountryByIP=!!d.AddressCompleteCountryByIP),d.AddressCompleteDefaultLanguage&&(d.culture=d.AddressCompleteDefaultLanguage),d.AddressCompleteDefaultCountry&&(d.countries.defaultCode=d.AddressCompleteDefaultCountry),d.AddressCompleteCountryList&&(d.countries.codesList=d.AddressCompleteCountryList),d.setCursor=!0,d.prompt=!0,d.promptDelay=0,d.manualEntry=!0,c.fire("options",d),d
}function a(e){function d(){typeof AddressCompleteLoaded!="undefined"&&AddressCompleteLoaded(e)
}e.listen("load",d),e.loaded&&d(),e.listen("populate",function(f,h){typeof AddressCompleteCallback!="undefined"&&AddressCompleteCallback(e,f,h),c.fire("populate",e,f,h),f.POBoxNumber=="99900"&&e.destroy()
}),e.listen("error",function(f){typeof AddressCompleteError!="undefined"&&AddressCompleteError(e,f),c.fire("error",e,f)
})
}var c=new pca.Eventable(this);
c.controls=[],c.bindings=[],c.load=function(){var e,d;
for(c.destroy(),e=0;
e<c.bindings.length;
e++){d=new pca.Address(c.bindings[e].fields,b(c.bindings[e].options)),a(d),c.controls.push(d),c.fire("load",d)
}c.fire("ready")
},c.all=function(e){for(var d=0;
d<c.controls.length;
d++){e(c.controls[d])
}},c.setCulture=function(d){c.all(function(e){e.setCulture(d)
})
},c.setCountry=function(d){c.all(function(e){e.setCountry(d)
})
},c.setWidth=function(d){c.all(function(e){e.setWidth(d)
})
},c.setHeight=function(d){c.all(function(e){e.setHeight(d)
})
},c.enable=function(){c.all(function(d){d.enable()
})
},c.disable=function(){c.all(function(d){d.disable()
})
},c.destroy=function(){c.all(function(d){d.destroy()
}),c.controls=[]
},pca.ready(c.load)
},window.addressComplete=pca.addressComplete=new pca.AddressComplete
})();
BC={};
BC.hydro={};
BC.hydro.templates={};
var Hydro={};
Hydro.Modal={_modals:{},get:function(b,a){b=b||"blank";
if(!Hydro.Modal._modals[b]){Hydro.Modal.make(b,a)
}return Hydro.Modal._modals[b]
},make:function(b,a){a=a||{};
Hydro.Modal._modals[b]=(function(c){this.show=function(){$.modal.call(this,arguments[0],c)
};
return this
})(a);
return Hydro.Modal._modals[b]
},generic_launcher_cache:{},genericLauncher:function(d){try{d.preventDefault();
var a=$(this).attr("data-height");
if(!a){a=450
}var b=$(this).attr("data-width");
if(!b){b=660
}$.modal('<iframe src="'+this.href+'" height="'+a+'" width="'+b+'" style="border:0">',{zIndex:50000,opacity:80})
}catch(c){alert(c)
}}};
$(document).ready(function(){$("a").each(function(){if((this.href&&this.href.match(/\/modals/))||(this.rel&&this.rel=="modal")){$(this).click(Hydro.Modal.genericLauncher)
}})
});
BC.hydro.Video={lastThumbnail:{},lastModalVideoId:null,lastModalVideoIsHtml5:true,players:{},lastId:null,make:function(a){console.log(this.players);
BC.hydro.Video.players[a.id]=a;
BC.hydro.Video.lastId=a.id;
console.log(this.players);
return BC.hydro.Video.players[a.id]
},getPlayerHtml:function(b,a){return $.template(a?"modal":"multi")
},getThumbnailHtml:function(c,b){var a=c.charAt(0)=="/"?"cq5":"youtube";
return $("#tpl-"+a+(b?"-modal":"")+"-thumbnail")
},playModal:function(e){var c=c=_V_("video-modal-html5");
var b=null;
var a="#video-modal-html5";
if(e.charAt(0)=="/"){BC.hydro.Video.lastModalVideoIsHtml5=true;
c.src(e);
b=$(a).show()
}else{BC.hydro.Video.lastModalVideoIsHtml5=false;
b=$.tmpl(BC.hydro.Video.getPlayerHtml(e,true),{videoId:e,autoplay:1,autoplayBool:"true"}).html()
}var d=Hydro.Modal.get("video-modal-html5",{onClose:function(f){if(BC.hydro.Video.lastModalVideoIsHtml5){c.pause();
$(a).hide()
}else{f.container.empty()
}$.modal.close()
}});
d.show(b);
if(BC.hydro.Video.lastModalVideoIsHtml5){c.play()
}},playerStates:{},playSingle:function(c,e,b,a){var d=BC.hydro.Video.players[c];
if(!d){return
}if(d.lastId){if(d.lastId==e){return
}else{$(d.lastAnchor).toggleClass("selected")
}}d.lastId=e;
d.lastAnchor=b;
$(d.lastAnchor).toggleClass("selected");
$("#"+c+" .player-body").empty();
var f=d.getProps(e);
f.autoplay=a?0:1;
f.autoplayBool=a?"false":"true";
BC.hydro.Video.getPlayerHtml(e).tmpl(f).appendTo("#"+c+" .player-body")
},playVideo:function(c,b){var a=_V_(c);
a.src(this.players[c].videos[b].src);
a.play()
},playVideoYoutube:function(c,b){var a=$.tmpl($.template("multihtml"),{videoId:b,autoplay:1,autoplayBool:"true"}).html();
$("#"+c+" .video-list").html(a)
},playVideoVimeo:function(c,b){var a=$.tmpl($.template("multihtmlvimeo"),{videoId:b,autoplay:1,autoplayBool:"true"}).html();
$("#"+c+" .video-list").html(a)
}};
$(document).ready(function(){$('body a[rel="video-modal"]').click(function(a){a.preventDefault();
BC.hydro.Video.playModal(this.href.split("#",2)[1])
});
$("div.video-thumb").each(function(){var b=$(this).attr("data-player");
var c=$(this).attr("data-href");
var a=$(this).attr("data-idx");
if(c=="video0"||a=="0"){BC.hydro.Video.lastThumbnail[b]=this
}$(this).click(function(j){$(this).hide();
$(BC.hydro.Video.lastThumbnail[b]).show();
var i=$(this).attr("data-href");
if(i.indexOf("youtube:")==0){var h=i.split(":");
i=h[2];
var f=h[1];
var l=$(this).closest(".video-container").attr("id");
var e=BC.hydro.Video.players[b];
var k=e.videos[i]["description"];
if(k==null){k=""
}$("#"+b+"-description").html(k);
BC.hydro.Video.playVideoYoutube(l,f)
}else{if(i.indexOf("vimeo:")==0){var h=i.split(":");
i=h[2];
var d=h[1];
var l=$(this).closest(".video-container").attr("id");
var e=BC.hydro.Video.players[b];
var k=e.videos[i]["description"];
if(k==null){k=""
}$("#"+b+"-description").html(k);
BC.hydro.Video.playVideoVimeo(l,d)
}else{var l=$(this).closest(".video-container").find(".video-js").attr("id");
var e=BC.hydro.Video.players[b];
var k=e.videos[i]["description"];
if(k==null){k=""
}$("#"+b+"-description").html(k);
BC.hydro.Video.playVideo(l,i)
}}BC.hydro.Video.lastThumbnail[b]=this
})
})
});
var TPL_MODAL='<object width="660" height="375"><param name="wmode" value="opaque"></param><param name="movie" value="https://www.youtube.com/v/${videoId}?version=3&autoplay=${autoplay}&rel=0"></param><param name="allowScriptAccess" value="sameDomain"></param><embed src="https://www.youtube.com/v/${videoId}?version=3&autoplay=${autoplay}&rel=0" type="application/x-shockwave-flash" allowscriptaccess="sameDomain" wmode="opaque" width="660" height="375"></embed></object>';
var TPL_MULTI='<object width="515" height="290"><param name="wmode" value="opaque"></param><param name="movie" value="https://www.youtube.com/v/${videoId}?version=3&autoplay=${autoplay}&rel=0"></param><param name="allowScriptAccess" value="sameDomain"></param><embed src="https://www.youtube.com/v/${videoId}?version=3&autoplay=${autoplay}&rel=0" type="application/x-shockwave-flash" allowscriptaccess="sameDomain" wmode="opaque" width="515" height="290"></embed></object>';
var TPL_MULTI_HTML='<object width="462" height="260"><iframe width="462" height="260" src="//www.youtube.com/embed/${videoId}?rel=0&fs=1&wmode=opaque" frameborder="0" allowfullscreen></iframe></object>';
var TPL_MULTI_HTML_VIMEO='<object width="462" height="260"><iframe width="462" height="260" src="//player.vimeo.com/video/${videoId}?rel=0&fs=1&wmode=opaque&version=3" frameborder="0" allowfullscreen></iframe></object>';
$.template("modal",TPL_MODAL);
$.template("multi",TPL_MULTI);
$.template("multihtml",TPL_MULTI_HTML);
$.template("multihtmlvimeo",TPL_MULTI_HTML_VIMEO);
$(function(){$(".social-channels a.social-channel").on("click",function(j){var f=$(this).data("title");
var c=capitalizeFirstLetter(f);
dcsMultiTrack("WT.ti",c+"%20Social%20Share","DCS.dcsuri",window.location.pathname+"/social-share/"+f);
if(!IsMobile){j.preventDefault();
var b=$(this).attr("href");
var i=0;
var h=0;
var a=450;
var d=660;
popUpWindow(b,h,i,d,a)
}})
});
function popUpWindow(e,d,c,b,a){popUpWin=open(e,"popUpWin","toolbar=no,location=no,directories=no,status=no,menub ar=no,scrollbars=yes,resizable=yes,copyhistory=yes,width="+b+",height="+a+",left="+d+", top="+c+",screenX="+d+",screenY="+c+"")
}function capitalizeFirstLetter(a){return a.charAt(0).toUpperCase()+a.slice(1)
}$(document).ready(function(){if($("div.bch-faq-block").length>5){$("div.bch-faq-block").addClass("closed");
$("div.bch-faq-block > div").hide();
if(window.location.hash){var b=$("[name='"+window.location.hash.substr(1)+"']").closest("div.bch-faq-block");
b.removeClass("closed").children("div").show();
var a=$("[name='"+window.location.hash.substr(1)+"']").offset();
if(a.top){window.scrollTo(a.left,a.top)
}}}$("div.bch-faq-block > h3").click(function(c){if($(this).parent("div.bch-faq-block").hasClass("closed")){$(this).parent("div.bch-faq-block").removeClass("closed");
$(this).siblings("div").show(300)
}else{$(this).siblings("div").hide(300,function(){$(this).parent("div.bch-faq-block").addClass("closed")
})
}});
$(".termsAndConditions").each(function(){var c=$(this).parent().closest("div").find(".termsAndConditionsContent > p").text();
var d=$(this).text();
$(this).parent().closest("div").find(".termsAndConditionsContent").load(c);
$(this).on("click",function(){var e={message:$(this).parent().closest("div").find(".termsAndConditionsContent").html(),disableClose:true,classes:"modal large",buttons:[["Close","primary",function(){$("div.modal a.close:first").click()
}]]};
$(this).popModal(d,e)
})
})
});
$(document).ready(function(){json_obj=[{Product:"001",name:"Bank of Montreal (BMO)"},{Product:"002",name:"The Bank of Nova Scotia (Scotiabank)"},{Product:"003",name:"Royal Bank of Canada (RBC)"},{Product:"004",name:"Toronto-Dominion Bank (TD Canada Trust)"},{Product:"006",name:"National Bank of Canada"},{Product:"010",name:"Cdn Imperial Bank of Commerce (CIBC Incl. Simplii Financial)"},{Product:"016",name:"HSBC Canada"},{Product:"030",name:"Canadian Western Bank"},{Product:"039",name:"Laurentian Bank of Canada"},{Product:"260",name:"Citibank Canada"},{Product:"309",name:"Vancity Community Investment Bank"},{Product:"310",name:"First Nations Bank of Canada"},{Product:"338",name:"Canadian Tire Bank"},{Product:"509",name:"The Canada Trust Company"},{Product:"540",name:"Manulife Bank"},{Product:"614",name:"Tangerine Bank"}];
var b={};
var a={};
$.each(json_obj,function(){if(!b[this.Product]){$("#institution-number").append($("<input/>",{value:this.Product,text:this.Product}));
b[this.Product]=true
}});
$("#institution-number").bind("keyup change",function(){$("#bankName").empty();
var c=$("#institution-number").val();
if(c){$.each(json_obj,function(){if(c==this.Product){$("#bankName").text(this["name"]);
return false
}})
}})
});
/*!
 * jQuery Raty - A Star Rating Plugin
 *
 * The MIT License
 *
 * @author  : Washington Botelho
 * @doc     : http://wbotelhos.com/raty
 * @version : 2.7.0
 *
 */
;
(function(b){var a={init:function(c){return this.each(function(){this.self=b(this);
a.destroy.call(this.self);
this.opt=b.extend(true,{},b.fn.raty.defaults,c);
a._adjustCallback.call(this);
a._adjustNumber.call(this);
a._adjustHints.call(this);
this.opt.score=a._adjustedScore.call(this,this.opt.score);
if(this.opt.starType!=="img"){a._adjustStarType.call(this)
}a._adjustPath.call(this);
a._createStars.call(this);
if(this.opt.cancel){a._createCancel.call(this)
}if(this.opt.precision){a._adjustPrecision.call(this)
}a._createScore.call(this);
a._apply.call(this,this.opt.score);
a._setTitle.call(this,this.opt.score);
a._target.call(this,this.opt.score);
if(this.opt.readOnly){a._lock.call(this)
}else{this.style.cursor="pointer";
a._binds.call(this)
}})
},_adjustCallback:function(){var c=["number","readOnly","score","scoreName","target","path"];
for(var d=0;
d<c.length;
d++){if(typeof this.opt[c[d]]==="function"){this.opt[c[d]]=this.opt[c[d]].call(this)
}}},_adjustedScore:function(c){if(!c){return c
}return a._between(c,0,this.opt.number)
},_adjustHints:function(){if(!this.opt.hints){this.opt.hints=[]
}if(!this.opt.halfShow&&!this.opt.half){return
}var c=this.opt.precision?10:2;
for(var e=0;
e<this.opt.number;
e++){var h=this.opt.hints[e];
if(Object.prototype.toString.call(h)!=="[object Array]"){h=[h]
}this.opt.hints[e]=[];
for(var d=0;
d<c;
d++){var k=h[d],f=h[h.length-1];
if(f===undefined){f=null
}this.opt.hints[e][d]=k===undefined?f:k
}}},_adjustNumber:function(){this.opt.number=a._between(this.opt.number,1,this.opt.numberMax)
},_adjustPath:function(){this.opt.path=this.opt.path||"";
if(this.opt.path&&this.opt.path.charAt(this.opt.path.length-1)!=="/"){this.opt.path+="/"
}},_adjustPrecision:function(){this.opt.half=true
},_adjustStarType:function(){var c=["cancelOff","cancelOn","starHalf","starOff","starOn"];
this.opt.path="";
for(var d=0;
d<c.length;
d++){this.opt[c[d]]=this.opt[c[d]].replace(".","-")
}},_apply:function(c){a._fill.call(this,c);
if(c){if(c>0){this.score.val(c)
}a._roundStars.call(this,c)
}},_between:function(e,d,c){return Math.min(Math.max(parseFloat(e),d),c)
},_binds:function(){if(this.cancel){a._bindOverCancel.call(this);
a._bindClickCancel.call(this);
a._bindOutCancel.call(this)
}a._bindOver.call(this);
a._bindClick.call(this);
a._bindOut.call(this)
},_bindClick:function(){var c=this;
c.stars.on("click.raty",function(d){var e=true,f=(c.opt.half||c.opt.precision)?c.self.data("score"):(this.alt||b(this).data("alt"));
if(c.opt.click){e=c.opt.click.call(c,+f,d)
}if(e||e===undefined){if(c.opt.half&&!c.opt.precision){f=a._roundHalfScore.call(c,f)
}a._apply.call(c,f)
}})
},_bindClickCancel:function(){var c=this;
c.cancel.on("click.raty",function(d){c.score.removeAttr("value");
if(c.opt.click){c.opt.click.call(c,null,d)
}})
},_bindOut:function(){var c=this;
c.self.on("mouseleave.raty",function(d){var e=+c.score.val()||undefined;
a._apply.call(c,e);
a._target.call(c,e,d);
a._resetTitle.call(c);
if(c.opt.mouseout){c.opt.mouseout.call(c,e,d)
}})
},_bindOutCancel:function(){var c=this;
c.cancel.on("mouseleave.raty",function(d){var e=c.opt.cancelOff;
if(c.opt.starType!=="img"){e=c.opt.cancelClass+" "+e
}a._setIcon.call(c,this,e);
if(c.opt.mouseout){var f=+c.score.val()||undefined;
c.opt.mouseout.call(c,f,d)
}})
},_bindOver:function(){var c=this,d=c.opt.half?"mousemove.raty":"mouseover.raty";
c.stars.on(d,function(e){var f=a._getScoreByPosition.call(c,e,this);
a._fill.call(c,f);
if(c.opt.half){a._roundStars.call(c,f,e);
a._setTitle.call(c,f,e);
c.self.data("score",f)
}a._target.call(c,f,e);
if(c.opt.mouseover){c.opt.mouseover.call(c,f,e)
}})
},_bindOverCancel:function(){var c=this;
c.cancel.on("mouseover.raty",function(d){var f=c.opt.path+c.opt.starOff,e=c.opt.cancelOn;
if(c.opt.starType==="img"){c.stars.attr("src",f)
}else{e=c.opt.cancelClass+" "+e;
c.stars.attr("class",f)
}a._setIcon.call(c,this,e);
a._target.call(c,null,d);
if(c.opt.mouseover){c.opt.mouseover.call(c,null)
}})
},_buildScoreField:function(){return b("<input />",{name:this.opt.scoreName,type:"hidden"}).appendTo(this)
},_createCancel:function(){var c=this.opt.path+this.opt.cancelOff,d=b("<"+this.opt.starType+" />",{title:this.opt.cancelHint,"class":this.opt.cancelClass});
if(this.opt.starType==="img"){d.attr({src:c,alt:"x"})
}else{d.attr("data-alt","x").addClass(c)
}if(this.opt.cancelPlace==="left"){this.self.prepend("&#160;").prepend(d)
}else{this.self.append("&#160;").append(d)
}this.cancel=d
},_createScore:function(){var c=b(this.opt.targetScore);
this.score=c.length?c:a._buildScoreField.call(this)
},_createStars:function(){for(var e=1;
e<=this.opt.number;
e++){var d=a._nameForIndex.call(this,e),c={alt:e,src:this.opt.path+this.opt[d]};
if(this.opt.starType!=="img"){c={"data-alt":e,"class":c.src}
}c.title=a._getHint.call(this,e);
b("<"+this.opt.starType+" />",c).appendTo(this);
if(this.opt.space){this.self.append(e<this.opt.number?"&#160;":"")
}}this.stars=this.self.children(this.opt.starType)
},_error:function(c){b(this).text(c);
b.error(c)
},_fill:function(k){var h=0;
for(var c=1;
c<=this.stars.length;
c++){var d,f=this.stars[c-1],e=a._turnOn.call(this,c,k);
if(this.opt.iconRange&&this.opt.iconRange.length>h){var j=this.opt.iconRange[h];
d=a._getRangeIcon.call(this,j,e);
if(c<=j.range){a._setIcon.call(this,f,d)
}if(c===j.range){h++
}}else{d=this.opt[e?"starOn":"starOff"];
a._setIcon.call(this,f,d)
}}},_getFirstDecimal:function(e){var d=e.toString().split(".")[1],c=0;
if(d){c=parseInt(d.charAt(0),10);
if(d.slice(1,5)==="9999"){c++
}}return c
},_getRangeIcon:function(d,c){return c?d.on||this.opt.starOn:d.off||this.opt.starOff
},_getScoreByPosition:function(c,e){var h=parseInt(e.alt||e.getAttribute("data-alt"),10);
if(this.opt.half){var d=a._getWidth.call(this),f=parseFloat((c.pageX-b(e).offset().left)/d);
h=h-1+f
}return h
},_getHint:function(i,d){if(i!==0&&!i){return this.opt.noRatedMsg
}var c=a._getFirstDecimal.call(this,i),e=Math.ceil(i),f=this.opt.hints[(e||1)-1],h=f,j=!d||this.move;
if(this.opt.precision){if(j){c=c===0?9:c-1
}h=f[c]
}else{if(this.opt.halfShow||this.opt.half){c=j&&c===0?1:c>5?1:0;
h=f[c]
}}return h===""?"":h||i
},_getWidth:function(){var c=this.stars[0].width||parseFloat(this.stars.eq(0).css("font-size"));
if(!c){a._error.call(this,"Could not get the icon width!")
}return c
},_lock:function(){var c=a._getHint.call(this,this.score.val());
this.style.cursor="";
this.title=c;
this.score.prop("readonly",true);
this.stars.prop("title",c);
if(this.cancel){this.cancel.hide()
}this.self.data("readonly",true)
},_nameForIndex:function(c){return this.opt.score&&this.opt.score>=c?"starOn":"starOff"
},_resetTitle:function(d){for(var c=0;
c<this.opt.number;
c++){this.stars[c].title=a._getHint.call(this,c+1)
}},_roundHalfScore:function(e){var d=parseInt(e,10),c=a._getFirstDecimal.call(this,e);
if(c!==0){c=c>5?1:0.5
}return d+c
},_roundStars:function(i,d){var c=(i%1).toFixed(2),e;
if(d||this.move){e=c>0.5?"starOn":"starHalf"
}else{if(c>this.opt.round.down){e="starOn";
if(this.opt.halfShow&&c<this.opt.round.up){e="starHalf"
}else{if(c<this.opt.round.full){e="starOff"
}}}}if(e){var f=this.opt[e],h=this.stars[Math.ceil(i)-1];
a._setIcon.call(this,h,f)
}},_setIcon:function(d,c){d[this.opt.starType==="img"?"src":"className"]=this.opt.path+c
},_setTarget:function(c,d){if(d){d=this.opt.targetFormat.toString().replace("{score}",d)
}if(c.is(":input")){c.val(d)
}else{c.html(d)
}},_setTitle:function(f,c){if(f){var d=parseInt(Math.ceil(f),10),e=this.stars[d-1];
e.title=a._getHint.call(this,f,c)
}},_target:function(h,d){if(this.opt.target){var f=b(this.opt.target);
if(!f.length){a._error.call(this,"Target selector invalid or missing!")
}var c=d&&d.type==="mouseover";
if(h===undefined){h=this.opt.targetText
}else{if(h===null){h=c?this.opt.cancelHint:this.opt.targetText
}else{if(this.opt.targetType==="hint"){h=a._getHint.call(this,h,d)
}else{if(this.opt.precision){h=parseFloat(h).toFixed(1)
}}var e=d&&d.type==="mousemove";
if(!c&&!e&&!this.opt.targetKeep){h=this.opt.targetText
}}}a._setTarget.call(this,f,h)
}},_turnOn:function(c,d){return this.opt.single?(c===d):(c<=d)
},_unlock:function(){this.style.cursor="pointer";
this.removeAttribute("title");
this.score.removeAttr("readonly");
this.self.data("readonly",false);
for(var c=0;
c<this.opt.number;
c++){this.stars[c].title=a._getHint.call(this,c+1)
}if(this.cancel){this.cancel.css("display","")
}},cancel:function(c){return this.each(function(){var d=b(this);
if(d.data("readonly")!==true){a[c?"click":"score"].call(d,null);
this.score.removeAttr("value")
}})
},click:function(c){return this.each(function(){if(b(this).data("readonly")!==true){c=a._adjustedScore.call(this,c);
a._apply.call(this,c);
if(this.opt.click){this.opt.click.call(this,c,b.Event("click"))
}a._target.call(this,c)
}})
},destroy:function(){return this.each(function(){var c=b(this),d=c.data("raw");
if(d){c.off(".raty").empty().css({cursor:d.style.cursor}).removeData("readonly")
}else{c.data("raw",c.clone()[0])
}})
},getScore:function(){var d=[],c;
this.each(function(){c=this.score.val();
d.push(c?+c:undefined)
});
return(d.length>1)?d:d[0]
},move:function(c){return this.each(function(){var h=parseInt(c,10),e=a._getFirstDecimal.call(this,c);
if(h>=this.opt.number){h=this.opt.number-1;
e=10
}var i=a._getWidth.call(this),f=i/10,k=b(this.stars[h]),j=k.offset().left+f*e,d=b.Event("mousemove",{pageX:j});
this.move=true;
k.trigger(d);
this.move=false
})
},readOnly:function(c){return this.each(function(){var d=b(this);
if(d.data("readonly")!==c){if(c){d.off(".raty").children("img").off(".raty");
a._lock.call(this)
}else{a._binds.call(this);
a._unlock.call(this)
}d.data("readonly",c)
}})
},reload:function(){return a.set.call(this,{})
},score:function(){var c=b(this);
return arguments.length?a.setScore.apply(c,arguments):a.getScore.call(c)
},set:function(c){return this.each(function(){b(this).raty(b.extend({},this.opt,c))
})
},setScore:function(c){return this.each(function(){if(b(this).data("readonly")!==true){c=a._adjustedScore.call(this,c);
a._apply.call(this,c);
a._target.call(this,c)
}})
}};
b.fn.raty=function(c){if(a[c]){return a[c].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof c==="object"||!c){return a.init.apply(this,arguments)
}else{b.error("Method "+c+" does not exist!")
}}};
b.fn.raty.defaults={cancel:false,cancelClass:"raty-cancel",cancelHint:"Cancel this rating!",cancelOff:"cancel-off.png",cancelOn:"cancel-on.png",cancelPlace:"left",click:undefined,half:false,halfShow:true,hints:["bad","poor","regular","good","gorgeous"],iconRange:undefined,mouseout:undefined,mouseover:undefined,noRatedMsg:"Not rated yet!",number:5,numberMax:20,path:undefined,precision:false,readOnly:false,round:{down:0.25,full:0.6,up:0.76},score:undefined,scoreName:"score",single:false,space:true,starHalf:"star-half.png",starOff:"star-off.png",starOn:"star-on.png",starType:"img",target:undefined,targetFormat:"{score}",targetKeep:false,targetScore:undefined,targetText:"",targetType:"hint"}
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(f,e){function i(a,m){var l=a.nodeName.toLowerCase();
if("area"===l){var k=a.parentNode,j=k.name,d;
return !a.href||!j||k.nodeName.toLowerCase()!=="map"?!1:(d=f("img[usemap=#"+j+"]")[0],!!d&&h(d))
}return(/input|select|textarea|button|object/.test(l)?!a.disabled:"a"==l?a.href||m:m)&&h(a)
}function h(a){return !f(a).parents().andSelf().filter(function(){return f.curCSS(this,"visibility")==="hidden"||f.expr.filters.hidden(this)
}).length
}f.ui=f.ui||{};
if(f.ui.version){return
}f.extend(f.ui,{version:"1.8.24",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),f.fn.extend({propAttr:f.fn.prop||f.fn.attr,_focus:f.fn.focus,focus:function(a,d){return typeof a=="number"?this.each(function(){var b=this;
setTimeout(function(){f(b).focus(),d&&d.call(b)
},a)
}):this._focus.apply(this,arguments)
},scrollParent:function(){var a;
return f.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?a=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(f.curCSS(this,"position",1))&&/(auto|scroll)/.test(f.curCSS(this,"overflow",1)+f.curCSS(this,"overflow-y",1)+f.curCSS(this,"overflow-x",1))
}).eq(0):a=this.parents().filter(function(){return/(auto|scroll)/.test(f.curCSS(this,"overflow",1)+f.curCSS(this,"overflow-y",1)+f.curCSS(this,"overflow-x",1))
}).eq(0),/fixed/.test(this.css("position"))||!a.length?f(document):a
},zIndex:function(k){if(k!==e){return this.css("zIndex",k)
}if(this.length){var j=f(this[0]),b,a;
while(j.length&&j[0]!==document){b=j.css("position");
if(b==="absolute"||b==="relative"||b==="fixed"){a=parseInt(j.css("zIndex"),10);
if(!isNaN(a)&&a!==0){return a
}}j=j.parent()
}}return 0
},disableSelection:function(){return this.bind((f.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(b){b.preventDefault()
})
},enableSelection:function(){return this.unbind(".ui-disableSelection")
}}),f("<a>").outerWidth(1).jquery||f.each(["Width","Height"],function(m,l){function a(n,q,p,o){return f.each(k,function(){q-=parseFloat(f.curCSS(n,"padding"+this,!0))||0,p&&(q-=parseFloat(f.curCSS(n,"border"+this+"Width",!0))||0),o&&(q-=parseFloat(f.curCSS(n,"margin"+this,!0))||0)
}),q
}var k=l==="Width"?["Left","Right"]:["Top","Bottom"],j=l.toLowerCase(),b={innerWidth:f.fn.innerWidth,innerHeight:f.fn.innerHeight,outerWidth:f.fn.outerWidth,outerHeight:f.fn.outerHeight};
f.fn["inner"+l]=function(d){return d===e?b["inner"+l].call(this):this.each(function(){f(this).css(j,a(this,d)+"px")
})
},f.fn["outer"+l]=function(d,n){return typeof d!="number"?b["outer"+l].call(this,d):this.each(function(){f(this).css(j,a(this,d,!0,n)+"px")
})
}
}),f.extend(f.expr[":"],{data:f.expr.createPseudo?f.expr.createPseudo(function(a){return function(b){return !!f.data(b,a)
}
}):function(a,k,j){return !!f.data(a,j[3])
},focusable:function(a){return i(a,!isNaN(f.attr(a,"tabindex")))
},tabbable:function(a){var j=f.attr(a,"tabindex"),c=isNaN(j);
return(c||j>=0)&&i(a,!c)
}}),f(function(){var a=document.body,d=a.appendChild(d=document.createElement("div"));
d.offsetHeight,f.extend(d.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),f.support.minHeight=d.offsetHeight===100,f.support.selectstart="onselectstart" in d,a.removeChild(d).style.display="none"
}),f.curCSS||(f.curCSS=f.css),f.extend(f.ui,{plugin:{add:function(a,m,l){var k=f.ui[a].prototype;
for(var j in l){k.plugins[j]=k.plugins[j]||[],k.plugins[j].push([m,l[j]])
}},call:function(k,j,n){var m=k.plugins[j];
if(!m||!k.element[0].parentNode){return
}for(var l=0;
l<m.length;
l++){k.options[m[l][0]]&&m[l][1].apply(k.element,n)
}}},contains:function(d,c){return document.compareDocumentPosition?d.compareDocumentPosition(c)&16:d!==c&&d.contains(c)
},hasScroll:function(a,l){if(f(a).css("overflow")==="hidden"){return !1
}var k=l&&l==="left"?"scrollLeft":"scrollTop",j=!1;
return a[k]>0?!0:(a[k]=1,j=a[k]>0,a[k]=0,j)
},isOverAxis:function(j,d,k){return j>d&&j<d+k
},isOver:function(a,n,m,l,k,j){return f.ui.isOverAxis(a,m,k)&&f.ui.isOverAxis(n,l,j)
}})
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(f,e){if(f.cleanData){var i=f.cleanData;
f.cleanData=function(a){for(var k=0,j;
(j=a[k])!=null;
k++){try{f(j).triggerHandler("remove")
}catch(c){}}i(a)
}
}else{var h=f.fn.remove;
f.fn.remove=function(a,d){return this.each(function(){return d||(!a||f.filter(a,[this]).length)&&f("*",this).add([this]).each(function(){try{f(this).triggerHandler("remove")
}catch(c){}}),h.call(f(this),a,d)
})
}
}f.widget=function(a,n,m){var l=a.split(".")[0],k;
a=a.split(".")[1],k=l+"-"+a,m||(m=n,n=f.Widget),f.expr[":"][k]=function(b){return !!f.data(b,a)
},f[l]=f[l]||{},f[l][a]=function(d,c){arguments.length&&this._createWidget(d,c)
};
var j=new n;
j.options=f.extend(!0,{},j.options),f[l][a].prototype=f.extend(!0,j,{namespace:l,widgetName:a,widgetEventPrefix:f[l][a].prototype.widgetEventPrefix||a,widgetBaseClass:k},m),f.widget.bridge(a,f[l][a])
},f.widget.bridge=function(b,a){f.fn[b]=function(k){var j=typeof k=="string",d=Array.prototype.slice.call(arguments,1),c=this;
return k=!j&&d.length?f.extend.apply(null,[!0,k].concat(d)):k,j&&k.charAt(0)==="_"?c:(j?this.each(function(){var m=f.data(this,b),l=m&&f.isFunction(m[k])?m[k].apply(m,d):m;
if(l!==m&&l!==e){return c=l,!1
}}):this.each(function(){var l=f.data(this,b);
l?l.option(k||{})._init():f.data(this,b,new a(k,this))
}),c)
}
},f.Widget=function(d,c){arguments.length&&this._createWidget(d,c)
},f.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(a,k){f.data(k,this.widgetName,this),this.element=f(k),this.options=f.extend(!0,{},this.options,this._getCreateOptions(),a);
var j=this;
this.element.bind("remove."+this.widgetName,function(){j.destroy()
}),this._create(),this._trigger("create"),this._init()
},_getCreateOptions:function(){return f.metadata&&f.metadata.get(this.element[0])[this.widgetName]
},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")
},widget:function(){return this.element
},option:function(j,b){var a=j;
if(arguments.length===0){return f.extend({},this.options)
}if(typeof j=="string"){if(b===e){return this.options[j]
}a={},a[j]=b
}return this._setOptions(a),this
},_setOptions:function(a){var d=this;
return f.each(a,function(j,c){d._setOption(j,c)
}),this
},_setOption:function(d,c){return this.options[d]=c,d==="disabled"&&this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c),this
},enable:function(){return this._setOption("disabled",!1)
},disable:function(){return this._setOption("disabled",!0)
},_trigger:function(a,n,m){var l,k,j=this.options[a];
m=m||{},n=f.Event(n),n.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase(),n.target=this.element[0],k=n.originalEvent;
if(k){for(l in k){l in n||(n[l]=k[l])
}}return this.element.trigger(n,m),!(f.isFunction(j)&&j.call(this.element[0],n,m)===!1||n.isDefaultPrevented())
}}
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.mouse.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(e,d){var f=!1;
e(document).mouseup(function(b){f=!1
}),e.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;
this.element.bind("mousedown."+this.widgetName,function(b){return a._mouseDown(b)
}).bind("click."+this.widgetName,function(b){if(!0===e.data(b.target,a.widgetName+".preventClickEvent")){return e.removeData(b.target,a.widgetName+".preventClickEvent"),b.stopImmediatePropagation(),!1
}}),this.started=!1
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
},_mouseDown:function(a){if(f){return
}this._mouseStarted&&this._mouseUp(a),this._mouseDownEvent=a;
var i=this,h=a.which==1,c=typeof this.options.cancel=="string"&&a.target.nodeName?e(a.target).closest(this.options.cancel).length:!1;
if(!h||c||!this._mouseCapture(a)){return !0
}this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0
},this.options.delay));
if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=this._mouseStart(a)!==!1;
if(!this._mouseStarted){return a.preventDefault(),!0
}}return !0===e.data(a.target,this.widgetName+".preventClickEvent")&&e.removeData(a.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(b){return i._mouseMove(b)
},this._mouseUpDelegate=function(b){return i._mouseUp(b)
},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),a.preventDefault(),f=!0,!0
},_mouseMove:function(a){return !e.browser.msie||document.documentMode>=9||!!a.button?this._mouseStarted?(this._mouseDrag(a),a.preventDefault()):(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==!1,this._mouseStarted?this._mouseDrag(a):this._mouseUp(a)),!this._mouseStarted):this._mouseUp(a)
},_mouseUp:function(a){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,a.target==this._mouseDownEvent.target&&e.data(a.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(a)),!1
},_mouseDistanceMet:function(b){return Math.max(Math.abs(this._mouseDownEvent.pageX-b.pageX),Math.abs(this._mouseDownEvent.pageY-b.pageY))>=this.options.distance
},_mouseDelayMet:function(b){return this.mouseDelayMet
},_mouseStart:function(b){},_mouseDrag:function(b){},_mouseStop:function(b){},_mouseCapture:function(b){return !0
}})
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.position.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(j,i){j.ui=j.ui||{};
var p=/left|center|right/,o=/top|center|bottom/,n="center",m={},l=j.fn.position,k=j.fn.offset;
j.fn.position=function(c){if(!c||!c.of){return l.apply(this,arguments)
}c=j.extend({},c);
var r=j(c.of),q=r[0],f=(c.collision||"flip").split(" "),e=c.offset?c.offset.split(" "):[0,0],d,a,s;
return q.nodeType===9?(d=r.width(),a=r.height(),s={top:0,left:0}):q.setTimeout?(d=r.width(),a=r.height(),s={top:r.scrollTop(),left:r.scrollLeft()}):q.preventDefault?(c.at="left top",d=a=0,s={top:c.of.pageY,left:c.of.pageX}):(d=r.outerWidth(),a=r.outerHeight(),s=r.offset()),j.each(["my","at"],function(){var b=(c[this]||"").split(" ");
b.length===1&&(b=p.test(b[0])?b.concat([n]):o.test(b[0])?[n].concat(b):[n,n]),b[0]=p.test(b[0])?b[0]:n,b[1]=o.test(b[1])?b[1]:n,c[this]=b
}),f.length===1&&(f[1]=f[0]),e[0]=parseInt(e[0],10)||0,e.length===1&&(e[1]=e[0]),e[1]=parseInt(e[1],10)||0,c.at[0]==="right"?s.left+=d:c.at[0]===n&&(s.left+=d/2),c.at[1]==="bottom"?s.top+=a:c.at[1]===n&&(s.top+=a/2),s.left+=e[0],s.top+=e[1],this.each(function(){var A=j(this),z=A.outerWidth(),y=A.outerHeight(),x=parseInt(j.curCSS(this,"marginLeft",!0))||0,w=parseInt(j.curCSS(this,"marginTop",!0))||0,v=z+x+(parseInt(j.curCSS(this,"marginRight",!0))||0),u=y+w+(parseInt(j.curCSS(this,"marginBottom",!0))||0),t=j.extend({},s),b;
c.my[0]==="right"?t.left-=z:c.my[0]===n&&(t.left-=z/2),c.my[1]==="bottom"?t.top-=y:c.my[1]===n&&(t.top-=y/2),m.fractions||(t.left=Math.round(t.left),t.top=Math.round(t.top)),b={left:t.left-x,top:t.top-w},j.each(["left","top"],function(B,h){j.ui.position[f[B]]&&j.ui.position[f[B]][h](t,{targetWidth:d,targetHeight:a,elemWidth:z,elemHeight:y,collisionPosition:b,collisionWidth:v,collisionHeight:u,offset:e,my:c.my,at:c.at})
}),j.fn.bgiframe&&A.bgiframe(),A.offset(j.extend(t,{using:c.using}))
})
},j.ui.position={fit:{left:function(a,q){var h=j(window),f=q.collisionPosition.left+q.collisionWidth-h.width()-h.scrollLeft();
a.left=f>0?a.left-f:Math.max(a.left-q.collisionPosition.left,a.left)
},top:function(a,q){var h=j(window),f=q.collisionPosition.top+q.collisionHeight-h.height()-h.scrollTop();
a.top=f>0?a.top-f:Math.max(a.top-q.collisionPosition.top,a.top)
}},flip:{left:function(a,u){if(u.at[0]===n){return
}var t=j(window),s=u.collisionPosition.left+u.collisionWidth-t.width()-t.scrollLeft(),r=u.my[0]==="left"?-u.elemWidth:u.my[0]==="right"?u.elemWidth:0,q=u.at[0]==="left"?u.targetWidth:-u.targetWidth,e=-2*u.offset[0];
a.left+=u.collisionPosition.left<0?r+q+e:s>0?r+q+e:0
},top:function(a,u){if(u.at[1]===n){return
}var t=j(window),s=u.collisionPosition.top+u.collisionHeight-t.height()-t.scrollTop(),r=u.my[1]==="top"?-u.elemHeight:u.my[1]==="bottom"?u.elemHeight:0,q=u.at[1]==="top"?u.targetHeight:-u.targetHeight,e=-2*u.offset[1];
a.top+=u.collisionPosition.top<0?r+q+e:s>0?r+q+e:0
}}},j.offset.setOffset||(j.offset.setOffset=function(a,v){/static/.test(j.curCSS(a,"position"))&&(a.style.position="relative");
var u=j(a),t=u.offset(),s=parseInt(j.curCSS(a,"top",!0),10)||0,r=parseInt(j.curCSS(a,"left",!0),10)||0,q={top:v.top-t.top+s,left:v.left-t.left+r};
"using" in v?v.using.call(a,q):u.css(q)
},j.fn.offset=function(a){var d=this[0];
return !d||!d.ownerDocument?null:a?j.isFunction(a)?this.each(function(b){j(this).offset(a.call(this,b,j(this).offset()))
}):this.each(function(){j.offset.setOffset(this,a)
}):k.call(this)
}),j.curCSS||(j.curCSS=j.css),function(){var a=document.getElementsByTagName("body")[0],v=document.createElement("div"),u,t,s,r,q;
u=document.createElement(a?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&j.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});
for(var f in s){u.style[f]=s[f]
}u.appendChild(v),t=a||document.documentElement,t.insertBefore(u,t.firstChild),v.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",r=j(v).offset(function(d,c){return c
}).offset(),u.innerHTML="",t.removeChild(u),q=r.top+r.left+(a?2000:0),m.fractions=q>21&&q<22
}()
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.draggable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()
},destroy:function(){if(!this.element.data("draggable")){return
}return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy(),this
},_mouseCapture:function(a){var e=this.options;
return this.helper||e.disabled||d(a.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(a),this.handle?(e.iframeFix&&d(e.iframeFix===!0?"iframe":e.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(d(this).offset()).appendTo("body")
}),!0):!1)
},_mouseStart:function(a){var e=this.options;
return this.helper=this._createHelper(a),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),d.ui.ddmanager&&(d.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(a),this.originalPageX=a.pageX,this.originalPageY=a.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),e.containment&&this._setContainment(),this._trigger("start",a)===!1?(this._clear(),!1):(this._cacheHelperProportions(),d.ui.ddmanager&&!e.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a),this._mouseDrag(a,!0),d.ui.ddmanager&&d.ui.ddmanager.dragStart(this,a),!0)
},_mouseDrag:function(a,f){this.position=this._generatePosition(a),this.positionAbs=this._convertPositionTo("absolute");
if(!f){var e=this._uiHash();
if(this._trigger("drag",a,e)===!1){return this._mouseUp({}),!1
}this.position=e.position
}if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"
}return d.ui.ddmanager&&d.ui.ddmanager.drag(this,a),!1
},_mouseStop:function(a){var k=!1;
d.ui.ddmanager&&!this.options.dropBehaviour&&(k=d.ui.ddmanager.drop(this,a)),this.dropped&&(k=this.dropped,this.dropped=!1);
var j=this.element[0],i=!1;
while(j&&(j=j.parentNode)){j==document&&(i=!0)
}if(!i&&this.options.helper==="original"){return !1
}if(this.options.revert=="invalid"&&!k||this.options.revert=="valid"&&k||this.options.revert===!0||d.isFunction(this.options.revert)&&this.options.revert.call(this.element,k)){var h=this;
d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){h._trigger("stop",a)!==!1&&h._clear()
})
}else{this._trigger("stop",a)!==!1&&this._clear()
}return !1
},_mouseUp:function(a){return d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
}),d.ui.ddmanager&&d.ui.ddmanager.dragStop(this,a),d.ui.mouse.prototype._mouseUp.call(this,a)
},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this
},_getHandle:function(a){var e=!this.options.handle||!d(this.options.handle,this.element).length?!0:!1;
return d(this.options.handle,this.element).find("*").andSelf().each(function(){this==a.target&&(e=!0)
}),e
},_createHelper:function(a){var f=this.options,e=d.isFunction(f.helper)?d(f.helper.apply(this.element[0],[a])):f.helper=="clone"?this.element.clone().removeAttr("id"):this.element;
return e.parents("body").length||e.appendTo(f.appendTo=="parent"?this.element[0].parentNode:f.appendTo),e[0]!=this.element[0]&&!/(fixed|absolute)/.test(e.css("position"))&&e.css("position","absolute"),e
},_adjustOffsetFromHelper:function(a){typeof a=="string"&&(a=a.split(" ")),d.isArray(a)&&(a={left:+a[0],top:+a[1]||0}),"left" in a&&(this.offset.click.left=a.left+this.margins.left),"right" in a&&(this.offset.click.left=this.helperProportions.width-a.right+this.margins.left),"top" in a&&(this.offset.click.top=a.top+this.margins.top),"bottom" in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)
},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var a=this.offsetParent.offset();
this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(a.left+=this.scrollParent.scrollLeft(),a.top+=this.scrollParent.scrollTop());
if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie){a={top:0,left:0}
}return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.element.position();
return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}return{top:0,left:0}
},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var a=this.options;
a.containment=="parent"&&(a.containment=this.helper[0].parentNode);
if(a.containment=="document"||a.containment=="window"){this.containment=[a.containment=="document"?0:d(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a.containment=="document"?0:d(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(a.containment=="document"?0:d(window).scrollLeft())+d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){var k=d(a.containment),j=k[0];
if(!j){return
}var i=k.offset(),h=d(j).css("overflow")!="hidden";
this.containment=[(parseInt(d(j).css("borderLeftWidth"),10)||0)+(parseInt(d(j).css("paddingLeft"),10)||0),(parseInt(d(j).css("borderTopWidth"),10)||0)+(parseInt(d(j).css("paddingTop"),10)||0),(h?Math.max(j.scrollWidth,j.offsetWidth):j.offsetWidth)-(parseInt(d(j).css("borderLeftWidth"),10)||0)-(parseInt(d(j).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(h?Math.max(j.scrollHeight,j.offsetHeight):j.offsetHeight)-(parseInt(d(j).css("borderTopWidth"),10)||0)-(parseInt(d(j).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=k
}else{a.containment.constructor==Array&&(this.containment=a.containment)
}},_convertPositionTo:function(a,l){l||(l=this.position);
var k=a=="absolute"?1:-1,j=this.options,i=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=/(html|body)/i.test(i[0].tagName);
return{top:l.top+this.offset.relative.top*k+this.offset.parent.top*k-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():h?0:i.scrollTop())*k),left:l.left+this.offset.relative.left*k+this.offset.parent.left*k-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:i.scrollLeft())*k)}
},_generatePosition:function(t){var s=this.options,r=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,q=/(html|body)/i.test(r[0].tagName),p=t.pageX,o=t.pageY;
if(this.originalPosition){var n;
if(this.containment){if(this.relative_container){var m=this.relative_container.offset();
n=[this.containment[0]+m.left,this.containment[1]+m.top,this.containment[2]+m.left,this.containment[3]+m.top]
}else{n=this.containment
}t.pageX-this.offset.click.left<n[0]&&(p=n[0]+this.offset.click.left),t.pageY-this.offset.click.top<n[1]&&(o=n[1]+this.offset.click.top),t.pageX-this.offset.click.left>n[2]&&(p=n[2]+this.offset.click.left),t.pageY-this.offset.click.top>n[3]&&(o=n[3]+this.offset.click.top)
}if(s.grid){var l=s.grid[1]?this.originalPageY+Math.round((o-this.originalPageY)/s.grid[1])*s.grid[1]:this.originalPageY;
o=n?l-this.offset.click.top<n[1]||l-this.offset.click.top>n[3]?l-this.offset.click.top<n[1]?l+s.grid[1]:l-s.grid[1]:l:l;
var a=s.grid[0]?this.originalPageX+Math.round((p-this.originalPageX)/s.grid[0])*s.grid[0]:this.originalPageX;
p=n?a-this.offset.click.left<n[0]||a-this.offset.click.left>n[2]?a-this.offset.click.left<n[0]?a+s.grid[0]:a-s.grid[0]:a:a
}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():q?0:r.scrollTop()),left:p-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():q?0:r.scrollLeft())}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1
},_trigger:function(a,f,e){return e=e||this._uiHash(),d.ui.plugin.call(this,a,[f,e]),a=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),d.Widget.prototype._trigger.call(this,a,f,e)
},plugins:{},_uiHash:function(b){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}}),d.extend(d.ui.draggable,{version:"1.8.24"}),d.ui.plugin.add("draggable","connectToSortable",{start:function(a,k){var j=d(this).data("draggable"),i=j.options,h=d.extend({},k,{item:j.element});
j.sortables=[],d(i.connectToSortable).each(function(){var b=d.data(this,"sortable");
b&&!b.options.disabled&&(j.sortables.push({instance:b,shouldRevert:b.options.revert}),b.refreshPositions(),b._trigger("activate",a,h))
})
},stop:function(a,i){var h=d(this).data("draggable"),f=d.extend({},i,{item:h.element});
d.each(h.sortables,function(){this.instance.isOver?(this.instance.isOver=0,h.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(a),this.instance.options.helper=this.instance.options._helper,h.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",a,f))
})
},drag:function(a,k){var j=d(this).data("draggable"),i=this,h=function(t){var s=this.offset.click.top,r=this.offset.click.left,q=this.positionAbs.top,p=this.positionAbs.left,o=t.height,n=t.width,m=t.top,l=t.left;
return d.ui.isOver(q+s,p+r,m,l,o,n)
};
d.each(j.sortables,function(b){this.instance.positionAbs=j.positionAbs,this.instance.helperProportions=j.helperProportions,this.instance.offset.click=j.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=d(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return k.helper[0]
},a.target=this.instance.currentItem[0],this.instance._mouseCapture(a,!0),this.instance._mouseStart(a,!0,!0),this.instance.offset.click.top=j.offset.click.top,this.instance.offset.click.left=j.offset.click.left,this.instance.offset.parent.left-=j.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=j.offset.parent.top-this.instance.offset.parent.top,j._trigger("toSortable",a),j.dropped=this.instance.element,j.currentItem=j.element,this.instance.fromOutside=j),this.instance.currentItem&&this.instance._mouseDrag(a)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",a,this.instance._uiHash(this.instance)),this.instance._mouseStop(a,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),j._trigger("fromSortable",a),j.dropped=!1)
})
}}),d.ui.plugin.add("draggable","cursor",{start:function(a,i){var h=d("body"),f=d(this).data("draggable").options;
h.css("cursor")&&(f._cursor=h.css("cursor")),h.css("cursor",f.cursor)
},stop:function(a,f){var e=d(this).data("draggable").options;
e._cursor&&d("body").css("cursor",e._cursor)
}}),d.ui.plugin.add("draggable","opacity",{start:function(a,i){var h=d(i.helper),f=d(this).data("draggable").options;
h.css("opacity")&&(f._opacity=h.css("opacity")),h.css("opacity",f.opacity)
},stop:function(a,f){var e=d(this).data("draggable").options;
e._opacity&&d(f.helper).css("opacity",e._opacity)
}}),d.ui.plugin.add("draggable","scroll",{start:function(a,f){var e=d(this).data("draggable");
e.scrollParent[0]!=document&&e.scrollParent[0].tagName!="HTML"&&(e.overflowOffset=e.scrollParent.offset())
},drag:function(a,k){var j=d(this).data("draggable"),i=j.options,h=!1;
if(j.scrollParent[0]!=document&&j.scrollParent[0].tagName!="HTML"){if(!i.axis||i.axis!="x"){j.overflowOffset.top+j.scrollParent[0].offsetHeight-a.pageY<i.scrollSensitivity?j.scrollParent[0].scrollTop=h=j.scrollParent[0].scrollTop+i.scrollSpeed:a.pageY-j.overflowOffset.top<i.scrollSensitivity&&(j.scrollParent[0].scrollTop=h=j.scrollParent[0].scrollTop-i.scrollSpeed)
}if(!i.axis||i.axis!="y"){j.overflowOffset.left+j.scrollParent[0].offsetWidth-a.pageX<i.scrollSensitivity?j.scrollParent[0].scrollLeft=h=j.scrollParent[0].scrollLeft+i.scrollSpeed:a.pageX-j.overflowOffset.left<i.scrollSensitivity&&(j.scrollParent[0].scrollLeft=h=j.scrollParent[0].scrollLeft-i.scrollSpeed)
}}else{if(!i.axis||i.axis!="x"){a.pageY-d(document).scrollTop()<i.scrollSensitivity?h=d(document).scrollTop(d(document).scrollTop()-i.scrollSpeed):d(window).height()-(a.pageY-d(document).scrollTop())<i.scrollSensitivity&&(h=d(document).scrollTop(d(document).scrollTop()+i.scrollSpeed))
}if(!i.axis||i.axis!="y"){a.pageX-d(document).scrollLeft()<i.scrollSensitivity?h=d(document).scrollLeft(d(document).scrollLeft()-i.scrollSpeed):d(window).width()-(a.pageX-d(document).scrollLeft())<i.scrollSensitivity&&(h=d(document).scrollLeft(d(document).scrollLeft()+i.scrollSpeed))
}}h!==!1&&d.ui.ddmanager&&!i.dropBehaviour&&d.ui.ddmanager.prepareOffsets(j,a)
}}),d.ui.plugin.add("draggable","snap",{start:function(a,i){var h=d(this).data("draggable"),f=h.options;
h.snapElements=[],d(f.snap.constructor!=String?f.snap.items||":data(draggable)":f.snap).each(function(){var e=d(this),j=e.offset();
this!=h.element[0]&&h.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:j.top,left:j.left})
})
},drag:function(L,K){var J=d(this).data("draggable"),I=J.options,H=I.snapTolerance,G=K.offset.left,F=G+J.helperProportions.width,E=K.offset.top,D=E+J.helperProportions.height;
for(var C=J.snapElements.length-1;
C>=0;
C--){var B=J.snapElements[C].left,A=B+J.snapElements[C].width,z=J.snapElements[C].top,y=z+J.snapElements[C].height;
if(!(B-H<G&&G<A+H&&z-H<E&&E<y+H||B-H<G&&G<A+H&&z-H<D&&D<y+H||B-H<F&&F<A+H&&z-H<E&&E<y+H||B-H<F&&F<A+H&&z-H<D&&D<y+H)){J.snapElements[C].snapping&&J.options.snap.release&&J.options.snap.release.call(J.element,L,d.extend(J._uiHash(),{snapItem:J.snapElements[C].item})),J.snapElements[C].snapping=!1;
continue
}if(I.snapMode!="inner"){var x=Math.abs(z-D)<=H,w=Math.abs(y-E)<=H,v=Math.abs(B-F)<=H,u=Math.abs(A-G)<=H;
x&&(K.position.top=J._convertPositionTo("relative",{top:z-J.helperProportions.height,left:0}).top-J.margins.top),w&&(K.position.top=J._convertPositionTo("relative",{top:y,left:0}).top-J.margins.top),v&&(K.position.left=J._convertPositionTo("relative",{top:0,left:B-J.helperProportions.width}).left-J.margins.left),u&&(K.position.left=J._convertPositionTo("relative",{top:0,left:A}).left-J.margins.left)
}var a=x||w||v||u;
if(I.snapMode!="outer"){var x=Math.abs(z-E)<=H,w=Math.abs(y-D)<=H,v=Math.abs(B-G)<=H,u=Math.abs(A-F)<=H;
x&&(K.position.top=J._convertPositionTo("relative",{top:z,left:0}).top-J.margins.top),w&&(K.position.top=J._convertPositionTo("relative",{top:y-J.helperProportions.height,left:0}).top-J.margins.top),v&&(K.position.left=J._convertPositionTo("relative",{top:0,left:B}).left-J.margins.left),u&&(K.position.left=J._convertPositionTo("relative",{top:0,left:A-J.helperProportions.width}).left-J.margins.left)
}!J.snapElements[C].snapping&&(x||w||v||u||a)&&J.options.snap.snap&&J.options.snap.snap.call(J.element,L,d.extend(J._uiHash(),{snapItem:J.snapElements[C].item})),J.snapElements[C].snapping=x||w||v||u||a
}}}),d.ui.plugin.add("draggable","stack",{start:function(a,k){var j=d(this).data("draggable").options,i=d.makeArray(d(j.stack)).sort(function(e,f){return(parseInt(d(e).css("zIndex"),10)||0)-(parseInt(d(f).css("zIndex"),10)||0)
});
if(!i.length){return
}var h=parseInt(i[0].style.zIndex)||0;
d(i).each(function(b){this.style.zIndex=h+b
}),this[0].style.zIndex=h+i.length
}}),d.ui.plugin.add("draggable","zIndex",{start:function(a,i){var h=d(i.helper),f=d(this).data("draggable").options;
h.css("zIndex")&&(f._zIndex=h.css("zIndex")),h.css("zIndex",f.zIndex)
},stop:function(a,f){var e=d(this).data("draggable").options;
e._zIndex&&d(f.helper).css("zIndex",e._zIndex)
}})
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.droppable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var a=this.options,e=a.accept;
this.isover=0,this.isout=1,this.accept=d.isFunction(e)?e:function(b){return b.is(e)
},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[],d.ui.ddmanager.droppables[a.scope].push(this),a.addClasses&&this.element.addClass("ui-droppable")
},destroy:function(){var a=d.ui.ddmanager.droppables[this.options.scope];
for(var e=0;
e<a.length;
e++){a[e]==this&&a.splice(e,1)
}return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"),this
},_setOption:function(a,e){a=="accept"&&(this.accept=d.isFunction(e)?e:function(b){return b.is(e)
}),d.Widget.prototype._setOption.apply(this,arguments)
},_activate:function(a){var e=d.ui.ddmanager.current;
this.options.activeClass&&this.element.addClass(this.options.activeClass),e&&this._trigger("activate",a,this.ui(e))
},_deactivate:function(a){var e=d.ui.ddmanager.current;
this.options.activeClass&&this.element.removeClass(this.options.activeClass),e&&this._trigger("deactivate",a,this.ui(e))
},_over:function(a){var e=d.ui.ddmanager.current;
if(!e||(e.currentItem||e.element)[0]==this.element[0]){return
}this.accept.call(this.element[0],e.currentItem||e.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",a,this.ui(e)))
},_out:function(a){var e=d.ui.ddmanager.current;
if(!e||(e.currentItem||e.element)[0]==this.element[0]){return
}this.accept.call(this.element[0],e.currentItem||e.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",a,this.ui(e)))
},_drop:function(a,i){var h=i||d.ui.ddmanager.current;
if(!h||(h.currentItem||h.element)[0]==this.element[0]){return !1
}var f=!1;
return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var e=d.data(this,"droppable");
if(e.options.greedy&&!e.options.disabled&&e.options.scope==h.options.scope&&e.accept.call(e.element[0],h.currentItem||h.element)&&d.ui.intersect(h,d.extend(e,{offset:e.element.offset()}),e.options.tolerance)){return f=!0,!1
}}),f?!1:this.accept.call(this.element[0],h.currentItem||h.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",a,this.ui(h)),this.element):!1
},ui:function(b){return{draggable:b.currentItem||b.element,helper:b.helper,position:b.position,offset:b.positionAbs}
}}),d.extend(d.ui.droppable,{version:"1.8.24"}),d.ui.intersect=function(B,A,z){if(!A.offset){return !1
}var y=(B.positionAbs||B.position.absolute).left,x=y+B.helperProportions.width,w=(B.positionAbs||B.position.absolute).top,v=w+B.helperProportions.height,u=A.offset.left,t=u+A.proportions.width,s=A.offset.top,r=s+A.proportions.height;
switch(z){case"fit":return u<=y&&x<=t&&s<=w&&v<=r;
case"intersect":return u<y+B.helperProportions.width/2&&x-B.helperProportions.width/2<t&&s<w+B.helperProportions.height/2&&v-B.helperProportions.height/2<r;
case"pointer":var q=(B.positionAbs||B.position.absolute).left+(B.clickOffset||B.offset.click).left,p=(B.positionAbs||B.position.absolute).top+(B.clickOffset||B.offset.click).top,a=d.ui.isOver(p,q,s,u,A.proportions.height,A.proportions.width);
return a;
case"touch":return(w>=s&&w<=r||v>=s&&v<=r||w<s&&v>r)&&(y>=u&&y<=t||x>=u&&x<=t||y<u&&x>t);
default:return !1
}},d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(a,o){var n=d.ui.ddmanager.droppables[a.options.scope]||[],m=o?o.type:null,l=(a.currentItem||a.element).find(":data(droppable)").andSelf();
g:for(var k=0;
k<n.length;
k++){if(n[k].options.disabled||a&&!n[k].accept.call(n[k].element[0],a.currentItem||a.element)){continue
}for(var j=0;
j<l.length;
j++){if(l[j]==n[k].element[0]){n[k].proportions.height=0;
continue g
}}n[k].visible=n[k].element.css("display")!="none";
if(!n[k].visible){continue
}m=="mousedown"&&n[k]._activate.call(n[k],o),n[k].offset=n[k].element.offset(),n[k].proportions={width:n[k].element[0].offsetWidth,height:n[k].element[0].offsetHeight}
}},drop:function(a,f){var e=!1;
return d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(!this.options){return
}!this.options.disabled&&this.visible&&d.ui.intersect(a,this,this.options.tolerance)&&(e=this._drop.call(this,f)||e),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],a.currentItem||a.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,f))
}),e
},dragStart:function(a,e){a.element.parents(":not(body,html)").bind("scroll.droppable",function(){a.options.refreshPositions||d.ui.ddmanager.prepareOffsets(a,e)
})
},drag:function(a,e){a.options.refreshPositions&&d.ui.ddmanager.prepareOffsets(a,e),d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var l=d.ui.intersect(a,this,this.options.tolerance),k=!l&&this.isover==1?"isout":l&&this.isover==0?"isover":null;
if(!k){return
}var j;
if(this.options.greedy){var i=this.options.scope,b=this.element.parents(":data(droppable)").filter(function(){return d.data(this,"droppable").options.scope===i
});
b.length&&(j=d.data(b[0],"droppable"),j.greedyChild=k=="isover"?1:0)
}j&&k=="isover"&&(j.isover=0,j.isout=1,j._out.call(j,e)),this[k]=1,this[k=="isout"?"isover":"isout"]=0,this[k=="isover"?"_over":"_out"].call(this,e),j&&k=="isout"&&(j.isout=0,j.isover=1,j._over.call(j,e))
})
},dragStop:function(a,e){a.element.parents(":not(body,html)").unbind("scroll.droppable"),a.options.refreshPositions||d.ui.ddmanager.prepareOffsets(a,e)
}}
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.resizable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(f,e){f.widget("ui.resizable",f.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var a=this,o=this.options;
this.element.addClass("ui-resizable"),f.extend(this,{_aspectRatio:!!o.aspectRatio,aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(f('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=o.handles||(f(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");
if(this.handles.constructor==String){this.handles=="all"&&(this.handles="n,e,s,w,se,sw,ne,nw");
var n=this.handles.split(",");
this.handles={};
for(var m=0;
m<n.length;
m++){var l=f.trim(n[m]),k="ui-resizable-"+l,j=f('<div class="ui-resizable-handle '+k+'"></div>');
j.css({zIndex:o.zIndex}),"se"==l&&j.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[l]=".ui-resizable-"+l,this.element.append(j)
}}this._renderAxis=function(p){p=p||this.element;
for(var t in this.handles){this.handles[t].constructor==String&&(this.handles[t]=f(this.handles[t],this.element).show());
if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var s=f(this.handles[t],this.element),r=0;
r=/sw|ne|nw|se|n|s/.test(t)?s.outerHeight():s.outerWidth();
var q=["padding",/ne|nw|n/.test(t)?"Top":/se|sw|s/.test(t)?"Bottom":/^e$/.test(t)?"Right":"Left"].join("");
p.css(q,r),this._proportionallyResize()
}if(!f(this.handles[t]).length){continue
}}},this._renderAxis(this.element),this._handles=f(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!a.resizing){if(this.className){var b=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
}a.axis=b&&b[1]?b[1]:"se"
}}),o.autoHide&&(this._handles.hide(),f(this.element).addClass("ui-resizable-autohide").hover(function(){if(o.disabled){return
}f(this).removeClass("ui-resizable-autohide"),a._handles.show()
},function(){if(o.disabled){return
}a.resizing||(f(this).addClass("ui-resizable-autohide"),a._handles.hide())
})),this._mouseInit()
},destroy:function(){this._mouseDestroy();
var a=function(c){f(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
if(this.elementIsWrapper){a(this.element);
var d=this.element;
d.after(this.originalElement.css({position:d.css("position"),width:d.outerWidth(),height:d.outerHeight(),top:d.css("top"),left:d.css("left")})).remove()
}return this.originalElement.css("resize",this.originalResizeStyle),a(this.originalElement),this
},_mouseCapture:function(a){var k=!1;
for(var j in this.handles){f(this.handles[j])[0]==a.target&&(k=!0)
}return !this.options.disabled&&k
},_mouseStart:function(a){var n=this.options,m=this.element.position(),l=this.element;
this.resizing=!0,this.documentScroll={top:f(document).scrollTop(),left:f(document).scrollLeft()},(l.is(".ui-draggable")||/absolute/.test(l.css("position")))&&l.css({position:"absolute",top:m.top,left:m.left}),this._renderProxy();
var k=i(this.helper.css("left")),j=i(this.helper.css("top"));
n.containment&&(k+=f(n.containment).scrollLeft()||0,j+=f(n.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:k,top:j},this.size=this._helper?{width:l.outerWidth(),height:l.outerHeight()}:{width:l.width(),height:l.height()},this.originalSize=this._helper?{width:l.outerWidth(),height:l.outerHeight()}:{width:l.width(),height:l.height()},this.originalPosition={left:k,top:j},this.sizeDiff={width:l.outerWidth()-l.width(),height:l.outerHeight()-l.height()},this.originalMousePosition={left:a.pageX,top:a.pageY},this.aspectRatio=typeof n.aspectRatio=="number"?n.aspectRatio:this.originalSize.width/this.originalSize.height||1;
var c=f(".ui-resizable-"+this.axis).css("cursor");
return f("body").css("cursor",c=="auto"?this.axis+"-resize":c),l.addClass("ui-resizable-resizing"),this._propagate("start",a),!0
},_mouseDrag:function(z){var y=this.helper,x=this.options,w={},v=this,u=this.originalMousePosition,t=this.axis,s=z.pageX-u.left||0,r=z.pageY-u.top||0,q=this._change[t];
if(!q){return !1
}var p=q.apply(this,[z,s,r]),o=f.browser.msie&&f.browser.version<7,a=this.sizeDiff;
this._updateVirtualBoundaries(z.shiftKey);
if(this._aspectRatio||z.shiftKey){p=this._updateRatio(p,z)
}return p=this._respectSize(p,z),this._propagate("resize",z),y.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(p),this._trigger("resize",z,this.ui()),!1
},_mouseStop:function(t){this.resizing=!1;
var s=this.options,r=this;
if(this._helper){var q=this._proportionallyResizeElements,p=q.length&&/textarea/i.test(q[0].nodeName),o=p&&f.ui.hasScroll(q[0],"left")?0:r.sizeDiff.height,n=p?0:r.sizeDiff.width,m={width:r.helper.width()-n,height:r.helper.height()-o},l=parseInt(r.element.css("left"),10)+(r.position.left-r.originalPosition.left)||null,a=parseInt(r.element.css("top"),10)+(r.position.top-r.originalPosition.top)||null;
s.animate||this.element.css(f.extend(m,{top:a,left:l})),r.helper.height(r.size.height),r.helper.width(r.size.width),this._helper&&!s.animate&&this._proportionallyResize()
}return f("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1
},_updateVirtualBoundaries:function(j){var d=this.options,o,n,m,l,k;
k={minWidth:h(d.minWidth)?d.minWidth:0,maxWidth:h(d.maxWidth)?d.maxWidth:Infinity,minHeight:h(d.minHeight)?d.minHeight:0,maxHeight:h(d.maxHeight)?d.maxHeight:Infinity};
if(this._aspectRatio||j){o=k.minHeight*this.aspectRatio,m=k.minWidth/this.aspectRatio,n=k.maxHeight*this.aspectRatio,l=k.maxWidth/this.aspectRatio,o>k.minWidth&&(k.minWidth=o),m>k.minHeight&&(k.minHeight=m),n<k.maxWidth&&(k.maxWidth=n),l<k.maxHeight&&(k.maxHeight=l)
}this._vBoundaries=k
},_updateCache:function(d){var c=this.options;
this.offset=this.helper.offset(),h(d.left)&&(this.position.left=d.left),h(d.top)&&(this.position.top=d.top),h(d.height)&&(this.size.height=d.height),h(d.width)&&(this.size.width=d.width)
},_updateRatio:function(j,d){var n=this.options,m=this.position,l=this.size,k=this.axis;
return h(j.height)?j.width=j.height*this.aspectRatio:h(j.width)&&(j.height=j.width/this.aspectRatio),k=="sw"&&(j.left=m.left+(l.width-j.width),j.top=null),k=="nw"&&(j.top=m.top+(l.height-j.height),j.left=m.left+(l.width-j.width)),j
},_respectSize:function(D,C){var B=this.helper,A=this._vBoundaries,z=this._aspectRatio||C.shiftKey,y=this.axis,x=h(D.width)&&A.maxWidth&&A.maxWidth<D.width,w=h(D.height)&&A.maxHeight&&A.maxHeight<D.height,v=h(D.width)&&A.minWidth&&A.minWidth>D.width,u=h(D.height)&&A.minHeight&&A.minHeight>D.height;
v&&(D.width=A.minWidth),u&&(D.height=A.minHeight),x&&(D.width=A.maxWidth),w&&(D.height=A.maxHeight);
var t=this.originalPosition.left+this.originalSize.width,s=this.position.top+this.size.height,r=/sw|nw|w/.test(y),q=/nw|ne|n/.test(y);
v&&r&&(D.left=t-A.minWidth),x&&r&&(D.left=t-A.maxWidth),u&&q&&(D.top=s-A.minHeight),w&&q&&(D.top=s-A.maxHeight);
var d=!D.width&&!D.height;
return d&&!D.left&&D.top?D.top=null:d&&!D.top&&D.left&&(D.left=null),D
},_proportionallyResize:function(){var a=this.options;
if(!this._proportionallyResizeElements.length){return
}var n=this.helper||this.element;
for(var m=0;
m<this._proportionallyResizeElements.length;
m++){var l=this._proportionallyResizeElements[m];
if(!this.borderDif){var k=[l.css("borderTopWidth"),l.css("borderRightWidth"),l.css("borderBottomWidth"),l.css("borderLeftWidth")],j=[l.css("paddingTop"),l.css("paddingRight"),l.css("paddingBottom"),l.css("paddingLeft")];
this.borderDif=f.map(k,function(p,o){var r=parseInt(p,10)||0,q=parseInt(j[o],10)||0;
return r+q
})
}if(!f.browser.msie||!f(n).is(":hidden")&&!f(n).parents(":hidden").length){l.css({height:n.height()-this.borderDif[0]-this.borderDif[2]||0,width:n.width()-this.borderDif[1]-this.borderDif[3]||0})
}else{continue
}}},_renderProxy:function(){var a=this.element,m=this.options;
this.elementOffset=a.offset();
if(this._helper){this.helper=this.helper||f('<div style="overflow:hidden;"></div>');
var l=f.browser.msie&&f.browser.version<7,k=l?1:0,j=l?2:-1;
this.helper.addClass(this._helper).css({width:this.element.outerWidth()+j,height:this.element.outerHeight()+j,position:"absolute",left:this.elementOffset.left-k+"px",top:this.elementOffset.top-k+"px",zIndex:++m.zIndex}),this.helper.appendTo("body").disableSelection()
}else{this.helper=this.element
}},_change:{e:function(j,d,k){return{width:this.originalSize.width+d}
},w:function(k,j,o){var n=this.options,m=this.originalSize,l=this.originalPosition;
return{left:l.left+j,width:m.width-j}
},n:function(k,j,o){var n=this.options,m=this.originalSize,l=this.originalPosition;
return{top:l.top+o,height:m.height-o}
},s:function(j,d,k){return{height:this.originalSize.height+k}
},se:function(a,k,j){return f.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[a,k,j]))
},sw:function(a,k,j){return f.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[a,k,j]))
},ne:function(a,k,j){return f.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[a,k,j]))
},nw:function(a,k,j){return f.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[a,k,j]))
}},_propagate:function(a,d){f.ui.plugin.call(this,a,[d,this.ui()]),a!="resize"&&this._trigger(a,d,this.ui())
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}}),f.extend(f.ui.resizable,{version:"1.8.24"}),f.ui.plugin.add("resizable","alsoResize",{start:function(a,m){var l=f(this).data("resizable"),k=l.options,j=function(c){f(c).each(function(){var d=f(this);
d.data("resizable-alsoresize",{width:parseInt(d.width(),10),height:parseInt(d.height(),10),left:parseInt(d.css("left"),10),top:parseInt(d.css("top"),10)})
})
};
typeof k.alsoResize=="object"&&!k.alsoResize.parentNode?k.alsoResize.length?(k.alsoResize=k.alsoResize[0],j(k.alsoResize)):f.each(k.alsoResize,function(b){j(b)
}):j(k.alsoResize)
},resize:function(a,p){var o=f(this).data("resizable"),n=o.options,m=o.originalSize,l=o.originalPosition,k={height:o.size.height-m.height||0,width:o.size.width-m.width||0,top:o.position.top-l.top||0,left:o.position.left-l.left||0},j=function(c,q){f(c).each(function(){var d=f(this),t=f(this).data("resizable-alsoresize"),s={},r=q&&q.length?q:d.parents(p.originalElement[0]).length?["width","height"]:["width","height","top","left"];
f.each(r,function(v,u){var w=(t[u]||0)+(k[u]||0);
w&&w>=0&&(s[u]=w||null)
}),d.css(s)
})
};
typeof n.alsoResize=="object"&&!n.alsoResize.nodeType?f.each(n.alsoResize,function(d,c){j(d,c)
}):j(n.alsoResize)
},stop:function(a,d){f(this).removeData("resizable-alsoresize")
}}),f.ui.plugin.add("resizable","animate",{stop:function(v,u){var t=f(this).data("resizable"),s=t.options,r=t._proportionallyResizeElements,q=r.length&&/textarea/i.test(r[0].nodeName),p=q&&f.ui.hasScroll(r[0],"left")?0:t.sizeDiff.height,o=q?0:t.sizeDiff.width,n={width:t.size.width-o,height:t.size.height-p},m=parseInt(t.element.css("left"),10)+(t.position.left-t.originalPosition.left)||null,a=parseInt(t.element.css("top"),10)+(t.position.top-t.originalPosition.top)||null;
t.element.animate(f.extend(n,a&&m?{top:a,left:m}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var b={width:parseInt(t.element.css("width"),10),height:parseInt(t.element.css("height"),10),top:parseInt(t.element.css("top"),10),left:parseInt(t.element.css("left"),10)};
r&&r.length&&f(r[0]).css({width:b.width,height:b.height}),t._updateCache(b),t._propagate("resize",v)
}})
}}),f.ui.plugin.add("resizable","containment",{start:function(B,A){var z=f(this).data("resizable"),y=z.options,x=z.element,w=y.containment,v=w instanceof f?w.get(0):/parent/.test(w)?x.parent().get(0):w;
if(!v){return
}z.containerElement=f(v);
if(/document/.test(w)||w==document){z.containerOffset={left:0,top:0},z.containerPosition={left:0,top:0},z.parentData={element:f(document),left:0,top:0,width:f(document).width(),height:f(document).height()||document.body.parentNode.scrollHeight}
}else{var u=f(v),t=[];
f(["Top","Right","Left","Bottom"]).each(function(j,d){t[j]=i(u.css("padding"+d))
}),z.containerOffset=u.offset(),z.containerPosition=u.position(),z.containerSize={height:u.innerHeight()-t[3],width:u.innerWidth()-t[1]};
var s=z.containerOffset,r=z.containerSize.height,q=z.containerSize.width,c=f.ui.hasScroll(v,"left")?v.scrollWidth:q,a=f.ui.hasScroll(v)?v.scrollHeight:r;
z.parentData={element:v,left:s.left,top:s.top,width:c,height:a}
}},resize:function(D,C){var B=f(this).data("resizable"),A=B.options,z=B.containerSize,y=B.containerOffset,x=B.size,w=B.position,v=B._aspectRatio||D.shiftKey,u={top:0,left:0},t=B.containerElement;
t[0]!=document&&/static/.test(t.css("position"))&&(u=y),w.left<(B._helper?y.left:0)&&(B.size.width=B.size.width+(B._helper?B.position.left-y.left:B.position.left-u.left),v&&(B.size.height=B.size.width/B.aspectRatio),B.position.left=A.helper?y.left:0),w.top<(B._helper?y.top:0)&&(B.size.height=B.size.height+(B._helper?B.position.top-y.top:B.position.top),v&&(B.size.width=B.size.height*B.aspectRatio),B.position.top=B._helper?y.top:0),B.offset.left=B.parentData.left+B.position.left,B.offset.top=B.parentData.top+B.position.top;
var s=Math.abs((B._helper?B.offset.left-u.left:B.offset.left-u.left)+B.sizeDiff.width),r=Math.abs((B._helper?B.offset.top-u.top:B.offset.top-y.top)+B.sizeDiff.height),q=B.containerElement.get(0)==B.element.parent().get(0),a=/relative|absolute/.test(B.containerElement.css("position"));
q&&a&&(s-=B.parentData.left),s+B.size.width>=B.parentData.width&&(B.size.width=B.parentData.width-s,v&&(B.size.height=B.size.width/B.aspectRatio)),r+B.size.height>=B.parentData.height&&(B.size.height=B.parentData.height-r,v&&(B.size.width=B.size.height*B.aspectRatio))
},stop:function(x,w){var v=f(this).data("resizable"),u=v.options,t=v.position,s=v.containerOffset,r=v.containerPosition,q=v.containerElement,p=f(v.helper),o=p.offset(),n=p.outerWidth()-v.sizeDiff.width,a=p.outerHeight()-v.sizeDiff.height;
v._helper&&!u.animate&&/relative/.test(q.css("position"))&&f(this).css({left:o.left-r.left-s.left,width:n,height:a}),v._helper&&!u.animate&&/static/.test(q.css("position"))&&f(this).css({left:o.left-r.left-s.left,width:n,height:a})
}}),f.ui.plugin.add("resizable","ghost",{start:function(a,m){var l=f(this).data("resizable"),k=l.options,j=l.size;
l.ghost=l.originalElement.clone(),l.ghost.css({opacity:0.25,display:"block",position:"relative",height:j.height,width:j.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof k.ghost=="string"?k.ghost:""),l.ghost.appendTo(l.helper)
},resize:function(a,l){var k=f(this).data("resizable"),j=k.options;
k.ghost&&k.ghost.css({position:"relative",height:k.size.height,width:k.size.width})
},stop:function(a,l){var k=f(this).data("resizable"),j=k.options;
k.ghost&&k.helper&&k.helper.get(0).removeChild(k.ghost.get(0))
}}),f.ui.plugin.add("resizable","grid",{resize:function(v,u){var t=f(this).data("resizable"),s=t.options,r=t.size,q=t.originalSize,p=t.originalPosition,o=t.axis,n=s._aspectRatio||v.shiftKey;
s.grid=typeof s.grid=="number"?[s.grid,s.grid]:s.grid;
var m=Math.round((r.width-q.width)/(s.grid[0]||1))*(s.grid[0]||1),a=Math.round((r.height-q.height)/(s.grid[1]||1))*(s.grid[1]||1);
/^(se|s|e)$/.test(o)?(t.size.width=q.width+m,t.size.height=q.height+a):/^(ne)$/.test(o)?(t.size.width=q.width+m,t.size.height=q.height+a,t.position.top=p.top-a):/^(sw)$/.test(o)?(t.size.width=q.width+m,t.size.height=q.height+a,t.position.left=p.left-m):(t.size.width=q.width+m,t.size.height=q.height+a,t.position.top=p.top-a,t.position.left=p.left-m)
}});
var i=function(b){return parseInt(b,10)||0
},h=function(b){return !isNaN(parseInt(b,10))
}
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.selectable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.widget("ui.selectable",d.ui.mouse,{options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create:function(){var a=this;
this.element.addClass("ui-selectable"),this.dragged=!1;
var e;
this.refresh=function(){e=d(a.options.filter,a.element[0]),e.addClass("ui-selectee"),e.each(function(){var f=d(this),h=f.offset();
d.data(this,"selectable-item",{element:this,$element:f,left:h.left,top:h.top,right:h.left+f.outerWidth(),bottom:h.top+f.outerHeight(),startselected:!1,selected:f.hasClass("ui-selected"),selecting:f.hasClass("ui-selecting"),unselecting:f.hasClass("ui-unselecting")})
})
},this.refresh(),this.selectees=e.addClass("ui-selectee"),this._mouseInit(),this.helper=d("<div class='ui-selectable-helper'></div>")
},destroy:function(){return this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"),this._mouseDestroy(),this
},_mouseStart:function(a){var f=this;
this.opos=[a.pageX,a.pageY];
if(this.options.disabled){return
}var e=this.options;
this.selectees=d(e.filter,this.element[0]),this._trigger("start",a),d(e.appendTo).append(this.helper),this.helper.css({left:a.clientX,top:a.clientY,width:0,height:0}),e.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var b=d.data(this,"selectable-item");
b.startselected=!0,!a.metaKey&&!a.ctrlKey&&(b.$element.removeClass("ui-selected"),b.selected=!1,b.$element.addClass("ui-unselecting"),b.unselecting=!0,f._trigger("unselecting",a,{unselecting:b.element}))
}),d(a.target).parents().andSelf().each(function(){var h=d.data(this,"selectable-item");
if(h){var b=!a.metaKey&&!a.ctrlKey||!h.$element.hasClass("ui-selected");
return h.$element.removeClass(b?"ui-unselecting":"ui-selected").addClass(b?"ui-selecting":"ui-unselecting"),h.unselecting=!b,h.selecting=b,h.selected=b,b?f._trigger("selecting",a,{selecting:h.element}):f._trigger("unselecting",a,{unselecting:h.element}),!1
}})
},_mouseDrag:function(a){var p=this;
this.dragged=!0;
if(this.options.disabled){return
}var o=this.options,n=this.opos[0],m=this.opos[1],l=a.pageX,k=a.pageY;
if(n>l){var j=l;
l=n,n=j
}if(m>k){var j=k;
k=m,m=j
}return this.helper.css({left:n,top:m,width:l-n,height:k-m}),this.selectees.each(function(){var e=d.data(this,"selectable-item");
if(!e||e.element==p.element[0]){return
}var b=!1;
o.tolerance=="touch"?b=!(e.left>l||e.right<n||e.top>k||e.bottom<m):o.tolerance=="fit"&&(b=e.left>n&&e.right<l&&e.top>m&&e.bottom<k),b?(e.selected&&(e.$element.removeClass("ui-selected"),e.selected=!1),e.unselecting&&(e.$element.removeClass("ui-unselecting"),e.unselecting=!1),e.selecting||(e.$element.addClass("ui-selecting"),e.selecting=!0,p._trigger("selecting",a,{selecting:e.element}))):(e.selecting&&((a.metaKey||a.ctrlKey)&&e.startselected?(e.$element.removeClass("ui-selecting"),e.selecting=!1,e.$element.addClass("ui-selected"),e.selected=!0):(e.$element.removeClass("ui-selecting"),e.selecting=!1,e.startselected&&(e.$element.addClass("ui-unselecting"),e.unselecting=!0),p._trigger("unselecting",a,{unselecting:e.element}))),e.selected&&!a.metaKey&&!a.ctrlKey&&!e.startselected&&(e.$element.removeClass("ui-selected"),e.selected=!1,e.$element.addClass("ui-unselecting"),e.unselecting=!0,p._trigger("unselecting",a,{unselecting:e.element})))
}),!1
},_mouseStop:function(a){var f=this;
this.dragged=!1;
var e=this.options;
return d(".ui-unselecting",this.element[0]).each(function(){var b=d.data(this,"selectable-item");
b.$element.removeClass("ui-unselecting"),b.unselecting=!1,b.startselected=!1,f._trigger("unselected",a,{unselected:b.element})
}),d(".ui-selecting",this.element[0]).each(function(){var b=d.data(this,"selectable-item");
b.$element.removeClass("ui-selecting").addClass("ui-selected"),b.selecting=!1,b.selected=!0,b.startselected=!0,f._trigger("selected",a,{selected:b.element})
}),this._trigger("stop",a),this.helper.remove(),!1
}}),d.extend(d.ui.selectable,{version:"1.8.24"})
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.sortable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.widget("ui.sortable",d.ui.mouse,{widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var b=this.options;
this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?b.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0
},destroy:function(){d.Widget.prototype.destroy.call(this),this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();
for(var a=this.items.length-1;
a>=0;
a--){this.items[a].item.removeData(this.widgetName+"-item")
}return this
},_setOption:function(a,e){a==="disabled"?(this.options[a]=e,this.widget()[e?"addClass":"removeClass"]("ui-sortable-disabled")):d.Widget.prototype._setOption.apply(this,arguments)
},_mouseCapture:function(a,n){var m=this;
if(this.reverting){return !1
}if(this.options.disabled||this.options.type=="static"){return !1
}this._refreshItems(a);
var l=null,k=this,j=d(a.target).parents().each(function(){if(d.data(this,m.widgetName+"-item")==k){return l=d(this),!1
}});
d.data(a.target,m.widgetName+"-item")==k&&(l=d(a.target));
if(!l){return !1
}if(this.options.handle&&!n){var i=!1;
d(this.options.handle,l).find("*").andSelf().each(function(){this==a.target&&(i=!0)
});
if(!i){return !1
}}return this.currentItem=l,this._removeCurrentsFromItems(),!0
},_mouseStart:function(a,l,k){var j=this.options,i=this;
this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(a),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(a),this.originalPageX=a.pageX,this.originalPageY=a.pageY,j.cursorAt&&this._adjustOffsetFromHelper(j.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),j.containment&&this._setContainment(),j.cursor&&(d("body").css("cursor")&&(this._storedCursor=d("body").css("cursor")),d("body").css("cursor",j.cursor)),j.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",j.opacity)),j.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",j.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",a,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();
if(!k){for(var h=this.containers.length-1;
h>=0;
h--){this.containers[h]._trigger("activate",a,i._uiHash(this))
}}return d.ui.ddmanager&&(d.ui.ddmanager.current=this),d.ui.ddmanager&&!j.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(a),!0
},_mouseDrag:function(a){this.position=this._generatePosition(a),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs);
if(this.options.scroll){var n=this.options,m=!1;
this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-a.pageY<n.scrollSensitivity?this.scrollParent[0].scrollTop=m=this.scrollParent[0].scrollTop+n.scrollSpeed:a.pageY-this.overflowOffset.top<n.scrollSensitivity&&(this.scrollParent[0].scrollTop=m=this.scrollParent[0].scrollTop-n.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-a.pageX<n.scrollSensitivity?this.scrollParent[0].scrollLeft=m=this.scrollParent[0].scrollLeft+n.scrollSpeed:a.pageX-this.overflowOffset.left<n.scrollSensitivity&&(this.scrollParent[0].scrollLeft=m=this.scrollParent[0].scrollLeft-n.scrollSpeed)):(a.pageY-d(document).scrollTop()<n.scrollSensitivity?m=d(document).scrollTop(d(document).scrollTop()-n.scrollSpeed):d(window).height()-(a.pageY-d(document).scrollTop())<n.scrollSensitivity&&(m=d(document).scrollTop(d(document).scrollTop()+n.scrollSpeed)),a.pageX-d(document).scrollLeft()<n.scrollSensitivity?m=d(document).scrollLeft(d(document).scrollLeft()-n.scrollSpeed):d(window).width()-(a.pageX-d(document).scrollLeft())<n.scrollSensitivity&&(m=d(document).scrollLeft(d(document).scrollLeft()+n.scrollSpeed))),m!==!1&&d.ui.ddmanager&&!n.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a)
}this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"
}for(var l=this.items.length-1;
l>=0;
l--){var k=this.items[l],j=k.item[0],i=this._intersectsWithPointer(k);
if(!i){continue
}if(k.instance!==this.currentContainer){continue
}if(j!=this.currentItem[0]&&this.placeholder[i==1?"next":"prev"]()[0]!=j&&!d.ui.contains(this.placeholder[0],j)&&(this.options.type=="semi-dynamic"?!d.ui.contains(this.element[0],j):!0)){this.direction=i==1?"down":"up";
if(this.options.tolerance=="pointer"||this._intersectsWithSides(k)){this._rearrange(a,k)
}else{break
}this._trigger("change",a,this._uiHash());
break
}}return this._contactContainers(a),d.ui.ddmanager&&d.ui.ddmanager.drag(this,a),this._trigger("sort",a,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1
},_mouseStop:function(a,i){if(!a){return
}d.ui.ddmanager&&!this.options.dropBehaviour&&d.ui.ddmanager.drop(this,a);
if(this.options.revert){var h=this,f=h.placeholder.offset();
h.reverting=!0,d(this.helper).animate({left:f.left-this.offset.parent.left-h.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:f.top-this.offset.parent.top-h.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){h._clear(a)
})
}else{this._clear(a,i)
}return !1
},cancel:function(){var a=this;
if(this.dragging){this._mouseUp({target:null}),this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();
for(var e=this.containers.length-1;
e>=0;
e--){this.containers[e]._trigger("deactivate",null,a._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,a._uiHash(this)),this.containers[e].containerCache.over=0)
}}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),d.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?d(this.domPosition.prev).after(this.currentItem):d(this.domPosition.parent).prepend(this.currentItem)),this
},serialize:function(a){var f=this._getItemsAsjQuery(a&&a.connected),e=[];
return a=a||{},d(f).each(function(){var b=(d(a.item||this).attr(a.attribute||"id")||"").match(a.expression||/(.+)[-=_](.+)/);
b&&e.push((a.key||b[1]+"[]")+"="+(a.key&&a.expression?b[1]:b[2]))
}),!e.length&&a.key&&e.push(a.key+"="),e.join("&")
},toArray:function(a){var f=this._getItemsAsjQuery(a&&a.connected),e=[];
return a=a||{},f.each(function(){e.push(d(a.item||this).attr(a.attribute||"id")||"")
}),e
},_intersectsWith:function(x){var w=this.positionAbs.left,v=w+this.helperProportions.width,u=this.positionAbs.top,t=u+this.helperProportions.height,s=x.left,r=s+x.width,q=x.top,p=q+x.height,o=this.offset.click.top,n=this.offset.click.left,m=u+o>q&&u+o<p&&w+n>s&&w+n<r;
return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>x[this.floating?"width":"height"]?m:s<w+this.helperProportions.width/2&&v-this.helperProportions.width/2<r&&q<u+this.helperProportions.height/2&&t-this.helperProportions.height/2<p
},_intersectsWithPointer:function(a){var l=this.options.axis==="x"||d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height),k=this.options.axis==="y"||d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width),j=l&&k,i=this._getDragVerticalDirection(),h=this._getDragHorizontalDirection();
return j?this.floating?h&&h=="right"||i=="down"?2:1:i&&(i=="down"?2:1):!1
},_intersectsWithSides:function(a){var k=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height),j=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width),i=this._getDragVerticalDirection(),h=this._getDragHorizontalDirection();
return this.floating&&h?h=="right"&&j||h=="left"&&!j:i&&(i=="down"&&k||i=="up"&&!k)
},_getDragVerticalDirection:function(){var b=this.positionAbs.top-this.lastPositionAbs.top;
return b!=0&&(b>0?"down":"up")
},_getDragHorizontalDirection:function(){var b=this.positionAbs.left-this.lastPositionAbs.left;
return b!=0&&(b>0?"right":"left")
},refresh:function(b){return this._refreshItems(b),this.refreshPositions(),this
},_connectWith:function(){var b=this.options;
return b.connectWith.constructor==String?[b.connectWith]:b.connectWith
},_getItemsAsjQuery:function(r){var q=this,p=[],o=[],n=this._connectWith();
if(n&&r){for(var m=n.length-1;
m>=0;
m--){var l=d(n[m]);
for(var k=l.length-1;
k>=0;
k--){var a=d.data(l[k],this.widgetName);
a&&a!=this&&!a.options.disabled&&o.push([d.isFunction(a.options.items)?a.options.items.call(a.element):d(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a])
}}}o.push([d.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):d(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
for(var m=o.length-1;
m>=0;
m--){o[m][0].each(function(){p.push(this)
})
}return d(p)
},_removeCurrentsFromItems:function(){var f=this.currentItem.find(":data("+this.widgetName+"-item)");
for(var e=0;
e<this.items.length;
e++){for(var h=0;
h<f.length;
h++){f[h]==this.items[e].item[0]&&this.items.splice(e,1)
}}},_refreshItems:function(z){this.items=[],this.containers=[this];
var y=this.items,x=this,w=[[d.isFunction(this.options.items)?this.options.items.call(this.element[0],z,{item:this.currentItem}):d(this.options.items,this.element),this]],v=this._connectWith();
if(v&&this.ready){for(var u=v.length-1;
u>=0;
u--){var t=d(v[u]);
for(var s=t.length-1;
s>=0;
s--){var r=d.data(t[s],this.widgetName);
r&&r!=this&&!r.options.disabled&&(w.push([d.isFunction(r.options.items)?r.options.items.call(r.element[0],z,{item:this.currentItem}):d(r.options.items,r.element),r]),this.containers.push(r))
}}}for(var u=w.length-1;
u>=0;
u--){var q=w[u][1],p=w[u][0];
for(var s=0,o=p.length;
s<o;
s++){var a=d(p[s]);
a.data(this.widgetName+"-item",q),y.push({item:a,instance:q,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(a){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());
for(var k=this.items.length-1;
k>=0;
k--){var j=this.items[k];
if(j.instance!=this.currentContainer&&this.currentContainer&&j.item[0]!=this.currentItem[0]){continue
}var i=this.options.toleranceElement?d(this.options.toleranceElement,j.item):j.item;
a||(j.width=i.outerWidth(),j.height=i.outerHeight());
var h=i.offset();
j.left=h.left,j.top=h.top
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(var k=this.containers.length-1;
k>=0;
k--){var h=this.containers[k].element.offset();
this.containers[k].containerCache.left=h.left,this.containers[k].containerCache.top=h.top,this.containers[k].containerCache.width=this.containers[k].element.outerWidth(),this.containers[k].containerCache.height=this.containers[k].element.outerHeight()
}}return this
},_createPlaceholder:function(a){var i=a||this,h=i.options;
if(!h.placeholder||h.placeholder.constructor==String){var f=h.placeholder;
h.placeholder={element:function(){var e=d(document.createElement(i.currentItem[0].nodeName)).addClass(f||i.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
return f||(e.style.visibility="hidden"),e
},update:function(j,e){if(f&&!h.forcePlaceholderSize){return
}e.height()||e.height(i.currentItem.innerHeight()-parseInt(i.currentItem.css("paddingTop")||0,10)-parseInt(i.currentItem.css("paddingBottom")||0,10)),e.width()||e.width(i.currentItem.innerWidth()-parseInt(i.currentItem.css("paddingLeft")||0,10)-parseInt(i.currentItem.css("paddingRight")||0,10))
}}
}i.placeholder=d(h.placeholder.element.call(i.element,i.currentItem)),i.currentItem.after(i.placeholder),h.placeholder.update(i,i.placeholder)
},_contactContainers:function(r){var q=null,p=null;
for(var o=this.containers.length-1;
o>=0;
o--){if(d.ui.contains(this.currentItem[0],this.containers[o].element[0])){continue
}if(this._intersectsWith(this.containers[o].containerCache)){if(q&&d.ui.contains(this.containers[o].element[0],q.element[0])){continue
}q=this.containers[o],p=o
}else{this.containers[o].containerCache.over&&(this.containers[o]._trigger("out",r,this._uiHash(this)),this.containers[o].containerCache.over=0)
}}if(!q){return
}if(this.containers.length===1){this.containers[p]._trigger("over",r,this._uiHash(this)),this.containers[p].containerCache.over=1
}else{if(this.currentContainer!=this.containers[p]){var n=10000,m=null,l=this.positionAbs[this.containers[p].floating?"left":"top"];
for(var k=this.items.length-1;
k>=0;
k--){if(!d.ui.contains(this.containers[p].element[0],this.items[k].item[0])){continue
}var a=this.containers[p].floating?this.items[k].item.offset().left:this.items[k].item.offset().top;
Math.abs(a-l)<n&&(n=Math.abs(a-l),m=this.items[k],this.direction=a-l>0?"down":"up")
}if(!m&&!this.options.dropOnEmpty){return
}this.currentContainer=this.containers[p],m?this._rearrange(r,m,null,!0):this._rearrange(r,null,this.containers[p].element,!0),this._trigger("change",r,this._uiHash()),this.containers[p]._trigger("change",r,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",r,this._uiHash(this)),this.containers[p].containerCache.over=1
}}},_createHelper:function(a){var f=this.options,e=d.isFunction(f.helper)?d(f.helper.apply(this.element[0],[a,this.currentItem])):f.helper=="clone"?this.currentItem.clone():this.currentItem;
return e.parents("body").length||d(f.appendTo!="parent"?f.appendTo:this.currentItem[0].parentNode)[0].appendChild(e[0]),e[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(e[0].style.width==""||f.forceHelperSize)&&e.width(this.currentItem.width()),(e[0].style.height==""||f.forceHelperSize)&&e.height(this.currentItem.height()),e
},_adjustOffsetFromHelper:function(a){typeof a=="string"&&(a=a.split(" ")),d.isArray(a)&&(a={left:+a[0],top:+a[1]||0}),"left" in a&&(this.offset.click.left=a.left+this.margins.left),"right" in a&&(this.offset.click.left=this.helperProportions.width-a.right+this.margins.left),"top" in a&&(this.offset.click.top=a.top+this.margins.top),"bottom" in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)
},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var a=this.offsetParent.offset();
this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(a.left+=this.scrollParent.scrollLeft(),a.top+=this.scrollParent.scrollTop());
if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie){a={top:0,left:0}
}return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var b=this.currentItem.position();
return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}return{top:0,left:0}
},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var a=this.options;
a.containment=="parent"&&(a.containment=this.helper[0].parentNode);
if(a.containment=="document"||a.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!/^(document|window|parent)$/.test(a.containment)){var i=d(a.containment)[0],h=d(a.containment).offset(),f=d(i).css("overflow")!="hidden";
this.containment=[h.left+(parseInt(d(i).css("borderLeftWidth"),10)||0)+(parseInt(d(i).css("paddingLeft"),10)||0)-this.margins.left,h.top+(parseInt(d(i).css("borderTopWidth"),10)||0)+(parseInt(d(i).css("paddingTop"),10)||0)-this.margins.top,h.left+(f?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(d(i).css("borderLeftWidth"),10)||0)-(parseInt(d(i).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,h.top+(f?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(d(i).css("borderTopWidth"),10)||0)-(parseInt(d(i).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(a,l){l||(l=this.position);
var k=a=="absolute"?1:-1,j=this.options,i=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=/(html|body)/i.test(i[0].tagName);
return{top:l.top+this.offset.relative.top*k+this.offset.parent.top*k-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():h?0:i.scrollTop())*k),left:l.left+this.offset.relative.left*k+this.offset.parent.left*k-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:i.scrollLeft())*k)}
},_generatePosition:function(a){var p=this.options,o=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,n=/(html|body)/i.test(o[0].tagName);
this.cssPosition=="relative"&&(this.scrollParent[0]==document||this.scrollParent[0]==this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset());
var m=a.pageX,l=a.pageY;
if(this.originalPosition){this.containment&&(a.pageX-this.offset.click.left<this.containment[0]&&(m=this.containment[0]+this.offset.click.left),a.pageY-this.offset.click.top<this.containment[1]&&(l=this.containment[1]+this.offset.click.top),a.pageX-this.offset.click.left>this.containment[2]&&(m=this.containment[2]+this.offset.click.left),a.pageY-this.offset.click.top>this.containment[3]&&(l=this.containment[3]+this.offset.click.top));
if(p.grid){var k=this.originalPageY+Math.round((l-this.originalPageY)/p.grid[1])*p.grid[1];
l=this.containment?k-this.offset.click.top<this.containment[1]||k-this.offset.click.top>this.containment[3]?k-this.offset.click.top<this.containment[1]?k+p.grid[1]:k-p.grid[1]:k:k;
var j=this.originalPageX+Math.round((m-this.originalPageX)/p.grid[0])*p.grid[0];
m=this.containment?j-this.offset.click.left<this.containment[0]||j-this.offset.click.left>this.containment[2]?j-this.offset.click.left<this.containment[0]?j+p.grid[0]:j-p.grid[0]:j:j
}}return{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():n?0:o.scrollTop()),left:m-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():n?0:o.scrollLeft())}
},_rearrange:function(i,h,m,l){m?m[0].appendChild(this.placeholder[0]):h.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?h.item[0]:h.item[0].nextSibling),this.counter=this.counter?++this.counter:1;
var k=this,j=this.counter;
window.setTimeout(function(){j==k.counter&&k.refreshPositions(!l)
},0)
},_clear:function(a,k){this.reverting=!1;
var j=[],i=this;
!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;
if(this.helper[0]==this.currentItem[0]){for(var h in this._storedCSS){if(this._storedCSS[h]=="auto"||this._storedCSS[h]=="static"){this._storedCSS[h]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}this.fromOutside&&!k&&j.push(function(b){this._trigger("receive",b,this._uiHash(this.fromOutside))
}),(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!k&&j.push(function(b){this._trigger("update",b,this._uiHash())
}),this!==this.currentContainer&&(k||(j.push(function(b){this._trigger("remove",b,this._uiHash())
}),j.push(function(b){return function(e){b._trigger("receive",e,this._uiHash(this))
}
}.call(this,this.currentContainer)),j.push(function(b){return function(e){b._trigger("update",e,this._uiHash(this))
}
}.call(this,this.currentContainer))));
for(var h=this.containers.length-1;
h>=0;
h--){k||j.push(function(b){return function(e){b._trigger("deactivate",e,this._uiHash(this))
}
}.call(this,this.containers[h])),this.containers[h].containerCache.over&&(j.push(function(b){return function(e){b._trigger("out",e,this._uiHash(this))
}
}.call(this,this.containers[h])),this.containers[h].containerCache.over=0)
}this._storedCursor&&d("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex),this.dragging=!1;
if(this.cancelHelperRemoval){if(!k){this._trigger("beforeStop",a,this._uiHash());
for(var h=0;
h<j.length;
h++){j[h].call(this,a)
}this._trigger("stop",a,this._uiHash())
}return this.fromOutside=!1,!1
}k||this._trigger("beforeStop",a,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null;
if(!k){for(var h=0;
h<j.length;
h++){j[h].call(this,a)
}this._trigger("stop",a,this._uiHash())
}return this.fromOutside=!1,!0
},_trigger:function(){d.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()
},_uiHash:function(a){var e=a||this;
return{helper:e.helper,placeholder:e.placeholder||d([]),position:e.position,originalPosition:e.originalPosition,offset:e.positionAbs,item:e.currentItem,sender:a?a.element:null}
}}),d.extend(d.ui.sortable,{version:"1.8.24"})
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.accordion.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:!0,clearStyle:!1,collapsible:!1,event:"click",fillSpace:!1,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:!1,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()
}},_create:function(){var a=this,i=a.options;
a.running=0,a.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"),a.headers=a.element.find(i.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){if(i.disabled){return
}d(this).addClass("ui-state-hover")
}).bind("mouseleave.accordion",function(){if(i.disabled){return
}d(this).removeClass("ui-state-hover")
}).bind("focus.accordion",function(){if(i.disabled){return
}d(this).addClass("ui-state-focus")
}).bind("blur.accordion",function(){if(i.disabled){return
}d(this).removeClass("ui-state-focus")
}),a.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(i.navigation){var h=a.element.find("a").filter(i.navigationFilter).eq(0);
if(h.length){var f=h.closest(".ui-accordion-header");
f.length?a.active=f:a.active=h.closest(".ui-accordion-content").prev()
}}a.active=a._findActive(a.active||i.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"),a.active.next().addClass("ui-accordion-content-active"),a._createIcons(),a.resize(),a.element.attr("role","tablist"),a.headers.attr("role","tab").bind("keydown.accordion",function(b){return a._keydown(b)
}).next().attr("role","tabpanel"),a.headers.not(a.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide(),a.active.length?a.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):a.headers.eq(0).attr("tabIndex",0),d.browser.safari||a.headers.find("a").attr("tabIndex",-1),i.event&&a.headers.bind(i.event.split(" ").join(".accordion ")+".accordion",function(b){a._clickHandler.call(a,b,this),b.preventDefault()
})
},_createIcons:function(){var a=this.options;
a.icons&&(d("<span></span>").addClass("ui-icon "+a.icons.header).prependTo(this.headers),this.active.children(".ui-icon").toggleClass(a.icons.header).toggleClass(a.icons.headerSelected),this.element.addClass("ui-accordion-icons"))
},_destroyIcons:function(){this.headers.children(".ui-icon").remove(),this.element.removeClass("ui-accordion-icons")
},destroy:function(){var a=this.options;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"),this.headers.find("a").removeAttr("tabIndex"),this._destroyIcons();
var e=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
return(a.autoHeight||a.fillHeight)&&e.css("height",""),d.Widget.prototype.destroy.call(this)
},_setOption:function(a,e){d.Widget.prototype._setOption.apply(this,arguments),a=="active"&&this.activate(e),a=="icons"&&(this._destroyIcons(),e&&this._createIcons()),a=="disabled"&&this.headers.add(this.headers.next())[e?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")
},_keydown:function(a){if(this.options.disabled||a.altKey||a.ctrlKey){return
}var k=d.ui.keyCode,j=this.headers.length,i=this.headers.index(a.target),h=!1;
switch(a.keyCode){case k.RIGHT:case k.DOWN:h=this.headers[(i+1)%j];
break;
case k.LEFT:case k.UP:h=this.headers[(i-1+j)%j];
break;
case k.SPACE:case k.ENTER:this._clickHandler({target:a.target},a.target),a.preventDefault()
}return h?(d(a.target).attr("tabIndex",-1),d(h).attr("tabIndex",0),h.focus(),!1):!0
},resize:function(){var a=this.options,f;
if(a.fillSpace){if(d.browser.msie){var e=this.element.parent().css("overflow");
this.element.parent().css("overflow","hidden")
}f=this.element.parent().height(),d.browser.msie&&this.element.parent().css("overflow",e),this.headers.each(function(){f-=d(this).outerHeight(!0)
}),this.headers.next().each(function(){d(this).height(Math.max(0,f-d(this).innerHeight()+d(this).height()))
}).css("overflow","auto")
}else{a.autoHeight&&(f=0,this.headers.next().each(function(){f=Math.max(f,d(this).height("").height())
}).height(f))
}return this
},activate:function(f){this.options.active=f;
var e=this._findActive(f)[0];
return this._clickHandler({target:e},e),this
},_findActive:function(a){return a?typeof a=="number"?this.headers.filter(":eq("+a+")"):this.headers.not(this.headers.not(a)):a===!1?d([]):this.headers.filter(":eq(0)")
},_clickHandler:function(t,s){var r=this.options;
if(r.disabled){return
}if(!t.target){if(!r.collapsible){return
}this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header),this.active.next().addClass("ui-accordion-content-active");
var q=this.active.next(),p={options:r,newHeader:d([]),oldHeader:r.active,newContent:d([]),oldContent:q},o=this.active=d([]);
this._toggle(o,q,p);
return
}var n=d(t.currentTarget||s),m=n[0]===this.active[0];
r.active=r.collapsible&&m?!1:this.headers.index(n);
if(this.running||!r.collapsible&&m){return
}var l=this.active,o=n.next(),q=this.active.next(),p={options:r,newHeader:m&&r.collapsible?d([]):n,oldHeader:this.active,newContent:m&&r.collapsible?d([]):o,oldContent:q},a=this.headers.index(this.active[0])>this.headers.index(n[0]);
this.active=m?d([]):n,this._toggle(o,q,p,m,a),l.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header),m||(n.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(r.icons.header).addClass(r.icons.headerSelected),n.next().addClass("ui-accordion-content-active"));
return
},_toggle:function(x,w,v,u,t){var s=this,r=s.options;
s.toShow=x,s.toHide=w,s.data=v;
var q=function(){if(!s){return
}return s._completed.apply(s,arguments)
};
s._trigger("changestart",null,s.data),s.running=w.size()===0?x.size():w.size();
if(r.animated){var p={};
r.collapsible&&u?p={toShow:d([]),toHide:w,complete:q,down:t,autoHeight:r.autoHeight||r.fillSpace}:p={toShow:x,toHide:w,complete:q,down:t,autoHeight:r.autoHeight||r.fillSpace},r.proxied||(r.proxied=r.animated),r.proxiedDuration||(r.proxiedDuration=r.duration),r.animated=d.isFunction(r.proxied)?r.proxied(p):r.proxied,r.duration=d.isFunction(r.proxiedDuration)?r.proxiedDuration(p):r.proxiedDuration;
var o=d.ui.accordion.animations,n=r.duration,a=r.animated;
a&&!o[a]&&!d.easing[a]&&(a="slide"),o[a]||(o[a]=function(b){this.slide(b,{easing:a,duration:n||700})
}),o[a](p)
}else{r.collapsible&&u?x.toggle():(w.hide(),x.show()),q(!0)
}w.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur(),x.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()
},_completed:function(b){this.running=b?0:--this.running;
if(this.running){return
}this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""}),this.toHide.removeClass("ui-accordion-content-active"),this.toHide.length&&(this.toHide.parent()[0].className=this.toHide.parent()[0].className),this._trigger("change",null,this.data)
}}),d.extend(d.ui.accordion,{version:"1.8.24",animations:{slide:function(r,q){r=d.extend({easing:"swing",duration:300},r,q);
if(!r.toHide.size()){r.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},r);
return
}if(!r.toShow.size()){r.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},r);
return
}var p=r.toShow.css("overflow"),o=0,n={},m={},l=["height","paddingTop","paddingBottom"],k,a=r.toShow;
k=a[0].style.width,a.width(a.parent().width()-parseFloat(a.css("paddingLeft"))-parseFloat(a.css("paddingRight"))-(parseFloat(a.css("borderLeftWidth"))||0)-(parseFloat(a.css("borderRightWidth"))||0)),d.each(l,function(h,f){m[f]="hide";
var b=(""+d.css(r.toShow[0],f)).match(/^([\d+-.]+)(.*)$/);
n[f]={value:b[1],unit:b[2]||"px"}
}),r.toShow.css({height:0,overflow:"hidden"}).show(),r.toHide.filter(":hidden").each(r.complete).end().filter(":visible").animate(m,{step:function(b,e){e.prop=="height"&&(o=e.end-e.start===0?0:(e.now-e.start)/(e.end-e.start)),r.toShow[0].style[e.prop]=o*n[e.prop].value+n[e.prop].unit
},duration:r.duration,easing:r.easing,complete:function(){r.autoHeight||r.toShow.css("height",""),r.toShow.css({width:k,overflow:p}),r.complete()
}})
},bounceslide:function(b){this.slide(b,{easing:b.down?"easeOutBounce":"swing",duration:b.down?1000:200})
}}})
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.autocomplete.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(e,d){var f=0;
e.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var a=this,i=this.element[0].ownerDocument,h;
this.isMultiLine=this.element.is("textarea"),this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(j){if(a.options.disabled||a.element.propAttr("readOnly")){return
}h=!1;
var b=e.ui.keyCode;
switch(j.keyCode){case b.PAGE_UP:a._move("previousPage",j);
break;
case b.PAGE_DOWN:a._move("nextPage",j);
break;
case b.UP:a._keyEvent("previous",j);
break;
case b.DOWN:a._keyEvent("next",j);
break;
case b.ENTER:case b.NUMPAD_ENTER:a.menu.active&&(h=!0,j.preventDefault());
case b.TAB:if(!a.menu.active){return
}a.menu.select(j);
break;
case b.ESCAPE:a.element.val(a.term),a.close(j);
break;
default:clearTimeout(a.searching),a.searching=setTimeout(function(){a.term!=a.element.val()&&(a.selectedItem=null,a.search(null,j))
},a.options.delay)
}}).bind("keypress.autocomplete",function(b){h&&(h=!1,b.preventDefault())
}).bind("focus.autocomplete",function(){if(a.options.disabled){return
}a.selectedItem=null,a.previous=a.element.val()
}).bind("blur.autocomplete",function(b){if(a.options.disabled){return
}clearTimeout(a.searching),a.closing=setTimeout(function(){a.close(b),a._change(b)
},150)
}),this._initSource(),this.menu=e("<ul></ul>").addClass("ui-autocomplete").appendTo(e(this.options.appendTo||"body",i)[0]).mousedown(function(j){var b=a.menu.element[0];
e(j.target).closest(".ui-menu-item").length||setTimeout(function(){e(document).one("mousedown",function(k){k.target!==a.element[0]&&k.target!==b&&!e.ui.contains(b,k.target)&&a.close()
})
},1),setTimeout(function(){clearTimeout(a.closing)
},13)
}).menu({focus:function(b,k){var j=k.item.data("item.autocomplete");
!1!==a._trigger("focus",b,{item:j})&&/^key/.test(b.originalEvent.type)&&a.element.val(j.value)
},selected:function(b,k){var j=k.item.data("item.autocomplete"),c=a.previous;
a.element[0]!==i.activeElement&&(a.element.focus(),a.previous=c,setTimeout(function(){a.previous=c,a.selectedItem=j
},1)),!1!==a._trigger("select",b,{item:j})&&a.element.val(j.value),a.term=a.element.val(),a.close(b),a.selectedItem=j
},blur:function(b,j){a.menu.element.is(":visible")&&a.element.val()!==a.term&&a.element.val(a.term)
}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu"),e.fn.bgiframe&&this.menu.element.bgiframe(),a.beforeunloadHandler=function(){a.element.removeAttr("autocomplete")
},e(window).bind("beforeunload",a.beforeunloadHandler)
},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"),this.menu.element.remove(),e(window).unbind("beforeunload",this.beforeunloadHandler),e.Widget.prototype.destroy.call(this)
},_setOption:function(a,h){e.Widget.prototype._setOption.apply(this,arguments),a==="source"&&this._initSource(),a==="appendTo"&&this.menu.element.appendTo(e(h||"body",this.element[0].ownerDocument)[0]),a==="disabled"&&h&&this.xhr&&this.xhr.abort()
},_initSource:function(){var a=this,i,h;
e.isArray(this.options.source)?(i=this.options.source,this.source=function(c,j){j(e.ui.autocomplete.filter(i,c.term))
}):typeof this.options.source=="string"?(h=this.options.source,this.source=function(j,b){a.xhr&&a.xhr.abort(),a.xhr=e.ajax({url:h,data:j,dataType:"json",success:function(k,c){b(k)
},error:function(){b([])
}})
}):this.source=this.options.source
},search:function(h,c){h=h!=null?h:this.element.val(),this.term=this.element.val();
if(h.length<this.options.minLength){return this.close(c)
}clearTimeout(this.closing);
if(this._trigger("search",c)===!1){return
}return this._search(h)
},_search:function(b){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.source({term:b},this._response())
},_response:function(){var h=this,c=++f;
return function(a){c===f&&h.__response(a),h.pending--,h.pending||h.element.removeClass("ui-autocomplete-loading")
}
},__response:function(b){!this.options.disabled&&b&&b.length?(b=this._normalize(b),this._suggest(b),this._trigger("open")):this.close()
},close:function(b){clearTimeout(this.closing),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.deactivate(),this._trigger("close",b))
},_change:function(b){this.previous!==this.element.val()&&this._trigger("change",b,{item:this.selectedItem})
},_normalize:function(a){return a.length&&a[0].label&&a[0].value?a:e.map(a,function(c){return typeof c=="string"?{label:c,value:c}:e.extend({label:c.label||c.value,value:c.value||c.label},c)
})
},_suggest:function(a){var h=this.menu.element.empty().zIndex(this.element.zIndex()+1);
this._renderMenu(h,a),this.menu.deactivate(),this.menu.refresh(),h.show(),this._resizeMenu(),h.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(new e.Event("mouseover"))
},_resizeMenu:function(){var b=this.menu.element;
b.outerWidth(Math.max(b.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(a,i){var h=this;
e.each(i,function(b,j){h._renderItem(a,j)
})
},_renderItem:function(a,h){return e("<li></li>").data("item.autocomplete",h).append(e("<a></a>").text(h.label)).appendTo(a)
},_move:function(h,c){if(!this.menu.element.is(":visible")){this.search(null,c);
return
}if(this.menu.first()&&/^previous/.test(h)||this.menu.last()&&/^next/.test(h)){this.element.val(this.term),this.menu.deactivate();
return
}this.menu[h](c)
},widget:function(){return this.menu.element
},_keyEvent:function(h,c){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(h,c),c.preventDefault()
}}}),e.extend(e.ui.autocomplete,{escapeRegex:function(b){return b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")
},filter:function(a,i){var h=new RegExp(e.ui.autocomplete.escapeRegex(i),"i");
return e.grep(a,function(b){return h.test(b.label||b.value||b)
})
}})
})(jQuery),function(b){b.widget("ui.menu",{_create:function(){var a=this;
this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(d){if(!b(d.target).closest(".ui-menu-item a").length){return
}d.preventDefault(),a.select(d)
}),this.refresh()
},refresh:function(){var a=this,d=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");
d.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(e){a.activate(e,b(this).parent())
}).mouseleave(function(){a.deactivate()
})
},activate:function(h,f){this.deactivate();
if(this.hasScroll()){var k=f.offset().top-this.element.offset().top,j=this.element.scrollTop(),i=this.element.height();
k<0?this.element.scrollTop(j+k):k>=i&&this.element.scrollTop(j+k-i+f.height())
}this.active=f.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end(),this._trigger("focus",h,{item:f})
},deactivate:function(){if(!this.active){return
}this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),this._trigger("blur"),this.active=null
},next:function(c){this.move("next",".ui-menu-item:first",c)
},previous:function(c){this.move("prev",".ui-menu-item:last",c)
},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},move:function(f,e,i){if(!this.active){this.activate(i,this.element.children(e));
return
}var h=this.active[f+"All"](".ui-menu-item").eq(0);
h.length?this.activate(i,h):this.activate(i,this.element.children(e))
},nextPage:function(a){if(this.hasScroll()){if(!this.active||this.last()){this.activate(a,this.element.children(".ui-menu-item:first"));
return
}var i=this.active.offset().top,h=this.element.height(),f=this.element.children(".ui-menu-item").filter(function(){var c=b(this).offset().top-i-h+b(this).height();
return c<10&&c>-10
});
f.length||(f=this.element.children(".ui-menu-item:last")),this.activate(a,f)
}else{this.activate(a,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))
}},previousPage:function(a){if(this.hasScroll()){if(!this.active||this.first()){this.activate(a,this.element.children(".ui-menu-item:last"));
return
}var i=this.active.offset().top,h=this.element.height(),f=this.element.children(".ui-menu-item").filter(function(){var c=b(this).offset().top-i+h-b(this).height();
return c<10&&c>-10
});
f.length||(f=this.element.children(".ui-menu-item:first")),this.activate(a,f)
}else{this.activate(a,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))
}},hasScroll:function(){return this.element.height()<this.element[b.fn.prop?"prop":"attr"]("scrollHeight")
},select:function(c){this._trigger("selected",c,{item:this.active})
}})
}(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.button.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(v,u){var t,s,r,q,p="ui-button ui-widget ui-state-default ui-corner-all",o="ui-state-hover ui-state-active ",n="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var a=v(this).find(":ui-button");
setTimeout(function(){a.button("refresh")
},1)
},l=function(a){var i=a.name,h=a.form,f=v([]);
return i&&(h?f=v(h).find("[name='"+i+"']"):f=v("[name='"+i+"']",a.ownerDocument).filter(function(){return !this.form
})),f
};
v.widget("ui.button",{options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",m),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.propAttr("disabled"):this.element.propAttr("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");
var c=this,f=this.options,e=this.type==="checkbox"||this.type==="radio",d="ui-state-hover"+(e?"":" ui-state-active"),a="ui-state-focus";
f.label===null&&(f.label=this.buttonElement.html()),this.buttonElement.addClass(p).attr("role","button").bind("mouseenter.button",function(){if(f.disabled){return
}v(this).addClass("ui-state-hover"),this===t&&v(this).addClass("ui-state-active")
}).bind("mouseleave.button",function(){if(f.disabled){return
}v(this).removeClass(d)
}).bind("click.button",function(b){f.disabled&&(b.preventDefault(),b.stopImmediatePropagation())
}),this.element.bind("focus.button",function(){c.buttonElement.addClass(a)
}).bind("blur.button",function(){c.buttonElement.removeClass(a)
}),e&&(this.element.bind("change.button",function(){if(q){return
}c.refresh()
}),this.buttonElement.bind("mousedown.button",function(b){if(f.disabled){return
}q=!1,s=b.pageX,r=b.pageY
}).bind("mouseup.button",function(b){if(f.disabled){return
}if(s!==b.pageX||r!==b.pageY){q=!0
}})),this.type==="checkbox"?this.buttonElement.bind("click.button",function(){if(f.disabled||q){return !1
}v(this).toggleClass("ui-state-active"),c.buttonElement.attr("aria-pressed",c.element[0].checked)
}):this.type==="radio"?this.buttonElement.bind("click.button",function(){if(f.disabled||q){return !1
}v(this).addClass("ui-state-active"),c.buttonElement.attr("aria-pressed","true");
var b=c.element[0];
l(b).not(b).map(function(){return v(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
}):(this.buttonElement.bind("mousedown.button",function(){if(f.disabled){return !1
}v(this).addClass("ui-state-active"),t=this,v(document).one("mouseup",function(){t=null
})
}).bind("mouseup.button",function(){if(f.disabled){return !1
}v(this).removeClass("ui-state-active")
}).bind("keydown.button",function(h){if(f.disabled){return !1
}(h.keyCode==v.ui.keyCode.SPACE||h.keyCode==v.ui.keyCode.ENTER)&&v(this).addClass("ui-state-active")
}).bind("keyup.button",function(){v(this).removeClass("ui-state-active")
}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(h){h.keyCode===v.ui.keyCode.SPACE&&v(this).click()
})),this._setOption("disabled",f.disabled),this._resetButton()
},_determineButtonType:function(){this.element.is(":checkbox")?this.type="checkbox":this.element.is(":radio")?this.type="radio":this.element.is("input")?this.type="input":this.type="button";
if(this.type==="checkbox"||this.type==="radio"){var e=this.element.parents().filter(":last"),d="label[for='"+this.element.attr("id")+"']";
this.buttonElement=e.find(d),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(d),this.buttonElement.length||(this.buttonElement=e.find(d))),this.element.addClass("ui-helper-hidden-accessible");
var f=this.element.is(":checked");
f&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.attr("aria-pressed",f)
}else{this.buttonElement=this.element
}},widget:function(){return this.buttonElement
},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(p+" "+o+" "+n).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title"),v.Widget.prototype.destroy.call(this)
},_setOption:function(a,d){v.Widget.prototype._setOption.apply(this,arguments);
if(a==="disabled"){d?this.element.propAttr("disabled",!0):this.element.propAttr("disabled",!1);
return
}this._resetButton()
},refresh:function(){var a=this.element.is(":disabled");
a!==this.options.disabled&&this._setOption("disabled",a),this.type==="radio"?l(this.element[0]).each(function(){v(this).is(":checked")?v(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):v(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))
},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);
return
}var a=this.buttonElement.removeClass(n),k=v("<span></span>",this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(),j=this.options.icons,i=j.primary&&j.secondary,h=[];
j.primary||j.secondary?(this.options.text&&h.push("ui-button-text-icon"+(i?"s":j.primary?"-primary":"-secondary")),j.primary&&a.prepend("<span class='ui-button-icon-primary ui-icon "+j.primary+"'></span>"),j.secondary&&a.append("<span class='ui-button-icon-secondary ui-icon "+j.secondary+"'></span>"),this.options.text||(h.push(i?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||a.attr("title",k))):h.push("ui-button-text-only"),a.addClass(h.join(" "))
}}),v.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(a,d){a==="disabled"&&this.buttons.button("option",a,d),v.Widget.prototype._setOption.apply(this,arguments)
},refresh:function(){var a=this.element.css("direction")==="rtl";
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return v(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(a?"ui-corner-left":"ui-corner-right").end().end()
},destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return v(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy"),v.Widget.prototype.destroy.call(this)
}})
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.dialog.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(h,f){var k="ui-dialog ui-widget ui-widget-content ui-corner-all ",j={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};
h.widget("ui.dialog",{options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",collision:"fit",using:function(a){var d=h(this).css(a).offset().top;
d<0&&h(this).css("top",a.top-d)
}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1000},_create:function(){this.originalTitle=this.element.attr("title"),typeof this.originalTitle!="string"&&(this.originalTitle=""),this.options.title=this.options.title||this.originalTitle;
var t=this,s=t.options,r=s.title||"&#160;",q=h.ui.dialog.getTitleId(t.element),p=(t.uiDialog=h("<div></div>")).appendTo(document.body).hide().addClass(k+s.dialogClass).css({zIndex:s.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(b){s.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===h.ui.keyCode.ESCAPE&&(t.close(b),b.preventDefault())
}).attr({role:"dialog","aria-labelledby":q}).mousedown(function(b){t.moveToTop(!1,b)
}),o=t.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(p),n=(t.uiDialogTitlebar=h("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(p),m=h('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){m.addClass("ui-state-hover")
},function(){m.removeClass("ui-state-hover")
}).focus(function(){m.addClass("ui-state-focus")
}).blur(function(){m.removeClass("ui-state-focus")
}).click(function(b){return t.close(b),!1
}).appendTo(n),c=(t.uiDialogTitlebarCloseText=h("<span></span>")).addClass("ui-icon ui-icon-closethick").text(s.closeText).appendTo(m),a=h("<span></span>").addClass("ui-dialog-title").attr("id",q).html(r).prependTo(n);
h.isFunction(s.beforeclose)&&!h.isFunction(s.beforeClose)&&(s.beforeClose=s.beforeclose),n.find("*").add(n).disableSelection(),s.draggable&&h.fn.draggable&&t._makeDraggable(),s.resizable&&h.fn.resizable&&t._makeResizable(),t._createButtons(s.buttons),t._isOpen=!1,h.fn.bgiframe&&p.bgiframe()
},_init:function(){this.options.autoOpen&&this.open()
},destroy:function(){var b=this;
return b.overlay&&b.overlay.destroy(),b.uiDialog.hide(),b.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),b.uiDialog.remove(),b.originalTitle&&b.element.attr("title",b.originalTitle),b
},widget:function(){return this.uiDialog
},close:function(a){var n=this,m,l;
if(!1===n._trigger("beforeClose",a)){return
}return n.overlay&&n.overlay.destroy(),n.uiDialog.unbind("keypress.ui-dialog"),n._isOpen=!1,n.options.hide?n.uiDialog.hide(n.options.hide,function(){n._trigger("close",a)
}):(n.uiDialog.hide(),n._trigger("close",a)),h.ui.dialog.overlay.resize(),n.options.modal&&(m=0,h(".ui-dialog").each(function(){this!==n.uiDialog[0]&&(l=h(this).css("z-index"),isNaN(l)||(m=Math.max(m,l)))
}),h.ui.dialog.maxZ=m),n
},isOpen:function(){return this._isOpen
},moveToTop:function(a,o){var n=this,m=n.options,l;
return m.modal&&!a||!m.stack&&!m.modal?n._trigger("focus",o):(m.zIndex>h.ui.dialog.maxZ&&(h.ui.dialog.maxZ=m.zIndex),n.overlay&&(h.ui.dialog.maxZ+=1,n.overlay.$el.css("z-index",h.ui.dialog.overlay.maxZ=h.ui.dialog.maxZ)),l={scrollTop:n.element.scrollTop(),scrollLeft:n.element.scrollLeft()},h.ui.dialog.maxZ+=1,n.uiDialog.css("z-index",h.ui.dialog.maxZ),n.element.attr(l),n._trigger("focus",o),n)
},open:function(){if(this._isOpen){return
}var a=this,l=a.options,e=a.uiDialog;
return a.overlay=l.modal?new h.ui.dialog.overlay(a):null,a._size(),a._position(l.position),e.show(l.show),a.moveToTop(!0),l.modal&&e.bind("keydown.ui-dialog",function(m){if(m.keyCode!==h.ui.keyCode.TAB){return
}var p=h(":tabbable",this),o=p.filter(":first"),n=p.filter(":last");
if(m.target===n[0]&&!m.shiftKey){return o.focus(1),!1
}if(m.target===o[0]&&m.shiftKey){return n.focus(1),!1
}}),h(a.element.find(":tabbable").get().concat(e.find(".ui-dialog-buttonpane :tabbable").get().concat(e.get()))).eq(0).focus(),a._isOpen=!0,a._trigger("open"),a
},_createButtons:function(a){var o=this,n=!1,m=h("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),l=h("<div></div>").addClass("ui-dialog-buttonset").appendTo(m);
o.uiDialog.find(".ui-dialog-buttonpane").remove(),typeof a=="object"&&a!==null&&h.each(a,function(){return !(n=!0)
}),n&&(h.each(a,function(c,q){q=h.isFunction(q)?{click:q,text:c}:q;
var p=h('<button type="button"></button>').click(function(){q.click.apply(o.element[0],arguments)
}).appendTo(l);
h.each(q,function(e,d){if(e==="click"){return
}e in p?p[e](d):p.attr(e,d)
}),h.fn.button&&p.button()
}),m.appendTo(o.uiDialog))
},_makeDraggable:function(){function l(b){return{position:b.position,offset:b.offset}
}var a=this,o=a.options,n=h(document),m;
a.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(c,b){m=o.height==="auto"?"auto":h(this).height(),h(this).height(h(this).height()).addClass("ui-dialog-dragging"),a._trigger("dragStart",c,l(b))
},drag:function(b,d){a._trigger("drag",b,l(d))
},stop:function(c,b){o.position=[b.position.left-n.scrollLeft(),b.position.top-n.scrollTop()],h(this).removeClass("ui-dialog-dragging").height(m),a._trigger("dragStop",c,l(b)),h.ui.dialog.overlay.resize()
}})
},_makeResizable:function(o){function a(c){return{originalPosition:c.originalPosition,originalSize:c.originalSize,position:c.position,size:c.size}
}o=o===f?this.options.resizable:o;
var n=this,m=n.options,l=n.uiDialog.css("position"),b=typeof o=="string"?o:"n,e,s,w,se,sw,ne,nw";
n.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:n.element,maxWidth:m.maxWidth,maxHeight:m.maxHeight,minWidth:m.minWidth,minHeight:n._minHeight(),handles:b,start:function(d,e){h(this).addClass("ui-dialog-resizing"),n._trigger("resizeStart",d,a(e))
},resize:function(d,c){n._trigger("resize",d,a(c))
},stop:function(d,e){h(this).removeClass("ui-dialog-resizing"),m.height=h(this).height(),m.width=h(this).width(),n._trigger("resizeStop",d,a(e)),h.ui.dialog.overlay.resize()
}}).css("position",l).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
},_minHeight:function(){var b=this.options;
return b.height==="auto"?b.minHeight:Math.min(b.minHeight,b.height)
},_position:function(a){var n=[],m=[0,0],l;
if(a){if(typeof a=="string"||typeof a=="object"&&"0" in a){n=a.split?a.split(" "):[a[0],a[1]],n.length===1&&(n[1]=n[0]),h.each(["left","top"],function(d,c){+n[d]===n[d]&&(m[d]=n[d],n[d]=c)
}),a={my:n.join(" "),at:n.join(" "),offset:m.join(" ")}
}a=h.extend({},h.ui.dialog.prototype.options.position,a)
}else{a=h.ui.dialog.prototype.options.position
}l=this.uiDialog.is(":visible"),l||this.uiDialog.show(),this.uiDialog.css({top:0,left:0}).position(h.extend({of:window},a)),l||this.uiDialog.hide()
},_setOptions:function(a){var l=this,e={},d=!1;
h.each(a,function(m,c){l._setOption(m,c),m in j&&(d=!0),m in i&&(e[m]=c)
}),d&&this._size(),this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",e)
},_setOption:function(a,o){var n=this,m=n.uiDialog;
switch(a){case"beforeclose":a="beforeClose";
break;
case"buttons":n._createButtons(o);
break;
case"closeText":n.uiDialogTitlebarCloseText.text(""+o);
break;
case"dialogClass":m.removeClass(n.options.dialogClass).addClass(k+o);
break;
case"disabled":o?m.addClass("ui-dialog-disabled"):m.removeClass("ui-dialog-disabled");
break;
case"draggable":var l=m.is(":data(draggable)");
l&&!o&&m.draggable("destroy"),!l&&o&&n._makeDraggable();
break;
case"position":n._position(o);
break;
case"resizable":var c=m.is(":data(resizable)");
c&&!o&&m.resizable("destroy"),c&&typeof o=="string"&&m.resizable("option","handles",o),!c&&o!==!1&&n._makeResizable(o);
break;
case"title":h(".ui-dialog-title",n.uiDialogTitlebar).html(""+(o||"&#160;"))
}h.Widget.prototype._setOption.apply(n,arguments)
},_size:function(){var a=this.options,o,n,m=this.uiDialog.is(":visible");
this.element.show().css({width:"auto",minHeight:0,height:0}),a.minWidth>a.width&&(a.width=a.minWidth),o=this.uiDialog.css({height:"auto",width:a.width}).height(),n=Math.max(0,a.minHeight-o);
if(a.height==="auto"){if(h.support.minHeight){this.element.css({minHeight:n,height:"auto"})
}else{this.uiDialog.show();
var l=this.element.css("height","auto").height();
m||this.uiDialog.hide(),this.element.height(Math.max(l,n))
}}else{this.element.height(Math.max(a.height-o,0))
}this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())
}}),h.extend(h.ui.dialog,{version:"1.8.24",uuid:0,maxZ:0,getTitleId:function(d){var c=d.attr("id");
return c||(this.uuid+=1,c=this.uuid),"ui-dialog-title-"+c
},overlay:function(a){this.$el=h.ui.dialog.overlay.create(a)
}}),h.extend(h.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:h.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(b){return b+".dialog-overlay"
}).join(" "),create:function(a){this.instances.length===0&&(setTimeout(function(){h.ui.dialog.overlay.instances.length&&h(document).bind(h.ui.dialog.overlay.events,function(c){if(h(c.target).zIndex()<h.ui.dialog.overlay.maxZ){return !1
}})
},1),h(document).bind("keydown.dialog-overlay",function(b){a.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===h.ui.keyCode.ESCAPE&&(a.close(b),b.preventDefault())
}),h(window).bind("resize.dialog-overlay",h.ui.dialog.overlay.resize));
var d=(this.oldInstances.pop()||h("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});
return h.fn.bgiframe&&d.bgiframe(),this.instances.push(d),d
},destroy:function(a){var l=h.inArray(a,this.instances);
l!=-1&&this.oldInstances.push(this.instances.splice(l,1)[0]),this.instances.length===0&&h([document,window]).unbind(".dialog-overlay"),a.remove();
var e=0;
h.each(this.instances,function(){e=Math.max(e,this.css("z-index"))
}),this.maxZ=e
},height:function(){var a,d;
return h.browser.msie&&h.browser.version<7?(a=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),d=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),a<d?h(window).height()+"px":a+"px"):h(document).height()+"px"
},width:function(){var a,d;
return h.browser.msie?(a=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),d=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),a<d?h(window).width()+"px":a+"px"):h(document).width()+"px"
},resize:function(){var a=h([]);
h.each(h.ui.dialog.overlay.instances,function(){a=a.add(this)
}),a.css({width:0,height:0}).css({width:h.ui.dialog.overlay.width(),height:h.ui.dialog.overlay.height()})
}}),h.extend(h.ui.dialog.overlay.prototype,{destroy:function(){h.ui.dialog.overlay.destroy(this.$el)
}})
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.slider.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(e,d){var f=5;
e.widget("ui.slider",e.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var a=this,n=this.options,m=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),l="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",k=n.values&&n.values.length||1,j=[];
this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"+(n.disabled?" ui-slider-disabled ui-disabled":"")),this.range=e([]),n.range&&(n.range===!0&&(n.values||(n.values=[this._valueMin(),this._valueMin()]),n.values.length&&n.values.length!==2&&(n.values=[n.values[0],n.values[0]])),this.range=e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(n.range==="min"||n.range==="max"?" ui-slider-range-"+n.range:"")));
for(var c=m.length;
c<k;
c+=1){j.push(l)
}this.handles=m.add(e(j.join("")).appendTo(a.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(b){b.preventDefault()
}).hover(function(){n.disabled||e(this).addClass("ui-state-hover")
},function(){e(this).removeClass("ui-state-hover")
}).focus(function(){n.disabled?e(this).blur():(e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),e(this).addClass("ui-state-focus"))
}).blur(function(){e(this).removeClass("ui-state-focus")
}),this.handles.each(function(h){e(this).data("index.ui-slider-handle",h)
}),this.handles.keydown(function(s){var r=e(this).data("index.ui-slider-handle"),q,p,o,b;
if(a.options.disabled){return
}switch(s.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:s.preventDefault();
if(!a._keySliding){a._keySliding=!0,e(this).addClass("ui-state-active"),q=a._start(s,r);
if(q===!1){return
}}}b=a.options.step,a.options.values&&a.options.values.length?p=o=a.values(r):p=o=a.value();
switch(s.keyCode){case e.ui.keyCode.HOME:o=a._valueMin();
break;
case e.ui.keyCode.END:o=a._valueMax();
break;
case e.ui.keyCode.PAGE_UP:o=a._trimAlignValue(p+(a._valueMax()-a._valueMin())/f);
break;
case e.ui.keyCode.PAGE_DOWN:o=a._trimAlignValue(p-(a._valueMax()-a._valueMin())/f);
break;
case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(p===a._valueMax()){return
}o=a._trimAlignValue(p+b);
break;
case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(p===a._valueMin()){return
}o=a._trimAlignValue(p-b)
}a._slide(s,r,o)
}).keyup(function(h){var b=e(this).data("index.ui-slider-handle");
a._keySliding&&(a._keySliding=!1,a._stop(h,b),a._change(h,b),e(this).removeClass("ui-state-active"))
}),this._refreshValue(),this._animateOff=!1
},destroy:function(){return this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy(),this
},_mouseCapture:function(v){var u=this.options,t,s,r,q,p,o,n,m,a;
return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),t={x:v.pageX,y:v.pageY},s=this._normValueFromMouse(t),r=this._valueMax()-this._valueMin()+1,p=this,this.handles.each(function(h){var i=Math.abs(s-p.values(h));
r>i&&(r=i,q=e(this),o=h)
}),u.range===!0&&this.values(1)===u.min&&(o+=1,q=e(this.handles[o])),n=this._start(v,o),n===!1?!1:(this._mouseSliding=!0,p._handleIndex=o,q.addClass("ui-state-active").focus(),m=q.offset(),a=!e(v.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=a?{left:0,top:0}:{left:v.pageX-m.left-q.width()/2,top:v.pageY-m.top-q.height()/2-(parseInt(q.css("borderTopWidth"),10)||0)-(parseInt(q.css("borderBottomWidth"),10)||0)+(parseInt(q.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(v,o,s),this._animateOff=!0,!0))
},_mouseStart:function(b){return !0
},_mouseDrag:function(i){var h={x:i.pageX,y:i.pageY},j=this._normValueFromMouse(h);
return this._slide(i,this._handleIndex,j),!1
},_mouseStop:function(b){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(b,this._handleIndex),this._change(b,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1
},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"
},_normValueFromMouse:function(i){var h,m,l,k,j;
return this.orientation==="horizontal"?(h=this.elementSize.width,m=i.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(h=this.elementSize.height,m=i.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),l=m/h,l>1&&(l=1),l<0&&(l=0),this.orientation==="vertical"&&(l=1-l),k=this._valueMax()-this._valueMin(),j=this._valueMin()+l*k,this._trimAlignValue(j)
},_start:function(i,h){var j={handle:this.handles[h],value:this.value()};
return this.options.values&&this.options.values.length&&(j.value=this.values(h),j.values=this.values()),this._trigger("start",i,j)
},_slide:function(i,h,m){var l,k,j;
this.options.values&&this.options.values.length?(l=this.values(h?0:1),this.options.values.length===2&&this.options.range===!0&&(h===0&&m>l||h===1&&m<l)&&(m=l),m!==this.values(h)&&(k=this.values(),k[h]=m,j=this._trigger("slide",i,{handle:this.handles[h],value:m,values:k}),l=this.values(h?0:1),j!==!1&&this.values(h,m,!0))):m!==this.value()&&(j=this._trigger("slide",i,{handle:this.handles[h],value:m}),j!==!1&&this.value(m))
},_stop:function(i,h){var j={handle:this.handles[h],value:this.value()};
this.options.values&&this.options.values.length&&(j.value=this.values(h),j.values=this.values()),this._trigger("stop",i,j)
},_change:function(i,h){if(!this._keySliding&&!this._mouseSliding){var j={handle:this.handles[h],value:this.value()};
this.options.values&&this.options.values.length&&(j.value=this.values(h),j.values=this.values()),this._trigger("change",i,j)
}},value:function(b){if(arguments.length){this.options.value=this._trimAlignValue(b),this._refreshValue(),this._change(null,0);
return
}return this._value()
},values:function(a,k){var j,i,h;
if(arguments.length>1){this.options.values[a]=this._trimAlignValue(k),this._refreshValue(),this._change(null,a);
return
}if(!arguments.length){return this._values()
}if(!e.isArray(arguments[0])){return this.options.values&&this.options.values.length?this._values(a):this.value()
}j=this.options.values,i=arguments[0];
for(h=0;
h<j.length;
h+=1){j[h]=this._trimAlignValue(i[h]),this._change(null,h)
}this._refreshValue()
},_setOption:function(a,j){var i,h=0;
e.isArray(this.options.values)&&(h=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments);
switch(a){case"disabled":j?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));
break;
case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();
break;
case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;
break;
case"values":this._animateOff=!0,this._refreshValue();
for(i=0;
i<h;
i+=1){this._change(null,i)
}this._animateOff=!1
}},_value:function(){var b=this.options.value;
return b=this._trimAlignValue(b),b
},_values:function(i){var h,k,j;
if(arguments.length){return h=this.options.values[i],h=this._trimAlignValue(h),h
}k=this.options.values.slice();
for(j=0;
j<k.length;
j+=1){k[j]=this._trimAlignValue(k[j])
}return k
},_trimAlignValue:function(i){if(i<=this._valueMin()){return this._valueMin()
}if(i>=this._valueMax()){return this._valueMax()
}var h=this.options.step>0?this.options.step:1,k=(i-this._valueMin())%h,j=i-k;
return Math.abs(k)*2>=h&&(j+=k>0?h:-h),parseFloat(j.toFixed(5))
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max
},_refreshValue:function(){var t=this.options.range,s=this.options,r=this,q=this._animateOff?!1:s.animate,p,o={},n,m,l,a;
this.options.values&&this.options.values.length?this.handles.each(function(c,h){p=(r.values(c)-r._valueMin())/(r._valueMax()-r._valueMin())*100,o[r.orientation==="horizontal"?"left":"bottom"]=p+"%",e(this).stop(1,1)[q?"animate":"css"](o,s.animate),r.options.range===!0&&(r.orientation==="horizontal"?(c===0&&r.range.stop(1,1)[q?"animate":"css"]({left:p+"%"},s.animate),c===1&&r.range[q?"animate":"css"]({width:p-n+"%"},{queue:!1,duration:s.animate})):(c===0&&r.range.stop(1,1)[q?"animate":"css"]({bottom:p+"%"},s.animate),c===1&&r.range[q?"animate":"css"]({height:p-n+"%"},{queue:!1,duration:s.animate}))),n=p
}):(m=this.value(),l=this._valueMin(),a=this._valueMax(),p=a!==l?(m-l)/(a-l)*100:0,o[r.orientation==="horizontal"?"left":"bottom"]=p+"%",this.handle.stop(1,1)[q?"animate":"css"](o,s.animate),t==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[q?"animate":"css"]({width:p+"%"},s.animate),t==="max"&&this.orientation==="horizontal"&&this.range[q?"animate":"css"]({width:100-p+"%"},{queue:!1,duration:s.animate}),t==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[q?"animate":"css"]({height:p+"%"},s.animate),t==="max"&&this.orientation==="vertical"&&this.range[q?"animate":"css"]({height:100-p+"%"},{queue:!1,duration:s.animate}))
}}),e.extend(e.ui.slider,{version:"1.8.24"})
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.tabs.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(i,h){function k(){return ++m
}function j(){return ++l
}var m=0,l=0;
i.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:!1,cookie:null,collapsible:!1,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(!0)
},_setOption:function(d,c){if(d=="selected"){if(this.options.collapsible&&c==this.options.selected){return
}this.select(c)
}else{this.options[d]=c,this._tabify()
}},_tabId:function(b){return b.title&&b.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+k()
},_sanitizeSelector:function(b){return b.replace(/:/g,"\\:")
},_cookie:function(){var a=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+j());
return i.cookie.apply(null,[a].concat(i.makeArray(arguments)))
},_ui:function(d,c){return{tab:d,panel:c,index:this.anchors.index(d)}
},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var a=i(this);
a.html(a.data("label.tabs")).removeData("label.tabs")
})
},_tabify:function(z){function p(d,e){d.css("display",""),!i.support.opacity&&e.opacity&&d[0].style.removeAttribute("filter")
}var y=this,x=this.options,w=/^#.+/;
this.list=this.element.find("ol,ul").eq(0),this.lis=i(" > li:has(a[href])",this.list),this.anchors=this.lis.map(function(){return i("a",this)[0]
}),this.panels=i([]),this.anchors.each(function(d,B){var A=i(B).attr("href"),o=A.split("#")[0],n;
o&&(o===location.toString().split("#")[0]||(n=i("base")[0])&&o===n.href)&&(A=B.hash,B.href=A);
if(w.test(A)){y.panels=y.panels.add(y.element.find(y._sanitizeSelector(A)))
}else{if(A&&A!=="#"){i.data(B,"href.tabs",A),i.data(B,"load.tabs",A.replace(/#.*$/,""));
var f=y._tabId(B);
B.href="#"+f;
var e=y.element.find("#"+f);
e.length||(e=i(x.panelTemplate).attr("id",f).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(y.panels[d-1]||y.list),e.data("destroy.tabs",!0)),y.panels=y.panels.add(e)
}else{x.disabled.push(d)
}}}),z?(this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"),this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.lis.addClass("ui-state-default ui-corner-top"),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"),x.selected===h?(location.hash&&this.anchors.each(function(d,c){if(c.hash==location.hash){return x.selected=d,!1
}}),typeof x.selected!="number"&&x.cookie&&(x.selected=parseInt(y._cookie(),10)),typeof x.selected!="number"&&this.lis.filter(".ui-tabs-selected").length&&(x.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))),x.selected=x.selected||(this.lis.length?0:-1)):x.selected===null&&(x.selected=-1),x.selected=x.selected>=0&&this.anchors[x.selected]||x.selected<0?x.selected:0,x.disabled=i.unique(x.disabled.concat(i.map(this.lis.filter(".ui-state-disabled"),function(d,c){return y.lis.index(d)
}))).sort(),i.inArray(x.selected,x.disabled)!=-1&&x.disabled.splice(i.inArray(x.selected,x.disabled),1),this.panels.addClass("ui-tabs-hide"),this.lis.removeClass("ui-tabs-selected ui-state-active"),x.selected>=0&&this.anchors.length&&(y.element.find(y._sanitizeSelector(y.anchors[x.selected].hash)).removeClass("ui-tabs-hide"),this.lis.eq(x.selected).addClass("ui-tabs-selected ui-state-active"),y.element.queue("tabs",function(){y._trigger("show",null,y._ui(y.anchors[x.selected],y.element.find(y._sanitizeSelector(y.anchors[x.selected].hash))[0]))
}),this.load(x.selected)),i(window).bind("unload",function(){y.lis.add(y.anchors).unbind(".tabs"),y.lis=y.anchors=y.panels=null
})):x.selected=this.lis.index(this.lis.filter(".ui-tabs-selected")),this.element[x.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible"),x.cookie&&this._cookie(x.selected,x.cookie);
for(var v=0,u;
u=this.lis[v];
v++){i(u)[i.inArray(v,x.disabled)!=-1&&!i(u).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")
}x.cache===!1&&this.anchors.removeData("cache.tabs"),this.lis.add(this.anchors).unbind(".tabs");
if(x.event!=="mouseover"){var t=function(d,c){c.is(":not(.ui-state-disabled)")&&c.addClass("ui-state-"+d)
},s=function(d,c){c.removeClass("ui-state-"+d)
};
this.lis.bind("mouseover.tabs",function(){t("hover",i(this))
}),this.lis.bind("mouseout.tabs",function(){s("hover",i(this))
}),this.anchors.bind("focus.tabs",function(){t("focus",i(this).closest("li"))
}),this.anchors.bind("blur.tabs",function(){s("focus",i(this).closest("li"))
})
}var r,q;
x.fx&&(i.isArray(x.fx)?(r=x.fx[0],q=x.fx[1]):r=q=x.fx);
var b=q?function(d,e){i(d).closest("li").addClass("ui-tabs-selected ui-state-active"),e.hide().removeClass("ui-tabs-hide").animate(q,q.duration||"normal",function(){p(e,q),y._trigger("show",null,y._ui(d,e[0]))
})
}:function(d,e){i(d).closest("li").addClass("ui-tabs-selected ui-state-active"),e.removeClass("ui-tabs-hide"),y._trigger("show",null,y._ui(d,e[0]))
},a=r?function(d,c){c.animate(r,r.duration||"normal",function(){y.lis.removeClass("ui-tabs-selected ui-state-active"),c.addClass("ui-tabs-hide"),p(c,r),y.element.dequeue("tabs")
})
}:function(e,d,f){y.lis.removeClass("ui-tabs-selected ui-state-active"),d.addClass("ui-tabs-hide"),y.element.dequeue("tabs")
};
this.anchors.bind(x.event+".tabs",function(){var d=this,o=i(d).closest("li"),n=y.panels.filter(":not(.ui-tabs-hide)"),e=y.element.find(y._sanitizeSelector(d.hash));
if(o.hasClass("ui-tabs-selected")&&!x.collapsible||o.hasClass("ui-state-disabled")||o.hasClass("ui-state-processing")||y.panels.filter(":animated").length||y._trigger("select",null,y._ui(this,e[0]))===!1){return this.blur(),!1
}x.selected=y.anchors.index(this),y.abort();
if(x.collapsible){if(o.hasClass("ui-tabs-selected")){return x.selected=-1,x.cookie&&y._cookie(x.selected,x.cookie),y.element.queue("tabs",function(){a(d,n)
}).dequeue("tabs"),this.blur(),!1
}if(!n.length){return x.cookie&&y._cookie(x.selected,x.cookie),y.element.queue("tabs",function(){b(d,e)
}),y.load(y.anchors.index(this)),this.blur(),!1
}}x.cookie&&y._cookie(x.selected,x.cookie);
if(e.length){n.length&&y.element.queue("tabs",function(){a(d,n)
}),y.element.queue("tabs",function(){b(d,e)
}),y.load(y.anchors.index(this))
}else{throw"jQuery UI Tabs: Mismatching fragment identifier."
}i.browser.msie&&this.blur()
}),this.anchors.bind("click.tabs",function(){return !1
})
},_getIndex:function(b){return typeof b=="string"&&(b=this.anchors.index(this.anchors.filter("[href$='"+b+"']"))),b
},destroy:function(){var a=this.options;
return this.abort(),this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"),this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"),this.anchors.each(function(){var d=i.data(this,"href.tabs");
d&&(this.href=d);
var e=i(this).unbind(".tabs");
i.each(["href","load","cache"],function(f,c){e.removeData(c+".tabs")
})
}),this.lis.unbind(".tabs").add(this.panels).each(function(){i.data(this,"destroy.tabs")?i(this).remove():i(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))
}),a.cookie&&this._cookie(null,a.cookie),this
},add:function(s,r,q){q===h&&(q=this.anchors.length);
var p=this,o=this.options,n=i(o.tabTemplate.replace(/#\{href\}/g,s).replace(/#\{label\}/g,r)),b=s.indexOf("#")?this._tabId(i("a",n)[0]):s.replace("#","");
n.addClass("ui-state-default ui-corner-top").data("destroy.tabs",!0);
var a=p.element.find("#"+b);
return a.length||(a=i(o.panelTemplate).attr("id",b).data("destroy.tabs",!0)),a.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"),q>=this.lis.length?(n.appendTo(this.list),a.appendTo(this.list[0].parentNode)):(n.insertBefore(this.lis[q]),a.insertBefore(this.panels[q])),o.disabled=i.map(o.disabled,function(d,c){return d>=q?++d:d
}),this._tabify(),this.anchors.length==1&&(o.selected=0,n.addClass("ui-tabs-selected ui-state-active"),a.removeClass("ui-tabs-hide"),this.element.queue("tabs",function(){p._trigger("show",null,p._ui(p.anchors[0],p.panels[0]))
}),this.load(0)),this._trigger("add",null,this._ui(this.anchors[q],this.panels[q])),this
},remove:function(a){a=this._getIndex(a);
var o=this.options,n=this.lis.eq(a).remove(),f=this.panels.eq(a).remove();
return n.hasClass("ui-tabs-selected")&&this.anchors.length>1&&this.select(a+(a+1<this.anchors.length?1:-1)),o.disabled=i.map(i.grep(o.disabled,function(b,d){return b!=a
}),function(b,d){return b>=a?--b:b
}),this._tabify(),this._trigger("remove",null,this._ui(n.find("a")[0],f[0])),this
},enable:function(a){a=this._getIndex(a);
var d=this.options;
if(i.inArray(a,d.disabled)==-1){return
}return this.lis.eq(a).removeClass("ui-state-disabled"),d.disabled=i.grep(d.disabled,function(b,e){return b!=a
}),this._trigger("enable",null,this._ui(this.anchors[a],this.panels[a])),this
},disable:function(e){e=this._getIndex(e);
var d=this,f=this.options;
return e!=f.selected&&(this.lis.eq(e).addClass("ui-state-disabled"),f.disabled.push(e),f.disabled.sort(),this._trigger("disable",null,this._ui(this.anchors[e],this.panels[e]))),this
},select:function(b){b=this._getIndex(b);
if(b==-1){if(this.options.collapsible&&this.options.selected!=-1){b=this.options.selected
}else{return this
}}return this.anchors.eq(b).trigger(this.options.event+".tabs"),this
},load:function(a){a=this._getIndex(a);
var r=this,q=this.options,p=this.anchors.eq(a)[0],o=i.data(p,"load.tabs");
this.abort();
if(!o||this.element.queue("tabs").length!==0&&i.data(p,"cache.tabs")){this.element.dequeue("tabs");
return
}this.lis.eq(a).addClass("ui-state-processing");
if(q.spinner){var n=i("span",p);
n.data("label.tabs",n.html()).html(q.spinner)
}return this.xhr=i.ajax(i.extend({},q.ajaxOptions,{url:o,success:function(d,c){r.element.find(r._sanitizeSelector(p.hash)).html(d),r._cleanup(),q.cache&&i.data(p,"cache.tabs",!0),r._trigger("load",null,r._ui(r.anchors[a],r.panels[a]));
try{q.ajaxOptions.success(d,c)
}catch(b){}},error:function(b,d,c){r._cleanup(),r._trigger("load",null,r._ui(r.anchors[a],r.panels[a]));
try{q.ajaxOptions.error(b,d,a,p)
}catch(c){}}})),r.element.dequeue("tabs"),this
},abort:function(){return this.element.queue([]),this.panels.stop(!1,!0),this.element.queue("tabs",this.element.queue("tabs").splice(-2,2)),this.xhr&&(this.xhr.abort(),delete this.xhr),this._cleanup(),this
},url:function(d,c){return this.anchors.eq(d).removeData("cache.tabs").data("load.tabs",c),this
},length:function(){return this.anchors.length
}}),i.extend(i.ui.tabs,{version:"1.8.24"}),i.extend(i.ui.tabs.prototype,{rotation:null,rotate:function(o,n){var s=this,r=this.options,q=s._rotate||(s._rotate=function(a){clearTimeout(s.rotation),s.rotation=setTimeout(function(){var b=r.selected;
s.select(++b<s.anchors.length?b:0)
},o),a&&a.stopPropagation()
}),p=s._unrotate||(s._unrotate=n?function(b){q()
}:function(b){b.clientX&&s.rotate(null)
});
return o?(this.element.bind("tabsshow",q),this.anchors.bind(r.event+".tabs",p),q()):(clearTimeout(s.rotation),this.element.unbind("tabsshow",q),this.anchors.unbind(r.event+".tabs",p),delete this._rotate,delete this._unrotate),this
}})
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.datepicker.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
}function bindHover(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return a.bind("mouseout",function(a){var c=$(a.target).closest(b);
if(!c.length){return
}c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
}).bind("mouseover",function(c){var d=$(c.target).closest(b);
if($.datepicker._isDisabledDatepicker(instActive.inline?a.parent()[0]:instActive.input[0])||!d.length){return
}d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),d.addClass("ui-state-hover"),d.hasClass("ui-datepicker-prev")&&d.addClass("ui-datepicker-prev-hover"),d.hasClass("ui-datepicker-next")&&d.addClass("ui-datepicker-next-hover")
})
}function extendRemove(a,b){$.extend(a,b);
for(var c in b){if(b[c]==null||b[c]==undefined){a[c]=b[c]
}}return a
}function isArray(a){return a&&($.browser.safari&&typeof a=="object"&&a.length||a.constructor&&a.constructor.toString().match(/\Array\(\)/))
}$.extend($.ui,{datepicker:{version:"1.8.24"}});
var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;
$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)
},_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(a){return extendRemove(this._defaults,a||{}),this
},_attachDatepicker:function(target,settings){var inlineSettings=null;
for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);
if(attrValue){inlineSettings=inlineSettings||{};
try{inlineSettings[attrName]=eval(attrValue)
}catch(err){inlineSettings[attrName]=attrValue
}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";
target.id||(this.uuid+=1,target.id="dp"+this.uuid);
var inst=this._newInst($(target),inline);
inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)
},_newInst:function(a,b){var c=a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");
return{id:c,input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:b?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}
},_connectDatepicker:function(a,b){var c=$(a);
b.append=$([]),b.trigger=$([]);
if(c.hasClass(this.markerClassName)){return
}this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(a,c,d){b.settings[c]=d
}).bind("getData.datepicker",function(a,c){return this._get(b,c)
}),this._autoSize(b),$.data(a,PROP_NAME,b),b.settings.disabled&&this._disableDatepicker(a)
},_attachments:function(a,b){var c=this._get(b,"appendText"),d=this._get(b,"isRTL");
b.append&&b.append.remove(),c&&(b.append=$('<span class="'+this._appendClass+'">'+c+"</span>"),a[d?"before":"after"](b.append)),a.unbind("focus",this._showDatepicker),b.trigger&&b.trigger.remove();
var e=this._get(b,"showOn");
(e=="focus"||e=="both")&&a.focus(this._showDatepicker);
if(e=="button"||e=="both"){var f=this._get(b,"buttonText"),g=this._get(b,"buttonImage");
b.trigger=$(this._get(b,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:g,alt:f,title:f}):$('<button type="button"></button>').addClass(this._triggerClass).html(g==""?f:$("<img/>").attr({src:g,alt:f,title:f}))),a[d?"before":"after"](b.trigger),b.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==a[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=a[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(a[0])):$.datepicker._showDatepicker(a[0]),!1
})
}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");
if(c.match(/[DM]/)){var d=function(a){var b=0,c=0;
for(var d=0;
d<a.length;
d++){a[d].length>b&&(b=a[d].length,c=d)
}return c
};
b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())
}a.input.attr("size",this._formatDate(a,b).length)
}},_inlineDatepicker:function(a,b){var c=$(a);
if(c.hasClass(this.markerClassName)){return
}c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d
}).bind("getData.datepicker",function(a,c){return this._get(b,c)
}),$.data(a,PROP_NAME,b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),b.dpDiv.css("display","block")
},_dialogDatepicker:function(a,b,c,d,e){var f=this._dialogInst;
if(!f){this.uuid+=1;
var g="dp"+this.uuid;
this._dialogInput=$('<input type="text" id="'+g+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),f=this._dialogInst=this._newInst(this._dialogInput,!1),f.settings={},$.data(this._dialogInput[0],PROP_NAME,f)
}extendRemove(f.settings,d||{}),b=b&&b.constructor==Date?this._formatDate(f,b):b,this._dialogInput.val(b),this._pos=e?e.length?e:[e.pageX,e.pageY]:null;
if(!this._pos){var h=document.documentElement.clientWidth,i=document.documentElement.clientHeight,j=document.documentElement.scrollLeft||document.body.scrollLeft,k=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=[h/2-100+j,i/2-150+k]
}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),f.settings.onSelect=c,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,f),this
},_destroyDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);
if(!b.hasClass(this.markerClassName)){return
}var d=a.nodeName.toLowerCase();
$.removeData(a,PROP_NAME),d=="input"?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(d=="div"||d=="span")&&b.removeClass(this.markerClassName).empty()
},_enableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);
if(!b.hasClass(this.markerClassName)){return
}var d=a.nodeName.toLowerCase();
if(d=="input"){a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1
}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);
e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
}}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b
})
},_disableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);
if(!b.hasClass(this.markerClassName)){return
}var d=a.nodeName.toLowerCase();
if(d=="input"){a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0
}).end().filter("img").css({opacity:"0.5",cursor:"default"})
}else{if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);
e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")
}}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b
}),this._disabledInputs[this._disabledInputs.length]=a
},_isDisabledDatepicker:function(a){if(!a){return !1
}for(var b=0;
b<this._disabledInputs.length;
b++){if(this._disabledInputs[b]==a){return !0
}}return !1
},_getInst:function(a){try{return $.data(a,PROP_NAME)
}catch(b){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(a,b,c){var d=this._getInst(a);
if(arguments.length==2&&typeof b=="string"){return b=="defaults"?$.extend({},$.datepicker._defaults):d?b=="all"?$.extend({},d.settings):this._get(d,b):null
}var e=b||{};
typeof b=="string"&&(e={},e[b]=c);
if(d){this._curInst==d&&this._hideDatepicker();
var f=this._getDateDatepicker(a,!0),g=this._getMinMaxDate(d,"min"),h=this._getMinMaxDate(d,"max");
extendRemove(d.settings,e),g!==null&&e.dateFormat!==undefined&&e.minDate===undefined&&(d.settings.minDate=this._formatDate(d,g)),h!==null&&e.dateFormat!==undefined&&e.maxDate===undefined&&(d.settings.maxDate=this._formatDate(d,h)),this._attachments($(a),d),this._autoSize(d),this._setDate(d,f),this._updateAlternate(d),this._updateDatepicker(d)
}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)
},_refreshDatepicker:function(a){var b=this._getInst(a);
b&&this._updateDatepicker(b)
},_setDateDatepicker:function(a,b){var c=this._getInst(a);
c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))
},_getDateDatepicker:function(a,b){var c=this._getInst(a);
return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null
},_doKeyDown:function(a){var b=$.datepicker._getInst(a.target),c=!0,d=b.dpDiv.is(".ui-datepicker-rtl");
b._keyEvent=!0;
if($.datepicker._datepickerShowing){switch(a.keyCode){case 9:$.datepicker._hideDatepicker(),c=!1;
break;
case 13:var e=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",b.dpDiv);
e[0]&&$.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,e[0]);
var f=$.datepicker._get(b,"onSelect");
if(f){var g=$.datepicker._formatDate(b);
f.apply(b.input?b.input[0]:null,[g,b])
}else{$.datepicker._hideDatepicker()
}return !1;
case 27:$.datepicker._hideDatepicker();
break;
case 33:$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");
break;
case 34:$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");
break;
case 35:(a.ctrlKey||a.metaKey)&&$.datepicker._clearDate(a.target),c=a.ctrlKey||a.metaKey;
break;
case 36:(a.ctrlKey||a.metaKey)&&$.datepicker._gotoToday(a.target),c=a.ctrlKey||a.metaKey;
break;
case 37:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?1:-1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");
break;
case 38:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,-7,"D"),c=a.ctrlKey||a.metaKey;
break;
case 39:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?-1:1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");
break;
case 40:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,7,"D"),c=a.ctrlKey||a.metaKey;
break;
default:c=!1
}}else{a.keyCode==36&&a.ctrlKey?$.datepicker._showDatepicker(this):c=!1
}c&&(a.preventDefault(),a.stopPropagation())
},_doKeyPress:function(a){var b=$.datepicker._getInst(a.target);
if($.datepicker._get(b,"constrainInput")){var c=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),d=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);
return a.ctrlKey||a.metaKey||d<" "||!c||c.indexOf(d)>-1
}},_doKeyUp:function(a){var b=$.datepicker._getInst(a.target);
if(b.input.val()!=b.lastVal){try{var c=$.datepicker.parseDate($.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,$.datepicker._getFormatConfig(b));
c&&($.datepicker._setDateFromField(b),$.datepicker._updateAlternate(b),$.datepicker._updateDatepicker(b))
}catch(d){$.datepicker.log(d)
}}return !0
},_showDatepicker:function(a){a=a.target||a,a.nodeName.toLowerCase()!="input"&&(a=$("input",a.parentNode)[0]);
if($.datepicker._isDisabledDatepicker(a)||$.datepicker._lastInput==a){return
}var b=$.datepicker._getInst(a);
$.datepicker._curInst&&$.datepicker._curInst!=b&&($.datepicker._curInst.dpDiv.stop(!0,!0),b&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
var c=$.datepicker._get(b,"beforeShow"),d=c?c.apply(a,[a,b]):{};
if(d===!1){return
}extendRemove(b.settings,d),b.lastVal=null,$.datepicker._lastInput=a,$.datepicker._setDateFromField(b),$.datepicker._inDialog&&(a.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(a),$.datepicker._pos[1]+=a.offsetHeight);
var e=!1;
$(a).parents().each(function(){return e|=$(this).css("position")=="fixed",!e
}),e&&$.browser.opera&&($.datepicker._pos[0]-=document.documentElement.scrollLeft,$.datepicker._pos[1]-=document.documentElement.scrollTop);
var f={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};
$.datepicker._pos=null,b.dpDiv.empty(),b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(b),f=$.datepicker._checkOffset(b,f,e),b.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":e?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"});
if(!b.inline){var g=$.datepicker._get(b,"showAnim"),h=$.datepicker._get(b,"duration"),i=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");
if(!!a.length){var c=$.datepicker._getBorders(b.dpDiv);
a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})
}};
b.dpDiv.zIndex($(a).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&$.effects[g]?b.dpDiv.show(g,$.datepicker._get(b,"showOptions"),h,i):b.dpDiv[g||"show"](g?h:null,i),(!g||!h)&&i(),b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus(),$.datepicker._curInst=b
}},_updateDatepicker:function(a){var b=this;
b.maxRows=4;
var c=$.datepicker._getBorders(a.dpDiv);
instActive=a,a.dpDiv.empty().append(this._generateHTML(a)),this._attachHandlers(a);
var d=a.dpDiv.find("iframe.ui-datepicker-cover");
!d.length||d.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}),a.dpDiv.find("."+this._dayOverClass+" a").mouseover();
var e=this._getNumberOfMonths(a),f=e[1],g=17;
a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&a.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",g*f+"em"),a.dpDiv[(e[0]!=1||e[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a==$.datepicker._curInst&&$.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();
if(a.yearshtml){var h=a.yearshtml;
setTimeout(function(){h===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml),h=a.yearshtml=null
},0)
}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a
};
return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]
},_checkOffset:function(a,b,c){var d=a.dpDiv.outerWidth(),e=a.dpDiv.outerHeight(),f=a.input?a.input.outerWidth():0,g=a.input?a.input.outerHeight():0,h=document.documentElement.clientWidth+(c?0:$(document).scrollLeft()),i=document.documentElement.clientHeight+(c?0:$(document).scrollTop());
return b.left-=this._get(a,"isRTL")?d-f:0,b.left-=c&&b.left==a.input.offset().left?$(document).scrollLeft():0,b.top-=c&&b.top==a.input.offset().top+g?$(document).scrollTop():0,b.left-=Math.min(b.left,b.left+d>h&&h>d?Math.abs(b.left+d-h):0),b.top-=Math.min(b.top,b.top+e>i&&i>e?Math.abs(e+g):0),b
},_findPos:function(a){var b=this._getInst(a),c=this._get(b,"isRTL");
while(a&&(a.type=="hidden"||a.nodeType!=1||$.expr.filters.hidden(a))){a=a[c?"previousSibling":"nextSibling"]
}var d=$(a).offset();
return[d.left,d.top]
},_hideDatepicker:function(a){var b=this._curInst;
if(!b||a&&b!=$.data(a,PROP_NAME)){return
}if(this._datepickerShowing){var c=this._get(b,"showAnim"),d=this._get(b,"duration"),e=function(){$.datepicker._tidyDialog(b)
};
$.effects&&$.effects[c]?b.dpDiv.hide(c,$.datepicker._get(b,"showOptions"),d,e):b.dpDiv[c=="slideDown"?"slideUp":c=="fadeIn"?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1;
var f=this._get(b,"onClose");
f&&f.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1
}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(a){if(!$.datepicker._curInst){return
}var b=$(a.target),c=$.datepicker._getInst(b[0]);
(b[0].id!=$.datepicker._mainDivId&&b.parents("#"+$.datepicker._mainDivId).length==0&&!b.hasClass($.datepicker.markerClassName)&&!b.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||b.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=c)&&$.datepicker._hideDatepicker()
},_adjustDate:function(a,b,c){var d=$(a),e=this._getInst(d[0]);
if(this._isDisabledDatepicker(d[0])){return
}this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e)
},_gotoToday:function(a){var b=$(a),c=this._getInst(b[0]);
if(this._get(c,"gotoCurrent")&&c.currentDay){c.selectedDay=c.currentDay,c.drawMonth=c.selectedMonth=c.currentMonth,c.drawYear=c.selectedYear=c.currentYear
}else{var d=new Date;
c.selectedDay=d.getDate(),c.drawMonth=c.selectedMonth=d.getMonth(),c.drawYear=c.selectedYear=d.getFullYear()
}this._notifyChange(c),this._adjustDate(b)
},_selectMonthYear:function(a,b,c){var d=$(a),e=this._getInst(d[0]);
e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10),this._notifyChange(e),this._adjustDate(d)
},_selectDay:function(a,b,c,d){var e=$(a);
if($(d).hasClass(this._unselectableClass)||this._isDisabledDatepicker(e[0])){return
}var f=this._getInst(e[0]);
f.selectedDay=f.currentDay=$("a",d).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))
},_clearDate:function(a){var b=$(a),c=this._getInst(b[0]);
this._selectDate(b,"")
},_selectDate:function(a,b){var c=$(a),d=this._getInst(c[0]);
b=b!=null?b:this._formatDate(d),d.input&&d.input.val(b),this._updateAlternate(d);
var e=this._get(d,"onSelect");
e?e.apply(d.input?d.input[0]:null,[b,d]):d.input&&d.input.trigger("change"),d.inline?this._updateDatepicker(d):(this._hideDatepicker(),this._lastInput=d.input[0],typeof d.input[0]!="object"&&d.input.focus(),this._lastInput=null)
},_updateAlternate:function(a){var b=this._get(a,"altField");
if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),d=this._getDate(a),e=this.formatDate(c,d,this._getFormatConfig(a));
$(b).each(function(){$(this).val(e)
})
}},noWeekends:function(a){var b=a.getDay();
return[b>0&&b<6,""]
},iso8601Week:function(a){var b=new Date(a.getTime());
b.setDate(b.getDate()+4-(b.getDay()||7));
var c=b.getTime();
return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/86400000)/7)+1
},parseDate:function(a,b,c){if(a==null||b==null){throw"Invalid arguments"
}b=typeof b=="object"?b.toString():b+"";
if(b==""){return null
}var d=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;
d=typeof d!="string"?d:(new Date).getFullYear()%100+parseInt(d,10);
var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=-1,j=-1,k=-1,l=-1,m=!1,n=function(b){var c=s+1<a.length&&a.charAt(s+1)==b;
return c&&s++,c
},o=function(a){var c=n(a),d=a=="@"?14:a=="!"?20:a=="y"&&c?4:a=="o"?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=b.substring(r).match(e);
if(!f){throw"Missing number at position "+r
}return r+=f[0].length,parseInt(f[0],10)
},p=function(a,c,d){var e=$.map(n(a)?d:c,function(a,b){return[[b,a]]
}).sort(function(a,b){return -(a[1].length-b[1].length)
}),f=-1;
$.each(e,function(a,c){var d=c[1];
if(b.substr(r,d.length).toLowerCase()==d.toLowerCase()){return f=c[0],r+=d.length,!1
}});
if(f!=-1){return f+1
}throw"Unknown name at position "+r
},q=function(){if(b.charAt(r)!=a.charAt(s)){throw"Unexpected literal at position "+r
}r++
},r=0;
for(var s=0;
s<a.length;
s++){if(m){a.charAt(s)=="'"&&!n("'")?m=!1:q()
}else{switch(a.charAt(s)){case"d":k=o("d");
break;
case"D":p("D",e,f);
break;
case"o":l=o("o");
break;
case"m":j=o("m");
break;
case"M":j=p("M",g,h);
break;
case"y":i=o("y");
break;
case"@":var t=new Date(o("@"));
i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();
break;
case"!":var t=new Date((o("!")-this._ticksTo1970)/10000);
i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();
break;
case"'":n("'")?q():m=!0;
break;
default:q()
}}}if(r<b.length){throw"Extra/unparsed characters found in date: "+b.substring(r)
}i==-1?i=(new Date).getFullYear():i<100&&(i+=(new Date).getFullYear()-(new Date).getFullYear()%100+(i<=d?0:-100));
if(l>-1){j=1,k=l;
do{var u=this._getDaysInMonth(i,j-1);
if(k<=u){break
}j++,k-=u
}while(!0)
}var t=this._daylightSavingAdjust(new Date(i,j-1,k));
if(t.getFullYear()!=i||t.getMonth()+1!=j||t.getDate()!=k){throw"Invalid date"
}return t
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*10000000,formatDate:function(a,b,c){if(!b){return""
}var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,e=(c?c.dayNames:null)||this._defaults.dayNames,f=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,h=function(b){var c=m+1<a.length&&a.charAt(m+1)==b;
return c&&m++,c
},i=function(a,b,c){var d=""+b;
if(h(a)){while(d.length<c){d="0"+d
}}return d
},j=function(a,b,c,d){return h(a)?d[b]:c[b]
},k="",l=!1;
if(b){for(var m=0;
m<a.length;
m++){if(l){a.charAt(m)=="'"&&!h("'")?l=!1:k+=a.charAt(m)
}else{switch(a.charAt(m)){case"d":k+=i("d",b.getDate(),2);
break;
case"D":k+=j("D",b.getDay(),d,e);
break;
case"o":k+=i("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/86400000),3);
break;
case"m":k+=i("m",b.getMonth()+1,2);
break;
case"M":k+=j("M",b.getMonth(),f,g);
break;
case"y":k+=h("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;
break;
case"@":k+=b.getTime();
break;
case"!":k+=b.getTime()*10000+this._ticksTo1970;
break;
case"'":h("'")?k+="'":l=!0;
break;
default:k+=a.charAt(m)
}}}}return k
},_possibleChars:function(a){var b="",c=!1,d=function(b){var c=e+1<a.length&&a.charAt(e+1)==b;
return c&&e++,c
};
for(var e=0;
e<a.length;
e++){if(c){a.charAt(e)=="'"&&!d("'")?c=!1:b+=a.charAt(e)
}else{switch(a.charAt(e)){case"d":case"m":case"y":case"@":b+="0123456789";
break;
case"D":case"M":return null;
case"'":d("'")?b+="'":c=!0;
break;
default:b+=a.charAt(e)
}}}return b
},_get:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]
},_setDateFromField:function(a,b){if(a.input.val()==a.lastVal){return
}var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e,f;
e=f=this._getDefaultDate(a);
var g=this._getFormatConfig(a);
try{e=this.parseDate(c,d,g)||f
}catch(h){this.log(h),d=b?"":d
}a.selectedDay=e.getDate(),a.drawMonth=a.selectedMonth=e.getMonth(),a.drawYear=a.selectedYear=e.getFullYear(),a.currentDay=d?e.getDate():0,a.currentMonth=d?e.getMonth():0,a.currentYear=d?e.getFullYear():0,this._adjustInstDate(a)
},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))
},_determineDate:function(a,b,c){var d=function(a){var b=new Date;
return b.setDate(b.getDate()+a),b
},e=function(b){try{return $.datepicker.parseDate($.datepicker._get(a,"dateFormat"),b,$.datepicker._getFormatConfig(a))
}catch(c){}var d=(b.toLowerCase().match(/^c/)?$.datepicker._getDate(a):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(b);
while(i){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);
break;
case"w":case"W":g+=parseInt(i[1],10)*7;
break;
case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f));
break;
case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f))
}i=h.exec(b)
}return new Date(e,f,g)
},f=b==null||b===""?c:typeof b=="string"?e(b):typeof b=="number"?isNaN(b)?c:d(b):new Date(b.getTime());
return f=f&&f.toString()=="Invalid Date"?c:f,f&&(f.setHours(0),f.setMinutes(0),f.setSeconds(0),f.setMilliseconds(0)),this._daylightSavingAdjust(f)
},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null
},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));
a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),(e!=a.selectedMonth||f!=a.selectedYear)&&!c&&this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))
},_getDate:function(a){var b=!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));
return b
},_attachHandlers:function(a){var b=this._get(a,"stepMonths"),c="#"+a.id.replace(/\\\\/g,"\\");
a.dpDiv.find("[data-handler]").map(function(){var a={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,-b,"M")
},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(c,+b,"M")
},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()
},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(c)
},selectDay:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1
},selectMonth:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"M"),!1
},selectYear:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(c,this,"Y"),!1
}};
$(this).bind(this.getAttribute("data-event"),a[this.getAttribute("data-handler")])
})
},_generateHTML:function(a){var b=new Date;
b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));
var c=this._get(a,"isRTL"),d=this._get(a,"showButtonPanel"),e=this._get(a,"hideIfNoPrevNext"),f=this._get(a,"navigationAsDateFormat"),g=this._getNumberOfMonths(a),h=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),j=g[0]!=1||g[1]!=1,k=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),l=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),n=a.drawMonth-h,o=a.drawYear;
n<0&&(n+=12,o--);
if(m){var p=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-g[0]*g[1]+1,m.getDate()));
p=l&&p<l?l:p;
while(this._daylightSavingAdjust(new Date(o,n,1))>p){n--,n<0&&(n=11,o--)
}}a.drawMonth=n,a.drawYear=o;
var q=this._get(a,"prevText");
q=f?this.formatDate(q,this._daylightSavingAdjust(new Date(o,n-i,1)),this._getFormatConfig(a)):q;
var r=this._canAdjustMonth(a,-1,o,n)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>":e?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>",s=this._get(a,"nextText");
s=f?this.formatDate(s,this._daylightSavingAdjust(new Date(o,n+i,1)),this._getFormatConfig(a)):s;
var t=this._canAdjustMonth(a,1,o,n)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":e?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>",u=this._get(a,"currentText"),v=this._get(a,"gotoCurrent")&&a.currentDay?k:b;
u=f?this.formatDate(u,v,this._getFormatConfig(a)):u;
var w=a.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(a,"closeText")+"</button>",x=d?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?w:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+u+"</button>":"")+(c?"":w)+"</div>":"",y=parseInt(this._get(a,"firstDay"),10);
y=isNaN(y)?0:y;
var z=this._get(a,"showWeek"),A=this._get(a,"dayNames"),B=this._get(a,"dayNamesShort"),C=this._get(a,"dayNamesMin"),D=this._get(a,"monthNames"),E=this._get(a,"monthNamesShort"),F=this._get(a,"beforeShowDay"),G=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths"),I=this._get(a,"calculateWeek")||this.iso8601Week,J=this._getDefaultDate(a),K="";
for(var L=0;
L<g[0];
L++){var M="";
this.maxRows=4;
for(var N=0;
N<g[1];
N++){var O=this._daylightSavingAdjust(new Date(o,n,a.selectedDay)),P=" ui-corner-all",Q="";
if(j){Q+='<div class="ui-datepicker-group';
if(g[1]>1){switch(N){case 0:Q+=" ui-datepicker-group-first",P=" ui-corner-"+(c?"right":"left");
break;
case g[1]-1:Q+=" ui-datepicker-group-last",P=" ui-corner-"+(c?"left":"right");
break;
default:Q+=" ui-datepicker-group-middle",P=""
}}Q+='">'
}Q+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+P+'">'+(/all|left/.test(P)&&L==0?c?t:r:"")+(/all|right/.test(P)&&L==0?c?r:t:"")+this._generateMonthYearHeader(a,n,o,l,m,L>0||N>0,D,E)+'</div><table class="ui-datepicker-calendar"><thead><tr>';
var R=z?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";
for(var S=0;
S<7;
S++){var T=(S+y)%7;
R+="<th"+((S+y+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+A[T]+'">'+C[T]+"</span></th>"
}Q+=R+"</tr></thead><tbody>";
var U=this._getDaysInMonth(o,n);
o==a.selectedYear&&n==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,U));
var V=(this._getFirstDayOfMonth(o,n)-y+7)%7,W=Math.ceil((V+U)/7),X=j?this.maxRows>W?this.maxRows:W:W;
this.maxRows=X;
var Y=this._daylightSavingAdjust(new Date(o,n,1-V));
for(var Z=0;
Z<X;
Z++){Q+="<tr>";
var _=z?'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(Y)+"</td>":"";
for(var S=0;
S<7;
S++){var ba=F?F.apply(a.input?a.input[0]:null,[Y]):[!0,""],bb=Y.getMonth()!=n,bc=bb&&!H||!ba[0]||l&&Y<l||m&&Y>m;
_+='<td class="'+((S+y+6)%7>=5?" ui-datepicker-week-end":"")+(bb?" ui-datepicker-other-month":"")+(Y.getTime()==O.getTime()&&n==a.selectedMonth&&a._keyEvent||J.getTime()==Y.getTime()&&J.getTime()==O.getTime()?" "+this._dayOverClass:"")+(bc?" "+this._unselectableClass+" ui-state-disabled":"")+(bb&&!G?"":" "+ba[1]+(Y.getTime()==k.getTime()?" "+this._currentClass:"")+(Y.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!bb||G)&&ba[2]?' title="'+ba[2]+'"':"")+(bc?"":' data-handler="selectDay" data-event="click" data-month="'+Y.getMonth()+'" data-year="'+Y.getFullYear()+'"')+">"+(bb&&!G?"&#xa0;":bc?'<span class="ui-state-default">'+Y.getDate()+"</span>":'<a class="ui-state-default'+(Y.getTime()==b.getTime()?" ui-state-highlight":"")+(Y.getTime()==k.getTime()?" ui-state-active":"")+(bb?" ui-priority-secondary":"")+'" href="#">'+Y.getDate()+"</a>")+"</td>",Y.setDate(Y.getDate()+1),Y=this._daylightSavingAdjust(Y)
}Q+=_+"</tr>"
}n++,n>11&&(n=0,o++),Q+="</tbody></table>"+(j?"</div>"+(g[0]>0&&N==g[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),M+=Q
}K+=M
}return K+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),a._keyEvent=!1,K
},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i=this._get(a,"changeMonth"),j=this._get(a,"changeYear"),k=this._get(a,"showMonthAfterYear"),l='<div class="ui-datepicker-title">',m="";
if(f||!i){m+='<span class="ui-datepicker-month">'+g[b]+"</span>"
}else{var n=d&&d.getFullYear()==c,o=e&&e.getFullYear()==c;
m+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
for(var p=0;
p<12;
p++){(!n||p>=d.getMonth())&&(!o||p<=e.getMonth())&&(m+='<option value="'+p+'"'+(p==b?' selected="selected"':"")+">"+h[p]+"</option>")
}m+="</select>"
}k||(l+=m+(f||!i||!j?"&#xa0;":""));
if(!a.yearshtml){a.yearshtml="";
if(f||!j){l+='<span class="ui-datepicker-year">'+c+"</span>"
}else{var q=this._get(a,"yearRange").split(":"),r=(new Date).getFullYear(),s=function(a){var b=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?r+parseInt(a,10):parseInt(a,10);
return isNaN(b)?r:b
},t=s(q[0]),u=Math.max(t,s(q[1]||""));
t=d?Math.max(t,d.getFullYear()):t,u=e?Math.min(u,e.getFullYear()):u,a.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
for(;
t<=u;
t++){a.yearshtml+='<option value="'+t+'"'+(t==c?' selected="selected"':"")+">"+t+"</option>"
}a.yearshtml+="</select>",l+=a.yearshtml,a.yearshtml=null
}}return l+=this._get(a,"yearSuffix"),k&&(l+=(f||!i||!j?"&#xa0;":"")+m),l+="</div>",l
},_adjustInstDate:function(a,b,c){var d=a.drawYear+(c=="Y"?b:0),e=a.drawMonth+(c=="M"?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+(c=="D"?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));
a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),(c=="M"||c=="Y")&&this._notifyChange(a)
},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;
return e=d&&e>d?d:e,e
},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");
b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])
},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");
return b==null?[1,1]:typeof b=="number"?[1,b]:b
},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)
},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()
},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()
},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));
return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)
},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");
return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())
},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");
return b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}
},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);
var e=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));
return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))
}}),$.fn.datepicker=function(a){if(!this.length){return this
}$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv),$.datepicker.initialized=!0);
var b=Array.prototype.slice.call(arguments,1);
return typeof a!="string"||a!="isDisabled"&&a!="getDate"&&a!="widget"?a=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b)):this.each(function(){typeof a=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this].concat(b)):$.datepicker._attachDatepicker(this,a)
}):$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b))
},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.8.24",window["DP_jQuery_"+dpuuid]=$
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.progressbar.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()}),this.valueDiv=d("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this.oldValue=this._value(),this._refreshValue()
},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove(),d.Widget.prototype.destroy.apply(this,arguments)
},value:function(b){return b===c?this._value():(this._setOption("value",b),this)
},_setOption:function(a,e){a==="value"&&(this.options.value=e,this._refreshValue(),this._value()===this.options.max&&this._trigger("complete")),d.Widget.prototype._setOption.apply(this,arguments)
},_value:function(){var b=this.options.value;
return typeof b!="number"&&(b=0),Math.min(this.options.max,Math.max(this.min,b))
},_percentage:function(){return 100*this._value()/this.options.max
},_refreshValue:function(){var f=this.value(),e=this._percentage();
this.oldValue!==f&&(this.oldValue=f,this._trigger("change")),this.valueDiv.toggle(f>this.min).toggleClass("ui-corner-right",f===this.options.max).width(e.toFixed(0)+"%"),this.element.attr("aria-valuenow",f)
}}),d.extend(d.ui.progressbar,{version:"1.8.24"})
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
;
jQuery.effects||function(z,y){function x(a){var d;
return a&&a.constructor==Array&&a.length==3?a:(d=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(a))?[parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10)]:(d=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(a))?[parseFloat(d[1])*2.55,parseFloat(d[2])*2.55,parseFloat(d[3])*2.55]:(d=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(a))?[parseInt(d[1],16),parseInt(d[2],16),parseInt(d[3],16)]:(d=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(a))?[parseInt(d[1]+d[1],16),parseInt(d[2]+d[2],16),parseInt(d[3]+d[3],16)]:(d=/rgba\(0, 0, 0, 0\)/.exec(a))?v.transparent:v[z.trim(a).toLowerCase()]
}function w(a,f){var c;
do{c=(z.curCSS||z.css)(a,f);
if(c!=""&&c!="transparent"||z.nodeName(a,"body")){break
}f="backgroundColor"
}while(a=a.parentNode);
return x(c)
}function s(){var h=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,f={},k,j;
if(h&&h.length&&h[0]&&h[h[0]]){var i=h.length;
while(i--){k=h[i],typeof h[k]=="string"&&(j=k.replace(/\-(\w)/g,function(d,c){return c.toUpperCase()
}),f[j]=h[k])
}}else{for(k in h){typeof h[k]=="string"&&(f[k]=h[k])
}}return f
}function r(a){var f,e;
for(f in a){e=a[f],(e==null||z.isFunction(e)||f in t||/scrollbar/.test(f)||!/color/i.test(f)&&isNaN(parseFloat(e)))&&delete a[f]
}return a
}function q(f,e){var i={_:0},h;
for(h in e){f[h]!=e[h]&&(i[h]=e[h])
}return i
}function p(a,i,h,f){typeof a=="object"&&(f=i,h=null,i=a,a=i.effect),z.isFunction(i)&&(f=i,h=null,i={});
if(typeof i=="number"||z.fx.speeds[i]){f=h,h=i,i={}
}return z.isFunction(h)&&(f=h,h=null),i=i||{},h=h||i.duration,h=z.fx.off?0:typeof h=="number"?h:h in z.fx.speeds?z.fx.speeds[h]:z.fx.speeds._default,f=f||i.complete,[a,i,h,f]
}function o(a){return !a||typeof a=="number"||z.fx.speeds[a]?!0:typeof a=="string"&&!z.effects[a]?!0:!1
}z.effects={},z.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(a,c){z.fx.step[c]=function(b){b.colorInit||(b.start=w(b.elem,c),b.end=x(b.end),b.colorInit=!0),b.elem.style[c]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"
}
});
var v={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},u=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
z.effects.animateClass=function(a,i,h,f){return z.isFunction(h)&&(f=h,h=null),this.queue(function(){var e=z(this),d=e.attr("style")||" ",c=r(s.call(this)),b,j=e.attr("class")||"";
z.each(u,function(k,l){a[l]&&e[l+"Class"](a[l])
}),b=r(s.call(this)),e.attr("class",j),e.animate(q(c,b),{queue:!1,duration:i,easing:h,complete:function(){z.each(u,function(k,l){a[l]&&e[l+"Class"](a[l])
}),typeof e.attr("style")=="object"?(e.attr("style").cssText="",e.attr("style").cssText=d):e.attr("style",d),f&&f.apply(this,arguments),z.dequeue(this)
}})
})
},z.fn.extend({_addClass:z.fn.addClass,addClass:function(a,i,h,f){return i?z.effects.animateClass.apply(this,[{add:a},i,h,f]):this._addClass(a)
},_removeClass:z.fn.removeClass,removeClass:function(a,i,h,f){return i?z.effects.animateClass.apply(this,[{remove:a},i,h,f]):this._removeClass(a)
},_toggleClass:z.fn.toggleClass,toggleClass:function(j,i,h,b,a){return typeof i=="boolean"||i===y?h?z.effects.animateClass.apply(this,[i?{add:j}:{remove:j},h,b,a]):this._toggleClass(j,i):z.effects.animateClass.apply(this,[{toggle:j},i,h,b])
},switchClass:function(a,k,j,i,h){return z.effects.animateClass.apply(this,[{add:k,remove:a},j,i,h])
}}),z.extend(z.effects,{version:"1.8.24",save:function(e,d){for(var f=0;
f<d.length;
f++){d[f]!==null&&e.data("ec.storage."+d[f],e[0].style[d[f]])
}},restore:function(e,d){for(var f=0;
f<d.length;
f++){d[f]!==null&&e.css(d[f],e.data("ec.storage."+d[f]))
}},setMode:function(d,c){return c=="toggle"&&(c=d.is(":hidden")?"show":"hide"),c
},getBaseline:function(f,e){var i,h;
switch(f[0]){case"top":i=0;
break;
case"middle":i=0.5;
break;
case"bottom":i=1;
break;
default:i=f[0]/e.height
}switch(f[1]){case"left":h=0;
break;
case"center":h=0.5;
break;
case"right":h=1;
break;
default:h=f[1]/e.width
}return{x:h,y:i}
},createWrapper:function(a){if(a.parent().is(".ui-effects-wrapper")){return a.parent()
}var k={width:a.outerWidth(!0),height:a.outerHeight(!0),"float":a.css("float")},j=z("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i=document.activeElement;
try{i.id
}catch(h){i=document.body
}return a.wrap(j),(a[0]===i||z.contains(a[0],i))&&z(i).focus(),j=a.parent(),a.css("position")=="static"?(j.css({position:"relative"}),a.css({position:"relative"})):(z.extend(k,{position:a.css("position"),zIndex:a.css("z-index")}),z.each(["top","left","bottom","right"],function(b,c){k[c]=a.css(c),isNaN(parseInt(k[c],10))&&(k[c]="auto")
}),a.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),j.css(k).show()
},removeWrapper:function(a){var f,e=document.activeElement;
return a.parent().is(".ui-effects-wrapper")?(f=a.parent().replaceWith(a),(a[0]===e||z.contains(a[0],e))&&z(e).focus(),f):a
},setTransition:function(a,i,h,f){return f=f||{},z.each(i,function(b,e){var d=a.cssUnit(e);
d[0]>0&&(f[e]=d[0]*h+d[1])
}),f
}}),z.fn.extend({effect:function(a,C,B,A){var m=p.apply(this,arguments),l={options:m[1],duration:m[2],callback:m[3]},k=l.options.mode,j=z.effects[a];
return z.fx.off||!j?k?this[k](l.duration,l.callback):this.each(function(){l.callback&&l.callback.call(this)
}):j.call(this,l)
},_show:z.fn.show,show:function(d){if(o(d)){return this._show.apply(this,arguments)
}var c=p.apply(this,arguments);
return c[1].mode="show",this.effect.apply(this,c)
},_hide:z.fn.hide,hide:function(d){if(o(d)){return this._hide.apply(this,arguments)
}var c=p.apply(this,arguments);
return c[1].mode="hide",this.effect.apply(this,c)
},__toggle:z.fn.toggle,toggle:function(a){if(o(a)||typeof a=="boolean"||z.isFunction(a)){return this.__toggle.apply(this,arguments)
}var d=p.apply(this,arguments);
return d[1].mode="toggle",this.effect.apply(this,d)
},cssUnit:function(a){var f=this.css(a),e=[];
return z.each(["em","px","%","pt"],function(d,c){f.indexOf(c)>0&&(e=[parseFloat(f),c])
}),e
}});
var n={};
z.each(["Quad","Cubic","Quart","Quint","Expo"],function(d,c){n[c]=function(a){return Math.pow(a,d+2)
}
}),z.extend(n,{Sine:function(b){return 1-Math.cos(b*Math.PI/2)
},Circ:function(b){return 1-Math.sqrt(1-b*b)
},Elastic:function(b){return b===0||b===1?b:-Math.pow(2,8*(b-1))*Math.sin(((b-1)*80-7.5)*Math.PI/15)
},Back:function(b){return b*b*(3*b-2)
},Bounce:function(e){var d,f=4;
while(e<((d=Math.pow(2,--f))-1)/11){}return 1/Math.pow(4,3-f)-7.5625*Math.pow((d*3-2)/22-e,2)
}}),z.each(n,function(a,d){z.easing["easeIn"+a]=d,z.easing["easeOut"+a]=function(b){return 1-d(1-b)
},z.easing["easeInOut"+a]=function(b){return b<0.5?d(b*2)/2:d(b*-2+2)/-2+1
}
})
}(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.blind.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.effects.blind=function(a){return this.queue(function(){var q=d(this),p=["position","top","bottom","left","right"],o=d.effects.setMode(q,a.options.mode||"hide"),n=a.options.direction||"vertical";
d.effects.save(q,p),q.show();
var m=d.effects.createWrapper(q).css({overflow:"hidden"}),l=n=="vertical"?"height":"width",k=n=="vertical"?m.height():m.width();
o=="show"&&m.css(l,0);
var b={};
b[l]=o=="show"?k:0,m.animate(b,a.duration,a.options.easing,function(){o=="hide"&&q.hide(),d.effects.restore(q,p),d.effects.removeWrapper(q),a.callback&&a.callback.apply(q[0],arguments),q.dequeue()
})
})
}
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.bounce.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.effects.bounce=function(a){return this.queue(function(){var A=d(this),z=["position","top","bottom","left","right"],y=d.effects.setMode(A,a.options.mode||"effect"),x=a.options.direction||"up",w=a.options.distance||20,v=a.options.times||5,u=a.duration||250;
/show|hide/.test(y)&&z.push("opacity"),d.effects.save(A,z),A.show(),d.effects.createWrapper(A);
var t=x=="up"||x=="down"?"top":"left",s=x=="up"||x=="left"?"pos":"neg",w=a.options.distance||(t=="top"?A.outerHeight(!0)/3:A.outerWidth(!0)/3);
y=="show"&&A.css("opacity",0).css(t,s=="pos"?-w:w),y=="hide"&&(w=w/(v*2)),y!="hide"&&v--;
if(y=="show"){var r={opacity:1};
r[t]=(s=="pos"?"+=":"-=")+w,A.animate(r,u/2,a.options.easing),w=w/2,v--
}for(var q=0;
q<v;
q++){var o={},b={};
o[t]=(s=="pos"?"-=":"+=")+w,b[t]=(s=="pos"?"+=":"-=")+w,A.animate(o,u/2,a.options.easing).animate(b,u/2,a.options.easing),w=y=="hide"?w*2:w/2
}if(y=="hide"){var r={opacity:0};
r[t]=(s=="pos"?"-=":"+=")+w,A.animate(r,u/2,a.options.easing,function(){A.hide(),d.effects.restore(A,z),d.effects.removeWrapper(A),a.callback&&a.callback.apply(this,arguments)
})
}else{var o={},b={};
o[t]=(s=="pos"?"-=":"+=")+w,b[t]=(s=="pos"?"+=":"-=")+w,A.animate(o,u/2,a.options.easing).animate(b,u/2,a.options.easing,function(){d.effects.restore(A,z),d.effects.removeWrapper(A),a.callback&&a.callback.apply(this,arguments)
})
}A.queue("fx",function(){A.dequeue()
}),A.dequeue()
})
}
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.clip.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.effects.clip=function(a){return this.queue(function(){var s=d(this),r=["position","top","bottom","left","right","height","width"],q=d.effects.setMode(s,a.options.mode||"hide"),p=a.options.direction||"vertical";
d.effects.save(s,r),s.show();
var o=d.effects.createWrapper(s).css({overflow:"hidden"}),n=s[0].tagName=="IMG"?o:s,m={size:p=="vertical"?"height":"width",position:p=="vertical"?"top":"left"},l=p=="vertical"?n.height():n.width();
q=="show"&&(n.css(m.size,0),n.css(m.position,l/2));
var b={};
b[m.size]=q=="show"?l:0,b[m.position]=q=="show"?0:l/2,n.animate(b,{queue:!1,duration:a.duration,easing:a.options.easing,complete:function(){q=="hide"&&s.hide(),d.effects.restore(s,r),d.effects.removeWrapper(s),a.callback&&a.callback.apply(s[0],arguments),s.dequeue()
}})
})
}
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.drop.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.effects.drop=function(a){return this.queue(function(){var q=d(this),p=["position","top","bottom","left","right","opacity"],o=d.effects.setMode(q,a.options.mode||"hide"),n=a.options.direction||"left";
d.effects.save(q,p),q.show(),d.effects.createWrapper(q);
var m=n=="up"||n=="down"?"top":"left",l=n=="up"||n=="left"?"pos":"neg",k=a.options.distance||(m=="top"?q.outerHeight(!0)/2:q.outerWidth(!0)/2);
o=="show"&&q.css("opacity",0).css(m,l=="pos"?-k:k);
var b={opacity:o=="show"?1:0};
b[m]=(o=="show"?l=="pos"?"+=":"-=":l=="pos"?"-=":"+=")+k,q.animate(b,{queue:!1,duration:a.duration,easing:a.options.easing,complete:function(){o=="hide"&&q.hide(),d.effects.restore(q,p),d.effects.removeWrapper(q),a.callback&&a.callback.apply(this,arguments),q.dequeue()
}})
})
}
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.explode.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.effects.explode=function(a){return this.queue(function(){var q=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3,p=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3;
a.options.mode=a.options.mode=="toggle"?d(this).is(":visible")?"hide":"show":a.options.mode;
var o=d(this).show().css("visibility","hidden"),n=o.offset();
n.top-=parseInt(o.css("marginTop"),10)||0,n.left-=parseInt(o.css("marginLeft"),10)||0;
var m=o.outerWidth(!0),l=o.outerHeight(!0);
for(var k=0;
k<q;
k++){for(var b=0;
b<p;
b++){o.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-b*(m/p),top:-k*(l/q)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:m/p,height:l/q,left:n.left+b*(m/p)+(a.options.mode=="show"?(b-Math.floor(p/2))*(m/p):0),top:n.top+k*(l/q)+(a.options.mode=="show"?(k-Math.floor(q/2))*(l/q):0),opacity:a.options.mode=="show"?0:1}).animate({left:n.left+b*(m/p)+(a.options.mode=="show"?0:(b-Math.floor(p/2))*(m/p)),top:n.top+k*(l/q)+(a.options.mode=="show"?0:(k-Math.floor(q/2))*(l/q)),opacity:a.options.mode=="show"?1:0},a.duration||500)
}}setTimeout(function(){a.options.mode=="show"?o.css({visibility:"visible"}):o.css({visibility:"visible"}).hide(),a.callback&&a.callback.apply(o[0]),o.dequeue(),d("div.ui-effects-explode").remove()
},a.duration||500)
})
}
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.fade.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.effects.fade=function(a){return this.queue(function(){var e=d(this),b=d.effects.setMode(e,a.options.mode||"hide");
e.animate({opacity:b},{queue:!1,duration:a.duration,easing:a.options.easing,complete:function(){a.callback&&a.callback.apply(this,arguments),e.dequeue()
}})
})
}
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.fold.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.effects.fold=function(a){return this.queue(function(){var A=d(this),z=["position","top","bottom","left","right"],y=d.effects.setMode(A,a.options.mode||"hide"),x=a.options.size||15,w=!!a.options.horizFirst,v=a.duration?a.duration/2:d.fx.speeds._default/2;
d.effects.save(A,z),A.show();
var u=d.effects.createWrapper(A).css({overflow:"hidden"}),t=y=="show"!=w,s=t?["width","height"]:["height","width"],r=t?[u.width(),u.height()]:[u.height(),u.width()],q=/([0-9]+)%/.exec(x);
q&&(x=parseInt(q[1],10)/100*r[y=="hide"?0:1]),y=="show"&&u.css(w?{height:0,width:x}:{height:x,width:0});
var o={},b={};
o[s[0]]=y=="show"?r[0]:x,b[s[1]]=y=="show"?r[1]:0,u.animate(o,v,a.options.easing).animate(b,v,a.options.easing,function(){y=="hide"&&A.hide(),d.effects.restore(A,z),d.effects.removeWrapper(A),a.callback&&a.callback.apply(A[0],arguments),A.dequeue()
})
})
}
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.highlight.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.effects.highlight=function(a){return this.queue(function(){var j=d(this),i=["backgroundImage","backgroundColor","opacity"],h=d.effects.setMode(j,a.options.mode||"show"),b={backgroundColor:j.css("backgroundColor")};
h=="hide"&&(b.opacity=0),d.effects.save(j,i),j.show().css({backgroundImage:"none",backgroundColor:a.options.color||"#ffff99"}).animate(b,{queue:!1,duration:a.duration,easing:a.options.easing,complete:function(){h=="hide"&&j.hide(),d.effects.restore(j,i),h=="show"&&!d.support.opacity&&this.style.removeAttribute("filter"),a.callback&&a.callback.apply(this,arguments),j.dequeue()
}})
})
}
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.pulsate.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.effects.pulsate=function(a){return this.queue(function(){var o=d(this),n=d.effects.setMode(o,a.options.mode||"show"),m=(a.options.times||5)*2-1,l=a.duration?a.duration/2:d.fx.speeds._default/2,k=o.is(":visible"),j=0;
k||(o.css("opacity",0).show(),j=1),(n=="hide"&&k||n=="show"&&!k)&&m--;
for(var b=0;
b<m;
b++){o.animate({opacity:j},l,a.options.easing),j=(j+1)%2
}o.animate({opacity:j},l,a.options.easing,function(){j==0&&o.hide(),a.callback&&a.callback.apply(this,arguments)
}),o.queue("fx",function(){o.dequeue()
}).dequeue()
})
}
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.scale.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.effects.puff=function(a){return this.queue(function(){var k=d(this),j=d.effects.setMode(k,a.options.mode||"hide"),i=parseInt(a.options.percent,10)||150,h=i/100,b={height:k.height(),width:k.width()};
d.extend(a.options,{fade:!0,mode:j,percent:j=="hide"?i:100,from:j=="hide"?b:{height:b.height*h,width:b.width*h}}),k.effect("scale",a.options,a.duration,a.callback),k.dequeue()
})
},d.effects.scale=function(a){return this.queue(function(){var q=d(this),p=d.extend(!0,{},a.options),o=d.effects.setMode(q,a.options.mode||"effect"),n=parseInt(a.options.percent,10)||(parseInt(a.options.percent,10)==0?0:o=="hide"?0:100),m=a.options.direction||"both",l=a.options.origin;
o!="effect"&&(p.origin=l||["middle","center"],p.restore=!0);
var k={height:q.height(),width:q.width()};
q.from=a.options.from||(o=="show"?{height:0,width:0}:k);
var b={y:m!="horizontal"?n/100:1,x:m!="vertical"?n/100:1};
q.to={height:k.height*b.y,width:k.width*b.x},a.options.fade&&(o=="show"&&(q.from.opacity=0,q.to.opacity=1),o=="hide"&&(q.from.opacity=1,q.to.opacity=0)),p.from=q.from,p.to=q.to,p.mode=o,q.effect("size",p,a.duration,a.callback),q.dequeue()
})
},d.effects.size=function(a){return this.queue(function(){var C=d(this),B=["position","top","bottom","left","right","width","height","overflow","opacity"],A=["position","top","bottom","left","right","overflow","opacity"],z=["width","height","overflow"],y=["fontSize"],x=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],w=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],v=d.effects.setMode(C,a.options.mode||"effect"),u=a.options.restore||!1,t=a.options.scale||"both",s=a.options.origin,r={height:C.height(),width:C.width()};
C.from=a.options.from||r,C.to=a.options.to||r;
if(s){var o=d.effects.getBaseline(s,r);
C.from.top=(r.height-C.from.height)*o.y,C.from.left=(r.width-C.from.width)*o.x,C.to.top=(r.height-C.to.height)*o.y,C.to.left=(r.width-C.to.width)*o.x
}var b={from:{y:C.from.height/r.height,x:C.from.width/r.width},to:{y:C.to.height/r.height,x:C.to.width/r.width}};
if(t=="box"||t=="both"){b.from.y!=b.to.y&&(B=B.concat(x),C.from=d.effects.setTransition(C,x,b.from.y,C.from),C.to=d.effects.setTransition(C,x,b.to.y,C.to)),b.from.x!=b.to.x&&(B=B.concat(w),C.from=d.effects.setTransition(C,w,b.from.x,C.from),C.to=d.effects.setTransition(C,w,b.to.x,C.to))
}(t=="content"||t=="both")&&b.from.y!=b.to.y&&(B=B.concat(y),C.from=d.effects.setTransition(C,y,b.from.y,C.from),C.to=d.effects.setTransition(C,y,b.to.y,C.to)),d.effects.save(C,u?B:A),C.show(),d.effects.createWrapper(C),C.css("overflow","hidden").css(C.from);
if(t=="content"||t=="both"){x=x.concat(["marginTop","marginBottom"]).concat(y),w=w.concat(["marginLeft","marginRight"]),z=B.concat(x).concat(w),C.find("*[width]").each(function(){var f=d(this);
u&&d.effects.save(f,z);
var e={height:f.height(),width:f.width()};
f.from={height:e.height*b.from.y,width:e.width*b.from.x},f.to={height:e.height*b.to.y,width:e.width*b.to.x},b.from.y!=b.to.y&&(f.from=d.effects.setTransition(f,x,b.from.y,f.from),f.to=d.effects.setTransition(f,x,b.to.y,f.to)),b.from.x!=b.to.x&&(f.from=d.effects.setTransition(f,w,b.from.x,f.from),f.to=d.effects.setTransition(f,w,b.to.x,f.to)),f.css(f.from),f.animate(f.to,a.duration,a.options.easing,function(){u&&d.effects.restore(f,z)
})
})
}C.animate(C.to,{queue:!1,duration:a.duration,easing:a.options.easing,complete:function(){C.to.opacity===0&&C.css("opacity",C.from.opacity),v=="hide"&&C.hide(),d.effects.restore(C,u?B:A),d.effects.removeWrapper(C),a.callback&&a.callback.apply(this,arguments),C.dequeue()
}})
})
}
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.shake.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.effects.shake=function(a){return this.queue(function(){var A=d(this),z=["position","top","bottom","left","right"],y=d.effects.setMode(A,a.options.mode||"effect"),x=a.options.direction||"left",w=a.options.distance||20,v=a.options.times||3,u=a.duration||a.options.duration||140;
d.effects.save(A,z),A.show(),d.effects.createWrapper(A);
var t=x=="up"||x=="down"?"top":"left",s=x=="up"||x=="left"?"pos":"neg",r={},q={},o={};
r[t]=(s=="pos"?"-=":"+=")+w,q[t]=(s=="pos"?"+=":"-=")+w*2,o[t]=(s=="pos"?"-=":"+=")+w*2,A.animate(r,u,a.options.easing);
for(var b=1;
b<v;
b++){A.animate(q,u,a.options.easing).animate(o,u,a.options.easing)
}A.animate(q,u,a.options.easing).animate(r,u/2,a.options.easing,function(){d.effects.restore(A,z),d.effects.removeWrapper(A),a.callback&&a.callback.apply(this,arguments)
}),A.queue("fx",function(){A.dequeue()
}),A.dequeue()
})
}
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.slide.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.effects.slide=function(a){return this.queue(function(){var q=d(this),p=["position","top","bottom","left","right"],o=d.effects.setMode(q,a.options.mode||"show"),n=a.options.direction||"left";
d.effects.save(q,p),q.show(),d.effects.createWrapper(q).css({overflow:"hidden"});
var m=n=="up"||n=="down"?"top":"left",l=n=="up"||n=="left"?"pos":"neg",k=a.options.distance||(m=="top"?q.outerHeight(!0):q.outerWidth(!0));
o=="show"&&q.css(m,l=="pos"?isNaN(k)?"-"+k:-k:k);
var b={};
b[m]=(o=="show"?l=="pos"?"+=":"-=":l=="pos"?"-=":"+=")+k,q.animate(b,{queue:!1,duration:a.duration,easing:a.options.easing,complete:function(){o=="hide"&&q.hide(),d.effects.restore(q,p),d.effects.removeWrapper(q),a.callback&&a.callback.apply(this,arguments),q.dequeue()
}})
})
}
})(jQuery);
/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.transfer.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d,c){d.effects.transfer=function(a){return this.queue(function(){var m=d(this),l=d(a.options.to),k=l.offset(),j={top:k.top,left:k.left,height:l.innerHeight(),width:l.innerWidth()},i=m.offset(),b=d('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(a.options.className).css({top:i.top,left:i.left,height:m.innerHeight(),width:m.innerWidth(),position:"absolute"}).animate(j,a.duration,a.options.easing,function(){b.remove(),a.callback&&a.callback.apply(m[0],arguments),m.dequeue()
})
})
}
})(jQuery);
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{a(jQuery)
}}(function(f){var a=/\+/g;
function d(j){return b.raw?j:encodeURIComponent(j)
}function h(j){return b.raw?j:decodeURIComponent(j)
}function i(j){return d(b.json?JSON.stringify(j):String(j))
}function c(j){if(j.indexOf('"')===0){j=j.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")
}try{j=decodeURIComponent(j.replace(a," "))
}catch(k){return
}try{return b.json?JSON.parse(j):j
}catch(k){}}function e(k,j){var l=b.raw?k:c(k);
return f.isFunction(j)?j(l):l
}var b=f.cookie=function(q,p,v){if(p!==undefined&&!f.isFunction(p)){v=f.extend({},b.defaults,v);
if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();
u.setDate(u.getDate()+r)
}return(document.cookie=[d(q),"=",i(p),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""))
}var w=q?undefined:{};
var s=document.cookie?document.cookie.split("; "):[];
for(var o=0,m=s.length;
o<m;
o++){var n=s[o].split("=");
var j=h(n.shift());
var k=n.join("=");
if(q&&q===j){w=e(k,p);
break
}if(!q&&(k=e(k))!==undefined){w[j]=k
}}return w
};
b.defaults={};
f.removeCookie=function(k,j){if(f.cookie(k)!==undefined){f.cookie(k,"",f.extend({},j,{expires:-1}));
return true
}return false
}
}));
$(document).ready(function(){$(".fullsite").click(function(a){a.preventDefault();
a.stopPropagation();
if($(this).hasClass("view-mobile")){$.cookie("BCHydroMobile","1",{expires:1,path:"/",domain:".bchydro.com"})
}else{$.cookie("BCHydroMobile","-1",{expires:1,path:"/",domain:".bchydro.com"})
}window.location=$(this).attr("href")
})
});