// scrolling js   
const internalLinks = document.querySelectorAll('.product-scrollButtons__button[data-click-to-jump-link]');

internalLinks.forEach((link) => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    if(this.getAttribute("data-href") == ""){
      return;
    }
    let targetOffset = document.querySelector(`#${this.getAttribute("data-href")}`).offsetTop;
    // console.log(targetOffset)
    let headerOffset = document.querySelector('#shopify-section-header').offsetHeight  - 20;
    // console.log(headerOffset)
    window.scroll({
      top:  (targetOffset - headerOffset),
      behavior: 'smooth'
    })
  })
})



<a class="product-scrollButtons__button" data-click-to-jump-link data-href="#description" href="javascript:void(0);">Description</a> 

<section id="description">
  //Data
</section>


