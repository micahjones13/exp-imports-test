import { r as registerInstance, h, H as Host, g as getElement } from './index-a1205123.js';

const ruxTabPanelCss = ":host{display:block;position:relative;visibility:visible;z-index:1;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--line-height-base);text-align:left}:host([hidden]){display:none}:host(.hidden){display:none;position:absolute;visibility:hidden;z-index:-1}";

const RuxTabPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  connectedCallback() {
    this.el.setAttribute('role', 'tabpanel');
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get el() { return getElement(this); }
};
RuxTabPanel.style = ruxTabPanelCss;

export { RuxTabPanel as rux_tab_panel };
