import { useState } from "react";
// Import Lucide React icons
import { LayoutDashboard, BookOpenCheck, BookOpenText, Users, ClipboardList, School, FileEdit, Globe2 } from "lucide-react";
import UserProfileForm from "../StudentsForm/UserProfileForm";
import InPersonCourseForm from "../StudentsForm/InPerson/InPersonCourseForm";
import DistanceDashboard from "../StudentsForm/Distance/DistanceDashboard";
import PaidCourseForm from "../PaidCourse/PaidCourseForm";
import StudentDashboard from "./StudentDashboard";

/**
 * A reusable Button component with Tailwind CSS styling.
 * @param {object} props - The component props.
 * @param {'default' | 'ghost'} props.variant - The visual style of the button.
 * @param {string} props.className - Additional Tailwind CSS classes to apply.
 * @param {function} props.onClick - The click event handler.
 * @param {React.ReactNode} props.children - The content of the button.
 */
const Button = ({ variant = "default", onClick, className = "", children }) => {
    let baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-950 disabled:pointer-events-none disabled:opacity-50";
    let variantStyles = "";

    switch (variant) {
        case "default":
            // Styles for the primary/default button
            variantStyles = "bg-indigo-600 text-white shadow hover:bg-indigo-700";
            break;
        case "ghost":
            // Styles for a subtle, transparent button
            variantStyles = "hover:bg-indigo-100 hover:text-indigo-700 text-gray-700";
            break;
        default:
            // Fallback to default styles if an unknown variant is provided
            variantStyles = "bg-indigo-600 text-white shadow hover:bg-indigo-700";
            break;
    }

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles} ${className} h-9 px-4 py-2`} // Added h-9 px-4 py-2 for consistent sizing
        >
            {children}
        </button>
    );
};

// Navigation items configuration
const NAV_ITEMS = [
    { key: "userForm", label: "UserForm", icon: <BookOpenCheck /> },
    { key: "inPersonCourseForm", label: "In-Person Course Form", icon: <FileEdit /> },    // Corrected key to camelCase
    { key: "inPersonDashboard", label: "In-Person Dashboard", icon: <LayoutDashboard /> }, // Corrected key to camelCas
    { key: "distanceCourseForm", label: "Distance Course Form", icon: <Globe2 /> },
    { key: "distanceDashboard", label: "Distance Dashboard", icon: <ClipboardList /> },
];

export default function AdminPanel() {
    // State to manage the currently active tab/content.
    // Initialized to 'freeCourse' or a logical default for your panel.
    const [activeTab, setActiveTab] = useState("freeCourse");

    // Function to render content based on the active tab
    const renderContent = () => {
        switch (activeTab) {
            case "userForm":
                // You would replace these divs with your actual components
                // import FreeCourseForm from './path/to/FreeCourseForm';
                return <UserProfileForm />;
                return (
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-3">Free Courses Management</h2>
                        <p>This section will contain the form or table to manage free courses.</p>
                        <p className="text-sm text-gray-600 mt-2">

                        </p>
                    </div>
                );
            case "distanceDashboard":
                // import DistanceDashboard from './path/to/DistanceDashboard';
                // return <DistanceDashboard />;
                return (
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-3">Distance Learning Dashboard</h2>
                        <p>This will display the overall dashboard for distance learners.</p>
                        <p className="text-sm text-gray-600 mt-2">
                            Remember to link your `DistanceDashboard` component here.
                        </p>
                    </div>
                );
            case "distanceCourseForm":
                return (
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <PaidCourseForm />
                    </div>
                );

            case "inPersonCourseForm":
                return (
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <InPersonCourseForm />
                    </div>
                );

            case "inPersonDashboard":
                 return <StudentDashboard />;
                return (
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-3">In-Person Dashboard Overview</h2>


                    </div>
                );
            default:
                return (
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-3">Welcome to the Admin Panel!</h2>
                        <p>Select a category from the sidebar to manage courses, users, or view dashboards.</p>
                    </div>
                );
        }
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar Navigation */}
            <div className="w-64 bg-white p-4 border-r border-gray-200 shadow-lg flex flex-col">
                <h2 className="text-3xl font-bold text-indigo-700 mb-6">Admin Panel</h2>
                <div className="space-y-2 flex-grow">
                    {NAV_ITEMS.map((item) => (
                        <Button
                            key={item.key}
                            variant={activeTab === item.key ? "default" : "ghost"}
                            onClick={() => setActiveTab(item.key)}
                            className="w-full justify-start flex items-center gap-2 text-base py-2" // Adjusted padding/font for better appearance
                        >
                            {item.icon} {item.label}
                        </Button>
                    ))}
                </div>
                {/* Optional: Add a logout button or other utility here */}
                {/* <div className="mt-auto pt-4 border-t border-gray-200">
                    <Button variant="ghost" className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700">
                        <LogOut size={20} className="mr-2" /> Logout
                    </Button>
                </div> */}
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 overflow-y-auto bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    {NAV_ITEMS.find((n) => n.key === activeTab)?.label || 'Admin Panel'}
                </h1>
                {renderContent()}
            </div>
        </div>
    );
}
