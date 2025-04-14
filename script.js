// Header manage 
let menuBar=document.querySelectorAll(".menu a");
let sections=document.querySelectorAll("section");
let logo=document.querySelector(".logo");

let navLogo=document.querySelector("#menuIcon");
let responsiveNav=document.querySelector("header .menu");

menuBar.forEach(btn=> {
    btn.addEventListener('click', ()=>{
        menuBar.forEach(btn=>{
            btn.classList.remove('menuActive');
        });
        btn.classList.add('menuActive');
        sections.forEach(value =>{
            value.classList.remove('active');
        })
        let txt="."+btn.innerText; txt=txt.toLowerCase();
        console.log(txt);
        document.querySelector(txt).classList.add('active');

        navLogo.classList.remove("bx-x");
    responsiveNav.classList.remove("menuBarActive");
    });
});
logo.addEventListener('click', ()=>{
    menuBar.forEach(btn=>{
        btn.classList.remove('menuActive');
    });
    menuBar[0].classList.add('menuActive');
    sections.forEach(value =>{
        value.classList.remove('active');
    });
    document.querySelector(".home").classList.add('active');
});

// Responsive Navbar 

navLogo.addEventListener('click',()=>{
    navLogo.classList.toggle("bx-x");
    responsiveNav.classList.toggle("menuBarActive");
});
// Skills Section 
let resumeBtn=document.querySelectorAll(".resume button");
let resumeContentBox=document.querySelectorAll(".resumeContentBox");

resumeBtn.forEach(btn=> {
    btn.addEventListener('click', ()=>{
        resumeBtn.forEach(btn=>{
            btn.classList.remove('resumeActive');
        });
        btn.classList.add('resumeActive');
        resumeContentBox.forEach(value =>{
            value.classList.remove('resumeActive');
        })
        let txt=".resumeContentBox"+btn.innerText;
        document.querySelector(txt).classList.add('resumeActive');
    });
});

// work img slider
let imgSliderLeftBtn=document.querySelectorAll(".workImgSliderControl button")[0];
let imgSliderRightBtn=document.querySelectorAll(".workImgSliderControl button")[1];
let sliderLength=document.querySelectorAll(".workImgSlider .imgItem").length - 1;

let workTxtBox=document.querySelectorAll(".workTxtBox");

let workImgSlider=document.querySelector(".workImgSlider");
let sliderIdx=0;

let sliderFunc=()=>{
    workImgSlider.style.transform= `translateX(calc(${sliderIdx * -100}% - ${sliderIdx*2}rem))`;
    workTxtBox.forEach(val=>{
        val.classList.remove("workActive");
    });
    document.querySelector(`.workTxtBox${sliderIdx+1}`).classList.add("workActive");
    if(sliderIdx>0){
        imgSliderLeftBtn.classList.remove("disableBtn");
    }
    else{
        imgSliderLeftBtn.classList.add("disableBtn");
    }
    
    if(sliderIdx<sliderLength){
        imgSliderRightBtn.classList.remove("disableBtn");
    }
    else{
        imgSliderRightBtn.classList.add("disableBtn");
    }
}

imgSliderLeftBtn.addEventListener('click',()=>{
    if(sliderIdx>0){
        sliderIdx--;
        sliderFunc();
    }
    else{
        sliderIdx=0;
        sliderFunc();
    }
});
imgSliderRightBtn.addEventListener('click',()=>{
    if(sliderIdx<sliderLength){
        sliderIdx++;
        sliderFunc();
    }
    else{
        sliderIdx=sliderLength;
    }
});