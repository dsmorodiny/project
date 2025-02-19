import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getLoginPassword.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123123',
            },
        };

        expect(getLoginPassword(state as StateSchema)).toEqual('123123');
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {

        };

        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
