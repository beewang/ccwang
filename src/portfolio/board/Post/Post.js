import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import moment from 'moment'

const styles = {
  root: {
    margin: '10px 0 10px 0',
    display: 'flex',
    flexDirection: 'row',
  },
  contact: {
    padding: '20px 20px',
    width: '220px',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  },
  wrapper: {
    padding: '20px 20px',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    backgroundColor: '#E9EDEF',
    flexGrow: '1',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '18px',
    verticalAlign: 'middle',
    paddingBottom: '10px',
  },
  content: {
    padding: '10px 0',
  },
}

const Post = (props) => {
  const { title, name, content, email, createdAt } = props
  const createdAtDate = moment(parseInt(createdAt, 0)).format('MMM DD, YYYY')

  return (
    <Paper style={styles.root} zDepth={1}>
      <div style={styles.contact}>
        <span>{name}</span>
        <span>{email}</span>
        <span>{createdAtDate}</span>
      </div>
      <div style={styles.wrapper}>
        <span style={styles.title}>{title}</span>
        <Divider />
        <span style={styles.content}>{content}</span>
      </div>
    </Paper>
  )
}


Post.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  content: PropTypes.string,
  email: PropTypes.string,
  reply: PropTypes.string,
  createdAt: PropTypes.string,
}

Post.defaultProps = {
  title: '',
  name: '',
  content: '',
  email: '',
  reply: '',
  createdAt: '',
}

export default Post
