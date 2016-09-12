<template>
	<div class="page">
		<div class="mian">
			<div class="ship_light fade_in_count_3"></div>
			<div class="txt v_center fade_in_delay_6">
				<div class="watchword">
					<span class="line line_before"></span>
					BORN TO HACK
					<span class="line line_after"></span>
				</div>
				<div class="for">
					2016木犀秋季招新
				</div>
				<div class="for">
					寻找为HACK而生的你
				</div>
				<div class="belief">
					我们在路上 前方不会太远
				</div>
			</div>
			<div class="hack_light hack_blink"></div>
			<a class="enter v_center" href="http://muxistudio.com/">
				我要报名
			</a>
		</div>
		<div id="next_bt" class="next_bt"></div>
	</div>
</template>

<style lang='scss' scoped>
@import '../../static/common.scss';
@import '../../static/mixins/_sprite.scss';

.mian {
	height: 100%;
	width: 100%;
	position: relative;
	@include _sprite($hack_ship,1334px);
}
.ship_light {
	height: y_size(645);
	width: 100%;
	position: absolute;
	top: 4.2%;
	@include _sprite($ship_light,645px);
}
.txt {
	top: 70.5%;
}
.watchword {
	line-height: 1.8;
	color: rgb(196, 199, 10);
}
.line {
	display: inline-block;
	height: 11.5%;
	width: x_size(22);
	background: #red;
}
.watchword,.for,.belief,.enter {
	font-size: 0.64rem;
	text-align: center;
}
.for {
	line-height: .8;
	color: rgb(0, 255, 72);
}
.belief {
	line-height: 1.8;
	color: rgb(196, 199, 10);
}
.hack_light {
	height: y_size(115);
	width: 100%;
	position: absolute;
	bottom: 3%;
	@include _sprite($hack_light,115px);
}
.enter {
	line-height: 1.146;
	color: rgb(255, 141, 41);
	padding: 1.5rem 1rem 0;
	position: absolute;
	bottom: 0;
}
.current {
	.hack_blink {
		-webkit-animation: hack_blink 1.8s  linear .3s 111;
		        animation: hack_blink 1.8s  linear .3s 111;
		-webkit-animation-fill-mode: forwards;
		        animation-fill-mode: forwards;
		        @include eliminate_flash;
	}
}
@-webkit-keyframes hack_blink
{
	0 {
		opacity: .1;
		filter: alpha(opacity=.1);
	}
	50% {
		opacity: .4;
		filter: alpha(opacity=4);
	}
	100% {
		opacity: .9;
		filter: alpha(opacity=.9);
	}
}
@keyframes hack_blink
{
	0 {
		opacity: .1;
		filter: alpha(opacity=.1);
	}
	50% {
		opacity: .4;
		filter: alpha(opacity=4);
	}
	100% {
		opacity: .9;
		filter: alpha(opacity=.9);
	}
}
</style>