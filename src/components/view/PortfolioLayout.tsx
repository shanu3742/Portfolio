import React from 'react'
import { usePageContext } from './PageView'

const PortfolioLayout = ({ children }) => {
    return <div className='page-view bg-gray-950' >
        {
            children
        }

    </div>
}

export default PortfolioLayout
