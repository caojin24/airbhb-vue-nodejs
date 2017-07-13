<template>
	<div class="hotlist">
		<div class="listt">
			<div class="card" v-for="list in lists">
				<img :src="list.name" style="width:333px;height: 222px;">
				<p>{{render(list.desc)}}</p>
	            <p><Icon type="ios-star" v-for="n in 5"></Icon>&nbsp;<span>{{list.commentCount}} 条评价</span>
	            </p>
			</div>
		</div>
		<div style="margin: 20px auto;overflow: hidden; width:1032px;">
            <div style="float: right;">
                <Page :total="filter.total" :current="filter.page" :page-size="6" @on-change="changePage"></Page>
            </div>
        </div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				lists:[],
				filter:{
					cateId:this.$route.params.id,
					page: 1,
					limit: 6,
					name: '',
					total: 0
				}

				
			}
		},
		methods:{
			getList(){
				var _this = this;
				this.$http.post('http://localhost:3000/hotplace/list',_this.filter).then((response) => {
				   _this.lists = response.data.docs;
				   _this.filter.total = response.data.total;
				   console.log(response.data);
				   return _this.lists;
				})
			},
			render(string){
            	 var html;
            	 html=string.replace(/^(\<p\>)/,'').replace(/(\<\/p\>)$/,'');
            	 return html;
            },
            changePage(page) {
				var _this = this;
				_this.filter.page = page;
				_this.getList();
	        }
		},
		created(){
			this.getList();
		}
	}
</script>

<style lang="scss" scoped>
	@import "../style/hotlist.scss";
</style>