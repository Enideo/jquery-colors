#!/bin/sh

rm ../jquery.colors.bundle.js

echo "/**
 * jQuery Colors
 * @license Copyright 2010 Enideo. Released under dual MIT and GPL licenses.
*/

(function($){
" >> ../jquery.colors.bundle.js

cat jquery.colors.core.js jquery.colors.formats.rgba.js jquery.colors.formats.normalized.RGB.js jquery.colors.formats.hex.js jquery.colors.formats.transparent.js jquery.colors.formats.name.js jquery.colors.mix.js jquery.colors.animate.js jquery.colors.browserSupport.js jquery.colors.models.HSL.js jquery.colors.formats.hsl.js jquery.colors.formats.hsla.js jquery.colors.formats.normalized.HSL.js >> ../jquery.colors.bundle.js



echo "

})(jQuery);" >> ../jquery.colors.bundle.js