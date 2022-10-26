import axios from "axios";
import React, { useEffect, useState } from "react";
import { isTemplateTail } from "typescript";
import TableHtml from "./table.html";

export const TableLogic = () => {
  const [list, setList] = useState<any[]>([]);
  const [listToRender, setListToRender] = useState<any[]>([]);
  const [globalSearchList, setGlobalSearchList] = useState<any[]>([]);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
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
        it.role.toLowerCase().includes(text.toLowerCase()) ||
        it.name.toLowerCase().includes(text.toLowerCase()) ||
        it.email.toLowerCase().includes(text.toLowerCase())
    );
    console.log(result);
    setGlobalSearchList(result);
    if (result.length > 10) setListToRender(result.slice(0, 10));
    else setListToRender(result);
  };

  const handleCheckBoxChange = (e: any) => {
    let temp: React.SetStateAction<any[]> = [];
    if (e.target.value === "All") {
      let checkboxes = document.getElementsByName("body") as unknown as
        | HTMLInputElement[]
        | [];
      for (let i = 0; i < checkboxes?.length; i++) {
        checkboxes[i].checked = e.target.checked;
        if (e.target.checked) temp.push(checkboxes[i].value);
      }
      setSelectedItems(temp);
    } else {
      temp = [...selectedItems];
      if (e.target.checked) {
        temp.push(e.target.value);
        setSelectedItems(temp);
      } else {
        temp = temp.filter(it => it !== e.target.value);
        setSelectedItems(temp);
      }
    }
    console.log(temp);
  };

  return (
    <TableHtml
      list={listToRender}
      handleSearch={handleSearch}
      handleCheckBoxChange={handleCheckBoxChange}
    />
  );
};
