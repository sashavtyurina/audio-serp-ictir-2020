
jQuery(document).ready(function ()
{
var collectBookmarkSelectorClass = '.amnh-collect-button';
if( jQuery( collectBookmarkSelectorClass ).length )
{
var loggedIn = document.cookie.indexOf('is_logged_in') !== -1;
var thisCollectBookmarkButton = jQuery( collectBookmarkSelectorClass );
thisCollectBookmarkButton.attr( 'data-is-logged-in', loggedIn ? "1" : "0" );
if( loggedIn )
{
$.ajax('/ezjscore/call/amnhwidget::collectState', {
type: "POST",
dataType: "json",
cache: false,
data: {
nodeId: thisCollectBookmarkButton.data( 'node-id' )
}
}).done(function (json) {
jsonValues = JSON.parse(json.content);
if( jsonValues.collected === true )
{
thisCollectBookmarkButton.addClass('selected');
thisCollectBookmarkButton.find('.title').text('Collected');
}
thisCollectBookmarkButton.removeAttr('disabled');
});
}
else
{
thisCollectBookmarkButton.removeAttr('disabled');
var mMaxWidth = 800;
var mMaxHeight = 600;
var mWidth = ( jQuery(window).width() < mMaxWidth )? (jQuery(window).width() - 50) : mMaxWidth;
var mHeight = ( jQuery(window).width() < mMaxHeight )? (jQuery(window).width() - 50) : mMaxHeight;
thisCollectBookmarkButton.modaal(
{
type: 'iframe',
overlay_opacity: 0.75,
custom_class: 'amnh-modaal',
width: mWidth,
height: mHeight,
accessible_title: 'Login to your profile modal'
});
}
thisCollectBookmarkButton.click( function( event )
{
event.preventDefault();
var isLoggedIn = thisCollectBookmarkButton.attr('data-is-logged-in');
var nodeID = thisCollectBookmarkButton.attr('data-node-id');
var uri = thisCollectBookmarkButton.attr('data-uri');
var collected = thisCollectBookmarkButton.hasClass('selected');
if( isLoggedIn != 0 ) {
if( collected ) {
var url = '/ezjscore/call/amnhbookmarksfetch::deleteBookmark';
$.ajax({
type: "POST",
dataType: 'json',
url: url,
cache: false,
data: {
contentobjectId: nodeID
}
})
.done(function (json) {
var content = JSON.parse(json.content);
if( !content.flag ) {
alert(content.message);
}
else {
thisCollectBookmarkButton.removeClass('selected');
thisCollectBookmarkButton.find('.title').text('Collect');
}
});
}
else {
var url = '/ezjscore/call/amnhbookmarksfetch::createBookmark';
$.ajax({
type: "POST",
dataType: 'json',
url: url,
cache: false,
data: {
contentobjectId: nodeID,
uri: uri
}
})
.done(function (json) {
var content = JSON.parse(json.content);
if( !content.flag ) {
alert(content.message);
}
else {
thisCollectBookmarkButton.addClass('selected');
thisCollectBookmarkButton.find('.title').text('Collected');
}
});
}
}
});
}
});
function handleTwoUpCtaAnimation(index, elem) {
var $elem = $(elem);
var $content = $elem.find('.amnh-two-up-cta__content');
var $labelBackground = $elem.find('.amnh-label .background');
var $overlay = $elem.find('.border-overlay');
var elemHasHovered = false;
var hoverTL = new TimelineMax({
paused: true,
onStart: toggleHoverState,
onReverseComplete: toggleHoverState
});
hoverTL
.set($overlay, {autoAlpha: 0, opacity: 0})
.add('trigger')
.set($overlay, {autoAlpha: 1, opacity: 1})
.from($overlay, .2, {scale: 1.04, force3D: false, ease: Expo.EaseOut}, 'trigger')
.to($labelBackground, .2, {backgroundColor: 'white', ease: Expo.EaseOut}, 'trigger')
.to($content, .2, {backgroundColor: 'rgba(0,0,0,.6)', ease: Expo.EaseOut}, 'trigger');
function toggleHoverState() {
elemHasHovered = !elemHasHovered;
}
function onMouseenter() {
if (!elemHasHovered) {
hoverTL.timeScale(1).play(0);
}
}
function onMouseleave() {
if (elemHasHovered) {
hoverTL.timeScale(1.3).reverse();
}
}
$elem
.mouseenter(onMouseenter)
.mouseleave(onMouseleave)
.focusin(onMouseenter)
.focusout(onMouseleave);
}
$(document).ready(function () {
var $window = $(window);
var $document = $(document);
var $titlebar = $('.amnh-title-bar');
var $banner = $('.amnh-banner');
function handleTitlebar() {
var $titlebarShare = $('.amnh-title-bar__share');
var $titlebarShareButton = $titlebar.find('.share-button');
var $titlebarWrapper = $('.amnh-title-bar__wrapper');
var $titlebarShareLinks = $titlebar.find('.share-links__wrapper');
var $titlebarTitle = $('.amnh-title-bar__title');
var titlebarIsShown = false;
var shareLinksOpen = false;
var shareWidth;
var windowHeight;
var keyCodes = {
ESC: 27
}
TweenMax.set($titlebar, {zIndex: 30});
TweenMax.set($titlebarWrapper, {yPercent: -100});
var showTitlebarTL = new TimelineMax({
paused: true,
onReverseComplete: closeShareLinks
});
showTitlebarTL
.set($titlebar, {opacity: 1, autoAlpha: 1})
.to($titlebarWrapper, .25, {z: 0, yPercent: 0, ease: Expo.EaseOut});
function calculateShareWidth() {
shareWidth = $titlebarShareLinks.width();
shareWidth += parseInt($titlebarShareLinks.css('padding-left'));
shareWidth += parseInt($titlebarShareLinks.css('padding-right'));
return -shareWidth;
}
function onWindowResize() {
if (Modernizr.mq('(max-width: 1024px)')) {
hideTitlebar();
} else {
var newWindowHeight = $window.height();
if (newWindowHeight != windowHeight) {
windowHeight = newWindowHeight;
}
}
}
function onWindowScroll() {
if (
!showTitlebarTL.isActive()
&& Modernizr.mq('(min-width: 1025px)')
) {
animateTitlebar();
}
}
function animateTitlebar() {
if ($window.scrollTop() >= windowHeight - 100) {
showTitlebar();
} else {
hideTitlebar();
}
}
function showTitlebar() {
if (!titlebarIsShown && !showTitlebarTL.isActive()) {
titlebarIsShown = true;
TweenMax.set($titlebar,{top: getBannerHeight()});
showTitlebarTL.timeScale(1).play(0);
}
}
function hideTitlebar() {
if (titlebarIsShown && !showTitlebarTL.isActive()) {
titlebarIsShown = false;
showTitlebarTL.timeScale(1.3).reverse();
}
}
function getBannerHeight() {
var height = 0;
if ( $banner.length ){
height = $banner.outerHeight();
}
return height;
}
var shareLinksTL = new TimelineMax({
paused: true,
onStart: function() {
$titlebarShareButton.addClass('active');
},
onReverseComplete: function () {
$titlebarShareButton.removeClass('active');
}
});
shareLinksTL
.add('trigger')
.to($titlebarWrapper, .2, {x: calculateShareWidth, ease: Expo.EaseOut}, 'trigger');
function toggleShareLinks() {
if (!shareLinksOpen) {
openShareLinks();
} else {
closeShareLinks();
}
}
function openShareLinks() {
if (!shareLinksOpen) {
shareLinksOpen = true;
shareLinksTL.play(0);
}
}
function closeShareLinks() {
if (shareLinksOpen) {
shareLinksOpen = false;
shareLinksTL.reverse();
}
}
function onDocumentMouseDown(e) {
if (
!$titlebarShare.is(e.target)
&& $titlebarShare.has(e.target).length === 0
&& shareLinksOpen
) {
closeShareLinks();
}
}
function onDocumentKeyUp(e) {
if (shareLinksOpen && e.keyCode == keyCodes.ESC) {
closeShareLinks();
}
}
$window.on('bind-scroll', function () {
$window.bind('scroll', onWindowScroll);
});
function scrollToTop() {
TweenMax.to($window, .3, {scrollTo: 0});
}
$document.on('mousedown', onDocumentMouseDown);
$titlebarShareButton.on('click', toggleShareLinks);
$document.on('keyup', onDocumentKeyUp);
$window.on('scroll', onWindowScroll);
$window.on('resize', onWindowResize).resize();
$titlebarTitle.on('click', scrollToTop);
}
if ($titlebar.length) {
handleTitlebar();
}
});
