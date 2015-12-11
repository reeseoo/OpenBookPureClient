module.exports = function(grunt) {
grunt.initConfig({
	serve: {
		options: {
			port: 9000
		}
	},
	concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['bower/intro.js', 'src/project.js', 'src/outro.js'],
      dest: 'dist/built.js',
    }
	}
});
 
grunt.loadNpmTasks('grunt-serve');
grunt.loadNpmTasks('grunt-contrib-concat');
}