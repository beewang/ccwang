import gql from 'graphql-tag'

import { client } from '../../api/postsApi'
// ------------------------------------
// Constants
// ------------------------------------
const LOAD_POSTS = 'LOAD_POSTS'
const ADD_POST = 'ADD_POST'

// ------------------------------------
// Actions
// ------------------------------------

// Load
export const loadPosts = posts => ({
  type: LOAD_POSTS,
  posts,
})

const getPosts = gql`
  query {
    posts {
      id
      name
      email
      title
      content
      reply
      createdAt
      updatedAt
    }
  }
`

export const load = () => (
  async (dispatch) => {
    const { data: { posts } } = await client.query({
      query: getPosts,
    })
    return dispatch(loadPosts(posts))
  })

// create posts
export const addPost = post => ({
  type: ADD_POST,
  post,
})

const createPost = gql`
  mutation createPost($input: PostInput!) {
    createPost(input: $input) {
      post {
        id
        name
        email
        title
        content
        reply
        createdAt
        updatedAt
      },
      error
    }
  }
`
export const create = input => (
  async (dispatch) => {
    const { data: { createPost: { post } } } = await client.mutate({
      mutation: createPost,
      variables: { input },
    })

    return dispatch(addPost(post))
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
  [ADD_POST]: (state, { post }) => ({
    posts: state.posts.concat(post),
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
