import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const ruxMenuItemCss = ":host{display:block}::slotted(*:focus-visible){outline:2px solid transparent}a.rux-menu-item,a.rux-menu-item:hover{text-decoration:none}.rux-menu-item{display:block;position:relative;padding:var(--spacing-2);color:var(--color-text-interactive-default);font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);font-weight:var(--font-control-body-1-font-weight);line-height:var(--font-control-body-1-line-height);letter-spacing:var(--font-control-body-1-letter-spacing);cursor:pointer}.rux-menu-item:hover{color:var(--color-text-interactive-hover);background:var(--color-background-base-hover)}.rux-menu-item:focus-visible{border-radius:var(--focus-radius);outline:var(--focus-outline);outline-offset:var(--focus-offset)}.rux-menu-item--selected{background:var(--color-background-base-selected);color:var(--color-text-primary)}.rux-menu-item--disabled{opacity:var(--opacity-disabled);cursor:not-allowed}.rux-menu-item--disabled:hover{background:var(--color-background-base-default);color:var(--color-text-interactive-default)}";

const RuxMenuItem$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
    return (h(Host, { value: this.value }, h(TagType, Object.assign({}, attributes, { class: {
        'rux-menu-item': true,
        'rux-menu-item--selected': selected,
        'rux-menu-item--disabled': disabled,
      } }), h("slot", null))));
  }
  get el() { return this; }
  static get style() { return ruxMenuItemCss; }
}, [1, "rux-menu-item", {
    "selected": [516],
    "disabled": [516],
    "value": [1025],
    "href": [1],
    "target": [1],
    "rel": [1],
    "download": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-menu-item"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-menu-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxMenuItem$1);
      }
      break;
  } });
}

const RuxMenuItem = RuxMenuItem$1;
const defineCustomElement = defineCustomElement$1;

export { RuxMenuItem, defineCustomElement };
