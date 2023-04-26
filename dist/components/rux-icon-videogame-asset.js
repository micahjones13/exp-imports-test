import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6H21C22.1 6 23 6.9 23 8V16C23 17.1 22.1 18 21 18H3C1.9 18 1 17.1 1 16V8C1 6.9 1.9 6 3 6ZM8 13H10C10.55 13 11 12.55 11 12C11 11.45 10.55 11 10 11H8V9C8 8.45 7.55 8 7 8C6.45 8 6 8.45 6 9V11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13H6V15C6 15.55 6.45 16 7 16C7.55 16 8 15.55 8 15V13ZM15.5 15C14.67 15 14 14.33 14 13.5C14 12.67 14.67 12 15.5 12C16.33 12 17 12.67 17 13.5C17 14.33 16.33 15 15.5 15ZM18 10.5C18 11.33 18.67 12 19.5 12C20.33 12 21 11.33 21 10.5C21 9.67 20.33 9 19.5 9C18.67 9 18 9.67 18 10.5Z" fill="currentColor"/></svg>';

const RuxIconVideogameAsset$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em')
     */
    this.size = 'auto';
  }
  get iconSize() {
    const sizes = {
      'extra-small': '1rem',
      small: '2rem',
      normal: '3rem',
      large: '4rem',
    };
    if (sizes[this.size]) {
      return sizes[this.size];
    }
    else {
      return this.size;
    }
  }
  render() {
    const style = {
      height: this.iconSize,
      width: this.iconSize,
    };
    return h("div", { style: style, innerHTML: svgIcon });
  }
}, [0, "rux-icon-videogame-asset", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-videogame-asset"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-videogame-asset":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconVideogameAsset$1);
      }
      break;
  } });
}

const RuxIconVideogameAsset = RuxIconVideogameAsset$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconVideogameAsset, defineCustomElement };
