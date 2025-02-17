import axios from "axios";
import { useEffect, useState } from "react";

const CRUD1 = () => {
  const apiUrl = "http://localhost:5000/data";
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [status, setStatus] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    getTable();
  }, []);

  const getTable = async () => {
    const resp = await axios.get(apiUrl);
    setData(resp.data);
  };

  const postData = async () => {
    const newData = {
      id: (data.lentgh + 1).tostring(),
      name: name,
      age: age,
      status: status,
      company: company,
    };
    await axios.post(apiUrl, newData);
    setName("");
    setAge("");
    setStatus("");
    setCompany("");
    getTable();
  };

  const deleteData = async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    getTable();
  };

  const updateData = async () => {
    const updateItem = {
      id: 5,
      name: "Gayana",
      age: 27,
      status: "single",
      company: "synechron",
    };
    await axios.put(`1${apiUrl}/1`, updateItem);
    console.log(`Gayana is $(c) person`);
    getTable();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th>Age</th>
            <th>Status</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((arr) => {
            return (
              <tr>
                <td> {arr.name}</td>
                <td> {arr.age}</td>
                <td> {arr.status}</td>
                <td> {arr.company}</td>
                <td>
                  <p onClick={() => deleteData(arr.id)}>D</p>
                </td>
              </tr>
            );
          })}

          <tr>
            <td>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </td>
            <td>
              <input
                type="number"
                onChange={(e) => setAge(e.target.value)}
              ></input>
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => setStatus(e.target.value)}
              ></input>
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => setCompany(e.target.value)}
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
      <button style={{ marginTop: "20px" }} onClick={postData}>
        {""}
        add new data
      </button>
      <button onClick={updateData}>update 1st data</button>
    </div>
  );
};
export default CRUD1;
