export type MaterialID = string;

export type Material = {
  id: MaterialID;
  name: string;
  cost: number;
  volume: number;
  color: string;
  deliveryDate: string;
};

export type Materials = Record<MaterialID, Material>;
