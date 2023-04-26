import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1675 4.8725C18.1525 3.915 15.355 3 12 3C8.63999 3 5.84249 3.915 3.82874 4.8725L3.37804 5.09382L2.95577 5.31426L2.46883 5.58496L2.02844 5.84592L1.71044 6.04454L1.42358 6.23156L1.16847 6.40461L0.846676 6.63275L0.359985 7L10.44 19.56L10.5483 19.6848C11.3708 20.5581 12.7948 20.5165 13.56 19.56L15.5 17.14V14.5L15.5056 14.2561C15.5095 14.171 15.5155 14.0866 15.5234 14.0028L15.5307 13.935L15.5627 13.6961L15.6136 13.4231C15.8074 12.5231 16.2401 11.7232 16.84 11.08L16.8291 11.0752C17.7364 10.1013 19.0362 9.5 20.5 9.5C20.86 9.5 21.21 9.54 21.55 9.61L23.64 7L23.1527 6.63275L22.7067 6.31998L22.4353 6.13965L21.9694 5.84592L21.4347 5.53145L21.0411 5.31426L20.6185 5.09382L20.1675 4.8725ZM22.9948 14.3335C22.9115 13.0138 21.844 12 20.5 12C19.1 12 18 13.1 18 14.5V16L17.893 16.0075C17.4311 16.0714 17 16.5357 17 17V21L17.0075 21.107C17.0714 21.5689 17.5357 22 18 22H23L23.1069 21.9925C23.5689 21.9286 24 21.4643 24 21V17L23.9925 16.893C23.9286 16.4311 23.4643 16 23 16V14.5L22.9948 14.3335ZM20.5 13C19.747 13 19.0827 13.6201 19.0071 14.36L19 14.5V16H22V14.5C22 13.7 21.3 13 20.5 13ZM3.984 5.90868C6.39553 4.71396 9.08326 4 12 4C14.9122 4 17.5993 4.714 20.0127 5.90881L20.4672 6.14145C21.0608 6.45537 21.6046 6.78355 22.101 7.1176L22.206 7.189L21.13 8.533L20.8132 8.50831L20.5 8.5L20.2725 8.50408C18.4781 8.5686 16.9024 9.39408 15.8538 10.673C14.7838 10.288 13.4879 10 12 10C9.47705 10 7.48424 10.833 6.23125 11.5438L5.89356 11.7427L5.59722 11.93L1.79299 7.189L1.89819 7.11725L2.27887 6.86797C2.79839 6.53742 3.36593 6.21489 3.984 5.90868Z" fill="currentColor"/></svg>';

const RuxIconSignalWifi2BarLock$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-signal-wifi-2-bar-lock", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-signal-wifi-2-bar-lock"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-signal-wifi-2-bar-lock":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSignalWifi2BarLock$1);
      }
      break;
  } });
}

const RuxIconSignalWifi2BarLock = RuxIconSignalWifi2BarLock$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSignalWifi2BarLock, defineCustomElement };
