'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const ruxTreeCss = ":host{display:block;position:relative;box-sizing:border-box;padding:0;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);color:var(--color-text-primary);user-select:none;width:100%}:host([hidden]){display:none}";

const RuxTree = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this._handleNodeSelected = this._handleNodeSelected.bind(this);
  }
  disconnectedCallback() {
    var _a;
    const slot = (_a = this.slotContainer) === null || _a === void 0 ? void 0 : _a.querySelector('slot');
    const assignedElements = slot.assignedElements({
      flatten: true,
    });
    assignedElements.map((el) => {
      el.removeEventListener('ruxtreenodeselected', this._handleNodeSelected);
    });
  }
  _handleSlotChange() {
    var _a;
    const slot = (_a = this.slotContainer) === null || _a === void 0 ? void 0 : _a.querySelector('slot');
    const assignedElements = slot.assignedElements({
      flatten: true,
    });
    assignedElements.map((el) => {
      el.setAttribute('aria-level', '1');
      el.addEventListener('ruxtreenodeselected', this._handleNodeSelected);
    });
  }
  _handleNodeSelected(e) {
    const allNodes = document.querySelectorAll('rux-tree-node');
    const previousSelectedNode = Array.from(allNodes).find((node) => {
      var _a, _b;
      return (node.selected &&
        ((_b = (_a = node.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.tree-node')) === null || _b === void 0 ? void 0 : _b.id) !== e.detail);
    });
    if (previousSelectedNode) {
      previousSelectedNode.selected = false;
    }
  }
  render() {
    return (index.h(index.Host, { role: "tree", class: "rux-tree" }, index.h("div", { ref: (el) => (this.slotContainer = el) }, index.h("slot", { onSlotchange: this._handleSlotChange }))));
  }
  get el() { return index.getElement(this); }
};
RuxTree.style = ruxTreeCss;

exports.rux_tree = RuxTree;
