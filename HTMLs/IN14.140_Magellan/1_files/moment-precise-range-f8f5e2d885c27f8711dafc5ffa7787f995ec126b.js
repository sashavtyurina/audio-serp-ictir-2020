"undefined"==typeof moment&&require&&(moment=require("moment")),function(y){function i(e,n){return e+" "+v[n+(1===e?"":"s")]}function p(e,n,t,s,r,o){var u=[];return e&&u.push(i(e,"year")),n&&u.push(i(n,"month")),t&&u.push(i(t,"day")),s&&u.push(i(s,"hour")),r&&u.push(i(r,"minute")),o&&u.push(i(o,"second")),u.join(v.delimiter)}var v={nodiff:"",year:"year",years:"years",month:"month",months:"months",day:"day",days:"days",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds",delimiter:" "};y.fn.preciseDiff=function(e,n){return y.preciseDiff(this,e,n)},y.preciseDiff=function(e,n,t){var s,r=y(e),o=y(n);if(r.add(o.utcOffset()-r.utcOffset(),"minutes"),r.isSame(o))return v.nodiff;if(r.isAfter(o)){var u=r;r=o,o=u,s=!0}else s=!1;var i=o.year()-r.year(),a=o.month()-r.month(),m=o.date()-r.date(),d=o.hour()-r.hour(),f=o.minute()-r.minute(),h=o.second()-r.second();if(h<0&&(h=60+h,f--),f<0&&(f=60+f,d--),d<0&&(d=24+d,m--),m<0){var c=y(o.year()+"-"+(o.month()+1),"YYYY-MM").subtract(1,"M").daysInMonth();m=c<r.date()?c+m+(r.date()-c):c+m,a--}return a<0&&(a=12+a,i--),t?{years:i,months:a,days:m,hours:d,minutes:f,seconds:h,firstDateWasLater:s}:p(i,a,m,d,f,h)}}(moment);