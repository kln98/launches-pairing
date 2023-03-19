import { IQueryDto } from '../../dto/spaceX.dto';
import { post } from '../shared/api';

// Using the '/query' api call to retrieve first 10 launches
// Don't need to set limit as default is 10
// Removed Core and Payload api, we can use /query to populate UUIDs with the linked object
// By using /query we can select required objects and reduce the amount of api calls needed
export async function postLaunchesApi() {
  return await post('https://api.spacexdata.com/v5/launches/query', {
    query: {},
    options: {
      select: ['name', 'date_utc', 'links.patch.small', 'success', 'failures.reason', 'details', 'cores', 'payloads'],
      populate: [
        {
          path: 'payloads',
          select: {
            type: 1,
          },
        },
        {
          path: 'cores',
          populate: [
            {
              path: 'core',
              select: ['serial'],
            },
          ],
        },
      ],
    },
  }).then((json: any) => json as IQueryDto);
}
