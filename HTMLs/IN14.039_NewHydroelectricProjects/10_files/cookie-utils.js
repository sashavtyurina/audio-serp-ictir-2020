
$(document).ready(function() {
  var uname = getCookie('uname');
  if (uname == undefined)
    var uname = null;
  
  /* read and set uname */
  var bchh_hello = document.getElementById("bchh-hello");
  if (bchh_hello != null) {
    var bchh_loginblock_in = document.getElementById("bchh-loginblock-in"); 
    var bchh_loginblock_out = document.getElementById("bchh-loginblock-out"); 
    var bchf_hello = document.getElementById("bchf-hello");
    //var bchf_loginblock_in = document.getElementById("bchf-loginblock-in");
    //var bchf_loginblock_out = document.getElementById("bchf-loginblock-out"); 
    var bchh_welcome = document.getElementById("bchh-welcome"); 

    if (uname == null || uname.length == 0) {
      /* not logged in */
      bchh_hello.removeChild(bchh_loginblock_in);
      bchh_loginblock_out.setAttribute("id", "bchh-loginblock");      
      //bchf_hello.removeChild(bchf_loginblock_in);
      //bchf_loginblock_out.setAttribute("id", "bchf-loginblock");      
      } else { 
      /* logged in */
      bchh_hello.removeChild(bchh_loginblock_out);
      bchh_welcome.firstChild.nodeValue = "Hi " + uname + " ";
      bchh_loginblock_in.setAttribute("id", "bchh-loginblock");
      //bchf_hello.removeChild(bchf_loginblock_out);
      //bchf_loginblock_in.setAttribute("id", "bchf-loginblock");
      }

      bchh_hello.style.display = "block";
      //bchf_hello.style.display = "block";
      
      /* read and set csrname */
      var csrname = getCookie("csrname");
      if (csrname == undefined)
      var csrname = null;

      var csrNameElem = document.getElementById("CSR_name");
      if (csrNameElem != undefined && csrNameElem != null) {
      if (csrname == null || csrname.length == 0) {
        /* csr not logged in */
        var csr_header = document.getElementById("CSR_header");
        var csr_loginblock = document.getElementById("csr-loginblock");
        if ( csr_header != null && csr_header.hasChildNodes() ) csr_header.removeChild(csr_loginblock);
      } else {
        /* csr logged in, update csrname */
        csrNameElem.firstChild.nodeValue = "Hi " + csrname;

        /* disable login, logout and create profile button in bch header and footer */
        $('#bchh-loginblock #btnLogin').prop('disabled', true);
        $('#bchh-loginblock #btnCreate').prop('disabled', true);
        $('#bchh-loginblock #btnLogout').prop('disabled', true);
        //$('#bchf-loginblock #btnLogin').prop('disabled', true);
        //$('#bchf-loginblock #btnLogout').prop('disabled', true);
        /* also disable change password link */
        $('#bchh-my-profile #bchh-change-password a').bind('click', false);
      }

      if ($('#CSR_header.csr').eq(1).length == 0) {
        /* There is only one CSR header */
        $('#CSR_header.csr').show();
      }
	  }
	}  
  /*
   * read and set csrname
  */
  function getCookie(c_name)
  {
    var i,x,y,ARRcookies=document.cookie.split(";");

    for (i=0;i<ARRcookies.length;i++) {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name) {
        return unescape(y); }
    }
  }
});
