import ApiService from "../common/api.service"
import JwtService from "../common/jwt.service"
import {
    LOGIN,
    LOGOUT,
    REGISTER,
    CHECK_AUTH,
} from "./actions.type"

import {
    SET_AUTH,
    PURGE_AUTH,
    SET_USER,
    SET_ERROR
} from "./mutations.type"

const state = {
    user: {},
    isAuthenticated: !!JwtService.getToken(),
    errors: null,
}

const getters = {
    currentUser(state) {
        return state.user
    },

    getErrors(state) {
        return state.errors;
    },

    isAuthenticated(state) {
        return state.isAuthenticated
    }
}

const actions = {
    [LOGIN](context, credentials) {
        return new Promise((resolve, reject) => {
            ApiService.post("/login", credentials)
            .then((response) => {
                context.commit(SET_AUTH, response.data.token)
                resolve(response)
            })
            .catch((error) => {
                console.log(error)
                context.commit(SET_ERROR,error);
                reject(error)
            })
        }) 
    },

    [LOGOUT](context) {
        context.commit(PURGE_AUTH)
    },

    [CHECK_AUTH](context) {
        if(JwtService.getToken()) {
            return new Promise((resolve, reject) => {
                ApiService.setHeader()
		ApiService.get('/profile/me')
                .then((response) => {
                    context.commit(SET_USER,  response.data[0])
                    resolve(response)
                })
                .catch((error) => {
                    console.log(error)
                    reject(error)
                })
            }) 
        }
    },

    [REGISTER](context, credentials) {
        return new Promise((resolve, reject) => {
            ApiService.post("/register", credentials)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.log(error)
                reject(error)
            })
        }) 
    },
}

const mutations = {

    [SET_USER](state, user) {
        state.user = user
    },

    [SET_AUTH](state, token) {
        state.isAuthenticated = true
        JwtService.saveToken(token);
    },

    [PURGE_AUTH](state) {
        state.isAuthenticated = false
        state.user = {}
        JwtService.destroyToken();
    },

    [SET_ERROR](state, error) {
        state.errors = error.message
    },
}

export default {
    state,
    actions,
    mutations,
    getters,
}

