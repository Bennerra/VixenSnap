import { IAttachment } from "@/models/IAttachment";

export type IGetCard = {
  id: string;
  name: string;
  owner_id: string;
  short_url: string;
  description: string;
  likes: number;
  is_liked: boolean;
  attachments: IAttachment[];
};
