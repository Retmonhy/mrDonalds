import React from 'react';
import FeedbackField from "./FeedbackField"

export default function FeedbackForm({inputData}) {
    return (
        <form className={inputData.formClassName} action={inputData.formMethod}>
            {
                inputData.inputs.map((item, index) => <FeedbackField type={item.type} placeholder={item.placeholder} key={index}/>)
            }
            <button className="btn contact-btn"><span>Позвоните мне</span></button>
        </form>
    );
}