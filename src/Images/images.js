import ImagesSvgRequire from './imagesSvgRequire';
import ImagesSvgImport from './imagesSvgImport';
import ImagesAsComponent from './imagesComponent';

export const svgImportList = {
  ...ImagesSvgImport,
};

export const svgRequireList = {
  ...ImagesSvgRequire,
};

export const svgComponentList = {
  ask: ImagesAsComponent.Ask,
  blocked: ImagesAsComponent.Blocked,
  building: ImagesAsComponent.Building,
  click: ImagesAsComponent.Click,
  forbidden: ImagesAsComponent.Forbidden,
  locked: ImagesAsComponent.Locked,
  nofound: ImagesAsComponent.Nofound,
  offline: ImagesAsComponent.Offline,
  sad: ImagesAsComponent.Sad,
  scripting: ImagesAsComponent.Scripting,
  timeout: ImagesAsComponent.Timeout,
  vehicle: ImagesAsComponent.Vehicle,
  unknow: ImagesAsComponent.Unknow,
};
