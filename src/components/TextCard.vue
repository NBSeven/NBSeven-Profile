<template>
  <mu-paper :z-depth="depth">
      <div class="text-content">
        <h2>{{title}}</h2>
        <hr>
        <slot name="content"></slot>
        <!-- <p>&emsp;{{content}}</p> -->
      </div>
    </mu-paper>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    depth: {
      default: 2,
      type: Number
    },
    title: {
      type: String
    }
  },
  components: {},

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.text-content {
  border-left: 5px solid #d1d1d1;
  text-indent: 20px;
  padding: 0 8px;
  background-color: #ffffff;
  h2{
    margin-bottom: 5px;
  }
  /* p {
    color: #a3a3a3;
  }
  li{
    color: #a3a3a3;
  } */
}
</style>
