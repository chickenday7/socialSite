import React from "react";
import {UseFormRegister} from "react-hook-form/dist/types/form";
import {Input} from "./EditProfileForm";



type EditContactsFormPropsType = {
    contacts: {
        facebook: null | string
        github: null | string
        instagram: null | string
        mainLink: null | string
        twitter: null | string
        vk: null | string
        website: null | string
        youtube: null | string
    },
    register:UseFormRegister<Input>
}
export const EditContactsForm = (props:EditContactsFormPropsType) => {
  return(
      <>
          <label>Contacts:</label>
          <input defaultValue={props.contacts.facebook ? props.contacts.facebook : '' } {...props.register('contacts.facebook')} />
          <input defaultValue={props.contacts.github ? props.contacts.github : ''} {...props.register('contacts.github')} />
          <input {...props.register('contacts.instagram')} />
          <input {...props.register('contacts.mainLink')} />
          <input {...props.register('contacts.twitter')} />
          <input {...props.register('contacts.vk')} />
          <input {...props.register("contacts.website")} />
          <input {...props.register("contacts.youtube")} />
      </>
  )
}