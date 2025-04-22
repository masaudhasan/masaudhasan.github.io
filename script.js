// Webpage Landing Effects and Animation

const styl=document.createElement('style');
styl.innerHTML=`
    @keyframes enterTtB{
    0%{
        opacity: 0;
        transform: translateY(-2rem);
    }
    85%{
        transform: translateY(0rem);
    }
    100%{
        opacity: 1;
    }
}
@keyframes enterBtT{
    0%{
        opacity: 0;
        transform: translateY(2rem);
    }
    85%{
        transform: translateY(0rem);
    }
    100%{
        opacity: 1;
    }
}
@keyframes enterLtR{
    0%{
        opacity: 0;
        transform: translateX(-2rem);
    }
    85%{
        transform: translateX(0rem);
    }
    100%{
        opacity: 1;
    }
}
@keyframes enterRtL{
    0%{
        opacity: 0;
        transform: translateX(2rem);
    }
    85%{
        transform: translateX(0rem);
    }
    100%{
        opacity: 1;
    }
}`;
document.head.appendChild(styl);
// Header manage 
let menuBar=document.querySelectorAll(".menu a");
let sections=document.querySelectorAll("section");
let logo=document.querySelector(".logo");

let navLogo=document.querySelector("#menuIcon");
let responsiveNav=document.querySelector("header .menu");

menuBar.forEach(btn=> {
    btn.addEventListener('click', ()=>{
        styl.remove();
        menuBar.forEach(btn=>{
            btn.classList.remove('menuActive');
        });
        btn.classList.add('menuActive');
        sections.forEach(value =>{
            value.classList.remove('active');
        })
        let txt="."+btn.innerText; txt=txt.toLowerCase();
        document.querySelector(txt).classList.add('active');

        navLogo.classList.remove("bx-x");
        if(navLogo.classList.contains("bx-x")){
            responsiveNav.classList.add("menuBarActive");
        }
        else{
            responsiveNav.classList.add("menuOutAnimate");
            setTimeout(()=>{
                responsiveNav.classList.remove("menuBarActive");
                responsiveNav.classList.remove("menuOutAnimate");
            },400);
        }
        document.head.appendChild(styl);
    });
});
logo.addEventListener('click', ()=>{
    styl.remove();
    menuBar.forEach(btn=>{
        btn.classList.remove('menuActive');
    });
    menuBar[0].classList.add('menuActive');
    sections.forEach(value =>{
        value.classList.remove('active');
    });
    
    document.querySelector(".home").classList.add('active');

    navLogo.classList.remove("bx-x");
    if(navLogo.classList.contains("bx-x")){
        responsiveNav.classList.add("menuBarActive");
    }
    else{
        responsiveNav.classList.add("menuOutAnimate");
        setTimeout(()=>{
            responsiveNav.classList.remove("menuBarActive");
            responsiveNav.classList.remove("menuOutAnimate");
        },400);
    }
    setTimeout(()=>{
        document.head.appendChild(styl);
    },0);
});

// Responsive Navbar 

navLogo.addEventListener('click',()=>{
    navLogo.classList.toggle("bx-x");
    // navLogo.classList.add("menuIconAnimate");
    if(navLogo.classList.contains("bx-x")){
        responsiveNav.classList.add("menuBarActive");
    }
    else{
        responsiveNav.classList.add("menuOutAnimate");
        setTimeout(()=>{
            responsiveNav.classList.remove("menuBarActive");
            responsiveNav.classList.remove("menuOutAnimate");
        },500);
    }
    // setTimeout(()=>{
    //     navLogo.classList.remove("menuIconAnimate");
    // }, 500);
});
// Resume Section 
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
