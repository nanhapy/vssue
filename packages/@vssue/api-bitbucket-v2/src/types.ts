export interface ResponseUser {
  username: string;
  display_name: string;
  nickname: string;
  links: {
    html: {
      href: string;
    };
    avatar: {
      href: string;
    };
  };
}

export interface ResponseIssue {
  id: number;
  title: string;
  content: {
    raw: string;
    markup: string;
    html: string;
    type: string;
  };
  links: {
    html: {
      href: string;
    };
  };
}

export interface ResponseComment {
  id: number;
  user: ResponseUser;
  content: {
    raw: string;
    markup: string;
    html: string;
    type: string;
  };
  created_on: string;
  updated_on: string;
}

export interface ResponsePagination<T> {
  size: number;
  page: number;
  pagelen: number;
  values: T[];
}
