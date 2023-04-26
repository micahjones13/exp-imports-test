import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 2H20C21.1 2 22 2.9 22 4V16C22 17.1 21.1 18 20 18H6L2 22L2.01 4C2.01 2.9 2.9 2 4 2ZM14 10.8L16.38 12.7C17.03 13.22 18 12.76 18 11.92V8.08C18 7.24 17.03 6.78 16.38 7.3L14 9.2V7C14 6.45 13.55 6 13 6H7C6.45 6 6 6.45 6 7V13C6 13.55 6.45 14 7 14H13C13.55 14 14 13.55 14 13V10.8Z" fill="currentColor"/></svg>';

const RuxIconVoiceChat$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-voice-chat", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-voice-chat"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-voice-chat":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconVoiceChat$1);
      }
      break;
  } });
}

const RuxIconVoiceChat = RuxIconVoiceChat$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconVoiceChat, defineCustomElement };
