import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`px-6 py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
