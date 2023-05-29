// Sticky bar hide and show event
let stickyBarPdp = document.querySelector(".js--sticky-wrapper");
if (stickyBarPdp) {
    window.addEventListener("scroll", function (e) {
        let mainProductTopHeight = (document.querySelector(".container .buy-buttons-row").offsetTop + document.querySelector(".container .buy-buttons-row").offsetHeight) + (document.querySelector("#shopify-section-header").offsetHeight + document.querySelector("#shopify-section-header").offsetTop);

        if ($(document).find(".section-special-product-banner").length) {
            if (window.innerWidth > 767) {
                mainProductTopHeight = (document.querySelector(".section-special-product-banner").offsetHeight) - (document.querySelector("#shopify-section-header").offsetHeight - document.querySelector("#shopify-section-announcement-bar").offsetHeight + 200);
            } else {
                mainProductTopHeight = (document.querySelector(".section-special-product-banner").offsetHeight) - (document.querySelector("#shopify-section-header").offsetHeight - document.querySelector("#shopify-section-announcement-bar").offsetHeight + 100);
            }
        } else {
            mainProductTopHeight = (document.querySelector(".container .buy-buttons-row").offsetTop + document.querySelector(".container .buy-buttons-row").offsetHeight);
        }
        if (window.pageYOffset >= mainProductTopHeight) {
            stickyBarPdp.classList.add("is-sticky");
        } else {
            stickyBarPdp.classList.remove("is-sticky");
        }

    });
}

// sticky add to cart click to main cart

if (document.querySelector(".js-add-to-cart-sticky-button")) {
  let stickAddToCartButton = document.querySelector(".js-add-to-cart-sticky-button");
  stickAddToCartButton.addEventListener("click", _scrollToProductVariant.bind());

  function _scrollToProductVariant() {
      if (window.scrollY > 700) {
          let scrollToElement = document.querySelector(".product-form");
          //scrollToElement.scrollIntoView({behavior: 'smooth'})
          $('html, body').animate({
              scrollTop: $(scrollToElement).offset().top
          }, 750);
      }
  }
}


// direct add to cart

if (document.querySelector(".js-add-to-cart-sticky-button")) {
    let stickAddToCartButton = document.querySelector(".js-add-to-cart-sticky-button");
    stickAddToCartButton.addEventListener("click", _scrollToProductVariant.bind());
  
    function _scrollToProductVariant() {
        document.querySelector('.addToCart-button').click()
    }
  }


  <div class="sticky_bar_main js--sticky-wrapper">
    <div data-product-id="{{ product.id }}" class="sticky_bar" {% if animate %}data-cc-animate{% endif %}>
        <div class="sticky_bar_full">
            <div class="sticky_bar_left quickbuy-toggle">
                <div class="sticky_bar_img"><img loading="lazy" src="{{ product.featured_image | img_url }}"></div>
                 <div class="sticky_bar_mobile">  
                <div class="sticky_bar_left h5-style-bold ">{{- product.title -}}</div>
                <div class="price"><label>{{- product.price | money -}}</label> 
                {%- assign rating_count = product.metafields.reviews.rating_count | plus: 0 -%}
                    {%- if rating_count > 0 -%}
                      <div class="theme-product-reviews">
                        <a href="{{ product.url }}#shopify-product-reviews">
                          {% render 'rating', rating_value: product.metafields.reviews.rating.value %}
                          <span class="cc-rating-custom-caption">
                            {{ rating_count }} {{ 'products.product.reviews_link' | t: count: rating_count | downcase }}
                          </span>
                        </a>
                      </div>
                    {%- endif -%}</div>
                </div>

            </div>
            <div class="sticky_bar_right">
                <div class="quantity-submit-row input-row ">
                    <label class="label hidden" for="quantity">{{ 'products.product.quantity' | t }}</label>                    
                   
                    <div class="button_add_to_cart">
                        <div class="quantity-submit-row__submit input-row">
                            {%- capture add_to_cart_text -%}
                            {%- if product.template_suffix contains 'preorder' -%}
                            {{- 'products.product.preorder' | t -}}
                            {%- else -%}
                            {% if product.available == true %}
                              {{- 'products.product.add_to_cart' | t -}}
                            {% else %}
                            {{- 'products.labels.sold_out' | t -}}
                            {% endif %}
                            {%- endif -%}
                            {%- endcapture -%}
                            <button class="button button--large js-add-to-cart-sticky-button altcolour border_button_style btn btn--secondary" type="submit" >
                                {{- add_to_cart_text -}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>