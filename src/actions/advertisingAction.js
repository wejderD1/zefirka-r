import {FETCHED_ITEM, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, SELECT_ITEM} from "./types";

export const fetchedAd = (ad) => {
  return {
      type: FETCHED_ITEM,
      payload: {entity: "ads", item: ad}
  }
}
export const selectedAd = (id) => {
  return {
    type: SELECT_ITEM,
    payload: {entity: "ads", id}
  }
}

export const addAd = (ad) => {
  return {
    type: ADD_ITEM,
    payload: { entity: "ads", item: ad }
  }
}

export const deleteAd = (id) => {
  return {
    type: DELETE_ITEM,
    payload: {entity: "ads", id}
  }
}

export const updateAd = (ad) => {
  return {
    type: UPDATE_ITEM,
    payload: { entity: "ads", item: ad }
  }
}