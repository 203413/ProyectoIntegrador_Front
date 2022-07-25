import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { getDatos } from '../services/Api'
import { Table } from '../Table/Table';
//import { RegadoTable } from './RegadoTable';
import { Nav } from '../NavBar/NavBar'




export function Inicio() {
    const [datos, setDatos] = useState([{ fecha: "1" }]);

    useEffect(() => {
        getDatos().then((response) => {
            setDatos(response.data)
        })
    }, []);

    if (localStorage.getItem('user') === 'true') {
        return (
            <div >
                <Nav />
                <div >
                    <h1 >
                        Ultimos datos recoletados de la planta
                    </h1>

                    <div >
                        {/* Tabla del ultimo dato obtenido del hardware */}
                        <table className="table table-striped ">

                            <thead className='thead-dark'>
                                <tr className='table-primary'>
                                    <th colSpan="7"><p className="text-center">Tabla de datos recolectados</p></th>
                                </tr>
                                <tr className='text-center table-primary'>
                                    <th>Id</th>
                                    <th>Humedad</th>
                                    <th>Temperatura</th>
                                    <th>Humedad de suelo</th>
                                    <th>Nivel de agua</th>
                                    <th>Estado de bomba</th>
                                    <th>Fecha</th>
                                </tr>
                            </thead>

                            <tbody >
                                <Table {...datos[datos.length - 1]} />


                            </tbody>
                        </table>

                        {/* Tabla del historial de regado */}
                        <table className="table table-striped">

            
                        </table>
                    </div>
                </div>
            </div>
        )
    } else {
        return <Navigate to='/' />
    }



}