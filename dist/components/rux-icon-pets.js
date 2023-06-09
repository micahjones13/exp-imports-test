import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 8C7.61929 8 6.5 6.88071 6.5 5.5C6.5 4.11929 7.61929 3 9 3C10.3807 3 11.5 4.11929 11.5 5.5C11.5 6.88071 10.3807 8 9 8ZM4.5 12C3.11929 12 2 10.8807 2 9.5C2 8.11929 3.11929 7 4.5 7C5.88071 7 7 8.11929 7 9.5C7 10.8807 5.88071 12 4.5 12ZM12.5 5.5C12.5 6.88071 13.6193 8 15 8C16.3807 8 17.5 6.88071 17.5 5.5C17.5 4.11929 16.3807 3 15 3C13.6193 3 12.5 4.11929 12.5 5.5ZM19.5 12C18.1193 12 17 10.8807 17 9.5C17 8.11929 18.1193 7 19.5 7C20.8807 7 22 8.11929 22 9.5C22 10.8807 20.8807 12 19.5 12ZM17.5765 15.0953C17.4969 15.0163 17.4179 14.9379 17.34 14.86C17.0276 14.4938 16.7333 14.1469 16.4437 13.8055C15.9265 13.196 15.4241 12.6038 14.86 11.95C14.4 11.41 13.81 10.87 13.11 10.63C13 10.59 12.89 10.56 12.78 10.54C12.53 10.5 12.26 10.5 12 10.5C11.74 10.5 11.47 10.5 11.21 10.55C11.1 10.57 10.99 10.6 10.88 10.64C10.18 10.88 9.6 11.42 9.13 11.96C8.81767 12.3262 8.52337 12.673 8.23371 13.0144C7.71652 13.624 7.21408 14.2162 6.65 14.87C6.5715 14.9485 6.49193 15.0275 6.41175 15.1071C5.15391 16.3559 3.74798 17.7516 4.03 19.66C4.32 20.68 5.05 21.69 6.36 21.98C6.69927 22.0497 7.38415 21.9596 8.26907 21.8431C9.28818 21.709 10.5726 21.54 11.9 21.54H12.08C13.4187 21.54 14.7136 21.709 15.7368 21.8425C16.6092 21.9564 17.284 22.0444 17.62 21.98C18.93 21.69 19.66 20.67 19.95 19.66C20.2416 17.7413 18.8347 16.3446 17.5765 15.0953Z" fill="currentColor"/></svg>';

const RuxIconPets$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-pets", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-pets"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-pets":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPets$1);
      }
      break;
  } });
}

const RuxIconPets = RuxIconPets$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPets, defineCustomElement };
