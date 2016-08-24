/*
 * grunt-yaml-resolver
 * https://github.com/iamtheddrman/grunt-yaml-resolver
 *
 * Copyright (c) 2016 Andrew Holaway
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    yaml_resolver: {
      simple_yaml: {
        options: {
        },
        files: [
          {
            expand: true,
            cwd: 'test/fixtures',
            src: ['./simple.yaml'],
            dest: 'tmp'
          }
        ]
      },
      one_external: {
        files: [
          {
            expand: true,
            cwd: 'test/fixtures',
            src: ['./one_external.yaml'],
            dest: 'tmp'
          }
        ]
      },
      multiple_files_in_dir: {
        files: [
          {
            expand: true,
            cwd: 'test/fixtures',
            src: ['./multiple/*.yaml'],
            dest: 'tmp'
          }
        ]
      },
      complex_swagger_file: {
        files: [
          {
            expand: true,
            cwd: 'test/fixtures',
            src: ['./index.yaml'],
            dest: 'tmp'
          }
        ]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'yaml_resolver', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
