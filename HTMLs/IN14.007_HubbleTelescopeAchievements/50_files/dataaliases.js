var DataAliases=(function(){var _obj=null,_converted_obj=null,_rev_obj=null,_rev_converted_obj=null,_aliases=window._config['data_aliases'];_enabled=window._config['template_data_aliases'];_convert_fields=function(obj){if(typeof obj!=="object")return obj;for(var prop in obj){if(obj.hasOwnProperty(prop)){obj[prop.replace(/\./g,":")]=_convert_fields(obj[prop]);for(var da in _aliases){if(_aliases[da]==prop){obj[da]=obj[prop];delete obj[prop];break;}}}}
return obj;};_reverse_fields=function(obj){if(typeof obj!=="object")return obj;for(var prop in obj){if(obj.hasOwnProperty(prop)){obj[prop.replace(/\./g,":")]=_reverse_fields(obj[prop]);for(var da in _aliases){if(da==prop){obj[_aliases[da]]=obj[prop];delete obj[prop];break;}}}}
return obj;};convert=function(obj){if(_aliases==null||_enabled==false){return obj;}
if(_obj==obj&&_converted_obj!=null){return _converted_obj;}
_obj=obj;_converted_obj=_convert_fields(_obj);return _converted_obj;};reverse_convert=function(obj){if(_aliases==null||_enabled==false){return obj;}
if(_rev_obj==obj&&_rev_converted_obj!=null){return _rev_converted_obj;}
_rev_obj=obj;_rev_converted_obj=_reverse_fields(_rev_obj);return _rev_converted_obj;};return this;});window._data_aliases=DataAliases();;