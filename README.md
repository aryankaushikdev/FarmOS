FarmOS

# 🌾 FarmOS: Intelligence for Every Acre

> Voice-powered AI crop advisor built at the Bolt.New x ElevenLabs Hackathon  
> Powered by [ElevenLabs](https://www.elevenlabs.io/) + [Omi](https://omi.so/) + 🍃 Alluvial soil wisdom from Gravesend, UK

---

## 🚀 Overview

**FarmOS** is a real-time AI-driven agricultural assistant that helps farmers make precise crop decisions based on:
- **Soil health**
- **Weather predictions**
- **Field history**
- **Subsidy eligibility**

And it all begins with **your voice**.

### 🤯 What We Built
- 🧠 **Brain-to-Text Interface**: Omi headset captures real-time brain input
- 🎙️ **Voice-Activated Agent**: ElevenLabs transcribes and speaks recommendations
- 🧬 **Farming Intelligence Core**: Custom logic for soil, crop rotation, and financial optimization
- 📲 **B2C App** (for Farmers): Mobile-first, accessible voice interface
- 🧑‍💼 **B2B Dashboard** (for Agrifinance): Soil-risk-based credit & subsidy recommendations

---

## 🧪 Tech Stack

| Tech         | Usage                                  |
|--------------|-----------------------------------------|
| **Next.js**  | Frontend & serverless functions         |
| **FastAPI**  | Webhook receiver + audio processing     |
| **Omi SDK**  | Bluetooth real-time brain audio stream  |
| **ElevenLabs** | Text-to-Speech + Agent voice responses |
| **Railway**  | Backend deployment                      |
| **Vercel**   | Frontend deployment                     |

---

## 🧠 How It Works

1. 👤 User speaks while wearing Omi headset
2. 📡 Audio stream hits `/audio` endpoint → transcribed & cleaned
3. 🤖 Transcription triggers ElevenLabs Chat API → intelligent crop suggestion
4. 🔊 Agent responds with a realistic AI-generated voice
5. 📈 Suggestion is saved and shown on B2C/B2B dashboard

---

## 🧪 Sample Use Case

> “What should I plant in Plot 26?”

Agent Response (via ElevenLabs):
> _“Spring beans are ideal. Nitrogen depleted. Forecast dry and warm. Profit estimate: £2,189/hectare.”_

🌼 Add a wildflower strip? +£515 subsidy detected ✅

---

## 🛠️ How to Run Locally

bash
# 1. Clone the repo
git clone https://github.com/aryankaushikdev/omi-voice-agent.git
cd omi-voice-agent

# 2. Set up your Python environment (FastAPI backend)
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# 3. Set up ElevenLabs & Deepgram keys
export ELEVENLABS_API_KEY=your_key
export DEEPGRAM_API_KEY=your_key

# 4. Start the FastAPI server
uvicorn main:app --reload

# 5. Run the frontend (Next.js)
cd ../frontend
npm install
npm run dev
