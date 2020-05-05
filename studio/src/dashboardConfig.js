export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb1b7158d929a31e941f7c7',
                  title: 'Sanity Studio',
                  name: 'blog-react-gatsby-studio',
                  apiId: '0b3c5bad-5d6b-43b4-8a86-559b3e2dfa07'
                },
                {
                  buildHookId: '5eb1b7156ef4383fe9f6a76e',
                  title: 'Blog Website',
                  name: 'blog-react-gatsby',
                  apiId: '6b8dab36-2b67-4d0e-b333-40716281edcb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ivanmeyer91/blog-react-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://blog-react-gatsby.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
