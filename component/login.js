Vue.component('login',{
    template:`
        <div>
        <h1>用户登录</h1>
        <form @submit.prevent>
            <p><input type="text" v-model="username"/></p>
            <p><input type="password" v-model="password"/></p>
            <button @click="login">登录</button>
        </form>
        </div>
    `,
    data () {
        return {
            username:'aaa',
            password:123      
        }
    },
    methods: {
        login(){
            sessionStorage.setItem('username',this.username)
            this.$emit('change', 'userinfo')
        }
    }
})