import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import PropTypes from 'prop-types';


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

const MenuChapter = ({chapterName, menuItems }) => {
    return (
        <Section className="menu-chapter">
           <h2>{chapterName }</h2>
            <Ul>
                {
                    menuItems.map(item =>  <MenuItem 
                        key={item.id}
                        menuPosition={item}
                    />)
                }
            </Ul>
        </Section>
    );
}

MenuChapter.propTypes = {
    chapterName: PropTypes.string.isRequired,
    menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default MenuChapter