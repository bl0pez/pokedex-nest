import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, Min, IsString, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @ApiProperty({
    description: 'numero del pokemon  a crear',
    example: 1,
    type: Number,
  })
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;

  @ApiProperty({
    description: 'nombre del pokemon a crear',
    example: 'Bulbasaur',
    type: String,
  })
  @IsString()
  @MinLength(1)
  name: string;
}
