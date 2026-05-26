Status: ready-for-agent

# 06 — 商品分类入口 CategoryGrid

## Parent

`.scratch/fresh-field/PRD.md`

## What to build

实现首页商品分类入口区域。6 列网格布局，每个分类卡片包含：

- 分类图标（使用带颜色的 emoji 或 CSS shape 占位，如 🍎 🥬 🎁 📦 🌍 🥗）
- 分类名称文字：水果鲜选、有机蔬菜、礼盒专区、每日鲜配、进口水果、沙拉轻食

卡片白色背景，8px 圆角，统一尺寸。hover 时轻微阴影提升 + 边框颜色变化。

## Acceptance criteria

- [ ] 6 个分类卡片水平排列为一行（或 2 行 ×3 列），间距一致
- [ ] 每个卡片包含图标（占位符允许）和分类名称
- [ ] 卡片白色背景，8px 圆角
- [ ] hover 时阴影加深且边框变为 `--color-primary`
- [ ] 图标占位在素材就绪后可轻松替换为真实 3D 图标

## Blocked by

- 01 — 项目脚手架与设计令牌
