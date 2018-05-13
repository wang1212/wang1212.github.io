---

    {
        "title": "接口文档规范",
        "keywords": ["Web", "Interface"],
        "summary": "涉及到客户端与服务器端数据交互问题，需要进行接口（API）的规范定义，现统一使用 .md 格式文件来书写。",
        "ctime": "2018-03-28 21:00:00"
    }

---

# 接口文档规范

涉及到客户端与服务器端数据交互问题，需要进行接口（API）的规范定义，现统一使用 .md 格式文件来书写。

    let doc = document.getElementById('id');

    function() {
        const a = 1;
        return;
    }

## 文档属性

接口文档除过接口信息以外，还有几个关键的属性需要标明。

- Title：文档标题；
- Description：文档概述；
- Time：应该标明接口文档的编写时间；
- Editor：标明编写接口文档的人及其负责岗位；
- Participant：标明参与接口文档编写的人及其负责岗位
- Reader：该接口文档的预期读者。

### 举例

    {
        "Title": "林校项目 API 文档",
        "Description": "此文档涵盖了林校项目整个系统的 Web 前端、Android 客户端所需要的所有 API 接口。",
        "Time": "2018-03-28",
        "Editor": "mrwang, Web 前端",
        "Participant": [
            "mrli, Android 客户端",
            "mrchen,  Android 客户端",
            "mryue, Java 服务器端"
        ],
        "Reader": "林校项目所有开发人员"
    }

当然，还可以添加一些有用的字段来进行说明。

## 接口信息

客户端向后台请求数据时，需要的接口（API）规范可以由客户端或者服务器端来定义，书写规范遵循一下几点：

- description：该接口的描述，注明该接口用来干什么，目的是什么等；
- request： 
    - name：接口名称，使用动词+名词，例如 getInfo，也可以留给后端人员去补充；
    - uri：请求的路径，例如 /ForestManage/，也可以留给后端人员去补充；
    - param：请求参数，写明参数名与参数类型，是否必须，以及候选条件等;
- response：
    - type：响应数据格式；
    - content：响应数据样例，必须举出必要字段，并附加注释。

除过以上必要的信息以外，还可以添加其它有用的字段，比如备注等，根据需要添加即可。

### 举例

    {
        "description": "根据用户名，获取用户数据信息",
        "request": {
            "name": "getUserInfo",
            "uri": "/ForestManage/"
            "param": [
                {
                    "name": "username",
                    "type": "String",
                    "required": 1  // 1 表示必要的参数， 0 表示非必要参数
                }
            ]
        },
        "response": {
            "type": "json",
            "content": {
                "code": "",  // 状态码，例如 1001 表示查询成功， 1002 表示查询失败
                "data": {
                    "username": "", // 用户名
                    "sex": "",      // 性别
                    "age": "",      // 年龄
                    "phone": "",    // 联系电话
                }
            }
        }
    }

### 文档格式

统一使用 .md 格式文件来写接口文档，接口可以按种类、模块进行划分，可以写在不同的文件中，也可以写在同一个文件中。

#### 不同类型、模块接口写在不同的文件中：

> ./interface-user

    {
        "description": "接口1",
        ...
    }, 
    
    {
        "description": "接口2",
        ...
    }

    ...

> ./interface-exam

    {
        "description": "接口1",
        ...
    }, 
    
    {
        "description": "接口2",
        ...
    }

    ...

#### 不同类型、模块接口写在同一个文件中：

> ./interface

--- interface-user

    {
        "description": "接口1",
        ...
    }, 

    {
        "description": "接口2",
        ...
    }

    ...

--- interface-exam

    {
        "description": "接口1",
        ...
    }, 
    
    {
        "description": "接口2",
        ...
    }

    ...

尽可能将不同模块的接口分成独立文件去写。

## 例子

下面举一个完整的接口文档例子。

***

> ./interface.md

# API 文档

## Document-message

    {
        "Title": "林校项目 API 文档",
        "Description": "此文档涵盖了林校项目整个系统的 Web 前端、Android 客户端所需要的所有 API 接口。",
        "Time": "2018-03-28",
        "Editor": "mrwang, Web 前端",
        "Participant": [
            "mrli, Android 客户端",
            "mrchen,  Android 客户端",
            "mryue, Java 服务器端"
        ],
        "Reader": "林校项目所有开发人员"
    }

## Interface-message

    {
        "description": "接口1",
        ...
    }, 
    
    {
        "description": "接口2",
        ...
    }

    ...