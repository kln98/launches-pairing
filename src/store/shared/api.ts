export function get(url: string) {
  return internalGet(url) as Promise<any>;
}

export async function internalGet(url: string) {
  return await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then((data) => {
      return data.json();
    })
    .catch((err) => console.log(err));
}

export async function post(url: string, payload: any) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
    });
}
