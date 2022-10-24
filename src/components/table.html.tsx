import React from "react";

const TableHtml = ({ list }: { list: any[] }) => {
  console.log(list);

  return <div>here is the html part.......</div>;
};

export default React.memo(TableHtml);
