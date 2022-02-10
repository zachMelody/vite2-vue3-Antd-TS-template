# Vue 3 + Typescript + Vite

## 集成组件
- [Vite](https://vitejs.dev/guide/)
- [Vue 3](https://vuejs.org/guide/introduction.html)
  - [Vue Router v4](https://github.com/vuejs/router)
- [TypeScript](https://www.typescriptlang.org/)
- [Windi CSS](https://github.com/windicss/windicss)
- [Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/) - ui 基本使用

## 安装使用

- 获取项目代码

```bash
git clone https://github.com/zachMelody/vite2-vue3-Antd-TS-template
```

- 安装依赖

```bash
cd vite2-vue3-Antd-TS-template
yarn install
```

- 运行

```bash
yarn serve
```

- 打包

```bash
yarn build
```

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
