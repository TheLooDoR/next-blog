import { IPost } from '../../interfaces/post'

export const GET_POSTS = 'GET_POSTS'
export const GET_POST = 'GET_POST'
export const ADD_POST = 'ADD_POST'

export interface GetPosts {
  type: typeof GET_POSTS
  payload: IPost[]
}

export interface GetPost {
  type: typeof GET_POST
  payload: IPost
}

export interface AddPost {
  type: typeof ADD_POST
  payload: IPost
}

export type PostActionTypes = GetPosts | GetPost | AddPost
