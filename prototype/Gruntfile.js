module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    jshint: {
      options: {
        undef: true,
        unused: true,
        strict: true,
        quotmark: 'single'
      },
      dev: {
        options: {
          node: true
        },
        files: {
          src: ['Gruntfile.js']
        }
      },
      client: {
        options: {
          browser: true,
          devel: true,
          globals: {
            require: true,
            define: true
          }
        },
        files: {
          src: ['public/scripts/modules/*.js', 'public/scripts/*.js']
        }
      }
    },
    requirejs: {
      compile: {
        options: {
          almond: true,
          mainConfigFile: 'public/scripts/require-config.js',
          out: 'public/scripts/dist/op.js',
          name: 'app'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-requirejs');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('dist', ['default', 'requirejs']);
};
