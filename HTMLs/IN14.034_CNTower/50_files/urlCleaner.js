(function(){var urlCleaner={pageUrlSemaphore:0,attemptCleanUrl:function(){if(--this.pageUrlSemaphore<=0){if(window.history&&window.history.replaceState&&window.location.search&&(window.location.search.indexOf('utm_')!==-1)){var currUrl=window.location.href;var newUrl=currUrl.replace(/utm_[a-z]+=[^&]*&?/gi,'').replace(/[\?&]+$/,'');window.history.replaceState({},document.title,newUrl);}}},};if(typeof window.urlCleaner==='undefined'){window.urlCleaner=urlCleaner;}})();