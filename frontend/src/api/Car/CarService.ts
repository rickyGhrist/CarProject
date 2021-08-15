import { Car } from "../../Models/car";
import { API_BASE, CAR_BASE } from "../ApiConstants";
import { get } from "../RequestService";
import { AxiosResponse } from "axios";

export const getCars = async (): Promise<Array<Car>> => {
  const url = new URL(`${API_BASE}${CAR_BASE}/`);
  const response = (await get(url.toString())) as AxiosResponse;
  if (response.status === 200) {
    return response.data as Array<Car>;
  } else {
    return [] as Array<Car>;
  }
};

export const getCar = (id: string) => {
  const url = new URL(`${API_BASE}${CAR_BASE}/${id}`);
  return get(url.toString());
};