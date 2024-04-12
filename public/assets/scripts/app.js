// Mobile Menu
const navToggleIcon = document.querySelector('.nav__toggle-icon');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item');
const menuLinks = document.querySelectorAll('.menu__link')
const sections = document.querySelectorAll("section");
const scrollLink = document.querySelectorAll('.scroll-link');  
const targetSection = document.querySelector('.facilities');
const navbarHeight = menu.offsetHeight;

navToggleIcon.addEventListener('click', function() {
    this.classList.toggle('nav__toggle-icon--open');
    menu.classList.toggle('menu--open');
})


menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
      menu.classList.remove('menu--open');
      navToggleIcon.classList.remove('nav__toggle-icon--open');
    });
  });




// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const targetClass = entry.target.classList[0];
    const targetLink = document.querySelector(`.menu__link[data-section="${targetClass}"]`);

    if (targetLink) {
      if (entry.isIntersecting) {
        // Remove active class from all links
        menuLinks.forEach(link => link.classList.remove('menu__link--active'));
        // Add active class to the corresponding link
        targetLink.classList.add('menu__link--active');
      }
    }
  });
}, { threshold: 0.1 }); // Adjust threshold as needed
// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});
  

// Add click event listeners to the navigation links
menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior

    const targetClass = link.getAttribute('data-section'); // Get the target section class
    const targetSection = document.querySelector(`.${targetClass}`); // Get the target section element

    if (targetSection) {
      // Remove active class from all links
      menuLinks.forEach(link => link.classList.remove('menu__link--active'));

      // Add active class to the clicked link
      link.classList.add('menu__link--active');

      // Get the vertical position of the target section
      const targetSectionPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;

      // Scroll to the target section position
      window.scrollTo({
        top: targetSectionPosition,
        behavior: 'smooth'
      });
    }
  });
});


  
// Specific Scroll Link class for facilities section due to top position issues


  scrollLink.forEach(function(sl) {
    sl.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default link behavior
    
      // Get the vertical position of the target section
      const targetSectionPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
    
      // Scroll to the target section position
      window.scrollTo({
        top: targetSectionPosition - 170,
        behavior: 'smooth'
      });
    });

  })




// // Intersection Observer 
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     const targetClass = entry.target.classList[0];
//     const targetLink = document.querySelector(`.menu__link[data-section="${targetClass}"]`);

//     if (targetLink) {
//       if (entry.isIntersecting) {
//         // Add 'menu__link--active' class to the corresponding link
//         targetLink.classList.add('menu__link--active');
//       } else {
//         // Remove 'menu__link--active' class from the corresponding link
//         targetLink.classList.remove('menu__link--active');
//       }
//     }
//     console.log(entry)
//   });
// }, { threshold: 0.5 }); // Adjust threshold as needed

// // Observe each section
// sections.forEach((section) => {
//   observer.observe(section);
// });
// menuLinks.forEach(item => {
//   item.addEventListener("click", function (e){
//       e.preventDefault()
//       item.classList.remove("menu__link--active")
//       item.classList.add("menu__link--active")
//       let sectionClass = item.getAttribute("data-section")
//       let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop


//     window.scrollTo({
//       top: sectionOffsetTop - 130,
//       behavior: "smooth"
//   })
      
//   })
// })