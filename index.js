const { copySync } = require('fs-extra');
const { join } = require('path');

module.exports = function (api) {
  const { cwd } = api.service;
  api.register('buildSuccess', function () {
    copySync(
      join(cwd, 'dist/index.html'),
      join(cwd, '../webroot/view/home/screen/umi.vm'),
    );
    console.log('[umi-plugin-sofa] Copy dist/index.html to ../webroot/view/home/screen/umi.vm');
    copySync(
      join(cwd, 'dist/static'),
      join(cwd, '../webroot/public/static'),
    );
    console.log('[umi-plugin-sofa] Copy dist/static to ../webroot/public/static');
  });
};
