import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
<<<<<<< HEAD
    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ));

    return <div className="ui cards">{petCards}</div>;
=======
    
    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ));
    
    return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>
>>>>>>> 793bfb9262fb430f8e55c2bb90cd2e465bb15a6f
  }
}

export default PetBrowser;