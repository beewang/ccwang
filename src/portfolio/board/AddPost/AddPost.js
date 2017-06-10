import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  root: {
    maxWidth: '100%',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px',
    borderRadius: '2px',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: '20px 20px',
    transition: 'height 200ms',
    marginTop: '10px',
  },
}

const AddPost = (props) => {
  const { formOpen, handleCreateButtonClick, handleInputChange } = props

  return (
    formOpen ?
      <div style={styles.root}>
        <TextField
          name="title"
          hintText="What do I do if I want to make a quote?"
          floatingLabelText="Title"
          fullWidth
          onChange={handleInputChange}
        />
        <TextField
          name="name"
          hintText="John Smith"
          floatingLabelText="Name"
          fullWidth
          onChange={handleInputChange}
        />
        <TextField
          name="email"
          hintText="John.Smith@gmail.com"
          floatingLabelText="E-Mail"
          fullWidth
          onChange={handleInputChange}
        />
        <TextField
          name="content"
          floatingLabelText="Content"
          multiLine
          rows={5}
          fullWidth
          onChange={handleInputChange}
        />
        <RaisedButton
          label="Create"
          primary
          fullWidth
          onClick={handleCreateButtonClick}
        />
      </div>
    : <div />
  )
}

AddPost.propTypes = {
  formOpen: PropTypes.bool,
  handleCreateButtonClick: PropTypes.func,
  handleInputChange: PropTypes.func,
}

AddPost.defaultProps = {
  formOpen: false,
  handleCreateButtonClick: () => {},
  handleInputChange: () => {},
}

export default AddPost
