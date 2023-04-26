import { Host, h, } from '@stencil/core';
import { computePosition, arrow, offset, flip, autoUpdate, autoPlacement, } from '@floating-ui/dom';
/**
 * @slot (default) - The contents for rux-pop-up
 * @slot trigger - The trigger element for rux-pop-up
 *
 * @part container - the container of rux-pop-up
 * @part trigger-container - the container of the pop-up trigger
 * @part popup-content - the content that is shown when rux-pop-up is opened
 * @part arrow - the arrow pointing to the trigger of rux-pop-up
 */
export class RuxPopUp {
  constructor() {
    this._assignedOutsideClickEvent = false;
    /**
     * Determines if the pop up is open or closed
     */
    this.open = false;
    /**
     * The placement of the pop up relative to it's slotted trigger element. Defaults to auto.
     */
    this.placement = 'auto';
    /**
     * Turns autoUpdate on or off which makes the pop-up move to stay in view based on scroll. Defaults to false.
     */
    this.disableAutoUpdate = false;
    /**
     * watches for trigger movements and replace the popup if movement is detected.
     */
    this.enableAnimationFrame = false;
    /**
     * The position strategy of the popup, either absolute or fixed.
     */
    this.strategy = 'absolute';
    /**
     * When provided, will close the pop-up when a single selection is made.
     */
    this.closeOnSelect = false;
  }
  handleOpen() {
    if (this.open) {
      this.content.style.display = 'block';
      this._startPositioner();
      this.ruxPopUpOpened.emit();
      if (!this._assignedOutsideClickEvent) {
        window.addEventListener('mousedown', this._handleOutsideClick);
        this._assignedOutsideClickEvent = true;
      }
    }
    else {
      this.content.style.display = '';
      this._stopPositioner();
      this.ruxPopUpClosed.emit();
      if (this._assignedOutsideClickEvent) {
        window.removeEventListener('mousedown', this._handleOutsideClick);
        this._assignedOutsideClickEvent = false;
      }
    }
  }
  /**
   * Opens the pop up and returns true.
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
   * Closes the pop up and returns false.
   */
  async hide() {
    if (!this.open) {
      return this.open;
    }
    else
      this.open = false;
    return this.open;
  }
  connectedCallback() {
    this._handleTriggerClick = this._handleTriggerClick.bind(this);
    this._handleTriggerKeyPress = this._handleTriggerKeyPress.bind(this);
    this._handleOutsideClick = this._handleOutsideClick.bind(this);
    this._setTriggerTabIndex = this._setTriggerTabIndex.bind(this);
    if (this.open && !this._assignedOutsideClickEvent) {
      window.addEventListener('mousedown', this._handleOutsideClick);
      this._assignedOutsideClickEvent = true;
    }
  }
  componentWillLoad() {
    this._setTriggerTabIndex();
  }
  componentDidRender() {
    if (this.open) {
      this._startPositioner();
    }
  }
  async _handleTriggerClick(event) {
    //excludes synthetic keyboard events such as Enter on a button behaving as a click
    if (event.detail > 0) {
      this.open = !this.open;
    }
  }
  //part of focus + accessible keyboard events
  async _handleTriggerKeyPress(event) {
    if (event.key === 'Enter') {
      this.open = !this.open;
    }
  }
  _position() {
    if (!this.open || !this.triggerSlot || !this.content) {
      return;
    }
    const placementCheck = () => {
      // disable auto update = false, placement is anything
      if (!this.disableAutoUpdate) {
        return [
          offset(12),
          this.placement === 'auto'
            ? autoPlacement({ alignment: 'start' })
            : flip(),
          arrow({ element: this.arrowEl }),
        ];
      }
      // disableAutoUpdate = true, placement=auto
      else if (this.placement === 'auto') {
        /* we need to set a starting placement for the user because 'auto' is only understood by floating-ui as something means,
    'pick whatever side fits best', and in this case we don't want any automatic setting of placements */
        this.placement = 'top';
        return [offset(12), arrow({ element: this.arrowEl })];
        // disableAutoUpdate = true, placement != auto
      }
      else {
        return [offset(12), arrow({ element: this.arrowEl })];
      }
    };
    computePosition(this.triggerSlot, this.content, {
      //@ts-ignore
      placement: this.placement,
      strategy: this.strategy,
      middleware: placementCheck(),
    }).then(({ x, y, placement, middlewareData }) => {
      Object.assign(this.content.style, {
        left: `${x}px`,
        top: `${y}px`,
        position: `${this.strategy}`,
      });
      //@ts-ignore
      const { x: arrowX, y: arrowY } = middlewareData.arrow;
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[placement.split('-')[0]];
      Object.assign(this.arrowEl.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        //@ts-ignore
        [staticSide]: '-6px',
      });
    });
    this._setArrowPosition();
  }
  //set a tabindex if the trigger element does not have one, necessary for items that can not natively receive focus
  _setTriggerTabIndex() {
    const triggerEl = this.el.querySelector(`[slot='trigger']`);
    triggerEl.hasAttribute('tabindex')
      ? null
      : triggerEl.setAttribute('tabindex', '0');
  }
  _startPositioner() {
    this._stopPositioner();
    if (this.open) {
      this._position();
      this._positionerCleanup = autoUpdate(this.triggerSlot, this.content, this._position.bind(this), { animationFrame: this.enableAnimationFrame });
    }
  }
  async _setArrowPosition() {
    const arrowPos = await this._determineArrowPosition();
    if (this.arrowPosition === arrowPos) {
      return;
    }
    else
      this.arrowPosition = arrowPos;
  }
  async _determineArrowPosition() {
    if (!this.open) {
      return;
    }
    const triggerElRect = await this.getTriggerRect();
    const arrowDivRect = await this.getArrowRect();
    if (triggerElRect.bottom > arrowDivRect.bottom &&
      triggerElRect.top < arrowDivRect.top) {
      if (triggerElRect.right > arrowDivRect.right) {
        return 'left';
      }
      else {
        return 'right';
      }
    }
    else {
      if (triggerElRect.bottom > arrowDivRect.bottom) {
        return 'top';
      }
      else {
        return 'bottom';
      }
    }
  }
  async getTriggerRect() {
    return this.triggerSlot.getBoundingClientRect();
  }
  async getArrowRect() {
    var _a;
    return (_a = this.arrowEl) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
  }
  _stopPositioner() {
    if (this._positionerCleanup) {
      this._positionerCleanup();
      this._positionerCleanup = undefined;
    }
  }
  _handleOutsideClick(e) {
    const menuClick = e.composedPath().includes(this.contentSlot);
    const triggerClick = e.composedPath().includes(this.triggerSlot);
    const popUpClick = e.composedPath().includes(this.el);
    if (!menuClick && !triggerClick && !popUpClick) {
      this.open = false;
    }
  }
  handleSelection() {
    if (this.closeOnSelect) {
      this.open = false;
    }
  }
  get contentSlot() {
    var _a;
    return (_a = this.content) === null || _a === void 0 ? void 0 : _a.querySelector('slot').assignedElements({ flatten: true })[0];
  }
  get triggerSlot() {
    var _a;
    return (_a = this.trigger) === null || _a === void 0 ? void 0 : _a.querySelector('slot').assignedElements({ flatten: true })[0];
  }
  get hasMenu() {
    var _a;
    //@ts-ignore
    return !!((_a = this.content) === null || _a === void 0 ? void 0 : _a.querySelector('slot').assignedElements({ flatten: true }).filter((el) => el.tagName.toLowerCase() === 'rux-menu')[0]);
  }
  render() {
    return (h(Host, null, h("div", { class: "rux-popup", part: "container" }, h("div", { onClick: this._handleTriggerClick, onKeyPress: this._handleTriggerKeyPress, class: "rux-popup__trigger", ref: (el) => (this.trigger = el), part: "trigger-container" }, h("slot", { name: "trigger" })), h("div", { class: {
        'rux-popup__arrow-left': this.arrowPosition === 'left',
        'rux-popup__arrow-top': this.arrowPosition === 'top',
        'rux-popup__arrow-right': this.arrowPosition === 'right',
        'rux-popup__arrow-bottom': this.arrowPosition === 'bottom',
        'rux-popup__content': true,
        'rux-popup__content--menu': this.hasMenu,
        hidden: this.open === false,
      }, "aria-hidden": this.open ? 'false' : 'true', part: "popup-content", ref: (el) => (this.content = el) }, h("div", { class: "rux-popup-arrow", ref: (el) => (this.arrowEl = el), part: "arrow" }), h("slot", null)))));
  }
  static get is() { return "rux-pop-up"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-pop-up.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-pop-up.css"]
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
          "text": "Determines if the pop up is open or closed"
        },
        "attribute": "open",
        "reflect": true,
        "defaultValue": "false"
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
          "text": "The placement of the pop up relative to it's slotted trigger element. Defaults to auto."
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
          "text": "Turns autoUpdate on or off which makes the pop-up move to stay in view based on scroll. Defaults to false."
        },
        "attribute": "disable-auto-update",
        "reflect": true,
        "defaultValue": "false"
      },
      "enableAnimationFrame": {
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
          "text": "watches for trigger movements and replace the popup if movement is detected."
        },
        "attribute": "enable-animation-frame",
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
          "text": "The position strategy of the popup, either absolute or fixed."
        },
        "attribute": "strategy",
        "reflect": false,
        "defaultValue": "'absolute'"
      },
      "closeOnSelect": {
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
          "text": "When provided, will close the pop-up when a single selection is made."
        },
        "attribute": "close-on-select",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "arrowPosition": {}
    };
  }
  static get events() {
    return [{
        "method": "ruxPopUpOpened",
        "name": "ruxpopupopened",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emits when the pop up has opened"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "ruxPopUpClosed",
        "name": "ruxpopupclosed",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emits when the pop up has closed."
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
          "text": "Opens the pop up and returns true.",
          "tags": []
        }
      },
      "hide": {
        "complexType": {
          "signature": "() => Promise<false>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<false>"
        },
        "docs": {
          "text": "Closes the pop up and returns false.",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "open",
        "methodName": "handleOpen"
      }];
  }
  static get listeners() {
    return [{
        "name": "ruxmenuselected",
        "method": "handleSelection",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
