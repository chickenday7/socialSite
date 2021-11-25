import React from "react";


const FriendsItem = (props: any) => {
    console.log(props.id)
    let onUnfollow = () => {
        props.unfollow(props.id)
    }
    let onFollow = () => {
        props.follow(props.id)
    }


    return (
        <div className={'blockFriend'}>
            <div className={'blockFriend__photo'}>

            </div>
            <div className={'blockFriend__description'}>
                <div className={'description__name'}>{props.name.firstName} {props.name.lastName}</div>
                <div className={'description__stat'}>{props.status}</div>
                <div className={'description__country'}>{props.location.country}</div>
                <div className={'description__city'}>{props.location.city}</div>
            </div>
            <div className={'blockFriend__button'}>
                {props.followed ?
                    <div  onClick={onUnfollow} className={'buttonAdd'}>
                        <div className={'buttonAdd__text'}>UNFOLLOW</div>
                    </div>
                    :
                    <div onClick={onFollow} className={'buttonAdd'}>
                        <div className={'buttonAdd__text'}>FOLLOW</div>
                    </div>}
            </div>
        </div>
    )
}
export default FriendsItem