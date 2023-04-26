import { h, Host, Fragment, } from '@stencil/core';
import { hasSlot } from '../../utils/utils';
/**
 * @part container - the dialog container
 * @part dialog - the native dialog element
 * @part header - the header of the dialog
 * @part message - the message of the dialog
 * @part confirm-button - the dialog's confirm button
 * @part deny-button - the dialog's deny button
 * @part footer - the footer of the dialog
 *
 * @slot header - the header of the dialog
 * @slot (default) - the dialog's message or content
 * @slot footer - the footer of the dialog
 */
export class RuxDialog {
  constructor() {
    /**
     * Shows and hides dialog
     */
    this.open = false;
    /**
     * Text for confirmation button
     */
    this.confirmText = 'Confirm';
    /**
     * Text for close button
     */
    this.denyText = 'Cancel';
    /**
     * Allows dialog to close when clicking off it
     */
    this.clickToClose = false;
    this.hasFooter = hasSlot(this.element, 'footer');
    this.hasHeader = hasSlot(this.element, 'header');
    this.hasMessage = hasSlot(this.element);
    this._userInput = null;
  }
  // confirm dialog if Enter key is pressed
  handleKeyDown(ev) {
    var _a;
    // prevent this from running if the slots version is being used
    if (this.open && !this.hasFooter) {
      const btns = this.element.shadowRoot.querySelectorAll('rux-button');
      if (ev.key === 'Enter') {
        //If enter is hit but the cancel/deny button is focused, we want to click that instead.
        let activeEl = (_a = this.element.shadowRoot) === null || _a === void 0 ? void 0 : _a.activeElement;
        if (activeEl && activeEl === btns[0]) {
          this._userInput = false;
          btns[0].click();
        }
        else {
          const button = this._getDefaultButton();
          if (button) {
            this._userInput = true;
            button.click();
          }
        }
      }
      if (ev.key === 'Escape') {
        this._userInput = false;
        btns[0].click();
      }
    }
  }
  // close dialog if click happens outside of dialog
  handleClick(ev) {
    if (this.clickToClose) {
      const wrapper = this._getWrapper();
      if (ev.composedPath()[0] === wrapper) {
        this.open = false;
      }
    }
  }
  handleOpen(isOpen) {
    if (isOpen && !this.hasFooter) {
      setTimeout(() => {
        const button = this._getDefaultButton();
        if (button) {
          button.focus();
        }
      }, 0);
    }
    if (this.open) {
      setTimeout(() => {
        this.ruxDialogOpened.emit();
      }, 20);
    }
    else {
      this.ruxDialogClosed.emit(this._userInput);
    }
    this._userInput = null;
  }
  _handleDialogChoice(e) {
    // convert string value to boolean
    const target = e.currentTarget;
    const choice = target.dataset.value === 'true';
    this._userInput = choice;
    this.open = false;
  }
  _getDefaultButton() {
    var _a, _b, _c;
    const buttonSet = (_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelectorAll('rux-button:not([hidden])');
    if (buttonSet.length > 0) {
      const defaultButton = buttonSet[buttonSet.length - 1];
      const shadow = (_c = defaultButton.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('button');
      if (shadow)
        return shadow;
    }
    return null;
  }
  _getWrapper() {
    var _a, _b;
    const wrapper = (_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.rux-dialog__wrapper');
    if (wrapper) {
      return wrapper;
    }
    return null;
  }
  connectedCallback() {
    this._handleDialogChoice = this._handleDialogChoice.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this.hasMessage = hasSlot(this.element);
  }
  componentDidRender() {
    const button = this._getDefaultButton();
    button && button.focus();
  }
  _handleSlotChange() {
    this.hasHeader = hasSlot(this.element, 'header');
    this.hasMessage = hasSlot(this.element);
    this.hasFooter = hasSlot(this.element, 'footer');
  }
  render() {
    const { open, message, header, confirmText, denyText, _handleDialogChoice, } = this;
    return (open && (h(Host, null, h("div", { part: "container", class: "rux-dialog__wrapper" }, h("dialog", { class: "rux-dialog__dialog", role: "dialog", part: "dialog" }, h("header", { class: {
        hidden: !this.hasHeader && header === undefined,
        'rux-dialog__header': true,
      }, part: "header" }, h("slot", { name: "header", onSlotchange: this._handleSlotChange }, header)), h("div", { class: "rux-dialog__content" }, h("div", { class: {
        hidden: !this.hasMessage &&
          message === undefined,
        'rux-dialog__message': true,
      }, part: "message" }, h("slot", { onSlotchange: this._handleSlotChange }), !this.hasMessage && message ? (h("div", null, message)) : null)), h("footer", { class: {
        'rux-dialog__footer': true,
      }, part: "footer" }, this.hasFooter ? (h("slot", { name: "footer", onSlotchange: this._handleSlotChange })) : (h(Fragment, null, h("rux-button-group", { "h-align": "right" }, h("rux-button", { secondary: confirmText.length > 0, onClick: _handleDialogChoice, "data-value": "false", hidden: !denyText, tabindex: "0", exportparts: "container:deny-button", id: "rux-dialog-deny-button" }, denyText), h("rux-button", { onClick: _handleDialogChoice, hidden: !confirmText, "data-value": "true", tabindex: "1", exportparts: "container:confirm-button" }, confirmText)), h("slot", { name: "footer", onSlotchange: this._handleSlotChange })))))))));
  }
  static get is() { return "rux-dialog"; }
  static get encapsulation() { return "shadow"; }
  static get delegatesFocus() { return true; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-dialog.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-dialog.css"]
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
          "text": "Shows and hides dialog"
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
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Dialog body message"
        },
        "attribute": "message",
        "reflect": false
      },
      "header": {
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
          "text": "Dialog header title"
        },
        "attribute": "header",
        "reflect": false
      },
      "confirmText": {
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
          "text": "Text for confirmation button"
        },
        "attribute": "confirm-text",
        "reflect": false,
        "defaultValue": "'Confirm'"
      },
      "denyText": {
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
          "text": "Text for close button"
        },
        "attribute": "deny-text",
        "reflect": false,
        "defaultValue": "'Cancel'"
      },
      "clickToClose": {
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
          "text": "Allows dialog to close when clicking off it"
        },
        "attribute": "click-to-close",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "hasFooter": {},
      "hasHeader": {},
      "hasMessage": {}
    };
  }
  static get events() {
    return [{
        "method": "ruxDialogOpened",
        "name": "ruxdialogopened",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event that is fired when dialog opens"
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "ruxDialogClosed",
        "name": "ruxdialogclosed",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event that is fired when dialog closes. If dialog is closed by clicking on the default confirm or deny buttons (when no footer slot is provided), then true or false will be emitted respectively on the event.detail."
        },
        "complexType": {
          "original": "boolean | null",
          "resolved": "boolean | null",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "element"; }
  static get watchers() {
    return [{
        "propName": "open",
        "methodName": "handleOpen"
      }];
  }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "handleKeyDown",
        "target": "window",
        "capture": false,
        "passive": false
      }, {
        "name": "click",
        "method": "handleClick",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
