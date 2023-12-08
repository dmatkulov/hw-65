export interface Page {
  id: string;
  title: string;
  content: string;
}

export type ApiPage = Omit<Page, 'id'>;

