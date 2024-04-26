document.addEventListener('DOMContentLoaded', function (){
    window.addEventListener('scroll', function(){
        const navbar = document.querySelector('.navbar');
        const scrollUpBtn = document.querySelector('.scroll-up-btn');
        if(this.window.scrollY > 50){
            navbar.classList.add('sticky');
        }else{navbar.classList.remove('sticky')}
        if(this.window.scrollY > 500){
            scrollUpBtn.classList.add('show');
        }else{scrollUpBtn.classList.remove('show')}
    })
});