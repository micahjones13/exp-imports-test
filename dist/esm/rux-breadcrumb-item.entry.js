import { r as registerInstance, h, H as Host, g as getElement } from './index-a1205123.js';

const ruxBreadcrumbItemCss = ":host{display:flex}::slotted(rux-icon){color:inherit}a{font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);font-weight:var(--font-control-body-1-font-weight);line-height:var(--font-control-body-1-line-height);letter-spacing:var(--font-control-body-1-letter-spacing);display:inline-flex;gap:var(--spacing-2);align-items:center;text-decoration:none;white-space:nowrap}a[href]{color:var(--color-text-interactive-default)}a[href]:hover{color:var(--color-text-interactive-hover)}a:not([href]){color:inherit}a:focus-visible{border-radius:var(--focus-radius);outline:var(--focus-outline);outline-offset:var(--focus-offset)}";

const RuxBreadcrumbItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  componentWillLoad() {
    this._handleSlotChange();
  }
  _handleSlotChange() {
    var _a, _b, _c;
    const slot = (_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('slot');
    //if the slot exists
    if (slot) {
      const link = (_c = this.el.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('[part="link"]');
      const fontSize = window
        .getComputedStyle(link)
        .getPropertyValue('font-size');
      const childEls = slot.assignedNodes({});
      //slotted content might just be text which would return nothing
      if (childEls.length) {
        //give rux-icons the correct size
        childEls.map((el) => {
          if (el.nodeName === 'RUX-ICON')
            el.setAttribute('size', fontSize);
        });
      }
    }
  }
  render() {
    return (h(Host, null, h("a", { href: this.href, part: "link" }, h("slot", { onSlotchange: this._handleSlotChange }))));
  }
  get el() { return getElement(this); }
};
RuxBreadcrumbItem.style = ruxBreadcrumbItemCss;

export { RuxBreadcrumbItem as rux_breadcrumb_item };
