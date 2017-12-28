new Vue({
    el: '#root',
    data:{
        datas:[
            {
                id:1,
                title:1111,
            },
            {
                id:2,
                title:111221,
            },
            {
                id:3,
                title:11123441,
            }
        ],
        status:false,
        title:""
    },
    methods:{
        focus:function () {
           this.status=true
        },
        blur(){
            this.status=false
        },
        click(val){
            this.title=val;
        }
    }
})