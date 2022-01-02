export const initialState = {
  user: {
    login: false,
    data: {
      login: '',
      password: '',
    },
  },
  words: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
};
