<template>
  <div class="view">
    <div class="view-header">
      <div class="view-title">
        <span>我的第一遍文章</span>
        <div class="view-dateTime">
          Create at 2022-09-28 18:10:11
        </div>
      </div><img src="https://tvax1.sinaimg.cn/large/006MWoJqgy1h299wqkpalj31e010s1ip.jpg" alt="">
    </div>

    <div class="article-directory" v-show="directory">
      <div v-html="point" id="point"></div>
    </div>

    <div class="view-content ">
      <div v-highlight class="view-arti " id="pai-md">


        <h1 id='基本算法'>基本算法</h1>
        <h1 id='1位运算'>1.位运算</h1>
        <h2 id='1ab'>1.a^b</h2>
        <p><a href='https://www.acwing.com/problem/content/description/91/'>题目链接</a></p>
        <h3 id='题目描述-1'>题目描述</h3>
        <p>就是让我们求$a^b mod p$的值
          数据范围为
          $0≤a,b≤10^9 1≤p≤10^9$</p>
        <h4 id='样例-1'>样例</h4>
        <h5 id='输入-1'>输入</h5>
        <p>3 2 7</p>
        <h5 id='输出-1'>输出</h5>
        <p>2</p>
        <h3 id='算法1'>算法1</h3>
        <h5 id='数学问题'>数学问题</h5>
        <p>模板题，快速幂算法
          例如求，3^11</p>
        <blockquote>
          <p>3^11 = 3^1 * 3^2 * 3^8
            我们可以把7转换为二进制 1011, 可以看出我们只需把进制上面为1的值进行相乘即可，为0的忽略即可，我们只需循环4次即可把3^11求出来。</p>
        </blockquote>
        <h4 id='c-代码'>C++ 代码</h4>
        <pre v-highlight><code class='language-cpp' lang='cpp'>#include&lt;iostream&gt;
#define ll long long
using namespace std;
int a, b;
int mod;
ll qmi(int m, int k, int p)
{
    ll res = 1 % p, t = m;
    while (k)
    {
        //使用与运算将改为取出来判断是否为1
        if (k&amp;1) res = res * t % p; 
        //求出改为对应的次方
        t = t * t % p;    
        //右移一位，将后面一位移到当前位置  
        k &gt;&gt;= 1;
    }
    return res;
}
int main()
{
    cin &gt;&gt; a &gt;&gt; b &gt;&gt; mod;
    cout &lt;&lt; qmi(a, b, mod);
    return 0;
}
</code></pre>
        <hr />
        <h1 id='2递推与递归'>2.递推与递归</h1>
        <h2 id='1递归实现指数型枚举'>1.递归实现指数型枚举 </h2>
        <p><a href='https://www.acwing.com/problem/content/94/'>题目链接</a></p>
        <h3 id='题目描述-2'>题目描述</h3>
        <p>从 1∼n 这 n 个整数中随机选取任意多个，输出所有可能的选择方案。</p>
        <h4 id='样例-2'>样例</h4>
        <h5 id='输入-2'>输入</h5>
        <p>3</p>
        <h5 id='输出-2'>输出</h5>
        <p>3
          2
          2 3
          1
          1 3
          1 2
          1 2 3</p>
        <hr />
        <h3 id='算法'>算法</h3>
        <h4 id='思路'>思路</h4>
        <p>因为是从n个数中随机选任意多个，所以我们可以使用2进制的形式来代表选和不选当前位置，比如101，即为选择1 3两个数</p>
        <h4 id='c代码'>C++代码</h4>
        <pre><code class='language-cpp' lang='cpp'>#include &lt;iostream&gt;
#include &lt;cstring&gt;
#include &lt;stack&gt;
#include &lt;vector&gt;
#include &lt;algorithm&gt;
using namespace std;
const int N = 15;
int n;
int cnt;
int ans[N];
void dfs(int x, int state)
{
    if(x == n)
    {
        for(int i = 0; i &lt; n; i++)
            if(state &gt;&gt; i &amp; 1)
                cout &lt;&lt; i + 1 &lt;&lt; &quot; &quot;;
        cout &lt;&lt; endl;
        return;
    }
    dfs(x + 1, state);
    dfs(x + 1, state + (1 &lt;&lt; x));
}
int main()
{
    cin &gt;&gt; n;
    dfs(0, 0);
    return 0;
}
</code></pre>
        <h1>你好</h1>
      </div>

      <hr />
    </div>



    <div class="view-comments">
      <div class="comment-header">
        <div class="comment-title">
          <span>评论区</span>
        </div>
        <div class="commit">
          <div class="commit-info">
            <input type="text" placeholder="QQ(必填)">
            <input type="text" placeholder="email(选填)">
            <input type="text" placeholder="https(选填)">
          </div>
          <div class="commit-canti">
            <textarea placeholder="欢迎留言" name="" id="" style="width:100%;height:100%;"></textarea>
          </div>
          <div class="commit-submit">
            <span>提交</span>
          </div>
        </div>

        <!-- 小伙伴评论地方 -->
        <div class="friend">
          <div class="friend-container">
            <div>
              <img src="https://tva4.sinaimg.cn/large/006MWoJqgy1h5vpte222nj31jg1jgjzm.jpg" alt="">
            </div>
            <!-- <div class="friend-title"> -->
            <div class="friend-info">
              <div class="friend-nickname">knowei <span><a href="">回复</a></span></div>
              <div class="friend-time">2022-09-14</div>
              <!-- 评论内容 -->
              <div class="friend-msg">好耶</div>
              <!-- 子评论 -->
              <div>
                <div>
                  <div>
                    <img src="https://tva4.sinaimg.cn/large/006MWoJqgy1h5vpte222nj31jg1jgjzm.jpg" alt="">
                  </div>
                  <!-- <div class="friend-title"> -->
                  <div class="friend-child">
                    <div class="friend-nickname">knowei</div>

                    <div class="friend-time">2022-09-14</div>
                    <!-- 评论内容 -->
                    <div class="friend-msg" style="border: 0;!important">好耶</div>
                  </div>
                </div>
                <div>
                  <div>
                    <img src="https://tva4.sinaimg.cn/large/006MWoJqgy1h5vpte222nj31jg1jgjzm.jpg" alt="">
                  </div>
                  <!-- <div class="friend-title"> -->
                  <div class="friend-child">
                    <div class="friend-nickname">knowei</div>

                    <div class="friend-time">2022-09-14</div>
                    <!-- 评论内容 -->
                    <div class="friend-msg" style="border: 0;!important">好耶</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="friend-container">
            <div>
              <img src="https://tva4.sinaimg.cn/large/006MWoJqgy1h5vpte222nj31jg1jgjzm.jpg" alt="">
            </div>
            <!-- <div class="friend-title"> -->
            <div class="friend-info">
              <div class="friend-nickname">knowei <span><a href="">回复</a></span></div>
              <div class="friend-time">2022-09-14</div>
              <!-- 评论内容 -->
              <div class="friend-msg">好耶</div>
              <!-- 子评论 -->
              <div>
                <div>
                  <div>
                    <img src="https://tva4.sinaimg.cn/large/006MWoJqgy1h5vpte222nj31jg1jgjzm.jpg" alt="">
                  </div>
                  <!-- <div class="friend-title"> -->
                  <div class="friend-child">
                    <div class="friend-nickname">knowei</div>

                    <div class="friend-time">2022-09-14</div>
                    <!-- 评论内容 -->
                    <div class="friend-msg" style="border: 0;!important">好耶</div>
                  </div>
                </div>
                <div>
                  <div>
                    <img src="https://tva4.sinaimg.cn/large/006MWoJqgy1h5vpte222nj31jg1jgjzm.jpg" alt="">
                  </div>
                  <!-- <div class="friend-title"> -->
                  <div class="friend-child">
                    <div class="friend-nickname">knowei</div>

                    <div class="friend-time">2022-09-14</div>
                    <!-- 评论内容 -->
                    <div class="friend-msg" style="border: 0;!important">好耶</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- </div> -->

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
export default {
  data() {
    return {
      point: {},
      directory: false
    }
  },
  methods: {
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
    }
  },
  mounted() {
    var points = $('#pai-md') //内容列表
    var point = ''
    //循环获取内容的所有标签
    for (var i = 0; i < points[0].children.length; i++) {

      // 获取带H的标签
      if (points[0].children[i].localName.indexOf('h') !== -1 && points[0].children[i].localName.indexOf('hr') == -1) {

        // 获取h2
        if (points[0].children[i].localName.indexOf('h1') !== -1) {
          points[0].children[i].className = i

        }
        // // 获取h2
        if (points[0].children[i].localName.indexOf('h2') !== -1) {
          points[0].children[i].className = i
        }
        //获取h3
        if (points[0].children[i].localName.indexOf('h3') !== -1) {
          points[0].children[i].className = i
        }

        const title = $.extend(true, {}, points[0].children[i]);


        point += title.outerHTML
        points[0].children[i].id = `h1_id_${i}`
      }


    }

    this.point = point

    //循环获取标题标签给内容加点击事件

    //延迟0秒
    setTimeout(function () {

      //循环获取内容的所有标签
      for (var i = 0; i < $('#point')[0].children.length; i++) {
        // $('#point')[0].children[i].className 设置class名称

        //绑定点击事件根据className定位内容ID位置
        $($('#point')[0].children[i]).click(function (e) {
          location.href = `#h1_id_${e.target.className}`;
        })
      }
    }, 0); //延时10秒

    console.log(this.point)
  }
}
</script>

<style lang="less" scoped>
@import url("@/assets/css/article.css");

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
      letter-spacing: 7px;
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
  margin-top: 50px;
  // box-shadow: 1px 0px 10px 10px #a1a0a082;
  background: rgb(245, 244, 244);
  position: fixed;
  max-width: 33%;
  border-radius: 10px;
  right: 0;

  div {
    padding: 10px;
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
  margin-top: 50px;
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
      border: 1px solid black;
      border-radius: 5px;

      .commit-info {
        display: flex;
        line-height: 1.75px;
        height: 50px;
        border-bottom: 1px dashed black;
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
          border: 1px solid black;
          border-radius: 5px;
          right: 0;
          display: inline-block;
          font-size: 14px;

        }
      }
    }

  }


}

.protools {
  position: fixed;
  right: 40px;
  bottom: 60px;

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
      border-bottom: 1px dashed black;

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