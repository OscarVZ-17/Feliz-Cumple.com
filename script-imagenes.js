document.addEventListener('DOMContentLoaded', function () {
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
          let arrowParent = e.target.parentElement.parentElement;
          arrowParent.classList.toggle("showMenu");
      });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("close");
  });
});

// Auto resizing textarea
document.addEventListener('DOMContentLoaded', function () {
  const autoTextarea = document.getElementById('autoTextarea');
  autoTextarea.addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
  });
});
