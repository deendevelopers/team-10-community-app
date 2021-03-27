import React from 'react'

const QuestionLayout = ({left = <div>test</div>, right=<div>test</div>}) => (
    <div className="flex flex-row">
        <div className="flex w-2/3 h-screen bg-gradient-to-r from-blue-300 via-blue-200 ...">{left}</div>
        <div className="flex w-1/3 h-screen">{right}</div>
    </div>
)

export default QuestionLayout;