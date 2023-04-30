import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';


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
          nombre:      formState.nombre,
          estudio:     formState.estudio,
          genero:      formState.genero,
          duracion:    formState.duracion,
          recaudacion: formState.recaudacion,
          productor:   formState.productor,
          valoracion:  formState.valoracion,
          servicio:    formState.servicio
        },
        onCompleted: () => navigate('/')
      });


    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createLink();
                  }}
            >
                <div className="flex flex-column mt3">
                    <input
                        className="mb2"
                        value={formState.estudio}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                estudio: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Nombre del estudio"
                    />
                    <input
                        className="mb2"
                        value={formState.nombre}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                nombre: e.target.value
                            })
                        }
                        type="text"
                        placeholder="titulo de la pelicula"
                    />
                    <input
                        className="mb2"
                        value={formState.genero}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                genero: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Genero de la pelicula"
                    />
                    <input
                        className="mb2"
                        value={formState.duracion}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                duracion: e.target.value
                            })
                        }
                        type="number"
                        placeholder="Duración"
                    />
                    <input
                        className="mb2"
                        value={formState.recaudacion}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                recaudacion: e.target.value
                            })
                        }
                        type="number"
                        placeholder="Recaudación de la pelicula"
                    />

                    <input
                        className="mb2"
                        value={formState.productor}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                productor: e.target.value
                            })
                        }
                        type="text"
                        placeholder="productor de la película"
                    />
                    <input
                        className="mb2"
                        value={formState.valoracion}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                valoracion: e.target.value
                            })
                        }
                        type="number"
                        placeholder="Valoracion de la pelicula"
                    />
                    <input
                        className="mb2"
                        value={formState.servicio}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                servicio: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Servicio de la película"
                    />

                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateLink;