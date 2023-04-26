import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 18C20.3285 18 21 18.6716 21 19.5C21 20.3284 20.3285 21 19.5 21C18.6716 21 18 20.3284 18 19.5C18 18.6716 18.6716 18 19.5 18ZM8.1716 12.4142L9.58581 13.8284L6.73641 17.8176C6.4154 18.267 5.79085 18.3711 5.34144 18.0501C5.29662 18.0181 5.25452 17.9824 5.21557 17.9435L4.05657 16.7845C3.66604 16.3939 3.66604 15.7608 4.05657 15.3702C4.09551 15.3313 4.13761 15.2956 4.18243 15.2636L8.1716 12.4142ZM17 16C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17C16 16.4477 16.4477 16 17 16ZM15 14C15.5523 14 16 14.4477 16 15C16 15.5523 15.5523 16 15 16C14.4477 16 14 15.5523 14 15C14 14.4477 14.4477 14 15 14ZM11.7071 8.87868L13.1213 10.2929C13.9024 11.0739 13.9024 12.3403 13.1213 13.1213C12.3403 13.9024 11.074 13.9024 10.2929 13.1213L8.87871 11.7071C8.09766 10.9261 8.09766 9.65973 8.87871 8.87868C9.65976 8.09763 10.9261 8.09763 11.7071 8.87868ZM16.6903 3.97335L16.7845 4.05653L17.9435 5.21554C17.9824 5.25449 18.0181 5.29659 18.0501 5.34141C18.3464 5.75625 18.2805 6.32032 17.9152 6.65713L17.8176 6.73638L13.8285 9.58578L12.4142 8.17157L15.2636 4.1824C15.2957 4.13758 15.3313 4.09548 15.3703 4.05653C15.7007 3.72609 16.2049 3.67525 16.5888 3.90402L16.6903 3.97335Z" fill="currentColor"/></svg>';

const RuxIconSatelliteReceive$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-satellite-receive", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-satellite-receive"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-satellite-receive":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSatelliteReceive$1);
      }
      break;
  } });
}

const RuxIconSatelliteReceive = RuxIconSatelliteReceive$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSatelliteReceive, defineCustomElement };
