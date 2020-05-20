
//onload
window.addEventListener('load',endLoading);


function endLoading(e)
{
    console.log(e);
    myFunction();

    let animatedInput = document.querySelector('#myText');


    animatedInput.addEventListener('focus', function (e) {
        // console.log('aha kimse yazi yazir [focus]');
    
        let el = e.currentTarget;
    
        let parent = el.parentElement;
    
        parent.classList.add('active');
    
    });
    
    
    animatedInput.addEventListener('blur', function (e) {
        // console.log('fikrini deyishdi [blur]');
        let el = e.currentTarget;
    
        if (el.value.length > 0)
            return;
    
        let parent = el.parentElement;
    
        parent.classList.remove('active');
    
    });

}


function myFunction()
{
    //.....
}