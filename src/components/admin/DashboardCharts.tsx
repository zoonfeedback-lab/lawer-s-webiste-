'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

interface DashboardChartsProps {
  activityData: { label: string; count: number }[];
  statusData: { name: string; value: number }[];
}

const COLORS = ['#3b82f6', '#22c55e', '#ef4444', '#f59e0b', '#8b5cf6'];

export default function DashboardCharts({ activityData, statusData }: DashboardChartsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Activity Bar Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-96 flex flex-col">
        <h3 className="text-lg font-semibold text-slate-800 mb-6">Recent Activity (Appointments)</h3>
        <div className="flex-1 w-full">
          {activityData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="label" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex-1 flex items-center justify-center h-full text-slate-400">
              No activity data available.
            </div>
          )}
        </div>
      </div>

      {/* Status Pie Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-96 flex flex-col">
        <h3 className="text-lg font-semibold text-slate-800 mb-6">Appointments by Status</h3>
        <div className="flex-1 w-full">
          {statusData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex-1 flex items-center justify-center h-full text-slate-400">
              No status data available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
