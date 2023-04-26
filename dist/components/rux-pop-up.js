import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as computePosition, a as autoUpdate, o as offset, b as autoPlacement, f as flip, d as arrow } from './floating-ui.dom.esm.js';

const ruxPopUpCss = ":host{display:block;width:min-content}.hidden,:host([hidden]){display:none}.hidden{display:none !important}::slotted(*[slot=trigger]){cursor:pointer}::slotted(*[slot=trigger]:focus-visible){border-radius:var(--focus-radius);outline:var(--focus-outline);outline-offset:var(--focus-offset)}.rux-popup{font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--line-height-base);text-align:left}.rux-popup__content{position:absolute;padding:var(--spacing-0);border-radius:var(--radius-base);background:var(--color-background-base-default);border:1px solid var(--color-border-interactive-muted);transform-style:preserve-3d;z-index:100}.rux-popup__trigger{display:contents}.rux-popup__content--menu{padding:0}.rux-popup__arrow-left{border-right:2px solid var(--color-border-interactive-muted)}.rux-popup__arrow-top{border-bottom:2px solid var(--color-border-interactive-muted)}.rux-popup__arrow-right{border-left:2px solid var(--color-border-interactive-muted)}.rux-popup__arrow-bottom{border-top:2px solid var(--color-border-interactive-muted)}.rux-popup-arrow{position:absolute;background:var(--color-border-interactive-muted);width:var(--spacing-4);height:var(--spacing-4);transform:translateZ(-1px) rotate(45deg)}";

const RuxPopUp$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ruxPopUpOpened = createEvent(this, "ruxpopupopened", 7);
    this.ruxPopUpClosed = createEvent(this, "ruxpopupclosed", 7);
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
  get el() { return this; }
  static get watchers() { return {
    "open": ["handleOpen"]
  }; }
  static get style() { return ruxPopUpCss; }
}, [1, "rux-pop-up", {
    "open": [1540],
    "placement": [1],
    "disableAutoUpdate": [516, "disable-auto-update"],
    "enableAnimationFrame": [516, "enable-animation-frame"],
    "strategy": [1],
    "closeOnSelect": [4, "close-on-select"],
    "arrowPosition": [32],
    "show": [64],
    "hide": [64]
  }, [[0, "ruxmenuselected", "handleSelection"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-pop-up"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-pop-up":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxPopUp$1);
      }
      break;
  } });
}

const RuxPopUp = RuxPopUp$1;
const defineCustomElement = defineCustomElement$1;

export { RuxPopUp, defineCustomElement };
