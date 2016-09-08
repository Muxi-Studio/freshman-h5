<template>
	<div class="group_2 page">
		<div class="mian">
			<div class="group_2_2"></div>
			<div class="title color_yellow">木犀团队</div>
			<div class="txt color_blue">
				<div>
					致力于探索<span class="stress">互联网星</span>
				</div>
				<div>
					其中蕴含着无限的可能性
				</div>
				<div>
					等待着被<span class="stress division">考察和发现</span>
				</div>
				<div>
					为开创新生活方式的力量
				</div>
				<div>
					我们期待<span class="stress division">与你相遇-</span>
				</div>
			</div>
			<div class="we_are txt color_brown">我们有</div>
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

.group_2 {
	width: 100%;
	height: 100%;
	.mian {
		height: y_size(1310);
		@include _sprite($group_2_1,1310px);
	}
	.group_2_2 {
		height: y_size(760);
		@include _sprite($group_2_2,760px);
	}
	.title {
		font-size: .8rem;
		padding-top: y_size(360);
		padding-left: x_size(120);
	}
	.color_yellow {
		color: rgb(255, 231, 95);
	}
	.stress {
		font-size: .64rem;
		line-height: 1.25;
	}
	.color_blue {
		color: rgb(1, 244, 255);
	}
	.color_brown {
		color: rgb(186, 107, 23);
	}
	.txt {
		text-align: center;
		font-size: .44rem;
		line-height: .8;
	}
}
</style>