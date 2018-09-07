<template>
  <div class="home">
    <mu-appbar color="primary" class="mu-appbar-header" :class="{'h-is-open':!Mobile}">
      <mu-button icon slot="left" @click="isOpenMenu" v-show="Mobile">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      {{titleName}}
      <mu-menu open-on-hover slot="right">
 <mu-button  flat >
        <mu-icon  value="color_lens"></mu-icon>
      </mu-button>
  <mu-list slot="content">
    <mu-list-item button @click="setTheme('Light')">
      <mu-list-item-title>Light</mu-list-item-title>
    </mu-list-item>
    <mu-list-item button @click="setTheme('Dark')">
      <mu-list-item-title>Dark</mu-list-item-title>
    </mu-list-item>
  </mu-list>
</mu-menu>

      <mu-button icon slot="right" href="https://github.com/NBSeven">
        <mu-icon size="30" value=":iconfont icon-github"></mu-icon>
      </mu-button>
    </mu-appbar>
    <div class="app-content" :class="{'c-is-open':!Mobile}">
      <div class="content-body">
        <router-view></router-view>
      </div>
    </div>

    <!-- 菜单栏 -->
    <mu-drawer :open.sync="open" :docked="docked" :z-depth="1" :class="{'dark-theme': isBlack}">
      <mu-appbar :z-depth="0" color="#fff">
        <mu-flex justify-content="center">
          <mu-flex justify-content="start">
            <mu-avatar size="55">
              <img src="../../public/img/avatar.jpg">
            </mu-avatar>
          </mu-flex>
          <mu-flex justify-content="end">
            <div class="subtitle">NBSeven</div>
          </mu-flex>
        </mu-flex>
      </mu-appbar>
      <mu-divider></mu-divider>
      <mu-list>
        <mu-sub-header>Menu</mu-sub-header>
        <mu-list-item button :ripple="false" v-for="listItem of lists" :key="listItem.path" :to="listItem.path" @click="setTitleName" :exact-active-class="'menu-active'">
          <mu-list-item-action>
            <mu-icon :value="listItem.icon"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>{{listItem.title}}</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
    <div :class="{'c-is-open':!Mobile}">
      <div id="disqus_thread" style="padding:20px;"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created: function () {
    let _this = this
    this.setTitleName()
    window.onresize = function () {
      _this.innerWidth = window.innerWidth
    }
    this.isMobile(window.innerWidth)
  },
  mounted: function () {
    this.$nextTick().then(() => {
      let disqus_config = function () {
        this.page.url = 'http://localhost:8081' // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = 'layout' // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      (function () { // DON'T EDIT BELOW THIS LINE
        let d = document
        let s = d.createElement('script')
        s.src = 'https://wangzhongxiang.disqus.com/embed.js'
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s)
      })()
    })
  },
  watch: {
    innerWidth: {
      handler: function (val) {
        this.isMobile(val)
      },
      deep: true
    },
    Mobile: {
      handler: function (val) {
      },
      deep: true
    }
  },
  computed: {
    isBlack () {
      if (this.$store.state.theme === 'dark') {
        return true
      } else {
        return false
      }
    }
  },
  data: function () {
    return {
      Mobile: true,
      docked: true,
      open: false,
      titleName: '', // 标题 根据route.name赋值
      innerWidth: 0, // 当前设备宽度
      lists: [
        // {
        //   path: 'home',
        //   icon: 'home',
        //   title: '主页'
        // },
        {
          path: 'personal',
          icon: 'face',
          title: '关于我'
        },
        {
          path: 'projects',
          icon: 'keyboard',
          title: '完成项目'
        },
        {
          path: 'blog',
          icon: 'book',
          title: '我的笔记'
        }
      ]
    }
  },
  methods: {
    setTitleName () {
      this.titleName = this.$route.name
    },
    isOpenMenu () {
      this.open = !this.open
    },
    isMobile (val) {
      if (val > 980) {
        this.Mobile = false
        this.open = true
        this.docked = true
      } else {
        this.Mobile = true
        this.open = false
        this.docked = false
      }
    },
    setTheme (val) {
      this.$store.commit('set' + val)
    }
  }
}
</script>
<style lang="scss">
.demo-list-wrap {
  width: 256px;
  position: fixed;
  top: 0;
  bottom: 0;
}

.dark-theme {
  background-color: #424242 !important;
  .mu-sub-header{
    color: #fff !important;
  }
  .subtitle{
    color: #fff !important;
  }
 .mu-appbar{
    background-color: #424242 !important;
 }
  .mu-item{
    color: #fff !important;
  }
  .mu-icon{
    color: #fff !important;
  }
}
.mu-appbar-header {
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  overflow: hidden;
   transition: 0.2s;
   z-index: 101 !important;
}
.h-is-open {
  left: 256px;
}
.c-is-open {
  padding-left: 256px;
}
.app-content {
  padding-top: 64px;
}
.subtitle {
  font-size: 20px;
  width: 120px;
  text-align: center;
  font-weight: 500;
  color: black;
}
.content-body {
  padding-top: 16px;
  margin: 0 auto;
  max-width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 100px;
  transition: 0.2s
}
/* @media screen and (min-width: 960px) {
  .content-body {
    max-width: 960px;
  }
} */

@media screen and (min-width: 600px) {
  .content-body {
    padding-left: 24px;
    padding-right: 24px;
  }
}
.menu-active{
  color: red
}
</style>
