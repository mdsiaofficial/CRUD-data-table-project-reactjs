
import React from 'react'

const DataTable = () => {
  return (
    <div>
      <div className="container">
        <div className="add-container">
          <div className="info-container">

            {/* Name */}
            <input
              type="text"
              placeholder='Name'
              name='name'
              value={""}
              onChange={() => { }}
            />


            {/* Gender */}
            <input
              type="text"
              placeholder='Gender'
              name='gender'
              value={""}
              onChange={() => { }}
            />

            {/* Age */}
            <input
              type="text"
              placeholder='Age'
              name='age'
              value={""}
              onChange={() => { }}
            />

          </div>

          {/* add button for adding data */}
          <button className='add'>Add</button>
        </div>

        <div className="search-table-container">

          {/* search input */}
          <input
            type="text"
            placeholder='Search by name'
            value={""}
            onChange={() => { }}
            className='search-input'
          />

          {/* data table showing here */}
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>
              <tr>
                <td>Ashiq</td>
                <td>Male</td>
                <td>24</td>

                <td>
                  <button className='edit'>Edit</button>
                  <button className='delete'>Delete</button>
                </td>
              </tr>
            </tbody>

            
          </table>

          {/* pagination here */}
          <div className="pagination"></div>
        </div>
      </div>

    </div>
  )
}

export default DataTable