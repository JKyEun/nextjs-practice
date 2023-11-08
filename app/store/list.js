import { proxy } from 'valtio';
import { devtools } from 'valtio/utils';

const listStore = proxy({
    count: 0
});

devtools(listStore, { name: 'list', enable: true });

export default listStore;
