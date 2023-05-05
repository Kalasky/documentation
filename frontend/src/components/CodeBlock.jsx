import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const CodeBlock = ({ language, code }) => {
  return (
    <div className="overflow-x-auto">
      <SyntaxHighlighter
        language={language}
        style={darcula}
        customStyle={{
          whiteSpace: 'pre-wrap',
          borderRadius: '20px',
          backgroundColor: 'rgb(39,46,60)',
          boxShadow: '0 4px 7px rgba(0,0,0,.3), inset 0 1px 1px rgba(255,255,255,.1)',
          padding: '1.5rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export const InlineBashCode = ({ code }) => {
  return (
    <span className="inline-block bg-gray-800 rounded-md px-2 py-1 text-base font-medium text-gray-200">
      <code language="bash">{code}</code>
    </span>
  )
}
