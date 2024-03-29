const assert = require('assert');
const { copySync } = require('fs-extra');
const { join } = require('path');

module.exports = function (api, opts = {}) {
  const { cwd } = api.service;
  const copyTo = opts.copyTo || ['../webroot/view/home/screen/umi.vm'];
  assert(
    Array.isArray(copyTo),
    `[umi-plugin-sofa] opts.copyTo must be Array, but got ${copyTo}`,
  );

  api.register('buildSuccess', function () {
    copyTo.forEach((to) => {
      copySync(
        join(cwd, 'dist/index.html'),
        join(cwd, to),
      );
      console.log(`[umi-plugin-sofa] Copy dist/index.html to ${to}`);
    });
    copySync(
      join(cwd, 'dist/static'),
      join(cwd, '../webroot/public/static'),
    );
    console.log('[umi-plugin-sofa] Copy dist/static to ../webroot/public/static');
  });
};
