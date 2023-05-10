import React from 'react'

const Timeline = () => {
  const timelineData = [
    {
      date: '2023',
      title: 'MongoDB Atlas supports serverless architecture',
      content:
        'MongoDB Atlas introduces a serverless platform, allowing developers to build fully managed applications without the need to provision or manage servers.',
    },
    {
      date: '2022',
      title: 'MongoDB Cloud Manager becomes part of MongoDB Realm',
      content:
        'MongoDB Cloud Manager is integrated into the MongoDB Realm serverless platform, enabling developers to manage their entire application stack in one place.',
    },
    {
      date: '2021',
      title: 'MongoDB introduces native time series collections',
      content:
        'MongoDB 5.0 adds native time series collections, with built-in features for data visualization, aggregation, and forecasting, making it easier for developers to store and analyze time series data.',
    },
    {
      date: '2020',
      title: 'MongoDB introduces schema validation',
      content:
        'MongoDB 4.4 adds support for schema validation, allowing developers to enforce document structure and data types, ensuring data integrity and consistency.',
    },
    {
      date: '2019',
      title: 'MongoDB adds support for distributed transactions',
      content:
        'MongoDB 4.2 introduces distributed transactions, allowing developers to perform transactions across multiple documents, collections, and shards in a single ACID-compliant operation.',
    },
    {
      date: '2018',
      title: 'MongoDB introduces global clusters with MongoDB Atlas',
      content:
        'MongoDB Atlas adds global clusters, enabling developers to distribute data across multiple regions and maintain low-latency access to their data from anywhere in the world.',
    },
    {
      date: '2015',
      title: 'MongoDB introduces the WiredTiger storage engine',
      content:
        'MongoDB 3.0 adds support for the WiredTiger storage engine, which provides better compression, concurrency, and scalability for high-write workloads.',
    },
    {
      date: '2014',
      title: 'MongoDB University is launched',
      content:
        'MongoDB University is established, offering free online courses and certifications to educate developers and DBAs on MongoDB.',
    },
    {
      date: '2013',
      title: 'MongoDB introduces the aggregation framework',
      content:
        'MongoDB 2.2 adds the aggregation framework, which allows developers to perform complex data analysis and transformations using a pipeline of stages.',
    },
    {
      date: '2012',
      title: 'MongoDB introduces TTL indexes',
      content:
        'MongoDB 2.2 adds support for TTL (time-to-live) indexes, allowing developers to automatically expire documents after a certain amount of time, making it easier to manage temporary or cached data.',
    },
  ]

  return (
    <div>
      <div className="timeline">
        <ul>
          {timelineData.map((entry, index) => (
            <li className="animate-ping:before" key={index}>
              <div className="content">
                <h3>{entry.title}</h3>
                <p className="text-gray-600 hover:text-gray-400 transition ease-out duration-700 text-sm">{entry.content}</p>
              </div>
              <div className="time">
                <h4>{entry.date}</h4>
              </div>
            </li>
          ))}
          <div style={{ clear: 'both' }}></div>
        </ul>
      </div>
    </div>
  )
}

export default Timeline
