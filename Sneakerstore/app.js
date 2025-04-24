const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1, 
        title: "Stars",
        price: 2403, 
        colors: [
            {
                code: "mightnight blue",
                img: "./img/Product/star loverses.png",
            },
            {
                code: "navy",
                img: "./img/Product/star loverses2.png",
            },
        ],
    },
    {
        id: 2, 
        title: "Moons",
        price: 6013, 
        colors: [
            {
                code: "purple",
                img: "./img/Product/moon loverses.png",
            },
            {
                code: "beige",
                img: "./img/Product/moon loverses2.png",
            },
        ],
    },
    {
        id: 3, 
        title: "Sea Life",
        price: 7009, 
        colors: [
            {
                code: "stingray",
                img: "./img/Product/sea life loverses.png",
            },
            {
                code: "ecosystem",
                img: "./img/Product/sea life loverses2.png",
            },
        ],
    },
    {
        id: 4, 
        title: "Flowers",
        price: 1230, 
        colors: [
            {
                code: "cream",
                img: "./img/Product/flower loverses.png",
            },
            {
                code: "lightgray",
                img: "./img/Product/flower loverses.png",
            },
        ],
    },
    {
        id: 5, 
        title: "Glibli",
        price: 1209, 
        colors: [
            {
                code: "Kiki",
                img: "./img/Product/glibli loverses.png",
            },
            {
                code: "Totoro",
                img: "./img/Product/glibli loverses.png",
            },
        ],
    }
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
  
        
        // change the choosen product
        choosenProduct = products[index];

        // change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "RM" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // assign new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const purchaseButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

purchaseButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});



        