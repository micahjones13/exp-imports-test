/* eslint react/jsx-no-bind: 0 */ // --> OFF
import { Host, h, } from '@stencil/core';
import { hasSlot } from '../../utils/utils';
import { StatusSymbol } from '../../common/commonTypes.module';
/**
 * @part icon - the notification's close icon
 * @part message - the notification's message
 * @part status - the notification's status symbol
 * @part container - the notification's container element
 *
 * @slot prefix - an optional left side content area
 * @slot (default) - the notification's message
 * @slot actions - used for display actions like close icons or buttons
 */
export class RuxNotification {
  constructor() {
    this.hasPrefixSlot = false;
    this.hasMessageSlot = false;
    /**
     *  Set to true to display the Banner and begin countdown to close (if a close-after Number value is provided).
     */
    this.open = false;
    /**
     *  Message for the notification banner.
     */
    this.message = '';
    /**
     * Changes the size of the banner to a small variant.
     */
    this.small = false;
    /**
     * Prevents the user from dismissing the notification. Hides the `actions` slot.
     */
    this.hideClose = false;
    this._timeoutRef = null;
  }
  watchHandler() {
    this._updated();
    if (!this.open) {
      this.ruxClosed.emit();
    }
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this._updated();
    this.hasMessageSlot = hasSlot(this.el);
  }
  _updated() {
    if (this._closeAfter && this.open) {
      this._timeoutRef = window.setTimeout(() => {
        this.open = false;
      }, this._closeAfter);
    }
  }
  _onClick() {
    if (this._timeoutRef) {
      clearTimeout(this._timeoutRef);
    }
    this.open = false;
  }
  _onKeyPress(e) {
    if (e.key === 'Enter') {
      this._onClick();
    }
  }
  get _closeAfter() {
    //* as long as it's less than 1000, they put in seconds. Convert that here.
    if (this.closeAfter && this.closeAfter <= 999) {
      //it's in seconds
      this.closeAfter *= 1000; // change into ms
    }
    if ((this.closeAfter && this.closeAfter > 10000) ||
      (this.closeAfter && this.closeAfter < 2000)) {
      // if this number is larger than 10s or smaller than 2s, enforce minimum 2s delay
      this.closeAfter = 2000;
    }
    return this.closeAfter;
  }
  _handleSlotChange() {
    this.hasPrefixSlot = hasSlot(this.el, 'prefix');
    this.hasMessageSlot = hasSlot(this.el);
  }
  render() {
    return (h(Host, null, h("div", { class: {
        'rux-notification-banner': true,
        'rux-notification-banner--open': this.open,
        'rux-notification-banner--small': this.small,
        'rux-notification-banner--large': !this.small,
        'rux-notification-banner--caution': this.status === StatusSymbol.CAUTION,
        'rux-notification-banner--critical': this.status === StatusSymbol.CRITICAL,
        'rux-notification-banner--serious': this.status === StatusSymbol.SERIOUS,
        'rux-notification-banner--standby': this.status === StatusSymbol.STANDBY,
        'rux-notification-banner--off': this.status === StatusSymbol.OFF,
        'rux-notification-banner--normal': this.status === StatusSymbol.NORMAL,
        'rux-notification-banner--hasPrefixSlot': this
          .hasPrefixSlot,
      } }, h("div", { class: { 'rux-notification-banner__inner': true }, part: "container" }, h("div", { class: {
        'rux-notification-banner__prefix': true,
        hidden: !this.hasPrefixSlot,
      } }, h("slot", { name: "prefix", onSlotchange: this._handleSlotChange })), this.status ? (h("div", { class: "rux-notification-banner__status", part: "status" }, h("rux-status", { status: this.status }))) : null, h("div", { class: {
        'rux-notification-banner__content': true,
      }, part: "message" }, h("slot", { onSlotchange: this._handleSlotChange }), !this.hasMessageSlot && this.message ? (h("span", null, this.message)) : null), !this.hideClose ? (h("div", { class: "rux-notification-banner__actions" }, h("slot", { name: "actions" }, h("rux-icon", { role: "button", tabindex: "1", class: "rux-notification-banner__close", onClick: () => this._onClick(), onKeyDown: (e) => this._onKeyPress(e), icon: "clear", size: this.small ? '24px' : '32px', exportparts: "icon" })))) : null))));
  }
  static get is() { return "rux-notification"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-notification.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-notification.css"]
    };
  }
  static get properties() {
    return {
      "open": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set to true to display the Banner and begin countdown to close (if a close-after Number value is provided)."
        },
        "attribute": "open",
        "reflect": true,
        "defaultValue": "false"
      },
      "message": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Message for the notification banner."
        },
        "attribute": "message",
        "reflect": false,
        "defaultValue": "''"
      },
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
          "text": "The background color. Possible values include 'off', 'standby', 'normal', 'caution', 'serious' and 'critical'. See [Astro UXDS Status System](https://astrouxds.com/patterns/status-system/)."
        },
        "attribute": "status",
        "reflect": true
      },
      "closeAfter": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If provided, the banner will automatically close after this amount of time. Accepts value either in milliseconds or seconds (which will be converted to milliseconds internally), between `2000` and `10000`, or `2` and `10`, respectively. Any number provided outside of the `2000`-`10000` range will be ignored in favor of the default 2000ms delay. <br>If `closeAfter` is not passed or if it is given an undefined or `null` value, the banner will stay open until the user closes it."
        },
        "attribute": "close-after",
        "reflect": false
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
          "text": "Changes the size of the banner to a small variant."
        },
        "attribute": "small",
        "reflect": false,
        "defaultValue": "false"
      },
      "hideClose": {
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
          "text": "Prevents the user from dismissing the notification. Hides the `actions` slot."
        },
        "attribute": "hide-close",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "hasPrefixSlot": {},
      "hasMessageSlot": {}
    };
  }
  static get events() {
    return [{
        "method": "ruxClosed",
        "name": "ruxclosed",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fires when the notification banner is closed"
        },
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "open",
        "methodName": "watchHandler"
      }, {
        "propName": "closeAfter",
        "methodName": "watchHandler"
      }];
  }
}
