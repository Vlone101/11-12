requirejs.config({
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		}
	}
});

require(
	[
		'jquery',
		'model',
		'view',
		'controller'
	],
	function ($, model, view, controller) {
		var firstToDoList = ['Learn js', 'Learn html', 'Make coffe'];
		var model = new model.Model(firstToDoList);
		var view = new view.View(model);
		var controller = new controller.Controller(model, view);
	}
);