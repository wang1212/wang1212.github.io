"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2667],{60889:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>t});var c=s(85893),o=s(11151);const l={title:"Child process API: spawn vs exec",date:new Date("2021-08-25T00:21:00.000Z"),update:new Date("2022-07-09T15:38:00.000Z"),authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Node.js","child_process","\u6e90\u7801\u5206\u6790"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Node.js","child_process","\u6e90\u7801\u5206\u6790"],description:"\u4f7f\u7528 Node.js \u7f16\u5199\u4e00\u4e9b\u811a\u672c\u5de5\u5177\u662f\u975e\u5e38\u65b9\u4fbf\u7684\uff0c\u800c\u5e38\u7528\u7684 spawn \u4e0e exec API \u6709\u4ec0\u4e48\u4e0d\u540c\u5462\uff1f"},d=void 0,r={permalink:"/2021/08/25/computer-technology/nodejs/nodejs-spawn-vs-exec",editUrl:"https://github.com/wang1212/wang1212.github.io/tree/master/blog/computer-technology/nodejs/2021-08-25-nodejs-spawn-vs-exec.md",source:"@site/blog/computer-technology/nodejs/2021-08-25-nodejs-spawn-vs-exec.md",title:"Child process API: spawn vs exec",description:"\u4f7f\u7528 Node.js \u7f16\u5199\u4e00\u4e9b\u811a\u672c\u5de5\u5177\u662f\u975e\u5e38\u65b9\u4fbf\u7684\uff0c\u800c\u5e38\u7528\u7684 spawn \u4e0e exec API \u6709\u4ec0\u4e48\u4e0d\u540c\u5462\uff1f",date:"2021-08-25T00:21:00.000Z",tags:[{label:"\u8ba1\u7b97\u673a\u6280\u672f",permalink:"/tags/\u8ba1\u7b97\u673a\u6280\u672f"},{label:"Node.js",permalink:"/tags/node-js"},{label:"child_process",permalink:"/tags/child-process"},{label:"\u6e90\u7801\u5206\u6790",permalink:"/tags/\u6e90\u7801\u5206\u6790"}],readingTime:6.465,hasTruncateMarker:!0,authors:[{name:"\u4e0d\u5982\u6000\u5ff5",title:"Web \u524d\u7aef\u5de5\u7a0b\u5e08 (Web Front-end Engineer)",url:"https://github.com/wang1212",email:"mrwang1212@126.com",imageURL:"/img/authors/wang1212.png",key:"wang1212"}],frontMatter:{title:"Child process API: spawn vs exec",date:"2021-08-25T00:21:00.000Z",update:"2022-07-09T15:38:00.000Z",authors:"wang1212",tags:["\u8ba1\u7b97\u673a\u6280\u672f","Node.js","child_process","\u6e90\u7801\u5206\u6790"],keywords:["\u8ba1\u7b97\u673a\u6280\u672f","Node.js","child_process","\u6e90\u7801\u5206\u6790"],description:"\u4f7f\u7528 Node.js \u7f16\u5199\u4e00\u4e9b\u811a\u672c\u5de5\u5177\u662f\u975e\u5e38\u65b9\u4fbf\u7684\uff0c\u800c\u5e38\u7528\u7684 spawn \u4e0e exec API \u6709\u4ec0\u4e48\u4e0d\u540c\u5462\uff1f"},unlisted:!1,prevItem:{title:"Web \u524d\u7aef\u6027\u80fd\u4f18\u5316\uff1a\u6848\u4f8b\u5206\u6790 1",permalink:"/computer-technology/web-frontend/web-performance-case-1"},nextItem:{title:"\u9ed1\u5ba2\u4e0e\u753b\u5bb6",permalink:"/2021/08/22/life/reading/"}},i={authorsImageUrls:[void 0]},t=[{value:"Child process API",id:"child-process-api",level:2},{value:"<code>spawn</code>",id:"spawn",level:3},{value:"<code>exec</code>",id:"exec",level:3},{value:"<code>spawn</code> vs <code>exec</code>",id:"spawn-vs-exec",level:3},{value:"\u5de5\u5177\u5e93 <code>execa</code>",id:"\u5de5\u5177\u5e93-execa",level:2},{value:"\u53c2\u8003\u8d44\u6e90",id:"\u53c2\u8003\u8d44\u6e90",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:"\u6700\u540e\u66f4\u65b0\u4e8e 2022-07-09 15:38:00"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5229\u7528 Node.js \u7f16\u5199\u4e00\u4e9b\u547d\u4ee4\u884c\u5de5\u5177\u3001\u4e00\u6b21\u6027\u811a\u672c\u662f\u5f88\u65b9\u4fbf\u7684\uff0c\u800c\u5728\u8fd9\u7c7b\u573a\u666f\u4e0b child_process API \u7684 ",(0,c.jsx)(n.code,{children:"spawn"})," \u548c ",(0,c.jsx)(n.code,{children:"exec"})," \u65b9\u6cd5\u7684\u5e94\u7528\u5219\u975e\u5e38\u5e38\u89c1\u3002\u5728\u6211\u4f7f\u7528\u5b83\u4eec\u65f6\uff0c\u5374\u4e0d\u77e5\u9053\u8be5\u5982\u4f55\u8fdb\u884c\u9009\u62e9\uff0c\u9042\u5bf9\u6b64\u8fdb\u884c\u4e86\u63a2\u7a76\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"child-process-api",children:"Child process API"}),"\n",(0,c.jsxs)(n.p,{children:["\u5148\u6765\u770b\u770b ",(0,c.jsx)(n.code,{children:"child_process"})," API\uff0c\u6839\u636e\u5b98\u65b9\u6587\u6863\u63cf\u8ff0\uff1a"]}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"child_process"})," module provides the ability to spawn subprocesses in a manner that is similar, but not identical, to ",(0,c.jsx)(n.a,{href:"http://man7.org/linux/man-pages/man3/popen.3.html",children:(0,c.jsx)(n.code,{children:"popen(3)"})}),". ",(0,c.jsxs)(n.strong,{children:["This capability is primarily provided by the ",(0,c.jsx)(n.a,{href:"https://nodejs.org/dist/latest/docs/api/child_process.html#child_process_child_process_spawn_command_args_options",children:(0,c.jsx)(n.code,{children:"child_process.spawn()"})})," function:"]})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5176\u7c7b\u4f3c\u4e8e Linux \u7684 ",(0,c.jsx)(n.code,{children:"popen"})," \u547d\u4ee4\u884c\u4e3a\uff0c",(0,c.jsx)(n.code,{children:"spawn"})," \u662f\u5176\u6838\u5fc3\u65b9\u6cd5\uff0c\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a\u7ba1\u9053\uff08pipe\uff09\uff0c\u8c03\u7528 fork \u751f\u6210\u4e00\u4e2a\u5b50\u8fdb\u7a0b\uff0c\u5e76\u6267\u884c shell \u547d\u4ee4\u3002\u4f8b\u5982\uff0c\u901a\u8fc7\u8be5 API \u5c31\u53ef\u4ee5\u4ee5\u7f16\u7a0b\u7684\u65b9\u5f0f\u751f\u6210\u5b50\u8fdb\u7a0b\u5e76\u6267\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u8fd9\u5728\u7f16\u5199\u811a\u672c\u5de5\u5177\u65f6\u662f\u4e00\u4e2a\u975e\u5e38\u5e38\u89c1\u7684\u573a\u666f\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u8fd9\u91cc\uff0c\u4e3b\u8981\u8ba8\u8bba\u7684\u662f\u5f02\u6b65\u7248\u672c\uff0c\u5f53\u7136 Node.js \u4e3a\u5b83\u4eec\u63d0\u4f9b\u4e86\u76f8\u5e94\u7684\u540c\u6b65\u7248\u672c\uff0c\u4f8b\u5982 ",(0,c.jsx)(n.code,{children:"spawnSync"})," \u548c ",(0,c.jsx)(n.code,{children:"execSync"}),"\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"spawn",children:(0,c.jsx)(n.code,{children:"spawn"})}),"\n",(0,c.jsxs)(n.p,{children:["\u524d\u9762\u8bf4\u5230 ",(0,c.jsx)(n.code,{children:"spawn"})," \u662f Child process API \u7684\u6838\u5fc3\u65b9\u6cd5\uff0c\u5176\u5b9e\u4ece\u6e90\u7801\u53ef\u4ee5\u4e00\u7aa5\u7a76\u7adf\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"// https://github.com/nodejs/node/blob/v16.8.0/lib/child_process.js\nfunction exec(command, options, callback) {\n  const opts = normalizeExecArgs(command, options, callback);\n  return module.exports.execFile(opts.file, opts.options, opts.callback);\n}\n\nfunction execFile(file /* , args, options, callback */) {\n  // ...\n  const child = spawn();\n  // ...\n}\n\n// ---\nfunction fork(modulePath /* , args, options */) {\n  // ...\n  return spawn(options.execPath, args, options);\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u53ef\u89c1\uff0c",(0,c.jsx)(n.code,{children:"exec"})," \u548c ",(0,c.jsx)(n.code,{children:"fork"})," \u6700\u7ec8\u8fd8\u662f\u4f9d\u8d56\u4e8e ",(0,c.jsx)(n.code,{children:"spawn"})," \u7684\u5b9e\u73b0\u3002\u800c\u5bf9\u4e8e\u540e\u8005\u7684\u5b9e\u73b0\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const child_process = require('internal/child_process');\nconst { ChildProcess } = child_process;\n\nfunction spawn(file, args, options) {\n  // ...\n  const child = new ChildProcess();\n  child.spawn(options);\n  // ...\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4f9d\u8d56\u4e8e\u5e95\u5c42\u7684\u5185\u90e8\u6a21\u5757 ",(0,c.jsx)(n.em,{children:"internal/child_process"})," \u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"spawn"})," \u7684\u4e3b\u8981\u529f\u80fd\u662f\u751f\u6210\u4e00\u4e2a\u5b50\u8fdb\u7a0b\uff0c\u5e76\u6267\u884c\u7ed9\u5b9a\u7684\u547d\u4ee4\uff0c\u7236\u5b50\u8fdb\u7a0b\u4e4b\u95f4\u901a\u8fc7\u7ba1\u9053\uff08pipe\uff09\u4f20\u9012 ",(0,c.jsx)(n.code,{children:"stdio"})," \u4fe1\u606f\uff0c\u800c\u4e14\u9ed8\u8ba4\u4e0d\u751f\u6210 shell\u3002\u6839\u636e\u793a\u4f8b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const { spawn } = require('child_process');\nconst ls = spawn('ls', ['-lh', '/usr']);\n\nls.stdout.on('data', (data) => {\n  console.log(`stdout: ${data}`);\n});\n\nls.stderr.on('data', (data) => {\n  console.error(`stderr: ${data}`);\n});\n\nls.on('close', (code) => {\n  console.log(`child process exited with code ${code}`);\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u7236\u8fdb\u7a0b\u901a\u8fc7\u76d1\u542c\u5b50\u8fdb\u7a0b\u76f8\u5e94\u7684 ",(0,c.jsx)(n.code,{children:"stdio"})," \u4e8b\u4ef6\u8fdb\u884c\u901a\u4fe1\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"exec",children:(0,c.jsx)(n.code,{children:"exec"})}),"\n",(0,c.jsxs)(n.p,{children:["\u524d\u9762\u6839\u636e\u6e90\u7801\u53ef\u4ee5\u770b\u5230 ",(0,c.jsx)(n.code,{children:"exec"})," \u7684\u5b9e\u73b0\u57fa\u4e8e ",(0,c.jsx)(n.code,{children:"spawn"}),"\uff0c\u4f46\u4e0d\u540c\u7684\u662f\uff0c\u524d\u8005\u5728\u751f\u6210\u5b50\u8fdb\u7a0b\u7684\u540c\u65f6\uff0c\u4f1a\u5148\u751f\u6210\u4e00\u4e2a shell\uff0c\u7136\u540e\u5728 shell \u4e2d\u6267\u884c\u7ed9\u5b9a\u7684\u547d\u4ee4\uff0c\u5b50\u8fdb\u7a0b\u7684\u8f93\u51fa\u4fe1\u606f\u4f1a\u8fdb\u884c\u7f13\u51b2\u5e76\u6700\u7ec8\u4f20\u9012\u7ed9\u56de\u8c03\u51fd\u6570\u3002\u6839\u636e\u793a\u4f8b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const { exec } = require('child_process');\nexec('cat *.js missing_file | wc -l', (error, stdout, stderr) => {\n  if (error) {\n    console.error(`exec error: ${error}`);\n    return;\n  }\n  console.log(`stdout: ${stdout}`);\n  console.error(`stderr: ${stderr}`);\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u7236\u8fdb\u7a0b\u5e76\u975e\u901a\u8fc7\u76d1\u542c\u5b50\u8fdb\u7a0b\u7684 ",(0,c.jsx)(n.code,{children:"stdio"})," \u4e8b\u4ef6\uff0c\u800c\u662f\u7ed9\u5b50\u8fdb\u7a0b\u4f20\u9012\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u6765\u83b7\u53d6\u5b50\u8fdb\u7a0b\u7684\u8f93\u51fa\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u91cc\u6709\u4e00\u4e2a\u663e\u8457\u7684\u533a\u522b\uff0c",(0,c.jsx)(n.code,{children:"exec"})," \u4f1a\u5148\u751f\u6210\u4e00\u4e2a shell \u5728\u6267\u884c\u547d\u4ee4\uff0c\u800c ",(0,c.jsx)(n.code,{children:"spawn"})," \u5219\u4f1a\u76f4\u63a5\u6267\u884c\u547d\u4ee4\uff0c\u4f46\u8003\u8651\u5230\u524d\u8005\u57fa\u4e8e\u540e\u8005\u5b9e\u73b0\uff0c\u4e8b\u5b9e\u4e0a\u540e\u8005\u53ef\u4ee5\u901a\u8fc7\u4f20\u9012 ",(0,c.jsx)(n.code,{children:"options.shell"})," \u9009\u9879\u6765\u9009\u62e9\u662f\u5426\u751f\u6210 shell\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5b98\u65b9\u6587\u6863\u6709\u4e00\u53e5\u8bdd\u4e5f\u503c\u5f97\u7559\u610f\uff1a"}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["Unlike the ",(0,c.jsx)(n.a,{href:"http://man7.org/linux/man-pages/man3/exec.3.html",children:(0,c.jsx)(n.code,{children:"exec(3)"})})," POSIX system call, ",(0,c.jsx)(n.code,{children:"child_process.exec()"})," does not replace the existing process and uses a shell to execute the command."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"exec"})," \u7684 POSIX \u7cfb\u7edf\u8c03\u7528\u7684\u884c\u4e3a\u662f\uff0c\u5728\u5f53\u524d\u8fdb\u7a0b\u4e2d\u7528\u65b0\u7684\u8fdb\u7a0b\u6620\u50cf\uff08\u7a0b\u5e8f\uff09\u66ff\u6362\u65e7\u7684\u8fdb\u7a0b\u6620\u50cf\u5e76\u6267\u884c\uff0c\u672c\u8d28\u4e0a\u5e76\u6ca1\u6709\u751f\u6210\u65b0\u7684\u8fdb\u7a0b\uff0c\u4e5f\u5c31\u4e0d\u5b58\u5728\u7236\u5b50\u8fdb\u7a0b\u7684\u6982\u5ff5\u3002\u800c\u5728\u8fd9\u91cc\uff0cNode.js \u7684 ",(0,c.jsx)(n.code,{children:"exec"})," \u65b9\u6cd5\u7684\u884c\u4e3a\u5e76\u4e0d\u662f\u66ff\u6362\u8fdb\u7a0b\u6620\u5c04\uff0c\u800c\u662f\u751f\u6210 shell \u53bb\u6267\u884c\u547d\u4ee4\u3002"]}),"\n",(0,c.jsxs)(n.h3,{id:"spawn-vs-exec",children:[(0,c.jsx)(n.code,{children:"spawn"})," vs ",(0,c.jsx)(n.code,{children:"exec"})]}),"\n",(0,c.jsx)(n.p,{children:"\u73b0\u5728\u53ef\u4ee5\u603b\u7ed3\u4e00\u4e0b\u4e24\u8005\u7684\u663e\u8457\u533a\u522b\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"spawn"})," \u9ed8\u8ba4\u4e0d\u751f\u6210 shell\uff0c\u800c ",(0,c.jsx)(n.code,{children:"exec"})," \u5fc5\u7136\u4f1a\u751f\u6210\u4e00\u4e2a shell"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"spawn"})," \u901a\u8fc7 stdio \u4e8b\u4ef6\u6d41\u548c\u7236\u8fdb\u7a0b\u901a\u4fe1\uff0c\u800c ",(0,c.jsx)(n.code,{children:"exec"})," \u4f1a\u5bf9\u8f93\u51fa\u4fe1\u606f\u8fdb\u884c\u7f13\u51b2\u5e76\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u5c06\u5176\u4f20\u9012\u7ed9\u7236\u8fdb\u7a0b\uff0c\u4e14\u540e\u8005\u9ed8\u8ba4\u6709 1024 * 1024 \u5b57\u8282\u7684\u7f13\u51b2\u533a\u9650\u5236"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5bf9\u4e8e\u7b2c\u4e00\u70b9\uff0c\u5982\u679c\u8981\u6267\u884c\u7684\u547d\u4ee4\u4f9d\u8d56\u4e8e shell \u7684\u4e00\u4e9b\u529f\u80fd\uff0c\u6bd4\u5982\u7ba1\u9053\u3001I/O \u91cd\u5b9a\u5411\u5219\u9009\u62e9 ",(0,c.jsx)(n.code,{children:"exec"})," \u4f1a\u66f4\u4fbf\u6377\u3002\u5bf9\u4e8e\u7b2c\u4e8c\u70b9\uff0c\u5bf9\u6bd4\u793a\u4f8b\u4ee3\u7801\uff0c\u53ef\u4ee5\u5f88\u660e\u663e\u7684\u770b\u51fa\u6765\uff0c",(0,c.jsx)(n.code,{children:"spawn"})," \u9002\u5408\u957f\u65f6\u95f4\u6267\u884c\u7684\u547d\u4ee4\uff0c\u4e14\u6709\u6301\u7eed\u7684\u8f93\u51fa\u4fe1\u606f\uff1b\u800c\u540e\u8005\u66f4\u9002\u5408\u6267\u884c\u77ed\u65f6\u7684\u547d\u4ee4\uff0c\u4e14\u5728\u547d\u4ee4\u6267\u884c\u5b8c\u540e\u4e00\u6b21\u6027\u83b7\u53d6\u8f93\u51fa\u7ed3\u679c\u3002"]}),"\n",(0,c.jsxs)(n.h2,{id:"\u5de5\u5177\u5e93-execa",children:["\u5de5\u5177\u5e93 ",(0,c.jsx)(n.code,{children:"execa"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u5206\u6790\u5b8c\u5b83\u4eec\u4e24\u8005\u7684\u533a\u522b\u4e4b\u540e\uff0c\u8fd9\u91cc\u63a8\u8350\u4e00\u4e2a npm \u5de5\u5177\u5305 ",(0,c.jsx)(n.code,{children:"execa"}),"\uff0c\u5176\u5bf9 child_process \u7684\u65b9\u6cd5\u8fdb\u884c\u4e86\u6269\u5c55\u548c\u62bd\u8c61\uff0c\u5728\u5f88\u591a\u5e38\u89c1\u7684\u4f7f\u7528\u573a\u666f\u4e2d\u5927\u5927\u51cf\u5c11\u4e86\u6a21\u677f\u4ee3\u7801\uff0c\u4e5f\u4e3a\u8c03\u8bd5\u63d0\u4f9b\u4e86\u4e00\u5b9a\u7684\u4fbf\u5229\u6027\u3002\u770b\u770b\u6587\u6863\u4e2d\u4e00\u6bb5\u793a\u4f8b\u4ee3\u7801\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const execa = require('execa');\n\n(async () => {\n  // Catching an error\n  try {\n    await execa('unknown', ['command']);\n  } catch (error) {\n    console.log(error);\n    /*\n  {\n   message: 'Command failed with ENOENT: unknown command spawn unknown ENOENT',\n   errno: -2,\n   code: 'ENOENT',\n   syscall: 'spawn unknown',\n   path: 'unknown',\n   spawnargs: ['command'],\n   originalMessage: 'spawn unknown ENOENT',\n   shortMessage: 'Command failed with ENOENT: unknown command spawn unknown ENOENT',\n   command: 'unknown command',\n   escapedCommand: 'unknown command',\n   stdout: '',\n   stderr: '',\n   all: '',\n   failed: true,\n   timedOut: false,\n   isCanceled: false,\n   killed: false\n  }\n  */\n  }\n})();\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u9519\u8bef\u4fe1\u606f\u5bf9\u4e8e\u5f00\u53d1\u8005\u6765\u8bf4\u662f\u6613\u8bfb\u7684\uff0c\u8c03\u8bd5\u8d77\u6765\u96be\u5ea6\u8981\u5c0f\u5f88\u591a\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u66f4\u591a\u7684\u4e1c\u897f\uff0c\u5efa\u8bae\u76f4\u63a5\u770b\u8be5 npm \u5305\u7684\u6587\u6863\u8fdb\u884c\u8be6\u7ec6\u4e86\u89e3\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u53c2\u8003\u8d44\u6e90",children:"\u53c2\u8003\u8d44\u6e90"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://nodejs.org/dist/latest/docs/api/child_process.html",children:"https://nodejs.org/dist/latest/docs/api/child_process.html"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://stackoverflow.com/questions/48698234/node-js-spawn-vs-execute",children:"https://stackoverflow.com/questions/48698234/node-js-spawn-vs-execute"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://www.hacksparrow.com/nodejs/difference-between-spawn-and-exec-of-node-js-child-rocess.html",children:"https://www.hacksparrow.com/nodejs/difference-between-spawn-and-exec-of-node-js-child-rocess.html"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://linuxhint.com/linux-exec-system-call/",children:"https://linuxhint.com/linux-exec-system-call/"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://2ality.com/2022/07/nodejs-child-process.html",children:"https://2ality.com/2022/07/nodejs-child-process.html"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://github.com/sindresorhus/execa",children:"https://github.com/sindresorhus/execa"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>d});var c=s(67294);const o={},l=c.createContext(o);function d(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);