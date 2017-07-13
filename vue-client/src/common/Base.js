export default {
	data(){
		return {
			HZlist:[],
			BJlist:[],
			SHlist:[],
			storys:[],
			hangzhou: {
				cateId:'596589a28d95eabf4b97ebc4',
				page: 1,
				limit: 6,
				name: '',
				total: 0
             },
             beijing:{
             	cateId:'596589a68d95eabf4b97ebc5',
				page: 1,
				limit: 6,
				name: '',
				total: 0
             },
             shanghai:{
             	cateId:'596589a98d95eabf4b97ebc6',
				page: 1,
				limit: 6,
				name: '',
				total: 0
             },
             filter:{
				page: 1,
				limit: 4,
				name: '',
				total: 0
             }
		}
	},
	methods:{
		getHZData(){
			var _this = this;
			this.$http.post('http://localhost:3000/hotplace/list',_this.hangzhou).then((response) => {
			   _this.HZlist = response.data.docs;
			   console.log(_this.HZlist);
			   return _this.HZlist;
			})
		},
		getBJData(){
			var _this = this;
			this.$http.post('http://localhost:3000/hotplace/list',_this.beijing).then((response) => {
			   _this.BJlist = response.data.docs;
			   console.log(response.data);
			   return _this.BJlist;
			})
		},
		getSHData(){
			var _this = this;
			this.$http.post('http://localhost:3000/hotplace/list',_this.shanghai).then((response) => {
			   _this.SHlist = response.data.docs;
			   console.log(response.data);
			   return _this.SHlist;
			})
		},
		getStory(){
			var _this = this;
			this.$http.post('http://localhost:3000/log/list',_this.filter).then((response) => {
			   _this.storys = response.data.docs;
			   console.log(response.data);
			   return _this.storys;
			})
		}
	},
	created() {
         this.getHZData();
         this.getBJData();
         this.getSHData();
         this.getStory();
    }
}