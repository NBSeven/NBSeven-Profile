<!--  -->
<template>
  <div>
    <!-- <div>111</div> -->
    <div>
      <svg-draw file='/svg/2.svg' ></svg-draw>
    </div>

  </div>
</template>

<script>
import svgDraw from 'vue-svg-draw'
export default {
  data () {
    return {
    }
  },

  components: {
    svgDraw
  },

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style lang='scss' scoped>
svg{
  height: 500px;
}
</style>
