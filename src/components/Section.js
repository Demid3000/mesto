export default class Section {
    constructor({ items, renderer }, elements) {
      this._items = items;
      this._renderer = renderer;
      this._elements = elements;
    }
    renderer() {
      this._renderer();
    }
    addItem(element) {
      this._elements.prepend(element);
    }
  }