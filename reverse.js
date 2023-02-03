function styleReverse(style){
    let styleWay = '';
    for(let i = style.length-1; i >= 0; i--){
        let styleElement = style[i];
        styleWay = styleWay + styleElement;
        console.log(styleWay);
    }
    return styleWay;
}

let storeStyle = "***************";
let inTotalStyleDesign = styleReverse(storeStyle);
console.log("Total Style Design: ", inTotalStyleDesign);