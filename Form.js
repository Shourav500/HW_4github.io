import { useState } from 'react'

const Form = () => {
  const handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
            if(event.target.id === "link")

            this.setState({ linkName: event.target.value}); // update the linkname in state

            else

            this.setState({ url: event.target.value});

  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */ // addNew was passed as props from LinkContainer
        let newFavLink = {linkName: this.state.linkName, url: this.state.url};

        this.props.addNew(newFavLink); // addNew was passed as props from LinkContainer

        this.setState({ linkName: '', url: ''}); // reset the states

  }



  return(

    <form>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}

      <label for="link">Link Name : </label>

      <input type="text" id="link" onChange={(event) =>this.handleChange(event)}/>

      <label htmlFor="url">URL : </label>

      <input type="text" id="url" value={this.state.url} onChange={(event) =>this.handleChange(event)}/>

      <button type="submit" onClick={(e)=>this.onFormSubmit(e)}>Submit</button>

</form>
  )
 
}

export default Form;
