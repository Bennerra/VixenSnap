import instance from "@/api/instance";
import { ICreationCard } from "@/modules/CreationCardForm/models/ICreationCard";

export const creationCard = async (data: ICreationCard) => {
  await instance("/frames/", {
    method: "post",
    data,
  }).catch((e) => {
    // eslint-disable-next-line
    console.log(e);
  });
};
