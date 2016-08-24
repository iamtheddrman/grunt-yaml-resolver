/*
 * grunt-yaml-resolver
 * https://github.com/iamtheddrman/grunt-yaml-resolver
 *
 * Copyright (c) 2016 Andrew Holaway
 * Licensed under the MIT license.
 */

'use strict';

var resolve = require('json-refs').resolveRefs;
var YAML = require('yaml-js');
var _ = require('lodash');
var fs = require('fs');
var path = require('path');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('yaml_resolver', 'Compiles YAML definitions spread across multiple files into a single YAML file, then copies the file to a distribution directory.', function() {
    var done = this.async();
    // Iterate over all specified file groups.
    _.each(this.files, function(filePair) {
      filePair.src.forEach(function(src) {
        if (!grunt.file.exists(src)) {
          grunt.log.warn('Source file "' + src + '" not found.');
          return false;
        }
        if (grunt.file.isDir(src)) {
          grunt.log.warn('Source file "' + src + '" is a directory, not a file.');
          return false;
        }

        var root = YAML.load(fs.readFileSync(src).toString());
        var options = {
          filter: ['relative', 'remote'],
          loaderOptions: {
            processContent: function (res, callback) {
              var yaml = YAML.load(res.text);
              callback(null, yaml);
              // callback(null, YAML.load(res.text));
            }
          },
          relativeBase: 'test/fixtures'
          // refPreProcessor: function (content) {
          //   content.$ref = path.resolve(path.dirname(src), content.$ref);
          //   content.$ref = path.relative(process.cwd(), content.$ref);
          //   return content;
          // }
        };
        resolve(root, options).then(function (results) {
          // Write the destination file.
          var json = JSON.stringify(results.resolved);
          var yaml = YAML.dump(results.resolved);
          grunt.file.write(filePair.dest, yaml);

          // Print a success message.
          grunt.log.writeln('File "' + filePair.dest + '" created.');

          done();
        });
      });
    });
  });

};
