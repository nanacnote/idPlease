module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    //    pkg: grunt.file.readJSON('package.json'),
    watch: {
      options: {
        livereload: true, //default port @35729
      },
      files: [
        "dist/index.js",
        "docs/index.html",
        "docs/main.js",
        "docs/main.scss",
      ],
      tasks: ["browserify", "uglify", "sass"],
    },
    connect: {
      server: {
        options: {
          port: 9001,
          hostname: "localhost",
          base: "./docs",
          livereload: true,
          open: true,
          keepalive: true,
        },
      },
    },
    browserify: {
      options: {
        transform: [["babelify", { presets: ["@babel/preset-env"] }]],
      },
      build: {
        src: "docs/main.js",
        dest: "docs/bundle/bundle.js",
      },
    },
    uglify: {
      options: {
        banner:
          '/*! idPlease Docs <%= grunt.template.today("yyyy-mm-dd") %> */ ',
      },
      build: {
        src: "docs/bundle/bundle.js",
        dest: "docs/bundle/bundle.min.js",
      },
    },
    sass: {
      dist: {
        options: {
          style: "expanded",
        },
        files: {
          "docs/stylesheet/main.css": "docs/main.scss",
        },
      },
    },
  });

  // Load the plugins
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-sass");

  // Default task(s).
  grunt.registerTask("default", [
    "watch",
    "browserify",
    "uglify",
    "sass",
    "connect",
  ]);
};
