"use client"
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SinglePage from '../components/SinglePage'
import { useParams } from 'next/navigation'


const page = () => {
  const {slug} = useParams()

  console.log("-----",slug)
  return (
    <>
    <Header/>
    <SinglePage/>
    <Footer/>
    </>
  )
}

export default page