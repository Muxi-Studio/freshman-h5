<template>
	<div class="page">
		<div class="mian">
			<div class="front_end_color front_end_color_in">
			</div>
			<div class="txt v_center sub color_green fade_in_delay_6">
				<div class="group color_green">
					<span class="stress color_yellow">前端组</span>—打造用户界面
				</div>
				<div class="indent">
					他是<span class="stress">界面开发</span>的种子选手
				</div>
				<div class="indent">
					拥有娴熟的技术
				</div>
				<div class="indent">
					他能够带来一场又一场
				</div>
				<div class="stress indent">
					用户盛宴
				</div>
			</div>
		</div>
	</div>
</template>

<style lang='scss' scoped>
@import '../../static/common.scss';
@import '../../static/mixins/_sprite.scss';

.page {
	width: 100%;
	height: 100%;
	.mian {
		height: y_size(1285);
		width: 100%;
		position: relative;
		@include _sprite($front_end_line,1285px);
	}
	.front_end_color {
		height: 49.96%;
		width: 100%;
		position: absolute;
		top: 2%;
        transform: translate(30px);
		@include _sprite($front_end_color,642px);
	}
	.group {
		font-size: .72rem;
		margin-bottom: .5rem;
	}
	.indent {
		text-indent: .5rem;
	}
	.txt {
		line-height: 1.25;
		position: absolute;
		top: 54%;
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
.current {
	.front_end_color_in {
		opacity: 0;
		filter: alpha(opacity=0);
		animation: front_end_color_in .5s  linear .3s 1;
		animation-fill-mode: forwards;
	}
}
@keyframes front_end_color_in
{
	0 {
		opacity: 0;
		filter: alpha(opacity=0);
		transform: translate(30px);
	}
	50% {
		opacity: .5;
		filter: alpha(opacity=.5);
		transform: translate(15px);
	}
	100% {
		opacity: 1;
		filter: alpha(opacity=1);
		transform: translate(0);
	}
}
</style>