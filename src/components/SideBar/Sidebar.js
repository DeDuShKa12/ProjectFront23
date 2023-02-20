import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    const closeSidebar = () => {
        setIsOpen(false);
    }

    return (
        <>
            <SidebarTrigger isOpen={isOpen} onClick={toggleSidebar} />
            <SidebarContent isOpen={isOpen}>
                {children}
                <CloseButton onClick={closeSidebar} />
            </SidebarContent>
        </>
    );
};

const SidebarContent = ({isOpen, children}) => {
    const sidebarClasses = isOpen ? 'sidebar-content open' : 'sidebar-content';

    return (
        <div className={sidebarClasses}>
            {children}
        </div>
    );
}

const SidebarTrigger = ({isOpen, onClick}) => {
    const triggerClasses = isOpen ? 'sidebar-trigger open' : 'sidebar-trigger';

    const buttonClose = 'buttonClose';

    return (
        <div className={triggerClasses} onClick={onClick}>
           <button className={buttonClose}>Жанри</button>
        </div>
    );
}

const CloseButton = ({onClick}) => {
    const buttonClose = 'buttonClose';
    return (
        <button className={buttonClose} onClick={onClick}>
            Close
        </button>
    );
}

export {Sidebar};
