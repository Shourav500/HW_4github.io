import { useState } from 'react'
// import Table from './Table';
import Table from ' ';
// import Form from './Form';

const LinkContainer = (props) => {
  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
            const tempArray = this.state.favLinks;

            tempArray.splice(index, 1); // it will remove one element starting from the index
            
            this.setState ({ favLinks : tempArray }); // setting the new state
          
          }

  const handleSubmit = (favLink) => {
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
            this.setState({

              favLinks: [...this.state.favLinks, favLink] // spread operator which will append the new link at the end
              
              });
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      {/*TODO - Add Table Component */}
      <Table linkData= {this.state.favLinks} removeLink= {(index) => this.removeCharacter(index)} />
      <br />
      

      <h3>Add New</h3>
      {/*TODO - Add Form Component */}
      <Form addNew= {(favLink) => handleSubmit(favLink)} />
    </div>
  )
}

export default LinkContainer
