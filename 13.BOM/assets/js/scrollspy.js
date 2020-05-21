window.addEventListener('scroll', function (e) {

    let home = document.querySelector('#home');
    let services = document.querySelector('#services');
    let about = document.querySelector('#about');

    let diff = window.scrollY + 80;

    // console.log(diff, about.offsetTop);

    if (diff >= about.offsetTop) {
        let id = about.getAttribute('id');

        document.querySelectorAll('header a[href].active').forEach(function (el) {
            el.classList.remove('active');
        });

        document.querySelector(`[href="#${id}"]`).classList.add('active');
    }
    else if (diff >= services.offsetTop) {
        let id = services.getAttribute('id');

        document.querySelectorAll('header a[href].active').forEach(function (el) {
            el.classList.remove('active');
        });

        document.querySelector(`[href="#${id}"]`).classList.add('active');
    }
    else if (diff >= home.offsetTop) {
        let id = home.getAttribute('id');

        document.querySelectorAll('header a[href].active').forEach(function (el) {
            el.classList.remove('active');
        });

        document.querySelector(`[href="#${id}"]`).classList.add('active');
    }


});



document.querySelectorAll('header a[href]').forEach(function(el){

    el.addEventListener('click',function(e){
        e.preventDefault();
    
        let element = e.currentTarget;
        let href = element.getAttribute('href');
        //#about
    
        let section = document.querySelector(`${href}`);
    
        if(section!=null)
        {
            let offsetTop = section.offsetTop;
    
            window.scrollTo({
                top: offsetTop,
                left: 0,
                behavior: 'smooth'
              });
        }
    });
    
        
    });