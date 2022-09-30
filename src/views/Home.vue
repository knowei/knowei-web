<template>
  <div class="home">
    <Header />

    

    <div v-if="this.$route.path != '/'">
      <router-view />
    </div>
    <div v-else>
      <Profile />
      <div class="index-content">
       <div style="font-size: 16px; font-weight: 700;letter-spacing: 1px;margin-bottom: 10px;">文章</div>
        <hr style="margin-bottom: 20px;">

        <div>
          <article class="article-item">
            <div class="article-list">
              <div class="article-span">
                <div class="article-time">发表于2022-09-28</div>
                <div class="article-title"> <router-link to="/view"><h1>Hello World</h1></router-link> </div>
               
                <div class="article-ex">
                  <div>1 评论</div><div>碎碎念</div>
                </div>
                <div class="article-des">
                  你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
                </div>
              </div>
              <div class="article-item-right"><router-link to="/view"><img class="article-img"
                  src="https://tva2.sinaimg.cn/large/006MWoJqgy1h299xguee1j31s01001kx.jpg" /></router-link></div>
            </div>
          </article>

          <article class="article-item">
            <div class="article-list">
              <div class="article-span">
                <div class="article-time">发表于2022-09-28</div>
                <div class="article-title"> <router-link to="/view"><h1>Hello World</h1></router-link> </div>
               
                <div class="article-ex">
                  <div>1 评论</div><div>碎碎念</div>
                </div>
                <div class="article-des">
                  你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
                </div>
              </div>
              <div class="article-item-right"><router-link to="/view"><img class="article-img"
                  src="https://tva2.sinaimg.cn/large/006MWoJqgy1h299xguee1j31s01001kx.jpg" /></router-link></div>
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
import Header from '@/components/Header.vue';
import Profile from '@/components/Profile.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Profile
  },
  methods:{
    test(){
      this.$route.path
    }
  }
}
</script>

<style lang="less" scoped>
@import url("@/assets/scss/lbtu.scss");
.home{
  // background: radial-gradient(120% 50% at bottom center,#f7f7b6,#e96f92,#75517d,#1b2947);
  // background: url(https://api.ghser.com/random/api.php);
  background: #ffffff;
  background-attachment: fixed;
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