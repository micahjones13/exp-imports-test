import { Host, h } from '@stencil/core';
// import DarkStatus from './statuses/dark-theme'
import StatusSVG from './statuses/light-theme';
/**
 * @part status - the container of the rux-status symbol
 */
export class RuxStatus {
  constructor() {
    /**
     * Sets the status symbol, valid options are critical, serious, caution, normal, standby and off
     */
    this.status = 'normal';
  }
  validateStatus(newValue) {
    const statusTypes = {
      off: true,
      standby: true,
      normal: true,
      caution: true,
      serious: true,
      critical: true,
    };
    if (!statusTypes[newValue]) {
      throw new Error(`rux-status: status of ${this.status} is not valid. Please use a valid status.`);
    }
  }
  connectedCallback() {
    if (this.status)
      this.validateStatus(this.status);
  }
  render() {
    return (h(Host, { status: this.status }, h("div", { part: "status", class: "status-wrapper", innerHTML: this.status && StatusSVG[this.status] })));
  }
  static get is() { return "rux-status"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-status.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-status.css"]
    };
  }
  static get properties() {
    return {
      "status": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Status",
          "resolved": "\"caution\" | \"critical\" | \"normal\" | \"off\" | \"serious\" | \"standby\" | undefined",
          "references": {
            "Status": {
              "location": "import",
              "path": "../../common/commonTypes.module"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Sets the status symbol, valid options are critical, serious, caution, normal, standby and off"
        },
        "attribute": "status",
        "reflect": true,
        "defaultValue": "'normal'"
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "status",
        "methodName": "validateStatus"
      }];
  }
}
