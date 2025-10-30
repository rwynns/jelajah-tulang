# 🦴 Jelajah Tulang - Interactive Bone Learning Application

Aplikasi pembelajaran interaktif tentang sistem rangka manusia yang dibangun dengan Next.js 16. Aplikasi ini menyediakan pengalaman belajar yang menarik dengan video pembelajaran, quiz interaktif, dan audio untuk setiap tulang.

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

## ✨ Fitur Utama

### 📚 Tiga Materi Pembelajaran

1. **Tengkorak dan Tulang Belakang**
   - 7 tulang: Tengkorak, Cervical, Thoracal, Lumbal, Sacrum, Coccyx, Vertebrae
2. **Ekstremitas Atas**
   - 6 tulang: Clavicula, Scapula, Humerus, Radius, Ulna, Wrist
3. **Ekstremitas Bawah**
   - 5 tulang: Phalang, Fibula, Tibia, Femur, Pelvis

### 🎯 Fitur Interaktif

#### 🎥 Video Pembelajaran

- Video YouTube terintegrasi dengan autoplay
- Responsive 16:9 aspect ratio
- Controls lengkap (play, pause, fullscreen, quality)

#### 🎮 Hook Quiz (Interactive Bone Selection)

- Klik tulang untuk mendengar nama dan audio
- Hover effects dengan scale dan opacity transitions
- Layout berbeda untuk setiap materi
- Audio feedback untuk setiap tulang

#### 📝 Quiz System

- 5 soal per materi dengan berbagai tipe:
  - Text-based questions
  - Image-based questions
  - Image-based answers
- Sistem scoring otomatis
- Emoji feedback berdasarkan skor (0-5)
- Progress indicator
- Smooth transitions antar soal

### 🎨 Design Features

#### 🌈 Purple Theme

- Konsisten purple gradient (#6836B4, #9333ea)
- Custom blur placeholders untuk loading images
- Background animations

#### ✨ Animations & Transitions

- Typing animation di introduction page
- Smooth page transitions dengan loading states
- Hover effects pada semua interactive elements
- Animated progress bars
- Spinner animations

#### 🔤 Typography

- Google Font "Righteous" di seluruh aplikasi
- Consistent font sizing dan hierarchy

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.0 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4.0
- **Fonts**: Google Fonts (Righteous)
- **Animations**:
  - react-type-animation (untuk typing effect)
  - Tailwind CSS animations
  - Custom CSS @keyframes

## 📁 Project Structure

```
jelajah-tulang/
├── app/
│   ├── page.tsx                          # Home page
│   ├── introduction/                     # Introduction dengan typing animation
│   ├── pilih_kelas/                      # Class selection page
│   ├── tengkorak-dan-tulang-belakang/
│   │   ├── page.tsx                      # Video pembelajaran
│   │   ├── hookquiz/                     # Interactive bone selection
│   │   │   └── page.tsx
│   │   └── quiz/                         # Quiz page
│   │       ├── page.tsx
│   │       └── loading.tsx
│   ├── ekstremitas-atas/
│   │   ├── page.tsx
│   │   ├── hookquiz/
│   │   │   └── page.tsx
│   │   └── quiz/
│   │       ├── page.tsx
│   │       └── loading.tsx
│   ├── ekstremitas-bawah/
│   │   ├── page.tsx
│   │   ├── hookquiz/
│   │   │   └── page.tsx
│   │   └── quiz/
│   │       ├── page.tsx
│   │       └── loading.tsx
│   ├── layout.tsx                        # Root layout dengan Righteous font
│   └── globals.css                       # Global styles & animations
├── lib/
│   └── blur-placeholder.ts               # Purple blur data URL utility
├── public/
│   ├── images/
│   │   ├── hookQuizImages/              # Gambar tulang untuk hook quiz
│   │   │   ├── tengkorak-dan-tulang-belakang/
│   │   │   ├── ekstremitas-atas/
│   │   │   └── ekstremitas-bawah/
│   │   ├── quizImages/                  # Gambar untuk quiz questions/answers
│   │   ├── emojis/                      # Emoji feedback (0.png - 5.png)
│   │   └── [background images, buttons]
│   └── audio/
│       └── hookQuizSounds/              # Audio untuk setiap tulang
│           ├── 1/                       # Tengkorak dan tulang belakang
│           ├── 2/                       # Ekstremitas atas
│           └── 3/                       # Ekstremitas bawah
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x atau lebih tinggi
- npm, yarn, pnpm, atau bun

### Installation

1. Clone repository

```bash
git clone <repository-url>
cd jelajah-tulang
```

2. Install dependencies

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

3. Run development server

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

4. Buka browser di [http://localhost:3000](http://localhost:3000)

### Build untuk Production

```bash
npm run build
npm start
```

## 🎓 User Journey

1. **Home Page** → Klik "Start"
2. **Introduction** → Typing animation + background music → Klik "Next"
3. **Pilih Kelas** → Pilih salah satu dari 3 materi
4. **Video Pembelajaran** → Tonton video YouTube (autoplay)
5. **Hook Quiz** → Klik tulang untuk dengar audio
6. **Quiz** → Jawab 5 soal → Lihat skor dengan emoji feedback
7. Kembali ke Pilih Kelas atau pilih materi lain

## 🎨 Key Features Implementation

### Image Optimization

- Next.js Image component dengan blur placeholder
- Custom purple blur data URL
- Priority loading untuk above-the-fold images
- Responsive sizing dengan w/h classes

### Loading States

- Loading.tsx files di setiap route
- Animated spinner dengan purple theme
- Progress indicators
- Seamless transitions

### Audio Integration

- HTML5 Audio untuk background music
- Audio playback untuk setiap tulang
- m4a format untuk compatibility

### Responsive Design

- Mobile-first approach
- Flexbox layouts
- Responsive video embeds
- Touch-friendly interactive elements

## 🎯 Quiz Features

### Question Types

1. **Text Questions**: Pertanyaan dan jawaban text
2. **Image Questions**: Pertanyaan dengan gambar, jawaban text
3. **Image Answers**: Pertanyaan text, jawaban berupa gambar

### Scoring System

- Real-time scoring
- Emoji feedback (0-5 berdasarkan jawaban benar)
- Pesan motivasi sesuai performa

### Navigation

- Progress indicator (Soal x/5)
- Next button muncul setelah jawaban dipilih
- Automatic scoring dan feedback

## 🎬 Video Integration

### YouTube Embed Features

- Autoplay dengan mute (browser policy compliance)
- 16:9 responsive aspect ratio
- Full screen support
- YouTube controls built-in

### Video Links

- Tengkorak dan Tulang Belakang: `FA4EvjKkuxg`
- Ekstremitas Atas: `_y-p9fXTpK0`
- Ekstremitas Bawah: `dFQbVWu_aqs`

## 🎵 Audio Files

Setiap tulang memiliki audio file terpisah:

- Format: `.m4a`
- Organized by category (1, 2, 3)
- On-click playback
- No autoplay (user interaction required)

## 🌟 Special Features

### Typing Animation

- Introduction page menggunakan react-type-animation
- Multiple sequences dengan delays
- Smooth cursor effect

### Background Music

- Autoplay di introduction page
- Loop playback
- Preload for instant start

### Hover Effects

- Scale transform (110%)
- Opacity changes (70%)
- Smooth transitions (300ms)
- Consistent across all interactive elements

## 📱 Browser Compatibility

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## 🔧 Configuration

### Next.js Config

- TypeScript strict mode
- Tailwind CSS 4.0
- Image optimization
- App Router

### Tailwind Config

- Custom animations
- Purple color palette
- Custom keyframes

## 📄 License

This project is created for educational purposes.

## 👥 Credits

- **Font**: Righteous from Google Fonts
- **Framework**: Next.js by Vercel
- **Styling**: Tailwind CSS
- **Videos**: YouTube embedded content

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, please open an issue in the repository.

---

**Made with ❤️ for learning anatomy interactively**
