'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const ruxTabPanelCss = ":host{display:block;position:relative;visibility:visible;z-index:1;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--line-height-base);text-align:left}:host([hidden]){display:none}:host(.hidden){display:none;position:absolute;visibility:hidden;z-index:-1}";

const RuxTabPanel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  connectedCallback() {
    this.el.setAttribute('role', 'tabpanel');
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
RuxTabPanel.style = ruxTabPanelCss;

exports.rux_tab_panel = RuxTabPanel;
