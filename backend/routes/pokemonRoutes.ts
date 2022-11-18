import * as express from 'express';
import { protect } from '../models/authMiddleware';

import {
    getPokemonsHandler,
    createPokemonHandler,
    getPokemonHandler,
    deletePokemonHandler,
    updatePokemonHandler,
} from '../controllers/pokemonController';
const PokemonRoutes = express.Router();

PokemonRoutes.route('/')
    .get(getPokemonsHandler)
    .post(protect, createPokemonHandler);
PokemonRoutes.route('/:id')
    .get(getPokemonHandler)
    .put(protect, updatePokemonHandler)
    .delete(protect, deletePokemonHandler);

export default PokemonRoutes;
