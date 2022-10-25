import axios from "axios";
import React, { useEffect, useState } from "react";
import TableHtml from "./table.html";

export const TableLogic = () => {
  const [list, setList] = useState<any[]>([]);
  const [listToRender, setListToRender] = useState<any[]>([]);
  const [globalSearchList, setGlobalSearchList] = useState<any[]>([]);
  const [globalSearchText, setGlobalSearchText] = useState<string>("");
  const getData = async () => {
    let resp = (
      await axios.get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      )
    ).data;
    setList(resp);
    setListToRender(resp.slice(0, 10));
  };

  useEffect(() => {
    getData();
  }, []);
  const handleSearch = (e: any) => {
    const text = e.target.value;
    setGlobalSearchText(text);
    if (text.length === 0) {
      setListToRender(list.slice(0, 10));
      return;
    }

    // console.log(e.target.value);
    let result = list.filter(
      it =>
        it.role.includes(text) ||
        it.name.includes(text) ||
        it.email.includes(text)
    );
    console.log(result);
    setGlobalSearchList(result);
    if (result.length > 10) setListToRender(result.slice(0, 10));
    else setListToRender(result);
  };

  return <TableHtml list={listToRender} handleSearch={handleSearch} />;
};
