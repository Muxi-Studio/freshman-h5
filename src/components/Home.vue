<template>
	<div class="page current">
		<div class="mian">
			<div class="ship fade_in_count_1"></div>
			<div class="ship_color fade_in_count_2"></div>
			<div class="txt v_center">
				<div class="watchword txt_fade_in_delay_9 center stress">
					<div class="line_box_before">
						<span class="line line_top"></span>
						<span class="line line_bottom"></span>
					</div>
					BORN TO HACK
					<div class="line_box_after">
						<span class="line line_bottom"></span>
						<span class="line line_top"></span>
					</div>
				</div>
				<div class="word center txt_fade_in_delay_12 color_blue">
					<div class="line_box_before">
						<span class="line line_top"></span>
						<span class="line line_bottom"></span>
					</div>
					寻找为<span class="stress">HACK</span>而生的
				</div>
				<div class="stress  txt_fade_in_delay_15 indent center color_blue">
					有志青年
					<div class="line_box_after">
						<span class="line line_top"></span>
						<span class="line line_bottom"></span>
					</div>
				</div>
			</div>
			<div class="we_are center color_brown v_center fade_in_delay_21">我们是</div>
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
		line-height: 1.111;
		@include _sprite($home_ship_line,1285px);
	}
	.ship {
		opacity: 0;
		filter: alpha(opacity=0);
		width: 100%;
		height: 8.17%;
		@include _sprite($home_ship,105px);
	}
	.ship_color {
		opacity: 0;
		filter: alpha(opacity=0);
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		@include _sprite($ship_color,691px);
		height: y_size(715);
	}
	.txt {
		position: absolute;
		top: 60%;
	}
	.watchword {
		color: rgb(0, 255, 72);
		line-height: 0.958;
		margin-bottom: .5rem;
	}
	.indent {
		margin-left: -1.5rem;
	}
	.color_blue {
		color: rgb(1, 244, 255);
	}
	.color_brown {
		color: rgb(186, 107, 23);
	}
	.word {
		font-size: .5432rem;
	}
	.center {
		text-align: center;
	}
	.stress {
		font-size: .8rem;
	}
	.we_are {
		opacity: 0;
		filter: alpha(opacity=0);
		position: absolute;
		top: 95%;
		font-size: .5867rem;
	}
}
.current {
	.fade_in_count_1 {
		-webkit-animation: fade_in .2s  linear .3s 1;
		animation: fade_in .2s  linear .3s 1;
		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards;
	}
	.fade_in_count_2 {
		-webkit-animation: fade_in .2s  linear .6s 1;
		animation: fade_in .2s  linear .6s 1;
		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards;
	}
}
</style>