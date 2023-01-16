import { render, screen } from '@testing-library/react';
//import App from '../App';
import UseFetch from './UseFetch';

const url = 'https://pokeapi.co/api/v2/pokemon/';


test('Test de metodo Fetch', () => {
    render(<UseFetch url={url}/>);
});