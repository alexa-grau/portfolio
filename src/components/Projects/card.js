import './project.css';

import {
  Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, CardImg, CardImgOverlay
} from 'reactstrap';
import { useState } from 'react';
import Circle from '../Icons/Circle';

function ProjectCard(args) {
  // args: index, item {title, description}, icons
  const [isShown, setIsShown] = useState(false);

  return (
    <Col md="6" lg="4" className="mb-4">
    <Card
        key={'project-'+args.index}
        className='project h-100'
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
    >
      <CardHeader style={{fontSize:"1px"}}>
          <Circle color="#FF605C"/>
          <Circle color="#FFBD44"/>
          <Circle color="#00CA4E"/>
      </CardHeader>
      <CardBody>
        <CardTitle>{args.item.title}</CardTitle>
        <CardText>{args.item.description}</CardText>
      </CardBody>
      <CardFooter className='w-100 d-inline-flex justify-content-end bg-transparent border-0'>
        {args.icons}
      </CardFooter>
      {/* <CardImg 
        alt="Card image"
        src={args.item.img}
        width="100%"
      />
      <CardImgOverlay>
        {true && <div className='text-overlay'>
          <CardBody>
            <CardTitle>{args.item.title}</CardTitle>
            <CardText>{args.item.description}</CardText>
          </CardBody>
          <CardFooter className='w-100 d-inline-flex justify-content-end bg-transparent border-0'>
            {args.icons}
          </CardFooter>
        </div>}
      </CardImgOverlay> */}
    </Card>
    </Col>
  );
}
  
export default ProjectCard;