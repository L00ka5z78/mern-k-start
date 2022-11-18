import { PokemonType } from '../types/pokemonTypes';
import HttpException from '../utils/httpException';
import { sanitizeId } from './userSanitizes';

export function sanitizePokemon(
    Pokemon: PokemonType,
    userId: string | undefined
): PokemonType {
    const sanitizedId = sanitizeId(userId);
    const sanitizedPokemon: PokemonType = {
        userId: sanitizedId,
        name: '',
    };

    sanitizedPokemon.name = sanitizeName(Pokemon.name);
    return sanitizedPokemon;
}

function sanitizeName(name: string): string {
    // types
    if (name === undefined) {
        throw new HttpException('Name is undefined', 400);
    }
    if (typeof name !== 'string') {
        throw new HttpException('Name is not string', 400);
    }

    // atributes
    name = name.trim();
    if (name.length < 3) {
        throw new HttpException('Name must be at least 3 characters ', 400);
    }

    if (name.length > 50) {
        throw new HttpException('Name must be less than 50 characters ', 400);
    }
    return name;

    // if (!req.body.title) {
    //   res.status(400);
    //   throw new Error('Title is required');
    // }      // 11-35 sanitizeTitle is the same as those if condition
    // return title.trim(); // trim => removes white signs as spaces
}
