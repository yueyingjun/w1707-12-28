
Vue.component("select-input",{
    props:['title','state'],
    template:`<div class="select-input">
                <input type="text" placeholder="请输入你要搜索的内容" @focus="focus" v-model="title">
            </div>`,
    methods:{
        focus(){
            this.$emit("config");
        }

    }
})

Vue.component("select-list",{
    props:['list','state'],
    template:`<ul class="select-list">
                <li v-for="item in list" v-show="state==true" @click="value(item.title)">{{item.title}}</li>
            </ul>`,
    methods:{
        value(val){
            this.$emit('config1',val)
        }
    }
})
