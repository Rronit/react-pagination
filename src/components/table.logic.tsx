import axios from "axios";
import React, { useEffect, useState } from "react";
import TableHtml from "./table.html";

export const TableLogic = () => {
  const [list, setList] = useState<any[]>([]);
  const getData = async () => {
    let resp = (
      await axios.get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      )
    ).data;
    setList(resp);
  };

  useEffect(() => {
    console.log(">>>>>>>>>");

    getData();
  }, []);

  return <TableHtml list={list} />;
};
