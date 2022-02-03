import React from "react";

function FeatureItem(props) {
    return (
           <div className="features-slider_item">
                <div className="features-img" style={props.style}></div>
                <div className="features-feature">{props.featureCount} целевое преимущество</div>
            </div>
    );
}
export default FeatureItem