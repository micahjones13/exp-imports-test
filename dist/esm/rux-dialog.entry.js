import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from './index-a1205123.js';
import { h as hasSlot } from './utils-73490106.js';

const ruxDialogCss = ":host{display:contents}*,*::before,*::after{box-sizing:inherit}:host([hidden]){display:none}rux-button-group{margin-top:auto;margin-left:auto;align-self:flex-end}.rux-dialog__wrapper{position:fixed;top:var(--spacing-0);left:var(--spacing-0);height:100vh;width:100vw;display:flex;justify-content:center;align-items:center;z-index:1100;background-color:rgba(0, 0, 0, 0.5);animation:fadeIn 0.5s;-webkit-animation:fadeIn 0.5s;-moz-animation:fadeIn 0.5s;-o-animation:fadeIn 0.5s;-ms-animation:fadeIn 0.5s}.rux-dialog__dialog{position:relative;display:flex;flex-direction:column;justify-content:space-between;background-color:var(--color-background-surface-default);width:28rem;border:var(--spacing-0);margin:auto;padding:var(--spacing-0);user-select:none;box-shadow:var(--shadow-outer-dialog);max-height:100%}.rux-dialog__header{box-sizing:border-box;display:flex;flex-grow:var(--spacing-0);flex-shrink:var(--spacing-0);align-items:center;width:100%;padding:var(--spacing-4);background-color:var(--color-background-surface-header);color:var(--color-text-primary);user-select:none;font-family:var(--font-heading-2-font-family);font-size:var(--font-heading-2-font-size);line-height:var(--font-heading-2-line-height);font-weight:var(--font-heading-2-font-weight);letter-spacing:var(--font-heading-2-letter-spacing)}.rux-dialog__header ::slotted(h6),.rux-dialog__header ::slotted(h5),.rux-dialog__header ::slotted(h4),.rux-dialog__header ::slotted(h3),.rux-dialog__header ::slotted(h2),.rux-dialog__header ::slotted(h1){margin-block-start:var(--spacing-0);margin-block-end:var(--spacing-0)}.rux-dialog__content{display:flex;flex-direction:column;flex-grow:1;color:var(--color-text-primary);overflow:auto;scrollbar-color:var(--color-border-interactive-muted, #2b659b) var(--color-background-surface-default, #1b2d3e);}.rux-dialog__content::-webkit-scrollbar{width:var(--spacing-4);height:var(--spacing-4);background-color:transparent}.rux-dialog__content::-webkit-scrollbar-thumb{background-color:var(--color-border-interactive-muted, #2b659b);border-radius:8px;border:3px solid transparent;background-clip:padding-box}.rux-dialog__content::-webkit-scrollbar-thumb:vertical{border-left-width:var(--border-width-lg)}.rux-dialog__content::-webkit-scrollbar-thumb:horizontal{border-top-width:var(--border-width-lg)}.rux-dialog__content::-webkit-scrollbar-thumb:active,.rux-dialog__content::-webkit-scrollbar-thumb:hover{background-color:var(--color-background-interactive-default, #3a81bf)}.rux-dialog__content::-webkit-scrollbar-track,.rux-dialog__content::-webkit-scrollbar-corner{background-color:var(--color-background-surface-default);box-shadow:var(--scrollbar-shadow-inner-vertical)}.rux-dialog__content::-webkit-scrollbar-track:vertical{box-shadow:var(--scrollbar-shadow-inner-vertical)}.rux-dialog__content::-webkit-scrollbar-track:horizontal{box-shadow:var(--scrollbar-shadow-inner-vertical)}.rux-dialog__footer{display:flex;flex-direction:column;flex-grow:1;padding:var(--spacing-4);color:var(--color-text-primary)}.rux-dialog__message{padding:var(--spacing-4) var(--spacing-4) var(--spacing-1) var(--spacing-4);font-size:var(--font-body-1-font-size);line-height:var(--font-body-1-line-height);text-align:left}.rux-dialog .rux-button{box-shadow:none !important}.rux-dialog__header.hidden{display:none}.rux-dialog__message.hidden{display:none}rux-icon{margin-right:var(--spacing-3)}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-ms-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}";

const RuxDialog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxDialogOpened = createEvent(this, "ruxdialogopened", 7);
    this.ruxDialogClosed = createEvent(this, "ruxdialogclosed", 7);
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
  static get delegatesFocus() { return true; }
  get element() { return getElement(this); }
  static get watchers() { return {
    "open": ["handleOpen"]
  }; }
};
RuxDialog.style = ruxDialogCss;

export { RuxDialog as rux_dialog };
