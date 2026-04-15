import React from 'react'

const PaymentHistoryTbl = () => {
  return (
    <div className="rounded-lg">
  <table className="min-w-full border border-gray-200 rounded-lg">
    <thead className="bg-gray-100 rounded-lg">
      <tr>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">REQUESTED ID</th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">DATE</th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">CATEGORY</th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">STATUS</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 text-sm text-gray-700">#MR-00981</td>
        <td className="px-6 py-4 text-sm text-gray-700">Nov  12, 2025</td>
        <td className="px-6 py-4 text-sm text-gray-700">Plumber</td>
        <td className="px-6 py-4 text-sm text-gray-700">
            <button className='bg-[#FFE1CC] py-2 px-5 rounded-full text-[#FF6700]'>In progress</button></td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 text-sm text-gray-700">#MR-00981</td>
        <td className="px-6 py-4 text-sm text-gray-700">Nov  12, 2025</td>
        <td className="px-6 py-4 text-sm text-gray-700">Electrical</td>
        <td className="px-6 py-4 text-sm text-gray-700">
            <button className='bg-[#223B7E33] py-2 px-5 rounded-full text-[#223B7E]'>Scheduled</button></td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 text-sm text-gray-700">#MR-00981</td>
        <td className="px-6 py-4 text-sm text-gray-700">Nov  12, 2025</td>
        <td className="px-6 py-4 text-sm text-gray-700">Appliances</td>
        <td className="px-6 py-4 text-sm text-gray-700">
            <button className='bg-[#D9D9D9] py-2 px-5 rounded-full text-[#494949]'>Submitted</button>
            </td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 text-sm text-gray-700">#MR-00981</td>
        <td className="px-6 py-4 text-sm text-gray-700">Nov  12, 2025</td>
        <td className="px-6 py-4 text-sm text-gray-700">Extermination</td>
        <td className="px-6 py-4 text-sm text-gray-700">
            <button className='bg-[#C8FFED] py-2 px-5 rounded-full text-[#00A725]'>Completed</button>
            </td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default PaymentHistoryTbl