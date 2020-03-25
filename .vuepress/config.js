module.exports = {
  locales: {
    '/': {
      lang: 'zh-cn',
      title: 'Kenote',
      description: '前后端开发助手及开发文档'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Kenote',
      description: 'Front-end and back-end development assistants and development documents'
    }
  },
  themeConfig: {
    //
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          {
            text: '指南',
            link: '/guide/'
          },
          {
            text: 'Kenote 系列',
            items: [
              {
                text: 'kenote-cli',
                items: [
                  {
                    text: '基于 Node.js 的命令行工具',
                    link: '/kenote-cli/'
                  }
                ]
              }
            ]
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: '指南',
              collapsable: false,
              children: [
                // '',
                'mac-env-config',
                'win-env-config',
                'linux-env-config'
              ]
            }
          ],
          '/kenote-cli/': [
            {
              title: 'kenote-cli',
              collapsable: false,
              children: [
                '',
                'config',
                'create',
                'scripts',
                'serve',
                'deploy'
              ]
            }
          ]
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English(待补充)'
      }
    }
  }
}