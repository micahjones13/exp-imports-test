'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');
const utils = require('./utils-b3539f54.js');

const ruxTreeNodeCss = ":host{display:block}.tree-node{color:var(--color-text-primary);font-family:var(--font-body-1-font-family);font-size:var(--font-control-body-1-font-size);font-weight:var(--font-control-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--font-control-body-1-line-height);padding-top:var(--spacing-050)}:host([hidden]){display:none}:host([aria-selected=true]) .parent{background-color:var(--color-background-surface-selected)}:host([aria-level=\"1\"]) .tree-node:not(.tree-node--has-children) .parent{padding-left:var(--spacing-8)}:host([aria-level=\"2\"]) .parent{padding-left:var(--spacing-8)}:host([aria-level=\"2\"]) .tree-node:not(.tree-node--has-children) .parent{padding-left:var(--spacing-14)}:host([aria-level=\"3\"]) .parent{padding-left:var(--spacing-14)}:host([aria-level=\"3\"]) .tree-node:not(.tree-node--has-children) .parent{padding-left:var(--spacing-20)}:host([aria-level=\"4\"]) .parent{padding-left:var(--spacing-20)}:host([aria-level=\"4\"]) .tree-node:not(.tree-node--has-children) .parent{padding-left:calc(var(--spacing-14) + var(--spacing-12))}.parent{padding:var(--spacing-1) var(--spacing-2);display:flex;gap:var(--spacing-050)}.parent:hover{background-color:var(--color-background-surface-hover)}.parent:focus-visible{border-radius:var(--focus-radius);outline:var(--focus-outline);outline-offset:var(--focus-offset)}.arrow{cursor:pointer;min-width:20px;min-height:20px;background-image:url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.74167 13.2333L10.975 10L7.74167 6.76668C7.41667 6.44168 7.41667 5.91668 7.74167 5.59168C8.06667 5.26668 8.59167 5.26668 8.91667 5.59168L12.7417 9.41668C13.0667 9.74168 13.0667 10.2667 12.7417 10.5917L8.91667 14.4167C8.59167 14.7417 8.06667 14.7417 7.74167 14.4167C7.42501 14.0917 7.41667 13.5583 7.74167 13.2333Z' fill='%234DACFF'/%3E%3C/svg%3E%0A\");background-repeat:no-repeat}.arrow:hover{background-image:url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.74167 13.2333L10.975 10L7.74167 6.76668C7.41667 6.44168 7.41667 5.91668 7.74167 5.59168C8.06667 5.26668 8.59167 5.26668 8.91667 5.59168L12.7417 9.41668C13.0667 9.74168 13.0667 10.2667 12.7417 10.5917L8.91667 14.4167C8.59167 14.7417 8.06667 14.7417 7.74167 14.4167C7.42501 14.0917 7.41667 13.5583 7.74167 13.2333Z' fill='%2392CBFF'/%3E%3C/svg%3E\")}.prefix{display:flex;align-self:center;margin:var(--spacing-0) var(--spacing-1)}.suffix{margin-left:auto;display:flex}.children{display:none}.tree-node--expanded>.children{display:block !important}.tree-node--expanded .arrow{background-image:url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.76668 7.74167L10 10.975L13.2333 7.74167C13.5583 7.41667 14.0833 7.41667 14.4083 7.74167C14.7333 8.06667 14.7333 8.59167 14.4083 8.91667L10.5833 12.7417C10.2583 13.0667 9.73335 13.0667 9.40835 12.7417L5.58335 8.91667C5.25835 8.59167 5.25835 8.06667 5.58335 7.74167C5.90835 7.42501 6.44168 7.41667 6.76668 7.74167Z' fill='%234DACFF'/%3E%3C/svg%3E\")}.tree-node--expanded .arrow:hover{background-image:url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.76665 7.74167L9.99999 10.975L13.2333 7.74167C13.5583 7.41667 14.0833 7.41667 14.4083 7.74167C14.7333 8.06667 14.7333 8.59167 14.4083 8.91667L10.5833 12.7417C10.2583 13.0667 9.73332 13.0667 9.40832 12.7417L5.58332 8.91667C5.25832 8.59167 5.25832 8.06667 5.58332 7.74167C5.90832 7.42501 6.44165 7.41667 6.76665 7.74167Z' fill='%2392CBFF'/%3E%3C/svg%3E\")}:host::part(text){overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";

let id = 0;
const RuxTreeNode = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ruxTreeNodeSelected = index.createEvent(this, "ruxtreenodeselected", 7);
    this.ruxTreeNodeExpanded = index.createEvent(this, "ruxtreenodeexpanded", 7);
    this.ruxTreeNodeCollapsed = index.createEvent(this, "ruxtreenodecollapsed", 7);
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
    this.hasPrefix = utils.hasSlot(this.el, 'prefix');
    this.hasSuffix = utils.hasSlot(this.el, 'suffix');
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
    return (index.h(index.Host, { role: "treeitem", "aria-expanded": expanded ? 'true' : 'false', "aria-selected": selected ? 'true' : 'false', onClick: _handleTreeNodeClick }, index.h("div", { id: componentId, class: {
        'tree-node': true,
        'tree-node--expanded': expanded,
        'tree-node--has-children': hasChildren,
      } }, index.h("div", { class: "parent", tabindex: "0", part: "node" }, hasChildren && (index.h("i", { onClick: _handleArrowClick, part: "indicator", class: "arrow" })), index.h("span", { class: { prefix: hasPrefix } }, index.h("slot", { name: "prefix", onSlotchange: _checkForPrefixAndSuffix })), index.h("span", { part: "text" }, index.h("slot", { onSlotchange: _handleSlotChange })), index.h("span", { class: { suffix: hasSuffix } }, index.h("slot", { name: "suffix", onSlotchange: _checkForPrefixAndSuffix }))), index.h("div", Object.assign({}, attrs, { class: "children" }), index.h("slot", { name: "node", onSlotchange: _handleSlotChange })))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "expanded": ["handleExpandedChange"],
    "selected": ["handleSelectedChange"]
  }; }
};
RuxTreeNode.style = ruxTreeNodeCss;

exports.rux_tree_node = RuxTreeNode;
