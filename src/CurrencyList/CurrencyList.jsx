import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const CurrencyList = () => {
  const [currencyData, getData] = useState([]);

    useEffect(() => {
      axios
        .get(
          "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
        )
        .then((res) => getData(res.data))
        .catch((err) => console.log(err));
    }, []);

  const fetchList = () => {
    let data = Object.entries(currencyData);
    return (
      <>
        {data.map(([id, val]) => {
          return (
            <tr>
              <td>{id}</td>
              <td>{val}</td>
            </tr>
          );
        })}
      </>
    );
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Currency Code</th>
          <th>Currency Name</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(currencyData).length > 0 ? (
          fetchList()
        ) : (
          <tr>
            <td colSpan={2}>No result found</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default CurrencyList;
