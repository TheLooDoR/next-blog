import { LayoutComponent } from '../../components/containers/LayoutComponent'
import { ButtonComponent } from '../../components/ui/ButtonComponent'
import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { InputComponent } from '../../components/ui/InputComponent'
import { TextareaComponent } from '../../components/ui/TextareaComponent'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addPost } from '../../redux/actions/postActions'
import { useRouter } from 'next/router'
import { INewPost } from '../../interfaces/post'
import { DEFAULT_THEME } from '../../theme'

const CreatePostForm = styled.form`
  display: flex;
  flex-flow: column;
  max-width: 600px;
  margin: auto;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  margin-top: 20px;
`

const ErrorMessage = styled.div`
  color: #fff;
  background: ${DEFAULT_THEME.colors.dangerousLight};
  font-style: italic;
  padding: 10px;
  margin: 10px 0;
  border-radius: 6px;
  text-decoration: underline;
`

const TextareaInput: typeof TextareaComponent = styled(TextareaComponent)`
  margin-top: 10px;
`

const CreatePostButton: typeof ButtonComponent = styled(ButtonComponent)`
  margin-top: 15px;
  align-self: center;
`

interface IValid {
  titleMessage: string
  bodyMessage: string
}

const NewPost: FC = () => {
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [valid, setValid] = useState<IValid>({
    titleMessage: '',
    bodyMessage: '',
  })
  const dispatch = useDispatch()
  const router = useRouter()

  const validateInput = (): boolean => {
    let titleError = ''
    let bodyError = ''
    if (!title) {
      titleError = 'Title cannot be empty!'
    }

    if (!body) {
      bodyError = 'Body cannot be empty!'
    }

    if (titleError || bodyError) {
      setValid({ titleMessage: titleError, bodyMessage: bodyError })
      return false
    }
    return true
  }

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const textareaChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value)
  }

  const submitCreatePost = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const newPost: INewPost = {
      title,
      body,
    }

    const isValid = validateInput()
    if (isValid) {
      dispatch(addPost(newPost))
      router.push('/')
    }
  }

  return (
    <LayoutComponent title="Create post">
      <Title>Create post</Title>
      <CreatePostForm onSubmit={submitCreatePost}>
        <InputComponent
          value={title}
          onChange={inputChangeHandler}
          id="title"
          placeholder="Post title"
          name="title"
        />
        {valid.titleMessage && (
          <ErrorMessage>{valid.titleMessage}</ErrorMessage>
        )}
        <TextareaInput
          value={body}
          onChange={textareaChangeHandler}
          rows={20}
          name="body"
        />
        {valid.bodyMessage && <ErrorMessage>{valid.bodyMessage}</ErrorMessage>}
        <CreatePostButton type="submit">Create post</CreatePostButton>
      </CreatePostForm>
    </LayoutComponent>
  )
}

export default NewPost
