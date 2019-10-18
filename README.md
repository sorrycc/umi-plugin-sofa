# umi-plugin-sofa

## 使用

先安装依赖，

```bash
$ npm i umi-plugin-sofa -D
```

编辑 `.umirc.js`，

```js
export default {
  plugins: ['umi-plugin-sofa'],
};
```

如果要配置 copyTo 参数，可以这样：

```js
export default {
  plugins: [
    ['umi-plugin-sofa', {
      copyTo: [
        '../webroot/view/home/screen/umi.vm',
        '../webroot/view/merchant/screen/umi.vm',
      ],
    }],
  ],
};
```

默认的 copyTo 是 `['../webroot/view/home/screen/umi.vm']`。


