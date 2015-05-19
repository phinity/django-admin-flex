module.exports = function(grunt) {

  grunt.initConfig({
    assetsPath: "static/flex/",
    bowerPath: "bower_components/",
    lessPath: "<%= assetsPath %>less/",
    cssPath: "<%= assetsPath %>css/",
    jsPath: "<%= assetsPath %>js/",
    bsPath: "<%= bowerPath %>bootstrap/dist/",

    less: {
      production: {
        options: {
          paths: ["<%= lessPath %>"],
          cleancss: false
        },
        files: {
          "<%= cssPath %>main.min.css": "<%= lessPath %>main.less",
          "<%= cssPath %>flex.min.css": "<%= lessPath %>flex.less"
        }
      }
    },

    concat: {
      options: {
      separator: ';',
      },
      dist: {
      src: ['<%= jsPath %>main.js', ],
      dest: '<%= jsPath %>main.min.js',
      }
    },

    watch: {
      css: {
        files: ['<%= lessPath %>**/*.less','<%= bowerPath %>**/*.less'],
        tasks: ['less']
      },
      scripts: {
        files: ['<%= jsPath %>main.js'],
        tasks: 'concat',
      },
    },

    copy: {
      main: {
      files: [
        {expand: true, flatten: true, src: ['<%= bsPath %>fonts/glyphicons-**'], dest: '<%= assetsPath %>fonts/'},
        {expand: true, flatten: true, src: ['<%= bsPath %>js/bootstrap.min.js'], dest: '<%= assetsPath %>js/'},
        {expand: true, flatten: true, src: ['<%= bowerPath %>jquery/dist/jquery.min.js'], dest: '<%= assetsPath %>js/'}
      ]
      }
    }

  });

  // load tasks.
  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('default', ['less', 'concat', 'copy']);

};