<template>
	<div class="home page">
		<div class="mian">
			<div class="ship"></div>
			<div class="watchword center stress">BORN TO HACK</div>
			<div class="word center color_blue">
				寻找为<span class="stress">HACK</span>而生的
			</div>
			<div class="stress center color_blue">
				有志青年
			</div>
			<div class="we_are center color_brown">我们是</div>
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

.home {
	width: 100%;
	height: 100%;
	.mian {
		height: y_size(1285);
		width: 100%;
		line-height: 1.111;
		@include _sprite($home_ship_line,1285px);
	}
	.ship {
		@include _sprite($home_ship,691px);
		@include _sprite($ship_color,691px);
		height: y_size(691);
	}
	.watchword {
		padding-top: y_size(180);
		padding-bottom: y_size(60);
		color: rgb(0, 255, 72);
		line-height: 0.958;
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
		font-size: .9rem;
	}
	.we_are {
		font-size: .5867rem;
		padding-top: y_size(360);
	}
}
</style>