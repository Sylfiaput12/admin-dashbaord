import { color, motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";
import { div } from "framer-motion/client";

const salesStats ={
    totalRenevue :"$1,234,567",
    avergeOrderValue: "1234",
    conversionRate: "2.5%",
    salesGrowth: "5.4%",
};

const SalesPage = () => {
return(
    <div className="flex-1 overflow-auto relative-z-10">
        <Header title='Sales Dashboard'></Header>

        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
        <StatCard name='Total Sales' icon={DollarSign} value={salesStats.totalRenevue.toLocaleString()} color='#6366F1'></StatCard>
        <StatCard name='Total Order' icon={ShoppingCart} value={salesStats.avergeOrderValue.toLocaleString()} color='#10B981' ></StatCard>
        <StatCard name='Conversion Rate' icon={TrendingUp} value={salesStats.conversionRate.toLocaleString()} color='#F59E0B'></StatCard>
        <StatCard name='Sales Growth' icon={CreditCard} value={salesStats.salesGrowth.toLocaleString()} color='#EF4444'></StatCard>

        </motion.div>

        <SalesOverviewChart/>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<SalesByCategoryChart />
					<DailySalesTrend />
				</div>
        </main>
    </div>
)

}

export default SalesPage;