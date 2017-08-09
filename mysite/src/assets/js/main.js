angular
.module('mysite', ['angular-terminal'])
.run(function ($rootScope) {
        $rootScope.$on('terminal.main', function (e, input, terminal) {
                if (input.toLowerCase() == 'help' || input.toLowerCase() == 'h') {
                        $rootScope.$emit('terminal.main.echo', 'Available commands:\n 0)whoami\n 1)cv\n 2)github\n 3)linkedin\n 4)contact')
                }
                else if (input.toLowerCase() == 'whoami'|| input == '0') {
                        $rootScope.$emit('terminal.main.echo', 'My name is [[b;#44D544;]Panagiotis Panagiotopoulos]\nand I am a System Administrator at Skroutz.gr')
                }
                else if (input.toLowerCase() == 'github'|| input == '2') {
                        $rootScope.$emit('terminal.main.echo', 'My github is https://github.com/ppanagiotis')
                }
                else if (input.toLowerCase() == 'linkedin' || input == '3') {
                        $rootScope.$emit('terminal.main.echo', 'My Linkedin is https://www.linkedin.com/in/ppanagiotis')
                }
                else if (input.toLowerCase() == 'cv' || input == '1') {
                        $rootScope.$emit('terminal.main.echo', 'wget https://asilo.gr/mysite/cv.pdf')
                }
                else if (input.toLowerCase() == 'contact' || input == '4') {
                        $rootScope.$emit('terminal.main.echo', 'Get in touch via:\n Email:   ppanagiotis@asilo.gr\n Twitter: @ppanagiwtis')
                }
                else if (input.toLowerCase() == 'logout') {
                        open(location, '_self').close();
                }
                else {
                        $rootScope.$emit('terminal.main.echo', input + ': command not found')
                }
        });
});
