<template>
	<div class="android page">
		<div class="mian">
			<div class="android_color_1">
				<div class="android_color_2"></div>
			</div>
			<div class="group stress color_yellow">
				安卓组<span class="sub color_orange">—引领移动时代</span>
			</div>
			<div class="txt">
				<div class="sub color_orange">
					在现如今
				</div>
				<div class="sub color_orange close">
					<span class="stress">移动时代</span>的大背景下
				</div>
				<div class="sub color_orange close">
					她是打造移动产品的佼佼者
				</div>
				<div class="sub color_orange close">
					为大众带来随处可即的
				</div>
				<div class="stress color_orange">
					互联网体验
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
@import '../../static/common.scss';
@import '../../static/mixins/_sprite.scss';

.android {
	width: 100%;
	height: 100%;
	.mian {
		height: y_size(1285);
		width: 100%;
		display: inline-block;
		@include _sprite($android_line,1285px);
	}
	.android_color_1 {
		height: 41.01%;
		width: 100%;
		display: inline-block;
		margin-top: 23.77%;
		@include _sprite($android_color_1,527px);
	}
	.android_color_2 {
		height: 54.12%;
		margin-top: 10.6%;
		width: 100%;
		@include _sprite($android_color_2,287px);
	}
	.group {
		padding-bottom: y_size(90);
	}
	.txt {
		line-height: 1.25;
		padding-left: x_size(100);
	}
	.stress {
		font-size: .96rem;
	}
	.color_yellow {
		color: rgb(255, 231, 95);
	}
	.sub {
		font-size: .64rem;
	}
	.color_orange {
		color: rgb(247, 100, 65);
	}
	.close {
		line-height: .9;
	}
	.group {
		text-align: center;
	}
}
</style>