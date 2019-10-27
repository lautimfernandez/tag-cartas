import React, { } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Page() {

    return (
        <div className="home-container">

            <Link to={"/pozos"}>
                <button type="button" className="btn btn-outline btn-lg">
                    Ver Pozos
                </button>
            </Link>

        </div>
    )

}

export default Page;