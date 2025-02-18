import React from 'react'
import {motion} from 'framer-motion'
import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard'
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import DailyOrders from '../components/orders/DailyOrders';
import OrderDistribution from '../components/orders/OrderDistribution';
import OrdersTable from '../components/orders/OrdersTable';


const orderStats ={
    totalOrders: "1,234",
    pendingOrders: "23",
    completeOrders: "1,211",
    totalRenevue: "$543,210",
}

const OrdersPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title={'Orders'}></Header>

        <main className='max-x-7xl mx-auto py-6 px-4 lg:px-8'>
            <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial ={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transtion ={{duration: 1}}
            
            >
            <StatCard name='Total Orders' icon={ShoppingBag} value={orderStats.totalOrders} color='#6366F1' />
            <StatCard name='Pending Orders' icon={Clock} value={orderStats.pendingOrders} color='#10B981' />
            <StatCard name='Complete Orders' icon={CheckCircle} value={orderStats.completeOrders} color='#F59E0B' />
            <StatCard name='Total Revenue' icon={DollarSign} value={orderStats.totalRenevue} color='#EF4444' />


            </motion.div>
            <OrdersTable/>
            <div className='grid grid-cols-1 mt-8 lg:grid-cols-2 gap-8 mb-8'>
                <DailyOrders/>
                <OrderDistribution/>
               
            </div>

        </main>

    </div>
  )
}

export default OrdersPage
