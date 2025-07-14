import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Save, ArrowLeft } from 'lucide-react';
import { focusAreas, ngoStatuses } from '../data/mockData';

const NGORegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    registrationNumber: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    mission: '',
    focusArea: '',
    establishedDate: '',
    status: 'Pending Approval',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Organization name is required';
    }

    if (!formData.registrationNumber.trim()) {
      newErrors.registrationNumber = 'Registration number is required';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.mission.trim()) {
      newErrors.mission = 'Mission statement is required';
    }

    if (!formData.focusArea) {
      newErrors.focusArea = 'Focus area is required';
    }

    if (!formData.establishedDate) {
      newErrors.establishedDate = 'Establishment date is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('NGO Registration Data:', formData);
      alert('NGO registered successfully!');
      navigate('/ngos');
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white hover:text-gray-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
        </div>

        <div className="text-center mb-8">
          <div className="flex-center mb-4">
            <Building2 className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Register New NGO</h1>
          <p className="text-white text-lg opacity-90">Complete the form below to register your organization</p>
        </div>

        <form onSubmit={handleSubmit} className="card">
          <div className="grid grid-2 gap-6">
            {/* Basic Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h3>
              
              <div className="form-group">
                <label className="form-label">Organization Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Enter organization name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label className="form-label">Registration Number *</label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  className={`form-input ${errors.registrationNumber ? 'border-red-500' : ''}`}
                  placeholder="Enter registration number"
                />
                {errors.registrationNumber && <p className="text-red-500 text-sm mt-1">{errors.registrationNumber}</p>}
              </div>

              <div className="form-group">
                <label className="form-label">Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`form-input form-textarea ${errors.address ? 'border-red-500' : ''}`}
                  placeholder="Enter complete address"
                  rows="3"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                  placeholder="Enter phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Enter email address"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label className="form-label">Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter website URL (optional)"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Focus Area *</label>
                <select
                  name="focusArea"
                  value={formData.focusArea}
                  onChange={handleChange}
                  className={`form-input ${errors.focusArea ? 'border-red-500' : ''}`}
                >
                  <option value="">Select focus area</option>
                  {focusAreas.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
                {errors.focusArea && <p className="text-red-500 text-sm mt-1">{errors.focusArea}</p>}
              </div>

              <div className="form-group">
                <label className="form-label">Established Date *</label>
                <input
                  type="date"
                  name="establishedDate"
                  value={formData.establishedDate}
                  onChange={handleChange}
                  className={`form-input ${errors.establishedDate ? 'border-red-500' : ''}`}
                />
                {errors.establishedDate && <p className="text-red-500 text-sm mt-1">{errors.establishedDate}</p>}
              </div>
            </div>
          </div>

          {/* Mission and Description */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Organization Details</h3>
            
            <div className="form-group">
              <label className="form-label">Mission Statement *</label>
              <textarea
                name="mission"
                value={formData.mission}
                onChange={handleChange}
                className={`form-input form-textarea ${errors.mission ? 'border-red-500' : ''}`}
                placeholder="Describe your organization's mission and goals"
                rows="4"
              />
              {errors.mission && <p className="text-red-500 text-sm mt-1">{errors.mission}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Organization Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={`form-input form-textarea ${errors.description ? 'border-red-500' : ''}`}
                placeholder="Provide a detailed description of your organization"
                rows="4"
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn flex-1"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Registering...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Save className="w-5 h-5" />
                  Register NGO
                </div>
              )}
            </button>
            
            <button
              type="button"
              onClick={() => navigate('/')}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NGORegistrationForm; 