import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Head } from "@inertiajs/react";
import Navbar from "./templates/Navbar";
import Dashboard from "./page/dashboard";
import Footer from "./templates/footer";
import "tw-elements";

export default function Homepage(props) {
    // console.log(props);
    return (
        <div>
            <Head title={props.title} />
            <BrowserRouter>
                <Navbar />
                <Dashboard />
                {/* <Footer /> */}
            </BrowserRouter>
            {/* <div className="flex justify-center items-center min-h-screen text-2xl">
                <Head title={props.title} />
                {/* <h1>{props.description}</h1>}
                <div>
                    {props.data ? (
                        props.data.map((dt, i) => {
                            return (
                                <div key={i} className="text-center">
                                    <p>{dt.title}</p>
                                    <p>{dt.category}</p>
                                </div>
                            );
                        })
                    ) : (
                        <p>Tidak Ada Data</p>
                    )}
                </div>
            </div> */}
        </div>
    );
}
