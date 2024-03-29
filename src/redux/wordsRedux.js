import axios from 'axios';

// --- S E L E C T O R S --- //
// export const getAll = ({ words }) => words.data.sort((a, b) => {
//   let wordA = a.word.toUpperCase();
//   let wordB = b.word.toUpperCase();
//   if (wordA < wordB) {return -1;}
//   if (wordA > wordB) {return 1;}
//   return 0;
// });

export const getAll = ({ words, filters }) => words.data.filter((word) => {
  // for (const prop in filters) {
  //   console.log(prop);
  //   console.log(filters[prop]);
  //   if (filters[prop] === 'ALL') {
  //     return true;
  //   } else {
  //     return word[prop] === filters[prop];
  //   }
  // }
  if (filters.level === 'ALL') {
    return true;
  } else {
    return word.level === filters.level;
  }
}).filter((word) => {
  if (filters.type === 'ALL') {
    return true;
  } else {
    return word.type === filters.type;
  }
}).filter((word) => {
  if (filters.tag === 'ALL') {
    return true;
  } else {
    return word.tagA === filters.tag || word.tagB === filters.tag;
  }
}).filter((word) => {
  if (filters.like === 'ALL') {
    return true;
  } else if (filters.like === 'YES' && word.like === true) {
    return true;
  } else if (filters.like === 'NO' && word.like === false) {
    return true;
  }
}).filter((word) => {
  if (filters.language === 'ALL') {
    return true;
  } else {
    return word.language === filters.language;
  }
}).sort((a, b) => {
  let wordA = a.word.toUpperCase();
  let wordB = b.word.toUpperCase();
  if (wordA < wordB) {return -1;}
  if (wordA > wordB) {return 1;}
  return 0;
});
// words.data.filter((word) => word.level === filters.level);
export const getSize = ({words, filters}) => getAll({words, filters}).length;

export const getAllByUser = ({ words }, user) => words.data.filter((word) => word.user.login === user.login);
export const getLiked = ({ words }) => words.data.filter((word) => word.like);
export const getTagsA = ({ words }) => words.data.map((word) => word.tagA);
export const getTagsB = ({ words }) => words.data.map((word) => word.tagB);
export const getFetchStatus = ({ words }) => words.loading.active;
export const getFilteredWord = ({ words }) => {
  console.log('REDUX FILTERED WORDS:');
  console.log(words);
};

// --- A C T I O N   N A M E   C R E A T O R --- //
const caName = (name) => `app/word/${name}`;

// --- A C T I O N   T Y P E S --- //
const FETCH_START = caName('FETCH_START');
const FETCH_SUCCESS = caName('FETCH_SUCCESS');
const FETCH_ERROR = caName('FETCH_ERROR');
const WORD_ADD = caName('WORD_ADD');
const WORD_EDIT = caName('WORD_EDIT');
const WORD_LIKE = caName('WORD_LIKE');
const WORD_UNLIKE = caName('WORD_UNLIKE');
const WORD_LEVEL = caName('WORD_LEVEL');

// --- A C T I O N   C R E A T O R S --- //
export const caFetchStarted = (payload) => ({ payload, type: FETCH_START });
export const caFetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const caFetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const caWordAdd = (payload) => ({ payload, type: WORD_ADD });
export const caWordEdit = (payload) => ({ payload, type: WORD_EDIT });
export const caWordLike = (payload) => ({ payload, type: WORD_LIKE });
export const caWordUnlike = (payload) => ({ payload, type: WORD_UNLIKE });
export const caWordLevel = (payload) => ({ payload, type: WORD_LEVEL });

// --- T H U N K   C R E A T O R S --- //
export const caFetchWords = () => {
  return (dispatch, getState) => {
    dispatch(caFetchStarted());
    axios
      .get('http://dictionairy.webster2020.usermd.net/api/words/words')
      // .get('http://localhost:8000/api/words/all')
      .then((res) => {
        dispatch(caFetchSuccess(res.data));
        console.log('FETCHING WORDS FROM DB -> OK :)');
      })
      .catch((err) => {
        dispatch(caFetchError(err.message || true));
      });
  };
};

export const caAddWordToDB = (newWord) => {
  console.log(newWord);
  return (dispatch, getState) => {
    axios
      .post(`http://dictionairy.webster2020.usermd.net/api/words/word`, newWord)
      // .post(`http://localhost:8000/api/words/add`, newWord)
      .then((res) => {
        console.log(newWord);
        dispatch(caWordAdd(newWord));
        console.log('ADD NEW WORD TO DB -> OK :)');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const caEditWordToDB = (id, editedWord) => {
  console.log(id);
  console.log(editedWord);
  return (dispatch, getState) => {

    axios
      .put(`http://dictionairy.webster2020.usermd.net/api/words/word/${id}`, editedWord)
      // .put(`http://localhost:8000/api/posts/${id}`, editedPost)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const caDeleteWordFromDB = (id) => {
  return (dispatch, getState) => {

    axios
      .delete(`http://dictionairy.webster2020.usermd.net/api/words/word/${id}`)
      // .delete(`http://localhost:8000/api/posts/${id}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// --- R E D U C E R --- //
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case WORD_ADD: {
      console.log('ACTION PAYLOAD:');
      console.log(action.payload);
      return {
        ...statePart,
        data: [...statePart.data, action.payload],
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case WORD_LIKE: {
      console.log('REDUX LIKE');
      return {
        ...statePart,
        data: statePart.data.map((word) =>
          word.word === action.payload ? { ...word, like: true } : word
        ),
      };
    }
    case WORD_UNLIKE: {
      return {
        ...statePart,
        data: statePart.data.map((word) =>
          word.word === action.payload ? { ...word, like: false } : word
        ),
      };
    }
    case WORD_LEVEL: {
      console.log('REDUX LEVEL');
      return {
        ...statePart,
        data: statePart.data.map((word) =>
          word.word === action.payload.word
            ? { ...word, level: action.payload.level }
            : word
        ),
      };
    }
    default:
      return statePart;
  }
};
