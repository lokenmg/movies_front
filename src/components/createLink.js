import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


const CREATE_LINK_MUTATION = gql`
mutation createPeliculas(
    $nombre: String!
    $estudio: String!
    $genero: String!
    $duracion: Int!
    $recaudacion: Float!
    $productor: String!
    $valoracion: Int!
    $servicio: String!
) {
    createPeliculas(
    nombre:      $nombre,
    estudio:     $estudio,
    genero:      $genero,
    recaudacion: $recaudacion,
    duracion:    $duracion,
    productor:   $productor,
    valoracion:  $valoracion,
    servicio:    $servicio
) {
    id
    nombre
    estudio
    genero
    recaudacion
    duracion
    productor
    valoracion
    servicio  
    }
}
`;

const CreateLink = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        estudio: '',
        nombre: '',
        genero: '',
        duracion: '',
        recaudacion: '',
        productor: '',
        valoracion: '',
        servicio: ''
    });

    const [createLink] = useMutation(CREATE_LINK_MUTATION, {
        variables: {
            nombre: formState.nombre,
            estudio: formState.estudio,
            genero: formState.genero,
            duracion: formState.duracion,
            recaudacion: formState.recaudacion,
            productor: formState.productor,
            valoracion: formState.valoracion,
            servicio: formState.servicio
        },
        onCompleted: () => navigate('/')
    });


    return (
        <div className="center w85">
            <Form onSubmit={(e) => {
                e.preventDefault();
                createLink();
            }}>

                <h2>{t("add_movie_info")} </h2>
                
                <Form.Group controlId="formNombre">
                    <Form.Label>{t('movie_name')} </Form.Label>
                    <Form.Control
                        type="text"
                        value={formState.nombre}
                        onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formEstudio">
                    <Form.Label>{t("study_name")}</Form.Label>
                    <Form.Control
                        type="text"
                        value={formState.estudio}
                        onChange={(e) => setFormState({ ...formState, estudio: e.target.value })}
                    />
                </Form.Group>


                <Form.Group controlId="formGenero">
                    <Form.Label>{t("movie_genre")}</Form.Label>
                    <Form.Control
                        type="text"
                        value={formState.genero}
                        onChange={(e) => setFormState({ ...formState, genero: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formDuracion">
                    <Form.Label>{t("movie_duration")}</Form.Label>
                    <Form.Control
                        type="number"
                        value={formState.duracion}
                        onChange={(e) => setFormState({ ...formState, duracion: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formRecaudacion">
                    <Form.Label>{t("movie_gross")}</Form.Label>
                    <Form.Control
                        type="number"
                        value={formState.recaudacion}
                        onChange={(e) => setFormState({ ...formState, recaudacion: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formProductor">
                    <Form.Label>{t("movie_producer")}</Form.Label>
                    <Form.Control
                        type="text"
                        value={formState.productor}
                        onChange={(e) => setFormState({ ...formState, productor: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formProductor">
                    <Form.Label>{t("movie_rating")}</Form.Label>
                    <Form.Control
                        type="text"
                        value={formState.valoracion}
                        onChange={(e) => setFormState({ ...formState, valoracion: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formProductor">
                    <Form.Label>{t("streaming_plataform")}</Form.Label>
                    <Form.Control
                        type="text"
                        value={formState.servicio}
                        onChange={(e) => setFormState({ ...formState, servicio: e.target.value })}
                    />
                </Form.Group>

                <Button type="submit" variant="outline-dark">{t("add_movie")}</Button>
            </Form>
        </div>
    );
};

export default CreateLink;