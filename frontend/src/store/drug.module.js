import ApiService from "../common/api.service";

import {
	ADD_COMMENT,
	ADD_RATING,
	ADD_DRUG,
} from './actions.type'

const state = {}
const getters = {}
const actions = {
	[ADD_COMMENT](context, comment) {
		return new Promise((resolve, reject) => {
			ApiService.post('/drug/add-comment', comment).
				then((response) => {
					resolve(response);
				}).
				catch((error) => {
					reject(error);
				})
		});
	},

	[ADD_RATING](context, rating) {
		return new Promise((resolve, reject) => {
			ApiService.setHeader();
			ApiService.post('/drug/add-rating', rating).
				then((response) => {
					resolve(response);
				}).
				catch((error) => {
					reject(error);
				})
		});
	},

	[ADD_DRUG](context, drug) {
		return new Promise((resolve, reject) => {
			ApiService.post('/add-drug', drug).
				then((response) => {
					resolve(response);
				}).
				catch((error) => {
					reject(error);
				})
		})
	},
}
const mutations = {}

export default {
	state,
	getters,
	actions,
	mutations,
}