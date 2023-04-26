import { h, Host } from '@stencil/core';
import { hasShadowDom } from '../../utils/utils';
/**
 * @part container - the components native button element.
 * @part icon - the optional rux-icon
 */
export class RuxButton {
  constructor() {
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
  static get is() { return "rux-button"; }
  static get encapsulation() { return "shadow"; }
  static get delegatesFocus() { return true; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-button.css"]
    };
  }
  static get properties() {
    return {
      "icon": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "For a [button style guide, see the Button section in Astro UXDS Guidelines](https://astrouxds.com/components/button)\nDisplays an Astro icon matching this string. For a [full list of available icons,\nsee the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols)"
        },
        "attribute": "icon",
        "reflect": true
      },
      "iconOnly": {
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
          "text": "Hides slotted text from the button by setting rux-button--icon-only class"
        },
        "attribute": "icon-only",
        "reflect": true,
        "defaultValue": "false"
      },
      "secondary": {
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
          "text": "Changes button style from solid to secondary by setting the rux-button--secondary class"
        },
        "attribute": "secondary",
        "reflect": false,
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
          "text": "Toggles disabled attribute on the button"
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "borderless": {
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
          "text": "Changes button style from solid to borderless by setting the rux-button--borderless class"
        },
        "attribute": "borderless",
        "reflect": false,
        "defaultValue": "false"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'small' | 'medium' | 'large'",
          "resolved": "\"large\" | \"medium\" | \"small\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Changes size of a button from medium to small or large by setting sizing classes\nrux-button--small\nrux-button--large"
        },
        "attribute": "size",
        "reflect": true
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'submit' | 'button'",
          "resolved": "\"button\" | \"submit\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The button type. Use 'submit' to submit native form data."
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'button'"
      }
    };
  }
  static get elementRef() { return "el"; }
}
