import React from "react";
import useStyles from "./FooterStyles";

const Footer = () => {

    const classes = useStyles();

    return(
        <footer className={classes.container}>
            <div className={classes.nav}>
                <div></div>
                <div>
                    <h3>LO BÁSICO</h3>
                    <ul>
                        <li>Sobre TMDB</li>
                        <li>Contacto</li>
                        <li>Foros de ayuda</li>
                        <li>API</li>
                        <li>Estado del sistema</li>
                    </ul>
                </div>
                <div>
                    <h3>PARTICIPA</h3>
                    <ul>
                        <li>Guía de aportaciones</li>
                        <li>Añadir nueva película</li>
                        <li>Añadir nuevo programa de tv</li>
                    </ul>
                </div>
                <div>
                    <h3>COMUNIDAD</h3>
                    <ul>
                        <li>Directrices</li>
                        <li>Discusiones</li>
                        <li>Tabla de clasificación</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div>
                    <h3>LEGAL</h3>
                    <ul>
                        <li>Términos de uso</li>
                        <li>Términos de uso de la API</li>
                        <li>Política de privacidad</li>
                    </ul>
                </div>
        </div>
        </footer>

    )
}

export {Footer}