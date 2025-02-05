import React, { useState } from "react";
import TableForm from "../CompProj3/TableForm";
import "../CompProj3/form.css";
import "../CompProj2/bttn.css";
export default function InputForm() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { id: data.length + 1, name, job, email, age };
    setData([...data, newData]);
    setName("");
    setJob("");
    setEmail("");
    setAge("");
  };

  return (
    <>
     <div className="f">
     <div className="container py-5 w-50">
        <div className="card shadow-sm">
          <div className="he">
          <div className=" card-header text-center ">
            <h2>Data Entry Form</h2>
          </div>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="job" className="form-label">
                  Job
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="job"
                  placeholder="Enter Your Job"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Your E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  placeholder="Enter Your Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>
              <div className="b">
                {" "}
                <button type="submit" className=" btn  w-100 ">
                  Add Data
                </button>
              </div>{" "}
            </form>
          </div>
        </div>
      </div>
     </div>
      <TableForm data={data} />
    </>
  );
}
