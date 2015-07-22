/**
 * jquery-rotate v0.0.2
 *  Very lightweight jquery rotate plugin using CSS 3 Transformation
 *  https://github.com/enknamel/jquery-rotate
 */
(function ($) {

    $.fn.extend({
        rotate: function (deg) {
            //this will literally rotate including any previous rotation from this plugin
            var $this = $(this);
            var rotation = (($this.data('jquery-rotation') || 0) + deg) % 360;
            $this.setRotation(rotation)
        },
        setRotation: function (deg) {
            // cache dom element
            var $this = $(this);

            // make deg random if not set
            if (deg === null) {
                deg = Math.floor(Math.random() * 359);
            }

            $this.data('jquery-rotation', deg);

            // rotate dom element
            $this.css({
                '-webkit-transform': 'rotate(' + deg + 'deg)',
                '-moz-transform': 'rotate(' + deg + 'deg)',
                '-ms-transform': 'rotate(' + deg + 'deg)',
                '-o-transform': 'rotate(' + deg + 'deg)',
                'transform': 'rotate(' + deg + 'deg)'
            });

            // make chainable
            return $this;
        }
    });

})(jQuery);