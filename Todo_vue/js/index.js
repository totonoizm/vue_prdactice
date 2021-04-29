new Vue({
    el:"#app",
    data:{
        new_item:"",
        todos:[]
    },
    methods: {
        add_item: function(){
            if(this.new_item == "") return; //バリデーション　空欄での追加を防ぐ
            // alert("やることリストに" + this.new_item + "を追加しました"),
            todo = {
                item: this.new_item,
                check:false
            };
            this.todos.push(todo) //入力
            this.new_item = "" //入力欄のクリア

        },
        delete_item: function(index){ //index でタスクの順番を取得            
            this.todos.splice(index, 1)
        }


    },

})