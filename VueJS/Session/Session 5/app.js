Vue.component('hello2', {
	template:'<h1>Hello3!</h1>'
});

var vm = new Vue({
	el:"#app",
	data:{
		title: 'Hello',
		count: 0
	}, 
	methods: {
		changeName: function() {
			this.$refs.myBytton.innerText = 'Test';
		},
		destroy: function() {
			this.$destroy();
		}
	},
	beforeCreate: function() {
		console.log('beforeCreate');
	},
	created: function() {
		console.log('created');
	},
	beforeMount: function() {
		console.log('beforeMount');
	},
	mounted: function() {
		console.log('mounted');
	},
	beforeUpdate: function() {
		console.log('beforeUpdate');
	},
	updated: function() {
		console.log('updated');
	},
	beforeDestroy: function() {
		console.log('beforeDestroy');
	},
	destroyed: function() {
		console.log('destroyed');
	}
});

new Vue({
	el: '#app2',
});

vm.$refs.heading2.innerText = "Something else";

// new Vue({
// 	el: 'hello',
// 	template: "<h1>Hello2!</h1>"
// });

