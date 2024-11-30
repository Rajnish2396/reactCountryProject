import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";
import Home from './component/Home'
import SingleCountry from "./component/SingleCountry";
import Page404 from "./component/Page404";
import  './style.css'



const root = createRoot(document.querySelector("#root"))
root.render(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/:name?"  element={<SingleCountry />} />
            <Route path="*" element={<Page404 data="Your Data Not Found" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
)