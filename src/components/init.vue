<template>
	<div v-if="show" v-load="loading"  class="init">
		<div class="load">
			<div class="muxi">
				<img src="../assets/muxi.gif" height="167" width="150">
			</div>
			<div class="loading_inner"></div>
			<div class="load_cont v_center">
				<div v-bind:style="{ width: width+'%'}" class="loading"></div>
			</div>
			<div class="loading_empty"></div>
		</div>
	</div>
</template>

<script>
export default {
    props: ['control'],
    data(){
        return {
            width: this.control.width[0],
            loaded: this.control.load[0],
            show: this.control.show[0]
        }
    },
    methods:{
        loading(){
            var self=this;
            var random =(min, max)=>{
                return Math.floor(Math.random() * (max - min + 1) + min);
            };
            // 跑进度
            setTimeout(()=>{
                if(self.load=true){
                    self.width = '0';
                    self.show=false;
                    return;
                }
            },2000)
            var onprogress = ()=> {
                //这里会创建多个定时器，方法欠妥
                setTimeout(()=>{
                    var progress = random(1, 2);
                    if(self.width <10){
                        self.width = 10;
                    }
                    self.width -= progress;
                    onprogress();
                },30);
            };
            // 开始跑进度
            onprogress();
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../../static/common.scss';
@import '../../static/mixins/_sprite.scss';

.init {
	width: 100%;
	height: 100%;
	position: relative;
}
.load {
	position: absolute;
	top: y_size(526);
	width: 100%;
	height: y_size(219);
}
.muxi {
	text-align: center;
}
.load_cont,.loading_empty,.loading_inner {
	position: absolute;
	width: 100%;
	height: 14.16%;
}
.loading {
	height: 100%;
	position: absolute;
	right: 0;
	background-color: #404967;
}
.loading_empty {
	@include _sprite($loading,31px);
}
.load_cont {
	width: 15.2vh;
	border-radius: 5vh;
}
.loading_inner {
	@include _sprite($loading_inner,31px);
}
</style>