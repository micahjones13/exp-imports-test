import { Host, h } from '@stencil/core';
export class RuxTableRow {
  constructor() {
    /**
     * Changes the background color of the row. Can be applied to multiple rows at once.
     */
    this.selected = false;
  }
  render() {
    return (h(Host, { class: {
        'is-selected': this.selected,
      } }, h("slot", null)));
  }
  static get is() { return "rux-table-row"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-table-row.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-table-row.css"]
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
          "text": "Changes the background color of the row. Can be applied to multiple rows at once."
        },
        "attribute": "selected",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
