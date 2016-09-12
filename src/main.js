import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */

Vue.directive('load', {
    isFn : true,
    acceptStatement:true,
    update : function(fn) {
        if(typeof fn !== 'function') {
            return console.error('The param of directive "v-load" must be a function!');
        }
        window.addEventListener('load', fn,false) 
    }
});

new Vue({
  el: 'body',
  components: { App }
})
var init=()=>{
    var startX,startY,endX,endY,current_page=1,
    page=document.getElementsByClassName('page'),
    pointer=document.getElementById('pointer'),
    page_count=page.length,
    container=document.getElementById('app');
    document.addEventListener('touchstart', (ev)=>{
        startX = ev.touches[0].pageX;
        startY = ev.touches[0].pageY;  
    }, false);
    document.addEventListener('touchend', (ev)=>{
        endX = ev.changedTouches[0].pageX;
        endY = ev.changedTouches[0].pageY;
        getDeg();
    },false);
    var getDeg=()=>{
    	var x,y;
        x=endX - startX;
        y=startY - endY;
        var deg=Math.atan2(y, x)*180/Math.PI,
        result;
        if(deg>=45&&deg<135) {
            result=1;
        } else if(deg>=135 || deg<-135) {
            result=2;
        } else if(deg>=-135&&deg<-45) {
            result=3;
        } else if(deg>=-45&&deg<45){
            result=4;
        }
        switching(result);
    }
    var switching=(result)=>{
        if (result==1) {
        	moveDown()
        } else if(result==3){
         	moveUp()
        } else {
            ev
        }
        container.className=' slide_to_' + current_page;
    }
    var moveDown=()=> { 
        if(current_page == page_count) {
            return;
        }
        page[current_page-1].className="page";
        page[current_page].className="page current";
        current_page++;
    }

    var moveUp=()=>{ 
        if(current_page == 1) { 
            return;
        }
        current_page--;
        page[current_page-1].className="page current";
        page[current_page].className="page";
    }
}
init();
