import ApiService from '../common/api.service';
import {
	ADD_DISEASE,
} from './actions.type';
const state = {}
const getters = {}
const actions = {
	[ADD_DISEASE](context, disease) {
		return new Promise((resolve, reject) => {
			ApiService.post('/disease/add-disease', disease).
				then((response) => {
					resolve(response);
				}).
				catch((error) => {
					reject(error);
				})
		});
	},
}
const mutations = {}

export default {
	state,
	getters,
	actions,
	mutations,
}