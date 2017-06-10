// ------------------------------------
// Constants
// ------------------------------------
const LOAD_POSTS = 'LOAD_POSTS'

// ------------------------------------
// Actions
// ------------------------------------

// Load
export const loadPosts = posts => ({
  type: LOAD_POSTS,
  posts,
})

export const load = posts => ((dispatch) => {
  dispatch(loadPosts(posts))
})

export const actions = {
  // load,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOAD_POSTS]: (state, { posts }) => ({
    posts,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  posts: [],
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
