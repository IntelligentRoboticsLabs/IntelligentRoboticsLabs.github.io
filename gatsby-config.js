module.exports = {
  siteMetadata: {
    title: `IntelligentRoboticsLab`,
    siteUrl: `https://IntelligentRoboticsLabs.github.io`,
    description: `Robotics Laboratory and %TOPICS%`,
    topics: [
      'Social Robotics',
      'ROS',
      'ROS2',
      'Cognitive Robotics',
      'Mixed Reality',
    ],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Members',
        path: '/members'
      },
      {
        name: 'Projects',
        path: '/projects'
      },
      {
        name: 'Publications',
        path: '/publications'
      },
      {
        name: 'Student Projects',
        path: '/student_projects'
      }
    ],
    footerMenu: [
      {
        name: 'Projects',
        path: '/projects'
      },
    ],
    search: true,
    author: {
      name: ``,
      description: ``,
      social: {
        facebook: ``,
        twitter: `https://twitter.com/IntellRobotLabs`,
        linkedin: ``,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/IntelligentRoboticsLabs`,
        twitch: ``
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/intellrobotslab_icon.png`
        }
      }
    },
    `gatsby-plugin-fontawesome-css`
  ]
};
