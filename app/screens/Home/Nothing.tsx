import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeadingApp } from '../../components'
import { COLORS } from '../../theme'
type Iprops={
    visible:boolean
}
const Nothing = ({visible}:Iprops) => {
  return (
    <>
   {visible&& <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <HeadingApp size="lg" style={{color: COLORS.error}}>
      nothinghere
    </HeadingApp>
  </View>}
  </>
  )
}

export default Nothing

const styles = StyleSheet.create({})