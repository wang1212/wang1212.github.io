/**
 * front-matter: convert_json_yaml
 */

const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');
const jsYaml = require('js-yaml');

const SOURCE_DIRECTORY = 'notes-md1/';
const TARGET_DIRECTORY = 'notes-md/';

/**
 *
 * @param source
 * @param target
 */
function convert(source, target) {
  fs.readdirSync(source).forEach((path_) => {
    const source_ = path.join(source, path_);
    const target_ = path.join(target, path_);
    const stats = fs.statSync(source_);

    if (stats.isFile() && path.extname(path_) === '.md') {
      let mdContent = fs.readFileSync(source_, 'utf-8');

      try {
        let frontMatter = mdContent.match(
          /---[\s\S]*?(\{[\s\S]*?\})[\s\S]*?---/
        );

        if (frontMatter) {
          mdContent = mdContent.replace(/---[\s\S]*?---/, '');
          frontMatter = JSON.parse(frontMatter[1]);

          frontMatter.ctime = dayjs(frontMatter.ctime).format(
            'YYYY-MM-DD HH:mm:ss'
          );
          frontMatter.mtime = dayjs(frontMatter.mtime).format(
            'YYYY-MM-DD HH:mm:ss'
          );

          frontMatter.author =
            '不如怀念 ([@wang1212](https://github.com/wang1212))';

          fs.writeFile(
            target_,
            `---\n${jsYaml.dump(frontMatter)}---${mdContent}`,
            (err) => err && console.log(err.message)
          );
        } else {
          frontMatter = {};
        }
      } catch (err) {
        console.log(`${source_}: Empty document front-matter!`);
      }

      return;
    }

    if (stats.isDirectory()) {
      if (!fs.existsSync(target_)) {
        fs.mkdirSync(target_, { recursive: true });
      }

      convert(source_, target_);
    }
  });
}

convert(SOURCE_DIRECTORY, TARGET_DIRECTORY);
