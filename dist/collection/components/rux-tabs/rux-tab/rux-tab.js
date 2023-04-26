import { Host, h } from '@stencil/core';
/**
 *
 * @part container - individual tabs
 *
 */
export class RuxTab {
  constructor() {
    /**
     *  If present, overrides which tab is selected on load / mount. By default, the first <rux-tab> item is selected.
     */
    this.selected = false;
    /**
     * If present, sets a disabled state on this tab item, indicating it cannot be selected by user action.
     */
    this.disabled = false;
    /**
     * If passed or set to true, displays the tabs in a smaller style, suitable for limited-space uses.
     */
    this.small = false;
  }
  connectedCallback() {
    var _a, _b;
    //handle small on init
    if ((_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.getAttributeNode('small')) {
      this.el.setAttribute('small', '');
    }
  }
  _clickHandler(e) {
    if (this.disabled) {
      e.stopImmediatePropagation();
    }
  }
  render() {
    return (h(Host, { onClick: this._clickHandler }, h("div", { part: "container", class: {
        'rux-tab': true,
        'rux-tab--selected': this.selected,
        'rux-tab--small': this.small,
        'rux-tab--large': !this.small,
        'rux-tab--disabled': this.disabled,
      }, role: "tab", tabindex: this.disabled || !this.selected ? '-1' : '0' }, h("slot", null))));
  }
  static get is() { return "rux-tab"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-tab.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-tab.css"]
    };
  }
  static get properties() {
    return {
      "selected": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If present, overrides which tab is selected on load / mount. By default, the first <rux-tab> item is selected."
        },
        "attribute": "selected",
        "reflect": true,
        "defaultValue": "false"
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If present, sets a disabled state on this tab item, indicating it cannot be selected by user action."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "small": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If passed or set to true, displays the tabs in a smaller style, suitable for limited-space uses."
        },
        "attribute": "small",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "el"; }
}
