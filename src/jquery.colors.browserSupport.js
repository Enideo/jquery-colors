/**
 * jQuery Colors Browser Support
 * Copyright 2010 Enideo. Released under dual MIT and GPL licenses.
*/

  $.extend($.support,{
    rgba : /rgba/.test( $('<div/>').attr('style','background:#f00;background:rgba(0,0,0,0.5);').css('background-color') ),
    hsl : /hsl/.test( $('<div/>').attr('style','background:#f00;background:hsl(0,0,0);').css('background-color') ),
    hsla : /hsla/.test( $('<div/>').attr('style','background:#f00;background:hsla(0,0,0,0.5);').css('background-color') )
  });

  if( 'rgba' in $.support && $.support.rgba ){
    $.colors.defaultString = 'rgba';
  }