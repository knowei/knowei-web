<template>
  <div class="my">
    <div class="my-header">
      <div>
        <div class="archive-title">
          <div >关于我</div>
        </div>
      </div>
    </div>

    <div class="my-info">
        <div class="my-name">
          KNOWEI
        </div>
        <div class="my-jieshao">
            <span>
              大三狗，什么都不会<br/>
            </span>
            <span>
             希望做一个全栈工程师😀
            </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  meta:{
    index: 5
  },
}
</script>

<style lang="less" scoped>
.my-header{
  height: 300px;
  
  .archive-title {
    div {
      display: inline;
    }

    position: absolute;
    font-size: 25px;
    color: #676767;
    font-weight: 700;
    letter-spacing: 3px;
    left: 50%;
    top: 10%;
    margin-left: -90px;
  }
}
.my-info{
  .my-name{
    text-align: center;
    font-weight: 800;
    letter-spacing: 2px;
    font-size: 2em;
  }

  .my-jieshao{
    margin-top: 30px;
    max-width: 500px;
    background: #e6e3e3;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    background: url(https://tvax3.sinaimg.cn/large/006MWoJqgy1h6q46oqkpmj318g0ujawn.jpg);
    background-size: cover;

    span{
      font-size: 17px;
      padding-top: 10px;
      margin-left: 10px;
      font-weight: 700;
    }
  }
}
</style>