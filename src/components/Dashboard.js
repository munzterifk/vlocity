import React, { Component } from 'react';
import axios from 'axios';
import {Accordion, Card, Image} from 'react-bootstrap';
// import imgs from '../resources/img';

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      recipe:[],
      specials:[]
    }
  
  }
  
  componentDidMount() {
    this.getRecipes();
    this.getSpecials();
  }

  getRecipes() {
    axios.get(`http://localhost:3001/recipes`)
    .then((res) => {
      this.setState({
        recipe: res.data
      })
    })
  };

  getSpecials() {
    axios.get(`http://localhost:3001/specials`)
    .then((res) => {
      this.setState({
          specials: res.data
      })
    })
  };

  render(){ 
    console.log(this.state)
    return (


      <div className="container py-5 bg-gray">
        <Accordion id="recipe-accordion" defaultActiveKey="0">
          
        {this.state.recipe.map((e, key)=> {
            return ( 
            <Card key={key}>
              <Accordion.Toggle className="d-flex align-items-center justify-content-sm-start" as={Card.Header} eventKey={key}>
                <Image className="recipe-list-cropped-img" src={e.images.small}/>
                <div className="d-flex mr-auto flex-column pl-3">
                  <span className="accordion-title"> {e.title} </span>
                  
                  {this.state.specials.map((spcl, key) => {
                    console.log(e.uuid);
                    console.log(spcl.ingredientId);

                    // if (e.uuid === spcl.ingredientId) {
                    //   console.log('matched')
                    // }
                  })}
                  
                  <span className="accordion-subtitle text-muted">SERVINGS: {e.servings} | PREPTIME: {e.prepTime} | COOKTIME: {e.cookTime}</span>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={key}>
                <Card.Body>
                  <p>{e.description}</p>
                  <h6>Ingredients</h6>
                  <ul>
                    {e.ingredients.map((i, key)=> {
                      return(
                        <li>{i.name && i.name}{i.amount && ', '+i.amount} {i.measurement && i.measurement}</li>
                      )
                    })}
                  </ul>
                  
                  <h6>Directions</h6>
                  <ul>
                    {e.directions.map((d, key)=> {
                      return(
                        <li>{d.instructions}</li>
                      )
                    })}
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          )}
          )}
        </Accordion>
      </div>
    )
  }
}

export default Dashboard;