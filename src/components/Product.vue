<template>
	<div class="product page">
		<div class="mian">
			<div class="product_color"></div>
			<div class="group color_blue sub">
				<span class="stress_h color_yellow">产品组</span>—挖掘潜在的可能性
			</div>
			<div class="txt color_blue sub">
				<div>
					在<span class="stress_h">互联网星</span>的探索中
				</div>
				<div>
					她扮演着<span class="stress_l color_yellow">参谋长</span>的角色
				</div>
				<div>
					为开创新的产品出谋划策
				</div>
				<div class="txt_last">
					是团队中的<span class="stress_h">灵魂人物</span>
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

.product {
	width: 100%;
	height: 100%;
	.mian {
		height: y_size(1285);
		width: 100%;
		display: inline-block;
		@include _sprite($product_line,1285px);
	}
	.product_color {
		height: 34.32%;
		width: 100%;
		margin-left: 1.92%;
		margin-top: 33.9%;
		@include _sprite($product_color,441px);
	}
	.group {
		padding-bottom: y_size(90);
		text-align: center;
	}
	.txt {
		line-height: 1.25;
		padding-left: x_size(100);
	}
	.stress_h {
		font-size: .92rem;
	}
	.stress_l {
		font-size: .64rem;
	}
	.color_yellow {
		color: rgb(255, 231, 95);
	}
	.color_blue {
		color: rgb(1, 244, 255);
	}
	.sub {
		font-size: .4886rem;
	}
	.txt_last {
		padding-top: y_size(30);
	}
}
</style>