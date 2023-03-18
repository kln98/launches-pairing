import { ICoreDto, IPayloadDto, ILaunchDto } from '../../dto/spaceX.dto';
import { get } from '../shared/api';

export async function getLaunchesApi() {
  return await get('https://api.spacexdata.com/v5/launches').then((json: any) => json as ILaunchDto[]);
}

export async function getCoreApi(coreId: string) {
  return await get('https://api.spacexdata.com/v4/cores/${coreId}').then((json: any) => json as ICoreDto);
}

export async function getPayloadApi(payloadId: string) {
  return await get('https://api.spacexdata.com/v4/payloads/${payloadId}').then((json: any) => json as IPayloadDto);
}
