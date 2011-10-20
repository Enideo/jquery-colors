/**
 * jQuery Colors hsla format
 * Copyright 2010 Enideo. Released under dual MIT and GPL licenses.
*/
$.extend($.colors.formats,{

  'hsla' : {

    validate : function( color, returnTuples ){

      var a=1, result;

      if( color &&  typeof color == 'string' &&
        (result = /^hsla\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})%\s*,\s*([0-9]{1,3})%\s*,\s*(0|1|0\.[0-9]+)\s*\)$/.exec(color)) ){

        while ( a<4 ){
          result[a] = parseInt(result[a])
          if( ( a==1 && result[a] <= 360 ) || ( a>1 && result[a]<=100 ) ){
            a++;
          }else{
            break;
          }
        }

        if( a==4 && result[4]>=0 && result[4]<=1 ){
          result[a] = parseFloat(result[a])
          a++;
        }

        if( a==5 ){
          if( returnTuples ){
            return result.slice(1);
          }else{
            return true;
          }
        }

      }
      return false;
    },

    fromModel : {

      'HSL' : function(hsl){
        return 'hsla(' + Math.round(hsl[0]) + ',' + Math.round(hsl[1]) + ',' + Math.round(hsl[2]) + ',' + hsl[3] + ')';
      }
    },

    toModel : {

      'HSL' : function(hslaString){
        var result = $.colors.formats.hsla.validate(hslaString,true);
        if(result===false){
          return null;
        }else{
          return result;
        }
      }
    },
    model : 'HSL'
  }

});