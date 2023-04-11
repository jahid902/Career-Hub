import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './component/Header/Header'
import Statistics from './component/Statistics/Statistics'
import Applications from './component/Applications/Applications'
import Blogs from './component/Blogs/Blogs'
import ErrorPage from './component/ErrorPage/ErrorPage'
import JobDetails from './component/JobDetails/JobDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
    {
      path:'/',
      element : <Header></Header>,
      loader: ()=> fetch('category.json')
     },
     {
      path:'job/:id',
      element:<JobDetails></JobDetails>,
      loader: ()=> fetch('/job.json')
     },
     {
      path:'statistics',
      element: <Statistics></Statistics>
     },
     {
      path:'applications',
      element: <Applications></Applications>,
      loader: ()=> fetch('/job.json')
     },
     {
      path:'blogs',
      element:<Blogs></Blogs>
     }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
