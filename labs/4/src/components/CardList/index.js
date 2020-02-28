import React from "react";
import Card from "../Card/";
import data from "../../data.json";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cards: data.cards};
  }
  removeCard = (e) => {  
    // Get the 'datatitle' attribute
    let datatitle = e.target.getAttribute("datatitle");
    // Make a local copy of cards
    let localCards = this.state.cards;
    // Filter against the 'datatitle' name
    let changedCards = localCards.filter((card) => {
      return card.title !== datatitle;
    });
    this.setState({cards: changedCards});
  }
  render() {
    return(
      <div>
        {
          this.state.cards.map((card, id) => {
          return <Card 
              key={id}
              title={card.title} 
              content={card.content}
              removecard={this.removeCard}
              />
          })
        }
      </div>
    );
  }
}

export default CardList;