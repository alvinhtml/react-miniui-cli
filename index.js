#!/usr/bin/env node

const clone = require('git-clone');
const program = require('commander');
const shell = require('shelljs');
const log = require('tracer').colorConsole();

program
  .version('1.0.0')
  .description('react-miniui 项目的 CLI.');

program
  .command('miniui-cli <project>')
  .action(function(tpl, project) {

    log.info('目前 react-miniui-cli 支持以下模板：');
    log.info('使用例子：miniui-cli myProject');

    if (project) {
        let pwd = shell.pwd();

        log.info(`正在拉取代码，下载位置：${pwd}/${project}/ ...`);

        clone(`https://github.com/alvinhtml/react-miniui-cli-repository.git`, `${pwd}/${project}`, null, function() {
            shell.rm('-rf', pwd + `/${project}/.git`);
            log.info('模板创建完成！使用： npm install && npm run start');
        });
    } else {
        log.error('正确命令例子：miniui-cli myProject');
    }
  });

program.parse(process.argv);
