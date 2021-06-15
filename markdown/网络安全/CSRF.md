# CSRF
CSRF（Cross-Site Request Forgery），中文名称：跨站请求伪造攻击

完成 CSRF 攻击必须要有三个条件：

1、用户已经登录了站点 A，并在本地记录了 cookie
2、在用户没有登出站点 A 的情况下（也就是 cookie 生效的情况下），访问了恶意攻击者提供的引诱危险站点 B (B 站点要求访问站点A)。
3、站点 A 没有做任何 CSRF 防御


## 防护策略
CSRF通常从第三方网站发起，被攻击的网站无法防止攻击发生，只能通过增强自己网站针对CSRF的防护能力来提升安全性。

上文中讲了CSRF的两个特点：

- CSRF（通常）发生在第三方域名。
- CSRF攻击者不能获取到Cookie等信息，只是使用。

针对这两点，我们可以专门制定防护策略，如下：

1、 阻止不明外域的访问
 - 同源检测
 - Samesite Cookie

2、 提交时要求附加本域才能获取的信息
 - CSRF Token
   > 渲染表单的时候，为每一个表单包含一个 csrfToken，提交表单的时候，带上 csrfToken，然后在后端做 csrfToken 验证。
 - 双重Cookie验证