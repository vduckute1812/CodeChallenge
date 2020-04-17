new Vue({
        el: '#exercise',
        data: {
            value: '',
            counter: 0,
            secondCounter: 0
        },
        methods:{
        	showAlert: function(){
        		alert('Alert')
        	},
        	changeData: function(event){
        		this.value = event.target.value;
        	}
        }
    });