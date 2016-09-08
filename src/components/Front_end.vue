<template>
	<div class="front_end page">
		<div class="mian">
			<div class="front_end_color">
			</div>
			<div class="group sub color_green">
				<span class="stress color_yellow">前端组</span>—打造用户界面
			</div>
			<div class="txt sub color_green">
				<div>
					他是<span class="stress">界面开发</span>的种子选手
				</div>
				<div>
					拥有娴熟的技术
				</div>
				<div>
					他能够带来一场又一场
				</div>
				<div class="stress">
					用户盛宴
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

.front_end {
	width: 100%;
	height: 100%;
	.mian {
		height: y_size(1285);
		width: 100%;
		display: inline-block;
		@include _sprite($front_end_line,1285px);
	}
	.front_end_color {
		height: 49.96%;
		width: 100%;
		margin-top: 3.68%;
		@include _sprite($front_end_color,642px);
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
	.color_green {
		color: rgb(73, 186, 23);
	}
	.group {
		text-align: center;
	}
}
</style>