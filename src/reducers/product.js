const initialValue = {
    data: [],
    result:{},
    isLoading: false,
    isError: false,
    isFinish: false,
    
  }
  
  export default (state = initialValue, action) => {
    switch (action.type) {
      case 'GET_PRODUCT_PENDING':
        return {
          ...state,
          isLoading: true
        }
  
      case 'GET_PRODUCT_FULFILLED':
        return {
          ...state,
          isLoading: false,
          isFinish: true,
          data: action.payload.data
        };
  
      case 'GET_PRODUCT_REJECTED':
        return {
          ...state,
          isLoading: false,
          isError: true,
          data: 'Error Network'
        };

      case 'SHOW_PRODUCT':
        return {
          ...state,
          result: action.payload
        };
  
        default:
        return state;
    }
  }
  