# stemxlearning - EdTech Website

A modern, interactive website for stemxlearning, an edtech startup focused on empowering students aged 9-18 in AI/ML, Web Development, Game Design, and Arduino programming.

## 🚀 Features

- **Interactive Course Cards**: Hover effects that trigger dynamic background animations
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Custom Cursor**: Uses custom cursor image from assets
- **Chat Service**: Floating chat button with chatbot image
- **Dynamic Backgrounds**: Course-specific animations and themes
- **Modern UI/UX**: Professional design with efficient whitespace usage
- **Smooth Animations**: Framer Motion powered interactions
- **Hackathon Focus**: Emphasizes competition and real-world projects

## 🎯 Target Audience

- Students aged 9-18 years
- Parents and educators
- Anyone interested in STEM education
- Future hackathon participants

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Responsive**: Mobile-first design approach

## 📁 Project Structure

```
stemxlearning-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── CourseCard.tsx       # Interactive course cards
│   ├── FeatureCard.tsx      # Feature showcase cards
│   ├── TestimonialCard.tsx  # Student testimonial cards
│   ├── ChatButton.tsx       # Floating chat service
│   └── BackgroundAnimation.tsx # Dynamic background effects
├── asset/                   # Images and assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd stemxlearning-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors and Themes

The website uses a custom color palette defined in `tailwind.config.js`:
- **Primary**: Blue tones (#0ea5e9)
- **Secondary**: Purple tones (#d946ef)
- **Accent**: Orange tones (#f97316)

### Course-Specific Themes

Each course has its own color scheme:
- **AI/ML**: Purple to Pink gradient
- **Web Development**: Blue to Cyan gradient
- **Game Design**: Green to Emerald gradient
- **Arduino**: Orange to Red gradient

### Assets

Place your images in the `asset/` folder:
- `stemxlearning_com_logo.jpeg` - Company logo
- `cursor.png` - Custom cursor
- `chatbot.jpg` - Chat service button
- Course-specific images for each program

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations

- **Hover Effects**: Course cards lift and scale
- **Background Animations**: Dynamic gradients and floating elements
- **Scroll Animations**: Elements animate as they come into view
- **Interactive Elements**: Buttons and cards respond to user interaction

## 🔧 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🌟 Key Features

### Interactive Course Cards
- Hover to see course-specific animations
- Background changes based on course type
- Smooth transitions and micro-interactions

### Dynamic Background
- Responds to course hover states
- Floating geometric shapes
- Course-specific color themes

### Chat Service
- Floating chat button with chatbot image
- Quick action buttons
- Responsive chat interface

### Professional Design
- Efficient whitespace usage
- Modern typography with Inter and Poppins fonts
- Consistent color scheme and spacing

## 🎯 Future Enhancements

- User authentication system
- Course enrollment functionality
- Student dashboard
- Progress tracking
- Live chat integration
- Payment processing
- Multi-language support

## 📄 License

This project is proprietary to stemxlearning. All rights reserved.

## 🤝 Contributing

For internal development and contributions, please follow the established coding standards and component structure.

---

**Built with ❤️ for the next generation of tech innovators**
