import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";
import axios from "axios";


class FriendsList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            headers: {
                'API-KEY': '8c93655a-bf70-40c8-9c2a-4929b88b2e49'
            }
        }).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setCountUsers(response.data.totalCount);

        });

    }
    onCurrentPage = (newCurrentPage:any) => {
        this.props.updatePage(newCurrentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newCurrentPage}&count=${this.props.pageSize}`, {
            headers: {
                'API-KEY': '8c93655a-bf70-40c8-9c2a-4929b88b2e49'
            }
        }).then(response => {
            debugger;
            this.props.setUsers(response.data.items);
        });

    }


    render()
    {
        let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize);
        let arrayCount = [];
        for (let i = 1; i <= pagesCount; i++){
            arrayCount.push(i)
        }


        return <div className={'myFriends__list'}>
            <div className={"pages"}>
            {arrayCount.filter((elem) => {
                if(elem <= 5 ){
                    return elem
                }
                else if (elem > pagesCount - 2){
                    return elem
                }
            }).map((elem) => {
                if (elem === pagesCount - 1){
                    return <span className={'pages__points'}>. . . . . . . .</span>
                }else {
                    return <span className={this.props.currentPage === elem ? "activePage" : 'disabledPage' }
                                 onClick={() => { this.onCurrentPage(elem) } } >{elem}</span>
                }

            })}
            </div>
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