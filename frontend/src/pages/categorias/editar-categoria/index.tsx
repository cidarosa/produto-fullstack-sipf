/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { CategoriaDTO } from "../../../models/categoria";
import { findById } from "../../../services/categoria-service";
import axios from "axios";

export default function EditarCategoria() {
  const { categoriaId } = useParams();

  const [categoria, setCategoria] = useState<CategoriaDTO>();
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategoriaData() {
      if (categoriaId) {
        try {
          const data = await findById(Number(categoriaId));
          setCategoria(data);
        } catch (error: unknown) {
          let msg = "Erro ao excluir categoria";
          if (axios.isAxiosError(error) && error.response) {
            msg = error.response.data.error || msg;
          }
          setError(msg);
          setTimeout(() => setError(null), 4000);
          navigate("/categorias");
        }
      }
    }
    fetchCategoriaData();
  }, [categoriaId, navigate]);

  return (
    <Box sx={{ mt: 2, p: 4 }}>
      <Typography variant="h4" component="h1">
        Editar Categoria
      </Typography>
    </Box>
  );
}
