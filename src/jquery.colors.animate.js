/**
 * jQuery Colors Animate
 * Copyright 2010 Enideo. Released under dual MIT and GPL licenses.
*/

/// Based on http://github.com/jquery/jquery-color

/// We override the animation for all of these color styles
  $.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
    $.fx.step[attr] = function(fx){
      var prefferedModel;

      if ( !fx.colorInit ) {
        fx.colorInit = true;

        fx.start = $.colors( $(fx.elem).visibleColor( attr ) );

        if( /^(|transparent)$/i.test( $.curCSS(fx.elem, attr) ) ){

          /// in case rgba is supported, ensure a gradual change to transparent
          fx.start.model('RGB').set('alpha',0);
          /// RGB provides best gradual fade if alpha is not supported by the browser
          prefferedModel = 'RGB';
        }


        if( fx.end=='transparent' ){
          fx.middle = $.colors( $(fx.elem).parent().visibleColor( attr ) );
          /// in case rgba is supported, ensure a gradual change to transparent
          fx.middle.model('RGB').set('alpha',0);
          /// RGB provides best gradual fade if alpha is not supported by the browser
          prefferedModel = 'RGB';
        }else if( fx.end=='' ){
          $(fx.elem).css(attr,'');
          fx.middle = $.colors( $(fx.elem).css(attr) );
        }else{
          fx.middle = $.colors(fx.end);
        }

        if(fx.options.mixModel!==undefined){
          prefferedModel = fx.options.mixModel;
        }
        if(prefferedModel!==undefined){
          fx.start.model(prefferedModel);
          fx.middle.model(prefferedModel);
        }

      }

      if(fx.pos!=1){
        fx.elem.style[attr] = fx.start.mixWith( fx.middle, Math.max(Math.min(1-fx.pos,1),0) ).toString();
      }else{
        fx.elem.style[attr] = fx.end;
      }

    }
  });


  jQuery.fn.visibleColor = function(attr) {
    var color, elem = this.get(0);

    do {
      color = $.curCSS(elem, attr);

      /// Keep going until we find an element that has color, or we hit the body
      if ( color != '' && color != 'transparent' ) break;

      if( $.nodeName(elem, "body") ){
        color = 'transparent';
        break;
      }

      attr = "backgroundColor";
    } while ( elem = elem.parentNode );

    return color;
  };