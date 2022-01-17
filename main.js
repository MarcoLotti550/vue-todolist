let vm = new Vue({
    el:"#app",
    data: {
        isActive: false,
        array: []
    },
    methods:{
        aggiungiElemento : function(){
            if(document.getElementById("aggiungi").value != ""){
                let object = {text : document.getElementById("aggiungi").value,
                          done : false};
                this.array.push(object);
                document.getElementById("aggiungi").value = "";
            }

        },

        cancellaElemento : function(index){
            this.array.splice(index, 1);
        },
        isActive : function (index) {
           
        },
    }
});