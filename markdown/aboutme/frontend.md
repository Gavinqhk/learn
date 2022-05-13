# BE A GOOD FE DEVELOPER

> “工欲善其事，必先利其器”。vscode是FE开发着较常用的工具，配置好编辑器插件可提高我们的开发效率。

## vscode 插件

插件：[vs code 插件](https://mp.weixin.qq.com/s/YMsnB8WuOE_oXsD45T0iEw) 还可以根据个人喜好配置

快捷键生成代码快：[快捷生产vue](https://juejin.cn/post/6844904080893018119) 还可以在项目中创建.vscode文件夹创建code-snippets.json

vscode设置：[官方文档](https://code.visualstudio.com/docs/getstarted/settings)，[vscode配置](https://www.jianshu.com/p/bde39b7f72fe) 还可以在项目中创建.vscode文件夹创建settings.json

vscode快捷键：[快捷键](https://zhuanlan.zhihu.com/p/442954661)，[快捷键](https://zhuanlan.zhihu.com/p/89380226)，[快速定位某行](https://jingyan.baidu.com/article/3a2f7c2ea21c9e66aed61179.html)

## 代码规范

> 完善了编辑器的插件和快捷方式，这就提高了不少开发的效率。这时候出现了问题，当团队协作的时候，不同的同事代码风格不一样，这就造成协作困难了，这时候就需要定制代码规范。这时候就有了eslint，prettier，stylelint等等

[eslint&prettier](https://zhuanlan.zhihu.com/p/80574300)，
[eslint&stylelint&prettier](https://juejin.cn/post/6878121082188988430)，
[prettier官方文档](https://prettier.io/)，
[eslint官方](https://cn.eslint.org/docs/user-guide/configuring)，
[stylelint官方](https://stylelint.io/)

当开发规范制定好之后，我们在开发中需要将代码提交到github/gitlab。在提交commit时候，如果没有规范也会使得协作困难。所以需要husky&commitlint
[husky官方](https://typicode.github.io/husky/#/)
[eslint&stylelint&prettier&husky&commitlint&lint-staged](https://juejin.cn/post/7038143752036155428)
[eslint&stylelint&prettier&husky&commitlint&lint-staged](https://segmentfault.com/a/1190000022497035)

## 前端三件套（HTML, CSS, JavaScript）

HTML：超文本标记语言，主要是标记页面的骨架结构。[html面试](https://juejin.cn/post/6905294475539513352)
需要掌握

- 语义化
- 常用标签，块标签，行内标签
- 标签的属性
- 结构尽可能的简单
- 多媒体标签
- ......

CSS：层叠样式表，用来表示html样式的文件。

- 盒子模型
- 选择器 -> 选择器优先级，各式各样的选择器 +，～，> :nth-... 等等
- 布局 -> position, flex, gird, float 等。须知垂直居中布局，圣杯布局等等
- 样式继承，堆叠，z-index
- 动画，过渡，渐变，多边形 等等
- BFC问题
- css浏览器兼容性（PC，移动端）
- 媒体查询
- border 1px 问题
- 自适应布局
- ......

JavaScript：JS脚本，是可以让页面动起来的语言，可以操作DOM，BOM，CSS等。

- 数据类型
- 事件
- 事件循环
- 执行上下文（闭包，this指向 等等）
- 继承
- 函数式编程
- web worker
- ES6+
- ......

前端三件套知识，看着简单需要精通需要花大量的时间，能够做到开发的代码HTMl语义化，标签合理也需要下不少功夫。对于css的应用更是需要实践实践再实践，比如动画过度等等。JavaScript更难了=_=!，对于其内核知识想掌握得多看很多遍书再实践实践才行啊。任重道远。。。

## 前端宿主-浏览器

> 前端开发而言，浏览器就是我们所需要了解的宿主环境，不管是pc端移动端，我们的页面都是允许再浏览器当中。所以了解浏览器的知识很大程度能够理解网站运行的原理，并能高效的定位并解决问题。

## VUE & REACT
