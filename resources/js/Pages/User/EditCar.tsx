import NavBar2 from '@/Components/Navbar/NabBar2'
import Footer from '../Footer/Footer'
import Frame from '@/Components/Frames/Frame'
import EditCarForm from '@/Components/Forms/EditCarForm'

const EditCar = ({auth,brands,car,categories}:any) => {
  return (
    <>
      <NavBar2 auth={auth}/>
    <div className='mx-auto max-w-screen-xl w-full h-full mt-10'>
        <p className='font-bold text-2xl text-gray-950'>Here you can edit your car :</p>
    </div>
      <EditCarForm auth={auth} brands={brands} car={car} categories={categories}/>
      <Footer auth={auth}/>
    </>
  )
}

export default EditCar
