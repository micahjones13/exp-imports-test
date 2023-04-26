import { Host, h, } from '@stencil/core';
import { renderHiddenInput } from '../../utils/utils';
/**
 * @part container - the label of rux-push-button
 * @part icon - the optional rux-icon

 */
export class RuxPushButton {
  constructor() {
    this.pushButtonId = `rux-push-button-${id++}`;
    /**
     * Hides slotted text from the button by setting rux-button--icon-only class
     */
    this.iconOnly = false;
    /**
     * Disables the push button via HTML `disabled` attribute.
     * Button takes on a distinct disabled visual state.
     * Cursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored.
     */
    this.disabled = false;
    /**
     * Checks the push button via HTML `checked` attribute.
     * Push button takes on a distinct "enabled" or "selected" visual state.
     */
    this.checked = false;
    /**
     * The label of the push button.
     */
    this.label = 'Push Button';
    /**
     * The name of the push button.
     */
    this.name = '';
    /**
     * The value of the push button.
     */
    this.value = '';
    this._onBlur = () => {
      this.ruxBlur.emit();
    };
  }
  componentWillLoad() {
    this._onChange = this._onChange.bind(this);
  }
  _onChange(e) {
    const target = e.target;
    this.checked = target.checked;
    this.ruxChange.emit(this.checked);
  }
  render() {
    const { disabled, checked, label, size, _onChange, value, _onBlur, icon, iconOnly, } = this;
    renderHiddenInput(true, this.el, this.name, this.value ? this.value : 'on', this.disabled, this.checked);
    return (h(Host, { "aria-checked": `${checked}`, "aria-hidden": disabled ? 'true' : null, role: "switch" }, h("input", { class: "rux-push-button__input", id: this.pushButtonId, type: "checkbox", disabled: disabled, checked: checked, onChange: _onChange, onBlur: _onBlur, value: value }), h("label", { part: "container", class: {
        'rux-push-button__button': true,
        'rux-push-button__button--small': size === 'small',
        'rux-push-button__button--large': size === 'large',
        'rux-push-button__button--icon-only': iconOnly,
      }, htmlFor: this.pushButtonId }, icon ? (h("rux-icon", { size: "auto", exportparts: "icon", icon: icon })) : null, label), h("slot", null)));
  }
  static get is() { return "rux-push-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-push-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-push-button.css"]
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
          "text": "Disables the push button via HTML `disabled` attribute.\nButton takes on a distinct disabled visual state.\nCursor uses the `not-allowed` system replacement and all keyboard and mouse events are ignored."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "checked": {
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
          "text": "Checks the push button via HTML `checked` attribute.\nPush button takes on a distinct \"enabled\" or \"selected\" visual state."
        },
        "attribute": "checked",
        "reflect": true,
        "defaultValue": "false"
      },
      "label": {
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
          "text": "The label of the push button."
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "'Push Button'"
      },
      "name": {
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
          "text": "The name of the push button."
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "''"
      },
      "value": {
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
          "text": "The value of the push button."
        },
        "attribute": "value",
        "reflect": true,
        "defaultValue": "''"
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
          "text": "Changes size of a push button from medium to small or large by setting sizing classes\nrux-button--small\nrux-button--large"
        },
        "attribute": "size",
        "reflect": true
      }
    };
  }
  static get events() {
    return [{
        "method": "ruxChange",
        "name": "ruxchange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fired when an alteration to the input's value is committed by the user and emits the value on the event.detail - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "ruxBlur",
        "name": "ruxblur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
}
let id = 0;
