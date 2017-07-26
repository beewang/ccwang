import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Post from './Post'
import AddPost from './AddPost'
import { load, create } from './board.module'

const styles = {
  root: {
    width: '800px',
    margin: '0 auto',
  },
  add: {
    marginTop: '10px',
  },
}

class Board extends React.Component {
  state = {
    formOpen: false,
    errors: {},
    email: '',
    name: '',
    content: '',
    title: '',
  }

  componentDidMount() {
    this.props.loadPosts()
  }

  handleInputChange = (event) => {
    const { errors } = this.state
    const value = event.target.value.trim()
    const field = event.target.name

    errors[field] = null
    this.setState({ [field]: value, errors })
  }

  handleCreateButtonClick = () => {
    const { email, name, title, content } = this.state
    this.props.createPost({
      email,
      name,
      title,
      content,
    })
  }

  render() {
    const { formOpen } = this.state
    const posts = this.props.posts || []

    return (
      <div style={styles.root}>
        <RaisedButton
          style={styles.add}
          label="Create New Post"
          fullWidth
          onClick={() => this.setState({ formOpen: !formOpen })}
        />
        <AddPost
          formOpen={formOpen}
          handleCreateButtonClick={this.handleCreateButtonClick}
          handleInputChange={this.handleInputChange}
        />
        <div>
          {
            posts.map(x => (
              <Post
                name={x.name}
                title={x.title}
                content={x.content}
                email={x.email}
                reply={x.reply}
                createdAt={x.createdAt}
                key={x.id}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

Board.propTypes = {
  posts: PropTypes.array, // eslint-disable-line
  loadPosts: PropTypes.func,
  createPost: PropTypes.func,
}

/* -----------------------------------------
  Graphql
 ------------------------------------------*/
//
// const getPosts = gql`
//   query {
//     posts {
//       id
//       name
//       email
//       title
//       content
//       reply
//       createdAt
//       updatedAt
//     }
//   }
// `
//
// const createPost = gql`
//   mutation createPost($input: PostInput!) {
//     createPost(input: $input) {
//       post {
//         id
//       },
//       error
//     }
//   }
// `
// const QueryAllPosts = graphql(getPosts)
//
// const CreatePostWithData = graphql(createPost, {
//   props: ({ mutate }) => ({
//     createPost: (post) => {
//       const input = {
//         title: post.title,
//         name: post.name,
//         content: post.content,
//         email: post.email,
//       }
//
//       return mutate({ variables: { input } })
//     },
//   }),
// })
//
// const graphqlBoard = compose(QueryAllPosts, CreatePostWithData)(Board)

/* -----------------------------------------
  Redux
 ------------------------------------------*/
const mapStateToProps = state => ({ posts: state.board.posts })

const mapDispatchToProps = dispatch => ({
  loadPosts() {
    dispatch(load())
  },
  createPost(post) {
    dispatch(create(post))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
