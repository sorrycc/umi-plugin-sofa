# @ali/umi-plugin-sofa

## ʹ��

�Ȱ�װ������

```bash
$ tnpm i @ali/umi-plugin-sofa -D
```

�༭ `.umirc.js`��

```js
export default {
  plugins: ['@ali/umi-plugin-sofa'],
};
```

���Ҫ���� copyTo ����������������

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

Ĭ�ϵ� copyTo �� `['../webroot/view/home/screen/umi.vm']`��

## �ο�

* [�� ifccustmng �� MR](http://gitlab.alipay-inc.com/alipayplus_ph_release/ifccustmng/merge_requests/8)
* [umi ���� Sofa Ӧ�ã�����ʽ��](https://lark.alipay.com/umijs/umi/deploy-sofa-application-integrated)

