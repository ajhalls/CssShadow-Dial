var css = {
    colors: {
        'rgb(0,0,0)': "black",
        'rgb(255,255,255)': "white"
    }
}
var dropStyle = {
    dropShadow :{
        isActive: true,
        color: [114,78,118],
        opacity: 75,
        angle: 45,
        hasGlobalLight: false,
        distance: 5,
        blur: 5,
        size: 0
    },
    innerShadow: {
        isActive: false,
        color: [255,255,255],
        opacity: 100,
        angle: 90,
        hasGlobalLight: false,
        distance: 1,
        blur: 0,
        size: 0,
        isInset: true
    }
};
function rgbToHex([R,G,B]) {return toHex(R)+toHex(G)+toHex(B)}
function toHex(n) {
 n = parseInt(n,10);
 if (isNaN(n)) return "00";
 n = Math.max(0,Math.min(n,255));
 return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
}  
function toColor(rgb){
        var mode = rgb.length === 3 ? 'rgb' : 'rgba',
            string = mode+'('+rgb.join(',')+')';   
            return "#"+rgbToHex(rgb);
    } 

 function boxShadow(style){
    var cssString = "", radiants, dropColor, tempSize, tempX, tempY, tempBlur,
        shadows = ["dropShadow", "innerShadow"];
    
    for(var i=0; i<shadows.length; i++){
        var model = style[shadows[i]];
        if(model.isActive){
            if(cssString != "") cssString += ", ";
            if(model.hasGlobalLight) model.angle = style.globalAngle;
            radiants = (Math.PI / 180) * model.angle;
            model.dropX = Math.round(-model.distance * Math.cos(radiants));
            model.dropY = Math.round(model.distance * Math.sin(radiants));
            tempX = model.dropX === 0 ? "0 " : model.dropX + "px ";
            tempY = model.dropY === 0 ? "0 " : model.dropY + "px ";
            tempBlur = model.blur === 0 ? "0 " : model.blur + "px ";
            tempSize = model.size === 0 ? "" : model.size+"px ";
            if(model.opacity != 100){
                dropColor = model.color.slice(0);
                dropColor.push(model.opacity/100);
            } else {
                dropColor = model.color;
            }
            if(model.isInset) cssString += "inset ";
            cssString += tempX + tempY + tempBlur + tempSize + toColor(dropColor);
            return cssString;
        }
    }
}
 function fontShadow(style){
    var cssString = "", radiants, dropColor, tempSize, tempX, tempY, tempBlur,
        shadows = ["dropShadow", "innerShadow"];
    
    for(var i=0; i<shadows.length; i++){
        var model = style[shadows[i]];
        if(model.isActive){
            if(cssString != "") cssString += ", ";
            if(model.hasGlobalLight) model.angle = style.globalAngle;
            radiants = (Math.PI / 180) * model.angle;
            model.dropX = Math.round(-model.distance * Math.cos(radiants));
            model.dropY = Math.round(model.distance * Math.sin(radiants));
            tempX = model.dropX === 0 ? "0 " : model.dropX + "px ";
            tempY = model.dropY === 0 ? "0 " : model.dropY + "px ";
            tempBlur = model.blur === 0 ? "0 " : model.blur + "px ";
            tempSize = model.size === 0 ? "" : model.size+"px ";
            if(model.opacity != 100){
                dropColor = model.color.slice(0);
                dropColor.push(model.opacity/100);
            } else {
                dropColor = model.color;
            }
            if(model.isInset) cssString += "inset ";
            cssString += tempX + tempY  + toColor(dropColor);
            return cssString;
        }
    }
}