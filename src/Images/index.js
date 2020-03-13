import { svgComponentList, svgRequireList } from './images';

/**
 * @function getImageByType
 * @param {String} typeImage
 * @param {Boolean} isSvg
 * @returns {import('react').ReactSVG|String}
 */
export function getImageByType(typeImage, isSvg) {
  if (!isSvg) {
    return typeImage in svgComponentList ? svgComponentList[typeImage] : svgComponentList.unknow;
  }
  return typeImage in svgRequireList ? svgRequireList[typeImage] : svgRequireList.unknow;
}

/**
 * @function getKeyImage
 * @param {Object} listImages
 * @returns {Array}
 */
export function getKeyImage(listImages) {
  return Object.keys(listImages);
}

export { svgComponentList, svgRequireList };
