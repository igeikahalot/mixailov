// JavaScript for the hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    const menuOverlay = document.querySelector('.menu-overlay');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Toggle menu when hamburger is clicked
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navContainer.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.classList.toggle('menu-open'); // Prevent scrolling when menu is open
    });
    
    // Close menu when clicking overlay
    menuOverlay.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navContainer.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
    
    // Handle dropdown toggles on mobile
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Only apply this behavior on mobile
            if (window.innerWidth <= 992) {
                // If clicking on the main nav item (not a child link)
                if (e.target.closest('.nav-link') && !e.target.closest('.dropdown')) {
                    e.preventDefault();
                    
                    // Close any open dropdowns
                    navItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current dropdown
                    item.classList.toggle('active');
                }
            }
        });
    });
    
    // Close menu when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            menuToggle.classList.remove('active');
            navContainer.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.classList.remove('menu-open');
            
            // Reset any active states on nav items
            navItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
  // Get all tab buttons and content
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabContents = document.querySelectorAll(".tab-content")

  // Add click event to each tab button
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the tab id from data attribute
      const tabId = this.getAttribute("data-tab")

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to current button and content
      this.classList.add("active")
      document.getElementById(tabId).classList.add("active")
    })
  })
})


document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.control-card');
    let activeCardIndex = 0;

    // Функция обновления UI
    function updateUI() {
        cards.forEach((card, index) => {
            // Обновляем активность карточек
            if (index === activeCardIndex) {
                card.classList.add('active');
                card.classList.remove('inactive');
            } else {
                card.classList.add('inactive');
                card.classList.remove('active');
            }

            // Обновляем стрелки внутри текущей карточки
            const leftArrow = card.querySelector('.leftArrow');
            const rightArrow = card.querySelector('.rightArrow');
            
            leftArrow.classList.toggle('disabled', activeCardIndex === 0);
            rightArrow.classList.toggle('disabled', activeCardIndex === cards.length - 1);
        });
    }

    // Делегирование событий: обрабатываем клики по стрелкам во всех карточках
    document.querySelector('.biofilter-wrapper').addEventListener('click', function(e) {
        const target = e.target;

        // Клик по левой стрелке
        if (target.classList.contains('leftArrow')) {
            if (activeCardIndex > 0) {
                activeCardIndex--;
                updateUI();
            }
        }

        // Клик по правой стрелке
        if (target.classList.contains('rightArrow')) {
            if (activeCardIndex < cards.length - 1) {
                activeCardIndex++;
                updateUI();
            }
        }
    });

    // Инициализация
    updateUI();
});


const carousel = document.querySelector('.carousel');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

function updateArrows() {
  const scrollLeft = carousel.scrollLeft;
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  
  // Обновляем левую стрелку
  if (scrollLeft <= 0) {
    leftArrow.classList.add('disabled');
  } else {
    leftArrow.classList.remove('disabled');
  }
  
  // Обновляем правую стрелку
  if (scrollLeft >= maxScroll - 1) {
    rightArrow.classList.add('disabled');
  } else {
    rightArrow.classList.remove('disabled');
  }
}

// Инициализация
updateArrows();

// Обработчики событий
carousel.addEventListener('scroll', updateArrows);

leftArrow.addEventListener('click', () => {
  if (!leftArrow.classList.contains('disabled')) {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  }
});

rightArrow.addEventListener('click', () => {
  if (!rightArrow.classList.contains('disabled')) {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  }
});