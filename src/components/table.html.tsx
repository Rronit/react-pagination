import React from "react";
import "./table.style.css";

const TableHtml = ({
  list,
  handleSearch
}: {
  list: any[];
  handleSearch: (e: any) => void;
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
                name={item.email}
                value={item.email}
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
