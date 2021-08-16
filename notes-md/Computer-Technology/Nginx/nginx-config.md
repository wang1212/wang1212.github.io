---

    {
        "title": "Nginx 配置",
        "tags": ["计算机技术", "服务器", "Nginx"],
        "keywords": ["计算机技术", "服务器", "Nginx", "配置"],
        "summary": "Nginx 作为一个轻量、高性能的服务器，近年来颇受欢迎，无论是生产环境还是开发环境都有其发挥作用的地方，其配置文件相对来说还是较为简单的。而且，现在 nginx 也支持 Windows 环境了，利用不同的配置可以满足我们不同的需求。",
        "ctime": "2018-03-15 12:38:00",
        "mtime": "2020-12-02 01:19:00"
    }

---

　　**<u>建议主要参考官网英文文档。</u>**

　　具体指令直接可以在官网文档的 Alphabetical index of directives（按字母顺序排列的指令索引）中搜索即可。

> 官方文档：http://nginx.org/en/docs/

## Nginx

　　Nginx 是一位俄罗斯开发者（伊戈尔·赛索耶夫）开发的服务器，于 2004 年 10 月 4 日公开发布。Nginx 的优势在于轻量级和高性能，尤其是高并发的场景下，相对其它服务器来说表现比较好，因此现在颇受欢迎。Nginx 通常运行在 Unix/Linux 环境下，当然现在官方也发布了 Windows 环境下的应用，不过性能有所降低，这是受限于系统环境的影响。

　　Nginx 在生产环境下的应用场景通常作为负载均衡的前端服务器，对请求进行分发，实现极高的并发量。当然，在开发环境下，nginx 也可以作为一个工具来使用，提供给我们极大的便利，例如利用反向代理来实现前后端的完全分离开发。

　　Nginx 的架构被设计为模块化，从官方文档我们就可以明显的看出来，相应的配置需要在对应的模块中去查找。默认安装的情况下，官方文档中的所有模块并不会被全部安装，只会安装大部分满足常用需求的模块，至于一些特殊需求所要用到的模块，可以自己手动编译安装，当然模块化的好处就是可以自己开发模块来扩展 nginx 的功能。

## Nginx 特定场景下的配置

　　不管 nginx 基于什么场景发挥什么作用，都是基于特定的配置来实现，nginx 的配置文件也相对比较简单。

### 工作进程

　　Nginx 是基于异步非阻塞 IO 模型的，同时也支持多进程，通常将其工作进程数目设置为 CPU 的核心数，以发挥其最大作用，实现高并发。

    {
        worker_processes  4;
    
        ...
    }

　　这个配置是写在配置文件顶部的，其值也可以为 `auto`。

> 官网文档：[Core functionality/worker_processes](http://nginx.org/en/docs/ngx_core_module.html#worker_processes)

### 隐藏 nginx 版本号

　　隐藏掉版本号，可以降低被攻击的风险。

    http {
        ...
    
        server_tokens off;
    }

> 官网文档：[ngx_http_core_module/server_tokens](http://nginx.org/en/docs/http/ngx_http_core_module.html#server_tokens)

### 设置编码

　　通常来说，将编码设置为 `UTF-8` 是比较合适的。

    server {
        ...
    
        charset utf-8;
    }

> 官网文档：[ngx_http_charset_module/charset](http://nginx.org/en/docs/http/ngx_http_charset_module.html#charset)

### 更改上传数据大小限制

　　Nginx 默认的数据上传大小为 2M，某些情况下我们需要将其更改的大一些，以符合业务需求。

    server {
        ...
    
        client_max_body_size 20m;
    }

> 官网文档：[ngx_http_core_module/client_max_body_size](http://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size)

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

> 官网文档：[ngx_http_gzip_module](http://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip)

### 路由匹配规则

　　nginx 像一个路由，客户端通过什么地址访问服务器，服务器则在配置文件中通过设置好的路由来匹配请求进行转发。

　　nginx 的匹配规则分为 3 类：

- 正则匹配：由 `~`（不忽略大小写） 和 `~*`（忽略大小写）开头
- 精确匹配：由 `=` 开头
- 前缀匹配：由 `^~` 开头或没有任何字符的规则

　　匹配顺序：**首先检查精确匹配，匹配到则终止；其次，检查前缀字符串匹配，匹配到时，若是以 `^~` 开头的则终止，否则继续进行正则匹配；最后，检查正则匹配，顺序为配置文件中书写顺序（从上到下），匹配到第一条则终止，若没匹配到，则以匹配到的前缀匹配规则为最终结果。**

    # 精确匹配，加速 / 请求的处理
    location = / {
        ...
    }
    
    # 前缀匹配，处理一些需要缓存的静态资源
    location ^~ /static/ {
        root    /Data/static/;
        expires 7d;
    }
    
    # 正则匹配，处理静态资源
    location ~* \.(html|js|css|png|jpg|jpeg|gif|json|ico|otf|eot|svg|ttf|woff|woff2|map)$ {
        root /Data/webapps/;
    }
    
    # 前缀匹配，默认处理（可以做反向代理，处理动态资源请求）
    location / {
        proxy_pass  http://127.0.0.1:8080;
    }

　　在非精确匹配的规则内部是可以嵌套 `location` 规则的。

> 官网文档：[ngx_http_core_module/location](http://nginx.org/en/docs/http/ngx_http_core_module.html#location)

#### 调试技巧

　　nginx 本身是比较难调试的，不过在配置 `location` 指令时，可以利用 `return` 指令来进行调试。

  ```nginx
 location /test/ {
   return 600;
 }
  ```

 　　此时若访问 **/test/** 路径，可以看到响应码为 `600` 时，说明路径匹配成功。同时，可以添加一些辅助文本信息：

  ```nginx
 location /test/ {
   default_type text/html;
   return 600 'Hello';
 }
  ```

 > 官网文档：[ngx_http_rewrite_module/return](http://nginx.org/en/docs/http/ngx_http_rewrite_module.html#return)

### 虚拟目录

　　虚拟目录解决了客户端请求资源的 **URL** 与服务器端对应资源存在位置不一致的问题。如下所示：

    # 虚拟目录
    location /static/ {
        alias /DataDisk/resources/;
    }
    
    # 这样，客户端发送 example.com/static/bg.png 的请求实际映射到了服务器端 /DataDisk/resources/bg.png 的资源上

　　**URL** 作为统一资源定位符，代表的是资源所在的真实网络位置，但在某些情况下，出于安全性、降低逻辑复杂性等因素的考虑，给客户端提供一个虚拟目录可能更好，这个时候使用 `alias` 指令就可以实现。

　　作为对比，我们使用 `root` 指令通常指定的是真实目录。如下所示：

    # 真实目录
    location /static/ {
        root /DataDisk/resources;
    }
    
    # 这样，客户端发送 example.com/static/bg.png 的请求实际映射到了服务器端 /DataDisk/resources/static/bg.png 的资源上

　　可以看出，`root` 指令通常适合用在资源路径完全真实存在的情况下，而 `alias` 指令则更适合用在资源路径前缀部分不是真实存在的情况下。

> 官网文档：[ngx_http_core_module/alias](http://nginx.org/en/docs/http/ngx_http_core_module.html#alias)

### 文件列表浏览

　　静态资源服务器一般允许用户查看服务器上的文件列表，例如 CDN、镜像站等。nginx 出于安全考虑，默认是不允许客户端浏览器查看服务器上的文件列表的，可以通过以下指令来进行配置：

```nginx
location /static/ {
    autoindex on;				# 开启客户端文件列表浏览
    autoindex_exact_size off;   # 默认显示的文件确切大小，单位 b，关闭后自动计算 KB/MB/GB 等
    autoindex_localtime on;     # 文件的改动时间以服务器时间为准
}
```

> 官网文档：[ngx_http_autoindex_module](http://nginx.org/en/docs/http/ngx_http_autoindex_module.html)

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

> 官网文档：[ngx_http_headers_module/add_header](http://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header)

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

#### 代理服务路径变化时

　　如果说在反向代理过程中，路径没有差异，一般来说不会出现什么问题，但是如果路径有变化时，会出现两个问题，一个是 **cookie 丢失**，另一个则是 **后端服务器重定向错误**。 第一个问题可以用 `proxy_cookie_path` 指令解决，第二个问题则使用 `proxy_redirect` 指令解决。具体如下：

```nginx
location /test/ {
  proxy_cookie_path /project/ /test/;
  proxy_pass http://127.0.0.1:8181/project/;
  proxy_redirect ~(https?://[^/]+)?/project/(.*) $scheme://$http_host/test/$2;
}
```

　　首先，`proxy_pass` 指令配置的代理服务在用户实际访问时路径发生了变化。用户以 **/test/users** 路径访问时，实际被 nginx 代理到后端的服务路径为 **/project/users**，可以明显的看到路径的前缀发生了变化。

　　此时，`proxy_cookie_path` 指令告诉 nginx 将后端被代理服务的响应头中 cookie_path 进行转换，这样在客户端访问任意路径时，cookie_path 也会保持和访问路径一致，而不是实际代理的服务路径，否则 cookie 将会在客户端丢失。

　　同时，如果说被代理的服务有重定向需求的话，不配置 `proxy_redirect` 指令，重定向的路径将会发生错误，需要告诉 nginx 将其路径中部分进行替换。例如，用户访问 **/test/**，被代理的服务路径为 **/project/**，此时被代理服务做一个重定向操作到 **/project/index.html**，如果不做转换，用户会直接访问该路径将发生错误。在这里，`proxy_redirect` 指令所做的就是将响应头中 `Location`字段的值由 **/project/index.html** 替换为 **/test/index.html**，这样用户将会正常访问到资源。

> 官网文档：[ngx_http_proxy_module](http://nginx.org/en/docs/http/ngx_http_proxy_module.html)

### 重定向

　　重定向是一个比较常见的需求，nginx 的重定向指令（rewrite）还是相当简单的。例如，需要将所有 http 请求重定向到 https 下，官方推荐这么做：

    server {
        listen      80;
        server_name localhost;
        return 301 https://example.com$request_uri;
    }

　　事实上，也可以用 `rewrite` 指令，不过官方不推荐：

    server {
        ...
        rewrite ^/(.*)$ https://example.com/$1 permanent;
    }

　　**注意：** `301` 重定向可能会导致 POST 请求被改变为 GET 请求，并可能丢失提交数据，此时使用 `308` 状态码替换即可。

> 官网文档：[ngx_http_rewrite_module](http://nginx.org/en/docs/http/ngx_http_rewrite_module.html)

#### 项目首页重定向

　　大多数时候，我们在同一个域名下会部署多个 Web 应用，访问的话需要 **WebAppName** 来进行区分，例如 `localhost:80/App`，那么 `App` 其实就代表了一个 Web 应用，将会映射到相应的文件夹。这里有一个细节性问题，文件夹的路径必然以 `/` 结束，所以大多数服务器都会自动做一次重定向，将 `localhost:80/App` 重定向到 `localhost:80/App/`。如果 Nginx 没有配置，默认是不会做这个重定向的，为了用户访问方便，我们需要解决这个问题：

    localhost / {
        # 这是一个默认配置文件中的配置项
        # First attempt to serve request as file, then
        # as directory, then fall back to displaying a 404.
        try_files $uri $uri/ =404;
    }

　　这个配置基本上解决了该问题，但**在内外网端口不一致时，会出现问题**。例如，我们通过 `www.example.com:80/App` 访问部署在内网 `8080` 端口上的 Nginx 时，Nginx 会将其重定向到 `www.example.com:8080/App/`，这里的差异在于，重定向时丢失了外网端口，用户此时将会访问失败。

　　目前，还没找到比较优雅的解决办法，可以用以下配置暂时解决该问题：

    location ~ ^/[^/]+$ {
        return 301 $scheme://$http_host$uri/;
    }

### 日志分割

　　Nginx 的访问日志（access_log）默认是没有进行分割的，时间一长，日志文件就会有 GB 级别的大小，日志写入速度变慢，也会影响 nginx 的性能。我们可以通过很简单的方式，将访问日志设置为按天记录,将日志记录在不同的文件中。

    server {
        ...
        # cut log by day
        if ($time_iso8601 ~ "^(\d{4})-(\d{2})-(\d{2})") {
            set $year  $1;
            set $month $2;
            set $day   $3;
        }
    
        access_log  logs/access/host.access-$year-$month-$day.log main;
    }

> 官网文档：[ngx_http_log_module](http://nginx.org/en/docs/http/ngx_http_log_module.html)