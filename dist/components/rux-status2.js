import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const caution = '<svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="7" height="7" fill="var(--caution-fill)" stroke="var(--caution-border)"/></svg>';

const critical = '<svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6698 1.52905L1.32983 1.52905L6.49983 10.9791L11.6698 1.52905Z" fill="var(--critical-fill)" stroke="var(--critical-border)"/></svg>';

const normal = '<svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6.5" cy="6.5" r="3.5" fill="var(--normal-fill)" stroke="var(--normal-border)"/></svg>';

const off = '<svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6.5" cy="6.5" r="2.5" fill="var(--off-fill)" stroke="var(--off-border)"/></svg>';

const serious = '<svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.55029" y="6.5" width="7" height="7" transform="rotate(-45 1.55029 6.5)" fill="var(--serious-fill)" stroke="var(--serious-border)"/></svg>';

const standby = '<svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 10.5C8.70914 10.5 10.5 8.70914 10.5 6.5C10.5 4.29086 8.70914 2.5 6.5 2.5C4.29086 2.5 2.5 4.29086 2.5 6.5C2.5 8.70914 4.29086 10.5 6.5 10.5ZM6.50009 8.49999C7.60466 8.49999 8.50009 7.60456 8.50009 6.49999C8.50009 5.39542 7.60466 4.49999 6.50009 4.49999C5.39552 4.49999 4.50009 5.39542 4.50009 6.49999C4.50009 7.60456 5.39552 8.49999 6.50009 8.49999Z" fill="var(--standby-fill)"/><path d="M10.5 6.5C10.5 8.70914 8.70914 10.5 6.5 10.5V11.5C9.26142 11.5 11.5 9.26142 11.5 6.5H10.5ZM6.5 2.5C8.70914 2.5 10.5 4.29086 10.5 6.5H11.5C11.5 3.73858 9.26142 1.5 6.5 1.5V2.5ZM2.5 6.5C2.5 4.29086 4.29086 2.5 6.5 2.5V1.5C3.73858 1.5 1.5 3.73858 1.5 6.5H2.5ZM6.5 10.5C4.29086 10.5 2.5 8.70914 2.5 6.5H1.5C1.5 9.26142 3.73858 11.5 6.5 11.5V10.5ZM7.5 6.5C7.5 7.05228 7.05228 7.5 6.5 7.5V8.5C7.60457 8.5 8.5 7.60457 8.5 6.5H7.5ZM6.5 5.5C7.05228 5.5 7.5 5.94772 7.5 6.5H8.5C8.5 5.39543 7.60457 4.5 6.5 4.5V5.5ZM5.5 6.5C5.5 5.94772 5.94772 5.5 6.5 5.5V4.5C5.39543 4.5 4.5 5.39543 4.5 6.5H5.5ZM6.5 7.5C5.94772 7.5 5.5 7.05228 5.5 6.5H4.5C4.5 7.60457 5.39543 8.5 6.5 8.5V7.5Z" fill="var(--standby-border)" fill-opacity="var(--standby-fill-opacity)"/></svg>';

const StatusSVG = {
  caution,
  critical,
  normal,
  off,
  serious,
  standby,
};

const ruxStatusCss = ":host{display:block}:host([hidden]){display:none}*,*::before,*::after{box-sizing:border-box}.status-wrapper{width:var(--spacing-3);font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--line-height-base)}";

const RuxStatus = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * Sets the status symbol, valid options are critical, serious, caution, normal, standby and off
     */
    this.status = 'normal';
  }
  validateStatus(newValue) {
    const statusTypes = {
      off: true,
      standby: true,
      normal: true,
      caution: true,
      serious: true,
      critical: true,
    };
    if (!statusTypes[newValue]) {
      throw new Error(`rux-status: status of ${this.status} is not valid. Please use a valid status.`);
    }
  }
  connectedCallback() {
    if (this.status)
      this.validateStatus(this.status);
  }
  render() {
    return (h(Host, { status: this.status }, h("div", { part: "status", class: "status-wrapper", innerHTML: this.status && StatusSVG[this.status] })));
  }
  get el() { return this; }
  static get watchers() { return {
    "status": ["validateStatus"]
  }; }
  static get style() { return ruxStatusCss; }
}, [1, "rux-status", {
    "status": [513]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-status"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-status":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxStatus);
      }
      break;
  } });
}

export { RuxStatus as R, defineCustomElement as d };
