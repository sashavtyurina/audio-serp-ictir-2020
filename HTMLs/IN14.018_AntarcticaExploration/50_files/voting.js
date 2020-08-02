(function () {

  var shareActivate = function (widgetSelector, url, title) {
    $(widgetSelector).parent('.share').show();
    // create a new widget
    post_widget(widgetSelector, {
      'title': title ? title : 'I voted on',
      'buttons': ['facebook', 'twitter'],
      'url': url
    });
  };

  var VoteWidgetActivate = function (i, widget) {
    var $widget = $(widget);
    var shareWidgetSelector = '#share-' + $widget.attr('id');
    var voteId = $.cookie('contest_vote_' + $widget.data('contest-id'));
    var voteFrequency = $widget.data('contest-frequency');
    var shareTitle;
    var shareURL = $.cookie('contest_share_' + $widget.attr('id'));
    var expires = 1;
    if (voteFrequency === 1) {
      expires = 365;
    }
    var $voted = $widget.find('.voted');
    var $voteText = $voted.find('.description > .text');
    var $form = $widget.find('form');

    if ($widget.data('title') && $widget.data('contest-title')) {
      shareTitle = 'I voted for ' + $widget.data('title') + ' | ' + $widget.data('contest-title');
    } else if ($widget.data('contest-title')) {
      shareTitle = 'I voted on ' + $widget.data('contest-title');
    } else {
      shareTitle = 'I voted on a Smithsonian contest';
    }
    // hide both the form and vote areas
    $form.hide();
    $voted.hide();

    if (voteId) {
      // has already voted
      if (!$voted.data('only-winner')) {
        $voted.show();
      }
      if (parseInt(voteId) === $widget.data('id')) {
        $voted.show();
        shareActivate(shareWidgetSelector, shareURL, shareTitle);
        shareTitle = $.cookie('voted_on_title_' + $widget.attr('id'));
        if (shareTitle) {
          $voteText.html(shareTitle);
        }
      }
    } else {
      $form.show();
      $form.on('submit', function (evt) {
        evt.preventDefault();

        // email validation
        if ($widget.data('require-email') === "True") {
          var emailAddr = $(evt.currentTarget).find('input[name=email]').val();

          if (!(emailAddr && /(.+)@(.+){2,}\.(.+){2,}/.test(emailAddr))) {
            alert('A valid email address is required for this contest.');
            return false;
          }
        }

        $.post(evt.target.action, $form.serialize(), function (data) {
          //
          // setup vote widget
          //
          var $voteShare = $voted.find('.description .share');
          var voteTitle;
          shareURL = window.location.protocol + '//' + window.location.host + data.item_url;

          // hide the form
          $form.hide();

          // set the text depending on the response type
          if (data.status === 'success' || data.status === 'already_voted') {
            if (data.status === 'success') {
              if (data.action === 'text') {
                if ($voted.data('show-percentage')) {
                  voteTitle = 'Thank you for your vote. This item has ' + Math.round(data.percentage) + '% of the total votes.';
                } else {
                  voteTitle = 'Thank you for your vote.';
                }
              } else if (data.action === "URL" && data.actionURL !== undefined) {
                window.location = data.actionURL;
                return
              } else {
                alert("Something went wrong...");
              }
            } else {
              voteTitle = 'You already voted.';
            }
            // vote once per day
            if (voteFrequency === 2) {
              voteTitle += " Check back in 24 hours to vote again!";
            }
            $voteText.html(voteTitle);
            $voted.show();

            if (voteFrequency !== 3) {
              // anything other than unlimited voting
              // stores a cookie with the vote title
              // and resets the rest of the contest options

              // store vote title
              $.cookie('voted_on_title_' + $(widget).attr('id'), voteTitle, {
                'expires': expires,
                "path": "/"
              });
              // store vote id for contest
              $.cookie('contest_vote_' + $(widget).data('contest-id'), $widget.data('id'), {
                'expires': expires,
                "path": "/"
              });
              // store vote share url
              $.cookie('contest_share_' + $(widget).attr('id'), shareURL, {
                'expires': expires,
                "path": "/"
              });
              // reset all the other options
              $('.voting[data-contest-id=' + $(widget).data('contest-id') + ']').each(VoteWidgetActivate);
            }
          } else {
            alert('Something went wrong.')
            $form.show();
          }
        });
        return false;
      });
    }
  };

  $('.voting').each(VoteWidgetActivate);

  $(document).on('essay:change', function () {
    $('.voting').each(VoteWidgetActivate);
  });
})();
