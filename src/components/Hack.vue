<template>
	<div class="hack page">
		<div class="mian">
			<div class="ship_light"></div>
			<div class="txt">
				<div class="watchword">
					BORN TO HACK
				</div>
				<div class="for">
					2016木犀秋季招新
				</div>
				<div class="for">
					寻找为HACK而生的你
				</div>
				<div class="belief">
					我们在路上 前方不会太远
				</div>
				<div class="enter">
					我要报名
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
.hack {
	width: 100%;
	height: 100%;
	.mian {
		height: 100%;
		width: 100%;
		display: inline-block;
		@include _sprite($hack_ship,1334px);
	}
	.ship_light {
		height: y_size(645);
		margin-top: y_size(96);
		width: 100%;
		@include _sprite($ship_light,645px);
	}
	.txt {
		padding-top: y_size(425);
	}
	.watchword,.for,.belief,.enter {
		font-size: 0.64rem;
		text-align: center;
	}
	.watchword {
		line-height: 1.146;
		color: rgb(196, 199, 10);
		padding-bottom: y_size(25);
	}
	.for {
		line-height: .8;
		color: rgb(0, 255, 72);
	}
	.belief {
		line-height: 1.146;
		color: rgb(196, 199, 10);
		padding-top: y_size(25);
	}
	.enter {
		line-height: 1.146;
		color: rgb(255, 141, 41);
		padding-top: y_size(220);
	}
}
</style>