export interface ItemTag {
  name: string;
}

export interface ItemUser {
  id: string;
  name: string;
  profile_image_url: string;
}

export interface Item {
  id: string;
  likes_count: number;
  tags: ItemTag[];
  title: string;
  updated_at: string;
  user: ItemUser;
}