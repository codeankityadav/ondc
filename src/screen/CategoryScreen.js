import {  FlatList } from 'react-native'
import React from 'react'
import { CategoryBoxCmp, Wrapper } from '../component'
import { rw } from '../utils/Dimension'
import { CATEGORY } from '../utils/constants/Data'

const CategoryScreen = () => {
  return (
    <Wrapper>
      {/* <HeaderCmp isSearch={false} /> */}

      {/* <CenterCmp flexDirection={'col'}>
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
      </CenterCmp> */}


      <FlatList
        numColumns={3}
        data={CATEGORY}
        renderItem={({ item }) => <CategoryBoxCmp title={item.title} imgSrc={item.imgSrc} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: rw(5),
          width: rw(100)
        }}
      />


    </Wrapper>
  )
}

export default CategoryScreen

