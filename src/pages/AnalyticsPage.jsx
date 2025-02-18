import React from 'react'

import Header from '../components/common/Header'

import OverviewCards from '../components/analytics/OverviewCards'
import AIPoweredInsights from '../components/analytics/AIPoweredInsights'
import ChannelPerformance from '../components/analytics/ChannelPerformance'
import CustomerSegmentation from '../components/analytics/CustumerSegmentation'
// import CustomerSegmentation from '../components/analytics/CustumerSegmentation'
import ProductPerformance from '../components/analytics/ProductPerformance'
import RevenueChart from '../components/analytics/RenevueChart'
import UserRetention from '../components/analytics/UserRetention'

const AnalyticsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
      <Header title='Analytics Dashboard' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <OverviewCards/>
        <RevenueChart/>

        <div className='grid grid-cols-1 gap-8'>
            <ChannelPerformance/>
            <ProductPerformance/>
            <UserRetention/>
            <CustomerSegmentation/>

        </div>
        <AIPoweredInsights/>
      </main>
    </div>
  )
}

export default AnalyticsPage
