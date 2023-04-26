import { r as registerInstance, h, H as Host, g as getElement } from './index-a1205123.js';
import { b as hasShadowDom } from './utils-73490106.js';

const ruxButtonCss = ":host{display:inline-block;width:auto}:host([hidden]){display:none}:host([disabled]){pointer-events:none}.rux-button{border:none;display:flex;position:relative;margin:var(--spacing-0);width:inherit;padding:var(--spacing-2) var(--spacing-4);border-radius:var(--radius-base);color:var(--color-text-inverse);font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);font-weight:var(--font-control-body-1-font-weight);line-height:var(--font-control-body-1-line-height);letter-spacing:var(--font-control-body-1-letter-spacing);white-space:nowrap;text-overflow:ellipsis;justify-content:center;align-items:center;user-select:none}.rux-button rux-icon,.rux-button ::slotted(rux-icon){height:calc(var(--spacing-4) + var(--spacing-1));width:calc(var(--spacing-4) + var(--spacing-1));margin-right:var(--spacing-1);color:var(--color-text-inverse)}.rux-button:disabled{opacity:var(--opacity-disabled);cursor:not-allowed;pointer-events:none}.rux-button:focus-visible{outline:var(--focus-outline);outline-offset:var(--focus-offset)}.rux-button:hover:not([disabled]){cursor:pointer}.rux-button--default{background-color:var(--color-background-interactive-default)}.rux-button--default:hover:not([disabled]){border-color:transparent;background-color:var(--color-background-interactive-hover)}.rux-button--default:active:not([disabled]){border-color:var(--color-background-interactive-default);background-color:var(--color-background-interactive-default)}.rux-button--secondary{color:var(--color-background-interactive-default);background-color:transparent;box-shadow:var(--color-border-interactive-default) 0 0 0 1px inset}.rux-button--secondary:hover:not([disabled]){color:var(--color-background-interactive-hover);background-color:transparent;box-shadow:var(--color-background-interactive-hover) 0 0 0 1px inset}.rux-button--secondary:hover:not([disabled]) rux-icon,.rux-button--secondary:hover:not([disabled]) ::slotted(rux-icon){color:var(--color-background-interactive-hover)}.rux-button--secondary:active:not([disabled]){box-shadow:var(--color-background-interactive-default) 0 0 0 1px inset;background-color:transparent;color:var(--color-background-interactive-default)}.rux-button--secondary:active:not([disabled]) rux-icon,.rux-button--secondary:active:not([disabled]) ::slotted(rux-icon){color:var(--color-background-interactive-default)}.rux-button--secondary rux-icon,.rux-button--secondary ::slotted(rux-icon){color:var(--color-background-interactive-default)}.rux-button--borderless{color:var(--color-background-interactive-default);box-shadow:none;background:none}.rux-button--borderless:hover:not([disabled]){color:var(--color-background-interactive-hover);background:none}.rux-button--borderless:hover:not([disabled]) rux-icon,.rux-button--borderless:hover:not([disabled]) ::slotted(rux-icon){color:var(--color-background-interactive-hover)}.rux-button--borderless:active:not([disabled]){color:var(--color-background-interactive-default)}.rux-button--borderless:active:not([disabled]) rux-icon,.rux-button--borderless:active:not([disabled]) ::slotted(rux-icon){color:var(--color-background-interactive-default)}.rux-button--borderless rux-icon,.rux-button--borderless ::slotted(rux-icon){color:var(--color-background-interactive-default)}.rux-button--small{padding:var(--spacing-1) var(--spacing-4)}.rux-button--small.rux-button--icon-only{padding:var(--spacing-1)}.rux-button--large{padding:var(--spacing-3) var(--spacing-4)}.rux-button--large.rux-button--icon-only{padding:var(--spacing-3)}.rux-button--icon-only{font-size:0;padding:var(--spacing-2)}.rux-button--icon-only ::slotted(rux-icon),.rux-button--icon-only rux-icon{margin:0}";

const RuxButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Hides slotted text from the button by setting rux-button--icon-only class
     */
    this.iconOnly = false;
    /**
     * Changes button style from solid to secondary by setting the rux-button--secondary class
     */
    this.secondary = false;
    /**
     * Toggles disabled attribute on the button
     */
    this.disabled = false;
    /**
     * Changes button style from solid to borderless by setting the rux-button--borderless class
     */
    this.borderless = false;
    /**
     * The button type. Use 'submit' to submit native form data.
     */
    this.type = 'button';
    /**
     * Creates and appends a native <button> if used within a form
     * so that it can trigger the submit event.
     *
     * Shadow DOM limitation prevents <form> from working correctly.
     * https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/button/button.tsx
     * @param ev
     */
    this.handleClick = (ev) => {
      if (hasShadowDom(this.el)) {
        const form = this.el.closest('form');
        if (form) {
          ev.preventDefault();
          const fakeButton = document.createElement('button');
          fakeButton.type = this.type;
          fakeButton.style.display = 'none';
          form.appendChild(fakeButton);
          fakeButton.click();
          fakeButton.remove();
        }
      }
    };
  }
  render() {
    const { size, iconOnly, secondary, disabled, icon, borderless } = this;
    return (h(Host, null, h("button", { type: "button", onClick: this.handleClick, class: {
        'rux-button': true,
        'rux-button--secondary': secondary,
        'rux-button--default': !secondary,
        'rux-button--small': size === 'small',
        'rux-button--large': size === 'large',
        'rux-button--icon-only': iconOnly,
        'rux-button--borderless': borderless,
      }, "aria-disabled": disabled ? 'true' : null, disabled: disabled, part: "container" }, icon ? (h("rux-icon", { size: "auto", icon: icon, exportparts: "icon", color: secondary ? 'primary' : 'dark' })) : null, h("slot", null))));
  }
  static get delegatesFocus() { return true; }
  get el() { return getElement(this); }
};
RuxButton.style = ruxButtonCss;

const ruxButtonGroupCss = ":host{display:inline}:host([hidden]){display:none}.rux-button-group{display:flex}.rux-button-group ::slotted(rux-button:not(:last-child)){margin-right:var(--spacing-2)}.rux-button-group--left{justify-content:flex-start}.rux-button-group--right{justify-content:flex-end}.rux-button-group--center{justify-content:center}";

const RuxButtonGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The horizontal alignment of buttons within the group
     */
    this.hAlign = 'left';
  }
  render() {
    const { hAlign } = this;
    return (h("div", { class: {
        'rux-button-group': true,
        'rux-button-group--left': hAlign === 'left',
        'rux-button-group--right': hAlign === 'right',
        'rux-button-group--center': hAlign === 'center',
      }, part: "container" }, h("slot", null)));
  }
};
RuxButtonGroup.style = ruxButtonGroupCss;

export { RuxButton as rux_button, RuxButtonGroup as rux_button_group };
