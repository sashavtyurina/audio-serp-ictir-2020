// Customer: NASA

// Version: DHTML Trigger 3.2.3
// Old FSR include.
document.addEventListener( 'DOMContentLoaded', function () {
	table1replace = document.getElementsByTagName("table")[0];
	tbodyreplace = table1replace.getElementsByTagName("tbody")[0];
	trreplace = tbodyreplace.getElementsByTagName("tr")[2];
	tdreplace = trreplace.getElementsByTagName("td")[1];
	tdreplace.innerHTML = '<table cellpadding="0" cellspacing="0" border="0" width="730" bgcolor="#cccccc">' +
		'<tbody><tr><td><a href="http://www.nasa.gov"><img alt="" src="https://nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"></a><td><h2>Disclaimer: This material is being kept online for historical purposes. Though accurate at the time of publication, it is no longer being updated. The page may contain broken links or outdated information, and parts may not function in current web browsers. Visit <a href="http://www.nasa.gov">NASA.gov</a> for current information</td></tr></tbody></table>';
}, false );
