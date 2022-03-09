// --- S E L E C T O R S --- //
export const getFilteredWord = ({ words, filters }) => {
  console.log('REDUX FILTERED WORDS:');
  console.log(filters.level);
  // console.log(words.filter((word) => word.level === filters.level));
  console.log(words.data.map((word) => word.level));
  console.log(words.data.filter((word) => word.level === filters.level));
  console.log(filters);
};

// --- A C T I O N   N A M E   C R E A T O R --- //
const caName = (name) => `app/filter/${name}`;

// --- A C T I O N   T Y P E S --- //
const FILTER_WORDS = caName('FILTER_WORDS');

// --- A C T I O N   C R E A T O R S --- //
export const caFilterWords = (payload) => ({ payload, type: FILTER_WORDS });

// --- R E D U C E R --- //
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FILTER_WORDS: {
      return {
        ...statePart,
        ...action.payload,
      };
    }
    // case FETCH_SUCCESS: {
    //   return {
    //     ...statePart,
    //     loading: {
    //       active: false,
    //       error: false,
    //     },
    //     data: action.payload,
    //   };
    // }
    // case FETCH_ERROR: {
    //   return {
    //     ...statePart,
    //     loading: {
    //       active: false,
    //       error: action.payload,
    //     },
    //   };
    // }
    // case WORD_ADD: {
    //   console.log('ACTION PAYLOAD:');
    //   console.log(action.payload);
    //   return {
    //     ...statePart,
    //     data: [...statePart.data, action.payload],
    //     loading: {
    //       active: false,
    //       error: false,
    //     },
    //   };
    // }
    // case WORD_LIKE: {
    //   console.log('REDUX LIKE');
    //   return {
    //     ...statePart,
    //     data: statePart.data.map((word) =>
    //       word.word === action.payload ? { ...word, like: true } : word
    //     ),
    //   };
    // }
    // case WORD_UNLIKE: {
    //   return {
    //     ...statePart,
    //     data: statePart.data.map((word) =>
    //       word.word === action.payload ? { ...word, like: false } : word
    //     ),
    //   };
    // }
    // case WORD_LEVEL: {
    //   console.log('REDUX LEVEL');
    //   return {
    //     ...statePart,
    //     data: statePart.data.map((word) =>
    //       word.word === action.payload.word
    //         ? { ...word, level: action.payload.level }
    //         : word
    //     ),
    //   };
    // }
    default:
      return statePart;
  }
};
