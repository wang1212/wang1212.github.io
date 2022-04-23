---

    {
        "title": "使用 Git",
        "tags": ["计算机技术", "工具"],
        "keywords": ["计算机技术", "工具", "Git"],
        "summary": "Git 是一个分布式的版本控制工具，类似的版本控制工具还有 SVN ；由于 GitHub 平台的盛行，也使得 git 更加受欢迎，在 Windows 平台使用 git 也是非常方便的。",
        "ctime": "2016-12-31 13:49:00",
        "mtime": "2021-05-18 16:12:00"
    }

---

## Git

　　Git 是一个非常强大的版本控制工具，所谓的版本控制即就是对一个项目的更改进行记录，随后可以进行撤销、查看等功能。对于大型的开源项目，版本控制工具提供了非常大的便利，可以多人同时协作开发。Github 则提供了这样一个平台，使用 git 进行项目维护，世界上大多数的开源项目都在 github 仓库中进行展示。而 github 对程序员也是友好的，因为我们个人也可以使用免费的仓库，来维护自己的项目。

　　Git 源于 Linux ，但不仅仅限于 Linux 平台下的使用， Git for Windows 就是最好的选择：

> **Git for Windows：**https://git-scm.com/

　　该网站的文档页面提供了很多有用的资源，例如 [Git 相关的书《Pro Git》](https://git-scm.com/book/)、[常用 Git 命令备忘单](https://training.github.com/)、[Git 命令可视化备忘单](https://ndpsoftware.com/git-cheatsheet.html)等等有用的免费资源。

## Git Bash

　　Git 在 Windows 下提供了图形用户界面（Git GUI）和命令行（Git Bash）两种操作方式，不过我更推荐使用后者，命令行更快速、简单一些。

　　安装好后，我们打开 Bash 终端，可以在界面上 **右键-->Options-->Text**，更改字体大小和字符编码，推荐将字符编码改为 **UTF-8**。

### 配置

　　我们首先可以对 Git 进行简单的配置，使用 SSH 来避免重复提交时每次都要输入密码。

#### 个人信息

　　进行用户名和邮箱的全局配置：

```bash
git config --global user.name "wang1212"
git config --global user.email "mrwang1212@126.com"
```

　　查看配置信息：

```bash
git config --global -l
```

#### SSH 密钥

　　安装 SSH 密钥可以在我们进行项目提交时避免重复输入用户名密码，也更安全。可以直接查看 GitHub 官方文档：

> **Help：**https://help.github.com/articles/generating-an-ssh-key/

　　检查是否已有 SSH 密钥文件：

```bash
ls -al ~/.ssh
```

　　如果不存在（或者想覆盖），可以生成一个新的 SSH 密钥文件：

```bash
ssh-keygen -t rsa -b 4096 -C "wangyuan230@163.com"
```

　　这里使用你的邮箱作为 SSH 密钥标签，该过程中直接全按回车即可。

　　得到 SSH 密钥文件后，接下来应该将该密钥添加到 ssh-agent ：

```bash
# 启动 ssh-agent
eval $(ssh-agent -s)
# 添加 SSH
ssh-add ~/.ssh/id_rsa
```

　　最后将 SSH 添加到你的 GitHub 账户即可，先将密钥文件复制到剪切板：

```bash
clip < ~/.ssh/id_rsa.pub
```

　　然后，打开 <a href="https://github.com/login" target="_blank">GitHub</a> 网站登录你的帐户，右上角头像进入 **Settings**，左边导航选择 **SSH and GPG keys**，点击 **New SSH key**，自己命名一个 title，然后将 SSH 文件复制到 key 框中，然后需要输入你的 github 账户密码。

　　最后，可以测试一下：

```bash
ssh -T git@github.com
```

　　回车后输入 **yes**，如果看到 **Hi {你的用户名}** 一串信息，就说明添加 SSH 密钥成功了。

#### HTTPS

　　SSH 虽然安全方便，但配置略显复杂。自从大部分网站从 HTTP 升级到 HTTPS 协议后，信息传输安全性也大大提高了，GitHub 目前全站采用了 HTTPS 协议。因此，现在 GitHub 推荐我们使用 HTTPS，即便捷又安全。

　　在使用 HTTPS 协议进行一些 git 操作时，为了避免需要重复输入用户名和密码进行验证，git 提供了 `credential.helper` 配置项来使用第三方凭证管理工具保存用户名和密码，并在需要验证的时候自动进行调用。

　　在 Windows 平台安装 git 的时候，默认配置了 `credential.helper` 为 `manager`，在 Bash 命令行输入以下命令即可查看到该配置项：

```bash
> git config --system --list
credential.helper=manager
```

　　该配置使得我们在进行 git 操作（push 等）时第一次输入用户名和密码，验证成功后，往后的所有操作不再需要进行重复的手动输入验证。在 Win 菜单搜索**网络密码管理**打开后即可看到保存的 git 服务的用户凭证；同时，登录你的 GitHub Web 客户端后，进入 **Settings -> Developer settings -> Personal access tokens** 即可看到这里增加了一个 token，在这里可以很方便的管理通过 HTTPS 验证的 PC。

####  其它配置

　　除过以上必须的基本配置外，还有一些比较有用的可选配置。

- `core.ignorecase=false`，开启文件名大小写检查。

```bash
git config --global core.ignorecase false
```

　　由于多个平台（Win/Mac/Linux）对于文件是否相同判断机制不同，部分平台认为文件名大小写不同仍然是同一个文件，而 Linux 却认为是不同的文件，Git 为了兼容默认是忽略掉文件名大小写检查的，这就导致我们重命名（仅修改大小写）文件之后发现提交到远程仓库没有变化，重命名未生效，更改该配置即可。

- `fetch.prune=true`，保持干净的本地分支列表。
  
```bash
git config --global fetch.prune true
```

　　通常，我们会在本地进行多分支开发，其中某些分支只是**暂时的**，后续会合并到其它分支（例如 `master`），尤其是一般提交的 PR 被合并后会自动删除远程仓库的被合并分支，那么对应的本地分支必须要手动删除，为了自动完成这一过程，保持本地分支列表干净可以配置此选项。

## 使用 Git

　　下面来看看 git bash 中一些常用的 git 命令，介绍一下其简单的用法，利用 git 来管理我们的代码。

### 初始化

　　在创建好一个新文件夹之后，进入该空白文件夹，我们在 git bash 中输入 `init` 命令即可初始化该文件夹为一个新的 git 仓库。

```bash
# 初始化仓库
git init
```

　　初始化完成后，该文件夹会出现一个隐藏的 **.git** 文件夹，可以使用 `ls` 命令查看是否已生成该文件夹：

```bash
# 查看文件
ls -a
```

　　该文件夹为仓库管理文件，并且是隐藏，一般情况下不要修改其中的文件。

### 添加与提交

　　Git 的工作状态有3个，分别为 **工作区（working directory）**、**暂存区（staging index）** 和 **版本库（Repository）**。我们在个人仓库（本地文件夹）中修改代码时，就处于工作区中；修改完成后，需要使用 `add` 命令将修改好的文件添加到暂存区中；随后，确认无误后我们可以使用 `commit` 命令将已添加到暂存区的文件提交到版本库中。

```bash
# 第一步：添加文件到暂存区
git add file_name  # 例如 git add index.html
# 第二步：将暂存区文件提交到版本库中
git commit -m "version_message"  
# 例如 git commit -m "1.0"
```

　　另外地，为了方便我们可以一次性将当前文件夹（工作区）的所有文件都添加到暂存区中：

```bash
# 添加工作区所有文件到暂存区
git add .
```

　　当然了，我们还可以将添加与提交操作合二为一，跳过暂存区：

```bash
# 一次性添加与提交工作区文件到版本库
git commit -am "version_message"
```

####  调试技巧

　　这里有一个小技巧，通常为了测试一些 hook 事件程序（例如 [husky](https://typicode.github.io/husky)），我们会做一下某些文件的细微改动然后提交来触发相应事件，但 `--allow-empty` 选项可以让我们更方便一些：

```bash
# 直接执行即可，不用改动任何文件
git commit --allow-empty -m 'it works!'
```

### 查看信息

　　如果能随时查看仓库中文件的修改情况以及与版本库中文件进行对比的结果可以方便很多，其实使用 `status` 和 `log` 命令即可查看所需要的信息。

```bash
# 查看目前文件修改情况（是否已添加、提交）
git status
# 查看已提交的文件日志
git log
```

### 撤销操作

　　当我们将文件修改后，如果发现更改并不恰当，需要回滚到修改之前的状态时，可以撤销我们的更改操作。

```bash
# 撤销工作区改动，将暂存区文件覆盖到工作区
git checkout -- file_name
```

　　这个命令所做的就是用暂存区中的文件来覆盖工作区已被修改的文件，从而实现撤销工作区的修改操作。

```bash
# 撤销暂存区改动，将版本库文件覆盖到暂存区
git reset HEAD -- file_name
```

　　而这个命令所做的则是用版本库中的文件来覆盖暂存区中已被修改的文件，从而实现撤销暂存区的修改操作。这里的 **HEAD** 指的是最近一次提交操作，可以将其更换为你需要撤销的提交操作的ID号，可以使用 `log` 命令查看提交信息中的ID。

　　实际上，先撤销暂存区改动，再撤销工作区改动，就可以将版本库中的文件恢复到工作区中。另外，还可以撤销提交操作并重新进行提交，这个命令可以用来修改提交信息和内容。

```bash
# 第一次提交
git commit -m "version 1.0"
# 撤销上次提交修改提交信息并重新提交
git commit --amend
```

### 删除操作

　　有时候我们可能把不需要添加到暂存区的文件给添加到了暂存区，这时候可以使用以下命令将其在暂存区中删除：

```bash
# 仅删除暂存区中的文件
git rm --cached file_name
```

　　当然，也有可能我们想直接删除掉工作区和暂存区中的文件：

```bash
# 同时删除工作区与暂存区中的文件
git rm -f file_name
```

　　除此之外，还有一种情况就是我们在工作区将同一个文件重命名后，需要删除原有在暂存区中的文件，添加新的文件到暂存区中，但是它们的文件内容是相同的。所以，直接可以进行重命名操作：

```bash
git mv old_filename new_filename
```

### 远程仓库

　　通常，我们会将代码库推送到远程的代码托管平台上进行管理，例如：

- [Github](https://github.com/)
- [Gitlab](https://about.gitlab.com/)
- [BitBucket](https://bitbucket.org/)
- [Gitee（开源中国）](https://gitee.com/)

　　在其它设备上就可以从远程仓库拉取代码：

```bash
# 可指定文件夹名称，不指定的话与仓库同名
git clone <rep_url> [dir_name]

# 查看本地仓库关联的远程仓库
git remote -v
# 查看本地仓库分支关联的远程仓库分支
git branch -vv

在本地仓库完成开发后，经过 `add`、`commit` 之后，即可推送到远程仓库进行同步：

# 推送到远程仓库，默认为 origin 仓库，当前分支
git push [origin] [current_branch]
```

　　如果是通过 `git clone` 从远程仓库拉取到本地的，可以看到会有一个默认的 `origin` 远程仓库；但是，如果是在本地建立的仓库，没有与远程仓库关联，可以先添加一个远程仓库，然后在推送时指定一个远程仓库，或者将本地仓库与远程仓库关联：

```bash
# 添加远程仓库
git remote set-url <name> <rep_url>
# or
git remote add <name> <rep_url>
```

- 在推送时指定一个远程仓库

```bash
git push --set-upstream <remote> <remote_branch>
```

- 将本地分支与远程分支关联

```bash
git branch --set-upstream-to=<remote>/<remote_branch> <local_branch>
```

### 多仓库同步

　　鉴于一个平台可能存在风险，可以将代码托管在多个平台上，例如国外 Github，国内 Gitee，实现的具体方式就是将本地仓库同时与多个远程仓库关联，即可实现在 `push` 时给多个远程仓库同步推送更新：

```bash
# 在某个 remote 下添加额外一个远程仓库
git remote set-url --add <name> <new_rep_url>
```

## 分支管理

　　Git 是一个版本控制工具，可以实现多人协作处理同一个项目的代码，同时又互不发生冲突。而要实现多人协作互不发生冲突，团队成员就不能同时操作同一个文件，于是 Git 中有一个分支（branch）的概念需要我们弄清楚，因为就是它解决了这个关键的问题。

　　当首次提交文件到版本库时，会自动创建一个 **主分支（master）**，多人协作时我们不能同时在主分支上操作，因为会发生冲突。所以，我们可以从主分支（master）上分出多个副分支来，就像从一颗树的主干上长出多个分叉枝节一样，我们在这些副分支上进行修改操作。当修改完成后，我们再将副分支上的更改合并到主分支（master）上即可，这样就不会出现多人同时操作同一个文件的冲突。

### 查看分支

　　在项目第一次提交到版本库时，会自动创建一个主分支（master），随后就可以创建副分支了。当我们想查看该项目的分支情况时，使用 `branch` 命令即可。

```bash
# 查看项目分支
git branch
```

### 创建分支

　　在 master 分支上我们可以创建多个副分支并自己命名，使用以下命令即可：

```bash
# 创建新的分支，但不切换
git branch branch_name  # 例如 git branch dev
```

### 切换分支

　　切换分支就是 `checkout` 命令：

```bash
# 切换到另一个分支上
git checkout branch_name  # 例如 git checkout dev
```

　　其实，我们可以直接在创建新分支时切换到新分支上去：

```bash
# 创建新的分支，并切换到新分支
git checkout -b branch_name
```

### 重命名分支

　　可以使用以下命令来更改一个已有副分支（因为主分支是不能重命名）的名字：

```bash
# 重命名已有的副分支
git branch -m old_branchname new_branchname
```

### 删除分支

　　当我们想删除一个分支时，先切换到其它分支上去，再使用以下命令：

```bash
# 删除已有的副分支，注意先切换到其它分支
git branch -d branch_name
```

### 合并分支

　　当副分支上的工作完成后，就需要将副分支合并到主分支上去，此时应先切换到主分支上去，再使用 `merge` 命令：

```bash
# 合并分支，注意先切换到主分支上去
git merge branch_name
```

### 对比差异

　　很多时候我们需要查看工作区与暂存区、暂存区与版本库、分支与分支等等之间文件的具体改动的差异信息，使用 `diff` 命令即可：

```bash
# 对比工作区与暂存区的文件差异
git diff
# 对比暂存区与版本库的文件差异
git diff --staged
# 对比分支与分支的文件差异
git diff other_branchname
```

　　除此之外，还可以对比两次提交版本的文件差异，在 diff 命令后跟要对比的两次提交操作的ID号即可。

### 保存工作区状态

　　当我们在一个分支上改动了工作区的文件，没有添加到暂存区并提交到版本库时，使用 `checkout` 切换分支时就会失败，因为这样会丢失工作区的更改。我们可以提交后再切换分支，当然也可以使用 `stash` 命令将此分支的工作区状态保存下来再切换到别的分支，之后回到该分支可以还原工作区的状态。

```bash
# 保存当前分支工作区状态
git stash
# 查看所有分支已保存的工作区状态及其序号
git stash list
```

　　保存了工作区状态之后，我们可以在任意分支下将保存的工作区状态与当前工作区状态合并，先查看保存的工作区状态序号：

```bash
# 合并当前工作区与已保存工作区，不删除已保存状态
git stash apply stash@{num}  
# 例如 git stash apply stash@{0}
```

　　合并之后，可以删除掉已保存的工作区状态，同样地先查看保存的工作区状态序号：

```bash
# 删除已保存的工作区状态
git stash drop stash@{num}
```

　　当然，为了方便我们可以一次性完成合并工作区与删除已保存的工作区状态：

```bash
# 合并工作区状态，并删除已保存的工作区状态
git stash pop stash@{num}
```