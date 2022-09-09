const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {    
        item.scrollLeft -= containerWidth;
    })
})


const leftArrow = document.querySelectorAll('.leftArrow');
const rightArrow = document.querySelectorAll('.rightArrow');
const qtyAmount = document.querySelectorAll('.amount');
const productPrice = document.querySelectorAll('.productPrice');
const totalPrice = document.querySelector('.totalPrice').innerText;

for (let i = 0; i < leftArrow.length; i++){
    leftArrow[i].addEventListener('click', () => {
        let quantity = qtyAmount[i].innerText;
        let quantityNumber = parseFloat(quantity); 

        price = productPrice[i].innerText;
        priceNumber = parseFloat(price);

        if (quantityNumber > 0) {
            let newQty = quantityNumber - 1;
            qtyAmount[i].innerText = newQty;
            let overallPrice = newQty * 100;
            productPrice[i].innerText = overallPrice;


            let totalPriceNumber = parseFloat(totalPrice);
            let newTotalPrice = 0;
    
            for (let i = 0; i < rightArrow.length; i++){
                price = productPrice[i].innerText;
                priceNumber = parseFloat(price);
    
               
                newTotalPrice = newTotalPrice + parseFloat(productPrice[i].innerText);
                
            }
            document.querySelector('.totalPrice').innerText = newTotalPrice;
        } else {
            quantityNumber == 0;
            productPrice[i].innerText = 0;
        }

        event.stopPropagation()
    })
}

for (let i = 0; i < rightArrow.length; i++){
    rightArrow[i].addEventListener('click', () => {
        let quantity = qtyAmount[i].innerText;
        let quantityNumber = parseFloat(quantity); 
        let newQty = quantityNumber + 1;
        qtyAmount[i].innerText = newQty;

        let overallPrice = newQty * 100;
        productPrice[i].innerText = overallPrice;

        let totalPriceNumber = parseFloat(totalPrice);
        let newTotalPrice = 0;

        for (let i = 0; i < rightArrow.length; i++){
            price = productPrice[i].innerText;
            priceNumber = parseFloat(price);

           
            newTotalPrice = newTotalPrice + parseFloat(productPrice[i].innerText);
            
        }
        document.querySelector('.totalPrice').innerText = newTotalPrice;
        
        event.stopPropagation()
    })
    
}


