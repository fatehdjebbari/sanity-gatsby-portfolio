export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '604f8c8e4f3a6f20185d2468',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-o6nt259u',
                  apiId: 'a73f38f4-65ab-4a8f-90a8-eff0d50d027f'
                },
                {
                  buildHookId: '604f8c8e30d9eb1c53bb65a8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3y3xx5fs',
                  apiId: '294a3486-4a16-4c8f-a8a2-0dd824df61dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fatehdjebbari/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3y3xx5fs.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
