import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeadingApp } from '../../components'
type Iprops={
    isIdle:boolean
}
const IdeaSearch = ({isIdle}:Iprops) => {
  return (
    <>
    {isIdle&&<View style={{flex:1,justifyContent:"center",alignItems:"center"}}><HeadingApp size='md' style={{textAlign:"center"}}>startSearch</HeadingApp></View>}
    </>
  )
}

export default IdeaSearch

const styles = StyleSheet.create({})