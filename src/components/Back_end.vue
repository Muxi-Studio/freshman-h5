<template>
	<div class="back_end page">
		<div class="mian">
			<div class="back_end_ship"></div>
			<div class="group sub color_red">
				<span class="stress color_yellow">后台组</span>—开启全方位支援
			</div>
			<div class="txt sub color_red">
				<div class="close">
					在团队中他着力于给
				</div>
				<div class="close">
					产品开发<span>提供</span>强有力的
				</div>
				<div class="close stress">
					后备资源
				</div>
				<div class="close">
					容易被忽略
				</div>
				<div>
					却是在产品开发中不可缺的
				</div>
				<div class="stress">中间力量</div>
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

.back_end {
	width: 100%;
	height: 100%;
	.mian {
		height: y_size(1285);
		width: 100%;
		@include _sprite($home_ship_line,1285px);
	}
	.back_end_ship {
		height: 55.56%;
		width: 100%;
		@include _sprite($back_end_ship,714px);
	}
	.group {
		padding-bottom: y_size(90);
	}
	.txt {
		line-height: 1;
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
	.color_red {
		color: rgb(255, 115, 247);
	}
	.close {
		line-height: .9;
	}
	.group {
		text-align: center;
	}
}
</style>