import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {FC, useRef} from 'react';
import {RootStackScreenProps} from '../../navigation/types';
import {useQuery} from 'react-query';
import {featchDetails} from '../../hooks/Movies';
import Toast, {ItoastRef} from '../../components/toast';
import HeaderApp from '../../components/HeaderApp';
import {IMAGES, width} from '../../common';
import {ErrorApp, HeadingApp, LoadingApp} from '../../components';
import Img from './Img';
import Details from './Details';
interface DetailsProps extends RootStackScreenProps<'Details'> {}

const DetailsScreen: FC<DetailsProps> = ({navigation, route}) => {
  let imdbID = route.params.imdbID;
  let toastRef = useRef<ItoastRef>(null);

  let {isLoading, data, isError} = useQuery(
    ['Details', imdbID],
    () => featchDetails({i: imdbID}),
    {
      onError: error => {
        toastRef.current?.show({txt: 'somthingWrong'});
      },
    },
  );

  return (
    <ScrollView style={{flexGrow: 1}} contentContainerStyle={{flexGrow: 1}}>
      <HeaderApp
        mainTxt={data?.Title}
        onPressBack={() => navigation.goBack()}
      />
      <Img poster={data?.Poster} />
      <Details data={data} />
      <Toast ref={toastRef} />
      <LoadingApp loading={isLoading} />
      <ErrorApp error={isError} />
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
