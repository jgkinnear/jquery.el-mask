(function ($) {

	"use strict";

	var Mask = function (element, options) {
		this.options = options;
		this.$el = $(element);
	};

	Mask.prototype = {

		toggle: function () {
			this[!this.isShown ? 'show' : 'hide']();
		},

		show: function () {
			if (!this.isShown) {
				this._mask();
			}
		},

		hide: function () {
			this._unmask();
		},

		_mask: function () {

			var fadeIn, mask, me = this;

			mask = '<div class="'+this.options.maskClass+'">'+this.options.text+'</div>';

			this.$el.addClass(this.options.containerClass);

			if (fadeIn = this.options.fadeIn) {
				$(mask).hide().prependTo(this.$el).fadeIn();
			} else {
				this.$el.prepend(mask);
			}
			this.isShown = true;

		},

		_unmask: function () {

			var class_string, fadeOut, me = this;

			var class_array = this.options.maskClass.split(' ');

			class_string = '.'+class_array.join('.');

			if (fadeOut = this.options.fadeOut) {

				this.$el.find(class_string).fadeOut('slow', function () {
					me.$el.find(class_string).remove();
					me.$el.removeClass(me.options.containerClass);
				});
			} else {
				this.$el.find(class_string).remove();
				this.$el.removeClass(this.options.containerClass);
			}

			this.isShown = false;
		}
	};

	$.fn.mask = function ( option ) {
		return this.each(function () {

			var $this = $(this),
				data = $this.data('mask'),
				options = $.extend({}, $.fn.mask.defaults, $this.data(), typeof(option) === 'object' ? option : {});

			if (!data) {
				$this.data('mask', (data = new Mask(this, options)));
			}

			if (typeof(option) === 'string') {
				data[option]();
			} else if (options.show) {
				data.show();
			} else {
				data.hide();
			}

		});
	};

	$.fn.mask.defaults = {
		containerClass: 'loading',
		maskClass: 'mask',
		constructor: Mask,
		show: true,
		text: '<div class="spinner"><i class="spinner-icon"></i></div>',
		fadeOutTime: -1,
		fadeOut: false,
		fadeIn: false
	};

	$.fn.mask.Constructor = Mask;

})(jQuery);