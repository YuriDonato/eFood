import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Listagem from '../../components/Listagem'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <div>
        <Header page="home" />
        <Listagem restaurants={restaurants} />
        <Footer />
      </div>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
