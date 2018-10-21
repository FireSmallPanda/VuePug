<template>
    <swiper :options="swiperOption">
      <swiper-slide >
        <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1806/b5/755a53d5165b0b02.jpg_890x330_63764f3a.jpg" />
      </swiper-slide >
      <swiper-slide >
        <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1712/56/7e62e24499ad4702.jpg_890x330_dd59942e.jpg" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {autoplay: true}
    }
  },
  components: {
    swiper,
    swiperSlide
  }

}
</script>

<style scoped>
  .swiper-img{
    width:100%
  }
</style>
