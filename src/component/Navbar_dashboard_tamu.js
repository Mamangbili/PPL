import React from 'react';
import { Card_dashboard } from './card_dasboard';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Beranda from './Beranda';
import App from '../App';
import { useState } from 'react';

export default function Navbar_dashboard_tamu({usaha_id}) {

    const [cari, setCari] = useState()

    const navigate = useNavigate()
    function to_myToko(e) {
        navigate(`/dashboard-tamu/toko/${usaha_id}`)
        window.location.reload()
    }
    
    
    function onChangeCari(){
        navigate('/dashboard/beranda')
    }
    return (
        <>
            <nav className='border-b-2'>
                <ul className="flex justify-around p-5 text-3xl font-bold w-full border-b-3 bg-sky-300 shadow-md shadow-sky-300">

                    <li className=" block h-10 rounded-full bg-slate-200">
                        <Link to='/' className='p-4' >Halaman Utama</Link>
                    </li>
                    <li className=" block h-10 rounded-full bg-slate-200">
                        <Link to='beranda' className='p-4' >Beranda</Link>
                    </li>

                
                </ul>
            </nav>


        </>
    )
};
