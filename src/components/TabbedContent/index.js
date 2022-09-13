import './tabbedContent.css';

import React, { useState } from 'react'
import {
    TabContent, TabPane, Nav,
    NavItem, NavLink, Row, Col
} from 'reactstrap';
import classnames from 'classnames';
  
function Tabbed(args) {
  
    // State for current active Tab
    const [currentActiveTab, setCurrentActiveTab] = useState('0');
  
    // Toggle active state for Tab
    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }

    const tabs = args.items.map((item, i) => {
        return (<NavItem key={"navitem-"+i}>
            <NavLink
                className={classnames({active: currentActiveTab===i.toString()})}
                onClick={()=>{toggle(i.toString());}}
            >{item.tabTitle}</NavLink>
        </NavItem>);
    });

    const panes = args.items.map((item, i) => {
        const listItems = item.listPoints.map((point, index) => {
            return (<li key={"point-"+index}>{point}</li>);
        });
        return (
            <TabPane tabId={i.toString()} key={"tabpane-"+i}>
                <h5>{item.fullTitle}</h5>
                <p>{item.dateString}</p>
                <ul>{listItems}</ul>
                <span>{item.other}</span>
            </TabPane>
        );
    });
  
    return (
        <Row>
            <Col md='4'>
                <Nav pills>{tabs}</Nav>
                <div className='styledLine'></div>
            </Col>
            <Col md='8'>
                <TabContent activeTab={currentActiveTab}>{panes}</TabContent>
            </Col>
        </Row >
    );
}

export default Tabbed;