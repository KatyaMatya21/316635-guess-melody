const selectScreen = (slide) => {
  const mainElement = document.querySelector('.main');
  mainElement.parentNode.replaceChild(slide, mainElement);
};

export default selectScreen;
