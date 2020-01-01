Vue.component('question',{
    template:`
        <div>
            <table>
                <thead>
                    <tr>
                        <td colspan="4">开始答题</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(list,index) in getData">
                        <td>题目：{{list.ques}}</td>
                        <td>
                            <span v-for="(item,i) in list.ans">
                                <input type="radio" />
                                <b>{{item}}</b>
                            </span>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <td colspan="4">
                        <button>提交</button>
                    </td>
                </tfoot>
            </table>
        </div>
    `,
    data () {
        return {
            getData:null
        }
    },
    mounted () {
        fetch('../json/queList.json')
        .then(data=>data.json())
        .then(data=>{
            console.log(data)
            this.getData = data
        })
    }
})