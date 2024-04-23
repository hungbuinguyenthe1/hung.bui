

document.addEventListener('DOMContentLoaded', function() {
    // ItemCart 1
    const decreaseBtn = document.getElementById('decreaseBtn1');
    const increaseBtn = document.getElementById('increaseBtn1');
    const count1Span = document.getElementById('count1');
    const Price1Span = document.getElementById('Price1');
    
    let count1 = 1;
    let Price1 = 10.00;
    const PriceA = 10.00;

    const updatePrice1 = () => {
        Price1 = count1 * PriceA; 
        Price1Span.textContent = ' € ' + Price1.toFixed(2);
        updateTotalPrice();
    };

    decreaseBtn.addEventListener('click', function handleItemA() {
        if(count1 > 1)
            count1--;
        count1Span.textContent = count1;
        updatePrice1();
    });

    increaseBtn.addEventListener('click', function handleItemA() {
        count1++;
        count1Span.textContent = count1;
        updatePrice1();
    });

    document.querySelectorAll('.ProductList .itemPr').forEach(item => {
        item.addEventListener('click', handleItemA)
    });

    function handleItemA() {
        count1++;
        Price1 += PriceA;
        count1Span.textContent = count1;
        updatePrice1();
    }
    //ItemCart2
    const decreaseBtn2 = document.getElementById('decreaseBtn2');
    const increaseBtn2 = document.getElementById('increaseBtn2');
    const count2Span = document.getElementById('count2');
    const Price2Span = document.getElementById('Price2');
    
    let count2 = 1;
    let Price2 = 10.00;
    const PriceB = 10.00;

    const updatePrice2 = () => {
        Price2 = count2 * PriceB; 
        Price2Span.textContent = ' € ' + Price2.toFixed(2);
        updateTotalPrice();
    };

    decreaseBtn2.addEventListener('click', function handleItemB() {
        if(count2 > 1)
            count2--;
        count2Span.textContent = count2;
        updatePrice2();
    });

    increaseBtn2.addEventListener('click', function handleItemB() {
        count2++;
        count2Span.textContent = count2;
        updatePrice2();
    });

    document.querySelectorAll('.ProductList .itemPr').forEach(item => {
        item.addEventListener('click', handleItemB)
    });

    function handleItemB() {
        count2++;
        Price2 += PriceB;
        count2Span.textContent = count2;
        updatePrice2();
    }

    //  Checkout - discount 
    const totalPr = document.getElementById('totalPr');
    let discount = 15.50; 
    const updateTotalPrice = () => {
        let totalPrice = Price1 + Price2;
        let discountedPrice = totalPrice - discount;
        totalPr.textContent = ' € ' + discountedPrice.toFixed(2);
    };
    updateTotalPrice();
});

    

