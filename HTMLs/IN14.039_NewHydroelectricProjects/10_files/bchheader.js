var mouseActive = false;

//jQuery.noConflict(true)(function(a) {
$(document).ready( function(a) {
	var b = false;
	a("header#bchheader").bind("touchstart", function() {
		b = true
	});
	a("ul.bchh-utilmenu > li").hoverIntent(function() {
		if(!mouseActive) return false;
		a("ul.bchh-utilmenu > li").removeClass("on");
		a(this).addClass("on")
	}, function() {
		a("ul.bchh-utilmenu > li").removeClass("on")
	});
	a("ul.bchh-utilmenu > li.bchh-sub > a").click(function(c) {
		if (b) {
			if (a(this).hasClass("touched")) {
			} else {
				c.preventDefault();
				a(this).parent().mouseenter();
				a("ul.bchh-utilmenu > li.bchh-sub > a").removeClass("touched");
				a(this).addClass("touched")
			}
		}
	});
	a("ul#bchh-nav > li").hoverIntent(function() {
		if(!mouseActive) return false;
		a("ul#bchh-nav > li").removeClass("on");
		a(this).addClass("on")
	}, function() {
		a("ul#bchh-nav > li").removeClass("on")
	});

	var hIConfig = {
		over: function() {
			if(!mouseActive) return false;
			if (!a(this).hasClass("current")) {
				a("ul.bchh-sub_nav > li.current").addClass("alt");
			}
			else a("ul.bchh-sub_nav > li.current").removeClass("alt");
			a("ul.bchh-sub_nav > li").removeClass("on");
			a(this).addClass("on");
			a(this).find(".bchh-menu div.bchh-menu-container").masonry({
				itemSelector : "ul",
				columnWidth : 175
			})
		},
		out: function() {
			a("ul.bchh-sub_nav > li").removeClass("on");
			var to = setTimeout(function(){
				if( !a("ul.bchh-sub_nav > li.on").length ) a("ul.bchh-sub_nav > li.current").removeClass("alt");
			}, 350 );

		}
	};

	a("ul.bchh-sub_nav > li").hoverIntent( hIConfig );

	a("ul.bchh-sub_nav > li.bchh-sub > a").click(function(c) {
		if (b) {
			if (a(this).hasClass("touched")) {
			} else {
				c.preventDefault();
				a(this).parent().mouseenter();
				a("ul.bchh-sub_nav > li.bchh-sub > a").removeClass("touched");
				a(this).addClass("touched")
			}
		}
	});

	a("div.bchh-menu div.bchh-menu-close a").each(function(b) {
		a(this).click(function(b) {
			a("ul.bchh-sub_nav > li.bchh-sub > a").removeClass("touched");
			a("ul.bchh-sub_nav > li").mouseleave();
			b.preventDefault()
		})
	});

    // down arrow on the tab's anchor is conditional on the presence of div.bchh-menu
    a("#bchh-sub_nav li.bchh-sub > div.bchh-menu").prev("a")
    .append('<span class="bchh-icon bchh-i-arrow"></span>')
    .addClass('hasChildren');
    
	a("#bchh-searchblock input#search").placeholder()
	a(document).ready(function() {
		a('body').mousemove( function(){ mouseActive = true; } );
	});
	
    // Add some logic to clear the requestSelectors cookie
	// Logout Button Click (button#btnLogout)
    // Account Picker Selection (.user_account_tools a)
    // CSR LogOut (button#csr_login_btn)
    // Account Service Shortcut Links (.acctsrv_shortcuts li a)
    $('button#btnLogout, .user_account_tools li, .account_list a, button#csr_login_btn, .acctsrv_shortcuts li a, button#csr_search_btn, a[href$="accountsOverview.html"]').on('click', function(){
		document.cookie = "requestSelectors=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.bchydro.com";
    });

	// If the user has landed on the accountsOverview page, remove cookie.
    if ( window.location.pathname.indexOf("accountsOverview.html") > -1 ) {
		document.cookie = "requestSelectors=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.bchydro.com";
    }

    // CSR Account Picker Selection (form#csrSearchForm, form#CSR_header_search)
    $('form#csrSearchForm, form#CSR_header_search').on('submit', function(){
		document.cookie = "requestSelectors=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.bchydro.com";
    });


    // Iterate over each select element and wrap it so we can added custom styles to it.
    $('form#login-form select, form#forgot-password-form select, form#sign-up-form select').each(function () {
    
        // Cache the number of options
        var $this = $(this),
        numberOfOptions = $(this).children('option').length;

        // Wrap the select element in a div
        $this.wrap('<div class="select-style"></div>');

    });

	
})
