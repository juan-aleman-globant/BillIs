export type CategoryID = string;

export interface ICategory {
  categoryId: CategoryID;
  name: string;
  icon?: string | null;
}
