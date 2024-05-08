import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const columns = [
    {
      name: "Name",
      selector: row => row.name,
    },
    {
      name: "Email",
      selector: row => row.email,
    },
    {
        name: "mobileNo",
        selector: row => row.email,
      },
      {
        name: "Description",
        selector: row => row.des,
      },
      {
        name: "Address",
        selector: row => row.address,
      },
    {
      name: "Action",
      cell: (row) => (
        <Button
          onClick={() => navigate(`/view/${row.id}`)} 
          className="text-white bg-teal-400 mx-auto hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:focus:ring-teal-900"
        >
          View
        </Button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const data = [
    {
      id: 1,
      name: "Beetlejuice",
      email: "1988",
      mobileNo:"8989899",
      des:"fd",
      address:"df"
    },
    {
      id: 2,
      name: "Ghostbusters",
      email: "1984",
      mobileNo:"32r432r",
      des:"yfuj",
      address:"sa"
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ width: '70%' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <DataTable columns={columns} data={data} pagination />
      </Container>
    </React.Fragment>
  );
}

export default Dashboard;
