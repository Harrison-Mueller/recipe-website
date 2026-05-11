import { createContext, useState, useContext, type ReactNode } from "react";
import type { Meal } from "./RecipeCard";


interface ProviderProps {
    recipeJSONList: Meal[];
    setRecipeJSONList: (recipeJSONList: Meal[]) => void;

    recipeBoardJSON: Meal | null;
    setRecipeBoardJSON: (recipeBoardJSON: Meal | null) => void;

    currentPage: "list" | "board";
    setCurrentPage: (currentPage: "list" | "board") => void;

    listScroll: number;
    setListScroll: (listScroll: number) => void;

    boardScroll: number;
    setBoardScroll: (boardScroll: number) => void;
}
// Create a UserContext
const UserContext = createContext<ProviderProps | undefined>(undefined);

interface Prov {
    children?: ReactNode
}

function Provider({ children }: Prov) {
    const [recipeJSONList, setRecipeJSONList] = useState<Meal[]>([{ strMeal: "Waiting...", idMeal: "0"}]);
    const [recipeBoardJSON, setRecipeBoardJSON] = useState<Meal | null>(null);
    const [currentPage, setCurrentPage] = useState<"list" | "board">("list");
    const [listScroll, setListScroll] = useState<number>(0);
    const [boardScroll, setBoardScroll] = useState<number>(0);

    return (
        <UserContext.Provider value={{ recipeJSONList, setRecipeJSONList, recipeBoardJSON, setRecipeBoardJSON, currentPage, setCurrentPage, listScroll, setListScroll, boardScroll, setBoardScroll }}>
            {children}
        </UserContext.Provider>
    );
};

export const context = () => {
    const context = useContext(UserContext);
    if(context === undefined) {
        throw new Error("UserContext is undefined");
    }
    return context;
};

export default Provider