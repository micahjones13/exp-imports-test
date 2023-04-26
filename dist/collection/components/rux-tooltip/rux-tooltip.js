import { Host, h, Fragment, } from '@stencil/core';
import { computePosition, offset, flip, autoUpdate, autoPlacement, } from '@floating-ui/dom';
import { hasSlot } from '../../utils/utils';
/**
 * @slot (default) - The trigger for the rux-tooltip
 * @part container - The container of the rux-tooltip text
 * @part trigger-container - the container of the tooltip trigger
 */
export class RuxTooltip {
  constructor() {
    this.hasTriggerSlot = false;
    this.delegatedFocus = false; //Keeps track of whether the element in trigger slot is focusable
    /**
     *  The tooltip's content.
     */
    this.message = '';
    /**
     *  Whether or not the tooltip is open
     */
    this.open = false;
    /**
     *  How long it takes the tooltip to appear in milliseconds, default = 800, Overrides the css custom property --delay.
     */
    this.delay = 800;
    /**
     *  Pixel offset from trigger, default = 8
     */
    this.offset = 8;
    /**
     * The placement of the tooltip relative to it's slotted trigger element. Defaults to auto.
     */
    this.placement = 'auto';
    /**
     * Turns disableAutoUpdate on or off which makes the tooltip move to stay in view based on scroll. Defaults to false.
     */
    this.disableAutoUpdate = false;
    /**
     * The position strategy of the tooltip, either absolute or fixed.
     */
    this.strategy = 'absolute';
  }
  handleDelay() {
    //check to see if the delay prop can be converted to a number. If not, revert to default time.
    !isNaN(Number(this.delay)) &&
      this.el.style.setProperty('--delay', `${Number(this.delay)}ms`);
  }
  handleOpen() {
    if (this.open) {
      this.content.style.display = 'block';
      this._startPositioner();
      this.ruxTooltipOpened.emit();
    }
    else {
      this.content.style.display = '';
      this._stopPositioner();
      this.ruxTooltipClosed.emit();
    }
  }
  /**
   * Opens the tooltip and returns true.
   */
  async show() {
    if (this.open) {
      return this.open;
    }
    else
      this.open = true;
    return this.open;
  }
  /**
   * Closes the tooltip and returns false.
   */
  async hide() {
    if (!this.open) {
      return !this.open;
    }
    else
      this.open = false;
    return !this.open;
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this._handleTooltipShow = this._handleTooltipShow.bind(this);
    this._handleTooltipHide = this._handleTooltipHide.bind(this);
  }
  disconnectedCallback() {
    this.el.shadowRoot.removeEventListener('slotchange', this._handleSlotChange);
  }
  componentWillLoad() {
    this._handleSlotChange();
  }
  componentDidLoad() {
    this.handleDelay();
    this.handleOpen();
  }
  _position() {
    if (!this.open || !this.triggerSlot || !this.content) {
      return;
    }
    const placementCheck = () => {
      if (!this.disableAutoUpdate) {
        return [
          offset(this.offset),
          this.placement === 'auto'
            ? autoPlacement({ alignment: 'start' })
            : flip(),
        ];
      }
      else if (this.placement === 'auto') {
        return [
          offset(this.offset),
          autoPlacement({ alignment: 'start' }),
        ];
      }
      else {
        return [offset(this.offset)];
      }
    };
    computePosition(this.triggerSlot, this.content, {
      //@ts-ignore
      placement: this.placement,
      strategy: this.strategy,
      middleware: placementCheck(),
    }).then(({ x, y }) => {
      Object.assign(this.content.style, {
        left: `${x}px`,
        top: `${y}px`,
        position: `${this.strategy}`,
      });
    });
  }
  _startPositioner() {
    this._stopPositioner();
    if (this.open) {
      this._position();
      if (!this.disableAutoUpdate) {
        this._positionerCleanup = autoUpdate(this.triggerSlot, this.content, this._position.bind(this));
      }
    }
  }
  _stopPositioner() {
    if (this._positionerCleanup) {
      this._positionerCleanup();
      this._positionerCleanup = undefined;
    }
  }
  get triggerSlot() {
    var _a, _b;
    if (((_a = this.trigger) === null || _a === void 0 ? void 0 : _a.querySelector('slot').assignedElements({ flatten: true })[0]) !== undefined) {
      return (_b = this.trigger) === null || _b === void 0 ? void 0 : _b.querySelector('slot').assignedElements({ flatten: true })[0];
    }
    return this.trigger;
  }
  get hasTrigger() {
    return this.trigger ? true : this.hasTriggerSlot;
  }
  _handleSlotChange() {
    this.hasTriggerSlot = hasSlot(this.el);
  }
  _handleTooltipShow() {
    if (this.open)
      return;
    this.open = true;
  }
  _handleTooltipHide() {
    if (!this.open)
      return;
    this.open = false;
  }
  render() {
    const { _handleSlotChange, _handleTooltipShow, _handleTooltipHide, } = this;
    return (h(Host, null, h("span", { onMouseEnter: _handleTooltipShow, onMouseLeave: _handleTooltipHide, onFocusin: _handleTooltipShow, onFocusout: _handleTooltipHide }, h("span", { class: "rux-tooltip__trigger", part: "trigger-container", ref: (el) => (this.trigger = el), "aria-describedby": "tooltip" }, h("slot", { onSlotchange: _handleSlotChange })), h(Fragment, null, "\u200B"), h("span", { "aria-hidden": this.open ? 'false' : 'true', class: {
        tooltip: true,
        hidden: !this.open,
      }, id: "tooltip", role: "tooltip", part: "container", ref: (el) => (this.content = el) }, this.message))));
  }
  static get is() { return "rux-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-tooltip.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-tooltip.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "The tooltip's content."
        },
        "attribute": "message",
        "reflect": true,
        "defaultValue": "''"
      },
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
          "text": "Whether or not the tooltip is open"
        },
        "attribute": "open",
        "reflect": true,
        "defaultValue": "false"
      },
      "delay": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "How long it takes the tooltip to appear in milliseconds, default = 800, Overrides the css custom property --delay."
        },
        "attribute": "delay",
        "reflect": true,
        "defaultValue": "800"
      },
      "offset": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Pixel offset from trigger, default = 8"
        },
        "attribute": "offset",
        "reflect": false,
        "defaultValue": "8"
      },
      "placement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ExtendedPlacement",
          "resolved": "\"auto\" | \"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
          "references": {
            "ExtendedPlacement": {
              "location": "import",
              "path": "../../common/commonTypes.module"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The placement of the tooltip relative to it's slotted trigger element. Defaults to auto."
        },
        "attribute": "placement",
        "reflect": false,
        "defaultValue": "'auto'"
      },
      "disableAutoUpdate": {
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
          "text": "Turns disableAutoUpdate on or off which makes the tooltip move to stay in view based on scroll. Defaults to false."
        },
        "attribute": "disable-auto-update",
        "reflect": true,
        "defaultValue": "false"
      },
      "strategy": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'absolute' | 'fixed'",
          "resolved": "\"absolute\" | \"fixed\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The position strategy of the tooltip, either absolute or fixed."
        },
        "attribute": "strategy",
        "reflect": false,
        "defaultValue": "'absolute'"
      }
    };
  }
  static get states() {
    return {
      "currentSlotted": {},
      "hasTriggerSlot": {},
      "delegatedFocus": {}
    };
  }
  static get events() {
    return [{
        "method": "ruxTooltipOpened",
        "name": "ruxtooltipopened",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emits when the tooltip has opened"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "ruxTooltipClosed",
        "name": "ruxtooltipclosed",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emits when the tooltip has closed."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "show": {
        "complexType": {
          "signature": "() => Promise<true>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<true>"
        },
        "docs": {
          "text": "Opens the tooltip and returns true.",
          "tags": []
        }
      },
      "hide": {
        "complexType": {
          "signature": "() => Promise<boolean>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<boolean>"
        },
        "docs": {
          "text": "Closes the tooltip and returns false.",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "delay",
        "methodName": "handleDelay"
      }, {
        "propName": "open",
        "methodName": "handleOpen"
      }];
  }
}
