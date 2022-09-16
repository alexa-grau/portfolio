import {
    Row
} from 'reactstrap';
import ProjectCard from './card';

function Projects(args) {
//   let longest = {'index': -1, 'length': 0};
  const projects = args.items.map((item, i) => {
    // const itemLength = item.title.length+item.description.length;

    // if(itemLength>longest.length) longest = {'index': i, 'length': itemLength};
    const icons = item.icons.map((x) => {
        return (<a key={'project-link-'+x.href} href={x.href} target="_blank">{x.icon}</a>);
    });
    return (<ProjectCard key={"project-card-"+i} index={i} item={item} icons={icons} />);
  });
//   console.log(longest);
  return (
    <Row>
        {projects}
    </Row>
  );
}

export default Projects;