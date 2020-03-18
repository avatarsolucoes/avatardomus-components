import componentList from './component';
import requireList from './require';
import importList from './import';

/**
 * @function getImageByType
 * @param {String} typeImage
 * @param {Boolean} isSvg
 * @returns {import('react').ReactSVG|String}
 */
export function getImageByType(typeImage, isSvg) {
  if (!isSvg) {
    return typeImage in componentList ? componentList[typeImage] : componentList.Unknow;
  }
  return typeImage in requireList ? requireList[typeImage] : requireList.unknow;
}

const Icon = {
  getImageByType,
  componentList,
  requireList,
  importList,
};

export default Icon;
