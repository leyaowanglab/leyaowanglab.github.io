# [Leyao Wang Lab 实验室网站](https://leyaowanglab.smart.org.cn/)

本仓库为实验室[官网](https://leyaowanglab.smart.org.cn/)源码，基于 [VitePress](https://vitepress.dev/) 自定义主题，参考 [Bloom 实验室](https://github.com/jbloomlab/jbloomlab.github.io)的开源代码。

## 本地开发

需要 `Node.js` 与 `npm`。

```bash
npm install        # 首次
npm run dev        # 默认 http://localhost:5173
```

预览线上构建结果：`npm run build && npm run preview`。

Windows 下若图片被占用导致 `EBUSY` 崩溃，改用 `$env:PREVIEW_POLLING="1"; npm run dev`。

## 内容维护

`people/`、`papers/`、`projects/`、`pictures/`、`research/`、`join/` 下的 `*.md` 自动生成页面；图片放 `public/assets/`，页面中引用为 `/assets/...`。

### 团队成员

1. 在 `people/` 下新建 `姓名.md`
2. 把姓名加入 [people/order.json](people/order.json)，**该顺序即展示顺序**；未列入者排在最后

```yaml
---
layout: person
name: "Member Name"
image: "/assets/people/member-name.webp"
title: "Research Intern"
category: "Team Members" # 或 "Principal Investigator"，该分组永远置顶
links:
  - link: "someone@example.com"
    icon: "email"
---
```

照片统一为 **WebP、最长边 400px、约 15–25 KB**，只提交 webp，不提交原图。

### 其他内容

- 论文：`papers/` 下新建 md，`layout: paper`，字段参考已有文件
- 项目：`projects/` 下新建 md，`layout: project`
- 照片墙：图片直接放入 `pictures/`
- 研究方向：修改 `research/research-aims.md`
- 页面文案：修改 `.vitepress/theme/` 下对应 `*.vue`

## 临时下线

把 `.vitepress/theme/Layout.vue` 中的 `UNDER_MAINTENANCE` 设为 `true`，全站只显示维护提示；改回 `false` 恢复。

## 部署

推送 `main` 触发 `.github/workflows/deploy.yml`，构建后发布到 `gh-pages` 分支。仓库 **Settings → Pages** 须设为 `Deploy from a branch` + `gh-pages` + `/ (root)`，不能选 GitHub Actions。
