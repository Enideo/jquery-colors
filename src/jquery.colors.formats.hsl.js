/**
 * jQuery Colors hsl format
 * Copyright 2010 Enideo. Released under dual MIT and GPL licenses.
*/
$.extend($.colors.formats,{

  'hsl' : {

    validate : function( color, returnTuples ){

      var a=1, result;

      if( color && typeof color == 'string' &&
        (result = /^hsl\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})%\s*,\s*([0-9]{1,3})%\s*\)$/.exec(color)) ){

        while ( a<4 ){
          result[a] = parseInt(result[a])
          if( ( a==1 && result[a] <= 360 ) || ( a>1 && result[a]<=100 ) ){
            a++;
          }else{
            break;
          }
        }

        if( a==4 ){
          if( returnTuples ){
            result.shift();
            return result.slice(0);
          }else{
            return true;
          }
        }

      }
      return false;
    },

    fromModel : {

      'HSL' : function(hsl){
        return 'hsl(' + Math.round(hsl[0]) + ',' + Math.round(hsl[1]) + ',' + Math.round(hsl[2]) + ')';
      }
    },

    toModel : {

      'HSL' : function(hslString){
        var result = $.colors.formats.hsl.validate(hslString,true);
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