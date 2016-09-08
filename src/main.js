import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
function init(){
    var startX,startY,endX,endY,current_page=1,
    page_count=document.getElementsByClassName('page').length,
    container=document.getElementById('app');
    document.addEventListener('touchstart', function (ev){
        ev.preventDefault();
        startX = ev.touches[0].pageX;
        startY = ev.touches[0].pageY;  
    }, false);

    document.addEventListener('touchend', function (ev){
        ev.preventDefault();
        endX = ev.changedTouches[0].pageX;
        endY = ev.changedTouches[0].pageY;
        getDeg();
    },false);
    function getDeg(){
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
        // getDeriction(result);
    }
    // function getDeriction(result){
    //     switch(result){
    //         case 1:
    //         console.log("向上");
    //         break;
    //         case 2:
    //         console.log("向左");
    //         break;
    //         case 3:
    //         console.log("向下");
    //         break;
    //         case 4:
    //         console.log("向右");
    //         break;
    //     }
    // }
    function switching(result){
        if (result==1) {
        	moveDown()
        } else if(result==3){
         	moveUp()
        } else {
            return;
        }
        container.className=' slide_to_' + current_page;
    }
    function moveDown() { //向下滑
        if(current_page == page_count) {
            return;
        }
        current_page++;
    }

    function moveUp() { //向上滑
        if(current_page == 1) { 
            return;
        }
        current_page--;
    }
}
init();
