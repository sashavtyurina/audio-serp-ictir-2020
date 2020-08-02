/*Following js files are clubbed in this file:
1. navArray.js
2. header.js
3. etouch_global.js
4. footer.js
5. news.js
6. getyear.js
7. wallpaper.js
8. countdownclock.js /* countdownclock.js is removed from club2.js to avoid repetition , it will be used invidually -- 05/14/2008 */
/*----------------------------------------------------- navArray.js starts ----------------------------------------------------*/
// Top nav
var topNav = [

    ['Home', '/home/index.html', [
        ['', '']
    ]],
    ['News', '/news/index.html', [
        ['News &amp; Features', '/news/index.html'],
        ['Recovery Information', '/recovery/index.html'],
        ['Shuttle &amp; Station', '/topics/shuttle_station/index.html'],
        ['Moon &amp; Mars', '/topics/moonmars/index.html'],
        ['Solar System', '/topics/solarsystem/index.html'],
        ['Universe', '/topics/universe/index.html'],
        ['Aeronautics', '/topics/aeronautics/index.html'],
        ['Earth', '/topics/earth/index.html'],
        ['Technology', '/topics/technology/index.html'],
        ['NASA in Your Life', '/topics/nasalife/index.html'],
        ['NASA People', '/topics/people/index.html'],
        ['NASA History', '/topics/history/index.html']

    ]],
    ['Missions', '/missions/index.html', [
        ['Missions', '/missions/index.html'],
        ['Mission Calendar', '/missions/calendar/index.html'],
        ['Launch Schedule', '/missions/highlights/schedule.html']
    ]],
    ['Multimedia', '/multimedia/index.html', [
        ['Multimedia', '/multimedia/index.html'],
        ['Images', '/multimedia/imagegallery/index.html'],
        ['Video', '/multimedia/videogallery/index.html'],
        ['Podcasts', '/multimedia/podcasting/index.html'],
        ['NASA TV', '/multimedia/nasatv/index.html'],
        ['Interactive Features', '/multimedia/mmgallery/index.html'],
        ['3D  Resources', '/multimedia/3d_resources/index.html'],
        ['RSS Feeds', '/rss/index.html'],
        ['Blogs', '/multimedia/blogs/index.html']
        //,['Worldbook@NASA', '/worldbook/index.html']
        ]],
    ['Connect', '/connect/index.html', [
        ['Blogs', 'http://blogs.nasa.gov', '<img style="margin-right:5px;border:none;" width="20" alt="Blogs Icon" title="Blogs Icon" src="/templateimages/redesign/navigation/TopNav/SocialMedia/Blogs_20x20.gif" height="20" align="Left" border="0" />'],
        ['RSS', 'http://www.nasa.gov/rss', '<img style="margin-right:5px;border:none;" height="20" border="0" align="left" width="20" src="/templateimages/redesign/navigation/TopNav/SocialMedia/Feeds_20x20.gif" title="RSS Feeds Icon" alt="RSS Feeds Icon"/>'],
        ['Twitter', 'http://twitter.com/nasa', '<IMG style="margin-right:5px;border:none;" WIDTH="20" ALT="Twitter Icon" TITLE="Twitter Icon" SRC="/templateimages/redesign/navigation/TopNav/SocialMedia/Twitter_20x20.gif" HEIGHT="20" ALIGN="Left" BORDER="0" />'],
        ['Facebook', 'http://www.facebook.com/NASA', '<IMG style="margin-right:5px;border:none;" WIDTH="20" ALT="Facebook Icon" TITLE="Facebook Icon" SRC="/templateimages/redesign/navigation/TopNav/SocialMedia/Facebook_20x20.gif" HEIGHT="20" ALIGN="Left" BORDER="0" />'],
        ['YouTube', 'http://www.youtube.com/NASATelevision', '<IMG style="margin-right:5px;border:none;" WIDTH="20" ALT="YouTube Icon" TITLE="YouTube Icon" SRC="/templateimages/redesign/navigation/TopNav/SocialMedia/Youtube_20x20.gif" HEIGHT="20" ALIGN="Left" BORDER="0" />'],
        ['Flickr', 'http://www.flickr.com/photos/nasahqphoto/', '<IMG style="margin-right:5px;border:none;" WIDTH="20" ALT="Flickr Icon" TITLE="Flickr Icon" SRC="/templateimages/redesign/navigation/TopNav/SocialMedia/Flickr1_20x20.gif" HEIGHT="20" ALIGN="Left" BORDER="0" />'],
        ['iTunes', 'http://phobos.apple.com/WebObjects/MZStore.woa/wa/viewPodcast?id=201661703', '<img style="margin-right:5px;border:none;" height="20" border="0" align="left" width="20" src="/templateimages/redesign/navigation/TopNav/SocialMedia/iTunes_20x20.gif" title="iTunes Icon" alt="iTunes Icon"/>'],
        ['More Social Media ...', '/connect/index.html']

    ]],
    ['About NASA', '/about/index.html', [
        ['About NASA', '/about/index.html'],
        ['What NASA Does', '/about/highlights/what_does_nasa_do.html'],
        ['Recovery Information', '/recovery/index.html'],
        ['NASA Leadership', '/about/admin.html'],
        ['Careers@NASA', '/about/career/index.html'],
        ['NASA Locations', '/about/sites/index.html'],
        ['NASA Calendar', '/about/events/index.html'],
        ['Budget and Performance', '/news/budget/index.html'],
        ['Reports', '/news/reports/index.html'],
        ['Research Opportunities', '/about/research/index.html'],
        ['Request a NASA Speaker', '/about/speakers/index.html'],
        ['Request a NASA Exhibit', '/about/exhibits/index.html']
    ]]
];

var footercol2 = [
    ['NASA Information on the American Recovery and Reinvestment Act of 2009', '/recovery/index.html'],
    ['Budgets, Strategic Plans and Accountability Reports', '/news/budget/index.html'],
    ['Equal Employment Opportunity Data Posted Pursuant to the No Fear Act', 'http://www.hq.nasa.gov/office/codee/nofear.html'],
    ['Information-Dissemination Policies and Inventories', '/about/contact/information_inventories_schedules.html']

];

var footercol3 = [
    ['Freedom of Information Act', 'http://www.hq.nasa.gov/office/pao/FOIA/agency/'],
    ['Privacy Policy &amp; Important Notices', '/about/highlights/HP_Privacy.html'],
    ['NASA Advisory Council', '/offices/nac/home/index.html'],
	['Aerospace Safety Advisory Panel', 'http://oiir.hq.nasa.gov/asap/index.html'],
    ['Inspector General Hotline', 'http://oig.nasa.gov/hotline.html'],
    ['Office of the Inspector General', 'http://oig.nasa.gov'],
    ['NASA Communications Policy', '/audience/formedia/features/communication_policy.html']

];

var footercol4 = [
	['Contact NASA', '/about/contact/index.html'],
    ['Site Map', '/sitemap/sitemap_nasa.html'],
	['BusinessUSA', 'http://business.usa.gov/'],
    ['USA.gov', 'http://www.USA.gov'],
    ['Open Government at NASA', '/open/index.html'],
    ['Help and Preferences', '/help/about/index.html']
];

var itcdfooter2 = [
    ['Privacy Policy &amp; Important Notices', '/about/highlights/HP_Privacy.html']

];

var itcdTopNav = [

    ['ITCD Home', '/ITCDhome/index.html', [
        ['', '']
    ]],

    ['About ITCD', '/AboutITCD/index.html', [
        ['', '']
    ]],
    ['IT Strategic Plan', '/SAC/index.html', [
        ['', '']
    ]],
	['IT Policy', '/IT-Policy/index.html', [
        ['', '']
    ]],
    ['Products and Services  ', '/PandS/index.html', [
        ['Basic IT Services', '/PandS/EITS/index.html'],
        ['Business/Investment Mgmt', '/PandS/BIMO/index.html'],
        ['IT Procurement (SEWP)', 'http://www.sewp.nasa.gov/'],
		['IT Project Management', '/PandS/ITPM/index.html'],
        ['Mission Networking Services', '/PandS/MNS/index.html'],
        ['NASA I3P Contracts', '/PandS/I3P/index.html'],
        ['Additional IT Services', '/PandS/SITS/index.html']
    ]],
    ['ITCD Internal', '/ITCDInternal/index.html', [
        ['', '']
    ]]

];

/*----------------------------------------------------- navArray.js ends ------------------------------------------------------*/

/*----------------------------------------------------- header.js starts ------------------------------------------------------*/

function addMenuSupportItcd() {
    createITCDMajorNav(document.getElementById('main-nav'), itcdTopNav, 'dropper_wrapper');
}

//var topNavNew = ['Home', 'News', 'Missions', 'Multimedia', 'Connect', 'Aboutus'];
var topNavNew = ['News', 'Missions', 'Multimedia', 'Connect', 'Aboutus'];

function addMenuSupport() {
    // create, and post process menus

    var headerstring = '<div style="background-color: #1f1f1f; height: 100px;">' +
        '<h3><a href="http://www.nasa.gov"><div style="float: left;">' +
        '<img src="http://www.nasa.gov/externalflash/cmsdev_css/header_logo_revised.gif" alt="National Aeronautics and Space Administration">' +
        '</a></div><div style="color:#FFF;"><br>' +
        '<b>Disclaimer</b>: This material is being kept online for historical purposes. ' +
        'Though accurate at the time of publication, it is no longer being updated. ' +
        'The page may contain broken links or outdated information, ' + 
        'and parts may not function in current web browsers. ' + 
        'Visit <a href="http://www.nasa.gov">NASA.gov</a> for current information';

    document.getElementById('top_header').innerHTML = headerstring;
}

function createITCDMajorNav(menuParent, menuSrc, menuClass) {
    // set up some vars
    //var logoItem  = logoItem;
    var navParent = menuParent;
    var navData = menuSrc;
    // create menu root dom
/*var navBucket            = document.createElement('div');
	 navBucket.id         = menuId;
	 navBucket.className	 = menuClass;*/
    var navBucketDiv = document.createElement('div');
    navBucketDiv.id = menuClass;
    // loop through level 1
    //for (each in navData) {
    navData.each(function (value, index) {
        var topLevel = navData[index];
        var topName = topLevel[0];
        var topLink = topLevel[1];

        // create first level item DOM
        var navItemA;
        var navItemASpan;
        var navItem = document.createElement('h2');
        topName = topName.replace(/\s/g, "").toLowerCase();
        navItem.id = 'nav-' + topName;
        if (topName.toLowerCase() == 'itcdhome') {
            navItem.className = 'nav-' + topName;
        }

        navItemA = document.createElement('a');
        navItemA.href = topLink;
        navItemASpan = document.createElement('span');
        navItemASpan.innerHTML = topLevel[0];

        navItemA.appendChild(navItemASpan);
        navItem.appendChild(navItemA);

        if (topLevel.length > 2) {
            var subLevel = topLevel[2];
            // loop through level 2
            //for (each in subLevel) {
            var subBucket = document.createElement('div');
            if (topName.toLowerCase() == 'itcdhome') {
                subBucket.className = "dropper 129";
            } else {
                subBucket.className = "dropper 140";
            }
            var subBucketUl = document.createElement('ul');

            if (topName.toLowerCase() == 'productsandservices' ) {
                subLevel.each(function (value, index) {

                    var subName = subLevel[index][0];
                    var subLink = subLevel[index][1];
                    //alert("subname " +	subName+ "sublink "+subLink);
                    // create sublevel item element
                    var subItem = document.createElement('li');
                    var subItemA = document.createElement('a');
                    subItemA.href = subLink;
                    subItemA.innerHTML = subName;

                    subItem.appendChild(subItemA);
                    subBucketUl.appendChild(subItem);

                });
            }
            subBucket.appendChild(subBucketUl);

        }

        navBucketDiv.appendChild(navItem);
        navBucketDiv.appendChild(subBucket);

    });
    navParent.appendChild(navBucketDiv);

}

function createMajorNav(menuParent, menuSrc, menuClass) {
    // set up some vars
    //var logoItem  = logoItem;
    var navParent = menuParent;
    var navData = menuSrc;
    // create menu root dom
/*var navBucket            = document.createElement('div');
	 navBucket.id         = menuId;
	 navBucket.className	 = menuClass;*/
    var navBucketDiv = document.createElement('div');
    navBucketDiv.id = menuClass;
    // loop through level 1
    //for (each in navData) {
    navData.each(function (value, index) {
        var topLevel = navData[index];
        var topName = topLevel[0];
        var topLink = topLevel[1];

        // create first level item DOM
        var navItemA;
        var navItemASpan;
        var navItem = document.createElement('h2');
        if (topName.toLowerCase() == 'connect') {
            navItem.style.width = "125px";
        }
        navItem.id = 'nav-' + topName.replace(" ", "").toLowerCase();
        if (topName.toLowerCase() == 'home') {
            navItem.className = 'nav-' + topName.replace(" ", "").toLowerCase();
        }
        if (topName.toLowerCase() == 'connect') {
            navItemA = document.createElement('a');
            navItemA.href = topLink;
            navItemA.style.width = "125px";
            navItemA.style.backgroundImage = "url(/templateimages/redesign/navigation/TopNav/navtitle-connect.gif)";

            navItemASpan = document.createElement('span');
            navItemASpan.style.display = "none";
            navItemASpan.innerHTML = topName;
        } else {
            navItemA = document.createElement('a');
            navItemA.href = topLink;
            navItemASpan = document.createElement('span');
            navItemASpan.innerHTML = topName;
        }

        navItemA.appendChild(navItemASpan);
        navItem.appendChild(navItemA);

        if (topLevel.length > 2) {
            var subLevel = topLevel[2];
            // loop through level 2
            //for (each in subLevel) {
            var subBucket = document.createElement('div');
            if (topName.toLowerCase() == 'home') {
                subBucket.className = "dropper 129";
            } else if (topName.toLowerCase() == 'connect') {
                subBucket.className = "dropper 125";
            } else {
                subBucket.className = "dropper 140";
            }
            var subBucketUl = document.createElement('ul');

            if (topName.toLowerCase() == 'connect') {
                subLevel.each(function (value, index) {

                    var subName = subLevel[index][0];
                    var subLink = subLevel[index][1];

                    //alert("subname " +	subName+ "sublink "+subLink);
                    // create sublevel item element
                    var subItem = document.createElement('li');
                    subItem.style.lineHeight = "18px";
                    subItem.style.height = "20px";

                    //alert(subLevel[index][2]);
                    if (subLevel[index][2] && subLevel[index][2] != null && subLevel[index][2] != eval("")) {
                        var subImage = subLevel[index][2];
                        var subItemB = document.createElement('a');
                        subItemB.href = subLink;
                        subItemB.innerHTML = subImage;
                        subItem.appendChild(subItemB);
                    }

                    var subItemA = document.createElement('a');
                    subItemA.href = subLink;
                    subItemA.innerHTML = subName;

                    subItem.appendChild(subItemA);
                    subBucketUl.appendChild(subItem);

                });
            }

            if (topName.toLowerCase() != 'home' && topName.toLowerCase() != 'connect') {
                subLevel.each(function (value, index) {

                    var subName = subLevel[index][0];
                    var subLink = subLevel[index][1];
                    //alert("subname " +	subName+ "sublink "+subLink);
                    // create sublevel item element
                    var subItem = document.createElement('li');
                    var subItemA = document.createElement('a');
                    subItemA.href = subLink;
                    subItemA.innerHTML = subName;

                    subItem.appendChild(subItemA);
                    subBucketUl.appendChild(subItem);

                });
            }
            subBucket.appendChild(subBucketUl);

        }

        navBucketDiv.appendChild(navItem);
        navBucketDiv.appendChild(subBucket);

    });
    navParent.appendChild(navBucketDiv);

}

function addTopNavContent() {

    var navData = topNavNew;

    var bodyTag = document.getElementsByTagName('body')[0];

    var mainNavTag = document.getElementsByTagName('main-nav');

    var i;

    var mainDivTag = document.getElementById('main-nav');
    //														alert('maintag :' + mainDivTag);
    var subDivTag = document.createElement('div');
    subDivTag.id = "dropper_wrapper";

    for (i = 0; i < navData.length; i++) {

        var headerTag = document.createElement('h2');
        if (navData[i].toLowerCase() == 'aboutus') {
            navData[i] = "aboutnasa";
        }
        headerTag.id = "shelf-nav-" + navData[i].toLowerCase();
        headerTag.className = "nav-" + navData[i].toLowerCase() + "-out";

		/*
        if (navData[i].toLowerCase() == 'home') {
            headerTag.style.width = "129px"
        } else if (navData[i].toLowerCase() == 'connect') {
            headerTag.style.width = "124px"
        }
		*/
		
        var anchorTag = document.createElement('a');
        if (navData[i].toLowerCase() == 'aboutnasa') {
            navData[i] = "aboutus";
        }
        anchorTag.id = "topnav_" + navData[i].toLowerCase() + "link";
        anchorTag.rel = "topnav_" + navData[i].toLowerCase() + "link_submenu";
        /*
		if (navData[i].toLowerCase() == 'home') {
            anchorTag.style.width = "129px"
        } else if (navData[i].toLowerCase() == 'connect') {
            anchorTag.style.width = "124px"
        }
		*/
        if (navData[i].toLowerCase() == 'home') {
            anchorTag.href = "/home/index.html";
        } else if (navData[i].toLowerCase() == 'news') {
            anchorTag.href = "/news/index.html";
        } else if (navData[i].toLowerCase() == 'missions') {
            anchorTag.href = "/missions/index.html";
        } else if (navData[i].toLowerCase() == 'multimedia') {
            anchorTag.href = "/multimedia/index.html";
        } else if (navData[i].toLowerCase() == 'connect') {
            anchorTag.href = "/connect/index.html";
        } else {
            anchorTag.href = "/about/index.html";
        }

        if (navData[i].toLowerCase() != 'home') {
            anchorTag.rev = "/templateimages/redesign/shelfnav/" + navData[i].toLowerCase() + "_topnav.html";
        }
        var spanTag = document.createElement('span');
        /*if (navData[i].toLowerCase() == 'connect') {
            //spanTag.setAttribute("style","display:none;");
            //spanTag.style.display="none";
        }*/
        if ((navData[i].replace(" ", "")).toLowerCase() == 'aboutus') {
            navData[i] = "About Us";
        }
        spanTag.style.display = "none";
        spanTag.innerHTML = navData[i];
        anchorTag.appendChild(spanTag);
        headerTag.appendChild(anchorTag);

        var divTag = document.createElement("div");
        divTag.id = "topnav_" + (navData[i].replace(" ", "")).toLowerCase() + "link_submenu";
        divTag.className = "dropdownmenu";

        subDivTag.appendChild(headerTag);
        subDivTag.appendChild(divTag);
    }

    mainDivTag.appendChild(subDivTag);

    //	alert('done :');
    //dropdowncontent.init("topnav_homelink", "right-bottom", 100, "mouseover")
    dropdowncontent.init("topnav_newslink", "right-bottom", 700, "mouseover")
    dropdowncontent.init("topnav_missionslink", "right-bottom", 700, "mouseover")
    dropdowncontent.init("topnav_multimedialink", "right-bottom", 700, "mouseover")
    dropdowncontent.init("topnav_connectlink", "right-bottom", 700, "mouseover")
    dropdowncontent.init("topnav_aboutuslink", "right-bottom", 700, "mouseover")

}

/*----------------------------------------------------- header.js ends --------------------------------------------------------*/

/*----------------------------------------------------- etouch_global.js starts -----------------------------------------------*/

function createForm() {

    var loginformDiv = $('login_form');

    var loginformNoDrop = document.createElement('div');
    loginformNoDrop.id = "login_form_nodrop_old";

    var loginlinks = document.createElement('span');
    loginlinks.id = "login_links";

	loginformDiv.appendChild(loginlinks);

    /*var spanlogin = document.createElement('span');
    spanlogin.innerHTML = "&rsaquo;&nbsp;";

    var skipnavLogin = document.createElement('div');
    skipnavLogin.className = "skiplinklogin";
    skipnavLogin.innerHTML = '<a href="http://mynasa.nasa.gov/portal/site/mynasa/template.NASA_LOGIN_PROCESS">Follow this link to Login to MyNASA</a>';
    var anchorlogin = document.createElement('a');
    anchorlogin.id = "loginnasa";
    anchorlogin.className = "myOverlayLogin null bottom null observe_click";
    anchorlogin.href = "#";
    anchorlogin.innerHTML = "Log In To MyNASA";

    spanlogin.appendChild(skipnavLogin);
    spanlogin.appendChild(anchorlogin);

    var textNode = document.createTextNode('|');

    var spansingup = document.createElement('span');
    spansingup.innerHTML = "&rsaquo;&nbsp;";

    var anchorsignup = document.createElement('a');
    anchorsignup.href = "http://mynasa.nasa.gov/portal/site/mynasa/template.REGISTER";
    anchorsignup.innerHTML = "Sign Up";

    spansingup.appendChild(anchorsignup);

    var ckUtil = new CJL_CookieUtil("visitorinfo", 0, "/", ".nasa.gov");
    var username = ckUtil.getSubValue("name");
    var loginText = document.createElement('span');
    loginText.innerHTML = "Welcome " + username;

    var logoutform = document.createElement('form');
    logoutform.id = "gridLogout";
    logoutform.name = "gridLogout";
    logoutform.method = "post"
    logoutform.action = "http://mynasa.nasa.gov/portal/site/mynasa/template.LOGOUT";

    var spanlogout = document.createElement('span');
    spanlogout.innerHTML = "&rsaquo;&nbsp;";

    var logoutanchor = document.createElement('a');
    logoutanchor.href = "javascript:gridLogoutSubmit();";
    logoutanchor.innerHTML = "Log Out";

    spanlogout.appendChild(logoutanchor);

    var textNode1 = document.createTextNode('|');
    var textNode2 = document.createTextNode('|');

    var spanedit = document.createElement('span');
    spanedit.innerHTML = "&rsaquo;&nbsp;";

    var editanchor = document.createElement('a');
    editanchor.href = "http://mynasa.nasa.gov/portal/site/mynasa/template.MY_ACCOUNT";
    editanchor.innerHTML = "Edit Profile";

    spanedit.appendChild(editanchor);;

    var logouthidden = document.createElement('input');
    logouthidden.type = "hidden";
    logouthidden.id = "realm";
    logouthidden.name = "realm";
    logouthidden.value = "realml";

    if (ckUtil != null && username != null && username != '') {

        loginlinks.appendChild(loginText);
        loginlinks.appendChild(textNode1);
        loginlinks.appendChild(spanlogout);
        loginlinks.appendChild(textNode2);
        loginlinks.appendChild(spanedit);

        logoutform.appendChild(logouthidden);
        logoutform.appendChild(loginlinks);
        loginformDiv.innerHTML = "";
        loginformDiv.appendChild(logoutform);
    } else {
        loginlinks.appendChild(spanlogin);
        loginlinks.appendChild(textNode);
        loginlinks.appendChild(spansingup);

        loginformDiv.innerHTML = "";
        loginformDiv.appendChild(loginlinks);
    }*/

}

function gridLoginSubmit() {
    var gridLoginform = $('gridLogin');
    gridLoginform.submit();
}

function gridLogoutSubmit() {
    var gridLoginform = $('gridLogout');
    gridLogout.submit();
}

var text = false;
var textAllow = (window.location.search.indexOf('text=1') + 1) ? false : true;

// User Preferences code ends

function switchText() {
    var val = (textAllow) ? '1' : '0';
    var s = window.location.href.split('#')[0];
    if (window.location.search) {
        if (s.indexOf('text=') + 1) {
            s = s.replace('text=' + s.split('text=')[1].split('&')[0], 'text=' + val);
        } else {
            s += '&text=' + val;
        }
    } else {
        s += '?text=' + val;
    }
    window.location.href = s;
}

function newAllowText() {
    //alert("Text");
    var s = '<span class="hide">&rsaquo;&nbsp;<a href="#" onclick="switchText(); return false;" >';
    s += (textAllow) ? 'Text Version' : 'Non-Text Version';
    s += '</a><br/><span>';
    return s;
}

function createFooterContent(editor, date, official, contact, link, sitemap) {
    if ($('footer') != null) {
        if ($('footercol1')) {
            ($('footercol1')).innerHTML = 'Page Last Updated: ' + date + ' </br>' + 'Page Editor: ' + editor + ' <br />' + 'NASA Official: ' + official;
        }
        if ($('footercol4')) {
            var liInnerHTML = ($('footercol4')).firstDescendant().firstDescendant(); /*This gives the contact li tag*/
            var siteliTag = ($('footercol4')).firstDescendant().firstDescendant().next(); /*This gives the sitemap li tag*/
            var aInnerHTML = ($('footercol4')).firstDescendant().firstDescendant().firstDescendant(); /*This gives the contact li anchor tag*/

            var siteaTag = ($('footercol4')).firstDescendant().firstDescendant().next().firstDescendant(); /*This gives the sitemap li anchor tag*/

            aInnerHTML.innerHTML = contact;
            aInnerHTML.href = link;
            liInnerHTML.appendChild(aInnerHTML);

            siteaTag.href = sitemap;
            siteliTag.appendChild(siteaTag);
        }
    }
}

function createItcdFooterContent(editor, date, official, contact, link, sitemap) {
    if ($('footer') != null) {
        if ($('footercol1')) {
            ($('footercol1')).innerHTML = 'Page Last Updated: ' + date + ' </br>' + 'Page Editor: ' + editor + ' <br />' + 'NASA Official: ' + official;
        }

    }
}

function CJL_CookieUtil(name, duration, path, domain, secure) {
    this.affix = "";

    if (duration) {
        var date = new Date();
        var curTime = new Date().getTime();

        date.setTime(curTime + (1000 * 60 * duration));
        this.affix = "; expires=" + date.toGMTString();
    }

    if (path) {
        this.affix += "; path=" + path;
    }

    if (domain) {
        this.affix += "; domain=" + domain;
    }

    if (secure) {
        this.affix += "; secure=" + secure;
    }

    function getValue() {
        var m = document.cookie.match(new RegExp("(" + name + "=[^;]*)(;|$)"));

        return m ? m[1] : null;
    }

    this.cookieExists = function () {
        return getValue() ? true : false;
    }
    this.expire = function () {
        var date = new Date();
        date.setFullYear(date.getYear() - 1);
        document.cookie = name + "=noop; expires=" + date.toGMTString();
    }
    this.setSubValue = function (key, value) {
        var ck = getValue();

        if (/[;, ]/.test(value)) {
            //Mac IE doesn't support encodeURI
            value = window.encodeURI ? encodeURI(value) : escape(value);
        }

        if (value) {
            var attrPair = "@" + key + value;

            if (ck) {
                if (new RegExp("@" + key).test(ck)) {
                    document.cookie = ck.replace(new RegExp("@" + key + "[^@;]*"), attrPair) + this.affix;
                } else {
                    document.cookie = ck.replace(new RegExp("(" + name + "=[^;]*)(;|$)"), "$1" + attrPair) + this.affix;
                }
            } else {
                document.cookie = name + "=" + attrPair + this.affix;
            }
        } else {
            if (new RegExp("@" + key).test(ck)) {
                document.cookie = ck.replace(new RegExp("@" + key + "[^@;]*"), "") + this.affix;
            }
        }
    }
    this.getSubValue = function (key) {
        var ck = getValue();

        if (ck) {
            var m = ck.match(new RegExp("@" + key + "([^@;]*)"));

            if (m) {
                var value = m[1];

                if (value) {
                    //Mac IE doesn't support decodeURI
                    return window.decodeURI ? decodeURI(value) : unescape(value);
                }
            }
        }
    }
}

function searchformsubmit() {
    var searchform = document.getElementById("search");

    if ($("dropdown_search_label") != null) {
        var centername = $("dropdown_search_label").innerHTML.toLowerCase();
        if (centername == "nasa.gov") {
            document.getElementById("centername").value = "";
            searchform.action = "http://search.nasa.gov/search/search.jsp";
        } else if (centername == "dryden xnet") {
            document.getElementById("centername").value = "xnet";
            searchform.action = "http://search.nasa.gov/search/centersearch.jsp?centername=xnet";
        } else {
            document.getElementById("centername").value = centername;
            searchform.action = "http://search.nasa.gov/search/centersearch.jsp?centername=" + centername;
        }
    } else {
        searchform.action = "http://search.nasa.gov/search/search.jsp";
    }
    searchform.submit();
}

function showfaq(arg) {
    var faqdiv = document.getElementById(arg);
    if (faqdiv != null && faqdiv != 'undefined') {
        var currentdiv = faqdiv.className;

        var allshowdivs = document.getElementsByClassName('showanswer');
        for (var i = 0; i < allshowdivs.length; i++) {
            allshowdivs[i].className = 'hideanswer';
        }

        if (currentdiv != null && currentdiv != 'undefined' && currentdiv == 'hideanswer') faqdiv.className = 'showanswer';
        else faqdiv.className = 'hideanswer';
    }

}

/*----------------------------------------------------- etouch_global.js ends -------------------------------------------------*/

/*----------------------------------------------------- footer.js starts ------------------------------------------------------*/

function createFooterlogo() {
    var footerParent = document.getElementById('footer');
    var logo = createLogo('NASA Home', 'nasa_logo_footer');
    var footerp = document.createElement('p');
    footerp.id = "footercol1";

    var footer2 = createFooter(document.getElementById('footer'), footercol2, 'footercol2');
    var footer3 = createFooter(document.getElementById('footer'), footercol3, 'footercol3');
    var footer4 = createFooter(document.getElementById('footer'), footercol4, 'footercol4');

    footerParent.appendChild(logo);
    footerParent.appendChild(footerp);
    footerParent.appendChild(footer2);
    footerParent.appendChild(footer3);
    footerParent.appendChild(footer4);
}

function createFooter(footerParent, footerSrc, footerId) {
    var footerData = footerSrc;
    var footerId = footerId;
    var footerBucketDiv = document.createElement('div');
    footerBucketDiv.id = footerId;
    var footerBucketUl = document.createElement('ul');

    //for(each in footerData){
    footerData.each(function (value, index) {
        var topLevel = footerData[index];
        var topfooterName = topLevel[0];
        var topfooterLink = topLevel[1];
        var footerItem = document.createElement('li');
        var footerItemA = document.createElement('a');
        footerItemA.href = topfooterLink;
        footerItemA.innerHTML = topfooterName;

        //footerp.appendChild(footerBucketDiv);
        footerBucketDiv.appendChild(footerBucketUl);
        footerBucketUl.appendChild(footerItem);
        footerItem.appendChild(footerItemA);
    });
    return footerBucketDiv;
}

function createLogo(logoSrc, logoClass) {
    var logoData = logoSrc;
    var logoDisplay = document.createElement('a');
    logoDisplay.className = logoClass;
    logoDisplay.href = "/home/index.html";
    var logoSpan = document.createElement('span');
    logoSpan.className = "hide";
    logoSpan.innerHTML = logoData;
    logoDisplay.appendChild(logoSpan);
    return logoDisplay;
}

function createItcdFooterlogo() {
    var footerParent = document.getElementById('footer');
    var logo = createItcdLogo('ITCD Home', 'nasa_logo_footer');
    var footerp = document.createElement('p');
    footerp.id = "footercol1";

    var footer2 = createFooter(document.getElementById('footer'), itcdfooter2, 'itcd-footercol2');
    //var footer3 = createFooter(document.getElementById('footer'),footercol3,'footercol3');
    //var footer4 = createFooter(document.getElementById('footer'),footercol4,'footercol4');
    footerParent.appendChild(logo);
    footerParent.appendChild(footerp);
    footerParent.appendChild(footer2);
    //footerParent.appendChild(footer3);
    //footerParent.appendChild(footer4);
}

function createItcdLogo(logoSrc, logoClass) {
    var logoData = logoSrc;
    var logoDisplay = document.createElement('a');
    logoDisplay.className = logoClass;
    logoDisplay.href = "/itcd/home/index.html";
    var logoSpan = document.createElement('span');
    logoSpan.className = "hide";
    logoSpan.innerHTML = logoData;
    logoDisplay.appendChild(logoSpan);
    return logoDisplay;
}

/*----------------------------------------------------- footer.js ends --------------------------------------------------------*/

/*----------------------------------------------------- news.js starts --------------------------------------------------------*/
if (detectBrowser.modernBrowser()) {

/*

	 document.observe('contentloaded', function() {
	 if($$('select.browse_year_select').length > 0){
	 var dds = new SkinnedSelect($$('select.browse_year_select')[0].parentNode,$$('select.browse_year_select')[0], function(){
	 if($$('select.browse_year_select')[0].value != 0) {
	 document.location.href = "news_and_features_archive.shtml?new_year=" + $$('select.browse_year_select')[0].value;
	 }
	 },'','gray');
	 }
	 }, false);

	 */

    function getyear() {
        var w = document.yearForm.nasa_facility.selectedIndex;
        var selected_text = document.yearForm.nasa_facility.options[w].text;
        var selected_url = document.yearForm.nasa_facility.options[w].value;
        if (selected_url != null && selected_url == '0') {
            document.location.href = document.yearForm.nasa_facility.options[1].value;
        } else {
            document.location.href = selected_url + "?year=" + selected_text;
        }
    }

} /*----------------------------------------------------- news.js ends ----------------------------------------------------------*/

/*----------------------------------------------------- getyear.js starts -----------------------------------------------------*/

function getSelectedYear() {

    var selectedyear;

    // get the current URL
    var url = window.location.toString();
    //get the parameters
    url.match(/\?(.+)$/);
    var params = RegExp.$1;
    // split up the query string and store in an
    // associative array
    var params = params.split("&");
    var queryStringList = {};

    for (var i = 0; i < params.length; i++) {
        var tmp = params[i].split("=");
        queryStringList[tmp[0]] = unescape(tmp[1]);
    }

    for (var i in queryStringList) {
        selectedyear = queryStringList[i];
    }
    //alert(selectedyear);
    if (selectedyear != 'undefined') {
        var flag = false;
        for (k = 1; k < document.yearForm.nasa_facility.options.length; k++) {
            var text = document.yearForm.nasa_facility.options[k].text;
            if (text == selectedyear) {
                document.yearForm.nasa_facility.options[k].selected = 'true';
                document.yearForm.selectedyear.value = selectedyear;
                flag = true;
                break;
            }
        }

        if (!flag) document.yearForm.nasa_facility.options[0].selected = 'true';
    }
}

function browsearchive(url) {
    var year = document.yearForm.selectedyear.value;
    //alert('in browsearchive' + url + ' and year == ' + year );
    if (year != null && year != '') document.location.href = url + "?year=" + year;
    else document.location.href = url;
}

document.observe('contentloaded', function () {
    var selectbox = document.getElementById("selectboxdiv");
    if (selectbox) {
        getSelectedYear();
    }
}, false); /*----------------------------------------------------- getyear.js ends -------------------------------------------------------*/

/*----------------------------------------------------- wallpaper.js starts -----------------------------------------------------*/
//Function To open wallpaper image in a new window along with instructions to download on different operating system environments.


function openImageWin(imageName) {
    //alert('inside openImageWin');
    //alert('imageName: '+imageName);
    var imageWin = window.open("", "WallPaper", "status=0,toolbar=0,location=0,menubar=0,scrollbars=1");
    imageWin.document.open();
    imageWin.document.writeln("<html><head><title>Wallpaper Image</title><BODY bgcolor='#000000' text='#FFFFFF'><table width='700' border='0' cellspacing='0' cellpadding='1'>  <tr align='left' valign='top'>     <td><p align='center'><font color='#FFFFFF' size='2' face='Arial, Helvetica, sans-serif'><b>WINDOWS:</b></font></p>      <ol>        <li><font size='2' color='#FFFFFF' face='Arial, Helvetica, sans-serif'>Right-click on           the image and click 'Set as Background'</font></li>      </ol></td>    <td><p align='center'><font color='#FFFFFF' size='2' face='Arial, Helvetica, sans-serif'><b>MAC         OS X:</b></font></p>      <ol>        <li><font size='2' color='#FFFFFF' face='Arial, Helvetica, sans-serif'>Drag the image           off onto your desktop</font></li>        <li><font size='2' color='#FFFFFF' face='Arial, Helvetica, sans-serif'> Go to system preferences</font></li>        <li><font size='2' color='#FFFFFF' face='Arial, Helvetica, sans-serif'> Go to the Desktop          icons and open it</font></li>        <li><font size='2' color='#FFFFFF' face='Arial, Helvetica, sans-serif'> Choose the 'Collection'           drop down and 'Choose Folder' to find the new wallpaper on your computer</font></li>      </ol></td>    <td><p align='center'><font color='#FFFFFF' size='2' face='Arial, Helvetica, sans-serif'><b>MAC         OS 9:</b></font></p>    <ol>        <li><font size='2' color='#FFFFFF' face='Arial, Helvetica, sans-serif'>Drag the image           off onto your desktop</font></li>        <li><font size='2' color='#FFFFFF' face='Arial, Helvetica, sans-serif'>Go to your control           panel and choose 'Appearance'</font></li>        <li><font size='2' color='#FFFFFF' face='Arial, Helvetica, sans-serif'>Click 'Set Desktop'           and choose the newly downloaded image on your desktop</font></li>      </ol></td>  </tr></table><br><div align='center'><img src='" + imageName + "' width='800' height='600'  border='1'> </div></body></html>");
    imageWin.document.close();
}

/*----------------------------------------------------- wallpaper.js ends -------------------------------------------------------*/

/*----------------------------------------------------- countdownclock.js starts ------------------------------------------------*/

/* countdownclock.js is removed from club2.js to avoid repetition , it will be used invidually -- 05/14/2008 */

/**
 * Utility function for displaying a up/down time counter.
 *
 * @param inputDate :: The date of the launch/mission
 * @param imgSuffix :: The suffix used for the images
 * @param imgPath :: The relative path for the images
 */
/*
 function MissionTimer(inputDate, divId) {
 var inputString = inputDate.toString();
 var replacedString = null;
 var timeZone =        new Array("EDT",      "EST",      "PDT",      "PST" ,      "CDT",      "CST",      "MDT",      "MST",      "AKDT",     "AKST",     "ADT",      "AST",      "HST");
 var timeZoneReplace = new Array("UTC-0400", "UTC-0500", "UTC-0700", "UTC-0800" , "UTC-0500", "UTC-0600", "UTC-0600", "UTC-0700", "UTC-0800", "UTC-0900", "UTC-0300", "UTC-0400", "UTC-1000");

 for(var i=0;i<timeZone.length;i++){
 if(inputString.match(timeZone[i])==timeZone[i]){
 replacedString = inputString.replace(timeZone[i],timeZoneReplace[i]);
 }
 }

 var now = new Date();
 gmt_now = now.toUTCString();
 now_ms = Date.parse(gmt_now)
 var launch = new Date(replacedString);
 var gmt_launch = launch;
 gmt_launch = launch.toUTCString();
 launch_ms = Date.parse(gmt_launch);
 var gap =launch_ms-now_ms;

 if (gap < 0) {
 gap = Math.abs(gap);
 }

 var day_gap_raw = (gap/(1000*60*60*24));
 var hr_gap_raw = (gap/(1000*60*60));
 var min_gap_raw = (gap/(1000*60));

 var day_gap = Math.floor(gap/(1000*60*60*24));
 var hr_gap = Math.floor(hr_gap_raw-(day_gap * 24));
 // changed this to Math.floor from Math.round to see if it fixes the "final minute" problem
 var mn_gap = Math.floor((min_gap_raw-(day_gap*24*60))-(hr_gap*60));

 // Calculate the number of seconds left after minutes are calculated.
 var min_gap_floor = Math.floor(min_gap_raw);
 sec_gap = Math.round((min_gap_raw - min_gap_floor) *60);

 var daytho = Math.floor(day_gap/1000);
 if (daytho < 1 ) {
 daytho = 0;
 }

 var dayhun = Math.floor(day_gap / 100);
 var dayten = Math.floor((day_gap - (dayhun * 100))/10);
 var dayten_raw = (day_gap - (dayhun * 100))/10;
 var dayone = Math.floor((dayten_raw*10) - (dayten*10));

 var dayhunabs = Math.abs(dayhun);

 if (dayhunabs >= 10) {
 dayhun_div = Math.floor(dayhun/10);
 dayhun = dayhun - (dayhun_div * 10);
 }

 var hrten = Math.floor((hr_gap)/10);
 var hrone = Math.floor((hr_gap) - (hrten *10));

 var mnten = Math.floor((mn_gap)/10);
 var mnone = Math.floor((mn_gap) - (mnten * 10));

 var secten = Math.floor(sec_gap/10);
 var secone = Math.floor(sec_gap - (secten*10));

 var day = dayone;
 if (dayten > 0) day = ''+dayten+dayone;
 if (dayhun > 0) day = ''+dayhun+dayten+dayone;
 if (daytho > 0) day = ''+daytho+dayhun+dayten+dayone;

 var htmlSnippet = '<div id="day">'+day
 + '</div><div id="hour">'+hrten+hrone
 + '</div><div id="minute">'+mnten+mnone
 + '</div><div id="second">'+secten+secone
 + '</div>';

 document.getElementById(divId).innerHTML = htmlSnippet;

 // recursive call to the function on every second
 setTimeout("MissionTimer('" + inputDate + "', '" + divId + "')", 1000);
 }*/
/*----------------------------------------------------- countdownclock.js ends --------------------------------------------------*/

/*------------------New javascript for login and search -------------------- */

function createLoginForm() {

    var headerform = document.getElementById('header_form');

    var loginformDiv = document.createElement('div');
    loginformDiv.id = "login_form";

    var loginformDivNew = document.createElement('div');
    loginformDivNew.id = "login_form_new";

    var loginformNoDrop = document.createElement('div');
    loginformNoDrop.id = "login_form_nodrop";

	
	if (search_list.size() > 0) {
		headerform.appendChild(loginformDivNew);
	} else {
		headerform.appendChild(loginformNoDrop);
	}

    /*var loginlinks = document.createElement('span');
    loginlinks.id = "login_links";

    var spanlogin = document.createElement('span');
    spanlogin.innerHTML = "&rsaquo;&nbsp;";

    var skipnavLogin = document.createElement('div');
    skipnavLogin.className = "skiplinklogin";
    skipnavLogin.innerHTML = '<a href="http://mynasa.nasa.gov/portal/site/mynasa/template.NASA_LOGIN_PROCESS">Follow this link to Login to MyNASA</a>';
    var anchorlogin = document.createElement('a');
    anchorlogin.id = "loginnasa";
    anchorlogin.className = "myOverlayLogin null bottom null observe_click";
    anchorlogin.href = "#";
    anchorlogin.innerHTML = "Log In To MyNASA";

    spanlogin.appendChild(skipnavLogin);
    spanlogin.appendChild(anchorlogin);

    var textNode = document.createTextNode('|');

    var spansingup = document.createElement('span');
    spansingup.innerHTML = "&rsaquo;&nbsp;";

    var anchorsignup = document.createElement('a');
    anchorsignup.href = "http://mynasa.nasa.gov/portal/site/mynasa/template.REGISTER";
    anchorsignup.innerHTML = "Sign Up";

    spansingup.appendChild(anchorsignup);

    var ckUtil = new CJL_CookieUtil("visitorinfo", 0, "/", ".nasa.gov");
    var username = ckUtil.getSubValue("name");
    var loginText = document.createElement('span');
    loginText.innerHTML = "Welcome " + username;

    var logoutform = document.createElement('form');
    logoutform.id = "gridLogout";
    logoutform.name = "gridLogout";
    logoutform.method = "post"
    logoutform.action = "http://mynasa.nasa.gov/portal/site/mynasa/template.LOGOUT";

    var spanlogout = document.createElement('span');
    spanlogout.innerHTML = "&rsaquo;&nbsp;";

    var logoutanchor = document.createElement('a');
    logoutanchor.href = "javascript:gridLogoutSubmit();";
    logoutanchor.innerHTML = "Log Out";

    spanlogout.appendChild(logoutanchor);

    var textNode1 = document.createTextNode('|');
    var textNode2 = document.createTextNode('|');

    var spanedit = document.createElement('span');
    spanedit.innerHTML = "&rsaquo;&nbsp;";

    var editanchor = document.createElement('a');
    editanchor.href = "http://mynasa.nasa.gov/portal/site/mynasa/template.MY_ACCOUNT";
    editanchor.innerHTML = "Edit Profile";

    spanedit.appendChild(editanchor);;

    var logouthidden = document.createElement('input');
    logouthidden.type = "hidden";
    logouthidden.id = "realm";
    logouthidden.name = "realm";
    logouthidden.value = "realml";

    if (ckUtil != null && username != null && username != '') {
        loginlinks.appendChild(loginText);
        loginlinks.appendChild(textNode1);
        loginlinks.appendChild(spanlogout);
        loginlinks.appendChild(textNode2);
        loginlinks.appendChild(spanedit);

        logoutform.appendChild(logouthidden);
        logoutform.appendChild(loginlinks);
        if (search_list.size() > 0) {
            loginformDivNew.appendChild(logoutform)
            headerform.innerHTML = "";
            headerform.appendChild(loginformDivNew);
        } else {
            loginformDiv.appendChild(logoutform)
            headerform.innerHTML = "";
            headerform.appendChild(loginformDiv);
        }

    } else {
        loginlinks.appendChild(spanlogin);
        loginlinks.appendChild(textNode);
        loginlinks.appendChild(spansingup);

        if (search_list.size() > 0) {

            loginformDivNew.appendChild(loginlinks);
            headerform.appendChild(loginformDivNew);

        } else {
            loginformNoDrop.appendChild(loginlinks);
            headerform.appendChild(loginformNoDrop);

        }

    }*/

    if (search_list.size() > 0) {
        var searchSelect = new Element("select", {
            'disabled': "disabled"
        });
        search_list.each(function (searchList) {
            var opElem = new Element("option", {
                'id': searchList['id'],
                'name': searchList['name']
            });
            opElem.update(searchList['value']);
            searchSelect.appendChild(opElem);
        });
        if ($('searchselector') != null) {
            $('searchselector').appendChild(searchSelect);
            var skinnedDropper = new SkinnedSelectSearch($$('#searchselector')[0], $$('#searchselector' + ' select')[0], function () {}, '', 'gray');
        }
    }

}

/*------------------javascript for login and search for accessibility begin-------------------- */

function createLoginFormForAccessibility() {

    var headerform = document.getElementById('header_form');

    var loginformDiv = document.createElement('div');
    loginformDiv.id = "login_form";

    var loginformDivNew = document.createElement('div');
    loginformDivNew.id = "login_form_new";

    var loginformNoDrop = document.createElement('div');
    loginformNoDrop.id = "login_form_nodrop";

    if (search_list.size() > 0) {
		headerform.appendChild(loginformDivNew);
	} else {
		headerform.appendChild(loginformNoDrop);
	}

    /*
	var loginlinks = document.createElement('span');
    loginlinks.id = "login_links";

	var spanlogin = document.createElement('span');
    spanlogin.innerHTML = "&rsaquo;&nbsp;";

    var skipnavLogin = document.createElement('div');
    skipnavLogin.className = "skiplinklogin";
    skipnavLogin.innerHTML = '<a href="http://mynasa.nasa.gov/portal/site/mynasa/template.NASA_LOGIN_PROCESS">Follow this link to Login to MyNASA</a>';
    var anchorlogin = document.createElement('a');
    anchorlogin.id = "loginnasa";
    anchorlogin.href = "http://mynasa.nasa.gov/portal/site/mynasa/template.NASA_LOGIN_PROCESS";
    anchorlogin.innerHTML = "Log In To MyNASA";

    spanlogin.appendChild(skipnavLogin);
    spanlogin.appendChild(anchorlogin);

    var textNode = document.createTextNode('|');

    var spansingup = document.createElement('span');
    spansingup.innerHTML = "&rsaquo;&nbsp;";

    var anchorsignup = document.createElement('a');
    anchorsignup.href = "http://mynasa.nasa.gov/portal/site/mynasa/template.REGISTER";
    anchorsignup.innerHTML = "Sign Up";

    spansingup.appendChild(anchorsignup);

    var ckUtil = new CJL_CookieUtil("visitorinfo", 0, "/", ".nasa.gov");
    var username = ckUtil.getSubValue("name");
    var loginText = document.createElement('span');
    loginText.innerHTML = "Welcome " + username;

    var logoutform = document.createElement('form');
    logoutform.id = "gridLogout";
    logoutform.name = "gridLogout";
    logoutform.method = "post"
    logoutform.action = "http://mynasa.nasa.gov/portal/site/mynasa/template.LOGOUT";

    var spanlogout = document.createElement('span');
    spanlogout.innerHTML = "&rsaquo;&nbsp;";

    var logoutanchor = document.createElement('a');
    logoutanchor.href = "javascript:gridLogoutSubmit();";
    logoutanchor.innerHTML = "Log Out";

    spanlogout.appendChild(logoutanchor);

    var textNode1 = document.createTextNode('|');
    var textNode2 = document.createTextNode('|');

    var spanedit = document.createElement('span');
    spanedit.innerHTML = "&rsaquo;&nbsp;";

    var editanchor = document.createElement('a');
    editanchor.href = "http://mynasa.nasa.gov/portal/site/mynasa/template.MY_ACCOUNT";
    editanchor.innerHTML = "Edit Profile";

    spanedit.appendChild(editanchor);;

    var logouthidden = document.createElement('input');
    logouthidden.type = "hidden";
    logouthidden.id = "realm";
    logouthidden.name = "realm";
    logouthidden.value = "realml";

    if (ckUtil != null && username != null && username != '') {
        loginlinks.appendChild(loginText);
        loginlinks.appendChild(textNode1);
        loginlinks.appendChild(spanlogout);
        loginlinks.appendChild(textNode2);
        loginlinks.appendChild(spanedit);

        logoutform.appendChild(logouthidden);
        logoutform.appendChild(loginlinks);
        if (search_list.size() > 0) {
            loginformDivNew.appendChild(logoutform)
            headerform.innerHTML = "";
            headerform.appendChild(loginformDivNew);
        } else {
            loginformDiv.appendChild(logoutform)
            headerform.innerHTML = "";
            headerform.appendChild(loginformDiv);
        }

    } else {
        loginlinks.appendChild(spanlogin);
        loginlinks.appendChild(textNode);
        loginlinks.appendChild(spansingup);

        if (search_list.size() > 0) {

            loginformDivNew.appendChild(loginlinks);
            headerform.appendChild(loginformDivNew);

        } else {
            loginformNoDrop.appendChild(loginlinks);
            headerform.appendChild(loginformNoDrop);

        }

    }*/

    if (search_list.size() > 0) {
        var searchSelect = new Element("select", {
            'disabled': "disabled"
        });
        search_list.each(function (searchList) {
            var opElem = new Element("option", {
                'id': searchList['id'],
                'name': searchList['name']
            });
            opElem.update(searchList['value']);
            searchSelect.appendChild(opElem);
        });
        if ($('searchselector') != null) {
            $('searchselector').appendChild(searchSelect);
            var skinnedDropper = new SkinnedSelectSearch($$('#searchselector')[0], $$('#searchselector' + ' select')[0], function () {}, '', 'gray');
        }
    }

}

/*------------------javascript for login and search for accessibility End-------------------- */
/* loginform itcd */

function createLoginFormItcd() {

    var headerform = document.getElementById('header_form');

    var loginformDiv = document.createElement('div');
    loginformDiv.id = "login_form";

    var loginformDivNew = document.createElement('div');
    loginformDivNew.id = "login_form_new";

    var loginformNoDrop = document.createElement('div');
    loginformNoDrop.id = "login_form_nodrop";

    var loginlinks = document.createElement('span');
    loginlinks.id = "login_links";

    var spanlogin = document.createElement('span');
    spanlogin.innerHTML = "&rsaquo;&nbsp;";

    var anchorlogin = document.createElement('a');
    anchorlogin.id = "goddardhome";
    anchorlogin.href = "http://www.nasa.gov/centers/gsfc/";
    anchorlogin.innerHTML = "Goddard Home Page";

    spanlogin.appendChild(anchorlogin);

    var textNode = document.createTextNode('|');

    var spansingup = document.createElement('span');
    spansingup.innerHTML = "&rsaquo;&nbsp;";

    var anchorsignup = document.createElement('a');
    anchorsignup.href = "http://internal.gsfc.nasa.gov/";
    anchorsignup.innerHTML = "Inside Goddard";

    spansingup.appendChild(anchorsignup);

    loginlinks.appendChild(spanlogin);
    loginlinks.appendChild(textNode);
    loginlinks.appendChild(spansingup);
    loginformNoDrop.appendChild(loginlinks);
    headerform.appendChild(loginformNoDrop);

}

/* login form itcd **************************/

function createSearchFormItcd() {
    var headerform = document.getElementById('header_form');
    var searchformnasa = document.createElement('form');
    searchformnasa.name = "gs";
    searchformnasa.method = "get";
    searchformnasa.action = "http://google.gsfc.nasa.gov/search";

    searchformnasa.innerHTML = '<div id="search_form_nodrop"><label for="sf" title="search field"></label><span id="inputfield"><input id="sf" type="text" name="q" size="32" maxlength="256" value="" class="searchbox"></span><span id="searchbutton"><input type="submit" class="searchbtn" name="btnG" value="Search" title="search button"></div><input type="hidden" name="entqr" value="0"> <input type="hidden" name="ud" value="1"><input type="hidden" name="sort" value="date:D:L:d1"><input type="hidden" name="output" value="xml_no_dtd"><input type="hidden" name="oe" value="UTF-8"><input type="hidden" name="ie" value="UTF-8"><input type="hidden" name="client" value="default_frontend"><input type="hidden" name="proxystylesheet" value="default_frontend"><input type="hidden" name="site" value="default_collection"><input type="hidden" name="as_sitesearch" value="itcd.gsfc.nasa.gov"></div>';

    headerform.appendChild(searchformnasa);

/*var searchFieldLabel = document.createElement('label');
	 searchFieldLabel.htmlFor = "searchfield";
	 searchFieldLabel.title = "search field";

	 var fontTag = document.createElement('font');
	 fontTag.size = "-1";

	 var inputSf = document.createElement('input');
	 inputSf.title = "searchfield";
	 inputSf.type = "text";
	 inputSf.id = "sf";
	 inputSf.name = "q";
	 inputSf.size = "32";
	 inputSf.maxlength = "256"
	 inputSf.value = "";

	 var searchbtn = document.createElement('input');
	 searchbtn.title = "searchbutton";
	 searchbtn.type = "submit";
	 searchbtn.className = "searchbtn";
	 searchbtn.value = "";
	 searchnbtn = "btnG";

	 var entqrHidden = document.createElement('input');
	 entqrHidden.type = "hidden";
	 entqrHidden.value = "0";
	 var udHidden = document.createElement('input');
	 udHidden.type = "hidden";
	 udHidden.value = "1";

	 var sortHidden = document.createElement('input');
	 sortHidden.type = "hidden";
	 sortHidden.value = "date:D:L:d1";

	 var outputHidden = document.createElement('input');
	 outputHidden.type = "hidden";
	 outputHidden.value = "xml_no_dtd";
	 var oeHidden = document.createElement('input');
	 outputHidden.type = "hidden";
	 outputHidden.value = "xml_no_dtd";
	 */

}

function createSearchForm() {

    var headerform = document.getElementById('header_form');
    var searchformnasa = document.createElement('form');
    searchformnasa.id = "search";
    searchformnasa.method = "get";
    //searchformnasa.action = "javascript:searchformsubmit();";
    searchformnasa.action = "http://nasasearch.nasa.gov/search";
    

    var searchformcenter = document.createElement('form');
    searchformcenter.id = "search";
    searchformcenter.method = "get";
    //searchformcenter.action = "javascript:searchformsubmit();";
    searchformcenter.action = "http://nasasearch.nasa.gov/search";

    var searchdiv = document.createElement('div');
    searchdiv.id = "search_form_new";

    var hiddenCenter = document.createElement('label');
    hiddenCenter.htmlFor = "searchfield";
    hiddenCenter.id = "searchfieldCenter";
    hiddenCenter.setAttribute('name', 'searchfieldCenter');
    hiddenCenter.innerHTML = '<input id="affiliate" name="affiliate" type="hidden" value="nasa"/>';

    var searchdivNoDrop = document.createElement('div');
    searchdivNoDrop.id = "search_form_nodrop";

    var spansearchbtn = document.createElement('span');
    spansearchbtn.id = "searchbutton";

    var searchselector = document.createElement('div');
    searchselector.id = "searchselector";

    var spaninput = document.createElement('span');
    spaninput.id = "inputfield";

    var searchinput = document.createElement('input');
    searchinput.title = "searchfield";
    searchinput.type = "text";
    searchinput.id = "query";
    searchinput.name = "query";
    searchinput.className = "searchbox";
    searchinput.value = "";

    spaninput.appendChild(searchinput);

    // var scriptTag = document.createElement('script');
    // scriptTag.src = "http://www.nasa.gov/searchresources/resources/js/bsn.AutoSuggest_Modified_hdr.js";
    // scriptTag.type = "text/javascript";
    // scriptTag.charset = "UTF-8";

    var searchbtn = document.createElement('input');
    searchbtn.title = "searchbutton";
    searchbtn.type = "submit";
    searchbtn.className = "searchbtn";
    searchbtn.name = "commit";
    searchbtn.value = "";

    spansearchbtn.appendChild(searchbtn);

    var existingHeader = headerform.innerHTML;

    if (search_list.size() > 0) {
        searchdiv.appendChild(spaninput);
        //searchdiv.appendChild(scriptTag);
        searchdiv.appendChild(searchselector);
        searchdiv.appendChild(spansearchbtn);

        searchformcenter.appendChild(hiddenCenter);
        searchformcenter.appendChild(searchdiv);

        headerform.appendChild(searchformcenter);
    } else {
        searchdivNoDrop.appendChild(spaninput);
        //searchdivNoDrop.appendChild(scriptTag);
        searchdivNoDrop.appendChild(hiddenCenter);        
        searchdivNoDrop.appendChild(searchselector);
        searchdivNoDrop.appendChild(spansearchbtn);

        searchformnasa.appendChild(searchdivNoDrop);
        headerform.appendChild(searchformnasa);
    }

    if (search_list.size() > 0) {
        var searchSelect = new Element("select", {
            'disabled': "disabled"
        });
        search_list.each(function (searchList) {
            var opElem = new Element("option", {
                'id': searchList['id'],
                'name': searchList['name']
            });
            opElem.update(searchList['value']);
            searchSelect.appendChild(opElem);
        });
        if ($('searchselector') != null) {
            $('searchselector').appendChild(searchSelect);
            var skinnedDropper = new SkinnedSelectSearch($$('#searchselector')[0], $$('#searchselector' + ' select')[0], function () {}, '', 'gray');
        }
    }
}

/* Javascript for FLV Media Player Start */

var dynamicPlayerIndex = 0;

function embedFlashVideo(flashfile, position, width, height, description, thumbnail) {

    if (flashfile != null && flashfile != "") {
        var flashwidth;
        var flashheight;
        var embedTag;
        var padding;
        var margin;
        dynamicPlayerIndex++;
        var divid = "player" + dynamicPlayerIndex;

        if (width != null && width != "" && width < "228") {
            flashwidth = width;
        } else {
            if (position != "center") {
                flashwidth = "228";
            } else {
                flashwidth = width;
            }
        }

        if (height != null && height != "" && height < "228") {
            flashheight = height;
        } else {
            if (position != "center") {
                flashheight = "228";
            } else {
                flashheight = height;
            }
        }

        var desc;
        if (description != null && description != "" && (Plugin.isInstalled("Flash") == true)) {
            desc = '<p>' + description + '</p>';
        }
        var missingPlugin = '<p>You\'re missing some plugins needed to view the videos, Please enable <a href="http://www.nasa.gov/home/How_to_enable_Javascript.html">Javascript</a> or install Flash Player <a href="http://www.adobe.com/products/flashplayer/">Plug-in</a></p>';

        var flashVars;

        if (thumbnail != null && thumbnail != "") {
            flashVars = "file=" + flashfile + "&showdownload=true&showstop=true&backcolor=0x000000&frontcolor=0xFFFFFF&screencolor=0x000000&lightcolor=0x99CCFF&captions=captionate&usecaptions=false&link=" + flashfile + "&image=" + thumbnail + "&width=" + flashwidth + "&height=" + flashheight;
        } else {
            flashVars = "file=" + flashfile + "&showdownload=true&showstop=true&backcolor=0x000000&frontcolor=0xFFFFFF&screencolor=0x000000&lightcolor=0x99CCFF&captions=captionate&usecaptions=false&link=" + flashfile + "&width=" + flashwidth + "&height=" + flashheight;
        }

        embedTag = '<script>var so = new SWFObject("/templateimages/redesign/flash_player/swf/3.17/mediaplayer.swf","flashplayer","' + flashwidth + '","' + flashheight + '","9");' + 'so.addParam("allowfullscreen","true");' + 'so.addParam("allowscriptaccess","always");' + 'so.addParam("wmode", "transparent");' + 'so.useExpressInstall("/templateimages/redesign/flash_player/swf/expressinstall.swf");' + 'so. addParam("flashvars","' + flashVars + '");' + 'so.write("' + divid + '");</script>';

        var content;
        var missingPlugin = '<p>You\'re missing some plugins needed to view the videos, Please enable <a href="http://www.nasa.gov/home/How_to_enable_Javascript.html">Javascript</a> or install Flash Player <a href="http://www.adobe.com/products/flashplayer/">Plug-in</a></p>';

        if (position != null && position != "") {
            if (position == "left") {
                if (desc != null && desc != "") {
                    content = '<div style="width:' + flashwidth + 'px" class="flash_video_left"><div id="' + divid + '">' + missingPlugin + embedTag + '</div>' + desc + '</div>';
                } else {
                    content = '<div style="width:' + flashwidth + 'px" class="flash_video_left"><div id="' + divid + '">' + missingPlugin + embedTag + '</div></div>';
                }

            } else if (position == "right") {
                if (desc != null && desc != "") {
                    content = '<div style="width:' + flashwidth + 'px" class="flash_video_right"><div id="' + divid + '">' + missingPlugin + embedTag + '</div>' + desc + '</div>';
                } else {
                    content = '<div style="width:' + flashwidth + 'px" class="flash_video_right"><div id="' + divid + '">' + missingPlugin + embedTag + '</div></div>';
                }
            } else if (position == "center") {

                if (($$('.box_470').length > 0)) {
                    padding = (438 - flashwidth) / 2;
                    margin = "margin: 0 " + padding + "px 0 " + padding + "px";
                    if (desc != null && desc != "") {
                        content = '<div class="flash_container" style="' + margin + '"><div class="flash_video_center" style="width:' + flashwidth + '"><div id="' + divid + '">' + missingPlugin + embedTag + '</div>' + desc + '</div></div>';
                    } else {
                        content = '<div class="flash_container" style="' + margin + '"><div class="flash_video_center" style="width:' + flashwidth + '"><div id="' + divid + '">' + missingPlugin + embedTag + '</div></div></div>';
                    }

                } else if (($$('.text_adjust').length > 0)) {
                    padding = (676 - flashwidth) / 2;
                    margin = "margin: 0 " + padding + "px 0 " + padding + "px";
                    if (desc != null && desc != "") {
                        content = '<div class="flash_container" style="' + margin + '"><div class="flash_video_center" style="width:' + flashwidth + '"><div id="' + divid + '">' + missingPlugin + embedTag + '</div>' + desc + '</div></div>';
                    } else {
                        content = '<div class="flash_container" style="' + margin + '"><div class="flash_video_center" style="width:' + flashwidth + '"><div id="' + divid + '">' + missingPlugin + embedTag + '</div></div></div>';
                    }
                } else if (($$('.box_710').length > 0)) {
                    padding = (678 - flashwidth) / 2;
                    margin = "margin: 0 " + padding + "px 0 " + padding + "px";
                    if (desc != null && desc != "") {
                        content = '<div class="flash_container" style="' + margin + '"><div class="flash_video_center" style="width:' + flashwidth + '"><div id="' + divid + '">' + missingPlugin + embedTag + '</div>' + desc + '</div></div>';
                    } else {
                        content = '<div class="flash_container" style="' + margin + '"><div class="flash_video_center" style="width:' + flashwidth + '"><div id="' + divid + '">' + missingPlugin + embedTag + '</div></div></div>';
                    }
                }

            }
        }

        document.write(content);

    }
}

function embedFlashVideoV2(flashfile, position, captionFile, width, height, description, thumbnail) {

    if (flashfile != null && flashfile != "") {
        var flashwidth;
        var flashheight;
        var embedTag;
        var padding;
        var margin;
        var desc;
        var flashVars;
        dynamicPlayerIndex++;
        var divid = "player" + dynamicPlayerIndex;

        if (width != null && width != "" && width < "228") {
            flashwidth = width;
        } else {
            if (position != "center") {
                flashwidth = "228";
            } else {
                flashwidth = width;
            }
        }

        if (height != null && height != "" && height < "228") {
            flashheight = height;
        } else {
            if (position != "center") {
                flashheight = "228";
            } else {
                flashheight = height;
            }
        }

        if (description != null && description != "" && (Plugin.isInstalled("Flash") == true)) {
            desc = '<p>' + description + '</p>';
        }

        if (thumbnail != null && thumbnail != "") {
            flashVars = "file=" + flashfile + "&showdownload=true&showstop=true&backcolor=0x000000&frontcolor=0xFFFFFF&screencolor=0x000000&lightcolor=0x99CCFF&link=" + flashfile + "&image=" + thumbnail + "&width=" + flashwidth + "&height=" + flashheight;
        } else {
            flashVars = "file=" + flashfile + "&showdownload=true&showstop=true&backcolor=0x000000&frontcolor=0xFFFFFF&screencolor=0x000000&lightcolor=0x99CCFF&link=" + flashfile + "&width=" + flashwidth + "&height=" + flashheight;
        }

        if (captionFile != null && captionFile != '') {
            flashVars = flashVars + '&captions=' + captionFile + '&usecaptions=false';
        }

        embedTag = '<script>var so = new SWFObject("/templateimages/redesign/flash_player/swf/3.17/mediaplayer.swf","flashplayer","' + flashwidth + '","' + flashheight + '","9");' + 'so.addParam("allowfullscreen","true");' + 'so.addParam("allowscriptaccess","always");' + 'so.addParam("wmode", "transparent");' + 'so.useExpressInstall("/templateimages/redesign/flash_player/swf/expressinstall.swf");' + 'so. addParam("flashvars","' + flashVars + '");' + 'so.write("' + divid + '");</script>';

        var content;
        var missingPlugin = '<p>You\'re missing some plugins needed to view the videos, Please enable <a href="http://www.nasa.gov/home/How_to_enable_Javascript.html">Javascript</a> or install Flash Player <a href="http://www.adobe.com/products/flashplayer/">Plug-in</a></p>';
        if (position != null && position != "") {
            if (position == "left") {
                if (desc != null && desc != "") {
                    content = '<div style="width:' + flashwidth + 'px" class="flash_video_left"><div id="' + divid + '">' + missingPlugin + embedTag + '</div>' + desc + '</div>';
                } else {
                    content = '<div style="width:' + flashwidth + 'px" class="flash_video_left"><div id="' + divid + '">' + missingPlugin + embedTag + '</div></div>';
                }

            } else if (position == "right") {
                if (desc != null && desc != "") {
                    content = '<div style="width:' + flashwidth + 'px" class="flash_video_right"><div id="' + divid + '">' + missingPlugin + embedTag + '</div>' + desc + '</div>';
                } else {
                    content = '<div style="width:' + flashwidth + 'px" class="flash_video_right"><div id="' + divid + '">' + missingPlugin + embedTag + '</div></div>';
                }
            } else if (position == "center") {

                if (($$('.box_470').length > 0)) {
                    padding = (438 - flashwidth) / 2;
                    margin = "margin: 0 " + padding + "px 0 " + padding + "px";
                    if (desc != null && desc != "") {
                        content = '<div class="flash_container" style="' + margin + '"><div class="flash_video_center" style="width:' + flashwidth + '"><div id="' + divid + '">' + missingPlugin + embedTag + '</div>' + desc + '</div></div>';
                    } else {
                        content = '<div class="flash_container" style="' + margin + '"><div class="flash_video_center" style="width:' + flashwidth + '"><div id="' + divid + '">' + missingPlugin + embedTag + '</div></div></div>';
                    }

                } else if (($$('.text_adjust').length > 0)) {
                    padding = (676 - flashwidth) / 2;
                    margin = "margin: 0 " + padding + "px 0 " + padding + "px";
                    if (desc != null && desc != "") {
                        content = '<div class="flash_container" style="' + margin + '"><div class="flash_video_center" style="width:' + flashwidth + '"><div id="' + divid + '">' + missingPlugin + embedTag + '</div>' + desc + '</div></div>';
                    } else {
                        content = '<div class="flash_container" style="' + margin + '"><div class="flash_video_center" style="width:' + flashwidth + '"><div id="' + divid + '">' + missingPlugin + embedTag + '</div></div></div>';
                    }
                } else if (($$('.box_710').length > 0)) {
                    padding = (678 - flashwidth) / 2;
                    margin = "margin: 0 " + padding + "px 0 " + padding + "px";
                    if (desc != null && desc != "") {
                        content = '<div class="flash_container" style="' + margin + '"><div class="flash_video_center" style="width:' + flashwidth + '"><div id="' + divid + '">' + missingPlugin + embedTag + '</div>' + desc + '</div></div>';
                    } else {
                        content = '<div class="flash_container" style="' + margin + '"><div class="flash_video_center" style="width:' + flashwidth + '"><div id="' + divid + '">' + missingPlugin + embedTag + '</div></div></div>';
                    }
                }

            }
        }

        document.write(content);
    }
}

/* Javascript for FLV Media Player End */

/****************social media plugins **************/

function addThisSocialPlugins() {

    var s = document.createElement('SCRIPT');
    s1 = document.getElementsByTagName('SCRIPT')[0];
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'http://widgets.digg.com/buttons.js';
    s1.parentNode.insertBefore(s, s1);

    var desc = "";
    desc = getmetacontents('description');

    var addthisToolbox = new Element('div', {
        'className': 'addthis_toolbox addthis_pill_combo'
    });
    var twitterAnchor = new Element('a', {
        className: 'addthis_button_tweet',
        'tw:count': 'horizontal',
        'tw:via': 'NASA',
        'tw:url': theHrefShare,
		'tw:text': bookmarkTitleShare
    });
    var fbAnchor = new Element('a', {
        className: 'addthis_button_facebook_like',
        'fb:like:layout': 'button_count',
		'fb:like:href': theHrefShare
    });

	var galleryMainImg = "";

	if($('gallery_image_area')){
		galleryMainImg = (jQuery('#gallery_image_area').find('img')).attr('src');
		
	}

	if(galleryMainImg!=null && galleryMainImg!="" && typeof(galleryMainImg)!="undefined"){
		thumbnailImg = galleryMainImg;
	}else{
		thumbnailImg = getmetacontents("dc.imagesearch.image_url");
	}
	 
	if((thumbnailImg!=null && thumbnailImg!="" && typeof(thumbnailImg)!="undefined") && !(thumbnailImg.startsWith("http://www.nasa.gov"))){
		thumbnailImg = "http://www.nasa.gov"+thumbnailImg;
	}
	
	

	thumbnailImg=(thumbnailImg!=null && thumbnailImg!="" && typeof(thumbnailImg)!="undefined")?thumbnailImg:"http://www.nasa.gov/templateimages/redesign/modules/header/header_logo.gif";


	var pinItAnchor = new Element('a', {
        className: 'addthis_button_pinterest',
        'pi:pinit:layout': 'horizontal',
        'pi:pinit:url': theHrefShare,
		'pi:pinit:media': thumbnailImg,
        'pi:pinit:description': bookmarkTitleShare
    });

/* var diggAnchor = new Element('a', {
	 className: 'DiggThisButton DiggCompact',
	 href: "http://digg.com/submit?url="+escape(theHrefShare)+"&amp;title="+escape(bookmarkTitleShare)
	 });

	 var diggDesc = new Element('span');
	 diggDesc.update(desc);
	 diggAnchor.appendChild(diggDesc);*/

	var googleplus = new Element('a', {
        className: 'addthis_button_google_plusone',
	'g:plusone:size':"medium"
    });

    addthisToolbox.appendChild(twitterAnchor);
    addthisToolbox.appendChild(fbAnchor);
	addthisToolbox.appendChild(googleplus);
	addthisToolbox.appendChild(pinItAnchor);
    //addthisToolbox.appendChild(diggAnchor);
    var contentDiv = $('socialPlugins');

    contentDiv.appendChild(addthisToolbox);

}

/****************social media plugins **************/

/*******************archive select box - only in club2.js - just for the archive page***************/
function browseArchiveTopics() {
    var selectedTopic = jQuery("#browseTopics_select").val();
    document.location.href = "http://" + document.domain + selectedTopic;
}

function addViewTopicsList(topicName) {


    var topicOptions = [{
        'id': 'Feature_Collection',
        'category': 'news',
        'value': '/news/Feature_Collection_archive_1.html',
        'textDisplay': 'All News and Features'
    }, {
        'id': 'topstories_archive_collection',
        'category': 'home',
        'value': '/home/archive/topstories_archive_collection_archive_1.html',
        'textDisplay': 'Homepage News'
    }, {
        'id': 'aero_features-noblinds',
        'category': 'aeronautics',
        'value': '/topics/aeronautics/aero_features-noblinds_archive_1.html',
        'textDisplay': 'Aeronautics'
    }, {
        'id': 'beyondearth_features-slides',
        'category': 'exploration',
        'value': '/exploration/home/beyondearth_features-slides_archive_1.html',
        'textDisplay': 'Beyond Earth'
    }, {
        'id': 'commercial_features-slides',
        'category': 'commercial',
        'value': '/exploration/commercial/commercial_features-slides_archive_1.html',
        'textDisplay': 'Commercial Space'
    }, {
        'id': 'earth-features-and-releases-agent',
        'category': 'earth',
        'value': '/topics/earth/earth-features-and-releases-agent_archive_1.html',
        'textDisplay': 'Earth'
    }, {
        'id': 'history_features-noblinds',
        'category': 'history',
        'value': '/topics/history/history_features-noblinds_archive_1.html',
        'textDisplay': 'NASA History and People'
    }, {
        'id': 'nasalife_features-noblinds',
        'category': 'nasalife',
        'value': '/topics/nasalife/nasalife_features-noblinds_archive_1.html',
        'textDisplay': 'NASA in Your Life'
    }, {
        'id': 'shuttle_station_features-noblinds',
        'category': 'shuttle_station',
        'value': '/topics/shuttle_station/shuttle_station_features-noblinds_archive_1.html',
        'textDisplay': 'Space Station'
    }, {
        'id': 'solarsystem_features-noblinds',
        'category': 'solarsystem',
        'value': '/topics/solarsystem/solarsystem_features-noblinds_archive_1.html',
        'textDisplay': 'Solar System'
    }, {
        'id': 'technology_features-noblinds',
        'category': 'technology',
        'value': '/topics/technology/technology_features-noblinds_archive_1.html',
        'textDisplay': 'Technology'
    }, {
        'id': 'universe_features-noblinds',
        'category': 'universe',
        'value': '/topics/universe/universe_features-noblinds_archive_1.html',
        'textDisplay': 'Universe'
    }



    ];


    var selectElement = new Element("select", {
        'id': "browseTopics_select"
    });


    topicOptions.each(function (topicItemOption) {
        var topicText = topicItemOption['textDisplay'];
        if (topicName == topicItemOption['id']) {
            var topicOpElem = new Element("option", {
                'id': topicItemOption['id'],
                'value': topicItemOption['value'],
                'selected': 'true'

            });
            topicOpElem.update(topicText);
            selectElement.appendChild(topicOpElem);
        } else {
            var topicOpElem = new Element("option", {
                'id': topicItemOption['id'],
                'value': topicItemOption['value']

            });
            topicOpElem.update(topicText);
            selectElement.appendChild(topicOpElem);
        }

    });



    $('browse_stories').appendChild(selectElement);

    var browseTopicslink = new Element('a', {
        'href': 'javascript:browseArchiveTopics()',
        className: 'browse_topics'
    });
    //var browseTopicslink = new Element('input',{'type':'button', 'onlick':'javascript:browseArchiveTopics()', className : 'browse_topics','value':'View Stories'});
    browseTopicslink.update("View Stories");
    $('browse_stories').appendChild(browseTopicslink);
}

/*************************************************************/