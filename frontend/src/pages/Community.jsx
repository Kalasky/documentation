import React from 'react'
import { Link } from 'react-router-dom'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCode } from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
  faDev,
  faReddit,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'

// components
import { GlowGrayPrimary } from '../components/Buttons'
import { SocialCard } from '../components/Cards'

// data files
import { mediaCards } from '../data/mediaCards'

const Community = () => {
  return (
    <div className="container mx-auto sm:pt-28 max-sm:pt-14 pb-12" style={{ fontFamily: 'Poppins' }}>
      <div className="sm:text-center max:sm-text-left lg:w-8/12 m-auto">
        <p
          className="font-bold md:text-6xl max-sm:text-4xl max-lg:text-4xl lg:w-11/12 bg-gradient-to-r from-green-400 to-white inline-block text-transparent bg-clip-text"
          style={{ lineHeight: '5.5rem' }}
        >
          MongoDB Community
        </p>
        <p className="text-gray-400 text-base mt-5 lg:w-5/6 m-auto">
          Join our community of maintainers, contributors, users, and mongo enthusiasts and help us make MongoDB better for
          developers and organisations all around the world. If you have questions using MongoDB, or if you have ideas on how to
          make it better we would love to hear from you.
        </p>
        <p className="text-gray-400 text-base mt-5 lg:w-5/6 m-auto">
          MongoDB is being built in the open. We would love for you to be involved.
        </p>
        <div className="mt-5 text-base sm:space-x-8 space-y-5">
          <GlowGrayPrimary
            onClick={() => {
              window.open('https://github.com/mongodb', '_blank')
            }}
            padding={'px-4 py-3'}
          >
            <FontAwesomeIcon icon={faStar} className="mr-2 text-green-500" />
            Star us on GitHub
          </GlowGrayPrimary>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-20 gap-6">
        <SocialCard
          title="GitHub"
          description="Star the MongoDB repository on Github and keep track of development. Got a feature request, or found a bug? Then submit an issue on Github."
          icon={faGithub}
          iconColor="text-white"
        />
        <SocialCard
          title="Discord"
          description="Join the community on Discord. Suggest ideas, get answers to questions, stay up-to-date with releases, and showcase your product built on MongoDB."
          icon={faDiscord}
          iconColor="text-indigo-500"
        />
        <SocialCard
          title="Twitter"
          description="Follow us on Twitter for product updates and releases. We'll also showcase bits of the code and other products built on top of MongoDB."
          icon={faTwitter}
          iconColor="text-blue-500"
        />
        <SocialCard
          title="Linkedin"
          description="Follow us on LinkedIn for product updates and releases, webinars, and for tips and tricks on using MongoDB in your organisation."
          icon={faLinkedin}
          iconColor="text-blue-600"
        />
        <SocialCard
          title="YouTube"
          description="Subscribe to our YouTube channel for video tutorials, product demos, and live events."
          icon={faYoutube}
          iconColor="text-red-500"
        />
        <SocialCard
          title="Reddit"
          description="Join our subreddit for discussions, feedback, and sharing your experiences with MongoDB."
          icon={faReddit}
          iconColor="text-orange-500"
        />
        <SocialCard
          title="Stack Overflow"
          description="Ask and answer technical questions about MongoDB on Stack Overflow."
          icon={faStackOverflow}
          iconColor="text-yellow-500"
        />
        <SocialCard
          title="Dev.to"
          description="Read and share articles on the DEV Community about MongoDB, its use cases, and best practices."
          icon={faDev}
          iconColor="text-black"
        />
      </div>
      <div className="max-sm:text-left mt-40 m-auto w-fit">
        <p className="w-full sm:text-center font-bold md:text-4xl max-sm:text-4xl max-lg:text-4xl bg-gradient-to-r from-green-400 to-white inline-block text-transparent bg-clip-text">
          Loved by developers
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 gap-x-3 mt-20">
          {mediaCards.map(({ icon, color, name, message, date }) => (
            <div className="cardbg-color shadow-xl rounded-2xl max-w-sm flex flex-col" key={name}>
              <div className="text-gray-400 text-sm p-4">
                <FontAwesomeIcon icon={icon} size="xl" className={`mr-2 ${color}`} />
                <span className="text-white">{name}</span>
                <span className="text-gray-400 text-xs">
                  <span> • </span>
                  {date}
                </span>
              </div>
              <div className="text-white text-lg font-bold p-4 pt-0 flex-grow">
                <p className="font-light text-xs text-white leading-6">{message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:text-center max:sm-text-left mt-40 lg:w-8/12 m-auto">
        <p
          className="font-bold md:text-4xl max-sm:text-4xl max-lg:text-4xl lg:w-11/12 bg-gradient-to-r from-green-400 to-white inline-block text-transparent bg-clip-text"
          style={{ lineHeight: '3.5rem' }}
        >
          We are building MongoDB for everyone
        </p>
        <p className="text-gray-400 text-base mt-5 lg:w-5/6 m-auto">
          MongoDB is being built in the open. We would love for you to be involved.
        </p>
        <div className="mt-5 text-base sm:space-x-8 space-y-5">
          <Link to="/docs">
            <GlowGrayPrimary padding={'px-4 py-3'}>
              <FontAwesomeIcon icon={faCode} className="mr-2 text-green-500" />
              View our Docs
            </GlowGrayPrimary>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Community
