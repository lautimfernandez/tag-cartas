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
                    <img src="https://img.icons8.com/ios-glyphs/452/realtime-protection.png" width="200" height="200" alt="tiemporeal"/>
                    <div className="texto">
                        <p>Seguí tus pozos en tiempo real</p>
                    </div>
                </div>
            
                <div className="columna">
                    <img src="https://icons-for-free.com/iconfiles/png/512/attention+problem+warning+icon-1320196391449088273.png" width="200" height="200" alt="problema"/>
                    <div className="texto">
                        <p>Detectá problemas justo a tiempo</p>
                    </div>
                </div>
               
                <div id="last-column">
                    <img src="https://static.thenounproject.com/png/332096-200.png" width="200" height="200" alt="predecir"/>
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