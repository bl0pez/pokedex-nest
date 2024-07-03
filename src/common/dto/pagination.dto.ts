import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    required: false,
    default: 10,
    description: 'Limite de registros por página',
    example: 10,
  })
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  limit?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty({
    required: false,
    default: 0,
    description: 'Numero de registros a omitir',
    example: 0,
  })
  offset?: number;
}
