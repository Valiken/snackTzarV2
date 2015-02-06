module.exports = function(grunt) {

  //project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['src/*.js', 'lib/*.js'],
        dest: 'dist/app.js'
      }
    },
    jade: {
      compile: {
        options: {
          client: false,
          pretty: true
        },
        files: [{
          cwd:  "app/views",
          src:  "**/*.jade",
          dest: "build/templates/",
          ext:  ".html"
        }]
      }
    },
    jshint: {
      options: {
        curly: true,
        globals: {
          jQuery: true
        },
      },
      beforeconcat: ['src/*.js','lib/*.js'],
      afterconcat:  ['dist/*.js']
    },
    uglify: {
      options {
        banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  //Load the plugin that provides the grunt contrib tasks.
  grunt.loadNpmTasks("grunt-contrib-jade");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-ugly');

  //default tasks.
  grunt.registerTask('default', ['jade'], ['jshint'], ['uglify']);
}
