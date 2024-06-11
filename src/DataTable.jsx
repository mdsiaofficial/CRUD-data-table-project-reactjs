import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const DataTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
  });
  const [data, setData] = useState([]);

  const [edit, setEdit] = useState({
    editable: false,
    id: null,
    updateData: {},
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
  };

  const handleDelete = (id) => {
    const updatedList = data.filter((item) => item.id !== id);
    setData(updatedList);
  };

  const editHandler = (item) => {
    setEdit({ editable: true, id: item.id, updateData: item });
  };

  const saveEdit = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, ...edit.updateData } : item
    );
    setData(updatedData);
    setEdit({ editable: false, id: null, updateData: {} });
  };

  const handleEditChange = (e, key) => {
    setEdit((prev) => ({
      ...prev,
      updateData: { ...prev.updateData, [key]: e.target.innerText },
    }));
  };

  return (
    <div>
      <div className="container">
        <div className="add-container">
          <div className="info-container">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>
          <button className="add" onClick={handleAddClick}>
            Add
          </button>
        </div>

        <div className="search-table-container">
          <input
            type="text"
            placeholder="Search by name"
            value={""}
            onChange={() => {}}
            className="search-input"
          />

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
              {data.map((item) => (
                <tr key={item.id}>
                  <td
                    contentEditable={edit.editable && edit.id === item.id}
                    suppressContentEditableWarning={true}
                    onBlur={(e) => handleEditChange(e, "name")}
                  >
                    {edit.editable && edit.id === item.id
                      ? edit.updateData.name
                      : item.name}
                  </td>
                  <td
                    contentEditable={edit.editable && edit.id === item.id}
                    suppressContentEditableWarning={true}
                    onBlur={(e) => handleEditChange(e, "gender")}
                  >
                    {edit.editable && edit.id === item.id
                      ? edit.updateData.gender
                      : item.gender}
                  </td>
                  <td
                    contentEditable={edit.editable && edit.id === item.id}
                    suppressContentEditableWarning={true}
                    onBlur={(e) => handleEditChange(e, "age")}
                  >
                    {edit.editable && edit.id === item.id
                      ? edit.updateData.age
                      : item.age}
                  </td>
                  <td className="actions">
                    {edit.editable && edit.id === item.id ? (
                      <button
                        className="save edit"
                        onClick={() => saveEdit(item.id)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="edit"
                        onClick={() => editHandler(item)}
                      >
                        <MdEdit />
                      </button>
                    )}
                    <button
                      className="delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
