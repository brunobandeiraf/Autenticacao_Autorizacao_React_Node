import { Container } from "./styles";

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