<template>
	<div class="page">
		<div class="mian">
			<div class="android_color_1 fade_in_delay_3">
				<div class="android_color_2 fade_in_delay_6"></div>
			</div>
			<div class="txt v_center fade_in_delay_12">
				<div class="group stress color_yellow">
					安卓组<span class="sub color_orange">—引领移动时代</span>
				</div>
				<div class="sub color_orange indent">
					在现如今
				</div>
				<div class="sub color_orange indent close">
					<span class="stress">移动时代</span>的大背景下
				</div>
				<div class="sub color_orange indent close">
					她是打造移动产品的佼佼者
				</div>
				<div class="sub color_orange indent close">
					为大众带来随处可即的
				</div>
				<div class="stress indent color_orange">
					互联网体验
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
	@include _sprite($android_line,1285px);
}
.android_color_1 {
	height: 41.01%;
	width: 100%;
	position: absolute;
	top: 13.5%;
	display: inline-block;
	@include _sprite($android_color_1,527px);
}
.android_color_2 {
	height: 54.12%;
	position: absolute;
	top: 14.5%;
	width: 100%;
	@include _sprite($android_color_2,287px);
}
.group {
	padding-bottom: .8rem;
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
.close {
	line-height: .9;
}
.group {
	text-align: center;
}
</style>