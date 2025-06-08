import { getUser, sendUser } from '#/services/user';

export const ipcHandlers = () => {
    getUser();
    sendUser();
};