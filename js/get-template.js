let htmlToElements = (html) => {
  let template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstChild;
};

export default htmlToElements;

// import htmlToElements from '/get-template';
