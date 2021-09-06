import { useContext as useCtx, createContext } from "react"

export function createStrictContext<T>(
    options: {
        errorMessage?: string
        name?: string
    } = {}
) {
    const Context = createContext<T | undefined>(undefined)

    function useContext() {
        const context = useCtx(Context)
        if (context === undefined) {
            throw new Error("Hook is being used outside of a provider component!")
        }
        return context
    }

    return [Context.Provider, useContext] as [React.Provider<T>, () => T]
}