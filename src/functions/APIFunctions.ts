import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

export async function getTokenPromise(): Promise<any> {
    const item = await Storage.get({ key: 'jwt' });
    const data = JSON.parse(item.value || '{}');
    return(data.token);
}

