import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { BottomFullBtnCmp, CenterCmp, HeaderCmp, TextInputCmp, Wrapper } from '../component'
import { gStyles } from '../Style'
import { rw } from '../utils/Dimension'
import { COLORS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setProfile } from '../redux/slices/homeSlice'

const ProfileScreen = ({ navigation }) => {

  const { profile } = useSelector(state => state.home)

  // const [formValues, setFormValues] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  // })
  const dispatch = useDispatch()

  return (
    <>
      <Wrapper>
        <HeaderCmp isSearch={false} />
        <CenterCmp flexDirection="col">
          <FormFieldCmp
            name="Name"
            placeholder="Enter name"
            value={profile.name}
            onChangeText={(text) => dispatch(setProfile({ ...profile, name: text }))}
          />
          <FormFieldCmp
            name="Email"
            placeholder="Enter email"
            value={profile.email}
            onChangeText={(text) => dispatch(setProfile({ ...profile, email: text }))}
          />
          <FormFieldCmp
            name="Phone"
            placeholder="Enter phone"
            value={profile.phone}
            onChangeText={(text) => dispatch(setProfile({ ...profile, phone: text })
            )}
            keyboardType="numeric" maxLength={10} />
          {/* <FormFieldCmp name="Gender" placeholder="Enter gender"
                onChangeText={(text) => setFormValues({ ...formValues, name: text })} />
          <FormFieldCmp name="dob" placeholder="Enter dob" 
                onChangeText={(text) => setFormValues({ ...formValues, name: text })}/> */}
        </CenterCmp>
      </Wrapper>
      <BottomFullBtnCmp title="Save" onPress={() => {
        // if (profile.name.length <= 0 && profile.email.length <= 0 && profile.phone.length <= 0) {
        //   alert("Please fill all fields.")
        //   return
        // }
        dispatch(setProfile(profile))
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
        value={props.value}
        placeholder={props.placeholder} style={{ marginTop: rw(2), minWidth: rw(40), borderColor: COLORS.GREY, }} />
    </View>
  )
}