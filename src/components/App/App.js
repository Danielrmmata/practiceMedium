import React from "react"
import "./App.scss"
import Home from "../pages/home/home.js"
import PostCreate from "../pages/post/createPost/createPost.js"
import Blog from "../pages/blog/blog.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "../../layouts/header/header.js"
import PostView from "../pages/post/view/view.js"

export default function App() {

    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} >
          <Route index element={<Home />} />
        </Route>
        <Route path="/blog" element={<Header />} >
          <Route index element={<Blog />} />
        </Route>
        <Route path="/post" element={<Header />} >
          <Route path=":id" element={<PostView />} />
          <Route path="create" element={<PostCreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
}