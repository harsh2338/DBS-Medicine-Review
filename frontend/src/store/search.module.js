import ApiService from "../common/api.service"
import {
    SEARCH_DRUGS,
    GET_DRUG,
    GET_DRUG_COMMENTS,
} from "./actions.type";

import {
    SET_DRUGS, 
    SET_DRUG,
    SET_DRUG_COMMENTS,
} from './mutations.type';

const state = {
  drugs: {},
  drug: {},
  comments: {},
}

const getters = {
    getDrugResults() {
        return state.drugs;
    },

    getDrug() {
        return state.drug;
    },

    getCurDrugComments() {
        return state.comments;
    } 
}

const actions = {
   [SEARCH_DRUGS](context, searchString) {
    return new Promise((resolve, reject) => {
        ApiService.get(`/search?name=${searchString}`)
        .then((response) => {
            console.log(response.data)
            context.commit(SET_DRUGS, response.data)
            resolve(response)
        })
        .catch((error) => {
            console.log(error)
            reject(error)
        })
    })
   },

   [GET_DRUG](context,drugName) {
       return new Promise((resolve, reject) => {
           ApiService.get(`/drug?name=${drugName}`)
           .then((response) => {
               console.log(response);
               context.commit(SET_DRUG, response.data)
               resolve(response);
           })
           .catch((error) => {
               console.log(error);
               reject(error);
           })
       })
   },

   [GET_DRUG_COMMENTS](context, id) {
    return new Promise((resolve, reject) => {
        ApiService.get(`/drug/comments/?id=${id}`)
        .then((response) => {
            console.log(response);
            context.commit(SET_DRUG_COMMENTS, response.data)
            resolve(response);
        })
        .catch((error) => {
            console.log(error);
            reject(error);
        })
    })
   }

}

const mutations = {
    [SET_DRUGS](state, drugResults) {
        state.drugs = drugResults;
    },

    [SET_DRUG](state, drug) {
        state.drug = drug;
    },

    [SET_DRUG_COMMENTS](state, comments) {
        state.comments = comments;
    }
}



export default {
    state,
    actions,
    mutations,
    getters,
}
