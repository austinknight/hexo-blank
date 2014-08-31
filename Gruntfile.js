'use strict';

module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    clean: {
      css: {
        files: [{
          dot: true,
          src: [
            'source/css/**/*.css'
          ]
        }]
      },
      js: {
        files: [{
          dot: true,
          src: [
            'source/scripts/**/*.js'
          ]
        }]
      },
    },
    compass: {
      prod: {
        options: {
          sassDir: 'source/scss',
          cssDir: 'source/css',
          environment: 'production',
          imagesDir: 'source/img',
          javascriptsDir: 'source/js',
          outputStyle: 'nested',
          relativeAssets: true,
          raw: 'preferred_syntax = :scss\nasset_cache_buster :none\n'
        }
      }
    },
    concat: {
      client: {
        files: [
          {
            src: [
              'source/js/client/**/*.js'
            ],
            dest: 'source/scripts/scripts.js'
          }
        ]
      },
      vendor: {
        files: [
          {
            src: [
              'source/js/vendor/**/*.js'
            ],
            dest: 'source/scripts/vendor.js'
          }
        ]
      }
    },
    watch: {
      js: {
        files: ['source/js/**/*.js'],
        tasks: ['concat'],
        options: {
          livereload: true
        }
      },
      compass: {
        files: ['source/scss/**/**.scss'],
        tasks: ['compass'],
        options: {
          livereload: true
        }
      },
      ejs: {
        files: ['layout/**/*.ejs'],
        options: {
          livereload: true
        }
      }
    }
  });
  // Default task. Run with `grunt`.
  grunt.registerTask('default', function () {
    grunt.task.run(
    'clean',
    'concat',
    'compass'
    );
  });

  grunt.registerTask('dev', ['defalt', 'watch']);
};