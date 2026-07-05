# Hetty's Bubble World

这是一个纯静态个人作品集互动网页，使用 HTML + CSS + JavaScript，不依赖框架、后端、数据库、CDN、Google Fonts 或外链素材。

## 预览

直接双击 `index.html` 打开，或使用本地静态服务器预览。

## 0 代码维护原则

主要文字和作品数据集中在 `script.js` 顶部。只改引号里的文字和路径，不要删除逗号、冒号、方括号、花括号和引号。

身份卡内容在：

```text
script.js > profileData
```

## 素材文件夹

```text
assets/fonts/   字体
assets/images/  图片、封面、摄影调色照片
assets/music/   背景音乐
assets/audio/   广播广告 MP3
assets/texts/   原创小说 TXT
```

## 固定字体与音乐

字体：

```text
assets/fonts/ZLabsRoundPix_16px_MD_CN.ttf
assets/fonts/WenQuanYi Bitmap Song 12px.ttf
```

音乐列表不要改：

```text
Bubble Gum.mp3
Deja Vu.mp3
Out of Melodies.mp3
pine cone.mp3
Ditto.mp3
The Chase.mp3
```

## 帖子文案

帖子文案固定 2 条。

帖子文案 01：

```text
标题：小红书文案
说明：for宋银硕
封面：assets/images/post-copy-01-cover.jpg
详情图：assets/images/post-copy-01-1.jpg
```

帖子文案 02：

```text
封面：assets/images/post-copy-02-cover.png
详情图：assets/images/post-copy-02-1.png
```

所有图片类作品都可以点击图片查看全文或大图。

## 广播广告

广播广告 MP3 放在：

```text
assets/audio/
```

当前广播广告有 3 条：

```text
radio-ad-01.mp3 = HBN广播广告
radio-ad-02.mp3 = 娃哈哈广播广告
radio-ad-03.mp3 = 纳爱斯广播广告
```

不要再使用 `radio-hbn.mp3`、`radio-wahaha.mp3`、`radio-naaisi.mp3` 作为路径。

广播广告图片放在 `assets/images/`，MP3 使用 HTML5 audio 播放。当前说明：

```text
HBN广播广告：HBN 相关广播广告脚本与录音作品
娃哈哈广播广告：获2026年第18届大广赛广东省一等奖
纳爱斯广播广告：获2026年第18届大广赛广东省三等奖
```

## 公众号排版

公众号图文排版固定 2 条作品：

```text
公众号排版 01：允许自己潦草生长—致这个春天还在找实习的你
公众号排版 02：我在二十一世纪的夏天漫步北平的冬天
```

素材命名：

```text
assets/images/wechat-layout-01-cover.jpg
assets/images/wechat-layout-01-1.jpg
assets/images/wechat-layout-02-cover.jpg
assets/images/wechat-layout-02-1.jpg
```

## 海报与 PPT

海报设计固定 7 个作品：

```text
assets/images/poster-01-cover.jpg
assets/images/poster-01-1.jpg
...
assets/images/poster-07-cover.jpg
assets/images/poster-07-1.jpg
```

PPT 设计暂时可配置：

```text
assets/images/ppt-01-cover.jpg
assets/images/ppt-01-page1.jpg
```

## AI设计

排版设计下新增 `AI设计`，它是排版设计的细分区，不是主分区泡泡。

AI设计有 2 个图片作品：

```text
HBN大广赛策划案视觉设计
健康科普桌游视觉设计
```

AI设计图片放在 `assets/images/`。推荐命名：

```text
assets/images/ai-design-01-cover.jpg
assets/images/ai-design-01-1.jpg
assets/images/ai-design-01-2.jpg
assets/images/ai-design-01-3.jpg
assets/images/ai-design-02-cover.jpg
assets/images/ai-design-02-1.jpg
assets/images/ai-design-02-2.jpg
assets/images/ai-design-02-3.jpg
```

如果暂时只有一张详情图，可以只保留真实存在的图片路径。

## 视频制作

视频制作分区现在以 4 张图片展示，不再上传本地视频文件。设计者只需要将图片放入 assets/images/，命名为 video-work-01.jpg 到 video-work-04.jpg。点击图片即可放大查看。

```text
assets/images/video-work-01.jpg
assets/images/video-work-02.jpg
assets/images/video-work-03.jpg
assets/images/video-work-04.jpg
```

## 原创小说

TXT 放在：

```text
assets/texts/novel-01.txt
```

建议保存为 UTF-8 编码。网页会优先按 UTF-8 读取；如果检测到明显乱码，会尝试按 `gb18030` 兜底解码。

## 摄影调色

摄影调色固定 12 张照片：

```text
assets/images/photo-color-01.jpg
...
assets/images/photo-color-12.jpg
```

页面只显示标题和照片墙，不显示额外说明。照片点击后可以放大，并支持上一张/下一张。

如果进入摄影调色卡顿，建议压缩图片：

```text
单张建议控制在 300KB - 800KB
不建议直接使用十几 MB 原图
图片宽度建议压缩到 1600px 以内
```

## 留言

留言保存在当前浏览器的 `localStorage`，key 为：

```text
hetty_bubble_messages
```
