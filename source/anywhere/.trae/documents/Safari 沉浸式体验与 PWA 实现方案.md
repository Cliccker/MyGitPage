## 目标
- 在 iOS/macOS 的 Safari 上实现更沉浸式的全屏体验。
- 通过 meta、CSS、安全区域处理与 PWA 支持，优化状态栏与刘海屏显示。

## Meta 与视口设置
- 在 `index.html` 的 `<head>` 中添加以下标签：
```
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="手冲咖啡计时器">
<meta name="theme-color" content="#78350f">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="icons/icon-192.png">
```
- 保持页面背景连续到屏幕顶部，以配合透明状态栏。

## CSS 安全区域与状态栏
- 在现有样式中为页面容器添加安全区域内边距，适配刘海屏与底部 Home 指示条：
```
.page {
  padding-top: calc(24px + env(safe-area-inset-top));
  padding-right: calc(24px + env(safe-area-inset-right));
  padding-bottom: calc(24px + env(safe-area-inset-bottom));
  padding-left: calc(24px + env(safe-area-inset-left));
}
@supports (padding: constant(safe-area-inset-top)) {
  .page {
    padding-top: calc(24px + constant(safe-area-inset-top));
    padding-right: calc(24px + constant(safe-area-inset-right));
    padding-bottom: calc(24px + constant(safe-area-inset-bottom));
    padding-left: calc(24px + constant(safe-area-inset-left));
  }
}
```
- 确保 `body` 的背景渐变连续，并避免在顶部设置遮挡透明状态栏的纯色条。

## PWA Manifest
- 新增 `manifest.webmanifest`：
```
{
  "name": "手冲咖啡计时器",
  "short_name": "咖啡计时",
  "start_url": "./",
  "display": "standalone",
  "background_color": "#78350f",
  "theme_color": "#78350f",
  "icons": [
    { "src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```
- 若需完全无 UI，可将 `display` 改为 `fullscreen`，但 iOS PWA 通常以 `standalone` 表现更稳定。

## Service Worker
- 在 `index.html` 尾部注册 Service Worker：
```
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js');
  });
}
```
- 新增 `sw.js`，实现核心资源预缓存与请求处理：
```
const CACHE_NAME = 'pourover-cache-v1';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(CORE_ASSETS)));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME ? caches.delete(k) : null))));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE_NAME).then(c => c.put(req, copy));
      return res;
    }).catch(() => cached))
  );
});
```
- GitHub Pages/HTTPS 环境下生效。开发时建议使用本地 HTTPS 或现代浏览器的服务工作线程调试能力。

## iOS 版本检测与适配
- 根据 iOS 版本添加类名用于可选微调：
```
function getIOSVersion() {
  const ua = navigator.userAgent;
  const m = ua.match(/OS (\d+)_?(\d+)?_?(\d+)?/);
  if (!m) return null;
  return { major: parseInt(m[1], 10) };
}
const v = getIOSVersion();
if (v) {
  document.documentElement.classList.add('ios');
  document.documentElement.classList.add('ios-' + v.major);
}
```
- 如需针对特定版本调整样式，可使用选择器例如：
```
.ios.ios-12 .page { padding-top: 24px; }
```
- 已启用 `viewport-fit=cover` 并使用 `env(safe-area-inset-*)`，多数场景无需额外版本分支。

## 启动画面与图标
- 提供最少两张图标文件 `icons/icon-192.png` 与 `icons/icon-512.png`。
- 如需定制启动画面，可按设备尺寸添加多条 `<link rel="apple-touch-startup-image" ...>`，此为可选高级优化。

## 验证步骤
- iOS Safari 中打开页面，使用“添加到主屏幕”。
- 从主屏幕启动，确认状态栏透明、内容不被刘海遮挡、安全区域内边距生效。
- 断网验证离线可加载，计时器与现有防息屏逻辑可正常工作。

## 回退与兼容
- 非 iOS 或非 Safari 环境保留标准体验，`theme-color` 在 Android Chrome 控制地址栏颜色。
- iOS 上 PWA 行为受系统版本影响，`standalone` 模式稳定性优于完全 `fullscreen`。