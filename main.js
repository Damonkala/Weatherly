'use strict';

var apiUrl = 'http://api.wunderground.com/api/7979836bcfe58c80/';
// forecast/q/CA/San_Francisco.json

$(document).ready(init);

function init() {
	$('#getWeather').click(getWeather);
	var url = apiUrl + 'conditions/q/CA/94539.json';

	$.get(url)
	.done(function(data){
		// console.log(data)
		 //debugger;
		//
		var $location = $('<p>').text(data.current_observation.display_location.full);
		var $icon = $('<img>').attr('src', data.current_observation.icon_url);
		$icon.addClass('pic');
		var $cel = $('<p>').text(data.current_observation.feelslike_c + "°c");
		var $fair = $('<p>').text(data.current_observation.feelslike_f + "°f");
		var $weather = $('<p>').text(data.current_observation.weather);

		$('#current').append($location, $icon, $cel, $fair, $weather);
	})
	.fail(function(error){
		console.error(error);
	});
	var url = apiUrl + 'forecast/q/CA/94539.json';

	$.get(url)
	.done(function(data){
		// console.log(data)
		 //debugger;
		//
		var $day1Day = $('<p>').text(data.forecast.simpleforecast.forecastday[0].date.weekday);
		var $day1Icon = $('<img>').attr('src', data.forecast.simpleforecast.forecastday[0].icon_url);
		var $day1F = $('<p>').text(data.forecast.simpleforecast.forecastday[0].low.fahrenheit + "°f");
		var $day1C = $('<p>').text(data.forecast.simpleforecast.forecastday[0].low.celsius + "°c");
		var $dat1W = $('<p>').text(data.forecast.txt_forecast.forecastday[0].fcttext_metric);

		$('#day1').append($day1Day, $day1Icon, $day1C, $day1F,$dat1W);
		var $day2Day = $('<p>').text(data.forecast.simpleforecast.forecastday[1].date.weekday);
		var $day2Icon = $('<img>').attr('src', data.forecast.simpleforecast.forecastday[1].icon_url);
		var $day2F = $('<p>').text(data.forecast.simpleforecast.forecastday[1].low.fahrenheit + "°f");
		var $day2C = $('<p>').text(data.forecast.simpleforecast.forecastday[1].low.celsius + "°c");
		var $dat2W = $('<p>').text(data.forecast.txt_forecast.forecastday[1].fcttext_metric);

		$('#day2').append($day2Day, $day2Icon, $day2C, $day2F,$dat2W);
		var $day3Day = $('<p>').text(data.forecast.simpleforecast.forecastday[2].date.weekday);
		var $day3Icon = $('<img>').attr('src', data.forecast.simpleforecast.forecastday[2].icon_url);
		var $day3F = $('<p>').text(data.forecast.simpleforecast.forecastday[2].low.fahrenheit + "°f");
		var $day3C = $('<p>').text(data.forecast.simpleforecast.forecastday[2].low.celsius + "°c");
		var $dat3W = $('<p>').text(data.forecast.txt_forecast.forecastday[2].fcttext_metric);

		$('#day3').append($day3Day, $day3Icon, $day3C, $day3F,$dat3W);
		var $day4Day = $('<p>').text(data.forecast.simpleforecast.forecastday[3].date.weekday);
		var $day4Icon = $('<img>').attr('src', data.forecast.simpleforecast.forecastday[3].icon_url);
		var $day4F = $('<p>').text(data.forecast.simpleforecast.forecastday[3].low.fahrenheit + "°f");
		var $day4C = $('<p>').text(data.forecast.simpleforecast.forecastday[3].low.celsius + "°c");
		var $dat4W = $('<p>').text(data.forecast.txt_forecast.forecastday[3].fcttext_metric);

		$('#day4').append($day4Day, $day4Icon, $day4C, $day4F,$dat4W);
	})
	.fail(function(error){
		console.error(error);
	});

}

function getWeather(){
	if($('#zip').val() !== ""){
		$('#current').html("");
		var zipNumber = $('#zip').val();
		var url = apiUrl + "conditions/q/CA/" + zipNumber + ".json";

		$.get(url)
		.done(function(data){


			var $location = $('<p>').text(data.current_observation.display_location.full);
			var $icon = $('<img>').attr('src', data.current_observation.icon_url);
			$icon.addClass('pic');
			var $cel = $('<p>').text(data.current_observation.feelslike_c + "°c");
			var $fair = $('<p>').text(data.current_observation.feelslike_f + "°f");
			var $weather = $('<p>').text(data.current_observation.weather);

			$('#current').append($location, $icon, $cel, $fair, $weather);
		})
		.fail(function(error){
			console.error(error);
		});
		var url = apiUrl + 'forecast/q/CA/' + zipNumber + '.json';

		$.get(url)
		.done(function(data){
			$('.forecast').html("");
			var $day1Day = $('<p>').text(data.forecast.simpleforecast.forecastday[0].date.weekday);
			var $day1Icon = $('<img>').attr('src', data.forecast.simpleforecast.forecastday[0].icon_url);
			var $day1F = $('<p>').text(data.forecast.simpleforecast.forecastday[0].low.fahrenheit + "°f");
			var $day1C = $('<p>').text(data.forecast.simpleforecast.forecastday[0].low.celsius + "°c");
			var $dat1W = $('<p>').text(data.forecast.txt_forecast.forecastday[0].fcttext_metric);

			$('#day1').append($day1Day, $day1Icon, $day1C, $day1F,$dat1W);
			var $day2Day = $('<p>').text(data.forecast.simpleforecast.forecastday[1].date.weekday);
			var $day2Icon = $('<img>').attr('src', data.forecast.simpleforecast.forecastday[1].icon_url);
			var $day2F = $('<p>').text(data.forecast.simpleforecast.forecastday[1].low.fahrenheit + "°f");
			var $day2C = $('<p>').text(data.forecast.simpleforecast.forecastday[1].low.celsius + "°c");
			var $dat2W = $('<p>').text(data.forecast.txt_forecast.forecastday[1].fcttext_metric);

			$('#day2').append($day2Day, $day2Icon, $day2C, $day2F,$dat2W);
			var $day3Day = $('<p>').text(data.forecast.simpleforecast.forecastday[2].date.weekday);
			var $day3Icon = $('<img>').attr('src', data.forecast.simpleforecast.forecastday[2].icon_url);
			var $day3F = $('<p>').text(data.forecast.simpleforecast.forecastday[2].low.fahrenheit + "°f");
			var $day3C = $('<p>').text(data.forecast.simpleforecast.forecastday[2].low.celsius + "°c");
			var $dat3W = $('<p>').text(data.forecast.txt_forecast.forecastday[2].fcttext_metric);

			$('#day3').append($day3Day, $day3Icon, $day3C, $day3F,$dat3W);
			var $day4Day = $('<p>').text(data.forecast.simpleforecast.forecastday[3].date.weekday);
			var $day4Icon = $('<img>').attr('src', data.forecast.simpleforecast.forecastday[3].icon_url);
			var $day4F = $('<p>').text(data.forecast.simpleforecast.forecastday[3].low.fahrenheit + "°f");
			var $day4C = $('<p>').text(data.forecast.simpleforecast.forecastday[3].low.celsius + "°c");
			var $dat4W = $('<p>').text(data.forecast.txt_forecast.forecastday[3].fcttext_metric);

			$('#day4').append($day4Day, $day4Icon, $day4C, $day4F,$dat4W);
		})
		.fail(function(error){
			console.error(error);
		});
	}

}
