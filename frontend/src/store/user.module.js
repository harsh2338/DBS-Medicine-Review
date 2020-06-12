import ApiService from "../common/api.service";

import {
    GET_MEDICATION,
} from './actions.type';
const state = {};
const getters = {};
const actions = {
    [GET_MEDICATION](context, uid) {
        return new Promise((resolve, reject) => {
            ApiService.get('/get-medication', uid).
                then((response) => {
                    resolve(response);
                }).
                catch((error) => {
                    reject(error);
                })

        });
    }
};
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}