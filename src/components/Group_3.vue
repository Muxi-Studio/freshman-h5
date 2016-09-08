<template>
	<div class="group_3 page">
		<div class="mian">
			<div class="group_3_2"></div>
			<div class="txt">
				<div class="txt_c color_yellow">
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
				<div class="txt_f color_blue">
					<div>
						华师匣子—华师专属利器
					</div>
					<div>
						学而—选课评课优质平台
					</div>
					<div>
						木小犀—华师智能问答机器人
					</div>
				</div>
			</div>
			<div class="intro txt">各组介绍</div>
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

.group_3 {
	width: 100%;
	height: 100%;
	.mian {
		height: y_size(1285);
		display: inline-block;
		width: 100%;
		@include _sprite($group_3_1,1285px);
	}
	.group_3_2 {
		margin-top: 9%;
		height: 51.67%;
		width: 100%;
		@include _sprite($group_3_2,662px);
	}
	.txt {
		text-align: center;
		font-size: .64rem;
	}
	.txt_f {
		line-height: 1.5;
	}
	.txt_c {
		line-height: 1;
	}
	.color_yellow {
		color: rgb(255, 231, 95);
	}
	.color_blue {
		color: rgb(1, 244, 255);
	}
	.intro {
		padding-top: y_size(220);
		color: rgb(186, 107, 23);
	}
}
</style>