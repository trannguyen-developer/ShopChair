// slide 
const trademarkList = document.querySelector('.trademark-list')
const trademarkItems = document.querySelectorAll('.trademark-item')

const dotList = document.querySelector('.dot-slide')

const arrDotSlide = [0, 1, 2, 3]


let index = 0;

setInterval(() => {
    index++
    trademarkList.style.transform = `translateX(-${index*20}%)`
    trademarkList.style.transition = '0.7s'
}, 2000)

// mấu chốt slide intify loop 
trademarkList.addEventListener('transitionend', function() {
    if(index === trademarkItems.length/2) {
        trademarkList.style.transition = 'none';
        index = 0;
        trademarkList.style.transform = `translateX(-${index*20}%)`
    }
})

// slider banner
const slideList = document.querySelector('.banner__img-left ul')
const slideItems = document.querySelectorAll('.banner__img-left ul li')

let indexSlider = 0

function renderSlide(index) {
    slideList.style.transform = `translateX(-${index * 100}%)`
    const dots = arrDotSlide.map(dot => `<li class="dot ${dot==index ? 'active' : ''}" onclick="clickDotSlide(${dot})"></li>`)
    dotList.innerHTML = dots.join('')
}

renderSlide(indexSlider)

function clickDotSlide(dot) {
    indexSlider = dot
    renderSlide(indexSlider)

}

setInterval(() => {
    indexSlider ++
    if(indexSlider >= arrDotSlide.length) {
        indexSlider = 0
    }
    renderSlide(indexSlider)
    
},3000)

// load more item

const arrProduct1 = [
    {
        img: './assest/img/product5.jpg',
        name: 'Modular Modern',
        price: 4.67,
        discount: 3.00,

    },
    {
        img: './assest/img/product4.jpg',
        name: 'Modular Modern',
        price: 4.67,
        discount: 3.00,

    },
    {
        img: './assest/img/product1.jpg',
        name: 'Modular Modern',
        price: 4.67,
        discount: 3.00,

    },
    {
        img: './assest/img/product2.jpg',
        name: 'Modular Modern',
        price: 4.67,
        discount: 3.00,

    },
    {
        img: './assest/img/product3.jpg',
        name: 'Modular Modern',
        price: 4.67,
        discount: 3.00,

    },
]

const arrProduct2 = [
    {
        img: './assest/img/product1.jpg',
        name: 'Modular Modern',
        price: 4.67,
        discount: 3.00,

    },
    {
        img: './assest/img/product2.jpg',
        name: 'Modular Modern',
        price: 4.67,
        discount: 3.00,

    },
    {
        img: './assest/img/product5.jpg',
        name: 'Modular Modern',
        price: 4.67,
        discount: 3.00,

    },
    {
        img: './assest/img/product4.jpg',
        name: 'Modular Modern',
        price: 4.67,
        discount: 3.00,

    },
    {
        img: './assest/img/product3.jpg',
        name: 'Modular Modern',
        price: 4.67,
        discount: 3.00,

    },
]

const arrProduct3 = [
    {
        img: './assest/img/product1.jpg',
        name: 'Modular Modern',
        price: 4.67,
        discount: 3.00,

    },
    {
        img: './assest/img/product4.jpg',
        name: 'Modular Modern',
        price: 4.67,
        discount: 3.00,

    },
    {
        img: './assest/img/product2.jpg',
        name: 'Modular Modern',
        price: 4.67,
        discount: 3.00,

    },
    {
        img: './assest/img/product3.jpg',
        name: 'Modular Modern',
        price: 4.67,
        discount: 3.00,

    },
    {
        img: './assest/img/product5.jpg',
        name: 'Modular Modern',
        price: 4.67,
        discount: 3.00,

    },
]

let arrProduct = [...arrProduct1]
const productMain = document.querySelector('#product-main')
const btnLoadMoreProduct = document.querySelector('.product__load-more-item_link')

function renderProduct(data) {
    const renderHTMLProduct = data.map((child, index) => `
        <div class="col l-2-4 m-3 c-6 wrap-product" >
            <a href="#" class="product-item-img_link">
                <img class="product-item-img"
                src=${child.img}
                alt="product">
                    <div href="#" class="product-addtocart">
                        <i class="product-addtocart-icon fas fa-shopping-cart"></i>
                        ADD TO CART
                    </div>
                <div class="product-active">
                    <div href="#" class="product-active_link">
                        <i class="product-active-icon fas fa-heart"></i>
                    </div>
                    <div href="#" class="product-active_link ">
                        <i class="product-active-icon fas fa-random"></i>
                    </div>
                    <div href="#" class="product-active_link">
                        <i class="product-active-icon far fa-eye"></i>
                    </div>
                </div>
            </a>
            <h4 class="product-item-name">
                <a href="#" class="product-item-name_link">
                    ${child.name}
                </a>
            </h4>
            <div class="product-price">
                <span class="product-price-old">$ ${child.price}</span>
                <span class="product-price-current">$ ${child.discount}</span>
            </div>
            <div class="product-ratting">
                <i class="product-ratting-icon fas fa-star"></i>
                <i class="product-ratting-icon fas fa-star"></i>
                <i class="product-ratting-icon fas fa-star"></i>
                <i class="product-ratting-icon fas fa-star"></i>
                <i class="product-ratting-icon fas fa-star"></i>
            </div>
        </div>
    `)

    productMain.innerHTML = renderHTMLProduct.join('')

}

renderProduct(arrProduct)

let countClickBtn = 0
btnLoadMoreProduct.addEventListener('click', function() {
    countClickBtn ++
    if(countClickBtn === 1) {
        arrProduct = arrProduct.concat(arrProduct2)
        renderProduct(arrProduct)
    }
    if(countClickBtn === 2) {
        arrProduct = arrProduct.concat(arrProduct3)
        renderProduct(arrProduct)
        this.textContent = 'ALL READY'
        this.style.cssText = `
            color: white;
            background: #e34444;
        `
    }
})

// window scroll
const btnBackToTop = document.querySelector('.btn__heading-web')
window.addEventListener('scroll', function() {
    if(this.scrollY > 800) {
        btnBackToTop.style.display = 'block'  
    } else {
        btnBackToTop.style.display = 'none'

    }
})
