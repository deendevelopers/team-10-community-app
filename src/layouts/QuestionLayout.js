import React from "react";

const QuestionLayout = ({left}) => (
    <div className="flex flex-row flex-wrap">
        <div className="flex w-screen h-screen bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100">{left}</div>
    </div>
);

export default QuestionLayout;
