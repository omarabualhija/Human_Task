import {AXIOS} from '../API';
import {API_Key, baseURL} from '../common';
import joinObject from '../utils/joinObj';
type Iprops = {
  page?: number;
  s?: string;
  y?: string;
  filterValue?: IFilterValue;
};
export let fetchMovies = async (props: Iprops) => {
  try {
    let {data} = await AXIOS().get(
      baseURL + '?' + joinObject({...props, apikey: API_Key}),
    );
    return data;
  } catch (error) {
    throw error;
  }
};

type IpropsDetails = {
  i: string;
};
export let featchDetails = async (props: IpropsDetails) => {
  try {
    let {data} = await AXIOS().get(
      baseURL + '?' + joinObject({...props, apikey: API_Key}),
    );
    return data;
  } catch (error) {
    throw error;
  }
};
