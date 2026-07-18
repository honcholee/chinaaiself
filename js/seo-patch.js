// document.addEventListener("DOMContentLoaded", function () {
//  // 找到页面上所有没有 alt 属性，或者 alt 为空的 img 标签
//  const images = document.querySelectorAll('img:not([alt]), img[alt=""]');
//  images.forEach(function (img) {
    // 优先获取它所属文章卡片的标题，如果没有，就用全局兜底文本
//   const postTitle = img.closest('.post-card')?.querySelector('.post-title')?.innerText;
//   img.setAttribute('alt', postTitle ? `${postTitle} - Honcho` : 'Honcho 硬件与代码分享 我的生活与业务爱好 刷新认知和拓展边界');
//  });
//});


document.addEventListener("DOMContentLoaded", function () {
  // 1. 获取当前页面的标题作为备用 alt 文本
  const pageTitle = document.title ? document.title.split('-')[0].trim() : "Honcho的博客";
  
  // 2. 找到页面上所有的图片标签
  const images = document.querySelectorAll("img");
  
  images.forEach(function (img) {
    // 3. 如果图片没有 alt 属性，或者 alt 属性为空串
    if (!img.hasAttribute("alt") || img.getAttribute("alt").trim() === "") {
      
      // 优先策略：如果是文章内部的图片，可以尝试拿它的标题；如果是头像/普通图片，直接用页面标题
      if (img.classList.contains("avatar")) {
        img.setAttribute("alt", pageTitle + "的头像");
      } else {
        img.setAttribute("alt", pageTitle + " - 站点图片");
      }
    }
  });
});
