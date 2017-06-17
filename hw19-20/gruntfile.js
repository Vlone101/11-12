module.exports = function(grunt) {
  grunt.initConfig({

    sass: {
	    dist: {
				options: {
					style: 'expanded'
				},
				files: {                           
					'src/styles/style.css': 'src/styles/style.scss'      // 'destination': 'source'
				}
	    }
  	},

  	watch: {
    	sass: {
			files: ['src/styles/style.scss'],
    		tasks: ['sass']
    	}
    },
    concat: {
      js: {
        options: {
          separator: ';'
        },
			src: ['src/js/libs/*.js', 'src/js/plugins/*.js', 'src/js/*.js'],
        dest: 'build/build.js'
      },
      css: {
			src: ['src/styles/*.css'],
        dest: 'build/build.css'
      }
    },
    //minify js
    uglify: {
      dist: {
        src: ['build/build.js'],
        dest: 'build/build.js'
      }
    },
    //minify css
    cssmin: {
      dist: {
        src: 'build/build.css',
        dest: 'build/build.css'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};