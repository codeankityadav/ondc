import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { CenterCmp, HeaderCmp, ImageTextRowCmp, Wrapper } from '../component'
import { rh, rw } from '../utils/Dimension'
import { CATEGORY, ORDERS_LINKS } from '../utils/constants/Data'

const CategoryScreen = () => {
  return (
    <Wrapper>
      <HeaderCmp isSearch={false} />

      <CenterCmp flexDirection={'col'}>
        <FlatList
          data={CATEGORY}
          renderItem={({ item }) => <ImageTextRowCmp title={item.title} icon={item.icon} />}
          // renderItem={({ item }) => <CategoryBoxCmp title={item.title} imgSrc={item.imgSrc} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            padding: rw(0.2),
            width: rw(100)
          }}
        />
      </CenterCmp>


      {/* <FlatList
        numColumns={4}
        data={CATEGORY} 
        renderItem={({ item }) => <CategoryBoxCmp title={item.title} imgSrc={item.imgSrc} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: rw(0.2),
          width: rw(100)
        }}
      /> */}


    </Wrapper>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({})
