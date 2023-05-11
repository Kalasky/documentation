import React from 'react'
import '../index.scss'

// assets
import documentation_hero from '../assets/documentation_hero.svg'

// heroicons
import { ShieldCheckIcon } from '@heroicons/react/24/outline'

// components
import Sidebar from '../components/docs/Sidebar'
import { FeatureCell } from '../components/docs/FeatureCell'
import { CodeBlock } from '../components/CodeBlock'

const Features = () => {
  const entries = [
    { id: 'document-model', title: 'Document Model' },
    { id: 'sharding', title: 'Sharding' },
    { id: 'replication', title: 'Replication' },
    { id: 'authentication', title: 'Authentication' },
    { id: 'database-triggers', title: 'Database Triggers' },
    { id: 'time-series-data', title: 'Time Series Data' },
    { id: 'ad-hoc', title: 'Ad-Hoc Queries' },
    { id: 'indexing', title: 'Indexing' },
    { id: 'load-balancing', title: 'Load Balancing' },
  ]

  const code1 = `const schema = new Schema({ name: String, age: { type: Number, min: 0 } });
  const Person = mongoose.model('Person', schema);
  
  const p = new Person({ name: 'foo', age: 'bar' });
  // Cast to Number failed for value "bar" at path "age"
  await p.validate();
  
  const p2 = new Person({ name: 'foo', age: -1 });
  // Path \`age\` (-1) is less than minimum allowed value (0).
  await p2.validate();`

  return (
    <div className="container mx-auto sm:pt-28 max-sm:pt-14 pb-12" style={{ fontFamily: 'Poppins' }}>
      <div className="grid grid-flow-row-dense xl:grid-cols-3 sm:grid-cols-1 pb-24">
        <div id="text-section" className="col-span-2">
          <p
            className="font-bold xl:text-6xl md:text-5xl max-sm:text-4xl max-lg:text-4xl lg:w-11/12 bg-gradient-to-r from-green-400 to-white inline-block text-transparent bg-clip-text"
            style={{ lineHeight: '6rem' }}
          >
            MongoDB Features
          </p>
          <p className="mt-5 sm:text-3xl max-sm:text-2xl text-white text font-bold">
            The go-to for modern applications, with a flexible document model, distributed architecture, and powerful query
            capabilities.
          </p>
        </div>
        <img
          src={documentation_hero}
          alt="surreal"
          className="hidden xl:block -z-10 relative"
          style={{ maxWidth: '69.8125rem', right: '6.375rem', top: '-6.8125rem', height: '33.875rem' }}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1" style={{ position: 'sticky' }}>
          <Sidebar entries={entries} isVisible={true} />
        </div>
        <div className="col-span-2">
          {/* section 1 */}
          <section className="section1 grid grid-cols-2 gap-4 document-model">
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'complete'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'complete'}
              />
            </div>
            <div className="col-span-2">
              <CodeBlock language={'javascript'} code={code1} />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'complete'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'complete'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
          </section>
          {/* section divider */}
          <div className="border-t border-gray-700 mt-10"></div>
          {/* section 2 */}
          <section className="section2 grid grid-cols-2 gap-4 pt-24 sharding">
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-2">
              <CodeBlock language={'javascript'} code={code1} />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
          </section>
          {/* section divider */}
          <div className="border-t border-gray-700 mt-10"></div>
          {/* section 3 */}
          <section className="section3 grid grid-cols-2 gap-4 pt-24 replication">
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
          </section>
          {/* section divider */}
          <div className="border-t border-gray-700 mt-10"></div>
          {/* section 4 */}
          <section className="section4 grid grid-cols-2 gap-4 pt-24 authentication">
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
          </section>
          {/* section divider */}
          <div className="border-t border-gray-700 mt-10"></div>
          {/* section 5 */}
          <section className="section5 grid grid-cols-2 gap-4 pt-24 database-triggers">
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
          </section>
          {/* section divider */}
          <div className="border-t border-gray-700 mt-10"></div>
          {/* section 6 */}
          <section className="section6 grid grid-cols-2 gap-4 pt-24 time-series-data">
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <CodeBlock language={'javascript'} code={code1} />
            </div>

            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-2">
              <CodeBlock language={'javascript'} code={code1} />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <CodeBlock language={'javascript'} code={code1} />
            </div>
          </section>
          {/* section divider */}
          <div className="border-t border-gray-700 mt-10"></div>
          {/* section 7 */}
          <section className="section7 grid grid-cols-2 gap-4 pt-24 ad-hoc">
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
          </section>
          {/* section divider */}
          <div className="border-t border-gray-700 mt-10"></div>
          {/* section 8 */}
          <section className="section8 grid grid-cols-2 gap-4 pt-24 indexing">
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
          </section>
          {/* section divider */}
          <div className="border-t border-gray-700 mt-10"></div>
          {/* section 9 */}
          <section className="section9 grid grid-cols-2 gap-4 pt-24 load-balancing">
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-1">
              <FeatureCell
                title="Introduction"
                description="SurrealDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Features
