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

  // Auto resizing textarea
  const autoTextarea = document.getElementById('autoTextarea');
  autoTextarea.addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
  });

  // Make images draggable and full-screen
  const images = document.querySelectorAll('.image-container img');

  images.forEach(img => {
    img.addEventListener('click', function() {
      if (!img.classList.contains('full-screen')) {
        img.classList.add('full-screen');
        img.style.position = 'fixed';
        img.style.top = '50%';
        img.style.left = '50%';
        img.style.transform = 'translate(-50%, -50%)';
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        img.style.height = 'auto';
        img.style.width = 'auto';
        img.style.zIndex = 1000;
        document.body.append(img);
      } else {
        img.classList.remove('full-screen');
        img.style.position = '';
        img.style.top = '';
        img.style.left = '';
        img.style.transform = '';
        img.style.maxWidth = '';
        img.style.maxHeight = '';
        img.style.height = '';
        img.style.width = '';
        img.style.zIndex = '';
      }
    });

    img.addEventListener('mousedown', onMouseDown);

    function onMouseDown(event) {
      event.preventDefault();
      const shiftX = event.clientX - img.getBoundingClientRect().left;
      const shiftY = event.clientY - img.getBoundingClientRect().top;

      img.style.position = 'absolute';
      img.style.zIndex = 1000;
      document.body.append(img);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        img.style.left = pageX - shiftX + 'px';
        img.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener('mousemove', onMouseMove);

      img.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        img.onmouseup = null;
      };
    }

    img.ondragstart = function() {
      return false;
    };
  });
});
