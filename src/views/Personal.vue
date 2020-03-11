<!--  -->
<template>
  <div>
    <h2>汪忠祥</h2>
    <h3>前端工程师·杭州海康威视系统技术有限公司</h3>
    <hr />
    <mu-text-field v-model="school" label="毕业学校:" disabled></mu-text-field><br/>
    <mu-text-field v-model="major" label="专业:" disabled></mu-text-field><br/>
    <mu-text-field v-model="phone" label="联系方式:" disabled></mu-text-field><br/>
    <mu-text-field v-model="job1" label="工作经历:" disabled style="margin-right:10px;width:350px" ></mu-text-field>
    <mu-text-field v-model="job2" label="工作经历:" disabled style="margin-right:10px;width:350px"></mu-text-field>
    <mu-text-field v-model="job3" label="工作经历:" disabled style="margin-right:10px;width:350px"></mu-text-field>
    <text-card :title="card1.title">
      <div slot="content">
         <p class="card-content">&emsp;{{card1.content}}</p>
         <p class="card-content">PS:这里还想说明一下我简历中第一家和第二家的公司情况，原本我的这两家公司是项目上合作的关系，只不过由于某些原因第一家公司转型去运营游戏了并解散了我们开发团队，但是第二家的项目还远远没有完成，刚好那里的技术主管就把我带进门了，所以它们两者之间的关系更像是一种延续。描述了这么多其实就是想表达我自己并没有跳槽很频繁，直到在那家项目完成差不多时才想到来杭州发展，这里有更多的发展空间。然后就进了我现在所在的公司-----海康威视  </p>
         <p class="card-content">如果对我感兴趣的话 欢迎来撩</p>
      </div>
    </text-card>
    <text-card title="项目经验">
      <div slot="content">
        <mu-row gutter>
          <mu-col span="12" sm="6" md="6" lg="6" xl="3" v-for="project of projects" :key="project.title" style="margin-bottom:15px;">
            <mu-slide-top-transition>
              <mu-card >
                <mu-card-media :title="project.title">
                  <img :src="project.imgUrl" height="300">
                </mu-card-media>
                <mu-card-title :title="project.company" sub-title="项目描述"></mu-card-title>
                <mu-card-text>
                  {{project.content}}
                </mu-card-text>
                <mu-card-title  sub-title="责任描述"></mu-card-title>
                <mu-card-text>
                  {{project.result}}
                </mu-card-text>
                <mu-card-title  sub-title="项目难点及总结"></mu-card-title>
                </mu-card>
            </mu-slide-top-transition>
          </mu-col>
        </mu-row>
      </div>
    </text-card>

  </div>
</template>

<script>
import TextCard from './../components/TextCard'
export default {
  data () {
    return {
      school: '浙江万里学院',
      major: '新媒体与信息网络',
      phone: '15267863184',
      job1: '杭州海康威视系统技术有限公司 2018.12-至今',
      job2: '宁波舜宇智能科技有限公司 2017.12-2018.12',
      job3: '浙江满益网络科技 2017.5-2017.12',
      card1: {
        title: '个人介绍',
        content: '我是一名工作经验快满3年的前端工程师,虽然工作时间短了点但是我接触前端的时间还是比较早的，在大二就自学过前端基础知识以及编程并在暑假做过网页制作的实习工作。在大四毕业时，由于我的专业以及其它兴趣爱的好影响下就去做了影视后期相关的实习工作，但是在过程中我了解到与我想要的还是有些差距遂决定重拾前端（毕竟成为一名技术宅也是我所向往的），在长达半年的自学之后终于入了行。如人饮水 冷暖自知，这一路对我来说是非常不容易的，也希望我以后的路会越走越顺吧。目前给自己定了一个目标是能够进入大厂工作~'
      },
      projects: [
         {
          title: '云眸连锁云2.0',
          subtitle: '',
          imgUrl: './img/hikvision.jpeg',
          company: '杭州海康威视系统技术有限公司',
          content: '监控设备配套的系统管理项目，主要是给中连锁商铺使用有海底捞和美团等，目前监控控件还是c++的，对mac等非windows端还是用的萤石插件（h5 video）平台为PC web端，微信小程序，原生app',
          result:  '主要开发监控视频模块，封装了视频控件以及tab功能组件和c++开发和java后端分别进行联调，对mac电脑进行了兼容。难点:1.视频控件：需要知道其控件是怎么搭配浏览器进行使用的，为此还进行了相关培训。首先视频控件主要分两种，一种是canvas另一种是c++控件。我们部门所有的云服务项目目前都是使用的c++控件。本身就是一个windows应用程序只是覆盖在了浏览器上方，所以层级始终是最高的需要对各种显示在控件位置的元素进行处理，其次需要进行多次的参数传递处理因为有三个端进行通信，canvas只在移动端有涉及。2.树：该项目的树节点比较复杂，首先有同步的又有异步的，类型分为区域组织，门店组织，设备组织以及通道树。其次还需要对门店组织树又要进行下钻，出来一个子树。最后每一颗树可能对应的功能按钮又大不相同。所以我对这些多种树的组件进行了封装，可通过json去配置自己的事件和类型',
          lookUrl: ''
        },
        {
          title: '海康云眸普教云',
          subtitle: '',
          imgUrl: './img/hikvision.jpeg',
          company: '杭州海康威视系统技术有限公司',
          content: '涉及到学校门禁，学生考勤等功能为一体的管理系统，我主要负责人员模块的开发',
          result:'',
          lookUrl: ''
        },
        {
          title: '海康hui组件开发',
          subtitle: '基于element ui开发的组件库，供其它的开发者使用',
          imgUrl: './img/hikvision.jpeg',
          company: '杭州海康威视系统技术有限公司',
          content: '目前我参与开发视频控件以及led屏幕设置组件（canvas）',
          result:'',
          lookUrl: ''
        },
           {
          title: 'IFMS智能数字工厂管理系统V2.0',
          subtitle: '基于github VueAdmin开源模板制作的系统',
          imgUrl: './img/project2.png',
          company: '宁波舜宇智能科技有限公司',
          content: '系统模块超过300个,我和一位后端一起完成前端的开发任务，还打包成windows应用,是一个比较庞大的项目',
          result:'',
          lookUrl: ''
        },
        {
          title: '工位平台V2.0',
          subtitle: '基于element ui开发的协同系统',
          imgUrl: './img/project3.png',
          company: '宁波舜宇智能科技有限公司',
          content: '与工厂管理系统一起搭配使用，模块大概在10个左右，总体难度不是很大，不过还基于cordova打包成了apk',
          result:'',
          lookUrl: ''
        },
        {
          title: '佰赢APP',
          subtitle: '基于Hbuilder开发的webapp',
          imgUrl: './img/project1.jpg',
          company: '浙江满益网络科技有限公司',
          content: '集成了原先做的佰赢商城,模块比较多和58同城类似，我负责了商城订单管理分类，生活服务等模块的开发',
          result:'',
          lookUrl: 'https://www.520apk.com/gouwulicia/1000109415.html'
        }
      ]
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


}
.card-content{
    font-family: "Roboto, Lato, sans-serif";
    font-size: 16px;
}
.mu-card-title-container .mu-card-title{
  font-size: 18px !important;
}
.mu-card-media-title .mu-card-title{
  font-size: 20px !important;
}
.mu-card-text{
  padding: 0 16px !important;
}
</style>
