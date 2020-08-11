export interface IPost extends INewPost {
  id: number | string
  comments?: IComment[]
}

export interface INewPost {
  title: string
  body: string
}

export interface IComment {
  id: number | string
  body: string
  postId: number | string
}
