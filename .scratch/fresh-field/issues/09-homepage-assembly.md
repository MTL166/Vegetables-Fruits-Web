Status: ready-for-agent

# 09 — 首页拼装

## Parent

`.scratch/fresh-field/PRD.md`

## What to build

将以下模块按顺序拼装到 `index.html` 中，构成完整首页：

1. Header（导航栏）
2. Hero（首屏主视觉）
3. CategoryGrid（分类入口），带区域标题 "精选分类"
4. ProductCard 推荐商品区，带区域标题 "为你推荐"
5. PromoBanner（限时优惠区）
6. TrustBadges（品质保障区）
7. Footer（页脚）

各区域之间使用统一的间距（`--space-3xl` 约 64-80px）分隔。确保页面在 1440px 宽度下内容居中（使用统一的容器宽度，约 1200px 内容区）。

## Acceptance criteria

- [ ] 首页包含全部 7 个模块，按正确顺序排列
- [ ] 内容区宽度约 1200px，水平居中
- [ ] 各区域间距统一，无拥挤或过度松散
- [ ] 页面在 1440px 宽度下无水平滚动条
- [ ] 首页从顶部导航到底部页脚完整可滚动浏览

## Blocked by

- 03 — 顶部导航栏 Header
- 04 — 页脚 Footer
- 05 — Hero 首屏主视觉
- 06 — 商品分类入口 CategoryGrid
- 07 — 商品卡片与推荐商品区
- 08 — 限时优惠区与品质保障区
