import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SearchBar = ({ city, onInputChange, onSubmit }) => {
    return (_jsxs("form", { className: "search-bar", onSubmit: onSubmit, children: [_jsx("input", { type: "text", placeholder: "Enter city name...", value: city, onChange: onInputChange, className: "search-input" }), _jsx("button", { type: "submit", className: "search-btn", children: "Search" })] }));
};
export default SearchBar;
