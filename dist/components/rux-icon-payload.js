import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6802 2.24483L12.8418 2.31637L20.8418 6.31637C21.4305 6.6107 21.819 7.18871 21.8753 7.83667L21.8824 8V16C21.8824 16.6581 21.5391 17.2641 20.9848 17.6043L20.8418 17.6836L12.8418 21.6836C12.3649 21.9221 11.812 21.9459 11.3198 21.7552L11.1582 21.6836L3.15821 17.6836C2.56956 17.3893 2.18104 16.8113 2.12475 16.1633L2.11768 16V8C2.11768 7.34186 2.46091 6.73586 3.0153 6.39574L3.15821 6.31637L3.4276 6.17973C3.50773 6.12386 3.59511 6.0805 3.6866 6.05036L11.1582 2.31637C11.5822 2.1044 12.0662 2.062 12.5141 2.18919L12.6802 2.24483ZM3.99968 8.17865L4.00003 16L10.9997 19.4996V12.5536L3.99968 8.17865ZM12.9997 12.6176L19.9997 9.11765L20 16L12.9997 19.4996V12.6176ZM18.5 15C18.7762 15 19 15.2239 19 15.5C19 15.7761 18.7762 16 18.5 16C18.2239 16 18 15.7761 18 15.5C18 15.2239 18.2239 15 18.5 15ZM6.00003 15.5C6.00003 15.2239 5.77617 15 5.50003 15C5.22389 15 5.00003 15.2239 5.00003 15.5C5.00003 15.7761 5.22389 16 5.50003 16C5.77617 16 6.00003 15.7761 6.00003 15.5ZM16.5 14C16.7762 14 17 14.2239 17 14.5C17 14.7761 16.7762 15 16.5 15C16.2239 15 16 14.7761 16 14.5C16 14.2239 16.2239 14 16.5 14ZM8.00003 14.5C8.00003 14.2239 7.77617 14 7.50003 14C7.22389 14 7.00003 14.2239 7.00003 14.5C7.00003 14.7761 7.22389 15 7.50003 15C7.77617 15 8.00003 14.7761 8.00003 14.5ZM9.50003 13C9.77617 13 10 13.2239 10 13.5C10 13.7761 9.77617 14 9.50003 14C9.22389 14 9.00003 13.7761 9.00003 13.5C9.00003 13.2239 9.22389 13 9.50003 13ZM15 13.5C15 13.2239 14.7762 13 14.5 13C14.2239 13 14 13.2239 14 13.5C14 13.7761 14.2239 14 14.5 14C14.7762 14 15 13.7761 15 13.5ZM12 4L5.93668 7.03065L12.053 10.854L18.8807 7.44065L12 4ZM12.5 9.5C12.5 9.22386 12.2762 9 12 9C11.7239 9 11.5 9.22386 11.5 9.5C11.5 9.77614 11.7239 10 12 10C12.2762 10 12.5 9.77614 12.5 9.5ZM12 7C12.2762 7 12.5 7.22386 12.5 7.5C12.5 7.77614 12.2762 8 12 8C11.7239 8 11.5 7.77614 11.5 7.5C11.5 7.22386 11.7239 7 12 7ZM12.5 5.5C12.5 5.22386 12.2762 5 12 5C11.7239 5 11.5 5.22386 11.5 5.5C11.5 5.77614 11.7239 6 12 6C12.2762 6 12.5 5.77614 12.5 5.5Z" fill="currentColor"/></svg>';

const RuxIconPayload$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-payload", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-payload"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-payload":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconPayload$1);
      }
      break;
  } });
}

const RuxIconPayload = RuxIconPayload$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconPayload, defineCustomElement };
