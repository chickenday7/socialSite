import React from "react";
import {UseFormRegister} from "react-hook-form/dist/types/form";
import {Input, Test} from "./EditProfileForm";


type ContactsType = "contacts.facebook" | "contacts.vk" | "contacts.mainLink"
    | "contacts.github" | "contacts.twitter" | "contacts.youtube" | "contacts.instagram" | "contacts.website"
type EditContactsFormPropsType = {
    contacts: Test
    register: UseFormRegister<Input>
}
export const EditContactsForm = (props: EditContactsFormPropsType) => {
    let listInputsContacts = Object.entries(props.contacts).map(contact => {
        let [key, value] = contact
        key = 'contacts.' + key
        let name: ContactsType = key as ContactsType
        let [contacts, label] = key.split('.')

        return (
            <>
                <label>{label}</label>
                <input defaultValue={value ? value : ''} {...props.register(name as ContactsType)} />
            </>
        )

    })
    return (
        <>
            <label>Contacts:</label>
            {listInputsContacts}
        </>
    )
}