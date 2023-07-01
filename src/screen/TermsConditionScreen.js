import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { HeaderCmp, Wrapper } from '../component'
import {  TERMS } from '../utils/constants/Data'
import { gStyles } from '../Style'
import { rw } from '../utils/Dimension'

const TermsConditionScreen = () => {

  const [termsData, setTermsData] = React.useState(TERMS)

  return (
    <Wrapper>
      <HeaderCmp isSearch={false} />

      <FlatList 
        data={termsData}
        renderItem={({ item }) =>
          <View style={{ marginVertical: rw(3), marginHorizontal: rw(4) }}>
            <Text style={gStyles.titleText}>{item.title}</Text>
            <Text style={gStyles.titleDescText}>{item.desc}</Text>
          </View>}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: rw(5),
          width: rw(100)
        }}
      />


    </Wrapper>
  )
}

export default TermsConditionScreen
