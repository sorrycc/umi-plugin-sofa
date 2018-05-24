# @ali/umi-plugin-sofa

## 使用

先安装依赖，

```bash
$ tnpm i @ali/umi-plugin-sofa -D
```

编辑 `.umirc.js`，

```js
export default {
  plugins: ['@ali/umi-plugin-sofa'],
};
```

如果要配置 copyTo 参数，可以这样：

```js
export default {
  plugins: [
    ['@ali/umi-plugin-sofa', {
      copyTo: [
        '../webroot/view/home/screen/umi.vm',
        '../webroot/view/merchant/screen/umi.vm',
      ],
    }],
  ],
};
```

默认的 copyTo 是 `['../webroot/view/home/screen/umi.vm']`。

## 参考

* [给 ifccustmng 的 MR](http://gitlab.alipay-inc.com/alipayplus_ph_release/ifccustmng/merge_requests/8)
* [umi 部署 Sofa 应用（集成式）](https://lark.alipay.com/umijs/umi/deploy-sofa-application-integrated)

