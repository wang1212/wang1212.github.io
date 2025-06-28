import React, { useEffect, useState, useCallback, useRef } from 'react';
import Layout from '@theme/Layout';
import BackToTopButton from '@theme/BackToTopButton';
import type { ArchiveBlogPost, Props } from '@theme/BlogArchivePage';
import BlogArchivePage from '@theme-original/BlogArchivePage';
import styles from './styles.module.css';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import StatsViews, { type CalendarData } from './StatsViews';
import PostList, { listPostsByYear, type YearProps } from './PostList';

/**
 * ! 覆盖内部实现
 */

const descriptionSet = [
  '人不应该是插在花瓶里供人观赏的静物，而是蔓延在草原上随风起舞的韵律。生命不是安排，而是追求，人生的意义也许永远没有答案，但也要尽情感受这种没有答案的人生。',
  '其实我们每个人的生活都是一个世界，即使最平凡的人也要为他生活的那个世界而奋斗。',
  '人一辈子最珍贵的品质其实就两样：一个是热血，一个是天真。',
  '你不能因为自己变成了不痛不痒的人，就去嘲笑那些爱恨分明的人。',
  '尊重那些与你抗争的人，因为你争的是理，不是去损毁对方的人格。',
  '梦想这东西与经典一样，永远不会因时间而褪色，反而更显珍贵。',
  '我们走过的每一步不一定是完美的，但每一步都有值得深思的意义。',
  '做生活的导演，不成；次之，做演员；再次之，做观众。',
  '软件只是一种帮助人们完成某些事情的工具——许多程序员从来不理解这一点。关注交付的价值，不要过分关注工具的细节 - John Carmack',
  'const res = ["👨", "‍", "👩", "‍", "👧", "‍", "👦"].join(\'\'); console.log(res);',
];

/** ! custom config */
const customConfig = {
  archive: {
    title: '岁月留痕',
    description: () =>
      descriptionSet[Math.floor(Math.random() * descriptionSet.length)],
  },
};

// ------------------------------------------------------------------------------------

type SortBy = 'date' | 'update';

// 移动到了 PostList.tsx

type TagMap = Map<string, { item: unknown; count: number }>;

function getTagMap(blogPosts: readonly ArchiveBlogPost[]): TagMap {
  const tagMap: TagMap = new Map();

  blogPosts.forEach((post) => {
    (post.metadata.tags || []).forEach((tag) => {
      let tagData = tagMap.get(tag.label);
      if (!tagMap.has(tag.label)) {
        tagData = { item: tag, count: 0 };
      }
      tagData.count++;
      tagMap.set(tag.label, tagData);
    });
  });

  return tagMap;
}

export default function BlogArchivePageWrapper(props: Props) {
  const [description] = useState(customConfig.archive.description());
  const title = customConfig.archive.title;

  const [tag, setTag] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const END_YEAR = new Date().getFullYear();
  const YEARS = Array.from({ length: 5 }, (_, i) => END_YEAR - i);
  const [sortBy, setSortBy] = useState<SortBy>('update');
  const [searchQuery, setSearchQuery] = useState('');

  // 处理搜索输入变化
  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
    
    // 更新 URL 参数
    const urlParams = new URLSearchParams(window.location.search);
    
    if (query) {
      urlParams.set('search', query);
    } else {
      urlParams.delete('search');
    }
    
    // 保留当前的 tag 和 date 状态
    const currentTag = urlParams.get('tag');
    const currentDate = urlParams.get('date');
    
    window.history.replaceState(
      { tag: currentTag, date: currentDate, search: query || null },
      '',
      `${window.location.pathname}${urlParams.toString() ? '?' + urlParams.toString() : ''}`
    );
  }, []);

  // 从文章数据中提取所有年份
  const getAvailableYears = useCallback(
    (posts: typeof props.archive.blogPosts) => {
      const years = new Set<number>();
      posts.forEach((post) => {
        // 使用 frontMatter.update 或 frontMatter.date 作为日期源
        const dateStr =
          (post.metadata.frontMatter.update as string) ||
          post.metadata.frontMatter.date;
        if (dateStr) {
          const date = new Date(dateStr);
          if (!isNaN(date.getTime())) {
            years.add(date.getFullYear());
          }
        }
      });
      return Array.from(years).sort((a, b) => b - a); // 降序排列
    },
    []
  );

  const availableYears = getAvailableYears(props.archive.blogPosts);
  const [calendarYear, setCalendarYear] = useState<number>(
    availableYears[0] || new Date().getFullYear()
  );

  // 将日期格式化为 YYYY-MM-DD 字符串，确保时区一致性
  const formatDate = (date: Date | string) => {
    const d = new Date(date);
    // 使用 UTC 时间，与博客文章日期保持一致
    const year = d.getUTCFullYear();
    const month = String(d.getUTCMonth() + 1).padStart(2, '0');
    const day = String(d.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // 生成日历数据
  const generateCalendarData = useCallback(() => {
    const data: CalendarData[] = [];
    const dateCountMap = new Map<string, number>();

    // 统计每天的博文数量（处理 date 和 update 字段）
    props.archive.blogPosts.forEach((post) => {
      const { date, update } = post.metadata.frontMatter;
      const processedDates = new Set<string>();
      
      // 处理 date 和 update
      [date, update].forEach((dateStr) => {
        if (!dateStr || new Date(dateStr as string).toString() === 'Invalid Date') {
          return;
        }
        
        // 使用本地日期格式，与筛选逻辑保持一致
        const dateKey = formatDate(dateStr as string);
        
        // 如果这个日期还没被处理过，则增加计数
        if (!processedDates.has(dateKey)) {
          dateCountMap.set(dateKey, (dateCountMap.get(dateKey) || 0) + 1);
          processedDates.add(dateKey);
        }
      });
    });

    // 转换为日历数据格式
    dateCountMap.forEach((count, date) => {
      data.push({
        date,
        count,
      });
    });

    return data;
  }, [props.archive.blogPosts]);

  const calendarData = generateCalendarData();

  const YEARS_PER_PAGE = 3;
  const [allYears, setAllYears] = useState<YearProps[]>([]);
  const [renderedYears, setRenderedYears] = useState<YearProps[]>([]);
  const [page, setPage] = useState(1);
  const observerRef = useRef<HTMLDivElement>(null);
  const [contentRef] = useAutoAnimate<HTMLDivElement>();
  const [filteredPostsCount, setFilteredPostsCount] = useState(0);

  const tagMap = getTagMap(props.archive.blogPosts);
  const tagList: [string, number][] = Array.from(
    tagMap,
    ([tagName, tagData]) => [tagName, tagData.count]
  );

  const updateTag = useCallback(
    (newTag: string | null, event?: React.MouseEvent) => {
      // 阻止事件冒泡
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      
      // 如果点击的是当前选中的标签，则取消选择
      const finalTag = tag === newTag ? null : newTag;
      
      // 更新状态
      setTag(finalTag);
      setSelectedDate(null);
      
      // 更新 URL 参数
      const urlParamsTemp = new URLSearchParams(window.location.search);
      
      if (!finalTag) {
        urlParamsTemp.delete('tag');
      } else {
        urlParamsTemp.set('tag', finalTag);
      }
      
      // 清除日期参数
      urlParamsTemp.delete('date');
      
      // 更新 URL 和历史状态
      const newUrl = `${window.location.pathname}${urlParamsTemp.toString() ? '?' + urlParamsTemp.toString() : ''}`;
      window.history.replaceState(
        { tag: finalTag, date: null },
        '',
        newUrl
      );
    },
    [tag]  // 添加依赖
  );
  
  // 处理日期选择
  const handleDateClick = useCallback((clickedDate: string | null, event?: React.MouseEvent) => {
    // 阻止事件冒泡
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    // 如果是取消选择，直接处理
    if (!clickedDate) {
      setSelectedDate(null);
      const urlParamsTemp = new URLSearchParams(window.location.search);
      urlParamsTemp.delete('date');
      const newUrl = `${window.location.pathname}${urlParamsTemp.toString() ? '?' + urlParamsTemp.toString() : ''}`;
      window.history.replaceState(
        { tag, date: null },
        '',
        newUrl
      );
      return;
    }
    
    // 清除标签选择
    setTag(null);
    
    // 设置新选择的日期
    setSelectedDate(clickedDate);
    
    // 更新 URL 参数
    const urlParamsTemp = new URLSearchParams(window.location.search);
    urlParamsTemp.set('date', clickedDate);
    urlParamsTemp.delete('tag');
    
    // 更新 URL 和历史状态
    const newUrl = `${window.location.pathname}${urlParamsTemp.toString() ? '?' + urlParamsTemp.toString() : ''}`;
    window.history.replaceState(
      { tag: null, date: clickedDate },
      '',
      newUrl
    );
  }, [tag]);  // 只依赖 tag

  // 初始化状态
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tagParam = urlParams.get('tag');
    const dateParam = urlParams.get('date');
    
    // 从 URL 参数初始化状态
    const searchParam = urlParams.get('search');
    
    if (searchParam) {
      setSearchQuery(searchParam);
      setTag(null);
      setSelectedDate(null);
    } else if (tagParam) {
      setTag(tagParam);
      setSelectedDate(null);
      setSearchQuery('');
    } else if (dateParam) {
      setSelectedDate(dateParam);
      setTag(null);
      setSearchQuery('');
    } else {
      // 从 history state 恢复
      setTag(window.history?.state?.tag || null);
      setSelectedDate(window.history?.state?.date || null);
      setSearchQuery(window.history?.state?.search || '');
    }
    
    // 监听 popstate 事件，处理浏览器前进/后退
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        setTag(event.state.tag || null);
        setSelectedDate(event.state.date || null);
      }
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    let posts = [...props.archive.blogPosts];
    
    // 先应用标签筛选
    if (tag) {
      posts = posts.filter(post => 
        post.metadata.frontMatter.tags.includes(tag)
      );
    } 
    // 应用日期筛选
    else if (selectedDate) {
      const targetDateStr = selectedDate; // selectedDate 已经是 YYYY-MM-DD 格式
      
      posts = posts.filter(post => {
        const postDate = post.metadata.frontMatter.date as string;
        const postUpdate = post.metadata.frontMatter.update as string | undefined;
        
        // 检查发布日期或更新日期是否匹配目标日期
        return formatDate(postDate) === targetDateStr || 
               (postUpdate && formatDate(postUpdate) === targetDateStr);
      });
    }
    
    // 最后应用搜索筛选
    if (searchQuery && searchQuery.trim() !== '') {
      const query = searchQuery.trim().toLowerCase();
      posts = posts.filter(post => {
        const title = post.metadata.title?.toLowerCase() || '';
        const description = (post.metadata.description || '').toLowerCase();
        const tags = (post.metadata.tags || []).map(tag => tag.label.toLowerCase()).join(' ');
        return (
          title.includes(query) || 
          description.includes(query) ||
          tags.includes(query)
        );
      });
    }
    
    setFilteredPostsCount(posts.length);
    const calculatedYears = listPostsByYear(posts, sortBy);
    setAllYears(calculatedYears);
    setRenderedYears(calculatedYears.slice(0, YEARS_PER_PAGE));
    setPage(1);

    // 更新可用年份
    const years = getAvailableYears(posts);
    setCalendarYear((prev) =>
      years.includes(prev) ? prev : years[0] || new Date().getFullYear()
    );
  }, [tag, selectedDate, searchQuery, sortBy, props.archive.blogPosts, getAvailableYears]);

  const loadMoreYears = useCallback(() => {
    setPage((prevPage) => {
      const nextPage = prevPage + 1;
      const newYears = allYears.slice(0, nextPage * YEARS_PER_PAGE);
      setRenderedYears(newYears);
      return nextPage;
    });
  }, [allYears]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          renderedYears.length < allYears.length
        ) {
          loadMoreYears();
        }
      },
      { rootMargin: '200px' } // Load a bit before it's visible
    );

    const currentObserverRef = observerRef.current;
    if (currentObserverRef) {
      observer.observe(currentObserverRef);
    }

    return () => {
      if (currentObserverRef) {
        observer.unobserve(currentObserverRef);
      }
    };
  }, [renderedYears, allYears, loadMoreYears]);

  return (
    <>
      <Layout title={customConfig.archive.title} description={description}>
        <BackToTopButton />

        <header className={`${styles.hero} hero hero--primary`}>
          <div className="container">
            <h1 className="hero__title">{title}</h1>
            <p className="hero__subtitle">{description}</p>
          </div>
        </header>
        <main>
          {props.archive.blogPosts.length > 0 ? (
            <>
              <section className="margin-vert--lg">
                <div className="container">
                  <div ref={contentRef}>
                    <StatsViews
                      tagList={tagList}
                      currentTag={tag}
                      onTagClick={updateTag}
                      calendarData={calendarData}
                      calendarYear={calendarYear}
                      availableYears={availableYears}
                      onYearChange={setCalendarYear}
                      currentDate={selectedDate}
                      onDateClick={handleDateClick}
                      searchQuery={searchQuery}
                      onSearchChange={handleSearchChange}
                    />
                  </div>
                  <hr className="margin-vert--lg" style={{ opacity: 0.25 }} />
                </div>
              </section>
              <PostList
                years={renderedYears}
                sortBy={sortBy}
                updateSortBy={setSortBy}
                tag={tag}
                selectedDate={selectedDate}
                searchQuery={searchQuery}
                onTagClick={updateTag}
                onDateClick={handleDateClick}
                onSearchClear={() => setSearchQuery('')}
                loadMoreRef={observerRef}
                hasMore={allYears.length > renderedYears.length}
                totalPosts={filteredPostsCount}
              />
            </>
          ) : (
            ''
          )}
        </main>
      </Layout>
      {/* <BlogArchivePage {...props} /> */}
    </>
  );
}
