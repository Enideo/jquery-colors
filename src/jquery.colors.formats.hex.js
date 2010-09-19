/**
 * jQuery Colors Hex String
 * Copyright 2010 Enideo. Released under dual MIT and GPL licenses.
*/

var hexStringObject = {
  'hex' : {

    /// Based on http://github.com/jquery/jquery-color

    validate : function( color, returnTuples ){

      var result;

      if( color && typeof color == 'string' ){

        if ( result = /^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/.exec(color) ){

          if( returnTuples ){
            return [
              parseInt(result[1],16),
              parseInt(result[2],16),
              parseInt(result[3],16)
            ];
          }else{
            return true;
          }

        }else if( result = /^#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/.exec(color) ){

          if( returnTuples ){
            return [
              parseInt(result[1]+result[1],16),
              parseInt(result[2]+result[2],16),
              parseInt(result[3]+result[3],16)
            ];
          }else{
            return true;
          }

        }

      }
      return false;
    },

    /// From http://acko.net/dev/farbtastic

    fromModel : {

      'RGB' : function(rgb){
        return '#' +
          (rgb[0] < 16 ? '0' : '') + rgb[0].toString(16) +
          (rgb[1] < 16 ? '0' : '') + rgb[1].toString(16) +
          (rgb[2] < 16 ? '0' : '') + rgb[2].toString(16);
      }
    },

    toModel : {

      'RGB' : function(hexString){
        var result = hexStringObject.hex.validate(hexString,true);
        if(result===false){
          return null;
        }else{
          return result;
        }
      }

    },
    model : 'RGB'
  }
};

$.extend($.colors.formats,hexStringObject);