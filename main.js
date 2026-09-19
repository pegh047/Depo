document.addEventListener("DOMContentLoaded", () => {

    // ============================================================
    // 1. ÜMUMİ SCROLL ANİMASİYALARI
    // .scroll-anim və .mehsuldiv elementləri
    // ============================================================

    const generalObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    // Animasiya yalnız bir dəfə işləsin
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    const animatedElements = document.querySelectorAll(
        ".scroll-anim, .mehsuldiv"
    );


    animatedElements.forEach((element) => {
        generalObserver.observe(element);
    });



    // ============================================================
    // 2. EĞİTMƏN KARTLARI
    // .fade-in-card
    // ============================================================

    const instructorCards = document.querySelectorAll(
        ".fade-in-card"
    );


    const cardObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const card = entry.target;

                    // HTML-dəki sıra nömrəsini götürürük
                    const index = [...instructorCards].indexOf(card);

                    // Hər kart arasında 150ms fərq
                    const delay = index * 150;


                    setTimeout(() => {

                        card.classList.add("visible");

                    }, delay);


                    // Bir dəfə işləsin
                    observer.unobserve(card);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    instructorCards.forEach((card) => {
        cardObserver.observe(card);
    });



    // ============================================================
    // 3. SƏHİFƏ YÜKLƏNƏNDƏ ANİMASİYANIN BAŞLAMASI
    // ============================================================

    window.addEventListener("load", () => {

        document.body.classList.add("page-loaded");

    });



    // ============================================================
    // 4. PRODUCT CARD HOVER
    // ============================================================

    const productCards = document.querySelectorAll(
        ".mehsuldiv"
    );


    productCards.forEach((card) => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("card-hover");
        });


        card.addEventListener("mouseleave", () => {
            card.classList.remove("card-hover");
        });

    });



    // ============================================================
    // 5. START NOW BUTTON
    // ============================================================

    const startButton = document.querySelector(
        ".StartNow"
    );


    if (startButton) {

        startButton.addEventListener("click", () => {

            const skillsSection = document.querySelector(
                ".esas2"
            );


            if (skillsSection) {

                skillsSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }



    // ============================================================
    // 6. START LEARNING NOW BUTTON
    // ============================================================

    const learningButton = document.querySelector(
        ".menubutton"
    );


    if (learningButton) {

        learningButton.addEventListener("click", () => {

            const coursesSection = document.querySelector(
                ".uc"
            );


            if (coursesSection) {

                coursesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }



    // ============================================================
    // 7. ADD TO CART
    // ============================================================

    const cartButtons = document.querySelectorAll(
        ".addtocart"
    );


    let cartCount = 0;


    cartButtons.forEach((button) => {

        button.addEventListener("click", () => {

            cartCount++;

            button.innerHTML = "<b>ADDED ✓</b>";

            button.classList.add("added");


            setTimeout(() => {

                button.innerHTML = "<b>ADD TO CART</b>";

            }, 1500);

        });

    });



    // ============================================================
    // 8. CART ICON
    // ============================================================

    const cartIcon = document.querySelector(
        ".sebet"
    );


    if (cartIcon) {

        cartIcon.addEventListener("click", (event) => {

            event.preventDefault();


            if (cartCount === 0) {

                alert("Your cart is empty.");

            } else {

                alert(
                    `You have ${cartCount} course(s) in your cart.`
                );

            }

        });

    }



    // ============================================================
    // 9. SUBSCRIBE FORM
    // ============================================================

    const subscribeForm = document.querySelector(
        ".idid form"
    );


    if (subscribeForm) {

        subscribeForm.addEventListener("submit", (event) => {

            event.preventDefault();


            const emailInput = subscribeForm.querySelector(
                "input"
            );


            if (!emailInput) return;


            const email = emailInput.value.trim();


            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (email === "") {

                alert("Please enter your email address.");

                emailInput.focus();

                return;

            }


            if (!emailRegex.test(email)) {

                alert("Please enter a valid email address.");

                emailInput.focus();

                return;

            }


            alert(
                "Thank you for subscribing! 🎉"
            );


            emailInput.value = "";

        });

    }



    // ============================================================
    // 10. CONTACT SUPPORT
    // ============================================================

    const supportButton = document.querySelector(
        ".bbbuuu"
    );


    if (supportButton) {

        supportButton.addEventListener("click", () => {

            window.location.href =
                "mailto:support@practicaly.com";

        });

    }



    // ============================================================
    // 11. LOGO → SƏHİFƏNİN YUXARISI
    // ============================================================

    const logo = document.querySelector(
        ".loooqoo"
    );


    if (logo) {

        logo.addEventListener("click", (event) => {

            event.preventDefault();


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }



    // ============================================================
    // 12. CONSOLE MESAJI
    // ============================================================

    console.log(
        "PRACTICALY JavaScript successfully loaded 🚀"
    );

});