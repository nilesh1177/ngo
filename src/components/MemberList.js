import React, { useState } from 'react';
import { Search, Filter, Users, Mail, Phone, Calendar, Award } from 'lucide-react';
import { mockMembers, membershipTypes, memberStatuses, mockNGOs } from '../data/mockData';

const MemberList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNGO, setSelectedNGO] = useState('');
  const [selectedMembershipType, setSelectedMembershipType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const filteredMembers = mockMembers.filter(member => {
    const matchesSearch = 
      member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.ngoName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesNGO = !selectedNGO || member.ngoId === selectedNGO;
    const matchesMembershipType = !selectedMembershipType || member.membershipType === selectedMembershipType;
    const matchesStatus = !selectedStatus || member.status === selectedStatus;

    return matchesSearch && matchesNGO && matchesMembershipType && matchesStatus;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedNGO('');
    setSelectedMembershipType('');
    setSelectedStatus('');
  };

  return (
    <div className="container py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Registered Members</h1>
        <p className="text-white text-lg opacity-90">Browse and manage all organization members</p>
      </div>

      {/* Search and Filters */}
      <div className="card mb-8">
        <div className="grid grid-2 gap-4 mb-4">
          <div className="form-group">
            <label className="form-label">Search Members</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, email, or NGO..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input pl-10"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">NGO</label>
            <select
              value={selectedNGO}
              onChange={(e) => setSelectedNGO(e.target.value)}
              className="form-input"
            >
              <option value="">All NGOs</option>
              {mockNGOs.map(ngo => (
                <option key={ngo.id} value={ngo.id}>{ngo.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-2 gap-4 mb-4">
          <div className="form-group">
            <label className="form-label">Membership Type</label>
            <select
              value={selectedMembershipType}
              onChange={(e) => setSelectedMembershipType(e.target.value)}
              className="form-input"
            >
              <option value="">All Types</option>
              {membershipTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="form-input"
            >
              <option value="">All Statuses</option>
              {memberStatuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex-between">
          <div className="text-sm text-gray-600">
            Showing {filteredMembers.length} of {mockMembers.length} members
          </div>
          <button
            onClick={clearFilters}
            className="btn btn-secondary"
          >
            <Filter className="w-4 h-4 mr-2" />
            Clear Filters
          </button>
        </div>
      </div>

      {/* Member Cards */}
      <div className="grid grid-2 gap-6">
        {filteredMembers.map((member) => (
          <div key={member.id} className="card">
            <div className="flex-between mb-4">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-teal-500" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.firstName} {member.lastName}
                  </h3>
                  <p className="text-gray-600 text-sm">{member.email}</p>
                </div>
              </div>
              <span className={`badge ${
                member.status === 'Active' ? 'badge-success' : 
                member.status === 'Pending' ? 'badge-warning' : 'badge-info'
              }`}>
                {member.status}
              </span>
            </div>

            <div className="grid grid-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">NGO</p>
                <p className="font-semibold text-gray-800">{member.ngoName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Membership Type</p>
                <p className="font-semibold text-gray-800">{member.membershipType}</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{member.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Joined: {new Date(member.membershipDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>DOB: {new Date(member.dateOfBirth).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Address</p>
              <p className="text-sm text-gray-800">{member.address}</p>
            </div>

            <div className="border-t pt-4">
              <div className="mb-3">
                <p className="text-sm text-gray-600 mb-2">Skills</p>
                <div className="flex flex-wrap gap-1">
                  {member.skills.map((skill, index) => (
                    <span key={index} className="badge badge-info text-xs">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-2">Interests</p>
                <div className="flex flex-wrap gap-1">
                  {member.interests.map((interest, index) => (
                    <span key={index} className="badge badge-warning text-xs">{interest}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="card text-center">
          <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No Members Found</h3>
          <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
        </div>
      )}
    </div>
  );
};

export default MemberList; 