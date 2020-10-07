import requireList from './require';
import importList from './import';

/**
 * @function getImageByType
 * @param {String} typeImage
 * @param {Boolean} isImport
 * @returns {import('react').ReactSVG|String}
 */
function getImageByType(typeImage, isImport) {
  if (isImport) {
    return typeImage in importList ? importList[typeImage] : importList.unknow;
  }
  return typeImage in requireList ? requireList[typeImage] : requireList.unknow;
}

const Layout = {
  getImageByType,
  requireList,
  importList,
};

export default Layout;
