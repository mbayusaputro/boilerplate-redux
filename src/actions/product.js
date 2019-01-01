import axios from 'axios';

const IP ='http://35.187.247.31/'

export const get = () => {
  return {
    type: 'GET_PRODUCT',
    payload: axios.get(IP+'products')
  }
}

export const getdata = (data) => {
  return {
    type:'SHOW_PRODUCT',
    payload: data
    
  }
}