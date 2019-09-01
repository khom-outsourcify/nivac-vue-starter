// Matching game

const Matching = (container, element) => {
  if (!container) {
    throw new Error("A container argument is required");
  }

  if (!element) {
    throw new Error("An element argument is required");
  }

  const fontPercen = document.documentElement.style.fontSize;

  let getpos = [];
  let matchActive = null;

  const first = elem => {
    createLine(elem);
    getpos[0] = elem;
  };

  const second = elem => {
    endLinkMode(elem);
    getpos[1] = elem;
  };

  const linkMouseMoveEvent = event => {
    drawLine(event.pageX, event.pageY);
  };

  const drawLine = (currentX, currentY) => {
    var originX = 280 + matchActive.offsetLeft + matchActive.offsetHeight / 2;
    var originY = 250 + matchActive.offsetTop + matchActive.offsetWidth / 2;
    var length = Math.sqrt(
      (currentX - originX) * (currentX - originX) + (currentY - originY) * (currentY - originY)
    );

    var angle = (180 / Math.PI) * Math.acos((currentY - originY) / length);
    if (currentX > originX) angle *= -1;
    length = (length * 62.5) / fontPercen.slice(0, -1) / 10;

    const line = document.getElementsByClassName("line")[
      document.getElementsByClassName("line").length - 1
    ];

    line.style.height = `${length}rem`;
    line.style["-webkit-transform"] = `rotate(${angle}deg)`;
    line.style["-moz-transform"] = `rotate(${angle}deg)`;
    line.style["-o-transform"] = `rotate(${angle}deg)`;
    line.style["-ms-transform"] = `rotate(${angle}deg)`;
    line.style["transform"] = `rotate(${angle}deg)`;

    return;
  };

  const createLine = () => {
    const mark = element.getElementsByClassName("item--mark")[0];
    const line = document.createElement("div");
    line.classList += `line`;
    container.appendChild(line);

    // set line to center of circle
    let setLinkTop = mark.offsetTop + mark.offsetHeight / 2;
    let setLinkLeft = mark.offsetLeft + mark.offsetWidth / 2;

    // set line to center of circle and self
    var setLinkCenterLeft = setLinkLeft - line.offsetWidth / 2;
    setLinkTop = (setLinkTop * 62.5) / fontPercen.slice(0, -1) / 10;
    setLinkLeft = (setLinkCenterLeft * 62.5) / fontPercen.slice(0, -1) / 10;
    line.style.top = `${setLinkTop}rem`;
    line.style.left = `${setLinkLeft}rem`;
    matchActive = mark;

    document.addEventListener("mousemove", linkMouseMoveEvent);
    document.addEventListener("touchmove", linkMouseMoveEvent);
  };

  const endLinkMode = elem => {
    var currentX =
      elem.find(".item__mark").offset().left + elem.find(".item__mark").outerWidth() / 2;
    var currentY =
      elem.find(".item__mark").offset().top + elem.find(".item__mark").outerHeight() / 2;
    drawLine(currentX, currentY);
    // $('.linkLine').not('.done')
    $(document).off("mousemove touchmove");
  };

  return {
    first: first,
    second: second,
    linkMouseMoveEvent: linkMouseMoveEvent,
    drawLine: drawLine,
    createLine: createLine,
    endLinkMode: endLinkMode
  };
};

export default Matching;
