---

    {
        "title": "Windows 环境下 Nginx 配置",
        "keywords": ["Nginx", "Config", "Windows"],
        "summary": "Nginx 作为一个轻量、高性能的服务器，近年来颇受欢迎，无论是生产环境还是开发环境都有其发挥作用的地方，其配置文件相对来说还是较为简单的。而且，现在 nginx 也支持 Windows 环境了，利用不同的配置可以满足我们不同的需求。",
        "ctime": "2018-3-15 12:38:00",
        "mtime": "2016-3-15 12:38:00"
    }

---

## Nginx

　　Nginx 是一位俄罗斯开发者（伊戈尔·赛索耶夫）开发的服务器，于 2004 年 10 月 4 日公开发布。Nginx 的优势在于轻量级和高性能，尤其是高并发的场景下，相对其它服务器来说表现比较好，因此现在颇受欢迎。Nginx 通常运行在 Unix/Linux 环境下，当然现在官方也发布了 Windows 环境下的应用，不过性能有所降低，这是受限于系统环境的影响。

　　Nginx 在生产环境下的应用场景通常作为负载均衡的前端服务器，对请求进行分发，实现极高的并发量。当然，在开发环境下，nginx 也可以作为一个工具来使用，提供给我们极大的便利，例如利用反向代理来实现前后端的完全分离开发。

## Nginx 特定场景下的配置

　　不管 nginx 基于什么场景发挥什么作用，都是基于特定的配置来实现，nginx 的配置文件也相对比较简单。

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

### 允许跨域

　　有时候，比较大（几百兆以上）的静态资源需要在客户端使用异步方式加载（例如 Ajax），但是多个人合作开发时，拷贝这些静态资源到各自本地（如果不这么做，将会出现跨域问题）是最糟糕的解决方案，这个时候我们可以将静态资源放在一个服务器上，然后使用反向代理或者允许跨域的配置巧妙的解决这个问题。

    location /static/ {
        ...

        add_header 'Access-Control-Allow-Origin'      '*';
        add_header 'Access-Control-Allow-Headers'     'Content-Type';
        add_header 'Access-Control-Allow-Credentials' 'true';
    }

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