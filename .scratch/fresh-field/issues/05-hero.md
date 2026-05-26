Status: ready-for-agent

# 05 — Hero 首屏主视觉

## Parent

`.scratch/fresh-field/PRD.md`

## What to build

实现首页 Hero 首屏区域。全宽布局，使用大幅背景图（先使用占位色块 + CSS background），内容叠加：

- 主标题："每日新鲜，从产地直达餐桌"，大号 Bold 深色文字
- 副文案："精选当季蔬果，冷链配送，最快次日送达。"，Regular 灰色文字
- 两个 CTA 按钮：主按钮 "立即选购"（btn-primary）、次按钮 "查看今日鲜品"（btn-outline），水平排列
- 背景使用浅绿到白色的渐变占位，待素材就绪后替换为 Midjourney 生成的 Hero 图片

## Acceptance criteria

- [ ] Hero 区域全宽，高度约 500-600px
- [ ] 主标题以大号 Bold 字体显示
- [ ] 副文案在主标题下方，灰色 Regular
- [ ] 两个 CTA 按钮水平排列，间距 16px
- [ ] "立即选购" 为主绿色实心按钮，"查看今日鲜品" 为绿色描边按钮
- [ ] 按钮 hover 时有视觉反馈
- [ ] 背景使用占位渐变，留有替换为真实图片的空间

## Blocked by

- 01 — 项目脚手架与设计令牌
