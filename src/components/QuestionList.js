
import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({mydata, delQuestion, updatedQuestion}) {

const disData = mydata.map((val)=>{
    return <QuestionItem question ={val} delQuestion={delQuestion} updatedQuestion={updatedQuestion}/>
})

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{disData}</ul>
    </section>
  );
}

export default QuestionList;
