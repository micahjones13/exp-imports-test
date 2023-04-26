import { Host, h } from '@stencil/core';
import { hasSlot } from '../../utils/utils';
/**
 * @slot (default) - The card's content
 * @slot header - The card's header
 * @part header - The card's outside header element
 * @part body - The card's outside body element
 * @part footer - The card's outside footer element
 *
 */
export class RuxCard {
  constructor() {
    this.activeSlots = {
      header: false,
      footer: false,
    };
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  _handleSlotChange(slotName) {
    const show = hasSlot(this.el, slotName);
    this.activeSlots = Object.assign(Object.assign({}, this.activeSlots), { [slotName]: show });
  }
  render() {
    return (h(Host, null, h("div", { class: "rux-card" }, h("div", { class: {
        'rux-card__header': true,
        hidden: !this.activeSlots.header,
      }, part: "header" }, h("slot", { name: "header", onSlotchange: () => this._handleSlotChange('header') })), h("div", { class: "rux-card__body", part: "body" }, h("slot", null)), h("div", { class: {
        'rux-card__footer': true,
        hidden: !this.activeSlots.footer,
      }, part: "footer" }, h("slot", { name: "footer", onSlotchange: () => this._handleSlotChange('footer') })))));
  }
  static get is() { return "rux-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-card.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-card.css"]
    };
  }
  static get states() {
    return {
      "activeSlots": {}
    };
  }
  static get elementRef() { return "el"; }
}
