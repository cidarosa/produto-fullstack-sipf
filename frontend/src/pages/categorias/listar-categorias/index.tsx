/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import type { CategoriaDTO } from "../../../models/categoria";

import * as categoriaService from "../../../services/categoria-service.ts";

export default function ListarCategorias() {
  const [categorias, setCategorias] = useState<CategoriaDTO[]>([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      const data = await categoriaService.findAll();
      setCategorias(data);
    };
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Página de Listagem de Categorias
      </Typography>

      <Typography variant="body1">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nome</TableCell>
              </TableRow>
            </TableHead>
            <TableCell>1</TableCell>
            <TableCell>Eletrônicos</TableCell>
          </Table>
        </TableContainer>
      </Typography>
    </Box>
  );
}
