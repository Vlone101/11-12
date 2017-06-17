"use strict";
// ACCORDION callback
$(".accordion").accordion({
	//whether the first section is expanded or not
	firstChildExpand: true,
	//whether expanding mulitple section is allowed or not
	multiExpand: false,
	//slide animation speed
	slideSpeed: 200,
	//drop down icon
	dropDownIcon: ""
});  



// CAROUSEL callback
$('.carousel ul').anoSlide({
	items: 1,
	speed: 300,
	// lazy: true,
	// auto: 4000,
	autoStop: true,

	onConstruct: function(instance){
		var paging = $('<div/>').addClass('paging fix').css(
		{
			position: 'absolute',
			top: 93 + '%',
			left:50 + '%',
			width: instance.slides.length * 40,
			marginLeft: -(instance.slides.length * 40)/2
		})
		
		/* Build paging */
		for (var i = 0, l = instance.slides.length; i < l; i++)
		{
			var a = $('<a/>').data('index', i).appendTo(paging).on(
			{
				click: function()
				{
					instance.stop().go($(this).data('index'));
				}
			});
			
			if (i == instance.current)
			{
				a.addClass('current');
			}
		}

		instance.element.parent().append(paging);
	},
	onStart: function(ui){
		var paging = $('.paging');
		
		paging.find('a').eq(ui.instance.current).addClass('current').siblings().removeClass('current');
	}
});



//JSON operations
  ;(function(){
    $.getJSON(
      "https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json", 
      function(data){
          var skills, names, friends;

          //skills
            ;(function(){
            skills = _.flattenDeep(_.map(data, 'skills'));
            skills = _.union(skills);
            //case insensitive sort (native JS)
            skills = skills.sort(function(s1, s2){
              var s1lower = s1.toLowerCase();
              var s2lower = s2.toLowerCase();
              return s1lower > s2lower? 1 : (s1lower < s2lower? -1 : 0);
            });
            })();
        
        //names
          ;(function(){
            names = _.sortBy(data, function (obj){ 
              return obj.friends.length;
            });
            names = _.map(names, 'name');
          })();
        
        //friends
          ;(function(){
            friends = _.flattenDeep(_.map(data, 'friends'));
            friends = _.uniq(_.map(friends, 'name'));
          })();
          
        console.log('SKILLS: ', skills);
        console.log('NAMES: ', names);
        console.log('FRIENDS: ', friends);
      }
    );
  })();