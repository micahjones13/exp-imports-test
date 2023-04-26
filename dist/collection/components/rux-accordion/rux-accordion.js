import { h, Host } from '@stencil/core';
//import { hasShadowDom } from '../../utils/utils'
export class RuxAccordion {
  constructor() {
    /**
     * If present, sets a disabled state on the accordion, indicating that no part of it can be manipulated by user action.
     */
    this.disabled = false;
    /*******
     * toggles disallow muiltiple - default false
     * *********/
    this.disallowMultiple = false;
  }
  updatedExpanded(event) {
    //if rux-accordion has the attribute to disallow-multiple then make sure only one rux-accordion-item is open at a time
    if (this.disallowMultiple === true) {
      event.preventDefault();
      const items = this.el.querySelectorAll('rux-accordion-item'); //get all rux-accordion-items
      const isExpanded = this.el.hasAttribute('expanded'); // state of the item when accessed
      items.forEach((item) => {
        item.removeAttribute('expanded');
      });
      //only add the expanded attribute if it was not there when clicked. Else, close the item.
      !isExpanded && this.el.setAttribute('expanded', '');
    }
  }
  render() {
    return (h(Host, { tabindex: this.disabled ? '-1' : null }, h("slot", null)));
  }
  static get is() { return "rux-accordion"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-accordion.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-accordion.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "If present, sets a disabled state on the accordion, indicating that no part of it can be manipulated by user action."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "disallowMultiple": {
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
          "text": "*****\ntoggles disallow muiltiple - default false\n********"
        },
        "attribute": "disallow-multiple",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "ruxexpanded",
        "method": "updatedExpanded",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
