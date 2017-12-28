Vue.component('custom-input', {
    props: ['title'],
    template:`<div>
            <div class="select-input">
                <input type="text" v-model="item" @focus="exchange" @blur="exchange1">
            </div>
        </div>`,
    data(){
        return {
            item:this.title
        }
    },
    watch:{
        item(nval, oval){
            this.$emit('update',nval);
        },
        title(nval, oval){
            this.item = nval;
        }
    },
    methods:{
        exchange(){
            this.$emit('exchange');
        },
        exchange1(){
            setTimeout(()=>{this.$emit('exchange');}, 300);
        }
    }
});
Vue.component('custom-list', {
    props: ['datas', "status"],
    template:`
    <div>
    <ul class="list" v-if="status">
                <li v-for="item in list" @click="selected(item)">{{item.title}}</li>
            </ul>
</div>
    `,
    data(){
        return {
            list: this.datas,
            statu: this.status
        }
    },
    methods:{
        selected(item){
            this.$emit('selected', item);
        }
    },
    watch:{
        datas(nval, oval){
            this.list = nval;
        }
    }
});