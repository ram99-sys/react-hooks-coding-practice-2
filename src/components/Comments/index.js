import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentsList, setCommentList] = useState([])
  const onChangeName = event => {
    console.log(event.target.value)
    setName(event.target.value)
  }
  const onChangeComment = event => {
    console.log(event.target.value)
    setCommentText(event.target.value)
  }
  const onSubmitComment = event => {
    event.preventDefault()
    const newComment = {id: uuidv4(), name, commentText}
    setName('')
    setCommentText('')
    setCommentList(prevCommentsList => [...prevCommentsList, newComment])
  }
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onSubmitComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentsList.map(eachComment => (
          <CommentItem key={eachComment.id} commentDetails={eachComment} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
