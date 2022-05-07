/**
 * 批量修改
 */

const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');
const jsYaml = require('js-yaml');
const matter = require('gray-matter');

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
      const mdContent = fs.readFileSync(source_, 'utf-8');
      const fileMetadata = matter(mdContent);
      let frontMatter;

      if (fileMetadata.isEmpty) {
        console.log(`${source_}: Empty document front-matter!`);
      } else {
        frontMatter = fileMetadata.data;
      }

      if (frontMatter) {
        frontMatter.author =
          '不如怀念 ([@wang1212](https://github.com/wang1212))';

        [
          { key: 'Front End', value: 'Web 前端' },
          { key: 'Back End', value: 'Web 后端' },
        ].forEach((item) => {
          const index = frontMatter.tags.findIndex(
            (item_) => item_ === item.key
          );
          if (index !== -1) {
            frontMatter.tags[index] = item.value;
          }

          const index1 = frontMatter.keywords.findIndex(
            (item_) => item_ === item.key
          );
          if (index1 !== -1) {
            frontMatter.keywords[index1] = item.value;
          }
        });

        fs.writeFile(
          target_,
          `---\n${jsYaml.dump(frontMatter)}---\n${fileMetadata.content}`,
          (err) => err && console.log(err.message)
        );
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
