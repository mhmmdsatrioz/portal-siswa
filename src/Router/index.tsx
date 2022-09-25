import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Head from 'layout/Head';
import Home from 'pages/index';
import SignIn from 'pages/auth/SignIn';
import SignUp from 'pages/auth/SignUp';
// import Home from 'pages';
// import Head from 'layout/Head';

function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Head />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default index;
