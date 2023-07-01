import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { HeaderCmp, Wrapper } from '../component'
import { PRIVACY_POLICY } from '../utils/constants/Data'
import { gStyles } from '../Style'
import { rw } from '../utils/Dimension'

const PrivacyPolicyScreen = () => {

  const [policyData, setPolicyData] = React.useState(PRIVACY_POLICY)

  return (
    <Wrapper>
      <HeaderCmp isSearch={false} />

      <FlatList 
        data={policyData}
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

export default PrivacyPolicyScreen
