'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const ruxTabPanelCss = ":host{display:block;position:relative;visibility:visible;z-index:1;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--line-height-base);text-align:left}:host([hidden]){display:none}:host(.hidden){display:none;position:absolute;visibility:hidden;z-index:-1}";

const RuxTabPanels = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ruxRegisterPanels = index.createEvent(this, "ruxregisterpanels", 7);
  }
  connectedCallback() {
    this.el.setAttribute('style', 'position: relative; width: 100%;');
    this._getSlottedChildren = this._getSlottedChildren.bind(this);
  }
  _getSlottedChildren() {
    var _a, _b;
    const slot = (_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('slot');
    if (slot) {
      const childNodes = slot.assignedNodes({ flatten: true });
      const children = Array.prototype.filter.call(childNodes, (node) => node.nodeType == Node.ELEMENT_NODE);
      this._registerTabPanels(children);
      return children;
    }
    else {
      return [];
    }
  }
  _registerTabPanels(children) {
    this.ruxRegisterPanels.emit(children);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", { onSlotchange: this._getSlottedChildren })));
  }
  get el() { return index.getElement(this); }
};
RuxTabPanels.style = ruxTabPanelCss;

exports.rux_tab_panels = RuxTabPanels;
