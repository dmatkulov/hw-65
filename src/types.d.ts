export interface Page {
  id: string;
  title: string;
  content: string;
}

export type ApiPage = Omit<Page, 'id'>;
export interface ApiPages {
  [id: string]: ApiPage;
}