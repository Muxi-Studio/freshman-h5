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
.pointer {
	height: 1.40rem;
	position: fixed;
	bottom: 1.47rem;
	left: calc(50% - 0.54rem);
	width: 1.08rem;
	background: url('sprite/sprite.png') no-repeat;
	@include sprite__size($pointer,120px);
	@include sprite__position($pointer,120px);
	-webkit-animation: pointer_translateY .9s  linear 1.2s 10;
    animation: pointer_translateY .9s  linear 1.2s 10;
   	-webkit-animation-fill-mode: forwards;
	animation-fill-mode: forwards; 
	@include eliminate_flash;
}
@keyframes pointer_translateY
{
	0 {
		opacity: 1;
		filter: alpha(opacity=1);
		bottom: 1.67rem;
	}
	50% {
		opacity: .5;
		filter: alpha(opacity=.5);
		bottom: 1.37rem;
	}
	100% {
		opacity: 0;
		filter: alpha(opacity=0);
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
