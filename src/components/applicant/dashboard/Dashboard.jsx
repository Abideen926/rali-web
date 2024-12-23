'use client'
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, TablePagination } from "@mui/material";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.action.selected,
    },
  }));

  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }

  const rows = [
    createData("IT Specialist - Microsoft", "Insert email link from employer", "Yes (Date)", "No"),
    createData("Software Engineer - Google", "Insert email link from employer", "Yes (Date)", "Yes"),
    createData("Network Administrator - Cisco", "Insert email link from employer", "No", "No"),
    createData("Database Analyst - Oracle", "Insert email link from employer", "Yes (Date)", "No"),
    createData("Frontend Developer - Amazon", "Insert email link from employer", "Yes (Date)", "Yes"),
    createData("DevOps Engineer - IBM", "Insert email link from employer", "No", "No"),
    createData("Cybersecurity Analyst - Deloitte", "Insert email link from employer", "Yes (Date)", "Yes"),
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const router = useRouter()
  const handleRowClick = (row) => {
    router.push('/applicant/applications')

    // navigate(`/details/${row.id}`);
  };

  const visibleRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" }, fontWeight: 400, color: "#222222" }}>
                Jobs Applied For
              </StyledTableCell>
              <StyledTableCell sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" }, fontWeight: 400, color: "#222222" }}>
                Contacted From Employer?
              </StyledTableCell>
              <StyledTableCell sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" }, fontWeight: 400, color: "#222222" }}>
                Interview?
              </StyledTableCell>
              <StyledTableCell sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" }, fontWeight: 400, color: "#222222" }}>
                Received Job Offer?
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((row, index) => (
              <StyledTableRow key={index} onClick={() => handleRowClick(row)}>
                <StyledTableCell sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" }, fontWeight: 400, color: "#222222" }}>
                  {row.name}
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" }, fontWeight: 400, color: "#222222" }}>
                  {row.calories}
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" }, fontWeight: 400, color: "#222222" }}>
                  {row.fat}
                </StyledTableCell>
                <StyledTableCell sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" }, fontWeight: 400, color: "#222222" }}>
                  {row.carbs}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Paper sx={{ marginTop: "6px" }}>
        <TablePagination
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
            // rowsPerPageOptions={[5, 10, 25]}
        />
      </Paper>
    </Box>
  );
};

export default Dashboard;
