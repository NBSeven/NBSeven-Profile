<!--  -->
<template>
  <div>
    <h2>汪忠祥</h2>

    <h3>web前端·宁波舜宇智能科技</h3>

    <hr />
    <text-card :title="card1.title">
      <p slot="content">&emsp;{{card1.content}}</p>
    </text-card>
    <text-card :title="card2.title">
      <ol slot="content">
        <li v-for="item of card2.content" :key="item">
          {{item}}
        </li>
      </ol>
    </text-card>
     <text-card :title="card3.title">
      <ul slot="content">
        <li v-for="item of card3.content" :key="item">
          {{item}}
        </li>
        <li>
          <a href="./../../resume.html" download>我的简历</a>
        </li>
      </ul>
    </text-card>
  </div>
</template>

<script>
import TextCard from './../components/TextCard'
export default {
  data () {
    return {

      card1: {
        title: '个人简述',
        content: '小伙子我93年生,野生前端一枚，喜欢折腾，大二开始断断续续的接触了前端，毕业之后也经历了一些挫折，毕竟年轻过！接着开始点前端技能点，目标是成为一名全栈工程师。目前项目使用的技术栈基本上都是vue全家桶，不久之前也把react的全家桶也过了一遍，还不熟练。用过node写过简单后台，也会写原生微信小程序。'
      },
      card2: {
        title: '技能点',
        content: ['vue全家桶', '微信小程序', '基于cordova以及hbuilder的混合app', 'electron应用', 'react', 'node']
      },
      card3: {
        title: '附加',
        content: ['如果你手头有在宁波的『web前端』工作岗位', '而且您认为我的能力能适应您的工作岗位', '可以发送邮件到邮箱：410805964@qq.com']
      }
    }
  },

  components: {
    TextCard
  },

  computed: {},

  mounted () {

  },

  methods: {
    openResume: function () {
      window.open('')
    }
  }
}
</script>
<style lang="scss">
.text-content {
  border-left: 5px solid #d1d1d1;
  text-indent: 20px;
  padding-left: 5px;
  background-color: #ffffff;
  p {
    color: #a3a3a3;
  }
}
</style>
