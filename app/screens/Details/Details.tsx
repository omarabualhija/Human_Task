import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useRef} from 'react';
import {HeadingApp} from '../../components';
import {IMovie} from '../../types/Movie.t';
import BottomSheet from '@gorhom/bottom-sheet';
import {height, width} from '../../common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useThemeApp from '../../hooks/useThemeApp';
import {COLORS} from '../../theme';
type Iprops = {
  data: IMovie;
};
const Details = ({data}: Iprops) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const insets = useSafeAreaInsets();
  let {theme} = useThemeApp();
  // variables
  const snapPoints = useMemo(() => [width - 50, height - 50], []);
  return (
    <BottomSheet
      topInset={insets.top * 2}
      ref={bottomSheetRef}
      index={0}
      backgroundStyle={{
        backgroundColor:
          theme === 'dark' ? COLORS.darkBackground : COLORS.background,
      }}
      snapPoints={snapPoints}>
      <View style={{padding: 12, gap: 12}}>
        <View style={styles.row}>
          <HeadingApp size="md">{'Title'}</HeadingApp>
          <HeadingApp size="md">{data?.Title}</HeadingApp>
        </View>
        <View style={styles.row}>
          <HeadingApp size="md">{'rating'}</HeadingApp>
          <HeadingApp size="md">{data?.imdbRating ?? 0}</HeadingApp>
        </View>
        <View style={styles.row}>
          <HeadingApp size="md">{'runtime'}</HeadingApp>
          <HeadingApp size="md">{data?.Runtime ?? 0}</HeadingApp>
        </View>
        <View style={styles.row}>
          <HeadingApp size="md">{'Genre'}</HeadingApp>
          <HeadingApp size="md">{data?.Genre ?? 0}</HeadingApp>
        </View>
        <View style={styles.row}>
          <HeadingApp size="sm">{data?.Plot}</HeadingApp>
        </View>
      </View>
    </BottomSheet>
  );
};

export default Details;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
  },
});
