# grunt-yaml-resolver

> Compiles YAML definitions spread across multiple files into a single YAML file, then copies the file to a distribution directory.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-yaml-resolver --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-yaml-resolver');
```

## The "yaml_resolver" task

### Overview
In your project's Gruntfile, add a section named `yaml_resolver` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  yaml_resolver: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options
There are currently no options to configure the resolver. It takes the file(s) in the file glob and resolves all remote and relative references, leaving local references in tact, and then writes the file out to the dist directory.

### Usage Examples

#### Simple YAML File
In this example, the YAML input file has no references. The resolver makes minor (and inconsequential) changes due to YAML-JS conversion utilities, and then writes the new file to the tmp directory.

```js
grunt.initConfig({
  yaml_resolver: {
    files: {
      expand: true,
      src: ['./simple.yaml'],
      dest: 'tmp'
    },
  },
});
```

#### YAML file in sub-directory
In this example, the YAML file is in a sub-directory relative to the Gruntfile.js. By specifying the cwd property in the files object, the resolver can parse any relative references properly and write them out into the master output file.

NOTE: Do NOT simply put 'test/fixtures/simple.yaml' in the src property! The resolver will be unable to process relative references if you do so.

```js
grunt.initConfig({
  yaml_resolver: {
    files: {
      expand: true,
      cwd: 'test/fixtures',
      src: ['./simple.yaml'],
      dest: 'tmp'
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
