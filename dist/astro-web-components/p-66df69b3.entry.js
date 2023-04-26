import{r as t,h as s}from"./p-3aed6e85.js";import{M as r,a as o}from"./p-e6061d9e.js";const a=class{constructor(s){t(this,s),this._circumference=112*Math.PI,this._defaultRangeList=[{threshold:17,status:"off"},{threshold:33,status:"standby"},{threshold:49,status:"normal"},{threshold:65,status:"caution"},{threshold:81,status:"serious"},{threshold:100,status:"critical"}],this.min=0,this.max=100,this.progress=0,this._status="off",this._graphProgress=0}checkProgress(t,s){Number.isInteger(this.progress)?t!==s&&this._updateProgress():this.progress=0}checkRange(t,s){t!==s&&this._updateProgress()}componentWillLoad(){(!this.range||this.range.length<1)&&(this.range=this._defaultRangeList),Number.isInteger(this.progress)?(this.range=this.range.sort(((t,s)=>t.threshold>=s.threshold?1:-1)),this._updateProgress()):this.progress=0}get status(){return this._status}_updateProgress(){this.progress>this.max&&(this.progress=this.max),this.progress<this.min&&(this.progress=this.min);const t=this.range.find((t=>this.progress<=t.threshold));this._status=t?t.status:this.range[0].status,this._graphProgress=this._circumference-(this.progress-this.min)/(this.max-this.min)*this._circumference}render(){return s("div",{id:"rux-advanced-status__icon",class:"rux-advanced-status",part:"container"},s("div",{class:"rux-advanced-status__icon-group",part:"icon-group"},s("rux-status",{status:this._status,part:"status-icon"}),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",class:`rux-status--${this._status}`,part:"radial-progress"},s("g",{id:"progress"},s("circle",{cx:"60",cy:"60",r:"56",fill:"transparent",stroke:"rgba(40, 63, 88, 1)","stroke-width":"10",transform:"rotate(-90 61 60)"}),s("circle",{cx:"60",cy:"60",r:"56",fill:"transparent","stroke-dasharray":"351.8583772 351.8583772","stroke-dashoffset":this._graphProgress,"stroke-linecap":"round","stroke-width":"10",class:"progress-ring__circle",transform:"rotate(-90 61 60)"}))),s("div",{class:"rux-advanced-status__progress",part:"progress-display"},Math.ceil((this.progress-this.min)/(this.max-this.min)*100),"%"),s(o,{notifications:this.notifications})),s(r,{label:this.label,sublabel:this.sublabel}))}static get watchers(){return{progress:["checkProgress"],range:["checkRange"]}}};a.style=":host{display:inline-flex;padding:0}:host([hidden]){display:none}*,*::before,*::after{box-sizing:border-box}.rux-advanced-status{display:flex;flex-direction:column;justify-content:flex-start;position:relative;margin:0;line-height:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rux-advanced-status__icon-group{display:flex;position:relative;margin:0 auto;width:4.5rem}rux-status{position:absolute;top:-0.25rem;left:-0.25rem;margin:0}.rux-advanced-status__badge{display:block;z-index:2;order:3;position:absolute;bottom:-0.75rem;right:-0.4rem;border:1px solid rgba(255, 255, 255, 0.6);border-radius:var(--radius-base);padding:0.65rem 0.25rem;color:#fff;font-family:var(--font-body-3-font-family);font-size:var(--font-body-3-font-size);font-weight:var(--font-body-3-font-weight);letter-spacing:var(--font-body-3-letter-spacing);text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background-color:#000}.rux-advanced-status__label{color:var(--color-text-primary);font-family:var(--font-body-2-font-family);font-size:var(--font-body-2-font-size);font-weight:var(--font-body-2-font-weight);letter-spacing:var(--font-body-2-letter-spacing);text-align:center;text-overflow:ellipsis;white-space:nowrap;line-height:1.2;overflow:hidden;margin-top:1rem;width:100%;max-width:6.25rem}.rux-advanced-status__sublabel{font-family:var(--font-body-3-font-family);font-size:var(--font-body-3-font-size);font-weight:var(--font-body-3-font-weight);letter-spacing:var(--font-body-3-letter-spacing);color:var(--color-text-primary);opacity:0.6;display:block}.rux-advanced-status__status rux-status::part(status){line-height:0}.rux-advanced-status__hidden{display:none}svg{margin:0 auto;width:3rem;height:3rem}svg.rux-status--off{stroke:var(--status-symbol-color-fill-off-on-dark, #9ea7ad);fill:var(--status-symbol-color-fill-off-on-dark, #9ea7ad)}svg.rux-status--standby{stroke:var(--status-symbol-color-fill-standby-on-dark, #2dccff);fill:var(--status-symbol-color-fill-standby-on-dark, #2dccff)}svg.rux-status--normal{stroke:var(--status-symbol-color-fill-normal-on-dark, #56f000);fill:var(--status-symbol-color-fill-normal-on-dark, #56f000)}svg.rux-status--caution{stroke:var(--status-symbol-color-fill-caution-on-dark, #fce83a);fill:var(--status-symbol-color-fill-caution-on-dark, #fce83a)}svg.rux-status--serious{stroke:var(--status-symbol-color-fill-serious-on-dark, #ffb300);fill:var(--status-symbol-color-fill-serious-on-dark, #ffb300)}svg.rux-status--critical{stroke:var(--status-symbol-color-fill-critical-on-dark, #ff3838);fill:var(--status-symbol-color-fill-critical-on-dark, #ff3838)}[data-progress] svg{transition:stroke-dashoffset 0.367s, stroke 0.367s;transform-origin:50% 50%}.rux-advanced-status__progress{color:var(--color-text-primary);font-family:var(--font-monospace-1-font-family);font-size:var(--font-body-3-font-size);font-weight:var(--font-monospace-1-font-weight);letter-spacing:var(--font-monospace-1-letter-spacing);margin-top:-0.125rem;margin-left:-0.125rem;position:absolute;display:flex;justify-content:center;align-items:center;width:100%;height:100%;text-align:center}";export{a as rux_monitoring_progress_icon}