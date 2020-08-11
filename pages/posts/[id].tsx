import { FC } from 'react'
import { LayoutComponent } from '../../components/containers/LayoutComponent'
import { wrapper } from '../../redux/store'
import Axios from 'axios'
import { setPost } from '../../redux/actions/postActions'
import { useSelector } from 'react-redux'
import { RootStore } from '../../redux/reducers/rootReducer'
import styled from 'styled-components'
import { DEFAULT_THEME } from '../../theme'
import { API_URL } from '../../config'

const PostContainer = styled.div`
  padding: 50px 0;
  display: flex;
  flex-flow: column;
`

const PostTitle = styled.h1`
  align-self: center;
  position: relative;
  padding-bottom: 10px;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${DEFAULT_THEME.colors.main};
    left: 0;
    bottom: 0;
  }
`

const PostBody = styled.p`
  margin: 20px 100px;
  padding-bottom: 15px;
  font-size: 20px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${DEFAULT_THEME.colors.main};
    left: 0;
    bottom: 0;
  }
`
const Comments = styled.div`
  margin-top: 50px;
`
const Comment = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 10px auto;
  display: flex;
  align-items: center;
`
const CommentBodyWrap = styled.div``

const CommentTitle = styled.h2`
  font-size: 16px;
  font-weight: normal;
  span {
    font-weight: bold;
    font-style: italic;
  }
`

const CommentBody = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
`

const CommentAvatar = styled.img`
  border-radius: 5px;
  height: 52px;
  margin-right: 15px;
`

const Post: FC = () => {
  const { post } = useSelector((state: RootStore) => state.postStore)

  return (
    <LayoutComponent>
      <PostContainer>
        <PostTitle>{post.title}</PostTitle>
        <PostBody>{post.body}</PostBody>
        {post.comments && (
          <Comments>
            {post.comments.map((comment) => (
              <Comment key={comment.id}>
                <CommentAvatar src="/user-avatar.png" alt="User name" />
                <CommentBodyWrap>
                  <CommentTitle>
                    Comment by user <span>Some user</span>
                  </CommentTitle>
                  <CommentBody>{comment.body}</CommentBody>
                </CommentBodyWrap>
              </Comment>
            ))}
          </Comments>
        )}
      </PostContainer>
    </LayoutComponent>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }) => {
    const response = await Axios.get(
      `${API_URL}/posts/${query.id}?_embed=comments`
    )
    store.dispatch(setPost(response.data))
  }
)

export default Post
