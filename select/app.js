//this.$emit(你那个@的名字)
new Vue({
    el:'.root',
    data:{
        datas:[
            {
                id:1,
                title:11111
            },
            {
                id:2,
                title:4545
            },
            {
                id:3,
                title:8989
            },
        ],
        title:'',
        state:false,
    },

    methods:{
        aa(){
            this.state = true;
        },
        bb(val){
            this.title = val;
            this.state = false;
        }
    }
})