//ForeSee Survey Include
(function(){
    if (window != window.top)
        return;
		
    var path = '/foresee/';
    var head = window.parent.document.getElementsByTagName("head")[0];
    var script = window.parent.document.createElement('script');
    script.type = 'text/javascript';
    script.src = path + 'foresee-trigger.js';
    head.appendChild(script);
})();

function Poll(){
}