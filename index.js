#!/usr/bin/env node

const clone = require('git-clone');
const program = require('commander');
const shell = require('shelljs');
const log = require('tracer').colorConsole();

program
  .version('1.0.0')
  .description('react-miniui 项目的 CLI.');

program
  .command('create <project>')
  .action(function(project) {

    if (project) {
        let pwd = shell.pwd();

        log.info(`正在拉取代码，下载位置：${pwd}/${project}/...`);

        clone(`https://github.com/alvinhtml/react-miniui-cli-repository.git`, `${pwd}/${project}`, null, function() {
            shell.rm('-rf', pwd + `/${project}/.git`);
            log.info('模板创建完成，使用： npm install && npm run start 开始。');
        });
    } else {
        log.error('正确命令例子：miniui-cli create myProject');
    }
  });

program.parse(process.argv);
