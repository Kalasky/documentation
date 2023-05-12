import React from 'react'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCode } from '@fortawesome/free-solid-svg-icons'
import { faApple, faWindows, faLinux, faDocker } from '@fortawesome/free-brands-svg-icons'

// components
import { CodeBlock, InlineBashCode } from '../components/CodeBlock'

const Community = () => {
  return (
    <div className="container mx-auto sm:pt-28 max-sm:pt-14 pb-12" style={{ fontFamily: 'Poppins' }}>
      <div className="sm:text-center max:sm-text-left lg:w-8/12 m-auto">
        <p className="font-bold md:text-6xl max-sm:text-4xl max-lg:text-4xl lg:w-11/12 bg-gradient-to-r from-green-400 to-white inline-block text-transparent bg-clip-text" style={{lineHeight: '6rem'}}>
          Install MongoDB
        </p>
        <p className="text-gray-400 text-base mt-5 lg:w-5/6 m-auto">
          There are a number of ways of running SurrealDB. It can either be installed from a binary image, or it can be run from
          within Docker. Once installed, the <InlineBashCode code={'surreal'} /> command is a single executable which can be used
          to backup, interact with, and run SurrealDB server instances.
        </p>
      </div>
      <div className="sm:text-center max:sm-text-left lg:w-8/12 m-auto mt-32">
        <p className="font-bold md:text-2xl max-sm:text-2xl max-lg:text-2xl lg:w-11/12 text-white inline-block text-transparent bg-clip-text">
          <FontAwesomeIcon icon={faApple} className="mr-2 text-white" /> Install on macOS
        </p>
        <p className="text-gray-400 text-base mt-5 mb-5 lg:w-5/6 m-auto">
          The quickest way to get going with SurrealDB on macOS is to use Homebrew. This will install both the command-line tools,
          and the SurrealDB server as a single executable. If you don't use Homebrew, follow the instructions for Linux below to
          install SurrealDB. View the documentation or more information.
        </p>
        <CodeBlock language={'bash'} code={'brew tap mongodb/brew'} />
      </div>
      <div className="sm:text-center max:sm-text-left lg:w-8/12 m-auto mt-10">
        <p className="font-bold md:text-2xl max-sm:text-2xl max-lg:text-2xl lg:w-11/12 text-white inline-block text-transparent bg-clip-text">
          <FontAwesomeIcon icon={faLinux} className="mr-2 text-white" /> Install on Linux
        </p>
        <p className="text-gray-400 text-base mt-5 mb-5 lg:w-5/6 m-auto">
          The easiest and preferred way to get going with SurrealDB on Unix operating systems is to install and use the SurrealDB
          command-line tool. Run the following command in your terminal and follow the on-screen instructions. View the
          documentation or more information.
        </p>
        <CodeBlock language={'bash'} code={'brew tap mongodb/brew'} />
      </div>
      <div className="sm:text-center max:sm-text-left lg:w-8/12 m-auto mt-10">
        <p className="font-bold md:text-2xl max-sm:text-2xl max-lg:text-2xl lg:w-11/12 text-white inline-block text-transparent bg-clip-text">
          <FontAwesomeIcon icon={faWindows} className="mr-2 text-white" /> Install on Windows
        </p>
        <p className="text-gray-400 text-base mt-5 mb-5 lg:w-5/6 m-auto">
          The easiest and preferred way to get going with SurrealDB on Windows is to install and use the SurrealDB command-line
          tool. Run the following command in your terminal and follow the on-screen instructions. View the documentation or more
          information.
        </p>
        <CodeBlock language={'bash'} code={'brew tap mongodb/brew'} />
        <p className="text-gray-400 text-base mt-5 mb-5 lg:w-5/6 m-auto">
          Alternatively SurrealDB is available for installation, on Windows, via the Scoop package manager, from an administrative
          shell - enabling easy installation and upgrading.
        </p>
        <CodeBlock language={'bash'} code={'brew tap mongodb/brew'} />
        <p className="text-gray-400 text-base mt-5 mb-5 lg:w-5/6 m-auto">
          The easiest and preferred way to get going with SurrealDB on Windows is to install and use the SurrealDB command-line
          tool. Run the following command in your terminal and follow the on-screen instructions. View the documentation or more
          information.
        </p>
        <CodeBlock language={'bash'} code={'brew tap mongodb/brew'} />
      </div>
      <div className="sm:text-center max:sm-text-left lg:w-8/12 m-auto mt-10">
        <p className="font-bold md:text-2xl max-sm:text-2xl max-lg:text-2xl lg:w-11/12 text-white inline-block text-transparent bg-clip-text">
          Run using Docker
        </p>
        <p className="text-gray-400 text-base mt-5 mb-5 lg:w-5/6 m-auto">
          Docker can be used to manage and run SurrealDB database instances without the need to install any command-line tools.
          The SurrealDB docker container contains the full command-line tools for importing and exporting data from a running
          server, or for running a server itself. View the documentation or more information.
        </p>
        <CodeBlock language={'bash'} code={'docker run --rm --pull always -p 8000:8000 surrealdb/surrealdb:latest start'} />
      </div>
    </div>
  )
}

export default Community
