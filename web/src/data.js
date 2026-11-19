export const monthlyMetrics = [
  { month:"Dec", revenue:42800, orders:412 }, { month:"Jan", revenue:46200, orders:438 },
  { month:"Feb", revenue:44100, orders:421 }, { month:"Mar", revenue:51800, orders:486 },
  { month:"Apr", revenue:49300, orders:472 }, { month:"May", revenue:55700, orders:519 },
  { month:"Jun", revenue:58400, orders:548 }, { month:"Jul", revenue:56200, orders:531 },
  { month:"Aug", revenue:63100, orders:587 }, { month:"Sep", revenue:65900, orders:614 },
  { month:"Oct", revenue:68800, orders:639 }, { month:"Nov", revenue:74200, orders:681 }
];
export const channelMix = [{name:"Online store",y:48,color:"#7167f8"},{name:"Marketplace",y:29,color:"#38a6d9"},{name:"Direct sales",y:15,color:"#32b98b"},{name:"Partners",y:8,color:"#f0ad4e"}];
export function getPeriodMetrics(rows) {
  if (!Array.isArray(rows) || !rows.length) return { revenue:0, orders:0, averageOrderValue:0 };
  const revenue = rows.reduce((sum,row)=>sum+row.revenue,0);
  const orders = rows.reduce((sum,row)=>sum+row.orders,0);
  return { revenue, orders, averageOrderValue:orders ? revenue/orders : 0 };
}
