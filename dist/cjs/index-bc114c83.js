'use strict';

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

const NAMESPACE = 'astro-web-components';

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/snabbdom/snabbdom/blob/master/LICENSE
 *
 * Modified for Stencil's renderer and slot projection
 */
let scopeId;
let hostTagName;
let isSvgMode = false;
let queuePending = false;
const createTime = (fnName, tagName = '') => {
    {
        return () => {
            return;
        };
    }
};
const uniqueTime = (key, measureText) => {
    {
        return () => {
            return;
        };
    }
};
const HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
const XLINK_NS = 'http://www.w3.org/1999/xlink';
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};
/**
 * Namespaces
 */
const SVG_NS = 'http://www.w3.org/2000/svg';
const HTML_NS = 'http://www.w3.org/1999/xhtml';
const isDef = (v) => v != null;
const isComplexType = (o) => {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children) => {
    let child = null;
    let key = null;
    let simple = false;
    let lastSimple = false;
    const vNodeChildren = [];
    const walk = (c) => {
        for (let i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if ((simple = typeof nodeName !== 'function' && !isComplexType(child))) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? newVNode(null, child) : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        // normalize class / classname attributes
        if (vnodeData.key) {
            key = vnodeData.key;
        }
        {
            const classData = vnodeData.className || vnodeData.class;
            if (classData) {
                vnodeData.class =
                    typeof classData !== 'object'
                        ? classData
                        : Object.keys(classData)
                            .filter((k) => classData[k])
                            .join(' ');
            }
        }
    }
    if (typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    {
        vnode.$key$ = key;
    }
    return vnode;
};
const newVNode = (tag, text) => {
    const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null,
    };
    {
        vnode.$attrs$ = null;
    }
    {
        vnode.$key$ = null;
    }
    return vnode;
};
const Host = {};
const isHost = (node) => node && node.$tag$ === Host;
const vdomFnUtils = {
    forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
    map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate),
};
const convertToPublic = (node) => ({
    vattrs: node.$attrs$,
    vchildren: node.$children$,
    vkey: node.$key$,
    vname: node.$name$,
    vtag: node.$tag$,
    vtext: node.$text$,
});
const convertToPrivate = (node) => {
    if (typeof node.vtag === 'function') {
        const vnodeData = Object.assign({}, node.vattrs);
        if (node.vkey) {
            vnodeData.key = node.vkey;
        }
        if (node.vname) {
            vnodeData.name = node.vname;
        }
        return h(node.vtag, vnodeData, ...(node.vchildren || []));
    }
    const vnode = newVNode(node.vtag, node.vtext);
    vnode.$attrs$ = node.vattrs;
    vnode.$children$ = node.vchildren;
    vnode.$key$ = node.vkey;
    vnode.$name$ = node.vname;
    return vnode;
};
/**
 * Parse a new property value for a given property type.
 *
 * While the prop value can reasonably be expected to be of `any` type as far as TypeScript's type checker is concerned,
 * it is not safe to assume that the string returned by evaluating `typeof propValue` matches:
 *   1. `any`, the type given to `propValue` in the function signature
 *   2. the type stored from `propType`.
 *
 * This function provides the capability to parse/coerce a property's value to potentially any other JavaScript type.
 *
 * Property values represented in TSX preserve their type information. In the example below, the number 0 is passed to
 * a component. This `propValue` will preserve its type information (`typeof propValue === 'number'`). Note that is
 * based on the type of the value being passed in, not the type declared of the class member decorated with `@Prop`.
 * ```tsx
 * <my-cmp prop-val={0}></my-cmp>
 * ```
 *
 * HTML prop values on the other hand, will always a string
 *
 * @param propValue the new value to coerce to some type
 * @param propType the type of the prop, expressed as a binary number
 * @returns the parsed/coerced value
 */
const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* MEMBER_FLAGS.Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return propValue === 'false' ? false : propValue === '' || !!propValue;
        }
        if (propType & 2 /* MEMBER_FLAGS.Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* MEMBER_FLAGS.String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
const getElement = (ref) => (getHostRef(ref).$hostElement$ );
const createEvent = (ref, name, flags) => {
    const elm = getElement(ref);
    return {
        emit: (detail) => {
            return emitEvent(elm, name, {
                bubbles: !!(flags & 4 /* EVENT_FLAGS.Bubbles */),
                composed: !!(flags & 2 /* EVENT_FLAGS.Composed */),
                cancelable: !!(flags & 1 /* EVENT_FLAGS.Cancellable */),
                detail,
            });
        },
    };
};
/**
 * Helper function to create & dispatch a custom Event on a provided target
 * @param elm the target of the Event
 * @param name the name to give the custom Event
 * @param opts options for configuring a custom Event
 * @returns the custom Event
 */
const emitEvent = (elm, name, opts) => {
    const ev = plt.ce(name, opts);
    elm.dispatchEvent(ev);
    return ev;
};
const rootAppliedStyles = /*@__PURE__*/ new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
    let style = styles.get(scopeId);
    if (supportsConstructableStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        if (typeof style === 'string') {
            style = cssText;
        }
        else {
            style.replaceSync(cssText);
        }
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
    let scopeId = getScopeId(cmpMeta);
    const style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = styleContainerNode.nodeType === 11 /* NODE_TYPE.DocumentFragment */ ? styleContainerNode : doc;
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, (appliedStyles = new Set()));
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
        }
    }
    return scopeId;
};
const attachStyles = (hostRef) => {
    const cmpMeta = hostRef.$cmpMeta$;
    const elm = hostRef.$hostElement$;
    const flags = cmpMeta.$flags$;
    const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
    const scopeId = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta);
    if (flags & 10 /* CMP_FLAGS.needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = scopeId;
        elm.classList.add(scopeId + '-h');
    }
    endAttachStyles();
};
const getScopeId = (cmp, mode) => 'sc-' + (cmp.$tagName$);
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
    if (oldValue !== newValue) {
        let isProp = isMemberInElement(elm, memberName);
        let ln = memberName.toLowerCase();
        if (memberName === 'class') {
            const classList = elm.classList;
            const oldClasses = parseClassList(oldValue);
            const newClasses = parseClassList(newValue);
            classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
            classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
        }
        else if (memberName === 'style') {
            // update style attribute, css properties and values
            {
                for (const prop in oldValue) {
                    if (!newValue || newValue[prop] == null) {
                        if (prop.includes('-')) {
                            elm.style.removeProperty(prop);
                        }
                        else {
                            elm.style[prop] = '';
                        }
                    }
                }
            }
            for (const prop in newValue) {
                if (!oldValue || newValue[prop] !== oldValue[prop]) {
                    if (prop.includes('-')) {
                        elm.style.setProperty(prop, newValue[prop]);
                    }
                    else {
                        elm.style[prop] = newValue[prop];
                    }
                }
            }
        }
        else if (memberName === 'key')
            ;
        else if (memberName === 'ref') {
            // minifier will clean this up
            if (newValue) {
                newValue(elm);
            }
        }
        else if ((!isProp ) &&
            memberName[0] === 'o' &&
            memberName[1] === 'n') {
            // Event Handlers
            // so if the member name starts with "on" and the 3rd characters is
            // a capital letter, and it's not already a member on the element,
            // then we're assuming it's an event listener
            if (memberName[2] === '-') {
                // on- prefixed events
                // allows to be explicit about the dom event to listen without any magic
                // under the hood:
                // <my-cmp on-click> // listens for "click"
                // <my-cmp on-Click> // listens for "Click"
                // <my-cmp on-ionChange> // listens for "ionChange"
                // <my-cmp on-EVENTS> // listens for "EVENTS"
                memberName = memberName.slice(3);
            }
            else if (isMemberInElement(win, ln)) {
                // standard event
                // the JSX attribute could have been "onMouseOver" and the
                // member name "onmouseover" is on the window's prototype
                // so let's add the listener "mouseover", which is all lowercased
                memberName = ln.slice(2);
            }
            else {
                // custom event
                // the JSX attribute could have been "onMyCustomEvent"
                // so let's trim off the "on" prefix and lowercase the first character
                // and add the listener "myCustomEvent"
                // except for the first character, we keep the event name case
                memberName = ln[2] + memberName.slice(3);
            }
            if (oldValue) {
                plt.rel(elm, memberName, oldValue, false);
            }
            if (newValue) {
                plt.ael(elm, memberName, newValue, false);
            }
        }
        else {
            // Set property if it exists and it's not a SVG
            const isComplex = isComplexType(newValue);
            if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
                try {
                    if (!elm.tagName.includes('-')) {
                        const n = newValue == null ? '' : newValue;
                        // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                        if (memberName === 'list') {
                            isProp = false;
                        }
                        else if (oldValue == null || elm[memberName] != n) {
                            elm[memberName] = n;
                        }
                    }
                    else {
                        elm[memberName] = newValue;
                    }
                }
                catch (e) { }
            }
            /**
             * Need to manually update attribute if:
             * - memberName is not an attribute
             * - if we are rendering the host element in order to reflect attribute
             * - if it's a SVG, since properties might not work in <svg>
             * - if the newValue is null/undefined or 'false'.
             */
            let xlink = false;
            {
                if (ln !== (ln = ln.replace(/^xlink\:?/, ''))) {
                    memberName = ln;
                    xlink = true;
                }
            }
            if (newValue == null || newValue === false) {
                if (newValue !== false || elm.getAttribute(memberName) === '') {
                    if (xlink) {
                        elm.removeAttributeNS(XLINK_NS, memberName);
                    }
                    else {
                        elm.removeAttribute(memberName);
                    }
                }
            }
            else if ((!isProp || flags & 4 /* VNODE_FLAGS.isHost */ || isSvg) && !isComplex) {
                newValue = newValue === true ? '' : newValue;
                if (xlink) {
                    elm.setAttributeNS(XLINK_NS, memberName, newValue);
                }
                else {
                    elm.setAttribute(memberName, newValue);
                }
            }
        }
    }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => (!value ? [] : value.split(parseClassListRegex));
const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = newVnode.$elm$.nodeType === 11 /* NODE_TYPE.DocumentFragment */ && newVnode.$elm$.host
        ? newVnode.$elm$.host
        : newVnode.$elm$;
    const oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
/**
 * Create a DOM Node corresponding to one of the children of a given VNode.
 *
 * @param oldParentVNode the parent VNode from the previous render
 * @param newParentVNode the parent VNode from the current render
 * @param childIndex the index of the VNode, in the _new_ parent node's
 * children, for which we will create a new DOM node
 * @param parentElm the parent DOM node which our new node will be a child of
 * @returns the newly created node
 */
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
    // tslint:disable-next-line: prefer-const
    const newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    if (newVNode.$text$ !== null) {
        // create text node
        elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else {
        if (!isSvgMode) {
            isSvgMode = newVNode.$tag$ === 'svg';
        }
        // create element
        elm = newVNode.$elm$ = (doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, newVNode.$tag$)
            );
        if (isSvgMode && newVNode.$tag$ === 'foreignObject') {
            isSvgMode = false;
        }
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
        {
            if (newVNode.$tag$ === 'svg') {
                // Only reset the SVG context when we're exiting <svg> element
                isSvgMode = false;
            }
            else if (elm.tagName === 'foreignObject') {
                // Reenter SVG context when we're exiting <foreignObject> element
                isSvgMode = true;
            }
        }
    }
    return elm;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
    let containerElm = (parentElm);
    let childNode;
    if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, before);
            }
        }
    }
};
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
    for (; startIdx <= endIdx; ++startIdx) {
        if ((vnode = vnodes[startIdx])) {
            elm = vnode.$elm$;
            callNodeRefs(vnode);
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
/**
 * Reconcile the children of a new VNode with the children of an old VNode by
 * traversing the two collections of children, identifying nodes that are
 * conserved or changed, calling out to `patch` to make any necessary
 * updates to the DOM, and rearranging DOM nodes as needed.
 *
 * The algorithm for reconciling children works by analyzing two 'windows' onto
 * the two arrays of children (`oldCh` and `newCh`). We keep track of the
 * 'windows' by storing start and end indices and references to the
 * corresponding array entries. Initially the two 'windows' are basically equal
 * to the entire array, but we progressively narrow the windows until there are
 * no children left to update by doing the following:
 *
 * 1. Skip any `null` entries at the beginning or end of the two arrays, so
 *    that if we have an initial array like the following we'll end up dealing
 *    only with a window bounded by the highlighted elements:
 *
 *    [null, null, VNode1 , ... , VNode2, null, null]
 *                 ^^^^^^         ^^^^^^
 *
 * 2. Check to see if the elements at the head and tail positions are equal
 *    across the windows. This will basically detect elements which haven't
 *    been added, removed, or changed position, i.e. if you had the following
 *    VNode elements (represented as HTML):
 *
 *    oldVNode: `<div><p><span>HEY</span></p></div>`
 *    newVNode: `<div><p><span>THERE</span></p></div>`
 *
 *    Then when comparing the children of the `<div>` tag we check the equality
 *    of the VNodes corresponding to the `<p>` tags and, since they are the
 *    same tag in the same position, we'd be able to avoid completely
 *    re-rendering the subtree under them with a new DOM element and would just
 *    call out to `patch` to handle reconciling their children and so on.
 *
 * 3. Check, for both windows, to see if the element at the beginning of the
 *    window corresponds to the element at the end of the other window. This is
 *    a heuristic which will let us identify _some_ situations in which
 *    elements have changed position, for instance it _should_ detect that the
 *    children nodes themselves have not changed but merely moved in the
 *    following example:
 *
 *    oldVNode: `<div><element-one /><element-two /></div>`
 *    newVNode: `<div><element-two /><element-one /></div>`
 *
 *    If we find cases like this then we also need to move the concrete DOM
 *    elements corresponding to the moved children to write the re-order to the
 *    DOM.
 *
 * 4. Finally, if VNodes have the `key` attribute set on them we check for any
 *    nodes in the old children which have the same key as the first element in
 *    our window on the new children. If we find such a node we handle calling
 *    out to `patch`, moving relevant DOM nodes, and so on, in accordance with
 *    what we find.
 *
 * Finally, once we've narrowed our 'windows' to the point that either of them
 * collapse (i.e. they have length 0) we then handle any remaining VNode
 * insertion or deletion that needs to happen to get a DOM state that correctly
 * reflects the new child VNodes. If, for instance, after our window on the old
 * children has collapsed we still have more nodes on the new children that
 * we haven't dealt with yet then we need to add them, or if the new children
 * collapse but we still have unhandled _old_ children then we need to make
 * sure the corresponding DOM nodes are removed.
 *
 * @param parentElm the node into which the parent VNode is rendered
 * @param oldCh the old children of the parent node
 * @param newVNode the new VNode which will replace the parent
 * @param newCh the new children of the parent node
 */
const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let idxInOld = 0;
    let i = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    let elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // VNode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            // if the start nodes are the same then we should patch the new VNode
            // onto the old one, and increment our `newStartIdx` and `oldStartIdx`
            // indices to reflect that. We don't need to move any DOM Nodes around
            // since things are matched up in order.
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            // likewise, if the end nodes are the same we patch new onto old and
            // decrement our end indices, and also likewise in this case we don't
            // need to move any DOM Nodes.
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            patch(oldStartVnode, newEndVnode);
            // We need to move the element for `oldStartVnode` into a position which
            // will be appropriate for `newEndVnode`. For this we can use
            // `.insertBefore` and `oldEndVnode.$elm$.nextSibling`. If there is a
            // sibling for `oldEndVnode.$elm$` then we want to move the DOM node for
            // `oldStartVnode` between `oldEndVnode` and it's sibling, like so:
            //
            // <old-start-node />
            // <some-intervening-node />
            // <old-end-node />
            // <!-- ->              <-- `oldStartVnode.$elm$` should be inserted here
            // <next-sibling />
            //
            // If instead `oldEndVnode.$elm$` has no sibling then we just want to put
            // the node for `oldStartVnode` at the end of the children of
            // `parentElm`. Luckily, `Node.nextSibling` will return `null` if there
            // aren't any siblings, and passing `null` to `Node.insertBefore` will
            // append it to the children of the parent element.
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            patch(oldEndVnode, newStartVnode);
            // We've already checked above if `oldStartVnode` and `newStartVnode` are
            // the same node, so since we're here we know that they are not. Thus we
            // can move the element for `oldEndVnode` _before_ the element for
            // `oldStartVnode`, leaving `oldStartVnode` to be reconciled in the
            // future.
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // Here we do some checks to match up old and new nodes based on the
            // `$key$` attribute, which is set by putting a `key="my-key"` attribute
            // in the JSX for a DOM element in the implementation of a Stencil
            // component.
            //
            // First we check to see if there are any nodes in the array of old
            // children which have the same key as the first node in the new
            // children.
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                // We found a node in the old children which matches up with the first
                // node in the new children! So let's deal with that
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    // the tag doesn't match so we'll need a new DOM element
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    // invalidate the matching old node so that we won't try to update it
                    // again later on
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // We either didn't find an element in the old children that matches
                // the key of the first new child OR the build is not using `key`
                // attributes at all. In either case we need to create a new element
                // for the new node.
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                // if we created a new node then handle inserting it to the DOM
                {
                    oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        // we have some more new nodes to add which don't match up with old nodes
        addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        // there are nodes in the `oldCh` array which no longer correspond to nodes
        // in the new array, so lets remove them (which entails cleaning up the
        // relevant DOM nodes)
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
/**
 * Compare two VNodes to determine if they are the same
 *
 * **NB**: This function is an equality _heuristic_ based on the available
 * information set on the two VNodes and can be misleading under certain
 * circumstances. In particular, if the two nodes do not have `key` attrs
 * (available under `$key$` on VNodes) then the function falls back on merely
 * checking that they have the same tag.
 *
 * So, in other words, if `key` attrs are not set on VNodes which may be
 * changing order within a `children` array or something along those lines then
 * we could obtain a false positive and then have to do needless re-rendering.
 *
 * @param leftVNode the first VNode to check
 * @param rightVNode the second VNode to check
 * @returns whether they're equal or not
 */
const isSameVnode = (leftVNode, rightVNode) => {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (leftVNode.$tag$ === rightVNode.$tag$) {
        // this will be set if components in the build have `key` attrs set on them
        {
            return leftVNode.$key$ === rightVNode.$key$;
        }
    }
    return false;
};
/**
 * Handle reconciling an outdated VNode with a new one which corresponds to
 * it. This function handles flushing updates to the DOM and reconciling the
 * children of the two nodes (if any).
 *
 * @param oldVNode an old VNode whose DOM element and children we want to update
 * @param newVNode a new VNode representing an updated version of the old one
 */
const patch = (oldVNode, newVNode) => {
    const elm = (newVNode.$elm$ = oldVNode.$elm$);
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    const tag = newVNode.$tag$;
    const text = newVNode.$text$;
    if (text === null) {
        {
            // test if we're rendering an svg element, or still rendering nodes inside of one
            // only add this to the when the compiler sees we're using an svg somewhere
            isSvgMode = tag === 'svg' ? true : tag === 'foreignObject' ? false : isSvgMode;
        }
        {
            if (tag === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (oldChildren !== null && newChildren !== null) {
            // looks like there's child vnodes for both the old and new vnodes
            // so we need to call `updateChildren` to reconcile them
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (newChildren !== null) {
            // no old child vnodes, but there are new child vnodes to add
            if (oldVNode.$text$ !== null) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (oldChildren !== null) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
        if (isSvgMode && tag === 'svg') {
            isSvgMode = false;
        }
    }
    else if (oldVNode.$text$ !== text) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.data = text;
    }
};
const callNodeRefs = (vNode) => {
    {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
        vNode.$children$ && vNode.$children$.map(callNodeRefs);
    }
};
const renderVdom = (hostRef, renderFnResults) => {
    const hostElm = hostRef.$hostElement$;
    const cmpMeta = hostRef.$cmpMeta$;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
    hostTagName = hostElm.tagName;
    if (cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.map(([propName, attribute]) => (rootVnode.$attrs$[attribute] = hostElm[propName]));
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* VNODE_FLAGS.isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm );
    {
        scopeId = hostElm['s-sc'];
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
};
const attachToAncestor = (hostRef, ancestorComponent) => {
    if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
        ancestorComponent['s-p'].push(new Promise((r) => (hostRef.$onRenderResolve$ = r)));
    }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
    {
        hostRef.$flags$ |= 16 /* HOST_FLAGS.isQueuedForUpdate */;
    }
    if (hostRef.$flags$ & 4 /* HOST_FLAGS.isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* HOST_FLAGS.needsRerender */;
        return;
    }
    attachToAncestor(hostRef, hostRef.$ancestorComponent$);
    // there is no ancestor component or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
    return writeTask(dispatch) ;
};
const dispatchHooks = (hostRef, isInitialLoad) => {
    const endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
    const instance = hostRef.$lazyInstance$ ;
    let promise;
    if (isInitialLoad) {
        {
            hostRef.$flags$ |= 256 /* HOST_FLAGS.isListenReady */;
            if (hostRef.$queuedListeners$) {
                hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
                hostRef.$queuedListeners$ = null;
            }
        }
        {
            promise = safeCall(instance, 'componentWillLoad');
        }
    }
    endSchedule();
    return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
const updateComponent = async (hostRef, instance, isInitialLoad) => {
    // updateComponent
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
    const rc = elm['s-rc'];
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(hostRef);
    }
    const endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
    {
        callRender(hostRef, instance);
    }
    if (rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.map((cb) => cb());
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    {
        const childrenPromises = elm['s-p'];
        const postUpdate = () => postUpdateComponent(hostRef);
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* HOST_FLAGS.isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
};
const callRender = (hostRef, instance, elm) => {
    try {
        instance = instance.render && instance.render();
        {
            hostRef.$flags$ &= ~16 /* HOST_FLAGS.isQueuedForUpdate */;
        }
        {
            hostRef.$flags$ |= 2 /* HOST_FLAGS.hasRendered */;
        }
        {
            {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                {
                    renderVdom(hostRef, instance);
                }
            }
        }
    }
    catch (e) {
        consoleError(e, hostRef.$hostElement$);
    }
    return null;
};
const postUpdateComponent = (hostRef) => {
    const tagName = hostRef.$cmpMeta$.$tagName$;
    const elm = hostRef.$hostElement$;
    const endPostUpdate = createTime('postUpdate', tagName);
    const instance = hostRef.$lazyInstance$ ;
    const ancestorComponent = hostRef.$ancestorComponent$;
    {
        safeCall(instance, 'componentDidRender');
    }
    if (!(hostRef.$flags$ & 64 /* HOST_FLAGS.hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* HOST_FLAGS.hasLoadedComponent */;
        {
            // DOM WRITE!
            addHydratedFlag(elm);
        }
        {
            safeCall(instance, 'componentDidLoad');
        }
        endPostUpdate();
        {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
    }
    else {
        endPostUpdate();
    }
    {
        hostRef.$onInstanceResolve$(elm);
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* HOST_FLAGS.needsRerender */) {
            nextTick(() => scheduleUpdate(hostRef, false));
        }
        hostRef.$flags$ &= ~(4 /* HOST_FLAGS.isWaitingForChildren */ | 512 /* HOST_FLAGS.needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
const appDidLoad = (who) => {
    // on appload
    // we have finish the first big initial render
    {
        addHydratedFlag(doc.documentElement);
    }
    nextTick(() => emitEvent(win, 'appload', { detail: { namespace: NAMESPACE } }));
};
const safeCall = (instance, method, arg) => {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
const then = (promise, thenFn) => {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const addHydratedFlag = (elm) => elm.classList.add('hydrated')
    ;
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const elm = hostRef.$hostElement$ ;
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance = hostRef.$lazyInstance$ ;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    // explicitly check for NaN on both sides, as `NaN === NaN` is always false
    const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
    const didValueChange = newVal !== oldVal && !areBothNaN;
    if ((!(flags & 8 /* HOST_FLAGS.isConstructingInstance */) || oldVal === undefined) && didValueChange) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (instance) {
            // get an array of method names of watch functions to call
            if (cmpMeta.$watchers$ && flags & 128 /* HOST_FLAGS.isWatchReady */) {
                const watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.map((watchMethodName) => {
                        try {
                            // fire off each of the watch methods that are watching this property
                            instance[watchMethodName](newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e, elm);
                        }
                    });
                }
            }
            if ((flags & (2 /* HOST_FLAGS.hasRendered */ | 16 /* HOST_FLAGS.isQueuedForUpdate */)) === 2 /* HOST_FLAGS.hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(hostRef, false);
            }
        }
    }
};
/**
 * Attach a series of runtime constructs to a compiled Stencil component
 * constructor, including getters and setters for the `@Prop` and `@State`
 * decorators, callbacks for when attributes change, and so on.
 *
 * @param Cstr the constructor for a component that we need to process
 * @param cmpMeta metadata collected previously about the component
 * @param flags a number used to store a series of bit flags
 * @returns a reference to the same constructor passed in (but now mutated)
 */
const proxyComponent = (Cstr, cmpMeta, flags) => {
    if (cmpMeta.$members$) {
        if (Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.map(([memberName, [memberFlags]]) => {
            if ((memberFlags & 31 /* MEMBER_FLAGS.Prop */ ||
                    ((flags & 2 /* PROXY_FLAGS.proxyState */) && memberFlags & 32 /* MEMBER_FLAGS.State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true,
                });
            }
            else if (flags & 1 /* PROXY_FLAGS.isElementConstructor */ &&
                memberFlags & 64 /* MEMBER_FLAGS.Method */) {
                // proxyComponent - method
                Object.defineProperty(prototype, memberName, {
                    value(...args) {
                        const ref = getHostRef(this);
                        return ref.$onInstancePromise$.then(() => ref.$lazyInstance$[memberName](...args));
                    },
                });
            }
        });
        if ((flags & 1 /* PROXY_FLAGS.isElementConstructor */)) {
            const attrNameToPropName = new Map();
            prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                plt.jmp(() => {
                    const propName = attrNameToPropName.get(attrName);
                    //  In a web component lifecycle the attributeChangedCallback runs prior to connectedCallback
                    //  in the case where an attribute was set inline.
                    //  ```html
                    //    <my-component some-attribute="some-value"></my-component>
                    //  ```
                    //
                    //  There is an edge case where a developer sets the attribute inline on a custom element and then
                    //  programmatically changes it before it has been upgraded as shown below:
                    //
                    //  ```html
                    //    <!-- this component has _not_ been upgraded yet -->
                    //    <my-component id="test" some-attribute="some-value"></my-component>
                    //    <script>
                    //      // grab non-upgraded component
                    //      el = document.querySelector("#test");
                    //      el.someAttribute = "another-value";
                    //      // upgrade component
                    //      customElements.define('my-component', MyComponent);
                    //    </script>
                    //  ```
                    //  In this case if we do not unshadow here and use the value of the shadowing property, attributeChangedCallback
                    //  will be called with `newValue = "some-value"` and will set the shadowed property (this.someAttribute = "another-value")
                    //  to the value that was set inline i.e. "some-value" from above example. When
                    //  the connectedCallback attempts to unshadow it will use "some-value" as the initial value rather than "another-value"
                    //
                    //  The case where the attribute was NOT set inline but was not set programmatically shall be handled/unshadowed
                    //  by connectedCallback as this attributeChangedCallback will not fire.
                    //
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
                    //
                    //  TODO(STENCIL-16) we should think about whether or not we actually want to be reflecting the attributes to
                    //  properties here given that this goes against best practices outlined here
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#avoid-reentrancy
                    if (this.hasOwnProperty(propName)) {
                        newValue = this[propName];
                        delete this[propName];
                    }
                    else if (prototype.hasOwnProperty(propName) &&
                        typeof this[propName] === 'number' &&
                        this[propName] == newValue) {
                        // if the propName exists on the prototype of `Cstr`, this update may be a result of Stencil using native
                        // APIs to reflect props as attributes. Calls to `setAttribute(someElement, propName)` will result in
                        // `propName` to be converted to a `DOMString`, which may not be what we want for other primitive props.
                        return;
                    }
                    this[propName] = newValue === null && typeof this[propName] === 'boolean' ? false : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(([_, m]) => m[0] & 15 /* MEMBER_FLAGS.HasAttribute */) // filter to only keep props that should match attributes
                .map(([propName, m]) => {
                const attrName = m[1] || propName;
                attrNameToPropName.set(attrName, propName);
                if (m[0] & 512 /* MEMBER_FLAGS.ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ((hostRef.$flags$ & 32 /* HOST_FLAGS.hasInitializedComponent */) === 0) {
        {
            // we haven't initialized this element yet
            hostRef.$flags$ |= 32 /* HOST_FLAGS.hasInitializedComponent */;
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                const endLoad = uniqueTime();
                Cstr = await Cstr;
                endLoad();
            }
            if (!Cstr.isProxied) {
                // we've never proxied this Constructor before
                // let's add the getters/setters to its prototype before
                // the first time we create an instance of the implementation
                {
                    cmpMeta.$watchers$ = Cstr.watchers;
                }
                proxyComponent(Cstr, cmpMeta, 2 /* PROXY_FLAGS.proxyState */);
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            {
                hostRef.$flags$ |= 8 /* HOST_FLAGS.isConstructingInstance */;
            }
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            }
            catch (e) {
                consoleError(e);
            }
            {
                hostRef.$flags$ &= ~8 /* HOST_FLAGS.isConstructingInstance */;
            }
            {
                hostRef.$flags$ |= 128 /* HOST_FLAGS.isWatchReady */;
            }
            endNewInstance();
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        if (Cstr.style) {
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            const scopeId = getScopeId(cmpMeta);
            if (!styles.has(scopeId)) {
                const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
                registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */));
                endRegisterStyles();
            }
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(hostRef, true);
    if (ancestorComponent && ancestorComponent['s-rc']) {
        // this is the initial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent['s-rc'].push(schedule);
    }
    else {
        schedule();
    }
};
const fireConnectedCallback = (instance) => {
    {
        safeCall(instance, 'connectedCallback');
    }
};
const connectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const cmpMeta = hostRef.$cmpMeta$;
        const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        if (!(hostRef.$flags$ & 1 /* HOST_FLAGS.hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* HOST_FLAGS.hasConnected */;
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host)) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if (ancestorComponent['s-p']) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
                    if (memberFlags & 31 /* MEMBER_FLAGS.Prop */ && elm.hasOwnProperty(memberName)) {
                        const value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        else {
            // not the first time this has connected
            // reattach any event listeners to the host
            // since they would have been removed when disconnected
            addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
            // fire off connectedCallback() on component instance
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        endConnected();
    }
};
const disconnectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const instance = hostRef.$lazyInstance$ ;
        {
            if (hostRef.$rmListeners$) {
                hostRef.$rmListeners$.map((rmListener) => rmListener());
                hostRef.$rmListeners$ = undefined;
            }
        }
        {
            safeCall(instance, 'disconnectedCallback');
        }
    }
};
const patchSlotAppendChild = (HostElementPrototype) => {
    HostElementPrototype.__appendChild = HostElementPrototype.appendChild;
    HostElementPrototype.appendChild = function (newChild) {
        const slotName = (newChild['s-sn'] = getSlotName(newChild));
        const slotNode = getHostSlotNode(this.childNodes, slotName);
        if (slotNode) {
            const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
            const appendAfter = slotChildNodes[slotChildNodes.length - 1];
            return appendAfter.parentNode.insertBefore(newChild, appendAfter.nextSibling);
        }
        return this.__appendChild(newChild);
    };
};
const getSlotName = (node) => node['s-sn'] || (node.nodeType === 1 && node.getAttribute('slot')) || '';
/**
 * Recursively searches a series of child nodes for a slot with the provided name.
 * @param childNodes the nodes to search for a slot with a specific name.
 * @param slotName the name of the slot to match on.
 * @returns a reference to the slot node that matches the provided name, `null` otherwise
 */
const getHostSlotNode = (childNodes, slotName) => {
    let i = 0;
    let childNode;
    for (; i < childNodes.length; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && childNode['s-sn'] === slotName) {
            return childNode;
        }
        childNode = getHostSlotNode(childNode.childNodes, slotName);
        if (childNode) {
            return childNode;
        }
    }
    return null;
};
const getHostSlotChildNodes = (n, slotName) => {
    const childNodes = [n];
    while ((n = n.nextSibling) && n['s-sn'] === slotName) {
        childNodes.push(n);
    }
    return childNodes;
};
const bootstrapLazy = (lazyBundles, options = {}) => {
    const endBootstrap = createTime();
    const cmpTags = [];
    const exclude = options.exclude || [];
    const customElements = win.customElements;
    const head = doc.head;
    const metaCharset = /*@__PURE__*/ head.querySelector('meta[charset]');
    const visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    const deferredConnectedCallbacks = [];
    let appLoadFallback;
    let isBootstrapping = true;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    lazyBundles.map((lazyBundle) => {
        lazyBundle[1].map((compactMeta) => {
            const cmpMeta = {
                $flags$: compactMeta[0],
                $tagName$: compactMeta[1],
                $members$: compactMeta[2],
                $listeners$: compactMeta[3],
            };
            {
                cmpMeta.$members$ = compactMeta[2];
            }
            {
                cmpMeta.$listeners$ = compactMeta[3];
            }
            {
                cmpMeta.$attrsToReflect$ = [];
            }
            {
                cmpMeta.$watchers$ = {};
            }
            const tagName = cmpMeta.$tagName$;
            const HostElement = class extends HTMLElement {
                // StencilLazyHost
                constructor(self) {
                    // @ts-ignore
                    super(self);
                    self = this;
                    registerHost(self, cmpMeta);
                    if (cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) {
                        // this component is using shadow dom
                        // and this browser supports shadow dom
                        // add the read-only property "shadowRoot" to the host element
                        // adding the shadow root build conditionals to minimize runtime
                        {
                            {
                                self.attachShadow({
                                    mode: 'open',
                                    delegatesFocus: !!(cmpMeta.$flags$ & 16 /* CMP_FLAGS.shadowDelegatesFocus */),
                                });
                            }
                        }
                    }
                }
                connectedCallback() {
                    if (appLoadFallback) {
                        clearTimeout(appLoadFallback);
                        appLoadFallback = null;
                    }
                    if (isBootstrapping) {
                        // connectedCallback will be processed once all components have been registered
                        deferredConnectedCallbacks.push(this);
                    }
                    else {
                        plt.jmp(() => connectedCallback(this));
                    }
                }
                disconnectedCallback() {
                    plt.jmp(() => disconnectedCallback(this));
                }
                componentOnReady() {
                    return getHostRef(this).$onReadyPromise$;
                }
            };
            {
                patchSlotAppendChild(HostElement.prototype);
            }
            cmpMeta.$lazyBundleId$ = lazyBundle[0];
            if (!exclude.includes(tagName) && !customElements.get(tagName)) {
                cmpTags.push(tagName);
                customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* PROXY_FLAGS.isElementConstructor */));
            }
        });
    });
    {
        visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
        visibilityStyle.setAttribute('data-styles', '');
        head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
    // Process deferred connectedCallbacks now all components have been registered
    isBootstrapping = false;
    if (deferredConnectedCallbacks.length) {
        deferredConnectedCallbacks.map((host) => host.connectedCallback());
    }
    else {
        {
            plt.jmp(() => (appLoadFallback = setTimeout(appDidLoad, 30)));
        }
    }
    // Fallback appLoad event
    endBootstrap();
};
const Fragment = (_, children) => children;
const addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
    if (listeners) {
        listeners.map(([flags, name, method]) => {
            const target = getHostListenerTarget(elm, flags) ;
            const handler = hostListenerProxy(hostRef, method);
            const opts = hostListenerOpts(flags);
            plt.ael(target, name, handler, opts);
            (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
        });
    }
};
const hostListenerProxy = (hostRef, methodName) => (ev) => {
    try {
        {
            if (hostRef.$flags$ & 256 /* HOST_FLAGS.isListenReady */) {
                // instance is ready, let's call it's member method for this event
                hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
            }
        }
    }
    catch (e) {
        consoleError(e);
    }
};
const getHostListenerTarget = (elm, flags) => {
    if (flags & 4 /* LISTENER_FLAGS.TargetDocument */)
        return doc;
    if (flags & 8 /* LISTENER_FLAGS.TargetWindow */)
        return win;
    return elm;
};
// prettier-ignore
const hostListenerOpts = (flags) => (flags & 2 /* LISTENER_FLAGS.Capture */) !== 0;
const hostRefs = /*@__PURE__*/ new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set((hostRef.$lazyInstance$ = lazyInstance), hostRef);
const registerHost = (elm, cmpMeta) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $cmpMeta$: cmpMeta,
        $instanceValues$: new Map(),
    };
    {
        hostRef.$onInstancePromise$ = new Promise((r) => (hostRef.$onInstanceResolve$ = r));
    }
    {
        hostRef.$onReadyPromise$ = new Promise((r) => (hostRef.$onReadyResolve$ = r));
        elm['s-p'] = [];
        elm['s-rc'] = [];
    }
    addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
    return hostRefs.set(elm, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e, el) => (0, console.error)(e, el);
const cmpModules = /*@__PURE__*/ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
    // loadModuleImport
    const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    const bundleId = cmpMeta.$lazyBundleId$;
    const module = cmpModules.get(bundleId) ;
    if (module) {
        return module[exportName];
    }
    
    if (!hmrVersionId || !BUILD.hotModuleReplacement) {
      const processMod = importedModule => {
        cmpModules.set(bundleId, importedModule);
        return importedModule[exportName];
      }
      switch(bundleId) {
        
        case 'rux-accordion.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-accordion.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-accordion-item.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-accordion-item.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-breadcrumb.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-breadcrumb.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-breadcrumb-item.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-breadcrumb-item.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-card.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-card.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-checkbox.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-checkbox.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-checkbox-group.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-checkbox-group.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-classification-marking.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-classification-marking.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-clock.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-clock.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-container.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-container.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-dialog.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-dialog.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-global-status-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-global-status-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-360.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-360.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-3d-rotation.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-3d-rotation.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-4k.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-4k.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-ac-unit.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-ac-unit.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-access-alarms.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-access-alarms.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-access-time.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-access-time.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-accessibility.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-accessibility.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-accessibility-new.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-accessibility-new.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-accessible.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-accessible.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-accessible-forward.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-accessible-forward.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-account-balance.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-account-balance.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-account-balance-wallet.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-account-balance-wallet.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-account-box.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-account-box.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-account-circle.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-account-circle.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-adb.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-adb.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-add.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-add.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-add-a-photo.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-add-a-photo.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-add-alarm.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-add-alarm.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-add-alert.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-add-alert.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-add-box.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-add-box.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-add-circle.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-add-circle.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-add-circle-outline.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-add-circle-outline.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-add-comment.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-add-comment.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-add-location.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-add-location.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-add-photo-alternate.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-add-photo-alternate.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-add-shopping-cart.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-add-shopping-cart.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-add-to-home-screen.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-add-to-home-screen.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-add-to-photos.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-add-to-photos.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-add-to-queue.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-add-to-queue.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-adjust.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-adjust.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-airline-seat-flat.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-airline-seat-flat.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-airline-seat-flat-angled.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-airline-seat-flat-angled.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-airline-seat-individual-suite.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-airline-seat-individual-suite.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-airline-seat-legroom-extra.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-airline-seat-legroom-extra.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-airline-seat-legroom-normal.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-airline-seat-legroom-normal.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-airline-seat-legroom-reduced.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-airline-seat-legroom-reduced.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-airline-seat-recline-extra.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-airline-seat-recline-extra.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-airline-seat-recline-normal.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-airline-seat-recline-normal.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-airplanemode-active.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-airplanemode-active.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-airplanemode-inactive.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-airplanemode-inactive.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-airplay.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-airplay.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-airport-shuttle.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-airport-shuttle.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-alarm.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-alarm.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-alarm-add.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-alarm-add.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-alarm-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-alarm-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-alarm-on.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-alarm-on.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-album.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-album.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-all-inbox.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-all-inbox.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-all-inclusive.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-all-inclusive.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-all-out.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-all-out.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-alternate-email.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-alternate-email.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-altitude.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-altitude.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-android.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-android.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-announcement.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-announcement.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-antenna.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-antenna.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-antenna-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-antenna-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-antenna-receive.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-antenna-receive.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-antenna-transmit.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-antenna-transmit.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-apps.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-apps.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-archive.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-archive.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-arrow-back.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-back.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-arrow-back-ios.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-back-ios.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-arrow-downward.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-downward.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-arrow-drop-down.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-drop-down.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-arrow-drop-down-circle.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-drop-down-circle.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-arrow-drop-up.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-drop-up.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-arrow-forward.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-forward.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-arrow-forward-ios.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-forward-ios.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-arrow-left.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-left.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-arrow-right.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-right.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-arrow-right-alt.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-right-alt.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-arrow-upward.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-upward.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-art-track.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-art-track.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-aspect-ratio.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-aspect-ratio.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-assessment.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-assessment.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-assignment.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-assignment.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-assignment-find.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-assignment-find.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-assignment-late.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-assignment-late.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-assignment-return.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-assignment-return.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-assignment-returned.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-assignment-returned.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-assignment-turned-in.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-assignment-turned-in.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-assistant.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-assistant.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-assistant-photo.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-assistant-photo.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-attach-file.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-attach-file.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-attach-money.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-attach-money.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-attachment.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-attachment.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-audiotrack.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-audiotrack.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-autorenew.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-autorenew.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-av-timer.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-av-timer.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-backspace.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-backspace.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-backup.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-backup.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-ballot.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-ballot.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-bar-chart.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-bar-chart.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-battery-20.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-battery-20.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-battery-30.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-battery-30.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-battery-50.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-battery-50.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-battery-60.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-battery-60.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-battery-80.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-battery-80.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-battery-90.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-battery-90.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-battery-alert.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-battery-alert.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-battery-charging-20.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-battery-charging-20.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-battery-charging-30.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-battery-charging-30.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-battery-charging-50.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-battery-charging-50.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-battery-charging-60.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-battery-charging-60.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-battery-charging-80.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-battery-charging-80.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-battery-charging-90.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-battery-charging-90.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-battery-charging-full.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-battery-charging-full.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-battery-full.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-battery-full.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-battery-std.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-battery-std.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-battery-unknown.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-battery-unknown.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-beach-access.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-beach-access.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-beenhere.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-beenhere.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-block.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-block.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-bluetooth.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-bluetooth.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-bluetooth-audio.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-bluetooth-audio.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-bluetooth-connected.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-bluetooth-connected.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-bluetooth-disabled.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-bluetooth-disabled.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-bluetooth-searching.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-bluetooth-searching.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-blur-circular.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-blur-circular.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-blur-linear.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-blur-linear.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-blur-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-blur-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-blur-on.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-blur-on.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-book.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-book.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-bookmark.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-bookmark.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-bookmark-border.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-bookmark-border.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-bookmarks.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-bookmarks.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-border-all.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-border-all.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-border-bottom.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-border-bottom.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-border-clear.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-border-clear.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-border-color.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-border-color.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-border-horizontal.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-border-horizontal.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-border-inner.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-border-inner.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-border-left.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-border-left.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-border-outer.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-border-outer.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-border-right.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-border-right.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-border-style.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-border-style.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-border-top.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-border-top.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-border-vertical.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-border-vertical.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-branding-watermark.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-branding-watermark.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-brightness-1.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-1.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-brightness-2.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-2.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-brightness-3.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-3.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-brightness-4.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-4.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-brightness-5.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-5.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-brightness-6.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-6.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-brightness-7.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-7.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-brightness-auto.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-auto.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-brightness-high.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-high.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-brightness-low.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-low.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-brightness-medium.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-medium.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-broken-image.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-broken-image.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-brush.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-brush.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-bubble-chart.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-bubble-chart.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-bug-report.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-bug-report.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-build.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-build.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-burst-mode.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-burst-mode.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-business.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-business.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-business-center.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-business-center.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-cached.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-cached.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-cake.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-cake.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-calendar-today.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-calendar-today.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-calendar-view-day.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-calendar-view-day.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-call.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-call.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-call-end.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-call-end.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-call-made.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-call-made.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-call-merge.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-call-merge.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-call-missed.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-call-missed.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-call-missed-outgoing.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-call-missed-outgoing.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-call-received.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-call-received.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-call-split.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-call-split.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-call-to-action.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-call-to-action.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-camera.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-camera.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-camera-alt.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-camera-alt.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-camera-enhance.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-camera-enhance.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-camera-front.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-camera-front.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-camera-rear.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-camera-rear.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-camera-roll.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-camera-roll.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-cancel.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-cancel.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-cancel-presentation.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-cancel-presentation.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-card-giftcard.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-card-giftcard.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-card-membership.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-card-membership.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-card-travel.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-card-travel.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-casino.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-casino.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-cast.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-cast.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-cast-connected.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-cast-connected.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-cast-for-education.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-cast-for-education.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-category.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-category.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-cell-wifi.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-cell-wifi.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-center-focus-strong.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-center-focus-strong.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-center-focus-weak.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-center-focus-weak.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-change-history.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-change-history.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-chat.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-chat.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-chat-bubble.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-chat-bubble.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-chat-bubble-outline.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-chat-bubble-outline.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-check.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-check.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-check-box.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-check-box.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-check-box-outline-blank.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-check-box-outline-blank.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-check-circle.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-check-circle.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-check-circle-outline.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-check-circle-outline.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-chevron-left.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-chevron-left.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-chevron-right.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-chevron-right.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-child-care.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-child-care.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-child-friendly.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-child-friendly.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-chrome-reader-mode.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-chrome-reader-mode.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-class.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-class.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-clear.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-clear.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-clear-all.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-clear-all.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-close.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-close.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-closed-caption.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-closed-caption.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-cloud.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-cloud.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-cloud-circle.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-cloud-circle.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-cloud-done.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-cloud-done.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-cloud-download.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-cloud-download.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-cloud-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-cloud-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-cloud-queue.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-cloud-queue.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-cloud-upload.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-cloud-upload.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-code.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-code.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-collections.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-collections.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-collections-bookmark.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-collections-bookmark.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-color-lens.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-color-lens.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-colorize.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-colorize.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-comment.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-comment.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-commute.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-commute.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-compare.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-compare.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-compare-arrows.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-compare-arrows.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-compass-calibration.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-compass-calibration.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-computer.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-computer.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-confirmation-number.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-confirmation-number.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-contact-mail.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-contact-mail.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-contact-phone.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-contact-phone.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-contact-support.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-contact-support.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-contacts.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-contacts.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-control-camera.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-control-camera.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-control-point.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-control-point.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-control-point-duplicate.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-control-point-duplicate.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-copyright.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-copyright.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-create.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-create.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-create-new-folder.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-create-new-folder.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-credit-card.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-credit-card.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-crop.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-crop.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-crop-16-9.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-crop-16-9.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-crop-3-2.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-crop-3-2.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-crop-5-4.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-crop-5-4.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-crop-7-5.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-crop-7-5.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-crop-din.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-crop-din.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-crop-free.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-crop-free.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-crop-landscape.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-crop-landscape.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-crop-original.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-crop-original.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-crop-portrait.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-crop-portrait.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-crop-rotate.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-crop-rotate.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-crop-square.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-crop-square.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-dashboard.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-dashboard.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-data-usage.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-data-usage.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-date-range.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-date-range.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-dehaze.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-dehaze.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-delete.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-delete.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-delete-forever.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-delete-forever.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-delete-outline.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-delete-outline.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-delete-sweep.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-delete-sweep.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-departure-board.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-departure-board.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-description.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-description.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-desktop-access-disabled.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-desktop-access-disabled.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-desktop-mac.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-desktop-mac.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-desktop-windows.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-desktop-windows.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-details.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-details.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-developer-board.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-developer-board.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-developer-mode.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-developer-mode.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-device-hub.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-device-hub.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-device-unknown.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-device-unknown.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-devices.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-devices.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-devices-other.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-devices-other.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-dialer-sip.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-dialer-sip.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-dialpad.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-dialpad.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-directions.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-directions.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-directions-bike.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-directions-bike.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-directions-boat.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-directions-boat.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-directions-bus.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-directions-bus.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-directions-car.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-directions-car.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-directions-railway.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-directions-railway.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-directions-run.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-directions-run.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-directions-subway.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-directions-subway.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-directions-transit.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-directions-transit.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-directions-walk.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-directions-walk.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-disc-full.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-disc-full.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-dns.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-dns.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-dock.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-dock.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-domain.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-domain.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-domain-disabled.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-domain-disabled.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-done.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-done.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-done-all.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-done-all.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-done-outline.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-done-outline.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-donut-large.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-donut-large.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-donut-small.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-donut-small.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-drafts.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-drafts.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-drag-handle.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-drag-handle.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-drag-indicator.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-drag-indicator.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-drive-eta.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-drive-eta.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-duo.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-duo.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-dvr.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-dvr.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-edit.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-edit.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-edit-attributes.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-edit-attributes.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-edit-location.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-edit-location.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-eject.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-eject.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-email.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-email.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-enhanced-encryption.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-enhanced-encryption.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-equalizer.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-equalizer.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-equipment.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-equipment.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-error.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-error.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-error-outline.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-error-outline.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-euro-symbol.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-euro-symbol.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-ev-station.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-ev-station.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-event.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-event.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-event-available.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-event-available.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-event-busy.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-event-busy.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-event-note.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-event-note.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-exit-to-app.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-exit-to-app.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-expand-less.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-expand-less.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-expand-more.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-expand-more.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-explicit.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-explicit.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-explore.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-explore.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-explore-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-explore-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-exposure.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-exposure.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-exposure-neg-1.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-exposure-neg-1.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-exposure-neg-2.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-exposure-neg-2.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-exposure-plus-1.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-exposure-plus-1.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-exposure-plus-2.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-exposure-plus-2.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-exposure-zero.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-exposure-zero.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-extension.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-extension.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-face.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-face.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-fast-forward.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-fast-forward.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-fast-rewind.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-fast-rewind.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-fastfood.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-fastfood.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-favorite.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-favorite.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-favorite-border.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-favorite-border.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-featured-play-list.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-featured-play-list.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-featured-video.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-featured-video.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-feedback.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-feedback.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-fiber-dvr.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-fiber-dvr.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-fiber-manual-record.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-fiber-manual-record.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-fiber-new.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-fiber-new.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-fiber-pin.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-fiber-pin.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-fiber-smart-record.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-fiber-smart-record.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-file-copy.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-file-copy.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-1.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-1.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-2.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-2.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-3.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-3.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-4.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-4.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-5.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-5.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-6.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-6.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-7.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-7.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-8.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-8.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-9.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-9.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-9-plus.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-9-plus.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-b-and-w.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-b-and-w.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-center-focus.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-center-focus.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-drama.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-drama.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-frames.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-frames.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-hdr.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-hdr.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-list.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-list.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-none.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-none.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-tilt-shift.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-tilt-shift.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-filter-vintage.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-filter-vintage.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-find-in-page.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-find-in-page.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-find-replace.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-find-replace.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-fingerprint.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-fingerprint.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-first-page.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-first-page.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-fitness-center.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-fitness-center.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-flag.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-flag.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-flare.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-flare.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-flash-auto.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-flash-auto.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-flash-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-flash-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-flash-on.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-flash-on.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-flight.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-flight.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-flight-land.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-flight-land.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-flight-takeoff.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-flight-takeoff.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-flip.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-flip.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-flip-to-back.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-flip-to-back.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-flip-to-front.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-flip-to-front.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-folder.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-folder.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-folder-open.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-folder-open.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-folder-shared.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-folder-shared.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-folder-special.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-folder-special.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-font-download.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-font-download.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-align-center.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-align-center.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-align-justify.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-align-justify.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-align-left.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-align-left.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-align-right.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-align-right.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-bold.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-bold.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-clear.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-clear.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-color-fill.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-color-fill.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-color-reset.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-color-reset.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-color-text.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-color-text.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-indent-decrease.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-indent-decrease.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-indent-increase.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-indent-increase.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-italic.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-italic.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-line-spacing.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-line-spacing.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-list-bulleted.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-list-bulleted.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-list-numbered.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-list-numbered.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-list-numbered-rtl.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-list-numbered-rtl.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-paint.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-paint.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-quote.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-quote.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-shapes.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-shapes.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-size.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-size.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-strikethrough.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-strikethrough.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-textdirection-l-to-r.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-textdirection-l-to-r.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-textdirection-r-to-l.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-textdirection-r-to-l.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-format-underlined.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-format-underlined.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-forum.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-forum.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-forward.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-forward.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-forward-10.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-forward-10.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-forward-30.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-forward-30.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-forward-5.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-forward-5.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-free-breakfast.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-free-breakfast.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-fullscreen.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-fullscreen.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-fullscreen-exit.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-fullscreen-exit.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-functions.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-functions.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-g-translate.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-g-translate.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-gamepad.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-gamepad.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-games.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-games.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-gavel.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-gavel.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-gesture.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-gesture.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-get-app.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-get-app.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-gif.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-gif.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-golf-course.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-golf-course.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-gps-fixed.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-gps-fixed.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-gps-not-fixed.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-gps-not-fixed.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-gps-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-gps-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-grade.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-grade.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-gradient.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-gradient.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-grain.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-grain.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-graphic-eq.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-graphic-eq.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-grid-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-grid-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-grid-on.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-grid-on.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-group.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-group.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-group-add.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-group-add.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-group-work.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-group-work.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-hardware.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-hardware.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-hd.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-hd.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-hdr-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-hdr-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-hdr-on.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-hdr-on.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-hdr-strong.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-hdr-strong.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-hdr-weak.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-hdr-weak.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-headset.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-headset.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-headset-mic.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-headset-mic.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-healing.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-healing.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-hearing.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-hearing.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-help.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-help.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-help-outline.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-help-outline.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-high-quality.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-high-quality.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-highlight.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-highlight.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-highlight-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-highlight-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-history.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-history.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-home.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-home.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-horizontal-split.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-horizontal-split.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-hot-tub.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-hot-tub.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-hotel.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-hotel.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-hourglass-empty.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-hourglass-empty.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-hourglass-full.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-hourglass-full.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-how-to-reg.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-how-to-reg.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-how-to-vote.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-how-to-vote.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-http.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-http.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-https.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-https.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-image.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-image.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-image-aspect-ratio.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-image-aspect-ratio.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-image-search.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-image-search.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-import-contacts.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-import-contacts.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-import-export.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-import-export.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-important-devices.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-important-devices.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-inbox.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-inbox.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-indeterminate-check-box.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-indeterminate-check-box.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-info.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-info.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-input.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-input.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-insert-chart.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-insert-chart.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-insert-chart-outlined.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-insert-chart-outlined.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-insert-comment.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-insert-comment.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-insert-drive-file.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-insert-drive-file.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-insert-emoticon.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-insert-emoticon.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-insert-invitation.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-insert-invitation.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-insert-link.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-insert-link.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-insert-photo.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-insert-photo.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-invert-colors.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-invert-colors.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-invert-colors-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-invert-colors-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-iso.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-iso.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-keyboard.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-keyboard-arrow-down.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-arrow-down.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-keyboard-arrow-left.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-arrow-left.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-keyboard-arrow-right.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-arrow-right.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-keyboard-arrow-up.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-arrow-up.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-keyboard-backspace.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-backspace.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-keyboard-capslock.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-capslock.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-keyboard-hide.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-hide.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-keyboard-return.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-return.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-keyboard-tab.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-tab.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-keyboard-voice.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-voice.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-kitchen.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-kitchen.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-label.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-label.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-label-important.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-label-important.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-label-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-label-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-landscape.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-landscape.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-language.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-language.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-laptop.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-laptop.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-laptop-chromebook.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-laptop-chromebook.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-laptop-mac.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-laptop-mac.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-laptop-windows.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-laptop-windows.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-last-page.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-last-page.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-launch.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-launch.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-layers.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-layers.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-layers-clear.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-layers-clear.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-leak-add.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-leak-add.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-leak-remove.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-leak-remove.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-lens.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-lens.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-library-add.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-library-add.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-library-books.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-library-books.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-library-music.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-library-music.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-line-style.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-line-style.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-line-weight.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-line-weight.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-linear-scale.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-linear-scale.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-link.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-link.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-link-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-link-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-linked-camera.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-linked-camera.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-list.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-list.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-list-alt.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-list-alt.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-live-help.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-live-help.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-live-tv.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-live-tv.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-activity.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-activity.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-airport.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-airport.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-atm.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-atm.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-cafe.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-cafe.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-car-wash.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-car-wash.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-convenience-store.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-convenience-store.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-dining.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-dining.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-drink.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-drink.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-gas-station.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-gas-station.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-grocery-store.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-grocery-store.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-hospital.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-hospital.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-hotel.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-hotel.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-laundry-service.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-laundry-service.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-library.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-library.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-mall.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-mall.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-movies.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-movies.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-offer.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-offer.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-parking.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-parking.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-pharmacy.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-pharmacy.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-phone.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-phone.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-play.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-play.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-post-office.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-post-office.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-printshop.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-printshop.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-see.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-see.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-shipping.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-shipping.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-local-taxi.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-local-taxi.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-location-city.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-location-city.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-location-disabled.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-location-disabled.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-location-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-location-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-location-on.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-location-on.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-location-searching.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-location-searching.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-lock.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-lock.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-lock-open.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-lock-open.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-looks.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-looks.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-looks-1.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-looks-1.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-looks-2.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-looks-2.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-looks-3.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-looks-3.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-looks-4.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-looks-4.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-looks-5.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-looks-5.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-looks-6.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-looks-6.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-loop.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-loop.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-loupe.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-loupe.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-low-priority.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-low-priority.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-loyalty.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-loyalty.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-mail.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-mail.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-mail-outline.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-mail-outline.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-map.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-map.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-markunread.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-markunread.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-markunread-mailbox.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-markunread-mailbox.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-maximize.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-maximize.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-meeting-room.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-meeting-room.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-memory.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-memory.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-menu.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-menu.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-merge-type.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-merge-type.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-message.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-message.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-mic.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-mic.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-mic-none.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-mic-none.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-mic-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-mic-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-minimize.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-minimize.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-missed-video-call.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-missed-video-call.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-mission.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-mission.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-mms.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-mms.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-mobile-friendly.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-mobile-friendly.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-mobile-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-mobile-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-mobile-screen-share.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-mobile-screen-share.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-mode-comment.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-mode-comment.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-monetization-on.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-monetization-on.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-money.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-money.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-money-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-money-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-monochrome-photos.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-monochrome-photos.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-mood.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-mood.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-mood-bad.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-mood-bad.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-more.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-more.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-more-horiz.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-more-horiz.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-more-vert.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-more-vert.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-motorcycle.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-motorcycle.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-mouse.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-mouse.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-move-to-inbox.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-move-to-inbox.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-movie.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-movie.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-movie-creation.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-movie-creation.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-movie-filter.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-movie-filter.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-multiline-chart.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-multiline-chart.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-music-note.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-music-note.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-music-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-music-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-music-video.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-music-video.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-my-location.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-my-location.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-nature.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-nature.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-nature-people.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-nature-people.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-navigate-before.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-navigate-before.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-navigate-next.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-navigate-next.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-navigation.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-navigation.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-near-me.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-near-me.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-netcom.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-netcom.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-network-cell.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-network-cell.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-network-check.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-network-check.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-network-locked.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-network-locked.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-network-wifi.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-network-wifi.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-new-releases.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-new-releases.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-next-week.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-next-week.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-nfc.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-nfc.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-no-encryption.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-no-encryption.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-no-meeting-room.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-no-meeting-room.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-no-sim.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-no-sim.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-not-interested.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-not-interested.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-not-listed-location.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-not-listed-location.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-note.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-note.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-note-add.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-note-add.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-notes.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-notes.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-notification-important.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-notification-important.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-notifications.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-notifications.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-notifications-active.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-notifications-active.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-notifications-none.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-notifications-none.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-notifications-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-notifications-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-notifications-paused.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-notifications-paused.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-offline-bolt.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-offline-bolt.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-offline-pin.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-offline-pin.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-ondemand-video.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-ondemand-video.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-opacity.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-opacity.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-open-in-browser.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-open-in-browser.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-open-in-new.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-open-in-new.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-open-with.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-open-with.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-outlined-flag.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-outlined-flag.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-pages.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-pages.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-pageview.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-pageview.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-palette.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-palette.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-pan-tool.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-pan-tool.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-panorama.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-panorama.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-panorama-fish-eye.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-panorama-fish-eye.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-panorama-horizontal.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-panorama-horizontal.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-panorama-vertical.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-panorama-vertical.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-panorama-wide-angle.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-panorama-wide-angle.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-party-mode.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-party-mode.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-pause.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-pause.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-pause-circle-filled.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-pause-circle-filled.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-pause-circle-outline.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-pause-circle-outline.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-pause-presentation.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-pause-presentation.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-payload.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-payload.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-payment.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-payment.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-people-outline.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-people-outline.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-perm-camera-mic.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-perm-camera-mic.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-perm-contact-calendar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-perm-contact-calendar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-perm-data-setting.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-perm-data-setting.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-perm-device-information.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-perm-device-information.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-perm-identity.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-perm-identity.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-perm-media.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-perm-media.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-perm-phone-msg.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-perm-phone-msg.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-perm-scan-wifi.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-perm-scan-wifi.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-person.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-person.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-person-add.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-person-add.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-person-add-disabled.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-person-add-disabled.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-person-outline.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-person-outline.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-person-pin.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-person-pin.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-person-pin-circle.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-person-pin-circle.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-personal-video.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-personal-video.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-pets.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-pets.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-phone.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-phone.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-phone-android.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-phone-android.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-phone-bluetooth-speaker.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-phone-bluetooth-speaker.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-phone-callback.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-phone-callback.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-phone-forwarded.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-phone-forwarded.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-phone-in-talk.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-phone-in-talk.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-phone-iphone.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-phone-iphone.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-phone-locked.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-phone-locked.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-phone-missed.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-phone-missed.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-phone-paused.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-phone-paused.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-phonelink.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-phonelink.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-phonelink-erase.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-phonelink-erase.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-phonelink-lock.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-phonelink-lock.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-phonelink-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-phonelink-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-phonelink-ring.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-phonelink-ring.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-phonelink-setup.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-phonelink-setup.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-photo.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-photo.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-photo-album.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-photo-album.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-photo-camera.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-photo-camera.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-photo-filter.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-photo-filter.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-photo-library.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-photo-library.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-photo-size-select-actual.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-photo-size-select-actual.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-photo-size-select-large.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-photo-size-select-large.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-photo-size-select-small.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-photo-size-select-small.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-picture-as-pdf.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-picture-as-pdf.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-picture-in-picture.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-picture-in-picture.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-picture-in-picture-alt.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-picture-in-picture-alt.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-pie-chart.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-pie-chart.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-pin-drop.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-pin-drop.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-place.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-place.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-play-arrow.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-play-arrow.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-play-circle-filled.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-play-circle-filled.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-play-circle-filled-white.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-play-circle-filled-white.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-play-circle-outline.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-play-circle-outline.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-play-for-work.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-play-for-work.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-playlist-add.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-playlist-add.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-playlist-add-check.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-playlist-add-check.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-playlist-play.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-playlist-play.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-plus-one.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-plus-one.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-poll.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-poll.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-pool.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-pool.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-portable-wifi-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-portable-wifi-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-portrait.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-portrait.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-power.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-power.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-power-input.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-power-input.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-power-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-power-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-power-settings-new.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-power-settings-new.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-pregnant-woman.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-pregnant-woman.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-present-to-all.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-present-to-all.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-print.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-print.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-print-disabled.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-print-disabled.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-priority-high.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-priority-high.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-processor.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-processor.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-processor-alt.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-processor-alt.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-propulsion-power.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-propulsion-power.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-public.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-public.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-publish.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-publish.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-query-builder.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-query-builder.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-question-answer.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-question-answer.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-queue.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-queue.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-queue-music.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-queue-music.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-queue-play-next.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-queue-play-next.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-radio.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-radio.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-radio-button-checked.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-radio-button-checked.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-radio-button-unchecked.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-radio-button-unchecked.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-rate-review.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-rate-review.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-receipt.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-receipt.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-recent-actors.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-recent-actors.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-record-voice-over.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-record-voice-over.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-redeem.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-redeem.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-redo.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-redo.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-refresh.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-refresh.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-release.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-release.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-remove.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-remove.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-remove-circle.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-remove-circle.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-remove-circle-outline.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-remove-circle-outline.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-remove-from-queue.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-remove-from-queue.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-remove-red-eye.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-remove-red-eye.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-remove-shopping-cart.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-remove-shopping-cart.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-reorder.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-reorder.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-repeat.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-repeat.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-repeat-one.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-repeat-one.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-replay.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-replay.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-replay-10.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-replay-10.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-replay-30.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-replay-30.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-replay-5.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-replay-5.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-reply.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-reply.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-reply-all.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-reply-all.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-report.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-report.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-report-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-report-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-report-problem.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-report-problem.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-restaurant.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-restaurant.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-restaurant-menu.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-restaurant-menu.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-restore.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-restore.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-restore-from-trash.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-restore-from-trash.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-restore-page.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-restore-page.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-ring-volume.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-ring-volume.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-room.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-room.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-room-service.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-room-service.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-rotate-90-degrees-cc.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-rotate-90-degrees-cc.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-rotate-left.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-rotate-left.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-rotate-right.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-rotate-right.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-rounded-corner.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-rounded-corner.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-router.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-router.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-rowing.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-rowing.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-rss-feed.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-rss-feed.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-rv-hookup.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-rv-hookup.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-satellite.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-satellite.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-satellite-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-satellite-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-satellite-receive.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-satellite-receive.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-satellite-transmit.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-satellite-transmit.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-save.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-save.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-save-alt.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-save-alt.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-scanner.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-scanner.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-scatter-plot.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-scatter-plot.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-schedule.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-schedule.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-school.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-school.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-score.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-score.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-screen-lock-landscape.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-screen-lock-landscape.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-screen-lock-portrait.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-screen-lock-portrait.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-screen-lock-rotation.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-screen-lock-rotation.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-screen-rotation.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-screen-rotation.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-screen-share.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-screen-share.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-sd-card.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-sd-card.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-sd-storage.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-sd-storage.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-search.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-search.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-seat.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-seat.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-security.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-security.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-select-all.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-select-all.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-send.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-send.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-sentiment-dissatisfied.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-sentiment-dissatisfied.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-sentiment-satisfied.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-sentiment-satisfied.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-sentiment-satisfied-alt.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-sentiment-satisfied-alt.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-sentiment-very-dissatisfied.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-sentiment-very-dissatisfied.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-sentiment-very-satisfied.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-sentiment-very-satisfied.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-set-power.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-set-power.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings-applications.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings-applications.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings-backup-restore.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings-backup-restore.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings-bluetooth.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings-bluetooth.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings-brightness.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings-brightness.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings-cell.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings-cell.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings-ethernet.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings-ethernet.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings-input-antenna.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings-input-antenna.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings-input-component.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings-input-component.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings-input-composite.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings-input-composite.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings-input-hdmi.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings-input-hdmi.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings-input-svideo.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings-input-svideo.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings-overscan.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings-overscan.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings-phone.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings-phone.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings-power.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings-power.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings-remote.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings-remote.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings-system-daydream.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings-system-daydream.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-settings-voice.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-settings-voice.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-share.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-share.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-shop.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-shop.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-shop-two.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-shop-two.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-shopping-basket.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-shopping-basket.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-shopping-cart.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-shopping-cart.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-short-text.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-short-text.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-show-chart.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-show-chart.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-shuffle.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-shuffle.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-shutter-speed.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-shutter-speed.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-cellular-0-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-0-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-cellular-1-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-1-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-cellular-2-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-2-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-cellular-3-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-3-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-cellular-4-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-4-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-cellular-alt.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-alt.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-cellular-connected-no-internet-0-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-connected-no-internet-0-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-cellular-connected-no-internet-1-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-connected-no-internet-1-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-cellular-connected-no-internet-2-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-connected-no-internet-2-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-cellular-connected-no-internet-3-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-connected-no-internet-3-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-cellular-connected-no-internet-4-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-connected-no-internet-4-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-cellular-no-sim.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-no-sim.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-cellular-null.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-null.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-cellular-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-wifi-0-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-0-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-wifi-1-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-1-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-wifi-1-bar-lock.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-1-bar-lock.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-wifi-2-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-2-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-wifi-2-bar-lock.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-2-bar-lock.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-wifi-3-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-3-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-wifi-3-bar-lock.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-3-bar-lock.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-wifi-4-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-4-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-wifi-4-bar-lock.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-4-bar-lock.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-signal-wifi-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-sim-card.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-sim-card.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-skip-next.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-skip-next.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-skip-previous.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-skip-previous.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-slideshow.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-slideshow.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-slow-motion-video.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-slow-motion-video.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-smartphone.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-smartphone.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-smoke-free.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-smoke-free.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-smoking-rooms.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-smoking-rooms.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-sms.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-sms.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-sms-failed.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-sms-failed.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-snooze.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-snooze.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-solar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-solar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-sort.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-sort.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-sort-by-alpha.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-sort-by-alpha.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-spa.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-spa.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-space-bar.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-space-bar.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-speaker.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-speaker.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-speaker-group.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-speaker-group.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-speaker-notes.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-speaker-notes.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-speaker-notes-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-speaker-notes-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-speaker-phone.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-speaker-phone.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-spellcheck.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-spellcheck.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-star.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-star.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-star-border.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-star-border.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-star-half.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-star-half.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-star-rate.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-star-rate.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-stars.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-stars.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-stay-current-landscape.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-stay-current-landscape.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-stay-current-portrait.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-stay-current-portrait.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-stay-primary-landscape.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-stay-primary-landscape.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-stay-primary-portrait.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-stay-primary-portrait.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-stop.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-stop.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-stop-screen-share.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-stop-screen-share.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-storage.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-storage.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-store.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-store.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-store-mall-directory.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-store-mall-directory.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-straighten.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-straighten.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-streetview.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-streetview.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-strikethrough-s.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-strikethrough-s.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-style.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-style.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-subdirectory-arrow-left.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-subdirectory-arrow-left.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-subdirectory-arrow-right.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-subdirectory-arrow-right.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-subject.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-subject.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-subscriptions.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-subscriptions.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-subtitles.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-subtitles.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-subway.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-subway.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-supervised-user-circle.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-supervised-user-circle.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-supervisor-account.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-supervisor-account.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-surround-sound.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-surround-sound.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-swap-calls.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-swap-calls.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-swap-horiz.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-swap-horiz.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-swap-horizontal-circle.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-swap-horizontal-circle.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-swap-vert.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-swap-vert.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-swap-vertical-circle.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-swap-vertical-circle.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-switch-camera.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-switch-camera.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-switch-video.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-switch-video.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-sync.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-sync.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-sync-disabled.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-sync-disabled.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-sync-problem.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-sync-problem.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-system-update.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-system-update.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-tab.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-tab.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-tab-unselected.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-tab-unselected.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-table-chart.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-table-chart.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-tablet.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-tablet.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-tablet-android.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-tablet-android.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-tablet-mac.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-tablet-mac.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-tag-faces.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-tag-faces.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-tap-and-play.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-tap-and-play.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-terrain.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-terrain.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-text-fields.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-text-fields.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-text-format.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-text-format.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-text-rotate-up.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-text-rotate-up.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-text-rotate-vertical.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-text-rotate-vertical.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-text-rotation-none.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-text-rotation-none.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-textsms.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-textsms.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-texture.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-texture.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-theaters.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-theaters.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-thermal.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-thermal.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-thumb-down.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-thumb-down.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-thumb-down-alt.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-thumb-down-alt.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-thumb-up.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-thumb-up.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-thumb-up-alt.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-thumb-up-alt.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-thumbs-up-down.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-thumbs-up-down.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-time-to-leave.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-time-to-leave.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-timelapse.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-timelapse.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-timeline.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-timeline.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-timer.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-timer.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-timer-10.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-timer-10.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-timer-3.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-timer-3.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-timer-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-timer-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-title.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-title.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-toc.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-toc.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-today.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-today.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-toggle-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-toggle-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-toggle-on.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-toggle-on.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-toll.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-toll.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-tonality.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-tonality.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-touch-app.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-touch-app.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-toys.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-toys.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-track-changes.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-track-changes.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-traffic.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-traffic.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-train.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-train.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-tram.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-tram.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-transfer-within-a-station.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-transfer-within-a-station.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-transform.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-transform.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-transit-enterexit.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-transit-enterexit.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-translate.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-translate.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-trending-down.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-trending-down.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-trending-flat.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-trending-flat.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-trending-up.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-trending-up.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-trip-origin.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-trip-origin.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-tune.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-tune.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-turned-in.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-turned-in.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-turned-in-not.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-turned-in-not.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-tv.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-tv.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-tv-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-tv-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-unarchive.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-unarchive.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-undo.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-undo.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-unfold-less.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-unfold-less.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-unfold-more.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-unfold-more.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-unsubscribe.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-unsubscribe.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-update.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-update.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-usb.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-usb.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-verified-user.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-verified-user.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-vertical-align-bottom.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-vertical-align-bottom.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-vertical-align-center.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-vertical-align-center.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-vertical-align-top.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-vertical-align-top.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-vertical-split.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-vertical-split.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-vibration.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-vibration.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-video-call.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-video-call.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-video-label.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-video-label.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-video-library.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-video-library.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-videocam.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-videocam.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-videocam-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-videocam-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-videogame-asset.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-videogame-asset.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-view-agenda.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-view-agenda.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-view-array.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-view-array.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-view-carousel.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-view-carousel.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-view-column.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-view-column.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-view-comfy.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-view-comfy.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-view-compact.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-view-compact.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-view-day.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-view-day.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-view-headline.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-view-headline.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-view-list.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-view-list.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-view-module.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-view-module.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-view-quilt.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-view-quilt.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-view-stream.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-view-stream.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-view-week.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-view-week.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-vignette.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-vignette.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-visibility.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-visibility.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-visibility-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-visibility-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-voice-chat.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-voice-chat.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-voice-over-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-voice-over-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-voicemail.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-voicemail.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-volume-down.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-volume-down.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-volume-mute.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-volume-mute.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-volume-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-volume-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-volume-up.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-volume-up.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-vpn-key.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-vpn-key.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-vpn-lock.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-vpn-lock.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-wallpaper.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-wallpaper.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-warning.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-warning.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-watch.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-watch.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-watch-later.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-watch-later.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-waves.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-waves.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-wb-auto.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-wb-auto.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-wb-cloudy.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-wb-cloudy.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-wb-incandescent.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-wb-incandescent.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-wb-iridescent.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-wb-iridescent.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-wb-sunny.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-wb-sunny.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-wc.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-wc.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-web.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-web.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-web-asset.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-web-asset.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-weekend.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-weekend.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-whatshot.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-whatshot.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-where-to-vote.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-where-to-vote.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-widgets.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-widgets.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-wifi.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-wifi.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-wifi-lock.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-wifi-lock.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-wifi-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-wifi-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-wifi-tethering.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-wifi-tethering.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-work.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-work.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-work-off.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-work-off.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-work-outline.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-work-outline.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-wrap-text.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-wrap-text.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-youtube-searched-for.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-youtube-searched-for.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-zoom-in.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-zoom-in.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-zoom-in-map.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-zoom-in-map.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-zoom-out.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-zoom-out.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon-zoom-out-map.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon-zoom-out-map.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-indeterminate-progress.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-indeterminate-progress.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-log.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-log.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-menu.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-menu.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-menu-item.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-menu-item.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-menu-item-divider.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-menu-item-divider.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-monitoring-icon.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-monitoring-icon.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-monitoring-progress-icon.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-monitoring-progress-icon.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-notification.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-notification.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-option.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-option.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-option-group.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-option-group.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-pop-up.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-pop-up.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-progress.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-progress.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-push-button.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-push-button.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-radio.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-radio.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-radio-group.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-radio-group.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-ruler.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-ruler.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-segmented-button.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-segmented-button.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-select.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-select.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-slider.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-slider.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-switch.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-switch.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-tab.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-tab.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-tab-panel.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-tab-panel.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-tab-panels.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-tab-panels.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-tabs.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-tabs.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-tag.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-tag.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-textarea.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-textarea.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-time-region.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-time-region.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-timeline.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-timeline.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-tooltip.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-tooltip.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-track.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-track.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-tree.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-tree.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-tree-node.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-tree-node.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-button_2.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-button_2.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-datetime_9.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-datetime_9.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-status.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-status.cjs.entry.js')); }).then(processMod, consoleError);
        case 'rux-icon.cjs':
          return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
            /* webpackMode: "lazy" */
            './rux-icon.cjs.entry.js')); }).then(processMod, consoleError);
      }
    }
    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
    /* @vite-ignore */
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${''}`)); }).then((importedModule) => {
        {
            cmpModules.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
const styles = /*@__PURE__*/ new Map();
const win = typeof window !== 'undefined' ? window : {};
const doc = win.document || { head: {} };
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (h) => h(),
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
    ce: (eventName, opts) => new CustomEvent(eventName, opts),
};
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructableStylesheets = /*@__PURE__*/ (() => {
        try {
            new CSSStyleSheet();
            return typeof new CSSStyleSheet().replaceSync === 'function';
        }
        catch (e) { }
        return false;
    })()
    ;
const queueDomReads = [];
const queueDomWrites = [];
const queueTask = (queue, write) => (cb) => {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* PLATFORM_FLAGS.queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
};
const consume = (queue) => {
    for (let i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
const flush = () => {
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    // DOM WRITES!!!
    {
        consume(queueDomWrites);
        if ((queuePending = queueDomReads.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
    }
};
const nextTick = /*@__PURE__*/ (cb) => promiseResolve().then(cb);
const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);

exports.Fragment = Fragment;
exports.Host = Host;
exports.bootstrapLazy = bootstrapLazy;
exports.createEvent = createEvent;
exports.getElement = getElement;
exports.h = h;
exports.promiseResolve = promiseResolve;
exports.registerInstance = registerInstance;
