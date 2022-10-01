<template>
  <div class="view">
    <div class="view-header">
      <div class="view-title">
        <span style="text-align: center;">{{article.articleTitle}}</span>
        <div class="view-dateTime">
          Create at {{article.createTime}}
        </div>
      </div><img src="https://tvax1.sinaimg.cn/large/006MWoJqgy1h299wqkpalj31e010s1ip.jpg" alt="">
    </div>

    <div class="article-directory" v-show="directory">
      <div v-html="point" id="point"></div>
    </div>

    <div class="view-content ">

      <hr>
      <div v-highlight class="view-arti " id="pai-md" v-html="article.articleBodyVo.content">

      </div>

      <hr />
    </div>

    <!-- 评论写入滴滴滴滴 -->
    <div class="view-comments">
      <div class="comment-header">
        <div class="comment-title">
          <span>评论区</span>
        </div>
        <div class="commit">
          <div class="commit-info">
            <input type="text" v-model="QQinputData" placeholder="QQ(必填)">
            <input type="text" placeholder="email(选填)">
            <input type="text" placeholder="https(选填)">
          </div>
          <div class="commit-canti">
            <textarea placeholder="欢迎留言" v-model="commentParams.content" style="width:100%;height:100%;"></textarea>
          </div>
          <div class="commit-submit">
            <span @click="submitInfo">提交</span>
          </div>
        </div>

        <!-- 小伙伴评论地方 -->
        <div class="friend">
          <div class="friend-container" v-for="(item, index) in articleComment" :key="index">
            <div>
              <img :src="item.authorImg" alt="">
            </div>
            <!-- <div class="friend-title"> -->
            <div class="friend-info">
              <div class="friend-nickname">{{item.commentUsername}} <span><a href="">回复</a></span></div>
              <div class="friend-time">{{item.ctime}}</div>
              <!-- 评论内容 -->
              <div class="friend-msg">{{item.content}}</div>
              <!-- 子评论 -->
              <div>
                <div v-for="(it,ind) in item.childrens" :key="ind">
                  <div>
                    <img :src="it.authorImg" alt="">
                  </div>
                  <!-- <div class="friend-title"> -->
                  <div class="friend-child">
                    <div class="friend-nickname">{{it.commentUsername}} <span><a href="">回复</a></span></div>

                    <div class="friend-time">{{it.ctime}}</div>
                    <!-- 评论内容 -->
                    <div class="friend-msg" style="border: 0;!important">{{it.content}}</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- 右侧工具栏 -->
    <div class="protools">
      <ul>
        <li><svg class="icon" aria-hidden="true" @click="directory = !directory">
            <use xlink:href="#icon-shaixuan"></use>
          </svg></li>
        <li @click="toTop"><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-huidaodingbu"></use>
          </svg></li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import "@/assets/js/comment.js"
import message from "@/assets/js/message";
import { getArticle } from "@/api/article"
import { Comment, GetComment, GetAv } from "@/api/comment"
import { marked } from 'marked'
export default {
  components: {
  },
  data() {
    return {
      //文章目录

      comment: {
        QQinputData: ''
      },

      point: ' ',
      directory: true,
      QQstatus: false,
      QQinputData: '',
      timer: 0,
      article: '',
      QQ: '',
      email: '',
      ipAdd: '',
      img: '',
      name: '',
      commentParams: {
        usernameId: '',
        commentUsername: '',
        content: '',
        articleId: '',
        parentId: '',
        authorImg: ''
      },
      articleComment: ''
    }
  },
  methods: {
    //返回顶部
    toTop() {
      let timer = -1
      let scrollTo = document.documentElement.scrollTop || document.body.scrollTop
      if (timer === -1) {
        timer = setInterval(() => {
          scrollTo -= 100
          if (scrollTo <= 0) {
            scrollTo = 0
            window.clearInterval(timer)
            timer = -1
          }
          window.scrollTo(0, scrollTo)
        }, 10);
      }
    },
    msg(value) {
      var QQtest = /^[1-9][0-9]{4,10}$/
      if (!QQtest.test(value)) {
        message.run("QQ格式错误", "error")
        // this.QQstatus = false
      } else {
        this.QQstatus = true
        GetAv(value).then(res => {
            this.commentParams.commentUsername = res.data.data.name
            this.commentParams.authorImg = res.data.data.avatar
            this.QQinputData = res.data.data.name
        })
      }
    },
    // 根据id获取文章详情
    getArticle() {
      let id = this.$route.params.id
      getArticle(id).then(res => {
        if (res.data.code === 200) {
          this.article = res.data.data;
          // md格式渲染在页面
          this.article.articleBodyVo.content = marked(res.data.data.articleBodyVo.content)

        }
      })
    },
    submitInfo() {
      if(this.QQstatus == false)
        return;
      this.commentParams.articleId = this.$route.params.id
      console.log(this.commentParams)
      Comment(this.commentParams).then(res => {
        if (res.data.code === 200) {
          this.$message({
            type: 'success',
            message: '评论成功'
          })

          this.commentParams.parentId = ''
          this.commentParams.content = ''
          this.QQ = ''
          this.getAllComment()
        }
      })
    },
    getAllComment() {
      let id = this.$route.params.id
      GetComment(id).then(res => {
        if (res.data.code === 200) {
          this.articleComment = res.data.data
          console.log(this.articleComment)
        }
      })
    },
    showDetails(id, textid) {
      var el = document.getElementsByClassName("comment-submit")[0]
      this.$nextTick(function () {
        window.scrollTo({ "behavior": "smooth", "top": el.offsetTop - 100 });
      })
      this.commentParams.parentId = id
      this.commentParams.content = '@' + this.articleComment[textid].commentUsername + "    "
    }
  },
  // mounted() {
  //   var points = $('#pai-md') //内容列表
  //   console.log(points)
  //   var point = ''
  //   //循环获取内容的所有标签
  //   for (var i = 0; i < points[0].children.length; i++) {

  //     // 获取带H的标签
  //     if (points[0].children[i].localName.indexOf('h') !== -1 && points[0].children[i].localName.indexOf('hr') == -1) {

  //       // 获取h2
  //       if (points[0].children[i].localName.indexOf('h1') !== -1) {
  //         points[0].children[i].className = i

  //       }
  //       // // 获取h2
  //       if (points[0].children[i].localName.indexOf('h2') !== -1) {
  //         points[0].children[i].className = i
  //       }
  //       //获取h3
  //       if (points[0].children[i].localName.indexOf('h3') !== -1) {
  //         points[0].children[i].className = i
  //       }

  //       const title = $.extend(true, {}, points[0].children[i]);


  //       point += title.outerHTML
  //       points[0].children[i].id = `h1_id_${i}`

  //     }
  //   }

  //   console.log(111111)
  //   this.point = point
  //   //循环获取标题标签给内容加点击事件
  //   //延迟0秒
  //   setTimeout(function () {

  //     //循环获取内容的所有标签
  //     for (var i = 0; i < $('#point')[0].children.length; i++) {
  //       // $('#point')[0].children[i].className 设置class名称

  //       //绑定点击事件根据className定位内容ID位置
  //       $($('#point')[0].children[i]).click(function (e) {
  //         location.href = `#h1_id_${e.target.className}`;
  //       })
  //     }
  //   }, 0); //延时10秒

  // },
  //监听数据变换
  watch: {
    QQinputData(value) {
      if (this.timer === 0) {
        this.timer = setTimeout(() => {
          //  this.GetValue()
          this.msg(value)
        }, 1000)
      } else {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          //  this.GetValue()
          this.msg(value)
        }, 1000)
      }

    }
  },
  created() {
    this.getArticle()
    this.getAllComment()


  }
}
</script>

<style lang="less" scoped>
@import url("@/assets/css/article.css");
@import url("@/assets/css/message.css");

.view-header {
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .view-title {
    position: absolute;
    left: 50%;
    top: 20%;
    margin-left: -80px;

    span {
      font-size: 2em;
      color: white;
      font-weight: 800;
      letter-spacing: 3px;
    }

    .view-dateTime {
      margin-top: 15px;
      color: white;
    }
  }
}

.article-directory {
  z-index: 10;
  top: 10px;
  margin-top: 100px;
  // box-shadow: 1px 0px 10px 10px #a1a0a082;
  background: rgb(245, 244, 244);
  position: fixed;
  max-width: 33%;
  border-radius: 10px;
  right: 0;
  transition: all 0.9s;

  h1 {
    font-size: 10px;
  }

  #point {

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding: 5px 0;
      cursor: pointer;
      transition: all 0.9s;
    }

    h1:hover,
    h2:hover,
    h3:hover,
    h4:hover,
    h5:hover,
    h6:hover {
      padding-left: 4px;
      text-decoration: underline;
    }

  }

  #point h1 {
    font-size: 16px;
    border: 0 !important;

  }

  #point h2 {
    font-size: 16px;
    margin-left: 5px;
    border: 0 !important;
  }

  #point h3 {
    font-size: 16px;
    margin-left: 15px;
    border: 0 !important;
  }

  #point h4 {
    font-size: 16px;
    margin-left: 25px;
    border: 0 !important;
  }

  #point h5 {
    font-size: 16px;
    margin-left: 35px;
    border: 0 !important;
  }

}

.view-content {
  margin-top: 20px;
  padding-bottom: 50px;
  background: rgba(255, 255, 255, 0.443);
  padding-top: 50px;
  position: relative;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  animation: header-menu 1.8s;
  transition: all .4s ease !important;
  // box-shadow: 1px 0px 10px 10px #a1a0a082;
  border-radius: 10px;

  hr {
    margin: 0 auto;
    width: 96%;
    border: 1px dashed #ececec;
  }

  .view-arti {

    // background: rgba(255, 255, 255, 0.373);

    margin: 0 100px;

    pre {
      background: rgba(221, 215, 215, 0.668) !important;
    }
  }
}

.view {
  // background: url(https://api.yimian.xyz/img);
  background-position: center center;
  repeat: no-repeat;
  background-attachment: fixed;
  filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/background.jpg', sizingMethod='scale');
  -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/background.jpg', sizingMethod='scale');
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
}

.view-comments {
  background: rgb(255, 255, 255);
  margin-top: 10px;
  padding-bottom: 30px;
  // box-shadow: 1px 0px 10px 10px #a1a0a082;
  border-radius: 10px;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;

  .comment-header {

    padding: 10px 30px 0;

    .comment-title {
      // border-bottom: 1px solid rgba(0, 0, 0, 0.494);
      padding-bottom: 10px;

      span {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 5px;
      }
    }

    .commit {
      padding: 10px 0;
      // margin-top: 2px;
      border: 1px solid rgb(187, 183, 183);
      border-radius: 5px;

      .commit-info {
        display: flex;
        line-height: 1.75px;
        height: 50px;
        border-bottom: 1px dashed rgb(169, 162, 162);
        margin: 0 10px 40px;

        input {
          width: 32%;
          outline: none;
          border: 0px;
          font-weight: 300;
        }

      }

      .commit-canti {
        margin: 0 10px 2px;
        height: 200px;

        textarea {
          border: 0px;
          outline: none;
        }

      }

      .commit-submit {
        margin: 0 10px;
        text-align: right;

        span {
          padding: 5px 15px;
          border: 1px solid rgb(51, 51, 51);
          border-radius: 5px;
          right: 0;
          display: inline-block;
          font-size: 14px;
          cursor: pointer;

        }
      }
    }

  }


}

.protools {
  position: fixed;
  right: 40px;
  bottom: 60px;
  z-index: 10;

  li {
    margin: 40px 0;
    list-style: none;
    background: rgb(221, 226, 227);
    padding: 10px;
    border-radius: 100%;

    svg {
      height: 25px;
      width: 30px;
    }

    cursor: pointer;
    box-shadow: 1px 0px 5px 5px #dbdbdbe9;
  }
}

// 小伙伴的评论区
.friend {
  padding: 10px 10px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    margin-top: 10px;
    float: left;
  }

  .friend-child {
    margin-left: 60px;
  }

  .friend-container {
    .friend-info {
      margin-left: 60px;
      display: block;
      border-bottom: 1px dashed rgb(185, 184, 184);

      div {
        display: list-item;
        list-style: none;
      }
    }


    .friend-nickname {
      font-size: 14px;
      line-height: 1.5;
      font-weight: 500;
      color: #344951;

      a {
        text-decoration: none;
        color: rgb(16, 130, 168);
        font-weight: 600;
      }
    }

    .friend-time {
      font-size: .75em;
      margin-right: .875em;
    }

    .friend-msg {
      padding: 10px 0 20px;
      color: rgba(34, 32, 32, 0.633);
      font-size: 15px;
    }

  }
}
</style>