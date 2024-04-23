    document.addEventListener("DOMContentLoaded", function(){
        var categoryTabs = document.querySelectorAll(".CategoryTab");
        var categoryTabsContainer = document.querySelector(".CategoryTabs");
        console.log({ categoryTabs, categoryTabsContainer });
        categoryTabs.forEach(function (tab) {
            tab.addEventListener("click", function (event) {
              event.preventDefault();
              handleTabClick(tab);
            });
          })
          
          
        function handleTabClick(clickedTab){
        categoryTabs.forEach(function(tab){
            if (tab === clickedTab) {
                tab.classList.add("active");
                var targetId = tab.getAttribute("href").substring(1);
                var targetSection = document.getElementById(targetId);
                let dims = targetSection.getBoundingClientRect(); 
                window.scrollTo({ top: dims.top - categoryTabsContainer.offsetHeight  , behavior: "smooth" });
            } else {
                tab.classList.remove("active");
            }
        })
    }   
        var categoryBSection = document.getElementById("CategoryB");
        var categoryTabsContainer = document.querySelector(".CategoryTabs");
        var categoryBTop = categoryBSection.getBoundingClientRect().top + window.scrollY;
        var categoryTabsTop = categoryTabsContainer.getBoundingClientRect().top + window.scrollY;
        var distanceToScroll = categoryBTop - categoryTabsTop + 220;
        var categoryBTab = document.querySelector('a[href="#CategoryB"]');
        categoryBTab.addEventListener("click", function(event) {
            event.preventDefault();
            window.scrollTo({ top: distanceToScroll, behavior: "smooth" });
        }); 
        
// -------------Active Category scroll   
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
    });

    



  