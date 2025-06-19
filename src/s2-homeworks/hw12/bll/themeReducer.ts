export type ThemeStateType = {
    themeId: number
}

const initState: ThemeStateType = {
    themeId: 1,
}

export const themeReducer = (
    state = initState,
    action: ThemeActionsType
): ThemeStateType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return { ...state, themeId: action.id }
        default:
            return state
    }
}

// Action type
type ThemeActionsType = ReturnType<typeof changeThemeId>



// Action creator
export const changeThemeId = (id: number) => ({
    type: 'SET_THEME_ID',
    id,
} as const)