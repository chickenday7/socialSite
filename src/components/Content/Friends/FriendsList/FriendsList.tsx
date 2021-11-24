import React from "react";


const FriendsList = () => {


    return (
        <div className={'myFriends__list'}>
            <div className={'blockFriend'}>
                <div className={'blockFriend__photo'}>

                </div>
                <div className={'blockFriend__description'}>
                    <div className={'description__name'}>Pavel Permyakov</div>
                    <div className={'description__stat'}>All FINE!</div>
                    <div className={'description__country'}>Russia</div>
                    <div className={'description__city'}>St.Petersburg</div>
                </div>
                <div className={'blockFriend__button'}>
                    <div className={'buttonAdd'}>
                        <div className={'buttonAdd__text'}>
                            FOLLOW
                        </div>
                    </div>
                </div>
            </div>
        </div>


)
}

export default FriendsList;