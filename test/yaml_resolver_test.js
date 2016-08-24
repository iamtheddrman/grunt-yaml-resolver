'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.yaml_resolver = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  simple_yaml: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/simple.yaml');
    var expected = grunt.file.read('test/expected/simple.yaml');
    test.equal(actual, expected, 'should handle a simple, all-in-one YAML file.');

    test.done();
  },
  one_external: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/one_external.yaml');
    var expected = grunt.file.read('test/expected/one_external.yaml');
    test.equal(actual, expected, 'should resolve a single external reference into one complete YAML file.');

    test.done();
  },
  multiple_files_in_dir: function(test) {
    test.expect(10);

    var actual = grunt.file.read('tmp/multiple/file1.yaml');
    var expected = grunt.file.read('test/expected/file1.yaml');
    test.equal(actual, expected, 'should resolve first file of two-file glob.');

    var actual = grunt.file.read('tmp/multiple/file2.yaml');
    var expected = grunt.file.read('test/expected/file2.yaml');
    test.equal(actual, expected, 'should resolve second file of two-file glob.');

    var actual = grunt.file.read('tmp/multiple/file3.yaml');
    var expected = grunt.file.read('test/expected/file3.yaml');
    test.equal(actual, expected, 'should resolve third file of two-file glob.');

    var actual = grunt.file.read('tmp/multiple/file4.yaml');
    var expected = grunt.file.read('test/expected/file4.yaml');
    test.equal(actual, expected, 'should resolve fourth file of two-file glob.');

    var actual = grunt.file.read('tmp/multiple/file5.yaml');
    var expected = grunt.file.read('test/expected/file5.yaml');
    test.equal(actual, expected, 'should resolve fifth file of two-file glob.');

    var actual = grunt.file.read('tmp/multiple/file6.yaml');
    var expected = grunt.file.read('test/expected/file6.yaml');
    test.equal(actual, expected, 'should resolve sixth file of two-file glob.');

    var actual = grunt.file.read('tmp/multiple/file7.yaml');
    var expected = grunt.file.read('test/expected/file7.yaml');
    test.equal(actual, expected, 'should resolve seventh file of two-file glob.');

    var actual = grunt.file.read('tmp/multiple/file8.yaml');
    var expected = grunt.file.read('test/expected/file8.yaml');
    test.equal(actual, expected, 'should resolve eighth file of two-file glob.');

    var actual = grunt.file.read('tmp/multiple/file9.yaml');
    var expected = grunt.file.read('test/expected/file9.yaml');
    test.equal(actual, expected, 'should resolve nineth file of two-file glob.');

    var actual = grunt.file.read('tmp/multiple/file10.yaml');
    var expected = grunt.file.read('test/expected/file10.yaml');
    test.equal(actual, expected, 'should resolve tenth file of two-file glob.');

    test.done();
  },
  complex_swagger_file: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/index.yaml');
    var expected = grunt.file.read('test/expected/index.yaml');
    test.equal(actual, expected, 'should resolve complex swagger file split over directories.');

    test.done();
  }
};
