module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt); 

	grunt.initConfig({
		babel: {
			options: {
				sourceMap: false,
				presets: ['es2015']
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'src/js',
					src: ['*.js'],
					dest: 'src/js/dist',
					ext: '.js',
					extDot: 'first'
				}]
			}
		},
		watch: {
			babel: {
				files: 'src/js/*.js',
				tasks: ['babel']
			}
		},
		concat: {
			js: {
				options: {
					separator: ';'
				},
				src: ['src/js/libs/*.js', 'src/js/dist/*.js'],
				dest: 'build/script.main.min.js'
			},
			css: {
				src: ['src/css/*.css'],
				dest: 'build/style.main.min.css'
			}
		},
		//minify js
		uglify: {
			dist: {
				src: ['build/script.main.min.js'],
				dest: 'build/script.main.min.js'
			}
		},
		//minify css
		cssmin: {
			dist: {
				src: 'build/style.main.min.css',
				dest: 'build/style.main.min.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib--watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.registerTask('default', ['babel', 'concat', 'uglify', 'cssmin']);
	
};
