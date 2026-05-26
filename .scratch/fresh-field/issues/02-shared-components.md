Status: ready-for-agent

# 02 — 共享基础组件

## Parent

`.scratch/fresh-field/PRD.md`

## What to build

在 `components.css` 中实现 6 个共享基础组件的 CSS 样式，在 `components.js` 中实现对应的 JS 交互逻辑：

- **button** — 三种变体：`.btn-primary`（主绿色实心）、`.btn-outline`（绿色描边白底）、`.btn-ghost`（纯文字）。统一高度 44px、圆角 8px、字体 Bold。
- **badge** — `.badge-fresh`（浅绿底 + 主绿字）、`.badge-promo`（番茄红底 + 白字）、`.badge-tag`（浅灰描边）
- **price** — `.price-current`（Bold、深色正文）、`.price-original`（灰色、划线）
- **rating** — 纯 CSS 星级评分，支持全星和半星，绿色填充
- **quantity-stepper** — 减号/数字/加号组件，最小 1 最大 99，JS 控制边界
- **search-input** — 搜索框样式，focus 时边框变为 primary 绿色

所有组件样式在 components.css 中定义，交互 JS 在 components.js 中。

## Acceptance criteria

- [ ] 三种按钮变体在页面上正确渲染，hover 时有视觉反馈
- [ ] 所有 badge 类型正确显示对应颜色
- [ ] 价格组件正确显示当前价格（Bold）和划线原价
- [ ] 星级评分正确显示全星、半星组合
- [ ] 数量选择器点击加减正确变化，最小值为 1（减号置灰），最大值为 99
- [ ] 搜索框 focus 时边框平滑过渡为 #3C8C5A
- [ ] 所有组件在 Firefox 和 Chrome 上表现一致

## Blocked by

- 01 — 项目脚手架与设计令牌
