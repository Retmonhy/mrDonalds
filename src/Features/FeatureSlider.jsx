import React from 'react';
import FeatureItem from "./FeatureItem"
import SliderArrow from "./SliderArrow"

export default function FeatureSlider(props) {
    return(
        <div className="features-slider">
            <div className="features-slider_items">
                {
                    props.user.featureProps.map((item, index) => {
                        return <FeatureItem featureCount={item.featureCount} style={item.styles.imageSt} key={index}/>                     
                    })
                }
            </div>
            <SliderArrow className="features-slider-arrow features-slider-prev"/>
            <SliderArrow className="features-slider-arrow features-slider-next"/>
        </div>
    );
}