import Demo from "@/views/Demo"
import React from "react"
import { Navigate } from "react-router-dom"
// import Entire from "@/views/Entire"

const Home = React.lazy(() => import('@/views/Home'))
const Detail = React.lazy(() => import('@/views/Detail'))
const Entire = React.lazy(() => import('@/views/Entire'))
// const Main = React.lazy(() => import('@/views/Home/c-cpns/Main'))

const routes = [
  {
    path: '/',
    element: <Navigate to='/home'/>
  },
  {
    path: '/home',
    element: <Home/>,
    // children: [
    //   {
    //     path: '',
    //     element: <Navigate to='main'/>
    //   },
    //   {
    //     path: 'main',
    //     element: <Main/>
    //   }
    // ]
  },
  {
    path: '/detail',
    element: <Detail/>
  },
  {
    path: '/entire',
    element: <Entire/>
  },
  {
    path: '/demo',
    element: <Demo/>
  }
]


export default routes