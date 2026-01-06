document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // SMOOTH SCROLL (HANYA UNTUK #)
    // ===============================
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e){

            const href = link.getAttribute('href');

            // kalau bukan anchor → lanjut
            if(!href || !href.startsWith("#")) return;

            e.preventDefault();

            const target = document.querySelector(href);

            if(target){
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // ===============================
    // FADE IN SECTION
    // ===============================
    const sections = document.querySelectorAll("section");

    if(sections.length > 0){

        const observer = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if(entry.isIntersecting){
                    entry.target.classList.add("show");
                }
            });
        },{
            threshold:0.2
        });

        sections.forEach(function(sec){
            observer.observe(sec);
        });
    }


    // ===============================
    // FORM VALIDATION (JIKA ADA FORM)
    // ===============================
    const btn = document.querySelector("form button");
    const inputs = document.querySelectorAll("form input, form textarea");

    if(btn){

        btn.addEventListener("click", function(e){

            let kosong = false;

            inputs.forEach(function(i){
                if(i.value.trim()===""){
                    i.style.borderColor="red";
                    kosong = true;
                } else {
                    i.style.borderColor="#ddd";
                }
            });

            if(kosong){
                alert("Harap lengkapi semua data!");
                e.preventDefault();
            } else {
                alert("Pesan berhasil dikirim 🙂");
            }

        });
    }

});
