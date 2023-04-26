import { h, Host } from '@stencil/core';
/**
 * @slot (default) - The breadcrumb item content
 * @part container - the li containing the link element
 * @part link - the link element
 */
export class RuxBreadcrumbItem {
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
  static get is() { return "rux-breadcrumb-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-breadcrumb-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-breadcrumb-item.css"]
    };
  }
  static get properties() {
    return {
      "href": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The href property of the breadcrumb item link"
        },
        "attribute": "href",
        "reflect": true
      }
    };
  }
  static get elementRef() { return "el"; }
}
