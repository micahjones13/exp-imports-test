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
        
        case 'rux-accordion':
          return import(
            /* webpackMode: "lazy" */
            './rux-accordion.entry.js').then(processMod, consoleError);
        case 'rux-accordion-item':
          return import(
            /* webpackMode: "lazy" */
            './rux-accordion-item.entry.js').then(processMod, consoleError);
        case 'rux-breadcrumb':
          return import(
            /* webpackMode: "lazy" */
            './rux-breadcrumb.entry.js').then(processMod, consoleError);
        case 'rux-breadcrumb-item':
          return import(
            /* webpackMode: "lazy" */
            './rux-breadcrumb-item.entry.js').then(processMod, consoleError);
        case 'rux-card':
          return import(
            /* webpackMode: "lazy" */
            './rux-card.entry.js').then(processMod, consoleError);
        case 'rux-checkbox':
          return import(
            /* webpackMode: "lazy" */
            './rux-checkbox.entry.js').then(processMod, consoleError);
        case 'rux-checkbox-group':
          return import(
            /* webpackMode: "lazy" */
            './rux-checkbox-group.entry.js').then(processMod, consoleError);
        case 'rux-classification-marking':
          return import(
            /* webpackMode: "lazy" */
            './rux-classification-marking.entry.js').then(processMod, consoleError);
        case 'rux-clock':
          return import(
            /* webpackMode: "lazy" */
            './rux-clock.entry.js').then(processMod, consoleError);
        case 'rux-container':
          return import(
            /* webpackMode: "lazy" */
            './rux-container.entry.js').then(processMod, consoleError);
        case 'rux-dialog':
          return import(
            /* webpackMode: "lazy" */
            './rux-dialog.entry.js').then(processMod, consoleError);
        case 'rux-global-status-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-global-status-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-360':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-360.entry.js').then(processMod, consoleError);
        case 'rux-icon-3d-rotation':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-3d-rotation.entry.js').then(processMod, consoleError);
        case 'rux-icon-4k':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-4k.entry.js').then(processMod, consoleError);
        case 'rux-icon-ac-unit':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-ac-unit.entry.js').then(processMod, consoleError);
        case 'rux-icon-access-alarms':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-access-alarms.entry.js').then(processMod, consoleError);
        case 'rux-icon-access-time':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-access-time.entry.js').then(processMod, consoleError);
        case 'rux-icon-accessibility':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-accessibility.entry.js').then(processMod, consoleError);
        case 'rux-icon-accessibility-new':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-accessibility-new.entry.js').then(processMod, consoleError);
        case 'rux-icon-accessible':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-accessible.entry.js').then(processMod, consoleError);
        case 'rux-icon-accessible-forward':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-accessible-forward.entry.js').then(processMod, consoleError);
        case 'rux-icon-account-balance':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-account-balance.entry.js').then(processMod, consoleError);
        case 'rux-icon-account-balance-wallet':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-account-balance-wallet.entry.js').then(processMod, consoleError);
        case 'rux-icon-account-box':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-account-box.entry.js').then(processMod, consoleError);
        case 'rux-icon-account-circle':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-account-circle.entry.js').then(processMod, consoleError);
        case 'rux-icon-adb':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-adb.entry.js').then(processMod, consoleError);
        case 'rux-icon-add':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-add.entry.js').then(processMod, consoleError);
        case 'rux-icon-add-a-photo':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-add-a-photo.entry.js').then(processMod, consoleError);
        case 'rux-icon-add-alarm':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-add-alarm.entry.js').then(processMod, consoleError);
        case 'rux-icon-add-alert':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-add-alert.entry.js').then(processMod, consoleError);
        case 'rux-icon-add-box':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-add-box.entry.js').then(processMod, consoleError);
        case 'rux-icon-add-circle':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-add-circle.entry.js').then(processMod, consoleError);
        case 'rux-icon-add-circle-outline':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-add-circle-outline.entry.js').then(processMod, consoleError);
        case 'rux-icon-add-comment':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-add-comment.entry.js').then(processMod, consoleError);
        case 'rux-icon-add-location':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-add-location.entry.js').then(processMod, consoleError);
        case 'rux-icon-add-photo-alternate':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-add-photo-alternate.entry.js').then(processMod, consoleError);
        case 'rux-icon-add-shopping-cart':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-add-shopping-cart.entry.js').then(processMod, consoleError);
        case 'rux-icon-add-to-home-screen':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-add-to-home-screen.entry.js').then(processMod, consoleError);
        case 'rux-icon-add-to-photos':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-add-to-photos.entry.js').then(processMod, consoleError);
        case 'rux-icon-add-to-queue':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-add-to-queue.entry.js').then(processMod, consoleError);
        case 'rux-icon-adjust':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-adjust.entry.js').then(processMod, consoleError);
        case 'rux-icon-airline-seat-flat':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-airline-seat-flat.entry.js').then(processMod, consoleError);
        case 'rux-icon-airline-seat-flat-angled':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-airline-seat-flat-angled.entry.js').then(processMod, consoleError);
        case 'rux-icon-airline-seat-individual-suite':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-airline-seat-individual-suite.entry.js').then(processMod, consoleError);
        case 'rux-icon-airline-seat-legroom-extra':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-airline-seat-legroom-extra.entry.js').then(processMod, consoleError);
        case 'rux-icon-airline-seat-legroom-normal':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-airline-seat-legroom-normal.entry.js').then(processMod, consoleError);
        case 'rux-icon-airline-seat-legroom-reduced':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-airline-seat-legroom-reduced.entry.js').then(processMod, consoleError);
        case 'rux-icon-airline-seat-recline-extra':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-airline-seat-recline-extra.entry.js').then(processMod, consoleError);
        case 'rux-icon-airline-seat-recline-normal':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-airline-seat-recline-normal.entry.js').then(processMod, consoleError);
        case 'rux-icon-airplanemode-active':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-airplanemode-active.entry.js').then(processMod, consoleError);
        case 'rux-icon-airplanemode-inactive':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-airplanemode-inactive.entry.js').then(processMod, consoleError);
        case 'rux-icon-airplay':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-airplay.entry.js').then(processMod, consoleError);
        case 'rux-icon-airport-shuttle':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-airport-shuttle.entry.js').then(processMod, consoleError);
        case 'rux-icon-alarm':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-alarm.entry.js').then(processMod, consoleError);
        case 'rux-icon-alarm-add':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-alarm-add.entry.js').then(processMod, consoleError);
        case 'rux-icon-alarm-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-alarm-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-alarm-on':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-alarm-on.entry.js').then(processMod, consoleError);
        case 'rux-icon-album':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-album.entry.js').then(processMod, consoleError);
        case 'rux-icon-all-inbox':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-all-inbox.entry.js').then(processMod, consoleError);
        case 'rux-icon-all-inclusive':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-all-inclusive.entry.js').then(processMod, consoleError);
        case 'rux-icon-all-out':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-all-out.entry.js').then(processMod, consoleError);
        case 'rux-icon-alternate-email':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-alternate-email.entry.js').then(processMod, consoleError);
        case 'rux-icon-altitude':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-altitude.entry.js').then(processMod, consoleError);
        case 'rux-icon-android':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-android.entry.js').then(processMod, consoleError);
        case 'rux-icon-announcement':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-announcement.entry.js').then(processMod, consoleError);
        case 'rux-icon-antenna':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-antenna.entry.js').then(processMod, consoleError);
        case 'rux-icon-antenna-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-antenna-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-antenna-receive':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-antenna-receive.entry.js').then(processMod, consoleError);
        case 'rux-icon-antenna-transmit':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-antenna-transmit.entry.js').then(processMod, consoleError);
        case 'rux-icon-apps':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-apps.entry.js').then(processMod, consoleError);
        case 'rux-icon-archive':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-archive.entry.js').then(processMod, consoleError);
        case 'rux-icon-arrow-back':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-back.entry.js').then(processMod, consoleError);
        case 'rux-icon-arrow-back-ios':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-back-ios.entry.js').then(processMod, consoleError);
        case 'rux-icon-arrow-downward':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-downward.entry.js').then(processMod, consoleError);
        case 'rux-icon-arrow-drop-down':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-drop-down.entry.js').then(processMod, consoleError);
        case 'rux-icon-arrow-drop-down-circle':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-drop-down-circle.entry.js').then(processMod, consoleError);
        case 'rux-icon-arrow-drop-up':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-drop-up.entry.js').then(processMod, consoleError);
        case 'rux-icon-arrow-forward':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-forward.entry.js').then(processMod, consoleError);
        case 'rux-icon-arrow-forward-ios':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-forward-ios.entry.js').then(processMod, consoleError);
        case 'rux-icon-arrow-left':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-left.entry.js').then(processMod, consoleError);
        case 'rux-icon-arrow-right':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-right.entry.js').then(processMod, consoleError);
        case 'rux-icon-arrow-right-alt':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-right-alt.entry.js').then(processMod, consoleError);
        case 'rux-icon-arrow-upward':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-arrow-upward.entry.js').then(processMod, consoleError);
        case 'rux-icon-art-track':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-art-track.entry.js').then(processMod, consoleError);
        case 'rux-icon-aspect-ratio':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-aspect-ratio.entry.js').then(processMod, consoleError);
        case 'rux-icon-assessment':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-assessment.entry.js').then(processMod, consoleError);
        case 'rux-icon-assignment':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-assignment.entry.js').then(processMod, consoleError);
        case 'rux-icon-assignment-find':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-assignment-find.entry.js').then(processMod, consoleError);
        case 'rux-icon-assignment-late':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-assignment-late.entry.js').then(processMod, consoleError);
        case 'rux-icon-assignment-return':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-assignment-return.entry.js').then(processMod, consoleError);
        case 'rux-icon-assignment-returned':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-assignment-returned.entry.js').then(processMod, consoleError);
        case 'rux-icon-assignment-turned-in':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-assignment-turned-in.entry.js').then(processMod, consoleError);
        case 'rux-icon-assistant':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-assistant.entry.js').then(processMod, consoleError);
        case 'rux-icon-assistant-photo':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-assistant-photo.entry.js').then(processMod, consoleError);
        case 'rux-icon-attach-file':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-attach-file.entry.js').then(processMod, consoleError);
        case 'rux-icon-attach-money':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-attach-money.entry.js').then(processMod, consoleError);
        case 'rux-icon-attachment':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-attachment.entry.js').then(processMod, consoleError);
        case 'rux-icon-audiotrack':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-audiotrack.entry.js').then(processMod, consoleError);
        case 'rux-icon-autorenew':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-autorenew.entry.js').then(processMod, consoleError);
        case 'rux-icon-av-timer':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-av-timer.entry.js').then(processMod, consoleError);
        case 'rux-icon-backspace':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-backspace.entry.js').then(processMod, consoleError);
        case 'rux-icon-backup':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-backup.entry.js').then(processMod, consoleError);
        case 'rux-icon-ballot':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-ballot.entry.js').then(processMod, consoleError);
        case 'rux-icon-bar-chart':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-bar-chart.entry.js').then(processMod, consoleError);
        case 'rux-icon-battery-20':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-battery-20.entry.js').then(processMod, consoleError);
        case 'rux-icon-battery-30':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-battery-30.entry.js').then(processMod, consoleError);
        case 'rux-icon-battery-50':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-battery-50.entry.js').then(processMod, consoleError);
        case 'rux-icon-battery-60':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-battery-60.entry.js').then(processMod, consoleError);
        case 'rux-icon-battery-80':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-battery-80.entry.js').then(processMod, consoleError);
        case 'rux-icon-battery-90':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-battery-90.entry.js').then(processMod, consoleError);
        case 'rux-icon-battery-alert':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-battery-alert.entry.js').then(processMod, consoleError);
        case 'rux-icon-battery-charging-20':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-battery-charging-20.entry.js').then(processMod, consoleError);
        case 'rux-icon-battery-charging-30':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-battery-charging-30.entry.js').then(processMod, consoleError);
        case 'rux-icon-battery-charging-50':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-battery-charging-50.entry.js').then(processMod, consoleError);
        case 'rux-icon-battery-charging-60':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-battery-charging-60.entry.js').then(processMod, consoleError);
        case 'rux-icon-battery-charging-80':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-battery-charging-80.entry.js').then(processMod, consoleError);
        case 'rux-icon-battery-charging-90':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-battery-charging-90.entry.js').then(processMod, consoleError);
        case 'rux-icon-battery-charging-full':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-battery-charging-full.entry.js').then(processMod, consoleError);
        case 'rux-icon-battery-full':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-battery-full.entry.js').then(processMod, consoleError);
        case 'rux-icon-battery-std':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-battery-std.entry.js').then(processMod, consoleError);
        case 'rux-icon-battery-unknown':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-battery-unknown.entry.js').then(processMod, consoleError);
        case 'rux-icon-beach-access':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-beach-access.entry.js').then(processMod, consoleError);
        case 'rux-icon-beenhere':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-beenhere.entry.js').then(processMod, consoleError);
        case 'rux-icon-block':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-block.entry.js').then(processMod, consoleError);
        case 'rux-icon-bluetooth':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-bluetooth.entry.js').then(processMod, consoleError);
        case 'rux-icon-bluetooth-audio':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-bluetooth-audio.entry.js').then(processMod, consoleError);
        case 'rux-icon-bluetooth-connected':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-bluetooth-connected.entry.js').then(processMod, consoleError);
        case 'rux-icon-bluetooth-disabled':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-bluetooth-disabled.entry.js').then(processMod, consoleError);
        case 'rux-icon-bluetooth-searching':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-bluetooth-searching.entry.js').then(processMod, consoleError);
        case 'rux-icon-blur-circular':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-blur-circular.entry.js').then(processMod, consoleError);
        case 'rux-icon-blur-linear':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-blur-linear.entry.js').then(processMod, consoleError);
        case 'rux-icon-blur-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-blur-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-blur-on':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-blur-on.entry.js').then(processMod, consoleError);
        case 'rux-icon-book':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-book.entry.js').then(processMod, consoleError);
        case 'rux-icon-bookmark':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-bookmark.entry.js').then(processMod, consoleError);
        case 'rux-icon-bookmark-border':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-bookmark-border.entry.js').then(processMod, consoleError);
        case 'rux-icon-bookmarks':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-bookmarks.entry.js').then(processMod, consoleError);
        case 'rux-icon-border-all':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-border-all.entry.js').then(processMod, consoleError);
        case 'rux-icon-border-bottom':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-border-bottom.entry.js').then(processMod, consoleError);
        case 'rux-icon-border-clear':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-border-clear.entry.js').then(processMod, consoleError);
        case 'rux-icon-border-color':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-border-color.entry.js').then(processMod, consoleError);
        case 'rux-icon-border-horizontal':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-border-horizontal.entry.js').then(processMod, consoleError);
        case 'rux-icon-border-inner':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-border-inner.entry.js').then(processMod, consoleError);
        case 'rux-icon-border-left':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-border-left.entry.js').then(processMod, consoleError);
        case 'rux-icon-border-outer':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-border-outer.entry.js').then(processMod, consoleError);
        case 'rux-icon-border-right':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-border-right.entry.js').then(processMod, consoleError);
        case 'rux-icon-border-style':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-border-style.entry.js').then(processMod, consoleError);
        case 'rux-icon-border-top':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-border-top.entry.js').then(processMod, consoleError);
        case 'rux-icon-border-vertical':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-border-vertical.entry.js').then(processMod, consoleError);
        case 'rux-icon-branding-watermark':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-branding-watermark.entry.js').then(processMod, consoleError);
        case 'rux-icon-brightness-1':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-1.entry.js').then(processMod, consoleError);
        case 'rux-icon-brightness-2':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-2.entry.js').then(processMod, consoleError);
        case 'rux-icon-brightness-3':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-3.entry.js').then(processMod, consoleError);
        case 'rux-icon-brightness-4':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-4.entry.js').then(processMod, consoleError);
        case 'rux-icon-brightness-5':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-5.entry.js').then(processMod, consoleError);
        case 'rux-icon-brightness-6':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-6.entry.js').then(processMod, consoleError);
        case 'rux-icon-brightness-7':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-7.entry.js').then(processMod, consoleError);
        case 'rux-icon-brightness-auto':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-auto.entry.js').then(processMod, consoleError);
        case 'rux-icon-brightness-high':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-high.entry.js').then(processMod, consoleError);
        case 'rux-icon-brightness-low':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-low.entry.js').then(processMod, consoleError);
        case 'rux-icon-brightness-medium':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-brightness-medium.entry.js').then(processMod, consoleError);
        case 'rux-icon-broken-image':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-broken-image.entry.js').then(processMod, consoleError);
        case 'rux-icon-brush':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-brush.entry.js').then(processMod, consoleError);
        case 'rux-icon-bubble-chart':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-bubble-chart.entry.js').then(processMod, consoleError);
        case 'rux-icon-bug-report':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-bug-report.entry.js').then(processMod, consoleError);
        case 'rux-icon-build':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-build.entry.js').then(processMod, consoleError);
        case 'rux-icon-burst-mode':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-burst-mode.entry.js').then(processMod, consoleError);
        case 'rux-icon-business':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-business.entry.js').then(processMod, consoleError);
        case 'rux-icon-business-center':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-business-center.entry.js').then(processMod, consoleError);
        case 'rux-icon-cached':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-cached.entry.js').then(processMod, consoleError);
        case 'rux-icon-cake':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-cake.entry.js').then(processMod, consoleError);
        case 'rux-icon-calendar-today':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-calendar-today.entry.js').then(processMod, consoleError);
        case 'rux-icon-calendar-view-day':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-calendar-view-day.entry.js').then(processMod, consoleError);
        case 'rux-icon-call':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-call.entry.js').then(processMod, consoleError);
        case 'rux-icon-call-end':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-call-end.entry.js').then(processMod, consoleError);
        case 'rux-icon-call-made':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-call-made.entry.js').then(processMod, consoleError);
        case 'rux-icon-call-merge':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-call-merge.entry.js').then(processMod, consoleError);
        case 'rux-icon-call-missed':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-call-missed.entry.js').then(processMod, consoleError);
        case 'rux-icon-call-missed-outgoing':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-call-missed-outgoing.entry.js').then(processMod, consoleError);
        case 'rux-icon-call-received':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-call-received.entry.js').then(processMod, consoleError);
        case 'rux-icon-call-split':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-call-split.entry.js').then(processMod, consoleError);
        case 'rux-icon-call-to-action':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-call-to-action.entry.js').then(processMod, consoleError);
        case 'rux-icon-camera':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-camera.entry.js').then(processMod, consoleError);
        case 'rux-icon-camera-alt':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-camera-alt.entry.js').then(processMod, consoleError);
        case 'rux-icon-camera-enhance':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-camera-enhance.entry.js').then(processMod, consoleError);
        case 'rux-icon-camera-front':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-camera-front.entry.js').then(processMod, consoleError);
        case 'rux-icon-camera-rear':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-camera-rear.entry.js').then(processMod, consoleError);
        case 'rux-icon-camera-roll':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-camera-roll.entry.js').then(processMod, consoleError);
        case 'rux-icon-cancel':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-cancel.entry.js').then(processMod, consoleError);
        case 'rux-icon-cancel-presentation':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-cancel-presentation.entry.js').then(processMod, consoleError);
        case 'rux-icon-card-giftcard':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-card-giftcard.entry.js').then(processMod, consoleError);
        case 'rux-icon-card-membership':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-card-membership.entry.js').then(processMod, consoleError);
        case 'rux-icon-card-travel':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-card-travel.entry.js').then(processMod, consoleError);
        case 'rux-icon-casino':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-casino.entry.js').then(processMod, consoleError);
        case 'rux-icon-cast':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-cast.entry.js').then(processMod, consoleError);
        case 'rux-icon-cast-connected':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-cast-connected.entry.js').then(processMod, consoleError);
        case 'rux-icon-cast-for-education':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-cast-for-education.entry.js').then(processMod, consoleError);
        case 'rux-icon-category':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-category.entry.js').then(processMod, consoleError);
        case 'rux-icon-cell-wifi':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-cell-wifi.entry.js').then(processMod, consoleError);
        case 'rux-icon-center-focus-strong':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-center-focus-strong.entry.js').then(processMod, consoleError);
        case 'rux-icon-center-focus-weak':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-center-focus-weak.entry.js').then(processMod, consoleError);
        case 'rux-icon-change-history':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-change-history.entry.js').then(processMod, consoleError);
        case 'rux-icon-chat':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-chat.entry.js').then(processMod, consoleError);
        case 'rux-icon-chat-bubble':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-chat-bubble.entry.js').then(processMod, consoleError);
        case 'rux-icon-chat-bubble-outline':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-chat-bubble-outline.entry.js').then(processMod, consoleError);
        case 'rux-icon-check':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-check.entry.js').then(processMod, consoleError);
        case 'rux-icon-check-box':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-check-box.entry.js').then(processMod, consoleError);
        case 'rux-icon-check-box-outline-blank':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-check-box-outline-blank.entry.js').then(processMod, consoleError);
        case 'rux-icon-check-circle':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-check-circle.entry.js').then(processMod, consoleError);
        case 'rux-icon-check-circle-outline':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-check-circle-outline.entry.js').then(processMod, consoleError);
        case 'rux-icon-chevron-left':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-chevron-left.entry.js').then(processMod, consoleError);
        case 'rux-icon-chevron-right':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-chevron-right.entry.js').then(processMod, consoleError);
        case 'rux-icon-child-care':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-child-care.entry.js').then(processMod, consoleError);
        case 'rux-icon-child-friendly':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-child-friendly.entry.js').then(processMod, consoleError);
        case 'rux-icon-chrome-reader-mode':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-chrome-reader-mode.entry.js').then(processMod, consoleError);
        case 'rux-icon-class':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-class.entry.js').then(processMod, consoleError);
        case 'rux-icon-clear':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-clear.entry.js').then(processMod, consoleError);
        case 'rux-icon-clear-all':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-clear-all.entry.js').then(processMod, consoleError);
        case 'rux-icon-close':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-close.entry.js').then(processMod, consoleError);
        case 'rux-icon-closed-caption':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-closed-caption.entry.js').then(processMod, consoleError);
        case 'rux-icon-cloud':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-cloud.entry.js').then(processMod, consoleError);
        case 'rux-icon-cloud-circle':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-cloud-circle.entry.js').then(processMod, consoleError);
        case 'rux-icon-cloud-done':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-cloud-done.entry.js').then(processMod, consoleError);
        case 'rux-icon-cloud-download':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-cloud-download.entry.js').then(processMod, consoleError);
        case 'rux-icon-cloud-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-cloud-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-cloud-queue':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-cloud-queue.entry.js').then(processMod, consoleError);
        case 'rux-icon-cloud-upload':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-cloud-upload.entry.js').then(processMod, consoleError);
        case 'rux-icon-code':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-code.entry.js').then(processMod, consoleError);
        case 'rux-icon-collections':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-collections.entry.js').then(processMod, consoleError);
        case 'rux-icon-collections-bookmark':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-collections-bookmark.entry.js').then(processMod, consoleError);
        case 'rux-icon-color-lens':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-color-lens.entry.js').then(processMod, consoleError);
        case 'rux-icon-colorize':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-colorize.entry.js').then(processMod, consoleError);
        case 'rux-icon-comment':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-comment.entry.js').then(processMod, consoleError);
        case 'rux-icon-commute':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-commute.entry.js').then(processMod, consoleError);
        case 'rux-icon-compare':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-compare.entry.js').then(processMod, consoleError);
        case 'rux-icon-compare-arrows':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-compare-arrows.entry.js').then(processMod, consoleError);
        case 'rux-icon-compass-calibration':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-compass-calibration.entry.js').then(processMod, consoleError);
        case 'rux-icon-computer':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-computer.entry.js').then(processMod, consoleError);
        case 'rux-icon-confirmation-number':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-confirmation-number.entry.js').then(processMod, consoleError);
        case 'rux-icon-contact-mail':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-contact-mail.entry.js').then(processMod, consoleError);
        case 'rux-icon-contact-phone':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-contact-phone.entry.js').then(processMod, consoleError);
        case 'rux-icon-contact-support':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-contact-support.entry.js').then(processMod, consoleError);
        case 'rux-icon-contacts':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-contacts.entry.js').then(processMod, consoleError);
        case 'rux-icon-control-camera':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-control-camera.entry.js').then(processMod, consoleError);
        case 'rux-icon-control-point':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-control-point.entry.js').then(processMod, consoleError);
        case 'rux-icon-control-point-duplicate':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-control-point-duplicate.entry.js').then(processMod, consoleError);
        case 'rux-icon-copyright':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-copyright.entry.js').then(processMod, consoleError);
        case 'rux-icon-create':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-create.entry.js').then(processMod, consoleError);
        case 'rux-icon-create-new-folder':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-create-new-folder.entry.js').then(processMod, consoleError);
        case 'rux-icon-credit-card':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-credit-card.entry.js').then(processMod, consoleError);
        case 'rux-icon-crop':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-crop.entry.js').then(processMod, consoleError);
        case 'rux-icon-crop-16-9':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-crop-16-9.entry.js').then(processMod, consoleError);
        case 'rux-icon-crop-3-2':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-crop-3-2.entry.js').then(processMod, consoleError);
        case 'rux-icon-crop-5-4':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-crop-5-4.entry.js').then(processMod, consoleError);
        case 'rux-icon-crop-7-5':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-crop-7-5.entry.js').then(processMod, consoleError);
        case 'rux-icon-crop-din':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-crop-din.entry.js').then(processMod, consoleError);
        case 'rux-icon-crop-free':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-crop-free.entry.js').then(processMod, consoleError);
        case 'rux-icon-crop-landscape':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-crop-landscape.entry.js').then(processMod, consoleError);
        case 'rux-icon-crop-original':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-crop-original.entry.js').then(processMod, consoleError);
        case 'rux-icon-crop-portrait':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-crop-portrait.entry.js').then(processMod, consoleError);
        case 'rux-icon-crop-rotate':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-crop-rotate.entry.js').then(processMod, consoleError);
        case 'rux-icon-crop-square':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-crop-square.entry.js').then(processMod, consoleError);
        case 'rux-icon-dashboard':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-dashboard.entry.js').then(processMod, consoleError);
        case 'rux-icon-data-usage':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-data-usage.entry.js').then(processMod, consoleError);
        case 'rux-icon-date-range':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-date-range.entry.js').then(processMod, consoleError);
        case 'rux-icon-dehaze':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-dehaze.entry.js').then(processMod, consoleError);
        case 'rux-icon-delete':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-delete.entry.js').then(processMod, consoleError);
        case 'rux-icon-delete-forever':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-delete-forever.entry.js').then(processMod, consoleError);
        case 'rux-icon-delete-outline':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-delete-outline.entry.js').then(processMod, consoleError);
        case 'rux-icon-delete-sweep':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-delete-sweep.entry.js').then(processMod, consoleError);
        case 'rux-icon-departure-board':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-departure-board.entry.js').then(processMod, consoleError);
        case 'rux-icon-description':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-description.entry.js').then(processMod, consoleError);
        case 'rux-icon-desktop-access-disabled':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-desktop-access-disabled.entry.js').then(processMod, consoleError);
        case 'rux-icon-desktop-mac':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-desktop-mac.entry.js').then(processMod, consoleError);
        case 'rux-icon-desktop-windows':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-desktop-windows.entry.js').then(processMod, consoleError);
        case 'rux-icon-details':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-details.entry.js').then(processMod, consoleError);
        case 'rux-icon-developer-board':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-developer-board.entry.js').then(processMod, consoleError);
        case 'rux-icon-developer-mode':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-developer-mode.entry.js').then(processMod, consoleError);
        case 'rux-icon-device-hub':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-device-hub.entry.js').then(processMod, consoleError);
        case 'rux-icon-device-unknown':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-device-unknown.entry.js').then(processMod, consoleError);
        case 'rux-icon-devices':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-devices.entry.js').then(processMod, consoleError);
        case 'rux-icon-devices-other':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-devices-other.entry.js').then(processMod, consoleError);
        case 'rux-icon-dialer-sip':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-dialer-sip.entry.js').then(processMod, consoleError);
        case 'rux-icon-dialpad':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-dialpad.entry.js').then(processMod, consoleError);
        case 'rux-icon-directions':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-directions.entry.js').then(processMod, consoleError);
        case 'rux-icon-directions-bike':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-directions-bike.entry.js').then(processMod, consoleError);
        case 'rux-icon-directions-boat':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-directions-boat.entry.js').then(processMod, consoleError);
        case 'rux-icon-directions-bus':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-directions-bus.entry.js').then(processMod, consoleError);
        case 'rux-icon-directions-car':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-directions-car.entry.js').then(processMod, consoleError);
        case 'rux-icon-directions-railway':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-directions-railway.entry.js').then(processMod, consoleError);
        case 'rux-icon-directions-run':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-directions-run.entry.js').then(processMod, consoleError);
        case 'rux-icon-directions-subway':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-directions-subway.entry.js').then(processMod, consoleError);
        case 'rux-icon-directions-transit':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-directions-transit.entry.js').then(processMod, consoleError);
        case 'rux-icon-directions-walk':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-directions-walk.entry.js').then(processMod, consoleError);
        case 'rux-icon-disc-full':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-disc-full.entry.js').then(processMod, consoleError);
        case 'rux-icon-dns':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-dns.entry.js').then(processMod, consoleError);
        case 'rux-icon-dock':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-dock.entry.js').then(processMod, consoleError);
        case 'rux-icon-domain':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-domain.entry.js').then(processMod, consoleError);
        case 'rux-icon-domain-disabled':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-domain-disabled.entry.js').then(processMod, consoleError);
        case 'rux-icon-done':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-done.entry.js').then(processMod, consoleError);
        case 'rux-icon-done-all':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-done-all.entry.js').then(processMod, consoleError);
        case 'rux-icon-done-outline':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-done-outline.entry.js').then(processMod, consoleError);
        case 'rux-icon-donut-large':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-donut-large.entry.js').then(processMod, consoleError);
        case 'rux-icon-donut-small':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-donut-small.entry.js').then(processMod, consoleError);
        case 'rux-icon-drafts':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-drafts.entry.js').then(processMod, consoleError);
        case 'rux-icon-drag-handle':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-drag-handle.entry.js').then(processMod, consoleError);
        case 'rux-icon-drag-indicator':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-drag-indicator.entry.js').then(processMod, consoleError);
        case 'rux-icon-drive-eta':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-drive-eta.entry.js').then(processMod, consoleError);
        case 'rux-icon-duo':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-duo.entry.js').then(processMod, consoleError);
        case 'rux-icon-dvr':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-dvr.entry.js').then(processMod, consoleError);
        case 'rux-icon-edit':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-edit.entry.js').then(processMod, consoleError);
        case 'rux-icon-edit-attributes':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-edit-attributes.entry.js').then(processMod, consoleError);
        case 'rux-icon-edit-location':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-edit-location.entry.js').then(processMod, consoleError);
        case 'rux-icon-eject':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-eject.entry.js').then(processMod, consoleError);
        case 'rux-icon-email':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-email.entry.js').then(processMod, consoleError);
        case 'rux-icon-enhanced-encryption':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-enhanced-encryption.entry.js').then(processMod, consoleError);
        case 'rux-icon-equalizer':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-equalizer.entry.js').then(processMod, consoleError);
        case 'rux-icon-equipment':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-equipment.entry.js').then(processMod, consoleError);
        case 'rux-icon-error':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-error.entry.js').then(processMod, consoleError);
        case 'rux-icon-error-outline':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-error-outline.entry.js').then(processMod, consoleError);
        case 'rux-icon-euro-symbol':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-euro-symbol.entry.js').then(processMod, consoleError);
        case 'rux-icon-ev-station':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-ev-station.entry.js').then(processMod, consoleError);
        case 'rux-icon-event':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-event.entry.js').then(processMod, consoleError);
        case 'rux-icon-event-available':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-event-available.entry.js').then(processMod, consoleError);
        case 'rux-icon-event-busy':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-event-busy.entry.js').then(processMod, consoleError);
        case 'rux-icon-event-note':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-event-note.entry.js').then(processMod, consoleError);
        case 'rux-icon-exit-to-app':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-exit-to-app.entry.js').then(processMod, consoleError);
        case 'rux-icon-expand-less':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-expand-less.entry.js').then(processMod, consoleError);
        case 'rux-icon-expand-more':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-expand-more.entry.js').then(processMod, consoleError);
        case 'rux-icon-explicit':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-explicit.entry.js').then(processMod, consoleError);
        case 'rux-icon-explore':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-explore.entry.js').then(processMod, consoleError);
        case 'rux-icon-explore-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-explore-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-exposure':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-exposure.entry.js').then(processMod, consoleError);
        case 'rux-icon-exposure-neg-1':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-exposure-neg-1.entry.js').then(processMod, consoleError);
        case 'rux-icon-exposure-neg-2':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-exposure-neg-2.entry.js').then(processMod, consoleError);
        case 'rux-icon-exposure-plus-1':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-exposure-plus-1.entry.js').then(processMod, consoleError);
        case 'rux-icon-exposure-plus-2':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-exposure-plus-2.entry.js').then(processMod, consoleError);
        case 'rux-icon-exposure-zero':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-exposure-zero.entry.js').then(processMod, consoleError);
        case 'rux-icon-extension':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-extension.entry.js').then(processMod, consoleError);
        case 'rux-icon-face':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-face.entry.js').then(processMod, consoleError);
        case 'rux-icon-fast-forward':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-fast-forward.entry.js').then(processMod, consoleError);
        case 'rux-icon-fast-rewind':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-fast-rewind.entry.js').then(processMod, consoleError);
        case 'rux-icon-fastfood':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-fastfood.entry.js').then(processMod, consoleError);
        case 'rux-icon-favorite':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-favorite.entry.js').then(processMod, consoleError);
        case 'rux-icon-favorite-border':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-favorite-border.entry.js').then(processMod, consoleError);
        case 'rux-icon-featured-play-list':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-featured-play-list.entry.js').then(processMod, consoleError);
        case 'rux-icon-featured-video':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-featured-video.entry.js').then(processMod, consoleError);
        case 'rux-icon-feedback':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-feedback.entry.js').then(processMod, consoleError);
        case 'rux-icon-fiber-dvr':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-fiber-dvr.entry.js').then(processMod, consoleError);
        case 'rux-icon-fiber-manual-record':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-fiber-manual-record.entry.js').then(processMod, consoleError);
        case 'rux-icon-fiber-new':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-fiber-new.entry.js').then(processMod, consoleError);
        case 'rux-icon-fiber-pin':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-fiber-pin.entry.js').then(processMod, consoleError);
        case 'rux-icon-fiber-smart-record':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-fiber-smart-record.entry.js').then(processMod, consoleError);
        case 'rux-icon-file-copy':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-file-copy.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-1':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-1.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-2':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-2.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-3':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-3.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-4':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-4.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-5':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-5.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-6':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-6.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-7':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-7.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-8':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-8.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-9':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-9.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-9-plus':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-9-plus.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-b-and-w':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-b-and-w.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-center-focus':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-center-focus.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-drama':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-drama.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-frames':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-frames.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-hdr':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-hdr.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-list':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-list.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-none':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-none.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-tilt-shift':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-tilt-shift.entry.js').then(processMod, consoleError);
        case 'rux-icon-filter-vintage':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-filter-vintage.entry.js').then(processMod, consoleError);
        case 'rux-icon-find-in-page':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-find-in-page.entry.js').then(processMod, consoleError);
        case 'rux-icon-find-replace':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-find-replace.entry.js').then(processMod, consoleError);
        case 'rux-icon-fingerprint':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-fingerprint.entry.js').then(processMod, consoleError);
        case 'rux-icon-first-page':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-first-page.entry.js').then(processMod, consoleError);
        case 'rux-icon-fitness-center':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-fitness-center.entry.js').then(processMod, consoleError);
        case 'rux-icon-flag':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-flag.entry.js').then(processMod, consoleError);
        case 'rux-icon-flare':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-flare.entry.js').then(processMod, consoleError);
        case 'rux-icon-flash-auto':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-flash-auto.entry.js').then(processMod, consoleError);
        case 'rux-icon-flash-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-flash-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-flash-on':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-flash-on.entry.js').then(processMod, consoleError);
        case 'rux-icon-flight':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-flight.entry.js').then(processMod, consoleError);
        case 'rux-icon-flight-land':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-flight-land.entry.js').then(processMod, consoleError);
        case 'rux-icon-flight-takeoff':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-flight-takeoff.entry.js').then(processMod, consoleError);
        case 'rux-icon-flip':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-flip.entry.js').then(processMod, consoleError);
        case 'rux-icon-flip-to-back':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-flip-to-back.entry.js').then(processMod, consoleError);
        case 'rux-icon-flip-to-front':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-flip-to-front.entry.js').then(processMod, consoleError);
        case 'rux-icon-folder':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-folder.entry.js').then(processMod, consoleError);
        case 'rux-icon-folder-open':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-folder-open.entry.js').then(processMod, consoleError);
        case 'rux-icon-folder-shared':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-folder-shared.entry.js').then(processMod, consoleError);
        case 'rux-icon-folder-special':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-folder-special.entry.js').then(processMod, consoleError);
        case 'rux-icon-font-download':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-font-download.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-align-center':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-align-center.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-align-justify':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-align-justify.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-align-left':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-align-left.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-align-right':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-align-right.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-bold':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-bold.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-clear':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-clear.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-color-fill':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-color-fill.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-color-reset':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-color-reset.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-color-text':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-color-text.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-indent-decrease':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-indent-decrease.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-indent-increase':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-indent-increase.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-italic':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-italic.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-line-spacing':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-line-spacing.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-list-bulleted':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-list-bulleted.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-list-numbered':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-list-numbered.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-list-numbered-rtl':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-list-numbered-rtl.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-paint':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-paint.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-quote':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-quote.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-shapes':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-shapes.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-size':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-size.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-strikethrough':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-strikethrough.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-textdirection-l-to-r':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-textdirection-l-to-r.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-textdirection-r-to-l':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-textdirection-r-to-l.entry.js').then(processMod, consoleError);
        case 'rux-icon-format-underlined':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-format-underlined.entry.js').then(processMod, consoleError);
        case 'rux-icon-forum':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-forum.entry.js').then(processMod, consoleError);
        case 'rux-icon-forward':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-forward.entry.js').then(processMod, consoleError);
        case 'rux-icon-forward-10':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-forward-10.entry.js').then(processMod, consoleError);
        case 'rux-icon-forward-30':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-forward-30.entry.js').then(processMod, consoleError);
        case 'rux-icon-forward-5':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-forward-5.entry.js').then(processMod, consoleError);
        case 'rux-icon-free-breakfast':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-free-breakfast.entry.js').then(processMod, consoleError);
        case 'rux-icon-fullscreen':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-fullscreen.entry.js').then(processMod, consoleError);
        case 'rux-icon-fullscreen-exit':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-fullscreen-exit.entry.js').then(processMod, consoleError);
        case 'rux-icon-functions':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-functions.entry.js').then(processMod, consoleError);
        case 'rux-icon-g-translate':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-g-translate.entry.js').then(processMod, consoleError);
        case 'rux-icon-gamepad':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-gamepad.entry.js').then(processMod, consoleError);
        case 'rux-icon-games':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-games.entry.js').then(processMod, consoleError);
        case 'rux-icon-gavel':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-gavel.entry.js').then(processMod, consoleError);
        case 'rux-icon-gesture':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-gesture.entry.js').then(processMod, consoleError);
        case 'rux-icon-get-app':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-get-app.entry.js').then(processMod, consoleError);
        case 'rux-icon-gif':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-gif.entry.js').then(processMod, consoleError);
        case 'rux-icon-golf-course':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-golf-course.entry.js').then(processMod, consoleError);
        case 'rux-icon-gps-fixed':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-gps-fixed.entry.js').then(processMod, consoleError);
        case 'rux-icon-gps-not-fixed':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-gps-not-fixed.entry.js').then(processMod, consoleError);
        case 'rux-icon-gps-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-gps-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-grade':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-grade.entry.js').then(processMod, consoleError);
        case 'rux-icon-gradient':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-gradient.entry.js').then(processMod, consoleError);
        case 'rux-icon-grain':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-grain.entry.js').then(processMod, consoleError);
        case 'rux-icon-graphic-eq':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-graphic-eq.entry.js').then(processMod, consoleError);
        case 'rux-icon-grid-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-grid-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-grid-on':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-grid-on.entry.js').then(processMod, consoleError);
        case 'rux-icon-group':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-group.entry.js').then(processMod, consoleError);
        case 'rux-icon-group-add':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-group-add.entry.js').then(processMod, consoleError);
        case 'rux-icon-group-work':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-group-work.entry.js').then(processMod, consoleError);
        case 'rux-icon-hardware':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-hardware.entry.js').then(processMod, consoleError);
        case 'rux-icon-hd':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-hd.entry.js').then(processMod, consoleError);
        case 'rux-icon-hdr-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-hdr-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-hdr-on':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-hdr-on.entry.js').then(processMod, consoleError);
        case 'rux-icon-hdr-strong':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-hdr-strong.entry.js').then(processMod, consoleError);
        case 'rux-icon-hdr-weak':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-hdr-weak.entry.js').then(processMod, consoleError);
        case 'rux-icon-headset':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-headset.entry.js').then(processMod, consoleError);
        case 'rux-icon-headset-mic':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-headset-mic.entry.js').then(processMod, consoleError);
        case 'rux-icon-healing':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-healing.entry.js').then(processMod, consoleError);
        case 'rux-icon-hearing':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-hearing.entry.js').then(processMod, consoleError);
        case 'rux-icon-help':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-help.entry.js').then(processMod, consoleError);
        case 'rux-icon-help-outline':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-help-outline.entry.js').then(processMod, consoleError);
        case 'rux-icon-high-quality':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-high-quality.entry.js').then(processMod, consoleError);
        case 'rux-icon-highlight':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-highlight.entry.js').then(processMod, consoleError);
        case 'rux-icon-highlight-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-highlight-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-history':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-history.entry.js').then(processMod, consoleError);
        case 'rux-icon-home':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-home.entry.js').then(processMod, consoleError);
        case 'rux-icon-horizontal-split':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-horizontal-split.entry.js').then(processMod, consoleError);
        case 'rux-icon-hot-tub':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-hot-tub.entry.js').then(processMod, consoleError);
        case 'rux-icon-hotel':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-hotel.entry.js').then(processMod, consoleError);
        case 'rux-icon-hourglass-empty':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-hourglass-empty.entry.js').then(processMod, consoleError);
        case 'rux-icon-hourglass-full':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-hourglass-full.entry.js').then(processMod, consoleError);
        case 'rux-icon-how-to-reg':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-how-to-reg.entry.js').then(processMod, consoleError);
        case 'rux-icon-how-to-vote':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-how-to-vote.entry.js').then(processMod, consoleError);
        case 'rux-icon-http':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-http.entry.js').then(processMod, consoleError);
        case 'rux-icon-https':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-https.entry.js').then(processMod, consoleError);
        case 'rux-icon-image':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-image.entry.js').then(processMod, consoleError);
        case 'rux-icon-image-aspect-ratio':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-image-aspect-ratio.entry.js').then(processMod, consoleError);
        case 'rux-icon-image-search':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-image-search.entry.js').then(processMod, consoleError);
        case 'rux-icon-import-contacts':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-import-contacts.entry.js').then(processMod, consoleError);
        case 'rux-icon-import-export':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-import-export.entry.js').then(processMod, consoleError);
        case 'rux-icon-important-devices':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-important-devices.entry.js').then(processMod, consoleError);
        case 'rux-icon-inbox':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-inbox.entry.js').then(processMod, consoleError);
        case 'rux-icon-indeterminate-check-box':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-indeterminate-check-box.entry.js').then(processMod, consoleError);
        case 'rux-icon-info':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-info.entry.js').then(processMod, consoleError);
        case 'rux-icon-input':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-input.entry.js').then(processMod, consoleError);
        case 'rux-icon-insert-chart':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-insert-chart.entry.js').then(processMod, consoleError);
        case 'rux-icon-insert-chart-outlined':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-insert-chart-outlined.entry.js').then(processMod, consoleError);
        case 'rux-icon-insert-comment':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-insert-comment.entry.js').then(processMod, consoleError);
        case 'rux-icon-insert-drive-file':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-insert-drive-file.entry.js').then(processMod, consoleError);
        case 'rux-icon-insert-emoticon':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-insert-emoticon.entry.js').then(processMod, consoleError);
        case 'rux-icon-insert-invitation':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-insert-invitation.entry.js').then(processMod, consoleError);
        case 'rux-icon-insert-link':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-insert-link.entry.js').then(processMod, consoleError);
        case 'rux-icon-insert-photo':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-insert-photo.entry.js').then(processMod, consoleError);
        case 'rux-icon-invert-colors':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-invert-colors.entry.js').then(processMod, consoleError);
        case 'rux-icon-invert-colors-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-invert-colors-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-iso':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-iso.entry.js').then(processMod, consoleError);
        case 'rux-icon-keyboard':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard.entry.js').then(processMod, consoleError);
        case 'rux-icon-keyboard-arrow-down':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-arrow-down.entry.js').then(processMod, consoleError);
        case 'rux-icon-keyboard-arrow-left':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-arrow-left.entry.js').then(processMod, consoleError);
        case 'rux-icon-keyboard-arrow-right':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-arrow-right.entry.js').then(processMod, consoleError);
        case 'rux-icon-keyboard-arrow-up':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-arrow-up.entry.js').then(processMod, consoleError);
        case 'rux-icon-keyboard-backspace':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-backspace.entry.js').then(processMod, consoleError);
        case 'rux-icon-keyboard-capslock':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-capslock.entry.js').then(processMod, consoleError);
        case 'rux-icon-keyboard-hide':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-hide.entry.js').then(processMod, consoleError);
        case 'rux-icon-keyboard-return':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-return.entry.js').then(processMod, consoleError);
        case 'rux-icon-keyboard-tab':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-tab.entry.js').then(processMod, consoleError);
        case 'rux-icon-keyboard-voice':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-keyboard-voice.entry.js').then(processMod, consoleError);
        case 'rux-icon-kitchen':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-kitchen.entry.js').then(processMod, consoleError);
        case 'rux-icon-label':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-label.entry.js').then(processMod, consoleError);
        case 'rux-icon-label-important':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-label-important.entry.js').then(processMod, consoleError);
        case 'rux-icon-label-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-label-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-landscape':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-landscape.entry.js').then(processMod, consoleError);
        case 'rux-icon-language':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-language.entry.js').then(processMod, consoleError);
        case 'rux-icon-laptop':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-laptop.entry.js').then(processMod, consoleError);
        case 'rux-icon-laptop-chromebook':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-laptop-chromebook.entry.js').then(processMod, consoleError);
        case 'rux-icon-laptop-mac':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-laptop-mac.entry.js').then(processMod, consoleError);
        case 'rux-icon-laptop-windows':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-laptop-windows.entry.js').then(processMod, consoleError);
        case 'rux-icon-last-page':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-last-page.entry.js').then(processMod, consoleError);
        case 'rux-icon-launch':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-launch.entry.js').then(processMod, consoleError);
        case 'rux-icon-layers':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-layers.entry.js').then(processMod, consoleError);
        case 'rux-icon-layers-clear':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-layers-clear.entry.js').then(processMod, consoleError);
        case 'rux-icon-leak-add':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-leak-add.entry.js').then(processMod, consoleError);
        case 'rux-icon-leak-remove':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-leak-remove.entry.js').then(processMod, consoleError);
        case 'rux-icon-lens':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-lens.entry.js').then(processMod, consoleError);
        case 'rux-icon-library-add':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-library-add.entry.js').then(processMod, consoleError);
        case 'rux-icon-library-books':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-library-books.entry.js').then(processMod, consoleError);
        case 'rux-icon-library-music':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-library-music.entry.js').then(processMod, consoleError);
        case 'rux-icon-line-style':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-line-style.entry.js').then(processMod, consoleError);
        case 'rux-icon-line-weight':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-line-weight.entry.js').then(processMod, consoleError);
        case 'rux-icon-linear-scale':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-linear-scale.entry.js').then(processMod, consoleError);
        case 'rux-icon-link':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-link.entry.js').then(processMod, consoleError);
        case 'rux-icon-link-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-link-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-linked-camera':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-linked-camera.entry.js').then(processMod, consoleError);
        case 'rux-icon-list':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-list.entry.js').then(processMod, consoleError);
        case 'rux-icon-list-alt':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-list-alt.entry.js').then(processMod, consoleError);
        case 'rux-icon-live-help':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-live-help.entry.js').then(processMod, consoleError);
        case 'rux-icon-live-tv':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-live-tv.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-activity':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-activity.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-airport':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-airport.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-atm':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-atm.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-cafe':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-cafe.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-car-wash':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-car-wash.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-convenience-store':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-convenience-store.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-dining':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-dining.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-drink':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-drink.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-gas-station':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-gas-station.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-grocery-store':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-grocery-store.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-hospital':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-hospital.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-hotel':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-hotel.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-laundry-service':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-laundry-service.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-library':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-library.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-mall':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-mall.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-movies':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-movies.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-offer':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-offer.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-parking':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-parking.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-pharmacy':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-pharmacy.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-phone':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-phone.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-play':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-play.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-post-office':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-post-office.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-printshop':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-printshop.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-see':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-see.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-shipping':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-shipping.entry.js').then(processMod, consoleError);
        case 'rux-icon-local-taxi':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-local-taxi.entry.js').then(processMod, consoleError);
        case 'rux-icon-location-city':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-location-city.entry.js').then(processMod, consoleError);
        case 'rux-icon-location-disabled':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-location-disabled.entry.js').then(processMod, consoleError);
        case 'rux-icon-location-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-location-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-location-on':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-location-on.entry.js').then(processMod, consoleError);
        case 'rux-icon-location-searching':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-location-searching.entry.js').then(processMod, consoleError);
        case 'rux-icon-lock':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-lock.entry.js').then(processMod, consoleError);
        case 'rux-icon-lock-open':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-lock-open.entry.js').then(processMod, consoleError);
        case 'rux-icon-looks':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-looks.entry.js').then(processMod, consoleError);
        case 'rux-icon-looks-1':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-looks-1.entry.js').then(processMod, consoleError);
        case 'rux-icon-looks-2':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-looks-2.entry.js').then(processMod, consoleError);
        case 'rux-icon-looks-3':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-looks-3.entry.js').then(processMod, consoleError);
        case 'rux-icon-looks-4':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-looks-4.entry.js').then(processMod, consoleError);
        case 'rux-icon-looks-5':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-looks-5.entry.js').then(processMod, consoleError);
        case 'rux-icon-looks-6':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-looks-6.entry.js').then(processMod, consoleError);
        case 'rux-icon-loop':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-loop.entry.js').then(processMod, consoleError);
        case 'rux-icon-loupe':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-loupe.entry.js').then(processMod, consoleError);
        case 'rux-icon-low-priority':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-low-priority.entry.js').then(processMod, consoleError);
        case 'rux-icon-loyalty':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-loyalty.entry.js').then(processMod, consoleError);
        case 'rux-icon-mail':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-mail.entry.js').then(processMod, consoleError);
        case 'rux-icon-mail-outline':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-mail-outline.entry.js').then(processMod, consoleError);
        case 'rux-icon-map':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-map.entry.js').then(processMod, consoleError);
        case 'rux-icon-markunread':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-markunread.entry.js').then(processMod, consoleError);
        case 'rux-icon-markunread-mailbox':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-markunread-mailbox.entry.js').then(processMod, consoleError);
        case 'rux-icon-maximize':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-maximize.entry.js').then(processMod, consoleError);
        case 'rux-icon-meeting-room':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-meeting-room.entry.js').then(processMod, consoleError);
        case 'rux-icon-memory':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-memory.entry.js').then(processMod, consoleError);
        case 'rux-icon-menu':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-menu.entry.js').then(processMod, consoleError);
        case 'rux-icon-merge-type':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-merge-type.entry.js').then(processMod, consoleError);
        case 'rux-icon-message':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-message.entry.js').then(processMod, consoleError);
        case 'rux-icon-mic':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-mic.entry.js').then(processMod, consoleError);
        case 'rux-icon-mic-none':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-mic-none.entry.js').then(processMod, consoleError);
        case 'rux-icon-mic-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-mic-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-minimize':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-minimize.entry.js').then(processMod, consoleError);
        case 'rux-icon-missed-video-call':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-missed-video-call.entry.js').then(processMod, consoleError);
        case 'rux-icon-mission':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-mission.entry.js').then(processMod, consoleError);
        case 'rux-icon-mms':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-mms.entry.js').then(processMod, consoleError);
        case 'rux-icon-mobile-friendly':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-mobile-friendly.entry.js').then(processMod, consoleError);
        case 'rux-icon-mobile-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-mobile-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-mobile-screen-share':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-mobile-screen-share.entry.js').then(processMod, consoleError);
        case 'rux-icon-mode-comment':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-mode-comment.entry.js').then(processMod, consoleError);
        case 'rux-icon-monetization-on':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-monetization-on.entry.js').then(processMod, consoleError);
        case 'rux-icon-money':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-money.entry.js').then(processMod, consoleError);
        case 'rux-icon-money-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-money-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-monochrome-photos':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-monochrome-photos.entry.js').then(processMod, consoleError);
        case 'rux-icon-mood':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-mood.entry.js').then(processMod, consoleError);
        case 'rux-icon-mood-bad':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-mood-bad.entry.js').then(processMod, consoleError);
        case 'rux-icon-more':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-more.entry.js').then(processMod, consoleError);
        case 'rux-icon-more-horiz':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-more-horiz.entry.js').then(processMod, consoleError);
        case 'rux-icon-more-vert':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-more-vert.entry.js').then(processMod, consoleError);
        case 'rux-icon-motorcycle':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-motorcycle.entry.js').then(processMod, consoleError);
        case 'rux-icon-mouse':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-mouse.entry.js').then(processMod, consoleError);
        case 'rux-icon-move-to-inbox':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-move-to-inbox.entry.js').then(processMod, consoleError);
        case 'rux-icon-movie':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-movie.entry.js').then(processMod, consoleError);
        case 'rux-icon-movie-creation':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-movie-creation.entry.js').then(processMod, consoleError);
        case 'rux-icon-movie-filter':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-movie-filter.entry.js').then(processMod, consoleError);
        case 'rux-icon-multiline-chart':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-multiline-chart.entry.js').then(processMod, consoleError);
        case 'rux-icon-music-note':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-music-note.entry.js').then(processMod, consoleError);
        case 'rux-icon-music-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-music-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-music-video':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-music-video.entry.js').then(processMod, consoleError);
        case 'rux-icon-my-location':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-my-location.entry.js').then(processMod, consoleError);
        case 'rux-icon-nature':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-nature.entry.js').then(processMod, consoleError);
        case 'rux-icon-nature-people':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-nature-people.entry.js').then(processMod, consoleError);
        case 'rux-icon-navigate-before':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-navigate-before.entry.js').then(processMod, consoleError);
        case 'rux-icon-navigate-next':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-navigate-next.entry.js').then(processMod, consoleError);
        case 'rux-icon-navigation':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-navigation.entry.js').then(processMod, consoleError);
        case 'rux-icon-near-me':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-near-me.entry.js').then(processMod, consoleError);
        case 'rux-icon-netcom':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-netcom.entry.js').then(processMod, consoleError);
        case 'rux-icon-network-cell':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-network-cell.entry.js').then(processMod, consoleError);
        case 'rux-icon-network-check':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-network-check.entry.js').then(processMod, consoleError);
        case 'rux-icon-network-locked':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-network-locked.entry.js').then(processMod, consoleError);
        case 'rux-icon-network-wifi':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-network-wifi.entry.js').then(processMod, consoleError);
        case 'rux-icon-new-releases':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-new-releases.entry.js').then(processMod, consoleError);
        case 'rux-icon-next-week':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-next-week.entry.js').then(processMod, consoleError);
        case 'rux-icon-nfc':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-nfc.entry.js').then(processMod, consoleError);
        case 'rux-icon-no-encryption':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-no-encryption.entry.js').then(processMod, consoleError);
        case 'rux-icon-no-meeting-room':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-no-meeting-room.entry.js').then(processMod, consoleError);
        case 'rux-icon-no-sim':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-no-sim.entry.js').then(processMod, consoleError);
        case 'rux-icon-not-interested':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-not-interested.entry.js').then(processMod, consoleError);
        case 'rux-icon-not-listed-location':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-not-listed-location.entry.js').then(processMod, consoleError);
        case 'rux-icon-note':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-note.entry.js').then(processMod, consoleError);
        case 'rux-icon-note-add':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-note-add.entry.js').then(processMod, consoleError);
        case 'rux-icon-notes':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-notes.entry.js').then(processMod, consoleError);
        case 'rux-icon-notification-important':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-notification-important.entry.js').then(processMod, consoleError);
        case 'rux-icon-notifications':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-notifications.entry.js').then(processMod, consoleError);
        case 'rux-icon-notifications-active':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-notifications-active.entry.js').then(processMod, consoleError);
        case 'rux-icon-notifications-none':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-notifications-none.entry.js').then(processMod, consoleError);
        case 'rux-icon-notifications-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-notifications-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-notifications-paused':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-notifications-paused.entry.js').then(processMod, consoleError);
        case 'rux-icon-offline-bolt':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-offline-bolt.entry.js').then(processMod, consoleError);
        case 'rux-icon-offline-pin':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-offline-pin.entry.js').then(processMod, consoleError);
        case 'rux-icon-ondemand-video':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-ondemand-video.entry.js').then(processMod, consoleError);
        case 'rux-icon-opacity':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-opacity.entry.js').then(processMod, consoleError);
        case 'rux-icon-open-in-browser':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-open-in-browser.entry.js').then(processMod, consoleError);
        case 'rux-icon-open-in-new':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-open-in-new.entry.js').then(processMod, consoleError);
        case 'rux-icon-open-with':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-open-with.entry.js').then(processMod, consoleError);
        case 'rux-icon-outlined-flag':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-outlined-flag.entry.js').then(processMod, consoleError);
        case 'rux-icon-pages':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-pages.entry.js').then(processMod, consoleError);
        case 'rux-icon-pageview':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-pageview.entry.js').then(processMod, consoleError);
        case 'rux-icon-palette':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-palette.entry.js').then(processMod, consoleError);
        case 'rux-icon-pan-tool':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-pan-tool.entry.js').then(processMod, consoleError);
        case 'rux-icon-panorama':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-panorama.entry.js').then(processMod, consoleError);
        case 'rux-icon-panorama-fish-eye':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-panorama-fish-eye.entry.js').then(processMod, consoleError);
        case 'rux-icon-panorama-horizontal':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-panorama-horizontal.entry.js').then(processMod, consoleError);
        case 'rux-icon-panorama-vertical':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-panorama-vertical.entry.js').then(processMod, consoleError);
        case 'rux-icon-panorama-wide-angle':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-panorama-wide-angle.entry.js').then(processMod, consoleError);
        case 'rux-icon-party-mode':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-party-mode.entry.js').then(processMod, consoleError);
        case 'rux-icon-pause':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-pause.entry.js').then(processMod, consoleError);
        case 'rux-icon-pause-circle-filled':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-pause-circle-filled.entry.js').then(processMod, consoleError);
        case 'rux-icon-pause-circle-outline':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-pause-circle-outline.entry.js').then(processMod, consoleError);
        case 'rux-icon-pause-presentation':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-pause-presentation.entry.js').then(processMod, consoleError);
        case 'rux-icon-payload':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-payload.entry.js').then(processMod, consoleError);
        case 'rux-icon-payment':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-payment.entry.js').then(processMod, consoleError);
        case 'rux-icon-people-outline':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-people-outline.entry.js').then(processMod, consoleError);
        case 'rux-icon-perm-camera-mic':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-perm-camera-mic.entry.js').then(processMod, consoleError);
        case 'rux-icon-perm-contact-calendar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-perm-contact-calendar.entry.js').then(processMod, consoleError);
        case 'rux-icon-perm-data-setting':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-perm-data-setting.entry.js').then(processMod, consoleError);
        case 'rux-icon-perm-device-information':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-perm-device-information.entry.js').then(processMod, consoleError);
        case 'rux-icon-perm-identity':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-perm-identity.entry.js').then(processMod, consoleError);
        case 'rux-icon-perm-media':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-perm-media.entry.js').then(processMod, consoleError);
        case 'rux-icon-perm-phone-msg':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-perm-phone-msg.entry.js').then(processMod, consoleError);
        case 'rux-icon-perm-scan-wifi':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-perm-scan-wifi.entry.js').then(processMod, consoleError);
        case 'rux-icon-person':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-person.entry.js').then(processMod, consoleError);
        case 'rux-icon-person-add':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-person-add.entry.js').then(processMod, consoleError);
        case 'rux-icon-person-add-disabled':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-person-add-disabled.entry.js').then(processMod, consoleError);
        case 'rux-icon-person-outline':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-person-outline.entry.js').then(processMod, consoleError);
        case 'rux-icon-person-pin':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-person-pin.entry.js').then(processMod, consoleError);
        case 'rux-icon-person-pin-circle':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-person-pin-circle.entry.js').then(processMod, consoleError);
        case 'rux-icon-personal-video':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-personal-video.entry.js').then(processMod, consoleError);
        case 'rux-icon-pets':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-pets.entry.js').then(processMod, consoleError);
        case 'rux-icon-phone':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-phone.entry.js').then(processMod, consoleError);
        case 'rux-icon-phone-android':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-phone-android.entry.js').then(processMod, consoleError);
        case 'rux-icon-phone-bluetooth-speaker':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-phone-bluetooth-speaker.entry.js').then(processMod, consoleError);
        case 'rux-icon-phone-callback':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-phone-callback.entry.js').then(processMod, consoleError);
        case 'rux-icon-phone-forwarded':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-phone-forwarded.entry.js').then(processMod, consoleError);
        case 'rux-icon-phone-in-talk':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-phone-in-talk.entry.js').then(processMod, consoleError);
        case 'rux-icon-phone-iphone':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-phone-iphone.entry.js').then(processMod, consoleError);
        case 'rux-icon-phone-locked':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-phone-locked.entry.js').then(processMod, consoleError);
        case 'rux-icon-phone-missed':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-phone-missed.entry.js').then(processMod, consoleError);
        case 'rux-icon-phone-paused':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-phone-paused.entry.js').then(processMod, consoleError);
        case 'rux-icon-phonelink':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-phonelink.entry.js').then(processMod, consoleError);
        case 'rux-icon-phonelink-erase':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-phonelink-erase.entry.js').then(processMod, consoleError);
        case 'rux-icon-phonelink-lock':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-phonelink-lock.entry.js').then(processMod, consoleError);
        case 'rux-icon-phonelink-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-phonelink-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-phonelink-ring':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-phonelink-ring.entry.js').then(processMod, consoleError);
        case 'rux-icon-phonelink-setup':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-phonelink-setup.entry.js').then(processMod, consoleError);
        case 'rux-icon-photo':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-photo.entry.js').then(processMod, consoleError);
        case 'rux-icon-photo-album':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-photo-album.entry.js').then(processMod, consoleError);
        case 'rux-icon-photo-camera':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-photo-camera.entry.js').then(processMod, consoleError);
        case 'rux-icon-photo-filter':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-photo-filter.entry.js').then(processMod, consoleError);
        case 'rux-icon-photo-library':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-photo-library.entry.js').then(processMod, consoleError);
        case 'rux-icon-photo-size-select-actual':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-photo-size-select-actual.entry.js').then(processMod, consoleError);
        case 'rux-icon-photo-size-select-large':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-photo-size-select-large.entry.js').then(processMod, consoleError);
        case 'rux-icon-photo-size-select-small':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-photo-size-select-small.entry.js').then(processMod, consoleError);
        case 'rux-icon-picture-as-pdf':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-picture-as-pdf.entry.js').then(processMod, consoleError);
        case 'rux-icon-picture-in-picture':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-picture-in-picture.entry.js').then(processMod, consoleError);
        case 'rux-icon-picture-in-picture-alt':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-picture-in-picture-alt.entry.js').then(processMod, consoleError);
        case 'rux-icon-pie-chart':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-pie-chart.entry.js').then(processMod, consoleError);
        case 'rux-icon-pin-drop':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-pin-drop.entry.js').then(processMod, consoleError);
        case 'rux-icon-place':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-place.entry.js').then(processMod, consoleError);
        case 'rux-icon-play-arrow':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-play-arrow.entry.js').then(processMod, consoleError);
        case 'rux-icon-play-circle-filled':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-play-circle-filled.entry.js').then(processMod, consoleError);
        case 'rux-icon-play-circle-filled-white':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-play-circle-filled-white.entry.js').then(processMod, consoleError);
        case 'rux-icon-play-circle-outline':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-play-circle-outline.entry.js').then(processMod, consoleError);
        case 'rux-icon-play-for-work':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-play-for-work.entry.js').then(processMod, consoleError);
        case 'rux-icon-playlist-add':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-playlist-add.entry.js').then(processMod, consoleError);
        case 'rux-icon-playlist-add-check':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-playlist-add-check.entry.js').then(processMod, consoleError);
        case 'rux-icon-playlist-play':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-playlist-play.entry.js').then(processMod, consoleError);
        case 'rux-icon-plus-one':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-plus-one.entry.js').then(processMod, consoleError);
        case 'rux-icon-poll':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-poll.entry.js').then(processMod, consoleError);
        case 'rux-icon-pool':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-pool.entry.js').then(processMod, consoleError);
        case 'rux-icon-portable-wifi-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-portable-wifi-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-portrait':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-portrait.entry.js').then(processMod, consoleError);
        case 'rux-icon-power':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-power.entry.js').then(processMod, consoleError);
        case 'rux-icon-power-input':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-power-input.entry.js').then(processMod, consoleError);
        case 'rux-icon-power-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-power-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-power-settings-new':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-power-settings-new.entry.js').then(processMod, consoleError);
        case 'rux-icon-pregnant-woman':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-pregnant-woman.entry.js').then(processMod, consoleError);
        case 'rux-icon-present-to-all':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-present-to-all.entry.js').then(processMod, consoleError);
        case 'rux-icon-print':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-print.entry.js').then(processMod, consoleError);
        case 'rux-icon-print-disabled':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-print-disabled.entry.js').then(processMod, consoleError);
        case 'rux-icon-priority-high':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-priority-high.entry.js').then(processMod, consoleError);
        case 'rux-icon-processor':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-processor.entry.js').then(processMod, consoleError);
        case 'rux-icon-processor-alt':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-processor-alt.entry.js').then(processMod, consoleError);
        case 'rux-icon-propulsion-power':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-propulsion-power.entry.js').then(processMod, consoleError);
        case 'rux-icon-public':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-public.entry.js').then(processMod, consoleError);
        case 'rux-icon-publish':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-publish.entry.js').then(processMod, consoleError);
        case 'rux-icon-query-builder':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-query-builder.entry.js').then(processMod, consoleError);
        case 'rux-icon-question-answer':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-question-answer.entry.js').then(processMod, consoleError);
        case 'rux-icon-queue':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-queue.entry.js').then(processMod, consoleError);
        case 'rux-icon-queue-music':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-queue-music.entry.js').then(processMod, consoleError);
        case 'rux-icon-queue-play-next':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-queue-play-next.entry.js').then(processMod, consoleError);
        case 'rux-icon-radio':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-radio.entry.js').then(processMod, consoleError);
        case 'rux-icon-radio-button-checked':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-radio-button-checked.entry.js').then(processMod, consoleError);
        case 'rux-icon-radio-button-unchecked':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-radio-button-unchecked.entry.js').then(processMod, consoleError);
        case 'rux-icon-rate-review':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-rate-review.entry.js').then(processMod, consoleError);
        case 'rux-icon-receipt':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-receipt.entry.js').then(processMod, consoleError);
        case 'rux-icon-recent-actors':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-recent-actors.entry.js').then(processMod, consoleError);
        case 'rux-icon-record-voice-over':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-record-voice-over.entry.js').then(processMod, consoleError);
        case 'rux-icon-redeem':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-redeem.entry.js').then(processMod, consoleError);
        case 'rux-icon-redo':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-redo.entry.js').then(processMod, consoleError);
        case 'rux-icon-refresh':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-refresh.entry.js').then(processMod, consoleError);
        case 'rux-icon-release':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-release.entry.js').then(processMod, consoleError);
        case 'rux-icon-remove':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-remove.entry.js').then(processMod, consoleError);
        case 'rux-icon-remove-circle':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-remove-circle.entry.js').then(processMod, consoleError);
        case 'rux-icon-remove-circle-outline':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-remove-circle-outline.entry.js').then(processMod, consoleError);
        case 'rux-icon-remove-from-queue':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-remove-from-queue.entry.js').then(processMod, consoleError);
        case 'rux-icon-remove-red-eye':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-remove-red-eye.entry.js').then(processMod, consoleError);
        case 'rux-icon-remove-shopping-cart':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-remove-shopping-cart.entry.js').then(processMod, consoleError);
        case 'rux-icon-reorder':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-reorder.entry.js').then(processMod, consoleError);
        case 'rux-icon-repeat':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-repeat.entry.js').then(processMod, consoleError);
        case 'rux-icon-repeat-one':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-repeat-one.entry.js').then(processMod, consoleError);
        case 'rux-icon-replay':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-replay.entry.js').then(processMod, consoleError);
        case 'rux-icon-replay-10':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-replay-10.entry.js').then(processMod, consoleError);
        case 'rux-icon-replay-30':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-replay-30.entry.js').then(processMod, consoleError);
        case 'rux-icon-replay-5':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-replay-5.entry.js').then(processMod, consoleError);
        case 'rux-icon-reply':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-reply.entry.js').then(processMod, consoleError);
        case 'rux-icon-reply-all':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-reply-all.entry.js').then(processMod, consoleError);
        case 'rux-icon-report':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-report.entry.js').then(processMod, consoleError);
        case 'rux-icon-report-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-report-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-report-problem':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-report-problem.entry.js').then(processMod, consoleError);
        case 'rux-icon-restaurant':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-restaurant.entry.js').then(processMod, consoleError);
        case 'rux-icon-restaurant-menu':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-restaurant-menu.entry.js').then(processMod, consoleError);
        case 'rux-icon-restore':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-restore.entry.js').then(processMod, consoleError);
        case 'rux-icon-restore-from-trash':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-restore-from-trash.entry.js').then(processMod, consoleError);
        case 'rux-icon-restore-page':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-restore-page.entry.js').then(processMod, consoleError);
        case 'rux-icon-ring-volume':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-ring-volume.entry.js').then(processMod, consoleError);
        case 'rux-icon-room':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-room.entry.js').then(processMod, consoleError);
        case 'rux-icon-room-service':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-room-service.entry.js').then(processMod, consoleError);
        case 'rux-icon-rotate-90-degrees-cc':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-rotate-90-degrees-cc.entry.js').then(processMod, consoleError);
        case 'rux-icon-rotate-left':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-rotate-left.entry.js').then(processMod, consoleError);
        case 'rux-icon-rotate-right':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-rotate-right.entry.js').then(processMod, consoleError);
        case 'rux-icon-rounded-corner':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-rounded-corner.entry.js').then(processMod, consoleError);
        case 'rux-icon-router':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-router.entry.js').then(processMod, consoleError);
        case 'rux-icon-rowing':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-rowing.entry.js').then(processMod, consoleError);
        case 'rux-icon-rss-feed':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-rss-feed.entry.js').then(processMod, consoleError);
        case 'rux-icon-rv-hookup':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-rv-hookup.entry.js').then(processMod, consoleError);
        case 'rux-icon-satellite':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-satellite.entry.js').then(processMod, consoleError);
        case 'rux-icon-satellite-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-satellite-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-satellite-receive':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-satellite-receive.entry.js').then(processMod, consoleError);
        case 'rux-icon-satellite-transmit':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-satellite-transmit.entry.js').then(processMod, consoleError);
        case 'rux-icon-save':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-save.entry.js').then(processMod, consoleError);
        case 'rux-icon-save-alt':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-save-alt.entry.js').then(processMod, consoleError);
        case 'rux-icon-scanner':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-scanner.entry.js').then(processMod, consoleError);
        case 'rux-icon-scatter-plot':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-scatter-plot.entry.js').then(processMod, consoleError);
        case 'rux-icon-schedule':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-schedule.entry.js').then(processMod, consoleError);
        case 'rux-icon-school':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-school.entry.js').then(processMod, consoleError);
        case 'rux-icon-score':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-score.entry.js').then(processMod, consoleError);
        case 'rux-icon-screen-lock-landscape':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-screen-lock-landscape.entry.js').then(processMod, consoleError);
        case 'rux-icon-screen-lock-portrait':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-screen-lock-portrait.entry.js').then(processMod, consoleError);
        case 'rux-icon-screen-lock-rotation':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-screen-lock-rotation.entry.js').then(processMod, consoleError);
        case 'rux-icon-screen-rotation':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-screen-rotation.entry.js').then(processMod, consoleError);
        case 'rux-icon-screen-share':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-screen-share.entry.js').then(processMod, consoleError);
        case 'rux-icon-sd-card':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-sd-card.entry.js').then(processMod, consoleError);
        case 'rux-icon-sd-storage':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-sd-storage.entry.js').then(processMod, consoleError);
        case 'rux-icon-search':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-search.entry.js').then(processMod, consoleError);
        case 'rux-icon-seat':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-seat.entry.js').then(processMod, consoleError);
        case 'rux-icon-security':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-security.entry.js').then(processMod, consoleError);
        case 'rux-icon-select-all':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-select-all.entry.js').then(processMod, consoleError);
        case 'rux-icon-send':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-send.entry.js').then(processMod, consoleError);
        case 'rux-icon-sentiment-dissatisfied':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-sentiment-dissatisfied.entry.js').then(processMod, consoleError);
        case 'rux-icon-sentiment-satisfied':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-sentiment-satisfied.entry.js').then(processMod, consoleError);
        case 'rux-icon-sentiment-satisfied-alt':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-sentiment-satisfied-alt.entry.js').then(processMod, consoleError);
        case 'rux-icon-sentiment-very-dissatisfied':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-sentiment-very-dissatisfied.entry.js').then(processMod, consoleError);
        case 'rux-icon-sentiment-very-satisfied':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-sentiment-very-satisfied.entry.js').then(processMod, consoleError);
        case 'rux-icon-set-power':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-set-power.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings-applications':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings-applications.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings-backup-restore':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings-backup-restore.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings-bluetooth':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings-bluetooth.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings-brightness':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings-brightness.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings-cell':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings-cell.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings-ethernet':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings-ethernet.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings-input-antenna':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings-input-antenna.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings-input-component':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings-input-component.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings-input-composite':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings-input-composite.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings-input-hdmi':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings-input-hdmi.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings-input-svideo':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings-input-svideo.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings-overscan':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings-overscan.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings-phone':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings-phone.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings-power':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings-power.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings-remote':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings-remote.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings-system-daydream':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings-system-daydream.entry.js').then(processMod, consoleError);
        case 'rux-icon-settings-voice':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-settings-voice.entry.js').then(processMod, consoleError);
        case 'rux-icon-share':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-share.entry.js').then(processMod, consoleError);
        case 'rux-icon-shop':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-shop.entry.js').then(processMod, consoleError);
        case 'rux-icon-shop-two':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-shop-two.entry.js').then(processMod, consoleError);
        case 'rux-icon-shopping-basket':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-shopping-basket.entry.js').then(processMod, consoleError);
        case 'rux-icon-shopping-cart':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-shopping-cart.entry.js').then(processMod, consoleError);
        case 'rux-icon-short-text':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-short-text.entry.js').then(processMod, consoleError);
        case 'rux-icon-show-chart':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-show-chart.entry.js').then(processMod, consoleError);
        case 'rux-icon-shuffle':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-shuffle.entry.js').then(processMod, consoleError);
        case 'rux-icon-shutter-speed':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-shutter-speed.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-cellular-0-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-0-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-cellular-1-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-1-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-cellular-2-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-2-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-cellular-3-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-3-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-cellular-4-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-4-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-cellular-alt':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-alt.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-cellular-connected-no-internet-0-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-connected-no-internet-0-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-cellular-connected-no-internet-1-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-connected-no-internet-1-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-cellular-connected-no-internet-2-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-connected-no-internet-2-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-cellular-connected-no-internet-3-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-connected-no-internet-3-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-cellular-connected-no-internet-4-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-connected-no-internet-4-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-cellular-no-sim':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-no-sim.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-cellular-null':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-null.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-cellular-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-cellular-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-wifi-0-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-0-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-wifi-1-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-1-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-wifi-1-bar-lock':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-1-bar-lock.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-wifi-2-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-2-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-wifi-2-bar-lock':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-2-bar-lock.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-wifi-3-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-3-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-wifi-3-bar-lock':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-3-bar-lock.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-wifi-4-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-4-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-wifi-4-bar-lock':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-4-bar-lock.entry.js').then(processMod, consoleError);
        case 'rux-icon-signal-wifi-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-signal-wifi-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-sim-card':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-sim-card.entry.js').then(processMod, consoleError);
        case 'rux-icon-skip-next':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-skip-next.entry.js').then(processMod, consoleError);
        case 'rux-icon-skip-previous':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-skip-previous.entry.js').then(processMod, consoleError);
        case 'rux-icon-slideshow':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-slideshow.entry.js').then(processMod, consoleError);
        case 'rux-icon-slow-motion-video':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-slow-motion-video.entry.js').then(processMod, consoleError);
        case 'rux-icon-smartphone':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-smartphone.entry.js').then(processMod, consoleError);
        case 'rux-icon-smoke-free':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-smoke-free.entry.js').then(processMod, consoleError);
        case 'rux-icon-smoking-rooms':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-smoking-rooms.entry.js').then(processMod, consoleError);
        case 'rux-icon-sms':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-sms.entry.js').then(processMod, consoleError);
        case 'rux-icon-sms-failed':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-sms-failed.entry.js').then(processMod, consoleError);
        case 'rux-icon-snooze':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-snooze.entry.js').then(processMod, consoleError);
        case 'rux-icon-solar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-solar.entry.js').then(processMod, consoleError);
        case 'rux-icon-sort':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-sort.entry.js').then(processMod, consoleError);
        case 'rux-icon-sort-by-alpha':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-sort-by-alpha.entry.js').then(processMod, consoleError);
        case 'rux-icon-spa':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-spa.entry.js').then(processMod, consoleError);
        case 'rux-icon-space-bar':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-space-bar.entry.js').then(processMod, consoleError);
        case 'rux-icon-speaker':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-speaker.entry.js').then(processMod, consoleError);
        case 'rux-icon-speaker-group':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-speaker-group.entry.js').then(processMod, consoleError);
        case 'rux-icon-speaker-notes':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-speaker-notes.entry.js').then(processMod, consoleError);
        case 'rux-icon-speaker-notes-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-speaker-notes-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-speaker-phone':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-speaker-phone.entry.js').then(processMod, consoleError);
        case 'rux-icon-spellcheck':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-spellcheck.entry.js').then(processMod, consoleError);
        case 'rux-icon-star':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-star.entry.js').then(processMod, consoleError);
        case 'rux-icon-star-border':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-star-border.entry.js').then(processMod, consoleError);
        case 'rux-icon-star-half':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-star-half.entry.js').then(processMod, consoleError);
        case 'rux-icon-star-rate':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-star-rate.entry.js').then(processMod, consoleError);
        case 'rux-icon-stars':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-stars.entry.js').then(processMod, consoleError);
        case 'rux-icon-stay-current-landscape':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-stay-current-landscape.entry.js').then(processMod, consoleError);
        case 'rux-icon-stay-current-portrait':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-stay-current-portrait.entry.js').then(processMod, consoleError);
        case 'rux-icon-stay-primary-landscape':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-stay-primary-landscape.entry.js').then(processMod, consoleError);
        case 'rux-icon-stay-primary-portrait':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-stay-primary-portrait.entry.js').then(processMod, consoleError);
        case 'rux-icon-stop':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-stop.entry.js').then(processMod, consoleError);
        case 'rux-icon-stop-screen-share':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-stop-screen-share.entry.js').then(processMod, consoleError);
        case 'rux-icon-storage':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-storage.entry.js').then(processMod, consoleError);
        case 'rux-icon-store':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-store.entry.js').then(processMod, consoleError);
        case 'rux-icon-store-mall-directory':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-store-mall-directory.entry.js').then(processMod, consoleError);
        case 'rux-icon-straighten':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-straighten.entry.js').then(processMod, consoleError);
        case 'rux-icon-streetview':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-streetview.entry.js').then(processMod, consoleError);
        case 'rux-icon-strikethrough-s':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-strikethrough-s.entry.js').then(processMod, consoleError);
        case 'rux-icon-style':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-style.entry.js').then(processMod, consoleError);
        case 'rux-icon-subdirectory-arrow-left':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-subdirectory-arrow-left.entry.js').then(processMod, consoleError);
        case 'rux-icon-subdirectory-arrow-right':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-subdirectory-arrow-right.entry.js').then(processMod, consoleError);
        case 'rux-icon-subject':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-subject.entry.js').then(processMod, consoleError);
        case 'rux-icon-subscriptions':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-subscriptions.entry.js').then(processMod, consoleError);
        case 'rux-icon-subtitles':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-subtitles.entry.js').then(processMod, consoleError);
        case 'rux-icon-subway':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-subway.entry.js').then(processMod, consoleError);
        case 'rux-icon-supervised-user-circle':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-supervised-user-circle.entry.js').then(processMod, consoleError);
        case 'rux-icon-supervisor-account':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-supervisor-account.entry.js').then(processMod, consoleError);
        case 'rux-icon-surround-sound':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-surround-sound.entry.js').then(processMod, consoleError);
        case 'rux-icon-swap-calls':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-swap-calls.entry.js').then(processMod, consoleError);
        case 'rux-icon-swap-horiz':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-swap-horiz.entry.js').then(processMod, consoleError);
        case 'rux-icon-swap-horizontal-circle':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-swap-horizontal-circle.entry.js').then(processMod, consoleError);
        case 'rux-icon-swap-vert':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-swap-vert.entry.js').then(processMod, consoleError);
        case 'rux-icon-swap-vertical-circle':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-swap-vertical-circle.entry.js').then(processMod, consoleError);
        case 'rux-icon-switch-camera':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-switch-camera.entry.js').then(processMod, consoleError);
        case 'rux-icon-switch-video':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-switch-video.entry.js').then(processMod, consoleError);
        case 'rux-icon-sync':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-sync.entry.js').then(processMod, consoleError);
        case 'rux-icon-sync-disabled':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-sync-disabled.entry.js').then(processMod, consoleError);
        case 'rux-icon-sync-problem':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-sync-problem.entry.js').then(processMod, consoleError);
        case 'rux-icon-system-update':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-system-update.entry.js').then(processMod, consoleError);
        case 'rux-icon-tab':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-tab.entry.js').then(processMod, consoleError);
        case 'rux-icon-tab-unselected':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-tab-unselected.entry.js').then(processMod, consoleError);
        case 'rux-icon-table-chart':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-table-chart.entry.js').then(processMod, consoleError);
        case 'rux-icon-tablet':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-tablet.entry.js').then(processMod, consoleError);
        case 'rux-icon-tablet-android':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-tablet-android.entry.js').then(processMod, consoleError);
        case 'rux-icon-tablet-mac':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-tablet-mac.entry.js').then(processMod, consoleError);
        case 'rux-icon-tag-faces':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-tag-faces.entry.js').then(processMod, consoleError);
        case 'rux-icon-tap-and-play':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-tap-and-play.entry.js').then(processMod, consoleError);
        case 'rux-icon-terrain':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-terrain.entry.js').then(processMod, consoleError);
        case 'rux-icon-text-fields':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-text-fields.entry.js').then(processMod, consoleError);
        case 'rux-icon-text-format':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-text-format.entry.js').then(processMod, consoleError);
        case 'rux-icon-text-rotate-up':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-text-rotate-up.entry.js').then(processMod, consoleError);
        case 'rux-icon-text-rotate-vertical':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-text-rotate-vertical.entry.js').then(processMod, consoleError);
        case 'rux-icon-text-rotation-none':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-text-rotation-none.entry.js').then(processMod, consoleError);
        case 'rux-icon-textsms':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-textsms.entry.js').then(processMod, consoleError);
        case 'rux-icon-texture':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-texture.entry.js').then(processMod, consoleError);
        case 'rux-icon-theaters':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-theaters.entry.js').then(processMod, consoleError);
        case 'rux-icon-thermal':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-thermal.entry.js').then(processMod, consoleError);
        case 'rux-icon-thumb-down':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-thumb-down.entry.js').then(processMod, consoleError);
        case 'rux-icon-thumb-down-alt':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-thumb-down-alt.entry.js').then(processMod, consoleError);
        case 'rux-icon-thumb-up':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-thumb-up.entry.js').then(processMod, consoleError);
        case 'rux-icon-thumb-up-alt':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-thumb-up-alt.entry.js').then(processMod, consoleError);
        case 'rux-icon-thumbs-up-down':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-thumbs-up-down.entry.js').then(processMod, consoleError);
        case 'rux-icon-time-to-leave':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-time-to-leave.entry.js').then(processMod, consoleError);
        case 'rux-icon-timelapse':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-timelapse.entry.js').then(processMod, consoleError);
        case 'rux-icon-timeline':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-timeline.entry.js').then(processMod, consoleError);
        case 'rux-icon-timer':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-timer.entry.js').then(processMod, consoleError);
        case 'rux-icon-timer-10':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-timer-10.entry.js').then(processMod, consoleError);
        case 'rux-icon-timer-3':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-timer-3.entry.js').then(processMod, consoleError);
        case 'rux-icon-timer-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-timer-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-title':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-title.entry.js').then(processMod, consoleError);
        case 'rux-icon-toc':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-toc.entry.js').then(processMod, consoleError);
        case 'rux-icon-today':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-today.entry.js').then(processMod, consoleError);
        case 'rux-icon-toggle-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-toggle-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-toggle-on':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-toggle-on.entry.js').then(processMod, consoleError);
        case 'rux-icon-toll':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-toll.entry.js').then(processMod, consoleError);
        case 'rux-icon-tonality':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-tonality.entry.js').then(processMod, consoleError);
        case 'rux-icon-touch-app':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-touch-app.entry.js').then(processMod, consoleError);
        case 'rux-icon-toys':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-toys.entry.js').then(processMod, consoleError);
        case 'rux-icon-track-changes':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-track-changes.entry.js').then(processMod, consoleError);
        case 'rux-icon-traffic':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-traffic.entry.js').then(processMod, consoleError);
        case 'rux-icon-train':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-train.entry.js').then(processMod, consoleError);
        case 'rux-icon-tram':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-tram.entry.js').then(processMod, consoleError);
        case 'rux-icon-transfer-within-a-station':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-transfer-within-a-station.entry.js').then(processMod, consoleError);
        case 'rux-icon-transform':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-transform.entry.js').then(processMod, consoleError);
        case 'rux-icon-transit-enterexit':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-transit-enterexit.entry.js').then(processMod, consoleError);
        case 'rux-icon-translate':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-translate.entry.js').then(processMod, consoleError);
        case 'rux-icon-trending-down':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-trending-down.entry.js').then(processMod, consoleError);
        case 'rux-icon-trending-flat':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-trending-flat.entry.js').then(processMod, consoleError);
        case 'rux-icon-trending-up':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-trending-up.entry.js').then(processMod, consoleError);
        case 'rux-icon-trip-origin':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-trip-origin.entry.js').then(processMod, consoleError);
        case 'rux-icon-tune':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-tune.entry.js').then(processMod, consoleError);
        case 'rux-icon-turned-in':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-turned-in.entry.js').then(processMod, consoleError);
        case 'rux-icon-turned-in-not':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-turned-in-not.entry.js').then(processMod, consoleError);
        case 'rux-icon-tv':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-tv.entry.js').then(processMod, consoleError);
        case 'rux-icon-tv-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-tv-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-unarchive':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-unarchive.entry.js').then(processMod, consoleError);
        case 'rux-icon-undo':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-undo.entry.js').then(processMod, consoleError);
        case 'rux-icon-unfold-less':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-unfold-less.entry.js').then(processMod, consoleError);
        case 'rux-icon-unfold-more':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-unfold-more.entry.js').then(processMod, consoleError);
        case 'rux-icon-unsubscribe':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-unsubscribe.entry.js').then(processMod, consoleError);
        case 'rux-icon-update':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-update.entry.js').then(processMod, consoleError);
        case 'rux-icon-usb':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-usb.entry.js').then(processMod, consoleError);
        case 'rux-icon-verified-user':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-verified-user.entry.js').then(processMod, consoleError);
        case 'rux-icon-vertical-align-bottom':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-vertical-align-bottom.entry.js').then(processMod, consoleError);
        case 'rux-icon-vertical-align-center':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-vertical-align-center.entry.js').then(processMod, consoleError);
        case 'rux-icon-vertical-align-top':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-vertical-align-top.entry.js').then(processMod, consoleError);
        case 'rux-icon-vertical-split':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-vertical-split.entry.js').then(processMod, consoleError);
        case 'rux-icon-vibration':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-vibration.entry.js').then(processMod, consoleError);
        case 'rux-icon-video-call':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-video-call.entry.js').then(processMod, consoleError);
        case 'rux-icon-video-label':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-video-label.entry.js').then(processMod, consoleError);
        case 'rux-icon-video-library':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-video-library.entry.js').then(processMod, consoleError);
        case 'rux-icon-videocam':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-videocam.entry.js').then(processMod, consoleError);
        case 'rux-icon-videocam-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-videocam-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-videogame-asset':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-videogame-asset.entry.js').then(processMod, consoleError);
        case 'rux-icon-view-agenda':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-view-agenda.entry.js').then(processMod, consoleError);
        case 'rux-icon-view-array':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-view-array.entry.js').then(processMod, consoleError);
        case 'rux-icon-view-carousel':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-view-carousel.entry.js').then(processMod, consoleError);
        case 'rux-icon-view-column':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-view-column.entry.js').then(processMod, consoleError);
        case 'rux-icon-view-comfy':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-view-comfy.entry.js').then(processMod, consoleError);
        case 'rux-icon-view-compact':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-view-compact.entry.js').then(processMod, consoleError);
        case 'rux-icon-view-day':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-view-day.entry.js').then(processMod, consoleError);
        case 'rux-icon-view-headline':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-view-headline.entry.js').then(processMod, consoleError);
        case 'rux-icon-view-list':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-view-list.entry.js').then(processMod, consoleError);
        case 'rux-icon-view-module':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-view-module.entry.js').then(processMod, consoleError);
        case 'rux-icon-view-quilt':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-view-quilt.entry.js').then(processMod, consoleError);
        case 'rux-icon-view-stream':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-view-stream.entry.js').then(processMod, consoleError);
        case 'rux-icon-view-week':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-view-week.entry.js').then(processMod, consoleError);
        case 'rux-icon-vignette':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-vignette.entry.js').then(processMod, consoleError);
        case 'rux-icon-visibility':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-visibility.entry.js').then(processMod, consoleError);
        case 'rux-icon-visibility-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-visibility-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-voice-chat':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-voice-chat.entry.js').then(processMod, consoleError);
        case 'rux-icon-voice-over-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-voice-over-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-voicemail':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-voicemail.entry.js').then(processMod, consoleError);
        case 'rux-icon-volume-down':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-volume-down.entry.js').then(processMod, consoleError);
        case 'rux-icon-volume-mute':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-volume-mute.entry.js').then(processMod, consoleError);
        case 'rux-icon-volume-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-volume-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-volume-up':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-volume-up.entry.js').then(processMod, consoleError);
        case 'rux-icon-vpn-key':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-vpn-key.entry.js').then(processMod, consoleError);
        case 'rux-icon-vpn-lock':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-vpn-lock.entry.js').then(processMod, consoleError);
        case 'rux-icon-wallpaper':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-wallpaper.entry.js').then(processMod, consoleError);
        case 'rux-icon-warning':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-warning.entry.js').then(processMod, consoleError);
        case 'rux-icon-watch':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-watch.entry.js').then(processMod, consoleError);
        case 'rux-icon-watch-later':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-watch-later.entry.js').then(processMod, consoleError);
        case 'rux-icon-waves':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-waves.entry.js').then(processMod, consoleError);
        case 'rux-icon-wb-auto':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-wb-auto.entry.js').then(processMod, consoleError);
        case 'rux-icon-wb-cloudy':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-wb-cloudy.entry.js').then(processMod, consoleError);
        case 'rux-icon-wb-incandescent':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-wb-incandescent.entry.js').then(processMod, consoleError);
        case 'rux-icon-wb-iridescent':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-wb-iridescent.entry.js').then(processMod, consoleError);
        case 'rux-icon-wb-sunny':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-wb-sunny.entry.js').then(processMod, consoleError);
        case 'rux-icon-wc':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-wc.entry.js').then(processMod, consoleError);
        case 'rux-icon-web':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-web.entry.js').then(processMod, consoleError);
        case 'rux-icon-web-asset':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-web-asset.entry.js').then(processMod, consoleError);
        case 'rux-icon-weekend':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-weekend.entry.js').then(processMod, consoleError);
        case 'rux-icon-whatshot':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-whatshot.entry.js').then(processMod, consoleError);
        case 'rux-icon-where-to-vote':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-where-to-vote.entry.js').then(processMod, consoleError);
        case 'rux-icon-widgets':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-widgets.entry.js').then(processMod, consoleError);
        case 'rux-icon-wifi':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-wifi.entry.js').then(processMod, consoleError);
        case 'rux-icon-wifi-lock':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-wifi-lock.entry.js').then(processMod, consoleError);
        case 'rux-icon-wifi-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-wifi-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-wifi-tethering':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-wifi-tethering.entry.js').then(processMod, consoleError);
        case 'rux-icon-work':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-work.entry.js').then(processMod, consoleError);
        case 'rux-icon-work-off':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-work-off.entry.js').then(processMod, consoleError);
        case 'rux-icon-work-outline':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-work-outline.entry.js').then(processMod, consoleError);
        case 'rux-icon-wrap-text':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-wrap-text.entry.js').then(processMod, consoleError);
        case 'rux-icon-youtube-searched-for':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-youtube-searched-for.entry.js').then(processMod, consoleError);
        case 'rux-icon-zoom-in':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-zoom-in.entry.js').then(processMod, consoleError);
        case 'rux-icon-zoom-in-map':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-zoom-in-map.entry.js').then(processMod, consoleError);
        case 'rux-icon-zoom-out':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-zoom-out.entry.js').then(processMod, consoleError);
        case 'rux-icon-zoom-out-map':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon-zoom-out-map.entry.js').then(processMod, consoleError);
        case 'rux-indeterminate-progress':
          return import(
            /* webpackMode: "lazy" */
            './rux-indeterminate-progress.entry.js').then(processMod, consoleError);
        case 'rux-log':
          return import(
            /* webpackMode: "lazy" */
            './rux-log.entry.js').then(processMod, consoleError);
        case 'rux-menu':
          return import(
            /* webpackMode: "lazy" */
            './rux-menu.entry.js').then(processMod, consoleError);
        case 'rux-menu-item':
          return import(
            /* webpackMode: "lazy" */
            './rux-menu-item.entry.js').then(processMod, consoleError);
        case 'rux-menu-item-divider':
          return import(
            /* webpackMode: "lazy" */
            './rux-menu-item-divider.entry.js').then(processMod, consoleError);
        case 'rux-monitoring-icon':
          return import(
            /* webpackMode: "lazy" */
            './rux-monitoring-icon.entry.js').then(processMod, consoleError);
        case 'rux-monitoring-progress-icon':
          return import(
            /* webpackMode: "lazy" */
            './rux-monitoring-progress-icon.entry.js').then(processMod, consoleError);
        case 'rux-notification':
          return import(
            /* webpackMode: "lazy" */
            './rux-notification.entry.js').then(processMod, consoleError);
        case 'rux-option':
          return import(
            /* webpackMode: "lazy" */
            './rux-option.entry.js').then(processMod, consoleError);
        case 'rux-option-group':
          return import(
            /* webpackMode: "lazy" */
            './rux-option-group.entry.js').then(processMod, consoleError);
        case 'rux-pop-up':
          return import(
            /* webpackMode: "lazy" */
            './rux-pop-up.entry.js').then(processMod, consoleError);
        case 'rux-progress':
          return import(
            /* webpackMode: "lazy" */
            './rux-progress.entry.js').then(processMod, consoleError);
        case 'rux-push-button':
          return import(
            /* webpackMode: "lazy" */
            './rux-push-button.entry.js').then(processMod, consoleError);
        case 'rux-radio':
          return import(
            /* webpackMode: "lazy" */
            './rux-radio.entry.js').then(processMod, consoleError);
        case 'rux-radio-group':
          return import(
            /* webpackMode: "lazy" */
            './rux-radio-group.entry.js').then(processMod, consoleError);
        case 'rux-ruler':
          return import(
            /* webpackMode: "lazy" */
            './rux-ruler.entry.js').then(processMod, consoleError);
        case 'rux-segmented-button':
          return import(
            /* webpackMode: "lazy" */
            './rux-segmented-button.entry.js').then(processMod, consoleError);
        case 'rux-select':
          return import(
            /* webpackMode: "lazy" */
            './rux-select.entry.js').then(processMod, consoleError);
        case 'rux-slider':
          return import(
            /* webpackMode: "lazy" */
            './rux-slider.entry.js').then(processMod, consoleError);
        case 'rux-switch':
          return import(
            /* webpackMode: "lazy" */
            './rux-switch.entry.js').then(processMod, consoleError);
        case 'rux-tab':
          return import(
            /* webpackMode: "lazy" */
            './rux-tab.entry.js').then(processMod, consoleError);
        case 'rux-tab-panel':
          return import(
            /* webpackMode: "lazy" */
            './rux-tab-panel.entry.js').then(processMod, consoleError);
        case 'rux-tab-panels':
          return import(
            /* webpackMode: "lazy" */
            './rux-tab-panels.entry.js').then(processMod, consoleError);
        case 'rux-tabs':
          return import(
            /* webpackMode: "lazy" */
            './rux-tabs.entry.js').then(processMod, consoleError);
        case 'rux-tag':
          return import(
            /* webpackMode: "lazy" */
            './rux-tag.entry.js').then(processMod, consoleError);
        case 'rux-textarea':
          return import(
            /* webpackMode: "lazy" */
            './rux-textarea.entry.js').then(processMod, consoleError);
        case 'rux-time-region':
          return import(
            /* webpackMode: "lazy" */
            './rux-time-region.entry.js').then(processMod, consoleError);
        case 'rux-timeline':
          return import(
            /* webpackMode: "lazy" */
            './rux-timeline.entry.js').then(processMod, consoleError);
        case 'rux-tooltip':
          return import(
            /* webpackMode: "lazy" */
            './rux-tooltip.entry.js').then(processMod, consoleError);
        case 'rux-track':
          return import(
            /* webpackMode: "lazy" */
            './rux-track.entry.js').then(processMod, consoleError);
        case 'rux-tree':
          return import(
            /* webpackMode: "lazy" */
            './rux-tree.entry.js').then(processMod, consoleError);
        case 'rux-tree-node':
          return import(
            /* webpackMode: "lazy" */
            './rux-tree-node.entry.js').then(processMod, consoleError);
        case 'rux-button_2':
          return import(
            /* webpackMode: "lazy" */
            './rux-button_2.entry.js').then(processMod, consoleError);
        case 'rux-datetime_9':
          return import(
            /* webpackMode: "lazy" */
            './rux-datetime_9.entry.js').then(processMod, consoleError);
        case 'rux-status':
          return import(
            /* webpackMode: "lazy" */
            './rux-status.entry.js').then(processMod, consoleError);
        case 'rux-icon':
          return import(
            /* webpackMode: "lazy" */
            './rux-icon.entry.js').then(processMod, consoleError);
      }
    }
    return import(
    /* @vite-ignore */
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${''}`).then((importedModule) => {
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

export { Fragment as F, Host as H, bootstrapLazy as b, createEvent as c, getElement as g, h, promiseResolve as p, registerInstance as r };
