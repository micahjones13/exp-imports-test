import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1675 4.8725C18.1525 3.915 15.355 3 12 3C8.63999 3 5.84249 3.915 3.82874 4.8725L3.37804 5.09382L2.95577 5.31426L2.46883 5.58496L2.02844 5.84592L1.71044 6.04454L1.42358 6.23156L1.16847 6.40461L0.846676 6.63275L0.359985 7L10.44 19.56L10.5483 19.6848C10.9222 20.0817 11.4203 20.2897 11.9243 20.3086H12.0756L12.2265 20.2972C12.7282 20.2405 13.2122 19.9948 13.56 19.56L14.062 18.934L23.64 7L23.1527 6.63275L22.7067 6.31998L22.4353 6.13965L21.9694 5.84592L21.4347 5.53145L21.0411 5.31426L20.6185 5.09382L20.1675 4.8725ZM3.984 5.90868C6.39553 4.71396 9.08326 4 12 4C14.9122 4 17.5993 4.714 20.0127 5.90881L20.4672 6.14145C21.0608 6.45537 21.6046 6.78355 22.101 7.1176L22.206 7.189L19.6598 10.362C19.5696 10.3017 19.4726 10.2385 19.3691 10.173L19.0388 9.97069C17.5821 9.10546 15.1244 8 12 8C8.75062 8 6.2223 9.19566 4.79115 10.0733L4.48053 10.2695L4.34015 10.362L1.79299 7.189L1.89819 7.11725L2.27887 6.86797C2.79839 6.53742 3.36593 6.21489 3.984 5.90868Z" fill="currentColor"/></svg>';

const RuxIconSignalWifi3Bar$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-signal-wifi-3-bar", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-signal-wifi-3-bar"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-signal-wifi-3-bar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSignalWifi3Bar$1);
      }
      break;
  } });
}

const RuxIconSignalWifi3Bar = RuxIconSignalWifi3Bar$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSignalWifi3Bar, defineCustomElement };
