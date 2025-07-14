# सावंद ग्रुप - Sawaand Group

A modern React application for managing NGO registrations and member memberships with a beautiful, responsive UI.

## Features

### 🏢 NGO Management
- **NGO Registration**: Complete form with validation for registering new organizations
- **NGO Directory**: Browse all registered NGOs with search and filter functionality
- **Detailed Profiles**: View comprehensive information about each NGO including mission, focus areas, and contact details

### 👥 Member Management
- **Member Registration**: Add new members to organizations with detailed profiles
- **Member Directory**: Search and filter members by various criteria
- **Skills & Interests**: Track member skills and interests for better matching

### 📊 Dashboard
- **Statistics Overview**: View key metrics including total NGOs, members, and active rates
- **Recent Activity**: See latest registrations and updates
- **Quick Actions**: Easy access to registration forms

### 🎨 Modern UI/UX
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Styling**: Beautiful gradient backgrounds and card-based layouts
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Search & Filter**: Advanced filtering capabilities for both NGOs and members

## Technology Stack

- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing for seamless navigation
- **Lucide React**: Beautiful, customizable icons
- **CSS Grid & Flexbox**: Modern layout techniques
- **UUID**: Unique identifier generation
- **Mock Data**: Comprehensive sample data for demonstration

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ngo-registration-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.js     # Main dashboard view
│   ├── Navbar.js        # Navigation component
│   ├── NGOList.js       # NGO directory view
│   ├── MemberList.js    # Member directory view
│   ├── NGORegistrationForm.js    # NGO registration form
│   └── MemberRegistrationForm.js # Member registration form
├── data/
│   └── mockData.js      # Mock data and constants
├── App.js              # Main app component with routing
├── index.js            # App entry point
└── index.css           # Global styles
```

## Mock Data

The application includes comprehensive mock data:

### Sample NGOs
- Green Earth Foundation (Environmental Conservation)
- Community Health Initiative (Healthcare)
- Education for All (Education)
- Women Empowerment Network (Women's Rights)
- Youth Development Center (Youth Development)

### Sample Members
- 7 diverse members with different skills and interests
- Various membership types (Regular, Volunteer, Supporter)
- Different focus areas and expertise

## Features in Detail

### NGO Registration Form
- **Validation**: Real-time form validation with error messages
- **Required Fields**: Organization name, registration number, contact info, mission
- **Optional Fields**: Website, additional description
- **Focus Areas**: Dropdown with predefined categories
- **Status Management**: Automatic status assignment

### Member Registration Form
- **Personal Information**: Name, email, phone, address, date of birth
- **Membership Details**: NGO selection, membership type, status
- **Skills & Interests**: Dynamic addition/removal of skills and interests
- **Validation**: Comprehensive form validation

### Search & Filter
- **NGO Search**: By name, registration number, email
- **Member Search**: By name, email, NGO
- **Filter Options**: Focus area, status, membership type
- **Real-time Results**: Instant filtering as you type

### Dashboard Analytics
- **Statistics Cards**: Total NGOs, members, active rates
- **Recent Activity**: Latest registrations
- **Focus Area Distribution**: Top focus areas with counts
- **Quick Actions**: Direct links to registration forms

## Customization

### Adding New Focus Areas
Edit `src/data/mockData.js` to add new focus areas:

```javascript
export const focusAreas = [
  // ... existing areas
  "New Focus Area"
];
```

### Adding New Membership Types
```javascript
export const membershipTypes = [
  // ... existing types
  "New Type"
];
```

### Styling Customization
The app uses CSS classes for styling. Main style categories:
- `.card` - Card containers
- `.btn` - Buttons
- `.form-input` - Form inputs
- `.badge` - Status badges
- `.grid` - Layout grids

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions, please open an issue in the repository or contact the development team.

---

**Built with ❤️ using React and modern web technologies** 