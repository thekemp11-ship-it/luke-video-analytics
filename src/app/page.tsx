export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Luke Kemp Video Analytics</h1>
          <p className="text-gray-600">Email outreach performance dashboard</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Today's Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600">Emails Today</h3>
            <div className="text-2xl font-bold text-blue-600">12</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600">Opens Today</h3>
            <div className="text-2xl font-bold text-green-600">8</div>
            <div className="text-xs text-gray-500">66% rate</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600">Replies Today</h3>
            <div className="text-2xl font-bold text-purple-600">3</div>
            <div className="text-xs text-gray-500">25% rate</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-600">Hot Leads</h3>
            <div className="text-2xl font-bold text-red-600">2</div>
          </div>
        </div>

        {/* Campaigns */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Campaign Performance</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Austin Real Estate Q1 2026</h3>
                <p className="text-sm text-gray-600">Real Estate • Active</p>
                <div className="grid grid-cols-3 gap-4 mt-2 text-sm">
                  <div><span className="text-gray-500">Prospects:</span> <span className="font-semibold">45</span></div>
                  <div><span className="text-gray-500">Open Rate:</span> <span className="font-semibold">68%</span></div>
                  <div><span className="text-gray-500">Reply Rate:</span> <span className="font-semibold">22%</span></div>
                </div>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold">Texas Law Firms Outreach</h3>
                <p className="text-sm text-gray-600">Law Firms • Active</p>
                <div className="grid grid-cols-3 gap-4 mt-2 text-sm">
                  <div><span className="text-gray-500">Prospects:</span> <span className="font-semibold">23</span></div>
                  <div><span className="text-gray-500">Open Rate:</span> <span className="font-semibold">72%</span></div>
                  <div><span className="text-gray-500">Reply Rate:</span> <span className="font-semibold">31%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
