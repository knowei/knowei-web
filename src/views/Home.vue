<template>
  <div class="home">
    <Header />
    <div v-if="this.$route.path != '/'">
      <router-view />
    </div>
    <div v-else>
      <Profile />
      <!-- //滚动条监听 -->
      <div class="index-content" flex="auto" @scroll=handleScrollScroll()>
        <div style="font-size: 16px; font-weight: 700;letter-spacing: 1px;margin-bottom: 10px;">文章</div>
        <hr style="margin-bottom: 20px;">

        <div class="box">

          <article class="article-item" v-for="(item, index) in articleList" :key="index">
            <div class="article-list">
              <div class="article-span " :class="{arright:index % 2 == 0}">
                <div class="article-time">发表于 {{item.createTime}}</div>
                <div class="article-title">
                  <router-link to="/view">
                    <router-link :to="{name: 'article', params:{id: item.id}}">
                      <h1>{{item.articleTitle}}</h1>
                    </router-link>
                  </router-link>
                </div>

                <div class="article-ex">
                  <div>{{item.count}} 评论</div>
                  <div>{{item.category.categoryName}}</div>
                </div>
                <div class="article-des">
                  {{item.articleDescribe}}
                </div>
              </div>
              <div class="article-item-right" :class="{arleft: index % 2 == 0}">
                <router-link :to="{name: 'article', params:{id: item.id}}"><img class="article-img"
                    :class="{arright: index % 2 == 0}" :src="item.articleCover" />
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <div>

    </div>

    <footer>
      <div class="my-footer">
        <div class="font-name">knowei by design</div>
      </div>
    </footer>
  </div>
</template>

<script>
import $ from "jquery"
import Header from '@/components/Header.vue';
import Profile from '@/components/Profile.vue';
//鼠标样式
import "@/assets/js/shubiao"
import { getAtricleList } from "@/api/article"


export default {
  name: 'Home',
  components: {
    Header,
    Profile
  },
  data() {
    return {
      current: 1,
      pageSize: '',
      total: '',
      articleList: [],
      pageVo:{
        current:1,
        page: '',
        pageSize: '',
        total:''
      }
    }
  },
  methods: {
    // 获取全部文章
    getAll() {
      var con = this.pageVo.current
      getAtricleList(con).then(res => {
        if (res.data.code === 200) {
          this.articleList = res.data.data
          this.pageVo = res.data.pageVo
          
        }
      })
    },
    // 加载更多文章
    onLoad() {
      for (let i = 0; this.pageVo.current < this.pageVo.pageSize, i <= 0; i++) {
        getAtricleList(this.pageVo.current + 1).then(res => {
          if (res.data.code === 200) {
            for (let i = 0; i < res.data.data.length; i++) {
              this.articleList.push(res.data.data[i])
            }
            this.pageVo = res.data.pageVo
            console.log(this.pageVo)
          }
        })
      }

      // 加载状态结束
      this.loading = false;

      // 数据全部加载完成
      if (this.total >= 6) {
        this.finished = true;
      }
    },
    windowScroll() {
      //动画加载文章列表
      const list = document.querySelectorAll(".article-item");
      const windowHeight = window.innerHeight
      list.forEach(item => {
        const rect = item.getBoundingClientRect()
        const y = rect.y
        if (y > windowHeight - 100) {
          item.classList.remove("show")
        } else {
          item.classList.add("show")
        }
      })

      //下拉加载文章列表
      var scrollTop = document.documentElement.scrollTop;
      var scrollHeight = document.documentElement.scrollHeight;
      var windowHeight1 = document.documentElement.clientHeight;;

      if (scrollTop + windowHeight1 == scrollHeight && this.pageVo.current * 2 <= this.pageVo.total) {
        //当滚动到底部时,执行此代码框中的代码
        // console.log("you are in the bottom");
          this.onLoad()        
      }
    }
  },
  mounted() {
    //监听滚动条增加动画
    window.addEventListener('scroll', this.windowScroll)
  },
  created() {
    this.getAll()
  }
}
</script>

<style lang="less" scoped>
@import url("@/assets/scss/lbtu.scss");

.arright {
  border-bottom-right-radius: 0px !important;
  border-top-right-radius: 0px !important;
  border-bottom-left-radius: 10px !important;
  border-top-left-radius: 10px !important;
}

.arleft {
  float: left;
  border-bottom-right-radius: 0px !important;
  border-top-right-radius: 0px !important;
  border-bottom-left-radius: 10px !important;
  border-top-left-radius: 10px !important;
}

.arright {
  float: right;
  margin-right: 15px;
}


span {
  display: block;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0.4px 0.4px 0.4px 0px #fff;
}

footer {

  clear: both;
  // position: absolute;
  min-height: 100px;
  padding: 15px 0;
  color: #888;
  line-height: 1.5;
  background-image: linear-gradient(to right, #00c9ff, #92fe9d);


  .font-name {

    text-align: center;
    font-weight: 700;
    font-size: 20px;

  }
}
</style>