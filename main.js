const scollRevealOption = {
    distance : "50px",
    origin: "bottom",
    duration: 1000,
};

//header container
ScrollReveal().reveal(".header__container h1", scollRevealOption);

ScrollReveal().reveal(".header__container h4",{
    ...scollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__container .btn",{
    ...scollRevealOption,
    delay: 1000,
});


//about container
ScrollReveal().reveal(".about__container .section__header",scollRevealOption);
ScrollReveal().reveal(".about__container .section__subheader",{
    ...scollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".about__container .about__flex",{
    ...scollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".about__container .btn",{
    ...scollRevealOption,
    delay: 1500,
});


//discover container
ScrollReveal().reveal(".discover__card",{
    ...scollRevealOption,
    interval: 500,
});
ScrollReveal().reveal(".discover__card__content",{
    ...scollRevealOption,
    interval: 500,
    delay: 200,
});


// blogs container
ScrollReveal().reveal(".blogs__card",{
    duration: 1000,
    interval: 400,
});

// journals container
ScrollReveal().reveal(".journals__card",{
    ...scollRevealOption,
    interval: 400,
})