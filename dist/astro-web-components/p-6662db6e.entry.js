import{r,c as e,h as t,H as a,g as i}from"./p-3aed6e85.js";import{h as o,r as l}from"./p-12583e0d.js";let n=0;const s=class{constructor(t){r(this,t),this.ruxInput=e(this,"ruxinput",7),this.ruxBlur=e(this,"ruxblur",7),this.ruxChange=e(this,"ruxchange",7),this.sliderId="rux-slider-"+ ++n,this.hasLabelSlot=!1,this.hasHelpSlot=!1,this.hasErrorSlot=!1,this.min=0,this.max=100,this.step=1,this.value=(this.max-this.min)/2+this.min,this.axisLabels=[],this.ticksOnly=!1,this.disabled=!1,this.name="",this._onBlur=()=>{this.ruxBlur.emit()}}componentWillLoad(){this._updateValue(),this._getBrowser(navigator.userAgent.toLowerCase()),this._handleSlotChange()}connectedCallback(){this._onInput=this._onInput.bind(this),this._onBlur=this._onBlur.bind(this),this._handleSlotChange=this._handleSlotChange.bind(this),this._onChange=this._onChange.bind(this)}disconnectedCallback(){this.el.shadowRoot.removeEventListener("slotchange",this._handleSlotChange)}handleLabelChange(){this._handleSlotChange()}handleChange(){this._updateValue()}handleStep(){this.value=this._closestMultiple(this.value,this.step)}get hasLabel(){return!!this.label||this.hasLabelSlot}_closestMultiple(r,e){return e>r?e:(r+=e/2,r-=r%e)}_updateValue(){this.min||0==this.min||(this.min=0),this.max||0==this.max||(this.max=100),this.value||0==this.value||(this.value=(this.max-this.min)/2+this.min),this.step||(this.step=1),this.min>=this.max&&(this.min=this.max-this.step),this.value<this.min&&(this.value=this.min),this.max<this.value&&(this.value=this.max),this._setValuePercent()}_setValuePercent(){this.el.style.setProperty("--_slider-value-percent",(this.value-this.min)/(this.max-this.min)*100+"%")}_onInput(r){this.value=parseFloat(r.target.value),this._setValuePercent(),this.ruxInput.emit()}_onChange(){this.ruxChange.emit()}_getBrowser(r){r.indexOf("safari")>-1&&-1==r.indexOf("chrome")&&(this.el.style.setProperty("--_slider-top","0px"),this.el.style.setProperty("--slider-tick-padding-top","7px")),r.indexOf("firefox")>-1&&this.el.style.setProperty("--slider-tick-padding-top","3px")}_handleSlotChange(){this.hasLabelSlot=o(this.el,"label"),this.hasErrorSlot=o(this.el,"error-text"),this.hasHelpSlot=o(this.el,"help-text")}_getTickWidths(){return 100/(this.axisLabels.length-1)}render(){const{el:r,sliderId:e,label:i,errorText:o,helpText:n,hasLabel:s,hasErrorSlot:d,hasHelpSlot:c,_handleSlotChange:h,min:u,max:g,value:b,step:v,disabled:p,name:f,_onInput:x,_onBlur:m,_onChange:k}=this;return l(!0,r,f,JSON.stringify(this.value),p),t(a,null,t("div",{class:"rux-form-field",part:"form-field"},s?t("label",{class:{"rux-input-label":!0,hidden:!this.hasLabel},"aria-hidden":this.hasLabel?"false":"true",htmlFor:e,part:"label"},t("slot",{name:"label"},i)):null,t("div",{class:{"rux-slider":!0,"with-axis-labels":this.axisLabels.length>0}},t("input",{id:e,onInput:x,onChange:k,type:"range",class:"rux-range",min:u,max:g,step:v,value:b,disabled:p,"aria-label":"slider","aria-disabled":p?"true":"false",onBlur:m,part:"input",list:"steplist"}),this.axisLabels.length>0?t("datalist",{id:"steplist",style:{gridTemplateColumns:`[tick] repeat(${this.axisLabels.length-1}, ${this._getTickWidths()}%)`}},this.axisLabels.map((r=>t("div",{class:"tick-label",part:"tick-container"},t("div",{class:"tick",part:"tick"}),this.ticksOnly?null:t("div",{class:"axis-label",part:"axis-label"},r))))):null)),t("div",{class:{"rux-error-text":!!o||d,hidden:!o&&!d},part:"error-text"},t("svg",{fill:"none",width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 14"},t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.393 12.25c.898 0 1.458-.974 1.009-1.75L8.009 2.91a1.166 1.166 0 0 0-2.018 0L1.598 10.5c-.449.776.111 1.75 1.01 1.75h8.784ZM7 8.167a.585.585 0 0 1-.583-.584V6.417c0-.321.262-.584.583-.584.32 0 .583.263.583.584v1.166c0 .321-.262.584-.583.584Zm-.583 1.166V10.5h1.166V9.333H6.417Z",fill:"currentColor"})),t("slot",{name:"error-text",onSlotchange:h},o)),t("div",{class:{"rux-help-text":(!!n||c)&&(!o||!d),hidden:!n&&!c||!!o||d},part:"help-text"},t("slot",{name:"help-text",onSlotchange:h},n)))}get el(){return i(this)}static get watchers(){return{label:["handleLabelChange"],value:["handleChange"],min:["handleChange"],max:["handleChange"],step:["handleStep"]}}};s.style=".rux-help-text{margin-top:var(--spacing-2);color:var(--color-text-secondary);font-size:var(--font-body-2-font-size);font-family:var(--font-body-2-font-family);font-weight:var(--font-body-2-font-weight);letter-spacing:var(--font-body-2-letter-spacing);line-height:var(--font-body-2-line-height);text-align:left}.rux-error-text{display:flex;align-items:center;text-align:left;width:fit-content;-webkit-order:3;order:3;display:flex;margin-top:var(--spacing-2);color:var(--color-text-error);font-size:var(--font-body-2-bold-font-size);font-family:var(--font-body-2-bold-font-family);font-weight:var(--font-body-2-bold-font-weight);letter-spacing:var(--font-body-2-bold-letter-spacing);line-height:var(--font-body-2-bold-line-height);text-align:left}.rux-error-text svg{width:calc(var(--spacing-4) + var(--spacing-1));height:calc(var(--spacing-4) + var(--spacing-1));color:var(--color-text-error);margin-right:var(--spacing-2);cursor:default}:host{--slider-track-before-thumb-height:var(--spacing-1);--_slider-thumb-size:calc(var(--spacing-4) + var(--spacing-1));--_slider-value-percent:50%;--_slider-top:calc(var(--_slider-thumb-size) / -2.4);display:flex;flex-grow:1;flex-flow:column;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--line-height-base)}.hidden,:host([hidden]){display:none}.rux-form-field{flex-direction:column}.rux-form-field label{margin-bottom:var(--spacing-2)}.rux-input-label{font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);letter-spacing:var(--font-control-body-1-letter-spacing);font-weight:var(--font-control-body-1-font-weight);line-height:var(--font-control-body-1-line-height)}.with-axis-labels{padding-bottom:var(--spacing-8)}.rux-slider{height:calc(var(--spacing-4) + var(--spacing-1));position:relative;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing)}.rux-slider :hover{cursor:pointer}.rux-slider :disabled{cursor:not-allowed}.rux-slider .rux-range:disabled+#steplist{opacity:var(--opacity-disabled);cursor:not-allowed}.rux-slider .rux-range:disabled+#steplist .tick{cursor:not-allowed}.rux-slider .rux-range:disabled+#steplist .tick-label .axis-label{cursor:not-allowed}.rux-slider #steplist{display:grid;padding:var(--spacing-0) calc(var(--_slider-thumb-size) / 2);cursor:default}.rux-slider #steplist .tick-label{grid-row:1;width:0;display:flex;flex-direction:column;align-items:center;font-family:var(--font-body-3-font-family);font-size:var(--font-body-3-font-size);line-height:var(--font-body-3-line-height);letter-spacing:var(--font-body-3-letter-spacing);font-weight:var(--font-body-3-font-weight)}.rux-slider #steplist .tick-label .axis-label{padding-top:var(--spacing-1);cursor:default}.rux-slider #steplist .tick{background:var(--color-background-interactive-default);height:var(--spacing-1);width:var(--spacing-1);border-radius:var(--radius-circle);cursor:default}.rux-slider #steplist .tick-label:not(:first-child):not(:last-child){padding:0}.rux-slider #steplist :disabled{opacity:var(--opacity-disabled)}.rux-range{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;background:none;width:100%;height:calc(var(--spacing-4) + var(--spacing-1));margin:var(--spacing-0);color:transparent;position:relative;z-index:1}input[type=range]:focus{outline:none}.rux-range::-webkit-slider-runnable-track{display:flex;align-items:center;max-width:100%;cursor:pointer;min-height:var(--spacing-050);max-height:var(--slider-track-before-thumb-height);background-image:linear-gradient(var(--color-background-interactive-default), var(--color-background-interactive-default)), linear-gradient(var(--color-background-interactive-default), var(--color-background-interactive-default)), radial-gradient(circle, var(--color-background-interactive-default) 70%, var(--color-background-interactive-default) 70%, transparent 70%, transparent 100%);background-size:calc( var(--_slider-value-percent) - (var(--_slider-thumb-size) / 2) ) var(--slider-track-before-thumb-height), calc(100% - var(--_slider-thumb-size)) 1px, var(--spacing-1) var(--spacing-1);background-repeat:no-repeat no-repeat;background-position:calc(var(--_slider-thumb-size) / 2), calc(100% - (var(--_slider-thumb-size) / 2)), calc((var(--_slider-thumb-size) / 2) - var(--spacing-050))}.rux-range:disabled::-webkit-slider-runnable-track{opacity:var(--opacity-disabled);cursor:not-allowed}.rux-range::-moz-range-track{display:flex;align-items:center;max-width:100%;cursor:pointer;min-height:var(--spacing-1);max-height:var(--slider-track-before-thumb-height);background-image:linear-gradient(var(--color-background-interactive-default), var(--color-background-interactive-default)), linear-gradient(var(--color-background-interactive-default), var(--color-background-interactive-default)), radial-gradient(circle, var(--color-background-interactive-default) 70%, var(--color-background-interactive-default) 70%, transparent 70%, transparent 100%);background-size:calc( var(--_slider-value-percent) - (var(--_slider-thumb-size) / 2) ) var(--slider-track-before-thumb-height), calc(100% - var(--_slider-thumb-size)) 1px, var(--spacing-1) var(--spacing-1);background-repeat:no-repeat no-repeat;background-position:calc(var(--_slider-thumb-size) / 2), calc(100% - (var(--_slider-thumb-size) / 2)), calc((var(--_slider-thumb-size) / 2) - var(--spacing-050))}.rux-range:disabled::-moz-range-track,.rux-range:disabled::-moz-range-progress{opacity:var(--opacity-disabled);cursor:not-allowed}.rux-input:disabled{opacity:var(--opacity-disabled);cursor:not-allowed}.rux-range::-ms-track{display:flex;align-items:center;max-width:100%;cursor:pointer;border-radius:var(--radius-circle);min-height:var(--spacing-025);max-height:var(--spacing-1);background-image:linear-gradient(var(--color-background-interactive-default), var(--color-background-interactive-default)), linear-gradient(var(--color-background-interactive-default), var(--color-background-interactive-default));background-size:var(--_slider-value-percent) var(--slider-track-before-thumb-height), 100% 1px;background-repeat:no-repeat no-repeat;background-position:left, right}.rux-range::-ms-fill-lower{height:var(--spacing-050);background-color:var(--color-background-interactive-default)}.rux-range::-ms-fill-upper{height:var(--spacing-050);background-color:var(--color-background-interactive-default)}.rux-range::-webkit-slider-thumb{-webkit-appearance:none;box-sizing:border-box;position:relative;top:var(--_slider-top);height:var(--_slider-thumb-size);width:var(--_slider-thumb-size);border-radius:100%;border:2px solid var(--color-background-interactive-default);background-color:var(--color-background-base-default);cursor:pointer;z-index:6}.rux-range::-webkit-slider-thumb:hover{border-color:var(--color-background-interactive-hover);background-color:var(--color-background-base-default)}.rux-range:focus-visible::-webkit-slider-thumb{outline:var(--focus-outline);outline-offset:var(--focus-offset)}.rux-range:disabled::-webkit-slider-thumb{cursor:not-allowed}.rux-range:disabled::-webkit-slider-thumb:hover{border-color:var(--color-background-interactive-default)}.rux-range:not(:disabled)::-webkit-slider-thumb:active{border-color:var(--color-background-interactive-default);background-color:var(--color-background-base-default)}.rux-range:not(:disabled)::-webkit-slider-thumb:focus,.rux-range:not(:disabled)::-webkit-slider-thumb:hover:not(:active){background-color:var(--color-background-base-default)}.rux-range::-moz-range-thumb{-moz-appearance:none;position:relative;box-sizing:border-box;top:var(--_slider-top);height:var(--_slider-thumb-size);width:var(--_slider-thumb-size);border-radius:100%;border:2px solid var(--color-background-interactive-default);background-color:var(--color-background-base-default);cursor:pointer;z-index:6}.rux-range:not(:disabled)::-moz-range-thumb:active{border-color:var(--color-background-interactive-default);background-color:var(--color-background-base-default)}.rux-range::-moz-range-thumb:hover{border-color:var(--color-background-interactive-hover)}.rux-range:focus-visible::-moz-range-thumb{outline:var(--focus-outline);outline-offset:var(--focus-offset)}.rux-range:disabled::-moz-range-thumb{opacity:var(--opacity-disabled);cursor:not-allowed}.rux-range::-ms-thumb{position:relative;top:var(--_slider-top);height:var(--_slider-thumb-size);width:var(--_slider-thumb-size);border-radius:100%;border:2px solid var(--color-background-interactive-default);background-color:var(--color-background-base-default);cursor:pointer;z-index:6}.rux-range:disabled::-ms-thumb{opacity:0.4;cursor:not-allowed}.rux-range:focus-visible::-ms-thumb{outline:var(--focus-outline);outline-offset:var(--focus-offset)}";export{s as rux_slider}