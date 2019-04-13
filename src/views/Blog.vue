<!--  -->
<template>
<div>
  <div class="text">
    {{text.join('')}}
    <span v-show="isshow">_</span>
  </div>
   <mu-flex justify-content="center">
    <mu-flex justify-content="start" class="web-tag">
      <mu-button  href="https://juejin.im/user/593bfdf6128fe1006adb216d" >
        <mu-icon    size="30" value=":iconfont icon-juejin" color="blue"></mu-icon>
      </mu-button>
    </mu-flex>
     <mu-flex justify-content="center"  class="web-tag">
      <mu-button  href="https://segmentfault.com/u/shuolaiyoudiankexiao">
        <mu-icon    size="30" value=":iconfont icon-iconsf" color="green"></mu-icon>
      </mu-button>
    </mu-flex>
     <mu-flex justify-content="end" class="web-tag">
      <mu-button  href="https://www.jianshu.com/u/2e2087304b3d" >
        <mu-icon    size="30" value=":iconfont icon-jianshu"></mu-icon>
      </mu-button>
    </mu-flex>
  </mu-flex>
</div>

</template>

<script>
export default {
  data () {
    return {
      input: '我的笔记发布在前端界比较知名的网站里，其实主要是在这些网站里学习呃，个人的经验总结还不够多，文笔也不够好，暂时是用来给自己看哈~',
      text: [],
      isshow: false,
      showInter: null,
      noshowInter: null
    }
  },

  components: {},

  computed: {},

  mounted () {
    let _this = this
    let arr = this.input.split('')
    _this.showInter = setInterval(function () {
      _this.isshow = true
    }, 250)
    arr.forEach((item, index) => {
      setTimeout(function () {
        _this.text.push(item)
        _this.isshow = false
        if (index === (arr.length - 1)) {
          _this.noshowInter = setInterval(function () {
            _this.isshow = false
          }, 120)
        }
      }, (index + 1) * 300)
    })
  },
  destroyed: function () {
    clearInterval(this.showInter)
    clearInterval(this.noshowInter)
  },
  methods: {}
}

</script>
<style lang='scss' scoped>
.web-tag{
  margin-right: 20px;
  &:last-child{
    margin-right: 0;
  }
}
.text{
  font-size: 20px;
  margin-bottom: 20px;
}
</style>
