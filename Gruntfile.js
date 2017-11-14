module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({

		copy: {
		  dist: {
		    files: [
		        {
		            expand: true, //habilita o cwd
		            cwd: 'source/',
		            src: ['*.html', '.htaccess', 'web-files/imagem/**/*'], 
		            dest: 'deploy/'
		        }
		    ]        
		  }
		},


		clean: {
		  dist: {
		    src: ["deploy", "temp"]
		  }
		},

        concat: {
            dist: {
                src: ['bower_components/milligram/dist/milligram.css', 'source/web-files/css/estilo.css'],
                dest: './temp/css/concat.css'
            }
        },

		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
		    target: {
		     files: {
		          'deploy/web-files/css/main.css': ['./temp/css/concat.css']
		       }
		    }
		},

		uglify: {
		    options: {
		      mangle: true
		    },

		    dist: {
		      files: {
		      	'deploy/web-files/js/component.min.js': ['bower_components/jquery/dist/jquery.js', 'source/web-files/js/*.js'],
		        'deploy/web-files/js/app.min.js': ['bower_components/angular/angular.js','source/web-files/angular/*.js', 'source/web-files/angular/**/*.js']
		      }
		    },
		},

        useref: {

                html: ['deploy/*.html'],

                temp: 'deploy'

        }

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean'); 
	grunt.loadNpmTasks('grunt-useref');

	grunt.registerTask('deploy', ['clean', 'concat', 'cssmin', 'uglify', 'copy', 'useref'])
}