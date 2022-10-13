import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';

import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';


@Injectable()
export class SeedService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    ) {}

  async executeSeed(){

    await this.pokemonModel.deleteMany({}) // delete all pokemon in the database
      
    const { data } = await this.httpService.axiosRef.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
    const pokemonToInsert: {name: string, no: number}[] = [];

    data.results.forEach(({name, url}) => {
      //Separamos el url por / 
      const segments = url.split('/');
      //Toma el último segmento de la url, que es el id del pokemon
      const no = +segments[segments.length - 2];

      pokemonToInsert.push({name, no});

    })

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed Executed';

  }
}


/* async executeSeed(){

  await this.pokemonModel.deleteMany({}) // delete all pokemon in the database
    
  const { data } = await this.httpService.axiosRef.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=600');

  const insertPromisesArray = [];



  data.results.forEach(({name, url}) => {
    //Separamos el url por / 
    const segments = url.split('/');
    //Toma el último segmento de la url, que es el id del pokemon
    const no = +segments[segments.length - 2];

    insertPromisesArray.push(this.pokemonModel.create({no, name}));

    //Forma 1 de insertar
    //const pokemon = await this.pokemonModel.create({name, no})

  })

  await Promise.all(insertPromisesArray);

  return 'Seed Executed';

} */