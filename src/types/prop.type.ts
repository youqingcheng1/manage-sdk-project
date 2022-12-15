export interface returnNavModel {
  id: number,
  parent_id: number,
  title: string,
  fe_uri: string,
  list?: returnNavModel[],
  icon?: string
}
