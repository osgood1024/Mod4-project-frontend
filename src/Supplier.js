import React from 'react'

export const Supplier =() => (

    <table className="ui celled striped padded table">
    <p>total amount of money</p>
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Name of products</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Quantity</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Suppliers' name (company)</h3>
          </th>
        </tr>
        {/* {render all the inventory index here} */}
      </tbody>
    </table>

)