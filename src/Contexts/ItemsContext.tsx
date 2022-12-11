import React from "react";
import itemJson from "../../item.json";
import { IItem } from "../Types/ItemTypes";

export const ItemsContext = React.createContext<IItemsContext>({
  items: {},
  setItems: () => {},
});

export interface IItemData {
  [x: string]: IItem;
}

export interface IItemsContext {
  items: IItemData;
  setItems: React.Dispatch<IItemData>;
}

export const UseItemsContext = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const mappedItemJson: {
    [x: string]: IItem;
  } = itemJson.data;
  const [items, setItems] = React.useState<IItemData>(mappedItemJson);

  return (
    <ItemsContext.Provider
      value={{
        items,
        setItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
