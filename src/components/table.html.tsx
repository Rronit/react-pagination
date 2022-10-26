import React from "react";
import "./table.style.css";

const TableHtml = ({
  list,
  handleSearch,
  handleCheckBoxChange
}: {
  list: any[];
  handleSearch: (e: any) => void;
  handleCheckBoxChange: (e: any) => void;
}) => {
  console.log(list);

  return (
    <>
      <input
        type="search"
        id="tsearch"
        name="tsearch"
        placeholder="Search by name, email or role"
        onChange={handleSearch}
      ></input>
      <table>
        <tr>
          <th>
            <input
              type="checkbox"
              id="header"
              name="header"
              value="All"
              onChange={handleCheckBoxChange}
            ></input>
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
        {list.map((item, ind) => (
          <tr key={ind}>
            <td>
              <input
                type="checkbox"
                id={item.email}
                name="body"
                value={item.email}
                onChange={handleCheckBoxChange}
              ></input>
            </td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default React.memo(TableHtml);
