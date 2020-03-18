import React from 'react';
import _ from 'lodash';

export function cloneComponent(originalComponent, additionalProps) {
  if (originalComponent.prototype instanceof React.Component) {
    return class extends originalComponent {
      constructor(props, context) {
        super(_.extend(props, additionalProps), context);
      }
    };
  }
  return (props, context) => {
    return originalComponent(_.extend(props, additionalProps), context);
  };
}

export function recursiveMap(children, fn) {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    if (child.props.children) {
      child = React.cloneElement(child, {
        children: recursiveMap(child.props.children, fn),
      });
    }

    return fn(child);
  });
}

export function isClassComponent(component) {
  return !!(typeof component === 'function' && !!component.prototype.isReactComponent);
}

export function isFunctionComponent(component) {
  return !!(typeof component === 'function' && String(component).includes('return React.createElement'));
}

export function isReactComponent(component) {
  return !!(isClassComponent(component) || isFunctionComponent(component));
}

export function isElement(element) {
  return React.isValidElement(element);
}

export function isDOMTypeElement(element) {
  return isElement(element) && typeof element.type === 'string';
}

export function isCompositeTypeElement(element) {
  return isElement(element) && typeof element.type === 'function';
}

export function compareAndReplacePropElement(el, compare, prop) {
  if (Array.isArray(compare)) {
    if (el && isCompositeTypeElement(el) && compare.indexOf(el.type) >= 0) {
      return React.cloneElement(el, prop);
    }
  } else if (el && isCompositeTypeElement(el) && el.type === compare) {
    return React.cloneElement(el, prop);
  }

  return el;
}

export function filterChildrenElements(children, compare) {
  const isElementCompare = (obj) => {
    if (Array.isArray(compare)) {
      return obj && isCompositeTypeElement(obj) && compare.indexOf(obj.type) >= 0;
    }
    return obj && isCompositeTypeElement(obj) && obj.type === compare;
  };

  const elements = React.Children.toArray(children);
  return elements.filter(isElementCompare);
}
