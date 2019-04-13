<!--  -->
<template>
  <div>
    <h2>汪忠祥</h2>
    <h3>前端工程师·杭州海康威视系统技术有限公司</h3>
    <hr />
    <mu-text-field v-model="school" label="毕业学校:" disabled></mu-text-field><br/>
    <mu-text-field v-model="major" label="专业:" disabled></mu-text-field><br/>
    <mu-text-field v-model="phone" label="联系方式:" disabled></mu-text-field><br/>
    <mu-text-field v-model="job1" label="工作经历:" disabled style="margin-right:10px;"></mu-text-field>
    <mu-text-field v-model="job2" label="工作经历:" disabled style="margin-right:10px;"></mu-text-field>
    <mu-text-field v-model="job3" label="工作经历:" disabled style="margin-right:10px;"></mu-text-field>
    <text-card :title="card1.title">
      <div slot="content">
         <p >&emsp;{{card1.content}}</p>
         <!-- <p>&emsp;毕业学校:浙江万里学院</p>
         <p>&emsp;专业:新媒体与信息网络</p> -->
      </div>
     
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
        <!-- <li>
          <a href="./../../resume.html" download>我的简历</a>
        </li> -->
      </ul>
    </text-card>
  </div>
</template>

<script>
import TextCard from './../components/TextCard'
export default {
  data () {
    return {
      school:'浙江万里学院',
      major:'新媒体与信息网络',
      phone:'15267863184',
      job1:'杭州海康威视 2018.12-至今',
      job2:'宁波舜宇智能科技 2017.12-2018.12',
      job3:'浙江满益网络科技 2017.5-2018.12',
      card1: {
        title: '个人简述',
        content: '我是一名90后的野生前端，喜欢折腾，大二开始接触编程，那时候刚好有门专业课是网页的制作与设计，断断续续地学习到了一些前端的相关知识。在自学了一段时间以后才开始我的前端工作之旅，目前项目使用的技术栈基本上是vue全家桶，用过node写过简单的后台（express），也会微信小程序应用开发。'
      },
      card2: {
        title: '技能树',
        content: ['vue全家桶', '微信小程序', '基于cordova的混合app', 'electron', 'node']
      },
      card3: {
        title: '附加',
        content: ['如果你手头有在宁波的『web前端』工作岗位，而且您认为我的能力能适应您的工作岗位，可以发送邮件到邮箱：410805964@qq.com']
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
