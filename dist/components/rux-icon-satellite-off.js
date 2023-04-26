import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.87867 11.7071C8.09762 10.9261 8.09762 9.65973 8.87867 8.87868C9.65972 8.09763 10.926 8.09763 11.7071 8.87868L13.1213 10.2929C13.9024 11.0739 13.9024 12.3403 13.1213 13.1213C12.3403 13.9024 11.0739 13.9024 10.2929 13.1213L8.87867 11.7071ZM4.05653 16.7845C3.61958 16.3475 3.67956 15.6228 4.1824 15.2636L8.17156 12.4142L9.58578 13.8284L6.73637 17.8176C6.3772 18.3204 5.65248 18.3804 5.21553 17.9435L4.05653 16.7845ZM15.2636 4.1824C15.6228 3.67956 16.3475 3.61958 16.7844 4.05653L17.9435 5.21554C18.3804 5.65249 18.3204 6.37721 17.8176 6.73638L13.8284 9.58578L12.4142 8.17157L15.2636 4.1824Z" fill="currentColor"/></svg>';

const RuxIconSatelliteOff$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-satellite-off", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-satellite-off"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-satellite-off":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSatelliteOff$1);
      }
      break;
  } });
}

const RuxIconSatelliteOff = RuxIconSatelliteOff$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSatelliteOff, defineCustomElement };
