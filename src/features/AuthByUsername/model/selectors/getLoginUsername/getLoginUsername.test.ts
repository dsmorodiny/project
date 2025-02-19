import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginUsername } from 'features/AuthByUsername/model/selectors/getLoginUsername/getLoginUsername';

describe('getLoginPassword.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
            },
        };

        expect(getLoginUsername(state as StateSchema)).toEqual('admin');
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {

        };

        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
