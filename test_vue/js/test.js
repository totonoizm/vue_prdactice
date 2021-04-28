new Vue({
    el: "#app1",
    data:{
        message: "heo",
        url: "https://jp.vuejs.org",
        toggle: true
    },
    methods: {
        onclick: function(){
            this.message = "konbanwa"
        }
    },
}),
new Vue({
    el: "#app2",
    data:{
        languages: [
            "Ruby",
            "Python",
            "JavaScript"
        ]
    },
}),
new Vue({
    el: "#app3",
    data:{
        message1:"halo"
    }
})