import { create } from 'zustand'

enum Tab {
    LORE = 'lore',
    STARQUEST = 'starquest',
    COLLECTION = 'collection',
    CREATORS = 'creators',
}

const useSidebarStore = create((set) => ({
    visible: false,
    currentTab: Tab.LORE,
    setCurrentTab: (tab: Tab) => set((state) => ({ currentTab: state.tab })),
    toggleSidebar: () => set((state) => ({ visible: !state.visible })),
}))

export default useSidebarStore
export { Tab }