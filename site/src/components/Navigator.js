import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PathButton from "./PathButton";
import { API_SECTION, httpGet} from "../data/ApiService";

const Navigator = () => {
    const navigate = useNavigate();
    const [tiposMascota, setTiposMascota] = useState([]);

    const closeSession = () => {
        localStorage.removeItem('token');
        navigate("/login");
    }

    useEffect(() => {
        httpGet(API_SECTION.TIPOS).then(data => {
            setTiposMascota(data);
        })
    }, []);

    return (
        <>
            <nav className="navbar navbar-light bg-light m-3">
                <form className="form-inline">
                    {
                        tiposMascota.length !== 0 && (tiposMascota.map(t => {
                            return <PathButton key={t.id} type={t} />
                        }))
                    }
                </form>
                <form className="form-inline my-2 my-lg-0">
                    <button type="button" className="btn btn-link" onClick={() => closeSession()}>Cerrar sesión</button>
                </form>
            </nav>
        </>
    );
}

export default Navigator;