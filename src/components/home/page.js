import React, { } from 'react';
import './styles.css';

function Page() {

    return (
        <div className="home-container">
            <div className="container-alpedo">
            <div className="banner-panel">
                <div className="title-home">Nuestro producto</div>
                <br />
                <div className="dropdown-divider"></div>
                <br />
                <div className="body-home">
                    DynaCards es un sistema de procesamiento de cartas dinamométricas cuyo objetivo es la detección temprana de las problemáticas de tus pozos
                </div>
            </div>
            <br />
            <div className="grid">
                <div className="columna">Seguí tus pozos en tiempo real</div>
                
                <div className="columna">Detectá problemas justo a tiempo</div>
               
                <div id="last-column">Predecí para salvar tu futuro</div>
            </div>
            </div>
        </div>
    )

}

export default Page;