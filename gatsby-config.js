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
        name: 'About Us',
        path: '/about'
      },
      {
        name: 'Projects',
        path: '/projects'
      },
      {
        name: 'Research',
        path: '/research'
      },
      {
        name: 'Contact',
        path: '/contact'
      }
    ],
    footerMenu: [
      {
        name: 'Contact',
        path: '/contact'
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
    }
  ]
};
