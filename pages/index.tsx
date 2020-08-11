import { wrapper } from '../redux/store'
import { NextPage } from 'next'
import Axios from 'axios'
import React from 'react'
import { RootStore } from '../redux/reducers/rootReducer'
import { useSelector } from 'react-redux'
import { setPosts } from '../redux/actions/postActions'
import { LayoutComponent } from '../components/containers/LayoutComponent'
import { PostsComponent } from '../components/PostsComponent'
import { API_URL } from '../config'

const Home: NextPage = () => {
  const { posts } = useSelector((state: RootStore) => state.postStore)

  return (
    <LayoutComponent title="Home">
      <PostsComponent posts={posts} />
    </LayoutComponent>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const response = await Axios.get(`${API_URL}/posts`)
    store.dispatch(setPosts(response.data.reverse()))
  }
)

export default Home
