$(function () {
	var $button = $('.button');
	var $tempText = $('.temp');
	var $humidityText = $('.humidity');
	$button.on('click', function () {
		var $country = $('.country').val();
		$.ajax({
			url: 'http://api.wunderground.com/api/adfe68e76fe7b2ea/conditions/q/UA/' + $country + '.json',
			dataType: 'jsonp',
			success: function (data) {
				var $temp = data.current_observation.temp_c;
				if ($temp > 0) {
					$temp = '+' + $temp;
				};
				var $humidity = data.current_observation.relative_humidity;
				var $resultTemp = 'Temperature is now ' + $temp + '°C';
				var $resultHumidity = 'Air humidity ' + $humidity;
				$tempText.text($resultTemp);
				$humidityText.text($resultHumidity);
			}
		});
	});
});