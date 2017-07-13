<template>
    <div>
        <div class="select"> 
        	<div class="place">
        		<div class="text">
        			地点
        		</div>
        		<div class="inp">
        			<input type="text" name="" value="" placeholder="目的地，城市，地址">
        		</div>
        	</div>
        	<div class="time">
        		<div class="text">
        			时间
        		</div>
				<div>
					<Date-picker type="daterange" confirm placement="bottom-start" placeholder="选择日期" style="width: 200px" ></Date-picker>
				</div>
        	</div>
        	<div class="guest">
        		<div class="text">
        			房客
        		</div>
				<div>
					<Dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
				        <a href="javascript:void(0)" @click="handleOpen">
				            {{guest}}位房客
				            <Icon type="arrow-down-b"></Icon>
				        </a>
				        <Dropdown-menu slot="list">
				           <input type="text" v-model="guest" ><Button  shape="circle" icon="plus-round" @click="addguest"></Button>
				            <div style="text-align: right;margin:10px;">
				                <Button type="primary" @click="handleClose" size="small">关闭</Button>
				            </div>
				        </Dropdown-menu>
				    </Dropdown>
				</div>
        	</div>
        	<div class="btn">
        		<Button type="error">搜索</Button>
        	</div>
        </div>

        <div class="hotplace">
        	<h3 class="title">热门目的地</h3>
			<div class="tab">
				<Tabs value="name1">
			        <Tab-pane label="杭州" name="name1">
			        	<div class="list">
					        <div class="card" v-for="hzdata in HZlist">
					            <img :src="hzdata.name" style="width:333px;height: 222px;">
					            <p>{{render(hzdata.desc)}}</p>
					            <p><Icon type="ios-star" v-for="n in 5" :key="n"></Icon>&nbsp;<span>{{hzdata.commentCount}} 条评价</span>
					            </p>
					        </div>	
			        	</div>
			        	<router-link to="/hotlist/596589a28d95eabf4b97ebc4">
							<Button type="ghost">查看更多房源</Button>
			        	</router-link>
			        	
			        </Tab-pane>
			        <Tab-pane label="北京" name="name2">
			        	<div class="list">
					        <div class="card" v-for="bjdata in BJlist">
					            <img :src="bjdata.name" style="width:333px;height: 222px;">
					            <p>{{render(bjdata.desc)}}</p>
					            <p><Icon type="ios-star" v-for="n in 5" :key="n"></Icon>&nbsp;<span>{{bjdata.commentCount}} 条评价</span>
					            </p>
					        </div>	
			        	</div>
			        	<div>	
							<Button type="ghost">查看更多房源</Button>
			        	</div>
			        </Tab-pane>
			        <Tab-pane label="上海" name="name3">
			        	<div class="list">
					        <div class="card" v-for="shdata in SHlist">
					            <img :src="shdata.name" style="width:333px;height: 222px;">
					            <p>{{render(shdata.desc)}}</p>
					            <p><Icon type="ios-star" v-for="n in 5" :key="n"></Icon>&nbsp;<span>{{shdata.commentCount}} 条评价</span>
					            </p>
					        </div>	
			        	</div>
			        	<div>	
							<Button type="ghost">查看更多房源</Button>
			        	</div>
			        </Tab-pane>
			        <Tab-pane label="洛杉矶" name="name4">
			        	
			        </Tab-pane>
			        <Tab-pane label="巴黎" name="name5">
			        	
			        </Tab-pane>
			    </Tabs>
			</div>
        </div>

        <div class="story">
        	<div class="title"> 
        		<h3>热门故事</h3>
        		<p>浏览更多<Icon type="chevron-right"></Icon></p>
        	</div>
        	<Row>
		        <Col span="6" v-for="story in storys" >
		        	<div class="card">
		        		<img :src="story.img" alt="">
		        		<p><strong>{{story.name}}</strong></p>
		        		<p><Icon type="chatbox-working"></Icon>{{story.commentCount}}</p>
		        	</div>
		        </Col>
		        
		    </Row>
	
        </div>

        <div class="service">
        	<Row>
		        <Col span="8">
		        	<div>
		        		<h3>400-716-0164</h3>
		        		<p>24小时中文客服</p>
		        	</div>
		        </Col>
		        <Col span="8">
		        	<h3>安全支付</h3>
		        	<p>
		        		支付宝付款已向中国用户开通。了解更多
		        	</p>
		        </Col>
		        <Col span="8">
		        	<h3>芝麻应用</h3>
		        	<p>
		        		实名认证房东房客信息，真实可靠
		        	</p>
		        </Col>
		    </Row>
        </div>

        <div class="summer">
        	<div>
        		<h3>夏天出游好去处</h3>
        	</div>
        	<Row>
		        <Col span="4">
		        	<div class="card">	
						<img src="https://z0.muscache.com/airbnb/static/china_p1_redesign/Kyoto-eb117ccface7c74b8984f3def29f494c.jpg" alt="">
						<p class="name"><strong>京都</strong> 游古城，赏樱花</p>
						<p>人均 ¥ 288/晚</p>
		        	</div>
		        	

		        </Col>
		        <Col span="4">
		        	<div class="card">	
						<img src="https://z0.muscache.com/airbnb/static/china_p1_redesign/Chiang-Mai-2abd4fc5c6772b90625b45a1d253b281.jpg" alt="">
						<p class="name"><strong>清迈</strong> 泰国最文艺小城</p>
						<p>人均 ¥ 168/晚</p>
		        	</div>
		        </Col>
		        <Col span="4">
		        	<div class="card">	
						<img src="https://z0.muscache.com/airbnb/static/china_p1_redesign/London-30da04817ad236faedf36c3414306a2e.jpg" alt="">
						<p class="name"><strong>伦敦</strong> 感受英伦风情</p>
						<p>人均 ¥ 288/晚</p>
		        	</div>
		        </Col>
		        <Col span="4">
		        	<div class="card">	
						<img src="https://z0.muscache.com/airbnb/static/china_p1_redesign/Phuket-538efde91e074e3d57af209d307c9f57.jpg" alt="">
						<p class="name"><strong>普吉岛</strong> 东南亚看海</p>
						<p>人均 ¥ 360/晚</p>
		        	</div>
		        </Col>
		        <Col span="4">
		        	<div class="card">	
						<img src="https://z0.muscache.com/airbnb/static/china_p1_redesign/Los-Angeles-5fb388c91a3cb09e241d8b217468d29a.jpg" alt="">
						<p class="name"><strong>洛杉矶</strong> 好莱坞式繁华</p>
						<p>人均 ¥ 445/晚</p>
		        	</div>
		        </Col>
		        <Col span="4">
		        	<div class="card">	
						<img src="https://z0.muscache.com/airbnb/static/china_p1_redesign/Bali-58c3ae976aea25203c40c097d2789f9d.jpg" alt="">
						<p class="name"><strong>巴厘岛</strong> 度蜜月的首选</p>
						<p>人均 ¥ 396/晚</p>
		        	</div>
		        </Col>
		    </Row>
        </div>
    </div>
</template>

<script>
	import Base from "../common/Base";
	export default {
		mixins:[Base],
        data () {
            return {
                visible: false,
                guest:1
            }
        },
        methods: {
            handleOpen () {
                this.visible = true;
            },
            handleClose () {
                this.visible = false;
            },
            addguest(){
            	this.guest = parseInt(this.guest)+1;
            },
            render(string){
            	 var html;
            	 html=string.replace(/^(\<p\>)/,'').replace(/(\<\/p\>)$/,'');
            	 return html;
            }
        }
    }

</script>

<style lang="scss" scoped>
	@import "../style/index.scss";
</style>