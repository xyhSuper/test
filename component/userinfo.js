Vue.component('userinfo',{
    template:`
        <div>
            <h3>用户信息</h3>
            <div>
                <img src="https://gss3.bdstatic.com/84oSdTum2Q5BphGlnYG/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=b3afb6f226f99ab678f69347a35e3006&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2F96dda144ad345982e05ec03600f431adcaef84b9.jpg"/>
                <p>欢迎您：{{username}}</p>
                <button @click="userinfo">开始答题</button>
            </div>
        </div>

    `,
    methods: {
        userinfo(data){
            this.$emit('change', 'question')
        }
    },
    mounted () {
        this.username=sessionStorage.getItem('username')
    },
    data () {
        return {
            username:'',
        }
    }
})