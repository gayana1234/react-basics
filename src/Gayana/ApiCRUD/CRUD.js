import axios from "axios";
import { useEffect, useState } from "react";

const CRUD = () => {
  const apiURL = "http://localhost:5000/data";
  const [data, setDta] = useState([]);
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    getTable();
  }, []);

  const getTable = async () => {
    const resp = await axios.get(apiURL);
    setDta(resp.data);
  };

  const postData = async () => {
    const newData = {
      id: (data.length + 1).toString,
      name: name,
      age: age,
      status: status,
      company: company,
    };
    await axios.post(apiURL, newData);
    setName("");
    setAge("");
    setStatus("");
    setCompany("");
    getTable("");
  };

  const deleteData = async (id) => {
    await axios.delete(`${apiURL}/${id}`);
    getTable();
  };
  const updateData = async () => {
    const updateItem = {
      id: 1,
      name: "Gayana",
      age: 4,
      status: "Single",
      company: "SAI",
    };
    await axios.put(`1${apiURL}/1`, updateItem);
    console.log(`Gayana is a $(c) pperson`);
    getTable();
  };

  const handleclick = (gayana) => {
    console.log("Clicked", gayana);
  };
  const handleclick2 = (CRUD) => {
    console.log("Clicked", CRUD);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name NNNN</th>
            <th>age</th>
            <th>company</th>
            <th>status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((arr) => {
            return (
              <tr>
                <td onClick={() => handleclick(arr)}>{arr.name}</td>
                <td onClick={() => handleclick2(arr)}>{arr.age}</td>
                <td>{arr.status}</td>
                <td>{arr.company}</td>
                <td>
                  <p onClick={() => deleteData(arr.id)}>D</p>
                </td>
              </tr>
            );
          })}

          <tr>
            <td>
              <input type="Text" onChange={(e) => setName(e.target.value)} />
            </td>
            <td>
              <input type="" onChange={(e) => setAge(e.target.value)} />
            </td>
            <td>
              <input type="" onChange={(e) => setStatus(e.target.value)} />
            </td>
            <td>
              <input type="" onChange={(e) => setCompany(e.target.value)} />
            </td>
          </tr>
        </tbody>
      </table>
      <button style={{ marginTop: "20px" }} onClick={postData}>
        {" "}
        add a new data
      </button>
      <button onClick={updateData}>update 1st data</button>
    </div>
  );
};
export default CRUD;
