import React from "react";
import { SearchIcon } from "lucide-react";

export const Search: React.FC = () => {
  return (
    <label className="h-11 w-1/3 rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&:has(:focus-visible)]:ring-ring flex items-center p-0 [&:has(:focus-visible)]:ring-2">
      <span className="sr-only">Search</span>

      <SearchIcon className="size-4" />
      <input
        type="search"
        placeholder="Search"
        className="size-full ml-2 border-none bg-transparent focus:outline-none"
      />
    </label>
  );
};
