import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Building2, TrendingUp, Award, ArrowRight, Plus } from 'lucide-react';
import { mockNGOs, mockMembers } from '../data/mockData';

const Dashboard = () => {
  const totalNGOs = mockNGOs.length;
  const totalMembers = mockMembers.length;
  const activeNGOs = mockNGOs.filter(ngo => ngo.status === 'Active').length;
  const activeMembers = mockMembers.filter(member => member.status === 'Active').length;

  const focusAreaStats = mockNGOs.reduce((acc, ngo) => {
    acc[ngo.focusArea] = (acc[ngo.focusArea] || 0) + 1;
    return acc;
  }, {});

  const topFocusAreas = Object.entries(focusAreaStats)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3);

  return (
    <div className="section">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="heading-1">सावंद ग्रुप डॅशबोर्ड</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            एनजीओ आणि त्यांच्या सदस्यांचे व्यवस्थापन करण्यासाठी व्यापक प्रणाली
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-4 mb-12">
          <div className="stats-card">
            <div className="stats-icon">
              <Building2 className="w-8 h-8" />
            </div>
            <div className="stats-number">{totalNGOs}</div>
            <div className="stats-label">एकूण संस्था</div>
            <div className="mt-4">
              <span className="badge badge-success">{activeNGOs} Active</span>
            </div>
          </div>

          <div className="stats-card">
            <div className="stats-icon">
              <Users className="w-8 h-8" />
            </div>
            <div className="stats-number">{totalMembers}</div>
            <div className="stats-label">एकूण सदस्य</div>
            <div className="mt-4">
              <span className="badge badge-success">{activeMembers} Active</span>
            </div>
          </div>

          <div className="stats-card">
            <div className="stats-icon">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div className="stats-number">
              {Math.round((activeMembers / totalMembers) * 100)}%
            </div>
            <div className="stats-label">सक्रिय दर</div>
            <div className="mt-4">
              <span className="badge badge-info">Membership</span>
            </div>
          </div>

          <div className="stats-card">
            <div className="stats-icon">
              <Award className="w-8 h-8" />
            </div>
            <div className="stats-number">{topFocusAreas.length}</div>
            <div className="stats-label">केंद्रित क्षेत्रे</div>
            <div className="mt-4">
              <span className="badge badge-neutral">Diverse</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card mb-12">
          <div className="flex-between mb-8">
                         <div>
               <h2 className="heading-3">त्वरित कृती</h2>
               <p className="text-muted">नवीन संस्था नोंदवा किंवा सदस्य जोडा</p>
             </div>
          </div>
          <div className="grid grid-2 gap-6">
            <Link to="/register-ngo" className="btn btn-lg w-full justify-center">
              <Building2 className="w-5 h-5" />
                             नवीन संस्था नोंदवा
            </Link>
            <Link to="/register-member" className="btn btn-lg w-full justify-center">
              <Users className="w-5 h-5" />
                             नवीन सदस्य जोडा
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-2 gap-8">
          {/* Recent NGOs */}
          <div className="card">
            <div className="flex-between mb-6">
                             <div>
                 <h2 className="heading-3">अलीकडील संस्था</h2>
                 <p className="text-muted">अलीकडे नोंदवलेल्या एनजीओ</p>
               </div>
              <Link to="/ngos" className="btn btn-outline btn-sm">
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {mockNGOs.slice(0, 3).map((ngo) => (
                <div key={ngo.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{ngo.name}</h4>
                    <p className="text-sm text-muted">{ngo.focusArea}</p>
                  </div>
                  <div className="text-right">
                    <span className={`badge ${
                      ngo.status === 'Active' ? 'badge-success' : 'badge-warning'
                    }`}>
                      {ngo.status}
                    </span>
                    <p className="text-xs text-muted mt-1">{ngo.members} members</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Members */}
          <div className="card">
            <div className="flex-between mb-6">
                             <div>
                 <h2 className="heading-3">अलीकडील सदस्य</h2>
                 <p className="text-muted">अलीकडे नोंदवलेले सदस्य</p>
               </div>
              <Link to="/members" className="btn btn-outline btn-sm">
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {mockMembers.slice(0, 3).map((member) => (
                <div key={member.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">
                      {member.firstName} {member.lastName}
                    </h4>
                    <p className="text-sm text-muted">{member.ngoName}</p>
                  </div>
                  <div className="text-right">
                    <span className={`badge ${
                      member.status === 'Active' ? 'badge-success' : 'badge-warning'
                    }`}>
                      {member.status}
                    </span>
                    <p className="text-xs text-muted mt-1">{member.membershipType}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="card mt-8">
                     <div className="text-center mb-8">
             <h2 className="heading-3">शीर्ष केंद्रित क्षेत्रे</h2>
             <p className="text-muted">सर्वाधिक लोकप्रिय संस्था श्रेणी</p>
           </div>
          <div className="grid grid-3 gap-6">
            {topFocusAreas.map(([area, count], index) => (
              <div key={area} className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{area}</h3>
                <p className="text-2xl font-bold text-gray-700">{count}</p>
                                 <p className="text-sm text-muted">संस्था</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 