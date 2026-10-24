// Giúp app mở được khi không có mạng và cài được như ứng dụng thật.
// Trang chính: lấy bản mới từ mạng trước, mất mạng thì dùng bản đã lưu.
// Thư viện, phông chữ, biểu tượng: dùng bản đã lưu, đồng thời cập nhật ngầm.
const CACHE = 'quetpdf-v5';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];
const CDN = ['https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'];
const CACHE_HOSTS = ['cdnjs.cloudflare.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(CORE);
    await Promise.all(CDN.map(u => c.add(new Request(u, {mode: 'cors'})).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  if (req.mode === 'navigate' || (sameOrigin && /\/(index\.html)?$/.test(url.pathname))){
    e.respondWith((async () => {
      try {
        const res = await fetch(req);
        const c = await caches.open(CACHE); c.put('./index.html', res.clone());
        return res;
      } catch (err){
        return (await caches.match('./index.html')) || (await caches.match('./')) || Response.error();
      }
    })());
    return;
  }
  if (!sameOrigin && !CACHE_HOSTS.includes(url.hostname)) return;
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    let hit = await c.match(req);
    // Bản "kín" (opaque) không dùng được cho yêu cầu cần đọc nội dung: bỏ qua, lấy từ mạng
    if (hit && hit.type === 'opaque' && req.mode !== 'no-cors') hit = null;
    // Chỉ lưu bản đọc được, không lưu bản kín (tốn chỗ và gây lỗi như trên)
    const net = fetch(req).then(res => { if (res && res.ok && res.type !== 'opaque') c.put(req, res.clone()); return res; }).catch(() => null);
    return hit || (await net) || Response.error();
  })());
});
