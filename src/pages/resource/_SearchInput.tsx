import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Document as DocumentSearch } from 'flexsearch';

export default (first) => {
  useEffect(() => {
    // A collection of documents for our examples
    const documents = [
      {
        id: 1,
        title: 'Moby Dick',
        text: 'Call me Ishmael. Some years ago...',
        category: 'fiction',
      },
      {
        id: 2,
        title: 'Zen and the Art of Motorcycle Maintenance',
        text: '',
        category: 'fiction',
      },
      {
        id: 3,
        title: 'Web前端',
        text: '单元测试是很重要',
        category: 'fiction',
      },
      {
        id: 4,
        title: '测试开发，云端开发，Weg 前端',
        text: 'At first sight it must seem...',
        category: 'non-fiction',
      },
      // ...and more
    ];

    // let miniSearch = new MiniSearch({
    //   fields: ['title', 'text'], // fields to index for full-text search
    //   storeFields: ['title', 'category'], // fields to return with search results
    //   // searchOptions: {
    //   //   // boost: { title: 2 },
    //   //   fuzzy: 0.2,
    //   // },
    // });

    // // Index all documents
    // miniSearch.addAll(documents);

    // let results = miniSearch.search('很重要', { prefix: true, fuzzy: 0.2 });
    // console.log(results);

    const doc = new DocumentSearch({
      document: {
        id: 'id',
        index: ['title', 'text'],
      },
    });
    doc.add(documents);
    console.log(doc.search('单元测试', ['text']));
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
};
