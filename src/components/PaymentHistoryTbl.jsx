import React from 'react'

const PaymentHistoryTbl = () => {
  return (
    <div className="rounded-lg">
  <table className="md:w-full border border-gray-200 rounded-lg">
    <thead className="bg-gray-100 rounded-lg">
      <tr className='bg-[#9B9B9BCC] text-[#000000]'>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">PAYMENT DATE</th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">PURPOSE</th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">METHOD</th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">STATUS</th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">AMOUNT</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 text-sm text-gray-700">Oct 19, 2025</td>
        <td className="px-6 py-4 text-sm text-gray-700">October Rent-Unit 3B</td>
        <td className="px-6 py-4 text-sm text-gray-700">Credit Card ending in 1234</td>
         <td className="px-6 py-4 text-sm text-gray-700">
            <button className='bg-[#C8FFED] py-2 px-5 rounded-full text-[#00A725]'>Completed</button>
            </td>
             <td className="px-6 py-4 text-sm text-gray-700">$1,500.00</td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 text-sm text-gray-700">Oct 21, 2025</td>
        <td className="px-6 py-4 text-sm text-gray-700">Light Bill - September</td>
        <td className="px-6 py-4 text-sm text-gray-700">Bank Transfer</td>
        <td className="px-6 py-4 text-sm text-gray-700">
            <button className='bg-[#FFE1CC] py-2 px-5 rounded-full text-[#FF6700]'>Pending</button></td>
            <td className="px-6 py-4 text-sm text-gray-700">$75.00</td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 text-sm text-gray-700">Oct 23, 2025</td>
        <td className="px-6 py-4 text-sm text-gray-700">Insurance - 2025</td>
        <td className="px-6 py-4 text-sm text-gray-700">Debit Card ending in 3456</td>
         <td className="px-6 py-4 text-sm text-gray-700">
            <button className='bg-[#C8FFED] py-2 px-5 rounded-full text-[#00A725]'>Completed</button>
            </td>
            <td className="px-6 py-4 text-sm text-gray-700">$750.00</td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 text-sm text-gray-700">Oct 29, 2025</td>
        <td className="px-6 py-4 text-sm text-gray-700">Security  October</td>
        <td className="px-6 py-4 text-sm text-gray-700">Bank Transfer</td>
        <td className="px-6 py-4 text-sm text-gray-700">
            <button className='bg-[#C8FFED] py-2 px-5 rounded-full text-[#00A725]'>Completed</button>
            </td>
            <td className="px-6 py-4 text-sm text-gray-700">$1,750.00</td>
      </tr>
    </tbody>
  </table>

  <div className='flex justify-between'>
    <p>Showing 1-5 of 10</p>
    <p className='border border-1 rounded-lg'>Previous |1 |2 |3 | Next</p>
  </div>
</div>
  )
}

export default PaymentHistoryTbl