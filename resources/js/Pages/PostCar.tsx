
import NavBar2 from '@/Components/Navbar/NabBar2'

import React from 'react'
import Footer from './Footer/Footer'
import Frame from '@/Components/Frames/Frame'
import CarInfohtmlForm from '@/Components/Forms/CarInfoForm'

import CondtionalAssForm from '@/Components/Forms/CondtionalAssForm'
import CheckBoxForm from '@/Components/Forms/CheckBoxForm'
import FormButton from '@/Components/Forms/FormButton'

const PostCar = () => {
  return (
    <>
      <NavBar2/>
      <Frame/>
      <CarInfohtmlForm/>
      <Footer/>
    </>
  )
}

export default PostCar
