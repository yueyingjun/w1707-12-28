/*
new Vue({
    el:"#root",
    data:{
        datas:[
            {
                id:1,
                title:"123"
            }
        ],
        status:false,
        title:"",
    },
    methods:{
        focus(){
            this.status = true;
        },
        blur(){
            this.status = true;
        },
        click(val){
            this.title =val;
            this.status = false;
        }
    }
})*/
new Vue({
    el:"#root",
    data:{
        datas:[
            {
                id:1,
                title:111111,
            },
            {
                id:2,
                title:222222,
            },
            {
                id:3,
                title:333333,
            },
        ],
        state:false,
        title:"",
    },
    methods:{
        aa(){
            this.state=true;
        },
        bb(val){
            this.title = val;
            this.state=false;
        }
    }
})