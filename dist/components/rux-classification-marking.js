import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { h as hasSlot } from './utils.js';

const ruxClassificationMarkingCss = ":host{display:block;font-size:var(--font-body-1-bold-font-size);line-height:var(--line-height-base);text-align:center}:host([tag]){display:inline-block;font-size:var(--font-body-2-bold-font-size);line-height:var(--line-height-base);text-align:left}:host([hidden]){display:none}.rux-classification{font-family:var(--font-body-1-bold-font-family);font-size:var(--font-body-1-bold-font-size);font-weight:var(--font-body-1-bold-font-weight);letter-spacing:var(--font-body-1-bold-letter-spacing);line-height:var(--font-body-1-bold-line-height);color:var(--color-text-white);background-color:var(--classification-banner-color-background-unclassified);text-transform:uppercase}.rux-classification--banner{z-index:1000;display:flex;justify-content:center;align-items:center;min-height:var(--spacing-6);transition:top 10.5s ease;overflow-wrap:anywhere;color:var(--color-text-white);background-color:var(--classification-banner-color-background-unclassified);position:sticky;top:0;left:0;flex-wrap:nowrap;flex-grow:1;width:100%}.rux-classification--banner__footer{bottom:0;top:inherit;position:sticky}.rux-classification--tag{width:fit-content;display:inline-flex;align-items:center;padding:var(--spacing-1) var(--spacing-3);line-height:var(--font-body-2-bold-line-height);border-radius:var(--radius-base);font-family:var(--font-body-2-bold-font-family);font-size:var(--font-body-2-bold-font-size);font-weight:var(--font-body-2-bold-font-weight);letter-spacing:var(--font-body-2-bold-letter-spacing)}:host([classification=top-secret-sci]) .rux-classification{background-color:var(--classification-banner-color-background-topsecretsci);color:var(--color-text-black)}:host([classification=top-secret]) .rux-classification{background-color:var(--classification-banner-color-background-topsecret);color:var(--color-text-black)}:host([classification=secret]) .rux-classification{background-color:var(--classification-banner-color-background-secret)}:host([classification=confidential]) .rux-classification{background-color:var(--classification-banner-color-background-confidential)}:host([classification=cui]) .rux-classification,:host([classification=controlled]) .rux-classification{background-color:var(--classification-banner-color-background-cui)}:host([classification=unclassified]) .rux-classification{background-color:var(--classification-banner-color-background-unclassified)}";

const RuxClassificationMarking$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * Defines which classification marking will be displayed.
     */
    this.classification = 'unclassified';
    /**
     * Declares the marking as a `tag` rather than the default banner style
     */
    this.tag = false;
    this.isWrapper = hasSlot(this.el);
  }
  _handleSlotChange() {
    this.isWrapper = hasSlot(this.el);
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  disconnectedCallback() {
    this.el.shadowRoot.removeEventListener('slotchange', this._handleSlotChange);
  }
  get type() {
    return this.tag ? 'tag' : 'banner';
  }
  _getDisplayData() {
    const markings = {
      banner: {
        cui: 'cui',
        controlled: 'controlled',
        confidential: 'confidential',
        secret: 'secret',
        'top-secret': 'top secret',
        'top-secret-sci': 'top secret//sci',
        unclassified: 'unclassified',
      },
      tag: {
        cui: 'cui',
        controlled: 'cui',
        confidential: 'c',
        secret: 's',
        'top-secret': 'ts',
        'top-secret-sci': 'TS//SCI',
        unclassified: 'u',
      },
    };
    let text;
    this.type === 'tag'
      ? (text = markings[this.type][this.classification]
        ? markings[this.type][this.classification]
        : 'u')
      : (text = markings[this.type][this.classification]
        ? markings[this.type][this.classification]
        : 'unclassified');
    return text;
  }
  render() {
    const { isWrapper, label, tag, type } = this;
    return (h(Host, null, h("div", { class: {
        'rux-classification': true,
        'rux-classification--tag': type === 'tag',
        'rux-classification--banner': type === 'banner',
      }, part: "tag header" }, this._getDisplayData(), label), h("slot", null), isWrapper && !tag && (h("div", { class: {
        'rux-classification': true,
        'rux-classification--banner': type === 'banner',
        'rux-classification--banner__footer': isWrapper === true,
      }, part: "footer" }, this._getDisplayData(), label))));
  }
  get el() { return this; }
  static get style() { return ruxClassificationMarkingCss; }
}, [1, "rux-classification-marking", {
    "classification": [513],
    "label": [1],
    "tag": [516],
    "isWrapper": [32]
  }, [[0, "slotchange", "_handleSlotChange"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-classification-marking"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-classification-marking":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxClassificationMarking$1);
      }
      break;
  } });
}

const RuxClassificationMarking = RuxClassificationMarking$1;
const defineCustomElement = defineCustomElement$1;

export { RuxClassificationMarking, defineCustomElement };
