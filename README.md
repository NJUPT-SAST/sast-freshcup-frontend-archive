# SAST-FreshCup-Refresh

~~试制二二年式新柚杯答题系统~~

## 前端使用的技术

语言: TypeScript

UI组件库: Semi Design

调用API: Axios

全局状态管理: Recoil

**需要注意的是，我们使用的 react-router-dom 版本为 6.0+ ，在使用上与v5版本存在较大差异，在开始撰写或修改路由配置之前，我们推荐首先阅读 [Getting Started](https://github.com/remix-run/react-router/tree/main/docs/getting-started)。同时我们应当更倾向于去使用 Recoil 来去管理复杂组件的状态。**

## 开发指北

该项目使用 [Create React App](https://github.com/facebook/create-react-app) 构建

### 安装依赖

- Node.js ≥ 16 （如果当前使用的 Node.js 版本＜16，在运行本项目前应先升级 Node.js 版本）
- 2 ＞ Yarn ≥ 1 （本项目原生使用 Yarn 构建，混用其他包管理器安装依赖可能会导致不可预知的错误）

### 实时预览

```bash
yarn start
```

项目将会运行在 http://localhost:3000

### 项目打包

```bash
yarn build
```

### 代码提交

在该项目中，我们使用 `git cz` 命令来去帮助撰写规范的 Commit message

> 执行 git cz 时，Git 报错 git: 'cz' is not a git command. See 'git --help' 怎么办?
>
> 我们需要先使用 npm 全局安装 commitizen（*不能使用 yarn），命令如下:
>
> ```bash
> npm install commitizen -g
> ```

**请务必 PUSH 符合 Angular 规范的 Commit 信息！**

同时我们推荐使用 GPG 签名你的 Git 提交，使它安全可信（Verified）

### 更多

有关 Create React App [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)

学习 React [React documentation](https://reactjs.org/)
