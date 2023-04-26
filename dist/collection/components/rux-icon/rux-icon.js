import { Host, h } from '@stencil/core';
/**
 * @part icon - the icon in rux-icon
 */
export class RuxIcon {
  constructor() {
    // eslint-disable-next-line
    this.svg = '';
    /**
     * The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em')
     */
    this.size = 'normal';
  }
  render() {
    const SVG = `rux-icon-${this.icon}`;
    return (h(Host, null, h(SVG, { class: "icon", part: "icon", size: this.size })));
  }
  static get is() { return "rux-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-icon.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-icon.css"]
    };
  }
  static get properties() {
    return {
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| 'extra-small'\n        | 'small'\n        | 'normal'\n        | 'large'\n        | 'auto'\n        | string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em')"
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "'normal'"
      },
      "icon": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The icon name"
        },
        "attribute": "icon",
        "reflect": false
      }
    };
  }
}
