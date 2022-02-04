import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";


const Ul = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
margin-top: 5px;
`;
const Section = styled.section`
    padding: 0 100px; 
`;
// const MenuChapter = ({props}) => {
//     console.log(props)
//     return (
//         <Section className="menu-chapter">
//            <h2>{props.chapterName }</h2>
//             <Ul>
//                 {
//                     props.menuItems.map(item => {
//                         return <MenuItem aboutItem={item}/>
//                     })
//                 }
//             </Ul>
//         </Section>
//     );
// }
const MenuChapter = ({chapterName, menuItems}) => {
    return (
        <Section className="menu-chapter">
           <h2>{chapterName }</h2>
            <Ul>
                {
                    menuItems.map(item =>  <MenuItem 
                        key={item.id}
                        name={item.name}
                        img={item.img}
                        price={item.price}
                        />)
                }
            </Ul>
        </Section>
    );
}

export default MenuChapter