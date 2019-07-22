
new Vue({
	el: "#app",
	data: {		
		todos: [{text: 'Make a TODO application', done: false, id:Date.now()}]
	},
	methods: {
		Add() {
			const text = document.getElementById('to').value;
			this.todos.push({text,done: false,id: Date.now()})
			document.getElementById('to').value = ''
		},
		Subtract(id) {
			this.todos = this.todos.filter(todo => todo.id !== id)
		}
	}
})