
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_LIKE = 'ADD_LIKE'

let initialState = {
    postsData:
        [
            {id: 1, news: "the weather in St. Petersburg is suitable for studying", likeCount: 99},
            {id: 2, news: 'tear and sword c:', likeCount: 2},
            {id: 3, news: 'this is my first project on a react!', likeCount: 8},
        ],
    newPostText: '',


}


const profileReducer = (state:any = initialState, action:any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: any = {
                id: state.postsData.length + 1,
                news: state.newPostText,
                likeCount: 0
            }
            state.postsData.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_POST_TEXT:
            state.newPostText = action.postText
            break;
        case ADD_LIKE:
            state.postsData[action.id - 1].likeCount += 1;
            break;
    }
    return state;
}

export default profileReducer;

export const newPostTextActionCreator: any = (text: any) => {
    return {
        type: UPDATE_POST_TEXT,
        postText: text
    }
}

export const newPostAddActionCreator:any = () => {
    return {
        type: ADD_POST
    }
}

export const addLikeActionCreator = (id:any) => {
    return {
        type: ADD_LIKE,
        id: id

    }
}