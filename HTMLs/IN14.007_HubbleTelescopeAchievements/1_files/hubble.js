

getBanner();

function getBanner(){

var aTag="/mission_pages/hubble/";
var imageSrc="/images/content/441100main_hubble20th.jpg";
var imageAlt="Collage of Hubble and a spiral galaxy";
var description="";
var desc=escape(description);
var headerVal="Hubble Space Telescope";
var header=escape(headerVal);

var div710	                                       =	document.createElement('div');
    div710.className	                       =	"box_710_cap";
var divtopcap		       =	document.createElement('div');
    divtopcap.className	       =	"top_cap_white";
var divcontainer	                       =	document.createElement('div');
    divcontainer.className                 =	"box_710 box_710_white banner_image"
var divcontaineranchor	       =	document.createElement('a');
      divcontaineranchor.href               =       aTag;
var backgroundDiv                           =        document.createElement('div');
      backgroundDiv.id                       =        "banner";
var h4Tag                                        =       document.createElement('h4');
     h4Tag.innerHTML                         =       unescape(header);
var pTag                                          =       document.createElement('p');
     pTag.innerHTML                          =        unescape(desc);
var divbottomcap	                       =	document.createElement('div');
    divbottomcap.className                =	"bottom_cap_white";

var wideright	=	document.getElementById('center_banner');

                                 backgroundDiv.appendChild(h4Tag);
                                backgroundDiv.appendChild(pTag);
                                if(aTag!=''){
		       divcontaineranchor.appendChild(backgroundDiv);
		       divcontainer.appendChild(divcontaineranchor);
		}
		else{
		      divcontainer.appendChild(backgroundDiv);
		}
                                div710.appendChild(divtopcap);
		div710.appendChild(divcontainer);
		div710.appendChild(divbottomcap);
		
                                
		wideright.appendChild(div710);
                               document.getElementById('banner').style.backgroundImage="url("+imageSrc+")";


}

