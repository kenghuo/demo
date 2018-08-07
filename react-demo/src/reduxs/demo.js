
// init state
const initialState = {
    title: '测试标题'
};

const TITLE = 'demo/change_title';

export function change_title(title){
    return (dispatch: Function) => {
        dispatch({
            type: TITLE,
            title
        });
    };
}

// redux reducer
export default (state: Object = initialState, action: Action) => {
    switch (action.type) {

        case TITLE:
            return { ...state,
                title: action.title
            };

        default:
            return state;
    }
};