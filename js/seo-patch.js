document.addEventListener("DOMContentLoaded", function () {
  // 找到页面上所有没有 alt 属性，或者 alt 为空的 img 标签
  const images = document.querySelectorAll('img:not([alt]), img[alt=""]');
  images.forEach(function (img) {
    // 优先获取它所属文章卡片的标题，如果没有，就用全局兜底文本
    const postTitle = img.closest('.post-card')?.querySelector('.post-title')?.innerText;
    img.setAttribute('alt', postTitle ? `${postTitle} - Honcho` : 'Honcho 硬件与代码分享 我的生活与业务爱好 刷新认知和拓展边界');
  });
});
