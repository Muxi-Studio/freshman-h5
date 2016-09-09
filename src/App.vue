<template>
	<div id="app">
	   <home></home>
	   <group_2></group_2>
	   <group_3></group_3>
	   <product></product>
	   <design></design>
	   <front_end></front_end>
	   <back_end></back_end>
	   <android></android>
	   <hack></hack>
	</div>
	<div class="pointer"></div>
</template>

<script>
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
	components: {
		Home,
		Group_2,
		Group_3,
		Product,
		Design,
		Front_end,
		Back_end,
		Android,
		Hack
	}
}
</script>

<style lang='scss'>
@import '../static/common.scss';
@import '../static/mixins/_sprite.scss';

@font-face {
	font-family: 'zcool';
	src: url('../static/font.ttf');
}

html,body {
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
}
body {
	margin: 0;
	padding: 0;
	background: #fff url('sprite/sprite.png') no-repeat;
	-webkit-background-size:100%;
	background-size:100%;
	@include sprite__position($bg,1334px);
}

#app {
	width: 100%;
	height: 100%;
	margin: 0 auto;
	font-family: 'zcool';
	background: url('sprite/sprite.png') no-repeat;
	-webkit-background-size:100%;
	background-size:100%;
	@include sprite__position($bg-filter,1334px);
}
.v_center {
	left: 50%;
	-webkit-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	transform: translateX(-50%);
	white-space:nowrap;  
}
.pointer {
	height: 1.40rem;
	position: fixed;
	bottom: 1.47rem;
	left: calc(50% - 0.54rem);
	width: 1.08rem;
	background: url('sprite/sprite.png') no-repeat;
	@include sprite__size($pointer,107px);
	@include sprite__position($pointer,107px);
	-webkit-animation: pointer_translateY .9s  linear 1.2s 10;
    animation: pointer_translateY .9s  linear 1.2s 10;
   	-webkit-animation-fill-mode: forwards;
	animation-fill-mode: forwards; 
	@include eliminate_flash;
}
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
	margin-right: -.4rem;
}
.line_box_after {
	margin-left: -.4rem;
}
.current {
	.fade_in_count_3 {
		animation: fade_in_count 1.2s  linear .3s 3;
		animation-fill-mode: forwards;
	}
	.fade_in_delay_3 {
		opacity: 0;
		filter: alpha(opacity=0);
		animation: fade_in 1.2s  linear .3s 1;
		animation-fill-mode: forwards;
	}
	.fade_in_delay_6 {
		opacity: 0;
		filter: alpha(opacity=0);
		animation: fade_in 1.2s  linear .6s 1;
		animation-fill-mode: forwards;
	}
	.fade_in_delay_12 {
		opacity: 0;
		filter: alpha(opacity=0);
		animation: fade_in .9s  linear 1.2s 1;
		animation-fill-mode: forwards;
	}
	.fade_in_delay_21 {
		animation: fade_in .9s  linear 2.1s 1;
		animation-fill-mode: forwards;
	}
	.txt_fade_in_delay_9 {
		opacity: 0;
		filter: alpha(opacity=0);
		animation: fade_in .9s  linear .9s 1;
		animation-fill-mode: forwards;
	}
	.txt_fade_in_delay_12 {
		opacity: 0;
		filter: alpha(opacity=0);
		animation: fade_in 1.2s  linear 1.2s 1;
		animation-fill-mode: forwards;
	}
	.txt_fade_in_delay_15 {
		opacity: 0;
		filter: alpha(opacity=0);
		animation: fade_in 1.5s  linear 1.5s 1;
		animation-fill-mode: forwards;
	}
	.txt_fade_in_delay_18 {
		opacity: 0;
		filter: alpha(opacity=0);
		animation: fade_in 1.8s  linear 1.8s 1;
		animation-fill-mode: forwards;
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
@keyframes fade_in
{
	0 {
		opacity: 0;
		filter: alpha(opacity=0);
	}
	50% {
		opacity: .5;
		filter: alpha(opacity=.4);
	}
	100% {
		opacity: 1;
		filter: alpha(opacity=1);
	}
}
@keyframes pointer_translateY
{
	0 {
		bottom: 1.67rem;
	}
	50% {
		bottom: 1.37rem;
	}
	100% {
		bottom: 1.07rem;
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
</style>
