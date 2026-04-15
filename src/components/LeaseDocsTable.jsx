import React from 'react'

const LeaseDocsTable = () => {
  return (
        <div className="rounded-lg mt-10">
  <table className="min-w-full border border-gray-200 rounded-lg">
    <thead className="bg-[#9B9B9BCC] rounded-lg">
      <tr className='rounded-lg'>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600"><input type="checkbox" /></th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">DOCUMENT NAME</th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">PROPERTY ADDRESS</th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">STATUS</th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">DATE UPLOADED</th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">ACTION</th>
      </tr>
    </thead>
    <tbody className="divide-y bg-[#F5F5F5] divide-gray-200">
      <tr className="hover:bg-gray-50">
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600"><input type="checkbox" /></th>
        <td className="px-6 py-4 text-sm text-gray-700">Lease Agreement 2024</td>
        <td className="px-6 py-4 text-sm text-gray-700">123 Wuse II, Apt 3B</td>
        <td className="px-6 py-4 text-sm text-gray-700">
            <button className='bg-[#C8FFED] py-2 px-5 rounded-full text-[#00A725]'>Signed</button>
            </td>
        <td className="px-6 py-4 text-sm text-gray-700">Oct 18, 2025</td>
        <td className="px-6 py-4 text-sm text-blue-700"><a href="#">View Details</a></td>
      </tr>
      <tr className="hover:bg-gray-50">
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600"><input type="checkbox" /></th>
        <td className="px-6 py-4 text-sm text-gray-700">Community Rule</td>
        <td className="px-6 py-4 text-sm text-gray-700">789 Pale Pine Line, Suite c</td>
        <td className="px-6 py-4 text-sm text-gray-700">
            <button className='bg-[#FFE1CC] py-2 px-5 rounded-full text-[#FF6700]'>Pending Signature</button></td>
        <td className="px-6 py-4 text-sm text-gray-700">Dec 12, 2025</td>
        <td className="px-6 py-4 text-sm text-blue-700"><a href="#">View/Sign</a></td>
      </tr>
      <tr className="hover:bg-gray-50">
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600"><input type="checkbox" /></th>
        <td className="px-6 py-4 text-sm text-gray-700">Pet Addendum</td>
        <td className="px-6 py-4 text-sm text-gray-700">567 Oak Avenue, Apt 3</td>
        <td className="px-6 py-4 text-sm text-gray-700">
            <button className='bg-[#95684999] py-2 px-5 rounded-full text-[#B92100]'>Expired</button>
            </td>
        <td className="px-6 py-4 text-sm text-gray-700">Nov 13, 2025</td>
        <td className="px-6 py-4 text-sm text-blue-700"><a href="#">View Details</a></td>
      </tr>
      <tr className="hover:bg-gray-50">
        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600"><input type="checkbox" /></th>
        <td className="px-6 py-4 text-sm text-gray-700">Lease Agreement 2025</td>
        <td className="px-6 py-4 text-sm text-gray-700">123 Wuse II, Apt 3B</td>
        <td className="px-6 py-4 text-sm text-gray-700">
            <button className='bg-[#C8FFED] py-2 px-5 rounded-full text-[#00A725]'>Signed</button>
            </td>
        <td className="px-6 py-4 text-sm text-gray-700">Jun 22, 2025</td>
        <td className="px-6 py-4 text-sm text-blue-700"><a href="#">View Details</a></td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default LeaseDocsTable