// main parant add attribute "data-equle"

window.setGridHeight = (selector) =>{
    this.heightArray = [];
    this.offsetArrayArray = [];
    this.sectionArray = [];
  
  
    document.querySelectorAll('.product-item__info-inner').forEach((hight,i)=>{
      var tmp = {'index':i,'offsetheight':hight.closest(`.product-item`).offsetTop};
      this.offsetArrayArray.push(tmp)
    });
  
    this.diffrentsHeights = []
    this.offsetArrayArray.forEach(function(e){
      if(this.diffrentsHeights.includes(e.offsetheight) == false){
        this.diffrentsHeights.push(e.offsetheight)
      }
    })
  
    this.diffrentsHeights.forEach(function(e){
      var data = [];
      for(var i = 0; i < this.offsetArrayArray.length; i++){
        if(this.offsetArrayArray[i].offsetheight == e){
          data.push(this.offsetArrayArray[i]);
        }
      }
  
      var getAllHeightArray = [];
      data.forEach(function(ele){
        document.querySelectorAll(selector)[ele.index].removeAttribute('style');
        getAllHeightArray.push(document.querySelectorAll(selector)[ele.index].offsetHeight);
      })
  
      var getMaxHeight = Math.max.apply(Math, getAllHeightArray);
      data.forEach(function(ele){
        document.querySelectorAll(selector)[ele.index].style.minHeight = getMaxHeight+'px';
      });
    })
  
   console.log('setGridHeight');

  }

window.setGridHeight('.product-item__info-inner');
