import React from 'react'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCode } from '@fortawesome/free-solid-svg-icons'

// heroicons
import { ShieldCheckIcon } from '@heroicons/react/24/outline'

// components
import { FeatureCard } from '../components/Cards'
import { GlowGrayPrimary } from '../components/Buttons'

const Why = () => {
  return (
    <div className="container mx-auto sm:pt-28 max-sm:pt-14 pb-12" style={{ fontFamily: 'Poppins' }}>
      <div className="sm:text-center max:sm-text-left lg:w-8/12 m-auto">
        <p className="font-bold md:text-6xl max-sm:text-4xl max-lg:text-4xl lg:w-11/12 bg-gradient-to-r from-green-400 to-white inline-block text-transparent bg-clip-text">
          A highly-scalable NewSQL database
        </p>
        <p className="text-gray-400 text-base mt-5 lg:w-5/6 m-auto">
          MongoDB is a flexible, developer-friendly, fully ACID transactional, realtime document-graph web database for
          serverless applications. Never again worry about database provisioning, scaling, sharding, replication, or correctness.
        </p>
      </div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-1 mt-20 gap-6">
        <FeatureCard
          title="Scale quicker"
          IconComponent={ShieldCheckIcon}
          iconColor="text-green-500"
          description="Forget about scaling databases, servers, loadbalancers, and API endpoints. MongoDB takes the hassle out of your stack, enabling you to grow and operate at scale with a highly-available, highly-scalable distributed platform. Deploy anywhere, or keep it simple with MongoDB Cloud."
        />
        <FeatureCard
          title="Develop easier"
          IconComponent={ShieldCheckIcon}
          iconColor="text-green-500"
          description="There is no need for your team to learn new complicated database languages. Getting started with MongoDB is as simple as one command - and advanced functionality is simple to understand, whilst still being fast and performant."
        />
        <FeatureCard
          title="Build faster"
          IconComponent={ShieldCheckIcon}
          iconColor="text-green-500"
          description="MongoDB simplifies your database and API stack, removing the need for most server-side components. As a web database, client-side applications can be built with direct connections to MongoDB, while traditional server-side development techniques can still leverage the powerful but simple querying and analytics abilities."
        />
        <FeatureCard
          title="Scale quicker"
          IconComponent={ShieldCheckIcon}
          iconColor="text-green-500"
          description="Forget about scaling databases, servers, loadbalancers, and API endpoints. MongoDB takes the hassle out of your stack, enabling you to grow and operate at scale with a highly-available, highly-scalable distributed platform. Deploy anywhere, or keep it simple with MongoDB Cloud."
        />
        <FeatureCard
          title="Develop easier"
          IconComponent={ShieldCheckIcon}
          iconColor="text-green-500"
          description="There is no need for your team to learn new complicated database languages. Getting started with MongoDB is as simple as one command - and advanced functionality is simple to understand, whilst still being fast and performant."
        />
        <FeatureCard
          title="Build faster"
          IconComponent={ShieldCheckIcon}
          iconColor="text-green-500"
          description="MongoDB simplifies your database and API stack, removing the need for most server-side components. As a web database, client-side applications can be built with direct connections to MongoDB, while traditional server-side development techniques can still leverage the powerful but simple querying and analytics abilities."
        />
        <FeatureCard
          title="Scale quicker"
          IconComponent={ShieldCheckIcon}
          iconColor="text-green-500"
          description="Forget about scaling databases, servers, loadbalancers, and API endpoints. MongoDB takes the hassle out of your stack, enabling you to grow and operate at scale with a highly-available, highly-scalable distributed platform. Deploy anywhere, or keep it simple with MongoDB Cloud."
        />
        <FeatureCard
          title="Develop easier"
          IconComponent={ShieldCheckIcon}
          iconColor="text-green-500"
          description="There is no need for your team to learn new complicated database languages. Getting started with MongoDB is as simple as one command - and advanced functionality is simple to understand, whilst still being fast and performant."
        />
        <FeatureCard
          title="Build faster"
          IconComponent={ShieldCheckIcon}
          iconColor="text-green-500"
          description="MongoDB simplifies your database and API stack, removing the need for most server-side components. As a web database, client-side applications can be built with direct connections to MongoDB, while traditional server-side development techniques can still leverage the powerful but simple querying and analytics abilities."
        />
        <FeatureCard
          title="Scale quicker"
          IconComponent={ShieldCheckIcon}
          iconColor="text-green-500"
          description="Forget about scaling databases, servers, loadbalancers, and API endpoints. MongoDB takes the hassle out of your stack, enabling you to grow and operate at scale with a highly-available, highly-scalable distributed platform. Deploy anywhere, or keep it simple with MongoDB Cloud."
        />
        <FeatureCard
          title="Develop easier"
          IconComponent={ShieldCheckIcon}
          iconColor="text-green-500"
          description="There is no need for your team to learn new complicated database languages. Getting started with MongoDB is as simple as one command - and advanced functionality is simple to understand, whilst still being fast and performant."
        />
        <FeatureCard
          title="Build faster"
          IconComponent={ShieldCheckIcon}
          iconColor="text-green-500"
          description="MongoDB simplifies your database and API stack, removing the need for most server-side components. As a web database, client-side applications can be built with direct connections to MongoDB, while traditional server-side development techniques can still leverage the powerful but simple querying and analytics abilities."
        />
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
          <GlowGrayPrimary
            onClick={() => {
              window.open('https://github.com/mongodb', '_blank')
            }}
            padding={'px-4 py-2'}
          >
            <FontAwesomeIcon icon={faStar} className="mr-2 text-green-500" />
            Star us on GitHub
          </GlowGrayPrimary>
          <GlowGrayPrimary onClick={() => console.log('Clicked!')} padding={'px-4 py-3'}>
            <FontAwesomeIcon icon={faCode} className="mr-2 text-green-500" />
            View our open source projects
          </GlowGrayPrimary>
        </div>
      </div>
    </div>
  )
}

export default Why
