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
    register: UseFormRegister<Input>
}
export const EditContactsForm = (props: EditContactsFormPropsType) => {
    console.log(Object.entries(props.contacts))
    let listInputsContacts = Object.entries(props.contacts).map(contact => {
        let [key, value] = contact

        // let name: Input = key.value

        return <input {...props.register('contacts')} />

    })


    return (
        <>
            <label>Contacts:</label>

            <input defaultValue={props.contacts.facebook ? props.contacts.facebook : ''}
                   {...props.register('contacts.facebook')} />
            <input defaultValue={props.contacts.github ? props.contacts.github : ''}
                   {...props.register('contacts.github')} />
            <input defaultValue={props.contacts.instagram ? props.contacts.instagram : ''}
                   {...props.register('contacts.instagram')} />
            <input defaultValue={props.contacts.mainLink ? props.contacts.mainLink : ''}
                   {...props.register('contacts.mainLink')} />
            <input defaultValue={props.contacts.twitter ? props.contacts.twitter : ''}
                   {...props.register('contacts.twitter')} />
            <input defaultValue={props.contacts.vk ? props.contacts.vk : ''}
                   {...props.register('contacts.vk')} />
            <input defaultValue={props.contacts.website ? props.contacts.website : ''}
                   {...props.register("contacts.website")} />
            <input defaultValue={props.contacts.youtube ? props.contacts.youtube : ''}
                   {...props.register("contacts.youtube")} />
        </>
    )
}