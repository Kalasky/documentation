import { AcademicCapIcon } from '@heroicons/react/24/outline'
import { faCircleQuestion, faListCheck, faRocket, faRoad } from '@fortawesome/free-solid-svg-icons'
import {
  faGithubAlt,
  faTwitter,
  faLinkedin,
  faYoutube,
  faStackOverflow,
  faFacebookF,
  faTwitch,
} from '@fortawesome/free-brands-svg-icons'

export const social = [
  {
    name: 'GitHub',
    href: 'https://github.com/mongodb',
    icon: faGithubAlt,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/mongodb',
    icon: faTwitter,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/mongodbinc/',
    icon: faLinkedin,
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/user/mongodb',
    icon: faYoutube,
  },
  {
    name: 'Stack Overflow',
    href: 'https://stackoverflow.com/tags/mongodb/info',
    icon: faStackOverflow,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/MongoDB/',
    icon: faFacebookF,
  },
  {
    name: 'Twitch',
    href: 'https://www.twitch.tv/mongodb/videos',
    icon: faTwitch,
  },
]

export const product = [
  {
    name: 'Documentation',
    href: '/docs',
  },
  {
    name: 'Why',
    href: '/why',
  },
  {
    name: 'Features',
    href: '/features',
  },
  {
    name: 'Releases',
    href: '/releases',
  },
  {
    name: 'Roadmap',
    href: '/roadmap',
  },
]

export const productDropdown = [
  {
    title: 'Why MongoDB?',
    icon: faCircleQuestion,
    href: '/why',
    iconColor: 'text-white',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    title: 'Features',
    icon: faListCheck,
    href: '/features',
    iconColor: 'text-white',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit',
  },
  {
    title: 'Releases',
    icon: faRocket,
    href: '/releases',
    iconColor: 'text-white',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    title: 'Roadmap',
    icon: faRoad,
    href: '/roadmap',
    iconColor: 'text-white.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit',
  },
]

export const about = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Install',
    href: '/install',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
]
