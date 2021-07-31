import { initialCards } from "../utils/constants.js";

export default class Section {
    constructor({ items, renderer }, elements) {
      this._items = items;
      this._renderer = renderer;
      this._elements = elements;
    }
    renderer() {
      this._renderer(initialCards);
    }
    addItem(element) {
      this._elements.prepend(element);
    }
  }