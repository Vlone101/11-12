
define(
	'view',
	['jquery'],
	function() {

		return {
			View: function View(model) {
				var self = this;

				function init() {
					var wrapper = tmpl($('#wrapper__template').html());
					$('body').append(wrapper);
					self.elements = {
						input: $('.wrapper__controlls__item__value'),
						addBtn: $('.wrapper__controlls__item__add'),
						listContainer: $('.wrapper__item__list')
					};
					self.renderList(model.data);
				};

				self.renderList = function (data) {
					var list = tmpl($('#list__template').html(), {
						data: data
					});
					self.elements.listContainer.html(list);
				};

				init();
			}
		};
	}
);