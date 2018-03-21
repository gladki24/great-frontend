export interface IDetails {
  title: string;
  price: string;
  imgSource: string;
  link: string;
  brandName: string;
  logoSource: string;
  categoryName: string;
}

export interface IBrand {
  id: number;
  name: string;
  brandSource: string;
}

export interface ICategories {
  id: number;
  name: string;
}

export interface IRecommended {
  id: string;
  title: string;
  imgSource: string;
}
