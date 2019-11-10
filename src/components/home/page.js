import React, { } from 'react';
import './styles.css';

function Page() {

    return (
        <div className="home-container">
            <div className="container-alpedo">
                <div className="banner-panel">
                    <div className="title-home">DYNACARDS</div>
                    <br />
                    <div className="dropdown-divider"></div>
                    <br />
                    <div className="body-home">
                        DynaCards es un sistema de procesamiento de cartas dinamométricas cuyo objetivo es la detección temprana de las problemáticas de tus pozos
                </div>
                </div>
                <br />

                <div className="grid">

                    <div className="columna">
                        <img src="https://drive.google.com/uc?id=1cdmSDD1zIdLEUZkDLTquyMtwaVC6NWSn" width="200" height="200" alt="tiemporeal" />
                        <div className="texto">
                            <p>Seguí tus pozos en tiempo real</p>
                        </div>
                    </div>

                    <div className="columna">
                        <img src="https://drive.google.com/uc?id=16dN8IUrSDWy9BNlr0_D0gBAfgq5YD-Jc" width="200" height="200" alt="problema" />
                        <div className="texto">
                            <p>Detectá problemas justo a tiempo</p>
                        </div>
                    </div>

                    <div id="last-column">
                        <img src="https://drive.google.com/uc?id=1WQBX8ihU3-mJxhV6Xo96A5_n1iNW7IHj" width="200" height="200" alt="predecir" />
                        <div className="texto">
                            <p>Predecí para salvar tu futuro</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Page;