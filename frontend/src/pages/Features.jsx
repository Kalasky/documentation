import React, { useState, useEffect } from 'react'
import '../index.scss'

// assets
import documentation_hero from '../assets/documentation_hero.svg'

// heroicons
import { ShieldCheckIcon } from '@heroicons/react/24/outline'

// components
import Sidebar from '../components/docs/Sidebar'
import { FeatureCell } from '../components/docs/FeatureCell'
import { CodeBlock } from '../components/CodeBlock'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

// utils
import { scrollToSection } from '../utils/scroll'

const Features = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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

  const code2 = `const query = { name: 'John' };
  const update = { $set: { age: 30 } };
  const options = { new: true };
  
  const updatedUser = await User.findOneAndUpdate(query, update, options);
  console.log(updatedUser);`

  const code3 = `const aggregationPipeline = [
    { $match: { status: 'active' } },
    { $group: { _id: '$category', total: { $sum: '$quantity' } } },
    { $sort: { total: -1 } },
    { $limit: 5 }
  ];
  
  const result = await Product.aggregate(aggregationPipeline);
  console.log(result);`

  const code4 = `const session = await mongoose.startSession();
  session.startTransaction();
  
  try {
    await User.create([{ name: 'John' }, { name: 'Jane' }], { session });
    await Order.create([{ product: 'Apple', quantity: 5 }, { product: 'Banana', quantity: 3 }], { session });
  
    await session.commitTransaction();
    console.log('Transaction committed successfully!');
  } catch (error) {
    await session.abortTransaction();
    console.error('Transaction aborted:', error);
  } finally {
    session.endSession();
  }
  `
  const code5 = `
  const pipeline = [
    { $match: { age: { $gte: 18 } } },
    { $group: { _id: '$country', count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ];
  
  const result = await User.aggregate(pipeline);
  console.log(result);`

  const code6 = `const filter = { status: 'pending' };
    const update = { $set: { status: 'completed' } };
    const options = { multi: true };

    const result = await Task.updateMany(filter, update, options);
    console.log(result);`

  const code7 = `
    const product = new Product({ name: 'Apple', price: 2.99 });
await product.save();

product.price = 3.99;
await product.save();

const updatedProduct = await Product.findOne({ name: 'Apple' });
console.log(updatedProduct);`

  const code8 = `
const user = await User.findById('123456789');
console.log(user);

user.email = 'newemail@example.com';
await user.save();

const updatedUser = await User.findById('123456789');
console.log(updatedUser);
`

  const code9 = `const pipeline = [
  { $match: { status: 'active' } },
  { $group: { _id: '$category', averagePrice: { $avg: '$price' } } },
  { $sort: { averagePrice: -1 } },
  { $limit: 5 }
];

const result = await Product.aggregate(pipeline);
console.log(result);
`

  return (
    <div className="container mx-auto sm:pt-28 max-sm:pt-14 pb-12" id="top" style={{ fontFamily: 'Poppins' }}>
      {showBackToTop && (
        <button
          onClick={() => scrollToSection('top')}
          className="fixed bottom-8 right-8 z-50 p-2 w-10 h-10 rounded-full bg-green-700 text-white focus:outline-none hover:bg-green-600 transition ease-in-out duration-200"
        >
          <div className="w-full h-full">
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
        </button>
      )}
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
          alt="mongo"
          className="hidden xl:block -z-10 relative"
          style={{ maxWidth: '69.8125rem', right: '6.375rem', top: '-6.8125rem', height: '33.875rem' }}
        />
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-4">
        <div className="col-span-1" style={{ position: 'sticky' }}>
          <Sidebar entries={entries} isVisible={true} />
        </div>
        <div className="col-span-2">
          {/* section 1 */}
          <section className="section1 grid grid-cols-2 gap-4 document-model">
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Introduction"
                description="MongoDB is a NoSQL database that allows you to store and query data directly from your client-side applications. It provides an easy-to-use interface for your data."
                badge={'complete'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Data Storage"
                description="MongoDB offers efficient and scalable data storage capabilities. It supports document-based data model, allowing you to store structured, semi-structured, and unstructured data in a flexible manner."
                badge={'complete'}
              />
            </div>
            <div className="col-span-2">
              <CodeBlock language={'javascript'} code={code9} />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Data Querying"
                description="With MongoDB, you can perform powerful queries on your data using a flexible query language. It supports various query operators and indexing options to optimize query performance."
                badge={'complete'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Data Manipulation"
                description="MongoDB provides a rich set of operations for manipulating data. You can insert, update, and delete documents easily, as well as perform complex aggregations and transformations on your data."
                badge={'complete'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Data Scalability"
                description="MongoDB offers horizontal scalability through sharding. You can distribute your data across multiple servers to handle large datasets and high traffic loads, ensuring performance and availability."
                badge={'planned'}
              />
            </div>
          </section>

          {/* section divider */}
          <div className="border-t border-gray-700 mt-10"></div>

          {/* section 2 */}
          <section className="section2 grid grid-cols-2 gap-4 pt-24 sharding">
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Introduction"
                description="MongoDB is a NoSQL database that allows you to store and query data directly from your client-side applications. It provides an easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Data Storage"
                description="MongoDB offers efficient and scalable data storage capabilities. It supports document-based data model, allowing you to store structured, semi-structured, and unstructured data in a flexible manner."
                badge={'planned'}
              />
            </div>
            <div className="col-span-2">
              <CodeBlock language={'javascript'} code={code8} />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Data Querying"
                description="With MongoDB, you can perform powerful queries on your data using a flexible query language. It supports various query operators and indexing options to optimize query performance."
                badge={'planned'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Data Manipulation"
                description="MongoDB provides a rich set of operations for manipulating data. You can insert, update, and delete documents easily, as well as perform complex aggregations and transformations on your data."
                badge={'planned'}
              />
            </div>
          </section>
          {/* section divider */}
          <div className="border-t border-gray-700 mt-10"></div>
          {/* section 3 */}
          <section className="section3 grid grid-cols-2 gap-4 pt-24 replication">
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Introduction"
                description="MongoDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Introduction"
                description="MongoDB is a web database that allows you to store and query data directly from your client-side applications.  easy-to-use interface for your data."
                badge={'planned'}
              />
            </div>
          </section>
          {/* section divider */}
          <div className="border-t border-gray-700 mt-10"></div>
          {/* section 4 */}
          <section className="section4 grid grid-cols-2 gap-4 pt-24 authentication">
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Indexing"
                description="MongoDB supports various indexing techniques to improve query performance. You can create indexes on fields or expressions, enabling faster data retrieval and efficient query execution."
                badge={'complete'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Aggregation Framework"
                description="The Aggregation Framework in MongoDB allows you to perform advanced data aggregations, such as grouping, filtering, and transformations. It provides powerful tools for data analysis and reporting."
                badge={'complete'}
              />
            </div>
            <div className="col-span-2">
              <CodeBlock language={'javascript'} code={code2} />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Replication"
                description="MongoDB's replication feature ensures high availability and data durability. It allows you to create replica sets with multiple copies of your data, providing automatic failover and seamless data synchronization."
                badge={'complete'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Geospatial Queries"
                description="MongoDB offers geospatial indexing and querying capabilities. You can store and query geospatial data, such as coordinates and shapes, allowing you to build location-aware applications."
                badge={'complete'}
              />
            </div>
          </section>
          {/* section divider */}
          <div className="border-t border-gray-700 mt-10"></div>
          {/* section 5 */}
          <section className="section5 grid grid-cols-2 gap-4 pt-24 database-triggers">
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Transactions"
                description="MongoDB supports multi-document transactions, ensuring data integrity and consistency across multiple operations. You can perform atomic transactions on multiple documents within a single session."
                badge={'complete'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Change Streams"
                description="Change Streams in MongoDB allow you to listen for real-time changes in the database. You can subscribe to specific collections or queries and receive notifications about inserts, updates, and deletions."
                badge={'complete'}
              />
            </div>
            <div className="col-span-2">
              <CodeBlock language={'javascript'} code={code3} />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Security"
                description="MongoDB provides robust security features to protect your data. It supports authentication, role-based access control, encryption, and auditing, ensuring data privacy and compliance."
                badge={'complete'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Full-Text Search"
                description="MongoDB offers full-text search capabilities, allowing you to perform text-based queries on your data. It supports language-specific text analysis and indexing for efficient search operations."
                badge={'complete'}
              />
            </div>
          </section>
          {/* section divider */}
          <div className="border-t border-gray-700 mt-10"></div>
          {/* section 6 */}
          <section className="section6 grid grid-cols-2 gap-4 pt-24 time-series-data">
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Backups and Restores"
                description="MongoDB provides backup and restore mechanisms to protect your data. You can create backups of your databases and restore them in case of data loss or system failures."
                badge={'planned'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Change Tracking"
                description="MongoDB's Change Tracking feature allows you to track and monitor changes to your data. You can capture and analyze the history of document modifications, enabling auditing and compliance requirements."
                badge={'planned'}
              />
            </div>
            <div className="col-span-2">
              <CodeBlock language={'javascript'} code={code4} />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Data Encryption"
                description="MongoDB supports data encryption at rest and in transit. You can encrypt your data using encryption algorithms and secure communication channels, ensuring data confidentiality."
                badge={'planned'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Schema Validation"
                description="MongoDB allows you to enforce document validation rules using Schema Validation. You can define validation rules for your collections to ensure data integrity and consistency."
                badge={'planned'}
              />
            </div>
          </section>
          {/* section divider */}
          <div className="border-t border-gray-700 mt-10"></div>
          {/* section 7 */}
          <section className="section7 grid grid-cols-2 gap-4 pt-24 ad-hoc">
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Cloud Integration"
                description="MongoDB seamlessly integrates with various cloud platforms and services. You can deploy and manage MongoDB instances on popular cloud providers, enabling scalability and flexibility."
                badge={'planned'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Change Notifications"
                description="Change Notifications in MongoDB allow you to receive real-time notifications about changes in your data. You can subscribe to specific collections or queries and get notified about data modifications."
                badge={'planned'}
              />
            </div>
            <div className="col-span-2">
              <CodeBlock language={'javascript'} code={code5} />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Performance Optimization"
                description="MongoDB offers various performance optimization techniques. You can leverage features like query profiling, index optimization, and caching to improve the performance of your database operations."
                badge={'planned'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Real-Time Analytics"
                description="MongoDB integrates with analytics platforms and tools, allowing you to perform real-time analytics on your data. You can gain valuable insights and make data-driven decisions."
                badge={'planned'}
              />
            </div>
          </section>
          {/* section divider */}
          <div className="border-t border-gray-700 mt-10"></div>
          {/* section 8 */}
          <section className="section8 grid grid-cols-2 gap-4 pt-24 indexing">
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Change Streams"
                description="Change Streams in MongoDB allow you to capture and react to real-time changes in your data. You can subscribe to specific collections or queries and receive notifications about inserts, updates, and deletions."
                badge={'planned'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Data Partitioning"
                description="MongoDB provides data partitioning capabilities to distribute your data across multiple servers. You can shard your data based on a shard key, enabling horizontal scalability and improved performance."
                badge={'planned'}
              />
            </div>
            <div className="col-span-2">
              <CodeBlock language={'javascript'} code={code6} />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Time-Series Data"
                description="MongoDB offers specialized support for time-series data. You can efficiently store and query time-stamped data, enabling analysis and visualization of time-based trends."
                badge={'planned'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Mobile and IoT Integration"
                description="MongoDB provides libraries and integrations for mobile and IoT applications. You can seamlessly sync data between devices and the server, enabling offline capabilities and real-time data updates."
                badge={'planned'}
              />
            </div>
          </section>
          {/* section divider */}
          <div className="border-t border-gray-700 mt-10"></div>
          {/* section 9 */}
          <section className="section9 grid grid-cols-2 gap-4 pt-24 load-balancing">
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Backups and Disaster Recovery"
                description="MongoDB offers comprehensive backup and disaster recovery solutions. You can create backups of your databases and implement strategies for recovering data in case of system failures or disasters."
                badge={'planned'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="GraphQL Integration"
                description="MongoDB integrates with GraphQL, a query language for APIs. You can use MongoDB as a data source for GraphQL APIs, providing a flexible and efficient way to fetch and manipulate data."
                badge={'planned'}
              />
            </div>
            <div className="col-span-2">
              <CodeBlock language={'javascript'} code={code7} />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="In-Memory Storage"
                description="MongoDB supports in-memory storage engines for high-performance data processing. You can leverage in-memory computing to accelerate data access and computation for specific workloads."
                badge={'planned'}
              />
            </div>
            <div className="sm:col-span-1 max-sm:col-span-2">
              <FeatureCell
                title="Data Lake Integration"
                description="MongoDB integrates with data lake platforms, allowing you to leverage the benefits of both structured and unstructured data storage. You can seamlessly query and analyze data stored in data lakes."
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
