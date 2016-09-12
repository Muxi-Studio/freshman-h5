<template>
	<div class="page">
		<div class="mian">
			<div class="product_color fade_in_delay_3"></div>
			<div class="txt v_center color_blue sub">
				<div class="group color_blue txt_fade_in_delay_9 sub">
					<span class="stress_h color_yellow">产品组</span>—挖掘潜藏的可能性
				</div>
				<div class="indent txt_fade_in_delay_12">
					在<span class="stress_h">互联网星</span>的探索中
				</div>
				<div class="indent txt_fade_in_delay_15">
					她扮演着<span class="stress_l color_yellow">参谋长</span>的角色
				</div>
				<div class="indent txt_fade_in_delay_15">
					为开创新的产品而出谋划策
				</div>
				<div class="txt_last indent  txt_fade_in_delay_18">
					是团队中的<span class="stress_h">灵魂人物</span>
				</div>
			</div>
		</div>
		<div id="next_bt" class="next_bt"></div>
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
	@include _sprite($product_line,1285px);
}
.product_color {
	height: 34.32%;
	width: 100%;
	position: absolute;
	top: 19.9%;
	left: 2%;
	@include _sprite($product_color,441px);
}
.indent {
	text-indent: 1rem;
}
.group {
	text-align: center;
	font-size: .72rem;
	margin-bottom: .5rem;
}
.stress_h {
	font-size: .92rem;
}
.stress_l {
	font-size: .64rem;
}
.sub {
	font-size: .4886rem;
}
.txt_last {
	margin-top: .5rem;
}
.txt {
	line-height: 1.25;
	top: 55%;
	.group {
		font-size: .64rem;
	}
}
</style>