import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';


function Accordian() {
  const accordionItems = [
    {
      eventKey: "0",
      header: "Send, sign, and track",
      body: "Create an on-brand and fully embedded signing experience for your signers with the fastest to implement eSignature API.",
      link: 'Learn more'
    },
    {
      eventKey: "1",
      header: "Stay on top of progress",
      body: `Monitor and manage your agreements easily from a centralized dashboard.`,
      link: 'Learn more'
    },
    {
      eventKey: "2",
      header: "Build it into your workflow",
      body: `Integrate seamlessly with your existing tools and processes.`,
      link: 'Learn more'
    },
    {
      eventKey: "3",
      header: "Verify your signers",
      body: `Ensure the authenticity of your signers with advanced verification features.`,
      link: 'Learn more'
    }
  ];

  return (
    <div className="container d-flex text-center  ">

      <div>
      <h2 className="workflow-heading">Build Efficiency Into Your Agreement Workflows</h2>

      </div>
     
      <div className='container2'>
       
        <Accordion className='accordion-custom ' defaultActiveKey="0">
          {accordionItems.map((item, index) => (
            <Accordion.Item eventKey={item.eventKey} key={index}>
              <Accordion.Header className='header'>{item.header}</Accordion.Header>
              <Accordion.Body className='body'>
                {item.body}
                <br />
                <a href="#" className="learn-more-link">{item.link}</a>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        
        <div className='image-container'>
        <img className='image image1' src="image01.png" alt="Code Example" />
        {/* <img className='image image2' src="image02.png" alt="People Working" /> */}
      </div>
      </div>
      
    </div>
  );
}

export default Accordian;
