<template>
	<div class="story">
		<div class="content">
			<div class="head">
				<div class="avatar">
					<img src="../assets/logo.png" height="48" width="48" >
				</div>
				<div class="author">
					<p>caojin</p>
					<p style="font-size: 12px">5天前</p>
				</div>
				<div class="grade">
					<Rate show-text v-model="valueCustomText">
		                <span style="color: #f5a623">{{ valueCustomText }}</span>
		            </Rate>
				</div>
			</div>
			<div class="main">
				<div class="img" style="text-align: center">
					<img :src="list.img">
				</div>
				<div class="text">
					{{render(list.desc)}}
				</div>
			</div>

			<div class="comment">
				<Input v-model="value" type="textarea" :rows="4" placeholder="请评论..."></Input>
				<Button type="submit" style="float: right;margin-top:20px;background:green;color:#fff; " @click="submit">提交</Button>
			</div>
			<div class="commentlist">
				<h3>评论列表：</h3>
				<div class="comlist">
					<Card v-for="commentList in commentLists" style="margin-bottom: 10px;">
		                <p slot="title" style="height:50px">{{commentList.name}}  <Button type="error" style="float:right;" @click="deleteComment(commentList._id)">删除</Button></p>
		                <p>{{commentList.desc}}</p>
		            </Card>
				</div>
				
	            <Page :total="filter.total" :current="filter.page" :page-size="5" @on-change="changePage"></Page>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				list:[],
				filter:{
					page: 1,
					limit: 5,
					name: '',
					total: 0
				},
				valueCustomText: 3.8,
				value:'',
				comment:{
					logId:this.$route.params.id,
					name:'caojin',
					desc:''
				},
				commentLists:[]
			}
		},
		methods:{
			getData(){
				var _this = this;
	             _this.$http.post('http://localhost:3000/log/list')
                 .then(function(response) {
                     var data = response.data.docs;
                     for(var i=0;i<data.length;i++){
                     	if(data[i]._id == _this.$route.params.id){
                     		_this.list = data[i];
                     	}
                     }
                 })
			},
			submit(){
				var _this = this;
				this.comment.desc = this.value;
				_this.$http.post('http://localhost:3000/comment/data',_this.comment)
				.then(function(response){
					_this.getComment();
				})
				this.value = '';
				
			},
			getComment(){
				var _this = this;
				_this.$http.post('http://localhost:3000/comment/list',_this.filter)
				.then(function(response){
					_this.commentLists = response.data.docs;
					_this.filter.total = response.data.total;
				})
			},
			changePage(page) {
				var _this = this;
				_this.filter.page = page;
				_this.getComment();
	        },
	        deleteComment(id){
	        	var _this = this;
				_this.$http.delete(`http://localhost:3000/comment/${id}`)
				.then(function(response){
					_this.getComment();
				});

	        },
	        render(string){
            	 var html;
            	 html=string.replace(/^(\<p\>)/,'').replace(/(\<\/p\>)$/,'');
            	 return html;
            }
		},
		watch:{
			commentLists:function(a,b){
				console.log(a);
			}
		},
		created(){
			this.getData();
			this.getComment();
		}
	}
</script>

<style lang="scss" scoped>
	@import "../style/storylist.css"
</style>