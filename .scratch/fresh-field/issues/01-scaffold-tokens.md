Status: ready-for-agent

# 01 — 项目脚手架与设计令牌

## Parent

`.scratch/fresh-field/PRD.md`

## What to build

搭建项目骨架：创建 `index.html` 和 `product-detail.html` 两个空页面，建立 CSS 设计令牌文件 `tokens.css` 定义所有色彩、字体、间距变量，创建 `components.css`（空文件，后续 issue 填充），引入 Noto Sans SC 和 Inter 字体。两个页面均通过 `<link>` 引用 tokens.css 和 components.css，页面内容暂时为空。

## Acceptance criteria

- [ ] `index.html` 和 `product-detail.html` 存在，包含基本 HTML5 骨架
- [ ] `tokens.css` 定义了全部 9 个色彩变量（--color-primary, --color-primary-light, --color-accent-yellow, --color-accent-red, --color-text-primary, --color-text-secondary, --color-bg-page, --color-bg-card, --color-border）
- [ ] `tokens.css` 定义了字体变量（--font-cn, --font-en），引用 Noto Sans SC 和 Inter
- [ ] `tokens.css` 定义了间距变量（--space-xs 至 --space-3xl）
- [ ] 两个 HTML 页面正确引用了 tokens.css 和 components.css
- [ ] 两个 HTML 页面设置了 `--color-bg-page` 作为 body 背景色
- [ ] 在 1440px 宽度下页面背景色正确渲染

## Blocked by

None — can start immediately.
