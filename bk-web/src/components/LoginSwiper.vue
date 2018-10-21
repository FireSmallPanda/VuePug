<template lang='pug'>
    swiper(:options="swiperOption" class='login-swiper-box')
      swiper-slide(v-for='item in images')
        img.swiper-img(width="100%", height="100%", :src="item.src")
      .swiper-pagination(slot="pagination")
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HomeSwiper',
  props: ['images'],
  data () {
    return {
      swiperOption: {
        autoplay: true,
        slidesPerView: 1,
        centeredSlides: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="stylus" scoped>
.login-swiper-box {
  width: 500px;
  height: 500px;
}
</style>
