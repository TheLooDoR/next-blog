import { IPost } from '../../interfaces/post'
import {
  ADD_POST,
  GET_POST,
  GET_POSTS,
  PostActionTypes,
} from '../actions/postActionTypes'

export interface IPostState {
  posts: Partial<IPost[]>
  post: Partial<IPost>
}

const initialState = {
  posts: [],
  post: {},
}

export const postReducer = (
  state: IPostState = initialState,
  action: PostActionTypes
): IPostState => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      }
    case GET_POST:
      return {
        ...state,
        post: action.payload,
      }
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      }
    default:
      return state
  }
}
