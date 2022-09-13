import './project.css';

import {
    Row, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter
} from 'reactstrap';
import Circle from '../Icons/Circle';

function ProjectCard(args) {

  const projects = args.items.map((item, i) => {
    const icons = item.icons.map((x) => {
        return (<a key={'project-link-'+x.href} href={x.href} target="_blank">{x.icon}</a>);
    });
    return (<Card
            key={'project-'+i}
            className='project p-0 m-1'
            style={{
                width:'30%', // figure out flex shrink/grow
            }} 
        >
            <CardHeader style={{fontSize:"1px"}}>
                <Circle color="#FF605C"/> {/* red */}
                <Circle color="#FFBD44"/> {/* orange */}
                <Circle color="#00CA4E"/> {/* green */}
            </CardHeader>
            <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
            <CardFooter className='d-inline-flex justify-content-end'>
                {/* {item.icons} */}
                {icons}
            </CardFooter>
        </Card>);
  });
  
  return (
    <Row className="d-flex flex-wrap" >
        {projects}
    </Row>
  );
}

export default ProjectCard;