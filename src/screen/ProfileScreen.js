import { Text, View } from 'react-native'
import React, { useState } from 'react'
import {  BottomFullBtnCmp, CenterCmp, HeaderCmp, TextInputCmp, Wrapper } from '../component'
import { gStyles } from '../Style'
import { rw } from '../utils/Dimension'
import { COLORS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { setProfile } from '../redux/slices/homeSlice'

const ProfileScreen = ({ navigation }) => {

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const dispatch = useDispatch()

  return (
    <>
      <Wrapper>
        <HeaderCmp isSearch={false} />
        <CenterCmp flexDirection="col">
          <FormFieldCmp name="Name" placeholder="Enter name"
            onChangeText={(text) => setFormValues({ ...formValues, name: text })} />
          <FormFieldCmp name="Email" placeholder="Enter email"
            onChangeText={(text) => setFormValues({ ...formValues, email: text })} />
          <FormFieldCmp name="Phone" placeholder="Enter phone"
            onChangeText={(text) => setFormValues({ ...formValues, phone: text })}
            keyboardType="numeric" maxLength={10} />
          {/* <FormFieldCmp name="Gender" placeholder="Enter gender"
                onChangeText={(text) => setFormValues({ ...formValues, name: text })} />
          <FormFieldCmp name="dob" placeholder="Enter dob" 
                onChangeText={(text) => setFormValues({ ...formValues, name: text })}/> */}
        </CenterCmp>
      </Wrapper>
      <BottomFullBtnCmp title="Save" onPress={() => {
        if (formValues.name.length <= 0 && formValues.email.length <= 0 && formValues.phone.length <= 0) {
          alert("Please fill all fields.")
          return
        }
        dispatch(setProfile(formValues))
        alert("Succefully Updated Profile Information !")

      }} />

    </>
  )
}

export default ProfileScreen
 

const FormFieldCmp = (props) => {
  return (
    <View style={{
      marginTop: rw(5)
    }}>
      <Text style={gStyles.titleText}>{props.name} </Text>
      <TextInputCmp
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        maxLength={props.maxLength}
        placeholder={props.placeholder} style={{ marginTop: rw(2), minWidth: rw(40), borderColor: COLORS.GREY, }} />
    </View>
  )
}