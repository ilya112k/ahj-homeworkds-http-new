class Img {
  static create(src) {
    const element = document.createElement('img');
    element.src = src;
    return element;
  }
}
export { Img }
