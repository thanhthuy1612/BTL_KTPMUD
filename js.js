const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.body__page-item')
const panes = $$('.body__list-item')

tabs.forEach((tab, index) => {
    const pan = panes[index]
    tab.onclick = function () {
        $('.body__page-item.body__page-item--choose').classList.remove('body__page-item--choose')
        $('.body__list-item.body__list-item--choose').classList.remove('body__list-item--choose')
        this.classList.add('body__page-item--choose')
        pan.classList.add('body__list-item--choose')
    }
})




// const tab1 = $$('.list__menu-item')
// const pane1 = $$('.list_danhmux')

// tab1.forEach((tab2, index1) => {
//     tab2.onclick= function(){
//         $('.body_danhmuc').classList.add('body_danhmuc--delete')
//         tab1.forEach((tab2,index2) => {
//             tab2.classList.remove('list__menu--choose')
//         })
//         pane1.forEach((pane2,index2) => {
//             pane2.classList.remove('list_danhmux--choose')
//         })
//         const pan = pane1[index1]
//         this.classList.add('list__menu--choose')
//         pan.classList.add('list_danhmux--choose')
//     }
// })

// const tab = $$('.header__body-menu-tag')
// tab.forEach((tab3, index)=>{
//     tab3.onclick=function(){
//         $('.body_danhmuc').classList.add('body_danhmuc--delete')
//         tab1.forEach((tab2,index2) => {
//             tab2.classList.remove('list__menu--choose')
//         })
//         pane1.forEach((pane2,index2) => {
//             pane2.classList.remove('list_danhmux--choose')
//         })
//         const pan = pane1[index]
//         pan.classList.add('list_danhmux--choose')
//         const pans= tab1[index]
//         pans.classList.add('list__menu--choose')
//     }
// })
// var danhmuc = $('.header__footer-list1')
// console.log(danhmuc)
// danhmuc.onclick = function () {
//     $('.header__footer-list.header__footer-list--choose').classList.remove('header__footer-list--choose')
//     this.classList.add('header__footer-list--choose')
// }
const de=$$('.cart-nav2') 
de.forEach((tab,index) =>{
    tab.onclick = function() {
        $('.order1').classList.remove('delete')
        $('.order').classList.add('delete')
        $('.cart-list').classList.add('delete')
        $('.cart-img').classList.remove('delete')
        $('.cart-text').classList.remove('delete')
        $('.bill-cost2').classList.add('delete')
        this.classList.add('delete')
    }
})
function toast(){
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML=`
        <div class="toast__icon">
            <i class="fas fa-check-circle"></i>
        </div>
        <div class="toast__body">
            <p class="toast__title">Thành công</p>
            <p class="toast__msg">Thành công thêm vào giỏ hàng</p>
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>
        </div>
        `
        main.appendChild(toast);
        const autoRemoveId = setTimeout(function(){
            main.removeChild(toast);
        }, 4000)
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }
    }
}
const main1 = $$('.product-number');
const main2 = $$('.minus-btn');
const main3 = $$('.plus-btn');
const main4 = $$('.cart-list');
const main5 = $$('.cost1s');
const main6 = $$('.cost2s');
const main7 = $$('.cost3s');
var n = new Array(main2.length);
var i = new Array(main2.length);
var i1 = new Array(main2.length);
var n1 = 0;
for(var j = 0; j < main2.length; j++){
    n[j] = 1;
    i[j] = 25;
}
main7.forEach((main)=>{
    for(var j = 0; j < main2.length; j++){
        n1 += i[j]*n[j];
    }
    function number1(title){
        main.innerHTML=`<span>${title}</span>`
    }
    number1(n1);
})
main1.forEach((main,index) => {
    function number(title, index){
        main.innerHTML=`<p>${title}</p>`
    }
    number(n[index]);
});
main6.forEach((main,index)=>{
    function number1(title){
        main.innerHTML=`<span>${title}</span>`
    }
    number1(i[index]);
})
main2.forEach((main,index)=>{
    main.onclick = function (){
        n[index]--;
        if(n[index] < 1){
            function number(title){
                main1[index].innerHTML=`<p>${title}</p>`
            }
            number(0);
            n[index]=0;
            i1[index] = n[index] * i[index];
            if(main6){
                function cost(title){
                    main6[index].innerHTML=`<span>${title}</span>`
                }
                cost(i1[index]);
            }
        }
        else if(n[index] >0){
            function number(title){
                main1[index].innerHTML=`<p>${title}</p>`
            }
            number(n[index]);
            i1[index] = n[index] * i[index];
            if(main6){
                function cost(title){
                    main6[index].innerHTML=`<span>${title}</span>`
                }
                cost(i1[index]);
            }
            
        }
        n1=0;
        main7.forEach((main)=>{
            for(var j = 0; j < main2.length; j++){
                n1 += i[j]*n[j];
            }
            function number1(title){
                main.innerHTML=`<span>${title}</span>`
            }
            number1(n1);
        })
    }
})
main3.forEach((main,index)=>{
    main.onclick = function (){
        if(n[index] >= 0){
            n[index]++;
            function number(title){
                main1[index].innerHTML=`<p>${title}</p>`
            }
            number(n[index]);
            if(main6){
                i1[index] = n[index] * i[index];
                function cost(title){
                    main6[index].innerHTML=`<span>${title}</span>`
                }
                cost(i1[index]);
            }
        }
        n1=0;
        main7.forEach((main)=>{
            for(var j = 0; j < main2.length; j++){
                n1 += i[j]*n[j];
            }
            function number1(title){
                main.innerHTML=`<span>${title}</span>`
            }
            number1(n1);
        })
    }
})

main5.forEach((main,index)=>{
    function number1(title){
        main.innerHTML=`<span>${title}</span>`
    }
    number1(i[index]);
})

// function number(){
//     const main1 = $$('.product-number');
//     const main2 = $$('.minus-btn');
//     const main3 = $$('.plus-btn');
//     if(main1){
//         main1.forEach((num,index) => {
//             num[index].createElement('div');
            
//         });
//     }
// }

const puts = $$('.body__list-item--button');
puts.forEach((put,index)=>{
    put.onclick = function() {
        toast()
    }
})
const put1s = $$('.addToCart-btn');
put1s.forEach((put,index)=>{
    put.onclick = function() {
        toast()
    }
})
//thumbnail button for product

var thumb1 =  document.getElementById("thumb1");

var thumb2 =  document.getElementById("thumb2");

var thumb3 =  document.getElementById("thumb3");


if(thumb1){
    thumb1.addEventListener("mouseover",function(){
        document.getElementById("main-product-img").src = "./asset/img/product-img1.webp";
    })
    thumb2.addEventListener("mouseover",function(){
        document.getElementById("main-product-img").src = "./asset/img/product-img2.webp"
    })
    thumb3.addEventListener("mouseover",function(){
        document.getElementById("main-product-img").src = "./asset/img/product-img3.webp"
    })
}


// tab section
const dscTabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
dscTabs.forEach(dscTab =>{
    dscTab.addEventListener('click', () => {
        const target = document.querySelector(dscTab.dataset.tabTarget);
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('active')
        })
        dscTabs.forEach(dscTab =>{
            dscTab.classList.remove('active')
        })
        dscTab.classList.add('active')
        target.classList.add('active')
    })
})

const del = $$('.delete-x');
const de1 = $$('.cart-list1')
var t = del.length;
console.log(t);
del.forEach((de, index)=>{
    de.onclick = function(){
        if(t > 1){
            de1[index].classList.add('delete')
            t--;
        }
        else if(t = 1){
                $('.order1').classList.remove('delete')
                $('.order').classList.add('delete')
                $('.cart-list').classList.add('delete')
                $('.cart-img').classList.remove('delete')
                $('.cart-text').classList.remove('delete')
                $('.bill-cost2').classList.add('delete')
                $('.cart-nav2').classList.add('delete')
        }
    }
    
})

const list1 = $$('.body__list-item');
const list2 = $$('.body__list-item--buy');
var l1 = 0;
var l2 = 0;
// list1.forEach((list,index)=>{
//     if(Math.floor(l1/20)){

//     }
// })



//
