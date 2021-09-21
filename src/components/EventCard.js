import React from 'react';
import { Card, CardImg, Button, CardTitle, CardText, Row, Col, Container, CardBody } from 'reactstrap';


var sourceName = "";
var icon = "";

export default class EventCard extends React.Component
{
  constructor(props)
  {
    super(props)
  }  

  eventCheck = () => {  
    if (this.props.name === "birthday")
    {  
      sourceName = "birthday.jpg";
      icon = "fa fa-birthday-cake fa-2x";
    }
    if( this.props.name === "100m race")
    {
      sourceName = "race.jpg";
      icon = "fa fa-trophy fa-2x";
    }
  }

  render()
  {
    return (
        <Container>

            <Card >
              <CardBody>
                {this.eventCheck()}
                <CardImg src={sourceName} alt="Event image" style={{justifyContent:'center', width:"18em", height:"8em"}}/>
                
                <Row style={{marginTop:"1em"}}>
                  <Col sm="3" style={{textAlign:"left"}}><i class={icon}></i></Col>
                  <Col sm="6"><h4>{this.props.name}</h4></Col>
                  <Col sm="3" style={{textAlign:"right"}}><i class="fa fa-users fa-2x"></i></Col>
                </Row>
                <Row style={{marginTop:"1em"}}>
                  <Col style={{textAlign:"left"}}>Venue: {this.props.venue} </Col>
                  <Col style={{textAlign:"right"}}><i class="fa fa-user fa-2x"></i> {this.props.ticketsLeft}</Col>
                </Row>  
                <Row>
                  <Col style={{textAlign:"left"}}>Time: {this.props.time} </Col>
                  <Col style={{textAlign:"right"}}>Date: {this.props.date} </Col>
                </Row>

              </CardBody>
            </Card>

        </Container>
    );
  }
}