var tasks = ['stylus:dist','less:dist','jade:html'];

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      dist: {
        options:{
          lineNumbers:true,
          style: 'compact',
          noCache:true,
        },
        files: [
          {
            expand: true,
            cwd: 'jade',
            src: ['**/*.styl'],
            dest: 'html/',
            ext: '.css'
          }
        ]
      }
    },
    less: {
      dist: {
        options:{
          lineNumbers:true,
          style: 'compact',
          noCache:true,
        },
        files: [
          {
            expand: true,
            cwd: 'jade',
            src: ['**/*.less'],
            dest: 'html/',
            ext: '.css'
          }
        ]
      }
    },
    jade:{
      html: {
        options:{
          pretty:true
        },
        files: [
          {
            expand: true,
            cwd: 'jade',
            src: ['**/*.jade'],
            dest: 'html/',
            ext: '.html'
          }
        ]
      }
    },
    copy:{
      dev: {
        files: [{
          expand: true,
          cwd: 'html',
          src: ['css/style.css'],
          dest: 'html/'
        }]
      }
    },
    watch :{
      assets: {

        // Assets to watch:
        files: ['jade/**/*'],

        // When assets are changed:
        tasks: tasks
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', tasks.concat(['watch:assets']));

};
