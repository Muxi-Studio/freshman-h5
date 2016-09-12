<template>
	<div v-load="show" :class="hide" id="app">
	   <init :control='control'></init>
	   <home :control='control'></home>
	   <group_2></group_2>
	   <group_3></group_3>
	   <product></product>
	   <design></design>
	   <front_end></front_end>
	   <back_end></back_end>
	   <android></android>
	   <hack></hack>
	</div>
</template>

<script>
import init from './components/init'
import Home from './components/Home'
import Group_2 from './components/Group_2'
import Group_3 from './components/Group_3'
import Product from './components/Product'
import Design from './components/Design'
import Front_end from './components/Front_end'
import Back_end from './components/Back_end'
import Android from './components/Android'
import Hack from './components/Hack'

export default {
	data(){
		return {
			control: {
				hide: 'hide',
				width: [90],
				load: [false],
				show: [true]
			}
		}
	},
	components: {
		init,
		Home,
		Group_2,
		Group_3,
		Product,
		Design,
		Front_end,
		Back_end,
		Android,
		Hack
	},
	methods: {
		show(){
			this.control.load.$set(0,true);
		}
	}
}
</script>

<style lang='scss'>
@import '../static/common.scss';
@import '../static/mixins/_sprite.scss';

/*reset*/
@font-face {
	font-family: 'zcool';
	src: url('../static/font.ttf') format('truetype');
}

html,body {
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
	z-index: -300;
	font-size: calc(16px + 4.2vh);
}
body {
	margin: 0;
	padding: 0;
	background: url('sprite/sprite.png') no-repeat;
	background-size:100%;
	@include sprite__position($bg,1334px);
}
a {
	outline: none;
	text-decoration: none;
}
.hide {
	display: none;
}
#app {
	width: 100%;
	height: 100%;
	z-index: -200;
	margin: 0 auto;
	font-family: 'zcool';
}

/*this page*/
.next_bt {
	width: 1.5rem;
	height: 2.6rem;
	opacity: 0;
	filter: alpha(opacity=0);
	position: absolute;
	z-index: -50;
	bottom: 1.47rem;
	left: -webkit-calc(50% - 0.54rem);
	left: calc(50% - 0.54rem);
	background: url('sprite/sprite.png') no-repeat;
	@include sprite__size($next_bt,167px);
    -webkit-animation: next_bt_translateY .9s  linear 1.2s infinite;
            animation: next_bt_translateY .9s  linear 1.2s infinite;
	-webkit-animation-fill-mode: forwards;
	        animation-fill-mode: forwards; 
	        @include eliminate_flash;
}

/*class*/
.v_center {
	left: 50%;
	-webkit-transform: translateX(-50%);
	    -ms-transform: translateX(-50%);
	        transform: translateX(-50%);
	white-space:nowrap;  
}
.color_yellow {
	color: rgb(255, 231, 95);
}
.color_orange {
	color: rgb(247, 100, 65);
}
.color_red {
	color: rgb(255, 115, 247);
}
.color_brown {
	color: rgb(186, 107, 23);
}
.color_green {
	color: rgb(73, 186, 23);
}
.color_blue {
	color: rgb(1, 244, 255);
}

.txt {
	position: absolute;
}
.page {
	width: 100%;
	height: 100%;
	position: relative;
	z-index: -100;
}

/*common*/
.line {
	display: inline-block;
	width: .2rem;
	height: .1rem;
}
.line_top {
	border-top: .08rem solid;
}
.line_bottom {
	border-bottom: .08rem solid;
}
.line_box_before,
.line_box_after {
	display: inline-block;
	font-size: 0;

}
.line_box_before {
	margin-right: -.2rem;
}
.line_box_after {
	margin-left: -.2rem;
}

/*animation class*/
.current {
	.fade_in_count_3 {
		-webkit-animation: fade_in_count 1.2s  linear .3s 3;
		        animation: fade_in_count 1.2s  linear .3s 3;
		-webkit-animation-fill-mode: forwards;
		        animation-fill-mode: forwards;
		      
	}
	.fade_in_delay_3 {
		opacity: .5;
		filter: alpha(opacity=.5);
		-webkit-animation: fade_in 1.2s  linear .3s 1;
		        animation: fade_in 1.2s  linear .3s 1;
		-webkit-animation-fill-mode: forwards;
		        animation-fill-mode: forwards;
		
	}
	.fade_in_delay_6 {
		opacity: 0;
		filter: alpha(opacity=0);
		-webkit-animation: fade_in 1.2s  linear .6s 1;
		        animation: fade_in 1.2s  linear .6s 1;
		-webkit-animation-fill-mode: forwards;
		        animation-fill-mode: forwards;      
	}
	.fade_in_delay_12 {
		opacity: 0;
		filter: alpha(opacity=0);
		-webkit-animation: fade_in .9s  linear 1.2s 1;
		        animation: fade_in .9s  linear 1.2s 1;
		-webkit-animation-fill-mode: forwards;
		        animation-fill-mode: forwards;  
	}
	.fade_in_delay_21 {
		-webkit-animation: fade_in .9s  linear 2.1s 1;
		        animation: fade_in .9s  linear 2.1s 1;
		-webkit-animation-fill-mode: forwards;
		        animation-fill-mode: forwards;      
	}
	.txt_fade_in_delay_9 {
		opacity: 0;
		filter: alpha(opacity=0);
		-webkit-animation: fade_in .9s  linear .9s 1;
		        animation: fade_in .9s  linear .9s 1;
		-webkit-animation-fill-mode: forwards;
		        animation-fill-mode: forwards;   
	}
	.txt_fade_in_delay_12 {
		opacity: 0;
		filter: alpha(opacity=0);
		-webkit-animation: fade_in 1.2s  linear 1.2s 1;
		        animation: fade_in 1.2s  linear 1.2s 1;
		-webkit-animation-fill-mode: forwards;
		        animation-fill-mode: forwards;     
	}
	.txt_fade_in_delay_15 {
		opacity: 0;
		filter: alpha(opacity=0);
		-webkit-animation: fade_in 1.5s  linear 1.5s 1;
		        animation: fade_in 1.5s  linear 1.5s 1;
		-webkit-animation-fill-mode: forwards;
		        animation-fill-mode: forwards;      
	}
	.txt_fade_in_delay_18 {
		opacity: 0;
		filter: alpha(opacity=0);
		-webkit-animation: fade_in 1.8s  linear 1.8s 1;
		        animation: fade_in 1.8s  linear 1.8s 1;
		-webkit-animation-fill-mode: forwards;
		        animation-fill-mode: forwards;      
	}
}
.slide_to_1 {
    -webkit-transform: translateY(0%);
        -ms-transform: translateY(0%);
            transform: translateY(0%); }

.slide_to_2 {
    -webkit-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
            transform: translateY(-100%); }

.slide_to_3 {
    -webkit-transform: translateY(-200%);
        -ms-transform: translateY(-200%);
            transform: translateY(-200%); }

.slide_to_4 {
    -webkit-transform: translateY(-300%);
        -ms-transform: translateY(-300%);
            transform: translateY(-300%); }

.slide_to_5 {
    -webkit-transform: translateY(-400%);
        -ms-transform: translateY(-400%);
            transform: translateY(-400%); }
.slide_to_6 {
    -webkit-transform: translateY(-500%);
        -ms-transform: translateY(-500%);
            transform: translateY(-500%); }
.slide_to_7 {
    -webkit-transform: translateY(-600%);
        -ms-transform: translateY(-600%);
            transform: translateY(-600%); }
.slide_to_8 {
    -webkit-transform: translateY(-700%);
        -ms-transform: translateY(-700%);
            transform: translateY(-700%); }
.slide_to_9 {
    -webkit-transform: translateY(-800%);
        -ms-transform: translateY(-800%);
            transform: translateY(-800%); }

/*animation*/
@-webkit-keyframes fade_in_count
{
	0 {
		opacity: 0;
		filter: alpha(opacity=0);
	}
	50% {
		opacity: .5;
		filter: alpha(opacity=.5);
	}
	100% {
		opacity: 1;
		filter: alpha(opacity=1);
	}
}
@keyframes fade_in_count
{
	0 {
		opacity: 0;
		filter: alpha(opacity=0);
	}
	50% {
		opacity: .5;
		filter: alpha(opacity=.5);
	}
	100% {
		opacity: 1;
		filter: alpha(opacity=1);
	}
}
@-webkit-keyframes fade_in
{
	0 {
		opacity: 0;
		filter: alpha(opacity=0);
	}
	100% {
		opacity: 1;
		filter: alpha(opacity=1);
	}
}
@keyframes fade_in
{
	0 {
		opacity: 0;
		filter: alpha(opacity=0);
	}
	100% {
		opacity: 1;
		filter: alpha(opacity=1);
	}
}
@-webkit-keyframes next_bt_translateY
{
	0 {
		opacity: .5;
		filter: alpha(opacity=.5);
		bottom: 1.67rem;
	}
	50% {
		opacity: 1;
		filter: alpha(opacity=1);
		bottom: 1.37rem;
	}
	100% {
		opacity: .5;
		filter: alpha(opacity=.5);
		bottom: 1.07rem;
	}
}
@keyframes next_bt_translateY
{
	0 {
		opacity: .5;
		filter: alpha(opacity=.5);
		bottom: 1.67rem;
	}
	50% {
		opacity: 1;
		filter: alpha(opacity=1);
		bottom: 1.37rem;
	}
	100% {
		opacity: .5;
		filter: alpha(opacity=.5);
		bottom: 1.07rem;
	}
}
</style>
