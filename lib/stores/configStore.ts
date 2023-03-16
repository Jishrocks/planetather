import { create } from 'zustand'

enum Tab {
    NONE = 'none',
    LORE = 'lore',
    STARQUEST = 'starquest',
    COLLECTION = 'collection',
    CREATORS = 'creators',
}

type State = {
    currentSidebarTab: Tab;
    showStickyFooter: boolean;
    setCurrentSidebarTab: (tab: Tab) => void;
    setShowStickyFooter: (show: boolean) => void;
};

const useConfigStore = create<State>((set) => ({
    currentSidebarTab: Tab.NONE,
    showStickyFooter: false,
    setCurrentSidebarTab: (tab: Tab) => set({ currentSidebarTab: tab }),
    setShowStickyFooter: (show: boolean) => set({ showStickyFooter: show }),
}))

export default useConfigStore
export { Tab }