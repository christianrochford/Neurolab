module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

        compass: {                  
      dist: {                   
        options: { 
          config: 'assets/config.rb',
          sassDir: 'assets/sass',
          cssDir: 'assets/stylesheets',
          environment: 'production',
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['assets/js/lib/jquery-1.10.2.min.js',
              'assets/js/plugins/*.js',
              'assets/js/init/app.js',
              'assets/js/init/map.js',
        ],
        dest: 'assets/dist/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        force: true, 
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'assets/dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    qunit: {
      options: {
        force: true, 
      },
      files: ['test/**/*.html']
    },

    jshint: {
      files: ['Gruntfile.js', 'assets/**/*.js', 'test/**/*.js'],
      options: {
          force: true, 
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      css: {
        files: 'assets/sass/*.scss',
        tasks: ['compass']
      },
      tasks: ['jshint', 'qunit']
    }
    
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');


  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['concat', 'uglify', 'compass']);

};