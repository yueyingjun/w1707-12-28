Vue.component("custom-input",{
    props:["state","title"],
    template:` <div class="select-input">
               <input type="text" @focus="focus" v-model="title">
           </div>`,
    methods:{
        focus(){
            this.$emit("customevent");
        },
    }
})


Vue.component("custom-list",{
    props:["list-data","state","color"],
    template:`<ul class="select-list" :style="{color:color}" v-show="state==true">
               <li v-for="item in listData" @click="click(item.title)">{{item.title}}</li>
           </ul>`,
    methods:{
        click(val){
            this.$emit("customevent",val);
        }
    }
})
//主键相互沟通 自定义一个事件 slot插槽
