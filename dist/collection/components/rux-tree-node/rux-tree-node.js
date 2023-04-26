/* eslint react/jsx-no-bind: 0 */ // --> OFF
import { Host, h, } from '@stencil/core';
import { hasSlot } from '../../utils/utils';
let id = 0;
/**
 * @slot (default) - The parent node content
 * @slot prefix - Renders content before the default slot
 * @slot suffix - Renders content after the default slot
 * @slot node - Renders a child node within the current node
 * @part text - The area bewteen the prefix and suffix slots
 * @part indicator - The opened/closed indicator
 * @part node - The individual tree node
 */
export class RuxTreeNode {
  constructor() {
    this.componentId = `node-${++id}`;
    this.children = [];
    this.hasPrefix = false;
    this.hasSuffix = false;
    /**
     * Sets the expanded state
     */
    this.expanded = false;
    /**
     * Sets the selected state
     */
    this.selected = false;
  }
  handleExpandedChange(newValue) {
    this.setExpanded(newValue);
  }
  handleSelectedChange(newValue) {
    this.setSelected(newValue);
  }
  handleKeyDown(ev) {
    if (ev.target !== ev.currentTarget) {
      return true;
    }
    switch (ev.key) {
      case 'ArrowUp':
        ev.preventDefault();
        this._focusNext(-1);
        break;
      case 'ArrowRight':
        ev.preventDefault();
        this._expandNextNode();
        break;
      case 'ArrowDown':
        ev.preventDefault();
        this._focusNext(1);
        break;
      case 'ArrowLeft':
        ev.preventDefault();
        this._collapseParent();
        break;
      case 'Enter':
        ev.preventDefault();
        this.setSelected(true);
        break;
    }
  }
  connectedCallback() {
    this._checkForPrefixAndSuffix = this._checkForPrefixAndSuffix.bind(this);
    this._handleArrowClick = this._handleArrowClick.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this._handleTreeNodeClick = this._handleTreeNodeClick.bind(this);
  }
  componentWillLoad() {
    this._handleSlotChange();
    this._checkForPrefixAndSuffix();
  }
  get hasChildren() {
    return this.children.length > 0;
  }
  _checkForPrefixAndSuffix() {
    this.hasPrefix = hasSlot(this.el, 'prefix');
    this.hasSuffix = hasSlot(this.el, 'suffix');
  }
  /**
   * Sets the expanded state
   * @param value
   */
  async setExpanded(value) {
    this.expanded = value;
  }
  /**
   * Sets the selected state
   * @param value
   */
  async setSelected(value) {
    this.selected = value;
    if (value) {
      this.ruxTreeNodeSelected.emit(this.componentId);
    }
  }
  _handleSlotChange() {
    const children = Array.from(this.el.querySelectorAll(`[slot="node"]`));
    this.children = children;
    this._setAriaLevel();
  }
  /**
   * Manually set the aria-level attribute.
   * Tree is responsible for setting the root node levels.
   */
  _setAriaLevel() {
    const level = this.el.getAttribute('aria-level');
    if (level) {
      this.children.map((child) => {
        child.setAttribute('aria-level', `${+level + 1}`);
      });
    }
  }
  _handleArrowClick(e) {
    e.stopPropagation();
    this.setExpanded(!this.expanded);
    this.expanded
      ? this.ruxTreeNodeExpanded.emit(this.componentId)
      : this.ruxTreeNodeCollapsed.emit(this.componentId);
  }
  _handleTreeNodeClick(e) {
    e.stopPropagation();
    this.selected = !this.selected;
  }
  _expandNextNode() {
    if (!this.expanded && this.hasChildren) {
      this.setExpanded(true);
    }
  }
  _focusItem(el) {
    var _a;
    const parent = (_a = el === null || el === void 0 ? void 0 : el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.parent');
    if (parent) {
      parent.focus();
    }
  }
  _collapseParent() {
    if (this.expanded) {
      this.setExpanded(false);
    }
    else if (this.el.parentElement) {
      const parentTreeItemNode = this.el.parentElement.closest("[role='treeitem']");
      if (parentTreeItemNode) {
        this._focusItem(parentTreeItemNode);
      }
    }
  }
  _focusNext(direction) {
    const visibleNodes = this._getVisibleNodes();
    const currentIndex = visibleNodes.indexOf(this.el);
    if (currentIndex !== -1) {
      let nextElement = visibleNodes[currentIndex + direction];
      if (nextElement !== undefined) {
        // Skips any disabled nodes
        while (nextElement.hasAttribute('disabled')) {
          const offset = direction >= 0 ? 1 : -1;
          nextElement =
            visibleNodes[currentIndex + direction + offset];
          if (nextElement) {
            break;
          }
        }
      }
      if (nextElement !== null) {
        this._focusItem(nextElement);
      }
    }
  }
  _getVisibleNodes() {
    const rootTree = this.el.closest("[role='tree']");
    const nodes = Array.from(rootTree.querySelectorAll('rux-tree-node'));
    return nodes.filter((node) => node.offsetParent !== null);
  }
  render() {
    const { _checkForPrefixAndSuffix, _handleArrowClick, _handleSlotChange, _handleTreeNodeClick, componentId, expanded, hasChildren, hasPrefix, hasSuffix, selected, } = this;
    const attrs = hasChildren && { role: 'group' };
    return (h(Host, { role: "treeitem", "aria-expanded": expanded ? 'true' : 'false', "aria-selected": selected ? 'true' : 'false', onClick: _handleTreeNodeClick }, h("div", { id: componentId, class: {
        'tree-node': true,
        'tree-node--expanded': expanded,
        'tree-node--has-children': hasChildren,
      } }, h("div", { class: "parent", tabindex: "0", part: "node" }, hasChildren && (h("i", { onClick: _handleArrowClick, part: "indicator", class: "arrow" })), h("span", { class: { prefix: hasPrefix } }, h("slot", { name: "prefix", onSlotchange: _checkForPrefixAndSuffix })), h("span", { part: "text" }, h("slot", { onSlotchange: _handleSlotChange })), h("span", { class: { suffix: hasSuffix } }, h("slot", { name: "suffix", onSlotchange: _checkForPrefixAndSuffix }))), h("div", Object.assign({}, attrs, { class: "children" }), h("slot", { name: "node", onSlotchange: _handleSlotChange })))));
  }
  static get is() { return "rux-tree-node"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-tree-node.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-tree-node.css"]
    };
  }
  static get properties() {
    return {
      "expanded": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Sets the expanded state"
        },
        "attribute": "expanded",
        "reflect": true,
        "defaultValue": "false"
      },
      "selected": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Sets the selected state"
        },
        "attribute": "selected",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "children": {},
      "hasPrefix": {},
      "hasSuffix": {}
    };
  }
  static get events() {
    return [{
        "method": "ruxTreeNodeSelected",
        "name": "ruxtreenodeselected",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fires when the user selects a tree node and emits the node's id on the event.detail."
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }, {
        "method": "ruxTreeNodeExpanded",
        "name": "ruxtreenodeexpanded",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fires when the user expands a tree node and emits the node's id on the event.detail."
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }, {
        "method": "ruxTreeNodeCollapsed",
        "name": "ruxtreenodecollapsed",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fires when the user collapses a tree node and emits the node's id on the event.detail."
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "setExpanded": {
        "complexType": {
          "signature": "(value: boolean) => Promise<void>",
          "parameters": [{
              "tags": [{
                  "name": "param",
                  "text": "value"
                }],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets the expanded state",
          "tags": [{
              "name": "param",
              "text": "value"
            }]
        }
      },
      "setSelected": {
        "complexType": {
          "signature": "(value: boolean) => Promise<void>",
          "parameters": [{
              "tags": [{
                  "name": "param",
                  "text": "value"
                }],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets the selected state",
          "tags": [{
              "name": "param",
              "text": "value"
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "expanded",
        "methodName": "handleExpandedChange"
      }, {
        "propName": "selected",
        "methodName": "handleSelectedChange"
      }];
  }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "handleKeyDown",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
