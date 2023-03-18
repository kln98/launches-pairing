export interface ILaunchDto {
  id: string;
  name: string;
  date_utc: string;
  links: string[];
  success: boolean;
  failures: string[];
  details: string;
  payloads: IPayloadDto[];
  cores: ICoreDto[];
}

export interface ICoreDto {
  serial: string;
  id: string;
}

export interface IPayloadDto {
  type: string;
  id: string;
}
