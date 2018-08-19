---

    {
        "title": "Nginx 配置",
        "keywords": ["Nginx", "Config"],
        "summary": "Nginx 作为一个轻量、高性能的服务器，近年来颇受欢迎，无论是生产环境还是开发环境都有其发挥作用的地方，其配置文件相对来说还是较为简单的。而且，现在 nginx 也支持 Windows 环境了，利用不同的配置可以满足我们不同的需求。",
        "ctime": "2018-3-15 12:38:00",
        "mtime": "2018-5-17 9:08:00"
    }

---

## Nginx

　　Nginx 是一位俄罗斯开发者（伊戈尔·赛索耶夫）开发的服务器，于 2004 年 10 月 4 日公开发布。Nginx 的优势在于轻量级和高性能，尤其是高并发的场景下，相对其它服务器来说表现比较好，因此现在颇受欢迎。Nginx 通常运行在 Unix/Linux 环境下，当然现在官方也发布了 Windows 环境下的应用，不过性能有所降低，这是受限于系统环境的影响。

　　Nginx 在生产环境下的应用场景通常作为负载均衡的前端服务器，对请求进行分发，实现极高的并发量。当然，在开发环境下，nginx 也可以作为一个工具来使用，提供给我们极大的便利，例如利用反向代理来实现前后端的完全分离开发。

## Nginx 特定场景下的配置

　　不管 nginx 基于什么场景发挥什么作用，都是基于特定的配置来实现，nginx 的配置文件也相对比较简单。

### 工作进程

　　Nginx 是基于异步非阻塞 IO 模型的，同时也支持多进程，通常将其工作进程数目设置为 CPU 的核心数，以发挥其最大作用，实现高并发。

    {
        worker_processes  4;

        ...
    }

　　这个配置是写在配置文件顶部的。

### 设置编码

　　通常来说，将编码设置为 `UTF-8` 是比较合适的。

    server {
        ...

        charset utf-8;
    }

### 更改上传数据大小限制

　　Nginx 默认的数据上传大小为 2M，某些情况下我们需要将其更改的大一些，以符合业务需求。

    server {
        ...

        client_max_body_size 20m;
    }   

### 开启 gzip

　　开启 gzip 压缩可以在客户端请求文本文件时，将传输大小压缩至少**70%**左右，可以获得非常好的优化效果，通常都会开启 gzip 压缩配置。

    http {
        ...

        # gzip
        gzip                on;
        gzip_min_length     20;
        gzip_buffers        4 16k;
        gzip_comp_level     6;
        gzip_types          text/plain text/xml text/css text/javascript application/x-javascript application/javascript application/json; 
        gzip_http_version   1.0;
        gzip_disable        "MSIE [1-6]\.";
        gzip_proxied        off;
        gzip_vary           on;

        ...
    }

　　其中有几个配置需要特别注意：

- `gzip_min_length`

    　　文件大小小于该值的文件将不会被压缩，大于此值时才会被压缩。

- `gzip_buffers`

    　　设置用于处理请求压缩的缓冲区数量和大小。比如 `32 4K` 表示按照内存页（one memory page）大小以 4K 为单位（即一个系统中内存页为 4K），申请 32 倍的内存空间。通常默认即可。

- `gzip_comp_level`

    　　设置压缩级别，值为 1-9。压缩级别越高，压缩效果越好，但同时越耗费时间和 CPU 性能，所以通常设置为 6 即可。

- `gzip_types`

    　　设置要压缩的文件 MIME 类型，默认包含 `text/html`。gzip 只对文本文件的压缩效果较好，不建议设置非文本文件。

- `gzip_http_version`

    　　设置要进行压缩的 http 协议版本，默认设置为 1.0 即可，因为 nginx 和后端服务器（Server）默认采用 HTTP/1.0 进行通信的，防止出现不压缩的情况。

### 允许跨域

　　有时候，比较大（几百兆以上）的静态资源需要在客户端使用异步方式加载（例如 Ajax），但是多个人合作开发时，拷贝这些静态资源到各自本地（如果不这么做，将会出现跨域问题）是最糟糕的解决方案，这个时候我们可以将静态资源放在一个服务器上，然后使用反向代理或者允许跨域的配置巧妙的解决这个问题。

    location /static/ {
        ...

        add_header 'Access-Control-Allow-Origin'      '*';
        add_header 'Access-Control-Allow-Headers'     'Content-Type';
        add_header 'Access-Control-Allow-Credentials' 'true';
    }

- `Access-Control-Allow-Origin`

    　　必选，这个响应头信息代表的是允许跨域请求的域名，`*` 则表示允许任意域名向此服务器发起跨域请求。

- `Access-Control-Allow-Credentials`

    　　可选，这个响应头信息代表的是跨域请求是否需要携带 **Cookie** 信息，默认为 `false`，在需要利用 Session-Cookie 机制的情况下务必设置为 `true`。

### 反向代理

　　Nginx 可以作为一个反向代理服务器，来为我们提供一些场景下的解决方案，例如负载均衡、跨域、前后端完全分离开发场景等等。

    location / {
        proxy_set_header Host            $http_host;
        proxy_set_header X-Real-IP       $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cookie_path /project/ /;
        proxy_pass http://127.0.0.1:8181/project/;
    }

　　这里有几点需要注意下：

- `proxy_set_header`

    　　目的是为了保证后端（被代理的）服务器获取到远程客户端的真实信息，相当于将前端（nginx 反向代理）服务器的信息隐藏，造成客户端直接访问后端服务器的“假象”。

    　　`Host` 应尽可能设置成 `$http_host`，这样会包含完整的 **IP** 和**端口**信息，设置为 `$host` 时将不会包含端口信息。

- `proxy_cookie_path`

    　　目的是为了在访问路径与代理路径发生改变（不一致）的情况下防止出现客户端 Cookie 丢失的问题。

- `proxy_pass`

    　　则是后端（被代理）服务器地址。