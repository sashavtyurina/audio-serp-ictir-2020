// Lightbox2.module integration
$(document).ready(function(){
  // Rewrite rel attributes
  $("a.ifa_lightbox").each(function(){
    new_rel='lightbox[ifa]['+$(this).attr('title');
    if (typeof(Drupal.settings.ifa_lightbox2_original) != 'undefined'){
      new_rel+=Drupal.settings.ifa_lightbox2_original.replace('!fid',$(this).attr('rel'));
    }
    new_rel+=']';
    $(this).attr('rel', new_rel);
  });
  // Initialize (or re-initialize) Lightbox2
  try{
     Lightbox.initList();
  }catch (e){;}
});