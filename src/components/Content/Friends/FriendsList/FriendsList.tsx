import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";
import axios from "axios";


class FriendsList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {
            headers: {
                'API-KEY': '8c93655a-bf70-40c8-9c2a-4929b88b2e49'
            }
        }).then(response => {
            this.props.setUsers(response.data.items)

        });
    }


    render()
    {
        console.log(this.props)
        return <div className={'myFriends__list'}>
            <span>1</span>
            {this.props.friendsPage.map((elem: any) => {
                    return <FriendsItem name={elem.name}
                                        status={elem.status}
                                        location={elem.location}
                                        followed={elem.followed}
                                        key={elem.id}
                                        id={elem.id}
                                        photo={elem.photos}
                                        follow={this.props.follow}
                                        unfollow={this.props.unfollow}

                    />
                })
            }
        </div>
    }
}

export default FriendsList