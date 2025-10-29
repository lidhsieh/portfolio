const burger = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

// 點擊 burger toggle sidebar
burger.addEventListener('click', (e) => {
  sidebar.classList.toggle('show');
  e.stopPropagation(); // 阻止事件冒泡，避免點 burger 被 document click 立刻關閉
});

// 點擊 sidebar 本身不關閉
sidebar.addEventListener('click', (e) => {
  e.stopPropagation(); // 點擊 sidebar 內容時也阻止冒泡
});

// 點擊 body / document 其他地方收回 sidebar
document.addEventListener('click', () => {
  sidebar.classList.remove('show');
});
