Status: ready-for-agent

# 03 — 顶部导航栏 Header

## Parent

`.scratch/fresh-field/PRD.md`

## What to build

实现首页顶部导航栏。高度 72px，白色背景，固定于页面顶部。包含：

- 左侧 Logo：文字 "鲜野集 Fresh Field"，使用主绿色，Bold
- 中间导航菜单：商品分类、今日上新、限时优惠、产地直采、会员专区（五个链接，hover 颜色变为主绿色）
- 搜索框：复用 search-input 组件
- 右侧图标入口：购物车图标（线性 SVG）和登录文字链接

导航栏下方有 1px 的 `--color-border` 边框作为底部分割线。

## Acceptance criteria

- [ ] 导航栏高度 72px，白色背景，1440px 宽度下内容居中
- [ ] Logo "鲜野集 Fresh Field" 显示在左侧，使用主绿色 Bold
- [ ] 五个导航链接水平排列，hover 时变为主绿色且有平滑过渡
- [ ] 搜索框在导航中间区域可见
- [ ] 购物车 SVG 图标和登录入口显示在右侧
- [ ] 导航栏底部有 1px 边框分割线

## Blocked by

- 02 — 共享基础组件
