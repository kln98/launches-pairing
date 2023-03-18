export interface IQueryDto {
  docs: ILaunchDto[];
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
}

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
