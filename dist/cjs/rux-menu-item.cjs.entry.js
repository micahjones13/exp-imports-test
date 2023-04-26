'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const ruxMenuItemCss = ":host{display:block}::slotted(*:focus-visible){outline:2px solid transparent}a.rux-menu-item,a.rux-menu-item:hover{text-decoration:none}.rux-menu-item{display:block;position:relative;padding:var(--spacing-2);color:var(--color-text-interactive-default);font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);font-weight:var(--font-control-body-1-font-weight);line-height:var(--font-control-body-1-line-height);letter-spacing:var(--font-control-body-1-letter-spacing);cursor:pointer}.rux-menu-item:hover{color:var(--color-text-interactive-hover);background:var(--color-background-base-hover)}.rux-menu-item:focus-visible{border-radius:var(--focus-radius);outline:var(--focus-outline);outline-offset:var(--focus-offset)}.rux-menu-item--selected{background:var(--color-background-base-selected);color:var(--color-text-primary)}.rux-menu-item--disabled{opacity:var(--opacity-disabled);cursor:not-allowed}.rux-menu-item--disabled:hover{background:var(--color-background-base-default);color:var(--color-text-interactive-default)}";

const RuxMenuItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * sets the menu item as selected
     */
    this.selected = false;
    /**
     * sets the menu item as disabled
     */
    this.disabled = false;
  }
  render() {
    const { disabled, selected, href, rel, download, target } = this;
    const TagType = href ? 'a' : 'div';
    const attributes = TagType === 'a' ? { download, href, rel, target } : {};
    return (index.h(index.Host, { value: this.value }, index.h(TagType, Object.assign({}, attributes, { class: {
        'rux-menu-item': true,
        'rux-menu-item--selected': selected,
        'rux-menu-item--disabled': disabled,
      } }), index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};
RuxMenuItem.style = ruxMenuItemCss;

exports.rux_menu_item = RuxMenuItem;
