var OffCanvasToggle = function () {
  this.initialize.apply(this, arguments);
};

_.extend(OffCanvasToggle.prototype, {

  initialize: function (triggers) {
    var self = this;

    $(triggers).click(function (e) {
      e.preventDefault();
      self.toggleClasses(this);
      self.toggleText(triggers);
    });
    return triggers;
  },

  toggleClasses: function (el) {
    var body = $('body');
    var dir = $(el).attr('href');
    if (dir === '#left') {
      body.toggleClass('show-left');
    }
    return body.attr('class');
  },

  toggleText: function (triggers) {
    var left = $(triggers).filter('[href="#left"]');

    left.toggleClass('active');
  }
});