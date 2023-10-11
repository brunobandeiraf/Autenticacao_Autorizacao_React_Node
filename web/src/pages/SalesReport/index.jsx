import { Container } from "./styles";
import { useEffect } from "react";

import { api } from "../../services/api";

export function SalesReport() {

  useEffect(() => {
    api
      .get('/sale', { withCredentials: true }) // Para passar o cookie autorizando a rota
      .then(( response ) => console.log(response.data ));

  },[])

  return (
    <Container>
      <h1>Relatório de Vendas</h1>
    </Container>

  )
}