import { create } from "zustand";

enum Tab {
    NONE = "none",
    LORE = "lore",
    STARQUEST = "starquest",
    COLLECTION = "collection",
    CREATORS = "creators",
}

type State = {
    currentSidebarTab: Tab;
    showStickyFooter: boolean;
    offsetTop: number;
    setCurrentSidebarTab: (tab: Tab) => void;
    setShowStickyFooter: (show: boolean) => void;
    setOffsetTop: (offsetTop: number) => void;
};

const useConfigStore = create<State>((set) => ({
    currentSidebarTab: Tab.NONE,
    showStickyFooter: false,
    offsetTop: 0,
    setCurrentSidebarTab: (tab: Tab) => set({ currentSidebarTab: tab }),
    setShowStickyFooter: (show: boolean) => set({ showStickyFooter: show }),
    setOffsetTop: (offset: number) => set({ offsetTop: offset }),
}));

export default useConfigStore;
export { Tab };
