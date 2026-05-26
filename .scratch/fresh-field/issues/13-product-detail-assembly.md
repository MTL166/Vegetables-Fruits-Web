Status: ready-for-agent

# 13 — 相关推荐与详情页拼装

## Parent

`.scratch/fresh-field/PRD.md`

## What to build

将以下模块拼装到 `product-detail.html` 中，构成完整商品详情页：

**页面结构：**
1. Header（复用首页 header）
2. 面包屑导航
3. 商品主区域（左右布局）：
   - 左侧：图片画廊
   - 右侧：商品信息 + 购买操作面板
4. Tab 标签页（商品详情/产地信息/用户评价）
5. 相关推荐商品区 — 3 个商品卡片（蓝莓家庭装、进口橙子礼盒、有机番茄组合），复用 product-card
6. Footer（复用首页 footer）

左右布局比例约 5:5 或 6:4（图左信息右）。

## Acceptance criteria

- [ ] 详情页包含 Header、面包屑、图片画廊、商品信息、购买面板、Tab 区、相关推荐、Footer
- [ ] 面包屑在 Header 下方
- [ ] 图片画廊和商品信息左右排列
- [ ] Tab 区域在商品信息下方
- [ ] 相关推荐在 Tab 下方，标题 "相关推荐"
- [ ] 3 个推荐商品卡片水平排列
- [ ] 页面在 1440px 宽度下完整可滚动浏览

## Blocked by

- 03 — 顶部导航栏 Header
- 04 — 页脚 Footer
- 07 — 商品卡片与推荐商品区
- 10 — 面包屑与图片画廊
- 11 — 商品信息与购买操作面板
- 12 — Tab 标签页与评价卡片
