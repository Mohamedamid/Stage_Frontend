import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Box } from "@mui/material";
import ModalViewDPF from "../Buttons/ModalViewPDF/ModalPDF";
import Recharger from "../Buttons/Recharger/Recharger";
import ReportIcon from "../Buttons/ReportProblem/Report";

interface UserData {
  id: number;
  patient: string;
  docteur: string;
  date: string;
  status: string;
  pdf?: string;
}

interface UserRow {
  id: number;
  patient: string;
  doctor: string;
  date: string;
  status: string;
  pdf?: string;
}

interface FetchUsersParams {
  page: number;
  limit: number;
}

interface FetchUsersResponse {
  data: UserData[];
  total: number;
}

interface ApiResponse {
  content: UserData[];
  totalElements: number;
}

const fetchUsers = async ({ page, limit }: FetchUsersParams): Promise<FetchUsersResponse> => {
  const res = await fetch(`http://localhost:8080/users/user?page=${page}&size=${limit}`);
  const json = await res.json() as ApiResponse;
  return { data: json.content, total: json.totalElements };
};

const UserTable: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const { data, isLoading, error } = useQuery<FetchUsersResponse>({
    queryKey: ["users", page, rowsPerPage],
    queryFn: () => fetchUsers({ page, limit: rowsPerPage }),
    staleTime: 5000,
  });

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement.</p>;
  if (!data) return <p>Aucune donnée disponible.</p>;

  const rows: UserRow[] = data ? data.data.map((user: UserData) => ({
    id: user.id,
    patient: user.patient,
    doctor: user.docteur,
    date: user.date,
    status: user.status,
    pdf: user.pdf,
  })) : [];

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "valide": return "green";
      case "No valide": return "red";
      case "en attente": return "orange";
      default: return "black";
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", textAlign: "center", padding: 2 }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#e1e1e1' }}>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Patient</TableCell>
              <TableCell align="center">Docteur</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">PDF</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.patient}</TableCell>
                <TableCell align="center">{row.doctor}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center" sx={{ color: getStatusColor(row.status), fontWeight: 'bold' }}>
                  {row.status}
                </TableCell>
                <TableCell align="center">{row.pdf}</TableCell>
                <TableCell align="center">
                  <Box display="flex" justifyContent="center" gap={1}>
                    <ModalViewDPF />
                    <ReportIcon />
                    <Recharger />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={data ? data.total : 0}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15, 20]}
      />
    </Paper>
  );
};

export default UserTable;
