---
title: 'Child process API: spawn vs exec'
tags:
  - 计算机技术
  - Node.js
keywords:
  - 计算机技术
  - Node.js
  - child_process
  - spawn
  - exec
summary: 使用 Node.js 编写一些脚本工具是非常方便的，而常用的 spawn 与 exec API 有什么不同呢？
ctime: '2021-08-25 00:21:00'
mtime: '2021-08-30 00:03:00'
author: 不如怀念 ([@wang1212](https://github.com/wang1212))
---

　　利用 Node.js 编写一些命令行工具、一次性脚本是很方便的，而在这类场景下 child_process API 的 `spawn` 和 `exec` 方法的应用则非常常见。在我使用它们时，却不知道该如何进行选择，遂对此进行了探究。

## Child process API

　　先来看看 `child_process` API，根据官方文档描述：

> The `child_process` module provides the ability to spawn subprocesses in a manner that is similar, but not identical, to [`popen(3)`](http://man7.org/linux/man-pages/man3/popen.3.html). **This capability is primarily provided by the [`child_process.spawn()`](https://nodejs.org/dist/latest/docs/api/child_process.html#child_process_child_process_spawn_command_args_options) function:**

　　其类似于 Linux 的 `popen` 命令行为，`spawn` 是其核心方法，通过创建一个管道（pipe），调用 fork 生成一个子进程，并执行 shell 命令。例如，通过该 API 就可以以编程的方式生成子进程并执行二进制文件，这在编写脚本工具时是一个非常常见的场景。

　　在这里，主要讨论的是异步版本，当然 Node.js 为它们提供了相应的同步版本，例如 `spawnSync` 和 `execSync`。

### `spawn`

　　前面说到 `spawn` 是 Child process API 的核心方法，其实从源码可以一窥究竟：

```js
// https://github.com/nodejs/node/blob/v16.8.0/lib/child_process.js
function exec(command, options, callback) {
  const opts = normalizeExecArgs(command, options, callback);
  return module.exports.execFile(opts.file, opts.options, opts.callback);
}

function execFile(file /* , args, options, callback */) {
    // ...
    const child = spawn();
    // ...
}

// ---
function fork(modulePath /* , args, options */) {
    // ...
    return spawn(options.execPath, args, options);
}
```

　　可见，`exec` 和 `fork` 最终还是依赖于 `spawn` 的实现。而对于后者的实现：

```js
const child_process = require('internal/child_process');
const { ChildProcess } = child_process;

function spawn(file, args, options) {
    // ...
    const child = new ChildProcess();
  	child.spawn(options);
    // ...
}
```

　　依赖于底层的内部模块 _internal/child_process_ 。

　　`spawn` 的主要功能是生成一个子进程，并执行给定的命令，父子进程之间通过管道（pipe）传递 `stdio` 信息，而且默认不生成 shell。根据示例：

```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

　　父进程通过监听子进程相应的 `stdio` 事件进行通信。

### `exec`

　　前面根据源码可以看到 `exec` 的实现基于 `spawn`，但不同的是，前者在生成子进程的同时，会先生成一个 shell，然后在 shell 中执行给定的命令，子进程的输出信息会进行缓冲并最终传递给回调函数。根据示例：

```js
const { exec } = require('child_process');
exec('cat *.js missing_file | wc -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
```

　　父进程并非通过监听子进程的  `stdio`  事件，而是给子进程传递一个回调函数来获取子进程的输出信息。

　　这里有一个显著的区别，`exec` 会先生成一个 shell 在执行命令，而 `spawn` 则会直接执行命令，但考虑到前者基于后者实现，事实上后者可以通过传递 `options.shell` 选项来选择是否生成 shell。

　　官方文档有一句话也值得留意：

> Unlike the [`exec(3)`](http://man7.org/linux/man-pages/man3/exec.3.html) POSIX system call, `child_process.exec()` does not replace the existing process and uses a shell to execute the command.

　　`exec` 的 POSIX 系统调用的行为是，在当前进程中用新的进程映像（程序）替换旧的进程映像并执行，本质上并没有生成新的进程，也就不存在父子进程的概念。而在这里，Node.js 的 `exec` 方法的行为并不是替换进程映射，而是生成 shell 去执行命令。

### `spawn` vs `exec`

　　现在可以总结一下两者的显著区别：

- `spawn` 默认不生成 shell，而 `exec` 必然会生成一个 shell
- `spawn` 通过 stdio 事件流和父进程通信，而 `exec` 会对输出信息进行缓冲并通过回调函数将其传递给父进程，且后者默认有 1024 * 1024 字节的缓冲区限制

　　对于第一点，如果要执行的命令依赖于 shell 的一些功能，比如管道、I/O 重定向则选择 `exec` 会更便捷。对于第二点，对比示例代码，可以很明显的看出来，`spawn` 适合长时间执行的命令，且有持续的输出信息；而后者更适合执行短时的命令，且在命令执行完后一次性获取输出结果。

## 工具库 `execa`

　　分析完它们两者的区别之后，这里推荐一个 npm 工具包 `execa`，其对 child_process 的方法进行了扩展和抽象，在很多常见的使用场景中大大减少了模板代码，也为调试提供了一定的便利性。看看文档中一段示例代码：

```js
const execa = require('execa');

(async () => {
	// Catching an error
	try {
		await execa('unknown', ['command']);
	} catch (error) {
		console.log(error);
		/*
		{
			message: 'Command failed with ENOENT: unknown command spawn unknown ENOENT',
			errno: -2,
			code: 'ENOENT',
			syscall: 'spawn unknown',
			path: 'unknown',
			spawnargs: ['command'],
			originalMessage: 'spawn unknown ENOENT',
			shortMessage: 'Command failed with ENOENT: unknown command spawn unknown ENOENT',
			command: 'unknown command',
			escapedCommand: 'unknown command',
			stdout: '',
			stderr: '',
			all: '',
			failed: true,
			timedOut: false,
			isCanceled: false,
			killed: false
		}
		*/
	}

})();
```

　　上面的代码中，错误信息对于开发者来说是易读的，调试起来难度要小很多。

　　更多的东西，建议直接看该 npm 包的文档进行详细了解。

## 参考资源

- https://nodejs.org/dist/latest/docs/api/child_process.html
- https://stackoverflow.com/questions/48698234/node-js-spawn-vs-execute
- https://www.hacksparrow.com/nodejs/difference-between-spawn-and-exec-of-node-js-child-rocess.html
- https://github.com/sindresorhus/execa
- https://linuxhint.com/linux-exec-system-call/

