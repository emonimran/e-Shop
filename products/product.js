function myFunction (smallImage) {
    let largeImage = document.querySelector(".main-image");
    largeImage.src = smallImage.src;
}

let products = document.getElementById("products-list");

let productData = [
    {
        id: 123,
        name: "Gel Cream",
        price: 45,
        actualPrice: 60,
        img: "../Images/1.jpg",
    },
    {
        id: 234,
        name: "Gel Cleanser",
        price: 50,
        actualPrice: 65,
        img: "../Images/2.png",
    },
    {
        id: 345,
        name: "T-shirt",
        price: 100,
        actualPrice: 130,
        img: "../Images/3.jpg",
    },
    {
        id: 567,
        name: "Centella",
        price: 75,
        actualPrice: 100,
        img: "../Images/4.jpg",
    },
];

let generateProducts = () => {
    return (products.innerHTML = productData.map((x)=>{
        let { id, name, price, desc, img} = x;
        return `
        <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="card">
                <a href="../Ecommerce/products/product.html"><img src="${img}" class="card-img-top arrival-card" alt="..." height="300px"></a>
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text fw-bolder text-danger fs-2">$ ${price} <span class="actual-price text-muted"><del>$ ${x.actualPrice}</del></span></p>
                  <p class="card-text"> Rating:
                    <i class="fas fa-star fa-sm text-warning"></i>
                    <i class="fas fa-star fa-sm text-warning"></i>
                    <i class="fas fa-star fa-sm text-warning"></i>
                    <i class="fas fa-star fa-sm text-warning"></i>
                    <i class="fas fa-star fa-sm text-warning"></i> (25 Reviews)</p>
                </div>
              </div>
            </div>
        `
    }).join(""));
};

generateProducts();

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const quantity = document.querySelector(".quantity");

let a = 0;

plus.addEventListener("click", () => {
    a++;
    if (a<10){
        a = "0" + a;
    }

    quantity.innerText = a;
    console.log(a);
});

minus.addEventListener("click", ()=> {
    a--;
    if (a <= 0){
        a = 00;
    } else if (a > 0 && a < 10){    
        a = "0" + a;
    }

    quantity.innerText = a;
});