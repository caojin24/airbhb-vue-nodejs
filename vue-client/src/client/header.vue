<template>
<div>
    <Row id="header">
        <Col span="12">
             <div id='logo'>
                爱彼迎
            </div>
        </Col>
        <Col span="12">
            <div class="nav">
                
             <Menu mode="horizontal" :theme="theme1" active-name="1">
                <Menu-item >
                    <router-link to='/landload' tag='span'>成为房东</router-link>
                </Menu-item>
                <Menu-item name="2">                   
                   <router-link to='/story' tag='span'>故事</router-link>
                </Menu-item>               
                <Menu-item name="4">                   
                    <router-link to='/help' tag='span'>帮忙</router-link>
                </Menu-item>
                <Menu-item name="5" class="login">                  
                    <router-link to='/register' tag='span'>注册</router-link>
                </Menu-item>
                <Menu-item name="6" class="quit">
                    <router-link to='/login' tag='span'>登录</router-link>
                </Menu-item>
            </Menu>
       </div>     
        </Col>
    </Row>
    <div class="tit">
        <h2>Airbhb爱彼迎</h2>
        <p>旅行中，像当地人一样生活</p>
    </div>
    
</div>
    
</template>
<script>
    
</script>

<style lang="scss" scoped>
    @import  "../style/header.css";
</style>