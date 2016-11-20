const selectScreen = (slide) => {
  let mainElement = document.querySelector('.main');
  mainElement.parentNode.replaceChild(slide, mainElement);
};

export default selectScreen;
