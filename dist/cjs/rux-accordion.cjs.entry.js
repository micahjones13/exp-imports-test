'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const ruxAccordionCss = ":host{display:block}:host([disabled]){cursor:not-allowed;opacity:var(--opacity-disabled)}:host([disabled]) ::slotted(*){pointer-events:none}";

const RuxAccordion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * If present, sets a disabled state on the accordion, indicating that no part of it can be manipulated by user action.
     */
    this.disabled = false;
    /*******
     * toggles disallow muiltiple - default false
     * *********/
    this.disallowMultiple = false;
  }
  updatedExpanded(event) {
    //if rux-accordion has the attribute to disallow-multiple then make sure only one rux-accordion-item is open at a time
    if (this.disallowMultiple === true) {
      event.preventDefault();
      const items = this.el.querySelectorAll('rux-accordion-item'); //get all rux-accordion-items
      const isExpanded = this.el.hasAttribute('expanded'); // state of the item when accessed
      items.forEach((item) => {
        item.removeAttribute('expanded');
      });
      //only add the expanded attribute if it was not there when clicked. Else, close the item.
      !isExpanded && this.el.setAttribute('expanded', '');
    }
  }
  render() {
    return (index.h(index.Host, { tabindex: this.disabled ? '-1' : null }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
RuxAccordion.style = ruxAccordionCss;

exports.rux_accordion = RuxAccordion;
