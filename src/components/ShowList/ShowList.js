import React from "react";

export const ShowList = ({ data, component: Component }) => {
  return data.map((item) => <Component data={item} key={item._id} />);
};
