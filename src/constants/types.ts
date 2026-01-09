export type UserPostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type ToastProps = {
  title: string,
  type: 'success' | 'error',
  visibilityTime?: number,
}