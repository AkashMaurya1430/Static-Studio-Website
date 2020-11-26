var x = window.matchMedia("(max-width: 800px)")
function scrollShowcase(){
    let showcase_container = document.getElementById('showcase-container');
    if(x.matches){
        showcase_container.scrollLeft += 200;
    } else {
        showcase_container.scrollLeft += 200;
    }
}
