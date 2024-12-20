
import React from 'react'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import SinglePage from '../_components/SinglePage'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "LottieFiles Single",
  description: "Generated by create next app",
};

const page = () => {
  
  return (
    <>
    <Header/>
    <SinglePage/>
    <Footer/>
    </>
  )
}

export default page
