import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { c as computePosition, a as autoUpdate, o as offset, b as autoPlacement, f as flip } from './floating-ui.dom.esm.js';
import { h as hasSlot } from './utils.js';

const ruxTooltipCss = ":host{--delay:800ms;display:inline-flex}*{box-sizing:border-box}span{display:contents}.tooltip{display:inline-block;background:var(--tooltip-color-background);padding:calc(var(--spacing-1) / 2) var(--spacing-2);color:var(--tooltip-color-text);width:fit-content;border-radius:var(--tooltip-radius);z-index:100;width:max-content;position:absolute;top:0;left:0;opacity:1;visibility:visible;transition:opacity 200ms ease-in;font-size:var(--font-body-2-font-size);line-height:var(--font-body-2-line-height)}.rux-tooltip__trigger{display:inline;flex-basis:100%}:host([open]) .tooltip{transition-delay:var(--delay);transition-property:opacity}.hidden{opacity:0 !important;visibility:hidden}";

const RuxTooltip$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ruxTooltipOpened = createEvent(this, "ruxtooltipopened", 7);
    this.ruxTooltipClosed = createEvent(this, "ruxtooltipclosed", 7);
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
  get el() { return this; }
  static get watchers() { return {
    "delay": ["handleDelay"],
    "open": ["handleOpen"]
  }; }
  static get style() { return ruxTooltipCss; }
}, [1, "rux-tooltip", {
    "message": [513],
    "open": [1540],
    "delay": [514],
    "offset": [2],
    "placement": [1],
    "disableAutoUpdate": [516, "disable-auto-update"],
    "strategy": [1],
    "currentSlotted": [32],
    "hasTriggerSlot": [32],
    "delegatedFocus": [32],
    "show": [64],
    "hide": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-tooltip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxTooltip$1);
      }
      break;
  } });
}

const RuxTooltip = RuxTooltip$1;
const defineCustomElement = defineCustomElement$1;

export { RuxTooltip, defineCustomElement };
