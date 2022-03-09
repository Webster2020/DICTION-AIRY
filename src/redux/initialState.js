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
  filters: {
    type: 'ALL',
    tag: 'ALL',
    language: 'ALL',
    level: 'ALL',
    like: 'ALL',
  },
};
