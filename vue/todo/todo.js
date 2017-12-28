Vue.directive('focus',{
    inserted:function (val) {
        val.focus();
    }
})
new Vue({
	el:'#app',
	data:{
		all:localStorage.todo?JSON.parse(localStorage.todo):[],
		con:'',
		status:'0',
	},
	methods:{
		add(){
			if(this.con==''){
				alert('事项不能为空');
				return;
			}
			var obj={};
			obj.id=Math.random()*new Date().getDate();
			obj.content=this.con;
			obj.state='0';
			obj.edit=true;
			this.all.push(obj);
			localStorage.todo=JSON.stringify(this.all);
			this.con='';
		},
		changeS(val){
			this.status=val;
			localStorage.todo=JSON.stringify(this.all);
		},
		changeState(val){
			if(val.state=='0'){
				val.state='1';
            }else if(val.state=='1'){
                val.state='0';
            }
            localStorage.todo=JSON.stringify(this.all);
		},
		del(ids){
			this.all=this.all.filter(ele=>ele.id!=ids);
			localStorage.todo=JSON.stringify(this.all);
		},
		edit(obj){
			console.log(obj);
            obj.edit = !obj.edit;
            localStorage.todo=JSON.stringify(this.all);
        }
	},
	computed:{
		datas(){
			return this.all.filter(ele=>{
				if(this.status=='all'){
					return ele;
				}else{
					return ele.state==this.status;
				}
			});
		}
	}
})