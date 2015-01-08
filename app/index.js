'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var foldername = path.basename(process.cwd());

var Generator = module.exports = function Generator(args, options) {
  yeoman.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(Generator, yeoman.generators.Base);


Generator.prototype.welcome = function welcome() {
  this.log(yosay('Let\'s create a Web.py project!'));
};

Generator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [{
    type: 'input',
    name: 'projectName',
    message: 'What\'s the name of your project?',
    default: foldername
  },
  {
    type: 'input',
    name: 'url',
    message: 'Enter the project url please.',
    default: '127.0.0.1'
  },
  {
    type: 'input',
    name: 'portNumber',
    message: 'Which port will be used?',
    default: 3000
  }
  ];

  this.prompt(prompts, function (props) {
    this.projectName = props.projectName;
    this.url = props.url;
    this.portNumber = props.portNumber;
    cb();
  }.bind(this));
};

Generator.prototype.projectFiles = function projectFiles() {
  this.log(chalk.cyan('--- Creating project files ---'));
  this.mkdir('static');
  this.mkdir('static/css');
  this.mkdir('static/js');
  this.mkdir('static/img');
  this.mkdir('static/fonts');
  this.mkdir('templates');
  this.directory('web', 'web');
  this.template('project.py', 'project.py');
  this.template('_package.json', 'package.json');
  this.template('templates/index.html', 'templates/index.html');
  this.template('templates/base.html', 'templates/base.html');
  this.copy('gitignore', '.gitignore');


};
