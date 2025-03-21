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
      blockName: 'Media Block',
      blockType: 'mediaBlock',
      // @ts-ignore
      media: '{{IMAGE_2}}',
      position: 'default',
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
