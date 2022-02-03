import React from "react";

export default function FeedbackField(props) {
    return(
        <input type={props.type} placeholder={props.placeholder}/>
    );
}