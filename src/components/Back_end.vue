<template>
	<div class="page">
		<div class="mian">
			<div class="back_end_ship back_end_ship_in"></div>
			<div class="txt v_center sub color_red fade_in_delay_6">
				<div class="group sub color_red fade_in_delay_6">
					<span class="stress color_yellow">后台组</span>—开启全方位支援
				</div>
				<div class="indent">
					在团队中他着力于给
				</div>
				<div class="close indent">
					产品开发<span class="stress">提供</span>强有力的
				</div>
				<div class="close stress indent">
					后备资源
				</div>
				<div class="close indent">
					容易被忽略
				</div>
				<div class="indent">
					却是在产品开发中不可缺的
				</div>
				<div class="stress indent">中间力量</div>
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
	@include _sprite($design_line_1,1285px);
}
.back_end_ship {
	opacity: 0;
	filter: alpha(opacity=0);
	height: 55.56%;
	width: 100%;
	position: absolute;
	top: -50%;
	@include _sprite($back_end_ship,714px);
}
.group {
	margin-bottom: .5rem;
}
.txt {
	line-height: 1.25;
	top: 54%;
}
.indent {
	text-indent: 1rem;
}
.stress {
	font-size: .96rem;
}
.sub {
	font-size: .64rem;
}
.close {
	line-height: .9;
}
.group {
	text-align: center;
}
.current {
	.back_end_ship_in {
		opacity: 0;
		filter: alpha(opacity=0);
		-webkit-animation: back_end_ship_in .5s  linear .3s 1;
		        animation: back_end_ship_in .5s  linear .3s 1;
		-webkit-animation-fill-mode: forwards;
		        animation-fill-mode: forwards;
		        @include eliminate_flash;
	}
}
@-webkit-keyframes back_end_ship_in
{
	0 {
		opacity: 0;
		filter: alpha(opacity=0);
		top: -50%;
	}
	50% {
		opacity: .5;
		filter: alpha(opacity=.5);
		top: -25%;
	}
	100% {
		opacity: 1;
		filter: alpha(opacity=1);
		top: -0%;
	}
}
@keyframes back_end_ship_in
{
	0 {
		opacity: 0;
		filter: alpha(opacity=0);
		top: -50%;
	}
	50% {
		opacity: .5;
		filter: alpha(opacity=.5);
		top: -25%;
	}
	100% {
		opacity: 1;
		filter: alpha(opacity=1);
		top: -0%;
	}
}
</style>