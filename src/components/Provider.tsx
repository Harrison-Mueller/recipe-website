import { createContext, useState, useContext, type ReactNode } from "react";
import type { Meal } from "./RecipeCard";


interface ProviderProps {
    recipeJSONList: Meal[];
    setRecipeJSONList: (recipeJSONList: Meal[]) => void;
}
// Create a UserContext
const UserContext = createContext<ProviderProps | undefined>(undefined);

interface Prov {
    children?: ReactNode
}

function Provider({ children }: Prov) {
    const [recipeJSONList, setRecipeJSONList] = useState<Meal[]>([{ strMeal: "Anjali Sharma" }]);
    return (
        <UserContext.Provider value={{ recipeJSONList, setRecipeJSONList }}>
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