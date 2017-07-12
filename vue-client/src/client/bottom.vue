<template>
    <div id="footer">
        <div class="about">
            <Select v-model="model1" style="width:200px" class="select">
                <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
            </Select>
            <div class="list">
                <dl>
                    <dt>爱彼迎</dt>
                    <dd>关于我们</dd>
                    <dd>工作机会</dd>
                    <dd>新闻</dd>
                    <dd>多元化与归属感</dd>
                </dl>
                 <dl>
                    <dt>发现</dt>
                    <dd>信任与安全</dd>
                    <dd>旅行基金</dd>
                    <dd>礼品卡</dd>
                    <dd>商务差旅</dd>
                </dl>
                 <dl>
                    <dt>出租</dt>
                    <dd>为什么要出租</dd>
                    <dd>待客之道</dd>
                    <dd>房东义务</dd>
                </dl>
            </div>
        </div>
        <div class="end">
            <div class="left">
                <img src="../assets/logo.png" alt="">
                <p>© Airbnb, Inc.</p>
            </div>
            <div class="right">
                <a>条款</a>
                <a>隐私</a>
                <a>网站地图</a>
            </div>
        </div>
        
    </div>
</template>

<script>
export default{
     data () {
        return{
            cityList: [
                    {
                        value: 'beijing',
                        label: '中文简体'
                    },
                    {
                        value: 'shanghai',
                        label: '中文繁体'
                    },
                    {
                        value: 'shenzhen',
                        label: '日本语'
                    },
                    {
                        value: 'hangzhou',
                        label: '英文'
                    },
                    {
                        value: 'nanjing',
                        label: '法语'
                    },
                    {
                        value: 'chongqing',
                        label: '韩语'
                    }
                ],
                model1:''
        }
    }
}
</script>

<style lang="scss" scoped> 
    @import "../style/bottom.css"
</style>