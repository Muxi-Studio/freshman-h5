<template>
	<div class="page">
		<div class="mian">
			<div class="group_3_2 fade_in_delay_3"></div>
			<div class="txt v_center">
				<div class="txt_c color_blue txt_fade_in_delay_9">
					<div>
						我们在互联网星探索学习之后
					</div>
					<div>
						进行一系列的产品开发
					</div>
					<div>
						并将其带回华师
					</div>
				</div>
				<div class="txt_f color_yellow txt_fade_in_delay_12">
					<div>
						华师匣子—华师专属利器
					</div>
					<div>
						学而—华师评课优质平台
					</div>
					<div>
						木小犀—华师智能问答机器人
					</div>
				</div>
			</div>
			<div class="intro v_center txt_fade_in_delay_15">各组介绍</div>
		</div>
		<div id="next_bt" class="next_bt"></div>
	</div>
</template>

<style lang='scss' scoped>
@import '../../static/common.scss';
@import '../../static/mixins/_sprite.scss';

.mian {
	height: y_size(1285);
	position: relative;
	width: 100%;
	@include _sprite($group_3_1,1285px);
}
.group_3_2 {
	position: absolute;
	top: 5.2%;
	height: 51.67%;
	width: 100%;
	@include _sprite($group_3_2,662px);
}
.product {
	font-size: .8rem;
	color: rgb(154, 60, 0);
	line-height: 0.754;
	position: absolute;
}
.txt {
	top: 56%;
	text-align: center;
	font-size: .64rem;
}
.txt_f {
	line-height: 1.5;
}
.txt_c {
	line-height: 1;
}
.intro {
	position: absolute;
	top: 94%;
	color: rgb(186, 107, 23);
	font-size: .64rem;
}
</style>