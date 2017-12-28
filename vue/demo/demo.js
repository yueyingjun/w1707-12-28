new Vue({
    el: "#app",
    data:{
        title: "",
        list:[
            {id: 0, title: '条目一', isSelected: false},
            {id: 1, title: '条目二', isSelected: false},
            {id: 2, title: '条目三', isSelected: false},
            {id: 3, title: '条目四', isSelected: false},
        ],
        status: false
    },
    methods:{
        modify(val){
            var flag = true;
            this.list.forEach(ele=>{
                if(ele.isSelected){
                    flag = false;
                    if(val){
                        ele.title = val;
                    }else {ele.title = val;
                        this.list = this.list.filter(e=>{e.isSelected = false; return e.id != ele.id});
                    }
                }
            });
            if(flag){
                this.list.push({id:this.list.length, title: val, isSelected: true});
            }
        },
        selected(item){
            this.title = item.title;
            this.list.forEach(ele=>{ele.isSelected = false;
                if(ele.id == item.id){
                    ele.isSelected = true;
                }
            })
        },
        exchange(){
            this.status = !this.status;
        }
    }
});
