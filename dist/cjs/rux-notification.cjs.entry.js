'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');
const utils = require('./utils-b3539f54.js');

var StatusSymbol;
(function (StatusSymbol) {
  StatusSymbol["CRITICAL"] = "critical";
  StatusSymbol["SERIOUS"] = "serious";
  StatusSymbol["CAUTION"] = "caution";
  StatusSymbol["NORMAL"] = "normal";
  StatusSymbol["STANDBY"] = "standby";
  StatusSymbol["OFF"] = "off";
})(StatusSymbol || (StatusSymbol = {}));

const ruxNotificationCss = ":host{--notification-banner-color-border:var(--color-border-interactive-default);--notification-banner-color-background:var(\n      --color-background-base-default\n  );--notification-banner-border-width-left:calc(\n      var(--spacing-3) - var(--spacing-025)\n  );--notification-banner-radius-outer:var(--radius-base);--notification-banner-radius-inner:calc(var(--radius-base) / 3 * 2);--notification-banner-border-width-large:var(--spacing-1);--notification-banner-padding:0 var(--spacing-2) 0 var(--spacing-4);--notification-banner-border-width-small:var(--spacing-050);--notification-banner-border-outer-width:1px;--notifcation-banner-border-inner-width:3px;--height:var(--spacing-20)}:host([open]){display:contents}:host(:not([open])){display:none}.rux-notification-banner{display:flex;align-items:stretch;align-content:center;border-radius:var(--notification-banner-radius-outer);background:var(--notification-banner-color-border);width:100%;box-sizing:border-box;min-height:var(--height);font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--line-height-base)}.rux-notification-banner__inner{display:flex;align-items:center;align-content:center;box-sizing:border-box;width:100%;border-radius:var(--notification-banner-radius-inner);background:var(--color-background-base-default);padding:var(--notification-banner-padding);border:var(--notifcation-banner-border-inner-width) solid var(--notification-banner-color-border-inner-default);border-left-width:var(--notification-banner-border-width-left)}.rux-notification-banner__prefix:not(.hidden){display:flex;align-items:center;margin-right:var(--spacing-4)}.rux-notification-banner__status.rux-notification-banner--hasPrefixLabel{margin-left:var(--spacing-4)}.rux-notification-banner__status{margin-right:var(--spacing-4)}.rux-notification-banner__status rux-status{margin:var(--spacing-0)}.rux-notification-banner__actions{margin-left:auto;display:flex}.rux-notification-banner__close:focus-visible{border-radius:var(--focus-radius);outline:var(--focus-outline);outline-offset:var(--focus-offset)}.rux-notification-banner__close{cursor:pointer}.rux-notification-banner--large{border:1px solid var(--notification-banner-color-border-outer-default)}.rux-notification-banner--large .rux-notification-banner__inner{border-color:var(--notification-banner-color-border)}.rux-notification-banner__content{padding:2px 3px 2px 0px}.rux-notification-banner--large .rux-notification-banner__content{font-family:var(--font-heading-5-font-family);font-size:var(--font-heading-5-font-size);font-weight:var(--font-heading-5-font-weight);letter-spacing:var(--font-heading-5-letter-spacing);line-height:var(--font-heading-5-line-height)}.rux-notification-banner--small{min-height:calc(var(--spacing-12) + var(--spacing-1));border:1px solid var(--notification-banner-color-border-outer-default);--notifcation-banner-border-inner-width:1px}.rux-notification-banner--small .rux-notification-banner__inner{border-color:var(--notification-banner-color-border)}.rux-notification-banner--small .rux-notification-banner__content{font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--font-body-1-line-height)}.rux-notification-banner__content{overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis}.rux-notification-banner--critical{border-color:var(--notification-banner-color-border-outer-critical);background:var(--color-status-critical)}.rux-notification-banner--critical .rux-notification-banner__inner{border:var(--notifcation-banner-border-inner-width) solid var(--notification-banner-color-border-inner-critical);border-left-width:var(--notification-banner-border-width-left)}.rux-notification-banner--caution{border-color:var(--notification-banner-color-border-outer-caution);background:var(--color-status-caution)}.rux-notification-banner--caution .rux-notification-banner__inner{border:var(--notifcation-banner-border-inner-width) solid var(--notification-banner-color-border-inner-caution);border-left-width:var(--notification-banner-border-width-left)}.rux-notification-banner--serious{border-color:var(--notification-banner-color-border-outer-serious);background:var(--color-status-serious)}.rux-notification-banner--serious .rux-notification-banner__inner{border:var(--notifcation-banner-border-inner-width) solid var(--notification-banner-color-border-inner-serious);border-left-width:var(--notification-banner-border-width-left)}.rux-notification-banner--normal{border-color:var(--notification-banner-color-border-outer-normal);background:var(--color-status-normal)}.rux-notification-banner--normal .rux-notification-banner__inner{border:var(--notifcation-banner-border-inner-width) solid var(--notification-banner-color-border-inner-normal);border-left-width:var(--notification-banner-border-width-left)}.rux-notification-banner--standby{border-color:var(--notification-banner-color-border-outer-standby);background:var(--color-status-standby)}.rux-notification-banner--standby .rux-notification-banner__inner{border:var(--notifcation-banner-border-inner-width) solid var(--notification-banner-color-border-inner-standby);border-left-width:var(--notification-banner-border-width-left)}.rux-notification-banner--off{border-color:var(--notification-banner-color-border-outer-off);background:var(--color-status-off)}.rux-notification-banner--off .rux-notification-banner__inner{border:var(--notifcation-banner-border-inner-width) solid var(--notification-banner-color-border-inner-off);border-left-width:var(--notification-banner-border-width-left)}";

const RuxNotification = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ruxClosed = index.createEvent(this, "ruxclosed", 7);
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
    this.hasMessageSlot = utils.hasSlot(this.el);
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
    this.hasPrefixSlot = utils.hasSlot(this.el, 'prefix');
    this.hasMessageSlot = utils.hasSlot(this.el);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: {
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
      } }, index.h("div", { class: { 'rux-notification-banner__inner': true }, part: "container" }, index.h("div", { class: {
        'rux-notification-banner__prefix': true,
        hidden: !this.hasPrefixSlot,
      } }, index.h("slot", { name: "prefix", onSlotchange: this._handleSlotChange })), this.status ? (index.h("div", { class: "rux-notification-banner__status", part: "status" }, index.h("rux-status", { status: this.status }))) : null, index.h("div", { class: {
        'rux-notification-banner__content': true,
      }, part: "message" }, index.h("slot", { onSlotchange: this._handleSlotChange }), !this.hasMessageSlot && this.message ? (index.h("span", null, this.message)) : null), !this.hideClose ? (index.h("div", { class: "rux-notification-banner__actions" }, index.h("slot", { name: "actions" }, index.h("rux-icon", { role: "button", tabindex: "1", class: "rux-notification-banner__close", onClick: () => this._onClick(), onKeyDown: (e) => this._onKeyPress(e), icon: "clear", size: this.small ? '24px' : '32px', exportparts: "icon" })))) : null))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "open": ["watchHandler"],
    "closeAfter": ["watchHandler"]
  }; }
};
RuxNotification.style = ruxNotificationCss;

exports.rux_notification = RuxNotification;
