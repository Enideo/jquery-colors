/**
 * jQuery Colors Normalized HSL format
 * Copyright 2010 Enideo. Released under dual MIT and GPL licenses.
*/
$.extend(true, $.colors.formats,{

  'array3Normalized' : {
    toModel : {
      'HSL' : function ( color ){
        return [ color[0]*360, color[1]*100, color[2]*100 ];
      }
    },

    fromModel : {
      'HSL' : function ( color ){
        return [ color[0]/360, color[1]/100, color[2]/100 ];
      }
    }
  },

  'array4Normalized' : {
    toModel : {
      'HSL' : function ( color ){
        return [ Math.round(color[0]*360), color[1]*100, color[2]*100, color[3] ];
      }
    },
    fromModel : {
      'HSL' : function ( color ){
        return [ color[0]/360, color[1]/100, color[2]/100, color[3] ];
      }
    }
  }

});