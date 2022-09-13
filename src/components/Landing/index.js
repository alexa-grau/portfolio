import './landing.css';
import { Button } from 'reactstrap';

function Landing() {
  return (
    <div id="landing">
        <span>Hi, my name is</span>
        <h1>Alexa Grau.</h1>
        <p>I'm a recent graduate from Santa Clara University. My goal is to create meaningful (and easy-to-use) solutions using technology.</p>
        <Button className="p-3" color="info" outline href={'https://www.linkedin.com/in/alexa-grau/'}>Check out my LinkedIn</Button>
    </div>
  );
}

export default Landing;