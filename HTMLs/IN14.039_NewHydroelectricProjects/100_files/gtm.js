
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"507",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.type"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"",["escape",["macro",0],7],"\"==\"front\")return true;else return false})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.noBlocker?void 0:\"true\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"Microsoft Internet Explorer\"==navigator.appName?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"UA-1605085-13",
      "vtp_name":"analytics.id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=ga.getAll(),c;var a=0;for(c=b.length;a\u003Cc;a+=1)if(b[a].get(\"trackingId\")===",["escape",["macro",4],8,16],")return b[a].get(\"clientId\")}catch(d){}return\"false\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.localStorage.getItem(\"jStorage\");return a\u0026\u0026(a=JSON.parse(a),\"object\"===typeof a)?(a=new Date(a.connext_user_data.Subscriptions[0].StartDate),a=(10\u003Ea.getMonth()?\"0\":\"\")+a.getMonth()+\"\/\"+(10\u003Ea.getDate()?\"0\":\"\")+a.getDate()+\"\/\"+a.getFullYear(),\"undefined\"!==typeof a?a:\"No Value Set\"):\"No Value Set\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.localStorage.getItem(\"jStorage\");return a\u0026\u0026(a=JSON.parse(a),\"object\"===typeof a)?(a=a.connext_user_data.Subscriptions[0].StartDate,\"undefined\"!==typeof a?Math.abs(parseInt((new Date-new Date(a))\/864E5)):\"No Value Set\"):\"No Value Set\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"",["escape",["macro",0],7],"\"==\"Article\"||\"",["escape",["macro",0],7],"\"==\"Blog Post\"||\"",["escape",["macro",0],7],"\"==\"Page Miscellaneous\"||\"",["escape",["macro",0],7],"\"==\"article\"||\"",["escape",["macro",0],7],"\"==\"Longform\"||\"",["escape",["macro",0],7],"\"==\"blog post\"||\"",["escape",["macro",0],7],"\"==\"page miscellaneous\"||\"",["escape",["macro",0],7],"\"==\"longform\"||\"",["escape",["macro",0],7],"\"==\"innovation\")return 1;else return 0})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[\"philly.com\",\"inquirer.com\",\"phillydailynews.com\"],a=0;a\u003Cb.length;a++){var c=new RegExp(b[a],\"i\");if(c.test(",["escape",["macro",9],8,16],"))return!0}return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",9],8,16],",b=\"mailto:\";if(a\u0026\u0026-1!==a.indexOf(b))return a.replace(b,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.localStorage.getItem(\"jStorage\");return a\u0026\u0026(a=JSON.parse(a),\"object\"===typeof a)?(a=a.connext_user_data.Subscriptions[0].SubscriptionLevelHousehold,\"undefined\"!==typeof a?a:\"No Value Set\"):\"No Value Set\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.localStorage.getItem(\"jStorage\");if(a\u0026\u0026(a=JSON.parse(a),\"object\"===typeof a)){if(a.hasOwnProperty(\"PHL_prod_MG2SOFTLAUNCHCurrentConversation\"))var b=a.PHL_prod_MG2SOFTLAUNCHCurrentConversationProps.paywallLimit,c=a.PHL_prod_MG2SOFTLAUNCHCurrentConversation.Props.views;else a.hasOwnProperty(\"PHL_stage_MG2SOFTLAUNCHCurrentConversation\")?(b=a.PHL_stage_MG2SOFTLAUNCHCurrentConversation.Props.paywallLimit,c=a.PHL_stage_MG2SOFTLAUNCHCurrentConversation.Props.views):a.hasOwnProperty(\"PHL_prod_MG2SOFTLAUNCH_set1Connext_CurrentConversations\")?\n(b=a.PHL_prod_MG2SOFTLAUNCH_set1Connext_CurrentConversations.Metered.Props.paywallLimit,c=a.PHL_prod_MG2SOFTLAUNCH_set1Connext_CurrentConversations.Metered.Props.views):a.hasOwnProperty(\"PHL_stage_MG2SOFTLAUNCH_set1Connext_CurrentConversations\")\u0026\u0026(b=a.PHL_stage_MG2SOFTLAUNCH_set1Connext_CurrentConversations.Metered.Props.paywallLimit,c=a.PHL_stage_MG2SOFTLAUNCH_set1Connext_CurrentConversations.Metered.Props.views);return\"undefined\"!==typeof b\u0026\u0026\"undefined\"!==typeof c?parseInt(b)-parseInt(c):\"No Value Set\"}return\"No Value Set\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date;return a=a.getTimezoneOffset()\/60})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=1004,b=756;return window.innerWidth\u003Ea?\"desktop\":window.innerWidth\u003Eb?\"tablet\":\"mobile\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"test-checkout.philly.com\"==location.hostname||\"checkout.philly.com\"==location.hostname||\"checkout.inquirer.com\"==location.hostname||\"test-checkout.inquirer.com\"==location.hostname){var a=",["escape",["macro",19],8,16],".split()[0];return a}return\"No Value Set\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[31,32];return function(c){for(var d=c.get(\"clientId\"),a=0;a\u003Cb.length;a++)c.set(\"dimension\"+b[a],d)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",9],8,16],".split(\":\")[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=null;if(\"undefined\"!==typeof _vwo_exp){a=[];for(keys in _vwo_exp)\"undefined\"!==typeof _vwo_exp[keys].combination_chosen?a.push(keys+\":\"+_vwo_exp[keys].combination_chosen):\"\";0\u003Ca.length?a=\"|\"+a.join(\"|\")+\"|\":a=null}return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"unavailable",
      "vtp_name":"currentImagePosition"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",24],8,16],",b=a.toString();return b}catch(c){}return\"unavailable\"})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],"+\"--gallery\",b=",["escape",["macro",26],8,16],",c=a+\"?\"+b;return b?c:a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=document,a=Math.max,c=b.body,d=b.documentElement;return b.height||a(a(c.scrollHeight,d.scrollHeight),a(c.offsetHeight,d.offsetHeight),a(c.clientHeight,d.clientHeight))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.localStorage.getItem(\"_matherSegments\");return\"\"!=a?a:\"No Value Set\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/^[^?]*\/;return a=a.exec(",["escape",["macro",9],8,16],")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.Hearken\u0026\u0026window.Hearken.elmEmbedded})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){arr=[];for(var b in dataLayer){var a=dataLayer[b];for(key in a)\"event\"===key\u0026\u0026\"VWO\"===a.event\u0026\u0026arr.push(a)}return arr[0].event})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"adblockValues.found"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"arc-country"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",35],
      "vtp_defaultValue":"0",
      "vtp_map":["list",["map","key","AT","value","1"],["map","key","BE","value","1"],["map","key","HR","value","1"],["map","key","CY","value","1"],["map","key","CZ","value","1"],["map","key","DK","value","1"],["map","key","EE","value","1"],["map","key","FI","value","1"],["map","key","FR","value","1"],["map","key","DE","value","1"],["map","key","GR","value","1"],["map","key","HU","value","1"],["map","key","IE","value","1"],["map","key","IT","value","1"],["map","key","LV","value","1"],["map","key","LT","value","1"],["map","key","LU","value","1"],["map","key","MT","value","1"],["map","key","NL","value","1"],["map","key","PL","value","1"],["map","key","PT","value","1"],["map","key","RO","value","1"],["map","key","SK","value","1"],["map","key","SI","value","1"],["map","key","ES","value","1"],["map","key","SE","value","1"],["map","key","GB","value","1"],["map","key","1","value","1"]]
    },{
      "function":"__c",
      "vtp_value":"26"
    },{
      "function":"__cid"
    },{
      "function":"__c",
      "vtp_value":["macro",38]
    },{
      "function":"__c",
      "vtp_value":"27"
    },{
      "function":"__ctv"
    },{
      "function":"__c",
      "vtp_value":["macro",41]
    },{
      "function":"__c",
      "vtp_value":"28"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"29"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__c",
      "vtp_value":"36"
    },{
      "function":"__dbg"
    },{
      "function":"__c",
      "vtp_value":"31"
    },{
      "function":"__c",
      "vtp_value":["macro",5]
    },{
      "function":"__c",
      "vtp_value":"33"
    },{
      "function":"__c",
      "vtp_value":["macro",11]
    },{
      "function":"__c",
      "vtp_value":"43"
    },{
      "function":"__c",
      "vtp_value":"37"
    },{
      "function":"__c",
      "vtp_value":["macro",17]
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.title"
    },{
      "function":"__c",
      "vtp_value":["macro",57]
    },{
      "function":"__c",
      "vtp_value":"2"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.authors"
    },{
      "function":"__c",
      "vtp_value":["macro",60]
    },{
      "function":"__c",
      "vtp_value":"3"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.source"
    },{
      "function":"__c",
      "vtp_value":["macro",63]
    },{
      "function":"__c",
      "vtp_value":"4"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.primarysegment"
    },{
      "function":"__c",
      "vtp_value":["macro",66]
    },{
      "function":"__c",
      "vtp_value":"5"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.sections"
    },{
      "function":"__c",
      "vtp_value":["macro",69]
    },{
      "function":"__c",
      "vtp_value":"6"
    },{
      "function":"__c",
      "vtp_value":["macro",0]
    },{
      "function":"__c",
      "vtp_value":"7"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.contentid"
    },{
      "function":"__c",
      "vtp_value":["macro",74]
    },{
      "function":"__c",
      "vtp_value":"8"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.published"
    },{
      "function":"__c",
      "vtp_value":["macro",77]
    },{
      "function":"__c",
      "vtp_value":"9"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.version"
    },{
      "function":"__c",
      "vtp_value":["macro",80]
    },{
      "function":"__c",
      "vtp_value":"12"
    },{
      "function":"__c",
      "vtp_value":["template",["macro",0],": ",["macro",66],": ",["macro",57]," - ",["macro",77]]
    },{
      "function":"__c",
      "vtp_value":["macro",83]
    },{
      "function":"__c",
      "vtp_value":"13"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.Sub-Section"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.Sub-Sub Section"
    },{
      "function":"__c",
      "vtp_value":["template","philly,",["macro",66],",",["macro",86],",",["macro",87]]
    },{
      "function":"__c",
      "vtp_value":["macro",88]
    },{
      "function":"__c",
      "vtp_value":"14"
    },{
      "function":"__c",
      "vtp_value":["macro",87]
    },{
      "function":"__c",
      "vtp_value":["template","philly:",["macro",66],",",["macro",86],",",["macro",91]]
    },{
      "function":"__c",
      "vtp_value":["macro",92]
    },{
      "function":"__c",
      "vtp_value":"16"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"CampaignId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"CampaignName"
    },{
      "function":"__c",
      "vtp_value":["template",["macro",95],["macro",96]]
    },{
      "function":"__c",
      "vtp_value":"17"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.weekendplanner"
    },{
      "function":"__c",
      "vtp_value":["macro",99]
    },{
      "function":"__c",
      "vtp_value":"18"
    },{
      "function":"__u",
      "vtp_stripWww":true,
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":["macro",102]
    },{
      "function":"__c",
      "vtp_value":"21"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.Article_Length_Label"
    },{
      "function":"__c",
      "vtp_value":["macro",105]
    },{
      "function":"__c",
      "vtp_value":"23"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.updatedDate"
    },{
      "function":"__c",
      "vtp_value":["macro",108]
    },{
      "function":"__c",
      "vtp_value":"24"
    },{
      "function":"__c",
      "vtp_value":["macro",86]
    },{
      "function":"__c",
      "vtp_value":"25"
    },{
      "function":"__c",
      "vtp_value":"106"
    },{
      "function":"__c",
      "vtp_value":["macro",20]
    },{
      "function":"__c",
      "vtp_value":"108"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"pid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":["macro",116]
    },{
      "function":"__c",
      "vtp_value":"109"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.user.registrationDate"
    },{
      "function":"__c",
      "vtp_value":["macro",119]
    },{
      "function":"__c",
      "vtp_value":"129"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.user.state"
    },{
      "function":"__c",
      "vtp_value":["macro",122]
    },{
      "function":"__c",
      "vtp_value":"120"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.user.masterId"
    },{
      "function":"__c",
      "vtp_value":["macro",125]
    },{
      "function":"__c",
      "vtp_value":"128"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.user.paperCode"
    },{
      "function":"__c",
      "vtp_value":["macro",128]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.user.householdLevel"
    },{
      "function":"__c",
      "vtp_value":["macro",130]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",129],8,16],"+\":\"+",["escape",["macro",131],8,16],"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",132],
      "vtp_defaultValue":"Not Set",
      "vtp_map":["list",["map","key","1:1","value","Print\/Digital Bundle"],["map","key","2:1","value","Print\/Digital Bundle"],["map","key","50:1","value","Print\/Digital Bundle"],["map","key","150:1","value","Digital Only"],["map","key","1:2","value","Print Only"],["map","key","2:2","value","Print Only"],["map","key","50:2","value","Print Only"],["map","key","150:2","value","Print Only"]]
    },{
      "function":"__c",
      "vtp_value":["macro",133]
    },{
      "function":"__c",
      "vtp_value":"132"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"meterViews"
    },{
      "function":"__c",
      "vtp_value":["macro",136]
    },{
      "function":"__c",
      "vtp_value":"47"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.originalTitle"
    },{
      "function":"__c",
      "vtp_value":["macro",139]
    },{
      "function":"__c",
      "vtp_value":"15"
    },{
      "function":"__c",
      "vtp_value":["macro",2]
    },{
      "function":"__c",
      "vtp_value":"104"
    },{
      "function":"__c",
      "vtp_value":["macro",122]
    },{
      "function":"__c",
      "vtp_value":"22"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.publishedDate"
    },{
      "function":"__c",
      "vtp_value":["macro",146]
    },{
      "function":"__c",
      "vtp_value":"121"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.user.mg2Id"
    },{
      "function":"__c",
      "vtp_value":["macro",149]
    },{
      "function":"__c",
      "vtp_value":"113"
    },{
      "function":"__c",
      "vtp_value":["macro",6]
    },{
      "function":"__c",
      "vtp_value":"111"
    },{
      "function":"__c",
      "vtp_value":["macro",7]
    },{
      "function":"__c",
      "vtp_value":"116"
    },{
      "function":"__c",
      "vtp_value":["macro",133]
    },{
      "function":"__c",
      "vtp_value":"133"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"meterLimit"
    },{
      "function":"__c",
      "vtp_value":["macro",158]
    },{
      "function":"__c",
      "vtp_value":"134"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"meterViewsLeft"
    },{
      "function":"__c",
      "vtp_value":["macro",161]
    },{
      "function":"__c",
      "vtp_value":"126"
    },{
      "function":"__c",
      "vtp_value":"127"
    },{
      "function":"__c",
      "vtp_value":"135"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"meterName"
    },{
      "function":"__c",
      "vtp_value":["macro",166]
    },{
      "function":"__c",
      "vtp_value":"130"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_gid"
    },{
      "function":"__c",
      "vtp_value":["macro",169]
    },{
      "function":"__c",
      "vtp_value":"30"
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__c",
      "vtp_value":["macro",172]
    },{
      "function":"__c",
      "vtp_value":"38"
    },{
      "function":"__c",
      "vtp_value":["macro",18]
    },{
      "function":"__c",
      "vtp_value":"102"
    },{
      "function":"__c",
      "vtp_value":["macro",29]
    },{
      "function":"__c",
      "vtp_value":"44"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"VariationId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"VariationName"
    },{
      "function":"__c",
      "vtp_value":["template",["macro",179],":",["macro",180]]
    },{
      "function":"__c",
      "vtp_value":"61"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.clickability_id"
    },{
      "function":"__c",
      "vtp_value":["macro",183]
    },{
      "function":"__c",
      "vtp_value":"62"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.dixon_id"
    },{
      "function":"__c",
      "vtp_value":["macro",186]
    },{
      "function":"__c",
      "vtp_value":"63"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.arc_id"
    },{
      "function":"__c",
      "vtp_value":["macro",189]
    },{
      "function":"__c",
      "vtp_value":"10"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.timesincepublish"
    },{
      "function":"__c",
      "vtp_value":["macro",192]
    },{
      "function":"__c",
      "vtp_value":"65"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.content_subtype"
    },{
      "function":"__c",
      "vtp_value":["macro",195]
    },{
      "function":"__c",
      "vtp_value":"64"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.scrollUser"
    },{
      "function":"__c",
      "vtp_value":["macro",198]
    },{
      "function":"__c",
      "vtp_value":"45"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.autoRefresh"
    },{
      "function":"__c",
      "vtp_value":["macro",201]
    },{
      "function":"__c",
      "vtp_value":"46"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":true,
      "vtp_varType":"ATTRIBUTE",
      "vtp_defaultValue":"No Value Set",
      "vtp_attribute":"pb-feature-counter"
    },{
      "function":"__c",
      "vtp_value":["macro",204]
    },{
      "function":"__c",
      "vtp_value":"50"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.seo_keywords"
    },{
      "function":"__c",
      "convert_null_to":"No Value Set",
      "convert_undefined_to":"No Value Set",
      "vtp_value":["macro",207]
    },{
      "function":"__c",
      "vtp_value":"51"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.story_tags"
    },{
      "function":"__c",
      "convert_null_to":"No Value Set",
      "convert_undefined_to":"No Value Set",
      "vtp_value":["macro",210]
    },{
      "function":"__c",
      "vtp_value":"52"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.clavis_topics"
    },{
      "function":"__c",
      "vtp_value":["macro",213]
    },{
      "function":"__c",
      "vtp_value":"53"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.clavis_auxiliaries"
    },{
      "function":"__c",
      "vtp_value":["macro",216]
    },{
      "function":"__c",
      "vtp_value":"54"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.source_system"
    },{
      "function":"__c",
      "vtp_value":["macro",219]
    },{
      "function":"__c",
      "vtp_value":"67"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"int_promo",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":["macro",222]
    },{
      "function":"__c",
      "vtp_value":"68"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.source_type"
    },{
      "function":"__c",
      "vtp_value":["macro",225]
    },{
      "function":"__c",
      "vtp_value":"69"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.chain_layout"
    },{
      "function":"__c",
      "vtp_value":["macro",228]
    },{
      "function":"__c",
      "vtp_value":"81"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"subscriberId"
    },{
      "function":"__c",
      "vtp_value":["macro",231]
    },{
      "function":"__c",
      "vtp_value":"82"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"browserId"
    },{
      "function":"__c",
      "vtp_value":["macro",234]
    },{
      "function":"__c",
      "vtp_value":"124"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"meterStatus"
    },{
      "function":"__c",
      "vtp_value":["macro",237]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","forceSSL","value","true"],["map","fieldName","customTask","value",["macro",21]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",37],"dimension",["macro",39]],["map","index",["macro",40],"dimension",["macro",42]],["map","index",["macro",43],"dimension",["macro",44]],["map","index",["macro",45],"dimension",["macro",46]],["map","index",["macro",47],"dimension",["macro",48]],["map","index",["macro",49],"dimension",["macro",50]],["map","index",["macro",51],"dimension",["macro",52]],["map","index",["macro",53],"dimension","tag name not set"],["map","index",["macro",54],"dimension",["macro",55]],["map","index",["macro",56],"dimension",["macro",58]],["map","index",["macro",59],"dimension",["macro",61]],["map","index",["macro",62],"dimension",["macro",64]],["map","index",["macro",65],"dimension",["macro",67]],["map","index",["macro",68],"dimension",["macro",70]],["map","index",["macro",71],"dimension",["macro",72]],["map","index",["macro",73],"dimension",["macro",75]],["map","index",["macro",76],"dimension",["macro",78]],["map","index",["macro",79],"dimension",["macro",81]],["map","index",["macro",82],"dimension",["macro",84]],["map","index",["macro",85],"dimension",["macro",89]],["map","index",["macro",90],"dimension",["macro",93]],["map","index",["macro",94],"dimension",["macro",97]],["map","index",["macro",98],"dimension",["macro",100]],["map","index",["macro",101],"dimension",["macro",103]],["map","index",["macro",104],"dimension",["macro",106]],["map","index",["macro",107],"dimension",["macro",109]],["map","index",["macro",110],"dimension",["macro",111]],["map","index",["macro",112],"dimension",["macro",91]],["map","index",["macro",113],"dimension",["macro",114]],["map","index",["macro",115],"dimension",["macro",117]],["map","index",["macro",118],"dimension",["macro",120]],["map","index",["macro",121],"dimension",["macro",123]],["map","index",["macro",124],"dimension",["macro",126]],["map","index",["macro",127],"dimension",["macro",134]],["map","index",["macro",135],"dimension",["macro",137]],["map","index",["macro",138],"dimension",["macro",140]],["map","index",["macro",141],"dimension",["macro",142]],["map","index",["macro",143],"dimension",["macro",144]],["map","index",["macro",145],"dimension",["macro",147]],["map","index",["macro",148],"dimension",["macro",150]],["map","index",["macro",151],"dimension",["macro",152]],["map","index",["macro",153],"dimension",["macro",154]],["map","index",["macro",155],"dimension",["macro",156]],["map","index",["macro",157],"dimension",["macro",159]],["map","index",["macro",160],"dimension",["macro",162]],["map","index",["macro",163],"dimension",["macro",129]],["map","index",["macro",164],"dimension",["macro",131]],["map","index",["macro",165],"dimension",["macro",167]],["map","index",["macro",168],"dimension",["macro",170]],["map","index",["macro",171],"dimension",["macro",173]],["map","index",["macro",174],"dimension",["macro",175]],["map","index",["macro",176],"dimension",["macro",177]],["map","index",["macro",178],"dimension",["macro",181]],["map","index",["macro",182],"dimension",["macro",184]],["map","index",["macro",185],"dimension",["macro",187]],["map","index",["macro",188],"dimension",["macro",190]],["map","index",["macro",191],"dimension",["macro",193]],["map","index",["macro",194],"dimension",["macro",196]],["map","index",["macro",197],"dimension",["macro",199]],["map","index",["macro",200],"dimension",["macro",202]],["map","index",["macro",203],"dimension",["macro",205]],["map","index",["macro",206],"dimension",["macro",208]],["map","index",["macro",209],"dimension",["macro",211]],["map","index",["macro",212],"dimension",["macro",214]],["map","index",["macro",215],"dimension",["macro",217]],["map","index",["macro",218],"dimension",["macro",220]],["map","index",["macro",221],"dimension",["macro",223]],["map","index",["macro",224],"dimension",["macro",226]],["map","index",["macro",227],"dimension",["macro",229]],["map","index",["macro",230],"dimension",["macro",232]],["map","index",["macro",233],"dimension",["macro",235]],["map","index",["macro",236],"dimension",["macro",238]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",4],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__e"
    },{
      "function":"__c",
      "vtp_value":"15"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"8"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":true,
      "vtp_varType":"ATTRIBUTE",
      "vtp_defaultValue":"unavailable",
      "vtp_attribute":"data-link-type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoPercent"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",246],
      "vtp_defaultValue":["macro",246],
      "vtp_map":["list",["map","key","progress","value",["template",["macro",246]," - ",["macro",247]]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoNonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoDetails.title"
    },{
      "function":"__c",
      "vtp_value":"7"
    },{
      "function":"__c",
      "vtp_value":"6"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",246],
      "vtp_map":["list",["map","key","finish","value",["macro",251]],["map","key","play","value",["macro",252]]]
    },{
      "function":"__c",
      "vtp_value":"39"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoType"
    },{
      "function":"__c",
      "vtp_value":["macro",255]
    },{
      "function":"__c",
      "vtp_value":"40"
    },{
      "function":"__c",
      "vtp_value":["macro",250]
    },{
      "function":"__c",
      "vtp_value":"41"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoId"
    },{
      "function":"__c",
      "vtp_value":["macro",260]
    },{
      "function":"__c",
      "vtp_value":"42"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoDetails.duration"
    },{
      "function":"__c",
      "vtp_value":["macro",263]
    },{
      "function":"__c",
      "vtp_value":"9"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscribedLists"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"commentAction"
    },{
      "function":"__c",
      "vtp_value":"14"
    },{
      "function":"__c",
      "vtp_value":"11"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"secondsEngaged"
    },{
      "function":"__c",
      "vtp_value":["macro",270]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"timeEngagedActionsTaken"
    },{
      "function":"__c",
      "vtp_value":"13"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialPlatform"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__c",
      "vtp_value":"12"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"galleryNavAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"currentImageName"
    },{
      "function":"__c",
      "vtp_value":"55"
    },{
      "function":"__c",
      "vtp_value":["macro",24]
    },{
      "function":"__c",
      "vtp_value":"57"
    },{
      "function":"__c",
      "vtp_value":["macro",278]
    },{
      "function":"__c",
      "vtp_value":"70"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"galleryType"
    },{
      "function":"__c",
      "vtp_value":["macro",284]
    },{
      "function":"__c",
      "vtp_value":"71"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"photogCredit"
    },{
      "function":"__c",
      "vtp_value":["macro",287]
    },{
      "function":"__c",
      "vtp_value":"72"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"distributorCategory"
    },{
      "function":"__c",
      "vtp_value":["macro",290]
    },{
      "function":"__c",
      "vtp_value":"73"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"distributorName"
    },{
      "function":"__c",
      "vtp_value":["macro",293]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"data.userStatus"
    },{
      "function":"__c",
      "vtp_value":"UA-1605085-14"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","forceSSL","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",37],"dimension",["macro",39]],["map","index",["macro",40],"dimension",["macro",42]],["map","index",["macro",43],"dimension",["macro",44]],["map","index",["macro",45],"dimension",["macro",46]],["map","index",["macro",47],"dimension",["macro",48]],["map","index",["macro",49],"dimension",["macro",50]],["map","index",["macro",51],"dimension",["macro",52]],["map","index",["macro",53],"dimension","tag name not set"],["map","index",["macro",54],"dimension",["macro",55]],["map","index",["macro",56],"dimension",["macro",58]],["map","index",["macro",59],"dimension",["macro",61]],["map","index",["macro",62],"dimension",["macro",64]],["map","index",["macro",65],"dimension",["macro",67]],["map","index",["macro",68],"dimension",["macro",70]],["map","index",["macro",71],"dimension",["macro",72]],["map","index",["macro",73],"dimension",["macro",75]],["map","index",["macro",76],"dimension",["macro",78]],["map","index",["macro",79],"dimension",["macro",81]],["map","index",["macro",82],"dimension",["macro",84]],["map","index",["macro",85],"dimension",["macro",89]],["map","index",["macro",90],"dimension",["macro",93]],["map","index",["macro",94],"dimension",["macro",97]],["map","index",["macro",98],"dimension",["macro",100]],["map","index",["macro",101],"dimension",["macro",103]],["map","index",["macro",104],"dimension",["macro",106]],["map","index",["macro",107],"dimension",["macro",109]],["map","index",["macro",110],"dimension",["macro",111]],["map","index",["macro",112],"dimension",["macro",91]],["map","index",["macro",113],"dimension",["macro",114]],["map","index",["macro",115],"dimension",["macro",117]],["map","index",["macro",118],"dimension",["macro",120]],["map","index",["macro",121],"dimension",["macro",123]],["map","index",["macro",124],"dimension",["macro",126]],["map","index",["macro",127],"dimension",["macro",127]],["map","index",["macro",135],"dimension",["macro",137]],["map","index",["macro",178],"dimension",["macro",181]],["map","index",["macro",182],"dimension",["macro",184]],["map","index",["macro",185],"dimension",["macro",187]],["map","index",["macro",188],"dimension",["macro",190]],["map","index",["macro",194],"dimension",["macro",196]],["map","index",["macro",197],"dimension",["macro",199]],["map","index",["macro",206],"dimension",["macro",208]],["map","index",["macro",209],"dimension",["macro",211]],["map","index",["macro",212],"dimension",["macro",214]],["map","index",["macro",215],"dimension",["macro",217]],["map","index",["macro",218],"dimension",["macro",220]],["map","index",["macro",224],"dimension",["macro",226]],["map","index",["macro",227],"dimension",["macro",229]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",296],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"serviceName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slot"
    },{
      "function":"__c",
      "vtp_value":"48"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"analytics.articleWordCount"
    },{
      "function":"__c",
      "vtp_value":["macro",301]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"milestone"
    },{
      "function":"__c",
      "vtp_value":"24"
    },{
      "function":"__c",
      "vtp_value":"25"
    },{
      "function":"__c",
      "vtp_value":"26"
    },{
      "function":"__c",
      "vtp_value":"27"
    },{
      "function":"__c",
      "vtp_value":"28"
    },{
      "function":"__c",
      "vtp_value":"29"
    },{
      "function":"__c",
      "vtp_value":"30"
    },{
      "function":"__c",
      "vtp_value":"31"
    },{
      "function":"__c",
      "vtp_value":"32"
    },{
      "function":"__c",
      "vtp_value":"33"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",303],
      "vtp_defaultValue":"Undefined",
      "vtp_map":["list",["map","key","10%","value",["macro",304]],["map","key","20%","value",["macro",305]],["map","key","30%","value",["macro",306]],["map","key","40%","value",["macro",307]],["map","key","50%","value",["macro",308]],["map","key","60%","value",["macro",309]],["map","key","70%","value",["macro",310]],["map","key","80%","value",["macro",311]],["map","key","90%","value",["macro",312]],["map","key","100%","value",["macro",313]]]
    },{
      "function":"__c",
      "vtp_value":"56"
    },{
      "function":"__c",
      "vtp_value":["macro",28]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","forceSSL","value","true"],["map","fieldName","customTask","value",["macro",21]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",4],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"34"
    },{
      "function":"__c",
      "vtp_value":["macro",15]
    },{
      "function":"__c",
      "vtp_value":"35"
    },{
      "function":"__c",
      "vtp_value":["macro",16]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"meterActionTypeId"
    },{
      "function":"__c",
      "vtp_value":"23"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",324],
      "vtp_map":["list",["map","key","1","value","banner"],["map","key","2","value","modal"],["map","key","3","value","meter stop"],["map","key","4","value","inline"],["map","key","6","value","infobox"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"meterName"
    },{
      "function":"__c",
      "vtp_value":"10"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subscriptionAction"
    },{
      "function":"__c",
      "vtp_value":"107"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"planID"
    },{
      "function":"__c",
      "vtp_value":["macro",331]
    },{
      "function":"__c",
      "vtp_value":"108"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promoID"
    },{
      "function":"__c",
      "vtp_value":["macro",334]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","forceSSL","value","true"],["map","fieldName","cookieExpires","value","0"],["map","fieldName","anonymizeIp","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",37],"dimension",["macro",39]],["map","index",["macro",40],"dimension",["macro",42]],["map","index",["macro",43],"dimension",["macro",44]],["map","index",["macro",45],"dimension",["macro",46]],["map","index",["macro",47],"dimension",["macro",48]],["map","index",["macro",49],"dimension","EU User - Data not tracked"],["map","index",["macro",51],"dimension",["macro",52]],["map","index",["macro",53],"dimension","tag name not set"],["map","index",["macro",54],"dimension",["macro",55]],["map","index",["macro",56],"dimension",["macro",58]],["map","index",["macro",59],"dimension",["macro",61]],["map","index",["macro",62],"dimension",["macro",64]],["map","index",["macro",65],"dimension",["macro",67]],["map","index",["macro",68],"dimension",["macro",70]],["map","index",["macro",71],"dimension",["macro",72]],["map","index",["macro",73],"dimension",["macro",75]],["map","index",["macro",76],"dimension",["macro",78]],["map","index",["macro",79],"dimension",["macro",81]],["map","index",["macro",82],"dimension",["macro",84]],["map","index",["macro",85],"dimension",["macro",89]],["map","index",["macro",90],"dimension",["macro",93]],["map","index",["macro",94],"dimension",["macro",97]],["map","index",["macro",98],"dimension",["macro",100]],["map","index",["macro",101],"dimension",["macro",103]],["map","index",["macro",104],"dimension",["macro",106]],["map","index",["macro",107],"dimension",["macro",109]],["map","index",["macro",110],"dimension",["macro",111]],["map","index",["macro",112],"dimension",["macro",91]],["map","index",["macro",113],"dimension",["macro",114]],["map","index",["macro",115],"dimension",["macro",117]],["map","index",["macro",118],"dimension","EU User - Data not tracked"],["map","index",["macro",121],"dimension","EU User - Data not tracked"],["map","index",["macro",124],"dimension","EU User - Data not tracked"],["map","index",["macro",127],"dimension","EU User - Data not tracked"],["map","index",["macro",135],"dimension","EU User - Data not tracked"],["map","index",["macro",138],"dimension",["macro",140]],["map","index",["macro",141],"dimension",["macro",142]],["map","index",["macro",143],"dimension","EU User - Data not tracked"],["map","index",["macro",145],"dimension",["macro",147]],["map","index",["macro",148],"dimension","EU User - Data not tracked"],["map","index",["macro",151],"dimension","EU User - Data not tracked"],["map","index",["macro",153],"dimension","EU User - Data not tracked"],["map","index",["macro",155],"dimension","EU User - Data not tracked"],["map","index",["macro",157],"dimension","EU User - Data not tracked"],["map","index",["macro",160],"dimension","EU User - Data not tracked"],["map","index",["macro",163],"dimension","EU User - Data not tracked"],["map","index",["macro",164],"dimension","EU User - Data not tracked"],["map","index",["macro",165],"dimension","EU User - Data not tracked"],["map","index",["macro",168],"dimension","EU User - Data not tracked"],["map","index",["macro",171],"dimension","EU User - Data not tracked"],["map","index",["macro",174],"dimension","EU User - Data not tracked"],["map","index",["macro",176],"dimension","EU User - Data not tracked"],["map","index",["macro",182],"dimension",["macro",184]],["map","index",["macro",185],"dimension",["macro",187]],["map","index",["macro",188],"dimension",["macro",190]],["map","index",["macro",200],"dimension",["macro",202]],["map","index",["macro",194],"dimension",["macro",196]],["map","index",["macro",221],"dimension",["macro",223]],["map","index",["macro",224],"dimension",["macro",226]],["map","index",["macro",227],"dimension",["macro",229]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",4],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":true,
      "vtp_varType":"ATTRIBUTE",
      "vtp_defaultValue":"unavailable",
      "vtp_attribute":"data-link-mg2"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.ipZip"
    },{
      "function":"__c",
      "vtp_value":"20"
    },{
      "function":"__c",
      "vtp_value":["macro",338]
    },{
      "function":"__c",
      "vtp_value":"19"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",338],
      "vtp_defaultValue":"Out of Market",
      "vtp_map":["list",["map","key","19107","value","Philadelphia County"],["map","key","19103","value","Philadelphia County"],["map","key","19128","value","Philadelphia County"],["map","key","19146","value","Philadelphia County"],["map","key","19147","value","Philadelphia County"],["map","key","19143","value","Philadelphia County"],["map","key","19130","value","Philadelphia County"],["map","key","19104","value","Philadelphia County"],["map","key","19120","value","Philadelphia County"],["map","key","19111","value","Philadelphia County"],["map","key","19148","value","Philadelphia County"],["map","key","19144","value","Philadelphia County"],["map","key","19145","value","Philadelphia County"],["map","key","19119","value","Philadelphia County"],["map","key","19118","value","Philadelphia County"],["map","key","19136","value","Philadelphia County"],["map","key","19124","value","Philadelphia County"],["map","key","19140","value","Philadelphia County"],["map","key","19139","value","Philadelphia County"],["map","key","19123","value","Philadelphia County"],["map","key","19149","value","Philadelphia County"],["map","key","19141","value","Philadelphia County"],["map","key","19106","value","Philadelphia County"],["map","key","19102","value","Philadelphia County"],["map","key","19122","value","Philadelphia County"],["map","key","19134","value","Philadelphia County"],["map","key","19152","value","Philadelphia County"],["map","key","19154","value","Philadelphia County"],["map","key","19132","value","Philadelphia County"],["map","key","19125","value","Philadelphia County"],["map","key","19114","value","Philadelphia County"],["map","key","19116","value","Philadelphia County"],["map","key","19138","value","Philadelphia County"],["map","key","19121","value","Philadelphia County"],["map","key","19131","value","Philadelphia County"],["map","key","19142","value","Philadelphia County"],["map","key","19151","value","Philadelphia County"],["map","key","19135","value","Philadelphia County"],["map","key","19127","value","Philadelphia County"],["map","key","19129","value","Philadelphia County"],["map","key","19153","value","Philadelphia County"],["map","key","19150","value","Philadelphia County"],["map","key","19126","value","Philadelphia County"],["map","key","19133","value","Philadelphia County"],["map","key","19112","value","Philadelphia County"],["map","key","19113","value","Philadelphia County"],["map","key","19197","value","Philadelphia County"],["map","key","19137","value","Philadelphia County"],["map","key","19109","value","Philadelphia County"],["map","key","19108","value","Philadelphia County"],["map","key","19099","value","Philadelphia County"],["map","key","19105","value","Philadelphia County"],["map","key","19101","value","Philadelphia County"],["map","key","19110","value","Philadelphia County"],["map","key","19185","value","Philadelphia County"],["map","key","19173","value","Philadelphia County"],["map","key","19192","value","Philadelphia County"],["map","key","19190","value","Philadelphia County"],["map","key","19179","value","Philadelphia County"],["map","key","19176","value","Philadelphia County"],["map","key","19155","value","Philadelphia County"],["map","key","19196","value","Philadelphia County"],["map","key","19446","value","Montgomery County"],["map","key","19403","value","Montgomery County"],["map","key","19002","value","Montgomery County"],["map","key","19038","value","Montgomery County"],["map","key","19401","value","Montgomery County"],["map","key","19422","value","Montgomery County"],["map","key","19428","value","Montgomery County"],["map","key","19426","value","Montgomery County"],["map","key","19096","value","Montgomery County"],["map","key","19046","value","Montgomery County"],["map","key","19462","value","Montgomery County"],["map","key","19406","value","Montgomery County"],["map","key","19044","value","Montgomery County"],["map","key","19072","value","Montgomery County"],["map","key","19438","value","Montgomery County"],["map","key","19464","value","Montgomery County"],["map","key","19090","value","Montgomery County"],["map","key","19454","value","Montgomery County"],["map","key","19003","value","Montgomery County"],["map","key","19473","value","Montgomery County"],["map","key","19006","value","Montgomery County"],["map","key","19025","value","Montgomery County"],["map","key","19004","value","Montgomery County"],["map","key","19034","value","Montgomery County"],["map","key","19001","value","Montgomery County"],["map","key","19525","value","Montgomery County"],["map","key","19040","value","Montgomery County"],["map","key","19465","value","Montgomery County"],["map","key","19468","value","Montgomery County"],["map","key","19012","value","Montgomery County"],["map","key","19027","value","Montgomery County"],["map","key","19424","value","Montgomery County"],["map","key","19066","value","Montgomery County"],["map","key","19444","value","Montgomery County"],["map","key","19095","value","Montgomery County"],["map","key","19075","value","Montgomery County"],["map","key","18969","value","Montgomery County"],["map","key","19440","value","Montgomery County"],["map","key","18964","value","Montgomery County"],["map","key","19031","value","Montgomery County"],["map","key","19035","value","Montgomery County"],["map","key","18054","value","Montgomery County"],["map","key","18073","value","Montgomery County"],["map","key","18915","value","Montgomery County"],["map","key","19429","value","Montgomery County"],["map","key","18936","value","Montgomery County"],["map","key","19441","value","Montgomery County"],["map","key","19455","value","Montgomery County"],["map","key","19405","value","Montgomery County"],["map","key","18041","value","Montgomery County"],["map","key","18076","value","Montgomery County"],["map","key","18074","value","Montgomery County"],["map","key","19009","value","Montgomery County"],["map","key","19477","value","Montgomery County"],["map","key","19049","value","Montgomery County"],["map","key","19453","value","Montgomery County"],["map","key","18070","value","Montgomery County"],["map","key","19435","value","Montgomery County"],["map","key","08070","value","Salem County"],["map","key","08318","value","Salem County"],["map","key","08098","value","Salem County"],["map","key","08069","value","Salem County"],["map","key","08019","value","Salem County"],["map","key","08067","value","Salem County"],["map","key","19901","value","Kent County"],["map","key","19904","value","Kent County"],["map","key","19963","value","Kent County"],["map","key","19977","value","Kent County"],["map","key","19943","value","Kent County"],["map","key","19962","value","Kent County"],["map","key","19938","value","Kent County"],["map","key","19952","value","Kent County"],["map","key","19946","value","Kent County"],["map","key","19934","value","Kent County"],["map","key","19953","value","Kent County"],["map","key","19906","value","Kent County"],["map","key","19954","value","Kent County"],["map","key","19905","value","Kent County"],["map","key","19902","value","Kent County"],["map","key","19903","value","Kent County"],["map","key","19961","value","Kent County"],["map","key","08360","value","Cumberland County"],["map","key","08332","value","Cumberland County"],["map","key","08302","value","Cumberland County"],["map","key","08361","value","Cumberland County"],["map","key","08349","value","Cumberland County"],["map","key","08345","value","Cumberland County"],["map","key","08362","value","Cumberland County"],["map","key","08311","value","Cumberland County"],["map","key","18044","value","Northampton County"],["map","key","18018","value","Northampton County"],["map","key","18055","value","Northampton County"],["map","key","18015","value","Northampton County"],["map","key","18020","value","Northampton County"],["map","key","18017","value","Northampton County"],["map","key","18042","value","Northampton County"],["map","key","18067","value","Northampton County"],["map","key","18045","value","Northampton County"],["map","key","18013","value","Northampton County"],["map","key","18064","value","Northampton County"],["map","key","18040","value","Northampton County"],["map","key","18014","value","Northampton County"],["map","key","18343","value","Northampton County"],["map","key","18088","value","Northampton County"],["map","key","18072","value","Northampton County"],["map","key","18091","value","Northampton County"],["map","key","18025","value","Northampton County"],["map","key","18038","value","Northampton County"],["map","key","18043","value","Northampton County"],["map","key","18016","value","Northampton County"],["map","key","08648","value","Mercer County"],["map","key","08690","value","Mercer County"],["map","key","08540","value","Mercer County"],["map","key","08610","value","Mercer County"],["map","key","08619","value","Mercer County"],["map","key","08618","value","Mercer County"],["map","key","08520","value","Mercer County"],["map","key","08534","value","Mercer County"],["map","key","08638","value","Mercer County"],["map","key","08691","value","Mercer County"],["map","key","08609","value","Mercer County"],["map","key","08550","value","Mercer County"],["map","key","08620","value","Mercer County"],["map","key","08611","value","Mercer County"],["map","key","08628","value","Mercer County"],["map","key","08629","value","Mercer County"],["map","key","08542","value","Mercer County"],["map","key","08625","value","Mercer County"],["map","key","08525","value","Mercer County"],["map","key","08608","value","Mercer County"],["map","key","08641","value","Mercer County"],["map","key","08560","value","Mercer County"],["map","key","08543","value","Mercer County"],["map","key","08603","value","Mercer County"],["map","key","08606","value","Mercer County"],["map","key","08607","value","Mercer County"],["map","key","08601","value","Mercer County"],["map","key","08541","value","Mercer County"],["map","key","08645","value","Mercer County"],["map","key","08544","value","Mercer County"],["map","key","08650","value","Mercer County"],["map","key","19355","value","Chester County"],["map","key","19382","value","Chester County"],["map","key","19087","value","Chester County"],["map","key","19460","value","Chester County"],["map","key","19380","value","Chester County"],["map","key","19335","value","Chester County"],["map","key","19464","value","Chester County"],["map","key","19320","value","Chester County"],["map","key","19341","value","Chester County"],["map","key","19312","value","Chester County"],["map","key","19348","value","Chester County"],["map","key","19465","value","Chester County"],["map","key","19425","value","Chester County"],["map","key","19350","value","Chester County"],["map","key","19363","value","Chester County"],["map","key","19301","value","Chester County"],["map","key","19333","value","Chester County"],["map","key","19390","value","Chester County"],["map","key","19311","value","Chester County"],["map","key","19383","value","Chester County"],["map","key","19343","value","Chester County"],["map","key","19520","value","Chester County"],["map","key","19475","value","Chester County"],["map","key","19344","value","Chester County"],["map","key","19365","value","Chester County"],["map","key","19352","value","Chester County"],["map","key","19330","value","Chester County"],["map","key","19381","value","Chester County"],["map","key","19374","value","Chester County"],["map","key","19310","value","Chester County"],["map","key","19362","value","Chester County"],["map","key","19080","value","Chester County"],["map","key","19372","value","Chester County"],["map","key","19602","value","Berks County"],["map","key","19522","value","Berks County"],["map","key","19601","value","Berks County"],["map","key","19508","value","Berks County"],["map","key","19606","value","Berks County"],["map","key","19518","value","Berks County"],["map","key","19610","value","Berks County"],["map","key","19605","value","Berks County"],["map","key","19607","value","Berks County"],["map","key","19512","value","Berks County"],["map","key","19608","value","Berks County"],["map","key","19543","value","Berks County"],["map","key","19611","value","Berks County"],["map","key","19604","value","Berks County"],["map","key","19526","value","Berks County"],["map","key","19540","value","Berks County"],["map","key","19530","value","Berks County"],["map","key","19510","value","Berks County"],["map","key","19609","value","Berks County"],["map","key","19506","value","Berks County"],["map","key","19539","value","Berks County"],["map","key","19533","value","Berks County"],["map","key","19560","value","Berks County"],["map","key","19505","value","Berks County"],["map","key","19603","value","Berks County"],["map","key","19565","value","Berks County"],["map","key","19504","value","Berks County"],["map","key","19562","value","Berks County"],["map","key","19541","value","Berks County"],["map","key","19551","value","Berks County"],["map","key","19567","value","Berks County"],["map","key","19547","value","Berks County"],["map","key","19507","value","Berks County"],["map","key","19555","value","Berks County"],["map","key","19534","value","Berks County"],["map","key","19503","value","Berks County"],["map","key","19612","value","Berks County"],["map","key","18011","value","Berks County"],["map","key","19529","value","Berks County"],["map","key","19083","value","Delaware County"],["map","key","19082","value","Delaware County"],["map","key","19063","value","Delaware County"],["map","key","19050","value","Delaware County"],["map","key","19018","value","Delaware County"],["map","key","19010","value","Delaware County"],["map","key","19061","value","Delaware County"],["map","key","19064","value","Delaware County"],["map","key","19008","value","Delaware County"],["map","key","19026","value","Delaware County"],["map","key","19073","value","Delaware County"],["map","key","19015","value","Delaware County"],["map","key","19342","value","Delaware County"],["map","key","19036","value","Delaware County"],["map","key","19033","value","Delaware County"],["map","key","19081","value","Delaware County"],["map","key","19086","value","Delaware County"],["map","key","19013","value","Delaware County"],["map","key","19078","value","Delaware County"],["map","key","19373","value","Delaware County"],["map","key","19085","value","Delaware County"],["map","key","19023","value","Delaware County"],["map","key","19317","value","Delaware County"],["map","key","19076","value","Delaware County"],["map","key","19014","value","Delaware County"],["map","key","19074","value","Delaware County"],["map","key","19041","value","Delaware County"],["map","key","19070","value","Delaware County"],["map","key","19032","value","Delaware County"],["map","key","19094","value","Delaware County"],["map","key","19079","value","Delaware County"],["map","key","19022","value","Delaware County"],["map","key","19029","value","Delaware County"],["map","key","19060","value","Delaware County"],["map","key","19043","value","Delaware County"],["map","key","19065","value","Delaware County"],["map","key","19091","value","Delaware County"],["map","key","19319","value","Delaware County"],["map","key","19016","value","Delaware County"],["map","key","18901","value","Bucks County"],["map","key","19020","value","Bucks County"],["map","key","18966","value","Bucks County"],["map","key","18976","value","Bucks County"],["map","key","18940","value","Bucks County"],["map","key","18914","value","Bucks County"],["map","key","19067","value","Bucks County"],["map","key","18974","value","Bucks County"],["map","key","19047","value","Bucks County"],["map","key","18951","value","Bucks County"],["map","key","18944","value","Bucks County"],["map","key","18902","value","Bucks County"],["map","key","19053","value","Bucks County"],["map","key","19007","value","Bucks County"],["map","key","19057","value","Bucks County"],["map","key","18938","value","Bucks County"],["map","key","19056","value","Bucks County"],["map","key","18929","value","Bucks County"],["map","key","19054","value","Bucks County"],["map","key","18925","value","Bucks County"],["map","key","18960","value","Bucks County"],["map","key","19055","value","Bucks County"],["map","key","18947","value","Bucks County"],["map","key","19021","value","Bucks County"],["map","key","18954","value","Bucks County"],["map","key","19030","value","Bucks County"],["map","key","18972","value","Bucks County"],["map","key","18942","value","Bucks County"],["map","key","18977","value","Bucks County"],["map","key","18930","value","Bucks County"],["map","key","18917","value","Bucks County"],["map","key","18927","value","Bucks County"],["map","key","18077","value","Bucks County"],["map","key","19058","value","Bucks County"],["map","key","18955","value","Bucks County"],["map","key","18923","value","Bucks County"],["map","key","18932","value","Bucks County"],["map","key","18920","value","Bucks County"],["map","key","18934","value","Bucks County"],["map","key","08012","value","Camden County"],["map","key","08003","value","Camden County"],["map","key","08081","value","Camden County"],["map","key","08021","value","Camden County"],["map","key","08108","value","Camden County"],["map","key","08033","value","Camden County"],["map","key","08002","value","Camden County"],["map","key","08107","value","Camden County"],["map","key","08034","value","Camden County"],["map","key","08109","value","Camden County"],["map","key","08043","value","Camden County"],["map","key","08030","value","Camden County"],["map","key","08009","value","Camden County"],["map","key","08031","value","Camden County"],["map","key","08106","value","Camden County"],["map","key","08083","value","Camden County"],["map","key","08035","value","Camden County"],["map","key","08029","value","Camden County"],["map","key","08049","value","Camden County"],["map","key","08110","value","Camden County"],["map","key","08105","value","Camden County"],["map","key","08104","value","Camden County"],["map","key","08078","value","Camden County"],["map","key","08004","value","Camden County"],["map","key","08103","value","Camden County"],["map","key","08007","value","Camden County"],["map","key","08091","value","Camden County"],["map","key","08084","value","Camden County"],["map","key","08102","value","Camden County"],["map","key","08026","value","Camden County"],["map","key","08059","value","Camden County"],["map","key","08099","value","Camden County"],["map","key","08045","value","Camden County"],["map","key","08101","value","Camden County"],["map","key","08089","value","Camden County"],["map","key","08054","value","Burlington County"],["map","key","08053","value","Burlington County"],["map","key","08075","value","Burlington County"],["map","key","08055","value","Burlington County"],["map","key","08016","value","Burlington County"],["map","key","08046","value","Burlington County"],["map","key","08057","value","Burlington County"],["map","key","08052","value","Burlington County"],["map","key","08060","value","Burlington County"],["map","key","08690","value","Burlington County"],["map","key","08048","value","Burlington County"],["map","key","08648","value","Burlington County"],["map","key","08088","value","Burlington County"],["map","key","08077","value","Burlington County"],["map","key","08610","value","Burlington County"],["map","key","08619","value","Burlington County"],["map","key","08618","value","Burlington County"],["map","key","08065","value","Burlington County"],["map","key","08638","value","Burlington County"],["map","key","08505","value","Burlington County"],["map","key","08691","value","Burlington County"],["map","key","08609","value","Burlington County"],["map","key","08015","value","Burlington County"],["map","key","08620","value","Burlington County"],["map","key","08611","value","Burlington County"],["map","key","08628","value","Burlington County"],["map","key","08518","value","Burlington County"],["map","key","08629","value","Burlington County"],["map","key","08010","value","Burlington County"],["map","key","08022","value","Burlington County"],["map","key","08068","value","Burlington County"],["map","key","08625","value","Burlington County"],["map","key","08554","value","Burlington County"],["map","key","08036","value","Burlington County"],["map","key","08608","value","Burlington County"],["map","key","08515","value","Burlington County"],["map","key","08641","value","Burlington County"],["map","key","08562","value","Burlington County"],["map","key","08019","value","Burlington County"],["map","key","08603","value","Burlington County"],["map","key","08606","value","Burlington County"],["map","key","08607","value","Burlington County"],["map","key","08511","value","Burlington County"],["map","key","08601","value","Burlington County"],["map","key","08645","value","Burlington County"],["map","key","08650","value","Burlington County"],["map","key","08076","value","Burlington County"],["map","key","08041","value","Burlington County"],["map","key","19809","value","New Castle County"],["map","key","19810","value","New Castle County"],["map","key","19720","value","New Castle County"],["map","key","19802","value","New Castle County"],["map","key","19805","value","New Castle County"],["map","key","19808","value","New Castle County"],["map","key","19702","value","New Castle County"],["map","key","19711","value","New Castle County"],["map","key","19806","value","New Castle County"],["map","key","19803","value","New Castle County"],["map","key","19701","value","New Castle County"],["map","key","19804","value","New Castle County"],["map","key","19709","value","New Castle County"],["map","key","19801","value","New Castle County"],["map","key","19707","value","New Castle County"],["map","key","19713","value","New Castle County"],["map","key","19807","value","New Castle County"],["map","key","19716","value","New Castle County"],["map","key","19892","value","New Castle County"],["map","key","19884","value","New Castle County"],["map","key","19880","value","New Castle County"],["map","key","19734","value","New Castle County"],["map","key","19891","value","New Castle County"],["map","key","19899","value","New Castle County"],["map","key","19718","value","New Castle County"],["map","key","19850","value","New Castle County"],["map","key","19893","value","New Castle County"],["map","key","19731","value","New Castle County"],["map","key","19733","value","New Castle County"],["map","key","08226","value","Cape May County"],["map","key","08204","value","Cape May County"],["map","key","08260","value","Cape May County"],["map","key","08210","value","Cape May County"],["map","key","08230","value","Cape May County"],["map","key","08202","value","Cape May County"],["map","key","08243","value","Cape May County"],["map","key","08251","value","Cape May County"],["map","key","08223","value","Cape May County"],["map","key","08270","value","Cape May County"],["map","key","08247","value","Cape May County"],["map","key","08242","value","Cape May County"],["map","key","18103","value","Lehigh County"],["map","key","18102","value","Lehigh County"],["map","key","18062","value","Lehigh County"],["map","key","18080","value","Lehigh County"],["map","key","18104","value","Lehigh County"],["map","key","18052","value","Lehigh County"],["map","key","18049","value","Lehigh County"],["map","key","18101","value","Lehigh County"],["map","key","18069","value","Lehigh County"],["map","key","18034","value","Lehigh County"],["map","key","18032","value","Lehigh County"],["map","key","18078","value","Lehigh County"],["map","key","18051","value","Lehigh County"],["map","key","18109","value","Lehigh County"],["map","key","18036","value","Lehigh County"],["map","key","18031","value","Lehigh County"],["map","key","18106","value","Lehigh County"],["map","key","18037","value","Lehigh County"],["map","key","18195","value","Lehigh County"],["map","key","18053","value","Lehigh County"],["map","key","18092","value","Lehigh County"],["map","key","18105","value","Lehigh County"],["map","key","18066","value","Lehigh County"],["map","key","18059","value","Lehigh County"],["map","key","08096","value","Gloucester County"],["map","key","08080","value","Gloucester County"],["map","key","08094","value","Gloucester County"],["map","key","08085","value","Gloucester County"],["map","key","08028","value","Gloucester County"],["map","key","08097","value","Gloucester County"],["map","key","08062","value","Gloucester County"],["map","key","08051","value","Gloucester County"],["map","key","08322","value","Gloucester County"],["map","key","08090","value","Gloucester County"],["map","key","08071","value","Gloucester County"],["map","key","08086","value","Gloucester County"],["map","key","08066","value","Gloucester County"],["map","key","08061","value","Gloucester County"],["map","key","08093","value","Gloucester County"],["map","key","08056","value","Gloucester County"],["map","key","08020","value","Gloucester County"],["map","key","08312","value","Gloucester County"],["map","key","08343","value","Gloucester County"],["map","key","08344","value","Gloucester County"],["map","key","08027","value","Gloucester County"],["map","key","08014","value","Gloucester County"],["map","key","08328","value","Gloucester County"],["map","key","08032","value","Gloucester County"],["map","key","08063","value","Gloucester County"],["map","key","08232","value","Atlantic County"],["map","key","08234","value","Atlantic County"],["map","key","08205","value","Atlantic County"],["map","key","08201","value","Atlantic County"],["map","key","08401","value","Atlantic County"],["map","key","08330","value","Atlantic County"],["map","key","08037","value","Atlantic County"],["map","key","08225","value","Atlantic County"],["map","key","08221","value","Atlantic County"],["map","key","08215","value","Atlantic County"],["map","key","08046","value","Atlantic County"],["map","key","08244","value","Atlantic County"],["map","key","08402","value","Atlantic County"],["map","key","08203","value","Atlantic County"],["map","key","08404","value","Atlantic County"],["map","key","08319","value","Atlantic County"],["map","key","08317","value","Atlantic County"],["map","key","08310","value","Atlantic County"],["map","key","08241","value","Atlantic County"],["map","key","08403","value","Atlantic County"],["map","key","08346","value","Atlantic County"],["map","key","08326","value","Atlantic County"],["map","key","08341","value","Atlantic County"],["map","key","08350","value","Atlantic County"]]
    },{
      "function":"__c",
      "vtp_value":["macro",342]
    },{
      "function":"__c",
      "vtp_value":"66"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.IP"
    },{
      "function":"__c",
      "vtp_value":["macro",345]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.status"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.message"
    },{
      "function":"__v",
      "convert_null_to":"No Value Set",
      "convert_undefined_to":"No Value Set",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"description"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":true,
      "vtp_varType":"ID",
      "vtp_defaultValue":"undefined"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"interactionDetail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"loginStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"meterAction"
    },{
      "function":"__c",
      "vtp_value":"136"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"meterViewsCapped"
    },{
      "function":"__c",
      "vtp_value":"137"
    },{
      "function":"__c",
      "vtp_value":"138"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"splitTestIds"
    },{
      "function":"__c",
      "vtp_value":["macro",358]
    },{
      "function":"__c",
      "vtp_value":"22"
    },{
      "function":"__c",
      "vtp_value":"21"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"clickDetail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"clickURL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"cookie-key"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"auth0Id"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",319],
      "vtp_defaultValue":"philly.com",
      "vtp_map":["list",["map","key","stage.www.philly.com","value","dev.philly.com"],["map","key","dev.www.philly.com","value","dev.philly.com"],["map","key","philly.com","value","philly.com"],["map","key","pmn-sandbox.origin.arcpublishing.com","value","dev.philly.com"],["map","key","www2.philly.com","value","philly.com"],["map","key","www.philly.com","value","philly.com"],["map","key","www.inquirer.com","value","philly.com"],["map","key","stage.www.inquirer.com","value","dev.philly.com"],["map","key","dev.www.inquirer.com","value","dev.philly.com"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.Channel_omniture"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",319],
      "vtp_defaultValue":"philly.com",
      "vtp_map":["list",["map","key","stage.www.philly.com","value","dev.www.philly.com"],["map","key","dev.www.philly.com","value","dev.www.philly.com"],["map","key","philly.com","value","philly.com"],["map","key","pmn-sandbox.origin.arcpublishing.com","value","dev.www.philly.com"],["map","key","www2.philly.com","value","philly.com"],["map","key","stage.www2.philly.com","value","dev.www.philly.com"],["map","key","sandbox.pmn.origin.arcpublishing.com","value","dev.www.philly.com"],["map","key","sandbox.pmn.arcpublishing.com","value","dev.www.philly.com"],["map","key","pmn-dev.origin.arcpublishing.com","value","dev.www.philly.com"],["map","key","stage.www.inquirer.com","value","dev.www.philly.com"],["map","key","www.inquirer.com","value","philly.com"],["map","key","dev.www.inquirer.com","value","dev.www.philly.com"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"sessionLocationGeoIP"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"omniture.pagename"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.prop5"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.generatedsegment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.prop23"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"analytics.matherdate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"analytics.chartbeatpath"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"analytics.hidetags"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"analytics.alternatetracking"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"analytics.chartbeatdate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"gtm.element.dataset.event"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"gtm.element.dataset.eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"gtm.element.dataset.eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"gtm.element.dataset.eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"gtm.element.dataset.eventLocation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventWrapper.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventWrapper.action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventWrapper.label"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"1",
      "vtp_name":"eventWrapper.value"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventWrapper.event"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"philly.com",
      "vtp_name":"analytics.parselydomain"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"sessionLocationHTML5"
    },{
      "function":"__c",
      "vtp_value":"266"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-1605085-07",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"Campaign-1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.Omniture_Section"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"analytics.Hierarchy_omniture"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",319],
      "vtp_map":["list",["map","key","www.philly.com","value","UA-1605085-6"],["map","key","dev.www.philly.com","value","UA-1605085-7"],["map","key","www.inquirer.com","value","UA-1605085-6"],["map","key","stage.www.inquirer.com","value","UA-1605085-7"]]
    },{
      "function":"__c",
      "vtp_value":"1"
    },{
      "function":"__c",
      "vtp_value":"2"
    },{
      "function":"__c",
      "vtp_value":"49"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"analytics.multimediaElements"
    },{
      "function":"__c",
      "vtp_value":["macro",403]
    },{
      "function":"__c",
      "vtp_value":"32"
    },{
      "function":"__c",
      "vtp_value":["macro",5]
    },{
      "function":"__c",
      "vtp_value":"UA-1605085-7"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"analytics.Pagename_omniture"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"unavailable",
      "vtp_name":"analytics.prevImage"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"test",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":true,
      "vtp_varType":"ATTRIBUTE",
      "vtp_defaultValue":"No Value Set",
      "vtp_attribute":"data-mce-href"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"pmnEU"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"urlref",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"arc-zipcode"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",319],
      "vtp_defaultValue":"philly.com",
      "vtp_map":["list",["map","key","stage.www.philly.com","value","dev.philly.com"],["map","key","dev.www.philly.com","value","dev.philly.com"],["map","key","philly.com","value","philly.com"],["map","key","pmn-sandbox.origin.arcpublishing.com","value","dev.philly.com"],["map","key","www2.philly.com","value","philly.com"],["map","key","stage.www2.philly.com","value","dev.philly.com"],["map","key","sandbox.pmn.origin.arcpublishing.com","value","dev.philly.com"],["map","key","sandbox.pmn.arcpublishing.com","value","dev.philly.com"],["map","key","pmn-dev.origin.arcpublishing.com","value","dev.www.philly.com"],["map","key","stage.www.inquirer.com","value","dev.philly.com"],["map","key","www.inquirer.com","value","philly.com"],["map","key","dev.www.inquirer.com","value","dev.philly.com"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"No Value Set",
      "vtp_name":"displayMode"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"tpcc",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__dbg"
    },{
      "function":"__r"
    },{
      "function":"__hid"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleRatio",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.visibleTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "priority":999999,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"meter_status",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",327],
      "vtp_eventLabel":["macro",238],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Test Piano Analytics Pros - GA Event - Meter Status"],["map","index",["macro",135],"dimension",["macro",137]],["map","index",["macro",157],"dimension",["macro",159]],["map","index",["macro",160],"dimension",["macro",162]],["map","index",["macro",165],"dimension",["macro",167]],["map","index",["macro",357],"dimension",["macro",362]],["map","index",["macro",236],"dimension",["macro",238]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":195
    },{
      "function":"__ua",
      "priority":9999,
      "metadata":["map"],
      "teardown_tags":["list",["tag",91,0]],
      "once_per_event":true,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","2","group",["macro",0]],["map","index","3","group",["macro",66]],["map","index","1","group",["macro",63]]],
      "vtp_decorateFormsAutoLink":true,
      "vtp_gaSettings":["macro",318],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","forceSSL","value","true"],["map","fieldName","customTask","value",["macro",21]]],
      "vtp_metric":["list",["map","index","4","metric",["macro",8]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index",["macro",56],"dimension",["macro",58]],["map","index",["macro",65],"dimension",["macro",67]],["map","index",["macro",71],"dimension",["macro",72]],["map","index",["macro",59],"dimension",["macro",61]],["map","index",["macro",76],"dimension",["macro",78]],["map","index",["macro",191],"dimension",["macro",193]],["map","index",["macro",68],"dimension",["macro",70]],["map","index",["macro",62],"dimension",["macro",64]],["map","index",["macro",73],"dimension",["macro",75]],["map","index",["macro",79],"dimension",["macro",81]],["map","index",["macro",82],"dimension",["macro",84]],["map","index",["macro",85],"dimension",["macro",89]],["map","index",["macro",90],"dimension",["macro",93]],["map","index",["macro",141],"dimension",["macro",142]],["map","index",["macro",98],"dimension",["macro",100]],["map","index",["macro",101],"dimension",["macro",103]],["map","index",["macro",104],"dimension",["macro",106]],["map","index",["macro",145],"dimension",["macro",147]],["map","index",["macro",107],"dimension",["macro",109]],["map","index",["macro",110],"dimension",["macro",111]],["map","index",["macro",112],"dimension",["macro",91]],["map","index",["macro",143],"dimension",["macro",144]],["map","index",["macro",118],"dimension",["macro",120]],["map","index",["macro",124],"dimension",["macro",126]],["map","index",["macro",148],"dimension",["macro",150]],["map","index",["macro",151],"dimension",["macro",152]],["map","index",["macro",153],"dimension",["macro",154]],["map","index",["macro",155],"dimension",["macro",156]],["map","index",["macro",135],"dimension",["macro",137]],["map","index",["macro",157],"dimension",["macro",159]],["map","index",["macro",160],"dimension",["macro",162]],["map","index",["macro",163],"dimension",["macro",129]],["map","index",["macro",164],"dimension",["macro",131]],["map","index",["macro",115],"dimension",["macro",117]],["map","index",["macro",127],"dimension",["macro",134]],["map","index",["macro",121],"dimension",["macro",123]],["map","index",["macro",165],"dimension",["macro",167]],["map","index",["macro",224],"dimension",["macro",226]],["map","index",["macro",227],"dimension",["macro",229]],["map","index",["macro",168],"dimension",["macro",170]],["map","index",["macro",53],"dimension","Analytics Pros - GA Pageview - Core"],["map","index",["macro",37],"dimension",["macro",39]],["map","index",["macro",40],"dimension",["macro",42]],["map","index",["macro",43],"dimension",["macro",44]],["map","index",["macro",45],"dimension",["macro",46]],["map","index",["macro",51],"dimension",["macro",52]],["map","index",["macro",320],"dimension",["macro",321]],["map","index",["macro",171],"dimension",["macro",173]],["map","index",["macro",54],"dimension",["macro",55]],["map","index",["macro",174],"dimension",["macro",175]],["map","index",["macro",47],"dimension",["macro",48]],["map","index",["macro",322],"dimension",["macro",323]],["map","index",["macro",49],"dimension",["macro",50]],["map","index",["macro",138],"dimension",["macro",140]],["map","index",["macro",176],"dimension",["macro",177]],["map","index",["macro",182],"dimension",["macro",184]],["map","index",["macro",185],"dimension",["macro",187]],["map","index",["macro",188],"dimension",["macro",190]],["map","index",["macro",197],"dimension",["macro",199]],["map","index",["macro",194],"dimension",["macro",196]],["map","index",["macro",200],"dimension",["macro",202]],["map","index",["macro",206],"dimension",["macro",208]],["map","index",["macro",209],"dimension",["macro",211]],["map","index",["macro",212],"dimension",["macro",214]],["map","index",["macro",215],"dimension",["macro",217]],["map","index",["macro",218],"dimension",["macro",220]],["map","index",["macro",221],"dimension",["macro",223]],["map","index",["macro",94],"dimension",["macro",97]],["map","index",["macro",178],"dimension",["macro",181]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":117
    },{
      "function":"__ua",
      "priority":9999,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","2","group",["macro",0]],["map","index","3","group",["macro",66]],["map","index","1","group",["macro",63]]],
      "vtp_decorateFormsAutoLink":true,
      "vtp_gaSettings":["macro",318],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value","auto"],["map","fieldName","forceSSL","value","true"],["map","fieldName","customTask","value",["macro",21]],["map","fieldName","page","value",["macro",27]]],
      "vtp_metric":["list",["map","index","4","metric",["macro",8]],["map","index","12","metric","1"]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index",["macro",56],"dimension",["macro",58]],["map","index",["macro",65],"dimension",["macro",67]],["map","index",["macro",71],"dimension",["macro",72]],["map","index",["macro",59],"dimension",["macro",61]],["map","index",["macro",76],"dimension",["macro",78]],["map","index",["macro",191],"dimension",["macro",193]],["map","index",["macro",68],"dimension",["macro",70]],["map","index",["macro",62],"dimension",["macro",64]],["map","index",["macro",73],"dimension",["macro",75]],["map","index",["macro",79],"dimension",["macro",81]],["map","index",["macro",82],"dimension",["macro",84]],["map","index",["macro",85],"dimension",["macro",89]],["map","index",["macro",90],"dimension",["macro",93]],["map","index",["macro",141],"dimension",["macro",142]],["map","index",["macro",98],"dimension",["macro",100]],["map","index",["macro",101],"dimension",["macro",103]],["map","index",["macro",94],"dimension",["macro",97]],["map","index",["macro",104],"dimension",["macro",106]],["map","index",["macro",145],"dimension",["macro",147]],["map","index",["macro",107],"dimension",["macro",109]],["map","index",["macro",110],"dimension",["macro",111]],["map","index",["macro",112],"dimension",["macro",91]],["map","index",["macro",143],"dimension",["macro",144]],["map","index",["macro",118],"dimension",["macro",120]],["map","index",["macro",124],"dimension",["macro",126]],["map","index",["macro",148],"dimension",["macro",150]],["map","index",["macro",151],"dimension",["macro",152]],["map","index",["macro",153],"dimension",["macro",154]],["map","index",["macro",155],"dimension",["macro",156]],["map","index",["macro",135],"dimension",["macro",137]],["map","index",["macro",157],"dimension",["macro",159]],["map","index",["macro",160],"dimension",["macro",162]],["map","index",["macro",163],"dimension",["macro",129]],["map","index",["macro",164],"dimension",["macro",131]],["map","index",["macro",115],"dimension",["macro",117]],["map","index",["macro",127],"dimension",["macro",134]],["map","index",["macro",121],"dimension",["macro",123]],["map","index",["macro",165],"dimension",["macro",167]],["map","index",["macro",224],"dimension",["macro",226]],["map","index",["macro",227],"dimension",["macro",229]],["map","index",["macro",168],"dimension",["macro",170]],["map","index",["macro",53],"dimension","Analytics Pros - GA Virtual Pageview - Gallery Open"],["map","index",["macro",37],"dimension",["macro",39]],["map","index",["macro",40],"dimension",["macro",42]],["map","index",["macro",43],"dimension",["macro",44]],["map","index",["macro",45],"dimension",["macro",46]],["map","index",["macro",51],"dimension",["macro",52]],["map","index",["macro",320],"dimension",["macro",321]],["map","index",["macro",171],"dimension",["macro",173]],["map","index",["macro",54],"dimension",["macro",55]],["map","index",["macro",174],"dimension",["macro",175]],["map","index",["macro",47],"dimension",["macro",48]],["map","index",["macro",322],"dimension",["macro",323]],["map","index",["macro",49],"dimension",["macro",50]],["map","index",["macro",182],"dimension",["macro",184]],["map","index",["macro",185],"dimension",["macro",187]],["map","index",["macro",188],"dimension",["macro",190]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":123
    },{
      "function":"__ua",
      "priority":9999,
      "teardown_tags":["list",["tag",91,2]],
      "once_per_event":true,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","2","group",["macro",0]],["map","index","3","group",["macro",66]],["map","index","1","group",["macro",63]]],
      "vtp_decorateFormsAutoLink":true,
      "vtp_gaSettings":["macro",336],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieExpires","value","0"]],
      "vtp_metric":["list",["map","index","4","metric",["macro",8]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index",["macro",56],"dimension",["macro",58]],["map","index",["macro",65],"dimension",["macro",67]],["map","index",["macro",71],"dimension",["macro",72]],["map","index",["macro",59],"dimension",["macro",61]],["map","index",["macro",76],"dimension",["macro",78]],["map","index",["macro",191],"dimension",["macro",193]],["map","index",["macro",68],"dimension",["macro",70]],["map","index",["macro",62],"dimension",["macro",64]],["map","index",["macro",73],"dimension",["macro",75]],["map","index",["macro",79],"dimension",["macro",81]],["map","index",["macro",82],"dimension",["macro",84]],["map","index",["macro",85],"dimension",["macro",89]],["map","index",["macro",90],"dimension",["macro",93]],["map","index",["macro",98],"dimension",["macro",100]],["map","index",["macro",101],"dimension",["macro",103]],["map","index",["macro",94],"dimension",["macro",97]],["map","index",["macro",104],"dimension",["macro",106]],["map","index",["macro",145],"dimension",["macro",147]],["map","index",["macro",107],"dimension",["macro",109]],["map","index",["macro",110],"dimension",["macro",111]],["map","index",["macro",112],"dimension",["macro",91]],["map","index",["macro",143],"dimension",["macro",144]],["map","index",["macro",118],"dimension",["macro",120]],["map","index",["macro",53],"dimension","GA Core Pageview Tag - EU Countries"],["map","index",["macro",37],"dimension",["macro",39]],["map","index",["macro",40],"dimension",["macro",42]],["map","index",["macro",43],"dimension",["macro",44]],["map","index",["macro",45],"dimension",["macro",46]],["map","index",["macro",51],"dimension",["macro",52]],["map","index",["macro",320],"dimension",["macro",321]],["map","index",["macro",171],"dimension",["macro",173]],["map","index",["macro",54],"dimension",["macro",55]],["map","index",["macro",174],"dimension",["macro",175]],["map","index",["macro",47],"dimension",["macro",48]],["map","index",["macro",322],"dimension",["macro",323]],["map","index",["macro",138],"dimension",["macro",140]],["map","index",["macro",176],"dimension",["macro",177]],["map","index",["macro",182],"dimension",["macro",184]],["map","index",["macro",185],"dimension",["macro",187]],["map","index",["macro",188],"dimension",["macro",190]],["map","index",["macro",221],"dimension",["macro",223]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":133
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":15
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_eventCategory":"ads",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",240],
      "vtp_eventLabel":["macro",34],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_metric":["list",["map","index",["macro",241],"metric","1"]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",4],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":26
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"A\/B Test",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["template",["macro",95],":",["macro",96]],
      "vtp_eventLabel":["template",["macro",179],":",["macro",180]],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","GA - VWO Event"],["map","index",["macro",94],"dimension",["template",["macro",95],":",["macro",96]]],["map","index",["macro",178],"dimension",["template",["macro",179],":",["macro",180]]]],
      "vtp_trackingId":["macro",4],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":60
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"download",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",9],
      "vtp_eventLabel":["template","on=",["macro",243]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_metric":["list",["map","index",["macro",244],"metric","1"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Download"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":71
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"internal link click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["template","to=",["macro",9]],
      "vtp_eventLabel":["template","on=",["macro",243]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Link Click - Internal"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":73
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"mailto link click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["template","on=",["macro",243]],
      "vtp_eventLabel":["macro",12],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Link Click - Mailto"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":75
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"outbound click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":"non-social click",
      "vtp_eventLabel":["template","to=",["macro",9]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Link Click - Outbound"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":76
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"outbound click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":"social click",
      "vtp_eventLabel":["template","to=",["macro",9]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Link Click - Social Outbound"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":77
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",249],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",248],
      "vtp_eventLabel":["macro",250],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_metric":["list",["map","index",["macro",253],"metric","1"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",254],"dimension",["macro",256]],["map","index",["macro",257],"dimension",["macro",258]],["map","index",["macro",259],"dimension",["macro",261]],["map","index",["macro",262],"dimension",["macro",264]],["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Video Engagement"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":79
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",245],
      "vtp_eventLabel":["macro",9],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Navigation"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":85
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"user",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",265],"metric","1"]],
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":"email signup",
      "vtp_eventLabel":["macro",266],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Email Signup"],["map","index",["macro",209],"dimension",["macro",211]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":86
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"comment",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",268],"metric","1"]],
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",267],
      "vtp_eventLabel":["macro",140],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Comment"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":87
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventCategory":"engagement timer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",269],"metric",["macro",271]]],
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",270],
      "vtp_eventLabel":["macro",272],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Engagement Timer"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",273],"metric","1"]],
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":"social share",
      "vtp_eventLabel":["macro",274],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Social Share"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":91
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"telephone link click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["template","on=",["macro",243]],
      "vtp_eventLabel":["macro",22],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Link Click - Tel"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":103
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"page error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["template","error 404: ",["macro",243]],
      "vtp_eventLabel":["macro",275],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - 404 Error"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":104
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"page error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["template","error 500: ",["macro",243]],
      "vtp_eventLabel":["macro",275],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - 500 Error"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":105
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"image gallery",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",276],"metric","1"]],
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",277],
      "vtp_eventLabel":["template",["macro",24],"-",["macro",278]],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Navigation - Image Gallery"],["map","index",["macro",279],"dimension",["macro",280]],["map","index",["macro",281],"dimension",["macro",282]],["map","index",["macro",283],"dimension",["macro",285]],["map","index",["macro",286],"dimension",["macro",288]],["map","index",["macro",289],"dimension",["macro",291]],["map","index",["macro",292],"dimension",["macro",294]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":106
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Logged In_Out",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",295],
      "vtp_eventLabel":["macro",243],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","GA Event - Logged IN - Logged Out"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":107
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"advertising",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",297],
      "vtp_eventAction":["macro",298],
      "vtp_eventLabel":["macro",299],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - DFP Ad"],["map","index",["macro",56],"dimension",["macro",58]],["map","index",["macro",300],"dimension",["macro",302]],["map","index",["macro",71],"dimension",["macro",72]],["map","index",["macro",203],"dimension",["macro",205]],["map","index",["macro",76],"dimension",["macro",78]],["map","index",["macro",218],"dimension",["macro",220]],["map","index",["macro",59],"dimension",["macro",61]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":108
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":111
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"scroll tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",314],"metric","1"]],
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":"percentage",
      "vtp_eventLabel":["macro",303],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Scroll Tracking - Analytics Pros"],["map","index",["macro",315],"dimension",["macro",316]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":113
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Activation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",318],
      "vtp_eventAction":"Digital Activation",
      "vtp_eventLabel":["macro",19],
      "vtp_trackingId":["macro",4],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":114
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",317],
      "vtp_eventLabel":["macro",9],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":118
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"meter",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",325],"metric","1"]],
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",326],
      "vtp_eventLabel":["macro",327],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Meter Stop"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":121
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"scroll tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",328],"metric","1"]],
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":"custom",
      "vtp_eventLabel":"article end",
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Scroll Tracking - Article End"],["map","index",["macro",315],"dimension",["macro",316]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":126
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"subscription flow",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",329],
      "vtp_eventLabel":["macro",243],
      "vtp_dimension":["list",["map","index",["macro",330],"dimension",["macro",332]],["map","index",["macro",333],"dimension",["macro",335]],["map","index",["macro",53],"dimension","UA - Event - Subscription Flow Checkout"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":127
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"comment",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",267],
      "vtp_eventLabel":["macro",140],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Comment - Other Activity"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":129
    },{
      "function":"__csm",
      "once_per_event":true,
      "vtp_clientId":"6034697",
      "tag_id":130
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Modal Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",337],
      "vtp_eventLabel":["macro",30],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","GA MG2 Modal"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":134
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Audience",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":"Located",
      "vtp_eventLabel":["macro",338],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","GA Event IP Location ip-api"],["map","index",["macro",339],"dimension",["macro",340]],["map","index",["macro",341],"dimension",["macro",343]],["map","index",["macro",344],"dimension",["macro",346]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":142
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Audience",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":"Location API Error",
      "vtp_eventLabel":["template","Error Status: ",["macro",347],":Error Message: ",["macro",348]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","GA Event IP Location - Error ip-API"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":143
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"hearken",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":"embed",
      "vtp_eventLabel":["macro",243],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":150
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"hearken",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":"submit",
      "vtp_eventLabel":["macro",243],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":152
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"meter_misc",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",349],
      "vtp_eventLabel":["macro",327],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Analytics Pros - GA Event - Meter Stop"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":156
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"subscription flow",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":"transaction success",
      "vtp_eventLabel":["macro",243],
      "vtp_dimension":["list",["map","index",["macro",330],"dimension",["macro",332]],["map","index",["macro",333],"dimension",["macro",335]],["map","index",["macro",53],"dimension","UA - Event - Subscription Flow Transaction"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":157
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"spoken layer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",318],
      "vtp_eventAction":"interaction",
      "vtp_eventLabel":["macro",350],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Spoken Layer Interaction"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":158
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Longform Custom Interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",351],
      "vtp_eventLabel":["macro",9],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":159
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"subscription flow",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":"created new user",
      "vtp_eventLabel":["macro",243],
      "vtp_dimension":["list",["map","index",["macro",330],"dimension",["macro",332]],["map","index",["macro",333],"dimension",["macro",335]],["map","index",["macro",53],"dimension","UA - Event - Subscription Flow Created New User"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":162
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"AutoRefresh",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",243],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":164
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"misc_event",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",352],
      "vtp_eventLabel":["macro",353],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":171
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":172
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName",["macro",53],"value","GA Event - Mobile Adhesion X Out"]],
      "vtp_eventCategory":"ads",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",240],
      "vtp_eventLabel":["macro",354],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":173
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"subscription flow",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",329],
      "vtp_eventLabel":["macro",243],
      "vtp_dimension":["list",["map","index",["macro",330],"dimension",["macro",332]],["map","index",["macro",333],"dimension",["macro",335]],["map","index",["macro",53],"dimension","UA - Event - Subscription Flow"]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":177
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"user",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":"state change",
      "vtp_eventLabel":["macro",355],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":184
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"meter",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",325],"metric","1"]],
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":"meter stop",
      "vtp_eventLabel":["macro",166],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Test Piano Analytics Pros - GA Event - Meter Stop"],["map","index",["macro",135],"dimension",["macro",136]],["map","index",["macro",157],"dimension",["macro",158]],["map","index",["macro",160],"dimension",["macro",162]],["map","index",["macro",165],"dimension",["macro",166]],["map","index",["macro",357],"dimension",["macro",358]],["map","index",["macro",359],"dimension",["macro",356]],["map","index",["macro",360],"dimension",["macro",361]],["map","index",["macro",233],"dimension",["macro",235]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":194
    },{
      "function":"__ua",
      "priority":0,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"meter piano impressions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",363],"metric","1"]],
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",356],
      "vtp_eventLabel":["macro",166],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Test Piano Analytics Pros - GA Event - Meter Stop"],["map","index",["macro",135],"dimension",["macro",136]],["map","index",["macro",157],"dimension",["macro",158]],["map","index",["macro",160],"dimension",["macro",162]],["map","index",["macro",165],"dimension",["macro",166]],["map","index",["macro",357],"dimension",["macro",358]],["map","index",["macro",359],"dimension",["macro",356]],["map","index",["macro",360],"dimension",["macro",361]],["map","index",["macro",233],"dimension",["macro",235]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":196
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":"meter piano clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",364],"metric","1"]],
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":["macro",365],
      "vtp_eventLabel":["template",["macro",9],":",["macro",366]],
      "vtp_dimension":["list",["map","index",["macro",53],"dimension","Test Piano Analytics Pros - GA Event - Meter Stop"],["map","index",["macro",135],"dimension",["macro",136]],["map","index",["macro",157],"dimension",["macro",158]],["map","index",["macro",160],"dimension",["macro",162]],["map","index",["macro",165],"dimension",["macro",166]],["map","index",["macro",357],"dimension",["macro",358]],["map","index",["macro",359],"dimension",["macro",356]],["map","index",["macro",360],"dimension",["macro",361]],["map","index",["macro",233],"dimension",["macro",235]]],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":197
    },{
      "function":"__asp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_pixelId":"BWU2E3LRVZHMDFU5DFCX2D",
      "vtp_customerId":"KSKJB56RUJDNRJE2Y36JUB",
      "vtp_conversionValueCurrency":"USD",
      "tag_id":198
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"user",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",239],
      "vtp_eventAction":"state change",
      "vtp_eventLabel":"log-in",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":200
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Cookie Rewrite",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",297],
      "vtp_eventAction":["macro",367],
      "vtp_eventLabel":["macro",368],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":201
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1982237_132",
      "tag_id":203
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1982237_134",
      "tag_id":204
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1982237_136",
      "tag_id":205
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1982237_137",
      "tag_id":206
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1982237_138",
      "tag_id":207
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1982237_141",
      "tag_id":208
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1982237_223",
      "tag_id":209
    },{
      "function":"__cl",
      "tag_id":210
    },{
      "function":"__jel",
      "tag_id":211
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"1982237_245",
      "tag_id":212
    },{
      "function":"__evl",
      "vtp_elementId":"timestamp-published",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"10",
      "vtp_uniqueTriggerId":"1982237_313",
      "tag_id":213
    },{
      "function":"__cl",
      "tag_id":214
    },{
      "function":"__cl",
      "tag_id":215
    },{
      "function":"__cl",
      "tag_id":216
    },{
      "function":"__evl",
      "vtp_elementId":"completion-element",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"10",
      "vtp_uniqueTriggerId":"1982237_724",
      "tag_id":217
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":".user-authorization",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_uniqueTriggerId":"1982237_731",
      "tag_id":218
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _sf_async_config=window._sf_async_config=window._sf_async_config||{};_sf_async_config.uid=12719;_sf_async_config.domain=",["escape",["macro",369],8,16],";_sf_async_config.flickerControl=!1;_sf_async_config.useCanonical=!0;_sf_async_config.useCanonicalDomain=!0;\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"\/\/static.chartbeat.com\/js\/chartbeat_mab.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window._sf_async_config=window._sf_async_config||{};PMNdataLayer[0].analytics.hasOwnProperty(\"Article_Length_Label\")?a.sections=",["escape",["macro",67],8,16],"+\",length.\"+PMNdataLayer[0].analytics.Article_Length_Label:a.sections=",["escape",["macro",67],8,16],";\"front\"!=PMNdataLayer[0].analytics.type\u0026\u0026(a.authors=",["escape",["macro",60],8,16],");a.alias=\"",["escape",["macro",19],7],"\";a=document.createElement(\"script\");var b=document.getElementsByTagName(\"script\")[0];a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/static.chartbeat.com\/js\/chartbeat.js\";\nb.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":7
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){(window._matherq=window._matherq||[]).push([\"getTracker\",function(c){c.setPaywall(\"mg2\");c.getUserDBSegment({minPageViews:2,timeoutMs:1E4},function(a){localStorage._matherSegments=!a.err\u0026\u0026a.segments.length?a.segments.map(function(a){return a.name}).join(\",\"):\"\"})}])})();\n(function(c,a,e,g){var b=document.createElement(\"script\"),f=document.getElementsByTagName(\"script\")[0],d;try{if(!(d=localStorage._matherVer))throw!1;}catch(h){d=Math.round(new Date\/10368E5)}b.type=\"text\/javascript\";b.async=!0;b.defer=!0;b.id=\"_mljs\";b.src=(\"https:\"==document.location.protocol?\"https\":\"http\")+\":\/\/\"+(g||\"js.matheranalytics.com\/s\")+\"\/\"+c+\"\/\"+a+\"\/\"+(e?e+\"\/\":\"\")+\"ml.js?cb12\\x3d\"+d;f.parentNode.insertBefore(b,f)})(\"ma34789\",\"234578994\",\"\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":9
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a.PARSELY={autotrack:!1,onReady:function(){PARSELY.updateDefaults({data:{plan:",["escape",["macro",122],8,16],"}});PARSELY.beacon.trackPageView()}}})(window);\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){var b=\"",["escape",["macro",371],7],"\",c=a.body;a=a.createElement(\"div\");a.innerHTML='\\x3cspan id\\x3d\"parsely-cfg\" data-parsely-site\\x3d\"'+b+'\"\\x3e\\x3c\/span\\x3e';a.id=\"parsely-root\";a.style.display=\"none\";c.appendChild(a)})(document);\n(function(a,b,c){var e=c.location.protocol,f=b+\"-\"+a,d=c.getElementById(f),g=c.getElementById(b+\"-root\");b=\"https:\"===e?\"d1z2jf7jlzjs58.cloudfront.net\":\"static.\"+b+\".com\";d||(d=c.createElement(a),d.id=f,d.async=!0,d.src=e+\"\/\/\"+b+\"\/p.js\",g.appendChild(d))})(\"script\",\"parsely\",document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d,m){var g=function(){},e=[],f=[],h=function(b,a){a.e===b[0]\u0026\u0026a.c.apply(this,[b])},k=function(b,a){a.e\u0026\u0026a.e!==b[1]||a.v\u0026\u0026a.v!==b[2]||a.c.apply(this,[b])},l=d.push;d.push=function(){var b=arguments[0];for(var a=0;a\u003Cf.length;a++)h(b,f[a]);if(\"rH\"===b[0]||\"vS\"===b[0])for(a=0;a\u003Ce.length;a++)k(b,e[a]);b=void 0;!b;l.apply(d,[].slice.call(arguments))};c.onVariationApplied=function(b,a,c){\"function\"==typeof b\u0026\u0026(c=b,b=null,a=null);b={e:b,v:a,c:c||g};e.push(b);for(a=0;a\u003Cd.length;a++)\"rH\"!==d[a][0]\u0026\u0026\n\"vS\"!==d[a][0]||k(d[a],b)};c.onEventReceive=function(b,a){var c={e:b,c:a||g};f.push(c);for(var e=0;e\u003Cd.length;e++)h(d[e],c)}}(window.VWO=window.VWO||[],window._vwo_evq=window._vwo_evq||[]);(function(){window.PMNdataLayer=window.PMNdataLayer||[];window.VWO.push([\"onVariationApplied\",function(c){if(c){var d=c[1];c=c[2];\"undefined\"!==typeof _vwo_exp[d].comb_n[c]\u0026\u0026(window.PMNdataLayer.push({CampaignId:d,CampaignName:_vwo_exp[d].name,VariationId:c,VariationName:_vwo_exp[d].comb_n[c]}),window.PMNdataLayer.push({event:\"VWO-data-push\"}))}}])})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){(window._matherq=window._matherq||[]).push([\"getTracker\",function(c){c.setPaywall(\"mg2\");c.getUserDBSegment({minPageViews:2,timeoutMs:1E4},function(a){localStorage._matherSegments=!a.err\u0026\u0026a.segments.length?a.segments.map(function(a){return a.name}).join(\",\"):\"\"})}])})();\n(function(c,a,e,g){var b=document.createElement(\"script\"),f=document.getElementsByTagName(\"script\")[0],d;try{if(!(d=localStorage._matherVer))throw!1;}catch(h){d=Math.round(new Date\/10368E5)}b.type=\"text\/javascript\";b.async=!0;b.defer=!0;b.id=\"_mljs\";b.src=(\"https:\"==document.location.protocol?\"https\":\"http\")+\":\/\/\"+(g||\"js.matheranalytics.com\/s\")+\"\/\"+c+\"\/\"+a+\"\/\"+(e?e+\"\/\":\"\")+\"ml.js?cb10\\x3d\"+d;f.parentNode.insertBefore(b,f)})(\"ma34789\",\"234578999\",\"\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(e,d){function f(a){console.log({event:\"engagement-timer-error\",error:a.message})}function v(a){try{var b=\/tealium\/i,d=\/gtm|google tag manager\/i,p=\/ga|google analytics\/i;return!a.platform||d.test(a.platform)?(a.platform=\"gtm\",a.dataLayerName=a.dataLayerName||\"dataLayer\",a.sendEngagementEvent=function(c,b,f,d,n,g,l){e[a.dataLayerName]=e[a.dataLayerName]||[];e[a.dataLayerName].push({event:c,timeEngagedActionsTaken:b,millisecondsEngaged:f,secondsEngaged:d,totalMillisecondsEngaged:n,totalSecondsEngaged:g,\netIntervalSeconds:l})}):b.test(a.platform)?(a.platform=\"tealium\",a.sendEngagementEvent=function(a,b,d,t,n,g,l){a={interaction:a,et_timeEngagedActionsTaken:b,et_millisecondsEngaged:d,et_secondsEngaged:t,et_totalMillisecondsEngaged:n,et_totalSecondsEngaged:g,et_intervalSeconds:l};e.utag\u0026\u0026e.utag.link?e.utag.link(a):f({message:\"tealium - utag not found\"})}):p.test(a.platform)\u0026\u0026(a.platform=\"ga\",myTracker=a.trackerName?a.trackerName+\".\":\"\",a.sendEngagementEvent=function(c,b,f,d,e,g,l){c={hitType:\"event\",\neventCategory:c,eventAction:d,eventLabel:b};c[\"metric\"+(a.engagedSecondsMetricIndex||999)]=d;c[\"metric\"+(a.totalEngagedSecondsMetricIndex||999)]=g;c[\"dimension\"+(a.engagedEventsDimensionIndex||999)]=b;ga(myTracker+\"send\",c)}),a}catch(c){f(c)}}function w(a){try{a=a||{};var b={firstRun:!0,interval:40,intervalType:\"normal\",intervalLowerThreshold:10,intervalUpperThreshold:120,growthRate:0,engagedEvents:[\"mouseover\",\"touchstart\",\"touchmove\",\"keydown\"]};return a\u0026\u0026\"object\"==typeof a?(a.interval||a.engagedEvents||\na.platform)\u0026\u0026(a.interval\u0026\u0026!isNaN(a.interval)\u0026\u0026(b.interval=Number(a.interval)),a.intervalLowerThreshold\u0026\u0026!isNaN(a.intervalLowerThreshold)\u0026\u0026(b.intervalLowerThreshold=Number(a.intervalLowerThreshold)),a.intervalUpperThreshold\u0026\u0026!isNaN(a.intervalUpperThreshold)\u0026\u0026(b.intervalUpperThreshold=Number(a.intervalUpperThreshold)),a.interval\u0026\u0026!isNaN(a.interval)\u0026\u0026(b.interval=Number(a.interval)),a.intervalType\u0026\u0026\"string\"==typeof a.intervalType\u0026\u0026(b.intervalType=a.intervalType),a.engagedEvents\u0026\u0026a.engagedEvents.push\u0026\u0026\n(b.engagedEvents=a.engagedEvents),a.platform\u0026\u0026\"string\"==typeof a.platform\u0026\u0026(b.platform=a.platform),a.engagedSecondsMetricIndex\u0026\u0026!isNaN(a.engagedSecondsMetricIndex)\u0026\u0026(b.engagedSecondsMetricIndex=a.engagedSecondsMetricIndex),a.engagedEventsDimensionIndex\u0026\u0026!isNaN(a.engagedEventsDimensionIndex)\u0026\u0026(b.engagedEventsDimensionIndex=a.engagedEventsDimensionIndex),a.trackerName\u0026\u0026\"string\"==typeof a.trackerName\u0026\u0026(b.trackerName=a.trackerName),a.dataLayerName\u0026\u0026\"string\"==typeof a.dataLayerName\u0026\u0026(b.dataLayerName=a.dataLayerName)):\nf({message:\"settings validation error\"}),v(b)}catch(r){f(r)}}console.log(\"Engagement Timer Version Number:  3.0\");e._apEngage=function(a){function b(a,b){try{for(var m=!!d.addEventListener,c=!!d.attachEvent,q=0;q\u003Ca.length;q++)m?d.addEventListener(a[q],function(a){b.engagementDemonstrated(a)}):c\u0026\u0026d.attachEvent(\"on\"+a[q],function(a){b.engagementDemonstrated(a)});e.onbeforeunload=function(){b.events.push(\"pageunload\");b.sendEngagementTime(b.previousBlock)}}catch(u){f(u)}}function r(){this.start=!0;this.lastTime=\nthis.firstTime=0;this.events=[];this.interval=0;this.turn=1;this.timeout=0;this.init=function(a){this.previousBlock={timeout:a.timeout||0,lastTime:a.lastTime||0,turn:a.turn||1};this.start=!0;this.lastTime=this.firstTime=0;this.events=[];this.interval=0;this.turn=a.turn||1;this.timeout=0};this.resetTurn=function(a){this.turn=a||1};this.getTimeout=function(a){if(\"normal\"===a.type)this.timeout=a.seconds;else if(\"backoff\"===a.type){if(c.previousBlock.timeout\u003Ca.upperThreshold){var b=this.turn;this.timeout=\nb=2\u003Eb?k.lowerThreshold:Math.pow(2*(1+k.growthRate),b-1)*k.lowerThreshold}this.timeout=this.timeout\u003Ca.upperThreshold?this.timeout:a.upperThreshold}return this.timeout};this.sendEngagementTime=function(a,b,c,d,e){try{0\u003Cthis.events.length\u0026\u0026(b=this.firstTime-this.previousBlock.lastTime\u003Ck.milliseconds?this.lastTime-this.previousBlock.lastTime:this.lastTime-this.firstTime,a=this.events.join(\", \"),d=Math.round(b\/1E3),g+=b,e=Math.round(g\/1E3),0\u003Cd\u0026\u0026d\u003C=2*this.timeout?(n(\"timeEngaged\",a,b,d,g,e,this.timeout),\nthis.turn++):0===d?this.resetTurn():n(\"timeEngagedError\",a,b,d,g,e,this.timeout))}catch(u){f(u)}};this.engagementDemonstrated=function(a){try{var b=a.type,c=(new Date).getTime();this.start\u0026\u0026(this.firstTime=c,this.start=!1);0\u003Ethis.events.indexOf(b)\u0026\u0026this.events.push(b);this.lastTime=c}catch(x){f(x)}};this.init({timeout:0,lastTime:0,turn:1})}function p(){k.firstRun?(c.engagementDemonstrated({type:\"pageload\"}),k.firstRun=!1):(c.sendEngagementTime(c.previousBlock,c.events),c.init(c));c.getTimeout(k);\nsetTimeout(function(){p()},1E3*c.timeout)}try{var c,h=w(a),k={firstRun:!0,type:h.intervalType,seconds:h.interval,milliseconds:1E3*h.interval,lowerThreshold:h.intervalLowerThreshold,upperThreshold:h.intervalUpperThreshold,growthRate:h.growthRate},t=h.engagedEvents,n=(h.platform,h.sendEngagementEvent),g=0;Date.now();Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){for(var c=b||0,d=this.length;c\u003Cd;c++)if(this[c]===a)return c;return-1})}catch(m){f(m)}try{if(!e._ET_initialized){a:{try{var l=\n(c=new r,b(t,c),p(),!0);break a}catch(m){f(m)}l=void 0}e._ET_initialized=l}}catch(m){f(m)}}}(window,document);(function(){var e={platform:\"gtm\",dataLayerName:\"PMNdataLayer\"},d=setInterval(function(){var f=window._apEngage||void 0;f\u0026\u0026(clearInterval(d),f(e))},200);setTimeout(function(){clearInterval(d)},2E3)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":116
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E$(function(){function k(c,d){var b=l.indexOf(d);b=\"add subscription failed\"==d?b-1:b;b=\"delivery address completed\"==d?3:b;order=JSON.stringify(c,null,4);storage=JSON.parse(order);var e=storage.offer.OfferText,g=storage.offer.TotalPrice,f=0\u003Cb?d:\"Add to cart\",a={};e=[{name:e,id:c.pid,price:g,category:\"Subscription Offers\",quantity:1}];var h=m();switch(f){case \"Add to cart\":h\u0026\u0026(a.event=\"checkout\",a.subscriptionAction=\"user info completed\",a.ecommerce={checkout:{actionField:{step:1,option:\"user info completed\"}},\nproducts:e},PMNdataLayer.push(a));a.event=\"add-to-cart\";a.subscriptionAction=\"offer selected\";a.ecommerce={add:{actionField:{option:f},products:e}};PMNdataLayer.push(a);break;case \"add subscription success\":h=storage.subscription.AccountNumber;a.event=\"purchase\";a.subscriptionAction=f;a.ecommerce={purchase:{actionField:{revenue:g,id:h},products:e}};PMNdataLayer.push(a);a.event=\"checkout\";a.subscriptionAction=f;a.ecommerce={checkout:{actionField:{step:b,option:f},products:e}};PMNdataLayer.push(a);\nbreak;default:a.event=\"checkout\",a.subscriptionAction=f,a.ecommerce={checkout:{actionField:{step:b,option:f},products:e}},PMNdataLayer.push(a)}}function m(){var c=!1;try{var d=PMNdataLayer.find(function(b){return\"userLoggedIn\"in b});d\u0026\u0026(c=d.userLoggedIn)}catch(b){console.log(\"Could not get variable userLoggedIn in the dataLayer\")}return c}PMNdataLayer=PMNdataLayer||[];var l=\"offer selected;user info completed;credit card completed;billing address completed;add subscription success;add subscription failed\".split(\";\"),\nn=\"presentation loaded;presentation failed;no offers error;zip is not deliverable error;created new user;user logged in;user inforror;delivery address completed;addresserror;selected payment option;bank account completed;bill me completed;paymenterror;place order cancel clicked;place order user information edit clicked;place order billing address edit clicked;place order delivery address edit clicked;add subscription failed\".split(\";\");l.map(function(c){ko.postbox.subscribe(c.replace(\/\\s\/g,\"_\")+\"_e\",\nfunction(d){var b=c;k(d,b)})});n.map(function(c){console.log(c);ko.postbox.subscribe(c.replace(\/\\s\/g,\"_\")+(\"user logged in\"!==c?\"_e\":\"\"),function(d){var b=c;switch(b){case \"add subscription failed\":break;case \"user logged in\":PMNdataLayer.push({userLoggedIn:!0});break;case \"selected payment option\":break;case \"user logged in\":break;case \"delivery address completed\":k(d,\"delivery address completed\");break;case \"created new user\":PMNdataLayer.push({event:\"created_new_user\"});break;default:order=JSON.stringify(d,\nnull,4);storage=JSON.parse(order);try{var e=storage.offer.PlanId?storage.offer.PlanId:\"No Value Set\"}catch(f){e=\"No Value Set\"}order=JSON.stringify(d,null,4);storage=JSON.parse(order);try{var g=storage.offer.Promotion.PromotionId?storage.offer.Promotion.PromotionId:\"No Value Set\"}catch(f){g=\"No Value Set\"}PMNdataLayer.push({event:\"subscription-flow\",subscriptionAction:b,planID:e,promoID:g})}})})});\u003C\/script\u003E\n\n\u003Cstyle\u003E\n.step-indicator {\n  padding: 15px 30px 0;\n  margin-bottom: 5px;\n}\n\n.pheader {\n  border-bottom: 0px solid #e5e5e5;\n}\n\n.step__header {\n  padding: 8px 30px;\n}\n\n.step__title {\n  font-size: 20px;\n}\n\n.offerDetails__body {\n  padding: 18px 30px;\n}\n\n.offerDetails__column_first {\n  display: none;\n}\n\n.offerDetails__offer-title {\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  border-bottom: 0px solid #e5e5e5;\n  font-size: 24px;\n}\n\n.offerDetails__description {\n  margin-bottom: 0px;\n}\n\n.offerDetails__name {\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.offerDetails__name {\n  margin-bottom: 0px;\n}\n\n.step__content {\n  padding: 20px 30px 0px;\n  margin-bottom: 20px;\n}\n  \n.offerDetails__text li {\n  font-weight: normal;\n  font-size: 15px !important;\n}\n\n@media screen and (max-width: 480px) {\n  .pheader {\n    border-bottom: 0px solid #e5e5e5;\n  }\n\n  .step-indicator {\n    padding: 0px 30px 0px;\n    margin-bottom: 0px;\n    position: relative;\n    top: -11px;\n  }\n\n  .step-indicator__summary {\n    margin-bottom: 0px;\n  }\n\n  .step-indicator__summary-title {\n    font-size: 11px;\n  }\n\n  .step-indicator__summary-enum {\n    font-size: 11px;\n  }\n\n  .offerDetails {\n    margin: 0px auto 8px;\n  }\n\n  .offerDetails__body {\n    padding: 15px 20px;\n  }\n\n  .offerDetails__offer-title {\n    padding-bottom: 5px;\n    margin-bottom: 0px;\n    border-bottom: 0px solid #e5e5e5;\n    font-size: 19px;\n  }\n\n  .offerDetails__column_first {\n    display: none;\n  }\n\n  .offerDetails__description {\n    margin-bottom: 0px;\n    text-align: left;\n  }\n\n  .offerDetails__name {\n    font-size: 14px;\n    text-align: left;\n    font-weight: bold;\n    margin-bottom: 3px;\n    margin-top: 3px;\n  }\n\n  .offerDetails__text {\n    font-weight: normal;\n    font-size: 13px;\n  }\n\n  .offerDetails__text li {\n    font-weight: normal;\n    font-size: 13px !important;\n  }\n\n  .offerDetails__text ul {\n    margin-bottom: 5px;\n    margin-left: 0px;\n    padding-left: 20px;\n  }\n\n  .step__title {\n    font-size: 16px;\n    padding-left: 30px;\n    padding-bottom: 6px;\n  }\n\n  .step__enumer {\n    width: 20px;\n    height: 20px;\n    line-height: 20px;\n    top: 45%;\n    font-size: 10px;\n  }\n\n  .step__header {\n    padding: 11px 30px 7px;\n  }\n\n  .step__content {\n    padding-top: 10px;\n    padding: 40px 30px 0px;\n    margin-bottom: 0px;\n  }\n\n  .step__buttons {\n    padding: 0 0 20px;\n  }\n}\n\u003C\/style\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":132
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1728487820781559\");fbq(\"set\",\"agent\",\"tmgoogletagmanager\",\"1728487820781559\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1728487820781559\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c){function a(a){setTimeout(function(){thankYou_div=b.getElementById(\"hearken-embed-1079\");if(void 0!=thankYou_div\u0026\u0026(thankYou_message=hearken_div.getElementsByTagName(\"p\")[0].innerText,void 0!=thankYou_message\u0026\u0026-1!==thankYou_message.toLowerCase().indexOf(\"thank\"))){c.PMNdataLayer.push({event:\"hearkenSubmit\"});var a=thankYou_message.substring(thankYou_message.lastIndexOf(\":\")+3,thankYou_message.lastIndexOf('\"'));c.PMNdataLayer.push({hearkenQuestion:a})}},3E3)}hearken_div=b.getElementById(\"hearken-embed-1079\");\nvoid 0!=hearken_div\u0026\u0026(submit_button=hearken_div.getElementsByTagName(\"button\")[0],void 0!=submit_button\u0026\u0026submit_button.addEventListener(\"click\",a,!1))})(document,window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":151
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(G){function A(m){try{return!!K.test(m)}catch(n){console.log(n)}}function B(m){function n(b){return Math.round(100*b.target.currentTime\/b.target.duration)+\"%\"}function c(b,a,c){var l=u(b);a:{try{var k=b.target.id||u(b);break a}catch(p){console.log(\"HTML5 Video Listener Error: \",p)}k=void 0}var C=f,h=f,m=f;a:{try{var F=b.target.duration;break a}catch(p){console.log(\"HTML5 Video Listener Error: \",p)}F=void 0}a:{try{var x=b.target.currentTime;break a}catch(p){console.log(\"HTML5 Video Listener Error: \",\np)}x=void 0}b={videoType:\"html5\",videoAction:a,videoPercent:c,videoDetails:{title:l,id:k,playerId:C,uploadDate:h,author:m,duration:F,currentTime:x,muted:f,fullscreened:f,autoPlay:f,playerLocation:f,show:f,season:f,brand:f,preRoll:f,country:f,playlistId:f,playlistTitle:f,playlistSize:f,playlistNumber:f,channel:f,subChannel:f,authorType:f,publishDate:f,interactable:f,sourceFile:f,publishedBy:f,publisherType:f}};return b.videoTitle=b.videoDetails.title,b.videoId=b.videoDetails.id,b.videoNonInteraction=\n!A(b.videoAction),b}function u(b){try{return b.target.title||decodeURIComponent(b.target.currentSrc.split(\"\/\")[b.target.currentSrc.split(\"\/\").length-1])}catch(z){console.log(\"HTML5 Video Listener Error: \",z)}}var k=document.getElementsByTagName(\"video\"),f=void 0,t=m.sendVideoEvent,a=m.milestones.map(function(b){return b\/100});for(m=0;m\u003Ck.length;m++){var q=k[m];q.milestones=a;q.videoFirstPlay=!0;q.videoJustSeeked=!1;q.videoJustFinished=!1;q.addEventListener(\"play\",function(b){!0===b.target.videoFirstPlay?\n(b.target.videoFirstPlay=!1,t(\"video-engagement\",c(b,\"play\",\"0%\"))):!0===b.target.videoJustSeeked?b.target.videoJustSeeked=!1:t(\"video-engagement\",c(b,\"resume\",n(b)))},!0);q.addEventListener(\"pause\",function(b){b.target.duration===b.target.currentTime||b.target.seeking||t(\"video-engagement\",c(b,\"pause\",n(b)))},!0);q.addEventListener(\"ended\",function(b){b.target.videoFirstPlay=!0;b.target.videoJustFinished=!0;b.target.milestones=a;t(\"video-engagement\",c(b,\"finish\",n(b)))},!0);q.addEventListener(\"seeked\",\nfunction(b){!0===b.target.videoJustFinished?b.target.videoJustFinished=!1:(b.target.videoJustSeeked=!0,t(\"video-engagement\",c(b,\"seek\",n(b))))},!0);q.addEventListener(\"timeupdate\",function(b){var a,f=b.target.currentTime\/b.target.duration;if(!(f\u003Cb.target.milestones[0]||0===b.target.milestones.length)){for(a=b.target.milestones.splice(0,1)[0];0\u003Cb.target.milestones.length\u0026\u0026f\u003Eb.target.milestones[0];)a=b.target.milestones.splice(0,1)[0];t(\"video-engagement\",c(b,\"progress\",100*a+\"%\"))}},!0)}}function L(m){var n=\n\"\";n=!!Promise;var c=[];c=m.milestones.slice();var u,k,f=m.sendVideoEvent,t=0,a=void 0,q=[],b=[],z=5,l={},v={},E=\"*\";if(!0===n)try{!function(){function c(b,c){b;var p={event:\"video-engagement\",videoType:\"Vimeo\",videoAction:c.action,videoTitle:c.title,videoPercent:c.percent,videoNonInteraction:c.nonInteraction,videoDetails:{title:a,videoId:a,playerId:a,uploadDate:a,author:a,duration:a,currentTime:a,muted:a,fullscreened:a,autoPlay:a,playerLocation:a,show:a,season:a,brand:a,preRoll:a,country:a,playlistId:a,\nplaylistTitle:a,playlistSize:a,playlistIndex:a,channel:a,subChannel:a,authorType:a,publishDate:a,interactable:a,sourceFile:a,publishedBy:a,publisherType:a}},F=[b.getVideoTitle().then(function(b){return{key:\"title\",val:b}})[\"catch\"](function(){return{key:\"title\",val:a}}),b.getVideoId().then(function(b){return{key:\"id\",val:b}})[\"catch\"](function(){return{key:\"id\",val:a}}),b.getDuration().then(function(b){return{key:\"duration\",val:b}}),b.getCurrentTime().then(function(b){return{key:\"currentTime\",val:b}})];\nPromise.all(F).then(function(b){for(i=0;i\u003Cb.length;i++)p.videoDetails[b[i].key]=b[i].val;\"__SET_TITLE__\"===c.title\u0026\u0026(p.videoTitle=p.videoDetails.title);p.videoId=p.videoDetails.id;p.videoDetails.videoId=p.videoDetails.id;f(\"video-engagement\",p)})[\"catch\"](function(b){console.log(b)})}function h(){try{if(Vimeo)return window.clearInterval(u),void function(){for(var b=0;b\u003Cq.length;b++){var a=new Vimeo.Player(q[b]);a.milestones=[];a.milestones=m.milestones.slice();a.on(\"play\",function(b){var a={action:\"resume\",\npercent:Math.round(100*b.percent)+\"%\",title:\"__SET_TITLE__\",nonInteraction:!1};0===b.percent\u0026\u0026(a.action=\"play\",a.title=\"__SET_TITLE__\");c(this,a)});a.on(\"pause\",function(b){var a={action:\"pause\",percent:Math.round(100*b.percent)+\"%\",title:\"__SET_TITLE__\",nonInteraction:!1};100!=100*b.percent\u0026\u0026c(this,a)});a.on(\"ended\",function(b){b={action:\"finish\",title:\"__SET_TITLE__\",percent:\"100%\",value:void 0,nonInteraction:!1};c(this,b)});a.on(\"timeupdate\",function(b){var a,f={action:\"progress\",title:\"__SET_TITLE__\",\npercent:Math.round(100*b.percent)+\"%\",nonInteraction:!0};if(!(100*b.percent\u003Cthis.milestones[0]||0===this.milestones.length)){for(a=this.milestones.splice(0,1)[0];0\u003Cthis.milestones.length\u0026\u0026100*b.percent\u003Ethis.milestones[0];)a=this.milestones.splice(0,1)[0];f.percent=a+\"%\";c(this,f)}});a.on(\"seeked\",function(b){b={action:\"seek\",percent:Math.round(100*b.percent)+\"%\",title:\"__SET_TITLE__\",nonInteraction:!1};c(this,b)})}}()}catch(F){t\u003C=z?(t++,u=window.setInterval(h,1E3)):window.clearInterval(u)}}t=0;z=\n5;var k=window.setInterval(function(){if(0\u003C(b=function(b){for(var a=[],f=0;f\u003Cb.length;f++)a.push(b[f]);return a}(document.getElementsByTagName(\"iframe\"))).length)return window.clearInterval(k),void function(){for(var a=0;a\u003Cb.length;a++)if(\/^https?:\\\/\\\/player.vimeo.com\/.test(b[a].src)){if(!b[a].vimeoId)if(\/player_id=\/.test(b[a].src)){var f=\/player_id=([^\u0026]*)\/.exec(b[a].src)[1],c=b[a].vimeoId=\/video\\\/([0-9]*)\/.exec(b[a].src)[1];b[a].vimeoId=c;v[f]=b[a]}else c=\/video\\\/([0-9]*)\/.exec(b[a].src)[1],b[a].vimeoId=\nc,~b[a].src.indexOf(\"?\")?b[a].src+=\"\\x26player_id\\x3d\"+c:b[a].src+=\"?player_id\\x3d\"+c;q.push(b[a])}0\u003Cq.length\u0026\u0026(a=document.createElement(\"script\"),f=document.getElementsByTagName(\"script\")[0],a.async=!0,a.type=\"text\/javascript\",a.src=\"https:\/\/player.vimeo.com\/api\/player.js\",f.parentNode.insertBefore(a,f));t=0;u=window.setInterval(h,1E3)}();t\u003C=z?t++:window.clearInterval(k)},1E3)}()}catch(C){console.log(\"newvimeo didn't work\")}else try{!function(){function b(b,e){b;var g=e.action,I=e.title,f=e.percent,\nc=e.nonInteraction,y=w(b);try{var h=b.videoData.video_id}catch(J){h=a}var k=b.id;try{var l=b.videoData.author_name}catch(J){l=a}var m=A(b),n=d(b);try{var p=b.videoData.autoplay}catch(J){p=a}try{var q=b.videoData.author_url}catch(J){q=a}g={event:\"trigger-ga-event\",videoType:\"Vimeo\",videoAction:g,videoTitle:I,videoPercent:f,videoNonInteraction:c,videoDetails:{title:y,videoId:h,playerId:k,uploadDate:a,author:l,duration:m,currentTime:n,muted:a,fullscreened:a,autoPlay:p,playerLocation:a,show:a,season:a,\nbrand:a,preRoll:a,country:a,playlistId:a,playlistTitle:a,playlistSize:a,playlistNumber:a,channel:q,subChannel:a,authorType:a,publishDate:a,interactable:a,sourceFile:a,publishedBy:a,publisherType:a}};return g.videoId=g.videoDetails.videoId,g}function h(){var b=document.getElementsByTagName(\"iframe\");if(b)for(var a=0;a\u003Cb.length;a++)if(\/^https?:\\\/\\\/player.vimeo.com\/.test(b[a].src)\u0026\u0026!b[a].vimeoId){if(\/player_id=\/.test(b[a].src)){var d=\/player_id=([^\u0026]*)\/.exec(b[a].src)[1],e=b[a].vimeoId=\/video\\\/([0-9]*)\/.exec(b[a].src)[1];\nb[a].vimeoId=e;v[d]=b[a];v[d].APVideo={played:!1}}else e=\/video\\\/([0-9]*)\/.exec(b[a].src)[1],b[a].vimeoId=e,v[e]=b[a],v[e].APVideo={played:!1},~b[a].src.indexOf(\"?\")?b[a].src+=\"\\x26player_id\\x3d\"+e:b[a].src+=\"?player_id\\x3d\"+e;z(e);q(b[a])}5\u003E=t?t+=1:window.clearInterval(y)}function m(){window.clearInterval(y);h()}function n(a){if(!\/^https?:\\\/\\\/player.vimeo.com\/.test(a.origin))return!1;\"*\"===E\u0026\u0026(E=a.origin);try{var d=JSON.parse(a.data)}catch(P){d={data:{}};var r=\/(method=)(.*)(\u0026)\/i;r=r.exec(a.data)[2];\nvar g=\/(params=)(.*)\/i;a=g.exec(a.data)[2].split(\",\");switch(r){case \"onProgress\":d.event=\"playProgress\";d.player_id=a[1];d.data.seconds=a[0];break;case \"onPause\":d.event=\"pause\";break;case \"onPlay\":d.event=\"play\"}}a=v[d.player_id]||{};r=a.videoData||{};switch(d.event){case \"ready\":if(d.player_id)(q(a),a.playerLoaded)||(a.sendReady=!0);else for(key in v)q(v[key]);break;case \"play\":r.progress+1.5\u003Er.duration\u0026\u0026(r.progress=0);g={action:\"play\",title:w(a),percent:Math.round(e(a))+\"%\",nonInteraction:!1};\nif(!1===a.APVideo.played){a.APVideo.played=!0;l=b(a,g);f(\"video-engagement\",l);break}g.label=Math.round(e(a))+\"%\";g.action=\"resume\";l=b(a,g);f(\"video-engagement\",l);u(a);break;case \"playProgress\":1.5\u003CMath.abs(d.data.seconds-r.progress)\u0026\u0026(r.progress=d.data.seconds,g={action:\"seek\",title:w(a),percent:Math.round(e(a))+\"%\",nonInteraction:!1},l=b(a,g),f(\"video-engagement\",l));u(a);r.progress=d.data.seconds;break;case \"pause\":g={action:\"finish\",title:w(a),percent:Math.round(e(a))+\"%\",nonInteraction:!1};\nr.progress+1.5\u003Er.duration?(r.progress=r.duration,l=b(a,g),f(\"video-engagement\",l),a.APVideo.played=!1):(g.percent=Math.round(e(a))+\"%\",g.action=\"pause\",l=b(a,g),f(\"video-engagement\",l));break;case \"finish\":g={action:\"finish\",title:w(a),percent:\"100%\",nonInteraction:!1},r.progress+1.5\u003Er.duration?(r.progress=r.duration,l=b(a,g),f(\"video-engagement\",l),a.APVideo.played=!1):(g.percent=Math.round(e(a))+\"%\",g.action=\"pause\",l=b(a,g),f(\"video-engagement\",l))}}function u(a){var d=a.videoData||{};if(d.progress\u0026\u0026\nd.duration){var e=Math.floor(d.progress\/d.duration*100);if(e\u003Ed.nextMilestone)for(var g=0;g\u003Cc.length;g++)if(c[g]\u003Ee){e={action:\"progress\",title:w(a),percent:c[g-1]+\"%\",nonInteraction:!1};if(l=b(a,e),f(\"video-engagement\",l),k)for(var y=g-2;c[y]\u003E=d.nextMilestone;y--)e={action:\"progress\",title:w(a),percent:c[y]+\"%\",nonInteraction:!1},l=b(a,e),f(\"video-engagement\",l);d.nextMilestone=c[g];break}}}function p(a,b,d){b={method:b};d\u0026\u0026(b.value=d);d=JSON.stringify(b);a.contentWindow.postMessage(d,E)}function q(a){p(a,\n\"addEventListener\",\"loadProgress\");p(a,\"addEventListener\",\"play\");p(a,\"addEventListener\",\"playProgress\");p(a,\"addEventListener\",\"pause\");p(a,\"addEventListener\",\"seek\");p(a,\"addEventListener\",\"finish\")}function z(a){var b=new XMLHttpRequest;b.onreadystatechange=function(){if(b.readyState===XMLHttpRequest.DONE\u0026\u0026200===b.status){var a,d=JSON.parse(b.responseText);for(key in v)d.video_id==v[key].vimeoId\u0026\u0026(a=v[key]);var g=\/color=([a-zA-Z0-9]*)\/.exec(a.src);a.videoData=d;a.videoData.color=g?g[1]:\"00adef\";\na.videoData.height=a.getAttribute(\"height\");a.videoData.width=a.getAttribute(\"width\");a.videoData.autoplay=String(\/autoplay=(true|[1-9])\/.test(a.src));a.videoData.nextMilestone=c[0];a.videoData.playProgressCount=0;a.videoData.progress=0;a.videoData.url=d.provider_url+String(d.video_id);a.videoData.upload_date=a.videoData.upload_date?a.videoData.upload_date.split(\" \")[0]:void 0;w(a);Math.round(e(a));a.sendReady?(w(a),Math.round(e(a))):a.playerLoaded=!0}};b.open(\"GET\",\"https:\/\/vimeo.com\/api\/oembed.json?url\\x3dhttp:\/\/vimeo.com\/\"+\na,!0);b.send(null)}function w(a){a=a.videoData||{};return a.title}function A(b){try{return b.videoData.duration}catch(I){return a}}function d(b){try{return b.videoData.progress}catch(I){return a}}function e(b){try{var e=d(b),g=A(b);return e\/g*100}catch(O){return a}}console.log(\"In oldVimeo Script\");var y=window.setInterval(h,1E3);window.addEventListener?(window.addEventListener(\"message\",n,!1),window.addEventListener(\"DOMContentLoaded\",m)):(window.attachEvent(\"onmessage\",n,!1),window.attachEvent(\"onload\",\nm));c.push(100)}()}catch(C){console.log(\"oldvimeo didn't work\")}}function N(m){function n(a,b,f){var d,e,c,y;a={videoType:\"youtube\",videoAction:b,videoPercent:f,videoDetails:{title:z(a),videoId:function(a){try{var b=a.target.getVideoData();return b.video_id}catch(M){}}(a),playerId:h,uploadDate:h,author:(y=a,y.target.getVideoData().author),duration:v(a),currentTime:l(a),muted:(c=a,c.target.isMuted()),fullscreened:h,autoPlay:h,playerLocation:h,show:h,season:h,brand:h,preRoll:h,country:h,playlistId:(e=\na,e.target.getPlaylistId()),playlistTitle:h,playlistSize:function(a){try{var b=a.target.getPlaylist().length;return b}catch(M){return h}}(a),playlistIndex:(d=a,d.target.getPlaylistIndex()),channel:h,subChannel:h,authorType:h,publishDate:h,interactable:h,sourceFile:h,publishedBy:h,publisherType:h}};return a.videoTitle=a.videoDetails.title,a.videoId=a.videoDetails.id,a.videoNonInteraction=!A(a.videoAction),a}function c(a){PMNdataLayer.push({event:\"trigger-ga-event\",eventCategory:\"video - youtube\",eventAction:\"error\",\neventLabel:a,eventValue:void 0,eventNonInteraction:!1})}function u(){if(void 0!==YT\u0026\u0026void 0!==YT.Player){window.clearInterval(B);for(var a=0;a\u003Cx.length;a++)if(\/youtube.com\\\/embed\/.test(x[a].src)){var b=new YT.Player(x[a],{events:{onStateChange:k,onError:c}});b.APVideo={played:!1,milestones:F.slice(),timeoutID:void 0,justSeeked:!1,lastPlayedTitle:void 0,lastState:void 0,previousTime:0};p.push(b)}}else H\u003C=w?H++:window.clearInterval(B)}function k(b){var e,d,g,c;b.data===YT.PlayerState.PLAYING\u0026\u0026(window.clearInterval(b.target.APVideo.timeoutID),\nb.target.APVideo.timeoutID=window.setInterval(f,500,b),d={action:\"resume\",percentPlayed:C(e=b)},!1===e.target.APVideo.played?(e.target.APVideo.played=!0,d.action=\"play\",d.label=z(e),e.target.APVideo.lastPlayedTitle=d.label,e.target.APVideo.previousTime=0,D(\"video-engagement\",n(e,d.action,d.percentPlayed)),e.target.APVideo.lastState=\"play\"):!0===e.target.APVideo.justSeeked?(e.target.APVideo.justSeeked=!1,\"pause\"===e.target.APVideo.lastState\u0026\u0026(D(\"video-engagement\",n(e,d.action,d.percentPlayed)),e.target.APVideo.lastState=\n\"play\")):\"pause\"===e.target.APVideo.lastState\u0026\u0026(D(\"video-engagement\",n(e,d.action,d.percentPlayed)),e.target.APVideo.lastState=\"play\"));if(b.data===YT.PlayerState.PAUSED){window.clearInterval(b.target.APVideo.timeoutID);b.target.APVideo.timeoutID=window.setInterval(t,500,b);e=b;d=\"pause\";var h=C(e);if(!0===e.target.APVideo.justSeeked)e.target.APVideo.justSeeked=!1;else{e.target.APVideo.justSeeked=!1;var k=e.target.APVideo.previousTime;2\u003CMath.abs(k-l(e))?(a(e),e.target.APVideo.previousTime=l(e)):(D(\"video-engagement\",\nn(e,d,h)),e.target.APVideo.lastState=\"pause\")}}b.data===YT.PlayerState.ENDED\u0026\u0026(window.clearInterval(b.target.APVideo.timeoutID),b.target.APVideo.lastState=void 0,c={action:\"finish\",percentPlayed:C(g=b)},g.target.APVideo.played=!1,D(\"video-engagement\",n(g,c.action,c.percentPlayed)))}function f(a){q(a);a.target.APVideo.previousTime=l(a)}function t(b){var e=b.target.APVideo.previousTime;2\u003CMath.abs(e-l(b))\u0026\u0026(a(b),b.target.APVideo.previousTime=l(b));q(b)}function a(a){var b=\"seek\",d=C(a);a.target.APVideo.justSeeked=\n!0;D(\"video-engagement\",n(a,b,d));d=E(a)\/100;var c=a.target.APVideo.milestones;if(!(d\u003Cc[0]||0===c.length)){for(b=c.splice(0,1)[0];0\u003Cc.length\u0026\u0026d\u003Ec[0];)b=c.splice(0,1)[0];d=\"progress\";b=100*b+\"%\";D(\"video-engagement\",n(a,d,b))}}function q(a){var b,d=E(a)\/100,c=a.target.APVideo.milestones;if(!(d\u003Cc[0]||0===c.length)){for(b=c.splice(0,1)[0];0\u003Cc.length\u0026\u0026d\u003Ec[0];)b=c.splice(0,1)[0];d=\"progress\";b=100*b+\"%\";D(\"video-engagement\",n(a,d,b))}}function b(a){for(var b=[],d=0;d\u003Ca.length;d++)b.push(a[d]);return b}\nfunction z(a){try{return a.target.getVideoData().title}catch(e){return h}}function l(a){try{return a.target.getCurrentTime()}catch(e){return h}}function v(a){try{return a.target.getDuration()}catch(e){return h}}function E(a){try{var b,d=l(a),c=v(a);return void 0===d||void 0===c||0===c?0:void 0===(b=d\/c*100)||isNaN(b)||b===1\/0?0:b}catch(I){return h}}function C(a){try{var b=E(a);return Math.round(b)+\"%\"}catch(y){return h}}var h=void 0,D=m.sendVideoEvent,F=m.milestones.map(function(a){return a\/100}),\nx=b(document.getElementsByTagName(\"iframe\")),p=[],B,H=0,w=5,G=window.setInterval(function(){if(0\u003C(x=b(document.getElementsByTagName(\"iframe\"))).length){window.clearInterval(G);for(var a=0;a\u003Cx.length;a++){var c=x[a].src;c\u0026\u0026\"about:blank\"!==c\u0026\u0026\/youtube.com\\\/embed\/.test(c)\u0026\u0026-1===c.indexOf(\"enablejsapi\\x3d\")\u0026\u0026(x[a].src+=(~c.indexOf(\"?\")?\"\\x26\":\"?\")+\"enablejsapi\\x3d1\")}0\u003Cx.length\u0026\u0026(a=document.createElement(\"script\"),c=document.getElementsByTagName(\"script\")[0],a.async=!0,a.type=\"text\/javascript\",a.src=\n\"\/\/www.youtube.com\/iframe_api\",c.parentNode.insertBefore(a,c),B=window.setInterval(u,1E3))}else H\u003C=w?H++:window.clearInterval(G)},1E3);H=0;w=5}console.log(\"Video Tracking Version 1.7\");var K=\/play|pause|resume|seek\/i;window._apVideo=function(m){var n=function(c){try{return!c.platform||\/gtm|google tag manager\/i.test(c.platform)?(c.platform=\"gtm\",c.sendVideoEvent=function(c,k){window.PMNdataLayer=window.PMNdataLayer||[];window.PMNdataLayer.push({event:c,videoType:k.videoType,videoAction:k.videoAction,\nvideoTitle:k.videoTitle,videoId:k.videoId,videoPercent:k.videoPercent,videoNonInteraction:k.videoNonInteraction,videoDetails:k.videoDetails})}):\/tealium\/i.test(c.platform)?(c.platform=\"tealium\",c.sendVideoEvent=function(c,k){var f={event:c,vt_videoType:k.videoType,vt_videoAction:k.videoAction,vt_videoTitle:k.videoTitle,vt_videoId:k.videoId,vt_videoPercent:k.videoPercent,vt_videoNonInteraction:k.videoNonInteraction,vt_videoDetails:k.videoDetails};window.utag\u0026\u0026window.utag.link?window.utag.link(f):errorHandler({message:\"tealium - utag not found\"})}):\n\/ga|google analytics\/i.test(c.platform)\u0026\u0026(c.platform=\"ga\",myTracker=c.trackerName?c.trackerName+\".\":\"\",c.sendVideoEvent=function(c,k){var f={hitType:\"event\",eventCategory:c,eventAction:k.videoAction,eventLabel:k.videoTitle,nonInteraction:k.videoNonInteraction};ga(myTracker+\"send\",f)}),c}catch(u){console.log(u)}}(m);m.milestones=m.milestones||[25,50,75];m.html5?B(n):console.log(\"no html5 video\");m.vimeo?L(n):console.log(\"no vimeo video\");m.youtube?N(n):console.log(\"no youtube\")}}(window.PMNdataLayer);\n(function(){console.log(\"VT Settings\");var G={platform:\"gtm\",jwplayer:!1,youtube:!0,vimeo:!0,brightcove:!1,html5:!1,milestones:[25,50,75]},A=setInterval(function(){var B=window._apVideo||void 0;B\u0026\u0026(clearInterval(A),B(G))},200);setTimeout(function(){clearInterval(A)},2E3)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":161
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._vis_opt_queue=window._vis_opt_queue||[];window._vis_opt_queue.push(function(){_vis_opt_goal_conversion(203)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":163
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var d=\"https:\/\/pro.ip-api.com\/json\/?key\\x3dCGU0YmUOsU81utw\";if(\"undefined\"!==typeof window.sessionStorage){if(!sessionStorage.getItem(\"PMNgeoIP\")){var b=new XMLHttpRequest;b.open(\"GET\",d,!0);b.send();b.onreadystatechange=function(){if(4===b.readyState)if(200===b.status){var a=JSON.parse(b.responseText),c=a.zip,e=a.status,d=a.query;a=a.message;sessionStorage.setItem(\"PMNgeoIP\",1);PMNdataLayer.push({event:\"ipAPIdone\",user:{ipZip:c,IP:d,status:e,message:a}})}else{try{c=JSON.parse(b.responseText)}catch(f){c=\nf}e=c.status;a=c.message;sessionStorage.getItem(\"PMNgeoIPerror\")||PMNdataLayer.push({event:\"ipAPIerror\",user:{status:e,message:a}})}}}}else\"undefined\"===typeof ",["escape",["macro",372],8,16],"\u0026\u0026(document.cookie=\"sessionLocationGeoIP\\x3d1;expires\\x3d0;path\\x3d\/\",PMNdataLayer.push({event:\"ipAPIerror\",user:{message:\"sessionStorage not supported\"}}))})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction addLayerEvent(){window.PMNdataLayer.push({event:\"auth0-login\"})}\nfunction modalTimeout(){var a=null!==document.querySelector(\".indexLogInButton\"),b=null!==document.querySelector(\".user-authorization\"),c=null!==document.querySelector(\"#btnLogin\"),d=null!==document.querySelector(\"#userloginlogo\"),e=null!==document.querySelector(\".userloginlogo\"),f=null!==document.querySelector(\"#pnlLogin\");a?document.querySelector(\".indexLogInButton\").addEventListener(\"click\",addLayerEvent,!1):b?(document.querySelector(\".user-authorization__login-text\").addEventListener(\"click\",addLayerEvent,\n!1),document.querySelector(\".user-authorization__icon\").addEventListener(\"click\",addLayerEvent,!1)):c?document.querySelector(\"#btnLogin\").addEventListener(\"click\",addLayerEvent,!1):d?document.querySelector(\"#userloginlogo\").addEventListener(\"click\",addLayerEvent,!1):e?document.querySelector(\".userloginlogo\").addEventListener(\"click\",addLayerEvent,!1):f\u0026\u0026document.querySelector(\"#pnlLogin\").addEventListener(\"click\",addLayerEvent,!1)}setTimeout(modalTimeout,1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar css=\".auth0-lock.auth0-lock .auth0-lock-form {-webkit-animation: none !important;-moz-animation: none !important;-o-animation: none !important;-ms-animation: none !important;animation: none !important;}\",head=document.head||document.getElementsByTagName(\"head\")[0],style=document.createElement(\"style\");style.type=\"text\/css\";style.styleSheet?style.styleSheet.cssText=css:style.appendChild(document.createTextNode(css));head.appendChild(style);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":186
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b){a.kwa||(a.kwa=function(){(a.kwa.q=a.kwa.q||[]).push(arguments)});se=b.createElement(\"script\");fs=b.scripts[0];se.src=\"\/\/cdn.keywee.co\/dist\/analytics.min.js\";fs.parentNode.insertBefore(se,fs)})(window,document);\u003C\/script\u003E \n\u003Cscript type=\"text\/gtmscript\"\u003Ekwa(\"initialize\",871,{trackEU:!1});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._vis_opt_queue=window._vis_opt_queue||[];window._vis_opt_queue.push(function(){_vis_opt_goal_conversion(202)});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":189
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=\"subscriberId\";a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=new RegExp(\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\");if(a=(a=a.exec(location.search))\u0026\u0026a[1]||\"\"){sessionStorage.setItem(\"subscriberId\",a);var b=\"subscriberId\\x3d\"+a,d=window.location.search+\"\",c=\"\";-1\u003Cwindow.location.search.indexOf(\"?\"+b+\"\\x26\")?c=d.replace(b+\"\\x26\",\"\"):-1\u003Cwindow.location.search.indexOf(\"\\x26\"+b)\u0026\u0026(c=d.replace(\"\\x26\"+b,\"\"));window.history.replaceState({},document.title,window.location.pathname+c);PMNdataLayer.push({event:\"piano-id\",\nsubscriberId:a})}})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":192
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar subscriberId=sessionStorage.getItem(\"subscriberId\");if(subscriberId){var pianoEnv=-1\u003Cwindow.location.hostname.indexOf(\"test-\")?\"preprod\":\"prod\",xhttp=new XMLHttpRequest,termName=\"Digital+access\",termId=\"prod\"===pianoEnv?\"TMNURIZE8U58\":\"TMUYBA3C6QAA\";xhttp.open(\"POST\",\"https:\/\/api.philly.com\/piano\/\"+pianoEnv,!0);xhttp.setRequestHeader(\"Content-type\",\"application\/x-www-form-urlencoded\");xhttp.send(\"term_name\\x3d\"+termName+\"\\x26term_id\\x3d\"+termId+\"\\x26tracking_id\\x3d\"+encodeURI(subscriberId))};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":193
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.getElementsByClassName(\"user-authorization\")[0].innerHTML=\"\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":199
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"\/\/cdn.tinypass.com\/api\/tinypass.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etp=window.tp||[];tp.push([\"setAid\",-1\u003Cwindow.location.hostname.indexOf(\"test-\")?\"dwMawgT3hJ\":\"HtZYnkXBmA\"]);tp.push([\"setEndpoint\",\"https:\/\/api.tinypass.com\/api\/v3\"]);tp.push([\"setUseTinypassAccounts\",!1]);tp.push([\"setZone\",\"checkout\"]);tp.push([\"init\",function(){window.tp.experience.init()}]);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(l,m){function n(a){a=d[a].toString()+\"%\";PMNdataLayer.push({event:\"scroll-milestone\",milestone:a})}var p=l,d=m,g=0,h,k=0,e=Math.max,q=Math.round;window.onscroll=function(){var a=window;var b=a.innerHeight||(document.documentElement?document.documentElement.clientHeight:document.body.clientHeight)||document.body.clientHeight;var c=document.body;var f=document.documentElement;c=document.height||e(e(c.scrollHeight,f.scrollHeight),e(c.offsetHeight,f.offsetHeight),e(c.clientHeight,f.clientHeight));\na=a.pageYOffset||(document.documentElement?document.documentElement.scrollTop:document.body.scrollTop)||document.body.scrollTop;b=c-(b+a);b=b\/c*100;b=100-b;for(a=d.length;a;)a--,q(b)\u003E=d[a]\u0026\u0026k\u003Cd[a]\u0026\u0026(currentMilestone=k=d[a],currentMilestone!=g\u0026\u0026(g=currentMilestone,window.clearTimeout(h),h=window.setTimeout(n(a),p)),a=0)}})(2E3,[0,10,20,30,40,50,60,70,80,90,100]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":112
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"gtm.pageError"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"Found"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"adblockDetection"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",95],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",179],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"VWO-data-push"
    },{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":"\\.(abr|docx?|epub|tgz|gif|jpb|jpg|js|mp3|pdf|png|pptx?|psd|txt|vcf|wav|xlsx?|zip)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",242],
      "arg1":"(^$|((^|,)1982237_132($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",242],
      "arg1":"(^$|((^|,)1982237_134($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"mailto:"
    },{
      "function":"_re",
      "arg0":["macro",242],
      "arg1":"(^$|((^|,)1982237_136($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",245],
      "arg1":"unavailable"
    },{
      "function":"_re",
      "arg0":["macro",242],
      "arg1":"(^$|((^|,)1982237_141($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",9],
      "arg1":"tel:"
    },{
      "function":"_re",
      "arg0":["macro",242],
      "arg1":"(^$|((^|,)1982237_223($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":"(twitter|facebook|pinterest|instagram|youtube|reddit|linkedin|hubpages|vine|meetup)\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":"(.+)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",242],
      "arg1":"(^$|((^|,)1982237_137($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",242],
      "arg1":"(^$|((^|,)1982237_138($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",248],
      "arg1":"seek"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"video-engagement"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"email-signup"
    },{
      "function":"_re",
      "arg0":["macro",267],
      "arg1":"reply|created|posted"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"comment"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"timeEngaged"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"social-share"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"error-404"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"error-500"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"gallery-nav"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"connext-login"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"dfp-ad-served"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"scroll-milestone"
    },{
      "function":"_cn",
      "arg0":["macro",317],
      "arg1":"SubmitAccount"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"dssSubscribe.aspx"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",319],
      "arg1":"(test-checkout.philly.com)|(test-checkout.inquirer.com)"
    },{
      "function":"_cn",
      "arg0":["macro",317],
      "arg1":"invnav"
    },{
      "function":"_re",
      "arg0":["macro",242],
      "arg1":"(^$|((^|,)1982237_245($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",324],
      "arg1":"3"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"meter-event"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"gallery-open"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",242],
      "arg1":"(^$|((^|,)1982237_313($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",242],
      "arg1":"(^$|((^|,)1982237_724($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"checkout"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"add-to-cart"
    },{
      "function":"_eq",
      "arg0":["macro",267],
      "arg1":"created"
    },{
      "function":"_eq",
      "arg0":["macro",267],
      "arg1":"reply"
    },{
      "function":"_re",
      "arg0":["macro",319],
      "arg1":"stage.www.philly.com|(stage.www2.philly.com)|(stage.www.inquirer.com)"
    },{
      "function":"_eq",
      "arg0":["macro",337],
      "arg1":"unavailable"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"ipAPIdone"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"ipAPIerror"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"hearkenSubmit"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"purchase"
    },{
      "function":"_eq",
      "arg0":["macro",350],
      "arg1":"play"
    },{
      "function":"_eq",
      "arg0":["macro",350],
      "arg1":"pause"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"longform-custom-interaction"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"created_new_user"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"autorefresh"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"misc_event"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"NotFound"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"mobile-adhesion-x-out"
    },{
      "function":"_eq",
      "arg0":["macro",329],
      "arg1":"created_new_user"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"subscription-flow"
    },{
      "function":"_eq",
      "arg0":["macro",355],
      "arg1":"log-in"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"user-login"
    },{
      "function":"_re",
      "arg0":["macro",356],
      "arg1":"(Stop)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"piano_meter_event"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"meterStatus"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"piano_meter_click"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"auth0-login"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"cookie-deleted"
    },{
      "function":"_re",
      "arg0":["macro",319],
      "arg1":"(dev.www.philly.com)|(dev.www.inquirer.com)"
    },{
      "function":"_re",
      "arg0":["macro",319],
      "arg1":"pmn-sandbox.origin.arcpublishing.com|sandbox.pmn.arcpublishing.com"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"Cobrand"
    },{
      "function":"_eq",
      "arg0":["macro",370],
      "arg1":"ad:campaign"
    },{
      "function":"_re",
      "arg0":["macro",319],
      "arg1":"stage.www.philly.com|(stage.www2.philly.com)|(stage.www.inquirer.com)|(dev.www.inquirer.com)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",319],
      "arg1":"checkout.philly.com|checkout.inquirer.com"
    },{
      "function":"_eq",
      "arg0":["macro",329],
      "arg1":"add subscription success"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"purchase"
    },{
      "function":"_re",
      "arg0":["macro",319],
      "arg1":"(myaccount.inquirer.com)|(checkout.philly.com)|(checkout.inquirer.com)"
    },{
      "function":"_re",
      "arg0":["macro",319],
      "arg1":"www.inquirer.com"
    },{
      "function":"_re",
      "arg0":["macro",319],
      "arg1":"(checkout.inquirer.com)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",242],
      "arg1":"(^$|((^|,)1982237_731($|,)))"
    }],
  "rules":[
    [["if",0],["add",4]],
    [["if",1,2],["add",5]],
    [["if",7],["unless",5,6],["add",6]],
    [["if",8,9,10],["add",7],["block",8,10]],
    [["if",9,11,12],["add",8]],
    [["if",9,13,14],["add",9],["block",8,10]],
    [["if",9,19,21,22],["unless",20],["add",10]],
    [["if",9,20,23,24],["add",11],["block",10]],
    [["if",26],["unless",25],["add",12]],
    [["if",9,16],["unless",15],["add",13],["block",8]],
    [["if",27],["add",14,86]],
    [["if",28,29],["add",15]],
    [["if",30],["add",16]],
    [["if",31],["add",17]],
    [["if",9,17,18],["add",18],["block",8,10]],
    [["if",32],["add",19]],
    [["if",33],["add",20]],
    [["if",34],["add",21]],
    [["if",35],["add",22]],
    [["if",36],["add",23],["block",23]],
    [["if",4],["add",24,1,32,52,71,72,76,78,80,82,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70]],
    [["if",37],["add",25]],
    [["if",38,39,40],["add",26]],
    [["if",9,42,43],["add",27]],
    [["if",44,45],["add",28]],
    [["if",46],["add",2]],
    [["if",47,48],["add",29]],
    [["if",47,49],["add",29]],
    [["if",50],["add",30]],
    [["if",51],["add",30]],
    [["if",29],["unless",52,53],["add",31]],
    [["if",3,4],["add",3],["block",5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,1,27,28,2,29,30,31,32,33,34,35,38,39,40,42,45,46,47,48,49,0,50,51,53,71,74,75,76,77,78,80,82,90]],
    [["if",40],["unless",55],["add",33]],
    [["if",56],["add",34]],
    [["if",57],["add",35]],
    [["if",58,59],["add",36,79]],
    [["if",60],["add",37]],
    [["if",45],["unless",44],["add",38]],
    [["if",61],["add",39]],
    [["if",40,62],["add",40]],
    [["if",40,63],["add",40]],
    [["if",64],["add",41]],
    [["if",65],["add",42]],
    [["if",66],["add",43]],
    [["if",67],["add",44]],
    [["if",2,68],["add",45]],
    [["if",69],["add",46]],
    [["if",71],["unless",70],["add",47]],
    [["if",72,73],["add",48]],
    [["if",74,75],["add",49]],
    [["if",76],["add",0]],
    [["if",75],["unless",74],["add",50]],
    [["if",77],["add",51]],
    [["if",78],["add",53,84]],
    [["if",79],["add",54]],
    [["if",4],["unless",82],["add",73]],
    [["if",4,5],["unless",84],["add",74]],
    [["if",4,80],["add",75,85],["block",72]],
    [["if",4,54],["add",75,85],["block",32,71,72,76,77,78,79]],
    [["if",4,41],["add",75,77,87,90],["block",1,72]],
    [["if",4,81],["add",75],["block",72]],
    [["if",4,85],["add",77,87,90]],
    [["if",86,87],["add",81,88]],
    [["if",4,88],["add",83]],
    [["if",4,89],["add",85]],
    [["if",47,90,91],["add",89]],
    [["if",4,83],["block",73]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,ca=/^[\w+/_-]+[=]{0,2}$/,da=null,ha=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var ia=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ja=function(){this.Ha={};this.Lc=!1;this.ie={}};ja.prototype.get=function(a){return this.Ha["dust."+a]};ja.prototype.set=function(a,b){this.Lc||(a="dust."+a,this.ie.hasOwnProperty(a)||(this.Ha[a]=b))};ja.prototype.has=function(a){return this.Ha.hasOwnProperty("dust."+a)};var ka=function(a){var b=[],c;for(c in a.Ha)a.Ha.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ja.prototype.remove=function(a){a="dust."+a;this.Lc||this.ie.hasOwnProperty(a)||delete this.Ha[a]};ja.prototype.Og=function(){this.Lc=!0};var la=function(a){this.Ka=new ja;this.s=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ia(b)?this.s[Number(b)]=a[Number(b)]:this.Ka.set(b,a[b]))};aa=la.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.s.length;c++){var d=this.s[c];null===d||void 0===d?b.push(""):d instanceof la?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!ia(b))throw Error("RangeError: Length property must be a valid integer.");this.s.length=Number(b)}else ia(a)?this.s[Number(a)]=b:this.Ka.set(a,b)};aa.get=function(a){return"length"==a?this.length():ia(a)?this.s[Number(a)]:this.Ka.get(a)};aa.length=function(){return this.s.length};aa.Ic=function(){for(var a=ka(this.Ka),b=0;b<this.s.length;b++)a.push(b+"");return new la(a)};aa.remove=function(a){ia(a)?delete this.s[Number(a)]:this.Ka.remove(a)};aa.pop=function(){return this.s.pop()};
aa.push=function(a){return this.s.push.apply(this.s,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.s.shift()};aa.splice=function(a,b,c){return new la(this.s.splice.apply(this.s,arguments))};aa.unshift=function(a){return this.s.unshift.apply(this.s,Array.prototype.slice.call(arguments))};aa.has=function(a){return ia(a)&&this.s.hasOwnProperty(a)||this.Ka.has(a)};la.prototype.unshift=la.prototype.unshift;la.prototype.splice=la.prototype.splice;la.prototype.shift=la.prototype.shift;
la.prototype.push=la.prototype.push;la.prototype.pop=la.prototype.pop;la.prototype.remove=la.prototype.remove;la.prototype.getKeys=la.prototype.Ic;la.prototype.get=la.prototype.get;la.prototype.set=la.prototype.set;var ma=function(){},na=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},oa=function(a){return"number"==typeof a&&!isNaN(a)},pa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ra=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},sa=function(a,b){if(a&&pa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},ta=function(a,b){if(!oa(a)||
!oa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},va=function(a,b){for(var c=new ua,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},wa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},xa=function(a){return Math.round(Number(a))||0},ya=function(a){return"false"==String(a).toLowerCase()?!1:!!a},za=function(a){var b=[];if(pa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Aa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ba=function(){return(new Date).getTime()},ua=function(){this.prefix="gtm.";this.values={}};ua.prototype.set=function(a,b){this.values[this.prefix+a]=b};ua.prototype.get=function(a){return this.values[this.prefix+a]};ua.prototype.contains=function(a){return void 0!==this.get(a)};
var Ca=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Fa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ga=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ha=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ia=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ja=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};var Ka=function(a,b){ja.call(this);this.pe=a;this.ng=b};ha(Ka,ja);var La=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof Ka))throw Error("Attempting to execute non-function "+b[0]+".");return c.Tb.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.Qh;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};Ka.prototype.toString=function(){return this.pe};Ka.prototype.getName=function(){return this.pe};Ka.prototype.getName=Ka.prototype.getName;Ka.prototype.Ic=function(){return new la(ka(this))};
Ka.prototype.getKeys=Ka.prototype.Ic;Ka.prototype.Tb=function(a,b){var c=this;a.de().Lh();return this.ng.apply({evaluate:function(d){var e=a;return pa(d)?La(e,d):d},Sh:function(d){for(var e=a,g,h=0;h<d.length;h++)g=La(e,d[h]);return g},getName:function(){return c.getName()},de:function(){return a.de()},Rb:function(){return a}},Array.prototype.slice.call(arguments,1))};Ka.prototype.invoke=Ka.prototype.Tb;
Ka.prototype.lh=function(a,b){try{return this.Tb.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};Ka.prototype.safeInvoke=Ka.prototype.lh;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ma=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Na=function(a){if(null==a)return String(a);var b=Ma.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Oa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Pa=function(a){if(!a||"object"!=Na(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Oa(a,"constructor")&&!Oa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Oa(a,b)},u=function(a,b){var c=b||("array"==Na(a)?[]:{}),d;for(d in a)if(Oa(a,d)){var e=a[d];"array"==Na(e)?("array"!=Na(c[d])&&(c[d]=[]),c[d]=u(e,c[d])):Pa(e)?(Pa(c[d])||(c[d]={}),c[d]=u(e,c[d])):c[d]=e}return c};
var Qa=[],Ra={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sa=function(a){return Ra[a]},Ta=/[\x00\x22\x26\x27\x3c\x3e]/g;var Xa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,ab={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},bb=function(a){return ab[a]};Qa[7]=function(a){return String(a).replace(Xa,bb)};
Qa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xa,bb)+"'"}};var jb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,kb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},mb=function(a){return kb[a]};Qa[16]=function(a){return a};var ob;
var pb=[],qb=[],sb=[],tb=[],ub=[],vb={},wb,xb,yb,zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ab=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=vb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[void 0!==d?g:g.substr(4)]=a[g]);return void 0!==d?d(e):ob(c,e,b)},Cb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Db=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=vb[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(pa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=pb[g];if(!h||b.Nc(h))return;c[g]=!0;try{var k=Cb(h,b,c);k.vtp_gtmEventId=b.id;d=Ab(k,b);yb&&(d=yb.$f(d,k))}catch(w){b.oe&&b.oe(w,Number(g)),d=!1}c[g]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var n=Bb(a[p],b,c);xb&&(m=m||n===xb.Ab);d.push(n)}return xb&&m?xb.cg(d):d.join("");case "escape":d=Bb(a[1],b,c);if(xb&&pa(a[1])&&"macro"===a[1][0]&&xb.Kg(a))return xb.Wg(d);d=String(d);for(var t=2;t<a.length;t++)Qa[a[t]]&&(d=Qa[a[t]](d));return d;case "tag":var q=a[1];if(!tb[q])throw Error("Unable to resolve tag reference "+q+".");return d={$d:a[2],
index:q};case "zb":var r={arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=Eb(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Eb=function(a,b,c){try{return wb(Cb(a,b,c))}catch(d){JSON.stringify(a)}return null};var Fb=function(){var a=function(b){return{toString:function(){return b}}};return{qd:a("convert_case_to"),rd:a("convert_false_to"),sd:a("convert_null_to"),td:a("convert_true_to"),ud:a("convert_undefined_to"),Eh:a("debug_mode_metadata"),ka:a("function"),pf:a("instance_name"),qf:a("live_only"),rf:a("malware_disabled"),sf:a("metadata"),Gh:a("original_vendor_template_id"),tf:a("once_per_event"),Nd:a("once_per_load"),Od:a("setup_tags"),Pd:a("tag_id"),Qd:a("teardown_tags")}}();var Gb=null,Jb=function(a){function b(n){for(var t=0;t<n.length;t++)d[n[t]]=!0}var c=[],d=[];Gb=Hb(a);for(var e=0;e<qb.length;e++){var g=qb[e],h=Ib(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],p=0;p<tb.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},Ib=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Gb(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Gb(e[g]);if(null===h)return null;
if(h)return!1}return!0},Hb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Eb(sb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Kb,Lb=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Lf&&(l["fix_"+m]=!0),l.ae=l.ae||l["fix_"+m]);var p={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},n={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=n.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,J:q.J,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(v,w,y,x,z){var A=y||x||z||g.test(w)&&w||null,B=document.createElement("div");B.innerHTML=A;r[w]=B.textContent||B.innerText||A});return{tagName:q[1],J:r,pb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in p)if(p[q].test(k)){var r=n[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.ae&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.ne=function(){return this[this.length-1]};v.Rc=function(B){var E=this.ne();return E&&E.tagName&&E.tagName.toUpperCase()===B.toUpperCase()};v.Zf=
function(B){for(var E=0,G;G=this[E];E++)if(G.tagName===B)return!0;return!1};var w=function(B){B&&"startTag"===B.type&&(B.pb=q.test(B.tagName)||B.pb);return B},y=t,x=function(){k="</"+v.pop().tagName+">"+k},z={startTag:function(B){var E=B.tagName;"TR"===E.toUpperCase()&&v.Rc("TABLE")?(k="<TBODY>"+k,A()):l.Th&&r.test(E)&&v.Zf(E)?v.Rc(E)?x():(k="</"+B.tagName+">"+k,A()):B.pb||v.push(B)},endTag:function(B){v.ne()?l.mg&&!v.Rc(B.tagName)?x():v.pop():l.mg&&(y(),A())}},A=function(){var B=k,E=w(y());k=B;if(E&&
z[E.type])z[E.type](E)};t=function(){A();return w(y())}}();return{append:function(q){k+=q},fh:t,$h:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},ai:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.gi="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.bi=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.hi=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var p="<"+m.tagName,n;for(n in m.J){var t=m.J[n];
p+=" "+n+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return p+(m.pb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.Rh=function(k){var l={},m;for(m in k){var p=k[m];l[m]=p&&p.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.Qf=a.Qf||!b[h]&&h;Kb=a})();(function(){function a(){}function b(n){return void 0!==n&&null!==n}function c(n,t,q){var r,v=n&&n.length||0;for(r=0;r<v;r++)t.call(q,n[r],r)}function d(n,t,q){for(var r in n)n.hasOwnProperty(r)&&t.call(q,r,n[r])}function e(n,
t){d(t,function(q,r){n[q]=r});return n}function g(n,t){n=n||{};d(t,function(q,r){b(n[q])||(n[q]=r)});return n}function h(n){try{return m.call(n)}catch(q){var t=[];c(n,function(r){t.push(r)});return t}}var k={Bf:a,Cf:a,Df:a,Ef:a,Mf:a,Nf:function(n){return n},done:a,error:function(n){throw n;},jh:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,p=function(){function n(q,r,v){var w="data-ps-"+r;if(2===arguments.length){var y=q.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(w,
v):q.removeAttribute(w)}function t(q,r){var v=q.ownerDocument;e(this,{root:q,options:r,rb:v.defaultView||v.parentWindow,Ea:v,Xb:Kb("",{Lf:!0}),zc:[q],$c:"",ad:v.createElement(q.nodeName),nb:[],qa:[]});n(this.ad,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.qa,arguments);for(var q;!this.Mb&&this.qa.length;)q=this.qa.shift(),"function"===typeof q?this.Uf(q):this.ld(q)};t.prototype.Uf=function(q){var r={type:"function",value:q.name||q.toString()};this.Xc(r);q.call(this.rb,this.Ea);this.se(r)};
t.prototype.ld=function(q){this.Xb.append(q);for(var r,v=[],w,y;(r=this.Xb.fh())&&!(w=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.Ch(v);w&&this.ug(r);y&&this.vg(r)};t.prototype.Ch=function(q){var r=this.Rf(q);r.Td&&(r.Kc=this.$c+r.Td,this.$c+=r.ah,this.ad.innerHTML=r.Kc,this.Ah())};t.prototype.Rf=function(q){var r=this.zc.length,v=[],w=[],y=[];c(q,function(x){v.push(x.text);if(x.J){if(!/^noscript$/i.test(x.tagName)){var z=
r++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==x.J.id&&"ps-style"!==x.J.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+z+(x.pb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{ii:q,raw:v.join(""),Td:w.join(""),ah:y.join("")}};t.prototype.Ah=function(){for(var q,r=[this.ad];b(q=r.shift());){var v=1===q.nodeType;if(!v||!n(q,"proxyof")){v&&(this.zc[n(q,"id")]=q,n(q,"id",null));var w=q.parentNode&&n(q.parentNode,"proxyof");
w&&this.zc[w].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.ug=function(q){var r=this.Xb.clear();r&&this.qa.unshift(r);q.src=q.J.src||q.J.Hh;q.src&&this.nb.length?this.Mb=q:this.Xc(q);var v=this;this.Bh(q,function(){v.se(q)})};t.prototype.vg=function(q){var r=this.Xb.clear();r&&this.qa.unshift(r);q.type=q.J.type||q.J.Ih||"text/css";this.Dh(q);r&&this.write()};t.prototype.Dh=function(q){var r=this.Tf(q);this.Ig(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.Ea.createTextNode(q.content)))};t.prototype.Tf=function(q){var r=this.Ea.createElement(q.tagName);r.setAttribute("type",q.type);d(q.J,function(v,w){r.setAttribute(v,w)});return r};t.prototype.Ig=function(q){this.ld('<span id="ps-style"/>');var r=this.Ea.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Xc=function(q){q.Sg=this.qa;this.qa=[];this.nb.unshift(q)};t.prototype.se=function(q){q!==this.nb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.nb.shift(),this.write.apply(this,q.Sg),!this.nb.length&&this.Mb&&(this.Xc(this.Mb),this.Mb=null))};t.prototype.Bh=function(q,r){var v=this.Sf(q),w=this.qh(v),y=this.options.Bf;q.src&&(v.src=q.src,this.nh(v,w?y:function(){r();y()}));try{this.Hg(v),q.src&&!w||r()}catch(x){this.options.error(x),r()}};t.prototype.Sf=function(q){var r=this.Ea.createElement(q.tagName);d(q.J,function(v,w){r.setAttribute(v,w)});q.content&&(r.text=q.content);return r};t.prototype.Hg=function(q){this.ld('<span id="ps-script"/>');
var r=this.Ea.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.nh=function(q,r){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),r())},onerror:function(){var y={message:"remote script failed "+q.src};v();w(y);r()}})};t.prototype.qh=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.jh&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function n(){var w=r.shift(),y;w&&(y=w[w.length-1],y.Cf(),w.stream=t.apply(null,w),y.Df())}function t(w,y,x){function z(G){G=x.Nf(G);v.write(G);x.Ef(G)}v=new p(w,x);v.id=q++;v.name=x.name||v.id;var A=w.ownerDocument,B={close:A.close,open:A.open,write:A.write,writeln:A.writeln};e(A,{close:a,open:a,write:function(){return z(h(arguments).join(""))},writeln:function(){return z(h(arguments).join("")+"\n")}});var E=v.rb.onerror||a;v.rb.onerror=function(G,J,N){x.error({Xh:G+
" - "+J+":"+N});E.apply(v.rb,arguments)};v.write(y,function(){e(A,B);v.rb.onerror=E;x.done();v=null;n()});return v}var q=0,r=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=g(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.Vh?w[0]:w;var z=[w,y,x];w.Vg={cancel:function(){z.stream?z.stream.abort():z[1]=a}};x.Mf(z);r.push(z);v||n();return w.Vg},{streams:{},Zh:r,Jh:p})}();Lb=l.postscribe}})();var Mb=function(a,b){var c=new Ka(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.evaluate(d[e]);return b.apply(this,d)});c.Og();return c};for(var Nb="floor ceil round max min abs pow sqrt".split(" "),Ob=0;Ob<Nb.length;Ob++)Math.hasOwnProperty(Nb[Ob]);(function(){var a={};return a})();var C=window,D=document,Pb=navigator,Qb=D.currentScript&&D.currentScript.src,Rb=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},Sb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Tb=function(a,b,c){var d=D.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Sb(d,b);c&&(d.onerror=c);var e;if(null===da)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ca.test(k)){da=k;break b}}da=""}e=da;e&&d.setAttribute("nonce",e);var l=D.getElementsByTagName("script")[0]||D.body||D.head;l.parentNode.insertBefore(d,l);return d},Ub=function(){if(Qb){var a=Qb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Vb=function(a,b){var c=D.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=D.body&&D.body.lastChild||
D.body||D.head;d.parentNode.insertBefore(c,d);Sb(c,b);void 0!==a&&(c.src=a);return c},Wb=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Xb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Yb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},F=function(a){C.setTimeout(a,0)},Zb=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},$b=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},ac=function(a){var b=D.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},bc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},cc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var H={Za:"_ee",ic:"event_callback",Qa:"event_timeout",H:"gtag.config",S:"allow_ad_personalization_signals",U:"cookie_expires",Oa:"cookie_update",za:"session_duration"};var rc=/[A-Z]+/,sc=/\s/,tc=function(a){if(f(a)&&(a=Aa(a),!sc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(rc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],h:d}}}}},vc=function(a){for(var b={},c=0;c<a.length;++c){var d=tc(a[c]);d&&(b[d.id]=d)}uc(b);var e=[];wa(b,function(g,h){e.push(h)});return e};
function uc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.h[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var wc={},xc=null,yc=Math.random();wc.m="GTM-PMVLLW";wc.Eb="aa0";var zc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0},Ac="www.googletagmanager.com/gtm.js";var Bc=Ac,Cc=null,Dc=null,Ec=null,Fc="//www.googletagmanager.com/a?id="+wc.m+"&cv=507",Gc={},Hc={},Ic=function(){var a=xc.sequence||0;xc.sequence=a+1;return a};var Jc={},Kc=function(a,b){Jc[a]=Jc[a]||[];Jc[a][b]=!0},Lc=function(a){for(var b=[],c=Jc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var Mc=function(){return"&tc="+tb.filter(function(a){return a}).length},Xc=function(){Oc&&(C.clearTimeout(Oc),Oc=void 0);void 0===Pc||Qc[Pc]&&!Rc||(Sc[Pc]||Tc.Mg()||0>=Uc--?(Kc("GTM",1),Sc[Pc]=!0):(Tc.hh(),Wb(Vc()),Qc[Pc]=!0,Wc=Rc=""))},Vc=function(){var a=Pc;if(void 0===a)return"";var b=Lc("GTM"),c=Lc("TAGGING");return[Yc,Qc[a]?"":"&es=1",Zc[a],b?"&u="+b:"",c?"&ut="+c:"",Mc(),Rc,Wc,"&z=0"].join("")},$c=function(){return[Fc,"&v=3&t=t","&pid="+ta(),"&rv="+wc.Eb].join("")},ad="0.005000">
Math.random(),Yc=$c(),bd=function(){Yc=$c()},Qc={},Rc="",Wc="",Pc=void 0,Zc={},Sc={},Oc=void 0,Tc=function(a,b){var c=0,d=0;return{Mg:function(){if(c<a)return!1;Ba()-d>=b&&(c=0);return c>=a},hh:function(){Ba()-d>=b&&(c=0);c++;d=Ba()}}}(2,1E3),Uc=1E3,cd=function(a,b){if(ad&&!Sc[a]&&Pc!==a){Xc();Pc=a;Rc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Zc[a]="&e="+c+"&eid="+a;Oc||(Oc=C.setTimeout(Xc,500))}},dd=function(a,b,c){if(ad&&!Sc[a]&&b){a!==Pc&&(Xc(),Pc=a);var d=String(b[Fb.ka]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Rc=Rc?Rc+"."+e:"&tr="+e;Oc||(Oc=C.setTimeout(Xc,500));2022<=Vc().length&&Xc()}};var ed={},fd=new ua,gd={},hd={},kd={name:"PMNdataLayer",set:function(a,b){u(Ja(a,b),gd);id()},get:function(a){return jd(a,2)},reset:function(){fd=new ua;gd={};id()}},jd=function(a,b){if(2!=b){var c=fd.get(a);if(ad){var d=ld(a);c!==d&&Kc("GTM",5)}return c}return ld(a)},ld=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:nd(d)},nd=function(a){for(var b=gd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var qd=function(a,b){hd.hasOwnProperty(a)||(fd.set(a,b),u(Ja(a,b),gd),id())},id=function(a){wa(hd,function(b,c){fd.set(b,c);u(Ja(b,void 0),gd);u(Ja(b,c),gd);a&&delete hd[b]})},rd=function(a,b,c){ed[a]=ed[a]||{};var d=1!==c?ld(b):fd.get(b);"array"===Na(d)||"object"===Na(d)?ed[a][b]=u(d):ed[a][b]=d},sd=function(a,b){if(ed[a])return ed[a][b]};var td=function(){var a=!1;return a};var L=function(a,b,c,d){return(2===ud()||d||"http:"!=C.location.protocol?a:b)+c},ud=function(){var a=Ub(),b;if(1===a)a:{var c=Bc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=D.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Jd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Kd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Ld={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Md="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Od=function(a){var b=jd("gtm.whitelist");b&&Kc("GTM",9);var c=b&&Ia(za(b),Kd),d=jd("gtm.blacklist");d||(d=jd("tagTypeBlacklist"))&&Kc("GTM",3);
d?Kc("GTM",8):d=[];Nd()&&(d=za(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=ra(za(d),"google")&&Kc("GTM",2);var e=d&&Ia(za(d),Ld),g={};return function(h){var k=h&&h[Fb.ka];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Hc[k]||[],m=a(k,l);if(b){var p;if(p=m)a:{if(0>ra(c,k))if(l&&0<l.length)for(var n=0;n<l.length;n++){if(0>
ra(c,l[n])){Kc("GTM",11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var q=0<=ra(e,k);if(q)t=q;else{var r=va(e,l||[]);r&&Kc("GTM",10);t=r}}var v=!m||t;v||!(0<=ra(l,"sandboxedScripts"))||c&&-1!==ra(c,"sandboxedScripts")||(v=va(e,Md));return g[k]=v}},Nd=function(){return Jd.test(C.location&&C.location.hostname)};var Pd={$f:function(a,b){b[Fb.qd]&&"string"===typeof a&&(a=1==b[Fb.qd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Fb.sd)&&null===a&&(a=b[Fb.sd]);b.hasOwnProperty(Fb.ud)&&void 0===a&&(a=b[Fb.ud]);b.hasOwnProperty(Fb.td)&&!0===a&&(a=b[Fb.td]);b.hasOwnProperty(Fb.rd)&&!1===a&&(a=b[Fb.rd]);return a}};var Qd={active:!0,isWhitelisted:function(){return!0}},Rd=function(a){var b=xc.zones;!b&&a&&(b=xc.zones=a());return b};var Sd=!1,Td=0,Ud=[];function Vd(a){if(!Sd){var b=D.createEventObject,c="complete"==D.readyState,d="interactive"==D.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Sd=!0;for(var e=0;e<Ud.length;e++)F(Ud[e])}Ud.push=function(){for(var g=0;g<arguments.length;g++)F(arguments[g]);return 0}}}function Wd(){if(!Sd&&140>Td){Td++;try{D.documentElement.doScroll("left"),Vd()}catch(a){C.setTimeout(Wd,50)}}}var Xd=function(a){Sd?a():Ud.push(a)};var Yd={},Zd={},$d=function(a,b,c,d){if(!Zd[a]||zc[b]||"__zone"===b)return-1;var e={};Pa(d)&&(e=u(d,e));e.id=c;e.status="timeout";return Zd[a].tags.push(e)-1},ae=function(a,b,c,d){if(Zd[a]){var e=Zd[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function be(a){for(var b=Yd[a]||[],c=0;c<b.length;c++)b[c]();Yd[a]={push:function(d){d(wc.m,Zd[a])}}}
var ee=function(a,b,c){Zd[a]={tags:[]};na(b)&&ce(a,b);c&&C.setTimeout(function(){return be(a)},Number(c));return de(a)},ce=function(a,b){Yd[a]=Yd[a]||[];Yd[a].push(Fa(function(){return F(function(){b(wc.m,Zd[a])})}))};function de(a){var b=0,c=0,d=!1;return{add:function(){c++;return Fa(function(){b++;d&&b>=c&&be(a)})},Jf:function(){d=!0;b>=c&&be(a)}}};var fe=function(){function a(d){return!oa(d)||0>d?0:d}if(!xc._li&&C.performance&&C.performance.timing){var b=C.performance.timing.navigationStart,c=oa(kd.get("gtm.start"))?kd.get("gtm.start"):0;xc._li={cst:a(c-b),cbt:a(Dc-b)}}};var je=!1,ke=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]},le=!1;
var me=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(C[b])C.hasOwnProperty(b)||Kc("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}fe();return C[b]},ne=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ke();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var pe=function(){},oe=function(){return C.GoogleAnalyticsObject||"ga"};var re=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var se=/:[0-9]+$/,te=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},we=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ue(a.protocol)||ue(C.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:C.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||C.location.hostname).replace(se,"").toLowerCase());var g=b,h,k=ue(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=ve(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(se,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||Kc("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=ra(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=te(h,e,void 0));break;case "extension":var p=a.pathname.split(".");h=1<p.length?p[p.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},ue=function(a){return a?a.replace(":","").toLowerCase():""},ve=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
xe=function(a){var b=D.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Kc("TAGGING",1),c="/"+c);var d=b.hostname.replace(se,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var De=function(a){};function Ce(a,b){a.containerId=wc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function Ee(a,b,c,d){var e=tb[a],g=Fe(a,b,c,d);if(!g)return null;var h=Bb(e[Fb.Od],c,[]);if(h&&h.length){var k=h[0];g=Ee(k.index,{L:g,V:1===k.$d?b.terminate:g,terminate:b.terminate},c,d)}return g}
function Fe(a,b,c,d){function e(){if(g[Fb.rf])k();else{var w=Cb(g,c,[]),y=$d(c.id,String(g[Fb.ka]),Number(g[Fb.Pd]),w[Fb.sf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var B=Ba()-A;dd(c.id,tb[a],"5");ae(c.id,y,"success",B);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var B=Ba()-A;dd(c.id,tb[a],"6");ae(c.id,y,"failure",B);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;dd(c.id,g,"1");var z=function(B){var E=Ba()-A;De(B);dd(c.id,g,"7");ae(c.id,y,"exception",E);x||(x=!0,k())};var A=Ba();try{Ab(w,c)}catch(B){z(B)}}}var g=tb[a],h=b.L,k=b.V,l=b.terminate;if(c.Nc(g))return null;var m=Bb(g[Fb.Qd],c,[]);if(m&&m.length){var p=m[0],n=Ee(p.index,{L:h,V:k,terminate:l},c,d);if(!n)return null;h=n;k=2===p.$d?l:n}if(g[Fb.Nd]||g[Fb.tf]){var t=g[Fb.Nd]?ub:c.sh,q=h,r=k;if(!t[a]){e=Fa(e);var v=Ge(a,t,e);h=v.L;k=v.V}return function(){t[a](q,r)}}return e}
function Ge(a,b,c){var d=[],e=[];b[a]=He(d,e,c);return{L:function(){b[a]=Ie;for(var g=0;g<d.length;g++)d[g]()},V:function(){b[a]=Je;for(var g=0;g<e.length;g++)e[g]()}}}function He(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ie(a){a()}function Je(a,b){b()};var Me=function(a,b){for(var c=[],d=0;d<tb.length;d++)if(a.jb[d]){var e=tb[d];var g=b.add();try{var h=Ee(d,{L:g,V:g,terminate:g},a,d);h?c.push({He:d,we:Db(e),kg:h}):(Ke(d,a),g())}catch(l){g()}}b.Jf();c.sort(Le);for(var k=0;k<c.length;k++)c[k].kg();return 0<c.length};function Le(a,b){var c,d=b.we,e=a.we;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.He,k=b.He;g=h>k?1:h<k?-1:0}return g}
function Ke(a,b){if(!ad)return;var c=function(d){var e=b.Nc(tb[d])?"3":"4",g=Bb(tb[d][Fb.Od],b,[]);g&&g.length&&c(g[0].index);dd(b.id,tb[d],e);var h=Bb(tb[d][Fb.Qd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Ne=!1,Oe=function(a,b,c,d,e){if("gtm.js"==b){if(Ne)return!1;Ne=!0}cd(a,b);var g=ee(a,d,e);rd(a,"event",1);rd(a,"ecommerce",1);rd(a,"gtm");var h={id:a,name:b,Nc:Od(c),jb:[],sh:[],oe:function(p){Kc("GTM",6);De(p)}};h.jb=Jb(h);var k=Me(h,g);
if(!k)return k;for(var l=0;l<h.jb.length;l++)if(h.jb[l]){var m=tb[l];if(m&&!zc[String(m[Fb.ka])])return!0}return!1};var Qe=function(a,b,c,d,e){var g=this;this.eventModel=a;this.containerConfig=c||{};this.targetConfig=b||{};this.containerConfig=c||{};this.lb=d||{};this.globalConfig=e||{};this.getWithConfig=function(h){if(void 0!==g.eventModel[h])return g.eventModel[h];if(void 0!==g.targetConfig[h])return g.targetConfig[h];if(void 0!==g.containerConfig[h])return g.containerConfig[h];if(void 0!==g.lb[h])return g.lb[h];if(void 0!==g.globalConfig[h])return g.globalConfig[h]}};var Re={},Se=["G"];Re.Je="";var Te=Re.Je.split(",");function Ue(){var a=xc;return a.gcq=a.gcq||new Ve}
var We=function(a,b,c){Ue().register(a,b,c)},Xe=function(a,b,c,d){Ue().push("event",[b,a],c,d)},Ye=function(a,b){Ue().push("config",[a],b)},Ze={},$e=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.lb={};this.xe=null;this.je=!1},af=function(a,b,c,d,e){this.type=a;this.Ie=b;this.N=c||"";this.Ib=d;this.defer=e},Ve=function(){this.Wd={};this.fe={};this.eb=[]},bf=function(a,b){var c=tc(b);return a.Wd[c.containerId]=a.Wd[c.containerId]||new $e},cf=function(a,b,c,d){if(d.N){var e=
bf(a,d.N),g=e.xe;if(g){var h=u(c),k=u(e.targetConfig[d.N]),l=u(e.containerConfig),m=u(e.lb),p=u(a.fe),n=new Qe(h,k,l,m,p);try{3===g.length?g(b,d.Ie,n):4===g.length&&g(d.N,b,d.Ie,n)}catch(t){}}}};
Ve.prototype.register=function(a,b,c){if(3!==bf(this,a).status){bf(this,a).xe=b;bf(this,a).status=3;c&&(bf(this,a).lb=c);var d=tc(a),e=Ze[d.containerId];if(void 0!==e){var g=xc[d.containerId].bootstrap,h=jd("gtm.uniqueEventId"),k=d.prefix,l=Ba()-g;if(ad&&!Sc[h]){h!==Pc&&(Xc(),Pc=h);var m=k+"."+Math.floor(g-e)+"."+Math.floor(l);Wc=Wc?Wc+","+m:"&cl="+m}delete Ze[d.containerId]}this.flush()}};
Ve.prototype.push=function(a,b,c,d){var e=Math.floor(Ba()/1E3);if(c){var g=tc(c),h;if(h=g){var k;if(k=1===bf(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(bf(this,c).status=2,this.push("require",[],g.containerId),Ze[g.containerId]=Ba(),!td())){var m=encodeURIComponent(g.containerId);Tb(("http:"!=C.location.protocol?"https:":
"http:")+("//www.googletagmanager.com/gtag/js?id="+m+"&l=PMNdataLayer&cx=c"))}}this.eb.push(new af(a,e,c,b,d));d||this.flush()};
Ve.prototype.flush=function(a){for(var b=this;this.eb.length;){var c=this.eb[0];if(c.defer)c.defer=!1,this.eb.push(c);else switch(c.type){case "require":if(3!==bf(this,c.N).status&&!a)return;break;case "set":wa(c.Ib[0],function(l,m){u(Ja(l,m),b.fe)});break;case "config":var d=c.Ib[0],e=!!d[H.yb];delete d[H.yb];var g=bf(this,c.N),h=tc(c.N),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.N]={});g.je&&e||cf(this,H.H,d,c);g.je=!0;k?u(d,g.containerConfig):u(d,g.targetConfig[c.N]);break;
case "event":cf(this,c.Ib[1],c.Ib[0],c)}this.eb.shift()}};var df=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},gf=function(a,b,c,d){var e=ef(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=ff(e,function(g){return g.Nb},b);if(1===e.length)return e[0].id;e=ff(e,function(g){return g.kb},c);return e[0]?e[0].id:void 0}};
function hf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=df(b,e).indexOf(c)}
var lf=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var p=l;p&&1200<p.length&&(p=p.substring(0,1200));l=p;m=a+"="+l}var n=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":n=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===n){for(var v=jf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!kf(y,t)&&hf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else n&&"none"!=n&&(m+="; domain="+n),k=!kf(n,t)&&hf(m,a,l)}return k};function ff(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function ef(a,b){for(var c=[],d=df(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Nb:1*k[0]||1,kb:1*k[1]||1}))}}return c}
var mf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,nf=/(^|\.)doubleclick\.net$/i,kf=function(a,b){return nf.test(document.location.hostname)||"/"===b&&mf.test(a)},jf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;nf.test(e)||mf.test(e)||a.push("none");return a};var of="".split(/,/),qf=null,rf={},sf={},tf,uf=function(a,b){var c={event:a};b&&(c.eventModel=u(b),b[H.ic]&&(c.eventCallback=b[H.ic]),b[H.Qa]&&(c.eventTimeout=b[H.Qa]));return c};
var Af={config:function(a){},
event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Pa(a[2])&&void 0!=a[2])return;c=a[2]}var d=uf(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).Uh().Kh(a[1],a[2])},set:function(a){var b;2==a.length&&Pa(a[1])?b=u(a[1]):3==a.length&&f(a[1])&&(b={},Pa(a[2])||pa(a[2])?b[a[1]]=u(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Bf={policy:!0};var Df=function(a){return Cf?D.querySelectorAll(a):null},Ef=function(a,b){if(!Cf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!D.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ff=!1;if(D.querySelectorAll)try{var Gf=D.querySelectorAll(":root");Gf&&1==Gf.length&&Gf[0]==D.documentElement&&(Ff=!0)}catch(a){}var Cf=Ff;var Nf=function(a){if(Mf(a))return a;this.zh=a};Nf.prototype.sg=function(){return this.zh};var Mf=function(a){return!a||"object"!==Na(a)||Pa(a)?!1:"getUntrustedUpdateValue"in a};Nf.prototype.getUntrustedUpdateValue=Nf.prototype.sg;var Of=!1,Pf=[];function Qf(){if(!Of){Of=!0;for(var a=0;a<Pf.length;a++)F(Pf[a])}}var Rf=function(a){Of?F(a):Pf.push(a)};var Sf=[],Tf=!1,Uf=function(a){return C["PMNdataLayer"].push(a)},Vf=function(a){var b=xc["PMNdataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},Xf=function(a){var b=a._clear;wa(a,function(g,h){"_clear"!==g&&(b&&qd(g,void 0),qd(g,h))});Cc||(Cc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ic(),a["gtm.uniqueEventId"]=d,qd("gtm.uniqueEventId",d));Ec=c;var e=Wf(a);
Ec=null;switch(c){case "gtm.init":Kc("GTM",19),e&&Kc("GTM",20)}return e};function Wf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=xc.zones;d=e?e.checkState(wc.m,c):Qd;return d.active?Oe(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Yf=function(){for(var a=!1;!Tf&&0<Sf.length;){Tf=!0;delete gd.eventModel;id();var b=Sf.shift();if(null!=b){var c=Mf(b);if(c){var d=b;b=Mf(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=jd(h,1);if(pa(k)||Pa(k))k=u(k);hd[h]=k}}try{if(na(b))try{b.call(kd)}catch(v){}else if(pa(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),p=m.pop(),n=l.slice(1),t=jd(m.join("."),2);if(void 0!==t&&null!==t)try{t[p].apply(t,n)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&f(b[0])){var r=Af[b[0]];if(r&&(!c||!Bf[b[0]])){b=r(b);break a}}b=void 0}if(!b){Tf=!1;continue}}a=Xf(b)||a}}finally{c&&id(!0)}}Tf=!1}
return!a},Zf=function(){var a=Yf();try{var b=wc.m,c=C["PMNdataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},$f=function(){var a=Rb("PMNdataLayer",[]),b=Rb("google_tag_manager",{});b=b["PMNdataLayer"]=b["PMNdataLayer"]||{};Xd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Rf(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<xc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Nf(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Sf.push.apply(Sf,d);if(300<this.length)for(Kc("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Yf()&&h};Sf.push.apply(Sf,a.slice(0));F(Zf)};var ag;var wg={};wg.Ab=new String("undefined");
var xg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===wg.Ab?b:a[d]);return c.join("")}};xg.prototype.toString=function(){return this.resolve("undefined")};xg.prototype.valueOf=xg.prototype.toString;wg.wf=xg;wg.xc={};wg.cg=function(a){return new xg(a)};var yg={};wg.ih=function(a,b){var c=Ic();yg[c]=[a,b];return c};wg.Xd=function(a){var b=a?0:1;return function(c){var d=yg[c];if(d&&"function"===typeof d[b])d[b]();yg[c]=void 0}};wg.Kg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};wg.Wg=function(a){if(a===wg.Ab)return a;var b=Ic();wg.xc[b]=a;return'google_tag_manager["'+wc.m+'"].macro('+b+")"};wg.Pg=function(a,b,c){a instanceof wg.wf&&(a=a.resolve(wg.ih(b,c)),b=ma);return{Kc:a,L:b}};var zg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Zb(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Ag=function(a){xc.hasOwnProperty("autoEventsSettings")||(xc.autoEventsSettings={});var b=xc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Bg=function(a,b,c){Ag(a)[b]=c},Cg=function(a,b,c,d){var e=Ag(a),g=Ca(e,b,d);e[b]=c(g)},Dg=function(a,b,c){var d=Ag(a);return Ca(d,b,c)};var Eg=function(){for(var a=Pb.userAgent+(D.cookie||"")+(D.referrer||""),b=a.length,c=C.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ba()/1E3)].join(".")},Hg=function(a,b,c,d){var e=Fg(b);return gf(a,e,Gg(c),d)},Ig=function(a,b,c,d){var e=""+Fg(c),g=Gg(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},Fg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Gg=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Jg=["1"],Kg={},Og=function(a,b,c,d){var e=Lg(a);Kg[e]||Mg(e,b,c)||(Ng(e,Eg(),b,c,d),Mg(e,b,c))};function Ng(a,b,c,d,e){var g=Ig(b,"1",d,c);lf(a,g,c,d,0==e?void 0:new Date(Ba()+1E3*(void 0==e?7776E3:e)))}function Mg(a,b,c){var d=Hg(a,b,c,Jg);d&&(Kg[a]=d);return d}function Lg(a){return(a||"_gcl")+"_au"};var Pg=function(){for(var a=[],b=D.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({hd:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].hd]||(g[a[h].hd]=[]),g[a[h].hd].push({timestamp:k[1],pg:k[2]}))}return g};function Qg(){for(var a=Rg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Sg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Rg,Tg,Ug=function(a){Rg=Rg||Sg();Tg=Tg||Qg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,p=(h&15)<<2|k>>6,n=k&63;e||(n=64,d||(p=64));b.push(Rg[l],Rg[m],Rg[p],Rg[n])}return b.join("")},Vg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Tg[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Rg=Rg||Sg();Tg=Tg||
Qg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Wg;function Xg(a,b){if(!a||b===D.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var ah=function(){var a=Yg,b=Zg,c=$g(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Xb(D,"mousedown",d);Xb(D,"keyup",d);Xb(D,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},$g=function(){var a=Rb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var bh=/(.*?)\*(.*?)\*(.*)/,ch=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,dh=/^(?:www\.|m\.|amp\.)+/,eh=/([^?#]+)(\?[^#]*)?(#.*)?/,fh=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,hh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ug(String(d))))}var e=b.join("*");return["1",gh(e),e].join("*")},gh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Wg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Wg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Wg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},jh=function(){return function(a){var b=xe(C.location.href),c=b.search.replace("?",""),d=te(c,"_gl",!0)||"";a.query=ih(d)||{};var e=we(b,"fragment").match(fh);a.fragment=ih(e&&e[3]||
"")||{}}},kh=function(){var a=jh(),b=$g();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ga(c,d.query),Ga(c,d.fragment));return c},ih=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=bh.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],p=0;p<b;++p)if(m===gh(k,p)){l=!0;break a}l=!1}if(l){for(var n={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)n[t[q]]=Vg(t[q+1]);return n}}}}catch(r){}};
function lh(a,b,c){function d(m){var p=m,n=fh.exec(p),t=p;if(n){var q=n[2],r=n[4];t=n[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=eh.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function mh(a,b,c){for(var d={},e={},g=$g().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Xg(k.domains,b)&&(k.fragment?Ga(e,k.callback()):Ga(d,k.callback()))}if(Ha(d)){var l=hh(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var p=a.childNodes||[],n=!1,t=0;t<p.length;t++){var q=p[t];if("_gl"===q.name){q.setAttribute("value",l);n=!0;break}}if(!n){var r=D.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=lh(l,a.action);re.test(v)&&(a.action=v)}}}else nh(l,a,!1)}if(!c&&Ha(e)){var w=hh(e);nh(w,a,!0)}}function nh(a,b,c){if(b.href){var d=lh(a,b.href,void 0===c?!1:c);re.test(d)&&(b.href=d)}}
var Yg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||mh(e,e.hostname,!1)}}catch(h){}},Zg=function(a){try{if(a.action){var b=we(xe(a.action),"host");mh(a,b,!0)}}catch(c){}},oh=function(a,b,c,d){ah();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};$g().decorators.push(e)},ph=function(){var a=D.location.hostname,b=ch.exec(D.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(dh,""),l=e.replace(dh,""),m;if(!(m=k===l)){var p="."+l;m=k.substring(k.length-p.length,k.length)===p}return m},qh=function(a,b){return!1===a?!1:a||b||ph()};var rh={};var sh=/^\w+$/,th=/^[\w-]+$/,uh=/^~?[\w-]+$/,vh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function wh(a){return a&&"string"==typeof a&&a.match(sh)?a:"_gcl"}var yh=function(){var a=xe(C.location.href),b=we(a,"query",!1,void 0,"gclid"),c=we(a,"query",!1,void 0,"gclsrc"),d=we(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||te(e,"gclid",void 0);c=c||te(e,"gclsrc",void 0)}return xh(b,c,d)};
function xh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(th))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==rh.gtm_3pds?0:rh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}var Ah=function(a){var b=yh();zh(b,a)};
function zh(a,b,c){function d(n,t){var q=Bh(n,e);q&&lf(q,t,h,g,l,!0)}b=b||{};var e=wh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Vb?7776E3:b.Vb;c=c||Ba();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),p=function(n){return["GCL",m,n].join(".")};a.aw&&(!0===b.ki?d("aw",p("~"+a.aw[0])):d("aw",p(a.aw[0])));a.dc&&d("dc",p(a.dc[0]));a.gf&&d("gf",p(a.gf[0]));a.ha&&d("ha",p(a.ha[0]))}
var Dh=function(a,b,c,d,e){for(var g=kh(),h=wh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==vh[l]){var m=Bh(l,h),p=g[m];if(p){var n=Math.min(Ch(p),Ba()),t;b:{for(var q=n,r=df(m,D.cookie),v=0;v<r.length;++v)if(Ch(r[v])>q){t=!0;break b}t=!1}t||lf(m,p,c,d,0==e?void 0:new Date(n+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};zh(xh(g.gclid,g.gclsrc),w)},Bh=function(a,b){var c=vh[a];if(void 0!==c)return b+c},Ch=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Eh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Fh=function(a,b,c,d,e){if(pa(b)){var g=wh(e);oh(function(){for(var h={},k=0;k<a.length;++k){var l=Bh(a[k],g);if(l){var m=df(l,D.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Gh=function(a){return a.filter(function(b){return uh.test(b)})},Hh=function(a){for(var b=["aw","dc"],c=wh(a&&a.prefix),d={},e=0;e<b.length;e++)vh[b[e]]&&(d[b[e]]=vh[b[e]]);wa(d,function(g,h){var k=df(c+h,D.cookie);if(k.length){var l=k[0],m=Ch(l),p={};p[g]=[Eh(l)];zh(p,a,m)}})};var Ih=/^\d+\.fls\.doubleclick\.net$/;function Jh(a){var b=xe(C.location.href),c=we(b,"host",!1);if(c&&c.match(Ih)){var d=we(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Kh(a,b){if("aw"==a||"dc"==a){var c=Jh("gcl"+a);if(c)return c.split(".")}var d=wh(b);if("_gcl"==d){var e;e=yh()[a]||[];if(0<e.length)return e}var g=Bh(a,d),h;if(g){var k=[];if(D.cookie){var l=df(g,D.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var p=Eh(l[m]);p&&-1===ra(k,p)&&k.push(p)}h=Gh(k)}else h=k}else h=k}else h=[];return h}
var Lh=function(){var a=Jh("gac");if(a)return decodeURIComponent(a);var b=Pg(),c=[];wa(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].pg);g=Gh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Mh=function(a,b,c,d,e){Og(b,c,d,e);var g=Kg[Lg(b)],h=yh().dc||[],k=!1;if(g&&0<h.length){var l=xc.joined_au=xc.joined_au||{},m=b||"_gcl";if(!l[m])for(var p=0;p<h.length;p++){var n="https://adservice.google.com/ddm/regclk",t=n=n+"?gclid="+h[p]+"&auiddc="+g;Pb.sendBeacon&&Pb.sendBeacon(t)||Wb(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Lg(b),r=Kg[q];r&&Ng(q,r,c,d,e)}};var Nh;if(3===wc.Eb.length)Nh="g";else{var Oh="G";Nh=Oh}
var Ph={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Nh,OPT:"o"},Qh=function(a){var b=wc.m.split("-"),c=b[0].toUpperCase(),d=Ph[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===wc.Eb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+wc.Eb+e};var Vh=["input","select","textarea"],Wh=["button","hidden","image","reset","submit"],Yh=function(a){var b=a.tagName.toLowerCase();return!sa(Vh,function(c){return c===b})||"input"===b&&sa(Wh,function(c){return c===a.type.toLowerCase()})?!1:!0},Zh=function(a){return a.form?a.form.tagName?a.form:D.getElementById(a.form):bc(a,["form"],100)},$h=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(Yh(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var ci=!!C.MutationObserver,di=void 0,ei=function(a){if(!di){var b=function(){var c=D.body;if(c)if(ci)(new MutationObserver(function(){for(var e=0;e<di.length;e++)F(di[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Xb(c,"DOMNodeInserted",function(){d||(d=!0,F(function(){d=!1;for(var e=0;e<di.length;e++)F(di[e])}))})}};di=[];D.body?b():F(b)}di.push(a)};
var wi=function(){var a=D.body,b=D.documentElement||a&&a.parentElement,c,d;if(D.compatMode&&"BackCompat"!==D.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};Kc("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},xi=function(a){var b=wi(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},yi=function(a){if(D.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!C.getComputedStyle)return!0;var c=C.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=C.getComputedStyle(d,null))}return!1};var zi=[],Ai=!(!C.IntersectionObserver||!C.IntersectionObserverEntry),Bi=function(a,b,c){for(var d=new C.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var g=0;g<zi.length;g++)if(!zi[g])return zi[g]=d,g;return zi.push(d)-1},Ci=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},p={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Ba()};F(function(){return a(p)})}for(var e=[],g=[],h=0;h<b.length;h++)e.push(0),g.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=xi(b[k]);if(l>e[k])for(;g[k]<c.length-1&&l>=c[g[k]+1];)d(b[k],l),g[k]++;else if(l<e[k])for(;0<=g[k]&&l<=c[g[k]];)d(b[k],l),g[k]--;e[k]=l}}},Di=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Ai){var e=!1;F(function(){e||Ci(a,b,c)()});return Bi(function(g){e=!0;for(var h={Ma:0};h.Ma<g.length;h={Ma:h.Ma},h.Ma++)F(function(k){return function(){return a(g[k.Ma])}}(h))},b,c)}return C.setInterval(Ci(a,b,c),1E3)},Ei=function(a){Ai?0<=a&&a<zi.length&&zi[a]&&(zi[a].disconnect(),zi[a]=void 0):C.clearInterval(a)};var Gi=C.clearTimeout,Hi=C.setTimeout,M=function(a,b,c){if(td()){b&&F(b)}else return Tb(a,b,c)},Ii=function(){return C.location.href},Ji=function(a){return we(xe(a),"fragment")},Ki=function(a){return ve(xe(a))},Li=null;
var Mi=function(a,b){return jd(a,b||2)},Ni=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Uf(a)},Oi=function(a,b){C[a]=b},W=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=b);return C[a]},Pi=function(a,b,c){return df(a,b,void 0===c?!0:!!c)},Qi=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Vb:d};Ah(e);Hh(e)},Ri=function(a,b,c,d,e){Fh(a,b,c,d,e);},Si=function(a,b){if(td()){b&&F(b)}else Vb(a,b)},Ti=function(a){return!!Dg(a,"init",!1)},Ui=function(a){Bg(a,"init",!0)},Vi=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Bc;d+="?id="+encodeURIComponent(a)+"&l=PMNdataLayer";b&&wa(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});M(L("https://","http://",d))},Wi=function(a,b){var c=a[b];
return c};var Yi=wg.Pg;
var Zi=new ua,$i=function(a,b){function c(h){var k=xe(h),l=we(k,"protocol"),m=we(k,"host",!0),p=we(k,"port"),n=we(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,n]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},aj=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&pa(c)){for(var d=0;d<c.length;d++)if(aj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var p;p=String(b).split(",");
return 0<=ra(p,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Zi.get(q);r||(r=new RegExp(c,t),Zi.set(q,r));n=r.test(b)}catch(v){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return $i(b,c)}return!1};var cj={},dj=function(){if(C._gtmexpgrp&&C._gtmexpgrp.hasOwnProperty(1))return C._gtmexpgrp[1];void 0===cj[1]&&(cj[1]=Math.floor(2*Math.random()));return cj[1]};var ej=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var fj={},gj=encodeURI,X=encodeURIComponent,hj=Wb;var ij=function(a,b){if(!a)return!1;var c=we(xe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var jj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};fj.Lg=function(){var a=!1;return a};var Tj=function(){var a=C.gaGlobal=C.gaGlobal||{};a.hid=a.hid||ta();return a.hid};var Ck=window,Dk=document,Ek=function(a){var b=Ck._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Ck["ga-disable-"+a])return!0;try{var c=Ck.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=df("AMP_TOKEN",Dk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Dk.getElementById("__gaOptOutExtension")?!0:!1};var Hk=function(a){return"_"===a.charAt(0)},Ik=function(a){wa(a,function(c){Hk(c)&&delete a[c]});var b=a[H.zb]||{};wa(b,function(c){Hk(c)&&delete b[c]})};var Lk=function(a,b,c){Xe(b,c,a)},Mk=function(a,b,c){Xe(b,c,a,!0)},Ok=function(a,b){},Nk=function(a,b){};
var Z={a:{}};
Z.a.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.b="ctv";Z.__ctv.g=!0;Z.__ctv.priorityOverride=0})(function(){return"507"})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(sd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=Mi("gtm.referrer",1)||D.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?we(xe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Ki(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=zg(c,"gtm.click");Ni(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!Ti("cl")){var c=W("document");Xb(c,"click",a,!0);Ui("cl")}F(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return Pi(a.vtp_name,Mi("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0;Z.__r.priorityOverride=0})(function(a){return ta(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Mi("gtm.url",1))||Ii();var d=b[a("vtp_component")];if(!d||"URL"==d)return Ki(String(c));var e=xe(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?pa(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var p=0;p<m.length;p++){var n=we(e,"QUERY",void 0,void 0,m[p]);if(void 0!=n&&(!l||""!==n)){g=n;break a}}g=void 0}else g=we(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Mi(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.asp=["nonGoogleScripts"],function(){(function(a){Z.__asp=a;Z.__asp.b="asp";Z.__asp.g=!0;Z.__asp.priorityOverride=0})(function(a){C.adroll_adv_id=a.vtp_customerId;C.adroll_pix_id=a.vtp_pixelId;void 0!==a.vtp_conversionValueInDollars&&(C.adroll_conversion_value=a.vtp_conversionValueInDollars,C.adroll_currency=a.vtp_conversionValueCurrency||"USD");if(a.vtp_customData){var b=jj(a.vtp_customData,"key","value");C.adroll_custom_data=b}a.vtp_segmentName&&(C.adroll_segments=a.vtp_segmentName);a.vtp_visitorEmail&&
(C.adroll_email=a.vtp_visitorEmail);C.__adroll_loaded=!0;var c=L("https://s","http://a",".adroll.com/j/roundtrip.js");M(c,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var p=d.vtp_gaSettings;u(jj(p.vtp_fieldsToSet,"fieldName","value"),g);u(jj(p.vtp_contentGroup,"index","group"),h);u(jj(p.vtp_dimension,"index","dimension"),k);u(jj(p.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;p.vtp_fieldsToSet=void 0;p.vtp_contentGroup=void 0;p.vtp_dimension=void 0;p.vtp_metric=void 0;var n=u(p);d=u(d,n)}u(jj(d.vtp_fieldsToSet,"fieldName","value"),g);u(jj(d.vtp_contentGroup,
"index","group"),h);u(jj(d.vtp_dimension,"index","dimension"),k);u(jj(d.vtp_metric,"index","metric"),l);var t=me(d.vtp_functionName);if(na(t)){var q="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,q=r+"."):(r="gtm"+Ic(),q=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(T){var P=[].slice.call(arguments,0);P[0]=q+P[0];t.apply(window,P)},x=function(T,P){return void 0===P?P:T(P)},z=function(T,P){if(P)for(var qa in P)P.hasOwnProperty(qa)&&y("set",T+qa,P[qa])},A=function(){
var T=function(bl,Xh,cl){if(!Pa(Xh))return!1;for(var Nc=Ca(Object(Xh),cl,[]),pf=0;Nc&&pf<Nc.length;pf++)y(bl,Nc[pf]);return!!Nc&&0<Nc.length},P;if(d.vtp_useEcommerceDataLayer){var qa=!1;qa||(P=Mi("ecommerce",1))}else d.vtp_ecommerceMacroData&&(P=d.vtp_ecommerceMacroData.ecommerce);if(!Pa(P))return;P=Object(P);var Ya=Ca(g,"currencyCode",P.currencyCode);
void 0!==Ya&&y("set","&cu",Ya);T("ec:addImpression",P,"impressions");if(T("ec:addPromo",P[P.promoClick?"promoClick":"promoView"],"promotions")&&P.promoClick){y("ec:setAction","promo_click",P.promoClick.actionField);return}for(var Da="detail checkout checkout_option click add remove purchase refund".split(" "),Za="refund purchase remove checkout checkout_option add click detail".split(" "),$a=0;$a<Da.length;$a++){var lb=P[Da[$a]];if(lb){T("ec:addProduct",lb,"products");y("ec:setAction",Da[$a],lb.actionField);
if(ad)for(var rb=0;rb<Za.length;rb++){var gc=P[Za[rb]];if(gc){gc!==lb&&Kc("GTM",13);break}}break}}},B=function(T,P,qa){var Ya=0;if(T)for(var Da in T)if(T.hasOwnProperty(Da)&&(qa&&v[Da]||!qa&&void 0===v[Da])){var Za=w[Da]?ya(T[Da]):T[Da];"anonymizeIp"!=Da||Za||(Za=void 0);P[Da]=Za;Ya++}return Ya},E={name:r};B(g,E,!0);t("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Qh(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(T,P){void 0!==d[P]&&y("set",T,d[P])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var G={};B(g,G,!1)&&y("set",G);var J;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var T=g&&g.hitCallback;na(T)&&T();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),A());var N={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(xa,d.vtp_eventValue||
e.value)};B(J,N,!1);y("send",N);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),A());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var Y=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:Y})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ea="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ea})}J?y("send","pageview",J):y("send","pageview");}if(!a){var fa=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(fa="internal/"+fa);a=!0;var Ea=L("https:","http:","//www.google-analytics.com/"+fa,g&&g.forceSSL);M(Ea,function(){var T=ke();T&&T.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else F(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();
Z.a.jel=["google"],function(){(function(a){Z.__jel=a;Z.__jel.b="jel";Z.__jel.g=!0;Z.__jel.priorityOverride=0})(function(a){if(!Ti("jel")){var b=W("self"),c=b.onerror;b.onerror=function(d,e,g,h,k){c&&c(d,e,g,h,k);Ni({event:"gtm.pageError","gtm.errorMessage":d,"gtm.errorUrl":e,"gtm.errorLineNumber":g});return!1};Ui("jel")}F(a.vtp_gtmOnSuccess)})}();



Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return wc.m})}();


Z.a.aev=["google"],function(){function a(q,r){var v=sd(q,"gtm");if(v)return v[r]}function b(q,r,v,w){w||(w="element");var y=q+"."+r,x;if(p.hasOwnProperty(y))x=p[y];else{var z=a(q,w);if(z&&(x=v(z),p[y]=x,n.push(y),35<n.length)){var A=n.shift();delete p[A]}}return x}function c(q,r,v){var w=a(q,t[r]);return void 0!==w?w:v}function d(q,r){if(!q)return!1;var v=e(Ii());pa(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(q))return!1}else{var x=
r[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!ij(q,w)}function e(q){m.test(q)||(q="http://"+q);return we(xe(q),"HOST",!0)}function g(q,r,v){switch(q){case "SUBMIT_TEXT":return b(r,"FORM."+q,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+q,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(r,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(r,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Zb(q,"value");case "button":return $b(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var r=0,v=0;v<q.elements.length;v++)Yh(q.elements[v])&&r++;return r}}function l(q,r,v){var w=a(q,"interactedFormField");return w&&Zb(w,r)||v}var m=/^https?:\/\//i,p={},n=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(q){var r=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");return y&&y.tagName||
v;case "TEXT":return b(r,w,$b)||v;case "URL":var x;a:{var z=String(a(r,"elementUrl")||v||""),A=xe(z),B=String(q.vtp_component||"URL");switch(B){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,q.vtp_affiliatedDomains);break a;default:x=we(A,B,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(r,w,v);else{var G=q.vtp_attribute,J=a(r,"element");E=J&&Zb(J,G)||v||""}return E;case "MD":var N=q.vtp_mdValue,V=b(r,"MD",si);return N&&V?vi(V,N)||
v:V||v;case "FORM":return g(String(q.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=u(a),c=b;c[Fb.ka]=null;c[Fb.pf]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=jj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){F(a.vtp_gtmOnFailure)})}();Z.a.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.b="hid";Z.__hid.g=!0;Z.__hid.priorityOverride=0})(function(){return wg.Ab})}();

Z.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=D.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var p=k.getAttribute("data-gtmsrc");p&&(m.src=p,Sb(m,l));d.insertBefore(m,null);p||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var n=
[];k.firstChild;)n.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,n,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){F(h)}}}var b=function(d,e,g){Xd(function(){var h,k=xc;k.postscribe||(k.postscribe=Lb);h=k.postscribe;var l={done:e},m=D.createElement("div");m.style.display="none";m.style.visibility="hidden";D.body.appendChild(m);try{h(m,d,l)}catch(p){F(g)}})};var c=function(d){if(D.body){var e=
d.vtp_gtmOnFailure,g=Yi(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Kc,k=g.L;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(D.body,ac(h),k,e)()}else Hi(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();


Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();




Z.a.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=bc(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=Dg("lcl",k?"nv.mwt":"mwt",0),m;m=k?Dg("lcl","nv.ids",[]):Dg("lcl","ids",[]);if(m.length){var p=zg(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var n=W((Wi(h,"target")||"_self").substring(1)),t=!0;if(Ni(p,Vf(function(){t&&n&&(n.location.href=Wi(h,
"href"))}),l))t=!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else Ni(p,function(){},l||2E3);return!0}}};Xb(c,"click",e,!1);Xb(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=Wi(d,"href"),h=g.indexOf("#"),k=Wi(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Ki(g),m=Ki(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=
0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};Cg("lcl","mwt",k,0);e||Cg("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};Cg("lcl","ids",l,[]);e||Cg("lcl","nv.ids",l,[]);Ti("lcl")||(a(),Ui("lcl"));F(c.vtp_gtmOnSuccess)})}();
Z.a.evl=["google"],function(){function a(g,h){this.element=g;this.uid=h}function b(){var g=Number(Mi("gtm.start"))||0;return(new Date).getTime()-g}function c(g,h,k,l){function m(){if(!yi(g.target)){h.has(e.Db)||h.set(e.Db,""+b());h.has(e.vc)||h.set(e.vc,""+b());var n=0;h.has(e.Gb)&&(n=Number(h.get(e.Gb)));n+=100;h.set(e.Gb,""+n);if(n>=k){var t=zg(g.target,"gtm.elementVisibility",[h.uid]),q=xi(g.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(h.get(e.vc));
t["gtm.visibleLastTime"]=Number(h.get(e.Db));Ni(t);l()}}}if(!h.has(e.$a)&&(0==k&&m(),!h.has(e.Aa))){var p=W("self").setInterval(m,100);h.set(e.$a,p)}}function d(g){g.has(e.$a)&&(W("self").clearInterval(Number(g.get(e.$a))),g.remove(e.$a))}var e={$a:"polling-id-",vc:"first-on-screen-",Db:"recent-on-screen-",Gb:"total-visible-time-",Aa:"has-fired-"};a.prototype.has=function(g){return!!this.element.getAttribute("data-gtm-vis-"+g+this.uid)};a.prototype.get=function(g){return this.element.getAttribute("data-gtm-vis-"+
g+this.uid)};a.prototype.set=function(g,h){this.element.setAttribute("data-gtm-vis-"+g+this.uid,h)};a.prototype.remove=function(g){this.element.removeAttribute("data-gtm-vis-"+g+this.uid)};(function(g){Z.__evl=g;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(g){function h(){var y=!1,x=null;if("CSS"===l){try{x=Df(m)}catch(G){}y=!!x&&v.length!=x.length}else if("ID"===l){var z=D.getElementById(m);z&&(x=[z],y=1!=v.length||v[0]!==z)}x||(x=[],y=0<v.length);if(y){for(var A=0;A<v.length;A++){var B=
new a(v[A],q);d(B)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&Ei(w);0<v.length&&(w=Di(k,v,[t]))}}function k(y){var x=new a(y.target,q);y.intersectionRatio>=t?x.has(e.Aa)||c(y,x,n,"ONCE"===r?function(){for(var z=0;z<v.length;z++){var A=new a(v[z],q);A.set(e.Aa,"1");d(A)}Ei(w);if(p&&di)for(var B=0;B<di.length;B++)di[B]===h&&di.splice(B,1)}:function(){x.set(e.Aa,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===r&&x.has(e.Aa)&&(x.remove(e.Aa),x.remove(e.Gb)),x.remove(e.Db))}var l=g.vtp_selectorType,m;"ID"===
l?m=String(g.vtp_elementId):"CSS"===l&&(m=String(g.vtp_elementSelector));var p=!!g.vtp_useDomChangeListener,n=g.vtp_useOnScreenDuration&&Number(g.vtp_onScreenDuration)||0,t=(Number(g.vtp_onScreenRatio)||50)/100,q=g.vtp_uniqueTriggerId,r=g.vtp_firingFrequency,v=[],w=-1;h();p&&ei(h);F(g.vtp_gtmOnSuccess)})}();


Z.a.csm=["nonGoogleScripts"],function(){(function(a){Z.__csm=a;Z.__csm.b="csm";Z.__csm.g=!0;Z.__csm.priorityOverride=0})(function(a){var b=W("document");hj(function(d){if(2048<d.length){var e=d.substring(0,2040).lastIndexOf("&");d=d.substring(0,e)+"&ns_cut="+X(d.substring(e+1));d=d.substring(0,2048)}return d}(function(d,e){var g=new Date,h=(e||"").split("&");e="";for(var k=0;k<h.length;k++)if(h[k]){var l=h[k].match(/([^=]*)=?(.*)/);e+="&"+X(l[1])+"="+X(l[2])}return L("https://sb","http://b",".scorecardresearch.com/b?c1=2&c2="+
X(d)+"&ns__t="+g.valueOf()+"&ns_c="+(b.characterSet||b.Ph||"")+"&c8="+X(b.title||"")+e+"&c7="+X(b.URL)+"&c9="+X(b.referrer))}(a.vtp_clientId,function(){var d="",e=b.cookie;if(0<=e.indexOf("comScore"))for(var g=e.split(";"),h=0;h<g.length;h++){var k=g[h].indexOf("comScore");0<=k&&(d=unescape(g[h].substring(k+8)))}return d}())));var c=function(){var d=L("https://sb","http://b",".scorecardresearch.com/c2/"+X(a.vtp_clientId)+"/cs.js");M(d,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)};"complete"===b.readyState?
c():Xb(W("self"),"load",c)})}();var al={};al.macro=function(a){if(wg.xc.hasOwnProperty(a))return wg.xc[a]},al.onHtmlSuccess=wg.Xd(!0),al.onHtmlFailure=wg.Xd(!1);al.dataLayer=kd;al.callback=function(a){Gc.hasOwnProperty(a)&&na(Gc[a])&&Gc[a]();delete Gc[a]};al.Of=function(){xc[wc.m]=al;Ga(Hc,Z.a);xb=xb||wg;yb=Pd};
al.Gg=function(){rh.gtm_3pds=!0;xc=C.google_tag_manager=C.google_tag_manager||{};if(xc[wc.m]){var a=xc.zones;a&&a.unregisterChild(wc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)tb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)sb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],n={},t=0;t<p.length;t++)n[p[t][0]]=Array.prototype.slice.call(p[t],1);qb.push(n)}vb=Z;wb=aj;al.Of();$f();Sd=!1;Td=0;if("interactive"==D.readyState&&!D.createEventObject||"complete"==D.readyState)Vd();else{Xb(D,"DOMContentLoaded",Vd);Xb(D,"readystatechange",Vd);if(D.createEventObject&&D.documentElement.doScroll){var q=!0;try{q=!C.frameElement}catch(y){}q&&Wd()}Xb(C,"load",Vd)}Of=!1;"complete"===D.readyState?Qf():
Xb(C,"load",Qf);a:{if(!ad)break a;C.setInterval(bd,864E5);}
Dc=(new Date).getTime();}};(0,al.Gg)();

})()
