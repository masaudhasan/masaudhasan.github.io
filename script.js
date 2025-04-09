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