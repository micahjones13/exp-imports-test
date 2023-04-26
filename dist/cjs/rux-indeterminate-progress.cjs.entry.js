'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const ruxIndeterminateProgressCss = ":host{--size:calc(\n      var(--spacing-14) + var(--spacing-050)\n  );--container-height:calc(var(--size) + var(--spacing-1));--second-div-height:calc(var(--size) * 0.9 - var(--spacing-1));--nub-size:calc(\n      ((var(--container-height) - var(--second-div-height)) / 2) - 0.187rem\n  );--mask:radial-gradient(\n      farthest-side,\n      transparent calc((((100% - 1px) * 0.9) - 4px)),\n      var(--color-background-interactive-default)\n          calc((((100% - 1px) * 0.9) - 3.5px))\n  );--border-width:1px;display:inline-block}.rux-indeterminate-container{height:var(--size);width:var(--size);border-radius:100%;display:flex;justify-content:center;align-items:center;border:var(--border-width) solid var(--color-border-interactive-default);background:var(--color-background-base-default);-webkit-mask:var(--mask);mask:var(--mask)}.rux-indeterminate-animated-spinner{position:relative;display:flex;justify-content:center;align-items:center;background:var(--indeterminate-gradient);height:calc(100% - var(--border-width) * 2);width:calc(100% - var(--border-width) * 2);border-radius:100%;animation:spin 1.367s infinite linear}.rux-indeterminate-animated-spinner::after{position:absolute;content:\"\";background:var(--indeterminate-nub-color);width:var(--nub-size);height:var(--nub-size);top:0;margin:0;padding:0;border-radius:100%}.rux-indeterminate-inner-spinner-gap{height:calc(90% - var(--spacing-1));width:calc(90% - var(--spacing-1));background:transparent;border-radius:100%;border:var(--border-width) solid var(--color-background-base-default);display:flex;justify-content:center;align-items:center}.rux-indeterminate-inner-circle{height:calc(100% - var(--border-width) * 2);width:calc(100% - var(--border-width) * 2);border:var(--border-width) solid var(--color-background-interactive-default);border-radius:100%;background-color:transparent}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}";

const RuxIndeterminateProgress = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: {
        'rux-indeterminate-container': true,
      }, part: "container" }, index.h("div", { class: "rux-indeterminate-animated-spinner", part: "animated-spinner" }, index.h("div", { class: "rux-indeterminate-inner-spinner-gap", part: "inner-spinner-gap" }, index.h("div", { class: "rux-indeterminate-inner-circle", part: "inner-circle" }))))));
  }
};
RuxIndeterminateProgress.style = ruxIndeterminateProgressCss;

exports.rux_indeterminate_progress = RuxIndeterminateProgress;
