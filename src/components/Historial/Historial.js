import { useEffect, useState } from 'react'
import {Navigate} from 'react-router-dom'
import { getDatos } from '../services/Api'
import { Table } from '../Table/Table';
import { Nav } from '../NavBar/NavBar'
//import { RegadoTable } from './RegadoTable';
//import { Nav } from './Nav'

//import style from './css/Historiales.module.css'

export function Historial() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        getDatos().then((response) => {
            setDatos(response.data)
        })
    }, []);

    if (localStorage.getItem('user') === 'true') {
        return (
            <div >
                <Nav />
                {/* <img alt='' src='https://i.pinimg.com/originals/f5/b3/52/f5b352cc0e50776e343fae9f46636558.jpg' className={style.img}></img> */}
                <div >
                    <h1 >
                        Datos recolectados de la Planta
                    </h1>

                    <div >

                        <div>
                            {/*Tabla de datos capturados por hardware */}
                            <table >

                                <thead >
                                    <tr >
                                        <th colSpan="7"><p className="text-center">Tabla de datos recolectados</p></th>
                                    </tr>
                                    <tr className='table-primary text-center '>
                                        <th>Id</th>
                                        <th>Humedad</th>
                                        <th>Temperatura</th>
                                        <th>Humedad de suelo</th>
                                        <th>Nivel de agua</th>
                                        <th>Estado de bomba</th>
                                        <th>Fecha</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {datos.map((data) => (
                                        <Table key={data.id} {...data} />
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div>
                            {/* Tabla del historial de regado */}
                            

                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return <Navigate to='/'/>
    }
}