import React from 'react'
import { Link } from 'react-router-dom'
import '../index.scss'

// assets
import cluster from '../assets/cluster.svg'
import mongodata from '../assets/mongodata.svg'
import mongosecure from '../assets/mongosecure.svg'
import mongocloud from '../assets/mongocloud.svg'

// components
import { GlowGreenPrimary, GlowGrayPrimary } from '../components/Buttons'
import { IconText } from '../components/IconText'
import { CodeBlock } from '../components/CodeBlock'

// data files
import { mediaCards } from '../data/mediaCards'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCode, faListCheck, faStar, faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons'

// heroicons
import { ShieldCheckIcon } from '@heroicons/react/24/outline'

const Home = () => {
  const code1 = `
-- Specify access permissions for the 'post' table
DEFINE TABLE post SCHEMALESS
	PERMISSIONS
		FOR select
			-- Published posts can be selected
			WHERE published = true
			-- A user can select all their own posts
			OR user = $auth.id
		FOR create, update
			-- A user can create or update their own posts
			WHERE user = $auth.id
		FOR delete
			-- A user can delete their own posts
			WHERE user = $auth.id
			-- Or an admin can delete any posts
			OR $auth.admin = true
;`

  const code2 = `
  -- Subscribe to all changes to documents which match
  LIVE SELECT * FROM document
    WHERE
      account = $auth.account
      OR public = true
  ;
  
  -- Subscribe to all changes to a single 'post' record
  LIVE SELECT * FROM post:c569rth77ad48tc6s3ig;
  
  -- Stop receiving change notifications
  KILL "1986cc4e-340a-467d-9290-de81583267a2";
  `
  return (
    <div className="container mx-auto sm:pt-28 max-sm:pt-14 pb-12" style={{ fontFamily: 'Poppins' }}>
      <div className="grid grid-flow-row-dense xl:grid-cols-3 sm:grid-cols-1">
        <div id="text-section" className="col-span-2">
          <p className="font-bold xl:text-6xl md:text-5xl max-sm:text-4xl max-lg:text-4xl lg:w-11/12 bg-gradient-to-r from-green-400 to-white inline-block text-transparent bg-clip-text">
            SurrealDB is the ultimate multi-model database for tomorrow's applications
          </p>
          <p className="mt-5 sm:text-3xl max-sm:text-2xl text-white text font-bold">
            Develop easier. Build faster. Scale quicker.
          </p>
          <p className="text-gray-400 text-lg mt-5 lg:w-11/12">
            With an SQL-style query language, real-time queries with highly-efficient related data retrieval, advanced security
            permissions for multi-tenant access, and support for performant analytical workloads, SurrealDB is the next generation
            serverless database.
          </p>
          <div className="mt-10 text-base space-y-5">
            <Link to="/install">
              <GlowGrayPrimary children="Install" padding={'px-4 py-3'} />
            </Link>
            <Link to="/docs">
              <GlowGrayPrimary children="Documentation" padding={'px-4 py-3'} margin="max-sm:mt-5 sm:m-8" />
            </Link>
            <GlowGreenPrimary
              onClick={() => {
                window.open('https://www.mongodb.com/cloud/atlas/register', '_blank')
              }}
              children="Try Free"
              padding={'px-4 py-3'}
            />
          </div>
        </div>
        <img
          src={cluster}
          alt="surreal"
          className="hidden xl:block -z-10 relative"
          style={{ maxWidth: '517px', right: '62px', top: '-6.8125' }}
        />
      </div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-1 mt-20 gap-6">
        <div className="cardbg-color shadow-xl rounded-2xl">
          <div className="text-white text-lg font-bold p-10">
            <div className="text-xl flex">
              <ShieldCheckIcon className="text-green-500 h-6 mr-4" />
              <span>Atlas</span>
            </div>
            <p className="mt-6 font-light text-base text-gray-400">
              MongoDB Atlas is a multi-cloud developer data platform that provides the database and data services that accelerate
              and simplify how you build with data. Available on AWS, Google Cloud, and Microsoft Azure.
            </p>
          </div>
        </div>
        <div className="cardbg-color shadow-xl rounded-2xl">
          <div className="text-white text-lg font-bold p-10">
            <div className="text-xl flex">
              <ShieldCheckIcon className="text-green-500 h-6 mr-4" />
              <span>Develop easier</span>
            </div>
            <p className="mt-6 font-light text-base text-gray-400">
              There is no need for your team to learn new complicated database languages. Getting started with SurrealDB is as
              simple as one command - and advanced functionality is simple to understand, whilst still being fast and performant.
            </p>
          </div>
        </div>
        <div className="cardbg-color shadow-xl rounded-2xl">
          <div className="text-white text-lg font-bold p-10">
            <div className="text-xl flex">
              <ShieldCheckIcon className="text-green-500 h-6 mr-4" />
              <span>Build faster</span>
            </div>
            <p className="mt-6 font-light text-base text-gray-400">
              SurrealDB simplifies your database and API stack, removing the need for most server-side components. As a web
              database, client-side applications can be built with direct connections to SurrealDB, while traditional server-side
              development techniques can still leverage the powerful but simple querying and analytics abilities.
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-40 gap-6">
        <div className="md:order-1">
          <img src={mongodata} alt="apiSecurity" className="w-3/4 m-auto max-lg:mb-14" />
        </div>
        <div className="m-auto md:order-2">
          <p className="font-bold md:text-3xl max-sm:text-3xl max-lg:text-4xl lg:w-11/12 text-white">
            Built for the way you work with data
          </p>
          <p className="mt-6 font-light text-base text-gray-400 leading-7">
            MongoDB Atlas' document model enables developers to store data as JSON-like objects that resemble objects in
            application code. With MongoDB Atlas, use the tools and languages that you prefer. Manage your clusters with MongoDB
            CLI for Atlas, or IaC tools like Terraform or Cloudformation.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-40 gap-6">
        <div className="lg:order-2">
          <img src={mongosecure} alt="apiSecurity" className="w-3/4 m-auto max-lg:mb-14" />
        </div>
        <div className="m-auto md:order-1">
          <p className="font-bold md:text-3xl max-sm:text-3xl max-lg:text-4xl lg:w-11/12 text-white">Secure from the start</p>
          <p className="mt-6 font-light text-base text-gray-400 leading-7">
            With MongoDB Atlas, your database is secure by default with preconfigured security features built-in. Out of the box,
            your data is protected with continuous encryption at rest, encryption in transit, sophisticated role-based access
            management, always-on authentication, network isolation, and more.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-40 gap-6">
        <div className="md:order-1">
          <img src={mongocloud} alt="apiSecurity" className="w-3/4 m-auto max-lg:mb-14" />
        </div>
        <div className="m-auto md:order-2">
          <p className="font-bold md:text-3xl max-sm:text-3xl max-lg:text-4xl lg:w-11/12 text-white">
            Access 95+ regions across three cloud providers
          </p>
          <p className="mt-6 font-light text-base text-gray-400 leading-7">
            With the only multi-cloud database, access 95 regions of availability across AWS, Azure, and Google Cloud. Build in
            top tier resiliency by deploying the same database simultaneously across multiple regions and clouds. House your
            databases where your customers are to offer low latency user experiences.
          </p>
        </div>
      </div>
      <div className="sm:text-center max:sm-text-left mt-40 lg:w-8/12 m-auto">
        <p className="font-bold md:text-4xl max-sm:text-4xl max-lg:text-4xl lg:w-11/12 bg-gradient-to-r from-green-400 to-white inline-block text-transparent bg-clip-text">
          Why use SurrealDB?
        </p>
        <p className="text-gray-400 text-base mt-5 lg:w-full m-auto">
          SurrealDB is an innovative NewSQL cloud database, suitable for serverless applications, jamstack applications,
          single-page applications, and traditional applications. It is unmatched in its versatility and financial value, with the
          ability for deployment on cloud, on-premise, embedded, and edge computing environments. For a hassle-free setup, get
          started with SurrealDB Cloud in one-click.
        </p>
      </div>
      <div className="mt-20">
        <div className="cardbg-color shadow-xl rounded-2xl">
          <div className="text-white text-lg font-bold p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex">
                <FontAwesomeIcon icon={faMagicWandSparkles} className="flex text-green-500 mr-4" />
                <span className="text-base font-normal">Document & graph database</span>
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faMagicWandSparkles} className="flex text-green-500 mr-4" />
                <span className="text-base font-normal">GraphQL and REST API</span>
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faMagicWandSparkles} className="flex text-green-500 mr-4" />
                <span className="text-base font-normal">Online and offline data sync</span>
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faMagicWandSparkles} className="flex text-green-500 mr-4" />
                <span className="text-base font-normal">Incrementally computed views</span>
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faMagicWandSparkles} className="flex text-green-500 mr-4" />
                <span className="text-base font-normal">JOIN-less deep fetching</span>
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faMagicWandSparkles} className="flex text-green-500 mr-4" />
                <span className="text-base font-normal">Structured and un-structured data</span>
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faMagicWandSparkles} className="flex text-green-500 mr-4" />
                <span className="text-base font-normal">Support for multi-tenant apps</span>
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faMagicWandSparkles} className="flex text-green-500 mr-4" />
                <span className="text-base font-normal">In-built access and permissions</span>
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faMagicWandSparkles} className="flex text-green-500 mr-4" />
                <span className="text-base font-normal">Distributed and highly-scalable</span>
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faMagicWandSparkles} className="flex text-green-500 mr-4" />
                <span className="text-base font-normal">Distributed ACID transactions</span>
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faMagicWandSparkles} className="flex text-green-500 mr-4" />
                <span className="text-base font-normal">Multi-row, multi-table transactions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 sm:grid-cols-1 mt-40 gap-6">
        <div className="m-auto max-md:order-2">
          <p className="font-bold md:text-3xl max-sm:text-3xl max-lg:text-4xl lg:w-11/12 text-white">Improved data modelling</p>
          <p className="mt-6 font-light text-base text-gray-400 leading-7">
            SurrealDB doesn't force you into setting up your data model in any one way. Instead you can choose between simple
            documents, documents with embedded fields, or related graph connections between records. Use schemafull or schemaless
            tables giving you the flexibility to store whatever you need. <br /> <br /> Once stored in SurrealDB, all data is
            strongly typed, with the ability to convert between different types seamlessly - and numbers can be stored and
            computed with 64 bit precision or as arbitrary length decimals.
          </p>
          <div className="mt-5 text-base grid grid-cols-2 max-sm:space-y-4 md:space-y-0 lg:space-y-4 xl:space-y-0">
            <div className="lg:col-span-2 xl:col-span-1 max-sm:col-span-2">
              <Link to="/features">
                <GlowGrayPrimary padding={'px-4 py-3'}>
                  <FontAwesomeIcon icon={faListCheck} className="mr-4 text-green-500" />
                  View all features
                </GlowGrayPrimary>
              </Link>
            </div>
            <div className="lg:col-span-2 xl:col-span-1 max-sm:col-span-2">
              <Link to="/install">
                <GlowGrayPrimary onClick={() => console.log('Clicked!')} padding={'px-4 py-3'}>
                  Get started with MongoDB
                  <FontAwesomeIcon icon={faArrowRight} className="ml-4 text-green-500" />
                </GlowGrayPrimary>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-md:order-1 max-sm:mt-14 sm:mt-14 lg:mt-0">
          <CodeBlock language={'javascript'} code={code1} />
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 sm:grid-cols-1 mt-40 gap-6">
        <div className="m-auto md:order-2 max-md:order-2">
          <p className="font-bold md:text-3xl max-sm:text-3xl max-lg:text-4xl lg:w-11/12 text-white">Improved data modelling</p>
          <p className="mt-6 font-light text-base text-gray-400 leading-7">
            SurrealDB doesn't force you into setting up your data model in any one way. Instead you can choose between simple
            documents, documents with embedded fields, or related graph connections between records. Use schemafull or schemaless
            tables giving you the flexibility to store whatever you need. <br /> <br /> Once stored in SurrealDB, all data is
            strongly typed, with the ability to convert between different types seamlessly - and numbers can be stored and
            computed with 64 bit precision or as arbitrary length decimals.
          </p>
          <div className="mt-5 text-base grid grid-cols-2 max-sm:space-y-4 md:space-y-0 lg:space-y-4 xl:space-y-0">
            <div className="lg:col-span-2 xl:col-span-1 max-sm:col-span-2">
              <Link to="/features">
                <GlowGrayPrimary padding={'px-4 py-3'}>
                  <FontAwesomeIcon icon={faListCheck} className="mr-4 text-green-500" />
                  View all features
                </GlowGrayPrimary>
              </Link>
            </div>
            <div className="lg:col-span-2 xl:col-span-1 max-sm:col-span-2">
              <Link to="/install">
                <GlowGrayPrimary onClick={() => console.log('Clicked!')} padding={'px-4 py-3'}>
                  Get started with MongoDB
                  <FontAwesomeIcon icon={faArrowRight} className="ml-4 text-green-500" />
                </GlowGrayPrimary>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:order-1 max-md:order-1 max-sm:mt-14 sm:mt-14 lg:mt-0">
          <CodeBlock language={'javascript'} code={code2} />
        </div>
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
          <GlowGrayPrimary
            onClick={() => {
              window.open('https://github.com/mongodb', '_blank')
            }}
            padding={'px-4 py-2'}
          >
            <FontAwesomeIcon icon={faStar} className="mr-2 text-green-500" />
            Star us on GitHub
          </GlowGrayPrimary>
          <Link to="/features">
            <GlowGreenPrimary onClick={() => console.log('Clicked!')} padding={'px-4 py-2'}>
              View Our Features
            </GlowGreenPrimary>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
