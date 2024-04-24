    document.addEventListener("DOMContentLoaded", function(){
        const sections = document.querySelectorAll("section[id]");
        window.addEventListener("scroll", navHighlighter);
        function navHighlighter() {
            let scrollY = window.scrollY;
            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 150;
                sectionId = current.getAttribute("id");
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ){
            document.querySelector(".CategoryTabs a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".CategoryTabs a[href*=" + sectionId + "]").classList.remove("active");
    }
        });
    }
        var categoryTabsContainer = document.querySelector(".CategoryTabs");
        var categoryASection = document.getElementById("CategoryA");
        var categoryBSection = document.getElementById("CategoryB");
        var categoryATop = categoryASection.getBoundingClientRect().top + window.scrollY;
        var categoryBTop = categoryBSection.getBoundingClientRect().top + window.scrollY;
        var categoryTabsTop = categoryTabsContainer.getBoundingClientRect().top + window.scrollY;        
        var distanceToScrollA = categoryATop - categoryTabsTop + 280;
        var distanceToScrollB = categoryBTop - categoryTabsTop + 220;
        var categoryATab = document.querySelector('a[href="#CategoryA"]');  
        var categoryBTab = document.querySelector('a[href="#CategoryB"]');
            categoryATab.addEventListener("click", function(event) {
                event.preventDefault();
                window.scrollTo({ top: distanceToScrollA, behavior: "smooth" });
            }); 
            categoryBTab.addEventListener("click", function(event) {
                event.preventDefault();
                window.scrollTo({ top: distanceToScrollB, behavior: "smooth" });
            }); 
    });

    



  