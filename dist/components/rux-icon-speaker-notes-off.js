import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H4.08L11.08 9H17C17.55 9 18 9.45 18 10C18 10.55 17.55 11 17 11H13.08L20.07 17.99C21.14 17.95 22 17.08 22 16V4C22 2.9 21.1 2 20 2ZM1.91 2.36C1.56 2.01 0.990002 2.01 0.640002 2.36C0.290002 2.71 0.290002 3.28 0.640002 3.63L2.02 5.01L2 22L6 18H15L20.09 23.09C20.44 23.44 21.01 23.44 21.36 23.09C21.71 22.74 21.71 22.17 21.36 21.82L1.91 2.36ZM7 14C6.45 14 6 13.55 6 13C6 12.45 6.45 12 7 12C7.55 12 8 12.45 8 13C8 13.55 7.55 14 7 14ZM6 10C6 10.55 6.45 11 7 11C7.55 11 8 10.55 8 10C8 9.45 7.55 9 7 9C6.45 9 6 9.45 6 10ZM11 8H17C17.55 8 18 7.55 18 7C18 6.45 17.55 6 17 6H11C10.45 6 10 6.45 10 7C10 7.55 10.45 8 11 8Z" fill="currentColor"/></svg>';

const RuxIconSpeakerNotesOff$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-speaker-notes-off", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-speaker-notes-off"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-speaker-notes-off":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSpeakerNotesOff$1);
      }
      break;
  } });
}

const RuxIconSpeakerNotesOff = RuxIconSpeakerNotesOff$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSpeakerNotesOff, defineCustomElement };
