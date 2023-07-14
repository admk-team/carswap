import NavBar2 from '@/Components/Navbar/NabBar2'
import Footer from '../Footer/Footer'
import Frame from '@/Components/Frames/Frame'
import EditCarForm from '@/Components/Forms/EditCarForm'

const EditCar = ({auth,brands,car}:any) => {
  return (
    <>
      <NavBar2 auth={auth}/>
      <Frame/>
      <EditCarForm auth={auth} brands={brands} car={car}/>
      <Footer/>
    </>
  )
}

export default EditCar
