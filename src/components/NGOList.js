import React, { useState } from 'react';
import { Search, Filter, Building2, Mail, Phone, Globe, MapPin, Calendar, Users } from 'lucide-react';
import { mockNGOs, focusAreas, ngoStatuses } from '../data/mockData';

const NGOList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFocusArea, setSelectedFocusArea] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const filteredNGOs = mockNGOs.filter(ngo => {
    const matchesSearch = ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ngo.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ngo.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFocusArea = !selectedFocusArea || ngo.focusArea === selectedFocusArea;
    const matchesStatus = !selectedStatus || ngo.status === selectedStatus;

    return matchesSearch && matchesFocusArea && matchesStatus;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedFocusArea('');
    setSelectedStatus('');
  };

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="heading-1">नोंदणीकृत संस्था</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            सर्व नोंदणीकृत गैर-सरकारी संस्था पहा आणि व्यवस्थापित करा
          </p>
        </div>

        {/* Search and Filters */}
        <div className="card mb-8">
          <div className="grid grid-2 gap-6 mb-6">
            <div className="form-group">
              <label className="form-label">संस्था शोधा</label>
              <div className="search-container">
                <Search className="search-icon" />
                <input
                  type="text"
                  placeholder="नाव, नोंदणी क्रमांक किंवा ईमेलद्वारे शोधा..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">केंद्रित क्षेत्र</label>
              <select
                value={selectedFocusArea}
                onChange={(e) => setSelectedFocusArea(e.target.value)}
                className="form-input form-select"
              >
                <option value="">सर्व केंद्रित क्षेत्रे</option>
                {focusAreas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-2 gap-6 mb-6">
            <div className="form-group">
              <label className="form-label">स्थिती</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="form-input form-select"
              >
                <option value="">सर्व स्थिती</option>
                {ngoStatuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group flex items-end">
              <button
                onClick={clearFilters}
                className="btn btn-secondary"
              >
                <Filter className="w-4 h-4" />
                फिल्टर साफ करा
              </button>
            </div>
          </div>

          <div className="text-sm text-muted">
            {mockNGOs.length} पैकी {filteredNGOs.length} संस्था दाखवत आहे
          </div>
        </div>

        {/* NGO Cards */}
        <div className="grid grid-2 gap-8">
          {filteredNGOs.map((ngo) => (
            <div key={ngo.id} className="card hover:shadow-xl transition-all duration-300">
              {/* Header */}
              <div className="flex-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="heading-4">{ngo.name}</h3>
                    <p className="text-sm text-muted">{ngo.registrationNumber}</p>
                  </div>
                </div>
                <span className={`badge ${
                  ngo.status === 'Active' ? 'badge-success' : 
                  ngo.status === 'Pending Approval' ? 'badge-warning' : 'badge-info'
                }`}>
                  {ngo.status}
                </span>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-base text-gray-700 mb-3">{ngo.description}</p>
                <p className="text-sm text-muted"><strong>Mission:</strong> {ngo.mission}</p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                                         <p className="text-xs text-muted uppercase font-semibold">केंद्रित क्षेत्र</p>
                    <p className="font-semibold text-gray-900">{ngo.focusArea}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                                         <p className="text-xs text-muted uppercase font-semibold">स्थापना</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(ngo.establishedDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{ngo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{ngo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{ngo.website}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t pt-4">
                <div className="flex-between">
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-muted">{ngo.members} members</span>
                  </div>
                  <div className="text-right">
                                         <p className="text-xs text-muted">पत्ता</p>
                    <p className="text-sm text-gray-600 max-w-xs truncate">{ngo.address}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNGOs.length === 0 && (
          <div className="card text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-12 h-12 text-gray-400" />
            </div>
                         <h3 className="heading-3 mb-2">कोणत्याही संस्था सापडल्या नाहीत</h3>
             <p className="text-muted mb-6">आपली शोध निकष किंवा फिल्टर समायोजित करण्याचा प्रयत्न करा.</p>
             <button
               onClick={clearFilters}
               className="btn btn-outline"
             >
               सर्व फिल्टर साफ करा
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NGOList; 