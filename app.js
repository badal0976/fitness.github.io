const menu = document.querySelector('#mobile-menu');
// console.log(menu)
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('.navbar_logo');
const body = document.querySelector('body');


//   Display mobile menu

const mobileMenu =  () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}


menu.addEventListener('click', mobileMenu);

gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero',{

    duration:0.6,
    opacity:0,
    y:-150,
    stagger:0.8
});

gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-services',{
    scrollTrigger: {
        trigger: '.animate-services',
        toggleActions: 'restart '
    },
    duration:0.4,
    opacity:1,
    x:-150,
    stagger:0.12
});

// gsap.from('.animate-services',{
//     scrollTrigger: '.animate-services',
//     duration:0.4,
//     opacity:1,
//     x:-150,
//     stagger:0.12
// });



gsap.from('.animate-img',{
   scrollTrigger:  {
    trigger: '.animate-img',
    toggleActions: 'restart none none none'
},
    duration:1.2,
    opacity:0,
    x:-200,
    
});

gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-membership',{
    scrollTrigger: {
        trigger: '.animate-membership',
        toggleActions: 'restart'
    },
    duration:0.4,
    opacity:0,
    y:-150,
    stagger:0.6,
    delay:0.4
});
gsap.from('.animate-card',{
    scrollTrigger: {
        trigger: '.animate-card',
        toggleActions: 'restart'
    },
    duration:1.2,
    opacity:0,
    y:-150,
    stagger:0.3,
    delay:0.2
});

gsap.from('.animate-team',{
    scrollTrigger: {
        trigger: '.animate-team',
        toggleActions: 'restart'
    },
    duration:1.2,
    opacity:0,
    y:-150,
    stagger:0.34,
    delay:0.2
});

gsap.from('.animate-email',{
    scrollTrigger: {
        trigger: '.animate-email',
        toggleActions: 'restart'
    },
    duration:1,
    opacity:0,
    y:-150,
    stagger:0.3,
    delay:0.5
});

gsap.registerPlugin(ScrollTrigger);


gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-footer',{
    scrollTrigger: {
        trigger: '.animate-footer',
        toggleActions: 'restart'
    },
    duration:0.8,
    opacity:0,
    y:-150,
    stagger:0.4,
    delay:0.4
});
