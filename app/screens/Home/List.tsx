import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMovie, ISearchResult} from '../../types/Movie.t';
import {IMAGES, width} from '../../common';
import {COLORS, SPACING} from '../../theme';
import {HeadingApp, IconApp} from '../../components';
type Iprops = {
  data: ISearchResult[];
  navigation: any;
};

const List = ({data, navigation}: Iprops) => {
  let Cart = ({item}: {item: ISearchResult}) => (
    <View style={styles.cartBox}>
      <Pressable
        onPress={() =>
          navigation.navigate('Details', {
            imdbID: item.imdbID,
          })
        }
        style={styles.imgBox}>
        <Image
          defaultSource={IMAGES.shared.defaultPoster}
          source={
            item.Poster.includes('N/A')
              ? IMAGES.shared.defaultPoster
              : {uri: item.Poster}
          }
          style={{
            width: 30,
            height: 30,
            resizeMode: 'contain',
            borderRadius: 15,
          }}
        />
        <HeadingApp size="md">{item.Title}</HeadingApp>
      </Pressable>
      <View
        style={[
          styles.sub_Row,
          {
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
          },
        ]}>
        <View style={styles.sub_Row}>
          <HeadingApp size="sm">releaseyear</HeadingApp>
          <HeadingApp size="sm">:</HeadingApp>
          <HeadingApp size="sm">{item.Year}</HeadingApp>
        </View>
        <View style={styles.sub_Row}>
          <HeadingApp size="sm">more</HeadingApp>
          <IconApp name="arrow-right" type="Octicons" />
        </View>
      </View>
    </View>
  );

  return (
    <>
      {!!data.length && (
        <FlatList
          onEndReachedThreshold={1}
          ListFooterComponent={() => <></>}
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: SPACING.sm,
            paddingBottom: 60,
            gap: SPACING.md,
          }}
          style={{flexGrow: 1}}
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => {
            return <Cart item={item} />;
          }}
        />
      )}
    </>
  );
};

export default List;

const styles = StyleSheet.create({
  cartBox: {
    width: width - SPACING.md,
    padding: SPACING.sm,
    borderRadius: SPACING.md,
    backgroundColor: COLORS.white,
    alignItems: 'flex-start',
    gap: 24,
  },
  imgBox: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  sub_Row: {flexDirection: 'row', alignItems: 'center', gap: 12},
});
