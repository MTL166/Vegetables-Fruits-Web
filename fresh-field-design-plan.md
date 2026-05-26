# 鲜野集 Fresh Field 蔬果电商前端实现计划书

## 1. 项目定义

### 1.1 项目名称

鲜野集 Fresh Field PC 端精品生鲜电商前端界面

### 1.2 项目概述

本项目制作了一个面向 PC 网页端的精品蔬果电商前端界面，品牌名为"鲜野集 Fresh Field"。界面采用清爽现代自然风，突出新鲜、可信、精品、易购买的品牌感。项目使用纯 HTML/CSS/JS 实现，无框架依赖，无构建步骤。商品图片使用 Stable Diffusion 生成。

### 1.3 项目目标

- 完成一套可交互、可展示、可直接在浏览器中打开的 PC 端电商界面。
- 形成统一的视觉风格、页面结构、组件规范和设计令牌系统。
- 使用 Stable Diffusion 生成高质量真实摄影风商品图片。
- 输出首页和 6 个商品详情页，覆盖主要电商购买路径。

### 1.4 目标用户

- 主要用户：注重品质、新鲜度和购物体验的城市家庭消费者。
- 次要用户：关注健康饮食、轻食搭配、节日送礼和精品水果购买的人群。
- 使用场景：用户通过 PC 网页浏览当季蔬果、查看促销活动、浏览商品，并进入商品详情页完成购买决策。

### 1.5 核心价值

鲜野集通过明亮清爽的界面、高质感蔬果图片、清晰的商品信息和可信的配送保障，降低用户对线上购买生鲜的不确定感，提升浏览兴趣和购买转化。

## 2. 页面范围

### 2.1 已实现页面

| 页面 | 文件 | 说明 |
|------|------|------|
| 首页 | `src/index.html` | 品牌入口，商品展示，促销，品质保障 |
| 阳光草莓礼盒 | `src/product-detail.html` | 主推商品详情页（含缩略图画廊） |
| 有机番茄组合 | `src/product-tomatoes.html` | 商品详情页 |
| 进口橙子礼盒 | `src/product-oranges.html` | 商品详情页 |
| 每日蔬菜鲜配箱 | `src/product-vegetable-box.html` | 商品详情页 |
| 牛油果精选装 | `src/product-avocado.html` | 商品详情页 |
| 蓝莓家庭装 | `src/product-blueberry.html` | 商品详情页 |

### 2.2 首页模块

首页包含以下模块：

- 顶部导航栏（Logo、导航菜单、搜索框、购物车、登录入口）
- Hero 首屏主视觉（全幅背景图 + 渐变遮罩 + 文字叠加）
- 推荐商品区（6 张商品卡片网格，可点击进入详情页）
- 限时优惠区（倒计时 + 促销商品卡片）
- 品质保障区（产地直采、冷链配送、坏果包赔、48h 鲜达）
- 页脚信息区（品牌简介、配送说明、售后服务、会员权益、联系方式）

### 2.3 商品详情页模块

每个详情页包含：

- 面包屑导航
- 商品主图展示
- 商品名称、评分、价格、规格、配送信息
- 商品卖点标签
- 数量选择器、加入购物车、立即购买、收藏按钮
- 商品详情、产地信息、用户评价标签页
- 相关推荐商品（3 个）

## 3. 技术实现

### 3.1 技术栈

- 纯静态 HTML/CSS/JS，无框架依赖，无构建步骤
- CSS 使用 CSS Custom Properties 管理设计令牌
- JS 使用原生 ES6+（DOMContentLoaded 事件驱动）
- Google Fonts 加载 Noto Sans SC（中文）和 Inter（英文/数字）
- 目标分辨率：1440px 桌面端

### 3.2 文件结构

```
src/
├── index.html                       # 首页
├── product-detail.html              # 阳光草莓礼盒详情页
├── product-tomatoes.html            # 有机番茄组合详情页
├── product-oranges.html             # 进口橙子礼盒详情页
├── product-vegetable-box.html       # 每日蔬菜鲜配箱详情页
├── product-avocado.html             # 牛油果精选装详情页
├── product-blueberry.html           # 蓝莓家庭装详情页
└── assets/
    ├── css/
    │   ├── tokens.css               # 设计令牌（色彩、字体、间距、阴影）
    │   ├── components.css           # 共享组件 + 全局重置 + 布局工具
    │   ├── homepage.css             # 首页专属样式
    │   └── detail.css               # 详情页专属样式
    ├── js/
    │   └── components.js            # 交互逻辑（数量选择器/加购/Tab/画廊）
    └── images/
        ├── hero_fresh_produce_16x7.png           # Hero 背景图
        ├── product_strawberry_giftbox_main.png    # 草莓礼盒主图
        ├── product_strawberry_thumb_01~04.png     # 草莓缩略图 ×4
        ├── product_tomatoes_1x1.png               # 有机番茄商品图
        ├── product_oranges_1x1.png                # 进口橙子商品图
        ├── product_vegetable_box_1x1.png          # 蔬菜鲜配箱商品图
        ├── product_avocado_1x1.png                # 牛油果商品图
        ├── product_blueberry_1x1.png              # 蓝莓商品图
        ├── review_strawberry_01.png               # 评价晒单图
        ├── icon_category_*.png                    # 分类图标 ×6（待生成）
        └── icon_trust_*.png                       # 品质保障图标 ×4（待生成）
```

### 3.3 设计令牌（tokens.css）

**色彩：**

| 令牌 | 值 | 用途 |
|------|-----|------|
| `--color-primary` | `#3C8C5A` | 主绿色，按钮、链接、价格 |
| `--color-primary-light` | `#EAF6EF` | 浅绿，标签背景、促销区 |
| `--color-accent-yellow` | `#F7D96B` | 柠檬黄点缀 |
| `--color-accent-red` | `#E95B4A` | 番茄红，折扣价、促销标签 |
| `--color-text-primary` | `#1F2A24` | 深色正文 |
| `--color-text-secondary` | `#6B756F` | 灰色辅助文字 |
| `--color-bg-page` | `#F8F2EA` | 暖奶油色页面背景 |
| `--color-bg-card` | `#FFFFFF` | 卡片背景 |
| `--color-border` | `#E3EAE5` | 边框颜色 |

**字体：**

| 用途 | 字体 | 字重 |
|------|------|------|
| 中文正文 | Noto Sans SC | Regular(400) |
| 英文/数字 | Inter | Regular(400) |
| 标题 | Noto Sans SC | Semibold(600) / Bold(700) |
| 价格 | Inter | Bold(700) |

**间距：** 基于 4px 递增（4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80）

**圆角：** 统一 8px（卡片、按钮、输入框）

### 3.4 共享基础组件（6 个）

| 组件 | CSS 类 | 说明 |
|------|--------|------|
| Button | `.btn-primary` `.btn-outline` `.btn-ghost` | 三种变体 + sm/lg 尺寸 + block 全宽 |
| Badge | `.badge-fresh` `.badge-promo` `.badge-tag` | 静态标签，无 JS 逻辑 |
| Price | `.price-current` `.price-original` `.price-lg` | 当前价格（绿Bold）+ 划线原价 |
| Rating | `.rating-star.full` `.rating-star.half` | 纯 CSS 多边形裁剪实现 |
| QuantityStepper | `.quantity-stepper` | JS 驱动，min=1 max=99 |
| SearchInput | `.search-input` | focus 时边框变绿 + 外发光 |

### 3.5 交互行为

- 分类卡片 hover：阴影加深 + 边框变主绿色
- 商品卡片 hover：阴影加深 + 图片 scale(1.03)
- 缩略图点击（草莓详情页）：切换主图，当前缩略图绿色边框高亮
- Tab 切换：点击标签切换内容，当前标签底部绿色下划线
- 数量选择器：最小值 1（减号置灰），最大值 99
- 加入购物车：按钮变绿显示"已加入 ✓"，1.5s 后恢复
- 搜索框 focus：边框变为 primary 绿色 + 外发光

## 4. 商品数据

### 4.1 产品线

| 商品 | 价格 | 规格 | 产地 | 标签 |
|------|------|------|------|------|
| 阳光草莓礼盒 | ¥88 | 1.5kg 礼盒装 | 丹东·辽宁 | 当季头茬、颗颗精选、果香浓郁、礼盒包装 |
| 有机番茄组合 | ¥45 | 1.2kg 组合装 | 寿光·山东 | 新鲜采摘、有机认证、多品种、无农药 |
| 进口橙子礼盒 | ¥78 | 2kg 礼盒装 | 新南威尔士·澳大利亚 | 进口优选、礼盒包装、汁水充沛、送礼首选 |
| 每日蔬菜鲜配箱 | ¥68 | 3kg 家庭装 | 多地时令产区 | 每日鲜配、家庭优选、当季时蔬、一周分量 |
| 牛油果精选装 | ¥39 | 4粒装 | 米却肯·墨西哥 | 进口优选、健康轻食、口感绵密、健身首选 |
| 蓝莓家庭装 | ¥59 (原¥79) | 500g×2盒 | 青岛·山东 | 产地直发、大果径、甜脆多汁、富含花青素 |

## 5. Stable Diffusion 素材生成计划

详见 `SD-image-generation-plan.md`。

## 6. 项目文件总览

```
G:/K_1/TEXT_1/
├── CLAUDE.md                         # Agent skills 配置
├── fresh-field-design-plan.md        # 本文件（实现计划书）
├── SD-image-generation-plan.md      # Stable Diffusion 生图计划
├── PRD-fresh-field.md                # 产品需求文档
├── .scratch/fresh-field/
│   ├── PRD.md                        # 已发布 PRD
│   └── issues/                       # 14 个已完成的 implementation issues
├── docs/agents/
│   ├── issue-tracker.md              # Issue 追踪配置
│   ├── triage-labels.md              # Triage 标签映射
│   └── domain.md                     # 领域文档配置
└── src/                              # 前端源码（见 3.2 节）
```
