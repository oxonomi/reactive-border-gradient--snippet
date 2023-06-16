let horizontal = document.getElementsByClassName('horizontal');
let vertical = document.getElementsByClassName('vertical');


function calcBG(x, y, width, height, hoverRectLeft, hoverRectTop){
    let deg = ((x - hoverRectLeft)/width)*360;
    return `linear-gradient( ${deg}deg,transparent 5%, rgb(255, 215, 137) 50%, transparent 99%)`
}

const animateBorder = (hover, x, y, width, height, hoverRectLeft, hoverRectTop) => {
    hover.style.setProperty('--background', calcBG(x, y, width, height, hoverRectLeft, hoverRectTop));
}


for (let hover of horizontal) {

    hover.addEventListener('mouseenter', () => {
        width = parseInt(getComputedStyle(hover).width);
        height = parseInt(getComputedStyle(hover).height);
        hoverRectLeft = hover.getBoundingClientRect().left;
        hoverRectTop = hover.getBoundingClientRect().top;

        hover.onmousemove = (e) => {
            animateBorder(hover, e.clientX, e.clientY, width, height, hoverRectLeft, hoverRectTop);
        }
    })
  };


  for (let hover of vertical) {

    hover.addEventListener('mouseenter', () => {
        width = parseInt(getComputedStyle(hover).width);
        height = parseInt(getComputedStyle(hover).height);
        hoverRectLeft = hover.getBoundingClientRect().left;
        hoverRectTop = hover.getBoundingClientRect().top;

        hover.onmousemove = (e) => {
            animateBorder(hover, e.clientY, e.clientX, width, height, hoverRectLeft, hoverRectTop); //swapped X and Y for vertical
        }
    })
  };
