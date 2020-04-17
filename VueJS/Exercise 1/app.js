new Vue({
	el: '#exercise',
	data: {
		name: 'Dai',
		age: '25',
		linkImg: 'https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
	},
	methods:{
		randomFloat: function(){
			return Math.random();			
		},
		changeName: function(event){
			this.name = event.target.value;
		}
	}
});
