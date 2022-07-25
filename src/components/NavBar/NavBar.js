const logout =()=>{
    localStorage.removeItem('user')
}

export const Nav = () => {
    return (
        <div >
            <nav >
                <a  href="http://localhost:3000/Inicio">Inicio</a>        
                <a  href="http://localhost:3000/Historial">Historial </a>
                <a  href="http://localhost:3000/menu/Estadistica">Estadísticas</a>
                <div  >
                    <a className='btn btn-danger' href="http://localhost:3000/" onClick={logout} >Logout</a>
                </div>
            </nav>
        </div>
    )
}   