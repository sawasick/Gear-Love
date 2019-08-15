/*
 *  jquery-scrolling-background-color - v1.0.0
 *
 *  Made by Minh Nhat THAI
 *  Under MIT License
 */
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;( function( $, window, document, undefined ) {

	"use strict";

		// Create the defaults once
		var pluginName = "scrollingBackgroundColor",
			defaults = {
				from: false,
				to: '#000000',
				watch: false,
				target: false
			};

		// The actual plugin constructor
		function scrollingBackgroundColor ( element, options ) {
			this.element = element;


			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend( scrollingBackgroundColor.prototype, {
			init: function() {
				var $watch = (this.settings.watch) ? $(this.settings.watch) : $(this.element);
				var $target = (this.settings.target) ? $(this.settings.target) : $(this.element);

        var max_height = $watch[0].scrollHeight;
        if($watch.is('body'))
        {
          $watch = $(window);
        }

        if(max_height <= $watch.height()) return;

			 var scrollpos = 0;

			 var bgcolor  = $target.css('background-color').replace(/ /g,'');
			 if(bgcolor == "rgba(0,0,0,0)")
			 	bgcolor = '#FFFFFF';


			 var before_color = new $.Color( bgcolor );
			 if(this.settings.from){
			 	before_color = new $.Color( this.settings.from );
			 }
			 var end_color = new $.Color( this.settings.to ); ; //what color we want to use in the end


			 $watch.scroll(function() {
				 scrollpos = $(this).scrollTop();



						 // color calcul
				 var percentScrolled = scrollpos / ( max_height - $(this).height() );
         
				 var newRed = before_color.red() + ( ( end_color.red() - before_color.red() ) * percentScrolled );
				 var newGreen = before_color.green() + ( ( end_color.green() - before_color.green() ) * percentScrolled );
				 var newBlue = before_color.blue() + ( ( end_color.blue() - before_color.blue() ) * percentScrolled );
				 var newColor = new $.Color( newRed, newGreen, newBlue );



				$target.animate({ backgroundColor: newColor }, 0);



		  }).scroll();
		 }
		} );

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function( options ) {
			return this.each( function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" +
						pluginName, new scrollingBackgroundColor( this, options ) );
				}
			} );
		};

} )( jQuery, window, document );
