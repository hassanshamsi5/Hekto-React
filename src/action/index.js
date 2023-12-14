export const incNumber = () => {
    return {
        type: "INCREMENT",
    }
}
export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}

export const setData = (data) => {
    return {
      type: "SET_DATA",
      payload: data,
    };
  };
  



