import requireList from './require';
import importList from './import';

/**
 * @function getImageByType
 * @param {String} typeImage
 * @returns {import('react').ReactSVG|String}
 */
function getImageByType(typeImage) {
  return typeImage in requireList ? requireList[typeImage] : requireList.unknow;
}

const Layout = {
  getImageByType,
  requireList,
  importList,
};

export default Layout;
