import axios from "axios";
import { useEffect, useState } from "react";

const TableCrud = () => {
  const apiUrl = "http://localhost:5000/data";
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [status, setStatus] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    getTable();
  }, []);
  //below syntax for get//
  const getTable = async () => {
    const resp = await axios.get(apiUrl);
    setData(resp.data);
  };

  const postData = async () => {
    const newData = {
      id: (data.length + 1).toString(),
      name: name,
      age: age,
      status: status,
      company: company,
    };

    //below syntax for post//
    await axios.post(apiUrl, newData);
    setName("");
    setAge("");
    setStatus("");
    setCompany("");
    getTable();
  };
  //below sysntax for delete//
  const deleteData = async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    getTable();
  };

  let c = "Beautiful";
  const updateData = async () => {
    //We can make this as dynamic but it takes more time and need to write more coding
    const updateItem = {
      id: 1,
      name: "Gayana 1 Updated",
      age: 2,
      status: "Committed",
      company: "Sncheron",
    };
    //As we are hardcoding 1 over here only 1st id only gets updated
    //below sysntax for update//
    await axios.put(`${apiUrl}/1`, updateItem);
    console.log(`GAYANA is a ${c} person`);
    getTable();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> Name</th>
            <th> Age</th>
            <th> Status</th>
            <th> Company</th>
            <th> Actions</th>
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
                  <p onClick={() => deleteData(arr.id)}> D</p>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </td>
            <td>
              <input type="text" onChange={(e) => setAge(e.target.value)} />
            </td>
            <td>
              <input type="text" onChange={(e) => setStatus(e.target.value)} />
            </td>
            <td>
              <input type="text" onChange={(e) => setCompany(e.target.value)} />
            </td>
          </tr>
        </tbody>
      </table>
      <button style={{ marginTop: "20px" }} onClick={postData}>
        {" "}
        Add new data
      </button>
      <button onClick={updateData}> Update 1st data</button>
    </div>
  );
};

export default TableCrud;
