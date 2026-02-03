import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()

# --- CONFIGURATION ---
# Replace with your actual key if testing locally, but rely on os.getenv for deployment
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY") 

# Configure Google AI
if GOOGLE_API_KEY:
    genai.configure(api_key=GOOGLE_API_KEY)
    model = genai.GenerativeModel('gemini-pro')

# CORS Setup (Allows Frontend to talk to Backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace * with your Netlify URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- DATA MODELS ---
class ChatRequest(BaseModel):
    message: str

class Patient(BaseModel):
    name: str
    age: int
    symptom: str
    is_emergency: bool

# --- IN-MEMORY DATABASE (For Hackathon Simplicity) ---
queue = []

# --- ROUTES ---

@app.get("/")
def home():
    return {"message": "Hospital API is Running"}

# 1. AI Chatbot Endpoint
@app.post("/chat")
async def chat_with_ai(request: ChatRequest):
    if not GOOGLE_API_KEY:
        return {"response": "AI API Key not configured."}
    
    try:
        # Context prompting to make the AI act like a hospital assistant
        prompt = f"You are a helpful hospital receptionist. The user asks: {request.message}. Provide a short, polite, and helpful answer."
        response = model.generate_content(prompt)
        return {"response": response.text}
    except Exception as e:
        return {"response": f"AI Error: {str(e)}"}

# 2. Register Patient Endpoint
@app.post("/register")
def register_patient(patient: Patient):
    token_id = len(queue) + 1
    # Simple logic: Emergency = 0 wait time, Others = 15 mins * people ahead
    wait_time = 0 if patient.is_emergency else len(queue) * 15
    
    ticket = {
        "token": token_id,
        "name": patient.name,
        "priority": "Emergency" if patient.is_emergency else "Normal",
        "wait_time": wait_time
    }
    queue.append(ticket)
    return ticket

# 3. Get Live Queue
@app.get("/queue")
def get_queue():
    return queue
