import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
export class SaleMoneyRequestDto {
  @IsString()
  @IsNotEmpty()
  prefix: string;

  @IsString()
  @IsNotEmpty()
  prefixChange: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
export class CreateMoneyRequestDto {
  @IsString()
  @IsNotEmpty()
  prefix: string;

  @IsString()
  @IsNotEmpty()
  prefixChange: string;

  @IsNotEmpty()
  @IsNumber()
  salePrice: number;
}
export class UpdteMoneyRequestDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  prefix: string;

  @IsString()
  @IsNotEmpty()
  prefixChange: string;

  @IsNotEmpty()
  @IsNumber()
  salePrice: number;
}

export class ResponseDto {
  success: boolean;

  message: string;

  data: any;
}
