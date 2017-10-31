# 仿 iview 全局 Message 组件

> 为系统提供统一样式，功能的 提示 组件。

# 效果

[message](https://www.iviewui.com/components/message)

# 方法

因为咱们项目是多页面的，所以需要开发人员在需要提示的对应页面中 
* 引入方式
``` JavaScript
// 引入 message 组件
import Message from './common/message';
// 引入 css 样式
import 'assets/less/message/index.less';
// 挂载到 vue 上
Vue.prototype.$Message = Message;
```
* 使用方式

全局提供了以下 4 种方法

1. info 可以当做普通提示
2. success 操作成功提示
3. error 错误提示
4. warning 警告提示
``` JavaScript
  // 使用方法
  this.$Message[methodName](config);
  // 当参数为字符串时， 直接显示内容，销毁时间为 1.5s
  this.$Message.error('验证码输入错误，请重新输入');
  // 当 config 为对象时
  this.$Message[methodName]({
    content: '要显示的内容',
    duration: '自动关闭的延时，单位秒',
    onClose: function () {
      '关闭时回调函数'
    }
  });
  // 修改默认配置的方法
  this.$Message.config({
      top: 50, // 修改距离顶部的高度
      duration: 3 // 修改默认关闭的时间
  });
  // 全局销毁
  this.$Message.destroy()
```

## todo
* 关闭按钮
* loading 状态