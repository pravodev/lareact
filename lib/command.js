let program = require('commander');
let app = require('../package.json');
let chalk = require('chalk');
let figlet = require('figlet');

const command = function(){
    console.log(
        chalk.yellow(
            figlet.textSync('Lareact')
        )
    );
    program
        .version(app.version,'-v,--version')
        .description(app.description);

    program
        .command('make:component <NameComponent>')
        .alias('m:c')
        .description('Create Component')
        .action(function(name){
            console.log('create component')
        });

    program
        .command('make:container <name>')
        .alias('m:cn')
        .description('create component in folder container')
        .action(function(file){
            console.log('create container...')
        })
    
    program
        .command('make:template <name>')
        .alias('m:t')
        .description('create your own template')
        .action(function(file){
            console.log('create container...')
        })
    
    if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
        program.outputHelp();
        process.exit();
    }
    program.parse(process.argv)
    return program
}

module.exports = { command }