<template>
	<div class="page">
		<div class="mian fade_in_delay_3">
			<div class="group_2_2 fade_in_delay_6"></div>
			<div class="txt color_blue v_center fade_in_delay_6">
				<div class="title color_yellow">木犀团队</div>
				<div>
					致力于探索<span class="stress">互联网星</span>
				</div>
				<div>
					其中蕴含着无限的可能性
				</div>
				<div class="division">
					等待着被<span class="stress">考察和发现</span>
				</div>
				<div>
					为开创新生活方式的力量
				</div>
				<div class="division">
					我们期待<span class="stress">与你相遇</span>
					<div class="line_box_after">
						<span class="line line_bottom"></span>
						<span class="line line_top"></span>
					</div>
				</div>
				<div class="we_are color_brown">我们有</div>
			</div>
		</div>
	</div>
</template>

<style lang='scss' scoped>
@import '../../static/common.scss';
@import '../../static/mixins/_sprite.scss';

.mian {
	height: y_size(1310);
	position: relative;
	@include _sprite($group_2_1,1310px);
}
.group_2_2 {
	height: y_size(760);
	@include _sprite($group_2_2,760px);
}
.title {
	font-size: .8rem;
	text-indent: -3.6em;
}
.division {
	margin-top: .2rem;
}
.line_box_after {
	margin-left: -.2rem;
}
.stress {
	font-size: .64rem;
	line-height: 1.25;
}
.txt {
	top: 72.5%;
	text-align: center;
	font-size: .44rem;
	line-height: .8;
}
</style>