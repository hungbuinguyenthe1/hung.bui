    document.addEventListener("DOMContentLoaded", function(){
        var categoryTabs = document.querySelectorAll(".CategoryTab");
        var categoryTabsContainer = document.querySelector(".CategoryTabs");
        function handleTabClick(clickedTab){
        categoryTabs.forEach(function(tab){
            if (tab === clickedTab) {
                tab.classList.add("active");
                var targetId = tab.getAttribute("href").substring(1);
                var targetSection = document.getElementById(targetId);
                var categoryNameTop = targetSection.offsetTop - categoryTabsContainer.offsetHeight;
                window.scrollTo({ top: categoryNameTop, behavior: "smooth" });
            } else {
                tab.classList.remove("active");
            }
        })
        window.scrollTo({ top: categoryNameTop, behavior: "smooth" });
    }
        categoryTabs.forEach(function(tab) {
        tab.addEventListener("click", function(event){
            event.preventDefault();
            handleTabClick(tab);
            })
        })
        function calculateCategoryPositions() {
            var categoryPositions = [];
            categoryNames.forEach(function(categoryName) {
                var categoryNameTop = categoryName.getBoundingClientRect().top + window.pageYOffset - categoryTabsHeight;
                var categoryNameId = categoryName.getAttribute("id");
                categoryPositions.push({ id: categoryNameId, top: categoryNameTop });
            });
            return categoryPositions;
        }
        function handleScroll() {
            var categoryPositions = calculateCategoryPositions();
            var scrollPosition = window.scrollY;

            categoryPositions.forEach(function(category){
                if(scrollPosition >= category.top) {
                    var correspondingTab = document.querySelector('a[href="#' + category.id + '"]');
                    if ( correspondingTab !== lastActiveTab) {
                        handleTabClick(correspondingTab);
                    }
                }
            })
        }
        window.addEventListener("scroll", handleScroll);
        categoryTabs.forEach(function(tab) {
            tab.addEventListener("click", function(event){
                event.preventDefault();
                handleTabClick(tab);
            });
        });
    
    });



    // Xử lý khi scroll đến Category 
    // window.addEventListener("scroll", function() {
    // var categoryASection = document.getElementById("CategoryA");
    // var categoryBSection = document.getElementById("CategoryB");
    // var windowHeight = window.innerHeight; 
    // var documentHeight = Math.max(
    //     document.body.scrollHeight, document.documentElement.scrollHeight,
    //     document.body.offsetHeight, document.documentElement.offsetHeight,
    //     document.body.clientHeight, document.documentElement.clientHeight
    //     ); 
    // var CategoryAHeight = CategoryASection.offsetHeight;    
    // var CategoryAEndPosition = CategoryAOffset + CategoryAHeight;    
    // var scrollPosition = window.scrollY + windowHeight;
    // if (scrollPosition >= CategoryAEndPosition && scrollPosition < CategoryBOffset) {
    //     CategoryATab.classList.remove("active");
    //     CategoryBTab.classList.add("active");
    //     } else {
    //     categoryATab.classList.add("active");
    //     categoryBTab.classList.remove("active");
    //     }
    // });;


  