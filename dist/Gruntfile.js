module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: {
                    'css/styles.css': 'src/sass/styles.scss'
                },

                options: {
                    sourcemap: 'none',
                    outputStyle: 'compressed'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 5 versions', 'ie 9']
            },
            css: {
                src: 'css/styles.css',
                dest: 'css/styles.css'
            }
        },

        watch: {
            sass: {
                files: 'src/sass/**/*.scss',
                tasks: ['sass', 'autoprefixer']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};