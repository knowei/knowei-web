<template>
    <div class="my-header">
        <div class="header">
            <a href="#" class="logo">LOGO</a>
            <ul>
                <li><a><router-link to="/">Home</router-link></a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <!-- <div class="me" >
            <section class="banner"></section>
        </div> -->
        
    </div>
</template>

<script>
import "@/assets/js/header"
export default {

}
</script>

<style lang="less" scoped>



.header {
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.6s;
    padding:20px 100px;

    .logo {
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        color: rgb(255, 253, 253);
        letter-spacing: 2px;
        font-size: 2em;
        transition: 0.6s;
    }

    ul {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        li {
            position: relative;
            list-style: none;

            a {
                position: relative;
                margin: 0 15px;
                text-decoration: none;
                color: #fff;
                letter-spacing: 2px;
                font-weight: 500px;
                transition: 0.6s;
            }
        }
    }

}

.header.sticky{
    padding: 5px 100px;
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    a{
        color: #000;
        font-weight: 700;
    }
}


// .banner{
//     position: relative;
//     width: 100%;
//     height: 100vh;
//     background: url(https://tvax1.sinaimg.cn/large/006MWoJqgy1h299wqkpalj31e010s1ip.jpg);
//     background-size: cover;
// }

</style>