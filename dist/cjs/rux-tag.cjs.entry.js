'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');
const utils = require('./utils-b3539f54.js');

const ruxTagCss = ":host{display:flex;justify-content:center;align-items:center;border-radius:var(--radius-base);font-size:var(--font-body-2-bold-font-size);font-weight:var(--font-body-2-bold-font-weight);line-height:var(--font-body-2-bold-line-height);font-family:var(--font-body-2-bold-font-family);letter-spacing:var(--font-body-2-bold-letter-spacing);padding:0.25rem 0.625rem;text-align:center;color:var(--color-palette-neutral-000)}:host(.is-undefined){height:1.5rem;width:3.75rem;border:1px solid var(--status-symbol-color-fill-off);background:var(--color-palette-grey-800);box-shadow:var(--tag-shadow-inner-unknown)}:host([status=pass]){height:1.5rem;width:3.75rem;border:1px solid var(--status-symbol-color-fill-normal-on-dark);background:var(--color-palette-green-900);box-shadow:var(--tag-shadow-inner-pass)}:host([status=fail]){height:1.5rem;width:3.75rem;border:1px solid var(--status-symbol-color-fill-critical-on-dark);background:var(--color-palette-red-900);box-shadow:var(--tag-shadow-inner-fail)}:host([status=unknown]){height:1.5rem;width:3.75rem;border:1px solid var(--status-symbol-color-fill-off-on-dark);background:var(--color-palette-grey-800);box-shadow:var(--tag-shadow-inner-unknown)}";

const statusMap = {
  unknown: 'UNK',
  pass: 'PASS',
  fail: 'FAIL',
};
const RuxTag = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     *  Used to display a status of pass, fail, or unknown. If no status is provided or the provided status is not an accepted status type, the default is unknown.
     */
    this.status = 'unknown';
    this.hasSlot = false;
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this.hasSlot = utils.hasSlot(this.el);
  }
  _handleSlotChange() {
    this.hasSlot = utils.hasSlot(this.el);
  }
  _getValidStatus() {
    if (this.status) {
      //if it is a valid status, return it
      if (statusMap[this.status]) {
        return statusMap[this.status];
      }
      //if it's not, return the default status
      else {
        return statusMap['unknown'];
      }
    }
  }
  render() {
    return (index.h(index.Host, { class: {
        'is-undefined': statusMap[this.status] === undefined,
      } }, index.h("div", { part: "container" }, index.h("slot", { onSlotchange: this._handleSlotChange }), !this.hasSlot ? this._getValidStatus() : null)));
  }
  get el() { return index.getElement(this); }
};
RuxTag.style = ruxTagCss;

exports.rux_tag = RuxTag;
