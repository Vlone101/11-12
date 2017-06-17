define(
	'controller', ['jquery'],
	function () {

		return {
			Controller: function Controller(model, view) {
				var self = this;

				view.elements.addBtn.bind('click', addItem);
				view.elements.input.bind('keypress', function (e) {
					if (e.keyCode == 13) {
						addItem();
						return false;
					}
				});
				view.elements.listContainer.delegate('.list__template__item__delete', 'click', removeItem);
				view.elements.input.bind('click', editItem);

				function addItem() {
					var newItem = view.elements.input.val();
					model.addItem(newItem);
					view.renderList(model.data);
					view.elements.input.val('');
				}

				function removeItem() {
					var item = $(this).attr('data-value');
					model.removeItem(item);
					view.renderList(model.data);
				}
				function editItem() {
					for (var i = 0; i < model.data.length; i++) {
						var arr = $('.list__template__text');
						if (arr[i].innerHTML === model.data[i]) {
							return;
						} else {
							model.data[i] = arr[i].innerHTML;
						}
					}
				}
				
			}
		};
	}
);