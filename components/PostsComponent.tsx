import { FC } from 'react'
import styled from 'styled-components'
import { IPost } from '../interfaces/post'
import { DEFAULT_THEME } from '../theme'
import Link from 'next/link'

const PostsContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const PostItem = styled.div`
  margin-top: 10px;
  width: 100%;
  max-height: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  @media (min-width: 1024px) {
    width: 48%;
  }
`

const PostItemTitle = styled.h3`
  font-size: 26px;
  white-space: nowrap;
  overflow: hidden;
  padding: 5px;
  text-overflow: ellipsis;
`

const PostItemLink = styled.a`
  color: ${DEFAULT_THEME.colors.main};
  opacity: 0.7;
  font-size: 24px;
  align-self: flex-start;
  &:hover {
    opacity: 1;
    cursor: pointer;
    text-decoration: underline;
  }
`

const PostItemBody = styled.p`
  white-space: nowrap;
  overflow: hidden;
  padding: 5px;
  text-overflow: ellipsis;
`

interface PostsComponentProps {
  posts: IPost[]
}

export const PostsComponent: FC<PostsComponentProps> = ({ posts }) => {
  return (
    <PostsContainer>
      {posts.map((post) => (
        <PostItem key={post.id}>
          <div>
            <PostItemTitle>{post.title}</PostItemTitle>
            <PostItemBody>{post.body}</PostItemBody>
          </div>
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <PostItemLink>Learn more</PostItemLink>
          </Link>
        </PostItem>
      ))}
    </PostsContainer>
  )
}
