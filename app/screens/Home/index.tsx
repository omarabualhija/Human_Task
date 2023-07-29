import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC, useRef, useState} from 'react';
import SearchBox from './SearchBox';
import List from './List';
import Nothing from './Nothing';
import {useMutation} from 'react-query';
import {fetchMovies} from '../../hooks/Movies';
import IdeaSearch from './IdeaSearch';
import Filter from './Filter';
import Toast, {ItoastRef} from '../../components/toast';
import {ErrorApp, LoadingApp} from '../../components';
import {RootStackScreenProps} from '../../navigation/types';
import {ScrollView} from 'react-native-gesture-handler';
import Theme from './Theme';
let page = 1;

interface HomeProps extends RootStackScreenProps<'Home'> {}

const HomeScreen: FC<HomeProps> = ({navigation}) => {
  let [filterValue, setFilterValue] = useState<IFilterValue>();
  let toastRef = useRef<ItoastRef>(null);
  let {
    data: movies,
    isIdle,
    isLoading: loadingMovies,
    isError,
    isSuccess,
    mutate: handleGetSearch,
  } = useMutation('SearchQuery', fetchMovies);
  let handleSearch = (txt: string) => {
    if (txt.length < 3)
      return toastRef?.current?.show({txt: 'mustBe3Character', duration: 3000});
    Keyboard.dismiss();
    handleGetSearch({s: txt, page, ...filterValue});
  };
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 12}}>
      <ScrollView
        style={{flexGrow: 1}}
        contentContainerStyle={{flexGrow: 1, gap: 12}}>
        <Theme />
        <SearchBox onSubmit={handleSearch} />
        <Filter onSelect={(filter: IFilterValue) => setFilterValue(filter)} />
        <List data={movies?.Search ?? []} navigation={navigation} />
        <IdeaSearch isIdle={isIdle} />
        <LoadingApp loading={loadingMovies} />
        <Nothing
          visible={!isIdle && !loadingMovies && !!!movies?.Search?.length}
        />
        <ErrorApp error={isError} />
      </ScrollView>
      <Toast ref={toastRef} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
