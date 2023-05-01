import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';


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

                <h2>Agregar informacion de películas </h2>
                
                <Form.Group controlId="formNombre">
                    <Form.Label>Nombre de la película</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre de la película"
                        value={formState.nombre}
                        onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formEstudio">
                    <Form.Label>Nombre del estudio</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre del estudio"
                        value={formState.estudio}
                        onChange={(e) => setFormState({ ...formState, estudio: e.target.value })}
                    />
                </Form.Group>


                <Form.Group controlId="formGenero">
                    <Form.Label>Género de la película</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el género de la película"
                        value={formState.genero}
                        onChange={(e) => setFormState({ ...formState, genero: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formDuracion">
                    <Form.Label>Duración de la película (minutos)</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ingrese la duración de la película en minutos"
                        value={formState.duracion}
                        onChange={(e) => setFormState({ ...formState, duracion: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formRecaudacion">
                    <Form.Label>Recaudación de la película</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ingrese la recaudación de la película"
                        value={formState.recaudacion}
                        onChange={(e) => setFormState({ ...formState, recaudacion: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formProductor">
                    <Form.Label>Productor de la película</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre del productor de la película"
                        value={formState.productor}
                        onChange={(e) => setFormState({ ...formState, productor: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formProductor">
                    <Form.Label>Valoración de la película</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre del productor de la película"
                        value={formState.valoracion}
                        onChange={(e) => setFormState({ ...formState, valoracion: e.target.value })}
                    />
                </Form.Group>

                <Form.Group controlId="formProductor">
                    <Form.Label>Servicios de streaming</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el nombre del productor de la película"
                        value={formState.servicio}
                        onChange={(e) => setFormState({ ...formState, servicio: e.target.value })}
                    />
                </Form.Group>

                <Button type="submit" variant="outline-dark">Agregar</Button>
            </Form>
        </div>
    );
};

export default CreateLink;