/**
 * jQuery Colors Normalized RGB format
 * Copyright 2010 Enideo. Released under dual MIT and GPL licenses.
*/

$.extend($.colors.formats,{

  'array3Normalized' : {

    validate : function( color , maxLength ){

      var a=0, maxLength = maxLength || 3;

      if( $.isArray(color) && color.length==maxLength ){
        while ( a<maxLength ){
          if( typeof color[a] == 'number' && color[a]<=1 && color[a]>=0 ){
            a++;
          }else{
            break;
          }
        }
        if( a==maxLength ){
          return true;
        }
      }

      return false;

    },


    toModel : {

      'RGB' : function ( color ){

        return [ color[0]*255, color[1]*255, color[2]*255 ];

      }

    },

    fromModel : {

      'RGB' : function ( color ){

        return [ color[0]/255, color[1]/255, color[2]/255 ];

      }

    }

  },

  'array4Normalized' : {

    validate : function( color ){

      return Color.formats.array3Normalized.validate( color, 4 );

    },

    toModel : {

      'RGB' : function ( color ){

        return [ color[0]*255, color[1]*255, color[2]*255, color[3] ];

      }

    },

    fromModel : {

      'RGB' : function ( color ){

        var a, color = color.slice(0);

        for( a in color){
          if ( a!=3 && color[a] ){
            color[a]+=1;
            color[a]/=256;
          }
        }
        return [ color[0], color[1], color[2], color[3] ];


      }

    }

  }

});