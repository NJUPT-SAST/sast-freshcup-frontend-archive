# SAST-FreshCup-Refresh

~~试制二二年式新柚杯答题系统~~

## 关于 Commit

在该项目中，我们使用 `git cz` 命令来去帮助撰写规范的 Commit message

> Git报错 git: 'cz' is not a git command. See 'git --help' 怎么办?
>
> 我们需要先使用 npm 全局安装 commitizen（*不能使用 yarn），命令如下:
>
> ```bash
> npm install commitizen -g
> ```

**请务必 PUSH 符合 Angular 规范的 Commit 信息！**

同时我们推荐使用 GPG 签名你的 Git 提交，使它安全可信（Verified）

## 前端使用的技术

语言: TypeScript

UI组件库: Semi Design

调用API: Axios

全局状态管理: Recoil

**需要注意的是，我们使用的 react-router-dom 版本为 6.0+ ，在使用上与v5版本存在较大差异，在开始撰写或修改路由配置之前，我们推荐首先阅读 [Getting Started](https://github.com/remix-run/react-router/tree/main/docs/getting-started)。同时我们应当更倾向于去使用 Recoil 来去管理复杂组件的状态。**

## 使用指北

该项目使用 [Create React App](https://github.com/facebook/create-react-app) 构建

### 运行

在项目目录下，可以执行 `yarn start` 命令来让该项目运行在开发模式。

在项目启动后可以在浏览器中打开 [http://localhost:3000](http://localhost:3000) 来去查看该项目

在对代码进行编辑并保存后，网页将会被热重载，同时全部的 lint 错误信息会被打印在命令行中

### 打包

使用 `yarn build` 可以打包出用于生产的应用程序，生成的文件会被放置在 `build` 文件夹下

用于生产的 React 代码在构建时经过了优化，因此其具有最佳的性能

打包与构建将会减小代码体积，同时文件名会使用哈希值进行混淆。你的项目已可以部署！

有关部署的详细信息可以参阅 [deployment](https://facebook.github.io/create-react-app/docs/deployment) 的部分

### 更多

有关 Create React App [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)

学习 React [React documentation](https://reactjs.org/)
