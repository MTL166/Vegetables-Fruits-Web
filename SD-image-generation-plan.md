# 生图计划

## 工具配置建议

| 项目 | 推荐 |
|------|------|
| 基础模型 | SDXL 1.0 或 SD 3.5 Large（真实摄影用 SDXL + 摄影 LoRA 更稳） |
| UI | ComfyUI（灵活控制分辨率）或 Automatic1111 WebUI |
| VAE | sdxl-vae 或 kl-f8-anime2（色彩更鲜亮） |
| 采样器 | DPM++ 2M Karras 或 Euler a |
| 步数 | 25-40 |
| CFG Scale | 5-7（真实摄影）；7-9（3D 图标） |

---

## 通用配置

### 通用 Positive 前缀（所有写实类图片共用）

```
masterpiece, best quality, 8k, highly detailed, sharp focus, professional commercial photography.
```

### 通用 Negative（所有写实类图片共用）

```
text, watermark, logo, signature, letters, words, brand name, label, ugly, blurry, low quality, distorted, deformed, bad anatomy, bad lighting, overexposed, underexposed, grainy, noise, oversaturated, barcode, QR code, frame, border.
```

### 导出分辨率

所有图片导出为 PNG，方便后期裁切和嵌入页面：

| 比例 | SD 生成分辨率 | 备注 |
|------|-------------|------|
| 16:7 | 1344 × 588 | Hero 横幅，可分两段生成后拼接 |
| 4:3 | 1152 × 864 | 草莓详情主图 |
| 1:1 | 1024 × 1024 | 商品卡片、图标、评价晒单 |

---

## 一、首页 Hero 图片（16:7）

### 方案说明

16:7 是超宽比例，SD 直接生成效果差。建议用 **分两段生成 + Photoshop 拼接**，每段 672×588，拼成 1344×588。或者生成一张 4:3 大图后裁切上部作为 Hero 背景。

### Positive Prompt

```
masterpiece, best quality, 8k, highly detailed, sharp focus, professional commercial photography. Premium fresh fruits and vegetables arranged on a clean white kitchen table, strawberries, oranges, apples, fresh lettuce, cherry tomatoes, carrots, blueberries, natural morning sunlight from window, fresh water droplets on fruits, bright airy composition, elegant modern grocery ecommerce hero banner, premium but approachable, soft green and white background, shallow depth of field.
```

### Negative Prompt

```
text, watermark, logo, signature, letters, words, brand name, label, ugly, blurry, low quality, distorted, deformed, bad anatomy, bad lighting, overexposed, underexposed, grainy, noise, dark moody lighting, clutter, messy, dirty, wilted, rotten.
```

### 生成参数

- 分辨率：1152 × 864（4:3），后期裁切为 16:7
- CFG Scale：5
- 步数：30
- 采样器：DPM++ 2M Karras

---

## 二、草莓详情页主图（4:3）

### Positive Prompt

```
masterpiece, best quality, 8k, highly detailed, sharp focus, professional commercial photography. A premium fresh strawberry gift box, ripe glossy red strawberries neatly arranged in an elegant recyclable kraft paper gift box, fresh green leaves still attached, subtle condensation droplets on berries, clean pure white background, natural soft daylight, high-end fresh produce ecommerce product shot, appetizing, sharp focus on strawberries, commercial catalog image, isolated on white.
```

### Negative Prompt

```
text, watermark, logo, signature, letters, words, brand name, label, ugly, blurry, low quality, distorted, deformed, bad anatomy, bad lighting, overexposed, underexposed, grainy, noise, dark background, shadow, reflection, other objects, plastic wrap, container.
```

### 生成参数

- 分辨率：1152 × 864
- CFG Scale：5
- 步数：30
- 采样器：DPM++ 2M Karras

### 缩略图变体（4 张）

同样的 prompt，调整 seed 值生成不同角度的变体。也可以微调 prompt：

| 变体 | Prompt 调整 |
|------|------------|
| 角度 2 | 末尾加 `, slightly angled view, showing box depth` |
| 角度 3 | 末尾加 `, top-down flat lay photography` |
| 角度 4 | 末尾加 `, one strawberry placed beside the box, lifestyle touch` |

---

## 三、商品卡片图片（1:1，共 6 张）

### 3.1 有机番茄组合

```
masterpiece, best quality, 8k, highly detailed, sharp focus, professional commercial photography. Fresh organic tomatoes mix in a clean kraft paper tray, red cherry tomatoes and yellow pear tomatoes, natural soft light from above, fresh water droplets, premium grocery ecommerce style, isolated on pure white background, no shadow on floor.
```

### 3.2 进口橙子礼盒

```
masterpiece, best quality, 8k, highly detailed, sharp focus, professional commercial photography. Premium imported oranges neatly arranged in an elegant fruit gift box, bright juicy orange color, some with green leaves, clean white background, realistic ecommerce product photography, fresh and elegant, soft natural light, isolated on white.
```

### 3.3 每日蔬菜鲜配箱

```
masterpiece, best quality, 8k, highly detailed, sharp focus, professional commercial photography. Daily fresh vegetable delivery box, lettuce, carrots, cherry tomatoes, cucumber and leafy greens, neatly arranged in a kraft paper produce box, clean white background, realistic fresh grocery ecommerce photography, natural soft light, isolated on white.
```

### 3.4 牛油果精选装

```
masterpiece, best quality, 8k, highly detailed, sharp focus, professional commercial photography. Premium avocado selection, 4 ripe avocados neatly arranged in a row, dark green textured skin, clean white background, realistic ecommerce product photography, soft natural light, healthy modern grocery style, isolated on white.
```

### 3.5 蓝莓家庭装

```
masterpiece, best quality, 8k, highly detailed, sharp focus, professional commercial photography. Fresh blueberries in a transparent clamshell container, plump large berries with natural powdery bloom, some scattered on the table beside the container, clean white background, soft natural light, realistic ecommerce product shot, isolated on white.
```

### 3.6 阳光草莓礼盒（商品卡片版）

```
masterpiece, best quality, 8k, highly detailed, sharp focus, professional commercial photography. A single premium strawberry gift box, ripe red strawberries with green leaves in a kraft gift box, top-down view, clean white background, soft natural light, ecommerce product card style, isolated on white, minimal composition.
```

### 生成参数（统一）

- 分辨率：1024 × 1024
- CFG Scale：5
- 步数：30
- 采样器：DPM++ 2M Karras
- 每张生成 4-6 个 seed，人工筛选最佳

---

## 四、分类图标（1:1，共 6 个）

### 重要说明

SD/SDXL 原生对 "3D clay-like icon" 效果不佳，MJ 更适合这类任务。两个替代方案：

- **方案 A**：用 SD + **3D icon LoRA**（如 C4D、Blender render style LoRA）生成
- **方案 B**：用 Figma 插件（如 Iconify、Blush）直接做 3D 图标，更可控

以下 prompt 基于 SDXL + 3D render LoRA 设计。如果效果不理想，推荐方案 B。

### 4.1 水果鲜选

```
masterpiece, best quality, highly detailed, 3D render, octane render, isometric. A cute 3D icon of assorted fresh fruits, red apple, orange, strawberry, blueberry, soft clay-like material, matte surface, clean white background, soft even lighting, soft drop shadow on floor, modern ecommerce category icon, centered, minimal, simple composition, no text.
```

### 4.2 有机蔬菜

```
masterpiece, best quality, highly detailed, 3D render, octane render, isometric. A cute 3D icon of organic vegetables, green lettuce, carrot, tomato, cucumber, soft clay-like material, matte surface, clean white background, soft even lighting, soft drop shadow on floor, modern ecommerce category icon, centered, minimal, simple composition, no text.
```

### 4.3 礼盒专区

```
masterpiece, best quality, highly detailed, 3D render, octane render, isometric. A cute 3D icon of a fruit gift box, strawberries and oranges inside an elegant rectangular gift box with a ribbon, soft clay-like material, matte surface, clean white background, soft even lighting, soft drop shadow on floor, modern ecommerce category icon, centered, minimal, no text.
```

### 4.4 每日鲜配

```
masterpiece, best quality, highly detailed, 3D render, octane render, isometric. A cute 3D icon of a fresh produce delivery box, mixed vegetables and fruits in a small brown cardboard delivery box, soft clay-like material, matte surface, clean white background, soft even lighting, soft drop shadow on floor, modern ecommerce category icon, centered, minimal, no text.
```

### 4.5 进口水果

```
masterpiece, best quality, highly detailed, 3D render, octane render, isometric. A cute 3D icon of imported exotic fruits, orange, kiwi cut in half, avocado, green grapes, soft clay-like material, matte surface, clean white background, soft even lighting, soft drop shadow on floor, modern ecommerce category icon, centered, minimal, no text.
```

### 4.6 沙拉轻食

```
masterpiece, best quality, highly detailed, 3D render, octane render, isometric. A cute 3D icon of a fresh salad in a wooden bowl, lettuce, tomato slices, cucumber, avocado cubes, soft clay-like material, matte surface, clean white background, soft even lighting, soft drop shadow on floor, modern ecommerce category icon, centered, minimal, no text.
```

### 3D 图标 Negative Prompt

```
text, watermark, logo, letters, words, brand name, realistic, photorealistic, human, face, dark background, harsh shadows, reflection, glossy surface, metallic, glass, complex background, multiple objects not in group, noise, blurry, low quality, messy composition.
```

### 生成参数

- 分辨率：1024 × 1024
- CFG Scale：7
- 步数：35
- 采样器：DPM++ 2M Karras

---

## 五、品质保障图标（1:1，共 4 个）

这 4 个图标风格和分类图标保持一致（轻 3D clay-like），使用同样的 prompt 模板：

### 5.1 产地直采

```
masterpiece, best quality, highly detailed, 3D render, octane render, isometric. A cute 3D icon of a seedling sprouting from soil with a small green leaf, representing farm direct sourcing, soft clay-like material, matte surface, clean white background, soft even lighting, soft drop shadow, modern minimal icon, centered, no text.
```

### 5.2 冷链配送

```
masterpiece, best quality, highly detailed, 3D render, octane render, isometric. A cute 3D icon of a small delivery truck with a snowflake symbol on the side, representing cold chain delivery, soft clay-like material, matte surface, clean white background, soft even lighting, soft drop shadow, modern minimal icon, centered, no text.
```

### 5.3 坏果包赔

```
masterpiece, best quality, highly detailed, 3D render, octane render, isometric. A cute 3D icon of a shield with a checkmark, representing quality guarantee and refund protection, soft clay-like material, matte surface, clean white background, soft even lighting, soft drop shadow, modern minimal icon, centered, no text.
```

### 5.4 48 小时鲜达

```
masterpiece, best quality, highly detailed, 3D render, octane render, isometric. A cute 3D icon of a clock with a lightning bolt inside, representing fast 48 hour delivery, soft clay-like material, matte surface, clean white background, soft even lighting, soft drop shadow, modern minimal icon, centered, no text.
```

Negative Prompt 和参数同第四部分。

---

## 六、评价晒单图（1:1，共 3 张）

使用真实摄影风 prompt，模拟用户拍摄效果（略低的画质、自然手持感）：

### 6.1 草莓开箱晒单 1

```
amateur product photography, a person holding a freshly opened strawberry gift box in hands, showing ripe red strawberries inside the box, natural indoor lighting from window, warm home kitchen background slightly blurred, casual authentic customer review photo style, shallow depth of field, slightly warm color tone, unboxing moment.
```

### 6.2 草莓特写晒单 2

```
casual smartphone food photography, fresh strawberries on a white ceramic plate on a wooden dining table, one strawberry cut in half showing juicy interior, warm afternoon light, cozy home setting slightly out of focus background, authentic customer review image, natural slight color cast, not studio lit.
```

### 6.3 礼盒全景晒单 3

```
amateur home photography, an opened strawberry gift box on a kitchen counter, strawberries with green leaves visible, morning light through window, cozy lived-in kitchen background blurred, authentic unboxing review photo, slight warm tint, natural shadows, smartphone quality.
```

### 晒单图 Negative Prompt

```
studio lighting, perfect composition, commercial, text, watermark, logo, barcode, plastic, artificial, oversaturated, HDR, professional camera, model pose, staged.
```

### 生成参数

- 分辨率：1024 × 1024
- CFG Scale：4
- 步数：25
- 采样器：Euler a

---

## 七、生成执行顺序（建议）

按优先级分批生成，每批完成后筛选最佳结果：

| 批次 | 内容 | 数量 | 时间估算 |
|------|------|------|---------|
| 第 1 批 | 草莓主图 + 4 缩略图变体 | 5 张 | 先跑，这最重要 |
| 第 2 批 | 6 张商品卡片图 | 6 张 | 可并行跑 |
| 第 3 批 | Hero 图 | 1 张 | 等前两批确认风格一致性 |
| 第 4 批 | 3 张评价晒单 | 3 张 | 快，小图需求低 |
| 第 5 批 | 分类图标 × 6 + 保障图标 × 4 | 10 张 | 如果 3D 效果不行，改用 Figma 插件 |

---

## 八、后期处理建议

1. **去底**：商品图和图标用 Photoshop「选择主体」或 remove.bg 去底，替换为纯白/浅绿背景
2. **调色**：统一白平衡和曝光，避免不同批次图片色温不一致
3. **裁切**：Hero 图裁为 16:7，商品图裁为 1:1，确保主体居中
4. **压缩**：导出为 WebP（80% 质量），平衡画质和网页加载速度
5. **命名**：按原计划的素材命名规范保存（如 `product_strawberry_giftbox_main.png`）
