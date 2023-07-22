import React from 'react';

const Card: React.FC<{content: React.ReactNode}> = ({content}) => {
    return (

        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            {content}
        </a>

    )
}

export default Card