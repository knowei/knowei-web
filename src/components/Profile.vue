<template>
    <div class="pro">

        <div class="me" >
            <section class="banner"></section>
        </div>

        <div class="pro-file">
            <div class="myinfo">
                <span style="font-weight: 800;font-size: 3em;letter-spacing: 5px;color: #fff;"> KNOWEIのBLOG</span><br/>
                <span style="font-weight: 300; font-size: 25px;padding-top: 100px;color: #fff">我可以孑然一身，但不能心无所属。</span>
            </div>
        </div>
        <div class="down"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.banner{
    position: relative;
    width: 100%;
    height: 100vh;
    background: url(https://tvax1.sinaimg.cn/large/006MWoJqgy1h299wqkpalj31e010s1ip.jpg);
    background-size: cover;
}

.pro-file {
    width: 100%;
    height: 100%;
    background: rgba(94, 92, 92, 0.294);
    // border: 1px solid #ccc;
    position: absolute;
    top: 0;
    left: 0;

}

.myinfo{
    text-align: center;
    margin: 500px 0;
}

.down {
    color: rgb(254, 254, 254);
    width: 54px;
    height: 60px;
    position: absolute;
    cursor: pointer;
    left: 50%;
    bottom: 120px;
    margin-left: -27px;
    background: url("@/assets/img/jiantou.png") center no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    animation: arrow-load 2s infinite;
}
//动画
@keyframes arrow-load{
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;
        bottom: 90px;
    }
    100%{
        opacity: 1;
        bottom: 80px;
    }
}
</style>