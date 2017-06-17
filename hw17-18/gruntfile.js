module.exports = function(grunt) {

	grunt.initConfig({
		concat: {
			js: {
				options: {
					separator: ';'
				},
				src: ['js/src/*.js'],
				dest: 'js/build/script.main.min.js'
			},
			css: {
				src: ['css/src/*.css'],
				dest: 'css/build/style.main.min.css'
			}
		},
		uglify: {
			js: {
				src: ['js/build/script.main.min.js'],
				dest: 'js/build/script.main.min.js'
			},
		},
		cssmin: {
			dist:{	
				src: ['css/build/style.main.min.css'],
				dest: 'css/build/style.main.min.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};