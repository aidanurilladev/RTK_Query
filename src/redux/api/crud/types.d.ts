namespace TODO {
  interface ProductType {
    _id?: number;
    name: string;
  }

  type GetResponse = ProductType[];
  type GetRequest = void;

  type PostResponse = ProductType[];
  type PostRequest = ProductType;

  type DeleteResponse = ProductType[];
  type DeleteRequest = string; // _id alanının türü string olarak değiştirildi

  type EditResponse = ProductType[];
  type EditRequest = ProductType;
}
