let vm = new Vue({
    el:"#app",
    data: {
        done: false,
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
        isActive : function(index) {
            if (this.array[index].done == false) {
                this.array[index].done  = true;
            }else{
                this.array[index].done  = false;
            }
        },
    }
});