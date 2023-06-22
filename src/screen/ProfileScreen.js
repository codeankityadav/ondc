import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BottomBtnCmp, BottomFullBtnCmp, CenterCmp, HeaderCmp, TextInputCmp, Wrapper } from '../component'
import { gStyles } from '../Style'
import { rw } from '../utils/Dimension'
import { COLORS } from '../utils/constants'

const ProfileScreen = ({ navigation }) => {
  return (
    <>
      <Wrapper>
        <HeaderCmp isSearch={false} />
        <CenterCmp flexDirection="col">
          <FormFieldCmp name="Name" placeholder="Enter name" />
          <FormFieldCmp name="Email" placeholder="Enter email" />
          <FormFieldCmp name="Phone" placeholder="Enter phone" />
          <FormFieldCmp name="Gender" placeholder="Enter gender" />
          <FormFieldCmp name="dob" placeholder="Enter dob" />
        </CenterCmp>
      </Wrapper>
      <BottomFullBtnCmp title="Save" />

    </>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})

const FormFieldCmp = (props) => {
  return (
    <View style={{
      marginTop: rw(5)
    }}>
      <Text style={gStyles.titleText}>{props.name} </Text>
      <TextInputCmp placeholder={props.placeholder} style={{ marginTop: rw(2), minWidth: rw(40), borderColor: COLORS.GREY, }} />
    </View>
  )
}