import { useState } from "react";

interface AdminSideBarTypes {
    title?: string;
}

const AdminSideBar: React.FC<AdminSideBarTypes> = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(suggestion);
        setSuggestions([]);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        const mockSuggestions = [
            'User 1',
            'User 2',
            'User 3',
            'John Doe',
            'Jane Doe',
        ];

        const filteredSuggestions = mockSuggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(value.toLowerCase())
        );

        if (filteredSuggestions.length === 0) {
            setSuggestions([]);
        } else {
            setSuggestions(filteredSuggestions);
        }
    };

    return (
        <>
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                {title && <h2>{title}</h2>}
                <input
                    type="text"
                    placeholder="Search users..."
                    value={inputValue}
                    onChange={handleSearchChange}
                />

                {suggestions.length > 0 && (
                    <ul className="suggestions">
                        {suggestions.map((suggestion, index) => (
                            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="overlay" onClick={toggleSidebar}></div>
            </aside>
        </>
    )
}

export default AdminSideBar;