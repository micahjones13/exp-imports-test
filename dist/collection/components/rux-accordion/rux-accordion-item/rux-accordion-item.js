import { h, Host, } from '@stencil/core';
import { hasSlot } from '../../../utils/utils';
/**
 * @slot (default) - The expanded content
 * @slot label - Summary title
 * @slot prefix - Area to the left of label
 * @part container - The accordion item
 * @part label-wrapper - The element wrapping prefix, indicator and the label
 * @part label - The label
 * @part prefix - The wrapper for the prefix slot
 * @part indicator - The opened/closed indicator
 */
export class RuxAccordionItem {
  constructor() {
    this.hasPrefix = false;
    /**
     * If present, sets the initial state on this accordion item to open, displaying the accordion content.
     */
    this.expanded = false;
    /**
     * If present, sets a disabled state on this accordion item, indicating it cannot be selected by user action.
     */
    this.disabled = false;
  }
  updateExpanded() {
    this.expanded ? this.ruxExpanded.emit() : this.ruxCollapsed.emit();
  }
  _clickHandler(e) {
    //if the rux-accordion-item has the disabled attribute, it cannot be manipulated
    if (this.disabled) {
      e.preventDefault();
      return;
    }
    this.expanded = !this.expanded;
  }
  _handleSlotChange() {
    this.hasPrefix = hasSlot(this.el, 'prefix');
  }
  connectedCallback() {
    this._clickHandler = this._clickHandler.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  render() {
    const { _handleSlotChange, _clickHandler, hasPrefix, expanded, disabled, } = this;
    return (h(Host, null, h("details", { part: "container", open: expanded, class: {
        'rux-accordion-item': true,
        'rux-accordion-item--disabled': disabled,
      } }, h("summary", { part: "label-wrapper", tabindex: disabled ? '-1' : undefined, onClick: _clickHandler }, h("span", { part: "prefix", class: hasPrefix ? 'prefix' : 'prefix--hidden' }, h("slot", { name: "prefix", onSlotchange: _handleSlotChange })), h("div", { part: "label", class: "rux-accordion-item--title" }, h("slot", { name: "label" })), h("span", { class: "indicator", part: "indicator" }, h("svg", { class: {
        'indicator--icon': true,
        open: expanded,
      }, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z", fill: "currentColor" })))), h("span", { class: "rux-accordion-item--content" }, h("slot", null)))));
  }
  static get is() { return "rux-accordion-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-accordion-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-accordion-item.css"]
    };
  }
  static get properties() {
    return {
      "expanded": {
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
          "text": "If present, sets the initial state on this accordion item to open, displaying the accordion content."
        },
        "attribute": "expanded",
        "reflect": true,
        "defaultValue": "false"
      },
      "disabled": {
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
          "text": "If present, sets a disabled state on this accordion item, indicating it cannot be selected by user action."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "hasPrefix": {}
    };
  }
  static get events() {
    return [{
        "method": "ruxExpanded",
        "name": "ruxexpanded",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fired when an accordion-item has expanded"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "ruxCollapsed",
        "name": "ruxcollapsed",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fired when an accordion-item has collapsed"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "expanded",
        "methodName": "updateExpanded"
      }];
  }
}
