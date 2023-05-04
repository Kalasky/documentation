import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const CodeBlock = ({ code }) => {
  return (
    <div className="overflow-x-auto">
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        customStyle={{
          whiteSpace: 'pre-wrap',
          borderRadius: '20px',
          backgroundColor: 'rgb(39,46,60)',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
