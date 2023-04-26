import { h } from '@stencil/core';
/**
 * @slot (default) - Two or more RuxButton components to render in the group
 * @part container - the components container
 */
export class RuxButtonGroup {
  constructor() {
    /**
     * The horizontal alignment of buttons within the group
     */
    this.hAlign = 'left';
  }
  render() {
    const { hAlign } = this;
    return (h("div", { class: {
        'rux-button-group': true,
        'rux-button-group--left': hAlign === 'left',
        'rux-button-group--right': hAlign === 'right',
        'rux-button-group--center': hAlign === 'center',
      }, part: "container" }, h("slot", null)));
  }
  static get is() { return "rux-button-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-button-group.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-button-group.css"]
    };
  }
  static get properties() {
    return {
      "hAlign": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'left' | 'center' | 'right'",
          "resolved": "\"center\" | \"left\" | \"right\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The horizontal alignment of buttons within the group"
        },
        "attribute": "h-align",
        "reflect": false,
        "defaultValue": "'left'"
      }
    };
  }
}
