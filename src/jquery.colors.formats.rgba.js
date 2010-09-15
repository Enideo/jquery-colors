/**
 * jQuery Colors rgba format
 * Copyright 2010 Enideo. Released under dual MIT and GPL licenses.
*/
$.extend($.colors.formats,{

  'rgba' : {

    validate : function( color, returnTuples ){

      var a=1, result;

      if( color && typeof color == 'string' &&
        (result = /^rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*(0|1|0\.[0-9]+)\s*\)$/.exec(color)) ){

        while ( a<4 ){
          result[a] = parseInt(result[a])
          if( result[a] < 256 ){
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

      'RGB' : function(rgb){
        return 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + rgb[3] + ')';
      }
    },

    toModel : {

      'RGB' : function(rgbaString){
        var result = Color.formats.rgba.validate(rgbaString,true);
        if(result===false){
          return null;
        }else{
          return result;
        }
      }
    },
    model : 'RGB'
  }

});