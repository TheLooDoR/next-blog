import {
  ADD_POST,
  GET_POST,
  GET_POSTS,
  GetPost,
  GetPosts,
  PostActionTypes,
} from './postActionTypes'
import { INewPost, IPost } from '../../interfaces/post'
import { Dispatch } from 'redux'
import Axios from 'axios'
import { API_URL } from '../../config'

export const setPosts = (posts: IPost[]): GetPosts => {
  return {
    type: GET_POSTS,
    payload: posts,
  }
}

export const setPost = (post: IPost): GetPost => {
  return {
    type: GET_POST,
    payload: post,
  }
}

export const addPost = ({ title, body }: INewPost) => async (
  dispatch: Dispatch<PostActionTypes>
): Promise<void> => {
  try {
    const response = await Axios.post(`${API_URL}/posts`, {
      title,
      body,
    })
    dispatch({
      type: ADD_POST,
      payload: response.data,
    })
  } catch (e) {
    console.log(e.message)
  }
}
