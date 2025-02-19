import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';

describe('getLoginPassword.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {

            },
        };

        expect(getLoginState(state as StateSchema)).toEqual({});
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {},
        };

        expect(getLoginState(state as StateSchema)).toEqual({});
    });
});
