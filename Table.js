import React from 'react'

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.linkData.map((row, index) => {
  return (
  <tr>
  
  <td>{row.linkName}</td>
  
  <td><a href={row.url}>{row.url}</a></td>

  <td><button onClick={() => props.removeLink(index)}>Delete</button></td>
  </tr>
  
  );
  });
  
  return <tbody> {rows} </tbody>;
  }

const Table = (props) => {
  {
    /*TODO - return <table> component, TableHeader and TableBody  and pass props!*/
    const Table = (props) => {
      return (
      <div>
      {TableHeader()}
      {TableBody(props)}
      </div>
      )
      }

      
    return <table></table>
  }
}

export default Table
