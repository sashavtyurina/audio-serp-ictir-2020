var SlideView = Backbone.View.extend({

    template: '',

    /*
     * Animation rules
     * Values of slide out have 1%/1px more offset so that no border
     * is shown on the slide itself.
     * These values also need to be reflected on the CSS.
     */
    animations: {
        'one_image': {

            'slideIn': {
                '.box1': {
                    'left': '0%'
                }
            },

            'slideOut': {
                '.box1': {
                    'left': '-101%'
                }
            }
        },
        'photo_contest': {

            'slideIn': {
                '.box1': {
                    'left': '0%'
                }
            },

            'slideOut': {
                '.box1': {
                    'left': '-101%'
                }
            }
        },
        'two_columns_right_split': {

            'slideIn': {
                '.box1': {
                    'left': '0%'
                },
                '.box2': {
                    'right': '0%'
                },
                '.box3': {
                    'bottom': '0%'
                }
            },

            'slideOut': {
                '.box1': {
                    'left': '-51%'
                },
                '.box2': {
                    'right': '-51%'
                },
                '.box3': {
                    'bottom': '-51%'
                }
            }
        },

        'two_horizontal': {

            'slideIn': {
                '.box1': {
                    'left': '0%'
                },
                '.box2': {
                    'right': '0%'
                }
            },

            'slideOut': {
                '.box1': {
                    'left': '-67%'
                },
                '.box2': {
                    'right': '-35%'
                }
            }
        },

        'three_horizontal': {
            'slideIn': {
                '.box1': {
                    'top': '0%'
                },
                '.box2': {
                    'bottom': '0%'
                },
                '.box3': {
                    'top': '0%'
                }
            },

            'slideOut': {
                '.box1': {
                    'top': '-101%'
                },
                '.box2': {
                    'bottom': '-101%'
                },
                '.box3': {
                    'top': '-101%'
                }
            }
        },

        'one_top_three_bottom': {
            'slideIn': {
                '.box1': {
                    'left': '0%'
                },
                '.box2': {
                    'left': '0%'
                },
                '.box3': {
                    'bottom': '0%'
                },
                '.box4': {
                    'right': '0%'
                }
            },

            'slideOut': {
                '.box1': {
                    'left': '-101%'
                },
                '.box2': {
                    'left': '-35%'
                },
                '.box3': {
                    'bottom': '-51%'
                },
                '.box4': {
                    'right': '-35%'
                }
            }
        }

    },

    initialize: function (options) {
        _.bindAll(this, 'animateIn', 'animateOut', 'animateOutSuccess');

        this.template = this.$el.data('template');
        this.animations = this.animations[this.template];
    },

    animateIn: function () {
        this.$el.removeClass('visuallyhidden');
        _.each(this.animations.slideIn, function (rules, selector) {
            this.$(selector).animate(rules, 800);
        }, this);
    },

    animateOut: function () {
        _.each(this.animations.slideOut, function (rules, selector) {
            this.$(selector).animate(rules, 800, this.animateOutSuccess);
        }, this);
    },

    animateOutSuccess: function () {
        this.$el.addClass('visuallyhidden');
    }
});
