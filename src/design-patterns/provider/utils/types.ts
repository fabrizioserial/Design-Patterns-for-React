
type ThemeBodyType = {
    background: string,
    color: string,
}

export type ThemeType = {
    [index: string]:ThemeBodyType
}

export type ContextType = {
    theme: ThemeBodyType,
    toggleTheme: () => void,
}