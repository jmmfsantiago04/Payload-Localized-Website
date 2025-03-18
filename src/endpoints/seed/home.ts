import type { RequiredDataFromCollectionSlug } from 'payload'

export const home = (locale: 'en' | 'ko'): RequiredDataFromCollectionSlug<'pages'> => ({
  slug: 'home',
  slugLock: false,
  _status: 'published',
  hero: {
    type: 'highImpact',
    links: [
      {
        link: {
          type: 'custom',
          appearance: 'default',
          label: locale === 'en' ? 'All posts' : '모든 게시물',
          url: '/posts',
        },
      },
      {
        link: {
          type: 'custom',
          appearance: 'outline',
          label: locale === 'en' ? 'Contact' : '연락하기',
          url: '/contact',
        },
      },
    ],
    // @ts-ignore
    media: '{{IMAGE_1}}',
    richText: {
      root: {
        type: 'root',
        children: [
          {
            type: 'heading',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text:
                  locale === 'en'
                    ? 'Payload Website Template'
                    : 'Payload 웹사이트 템플릿',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h1',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'link',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text:
                      locale === 'en'
                        ? 'Visit the admin dashboard'
                        : '관리자 대시보드 방문',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                fields: {
                  linkType: 'custom',
                  newTab: false,
                  url: '/admin',
                },
                format: '',
                indent: 0,
                version: 3,
              },
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text:
                  locale === 'en'
                    ? " to begin managing this site's content. The code for this template is completely open-source and can be found "
                    : ' 이 사이트의 콘텐츠 관리를 시작하세요. 이 템플릿의 코드는 완전히 오픈 소스이며 다음에서 찾을 수 있습니다: ',
                version: 1,
              },
              {
                type: 'link',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: locale === 'en' ? 'here' : 'burada',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                fields: {
                  linkType: 'custom',
                  newTab: true,
                  url: 'https://github.com/payloadcms/payload/tree/beta/templates/website',
                },
                format: '',
                indent: 0,
                version: 3,
              },
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '. ',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
  },
  layout: [
    {
      blockName: 'Content Block',
      blockType: 'content',
      columns: [
        {
          richText: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'heading',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: locale === 'en' ? 'Core features' : '주요 기능',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  tag: 'h2',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
          size: 'full',
        },
        {
          enableLink: false,
          richText: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'heading',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: locale === 'en' ? 'Admin Dashboard' : '관리자 대시보드',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  tag: 'h3',
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text:
                        locale === 'en'
                          ? "Manage this site's pages and posts from the "
                          : '이 사이트의 페이지와 게시물을 ',
                      version: 1,
                    },
                    {
                      type: 'link',
                      children: [
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: locale === 'en' ? 'admin dashboard' : '관리자 대시보드에서 관리하세요',
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                      fields: {
                        linkType: 'custom',
                        newTab: false,
                        url: '/admin',
                      },
                      format: '',
                      indent: 0,
                      version: 2,
                    },
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: '.',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  textFormat: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
          size: 'oneThird',
        },
        {
          enableLink: false,
          richText: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'heading',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: locale === 'en' ? 'Preview' : '미리보기',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  tag: 'h3',
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text:
                        locale === 'en'
                          ? 'Using versions, drafts, and preview, editors can review and share their changes before publishing them.'
                          : '버전, 초안 및 미리보기를 사용하여 편집자는 변경 사항을 게시하기 전에 검토하고 공유할 수 있습니다.',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  textFormat: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
          size: 'oneThird',
        },
        {
          enableLink: false,
          richText: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'heading',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: locale === 'en' ? 'Page Builder' : '페이지 빌더',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  tag: 'h3',
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text:
                        locale === 'en'
                          ? 'Custom page builder allows you to create unique page, post, and project layouts for any type of content.'
                          : '사용자 정의 페이지 빌더를 사용하면 모든 유형의 콘텐츠에 대해 고유한 페이지, 게시물 및 프로젝트 레이아웃을 만들 수 있습니다.',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  textFormat: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
          size: 'oneThird',
        },
        {
          enableLink: false,
          richText: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'heading',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: locale === 'en' ? 'Dark Mode' : '다크 모드',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  tag: 'h3',
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text:
                        locale === 'en'
                          ? 'Users will experience this site in their preferred color scheme and each block can be inverted.'
                          : '사용자는 선호하는 색상 구성으로 이 사이트를 경험할 수 있으며 각 블록을 반전시킬 수 있습니다.',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  textFormat: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
          size: 'oneThird',
        },
      ],
    },
    {
      blockName: 'Media Block',
      blockType: 'mediaBlock',
      // @ts-ignore
      media: '{{IMAGE_2}}',
      position: 'default',
    },
    {
      blockName: 'Archive Block',
      blockType: 'archive',
      categories: [],
      introContent: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: locale === 'en' ? 'Recent posts' : '최근 게시물',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h3',
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text:
                    locale === 'en'
                      ? 'The posts below are displayed in an "Archive" layout building block which is an extremely powerful way to display documents on a page. It can be auto-populated by collection or by category, or posts can be individually selected. Pagination controls will automatically appear if the number of results exceeds the number of items per page.'
                      : '아래의 게시물은 페이지에서 문서를 표시하는 매우 강력한 방법인 "아카이브" 레이아웃 빌딩 블록에 표시됩니다. 컬렉션이나 카테고리별로 자동 채워지거나 게시물을 개별적으로 선택할 수 있습니다. 결과 수가 페이지당 항목 수를 초과하면 페이지네이션 컨트롤이 자동으로 나타납니다.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      populateBy: 'collection',
      relationTo: 'posts',
    },
    {
      blockName: 'CTA',
      blockType: 'cta',
      links: [
        {
          link: {
            type: 'custom',
            appearance: 'default',
            label: locale === 'en' ? 'All posts' : '모든 게시물',
            url: '/posts',
          },
        },
      ],
      richText: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text:
                    locale === 'en' ? 'This is a call to action' : '이것은 행동 촉구입니다',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h3',
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text:
                    locale === 'en'
                      ? 'This is a custom layout building block '
                      : '이것은 사용자 정의 레이아웃 빌딩 블록입니다 ',
                  version: 1,
                },
                {
                  type: 'link',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text:
                        locale === 'en'
                          ? 'configured in the admin dashboard'
                          : '관리자 대시보드에서 구성됨',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  fields: {
                    linkType: 'custom',
                    newTab: false,
                    url: '/admin',
                  },
                  format: '',
                  indent: 0,
                  version: 2,
                },
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
  ],
  meta: {
    description:
      locale === 'en'
        ? 'An open-source website built with Payload and Next.js.'
        : 'Payload와 Next.js로 구축된 오픈소스 웹사이트.',
    // @ts-ignore
    image: '{{IMAGE_1}}',
    title: locale === 'en' ? 'Payload Website Template' : 'Payload 웹사이트 템플릿',
  },
  title: locale === 'en' ? 'Home' : '홈',
})
