<template>
	<div class="design page">
		<div class="mian">
			<div class="design_line_2"></div>
			<div class="group sub color_brown">
				<span class="stress color_yellow">设计组</span>—创造不一样的美
			</div>
			<div class="txt sub color_brown">
				<div>
					团队中她是最
				</div>
				<div class="close">
					<span class="stress">鬼马</span>的存在
				</div>
				<div class="close">
					画笔轻轻一挥就能让你看到
				</div>
				<div>
					不一样的世界
				</div>
				<div>
					世界上最美的东西
				</div>
				<div>
					都能<span class="stress">出现在这里</span>
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

.design {
	width: 100%;
	height: 100%;
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
		margin-top: 9.53%;
		@include _sprite($design_line_2,652px);
	}
	.group {
		padding-bottom: y_size(60);
	}
	.txt {
		line-height: 1.146;
		padding-left: x_size(100);
	}
	.stress {
		font-size: .96rem;
	}
	.color_yellow {
		color: rgb(255, 231, 95);
	}
	.close {
		line-height: .8;
	}
	.sub {
		font-size: .64rem;
	}
	.color_brown {
		color: rgb(186, 107, 23);
	}
	.group {
		text-align: center;
	}
}
</style>