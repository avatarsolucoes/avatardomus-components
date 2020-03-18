/* eslint-disable no-plusplus */
/**
 * Verifica se classe existe no elemento
 * @function hasClass
 * @param {HTMLElement} el
 * @param {String} className
 * @returns {Boolean} object class
 */
// export function hasClass(el, className) {
//   if (!el && !className) return false;
//   if (el.classList) return el.classList.contains(className);
//   return !!el.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
// }

/**
 * Adiciona uma classe ao elemento
 * @function addClass
 * @param {HTMLElement} el
 * @param {String} className
 * @returns {Boolean | DOMTokenList | String } object class
 */
// export function addClass(el, className) {
//   if (!el && !className) return false;
//   if (el.classList) {
//     el.classList.add(className);
//     return el.classList;
//   }
//   if (!hasClass(el, className)) el.className += ` ${className}`;
//   return el.className;
// }

/**
 * Remove uma classe do elemento
 * @function removeClass
 * @param {HTMLElement} el
 * @param {String} className
 * @returns {Boolean | DOMTokenList | String } object class
 */
// export function removeClass(el, className) {
//   if (!el && !className) return false;
//   if (el.classList) {
//     el.classList.remove(className);
//     return el.classList;
//   }

//   if (hasClass(el, className)) {
//     const reg = new RegExp(`(\\s|^)${className}(\\s|$)`);
//     el.className = el.className.replace(reg, ' ');
//   }
//   return el.className;
// }

/**
 * @function whithElement
 * @param {String} selector
 * @param {Function} callback
 * @returns {Array<NodeList>}
 * @example
 * whithElement('.classname', (el) => { el.todo ...})
 */
// export function whithElement(selector, callback) {
//   const sel = document.querySelectorAll(selector);
//   for (let i = 0; i < sel.length; i++) {
//     if (typeof callback === 'function') {
//       callback(sel[i]);
//     }
//   }
//   return sel;
// }

// export function toogleDisableElem(selector, signal) {
//   const setMe = (o) => {
//     // eslint-disable-next-line valid-typeof
//     const noUseSinal = typeof signal === undefined || typeof signal === null;
//     o.disabled = noUseSinal ? !o.disabled : signal;
//     return !!o.disabled;
//   };

//   if (Array.isArray(selector)) {
//     return selector.map((c) => {
//       return toogleDisableElem(c, signal);
//     });
//   }

//   if (typeof selector === 'object') return setMe(selector);

//   const result = [];
//   whithElement(selector, (el) => {
//     result.push(setMe(el));
//   });
//   return result;
// }

/**
 * Procura um filho no elemento
 * FIXME : nao testado
 * @function findOneChildren
 * @param {HTMLElement} el
 * @param {Object} filter
 * @returns {Bollean | HTMLElement}
 * @example
 * findOneChildren(object, {nodeName : 'INPUT'})
 */
// export function findOneChildren(object, filter) {
//   if (!object || !filter) return false;
//   const el = object;

//   const childs = el.childNodes;
//   if (!childs || childs.length <= 0) return false;

//   for (let i = 0; i < childs.length; i++) {
//     const child = childs[i];
//     if (typeof filter === 'object') {
//       const keys = Object.keys(filter);
//       for (let j = 0; j < keys.length; j++) {
//         const k = keys[j];
//         if (k in child) {
//           if (child[k] === filter[k]) {
//             return child;
//           }
//         }
//       }
//     }

//     if (child && child.childNodes.length > 0) {
//       return findOneChildren(child, filter);
//     }
//   }
//   return false;
// }

// export function findParent(object, where) {
//   if (!object) return false;
//   let el = object;
//   let rtn = false;

//   while (el !== 'undefined') {
//     el = el.parentNode;
//     if (typeof where === 'function') {
//       rtn = where(el);
//     } else if (typeof where === 'object') {
//       const keys = Object.keys(where);
//       for (let i = 0; i < keys.length; i++) {
//         const k = keys[i];
//         if (k in el && el[k] === where[k]) {
//           rtn = el;
//           break;
//         }
//       }
//     } else if (typeof where === 'string') {
//       rtn = document.querySelectorAll(where);
//       if (rtn.length > 0) {
//         [rtn] = rtn;
//       } else {
//         rtn = false;
//       }
//     }

//     if (rtn) {
//       el = rtn;
//       break;
//     }
//   }

//   return el;
// }
