<template>
	<div class="page">
		<div class="mian fade_in_delay_3">
			<div class="design_line_2 design_in"></div>
			<div class="txt v_center sub color_brown fade_in_delay_6">
				<div class="group sub color_brown">
					<span class="stress color_yellow">设计组</span>—创造不一样的美
				</div>
				<div class="indent">
					团队中她是最
				</div>
				<div class="close indent">
					<span class="stress">鬼马</span>的存在
				</div>
				<div class="close indent">
					画笔轻轻一挥就能让你看到
				</div>
				<div class="indent">
					不一样的世界
				</div>
				<div class="indent">
					世界上最美的东西
				</div>
				<div class="indent">
					都能<span class="stress">出现在这里</span>
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
	display: inline-block;
	@include _sprite($design_line_1,1285px);
}
.design_line_2 {
	height: 50.74%;
	width: 100%;
	position: absolute;
	left: 10%;
	@include _sprite($design_line_2,652px);
}
.group {
	padding-bottom: y_size(60);
}
.txt {
	line-height: 1.146;
	top: 55.6%;
}
.indent {
	text-indent: 1.5em;
}
.stress {
	font-size: .96rem;
}
.close {
	line-height: .8;
}
.sub {
	font-size: .64rem;
}
.group {
	text-align: center;
}
.current {
	.design_in {
		opacity: 0;
		filter: alpha(opacity=0);
		-webkit-animation: design_in .8s  linear .3s 1;
		        animation: design_in .8s  linear .3s 1;
		-webkit-animation-fill-mode: forwards;
		        animation-fill-mode: forwards;
		        @include eliminate_flash;
	}
}
@-webkit-keyframes design_in
{
	0 {
		opacity: 0;
		filter: alpha(opacity=0);
		top: 3.53%;
		left: 10%;
	}
	20% {
		opacity: .2;
		filter: alpha(opacity=.2);
		top: 0;
		left: 8%;
	}
	40% {
		opacity: .4;
		filter: alpha(opacity=.4);
		top: 2.53%;
		left: 6%;
	}
	60% {
		opacity: .6;
		filter: alpha(opacity=.6);
		top: 4.53%;
		left: 4%;
	}
	80% {
		opacity: .8;
		filter: alpha(opacity=.8);
		top: 3.53%;
		left: 2%;
	}
	100% {
		opacity: 1;
		filter: alpha(opacity=1);
		top: 5.53%;
		left: 0%;
	}
}
@keyframes design_in
{
	0 {
		opacity: 0;
		filter: alpha(opacity=0);
		top: 3.53%;
		left: 10%;
	}
	20% {
		opacity: .2;
		filter: alpha(opacity=.2);
		top: 0;
		left: 8%;
	}
	40% {
		opacity: .4;
		filter: alpha(opacity=.4);
		top: 2.53%;
		left: 6%;
	}
	60% {
		opacity: .6;
		filter: alpha(opacity=.6);
		top: 4.53%;
		left: 4%;
	}
	80% {
		opacity: .8;
		filter: alpha(opacity=.8);
		top: 3.53%;
		left: 2%;
	}
	100% {
		opacity: 1;
		filter: alpha(opacity=1);
		top: 5.53%;
		left: 0%;
	}
}
</style>