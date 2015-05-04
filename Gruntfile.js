module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["style/less"],
                    yuicompress: true
                },
                files: {
                    "style/less/style.css": "style/less/style.less"
                }
            }
        },
        watch: {
            //            files: "style/less/*",
            //            tasks: ["less"]
            gruntfile: {
                files: ['Gruntfile.js']
            },
            less: {
                files: "style/less/*",
                tasks: ["less"]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask("default", ["less", "watch"]);
};