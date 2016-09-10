<template>
	<div class="page">
		<div class="mian">
			<div class="front_end_color front_end_color_in">
			</div>
			<div class="txt v_center sub color_green fade_in_delay_6">
				<div class="group color_green">
					<span class="stress color_yellow">前端组</span>—打造用户界面
				</div>
				<div class="indent">
					他是<span class="stress">界面开发</span>的种子选手
				</div>
				<div class="indent">
					拥有娴熟的技术
				</div>
				<div class="indent">
					他能够带来一场又一场
				</div>
				<div class="stress indent">
					用户盛宴
				</div>
			</div>
		</div>
	</div>
</template>

<style lang='scss' scoped>
@import '../../static/common.scss';
@import '../../static/mixins/_sprite.scss';

.mian {
	height: y_size(1285);
	width: 100%;
	position: relative;
	@include _sprite($front_end_line,1285px);
}
.front_end_color {
	height: 49.96%;
	width: 100%;
	position: absolute;
	top: 2%;
    -webkit-transform: translate(30px);
        -ms-transform: translate(30px);
            transform: translate(30px);
	@include _sprite($front_end_color,642px);
}
.group {
	font-size: .72rem;
	margin-bottom: .5rem;
}
.indent {
	text-indent: .5rem;
}
.txt {
	line-height: 1.25;
	top: 54%;
}
.stress {
	font-size: .96rem;
}
.sub {
	font-size: .64rem;
}
.group {
	text-align: center;
}
.current {
	.front_end_color_in {
		opacity: 0;
		filter: alpha(opacity=0);
		-webkit-animation: front_end_color_in .5s  linear .3s 1;
		        animation: front_end_color_in .5s  linear .3s 1;
		-webkit-animation-fill-mode: forwards;
		        animation-fill-mode: forwards;
	}
}
@-webkit-keyframes front_end_color_in
{
	0 {
		opacity: 0;
		filter: alpha(opacity=0);
		-webkit-transform: translate(30px);
		        transform: translate(30px);
	}
	50% {
		opacity: .5;
		filter: alpha(opacity=.5);
		-webkit-transform: translate(15px);
		        transform: translate(15px);
	}
	100% {
		opacity: 1;
		filter: alpha(opacity=1);
		-webkit-transform: translate(0);
		        transform: translate(0);
	}
}
@keyframes front_end_color_in
{
	0 {
		opacity: 0;
		filter: alpha(opacity=0);
		-webkit-transform: translate(30px);
		        transform: translate(30px);
	}
	50% {
		opacity: .5;
		filter: alpha(opacity=.5);
		-webkit-transform: translate(15px);
		        transform: translate(15px);
	}
	100% {
		opacity: 1;
		filter: alpha(opacity=1);
		-webkit-transform: translate(0);
		        transform: translate(0);
	}
}
</style>