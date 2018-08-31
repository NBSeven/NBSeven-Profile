<template>
  <div>
    <mu-row gutter>
      <mu-col span="12" sm="12" md="6" lg="6" xl="3" v-for="project of projects" :key="project.title" style="margin-bottom:15px;">
        <mu-slide-top-transition>
          <mu-card  v-show="show2">
            <mu-card-media :title="project.title" :sub-title="project.subtitle">
              <img :src="project.imgUrl">
            </mu-card-media>
            <mu-card-title :title="project.company" sub-title="项目描述"></mu-card-title>
            <mu-card-text>
              {{project.content}}
            </mu-card-text>
            <!-- <mu-card-actions>
              <mu-button flat :href="project.lookUrl" v-if="project.lookUrl">查看链接</mu-button>
            </mu-card-actions> -->
            </mu-card>
        </mu-slide-top-transition>
      </mu-col>
    </mu-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show2: false,
      projects: [
        {
          title: '佰赢APP',
          subtitle: '基于Hbuilder开发的webapp',
          imgUrl: './img/project1.jpg',
          company: '浙江满益网络科技有限公司',
          content: '集成了原先做的佰赢商城,模块比较多和58同城类似，我负责了商城订单管理分类，生活服务等模块的开发',
          lookUrl: 'https://www.520apk.com/gouwulicia/1000109415.html'
        },
        {
          title: '宁波海曙区文化局监管后台',
          subtitle: '基于Jquery开发的admin后台（图片暂无）',
          imgUrl: './img/avatar.jpg',
          company: '浙江满益网络科技有限公司',
          content: '海曙区文化局用来提升自己业绩的产物- -,登记一些违规违法的经营场所，我负责了部分模块的开发',
          lookUrl: ''
        },
        {
          title: '宁波轨道交通工地考勤后台',
          subtitle: '基于Vue和ELEMENT UI开发的考勤管理系统（图片暂无）',
          imgUrl: './img/avatar.jpg',
          company: '浙江满益网络科技有限公司',
          content: '工地考勤设备使用人脸识别，改系统搭配硬件使用，管理员工的考勤，独立完成前端工作',
          lookUrl: ''
        },
        {
          title: 'IFMS智能数字工厂管理系统V2.0',
          subtitle: '基于github VueAdmin开源模板制作的系统',
          imgUrl: './img/project2.png',
          company: '宁波舜宇智能科技有限公司',
          content: '系统模块超过300个,我和一位后端一起完成前端的开发任务，还打包成windows应用,是一个比较庞大的项目',
          lookUrl: ''
        },
        {
          title: '工位平台V2.0',
          subtitle: '基于element ui开发的协同系统',
          imgUrl: './img/project3.png',
          company: '宁波舜宇智能科技有限公司',
          content: '与工厂管理系统一起搭配使用，模块大概在10个左右，总体难度不是很大，不过还基于cordova打包成了apk',
          lookUrl: ''
        }
      ]
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.show2 = true
  },

  methods: {}
}
</script>
<style lang='scss' scoped>
.mu-transition-box {
  margin-bottom: 20px;
}
</style>
