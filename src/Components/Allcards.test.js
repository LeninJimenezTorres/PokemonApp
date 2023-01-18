import { render, screen } from '@testing-library/react';
import App from '../App';
import UseFetch from '../Functions/UseFetch';
import React, { useState } from 'react';
import Allcards from './Allcards';
//import { renderHook } from '@testing-library/react-hooks'

const url = 'https://pokeapi.co/api/v2/pokemon/';

/*
test('Test de metodo Fetch', () => {
    render(<UseFetch url={url}/>);
});
*/
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Listado/i);
  expect(linkElement).toBeInTheDocument();
});

/*
import { render, screen } from '@testing-library/react';
//import App from '../App';
import UseFetch from '../Functions/UseFetch';
import React, { useState } from 'react';
import Allcards from './Allcards';

const url = 'https://pokeapi.co/api/v2/pokemon/';

const estado = UseFetch(url);
const [cargando,data]=estado;

test('Test Allcards Component', () => {
    render(<Allcards results={data.results}/>);
})

 */