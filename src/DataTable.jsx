
import React, { useEffect, useState } from 'react'

import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
const DataTable = () => {


  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: ""
  });
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(false);
  useEffect(() => {
    if (!editId) return;

    let selectedItem = document.querySelectorAll(`[id='${editId}']`);
    selectedItem[0].focus();
  }, [editId]);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, })
  };

  const handleAddClick = () => {
    if (formData.name && formData.gender && formData.age) {
      const newItem = {
        id: Date.now(),
        name: formData.name,
        gender: formData.gender,
        age: formData.age,
      };

      setData([...data, newItem]);
      setFormData({ name: "", gender: "", age: "" });
    }
  }

  const handleDelete = (id) => {
    const updatedList = data.filter((item) => item.id !== id);
    setData(updatedList);
  }
  // console.log(formData);
  // console.log(data);

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
              value={formData.name}
              onChange={handleInputChange}
            />


            {/* Gender */}
            <input
              type="text"
              placeholder='Gender'
              name='gender'
              value={formData.gender}
              onChange={handleInputChange}
            />

            {/* Age */}
            <input
              type="text"
              placeholder='Age'
              name='age'
              value={formData.age}
              onChange={handleInputChange}
            />

          </div>

          {/* add button for adding data */}
          <button className='add' onClick={handleAddClick}>Add</button>
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
              {/* hard code removed */}

              {/*<tr>
                <td>Ashiq</td>
                <td>Male</td>
                <td>24</td>

                <td className='actions'>
                  <button className='edit'><MdEdit /></button>
                  <button className='delete'><MdDelete /></button>
                </td>
              </tr> */}

              {
                data ? (data.map((item) => (
                  <tr key={item.id}>
                    <td key={item.id} contentEditable={editId === item.id}>{item.name}</td>
                    <td key={item.id} contentEditable={editId === item.id}>{item.gender}</td>
                    <td key={item.id} contentEditable={editId === item.id}>{item.age}</td>

                    <td className='actions'>
                      <button className='edit' onClick={() => setEditId(item.id)}>
                        <MdEdit />
                      </button>
                      <button className='delete' onClick={() => handleDelete(item.id)}>
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))) : null
              }


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