/**
 * jQuery Colors transparent format
 * Copyright 2010 Enideo. Released under dual MIT and GPL licenses.
*/

$.extend($.colors.formats,{

  'transparent' : {

    validate : function( color ){

      return ( color && typeof color == 'string' && /^transparent$/i.test(color) );

    },

    fromModel : {

      'RGB' : function(rgb){
        if( rgb[3]==0 ) {
          return 'transparent';
        }else{
          throw('Color is not transparent: ' + rgb.toString() );
        }
      }
    },

    toModel : {

      'RGB' : function( ){
        return [255,255,255,0];
      }

    }
  }

});